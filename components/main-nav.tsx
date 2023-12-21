import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center gap-[1px]">
        <Icons.logo className="hidden md:inline-block h-7 w-7" />
        <span className="inline-block lg:text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
