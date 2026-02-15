import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Save, Upload, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyProfileSettings = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "TechCorp",
    email: "hr@techcorp.com",
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    country: "United States",
    website: "techcorp.com",
    foundedYear: "2010",
    companySize: "500-1000",
    industry: "Technology",
    description:
      "Leading technology company focused on building innovative solutions for the modern web.",
    about:
      "We are a team of passionate engineers and designers dedicated to creating world-class software products.",
    linkedinUrl: "linkedin.com/company/techcorp",
    twitterUrl: "twitter.com/techcorp",
  });

  const [logo, setLogo] = useState("https://api.dicebear.com/7.x/icons/svg?seed=TechCorp");
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Profile updated successfully!");
    }, 1000);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
              <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">Company Settings</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Manage your company profile and preferences
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Logo */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Company Logo</h3>
              <div className="flex items-center gap-6">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-24 h-24 rounded-lg border-4 border-primary/20 object-cover"
                />
                <div>
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    <Button type="button" variant="outline" asChild>
                      <span className="flex items-center gap-2">
                        <Upload size={16} />
                        Change Logo
                      </span>
                    </Button>
                  </label>
                  <input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <p className="text-xs text-slate-500 mt-2">JPG, PNG or GIF (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900 flex items-center gap-1">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900 flex items-center gap-1">
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900 flex items-center gap-1">
                    <MapPin size={16} />
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900 flex items-center gap-1">
                    <Globe size={16} />
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Founded Year</label>
                  <input
                    type="number"
                    name="foundedYear"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>1-50</option>
                    <option>50-200</option>
                    <option>200-500</option>
                    <option>500-1000</option>
                    <option>1000+</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>E-commerce</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900">One-line Description</label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Brief description of your company"
                  />
                </div>
              </div>
            </div>

            {/* About Company */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">About Your Company</h3>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-900">Company Description</label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your company's mission, culture, and values..."
                />
                <p className="text-xs text-slate-500">This will be displayed on your company profile</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Social Links</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">LinkedIn Company Page</label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="linkedin.com/company/yourcompany"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Twitter Handle</label>
                  <input
                    type="url"
                    name="twitterUrl"
                    value={formData.twitterUrl}
                    onChange={handleChange}
                    placeholder="twitter.com/yourcompany"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Email me about new applications</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Receive weekly hiring insights</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Allow students to message me directly</span>
                </label>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="trust-card border-l-4 border-l-red-500 bg-red-50/50">
              <h3 className="font-bold text-lg text-red-900 mb-4">Danger Zone</h3>
              <p className="text-sm text-red-800 mb-4">
                These actions are permanent and cannot be undone.
              </p>
              <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                Delete Company Account
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="lg" type="submit" disabled={isSaving} className="flex items-center gap-2">
                <Save size={16} />
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
              <Button size="lg" variant="outline" type="button">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyProfileSettings;
