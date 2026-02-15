import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Shield, CheckCircle2, Upload, ArrowLeft, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CompanyKYC = () => {
  const navigate = useNavigate();

  const [uploadedDocs, setUploadedDocs] = useState({
    businessLicense: null as File | null,
    taxId: null as File | null,
    bankStatement: null as File | null,
    directorId: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const documents = [
    {
      id: "businessLicense",
      name: "Business License",
      description: "Certificate of incorporation or business registration",
      required: true,
      status: uploadedDocs.businessLicense ? "completed" : "pending",
    },
    {
      id: "taxId",
      name: "Tax ID/Registration Number",
      description: "Tax identification number or GST registration",
      required: true,
      status: uploadedDocs.taxId ? "completed" : "pending",
    },
    {
      id: "bankStatement",
      name: "Bank Statement",
      description: "Recent bank statement (last 3 months)",
      required: true,
      status: uploadedDocs.bankStatement ? "completed" : "pending",
    },
    {
      id: "directorId",
      name: "Director/Authorized Person ID",
      description: "Government-issued ID of company director or authorized representative",
      required: true,
      status: uploadedDocs.directorId ? "completed" : "pending",
    },
  ];

  const handleFileChange = (docId: keyof typeof uploadedDocs, file: File) => {
    setUploadedDocs({
      ...uploadedDocs,
      [docId]: file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allDocumentsUploaded = Object.values(uploadedDocs).every((doc) => doc !== null);

    if (!allDocumentsUploaded) {
      alert("Please upload all required documents");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Documents submitted for verification! You will hear back within 24-48 hours.");
    }, 1000);
  };

  const allUploaded = Object.values(uploadedDocs).every((doc) => doc !== null);

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">Company Verification (KYC)</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Complete your company verification to start posting internships
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="trust-card bg-blue-50 border border-blue-200 mb-8">
            <div className="flex gap-3">
              <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Why Verification Matters</h3>
                <p className="text-sm text-blue-800">
                  Verified companies get a trust badge, appear higher in search results, and receive more quality applications from verified students. Verification takes 24-48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Verification Steps */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Verification Steps</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Upload Documents", desc: "Submit required verification documents" },
                { step: 2, title: "Document Review", desc: "Our team reviews your documents (24-48 hours)" },
                { step: 3, title: "Verification Complete", desc: "Get verified badge and full access" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Required Documents</h2>

            <div className="grid gap-6">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="trust-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-slate-900">{doc.name}</h3>
                        {doc.required && (
                          <span className="px-2 py-0.5 bg-red-50 text-red-700 text-xs font-medium rounded">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{doc.description}</p>
                    </div>
                    {uploadedDocs[doc.id as keyof typeof uploadedDocs] && (
                      <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                    )}
                  </div>

                  {/* File Upload Area */}
                  {!uploadedDocs[doc.id as keyof typeof uploadedDocs] ? (
                    <label className="block border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={32} className="text-slate-400" />
                        <div>
                          <p className="font-medium text-slate-900">Click to upload</p>
                          <p className="text-xs text-slate-500">or drag and drop</p>
                        </div>
                      </div>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileChange(doc.id as keyof typeof uploadedDocs, e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                      <FileText size={20} className="text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-green-900">
                          {uploadedDocs[doc.id as keyof typeof uploadedDocs]?.name}
                        </p>
                        <p className="text-xs text-green-700">
                          {(
                            (uploadedDocs[doc.id as keyof typeof uploadedDocs]?.size || 0) /
                            (1024 * 1024)
                          ).toFixed(2)}{" "}
                          MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setUploadedDocs({
                            ...uploadedDocs,
                            [doc.id]: null,
                          })
                        }
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="trust-card bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-3">Document Requirements</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Documents must be clear and legible</li>
                <li>• Supported formats: PDF, JPG, PNG, DOC, DOCX</li>
                <li>• Maximum file size: 10 MB per document</li>
                <li>• All documents must be in English or have certified translations</li>
                <li>• Ensure documents are not expired or outdated</li>
              </ul>
            </div>

            {/* Declaration */}
            <div className="trust-card border-l-4 border-l-primary">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" required />
                <span className="text-sm text-slate-700">
                  I certify that all the information and documents provided are accurate, authentic, and
                  complete. I understand that any false information may result in account suspension.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <Button
                size="lg"
                type="submit"
                disabled={isSubmitting || !allUploaded}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={18} />
                {isSubmitting ? "Submitting..." : "Submit for Verification"}
              </Button>
              <Button size="lg" variant="outline">
                Save as Draft
              </Button>
            </div>

            {/* Progress */}
            {!allUploaded && (
              <div className="text-sm text-slate-600">
                <p>
                  {Object.values(uploadedDocs).filter((v) => v !== null).length} of{" "}
                  {Object.keys(uploadedDocs).length} documents uploaded
                </p>
              </div>
            )}
          </form>

          {/* FAQ */}
          <div className="mt-12 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How long does verification take?",
                  a: "Most verifications are completed within 24-48 hours. You'll receive an email notification once complete.",
                },
                {
                  q: "What if my documents are rejected?",
                  a: "If documents are rejected, we'll provide clear feedback on what needs to be corrected. You can resubmit improved documents.",
                },
                {
                  q: "Is my data secure?",
                  a: "Yes, all documents are encrypted and stored securely. We comply with data protection regulations.",
                },
                {
                  q: "Can I verify a branch office?",
                  a: "Yes, you can verify multiple locations. Each location will need separate documentation.",
                },
              ].map((faq, i) => (
                <div key={i} className="trust-card">
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyKYC;
