import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Compensation = () => {
  const messages = Array(8).fill(null);

  return (
    <PageLayout
      title="Compensation Messages"
      description="Compensation offer templates"
    >
      {messages.map((_, index) => (
        <MessageBox key={index} text="" isEmpty={true} />
      ))}
    </PageLayout>
  );
};

export default Compensation;
