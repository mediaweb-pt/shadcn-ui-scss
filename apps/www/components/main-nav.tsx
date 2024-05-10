"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TooltipPortal } from "@radix-ui/react-tooltip"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn-scss/components/Tooltip"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="site__header-main_nav">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href="/" className="site__header-logo">
              <Icons.logo className="site__header-icon--lg" />
              <span className="hidden font-bold sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            SCSS Version, created by <a href="http://www.mediaweb.pt" target="_blank">Mediaweb</a>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <nav className="site__header-menu">
        {/* <Link
          href="/docs"
          className={cn(
            "site__header-link",
            pathname === "/docs" ? "site__header-link--active" : ""
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "site__header-link",
            pathname?.startsWith("/docs/components")
              ? "site__header-link--active"
              : ""
          )}
        >
          Components
        </Link> */}
        <Link
          href="/themes"
          className={cn(
            "site__header-link",
            pathname?.startsWith("/themes")
              ? "site__header-link--active"
              : ""
          )}
        >
          Themes
        </Link>
        {/* <Link
          href="/examples"
          className={cn(
            "site__header-link",
            pathname?.startsWith("/examples")
              ? "site__header-link--active"
              : ""
          )}
        >
          Examples
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "site__header-link",
            pathname?.startsWith("/blocks")
              ? "site__header-link--active"
              : ""
          )}
        >
          Blocks
        </Link> */}
        {/* <Link
          href={siteConfig.links.github}
          className={cn(
            "site__header-link"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  )
}
