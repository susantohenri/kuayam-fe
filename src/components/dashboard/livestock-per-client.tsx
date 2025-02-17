"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bird } from 'lucide-react'

const clientData = [
  {
    name: "Sragen Farm",
    location: "Jawa Tengah",
    count: 30000,
    avatarFallback: "SF"
  },
  {
    name: "Romi Farm",
    location: "Jawa Tengah",
    count: 25000,
    avatarFallback: "RF"
  },
  {
    name: "Slamet Farm",
    location: "Jawa Timur",
    count: 15000,
    avatarFallback: "SF"
  },
  {
    name: "Budi Farm",
    location: "Jawa Barat",
    count: 12000,
    avatarFallback: "BF"
  },
  {
    name: "Tegal Farm",
    location: "Jawa Tengah",
    count: 10000,
    avatarFallback: "TF"
  },
]

export function LivestockPerClient() {
  return (
    <div className="space-y-8">
      {clientData.map((client, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-[#76be6c] text-white">
              {client.avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{client.name}</p>
            <p className="text-sm text-muted-foreground">
              {client.location}
            </p>
          </div>
          <div className="ml-auto font-medium flex items-center gap-2">
            <Bird className="h-4 w-4 text-[#76be6c]" />
            {client.count.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
} 