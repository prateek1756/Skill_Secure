import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, XCircle, AlertCircle } from "lucide-react";

export type ApplicationStatus = "applied" | "reviewing" | "interview" | "offered" | "rejected";

interface Application {
    id: number;
    company: string;
    position: string;
    status: ApplicationStatus;
    appliedDate: string;
    lastUpdate?: string;
}

interface ApplicationTrackerProps {
    applications: Application[];
}

const statusConfig = {
    applied: {
        label: "Applied",
        icon: Circle,
        color: "text-blue-500",
        bgColor: "bg-blue-50 dark:bg-blue-950",
        borderColor: "border-blue-200 dark:border-blue-800",
    },
    reviewing: {
        label: "Under Review",
        icon: Clock,
        color: "text-yellow-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-950",
        borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    interview: {
        label: "Interview",
        icon: AlertCircle,
        color: "text-purple-500",
        bgColor: "bg-purple-50 dark:bg-purple-950",
        borderColor: "border-purple-200 dark:border-purple-800",
    },
    offered: {
        label: "Offered",
        icon: CheckCircle2,
        color: "text-green-500",
        bgColor: "bg-green-50 dark:bg-green-950",
        borderColor: "border-green-200 dark:border-green-800",
    },
    rejected: {
        label: "Rejected",
        icon: XCircle,
        color: "text-red-500",
        bgColor: "bg-red-50 dark:bg-red-950",
        borderColor: "border-red-200 dark:border-red-800",
    },
};

const statusOrder: ApplicationStatus[] = ["applied", "reviewing", "interview", "offered"];

export const ApplicationTracker = ({ applications }: ApplicationTrackerProps) => {
    const getStatusIndex = (status: ApplicationStatus) => {
        if (status === "rejected") return -1;
        return statusOrder.indexOf(status);
    };

    return (
        <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
                <CardTitle className="dark:text-slate-100">Application Tracker</CardTitle>
                <CardDescription className="dark:text-slate-400">
                    Track your internship applications ({applications.length} total)
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {applications.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                        <p>No applications yet</p>
                        <p className="text-sm mt-1">Start applying to internships to track your progress</p>
                    </div>
                ) : (
                    applications.map((app) => {
                        const config = statusConfig[app.status];
                        const Icon = config.icon;
                        const currentIndex = getStatusIndex(app.status);
                        const isRejected = app.status === "rejected";

                        return (
                            <div
                                key={app.id}
                                className={`p-4 rounded-lg border ${config.borderColor} ${config.bgColor} transition-all hover:shadow-md`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                            {app.position}
                                        </h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{app.company}</p>
                                    </div>
                                    <Badge variant="outline" className={`${config.color} border-current`}>
                                        <Icon className="h-3 w-3 mr-1" />
                                        {config.label}
                                    </Badge>
                                </div>

                                {/* Progress Pipeline */}
                                {!isRejected && (
                                    <div className="relative">
                                        <div className="flex items-center justify-between">
                                            {statusOrder.map((status, index) => {
                                                const stepConfig = statusConfig[status];
                                                const StepIcon = stepConfig.icon;
                                                const isCompleted = index <= currentIndex;
                                                const isCurrent = index === currentIndex;

                                                return (
                                                    <div key={status} className="flex-1 relative">
                                                        {/* Connector Line */}
                                                        {index < statusOrder.length - 1 && (
                                                            <div
                                                                className={`absolute top-3 left-1/2 w-full h-0.5 ${isCompleted
                                                                        ? "bg-primary"
                                                                        : "bg-slate-200 dark:bg-slate-700"
                                                                    }`}
                                                            />
                                                        )}

                                                        {/* Step Circle */}
                                                        <div className="relative flex flex-col items-center">
                                                            <div
                                                                className={`w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all ${isCompleted
                                                                        ? "bg-primary text-white"
                                                                        : "bg-slate-200 dark:bg-slate-700 text-slate-400"
                                                                    } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                                                            >
                                                                {isCompleted ? (
                                                                    <CheckCircle2 className="h-4 w-4" />
                                                                ) : (
                                                                    <Circle className="h-3 w-3" />
                                                                )}
                                                            </div>
                                                            <span
                                                                className={`text-xs mt-2 text-center ${isCompleted
                                                                        ? "text-slate-900 dark:text-slate-100 font-medium"
                                                                        : "text-slate-500 dark:text-slate-500"
                                                                    }`}
                                                            >
                                                                {stepConfig.label}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Footer */}
                                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                                    <span>Applied: {new Date(app.appliedDate).toLocaleDateString()}</span>
                                    {app.lastUpdate && (
                                        <span>Updated: {new Date(app.lastUpdate).toLocaleDateString()}</span>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </CardContent>
        </Card>
    );
};
