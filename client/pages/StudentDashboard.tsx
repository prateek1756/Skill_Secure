import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ProfileProgress } from "@/components/ProfileProgress";
import { ApplicationTracker, ApplicationStatus } from "@/components/ApplicationTracker";
import { DashboardStats } from "@/components/DashboardStats";
import { AIRecommendations } from "@/components/AIRecommendations";
import {
  Plus,
  Download,
  Github,
  Linkedin,
  Bookmark,
  CheckCircle2,
  Clock,
  XCircle,
  Star,
  Edit2,
  LogOut,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.clear();
    // Navigate to login page
    navigate('/login');
  };

  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "Tailwind CSS"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const applications = [
    {
      id: 1,
      company: "TechCorp",
      position: "Frontend Developer Intern",
      status: "reviewing" as ApplicationStatus,
      appliedDate: "2024-02-10",
      lastUpdate: "2024-02-12",
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer Intern",
      status: "interview" as ApplicationStatus,
      appliedDate: "2024-02-08",
      lastUpdate: "2024-02-14",
    },
    {
      id: 3,
      company: "WebAgency",
      position: "UI/UX Designer Intern",
      status: "rejected" as ApplicationStatus,
      appliedDate: "2024-02-05",
      lastUpdate: "2024-02-11",
    },
    {
      id: 4,
      company: "DataSoft",
      position: "Data Analyst Intern",
      status: "offered" as ApplicationStatus,
      appliedDate: "2024-02-01",
      lastUpdate: "2024-02-15",
    },
    {
      id: 5,
      company: "CloudTech",
      position: "Backend Developer Intern",
      status: "applied" as ApplicationStatus,
      appliedDate: "2024-02-13",
    },
  ];

  const recommendations = [
    {
      id: 1,
      company: "CloudTech Solutions",
      position: "Full Stack Developer Intern",
      location: "San Francisco, CA",
      mode: "Hybrid",
      stipend: "₹30,000/month",
      matchScore: 94,
      legitimacy: 98,
    },
    {
      id: 2,
      company: "AI Innovations",
      position: "Machine Learning Intern",
      location: "Remote",
      mode: "Remote",
      stipend: "₹25,000/month",
      matchScore: 89,
      legitimacy: 96,
    },
    {
      id: 3,
      company: "Mobile First Apps",
      position: "React Native Developer Intern",
      location: "Bangalore, India",
      mode: "On-site",
      stipend: "₹28,000/month",
      matchScore: 91,
      legitimacy: 97,
    },
  ];

  const profileCompletion = 65;

  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div
              className={`${isSidebarOpen ? "block" : "hidden"
                } lg:block lg: col - span - 1 fixed lg:static top - 20 left - 0 right - 0 bottom - 0 bg - white lg: bg - transparent z - 40 overflow - y - auto`}
            >
              <div className="p-6 space-y-4">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden absolute top-4 right-4"
                >
                  ✕
                </button>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full" />
                  <div>
                    <p className="font-bold text-slate-900">John Doe</p>
                    <p className="text-xs text-slate-500">Student</p>
                  </div>
                </div>

                <nav className="space-y-2 pt-4 border-t border-slate-200">
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">
                    Dashboard
                  </button>
                  <Link
                    to="/internship-matching"
                    className="w-full block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-left"
                  >
                    Find Internships
                  </Link>
                  <Link
                    to="/career-roadmap"
                    className="w-full block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-left"
                  >
                    Career Roadmap
                  </Link>
                  <Link
                    to="/student-profile-settings"
                    className="w-full block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-left"
                  >
                    Profile Settings
                  </Link>
                </nav>

                <button className="w-full flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors" onClick={handleLogout}>
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Top Bar */}
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleGoBack}
                  className="hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex-1">Dashboard</h1>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Dashboard Stats */}
              <DashboardStats />

              {/* Profile Completion */}
              <ProfileProgress
                completionPercentage={65}
                completedFields={["Resume uploaded", "Skills added", "Email verified", "Phone number added"]}
                missingFields={["Portfolio links", "Project descriptions", "Academic details"]}
              />

              {/* Skills Section */}
              <div className="trust-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Skills</h3>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/edit-skills">Edit</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-slate-700 rounded-full text-sm border border-primary/20"
                    >
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-red-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                    className="flex-1 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button onClick={handleAddSkill} size="sm">
                    <Plus size={16} />
                  </Button>
                </div>
              </div>

              {/* Resume & Portfolio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="trust-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900">Resume</h3>
                    <Download size={20} className="text-primary" />
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Resume_John_Doe.pdf • 2.3 MB
                  </p>
                  <Button variant="outline" className="w-full" size="sm">
                    Update Resume
                  </Button>
                </div>

                <div className="trust-card">
                  <h3 className="font-bold text-slate-900 mb-4">Portfolio Links</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="GitHub URL"
                      defaultValue="github.com/johndoe"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="text"
                      placeholder="LinkedIn URL"
                      defaultValue="linkedin.com/in/johndoe"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              </div>

              {/* Applications Status */}
              <ApplicationTracker applications={applications} />

              {/* AI Recommendations */}
              <AIRecommendations />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentDashboard;
