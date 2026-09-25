import { useState } from 'react'
import type { JoinRequest } from './types'

export default function HostView({
  requests,
  onAccept,
  onDecline,
  onCreatePlan,
  notify,
}: {
  requests: JoinRequest[]
  onAccept: (id: number) => void
  onDecline: (id: number) => void
  onCreatePlan: (title: string, budget: string, lookingFor: string) => void
  notify: (msg: string) => void
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [budget, setBudget] = useState('')
  const [lookingFor, setLookingFor] = useState('2 new people')

  function publish() {
    if (!title.trim()) {
      notify('Please add a plan title before publishing.')
      return
    }
    onCreatePlan(title, budget || '$10–$25', lookingFor)
    setModalOpen(false)
    setTitle('')
    setBudget('')
  }

  return (
    <section className="view">
      <div className="eyebrow">Host experience</div>
      <div className="section-head" style={{ marginTop: 6 }}>
        <div>
          <h2>Your plan is live</h2>
          <p>See how a creator reviews incoming requests before adding someone to their crew.</p>
        </div>
        <button className="primary" onClick={() => setModalOpen(true)}>+ Create another plan</button>
      </div>
      <div className="host-grid">
        <div>
          <div className="host-hero">
            <div className="eyebrow" style={{ color: '#80574a' }}>You are the Host</div>
            <h1>Saturday sunset picnic & photo walk</h1>
            <p>You created a low-pressure DUMBO plan for people who enjoy photography, coffee, and meeting new friends outdoors.</p>
            <div className="plan-summary">
              <b>Saturday · 3:00 PM · DUMBO Waterfront</b>
              <span>Expected spend: $10–$25 · Crew: You + 2 friends · Looking for: 2 more people</span>
            </div>
            <button className="outline" onClick={() => notify('Prototype: Host can edit the plan description, capacity, cost estimate, and meetup notes.')}>
              Edit plan details
            </button>
          </div>
          <div className="info host-timeline">
            <h2 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 6px' }}>Host flow</h2>
            <div className="host-step">
              <div className="step-num">1</div>
              <div><b>Create the plan</b><span>Set the activity, public meetup area, budget estimate, group capacity, vibe, and optional preview clip.</span></div>
            </div>
            <div className="host-step">
              <div className="step-num">2</div>
              <div><b>Review requests</b><span>See interests, social intent, shared activities, and compatibility before accepting.</span></div>
            </div>
            <div className="host-step">
              <div className="step-num">3</div>
              <div><b>Accept a member</b><span>Mutual acceptance creates a temporary crew chat and releases the public meetup details.</span></div>
            </div>
            <div className="host-step">
              <div className="step-num">4</div>
              <div><b>Welcome and coordinate</b><span>Use host prompts, a public meetup plan, and respectful cancellation tools.</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-head" style={{ margin: '0 0 12px' }}>
            <div>
              <h2>Requests to join</h2>
              <p>{requests.length} pending request{requests.length === 1 ? '' : 's'}</p>
            </div>
          </div>
          <div className="request-stack">
            {requests.length ? (
              requests.map(r => (
                <article className="request-card" key={r.id}>
                  <div className={`pic ${r.color}`}>{r.initial}</div>
                  <div>
                    <h3>{r.name}</h3>
                    <p>{r.bio}</p>
                    <div className="request-tags">
                      {r.tags.map(t => <span className="r-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="request-actions">
                    <button className="accept" onClick={() => onAccept(r.id)}>Accept</button>
                    <button className="decline" onClick={() => onDecline(r.id)}>Decline</button>
                  </div>
                </article>
              ))
            ) : (
              <div className="info">
                <b>No pending requests</b>
                <p className="meta">You reviewed every request. New compatible people will appear here as they request to join.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`modal-backdrop ${modalOpen ? 'open' : ''}`}>
        <div className="modal">
          <h2>Create a new plan</h2>
          <p>As a Host, describe what you are doing, who you hope to meet, the expected spending, and a public initial meetup area.</p>
          <div className="field">
            <label>Plan title</label>
            <input
              placeholder="e.g., Sunset picnic in Domino Park"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Expected spend per person</label>
            <input
              placeholder="e.g., $10–$25"
              value={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Looking for</label>
            <select value={lookingFor} onChange={e => setLookingFor(e.target.value)}>
              <option>2 new people</option>
              <option>3 new people</option>
              <option>Another pair / double date</option>
              <option>A small crew</option>
            </select>
          </div>
          <div className="modal-actions">
            <button className="outline" onClick={() => setModalOpen(false)}>Cancel</button>
            <button className="primary" onClick={publish}>Publish plan</button>
          </div>
        </div>
      </div>
    </section>
  )
}
