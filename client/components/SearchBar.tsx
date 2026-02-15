import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SearchBarProps {
    onSearch?: (query: string, filters: SearchFilters) => void;
    placeholder?: string;
}

export interface SearchFilters {
    location: string;
    type: string;
    duration: string;
    workMode: string;
    sortBy: string;
}

export const SearchBar = ({ onSearch, placeholder = "Search internships..." }: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState<SearchFilters>({
        location: "all",
        type: "all",
        duration: "all",
        workMode: "all",
        sortBy: "recent",
    });

    const handleSearch = () => {
        onSearch?.(searchQuery, filters);
    };

    const handleClearFilters = () => {
        setFilters({
            location: "all",
            type: "all",
            duration: "all",
            workMode: "all",
            sortBy: "recent",
        });
        setSearchQuery("");
        onSearch?.("", {
            location: "all",
            type: "all",
            duration: "all",
            workMode: "all",
            sortBy: "recent",
        });
    };

    const activeFilterCount = Object.values(filters).filter((v) => v !== "all" && v !== "recent").length;

    return (
        <div className="w-full space-y-4">
            {/* Search Input */}
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        type="text"
                        placeholder={placeholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="pl-10 pr-4 h-11"
                    />
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowFilters(!showFilters)}
                    className="h-11 w-11 relative"
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    {activeFilterCount > 0 && (
                        <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                            {activeFilterCount}
                        </Badge>
                    )}
                </Button>
                <Button onClick={handleSearch} className="h-11 px-6">
                    Search
                </Button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-4 animate-slide-up">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Filters</h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleClearFilters}
                            className="text-xs h-8"
                        >
                            <X className="h-3 w-3 mr-1" />
                            Clear All
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Location Filter */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                Location
                            </label>
                            <Select
                                value={filters.location}
                                onValueChange={(value) => setFilters({ ...filters, location: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    <SelectItem value="bangalore">Bangalore</SelectItem>
                                    <SelectItem value="mumbai">Mumbai</SelectItem>
                                    <SelectItem value="delhi">Delhi</SelectItem>
                                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                    <SelectItem value="pune">Pune</SelectItem>
                                    <SelectItem value="remote">Remote</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Type Filter */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                Type
                            </label>
                            <Select
                                value={filters.type}
                                onValueChange={(value) => setFilters({ ...filters, type: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="internship">Internship</SelectItem>
                                    <SelectItem value="full-time">Full Time</SelectItem>
                                    <SelectItem value="part-time">Part Time</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Duration Filter */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                Duration
                            </label>
                            <Select
                                value={filters.duration}
                                onValueChange={(value) => setFilters({ ...filters, duration: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Durations</SelectItem>
                                    <SelectItem value="1-3">1-3 months</SelectItem>
                                    <SelectItem value="3-6">3-6 months</SelectItem>
                                    <SelectItem value="6+">6+ months</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Work Mode Filter */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                Work Mode
                            </label>
                            <Select
                                value={filters.workMode}
                                onValueChange={(value) => setFilters({ ...filters, workMode: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select work mode" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Modes</SelectItem>
                                    <SelectItem value="remote">Remote</SelectItem>
                                    <SelectItem value="onsite">On-site</SelectItem>
                                    <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Sort By */}
                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            Sort By
                        </label>
                        <Select
                            value={filters.sortBy}
                            onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                        >
                            <SelectTrigger className="w-full md:w-64">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recent">Most Recent</SelectItem>
                                <SelectItem value="relevant">Most Relevant</SelectItem>
                                <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                                <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                                <SelectItem value="deadline">Application Deadline</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            )}

            {/* Active Filters Display */}
            {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-600 dark:text-slate-400">Active filters:</span>
                    {filters.location !== "all" && (
                        <Badge variant="secondary" className="gap-1">
                            Location: {filters.location}
                            <X
                                className="h-3 w-3 cursor-pointer hover:text-destructive"
                                onClick={() => setFilters({ ...filters, location: "all" })}
                            />
                        </Badge>
                    )}
                    {filters.type !== "all" && (
                        <Badge variant="secondary" className="gap-1">
                            Type: {filters.type}
                            <X
                                className="h-3 w-3 cursor-pointer hover:text-destructive"
                                onClick={() => setFilters({ ...filters, type: "all" })}
                            />
                        </Badge>
                    )}
                    {filters.duration !== "all" && (
                        <Badge variant="secondary" className="gap-1">
                            Duration: {filters.duration}
                            <X
                                className="h-3 w-3 cursor-pointer hover:text-destructive"
                                onClick={() => setFilters({ ...filters, duration: "all" })}
                            />
                        </Badge>
                    )}
                    {filters.workMode !== "all" && (
                        <Badge variant="secondary" className="gap-1">
                            Mode: {filters.workMode}
                            <X
                                className="h-3 w-3 cursor-pointer hover:text-destructive"
                                onClick={() => setFilters({ ...filters, workMode: "all" })}
                            />
                        </Badge>
                    )}
                </div>
            )}
        </div>
    );
};
