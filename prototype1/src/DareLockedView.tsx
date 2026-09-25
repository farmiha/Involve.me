export default function DareLockedView() {
  return (
    <section className="view">
      <div className="eyebrow">Sample mutually accepted plan</div>
      <div className="section-head" style={{ marginTop: 6 }}>
        <div>
          <h2>Dare Locked: Flushing Food Crawl</h2>
          <p>What both parties see after they accept the same 24-hour Dare invitation.</p>
        </div>
      </div>
      <div className="accepted-grid">
        <div className="accepted-card">
          <div className="accepted-banner">
            <strong>🔒 Dare Locked — both sides accepted</strong>
            <span>
              Your crew is confirmed for Saturday. The temporary chat, Host details, and public meetup
              logistics are now unlocked.
            </span>
          </div>
          <div className="venue-grid">
            <div className="venue-item"><span>Plan</span><b>Flushing dumplings & dessert crawl</b></div>
            <div className="venue-item"><span>When</span><b>Saturday · 5:00 PM</b></div>
            <div className="venue-item"><span>Expected spend</span><b className="money">$25–$40 per person</b></div>
          </div>
          <div>
            <div className="timeline-item">
              <div className="time-dot">✓</div>
              <div><b>Mutual acceptance complete</b><span>Jiana and the crew accepted within the 24-hour Dare window.</span></div>
            </div>
            <div className="timeline-item">
              <div className="time-dot">1</div>
              <div><b>Meet your Host</b><span>Luis is your point of contact before joining the full crew conversation.</span></div>
            </div>
            <div className="timeline-item">
              <div className="time-dot">2</div>
              <div><b>Confirm the meetup</b><span>Public meetup: 4:50 PM near the Main Street subway exit. Final venue order is in the crew chat.</span></div>
            </div>
            <div className="timeline-item">
              <div className="time-dot">3</div>
              <div><b>Attend or use a Dare Pass responsibly</b><span>If plans change, notify the crew early and request an approved replacement or waitlist match.</span></div>
            </div>
            <div className="timeline-item">
              <div className="time-dot">✦</div>
              <div><b>Complete the Dare</b><span>Attendance unlocks your points, badge progress, and next personalized recommendation.</span></div>
            </div>
          </div>
          <div className="chat">
            <h3>Temporary crew chat</h3>
            <div className="bubble">Luis (Host): Hey everyone—glad we all locked it in! We'll start with dumplings at 5:15.</div>
            <div className="bubble mine">Jiana: Excited! I've wanted to try this area for a while.</div>
            <div className="bubble">Priya: Same. I can share a few dessert spots I saved.</div>
          </div>
        </div>
        <aside>
          <div className="info">
            <h2 style={{ margin: '0 0 5px', fontSize: 20 }}>Both parties can see</h2>
            <p className="meta" style={{ margin: '0 0 13px' }}>The lock is mutual: no one is left wondering whether the other side is still going.</p>
            <div className="member">
              <div className="pic a">J</div>
              <div><strong>Jiana, 22</strong><span>Accepted · food crawls, nightlife</span></div>
              <b className="host-tag">YOU</b>
            </div>
            <div className="member">
              <div className="pic d">L</div>
              <div><strong>Luis, 23</strong><span>Accepted · crew Host</span></div>
              <b className="host-tag">HOST</b>
            </div>
            <div className="member">
              <div className="pic b">N</div>
              <div><strong>Noa, 22</strong><span>Accepted · desserts, museums</span></div>
            </div>
            <div className="member">
              <div className="pic c">P</div>
              <div><strong>Priya, 23</strong><span>Accepted · Queens food spots</span></div>
            </div>
            <div className="rules">
              <h3>Safety and fairness</h3>
              <ul>
                <li>Either side could have declined privately before locking.</li>
                <li>Safety concerns always override commitment and can be reported immediately.</li>
                <li>No automatic deposit or financial penalty is used in this MVP.</li>
              </ul>
            </div>
          </div>
          <div className="info" style={{ marginTop: 18 }}>
            <h2 style={{ margin: '0 0 12px', fontSize: 20 }}>After the plan</h2>
            <div style={{ display: 'grid', gap: 11 }}>
              <div className="request-card" style={{ gridTemplateColumns: '42px 1fr' }}>
                <div className="pic" style={{ background: 'linear-gradient(145deg,#ffdc93,#f4a95e)', color: '#5b3a1a' }}>🥟</div>
                <div><h3>Queens Food Explorer</h3><p>Attend your first food crawl in Queens.</p></div>
              </div>
              <div className="request-card" style={{ gridTemplateColumns: '42px 1fr' }}>
                <div className="pic" style={{ background: 'linear-gradient(145deg,#ffdc93,#f4a95e)', color: '#5b3a1a' }}>🔒</div>
                <div><h3>Dare Finisher</h3><p>Complete a mutually accepted Dare Crew plan.</p></div>
              </div>
              <div className="request-card" style={{ gridTemplateColumns: '42px 1fr' }}>
                <div className="pic" style={{ background: 'linear-gradient(145deg,#ffdc93,#f4a95e)', color: '#5b3a1a' }}>🤝</div>
                <div><h3>Reliable Crew Member</h3><p>Arrive or give timely notice across your first three plans.</p></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
