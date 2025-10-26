import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const NoResponse = () => {
  const messages = [
    { text: "مرحبًا! لم نتلق ردك بعد، وسيتم إغلاق المحادثة قريبًا. إذا كان عندك أي استفسار آخر، فلا تتردد في التواصل معنا. شكرًا لك", hasCategory: false },
    { text: "Hello! We still have not received your response, our conversation will be closed very soon. If you have further inquiry please feel free to contact us. Thank you", hasCategory: false },
    { text: "مرحبا عميلنا العزيز سيتم تعويضك تلقائيا على (طريقة دفعك الأصلية) وذلك لانه لم اتلقى منك رد وسيتم إغلاق المحادثة قريبًا. إذا كان عندك أي استفسار آخر، فلا تتردد في التواصل معنا. شكرًا لك", hasCategory: true },
    { text: "Hello dear customer, you will be automatically compensated through your (primary payment method) as I haven't received a response from you. The conversation will be closed soon. If you have any further inquiries, feel free to reach out to us. Thank you!", hasCategory: true },
  ];

  return (
    <PageLayout
      title="No Response Messages"
      description="Messages for when customers don't respond"
    >
      {messages.map((message, index) => (
        <MessageBox 
          key={index} 
          text={message.text}
          category={message.hasCategory ? "" : undefined}
        />
      ))}
    </PageLayout>
  );
};

export default NoResponse;
