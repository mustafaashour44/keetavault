import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const LastConfirm = () => {
  const messages = Array(6).fill(null);

  return (
    <PageLayout
      title="Last Confirm Messages"
      description="Final confirmation templates"
    >
      {messages.map((_, index) => (
        <MessageBox key={index} text="" isEmpty={true} />
      ))}
    </PageLayout>
  );
};

export default LastConfirm;
