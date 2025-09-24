// resources/js/Components/Custom/CustomHeader.tsx
import { usePage } from '@inertiajs/react';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { Menu } from 'lucide-react';
import { CustomUserMenu } from './CustomUserMenu';
import type { SharedData } from '@/types';


interface CustomHeaderProps {
    onToggleSidebar: () => void;
}

export function CustomHeader({ onToggleSidebar }: CustomHeaderProps) {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();
    const { rtlClass, textStart } = useRTLHook();

    return (
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left side - Menu button and page title */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={onToggleSidebar}
                            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 lg:hidden dark:hover:bg-gray-700"
                        >
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <h1 className={`${rtlClass('ml-4', 'mr-4')} text-lg font-semibold text-gray-900 dark:text-white ${textStart}`}>
                            {t('messages.dashboard')}
                        </h1>
                    </div>

                    {/* Right side - Language switcher and user menu */}
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        {auth?.user && <CustomUserMenu user={auth.user} />}
                    </div>
                </div>
            </div>
        </header>
    );
}