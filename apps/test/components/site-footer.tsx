import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="site__footer">
      <div className="site__footer-container container">
        <p>
          Built with{" "}
          <a
            href={siteConfig.links.twitter_shad}
            target="_blank"
            rel="noreferrer"
            className="site__footer-link"
          >
            shadcn
          </a>
          , by{" "}
          <a
            href={siteConfig.links.mediaweb}
            className="site__footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Mediaweb
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="site__footer-link"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
