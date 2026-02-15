import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "Engineering",
    location: "",
    mode: "Remote",
    stipend: "",
    duration: "3 months",
    description: "",
    responsibilities: [""],
    requirements: [""],
    benefits: [""],
    skills: [] as string[],
    applicationDeadline: "",
    startDate: "",
  });

  const [newSkill, setNewSkill] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = (field: "responsibilities" | "requirements" | "benefits") => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const handleRemoveItem = (field: "responsibilities" | "requirements" | "benefits", index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleItemChange = (field: "responsibilities" | "requirements" | "benefits", index: number, value: string) => {
    const items = [...formData[field]];
    items[index] = value;
    setFormData({
      ...formData,
      [field]: items,
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Job posted successfully!");
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/company-dashboard" className="text-primary hover:underline flex items-center gap-2">
              <ArrowLeft size={20} />
              Back
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Post New Internship</h1>
              <p className="text-slate-600">Create and publish a new internship opportunity</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900">Job Title *</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g., Full Stack Developer Intern"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>Engineering</option>
                    <option>Product</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Operations</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Work Mode *</label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>Remote</option>
                    <option>On-site</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., San Francisco, CA"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Monthly Stipend *</label>
                  <input
                    type="text"
                    name="stipend"
                    value={formData.stipend}
                    onChange={handleChange}
                    placeholder="e.g., ₹30,000"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Duration</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>1 month</option>
                    <option>2 months</option>
                    <option>3 months</option>
                    <option>4 months</option>
                    <option>6 months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Job Description</h3>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-900">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell candidates about this internship opportunity..."
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>

            {/* Responsibilities */}
            <div className="trust-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-900">Key Responsibilities</h3>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddItem("responsibilities")}
                  className="flex items-center gap-1"
                >
                  <Plus size={16} />
                  Add
                </Button>
              </div>
              <div className="space-y-3">
                {formData.responsibilities.map((resp, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) => handleItemChange("responsibilities", index, e.target.value)}
                      placeholder="e.g., Develop React components"
                      className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    {formData.responsibilities.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem("responsibilities", index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="trust-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-900">Requirements</h3>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddItem("requirements")}
                  className="flex items-center gap-1"
                >
                  <Plus size={16} />
                  Add
                </Button>
              </div>
              <div className="space-y-3">
                {formData.requirements.map((req, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => handleItemChange("requirements", index, e.target.value)}
                      placeholder="e.g., 2+ years of React experience"
                      className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    {formData.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem("requirements", index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                  >
                    {skill}
                    <button
                      type="button"
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
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
                  placeholder="Add a skill (e.g., React)..."
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button type="button" onClick={handleAddSkill}>
                  Add
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="trust-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-900">Benefits</h3>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddItem("benefits")}
                  className="flex items-center gap-1"
                >
                  <Plus size={16} />
                  Add
                </Button>
              </div>
              <div className="space-y-3">
                {formData.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleItemChange("benefits", index, e.target.value)}
                      placeholder="e.g., Health insurance, Free snacks"
                      className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    {formData.benefits.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem("benefits", index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Application Deadline *</label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="trust-card bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Pro tip:</strong> Jobs with detailed descriptions and clear requirements get 3x more applications. Make sure your posting is complete and accurate.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Publishing..." : "Publish Job"}
              </Button>
              <Button size="lg" variant="outline" type="button" asChild>
                <Link to="/company-dashboard">Cancel</Link>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default PostJobForm;
