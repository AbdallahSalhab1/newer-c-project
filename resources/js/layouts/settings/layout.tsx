import { type PropsWithChildren } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import { cn } from '@/lib/utils';
import { User, Shield, Bell, Settings as SettingsIcon, Palette } from 'lucide-react';

// Simple Heading component since import is missing
function Heading({ title, description }: { title: string; description?: string }) {
    const { textStart } = useRTLHook();
    return (
        <div className={`space-y-1 ${textStart}`}>
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
        </div>
    );
}

export default function SettingsLayout({ children }: PropsWithChildren) {
    const { t } = useTranslation();
    const { isRTL, rtlClass, textStart, direction } = useRTLHook();
    
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    // Define sidebar navigation items with translations
    const sidebarNavItems = [
        {
            title: t('messages.profile'),
            href: '/settings/profile',
            icon: User,
        },
       
        
        {
            title: t('messages.password'),
            href: '/settings/password',
            icon: Bell,
        },
        {
            title: t('messages.appearance'),
            href: '/settings/appearance',
            icon: Palette,
        },
    ];

    return (
        <div className="px-4 py-6" dir={direction}>
            <Heading 
                title={t('messages.title')} 
                description={t('messages.description')} 
            />

            <div className={`flex flex-col lg:flex-row ${rtlClass('lg:space-x-12', 'lg:space-x-reverse lg:space-x-12')}`}>
                <aside className={`w-full max-w-xl lg:w-48 ${isRTL ? 'lg:order-2' : ''}`}>
                    <nav className={`flex flex-col space-y-1 ${rtlClass('space-x-0', 'space-x-reverse space-x-0')}`}>
                        {sidebarNavItems.map((item, index) => (
                            <Button
                                key={`${item.href}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn(
                                    `w-full ${rtlClass('justify-start', 'justify-end')} ${textStart}`,
                                    {
                                        'bg-muted': currentPath === item.href,
                                    }
                                )}
                            >
                                <Link 
                                    href={item.href} 
                                    prefetch
                                    className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    <item.icon className={`h-4 w-4 ${rtlClass('mr-2', 'ml-2')}`} />
                                    <span className={textStart}>{item.title}</span>
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </aside>

                <Separator className="my-6 lg:hidden" />

                <div className={`flex-1 md:max-w-2xl ${isRTL ? 'lg:order-1' : ''}`}>
                    <section className={`max-w-xl space-y-12 ${textStart}`}>
                        {children}
                    </section>
                </div>
            </div>
        </div>
    );
}