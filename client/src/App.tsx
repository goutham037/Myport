import { Router as WouterRouter, Switch, Route } from "wouter";
import { ThemeProvider } from "next-themes";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BASE } from "@/lib/utils";
import HomePage from "@/pages/home";
import GsptMcpPage from "@/pages/projects/gspt-mcp";
import GsptEvolution from "@/pages/projects/gspt/Evolution";
import GsptEngineering from "@/pages/projects/gspt/Engineering";
import GsptOutcomes from "@/pages/projects/gspt/Outcomes";
import NotFound from "@/pages/not-found";
import InstagramMcpPage from "@/pages/projects/insta-mcp";

function Router() {
  return (
    <WouterRouter base={BASE}>
      <Switch>
        <Route path="/projects/gspt-mcp/evolution" component={GsptEvolution} />
        <Route path="/projects/gspt-mcp/engineering" component={GsptEngineering} />
        <Route path="/projects/gspt-mcp/outcomes" component={GsptOutcomes} />
        <Route path="/projects/gspt-mcp" component={GsptMcpPage} />
        <Route path="/projects/insta-mcp" component={InstagramMcpPage} />
        <Route path="/" component={HomePage} />
        <Route component={NotFound} />

      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
