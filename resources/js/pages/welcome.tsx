import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();
    const { direction } = useRTLHook();

    return (
        <>
            <Head title={t('messages.welcome')}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div 
                dir={direction}
                className="flex min-h-screen flex-col items-center bg-gray-50 p-6 text-gray-900 lg:justify-center lg:p-8 dark:bg-gray-900 dark:text-white"
            >
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-lg border border-gray-300 px-5 py-1.5 text-sm leading-normal text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                            >
                                {t('messages.dashboard')}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-gray-900 transition-colors hover:border-gray-300 dark:text-white dark:hover:border-gray-600"
                                >
                                    {t('messages.login')}
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-lg border border-gray-300 px-5 py-1.5 text-sm leading-normal text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                                >
                                    {t('messages.register')}
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                
                <main className="flex flex-1 flex-col items-center justify-center text-center lg:flex-initial">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            {t('messages.welcome')}
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            {t('messages.welcome_subtitle')}
                        </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                {t('messages.go_to_dashboard')}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={register()}
                                    className="inline-flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                                >
                                    {t('messages.get_started')}
                                </Link>
                                <Link
                                    href={login()}
                                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                                >
                                    {t('messages.sign_in')}
                                </Link>
                            </>
                        )}
                    </div>
                </main>
            </div>   
        </>
    );
}