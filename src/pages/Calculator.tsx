import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon } from "lucide-react";

const Calculator = () => {
  const [orderPrice, setOrderPrice] = useState("");
  const [itemType, setItemType] = useState("main");
  const [result, setResult] = useState<number | null>(null);

  const calculateCompensation = () => {
    const price = parseFloat(orderPrice);
    if (isNaN(price) || price <= 0) return;

    let compensation = 0;
    switch (itemType) {
      case "main":
        compensation = price * 0.8;
        break;
      case "side":
        compensation = price * 0.5;
        break;
      case "drink":
        compensation = Math.min(price * 0.3, 20);
        break;
      case "cutlery":
        compensation = Math.min(price * 0.1, 5);
        break;
    }
    setResult(compensation);
  };

  const handleReset = () => {
    setOrderPrice("");
    setItemType("main");
    setResult(null);
  };

  return (
    <PageLayout
      title="Missing Item Calculator"
      description="Quick compensation calculator for missing items."
    >
      <div className="bg-card border border-border rounded-lg p-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Order Price (SAR)</label>
            <Input
              type="number"
              placeholder="Enter order price"
              value={orderPrice}
              onChange={(e) => setOrderPrice(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Item Type</label>
            <Select value={itemType} onValueChange={setItemType}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Dish (80%)</SelectItem>
                <SelectItem value="side">Side Dish (50%)</SelectItem>
                <SelectItem value="drink">Drink (30%, max 20 SAR)</SelectItem>
                <SelectItem value="cutlery">Cutlery (10%, max 5 SAR)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-2">
            <Button onClick={calculateCompensation} className="flex-1 bg-primary hover:bg-primary/90">
              <CalcIcon className="w-4 h-4 mr-2" />
              Calculate
            </Button>
            <Button onClick={handleReset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result !== null && (
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-semibold mb-3">Compensation Rules</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><span className="font-medium">Main Dish:</span> 80% of order price</p>
              <p><span className="font-medium">Side Dish:</span> 50% of order price</p>
              <p><span className="font-medium">Drink:</span> 30% of order price (max 20 SAR per item)</p>
              <p><span className="font-medium">Cutlery:</span> 10% of order price (max 5 SAR per item)</p>
            </div>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Compensation Amount</p>
              <p className="text-2xl font-bold text-primary">{result.toFixed(2)} SAR</p>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Calculator;
