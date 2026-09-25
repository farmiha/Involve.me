import type { Plan } from './types'

export default function PlanDetailView({
  plan,
  onBack,
  onRequestJoin,
  notify,
}: {
  plan: Plan
  onBack: () => void
  onRequestJoin: (plan: Plan) => void
  notify: (msg: string) => void
}) {
  return (
    <section className="view">
      <button className="link" onClick={onBack}>← Back to Plan First</button>
      <div className="detail-layout" style={{ marginTop: 16 }}>
        <div className="detail-hero">
          <div className="eyebrow">{plan.type} · {plan.match}% match for you</div>
          <h1>{plan.title}</h1>
          <p>{plan.desc}</p>
          <div className="clip">
            <div className="clip-top">
              <span className="clip-badge">▶ Host-uploaded preview</span>
              <span className="clip-badge">Optional clip</span>
            </div>
            <div className="play">▶</div>
            <div className="clip-bottom">
              <b>A preview from {plan.host.split(',')[0]}, the crew Host</b>
              <span>Prototype placeholder for a host-uploaded or properly licensed clip—not a scraped social-media post.</span>
            </div>
          </div>
          <div className="venue-grid">
            <div className="venue-item"><span>Where</span><b>{plan.venue}</b></div>
            <div className="venue-item"><span>Place type</span><b>{plan.kind}</b></div>
            <div className="venue-item"><span>Expected spend</span><b className="money">{plan.budget} per person</b></div>
          </div>
          <p className="expense-note">
            Estimated spend should include expected entry, ticket, food, drinks, and transit notes when
            relevant. Actual purchases remain between the attendee and venue.
          </p>
          <button className="primary" onClick={() => onRequestJoin(plan)}>Request to join this group</button>
          <button className="outline" style={{ marginLeft: 7 }} onClick={() => notify('Saved to your plans.')}>
            Save plan
          </button>
        </div>
        <div className="info">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, margin: '0 0 5px' }}>Meet the group</h2>
          <p className="meta" style={{ margin: '0 0 13px' }}>Review the group before requesting to join.</p>
          {plan.members.map((m, i) => (
            <div className="member" key={i}>
              <div className={`pic ${m.color}`}>{m.initial}</div>
              <div><strong>{m.name}</strong><span>{m.role}</span></div>
              {i === 0 && <b className="host-tag">HOST</b>}
            </div>
          ))}
          <div className="rules">
            <h3>Crew expectations</h3>
            <ul>
              <li>Meet in a public place using the plan's posted meetup point.</li>
              <li>Tell the Host promptly if your plans change.</li>
              <li>Use block/report controls for any safety concern.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
