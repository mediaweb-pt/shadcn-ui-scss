import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Separator } from "@/registry/scss/ui/separator"

export function Announcement() {
  return (
    <Link
      href={siteConfig.links.mediaweb}
      target="_blank"
      className="announcement"
    >
      <Icons.mediaweb className="announcement__logo" />
      <Separator orientation="vertical" />
      <span>Know more about Mediaweb & Rocket UI</span>
      <ArrowRightIcon className="announcement__icon" />
    </Link>
  )
}
