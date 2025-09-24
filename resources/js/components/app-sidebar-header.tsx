import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { usePage } from '@inertiajs/react'; // Add this import
import { SharedData } from '@/types'; // Add this import

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const { locale } = usePage<SharedData>().props; // Get current locale
    
    return (
        <header 
            className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
            // Add dir attribute for RTL support based on current locale
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
            <div className="flex items-center gap-2">
                <SidebarTrigger className={locale === 'ar' ? '-mr-1' : '-ml-1'} />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
        </header>
    );
}