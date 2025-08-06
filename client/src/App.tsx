import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

// Import pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TestGenerator from "./pages/TestGenerator";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewPrep from "./pages/InterviewPrep";
import SpokenEnglish from "./pages/SpokenEnglish";
import AptitudeTraining from "./pages/AptitudeTraining";
import DSA from "./pages/DSA";
import ProgressTracker from "./pages/ProgressTracker";
import Certifications from "./pages/Certifications";
import Profile from "./pages/Profile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/mock-tests" component={TestGenerator} />
      <Route path="/aptitude-training" component={AptitudeTraining} />
      <Route path="/dsa" component={DSA} />
      <Route path="/soft-skills" component={SpokenEnglish} />
      <Route path="/resume-builder" component={ResumeBuilder} />
      <Route path="/interview-prep" component={InterviewPrep} />
      <Route path="/progress" component={ProgressTracker} />
      <Route path="/certifications" component={Certifications} />
      <Route path="/profile" component={Profile} />
      {/* Legacy routes for backward compatibility */}
      <Route path="/tests" component={TestGenerator} />
      <Route path="/spoken-english" component={SpokenEnglish} />
      <Route path="/practice" component={Dashboard} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <AuthProvider>
            <Toaster />
            <Router />
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
