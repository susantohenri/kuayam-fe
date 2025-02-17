import { type LucideIcon } from 'lucide-react'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
}

interface NavCategory {
  category: string
  items: NavItem[]
}

export function NavMain({ categories }: { categories: NavCategory[] }) {

  return (
    <>
      {categories.map((category) => (
        <SidebarGroup key={category.category}>
          <SidebarGroupLabel>{category.category}</SidebarGroupLabel>
          <SidebarMenu>
            {category.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  )
}

