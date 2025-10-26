import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Escalation = () => {
  const messages = Array(4).fill(null);

  return (
    <PageLayout
      title="Escalation Messages"
      description="Templates for escalating issues"
    >
      {messages.map((_, index) => (
        <MessageBox key={index} text="" isEmpty={true} />
      ))}
    </PageLayout>
  );
};

export default Escalation;
