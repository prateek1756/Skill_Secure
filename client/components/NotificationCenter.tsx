import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, Trash2, X } from "lucide-react";
import { useNotifications, Notification } from "@/lib/notificationStore";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const notificationIcons = {
    application: "📋",
    message: "💬",
    deadline: "⏰",
    system: "🔔",
};

const notificationColors = {
    application: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
    message: "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800",
    deadline: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800",
    system: "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800",
};

export const NotificationCenter = () => {
    const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification, clearAll } =
        useNotifications();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const getTimeAgo = (timestamp: string) => {
        const now = new Date();
        const notifTime = new Date(timestamp);
        const diffMs = now.getTime() - notifTime.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return "Just now";
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${diffDays}d ago`;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Bell Icon Button */}
            <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </Badge>
                )}
            </Button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 z-50 max-h-[600px] flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Notifications</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                {unreadCount > 0 ? `${unreadCount} unread` : "All caught up!"}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {notifications.length > 0 && (
                                <>
                                    {unreadCount > 0 && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={markAllAsRead}
                                            className="text-xs"
                                        >
                                            <Check className="h-3 w-3 mr-1" />
                                            Mark all read
                                        </Button>
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={clearAll}
                                        className="h-8 w-8"
                                    >
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                    </Button>
                                </>
                            )}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto flex-1">
                        {notifications.length === 0 ? (
                            <div className="p-8 text-center">
                                <Bell className="h-12 w-12 mx-auto text-slate-300 dark:text-slate-700 mb-3" />
                                <p className="text-slate-500 dark:text-slate-500">No notifications yet</p>
                                <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">
                                    We'll notify you when something happens
                                </p>
                            </div>
                        ) : (
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${!notification.read ? "bg-blue-50/50 dark:bg-blue-950/20" : ""
                                            }`}
                                        onClick={() => {
                                            if (!notification.read) {
                                                markAsRead(notification.id);
                                            }
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            {/* Icon */}
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center text-xl border ${notificationColors[notification.type]
                                                    }`}
                                            >
                                                {notificationIcons[notification.type]}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <h4
                                                        className={`text-sm font-medium ${!notification.read
                                                                ? "text-slate-900 dark:text-slate-100"
                                                                : "text-slate-700 dark:text-slate-300"
                                                            }`}
                                                    >
                                                        {notification.title}
                                                    </h4>
                                                    {!notification.read && (
                                                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
                                                    )}
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                                    {notification.message}
                                                </p>
                                                <div className="flex items-center justify-between mt-2">
                                                    <span className="text-xs text-slate-500 dark:text-slate-500">
                                                        {getTimeAgo(notification.timestamp)}
                                                    </span>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteNotification(notification.id);
                                                        }}
                                                        className="h-6 px-2 text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {notifications.length > 0 && (
                        <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-center">
                            <Link
                                to="/notifications"
                                className="text-sm text-primary hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                View all notifications
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
