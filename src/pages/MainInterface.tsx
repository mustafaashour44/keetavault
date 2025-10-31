import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainInterface = () => {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [sourceLang, setSourceLang] = useState("ar");
  const [targetLang, setTargetLang] = useState("en");

  // Dictionary for custom translations
  const customDictionary: { [key: string]: { [key: string]: string } } = {
    ar: {
      "عميل": "Customer",
      "العميل": "Customer",
      "مطعم": "Merchant",
      "المطعم": "Merchant",
      "سائق": "Rider",
      "السائق": "Rider",
    },
    en: {
      "customer": "عميل",
      "merchant": "مطعم",
      "rider": "سائق",
    }
  };

  const handleTranslate = () => {
    if (!sourceText.trim()) {
      setTargetText("");
      return;
    }

    let translated = sourceText;
    const dict = customDictionary[sourceLang] || {};
    
    // Apply custom dictionary replacements
    Object.entries(dict).forEach(([key, value]) => {
      const regex = new RegExp(`\\b${key}\\b`, 'gi');
      translated = translated.replace(regex, value);
    });

    setTargetText(translated);
  };

  // Auto-translate when source text or languages change
  useEffect(() => {
    handleTranslate();
  }, [sourceText, sourceLang, targetLang]);

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(targetText);
    setTargetText(sourceText);
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
              placeholder={sourceLang === "ar" ? "إدخال نص..." : "Enter text..."}
              className="min-h-[150px] resize-none"
            />
          </div>

          {/* Swap Button */}
          <div className="flex items-center pt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapLanguages}
              className="rounded-full"
            >
              <ArrowLeftRight className="h-4 w-4" />
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
              placeholder={targetLang === "ar" ? "الترجمة..." : "Translation..."}
              className="min-h-[150px] resize-none bg-muted/30"
            />
          </div>
        </div>
      </Card>

      {/* System Links Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">System Links</h2>
        <div className="grid gap-3">
          {systemLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors group"
            >
              <span className="font-medium">{link.name}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>
      </Card>
    </PageLayout>
  );
};

export default MainInterface;
