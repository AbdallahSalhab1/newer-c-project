import { Head } from '@inertiajs/react';
import CustomDashboardLayout from '@/layouts/CustomDashboardLayout';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as editAppearance } from '@/routes/appearance';
import { useTranslation } from '@/Hooks/useTranslation';

export default function Appearance() {
    const { t } = useTranslation();

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: t('messages.appearance_settings'),
            href: editAppearance().url,
        },
    ];

    return (
        <CustomDashboardLayout title={t('messages.dashboard')}>
            <Head title={t('messages.appearance_settings')} />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title={t('messages.appearance_settings')}
                        description={t('messages.appearance_settings_description')}
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </CustomDashboardLayout>   
    );
}
