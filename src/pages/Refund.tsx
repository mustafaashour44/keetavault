import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Refund = () => {
  const messages = Array(4).fill(null);

  return (
    <PageLayout
      title="Refund Messages"
      description="Refund process templates"
    >
      {messages.map((_, index) => (
        <MessageBox key={index} text="" isEmpty={true} />
      ))}
    </PageLayout>
  );
};

export default Refund;
