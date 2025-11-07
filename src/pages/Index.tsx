import { useNavigate } from "react-router-dom";
import CategoryBox from "@/components/CategoryBox";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="max-w-5xl w-full px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Keeta Vault</h1>
          <p className="text-muted-foreground">Select Department</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryBox
            title="C-Side"
            onClick={() => navigate("/main-interface")}
          />
          <CategoryBox
            title="BD-Side"
            onClick={() => navigate("/bd-side")}
          />
          <CategoryBox
            title="Calls"
            onClick={() => navigate("/calls")}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
