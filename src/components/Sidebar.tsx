import { Link, useLocation } from "react-router-dom";
import { Calculator, MessageSquare, CheckCircle, Clock, Camera, MessageCircle, DollarSign, RefreshCw, TrendingUp, AlertCircle, UserCheck, LogOut, Home } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: "/main-interface", icon: Home, label: "Main Interface" },
    { path: "/", icon: Calculator, label: "Calculator" },
    { path: "/greeting", icon: MessageSquare, label: "Greeting" },
    { path: "/confirming", icon: CheckCircle, label: "Confirming" },
    { path: "/hold", icon: Clock, label: "Hold" },
    { path: "/ask-for-photo", icon: Camera, label: "Ask for Photo" },
    { path: "/apologies", icon: MessageCircle, label: "Apologies" },
    { path: "/compensation", icon: DollarSign, label: "Compensation" },
    { path: "/refund", icon: DollarSign, label: "Refund" },
    { path: "/refund-compensation", icon: DollarSign, label: "Refund + Compensation" },
    { path: "/escalation", icon: TrendingUp, label: "Escalation" },
    { path: "/no-response", icon: AlertCircle, label: "No Response" },
    { path: "/last-confirm", icon: UserCheck, label: "Last Confirm" },
    { path: "/ending", icon: LogOut, label: "Ending" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-52 border-r border-sidebar-border bg-sidebar-background">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-primary mb-1">Keeta Vault</h1>
        <p className="text-sm text-muted-foreground font-medium">Made By TR Mustafa Ashour</p>
      </div>
      
      <nav className="p-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                isActive
                  ? "bg-yellow-400 text-black font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="absolute bottom-4 left-6 text-xs text-muted-foreground">
        Quick Replies v1.1
      </div>
    </aside>
  );
};

export default Sidebar;
