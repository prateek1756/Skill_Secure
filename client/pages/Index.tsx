import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Star,
  TrendingUp,
  Users,
  Award,
  GitBranch,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-blue-purple pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full">
              <Shield size={16} className="text-primary" />
              <span className="text-sm font-medium text-slate-700">
                Scam-Protected Verified Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Find Verified Internships & Skill Opportunities
              <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text py-2">
                You Can Trust
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Connect with legitimate companies, avoid scams, and grow your skills with AI-powered
              matching. Your next opportunity starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" asChild className="text-base">
                <Link to="/internship-matching">
                  Explore Opportunities
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link to="/signup-page">Post as Company</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-12 md:pt-16">
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-slate-600">Students Matched</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-secondary">500+</p>
                <p className="text-sm text-slate-600">Verified Companies</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-slate-600">Trust Score</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Students Trust Skill Secure</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We built Skill Secure with trust, transparency, and protection at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Verified Companies Badge */}
            <div className="trust-card group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-soft transition-all">
                <CheckCircle2 size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">500+ Verified Companies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every company on our platform undergoes rigorous KYC verification. We verify business
                registration, legitimacy, and track record.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500">Trusted by students</span>
              </div>
            </div>

            {/* Scam Protected Badge */}
            <div className="trust-card group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-soft transition-all">
                <Shield size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Scam-Protected Ecosystem</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced fraud detection, student protection guarantee, and instant reporting system.
                Your safety is our priority.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                  ✓ Zero fraud incidents
                </span>
              </div>
            </div>

            {/* AI Matching Badge */}
            <div className="trust-card group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-soft transition-all">
                <Zap size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">AI-Powered Matching</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our intelligent algorithm matches your skills, preferences, and goals with the perfect
                opportunities in seconds.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  97% match accuracy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get started in three simple steps and find your perfect opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-soft-lg">
                  1
                </div>
                <h3 className="font-bold text-lg text-slate-900">Create Your Profile</h3>
                <p className="text-slate-600 text-sm">
                  Add your skills, academic background, resume, and portfolio links to build a
                  comprehensive profile.
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-8 -right-12 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-soft-lg">
                  2
                </div>
                <h3 className="font-bold text-lg text-slate-900">Get AI Matched</h3>
                <p className="text-slate-600 text-sm">
                  Our intelligent matching engine suggests verified internships that align with your
                  skills and goals.
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-8 -right-12 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-soft-lg">
                  3
                </div>
                <h3 className="font-bold text-lg text-slate-900">Apply Securely</h3>
                <p className="text-slate-600 text-sm">
                  Submit your application to verified opportunities and track your progress every
                  step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Powerful Features</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Everything you need to find and land your perfect internship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="trust-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900">Skill Gap Analysis</h4>
                  <p className="text-sm text-slate-600">
                    Understand your strengths and get personalized learning paths to improve.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="trust-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-secondary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900">Company Ratings & Reviews</h4>
                  <p className="text-sm text-slate-600">
                    Read honest reviews from students who interned at companies.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="trust-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900">Application Tracking</h4>
                  <p className="text-sm text-slate-600">
                    Monitor all your applications in one place with real-time updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="trust-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-secondary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900">Legitimacy Verification</h4>
                  <p className="text-sm text-slate-600">
                    Every opportunity is verified for authenticity and legitimacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by Students & Companies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join thousands of students who found their dream internships on Skill Secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="trust-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Skill Secure helped me find a legitimate internship at a company I actually wanted to
                work for. The matching was spot-on!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Sarah Chen</p>
                  <p className="text-xs text-slate-500">Computer Science Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="trust-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "As a company, Skill Secure's verification process gives us confidence we're hiring
                quality candidates. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Alex Rodriguez</p>
                  <p className="text-xs text-slate-500">HR Manager, TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="trust-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "The scam protection and transparency features gave me confidence throughout my
                application process. Thank you!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Priya Patel</p>
                  <p className="text-xs text-slate-500">Data Science Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-16 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to Start Your Journey?</h2>
            <p className="text-lg text-slate-600">
              Join thousands of students finding verified internships they can trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup-page">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
