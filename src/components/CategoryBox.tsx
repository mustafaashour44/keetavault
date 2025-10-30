import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CategoryBoxProps {
  title: string;
  onClick: () => void;
}

const CategoryBox = ({ title, onClick }: CategoryBoxProps) => {
  return (
    <Card
      className="aspect-square p-4 cursor-pointer hover:bg-accent/50 transition-colors border-2 hover:border-primary flex items-center justify-center w-full"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </Card>
  );
};

export default CategoryBox;
