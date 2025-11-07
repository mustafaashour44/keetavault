import { useNavigate } from "react-router-dom";
import CategoryBox from "@/components/CategoryBox";
import PageLayout from "@/components/PageLayout";

const Index = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Select Department">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
    </PageLayout>
  );
};

export default Index;
