import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div className="ml-52 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
