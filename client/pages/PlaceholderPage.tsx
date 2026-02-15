import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const PlaceholderPage = ({ 
  title, 
  description,
  icon = <Construction size={48} className="text-primary" />
}: PlaceholderPageProps) => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              {icon}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{title}</h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              {description}
            </p>

            <div className="pt-8 space-y-4">
              <p className="text-slate-500 text-sm">
                This page is coming soon! Let us know if you'd like us to prioritize this feature.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Request Feature</Link>
                </Button>
              </div>
            </div>

            {/* Placeholder Content Indicator */}
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg space-y-2">
              <p className="text-sm font-medium text-blue-900">Want to customize this page?</p>
              <p className="text-sm text-blue-700">
                Continue prompting to have us build out: Student Dashboard, Company Dashboard, Internship 
                Listings, Authentication, and more!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
