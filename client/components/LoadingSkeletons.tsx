import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export const InternshipCardSkeleton = () => {
    return (
        <Card className="animate-pulse dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
                <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-2">
                        <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    </div>
                    <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>
                <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded" />

                <div className="space-y-2 pt-2">
                    <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="h-3 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-9 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
            </CardFooter>
        </Card>
    );
};

export const ProfileCardSkeleton = () => {
    return (
        <Card className="animate-pulse dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <div className="h-5 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-6 w-12 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>
                <div className="h-4 w-48 bg-slate-200 dark:bg-slate-700 rounded" />
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />

                <div className="space-y-2">
                    <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="space-y-1">
                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="space-y-1">
                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export const DashboardSkeleton = () => {
    return (
        <div className="space-y-6">
            {/* Header Skeleton */}
            <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />

            {/* Profile Progress Skeleton */}
            <ProfileCardSkeleton />

            {/* Skills Skeleton */}
            <Card className="animate-pulse dark:bg-slate-900 dark:border-slate-800">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="h-5 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                        <div className="h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Applications Skeleton */}
            <Card className="animate-pulse dark:bg-slate-900 dark:border-slate-800">
                <CardHeader>
                    <div className="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
                </CardHeader>
                <CardContent className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg space-y-3">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2 flex-1">
                                    <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
                                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                                </div>
                                <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4].map((j) => (
                                    <div key={j} className="h-6 w-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                ))}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export const LoadingSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
    const sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-3",
        lg: "h-12 w-12 border-4",
    };

    return (
        <div
            className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin`}
        />
    );
};

export const PageLoader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="text-center space-y-4">
                <LoadingSpinner size="lg" />
                <p className="text-slate-600 dark:text-slate-400">Loading...</p>
            </div>
        </div>
    );
};
