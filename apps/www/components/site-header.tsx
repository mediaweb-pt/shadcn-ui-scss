import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/scss/ui/button"

export function SiteHeader() {
  return (
    <header className="site-layout__header">
      <div className="site-layout__header-container container">
        <MainNav />
        <MobileNav />
        <div className="site-layout__header-socials">
          <div className="site-layout__header-command-menu">
            <CommandMenu />
          </div>
          <nav className="site-layout__header-socials_container">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
              >
                <Icons.gitHub className="height-base width-base" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
              >
                <Icons.twitter className="height-base width-base fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
