import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Briefcase, Award } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string | number;
    change?: string;
    icon: React.ReactNode;
    trend?: "up" | "down";
}

const StatsCard = ({ title, value, change, icon, trend }: StatsCardProps) => {
    return (
        <Card className="dark:bg-slate-900 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {title}
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {icon}
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</div>
                {change && (
                    <div className="flex items-center gap-1 mt-1">
                        <TrendingUp
                            className={`h-4 w-4 ${trend === "up" ? "text-green-500" : "text-red-500 rotate-180"
                                }`}
                        />
                        <span
                            className={`text-xs font-medium ${trend === "up" ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {change}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-500">from last month</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export const DashboardStats = () => {
    const stats = [
        {
            title: "Total Applications",
            value: 12,
            change: "+3",
            icon: <Briefcase className="h-4 w-4" />,
            trend: "up" as const,
        },
        {
            title: "Active Internships",
            value: 45,
            change: "+8",
            icon: <Users className="h-4 w-4" />,
            trend: "up" as const,
        },
        {
            title: "Profile Views",
            value: 234,
            change: "+12%",
            icon: <TrendingUp className="h-4 w-4" />,
            trend: "up" as const,
        },
        {
            title: "Skill Match",
            value: "87%",
            change: "+5%",
            icon: <Award className="h-4 w-4" />,
            trend: "up" as const,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
            ))}
        </div>
    );
};
