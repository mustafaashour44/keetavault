import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import MainInterface from "./pages/MainInterface";
import BDSide from "./pages/BDSide";
import Calls from "./pages/Calls";
import Calculator from "./pages/Calculator";
import Greeting from "./pages/Greeting";
import Confirming from "./pages/Confirming";
import Hold from "./pages/Hold";
import AskForPhoto from "./pages/AskForPhoto";
import Apologies from "./pages/Apologies";
import Compensation from "./pages/Compensation";
import Refund from "./pages/Refund";
import RefundCompensation from "./pages/RefundCompensation";
import Escalation from "./pages/Escalation";
import NoResponse from "./pages/NoResponse";
import LastConfirm from "./pages/LastConfirm";
import Ending from "./pages/Ending";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <>
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/main-interface" element={<MainInterface />} />
        <Route path="/bd-side" element={<BDSide />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/confirming" element={<Confirming />} />
        <Route path="/hold" element={<Hold />} />
        <Route path="/ask-for-photo" element={<AskForPhoto />} />
        <Route path="/apologies" element={<Apologies />} />
        <Route path="/compensation" element={<Compensation />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/refund-compensation" element={<RefundCompensation />} />
        <Route path="/escalation" element={<Escalation />} />
        <Route path="/no-response" element={<NoResponse />} />
        <Route path="/last-confirm" element={<LastConfirm />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
