import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import HomePage from "@/pages/home";
import VIPPage from "@/pages/vip";
import PravidlaPage from "@/pages/pravidla";
import MapaPage from "@/pages/mapa";
import KontaktPage from "@/pages/kontakt";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/vip" component={VIPPage} />
      <Route path="/pravidla" component={PravidlaPage} />
      <Route path="/mapa" component={MapaPage} />
      <Route path="/kontakt" component={KontaktPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
