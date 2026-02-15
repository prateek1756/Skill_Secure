import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"student" | "company" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Store user info in localStorage for demo
      localStorage.setItem("user", JSON.stringify({
        email,
        userType,
        id: Math.random().toString(36).substr(2, 9)
      }));

      toast.success(`Welcome back! Redirecting to your dashboard...`);

      // Redirect based on role
      setTimeout(() => {
        if (userType === "student") {
          navigate("/student-dashboard");
        } else {
          navigate("/company-dashboard");
        }
      }, 500);

      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 min-h-screen">
        <div className="container">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-600">Sign in to your Skill Secure account</p>
            </div>

            {/* Role Selection */}
            {!userType ? (
              <div className="space-y-4">
                <button
                  onClick={() => setUserType("student")}
                  className="w-full trust-card text-left hover:border-primary transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <User size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">Student Login</h3>
                      <p className="text-sm text-slate-600">
                        Find internships and build your career
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setUserType("company")}
                  className="w-full trust-card text-left hover:border-secondary transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Building2 size={24} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">Company Login</h3>
                      <p className="text-sm text-slate-600">
                        Post internships and hire talent
                      </p>
                    </div>
                  </div>
                </button>

                <p className="text-center text-sm text-slate-600 pt-4">
                  Don't have an account?{" "}
                  <Link to="/signup-page" className="text-primary font-medium hover:underline">
                    Create one here
                  </Link>
                </p>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Back button */}
                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  ← Choose different role
                </button>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                    <span className="text-slate-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-slate-600">
                  Don't have an account?{" "}
                  <Link to="/signup-page" className="text-primary font-medium hover:underline">
                    Create one here
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
