import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Apologies = () => {
  // First 15 boxes with categories, remaining 26 empty
  const messages = Array(41).fill(null).map((_, index) => {
    if (index < 15) {
      return { isEmpty: false, hasCategory: true };
    }
    return { isEmpty: true, hasCategory: false };
  });

  return (
    <PageLayout
      title="Apologies Messages"
      description="Apology templates for various situations"
    >
      {messages.map((message, index) => (
        <MessageBox 
          key={index} 
          text="" 
          isEmpty={message.isEmpty}
          category={message.hasCategory ? "Purpose/Category" : undefined}
        />
      ))}
    </PageLayout>
  );
};

export default Apologies;
