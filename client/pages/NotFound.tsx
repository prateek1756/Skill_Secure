import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
                <AlertCircle size={48} className="text-red-500" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">404</h1>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Page Not Found</h2>

            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8">
              <Button asChild size="lg">
                <Link to="/" className="flex items-center gap-2">
                  <Home size={18} />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/internships" className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  View Internships
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
