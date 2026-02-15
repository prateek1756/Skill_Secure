import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Internships from "./pages/Internships";
import PostInternship from "./pages/PostInternship";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import InternshipMatching from "./pages/InternshipMatching";
import ReviewsPage from "./pages/ReviewsPage";
import AdminPanel from "./pages/AdminPanel";
import CareerRoadmap from "./pages/CareerRoadmap";
import StudentProfileSettings from "./pages/StudentProfileSettings";
import CompanyProfileSettings from "./pages/CompanyProfileSettings";
import PostJobForm from "./pages/PostJobForm";
import CompanyKYC from "./pages/CompanyKYC";
import ForgotPassword from "./pages/ForgotPassword";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import SavedInternships from "./pages/SavedInternships";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/signup-page" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/saved-internships" element={<SavedInternships />} />
            <Route path="/internship-matching" element={<InternshipMatching />} />
            <Route path="/post-internship" element={<PostInternship />} />
            <Route path="/post-job" element={<PostJobForm />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/student-profile-settings" element={<StudentProfileSettings />} />
            <Route path="/career-roadmap" element={<CareerRoadmap />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="/company-profile-settings" element={<CompanyProfileSettings />} />
            <Route path="/company-kyc" element={<CompanyKYC />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/companies"
              element={
                <PlaceholderPage
                  title="For Companies"
                  description="Recruit verified talent through Skill Secure."
                />
              }
            />
            <Route
              path="/how-it-works"
              element={
                <PlaceholderPage
                  title="How It Works"
                  description="Learn how Skill Secure connects students with opportunities."
                />
              }
            />
            <Route
              path="/pricing"
              element={
                <PlaceholderPage
                  title="Pricing"
                  description="Simple, transparent pricing for students and companies."
                />
              }
            />
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="Your privacy is important to us."
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Read our terms and conditions."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  title="Contact Us"
                  description="Get in touch with our team. We'd love to hear from you."
                />
              }
            />
            <Route
              path="/about"
              element={
                <PlaceholderPage
                  title="About Skill Secure"
                  description="Learn more about our mission to connect students with opportunities."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
