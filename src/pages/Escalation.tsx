import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Escalation = () => {
  const messages = [
    "نحن نتحرى الأمر مع الأطراف المعنية، وسنتصل بك في أقرب وقت ممكن. شكراً على صبرك.",
    "We're looking into this with the relevant parties, and will call you as soon as possible. Thanks for your patience.",
    "نحن بصدد تحويل مشكلتك إلى الفريق المختص، وسوف يتواصلون معك قريبًا. نقدر تفهمك.",
    "We are in the process of forwarding your issue to the relevant team, and they will contact you soon. We appreciate your understanding.",
    "نعتذر على الإزعاج. سنتابع مشكلتك وسيقوم أحد أعضاء الفريق بالتواصل معك قريباً. إذا كان لديك أي أسئلة أخرى، لا تتردد في التواصل معنا مرة أخرى. أتمنى لك يوماً سعيداً، وإلى اللقاء",
    "We're sorry for the inconvenience. We'll keep track of your issue and a team member will reach out to you soon. If you have any other questions, feel free to reach out to us again. Have a great day and goodbye",
  ];

  return (
    <PageLayout title="Outbound + Escalation Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default Escalation;
