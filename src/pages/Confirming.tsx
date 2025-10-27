import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Confirming = () => {
  const messages = [
    "اسف جدًا على أي إزعاج صار معك. يهمنا تجربتك ونحن هنا لمساعدتك . هل تقصد طلبك الأخير من مطعم () ؟",
    "I'm very sorry for any inconvenience you've experienced. Your satisfaction matters to us, and we're here to help. Are you referring to your most recent order from the restaurant ()?",
  ];

  return (
    <PageLayout title="Confirming Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default Confirming;
