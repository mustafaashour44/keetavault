import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Refund = () => {
  const messages = [
    "نعتذر عن التجربة الغير مرضية. يمكننا إعادة المبلغ فوراً بقيمة () ريال سعودي لطلبك",
    "Sorry for the inconvenience. We can refund () SAR for your order right away",
    "عميلنا العزيز سيتم إعادة المبلغ فوراً بقيمة () ريال سعودي لطلبك",
    "I deeply apologize, dear customer. We can refund () SAR for your order immediately.",
  ];

  return (
    <PageLayout
      title="Refund Messages"
      description="Refund process templates"
    >
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default Refund;
