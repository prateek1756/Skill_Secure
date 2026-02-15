import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, Target, Zap } from "lucide-react";

interface Recommendation {
    id: number;
    title: string;
    company: string;
    matchScore: number;
    reason: string;
    tags: string[];
    salary: string;
    location: string;
}

const mockRecommendations: Recommendation[] = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechVision Inc",
        matchScore: 95,
        reason: "Perfect match for your React and TypeScript skills",
        tags: ["React", "TypeScript", "Tailwind"],
        salary: "$2000/month",
        location: "Remote",
    },
    {
        id: 2,
        title: "Full Stack Developer Intern",
        company: "CloudNine Solutions",
        matchScore: 92,
        reason: "Your Node.js experience aligns well with this role",
        tags: ["Node.js", "MongoDB", "Express"],
        salary: "$2200/month",
        location: "San Francisco, CA",
    },
    {
        id: 3,
        title: "UI/UX Designer Intern",
        company: "DesignHub",
        matchScore: 88,
        reason: "Your Figma portfolio matches their requirements",
        tags: ["Figma", "UI Design", "Prototyping"],
        salary: "$1800/month",
        location: "New York, NY",
    },
];

const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400";
    if (score >= 80) return "text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400";
    return "text-yellow-600 bg-yellow-50 dark:bg-yellow-950 dark:text-yellow-400";
};

const getMatchIcon = (score: number) => {
    if (score >= 90) return <Target className="h-4 w-4" />;
    if (score >= 80) return <TrendingUp className="h-4 w-4" />;
    return <Zap className="h-4 w-4" />;
};

export const AIRecommendations = () => {
    return (
        <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Lightbulb className="h-4 w-4 text-white" />
                    </div>
                    <div>
                        <CardTitle className="dark:text-slate-100">AI-Powered Recommendations</CardTitle>
                        <CardDescription className="dark:text-slate-400">
                            Personalized internships based on your profile
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {mockRecommendations.map((rec) => (
                    <div
                        key={rec.id}
                        className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow bg-white dark:bg-slate-800/50"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-900 dark:text-slate-100">{rec.title}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{rec.company}</p>
                            </div>
                            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${getMatchColor(rec.matchScore)}`}>
                                {getMatchIcon(rec.matchScore)}
                                {rec.matchScore}% Match
                            </div>
                        </div>

                        {/* Reason */}
                        <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-900">
                            <p className="text-sm text-blue-900 dark:text-blue-300 flex items-start gap-2">
                                <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                {rec.reason}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            {rec.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs dark:bg-slate-700 dark:text-slate-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
                                <span className="font-semibold text-primary">{rec.salary}</span>
                                <span>📍 {rec.location}</span>
                            </div>
                            <Button size="sm" variant="outline" className="dark:bg-slate-800 dark:border-slate-700">
                                View Details
                            </Button>
                        </div>
                    </div>
                ))}

                {/* View All Button */}
                <Button variant="ghost" className="w-full" asChild>
                    <a href="/internships">View All Recommendations →</a>
                </Button>
            </CardContent>
        </Card>
    );
};
