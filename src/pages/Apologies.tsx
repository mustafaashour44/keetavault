import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import MessageBox from "@/components/MessageBox";
import CategoryBox from "@/components/CategoryBox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Apologies = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const basicApologies = [
    { text: "نعتذر بصدق عن الإزعاج. وسنذكر تجارنا بأهمية تقديم وجبات بجودة أعلى مستقبلاً. شركة كيتا ملتزمة بتحسين خدماتها وتقديم تجربة أفضل، و نقدر تفهمك ودعمك المستمر." },
    { text: "We sincerely apologize for the inconvenience. We've reminded our merchants to ensure better meal quality in the future. Keeta is committed to improving and providing a better experience, and we appreciate your understanding and continued support." },
    { text: "نعتذر بصدق عن الإزعاج. وقد ذكرنا السائق بأهمية تقديم خدمات توصيل أفضل مستقبلاً. شركة كيتا ملتزمة بتحسين خدماتها ونقدر دعمك المستمر بينما نعمل على تحسين تجربتك" },
    { text: "We sincerely apologize for the inconvenience. We've reminded the rider to ensure better meal delivery in the future. Keeta is committed to improving and appreciates your support as we work to enhance your experience." },
    { text: "نعتذر بصدق عن الإزعاج. شركة كيتا ملتزمة بتحسين خدماتها وتقديم تجربة أفضل، و نقدر تفهمك ودعمك المستمر." },
    { text: "We sincerely apologize for the inconvenience. Keeta is committed to improving and providing a better experience, and we appreciate your understanding and continued support." },
    { text: "آسف على الإزعاج. نحن نعمل على تحسين تجربتك في الطلبات. شكراً على تفهمك ودعمك المستمر لشركة كيتا." },
    { text: "Sorry for the inconvenience. We're working to improve and enhance your ordering experience. Thank you for your understanding and continued support of Keeta." },
  ];

  const specialCaseApologies = [
    { text: "شكرًا على ملاحظاتك. للأسف، بدون صور للطعام ، ما نقدر نحدد تفاصيل المشكلة. في المستقبل، يرجى الاحتفاظ بأي دليل يساعدنا في حل المشكلة بشكل أكثر فعالية. شكرًا لك" },
    { text: "Thank you for your feedback. Unfortunately, without photos of the food, we can't determine the details of the issue. In the future, please keep any evidence that can help us resolve the issue more effectively. Thank you." },
    { text: "أعتذر بشدة على المشكلة التي واجهتك، فأنت عميل محترم وعزيز علينا. ربي يسلمك، وكنت أتمنى تواصلك معنا في وقت أبكر حتى نتمكن من حل المشكلة فورًا وتقديم أفضل خدمة لك." },
    { text: "I sincerely apologize for the issue you faced. You are a valued and respected customer. God bless you, and I truly wish you had contacted us earlier so we could have resolved the issue immediately and provided you with the best possible service." },
    { text: "نأسف جدًا للتجربة السيئة. سنقوم بإبلاغ المطعم بالمشكلة، ونتطلع إلى تقديم تجربة أفضل لك في المرة القادمة." },
    { text: "We are very sorry for the bad experience, we will report the problem to the restaurant, and look forward to providing you with a better experience next time." },
    { text: "نأسف جدًا، ولكن الوجبة مُعدة وفقًا لمعايير ثابتة ولا يمكن تعديلها حسب طلبك. سنقوم بإبلاغ المطعم بذلك من أجل التحسين المستمر." },
    { text: "We are very sorry, but the meal is a standardized meal and cannot be made according to your requirements. We will feed back to the restaurant for continuous improvement." },
    { text: "لقد قمنا بتسجيل ملاحظة في صفحة الملاحظات تفيد بأن المطعم قد لا يتمكن من تنفيذ الطلب وفقًا لطلباتك، ولن يُعتبر ذلك أساسًا لاسترداد الأموال أو التعويض." },
    { text: "We have made a reminder on the remarks page that the restaurant may not be able to make it according to your requirements, which will not be used as the basis for refund and compensation." },
  ];

  const handlingCustomer = [
    { text: "أعتذر بصدق عن الإزعاج الذي حدث. سنقوم بإبلاغ المشكلة إلى السائق لتحسين الخدمة، ونأمل أن نقدم لك خدمة أفضل في المرة القادمة." },
    { text: "I sincerely apologize for the inconvenience caused. We will feedback the problem to the rider for improvement, and hope to provide you with better service next time" },
    { text: "أعتذر بصدق عن الإزعاج الذي حدث. سنقوم بإبلاغ المطعم بالمشكلة لتحسين الخدمة، ونأمل أن نقدم لك خدمة أفضل في المرة القادمة." },
    { text: "I sincerely apologize for the inconvenience caused. We will feedback the problem to the merchant for improvement, and hope to provide you with better service next time" },
    { text: "عزيزي العميل، نأسف لتجربتك الغير مرضية. نُقدّر تواصلك ونعتذر عن الإزعاج الذي حصل. نشكرك على ملاحظتك." },
    { text: "Dear Customer, we are sorry to hear about your unsatisfactory experience. We appreciate your feedback and apologize for the inconvenience caused. Thank you for your note." },
    { text: "أتعاطف تمامًا معك بشأن تجربتك الأخيرة. أقدر إبلاغك لنا بذلك، ونحن ملتزمون بتحسين الوضع ان شاء الله." },
    { text: "I completely empathize with your frustration regarding your recent experience. I appreciate you bringing this to our attention, and we're committed to improving." },
    { text: "أعتذر عن التأخير في الرد عليك. أفهم مدى أهمية التواصل في الوقت المناسب، وأقدر صبرك بينما يتم التعامل مع مشكلتك بأسرع وقت." },
    { text: "I apologize for the delay in getting back to you. I understand how important timely communication is, and I appreciate your patience as we address your concerns." },
    { text: "أريدك أن تعرف أننا نأخذ ملاحظاتك على محمل الجد. أعتذر عن أي إزعاج واجهته، ونحن هنا للعمل على جعل تجاربك المستقبلية أفضل إن شاء الله." },
    { text: "I want you to know that we take your feedback seriously. I apologize for any inconvenience you have experienced, and we are here to work on making your future experiences better, God willing." },
    { text: "يضيق صدرنا نسمع كذا منك، خصوصًا إنك من عملائنا المميزين، وما نبي أبدًا نخسرك بسبب أي خطأ. نتمنى تظل معانا دايمًا، وحنا مستعدين نخدمك في المستقبل بأفضل طريقة ممكنة ان شاء الله." },
    { text: "It truly saddens us to hear this from you, especially since you are one of our valued customers, and we absolutely don't want to lose you over any mistake. We hope you'll always stay with us, and we're ready to serve you anytime you need us." },
  ];

  const fullApologies = [
    { text: "نعتذر من أعماق قلبنا عن أي إزعاج قد تسببت به تجربتك، ونحن نقدر تماماً مشاعرك. نحن نأخذ ملاحظاتك بكل جدية ونعمل جاهدين على نقلها إلى المطعم لتحسين الخدمة وتقديم الأفضل دائمًا. هدفنا هو أن نمنحك تجربة استثنائية تتناسب مع توقعاتك وتفوقها في المستقبل. نحن نسعى دائماً لإرضائك، ونتمنى أن نتمكن من استعادة ثقتك الغالية فينا. شكراً لك على دعمك وصبرك، وسنواصل العمل بجد ليكون مستوى تجربتك القادمة أفضل إن شاء الله." },
    { text: "We sincerely apologize for any inconvenience your experience may have caused, and we deeply value your feelings. We take your feedback very seriously and are working hard to pass it on to the restaurant to improve the service and provide the best at all times. Our aim is to offer you an exceptional experience that meets and exceeds your expectations in the future. We always strive to satisfy you, and we hope to regain your valuable trust in us. Thank you for your support and patience, and we will continue working hard so that your next experience will be at a better level, God willing." },
    { text: "نعتذر بصدق عن أي إزعاج قد تسببت به تجربتك معنا، ونقدر ملاحظاتك التي تساعدنا في التحسين. سيتم نقلها إلى المطعم للمساهمة في تقديم خدمة أفضل إن شاء الله. هدفنا هو أن نمنحك تجربة مميزة، ونسعى جاهدين لاستعادة ثقتك بنا. شكرًا لصبرك ودعمك، ونتطلع إلى خدمتك مجددًا بتجربة أفضل." },
    { text: "We sincerely apologize for any inconvenience your experience with us may have caused, and we truly value your feedback that helps us improve. It will be shared with the restaurant to contribute to providing better service, God willing. Our aim is to offer you a special experience that exceeds your expectations, and we strive to regain your trust. Thank you for your patience and support, and we look forward to serving you again with an even better experience." },
    { text: "نأسف لعدم تلبية توقعاتك هذه المرة، ونشكرك على إبلاغنا بملاحظاتك. نأخذ كل الملاحظات على محمل الجد ونعمل على تحسين خدماتنا باستمرار. نأمل أن تمنحنا فرصة أخرى لنقدم لك تجربة تفوق تطلعاتك في المستقبل." },
    { text: "We truly apologize if your experience did not meet your expectations. Customer satisfaction is at the heart of what we do, and we are constantly working on refining our service. We hope to have the opportunity to serve you again under better circumstances." },
    { text: "نحن آسفون لأن تجربتك لم تكن بالمستوى الذي نطمح إليه. نقدر ملاحظاتك ونعمل باستمرار على تطوير الخدمة. شكراً على تفهمك، ونتمنى أن نراك قريبًا بتجربة أكثر تميزًا" },
    { text: "We are sorry that your experience was not at the level we strive for. We appreciate your feedback and continuously work on improving our service. Thank you for your understanding, and we hope to see you again soon with a more distinguished experience." },
    { text: "نعتذر من أعماق قلبنا عن أي إزعاج قد تسببت به تجربتك، ونحن نقدر تماماً مشاعرك. نحن نأخذ ملاحظاتك بكل جدية ونعمل جاهدين على نقلها إلى المطعم لتحسين الخدمة وتقديم الأفضل دائمًا. هدفنا هو أن نمنحك تجربة استثنائية تتناسب مع توقعاتك وتفوقها في المستقبل ان شاء الله." },
    { text: "We sincerely apologize from the bottom of our hearts for any inconvenience your experience may have caused, and we truly value your feelings. We take your feedback very seriously and are working diligently to share it with the restaurant to improve the service and always deliver the best. Our goal is to provide you with an exceptional experience that meets and, God willing, exceeds your expectations in the future." },
    { text: "بنعتذر من حضرتك عميلنا العزيز نحن ملتزمون تماماً لإرضائك، ونتمنى أن نتمكن من استعادة ثقتك الغالية فينا. شكراً لك على دعمك وصبرك، وسنحرص على العمل بجد لتكون تجربتك القادمة أفضل ان شاء الله." },
    { text: "We sincerely apologize to you, our valued customer. We are fully committed to your satisfaction and hope to regain your precious trust in us. Thank you for your support and patience, and we promise to keep working hard to ensure that, God willing, your next experience will be much better." },
    { text: "اؤكد بأنني متفهم استياء حضرتك على التجربة الغير مرضية ونحن نقدم لك كامل الاعتذار، لقد تم أخذ ملاحظتك بعين الاعتبار، بتمنى تقبل اعتذارنا و ان لا يعكس أي انطباع سلبي. سنعمل على تحسين الخدمة بإذن الله عز وجل لك في المرات القادمة" },
    { text: "We sincerely apologize for any inconvenience or disappointment you have encountered. We appreciate the time you took to share your feedback, as it helps us enhance our service. We hope to have the opportunity to serve you better in the future." },
    { text: "نأسف لأن تجربتك لم تكن كما توقعت، فنحن نحرص على تقديم الأفضل دائمًا. ملاحظاتك ستساعدنا في التحسين، وسنسعى جاهدين لإرضائك. شكرًا لدعمك، ونتمنى أن تكون تجربتك القادمة أكثر راحة وسعادة." },
    { text: "We are sorry that your experience was not as you expected, as we always strive to provide the best. Your feedback will help us improve, and we will do our best to satisfy you. Thank you for your support, and we hope your next experience will be more comfortable and enjoyable." },
    { text: "نعتذر عن أي إزعاج قد تسببت به هذه التجربة، فهدفنا هو تقديم خدمة ترضيك بالكامل. نحن نأخذ ملاحظاتك على محمل الجد ونعمل على تحسين الجودة باستمرار. شكراً لتفهمك، وسنبذل جهدنا لجعل تجربتك القادمة أكثر إرضاءً." },
    { text: "We are truly sorry for any disappointment you may have felt. Your experience is important to us, and we are implementing necessary improvements to prevent any recurrence of this issue. Thank you for your feedback and for allowing us the chance to enhance our service." },
    { text: "نأسف لأي إزعاج قد واجهته، ونشكرك على ملاحظاتك القيمة. نحن نأخذ رضاك بجدية ونعمل باستمرار على تحسين مستوى الخدمة. نأمل أن تمنحنا فرصة أخرى لنقدم لك تجربة أفضل في المستقبل." },
    { text: "We regret that your experience did not reflect the high standards we strive for. Please rest assured that we are working hard to prevent similar occurrences in the future. We greatly appreciate your understanding and the opportunity to make things better." },
    { text: "نعتذر عن أي تقصير حدث، ونتفهم أهمية تجربتك معنا. نحن نأخذ ملاحظاتك بعين الاعتبار لتحسين خدماتنا. شكراً لدعمك، ونسعى جاهدين لإرضائك مستقبلاً." },
    { text: "We apologize for any shortcomings and understand the importance of your experience with us. We take your feedback into account to improve our services. Thank you for your support, and we will strive to satisfy you in the future." },
    { text: "نحن نأسف لأي تجربة غير مرضية، فهدفنا هو توفير خدمة ترقى إلى مستوى توقعاتك. نقدر ملاحظاتك وسنعمل على التحسين المستمر لإرضائك في المستقبل. شكراً لتفهمك، ونتمنى أن نراك قريبًا." },
    { text: "We apologize for any unsatisfactory experience, as our goal is to provide service that meets your expectations. We value your feedback and will work on continuous improvement to satisfy you in the future. Thank you for your understanding, and we hope to see you soon." },
    { text: "نعتذر بصدق إذا لم تكن تجربتك بالمستوى الذي تأملته. نؤكد لك أن ملاحظاتك مهمة لنا، وسنعمل على تحسين الأمور لتكون تجربتك القادمة أفضل. نشكرك على دعمك ونتطلع إلى خدمتك مرة أخرى قريبًا." },
    { text: "We sincerely apologize if your experience was not at the level you expected. Please know that your feedback is important to us, and we will work on improving things to make your next experience better. Thank you for your support, and we look forward to serving you again soon." },
    { text: "نأسف لأي تجربة غير مرضية مررت بها. نحن ملتزمون بتقديم أفضل خدمة ممكنة وسنعمل على تحسينها بناءً على ملاحظاتك. نشكرك على ثقتك بنا ونتمنى أن نراك قريبًا بتجربة أكثر راحة وسعادة." },
    { text: "We deeply regret that we were unable to provide the seamless experience that you deserve. Please know that we are actively working to resolve any issues and ensure that future experiences meet and exceed your expectations. We truly appreciate your patience." },
    { text: "نحن آسفون لأن تجربتك لم تكن بالمستوى الذي نطمح إليه. شكرًا لملاحظاتك، وهي محل اهتمامنا لتحسين جودة الخدمات. نقدر تفهمك ونتمنى أن تمنحنا فرصة لنقدم لك تجربة أفضل مستقبلاً." },
    { text: "We understand that your time and satisfaction are valuable, and we apologize for any inconvenience you may have encountered. Please know that we take all feedback seriously and are continuously working to enhance our service to better meet your needs." },
    { text: "نعتذر عن أي خلل قد واجهته خلال تجربتك، ونشكرك على إبلاغنا بذلك. رضاك هو أولويتنا ونسعى جاهدين لتحسين الخدمة مستقبلاً. نتمنى أن تمنحنا فرصة أخرى لنثبت لك مدى التزامنا برضاك." },
    { text: "We apologize for any issues you encountered during your experience, and we thank you for bringing them to our attention. Your satisfaction is our priority, and we strive to improve our service in the future. We hope you give us another opportunity to show you our commitment to your satisfaction." },
    { text: "نأسف لأي تقصير قد حدث، فهدفنا هو توفير تجربة مثالية لعملائنا. نحن نعمل بجد لتحسين الخدمة بناءً على ملاحظاتك. شكراً لصبرك، ونتمنى أن تكون تجربتك القادمة أكثر راحة ان شاء الله." },
    { text: "We apologize for any shortcomings that may have occurred, as our goal is to provide an ideal experience for our customers. We are working hard to improve the service based on your feedback. Thank you for your patience, and we hope your next experience will be more comfortable." },
    { text: "نعتذر بصدق عن أي إزعاج حدث خلال طلبك، فنحن نسعى دائمًا لتقديم الأفضل. ملاحظاتك محل اهتمامنا، وسنسعى لتحسين التجربة لإرضائك مستقبلاً. شكراً لدعمك، ونتمنى أن نراك قريبًا." },
    { text: "We sincerely apologize for any inconvenience during your order, as we always strive to provide the best. Your feedback is important to us, and we will work to improve the experience to satisfy you in the future. Thank you for your support, and we hope to see you soon." },
    { text: "نأسف لأن تجربتك لم تكن كما توقعت، وسنعمل على تحسين خدماتنا لتفادي تكرار ذلك إن شاء الله. شكراً لوقتك وثقتك بنا، وسنسعى جاهدين لتقديم تجربة مرضية لك مستقبلاً." },
    { text: "We are sorry that your experience was not as you expected, and we will work on improving our services to prevent this from happening again, God willing. Thank you for your time and trust in us, and we will strive to provide you with a satisfactory experience in the future." },
    { text: "نعتذر عن أي تجربة غير مرضية قد مررت بها، ونعمل على تحسين الخدمة بناءً على ملاحظاتك. نشكرك على تفهمك، و سنحرص على أن تكون تجربتك القادمة أكثر راحة." },
    { text: "We sincerely apologize for this situation. We know you expected better, and we deeply appreciate your understanding as we work on improving." },
    { text: "نحن نأسف لأي تجربة غير مرضية قد مررت بها. ملاحظاتك تهمنا وسنعمل على تطوير الخدمة لتقديم تجربة أفضل مستقبلاً. شكراً لصبرك وثقتك بنا." },
    { text: "We're truly sorry for any inconvenience caused. We understand this wasn't ideal and are committed to improving your experience next time. Thank you for trusting us." },
    { text: "نعتذر عن أي تقصير قد واجهته، وسنعمل على تحسين خدماتنا لإرضائك قدر الإمكان. شكراً لك على ملاحظاتك القيمة، ونتمنى أن تمنحنا فرصة أخرى لخدمتك بشكل أفضل." },
    { text: "We apologize for any shortcomings you may have experienced, and we will work on improving our services to satisfy you as much as possible. Thank you for your valuable feedback, and we hope you give us another opportunity to serve you better." },
    { text: "نأسف لأي إزعاج قد سبّبته تجربتك معنا، وسنسعى بتحسين الخدمة لتكون على مستوى توقعاتك. نشكر لك تفهمك، ونتمنى أن نراك مجددًا في تجربة أكثر راحة وسعادة." },
    { text: "We are truly sorry that your recent order did not go as expected. Your trust is important to us, and we are dedicated to improving our service based on your valuable feedback. Please accept our apologies, and we hope to provide you with a much smoother experience in the future." },
    { text: "نحن نأسف لأي قصور قد حدث أثناء تجربتك، وندرك تمامًا مدى أهمية تقديم خدمة مميزة تلبي تطلعاتك. رضاك هو حجر الأساس الذي نبني عليه خدماتنا، ولذلك فإننا نأخذ جميع الملاحظات على محمل الجد ونعمل جاهدين على تحسين التجربة لتقديم مستوى عالٍ من الجودة مستقبلاً. نشكر لك تفهمك وثقتك بنا، ونسعى باستمرار لجعل كل تجربة لك معنا أفضل من السابقة." },
    { text: "We are sorry for any shortcomings you may have experienced, and we fully recognize the importance of providing outstanding service that meets your expectations. Your satisfaction is the foundation upon which we build our services, which is why we take all feedback seriously and work hard to improve the experience to deliver a high level of quality in the future. Thank you for your understanding and trust, and we continuously strive to make each experience with us better than the last." },
    { text: "نأسف بشدة لأي تجربة غير مرضية قد واجهتها، ونتفهم تمامًا مدى الإحباط الذي قد تشعر به عند عدم الحصول على الخدمة بالمستوى المتوقع. نحن نعمل بجد لتحسين الجودة والاستجابة السريعة للملاحظات الخاصة بعملائنا، وسنسعى جاهدين لجعل تجربتك القادمة أكثر سلاسة وراحة. نشكرك على تفهمك، ونتطلع إلى خدمتك قريبًا بطريقة تليق بثقتك بنا." },
    { text: "We deeply regret any unsatisfactory experience you may have had, and we fully understand the frustration of not receiving service at the expected level. We are working hard to improve quality and respond promptly to our customers' feedback, and we will strive to make your next experience smoother and more comfortable. Thank you for your understanding, and we look forward to serving you soon in a manner worthy of your trust." },
    { text: "نتفهم تمامًا أنك كنت تتوقع تجربة أفضل، ونحن نأسف لأننا لم نرتقِ إلى مستوى تطلعاتك هذه المرة. نقدّر صبرك وملاحظاتك التي تساعدنا على التطوير، ونعمل بلا توقف لتحسين الخدمة لتكون أكثر سلاسة وجودة إن شاء الله. نأمل أن تمنحنا فرصة أخرى لنثبت لك أننا نستحق ثقتك، ونتطلع لأن تكون تجربتك القادمة معنا أكثر راحة ورضا." },
    { text: "We fully understand that you expected a better experience, and we are sorry that we did not meet your expectations this time. We appreciate your patience and feedback, which help us improve, and we continuously work to enhance the service to make it smoother and of higher quality, God willing. We hope you give us another opportunity to show that we deserve your trust, and we look forward to your next experience with us being more comfortable and satisfying." },
  ];

  const renderContent = () => {
    if (selectedCategory === "basic") {
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
          {basicApologies.map((message, index) => (
            <MessageBox key={index} text={message.text} category="" />
          ))}
        </>
      );
    }

    if (selectedCategory === "special") {
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
          {specialCaseApologies.map((message, index) => (
            <MessageBox key={index} text={message.text} category="" />
          ))}
        </>
      );
    }

    if (selectedCategory === "handling") {
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
          {handlingCustomer.map((message, index) => (
            <MessageBox key={index} text={message.text} category="" />
          ))}
        </>
      );
    }

    if (selectedCategory === "full") {
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
          {fullApologies.map((message, index) => (
            <MessageBox key={index} text={message.text} category="" />
          ))}
        </>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <CategoryBox title="Basic apologies" onClick={() => setSelectedCategory("basic")} />
        <CategoryBox title="Special case apologies" onClick={() => setSelectedCategory("special")} />
        <CategoryBox title="Handling the customer" onClick={() => setSelectedCategory("handling")} />
        <CategoryBox title="Full apologies" onClick={() => setSelectedCategory("full")} />
      </div>
    );
  };

  const getTitle = () => {
    if (selectedCategory === "basic") return "Basic apologies";
    if (selectedCategory === "special") return "Special case apologies";
    if (selectedCategory === "handling") return "Handling the customer";
    if (selectedCategory === "full") return "Full apologies";
    return "Apologies Messages";
  };

  return <PageLayout title={getTitle()}>{renderContent()}</PageLayout>;
};

export default Apologies;
