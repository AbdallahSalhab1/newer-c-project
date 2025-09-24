// resources/js/Components/Custom/CustomSidebar.tsx
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import { type User as UserType } from '@/types';
import { 
    LayoutDashboard, 
    FolderOpen, 
    Settings,
    ChevronLeft,
    ChevronRight,
    User
} from 'lucide-react';

interface CustomSidebarProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function CustomSidebar({ isOpen, onToggle }: CustomSidebarProps) {
    const { t } = useTranslation();
    const { isRTL, rtlClass, textStart } = useRTLHook();
    const { url } = usePage();
    

    const navigationItems = [
        {
            name: t('messages.dashboard'),
            href: '/dashboard',
            icon: LayoutDashboard,
            current: url === '/custom-dashboard'
        },
        
    ];

    return (
        <div className={`fixed inset-y-0 z-50 flex ${isRTL ? 'right-0' : 'left-0'}`}>
            {/* Sidebar */}
            <div className={`relative flex w-fit flex-col transition-all duration-300 ${
                isOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'
            }`}>
                <div className={`flex grow flex-col gap-y-5 overflow-y-auto ${
                    isRTL ? 'border-l' : 'border-r'
                } border-gray-200 bg-white px-6 pb-4 dark:border-gray-700 dark:bg-gray-800 ${
                    isOpen ? 'w-64' : 'w-16'
                }`}>
                    {/* Logo */}
                    <div className="flex h-16 shrink-0 items-center justify-between">
                        <div className={`flex items-center ${isOpen ? '' : 'justify-center'}`}>
                            <div className="h-8 w-8 rounded bg-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">L</span>
                            </div>
                            {isOpen && (
                                <span className={`${rtlClass('ml-2', 'mr-2')} text-lg font-semibold text-gray-900 dark:text-white`}>
                                    Laravel Kit
                                </span>
                            )}
                        </div>
                        
                        {/* Toggle Button */}
                        <button
                            onClick={onToggle}
                            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
                        >
                            {isRTL ? (
                                isOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />
                            ) : (
                                isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigationItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors ${
                                                    item.current
                                                        ? 'bg-gray-50 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400'
                                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700'
                                                } ${!isOpen ? 'justify-center' : isRTL ? 'flex-row-reverse text-right' : ''}`}
                                                title={!isOpen ? item.name : undefined}
                                            >
                                                <item.icon
                                                    className={`h-6 w-6 shrink-0 ${
                                                        item.current
                                                            ? 'text-indigo-600 dark:text-indigo-400'
                                                            : 'text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                                {isOpen && (
                                                    <span className={textStart}>{item.name}</span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
                    onClick={onToggle}
                />
            )}
        </div>
    );
}