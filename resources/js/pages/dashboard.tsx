// resources/js/Pages/CustomDashboard.tsx
//import { CustomDashboard } from '@/routes';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import CustomDashboardLayout from '@/layouts/CustomDashboardLayout';



export default function dashboard() {
    const { t } = useTranslation();
    const { direction } = useRTLHook();

    // Define or import auth and user here
    const auth = {}; // Replace with actual auth object or import
    type User = {

    };
    const user: User = {
        extra_info_completed: false // or true, set default or fetch actual value
    };

    return (
        <CustomDashboardLayout title={t('messages.dashboard')}>
               <div dir={direction} className="space-y-6">
               
            </div>
        </CustomDashboardLayout>
    );
}