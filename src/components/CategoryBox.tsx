import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CategoryBoxProps {
  title: string;
  onClick: () => void;
}

const CategoryBox = ({ title, onClick }: CategoryBoxProps) => {
  return (
    <Card
      className="aspect-square p-6 cursor-pointer hover:bg-accent/50 transition-colors border-2 hover:border-primary flex items-center justify-center"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </div>
    </Card>
  );
};

export default CategoryBox;
