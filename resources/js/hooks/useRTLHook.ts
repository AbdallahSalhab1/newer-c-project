// resources/js/Hooks/useRTLHook.ts
import { usePage } from '@inertiajs/react';
import { type CSSProperties } from 'react';

export function useRTLHook() {
    const { locale } = usePage().props;
    const isRTL = locale === 'ar';
    
    // Helper function to get RTL-aware classes
    const rtlClass = (ltrClass: string, rtlClass?: string) => {
        if (!rtlClass) {
            // Auto-convert common directional classes
            const classMap: Record<string, string> = {
                'ml-': 'mr-',
                'mr-': 'ml-',
                'pl-': 'pr-',
                'pr-': 'pl-',
                'left-': 'right-',
                'right-': 'left-',
                'rounded-l': 'rounded-r',
                'rounded-r': 'rounded-l',
                'rounded-tl': 'rounded-tr',
                'rounded-tr': 'rounded-tl',
                'rounded-bl': 'rounded-br',
                'rounded-br': 'rounded-bl',
                'border-l': 'border-r',
                'border-r': 'border-l',
                'text-left': 'text-right',
                'text-right': 'text-left',
            };
            
            if (isRTL) {
                let convertedClass = ltrClass;
                Object.entries(classMap).forEach(([ltr, rtl]) => {
                    convertedClass = convertedClass.replace(new RegExp(ltr, 'g'), rtl);
                });
                return convertedClass;
            }
            return ltrClass;
        }
        
        return isRTL ? rtlClass : ltrClass;
    };
    
    // Helper function for conditional RTL styling
    const rtlStyles = (ltrStyles: CSSProperties, rtlStyles: CSSProperties = {}) => {
        return isRTL ? { ...ltrStyles, ...rtlStyles } : ltrStyles;
    };
    
    // Direction-aware flex classes
    const flexStart = isRTL ? 'justify-end' : 'justify-start';
    const flexEnd = isRTL ? 'justify-start' : 'justify-end';
    const textStart = isRTL ? 'text-right' : 'text-left';
    const textEnd = isRTL ? 'text-left' : 'text-right';
    
    return {
        isRTL,
        rtlClass,
        rtlStyles,
        flexStart,
        flexEnd,
        textStart,
        textEnd,
        direction: isRTL ? 'rtl' : 'ltr'
    };
}