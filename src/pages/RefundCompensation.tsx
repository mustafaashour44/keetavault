import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";
import CategoryBox from "@/components/CategoryBox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RefundCompensation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const refundCompensationMessages = [
    "نعتذر عن التجربة الغير مرضية. يمكننا إعادة المبلغ فوراً بقيمة () ريال سعودي لطلبك. بالإضافة، يمكننا إضافة تعويض بقيمة إجمالية () ريال سعودي إلى حسابك كتعويض",
    "Sorry for the inconvenience. We can refund () SAR for your order right away and apply total of () SAR compensation for you to express our apology",
    "نعتذر بشدة، عزيزي العميل. يمكننا إعادة مبلغ () ريال سعودي لطلبك فوراً، بالإضافة إلى تقديم تعويض بقيمة إجمالية () ريال سعودي تعبيراً عن اعتذارنا.",
    "We deeply apologize, dear customer. We can refund () SAR for your order right away and apply total of () SAR compensation for you to express our apology",
    "أعتذر بصدق عن الإزعاج الذي تسببنا به. سنقوم بمعالجة استرداد المبلغ إلى محفظتك على الفور، وسيكون متاحًا مباشرة. هل تفضل ذلك؟",
    "I sincerely apologize for the inconvenience caused. We will process a refund to your wallet right away, and it will be available immediately. Do you prefer this?",
    "مرحبًا، لقد تم التحقق من أدلتك. سنقوم بإعادة مبلغ () (إلى طريقة الدفع الأصلية الخاصة بك) وتعويض مبلغ () (إلى قسيمتك). شكرًا لك على صبرك!",
    "Hello, your evidence has been verified. We will refund the amount of () to your original payment method and compensate the amount of () to your voucher. Thank you for your patience!",
  ];

  const rulesRefundCompensationMessages = [
    "تمت معالجة عملية الاسترداد وسيظهر المبلغ في حسابك خلال أيام، إذا لم يظهر المبلغ خلال 10 أيام، نرجو الاتصال بالبنك أو المحفظة الخاصة بعملية الدفع لمساعدتك.",
    "Your refund has been processed. The amount would be reflected in your account within a few days. If it hasn't appeared within 10 days, please contact your payment provider for help.",
    "راح نضيف التعويض لمحفظة كيتا الخاصة بك على الفور. الرصيد ما له صلاحية وتقدر تستخدمه على الطلبات المؤهلة.",
    "Your compensation will be added to your Keeta wallet immediately. The balance won't expire and can be used for eligible orders.",
    "إذا تم إلغاء الطلب وكان الكوبون لا يزال ضمن فترة صلاحيته، سيتم إرجاعه للحساب في الحال.",
    "If the order is canceled and the voucher is still within its validity period, it will be returned to the account in real time.",
    "لا يزال الاسترداد ضمن فترة المعالجة، نرجو منك الانتظار بصبر. يمكنك أيضًا الحصول على رقم ARN/RRN من قسم \"تتبع استردادي\" للتواصل مع بنكك المصدر والتحقق من حالة المبلغ.",
    "It's still within the refund process timeline, please wait patiently. You also can have the ARN/RRN in \"track my refund\" to contact your issuer bank to check the status of money.",
  ];

  const renderContent = () => {
    if (selectedCategory === "refundcomp") {
      return (
        <>
          <Button
            variant="outline"
            onClick={() => setSelectedCategory(null)}
            className="mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back
          </Button>
          {refundCompensationMessages.map((message, index) => (
            <MessageBox key={index} text={message} />
          ))}
        </>
      );
    }

    if (selectedCategory === "rules") {
      return (
        <>
          <Button
            variant="outline"
            onClick={() => setSelectedCategory(null)}
            className="mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back
          </Button>
          {rulesRefundCompensationMessages.map((message, index) => (
            <MessageBox key={index} text={message} />
          ))}
        </>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <CategoryBox title="Refund + Compensation" onClick={() => setSelectedCategory("refundcomp")} />
        <CategoryBox title="Refund + Compensation Rules" onClick={() => setSelectedCategory("rules")} />
      </div>
    );
  };

  const getTitle = () => {
    if (selectedCategory === "refundcomp") return "Refund + Compensation";
    if (selectedCategory === "rules") return "Refund + Compensation Rules";
    return "Refund + Compensation Messages";
  };

  return <PageLayout title={getTitle()}>{renderContent()}</PageLayout>;
};

export default RefundCompensation;
