import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { useTranslation } from '@/Hooks/useTranslation'; // Add this import

export default function LanguageSwitcher({ className = '' }) {
    const { locale, available_locales } = usePage().props;
    const { t } = useTranslation(); // Add hook
    
    const changeLanguage = (newLocale) => {
        router.post('/language', { locale: newLocale }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                // Update document direction for Arabic
                document.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = newLocale;
            }
        });
    };
    
    // Set initial direction based on current locale
    useEffect(() => {
        document.dir = locale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = locale;
    }, [locale]);
    
    // Language display names
    const languageNames = {
        en: 'English',
        ar: 'العربية'
    };
    
    return (
        <div className={`flex gap-2 ${className}`}>
            {available_locales.map((lang) => (
                <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                        locale === lang 
                            ? 'bg-gray-800 text-white' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                    lang={lang}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                    {languageNames[lang]}
                </button>
            ))}
        </div>
    );
}