import type { Plan, View } from './types'
import { PlanCard } from './PlanCard'

export default function HomeView({
  plans,
  onView,
  setView,
}: {
  plans: Plan[]
  onView: (id: number) => void
  setView: (v: View) => void
}) {
  return (
    <section className="view">
      <div className="hero">
        <div className="eyebrow">Your NYC plan feed</div>
        <h1>There is always something happening. Find the people to go with.</h1>
        <p>
          Choose from more than 20 activity-specific plans with crew details, optional host previews,
          locations, expected spending, and transparent group matching.
        </p>
        <div className="hero-actions">
          <button className="primary" onClick={() => setView('plans')}>Explore all plans</button>
          <button className="secondary" onClick={() => setView('dare')}>Try Dare Crew</button>
        </div>
      </div>
      <div className="section-head">
        <div>
          <h2>Best matches this week</h2>
          <p>Groups ranked for your food, music, nightlife, culture, and small-crew preferences.</p>
        </div>
        <button className="link" onClick={() => setView('plans')}>View all plans →</button>
      </div>
      <div className="cards">
        {plans.slice(0, 3).map(p => <PlanCard key={p.id} plan={p} onView={onView} />)}
      </div>
    </section>
  )
}
