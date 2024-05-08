import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"

export function SiteHeader() {
  return (
    <header className="site__header">
      <div className="site__header-container container ">
        <MainNav />
        <MobileNav />
        <div className="site__header-socials">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="site__header-socials_container">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="site__header-button"
            >
              <Icons.gitHub className="site__header-icon" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="site__header-button"
            >
              <Icons.twitter className="site__header-icon" />
              <span className="sr-only">Twitter</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
