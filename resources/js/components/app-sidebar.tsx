import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';
import { useTranslation } from '@/Hooks/useTranslation';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { usePage } from '@inertiajs/react'; // Add this import
import { SharedData } from '@/types'; // Add this import

export function AppSidebar() {
    const { t } = useTranslation();
    const { locale } = usePage<SharedData>().props; // Get current locale
    
    const mainNavItems: NavItem[] = [
        {
            title: t('messages.dashboard'),
            href: dashboard(),
            icon: LayoutGrid,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title: t('messages.repository'),
            href: 'https://github.com/laravel/react-starter-kit',
            icon: Folder,
        },
        {
            title: t('messages.documentation'),
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar 
            collapsible="icon" 
            variant="inset"
            // Add dir attribute for RTL support based on current locale
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <LanguageSwitcher className="mb-4" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}