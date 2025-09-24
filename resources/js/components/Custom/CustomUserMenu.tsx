import { useState, useRef, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/Hooks/useTranslation';
import { useRTLHook } from '@/hooks/useRTLHook';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { type User as UserType } from '@/types';
import { Link, router } from '@inertiajs/react';

interface CustomUserMenuProps {
  user: UserType;
}

export function CustomUserMenu({ user }: CustomUserMenuProps) {
  const { t } = useTranslation();
  const { isRTL, rtlClass, textStart } = useRTLHook();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    router.post('/logout');
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          <span className={textStart}>{user.name}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={isRTL ? 'start' : 'end'}
        className="w-56"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className={`text-sm font-medium text-gray-900 dark:text-white ${textStart}`}>
              {user.name}
            </p>
            <p className={`text-sm text-gray-500 dark:text-gray-400 ${textStart}`}>
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="/settings/profile"  // Changed from "/profile" to "/settings/profile"
              className={`flex items-center cursor-pointer ${textStart}`}
              onClick={() => setIsOpen(false)}
            >
              <Settings className={`h-4 w-4 ${rtlClass('mr-2', 'ml-2')}`} />
              {t('messages.settings')}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <button
            onClick={handleLogout}
            className={`flex w-full items-center cursor-pointer ${textStart}`}
          >
            <LogOut className={`h-4 w-4 ${rtlClass('mr-2', 'ml-2')}`} />
            {t('messages.logout')}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}