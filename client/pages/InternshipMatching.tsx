import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Bookmark, MapPin, Briefcase, DollarSign, Zap, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const InternshipMatching = () => {
  const [filters, setFilters] = useState({
    skills: [] as string[],
    location: "",
    mode: "" as "Remote" | "On-site" | "Hybrid" | "",
    minStipend: 0,
  });

  const [showFilters, setShowFilters] = useState(true);

  const allSkills = ["React", "Node.js", "Python", "TypeScript", "MongoDB", "PostgreSQL", "AWS"];

  const internships = [
    {
      id: 1,
      company: "CloudTech Solutions",
      position: "Full Stack Developer Intern",
      location: "San Francisco, CA",
      mode: "Hybrid",
      stipend: "₹30,000-35,000/month",
      matchScore: 94,
      legitimacy: 98,
      description: "Build scalable web applications with React and Node.js",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      verified: true,
      reviews: 4.8,
      reviewCount: 24,
    },
    {
      id: 2,
      company: "AI Innovations",
      position: "Machine Learning Intern",
      location: "Remote",
      mode: "Remote",
      stipend: "₹25,000-30,000/month",
      matchScore: 89,
      legitimacy: 96,
      description: "Work on cutting-edge ML models and AI research",
      skills: ["Python", "TensorFlow", "Data Analysis"],
      verified: true,
      reviews: 4.7,
      reviewCount: 18,
    },
    {
      id: 3,
      company: "Mobile First Apps",
      position: "React Native Developer Intern",
      location: "Bangalore, India",
      mode: "On-site",
      stipend: "₹28,000-32,000/month",
      matchScore: 91,
      legitimacy: 97,
      description: "Develop mobile apps for iOS and Android",
      skills: ["React", "JavaScript", "Mobile Development"],
      verified: true,
      reviews: 4.9,
      reviewCount: 31,
    },
    {
      id: 4,
      company: "DataSoft Analytics",
      position: "Data Analyst Intern",
      location: "Remote",
      mode: "Remote",
      stipend: "₹20,000-25,000/month",
      matchScore: 85,
      legitimacy: 95,
      description: "Analyze data and create insights for business decisions",
      skills: ["Python", "SQL", "Data Visualization"],
      verified: true,
      reviews: 4.6,
      reviewCount: 15,
    },
    {
      id: 5,
      company: "WebAgency Pro",
      position: "Frontend Developer Intern",
      location: "New York, NY",
      mode: "Hybrid",
      stipend: "₹32,000-38,000/month",
      matchScore: 88,
      legitimacy: 94,
      description: "Create beautiful and responsive web interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      verified: true,
      reviews: 4.8,
      reviewCount: 22,
    },
    {
      id: 6,
      company: "StartupXYZ",
      position: "Full Stack Developer Intern",
      location: "Austin, TX",
      mode: "On-site",
      stipend: "₹28,000-33,000/month",
      matchScore: 86,
      legitimacy: 93,
      description: "Build features for a fast-growing SaaS platform",
      skills: ["React", "Node.js", "PostgreSQL"],
      verified: true,
      reviews: 4.7,
      reviewCount: 19,
    },
  ];

  const toggleSkill = (skill: string) => {
    setFilters((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleModeChange = (mode: "Remote" | "On-site" | "Hybrid") => {
    setFilters((prev) => ({
      ...prev,
      mode: prev.mode === mode ? "" : mode,
    }));
  };

  const filteredInternships = internships.filter((internship) => {
    if (
      filters.skills.length > 0 &&
      !filters.skills.some((skill) => internship.skills.includes(skill))
    ) {
      return false;
    }
    if (filters.mode && internship.mode !== filters.mode) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Find Your Perfect Internship</h1>
            <p className="text-slate-600">
              {filteredInternships.length} verified opportunities matched to your profile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div
              className={`${
                showFilters ? "block" : "hidden"
              } lg:block space-y-6`}
            >
              <div className="flex items-center justify-between lg:hidden mb-4">
                <h3 className="font-bold text-slate-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-slate-500"
                >
                  ✕
                </button>
              </div>

              {/* Skills Filter */}
              <div className="trust-card">
                <h4 className="font-bold text-slate-900 mb-3">Skills</h4>
                <div className="space-y-2">
                  {allSkills.map((skill) => (
                    <label key={skill} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.skills.includes(skill)}
                        onChange={() => toggleSkill(skill)}
                        className="w-4 h-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mode Filter */}
              <div className="trust-card">
                <h4 className="font-bold text-slate-900 mb-3">Work Mode</h4>
                <div className="space-y-2">
                  {["Remote", "Hybrid", "On-site"].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => handleModeChange(mode as "Remote" | "On-site" | "Hybrid")}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        filters.mode === mode
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verification Filter */}
              <div className="trust-card">
                <h4 className="font-bold text-slate-900 mb-3">Verification</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Verified Companies Only</span>
                </label>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  setFilters({
                    skills: [],
                    location: "",
                    mode: "",
                    minStipend: 0,
                  })
                }
              >
                Clear Filters
              </Button>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4">
              {/* Filter Toggle Button (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors mb-4"
              >
                <ChevronDown size={18} />
                <span className="text-sm font-medium">Toggle Filters</span>
              </button>

              {/* Internship Cards */}
              <div className="space-y-4">
                {filteredInternships.length > 0 ? (
                  filteredInternships.map((internship) => (
                    <div key={internship.id} className="trust-card">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg text-slate-900">{internship.position}</h3>
                            {internship.verified && (
                              <Shield size={18} className="text-blue-600" title="Verified Company" />
                            )}
                          </div>
                          <p className="text-slate-600">{internship.company}</p>
                        </div>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0">
                          <Bookmark size={20} className="text-primary" />
                        </button>
                      </div>

                      <p className="text-sm text-slate-600 mb-4">{internship.description}</p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 pb-4 border-b border-slate-200">
                        <div>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin size={14} />
                            Location
                          </p>
                          <p className="text-sm font-medium text-slate-900">{internship.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Briefcase size={14} />
                            Mode
                          </p>
                          <p className="text-sm font-medium text-slate-900">{internship.mode}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <DollarSign size={14} />
                            Stipend
                          </p>
                          <p className="text-sm font-medium text-slate-900">{internship.stipend}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Shield size={14} />
                            Legitimacy
                          </p>
                          <p className="text-sm font-bold text-green-600">✓ {internship.legitimacy}%</p>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {internship.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Rating & Match Score */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Match Score */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-secondary"
                                  style={{ width: `${internship.matchScore}%` }}
                                />
                              </div>
                              <span className="text-sm font-bold text-primary">
                                {internship.matchScore}%
                              </span>
                            </div>
                            <Zap size={16} className="text-primary" />
                          </div>

                          {/* Company Rating */}
                          <div className="flex items-center gap-1 text-sm">
                            <span className="font-bold text-slate-900">{internship.reviews}</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-slate-500">({internship.reviewCount})</span>
                          </div>
                        </div>

                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="trust-card text-center py-12">
                    <p className="text-slate-600 mb-4">No internships found matching your filters</p>
                    <Button
                      variant="outline"
                      onClick={() =>
                        setFilters({
                          skills: [],
                          location: "",
                          mode: "",
                          minStipend: 0,
                        })
                      }
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternshipMatching;
