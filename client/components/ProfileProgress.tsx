import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

interface ProfileProgressProps {
    completionPercentage: number;
    completedFields: string[];
    missingFields: string[];
}

export const ProfileProgress = ({
    completionPercentage,
    completedFields,
    missingFields,
}: ProfileProgressProps) => {
    return (
        <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg dark:text-slate-100">Profile Completion</CardTitle>
                    <Badge variant={completionPercentage === 100 ? "default" : "secondary"}>
                        {completionPercentage}%
                    </Badge>
                </div>
                <CardDescription className="dark:text-slate-400">
                    {completionPercentage === 100
                        ? "Your profile is complete! 🎉"
                        : "Complete your profile to increase visibility"}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Progress value={completionPercentage} className="h-2" />

                {/* Completed Fields */}
                {completedFields.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Completed ({completedFields.length})
                        </h4>
                        <div className="space-y-1">
                            {completedFields.map((field) => (
                                <div
                                    key={field}
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    {field}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Missing Fields */}
                {missingFields.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Missing ({missingFields.length})
                        </h4>
                        <div className="space-y-1">
                            {missingFields.map((field) => (
                                <div
                                    key={field}
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                >
                                    <Circle className="h-4 w-4 text-slate-400" />
                                    {field}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Milestones */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <span className={completionPercentage >= 25 ? "text-green-600 font-medium" : ""}>
                            25% Basic
                        </span>
                        <span className={completionPercentage >= 50 ? "text-green-600 font-medium" : ""}>
                            50% Good
                        </span>
                        <span className={completionPercentage >= 75 ? "text-green-600 font-medium" : ""}>
                            75% Great
                        </span>
                        <span className={completionPercentage === 100 ? "text-green-600 font-medium" : ""}>
                            100% Perfect
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
