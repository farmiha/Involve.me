import type { Plan } from './types'

export function Faces({ plan }: { plan: Plan }) {
  return (
    <div className="faces">
      {plan.members.map((m, i) => (
        <div key={i} className={`face ${m.color}`}>{m.initial}</div>
      ))}
    </div>
  )
}

export function PlanCard({ plan, onView }: { plan: Plan; onView: (id: number) => void }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="type">{plan.type}</span>
        <span className="date">{plan.date}</span>
      </div>
      <h3>{plan.title}</h3>
      <div className="meta">{plan.meta} · <b>{plan.budget}</b></div>
      <div className="card-bottom">
        <Faces plan={plan} />
        <span className="match">{plan.match}% match</span>
        <button className="join" onClick={() => onView(plan.id)}>View plan</button>
      </div>
    </article>
  )
}
