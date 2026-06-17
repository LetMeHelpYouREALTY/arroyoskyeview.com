import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CalendlyScheduleButton from './calendly-schedule-button'
import { cn } from '@/lib/utils'

export default function DrJanContactCard() {
  return (
    <div className="rounded-xl border-2 border-primary/25 bg-primary/5 p-6">
      <div className="mb-4 flex items-start">
        <div className="shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <span className="text-xl font-bold text-primary-foreground">DJ</span>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="mb-1 text-xl font-bold text-foreground">Dr. Jan Duffy</h3>
          <p className="mb-2 text-sm font-semibold text-primary">New Construction Home Preferred Buyer&apos;s Agent</p>
          <p className="mb-4 text-sm text-muted-foreground">
            Expert representation on new construction with construction monitoring, building standards inspection & insider knowledge.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <CalendlyScheduleButton
          text="Schedule time with me"
          className="w-full"
          variant="primary"
        />
        <Button asChild className="min-h-11 w-full font-semibold" variant="outline">
          <a href="tel:7029034687">Call/Text: (702) 903-4687</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className={cn(
            'min-h-11 w-full border-2 border-primary font-semibold',
            'bg-background text-primary hover:bg-accent',
          )}
        >
          <Link href="/work-with-dr-jan">Learn Why Choose Dr. Jan Duffy</Link>
        </Button>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs text-muted-foreground">
          <strong>Remember:</strong> Builders pay for buyer representation on Arroyo at Skyeview Homes—you&apos;re already funding an agent, so choose Dr. Jan Duffy who works exclusively for HOME BUYERS, not the builder.
        </p>
      </div>
    </div>
  )
}
