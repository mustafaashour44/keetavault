import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const Hold = () => {
  const messages = [
    { text: "ممكن دقيقة من فضلك عشان أشيك لك على الموضوع؟ شكراً على صبرك." },
    { text: "Could you please give me a minute to check on this for you? Thank you for your patience." },
    { text: "أحتاج إلى دقيقة إضافية لإنهاء العمل المطلوب، وأقدّر تفهمك." },
    { text: "I need an extra minute to complete the required task, and I appreciate your understanding." },
    { text: "سأستغرق دقيقة أخرى للتحقق من التفاصيل، شكرًا على صبرك." },
    { text: "I will take another minute to verify the details. Thank you for your patience." },
    { text: "أحتاج إلى دقيقة إضافية الآن، لكن قد أضطر لطلب وقت إضافي حسب المستجدات." },
    { text: "I need an additional minute now, but I might have to request more time depending on the updates." },
    { text: "ما زال لدي بعض الأمور التي تحتاج إلى دقيقة أخرى للمراجعة، شاكر لتفهمك." },
    { text: "There are still some matters that require another minute for review. I appreciate your understanding." },
    { text: "أحتاج إلى دقيقة أخرى في هذه المرحلة، وإذا احتجت وقتًا إضافيًا سأعلمك." },
    { text: "I need one more minute at this stage, and I will let you know if I require additional time." },
    { text: "سأستغرق دقيقة أخرى في الوقت الحالي، وإذا احتجت إلى وقت إضافي سأخبرك." },
    { text: "I will take another minute for now, and I'll inform you if I need more time." },
    { text: "الرجاء الانتظار دقيقة أخرى حتى أتمكن من إنهاء العمل المطلوب بشكل دقيق، شكرًا لتفهمك." },
    { text: "Please wait one more minute so I can complete the task accurately. Thank you for your understanding." },
    { text: "أحتاج إلى دقيقة إضافية الآن، وإذا لم يكتمل الأمر فقد أطلب وقتًا إضافيًا لاحقًا." },
    { text: "I need an extra minute now, and if the matter is not completed, I may request additional time later." },
    { text: "أحتاج إلى دقيقة أخرى لاستكمال العمل على أكمل وجه، واشكرك على تعاونك." },
    { text: "I need another minute to complete the task properly, and I appreciate your cooperation." },
    { text: "ممكن تعطيني دقيقتين - ثلاث دقائق لاتواصل مع السائق ؟ شكرا لتفهمك وصبرك.", category: "الانتظار لإجراء مكالمة مع السائق" },
    { text: "Could you please give me 2–3 minutes to contact the rider ? Thank you for your understanding and patience.", category: "Hold to call rider" },
    { text: "ممكن تعطيني دقيقتين - ثلاث دقائق لاتواصل مع المطعم ؟ شكرا لتفهمك وصبرك.", category: "الانتظار لإجراء مكالمة مع المطعم" },
    { text: "Could you please give me 2–3 minutes to contact the merchant ? Thank you for your understanding and patience.", category: "Hold to call merchant" },
  ];

  return (
    <PageLayout title="Hold Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message.text} category={message.category} />
      ))}
    </PageLayout>
  );
};

export default Hold;
