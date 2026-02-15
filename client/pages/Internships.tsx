import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SearchBar, SearchFilters } from "@/components/SearchBar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, DollarSign, Building2, Bookmark } from "lucide-react";
import { useBookmarks } from "@/lib/bookmarkStore";
import { toast } from "sonner";
import { InternshipCardSkeleton } from "@/components/LoadingSkeletons";
import { QuickApplyModal } from "@/components/QuickApplyModal";

// Mock internship data
const mockInternships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    location: "Bangalore",
    type: "internship",
    duration: "3-6",
    workMode: "hybrid",
    salary: "₹15,000/month",
    deadline: "2026-03-15",
    description: "Work on React and TypeScript projects",
    verified: true,
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "AI Innovations",
    location: "Mumbai",
    type: "internship",
    duration: "6+",
    workMode: "remote",
    salary: "₹20,000/month",
    deadline: "2026-03-20",
    description: "Machine learning and data analysis",
    verified: true,
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Creative Studio",
    location: "Delhi",
    type: "internship",
    duration: "1-3",
    workMode: "onsite",
    salary: "₹12,000/month",
    deadline: "2026-03-10",
    description: "Design user interfaces and experiences",
    verified: true,
  },
  {
    id: 4,
    title: "Backend Developer Intern",
    company: "CloudTech",
    location: "Hyderabad",
    type: "internship",
    duration: "3-6",
    workMode: "remote",
    salary: "₹18,000/month",
    deadline: "2026-03-25",
    description: "Node.js and database development",
    verified: true,
  },
  {
    id: 5,
    title: "Marketing Intern",
    company: "Growth Labs",
    location: "Pune",
    type: "internship",
    duration: "1-3",
    workMode: "hybrid",
    salary: "₹10,000/month",
    deadline: "2026-03-12",
    description: "Digital marketing and content creation",
    verified: true,
  },
];

const Internships = () => {
  const [filteredInternships, setFilteredInternships] = useState(mockInternships);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInternship, setSelectedInternship] = useState<typeof mockInternships[0] | null>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookmarkClick = (internship: typeof mockInternships[0]) => {
    toggleBookmark(internship);
    if (isBookmarked(internship.id)) {
      toast.success("Removed from saved internships");
    } else {
      toast.success("Added to saved internships");
    }
  };

  const handleApplyClick = (internship: typeof mockInternships[0]) => {
    setSelectedInternship(internship);
  };

  const handleSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);

    let results = mockInternships.filter((internship) => {
      // Text search
      const matchesQuery = query === "" ||
        internship.title.toLowerCase().includes(query.toLowerCase()) ||
        internship.company.toLowerCase().includes(query.toLowerCase()) ||
        internship.description.toLowerCase().includes(query.toLowerCase());

      // Filter by location
      const matchesLocation = filters.location === "all" ||
        internship.location.toLowerCase() === filters.location.toLowerCase() ||
        (filters.location === "remote" && internship.workMode === "remote");

      // Filter by type
      const matchesType = filters.type === "all" || internship.type === filters.type;

      // Filter by duration
      const matchesDuration = filters.duration === "all" || internship.duration === filters.duration;

      // Filter by work mode
      const matchesWorkMode = filters.workMode === "all" || internship.workMode === filters.workMode;

      return matchesQuery && matchesLocation && matchesType && matchesDuration && matchesWorkMode;
    });

    // Sort results
    if (filters.sortBy === "recent") {
      results = results.sort((a, b) => b.id - a.id);
    } else if (filters.sortBy === "deadline") {
      results = results.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
    }

    setFilteredInternships(results);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16">
        <div className="container">
          {/* Header */}
          <div className="mb-8 space-y-2">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Find Your Perfect Internship
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Discover verified opportunities from trusted companies
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Showing <span className="font-semibold text-slate-900 dark:text-slate-100">{filteredInternships.length}</span> {filteredInternships.length === 1 ? "internship" : "internships"}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              // Show skeleton loaders while loading
              <>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <InternshipCardSkeleton key={i} />
                ))}
              </>
            ) : (
              filteredInternships.map((internship) => (
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
                        className="h-8 w-8 -mt-1 -mr-2"
                        onClick={() => handleBookmarkClick(internship)}
                      >
                        <Bookmark
                          className={`h-4 w-4 transition-colors ${isBookmarked(internship.id)
                            ? "fill-primary text-primary"
                            : "text-slate-400 hover:text-primary"
                            }`}
                        />
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
                    <Button size="sm" onClick={() => handleApplyClick(internship)}>
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>

          {/* Empty State */}
          {filteredInternships.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                No internships found
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your search or filters to find more opportunities
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Apply Modal */}
      {selectedInternship && (
        <QuickApplyModal
          isOpen={!!selectedInternship}
          onClose={() => setSelectedInternship(null)}
          internship={selectedInternship}
        />
      )}
    </Layout>
  );
};

export default Internships;
