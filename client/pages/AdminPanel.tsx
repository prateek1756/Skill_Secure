import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Upload,
  Download,
  Menu,
  LogOut,
  Eye,
  Shield,
  Flag,
  Users,
  Building2,
} from "lucide-react";
import { useState } from "react";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.clear();
    // Navigate to login page
    navigate('/login');
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "verification" | "scam-reports">(
    "dashboard"
  );

  const stats = {
    pendingVerifications: 12,
    verifiedCompanies: 487,
    flaggedInternships: 3,
    scamReports: 5,
  };

  const pendingVerifications = [
    {
      id: 1,
      company: "TechInnovate Inc",
      submissionDate: "2024-02-10",
      kycStatus: "Pending",
      documents: ["Business License", "Tax ID", "Bank Statement"],
      registrationNumber: "REG-2024-001",
      email: "hr@techinnovate.com",
      status: "Under Review",
    },
    {
      id: 2,
      company: "DataFlow Solutions",
      submissionDate: "2024-02-08",
      kycStatus: "Pending",
      documents: ["Business License", "Director ID"],
      registrationNumber: "REG-2024-002",
      email: "admin@dataflow.com",
      status: "Document Review",
    },
    {
      id: 3,
      company: "CloudBase Systems",
      submissionDate: "2024-02-05",
      kycStatus: "Pending",
      documents: ["Business License", "Tax ID", "Bank Statement", "Director ID"],
      registrationNumber: "REG-2024-003",
      email: "verify@cloudbase.com",
      status: "Final Review",
    },
  ];

  const scamReports = [
    {
      id: 1,
      reportedBy: "Student User",
      internship: "Fake AI Developer Program",
      company: "Unknown Company",
      description: "Asking for upfront payment before joining. Clear scam.",
      reportDate: "2024-02-11",
      status: "Under Investigation",
      priority: "High",
      evidence: ["Email transcript", "Payment demand"],
    },
    {
      id: 2,
      reportedBy: "Student User",
      internship: "Data Entry Intern",
      company: "WebCorp Solutions",
      description: "Position removed after application. Possible fraud.",
      reportDate: "2024-02-10",
      status: "Verified Scam",
      priority: "Critical",
      evidence: ["Screenshots"],
      action: "Company Suspended",
    },
    {
      id: 3,
      reportedBy: "Student User",
      internship: "Marketing Intern",
      company: "Digital Marketing Pro",
      description: "Unusual communication pattern. Possibly automated.",
      reportDate: "2024-02-09",
      status: "Investigating",
      priority: "Medium",
      evidence: ["Chat logs"],
    },
  ];

  const verifiedCompanies = [
    {
      id: 1,
      name: "TechCorp",
      verificationDate: "2024-01-15",
      trustScore: 98,
      internships: 3,
      status: "Active",
    },
    {
      id: 2,
      name: "StartupXYZ",
      verificationDate: "2024-01-10",
      trustScore: 96,
      internships: 2,
      status: "Active",
    },
    {
      id: 3,
      name: "AI Innovations",
      verificationDate: "2023-12-20",
      trustScore: 95,
      internships: 4,
      status: "Active",
    },
  ];

  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Sidebar */}
            <div
              className={`${isSidebarOpen ? "block" : "hidden"
                } lg:block lg:col-span-1 fixed lg:static top-20 left-0 right-0 bottom-0 bg-white lg:bg-transparent z-40 overflow-y-auto`}
            >
              <div className="p-6 space-y-4">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden absolute top-4 right-4"
                >
                  ✕
                </button>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg" />
                  <div>
                    <p className="font-bold text-slate-900">Admin Panel</p>
                    <p className="text-xs text-slate-500">Skill Secure</p>
                  </div>
                </div>

                <nav className="space-y-2 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "dashboard"
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab("verification")}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "verification"
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    Verifications
                  </button>
                  <button
                    onClick={() => setActiveTab("scam-reports")}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "scam-reports"
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    Scam Reports
                  </button>
                </nav>

                <button
                  className="w-full flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-4 space-y-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Dashboard Tab */}
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="trust-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide">
                            Pending Verifications
                          </p>
                          <p className="text-3xl font-bold text-primary mt-1">
                            {stats.pendingVerifications}
                          </p>
                        </div>
                        <Clock size={24} className="text-primary/20" />
                      </div>
                    </div>

                    <div className="trust-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide">
                            Verified Companies
                          </p>
                          <p className="text-3xl font-bold text-secondary mt-1">
                            {stats.verifiedCompanies}
                          </p>
                        </div>
                        <Shield size={24} className="text-secondary/20" />
                      </div>
                    </div>

                    <div className="trust-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide">
                            Scam Reports
                          </p>
                          <p className="text-3xl font-bold text-red-600 mt-1">{stats.scamReports}</p>
                        </div>
                        <AlertCircle size={24} className="text-red-600/20" />
                      </div>
                    </div>

                    <div className="trust-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide">
                            Flagged Items
                          </p>
                          <p className="text-3xl font-bold text-orange-600 mt-1">
                            {stats.flaggedInternships}
                          </p>
                        </div>
                        <Flag size={24} className="text-orange-600/20" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Verifications */}
                  <div className="trust-card">
                    <h3 className="font-bold text-lg text-slate-900 mb-4">Recent Pending Verifications</h3>
                    <div className="space-y-3">
                      {pendingVerifications.slice(0, 2).map((company) => (
                        <div
                          key={company.id}
                          className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-bold text-slate-900">{company.company}</h4>
                              <p className="text-sm text-slate-600">
                                Submitted: {company.submissionDate}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {company.documents.map((doc) => (
                                  <span
                                    key={doc}
                                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                                  >
                                    {doc}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm font-medium rounded-full">
                              Under Review
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Companies */}
                  <div className="trust-card">
                    <h3 className="font-bold text-lg text-slate-900 mb-4">Sample Verified Companies</h3>
                    <div className="space-y-3">
                      {verifiedCompanies.map((company) => (
                        <div
                          key={company.id}
                          className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-green-200"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-slate-900">{company.name}</h4>
                              <CheckCircle2 size={18} className="text-green-600" />
                            </div>
                            <p className="text-sm text-slate-600">
                              Verified: {company.verificationDate}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-600">{company.trustScore}%</p>
                            <p className="text-xs text-slate-500">{company.internships} internships</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Verification Tab */}
              {activeTab === "verification" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">Company Verification Queue</h2>
                    <Button variant="outline">
                      <Download size={16} className="mr-2" />
                      Export Report
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {pendingVerifications.map((company) => (
                      <div key={company.id} className="trust-card">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-900">{company.company}</h3>
                            <p className="text-sm text-slate-600 mt-1">
                              Registration: {company.registrationNumber}
                            </p>
                            <p className="text-sm text-slate-600">Email: {company.email}</p>
                          </div>
                          <span
                            className={`px-3 py-1 text-sm font-medium rounded-full ${company.status === "Final Review"
                              ? "bg-green-50 text-green-700"
                              : company.status === "Document Review"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-yellow-50 text-yellow-700"
                              }`}
                          >
                            {company.status}
                          </span>
                        </div>

                        <div className="mb-4 pb-4 border-b border-slate-200">
                          <p className="text-sm font-medium text-slate-900 mb-3">
                            Submitted Documents:
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {company.documents.map((doc) => (
                              <div
                                key={doc}
                                className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200"
                              >
                                <CheckCircle2 size={16} className="text-green-600" />
                                <span className="text-sm text-slate-700">{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex items-center gap-2">
                            <Eye size={16} />
                            Review Documents
                          </Button>
                          <Button variant="outline" className="flex items-center gap-2">
                            <Upload size={16} />
                            Request More Info
                          </Button>
                        </div>

                        <div className="flex gap-3 mt-3">
                          <Button className="flex-1 bg-green-600 hover:bg-green-700">
                            <CheckCircle2 size={16} className="mr-2" />
                            Approve
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <XCircle size={16} className="mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scam Reports Tab */}
              {activeTab === "scam-reports" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">Scam & Fraud Reports</h2>
                    <Button variant="outline">
                      <Download size={16} className="mr-2" />
                      Export Reports
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {scamReports.map((report) => (
                      <div key={report.id} className="trust-card border-l-4 border-l-red-500">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-900">{report.internship}</h3>
                            <p className="text-sm text-slate-600">Company: {report.company}</p>
                            <p className="text-sm text-slate-600">Reported by: {report.reportedBy}</p>
                          </div>
                          <div className="text-right">
                            <span
                              className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 ${report.status === "Verified Scam"
                                ? "bg-red-50 text-red-700"
                                : "bg-orange-50 text-orange-700"
                                }`}
                            >
                              {report.status}
                            </span>
                            <p className="text-xs text-slate-500">{report.reportDate}</p>
                          </div>
                        </div>

                        <p className="text-sm text-slate-700 mb-4">{report.description}</p>

                        <div className="mb-4 pb-4 border-b border-slate-200 space-y-2">
                          <p className="text-sm font-medium text-slate-900">Priority:</p>
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${report.priority === "Critical"
                              ? "bg-red-50 text-red-700"
                              : report.priority === "High"
                                ? "bg-orange-50 text-orange-700"
                                : "bg-yellow-50 text-yellow-700"
                              }`}
                          >
                            {report.priority}
                          </span>

                          <div className="pt-2">
                            <p className="text-sm font-medium text-slate-900 mb-2">Evidence:</p>
                            <div className="flex flex-wrap gap-2">
                              {report.evidence.map((ev) => (
                                <span
                                  key={ev}
                                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                                >
                                  {ev}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {report.action && (
                          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm font-medium text-red-900">
                              Action Taken: {report.action}
                            </p>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <Button className="flex items-center gap-2">
                            <Eye size={16} />
                            View Details
                          </Button>
                          {report.status !== "Verified Scam" && (
                            <>
                              <Button variant="outline" className="flex items-center gap-2">
                                Mark as Verified Scam
                              </Button>
                              <Button variant="outline" className="flex items-center gap-2">
                                <XCircle size={16} />
                                Dismiss
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPanel;
