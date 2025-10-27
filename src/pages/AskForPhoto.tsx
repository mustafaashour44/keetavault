import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";

const AskForPhoto = () => {
  const messages = [
    { text: "عزيزي العميل نأسف على المشكلة التي حدثت هل يمكنك إرسال صورة الأكل المسكوب؟ شكراً على تعاونك.", category: "Food spillage/damaged" },
    { text: "We apologize for the bad experience. Can you send a picture of the food spillage? Thanks for your cooperation.", category: "Food spillage/damaged" },
    { text: "علشان نقدر نشوف الموضوع زين ونفهمه صح، ممكن الله لا يهينك ترسل لنا صورة واضحة لوصل الطلب، وصورة ثانية للأكل اللي فيه المشكلة (تكون مبينة التغليف والمشكلة نفسها بوضوح)؟", category: "Food Safety Issues" },
    { text: "To investigate this thoroughly, could you kindly share a clear photo of the order receipt and the affected food item (showing the packaging and the issue clearly)?", category: "Food Safety Issues" },
    { text: "نأسف على المشكلة. ممكن أعرف أي صنف كان خاطئ؟ تقدر ترسل صورة للصنف مع الوصل بنفس الصورة ؟ شكرًا لك", category: "wrong items" },
    { text: "Sorry to hear that, please let me know which item is wrong. Can You Please provide a photo of the receipt and the food together.", category: "wrong items" },
    { text: "نأسف على المشكله، ما هي الأصناف الناقصة؟ لو سمحت عزيزي العميل ان تقوم بتصوير المنتجات التي استلمتها مع الوصل بنفس الصورة؟", category: "missing items" },
    { text: "Sorry to hear that, please let me know which items are missing? Can You Please provide a picture to prove that you will need to take a photo of the receipt and the food together.", category: "missing items" },
    { text: "بنعتذر من حضرتك يرجى تزويدنا بصورة الطعام الذي استلمته مع الفاتورة بنفس الصورة.", category: "food image" },
    { text: "We apologize for the inconvenience. Kindly provide us with a photo of the food you received along with the receipt in the same picture.", category: "food image" },
  ];

  return (
    <PageLayout title="Ask for Photo Messages">
      {messages.map((message, index) => (
        <MessageBox key={index} text={message.text} category={message.category} />
      ))}
    </PageLayout>
  );
};

export default AskForPhoto;
