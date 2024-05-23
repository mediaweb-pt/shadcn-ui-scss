import { CardsActivityGoal } from "@/registry/scss/example/cards/activity-goal"
import { CardsCalendar } from "@/registry/scss/example/cards/calendar"
import { CardsChat } from "@/registry/scss/example/cards/chat"
import { CardsCookieSettings } from "@/registry/scss/example/cards/cookie-settings"
import { CardsCreateAccount } from "@/registry/scss/example/cards/create-account"
import { CardsDataTable } from "@/registry/scss/example/cards/data-table"
import { CardsMetric } from "@/registry/scss/example/cards/metric"
import { CardsPaymentMethod } from "@/registry/scss/example/cards/payment-method"
import { CardsReportIssue } from "@/registry/scss/example/cards/report-issue"
import { CardsShare } from "@/registry/scss/example/cards/share"
import { CardsStats } from "@/registry/scss/example/cards/stats"
import { CardsTeamMembers } from "@/registry/scss/example/cards/team-members"

export default function CardsDemo() {
  return (
    <div className="components-example__grid">
      <div className="components-example__subgrid components-example__subgrid-1">
        <CardsStats />
        <div className="components-example__subgrid components-example__subgrid-4">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            <CardsMetric />
          </div>
        </div>
        <div className="components-example__subgrid components-example__subgrid-5">
          <div className="space-y-base">
            <CardsTeamMembers />
            <CardsCookieSettings />
            <CardsPaymentMethod />
          </div>
          <div className="space-y-base">
            <CardsChat />
            <CardsCreateAccount />
            <div className="hidden xl:block">
              <CardsReportIssue />
            </div>
          </div>
        </div>
      </div>
      <div className="components-example__subgrid components-example__subgrid-2">
        <div className="components-example__subgrid components-example__subgrid-6">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
            <CardsActivityGoal />
          </div>
          <div className="components-example__subgrid-7">
            <CardsMetric />
          </div>
        </div>
        <div className="none md_block">
          <CardsDataTable />
        </div>
        <CardsShare />
        <div className="xl_none">
          <CardsReportIssue />
        </div>
      </div>
    </div>
  )
}
