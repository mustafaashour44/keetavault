import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const LastConfirm = () => {
  const messages = [
    "اي خدمه ثانيه يمكنني مساعدتك بها؟",
    "Is there anything else I can help you with?",
    "كان من الجميل مساعدتك اليوم الله يعطيك الف عافيه وصحة هل اتشرف بمساعدتك في أي شيء آخر ؟",
    "It was a pleasure assisting you today. May God bless you with great health and wellness. Is there anything else I can help you with?",
    "تشرفت بحديثي معك عزيزي، اي خدمه ثانيه يمكنني مساعدتك بها؟",
    "It was a pleasure talking with you, dear. Is there anything else I can help you with?",
  ];

  return (
    <PageLayout title="Last Confirm Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default LastConfirm;
