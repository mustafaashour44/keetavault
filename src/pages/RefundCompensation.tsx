import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const RefundCompensation = () => {
  const messages = Array(12).fill(null);

  return (
    <PageLayout
      title="Refund + Compensation Messages"
      description="Combined refund and compensation templates"
    >
      {messages.map((_, index) => (
        <MessageBox key={index} text="" isEmpty={true} />
      ))}
    </PageLayout>
  );
};

export default RefundCompensation;
