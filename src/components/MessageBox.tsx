import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MessageBoxProps {
  text: string;
  category?: string;
  isEmpty?: boolean;
}

const MessageBox = ({ text, category, isEmpty = false }: MessageBoxProps) => {
  const handleCopy = () => {
    if (!isEmpty) {
      navigator.clipboard.writeText(text);
      toast({
        description: "Copied to clipboard!",
      });
    }
  };

  return (
    <div className="relative bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
      {category && (
        <div className="mb-3">
          <span className="inline-block text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded">
            {category}
          </span>
        </div>
      )}
      
      <p 
        className={`text-sm leading-relaxed select-all ${
          isEmpty ? "text-muted-foreground italic" : "text-card-foreground"
        }`}
        dir="auto"
      >
        {isEmpty ? "Click to edit and add your message" : text}
      </p>
      
      {!isEmpty && (
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted transition-colors group"
          aria-label="Copy message"
        >
          <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
        </button>
      )}
    </div>
  );
};

export default MessageBox;
