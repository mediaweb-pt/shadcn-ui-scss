import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

// import "@/shadcn-scss/styles/rocket-ui.scss";
import "@/styles/scss/layout.scss";

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
