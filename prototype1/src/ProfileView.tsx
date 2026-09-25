import type { UserProfile, View } from './types'

export default function ProfileView({
  profile,
  setView,
}: {
  profile: UserProfile
  setView: (v: View) => void
}) {
  return (
    <section className="view">
      <div className="eyebrow">My profile</div>
      <div className="section-head" style={{ marginTop: 6 }}>
        <div>
          <h2>{profile.name.split(' ')[0]}'s social profile</h2>
          <p>Click the avatar in the upper right for account settings, saved plans, and log out.</p>
        </div>
        <button className="outline" onClick={() => setView('settings')}>Go to account settings</button>
      </div>
      <div className="profile-grid">
        <div className="profile-summary">
          <div className="big-avatar">
            {profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <h2>{profile.name.split(' ')[0]}, {profile.age}</h2>
          <p>
            NYC · Identity verified ✓ · Likes {profile.interests.slice(0, 3).map(i => i.toLowerCase()).join(', ')}, and small-group plans.
          </p>
          <div className="tags">
            <span className="type">{profile.intent}</span>
            {profile.hobbies.slice(0, 3).map(h => <span className="type" key={h}>{h}</span>)}
          </div>
          <div className="statrow">
            <div className="stat"><b>{profile.plansAttended}</b><span>Plans attended</span></div>
            <div className="stat"><b>{profile.reliability}%</b><span>Reliability</span></div>
            <div className="stat"><b>{profile.badges.length}</b><span>Badges</span></div>
          </div>
        </div>
        <div className="points-box">
          <h2>Dare Points</h2>
          <p>Points reward constructive participation. They cannot purchase access to another person, override rejection, or convert to cash.</p>
          <div className="balance">
            <div><span>Current balance</span><b>{profile.darePoints} points</b></div>
            <span>✦</span>
          </div>
          <div style={{ marginTop: 15 }}>
            <div className="points-row"><span>Complete a Dare and attend</span><b className="plus">+100</b></div>
            <div className="points-row"><span>Attend with a new crew</span><b className="plus">+75</b></div>
            <div className="points-row"><span>Timely Dare Pass notice</span><b className="plus">+25</b></div>
            <div className="points-row"><span>250 points → Dare Pass</span><b>Reward</b></div>
            <div className="points-row"><span>75 points → Dare reroll</span><b>Reward</b></div>
          </div>
        </div>
      </div>
    </section>
  )
}
