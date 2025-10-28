import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CategoryBoxProps {
  title: string;
  onClick: () => void;
}

const CategoryBox = ({ title, onClick }: CategoryBoxProps) => {
  return (
    <Card
      className="p-6 cursor-pointer hover:bg-accent/50 transition-colors border-2 hover:border-primary"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </div>
    </Card>
  );
};

export default CategoryBox;
