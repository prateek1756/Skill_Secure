import { useState, useEffect } from 'react';

export interface Internship {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    duration: string;
    workMode: string;
    salary: string;
    deadline: string;
    description: string;
    verified: boolean;
}

const BOOKMARKS_KEY = 'skillbridge-bookmarks';

export const useBookmarks = () => {
    const [bookmarks, setBookmarks] = useState<Internship[]>([]);

    // Load bookmarks from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(BOOKMARKS_KEY);
        if (stored) {
            try {
                setBookmarks(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse bookmarks:', e);
            }
        }
    }, []);

    // Save bookmarks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addBookmark = (internship: Internship) => {
        setBookmarks((prev) => [...prev, internship]);
    };

    const removeBookmark = (id: number) => {
        setBookmarks((prev) => prev.filter((b) => b.id !== id));
    };

    const isBookmarked = (id: number) => {
        return bookmarks.some((b) => b.id === id);
    };

    const toggleBookmark = (internship: Internship) => {
        if (isBookmarked(internship.id)) {
            removeBookmark(internship.id);
        } else {
            addBookmark(internship);
        }
    };

    return {
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        toggleBookmark,
        bookmarkCount: bookmarks.length,
    };
};
