import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Target,
    Users,
    Shield,
    TrendingUp,
    Award,
    Heart,
    Zap,
    Globe,
    CheckCircle2
} from "lucide-react";

const About = () => {
    const stats = [
        { label: "Active Students", value: "50,000+", icon: Users },
        { label: "Verified Companies", value: "1,200+", icon: Shield },
        { label: "Internships Posted", value: "5,000+", icon: TrendingUp },
        { label: "Success Rate", value: "94%", icon: Award },
    ];

    const values = [
        {
            icon: Shield,
            title: "Trust & Safety",
            description: "Every company undergoes rigorous KYC verification to ensure authentic opportunities for students.",
        },
        {
            icon: Heart,
            title: "Student-First",
            description: "We prioritize student success with AI-powered recommendations and career guidance.",
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Leveraging cutting-edge technology to make internship discovery seamless and efficient.",
        },
        {
            icon: Globe,
            title: "Accessibility",
            description: "Connecting students worldwide with opportunities regardless of location or background.",
        },
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            bio: "Former tech recruiter passionate about bridging the gap between students and opportunities.",
        },
        {
            name: "Michael Chen",
            role: "CTO",
            bio: "AI/ML expert focused on building intelligent matching algorithms for better placements.",
        },
        {
            name: "Priya Sharma",
            role: "Head of Partnerships",
            bio: "Building relationships with top companies to bring quality internships to students.",
        },
        {
            name: "David Kim",
            role: "Head of Student Success",
            bio: "Dedicated to ensuring every student finds the perfect internship match.",
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                            Bridging Skills with Opportunities
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                            Skill Secure is on a mission to connect talented students with verified companies,
                            creating meaningful internship experiences that launch successful careers.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" asChild>
                                <a href="/signup">Get Started</a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="/internships">Browse Internships</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="text-center border-none shadow-lg">
                                <CardContent className="pt-6">
                                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                                    <p className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Target className="w-16 h-16 mx-auto mb-4 text-primary" />
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400">
                                To democratize access to quality internships and empower the next generation
                                of professionals through verified, meaningful opportunities.
                            </p>
                        </div>

                        <Card className="border-l-4 border-l-primary">
                            <CardContent className="pt-6">
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                    We believe that every student deserves access to authentic internship opportunities
                                    that help them grow professionally. By combining rigorous company verification with
                                    AI-powered matching, we ensure students connect with roles that align with their
                                    skills, interests, and career goals. Our platform eliminates the noise of fake
                                    listings and creates a trusted ecosystem where talent meets opportunity.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-slate-900 dark:text-slate-100">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Passionate professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
                            Why Choose Skill Secure?
                        </h2>
                        <div className="grid gap-4">
                            {[
                                "100% verified companies through rigorous KYC process",
                                "AI-powered internship recommendations tailored to your skills",
                                "Real-time application tracking and status updates",
                                "Direct communication with hiring managers",
                                "Career guidance and skill development resources",
                                "No hidden fees - completely free for students",
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-lg shadow">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-700 dark:text-slate-300 text-lg">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                            Join thousands of students who have found their dream internships through Skill Secure.
                        </p>
                        <Button size="lg" className="text-lg px-8" asChild>
                            <a href="/signup">Create Your Account</a>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
