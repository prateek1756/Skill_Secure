import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Target, CheckCircle2, Clock, Lock } from "lucide-react";
import { useState } from "react";

const CareerRoadmap = () => {
  const [selectedPath, setSelectedPath] = useState<"frontend" | "backend" | "fullstack" | null>(null);

  const skillGaps = [
    { skill: "React", current: 75, target: 95, gap: 20, priority: "High" },
    { skill: "TypeScript", current: 60, target: 90, gap: 30, priority: "High" },
    { skill: "System Design", current: 30, target: 80, gap: 50, priority: "Critical" },
    { skill: "Testing", current: 50, target: 85, gap: 35, priority: "High" },
    { skill: "Node.js", current: 70, target: 90, gap: 20, priority: "Medium" },
    { skill: "Database Design", current: 65, target: 85, gap: 20, priority: "Medium" },
  ];

  const learningPaths = {
    frontend: {
      title: "Frontend Developer Roadmap",
      duration: "6-8 months",
      level: "Intermediate to Advanced",
      courses: [
        {
          phase: 1,
          title: "Advanced React & State Management",
          duration: "4-6 weeks",
          topics: ["React Hooks", "Context API", "Redux/Zustand", "Performance Optimization"],
          difficulty: "Intermediate",
        },
        {
          phase: 2,
          title: "TypeScript Mastery",
          duration: "3-4 weeks",
          topics: ["Advanced Types", "Generics", "Decorators", "Type-Safe Patterns"],
          difficulty: "Intermediate",
        },
        {
          phase: 3,
          title: "Web Performance & Testing",
          duration: "4-5 weeks",
          topics: ["Jest", "React Testing Library", "E2E Testing", "Performance Monitoring"],
          difficulty: "Advanced",
        },
        {
          phase: 4,
          title: "System Design & Architecture",
          duration: "5-6 weeks",
          topics: ["Component Architecture", "Design Patterns", "Scalability", "Best Practices"],
          difficulty: "Advanced",
        },
      ],
    },
    backend: {
      title: "Backend Developer Roadmap",
      duration: "7-9 months",
      level: "Intermediate to Advanced",
      courses: [
        {
          phase: 1,
          title: "Node.js & Express Advanced",
          duration: "4-6 weeks",
          topics: ["Middleware", "Authentication", "Validation", "Error Handling"],
          difficulty: "Intermediate",
        },
        {
          phase: 2,
          title: "Database Design & Optimization",
          duration: "5-6 weeks",
          topics: ["SQL Optimization", "NoSQL", "Schema Design", "Indexing"],
          difficulty: "Advanced",
        },
        {
          phase: 3,
          title: "API Development & REST",
          duration: "4-5 weeks",
          topics: ["RESTful APIs", "GraphQL", "API Security", "Documentation"],
          difficulty: "Intermediate",
        },
        {
          phase: 4,
          title: "System Design & Scalability",
          duration: "6-8 weeks",
          topics: ["Microservices", "Caching", "Message Queues", "Distributed Systems"],
          difficulty: "Advanced",
        },
      ],
    },
    fullstack: {
      title: "Full Stack Developer Roadmap",
      duration: "10-12 months",
      level: "Intermediate to Advanced",
      courses: [
        {
          phase: 1,
          title: "Frontend Fundamentals Deep Dive",
          duration: "4-6 weeks",
          topics: ["React Advanced", "TypeScript", "CSS-in-JS", "Performance"],
          difficulty: "Intermediate",
        },
        {
          phase: 2,
          title: "Backend Fundamentals Deep Dive",
          duration: "4-6 weeks",
          topics: ["Node.js", "Express", "Database Design", "APIs"],
          difficulty: "Intermediate",
        },
        {
          phase: 3,
          title: "DevOps & Deployment",
          duration: "4-5 weeks",
          topics: ["Docker", "CI/CD", "Cloud Platforms", "Monitoring"],
          difficulty: "Advanced",
        },
        {
          phase: 4,
          title: "System Design & Architecture",
          duration: "6-8 weeks",
          topics: ["Microservices", "Scalability", "Security", "Best Practices"],
          difficulty: "Advanced",
        },
      ],
    },
  };

  const pathways = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Master React, TypeScript, and modern frontend tools",
      skills: 12,
      icon: "🎨",
      duration: "6-8 months",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Build scalable APIs and databases",
      skills: 14,
      icon: "⚙️",
      duration: "7-9 months",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description: "Master both frontend and backend",
      skills: 18,
      icon: "🔗",
      duration: "10-12 months",
    },
  ];

  const internshipPathway = [
    {
      stage: 1,
      name: "Junior Internship",
      position: "Frontend/Backend Intern",
      requirements: ["3-4 key skills", "Basic projects", "College portfolio"],
      timeline: "Month 0-2",
    },
    {
      stage: 2,
      name: "Mid-Level Internship",
      position: "Full Stack Developer Intern",
      requirements: ["8-10 advanced skills", "Published projects", "Open source contributions"],
      timeline: "Month 4-6",
    },
    {
      stage: 3,
      name: "Senior Internship",
      position: "Lead Developer Intern",
      requirements: ["12+ expert skills", "Portfolio & blog", "Tech leadership experience"],
      timeline: "Month 8-10",
    },
    {
      stage: 4,
      name: "Junior Developer Job",
      position: "Full Stack Developer",
      requirements: ["All roadmap skills completed", "Real-world projects", "Interview preparation"],
      timeline: "Month 12+",
    },
  ];

  const currentPath = selectedPath ? learningPaths[selectedPath] : null;

  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Your Career Roadmap</h1>
            <p className="text-lg text-slate-600">
              Personalized learning paths to bridge skill gaps and achieve your career goals
            </p>
          </div>

          {/* Skill Gap Analysis Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 size={28} className="text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Skill Gap Analysis</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillGaps.map((skill) => (
                <div key={skill.skill} className="trust-card">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900">{skill.skill}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        skill.priority === "Critical"
                          ? "bg-red-50 text-red-700"
                          : skill.priority === "High"
                          ? "bg-orange-50 text-orange-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {skill.priority}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Current: {skill.current}%</span>
                      <span className="text-slate-600">Target: {skill.target}%</span>
                    </div>

                    {/* Current Progress */}
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${skill.current}%` }}
                      />
                    </div>

                    {/* Target Progress (lighter background) */}
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/30 transition-all"
                        style={{ width: `${skill.target}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-sm font-medium text-primary">Gap: {skill.gap}%</span>
                    <span className="text-xs text-slate-500">
                      {skill.gap > 40 ? "⏱️ Long-term" : "📅 Near-term"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Pathways Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target size={28} className="text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Choose Your Path</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {pathways.map((pathway) => (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedPath(pathway.id === 1 ? "frontend" : pathway.id === 2 ? "backend" : "fullstack")}
                  className={`trust-card text-left transition-all cursor-pointer group ${
                    (selectedPath === "frontend" && pathway.id === 1) ||
                    (selectedPath === "backend" && pathway.id === 2) ||
                    (selectedPath === "fullstack" && pathway.id === 3)
                      ? "border-primary border-2 bg-primary/5"
                      : "hover:border-primary"
                  }`}
                >
                  <div className="text-4xl mb-3">{pathway.icon}</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{pathway.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{pathway.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{pathway.duration}</span>
                    <span className="text-primary font-medium">{pathway.skills} skills</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed Path */}
            {currentPath && (
              <div className="trust-card bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="font-bold text-2xl text-slate-900 mb-2">{currentPath.title}</h3>
                <p className="text-slate-600 mb-6">
                  Duration: {currentPath.duration} • Level: {currentPath.level}
                </p>

                <div className="space-y-6">
                  {currentPath.courses.map((course) => (
                    <div key={course.phase} className="p-4 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-slate-900">
                            Phase {course.phase}: {course.title}
                          </h4>
                          <p className="text-sm text-slate-600 mt-1">Duration: {course.duration}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          course.difficulty === "Advanced"
                            ? "bg-red-50 text-red-700"
                            : "bg-blue-50 text-blue-700"
                        }`}>
                          {course.difficulty}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="mt-6 w-full">Start Learning Path</Button>
              </div>
            )}
          </div>

          {/* Internship to Job Pathway */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={28} className="text-green-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Internship → Job Pathway</h2>
            </div>

            <div className="relative">
              {/* Timeline */}
              <div className="space-y-6">
                {internshipPathway.map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    {/* Connect line */}
                    {index < internshipPathway.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-primary to-secondary" />
                    )}

                    {/* Stage Card */}
                    <div className="flex gap-6">
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {stage.stage}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="trust-card">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-bold text-lg text-slate-900">{stage.name}</h4>
                              <p className="text-primary font-medium">{stage.position}</p>
                            </div>
                            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                              {stage.timeline}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                              <CheckCircle2 size={16} className="text-green-600" />
                              Key Requirements:
                            </p>
                            <ul className="space-y-1">
                              {stage.requirements.map((req) => (
                                <li key={req} className="text-sm text-slate-600 flex items-center gap-2 ml-6">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="trust-card border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-secondary/5 text-center py-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Start?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Pick a learning path above and start closing your skill gaps. Track your progress and find internships at every stage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg">Start Learning Path</Button>
              <Button size="lg" variant="outline">Browse Internships</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerRoadmap;
