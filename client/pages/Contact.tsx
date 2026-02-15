import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    HelpCircle,
    Building2
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "student",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message sent successfully! We'll get back to you within 24 hours.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                userType: "student",
            });
        }, 1000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            content: "support@skillbridge.com",
            description: "We'll respond within 24 hours",
            link: "mailto:support@skillbridge.com",
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+1 (555) 123-4567",
            description: "Mon-Fri, 9AM-6PM EST",
            link: "tel:+15551234567",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "123 Innovation Drive, Suite 500",
            description: "San Francisco, CA 94105",
            link: "https://maps.google.com",
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Monday - Friday",
            description: "9:00 AM - 6:00 PM EST",
            link: null,
        },
    ];

    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Click on 'Sign Up' in the header, choose your account type (Student/Company), and fill in your details.",
        },
        {
            question: "Is Skill Secure free for students?",
            answer: "Yes! Skill Secure is completely free for students. We charge companies a small fee to post internships.",
        },
        {
            question: "How long does company verification take?",
            answer: "Company verification typically takes 24-48 hours. We review all documents carefully to ensure authenticity.",
        },
        {
            question: "Can I apply to multiple internships?",
            answer: "Absolutely! You can apply to as many internships as you'd like. We recommend tailoring your application for each role.",
        },
    ];

    const supportCategories = [
        {
            icon: MessageSquare,
            title: "General Inquiries",
            description: "Questions about our platform and services",
        },
        {
            icon: HelpCircle,
            title: "Technical Support",
            description: "Help with account issues or bugs",
        },
        {
            icon: Building2,
            title: "Company Partnerships",
            description: "Interested in posting internships?",
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Have questions? We're here to help! Reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => (
                            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <info.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-primary hover:underline font-medium block mb-1"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-slate-900 dark:text-slate-100 font-medium mb-1">{info.content}</p>
                                    )}
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{info.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Support Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {supportCategories.map((category, index) => (
                            <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <category.icon className="w-6 h-6 text-primary" />
                                        <CardTitle className="text-slate-900 dark:text-slate-100">{category.title}</CardTitle>
                                    </div>
                                    <CardDescription className="dark:text-slate-400">{category.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                Send Us a Message
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>
                        </div>

                        <Card className="border-none shadow-xl">
                            <CardContent className="pt-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* User Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                            I am a...
                                        </label>
                                        <select
                                            name="userType"
                                            value={formData.userType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                            required
                                        >
                                            <option value="student">Student</option>
                                            <option value="company">Company</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                            required
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                            required
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        <Send className="mr-2 h-4 w-4" />
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Quick answers to common questions
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="border-l-4 border-l-primary">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-slate-900 dark:text-slate-100">{faq.question}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Can't find what you're looking for?
                            </p>
                            <Button variant="outline" asChild>
                                <a href="#contact-form">Contact Support</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-slate-200 dark:bg-slate-800 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                                <p className="text-slate-600 dark:text-slate-400 text-lg">
                                    Interactive Map Coming Soon
                                </p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
                                    123 Innovation Drive, Suite 500, San Francisco, CA 94105
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
