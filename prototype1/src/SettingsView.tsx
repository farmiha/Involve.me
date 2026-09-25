import { useState } from 'react'
import type { UserProfile } from './types'
import { ARTIST_OPTIONS, HOBBY_OPTIONS, INTEREST_CARDS, computeWrappedStats, computeWrappedStatuses, MOST_COMPATIBLE_GROUP } from './data'

type Tab = 'interests' | 'music' | 'hobbies' | 'wrapped'

export default function SettingsView({
  profile,
  updateProfile,
  notify,
}: {
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
  notify: (msg: string) => void
}) {
  const [tab, setTab] = useState<Tab>('interests')

  function toggleInterest(title: string) {
    const has = profile.interests.includes(title)
    const next = has ? profile.interests.filter(i => i !== title) : [...profile.interests, title]
    updateProfile({ interests: next })
    notify('Your interest signals have been updated.')
  }

  function toggleArtist(a: string) {
    const has = profile.artists.includes(a)
    const next = has ? profile.artists.filter(x => x !== a) : [...profile.artists, a]
    updateProfile({ artists: next })
    notify('Artist preferences updated.')
  }

  function toggleHobby(h: string) {
    const has = profile.hobbies.includes(h)
    const next = has ? profile.hobbies.filter(x => x !== h) : [...profile.hobbies, h]
    updateProfile({ hobbies: next })
    notify('Hobby preferences updated.')
  }

  const wrappedStats = computeWrappedStats()
  const wrappedStatuses = computeWrappedStatuses()

  return (
    <section className="view">
      <div className="eyebrow">Account settings</div>
      <div className="section-head" style={{ marginTop: 6 }}>
        <div>
          <h2>Keep your matches current</h2>
          <p>Update what you are into now. Your identity remains verified; no ID resubmission is needed.</p>
        </div>
      </div>

      <div className="settings-tabs">
        <button className={`stab ${tab === 'interests' ? 'active' : ''}`} onClick={() => setTab('interests')}>Refresh interests</button>
        <button className={`stab ${tab === 'music' ? 'active' : ''}`} onClick={() => setTab('music')}>Artists & music</button>
        <button className={`stab ${tab === 'hobbies' ? 'active' : ''}`} onClick={() => setTab('hobbies')}>Hobbies & energy</button>
        <button className={`stab ${tab === 'wrapped' ? 'active' : ''}`} onClick={() => setTab('wrapped')}>Your 2026 Wrapped</button>
      </div>

      {tab === 'interests' && (
        <div className="settings-pane">
          <div className="settings-card">
            <h2 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 5px' }}>Would you be likely to go?</h2>
            <p className="meta" style={{ margin: '0 0 17px' }}>
              Tap the plans, places, and activity ideas that reflect your real life right now. These are
              prototype inspiration cards, not embedded TikTok or Instagram content.
            </p>
            <div className="interest-feed">
              {INTEREST_CARDS.map(card => {
                const liked = profile.interests.includes(card.title)
                return (
                  <article className="interest-card" key={card.id}>
                    <div className={`interest-visual ${card.gradientClass}`}>
                      <span>Prototype inspiration</span>
                      {card.emoji}
                    </div>
                    <div className="interest-body">
                      <b>{card.title}</b>
                      <p>{card.subtitle}</p>
                      <div className="toggle-row">
                        <button
                          className={`likely ${liked ? 'active' : ''}`}
                          onClick={() => toggleInterest(card.title)}
                        >
                          {liked ? '✓ Likely to go' : 'Likely to go'}
                        </button>
                        <button className="unlikely" onClick={() => toggleInterest(card.title)}>
                          Not for me
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {tab === 'music' && (
        <div className="settings-pane">
          <div className="settings-card">
            <h2 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 5px' }}>Artists you currently like</h2>
            <p className="meta" style={{ margin: '0 0 17px' }}>
              Music taste can improve concert, listening-party, nightlife, and event-crew suggestions.
            </p>
            <div className="music-list">
              {ARTIST_OPTIONS.map(a => {
                const active = profile.artists.includes(a)
                return (
                  <button key={a} className={`artist ${active ? 'active' : ''}`} onClick={() => toggleArtist(a)}>
                    <b>{active ? '✓ ' : ''}{a}</b>
                    <span>Use for music and event matching</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {tab === 'hobbies' && (
        <div className="settings-pane">
          <div className="settings-card">
            <h2 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 5px' }}>What kind of hobbies fit you?</h2>
            <p className="meta" style={{ margin: '0 0 17px' }}>
              Choose outdoor, indoor, active, creative, and low-key interests. You can select more than one.
            </p>
            <div className="hobby-grid">
              {HOBBY_OPTIONS.map(h => {
                const active = profile.hobbies.includes(h)
                return (
                  <button key={h} className={`hobby ${active ? 'active' : ''}`} onClick={() => toggleHobby(h)}>
                    {active ? '✓ ' : ''}{h}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {tab === 'wrapped' && (
        <div className="settings-pane">
          <div className="wrapped-head">
            <div className="eyebrow">2026 in real life</div>
            <h1>{profile.name.split(' ')[0]}'s Involve.me Wrapped</h1>
            <p>You turned "maybe I'll go" into {profile.plansAttended} attended plans, 11 new crews, and a year of NYC stories.</p>
          </div>
          <div className="wrapped-stats">
            {wrappedStats.map(s => (
              <div className="wstat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="status-grid">
            {wrappedStatuses.map(s => (
              <div className={`status ${s.unlocked ? '' : 'locked'}`} key={s.title}>
                {!s.unlocked && <span className="lock-badge">Locked</span>}
                <div className="status-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="compatible">
            <div className="big-match">{MOST_COMPATIBLE_GROUP.match}%</div>
            <div>
              <h3>Your most compatible group: {MOST_COMPATIBLE_GROUP.name}</h3>
              <p>{MOST_COMPATIBLE_GROUP.reason}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
