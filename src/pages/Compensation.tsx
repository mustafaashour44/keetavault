import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Compensation = () => {
  const messages = [
    "نعتذر بصدق عن التجربة الغير مرضية. للتعبير عن اعتذارنا، يمكننا إضافة مبلغ بقيمة إجمالي () ريال سعودي إلى حسابك",
    "Sorry for the inconvenience. To express our apologies, we can apply a total of () SAR compensation to your account.",
    "نعتذر منك بشدة يا عميلنا العزيز. وللتعبير عن اعتذارنا، سيتم اضافة مبلغ بقيمة إجمالية () ريال سعودي إلى حسابك",
    "We sincerely apologize, dear customer. As a gesture of our apology, we can apply a total of () SAR compensation to your account.",
    "نعتذر منك بشدة يا عميلنا العزيز. وللتعبير عن اعتذارنا، سيتم اضافة قسيمة بقيمة إجمالية () ريال سعودي إلى حسابك",
    "We sincerely apologize, dear customer. As a gesture of our apology, we can apply a total of () SAR Voucher to your account.",
  ];

  return (
    <PageLayout title="Compensation Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message} />
      ))}
    </PageLayout>
  );
};

export default Compensation;
