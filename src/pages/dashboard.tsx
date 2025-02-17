import { BirdIcon as Chicken, MapPin, Wheat, Scale } from 'lucide-react'
import { DatePickerWithRange } from "@/components/dashboard/date-range-picker"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { DashboardCard } from "@/components/dashboard/dashboard-card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { MultipleBarChart } from "@/components/dashboard/multiple-bar-chart"
import { LivestockPerClient } from "@/components/dashboard/livestock-per-client"
import { useEffect, useState } from 'react'
import { useAuthContext } from '@/contexts/auth'

export default function DashboardPage() {
  const { userData } = useAuthContext()
  const {access_token} = userData
  type DashboardCards = {
    liveStockCount: number
    activeLocations: number
    feedConsumption: number
    fcrOverall: number
  }
  const [dashboardCards, setDashboardCards] = useState<DashboardCards>()

  useEffect(() => {
    fetch('http://localhost:3000/company/2/statistic', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
    })
      .then(async (response) => {
        const data = await response.json()
        setDashboardCards(data)
      })
  }, [access_token]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Company</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center gap-2">
              <DatePickerWithRange />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Livestock Count"
              value={Number(dashboardCards?.liveStockCount ?? 0).toLocaleString()}
              description="+20.1% from last month"
              icon={<Chicken className="h-4 w-4 text-[#22c55e]" />}
            />
            <DashboardCard
              title="Active Locations"
              value={Number(dashboardCards?.activeLocations ?? 0).toLocaleString()}
              description="+180.1% from last month"
              icon={<MapPin className="h-4 w-4 text-[#22c55e]" />}
            />
            <DashboardCard
              title="Feed Consumption"
              value={Number(dashboardCards?.feedConsumption ?? 0).toLocaleString() + `kg`}
              description="+19% from last month"
              icon={<Wheat className="h-4 w-4 text-[#22c55e]" />}
            />
            <DashboardCard
              title="FCR Overall"
              value={Number(dashboardCards?.fcrOverall ?? 0).toLocaleString()}
              description="+201 since last hour"
              icon={<Scale className="h-4 w-4 text-[#22c55e]" />}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <MultipleBarChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Livestock per Client</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Top 5 clients by current livestock count
                </div>
              </CardHeader>
              <CardContent>
                <LivestockPerClient />
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

