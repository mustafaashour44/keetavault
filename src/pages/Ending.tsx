import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Ending = () => {
  const messages = [
    "شكراً لتواصلك مع خدمة عملاء كيتا. راح نكون شاكرين لو تقدر تأخذ لحظة لتقييم خدمتنا. شكراً لتعاونك، ونتمنى لك يوماً سعيد",
    "Thank you for contacting Keeta customer service. We appreciate it if you could take a moment to rate our service. ​Have a great day!",
  ];

  return (
    <PageLayout title="Ending Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default Ending;
