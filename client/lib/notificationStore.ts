import { useState, useEffect } from "react";

export interface Notification {
    id: string;
    type: "application" | "message" | "deadline" | "system";
    title: string;
    message: string;
    timestamp: string;
    read: boolean;
    actionUrl?: string;
}

const NOTIFICATIONS_KEY = "skillbridge-notifications";

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // Load notifications from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(NOTIFICATIONS_KEY);
        if (stored) {
            try {
                setNotifications(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse notifications:", e);
            }
        } else {
            // Initialize with some demo notifications
            const demoNotifications: Notification[] = [
                {
                    id: "1",
                    type: "application",
                    title: "Application Update",
                    message: "Your application to TechCorp has been shortlisted!",
                    timestamp: new Date(Date.now() - 3600000).toISOString(),
                    read: false,
                },
                {
                    id: "2",
                    type: "deadline",
                    title: "Application Deadline",
                    message: "CloudTech internship deadline is in 2 days",
                    timestamp: new Date(Date.now() - 7200000).toISOString(),
                    read: false,
                },
                {
                    id: "3",
                    type: "message",
                    title: "New Message",
                    message: "StartupXYZ sent you a message",
                    timestamp: new Date(Date.now() - 86400000).toISOString(),
                    read: true,
                },
            ];
            setNotifications(demoNotifications);
        }
    }, []);

    // Save notifications to localStorage whenever they change
    useEffect(() => {
        if (notifications.length > 0) {
            localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
        }
    }, [notifications]);

    const markAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
        );
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
    };

    const deleteNotification = (id: string) => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    };

    const clearAll = () => {
        setNotifications([]);
    };

    const unreadCount = notifications.filter((n) => !n.read).length;

    return {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        deleteNotification,
        clearAll,
    };
};
