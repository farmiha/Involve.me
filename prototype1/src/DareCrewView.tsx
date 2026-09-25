import { useRef, useState } from 'react'
import type { Plan } from './types'
import { Faces } from './PlanCard'

export default function DareCrewView({
  plans,
  onSeeDetails,
  notify,
}: {
  plans: Plan[]
  onSeeDetails: (id: number) => void
  notify: (msg: string) => void
}) {
  const [suggestion, setSuggestion] = useState<Plan | null>(null)
  const [spinning, setSpinning] = useState(false)
  const dareIndex = useRef(0)

  function spin() {
    setSpinning(true)
    window.setTimeout(() => {
      setSpinning(false)
      const p = plans[dareIndex.current % plans.length]
      dareIndex.current += 1
      setSuggestion(p)
    }, 1250)
  }

  return (
    <section className="view">
      <div className="dare-wrap">
        <div className="dare-card">
          <div className="eyebrow" style={{ color: '#e4f1e7' }}>Weekly Extrovert Challenge</div>
          <h1>Dare Crew</h1>
          <p>
            Generate a plan and compatible crew based on your interests, group-size comfort, location,
            social intent, and expected spending preference. Mutual acceptance locks the plan for both sides.
          </p>
          <div className={`wheel ${spinning ? 'spinning' : ''}`}>
            <div className="center">SPIN<br />THE DARE</div>
          </div>
          <div className="dare-actions">
            <button className="primary" onClick={spin}>Generate my Dare</button>
            <button
              className="secondary"
              onClick={() => notify('Both sides have 24 hours to accept, reject, or let a Dare expire. Rejection is private and has no penalty.')}
            >
              How it works
            </button>
          </div>
        </div>
        {suggestion && (
          <div className="suggestion">
            <div className="eyebrow">Your generated Dare</div>
            <h2>{suggestion.title}</h2>
            <p>
              {suggestion.date} · {suggestion.venue}. Estimated spend: <b>{suggestion.budget} per person</b>.
              This crew matches your interests, group-size preference, location, and social intent.
            </p>
            <div className="card-bottom">
              <Faces plan={suggestion} />
              <span className="match">{suggestion.match}% compatibility</span>
              <button className="primary" onClick={() => onSeeDetails(suggestion.id)}>See plan details</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
