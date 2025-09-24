// resources/js/Layouts/CustomDashboardLayout.tsx
import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import { CustomSidebar } from '@/components/Custom/CustomSidebar';
import { CustomHeader } from '@/components/Custom/CustomHeader';
import { type PropsWithChildren } from 'react';
import { type BreadcrumbItem } from '@/types';

interface CustomDashboardLayoutProps {
    title?: string;
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}

export default function CustomDashboardLayout({ 
    title, 
    breadcrumbs = [],
    children 
}: PropsWithChildren<CustomDashboardLayoutProps>) {
    const { t } = useTranslation();
    const { direction, isRTL } = useRTLHook();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div dir={direction} className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isRTL ? 'rtl' : 'ltr'}`}>
            <Head title={title || t('messages.dashboard')} />
            
            {/* Sidebar */}
            <CustomSidebar 
                isOpen={sidebarOpen} 
                onToggle={toggleSidebar}
            />

            {/* Main Content Area */}
            <div className={`transition-all duration-300 min-h-screen ${
                sidebarOpen 
                    ? isRTL ? 'mr-64' : 'ml-64'
                    : isRTL ? 'mr-16' : 'ml-16'
            }`}>
                {/* Header */}
                <CustomHeader onToggleSidebar={toggleSidebar} />

                {/* Page Content */}
                <main className="p-6">
                    {/* Breadcrumbs (optional) */}
                    {breadcrumbs.length > 0 && (
                        <nav className="mb-6 flex" aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2">
                                {breadcrumbs.map((crumb, index) => (
                                    <li key={index} className="flex items-center">
                                        {index > 0 && (
                                            <span className="text-gray-400 mx-2">/</span>
                                        )}
                                        <a
                                            href={crumb.href}
                                            className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        >
                                            {crumb.title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}
                    
                    {children}
                </main>
            </div>
        </div>
    );
}