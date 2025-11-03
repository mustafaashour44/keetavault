import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftRight, ExternalLink, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const MainInterface = () => {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [sourceLang, setSourceLang] = useState("ar");
  const [targetLang, setTargetLang] = useState("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  // Auto-translate when source text or languages change
  useEffect(() => {
    const translateText = async (retryCount = 0) => {
      if (!sourceText.trim()) {
        setTargetText("");
        setIsTranslating(false);
        return;
      }

      setIsTranslating(true);
      try {
        const { data, error } = await supabase.functions.invoke("translate", {
          body: {
            text: sourceText,
            sourceLang,
            targetLang,
          },
        });

        if (error) {
          console.error("Translation error:", error);
          
          // Retry up to 3 times silently
          if (retryCount < 3) {
            setTimeout(() => translateText(retryCount + 1), 500);
            return;
          }
          
          // Keep previous translation and hide loading
          setIsTranslating(false);
          return;
        }

        if (data?.translatedText) {
          setTargetText(data.translatedText);
        }
        setIsTranslating(false);
      } catch (error) {
        console.error("Translation error:", error);
        
        // Retry up to 3 times silently
        if (retryCount < 3) {
          setTimeout(() => translateText(retryCount + 1), 500);
          return;
        }
        
        setIsTranslating(false);
      }
    };

    const debounceTimer = setTimeout(() => translateText(), 150);
    return () => clearTimeout(debounceTimer);
  }, [sourceText, sourceLang, targetLang]);

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(targetText);
    setTargetText(sourceText);
  };

  const handleCopyText = (text: string) => {
    if (!text.trim()) return;
    
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "تم النسخ / Copied",
        description: "النص منسوخ للحافظة / Text copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "خطأ / Error",
        description: "فشل نسخ النص / Failed to copy text",
        variant: "destructive",
      });
    });
  };

  const [callOption, setCallOption] = useState("no need");
  const [callNote, setCallNote] = useState("");
  const [riskLabel, setRiskLabel] = useState("0RC");
  const [evidence, setEvidence] = useState("no need");
  const [receipt, setReceipt] = useState("No need");
  const [refund, setRefund] = useState("No refund");
  const [refundAmount, setRefundAmount] = useState("");
  const [compensation, setCompensation] = useState("no compensation");
  const [compensationAmount, setCompensationAmount] = useState("");

  const generateCaseSolution = () => {
    let result = "Call, call results; ";
    
    if (callOption === "no need") {
      result += "no needed\n";
    } else {
      result += `${callOption}${callNote ? ` - ${callNote}` : ""}\n`;
    }
    
    result += `Case Solution Risk Label: ${riskLabel}\n`;
    result += `Evidence: ${evidence}\n`;
    result += `Receipt: ${receipt}\n`;
    result += `Refund: ${refund}${refundAmount ? ` (${refundAmount})` : ""}\n`;
    result += `Compensation: ${compensation}${compensationAmount ? ` (${compensationAmount})` : ""}`;
    
    return result;
  };

  const handleCopyCaseSolution = () => {
    const text = generateCaseSolution();
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "تم النسخ / Copied",
        description: "تم نسخ معلومات الحالة / Case solution copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "خطأ / Error",
        description: "فشل نسخ النص / Failed to copy text",
        variant: "destructive",
      });
    });
  };

  const systemLinks = [
    { name: "CSMENA System", url: "https://cstickets.csmena.com/csmenahrms/Odoo/signin.php" },
    { name: "SOP/KB", url: "https://km.sankuai.com/collabpage/2424345262" },
    { name: "Keeservice System", url: "https://keeservice-eu.mykeeta.com/rc/#/login" },
    { name: "Sales Force System", url: "https://login.salesforce.com/" },
    { name: "Daxiang Web", url: "https://ssosv.sankuai.com/sson/login?client_id=xm-xai&locale=en&redirect_uri=https%3A%2F%2Fneixin.meituan.com%2Flogin%2Fsso%2Fcallback%3Foriginal-url%3D%252Flogin%252FloginRedirect%253Ff%253Dweb%2526ai%253D1%2526uuid%253D2ecdc7f0-b6b1-11f0-887f-37cc6b5d8d80%2526redirect_uri%253Dhttps%25253A%25252F%25252Fx.sankuai.com%25252F%25253Fpath%25253D%2525252F&t=1761953256690" },
  ];

  return (
    <PageLayout title="Main Interface" description="Translation tool and system links">
      {/* Translation Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">الترجمة / Translation</h2>
        
        <div className="flex items-start gap-4">
          {/* Source Language */}
          <div className="flex-1 space-y-2">
            <Select value={sourceLang} onValueChange={setSourceLang}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              onClick={() => handleCopyText(sourceText)}
              placeholder={sourceLang === "ar" ? "إدخال نص..." : "Enter text..."}
              className="min-h-[150px] resize-none cursor-pointer"
              title="انقر للنسخ / Click to copy"
            />
          </div>

          {/* Swap Button */}
          <div className="flex items-center pt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapLanguages}
              disabled={isTranslating}
              className="rounded-full"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowLeftRight className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Target Language */}
          <div className="flex-1 space-y-2">
            <Select value={targetLang} onValueChange={setTargetLang}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              value={targetText}
              readOnly
              onClick={() => handleCopyText(targetText)}
              placeholder={targetLang === "ar" ? "الترجمة..." : "Translation..."}
              className="min-h-[150px] resize-none bg-muted/30 cursor-pointer"
              title="انقر للنسخ / Click to copy"
            />
          </div>
        </div>
      </Card>

      {/* Case Soulotion and System Links Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* System Links Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Links</h2>
          <div className="grid gap-2.5">
            {systemLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg border border-border hover:bg-accent/50 transition-colors group text-sm"
              >
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </Card>

        {/* Case Soulotion Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Case Soulotion</h2>
        
          <div className="space-y-4">
            {/* Call */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Call</label>
              <Select value={callOption} onValueChange={(val) => {
                setCallOption(val);
                if (val === "no need") setCallNote("");
              }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no need">No need</SelectItem>
                  <SelectItem value="Merchant">Merchant</SelectItem>
                  <SelectItem value="Rider">Rider</SelectItem>
                </SelectContent>
              </Select>
              {(callOption === "Merchant" || callOption === "Rider") && (
                <Textarea
                  value={callNote}
                  onChange={(e) => setCallNote(e.target.value)}
                  placeholder="نتيجة المكالمة / Call result..."
                  className="min-h-[80px]"
                />
              )}
            </div>

            {/* Risk Label */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Risk Label</label>
              <Select value={riskLabel} onValueChange={setRiskLabel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0RC">0RC</SelectItem>
                  <SelectItem value="1RC">1RC</SelectItem>
                  <SelectItem value="2RC">2RC</SelectItem>
                  <SelectItem value="3RC">3RC</SelectItem>
                  <SelectItem value=">3RC">&gt;3RC</SelectItem>
                  <SelectItem value="RED">RED</SelectItem>
                  <SelectItem value="Purple">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Evidence */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Evidence</label>
              <Select value={evidence} onValueChange={setEvidence}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no need">No need</SelectItem>
                  <SelectItem value="Clear">Clear</SelectItem>
                  <SelectItem value="Unclear">Unclear</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Receipt */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Receipt</label>
              <Select value={receipt} onValueChange={setReceipt}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="No need">No need</SelectItem>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Refund */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Refund</label>
              <Select value={refund} onValueChange={setRefund}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="No refund">No refund</SelectItem>
                  <SelectItem value="Partial Refund">Partial Refund</SelectItem>
                  <SelectItem value="Full Refund">Full Refund</SelectItem>
                </SelectContent>
              </Select>
              {(refund === "Partial Refund" || refund === "Full Refund") && (
                <input
                  type="text"
                  value={refundAmount}
                  onChange={(e) => setRefundAmount(e.target.value)}
                  placeholder="المبلغ / Amount..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              )}
            </div>

            {/* Compensation */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Compensation</label>
              <Select value={compensation} onValueChange={setCompensation}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no compensation">No Compensation</SelectItem>
                  <SelectItem value="Compensation">Compensation</SelectItem>
                  <SelectItem value="Compensation as a voucher">Compensation as a voucher</SelectItem>
                </SelectContent>
              </Select>
              {(compensation === "Compensation" || compensation === "Compensation as a voucher") && (
                <input
                  type="text"
                  value={compensationAmount}
                  onChange={(e) => setCompensationAmount(e.target.value)}
                  placeholder="المبلغ / Amount..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              )}
            </div>

            {/* Generated Result */}
            <div className="mt-6 p-4 rounded-lg border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors" onClick={handleCopyCaseSolution}>
              <pre className="text-sm whitespace-pre-wrap select-all" dir="ltr">
                {generateCaseSolution()}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default MainInterface;
