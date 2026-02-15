import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, DollarSign, Building2, Bookmark, Trash2, ArrowLeft } from "lucide-react";
import { useBookmarks } from "@/lib/bookmarkStore";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const SavedInternships = () => {
    const { bookmarks, removeBookmark } = useBookmarks();
    const navigate = useNavigate();

    const handleRemove = (id: number, title: string) => {
        removeBookmark(id);
        toast.success(`Removed "${title}" from saved internships`);
    };

    return (
        <Layout>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
                <div className="container">
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
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex-1">
                            Saved Internships
                        </h1>
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            {bookmarks.length} saved
                        </Badge>
                    </div>

                    {/* Saved Internships */}
                    {bookmarks.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bookmarks.map((internship) => (
                                <Card key={internship.id} className="hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex gap-2">
                                                <Badge variant={internship.verified ? "default" : "secondary"}>
                                                    {internship.verified ? "✓ Verified" : "Pending"}
                                                </Badge>
                                                <Badge variant="outline" className="text-xs">
                                                    {internship.workMode}
                                                </Badge>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 -mt-1 -mr-2 hover:bg-red-50 dark:hover:bg-red-950"
                                                onClick={() => handleRemove(internship.id, internship.title)}
                                            >
                                                <Trash2 className="h-4 w-4 text-red-500" />
                                            </Button>
                                        </div>
                                        <CardTitle className="text-xl dark:text-slate-100">{internship.title}</CardTitle>
                                        <CardDescription className="flex items-center gap-2 dark:text-slate-400">
                                            <Building2 className="h-4 w-4" />
                                            {internship.company}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{internship.description}</p>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <MapPin className="h-4 w-4" />
                                                {internship.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <Clock className="h-4 w-4" />
                                                {internship.duration === "1-3" ? "1-3 months" : internship.duration === "3-6" ? "3-6 months" : "6+ months"}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <Briefcase className="h-4 w-4" />
                                                {internship.type}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                                                <DollarSign className="h-4 w-4" />
                                                {internship.salary}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <span className="text-xs text-slate-500 dark:text-slate-500">
                                            Deadline: {new Date(internship.deadline).toLocaleDateString()}
                                        </span>
                                        <Button size="sm">Apply Now</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-16">
                            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                                <Bookmark className="h-8 w-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                No saved internships yet
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Start bookmarking internships to save them for later
                            </p>
                            <Button asChild>
                                <Link to="/internships">Browse Internships</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default SavedInternships;
