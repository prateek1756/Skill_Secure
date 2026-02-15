import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"email" | "verify" | "reset" | "success">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("verify");
    }, 1000);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("reset");
    }, 1000);
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) return;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 min-h-screen">
        <div className="container">
          <div className="max-w-md mx-auto">
            {/* Header */}
            {step !== "success" && (
              <div className="mb-8">
                <Link to="/login-page" className="text-primary hover:underline flex items-center gap-2 text-sm mb-4">
                  <ArrowLeft size={16} />
                  Back to login
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Reset Your Password</h1>
                <p className="text-slate-600">No worries, we'll help you recover your account</p>
              </div>
            )}

            {/* Step 1: Email */}
            {step === "email" && (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="trust-card">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail size={28} className="text-primary" />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 text-center mb-2">Find Your Account</h2>
                  <p className="text-sm text-slate-600 text-center mb-6">
                    Enter the email address associated with your account
                  </p>

                  <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-slate-900">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Recovery Email"}
                  </Button>
                </div>

                <p className="text-center text-sm text-slate-600">
                  Remember your password?{" "}
                  <Link to="/login-page" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            )}

            {/* Step 2: Verification Code */}
            {step === "verify" && (
              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div className="trust-card">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-secondary" />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 text-center mb-2">Check Your Email</h2>
                  <p className="text-sm text-slate-600 text-center mb-6">
                    We've sent a recovery code to <strong>{email}</strong>
                  </p>

                  <div className="space-y-2 mb-6">
                    <label className="block text-sm font-medium text-slate-900">
                      Enter Verification Code
                    </label>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      placeholder="XXXXXX"
                      maxLength={6}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-center text-2xl tracking-widest font-bold"
                      required
                    />
                    <p className="text-xs text-slate-500">Check your email for the code</p>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Verifying..." : "Verify Code"}
                  </Button>

                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="w-full mt-3 text-center text-sm text-primary hover:underline"
                  >
                    Didn't receive the code? Try another email
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Reset Password */}
            {step === "reset" && (
              <form onSubmit={handleResetSubmit} className="space-y-6">
                <div className="trust-card">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Create New Password</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-900">New Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        required
                      />
                      <p className="text-xs text-slate-500">
                        Password must be at least 8 characters long
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-900">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg space-y-2">
                    <p className="text-xs font-medium text-slate-900">Password must contain:</p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li className={password.length >= 8 ? "text-green-700" : ""}>
                        ✓ At least 8 characters
                      </li>
                      <li className={/[A-Z]/.test(password) ? "text-green-700" : ""}>
                        ✓ Uppercase letter
                      </li>
                      <li className={/[a-z]/.test(password) ? "text-green-700" : ""}>
                        ✓ Lowercase letter
                      </li>
                      <li className={/[0-9]/.test(password) ? "text-green-700" : ""}>
                        ✓ Number
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full mt-6" size="lg" disabled={isLoading}>
                    {isLoading ? "Resetting..." : "Reset Password"}
                  </Button>
                </div>
              </form>
            )}

            {/* Step 4: Success */}
            {step === "success" && (
              <div className="space-y-6">
                <div className="trust-card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Password Reset!</h2>
                  <p className="text-slate-600 mb-6">
                    Your password has been successfully reset. You can now sign in with your new password.
                  </p>

                  <Button asChild size="lg" className="w-full">
                    <Link to="/login-page">Sign In</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
