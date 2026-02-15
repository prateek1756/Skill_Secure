import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Save, Upload, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const StudentProfileSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    university: "Stanford University",
    degree: "Bachelor of Science",
    major: "Computer Science",
    graduationYear: "2025",
    bio: "Passionate about building scalable web applications and solving complex problems.",
    linkedinUrl: "linkedin.com/in/johndoe",
    githubUrl: "github.com/johndoe",
    portfolioUrl: "johndoe.dev",
  });

  const [profileImage, setProfileImage] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=John");
  const [showPassword, setShowPassword] = useState(false);
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Profile Settings</h1>
            <p className="text-slate-600">Manage your account information and preferences</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Profile Picture</h3>
              <div className="flex items-center gap-6">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-primary/20"
                />
                <div>
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Button type="button" variant="outline" asChild>
                      <span className="flex items-center gap-2">
                        <Upload size={16} />
                        Change Photo
                      </span>
                    </Button>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <p className="text-xs text-slate-500 mt-2">JPG, PNG or GIF (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
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
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">University</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Degree</label>
                  <select
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>Bachelor of Science</option>
                    <option>Bachelor of Arts</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Major</label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Graduation Year</label>
                  <input
                    type="number"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Portfolio Links */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Portfolio Links</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="linkedin.com/in/yourprofile"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">GitHub Profile</label>
                  <input
                    type="url"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    placeholder="github.com/yourprofile"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Portfolio Website</label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="yourportfolio.com"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Security</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <Button variant="outline" type="button" className="w-full">
                  Change Password
                </Button>
              </div>
            </div>

            {/* Preferences */}
            <div className="trust-card">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Email me about new internships matching my profile</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Receive application status updates</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Allow companies to contact me directly</span>
                </label>
              </div>
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
      </section>
    </Layout>
  );
};

export default StudentProfileSettings;
