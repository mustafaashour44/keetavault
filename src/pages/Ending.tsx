import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Ending = () => {
  const messages = Array(2).fill(null);

  return (
    <PageLayout
      title="Ending Messages"
      description="Conversation closing templates"
    >
      {messages.map((_, index) => (
        <MessageBox key={index} text="" isEmpty={true} />
      ))}
    </PageLayout>
  );
};

export default Ending;
