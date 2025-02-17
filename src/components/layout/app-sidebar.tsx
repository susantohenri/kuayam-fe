// import * as React from "react"
import { AudioWaveform, Command, GalleryVerticalEnd, SquareTerminal, Users, Truck, BarChart2, Users2, UserCircle, LayoutDashboard, MapPin, Package, FileBarChart, LogOut, Megaphone, Box } from 'lucide-react'
import { NavMain } from "@/components/layout/nav-main"
import { NavUser } from "@/components/layout/nav-user"
import { TeamSwitcher } from "@/components/layout/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navCategories: [
    {
      category: "Company",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: SquareTerminal,
        },
        {
          title: "Clients",
          url: "/clients",
          icon: Users,
        },
        {
          title: "Supplier",
          url: "/supplier",
          icon: Truck,
        },
        {
          title: "Products",
          url: "/products",
          icon: Box,
        },
        {
          title: "Trade",
          url: "/trade",
          icon: BarChart2,
        },
        {
          title: "Sales & Marketing",
          url: "/sales",
          icon: Megaphone,
        },
        {
          title: "Teams",
          url: "/teams",
          icon: Users2,
        },
        {
          title: "Users",
          url: "/users",
          icon: UserCircle,
        },
      ],
    },
    {
      category: "Client",
      items: [
        {
          title: "Overview",
          url: "/client/overview",
          icon: LayoutDashboard,
        },
        {
          title: "Locations",
          url: "/client/locations",
          icon: MapPin,
        },
        {
          title: "Stock",
          url: "/stock",
          icon: Package,
        },
        {
          title: "Reports",
          url: "/client/reports",
          icon: FileBarChart,
        },
      ],
    },
    {
      category: "Investor",
      items: [
        {
          title: "Dashboard",
          url: "/investor-dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Logout",
          url: "#",
          icon: LogOut,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain categories={data.navCategories} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}