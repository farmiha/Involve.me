import { useState } from 'react'
import type { Plan, PlanCategory } from './types'
import { PlanCard } from './PlanCard'

const CATEGORIES: (PlanCategory | 'All')[] = [
  'All', 'Food crawl', 'Concert', 'Rave', 'Nightlife', 'Culture', 'Sports', 'Networking', 'Daytime',
]

export default function PlansView({
  plans,
  onView,
}: {
  plans: Plan[]
  onView: (id: number) => void
}) {
  const [filter, setFilter] = useState<PlanCategory | 'All'>('All')
  const visible = filter === 'All' ? plans : plans.filter(p => p.cat === filter)

  return (
    <section className="view">
      <div className="eyebrow">Plan First</div>
      <div className="section-head" style={{ marginTop: 6 }}>
        <div>
          <h2>What do you want to do?</h2>
          <p>More than 20 NYC plans across food, music, nightlife, culture, sports, networking, and daytime activities.</p>
        </div>
      </div>
      <div className="filters">
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={`filter ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c === 'All' ? 'All plans' : c}
          </button>
        ))}
      </div>
      <p className="feed-status">{visible.length} plan{visible.length === 1 ? '' : 's'} available in NYC</p>
      <div className="cards">
        {visible.map(p => <PlanCard key={p.id} plan={p} onView={onView} />)}
      </div>
    </section>
  )
}
