import { useNavigate } from "react-router-dom";
import CategoryBox from "@/components/CategoryBox";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold">اختر القسم</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
