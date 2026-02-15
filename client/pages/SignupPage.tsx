import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Building2, Check } from "lucide-react";
import { useState } from "react";

const SignupPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"student" | "company" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType || !formData.name || !formData.email || !formData.password) return;
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Store user info in localStorage for demo
      localStorage.setItem("user", JSON.stringify({
        name: formData.name,
        email: formData.email,
        userType,
        id: Math.random().toString(36).substr(2, 9),
        isNewUser: true,
      }));

      // Redirect based on role
      if (userType === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/company-dashboard");
      }
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
                Create Your Account
              </h1>
              <p className="text-slate-600">Join thousands of students and companies</p>
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
                      <h3 className="font-bold text-slate-900 mb-1">I'm a Student</h3>
                      <p className="text-sm text-slate-600">
                        Looking for internships
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
                      <h3 className="font-bold text-slate-900 mb-1">I'm a Company</h3>
                      <p className="text-sm text-slate-600">
                        Hiring interns
                      </p>
                    </div>
                  </div>
                </button>

                {/* Benefits */}
                <div className="mt-8 space-y-3 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-slate-900 text-sm">Why join Skill Secure?</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      Verified opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      Scam protection
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      AI-powered matching
                    </li>
                  </ul>
                </div>

                <p className="text-center text-sm text-slate-600 pt-4">
                  Already have an account?{" "}
                  <Link to="/login-page" className="text-primary font-medium hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-6">
                {/* Back button */}
                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  ← Choose different role
                </button>

                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" required />
                  <span className="text-sm text-slate-600">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>

                {/* Sign In Link */}
                <p className="text-center text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link to="/login-page" className="text-primary font-medium hover:underline">
                    Sign in here
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

export default SignupPage;
