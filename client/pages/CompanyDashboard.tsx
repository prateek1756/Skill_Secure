import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus,
  Eye,
  Users,
  CheckCircle2,
  Clock,
  Shield,
  Menu,
  LogOut,
  Edit2,
  Trash2,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.clear();
    // Navigate to login page
    navigate('/login');
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      location: "San Francisco, CA",
      mode: "Hybrid",
      stipend: "₹30,000-35,000/month",
      posted: "2024-02-01",
      views: 234,
      applications: 12,
      status: "Active",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      location: "Remote",
      mode: "Remote",
      stipend: "₹25,000-30,000/month",
      posted: "2024-01-28",
      views: 189,
      applications: 8,
      status: "Active",
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      location: "Bangalore, India",
      mode: "On-site",
      stipend: "₹20,000-25,000/month",
      posted: "2024-01-20",
      views: 145,
      applications: 5,
      status: "Closed",
    },
  ];

  const applicants = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Full Stack Developer Intern",
      skills: ["React", "Node.js", "TypeScript"],
      matchScore: 92,
      status: "Pending",
      appliedDate: "2024-02-10",
      resume: "sarah_resume.pdf",
    },
    {
      id: 2,
      name: "Alex Kumar",
      position: "Full Stack Developer Intern",
      skills: ["Vue.js", "Python", "MongoDB"],
      matchScore: 85,
      status: "Shortlisted",
      appliedDate: "2024-02-09",
      resume: "alex_resume.pdf",
    },
    {
      id: 3,
      name: "Emma Wilson",
      position: "Frontend Developer Intern",
      skills: ["React", "TypeScript", "Tailwind"],
      matchScore: 88,
      status: "Rejected",
      appliedDate: "2024-02-08",
      resume: "emma_resume.pdf",
    },
  ];

  const stats = {
    totalJobs: jobs.length,
    totalViews: 568,
    totalApplications: 25,
    verificationScore: 98,
  };

  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                    <p className="font-bold text-slate-900">TechCorp</p>
                    <p className="text-xs text-slate-500">Company</p>
                  </div>
                </div>

                <nav className="space-y-2 pt-4 border-t border-slate-200">
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">
                    Dashboard
                  </button>
                  <Link
                    to="/post-job"
                    className="w-full block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-left"
                  >
                    Post New Job
                  </Link>
                  <Link
                    to="/company-kyc"
                    className="w-full block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-left"
                  >
                    Verification (KYC)
                  </Link>
                  <Link
                    to="/company-profile-settings"
                    className="w-full block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-left"
                  >
                    Company Settings
                  </Link>
                </nav>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-900">Company Dashboard</h1>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Verification Status */}
              <div className="trust-card border-l-4 border-l-green-500 bg-gradient-to-r from-green-50/50 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-green-600" />
                    <div>
                      <h3 className="font-bold text-slate-900">Company Verified ✓</h3>
                      <p className="text-sm text-slate-600">
                        Your company has been verified. Trust score: {stats.verificationScore}%
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Badge
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="trust-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Posted Jobs</p>
                      <p className="text-3xl font-bold text-primary mt-1">{stats.totalJobs}</p>
                    </div>
                    <Plus size={24} className="text-primary/20" />
                  </div>
                </div>

                <div className="trust-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Total Views</p>
                      <p className="text-3xl font-bold text-secondary mt-1">{stats.totalViews}</p>
                    </div>
                    <Eye size={24} className="text-secondary/20" />
                  </div>
                </div>

                <div className="trust-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Applications</p>
                      <p className="text-3xl font-bold text-primary mt-1">{stats.totalApplications}</p>
                    </div>
                    <Users size={24} className="text-primary/20" />
                  </div>
                </div>

                <div className="trust-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Trust Score</p>
                      <p className="text-3xl font-bold text-green-600 mt-1">{stats.verificationScore}%</p>
                    </div>
                    <Shield size={24} className="text-green-600/20" />
                  </div>
                </div>
              </div>

              {/* Post New Job */}
              <div className="trust-card bg-gradient-to-r from-primary/5 to-secondary/5 border-dashed border-2 border-primary/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">Ready to hire?</h3>
                    <p className="text-sm text-slate-600">Post a new internship opportunity</p>
                  </div>
                  <Button asChild>
                    <Link to="/post-job">
                      <Plus size={16} className="mr-2" />
                      Post Job
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Posted Jobs */}
              <div className="trust-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Your Posted Jobs</h3>
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </div>

                <div className="space-y-3">
                  {jobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${selectedJob === job.id
                        ? "bg-primary/5 border-primary"
                        : "bg-slate-50 border-slate-200 hover:border-primary"
                        }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900">{job.title}</h4>
                          <p className="text-sm text-slate-600">{job.location} • {job.mode}</p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${job.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-200 text-slate-700"
                            }`}
                        >
                          {job.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          {job.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          {job.applications} applications
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Applicants */}
              <div className="trust-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Recent Applicants</h3>
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </div>

                <div className="space-y-3">
                  {applicants.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{applicant.name}</h4>
                        <p className="text-sm text-slate-600">{applicant.position}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {applicant.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Applied: {applicant.appliedDate}</p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold text-primary mb-2">
                          {applicant.matchScore}% Match
                        </div>
                        <div className="flex gap-2 mb-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${applicant.status === "Pending"
                              ? "bg-blue-50 text-blue-700"
                              : applicant.status === "Shortlisted"
                                ? "bg-yellow-50 text-yellow-700"
                                : "bg-red-50 text-red-700"
                              }`}
                          >
                            {applicant.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Star size={14} />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDashboard;
