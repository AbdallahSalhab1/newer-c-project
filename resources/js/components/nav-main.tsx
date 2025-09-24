import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from '@/Hooks/useTranslation';

export function NavMain({ items = [] }: { items: NavItem[] }) {
  const page = usePage();
  const { t } = useTranslation();

  return (
    <SidebarGroup className="px-2 py-0">
      <SidebarGroupLabel>{t('messages.platform')}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              isActive={page.url.startsWith(
                typeof item.href === 'string' ? item.href : item.href.url
              )}
              tooltip={{ children: t(`messages.${item.title}`) }}
            >
              <Link href={item.href} prefetch>
                {item.icon && <item.icon />}
                <span>{t(`messages.${item.title}`)}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
