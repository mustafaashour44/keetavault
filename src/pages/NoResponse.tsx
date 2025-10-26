import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const NoResponse = () => {
  const messages = Array(4).fill(null).map((_, index) => {
    if (index >= 2) {
      return { hasCategory: true };
    }
    return { hasCategory: false };
  });

  return (
    <PageLayout
      title="No Response Messages"
      description="Messages for when customers don't respond"
    >
      {messages.map((message, index) => (
        <MessageBox 
          key={index} 
          text="" 
          isEmpty={true}
          category={message.hasCategory ? "Purpose/Category" : undefined}
        />
      ))}
    </PageLayout>
  );
};

export default NoResponse;
