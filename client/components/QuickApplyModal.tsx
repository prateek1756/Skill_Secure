import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Upload } from "lucide-react";

interface QuickApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
    internship: {
        id: number;
        title: string;
        company: string;
    };
}

export const QuickApplyModal = ({ isOpen, onClose, internship }: QuickApplyModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null as File | null,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.email || !formData.phone) {
            toast.error("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast.success(
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <div>
                        <p className="font-semibold">Application submitted!</p>
                        <p className="text-sm">Applied to {internship.title}</p>
                    </div>
                </div>
            );
            setIsSubmitting(false);
            onClose();

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                coverLetter: "",
                resume: null,
            });
        }, 1500);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size must be less than 5MB");
                return;
            }
            if (!file.name.match(/\.(pdf|doc|docx)$/i)) {
                toast.error("Only PDF, DOC, and DOCX files are allowed");
                return;
            }
            setFormData({ ...formData, resume: file });
            toast.success(`Resume "${file.name}" uploaded`);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto dark:bg-slate-900 dark:border-slate-800">
                <DialogHeader>
                    <DialogTitle className="dark:text-slate-100">Quick Apply</DialogTitle>
                    <DialogDescription className="dark:text-slate-400">
                        Apply to <span className="font-semibold text-primary">{internship.title}</span> at{" "}
                        {internship.company}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="dark:text-slate-200">
                            Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="fullName"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            required
                            className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="dark:text-slate-200">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="dark:text-slate-200">
                            Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                        />
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-2">
                        <Label htmlFor="resume" className="dark:text-slate-200">
                            Resume (PDF, DOC, DOCX - Max 5MB)
                        </Label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="resume"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById("resume")?.click()}
                                className="w-full dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                            >
                                <Upload className="h-4 w-4 mr-2" />
                                {formData.resume ? formData.resume.name : "Upload Resume"}
                            </Button>
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-2">
                        <Label htmlFor="coverLetter" className="dark:text-slate-200">
                            Cover Letter (Optional)
                        </Label>
                        <Textarea
                            id="coverLetter"
                            placeholder="Tell us why you're a great fit..."
                            value={formData.coverLetter}
                            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                            rows={4}
                            className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                        />
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
