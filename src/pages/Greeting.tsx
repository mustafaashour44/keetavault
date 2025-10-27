import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Greeting = () => {
  const messages = [
    "مرحبًا، انا () , وانا هنا لمساعدتك.",
    "Hi, I'm (). I'm here to assist you.",
    "وعليكم السلام ورحمة الله وبركاته",
    "Hello dear customer I'm () , how can I help you?",
    "أهلا و سهلا معك () , و انا موجود لمساعدتك.",
    "Welcome dear customer I'm () , and I'll help you for today.",
  ];

  return (
    <PageLayout title="Greeting Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default Greeting;
