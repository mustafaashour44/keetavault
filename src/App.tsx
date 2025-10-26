import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Calculator />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
