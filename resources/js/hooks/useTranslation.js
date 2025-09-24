import { usePage } from '@inertiajs/react';

export function useTranslation() {
    const { translations, locale } = usePage().props;
    
    const t = (key, replacements = {}) => {
        // Check if translations exist
        if (!translations || typeof translations !== 'object') {
            console.warn('Translations not loaded:', key);
            return key;
        }
        
        const keys = key.split('.');
        let translation = translations;
        
        for (const k of keys) {
            if (translation && typeof translation === 'object' && k in translation) {
                translation = translation[k];
            } else {
                console.warn('Translation key not found:', key);
                return key; // Return key if translation not found
            }
        }
        
        if (typeof translation === 'string') {
            // Replace placeholders like :name with actual values
            return Object.keys(replacements).reduce((str, placeholder) => {
                return str.replace(new RegExp(`:${placeholder}`, 'g'), replacements[placeholder]);
            }, translation);
        }
        
        return key;
    };
    
    return { t, locale, translations };
}