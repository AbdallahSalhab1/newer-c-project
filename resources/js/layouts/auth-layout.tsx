// resources/js/Layouts/AuthLayout.tsx
import { Head } from '@inertiajs/react';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  description,
  children
}: PropsWithChildren<AuthLayoutProps>) {
  const { t } = useTranslation();
  const { direction, isRTL } = useRTLHook();

  return (
    <div dir={direction} className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Head title={title || t('messages.authentication')} />
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand Area */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {title || t('messages.authentication')}
            </h1>
            {description && (
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
          
          {/* Auth Card */}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}