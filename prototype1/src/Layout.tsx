import { useEffect, useRef, useState } from 'react'
import type { View } from './types'

const NAV: { id: View; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'plans', label: 'Plan First', icon: '◫' },
  { id: 'host', label: 'Host a plan', icon: '✚' },
  { id: 'dare', label: 'Dare Crew', icon: '✦' },
  { id: 'profile', label: 'My profile', icon: '◉' },
]

export function Sidebar({ view, setView }: { view: View; setView: (v: View) => void }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="mark">✦</div>involve.me
      </div>
      <div className="side-tag">Find the people to go with.</div>
      <nav className="nav">
        {NAV.map(n => (
          <button
            key={n.id}
            className={view === n.id ? 'active' : ''}
            onClick={() => setView(n.id)}
          >
            {n.icon} &nbsp; {n.label}
          </button>
        ))}
      </nav>
      <div className="side-foot">
        Identity verified ✓<br />
        Temporary crews and privacy-first coordination.
      </div>
    </aside>
  )
}

interface TopbarProps {
  darePoints: number
  initials: string
  name: string
  onProfile: () => void
  onSettings: () => void
  onSaved: () => void
  onLogout: () => void
}

export function Topbar({ darePoints, initials, name, onProfile, onSettings, onSaved, onLogout }: TopbarProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header className="topbar">
      <small>Your community: <strong>New York City</strong> ▾</small>
      <div className="top-actions">
        <div className="pill">✦ {darePoints} Dare Points</div>
        <div className="profile-menu" ref={ref}>
          <button className="avatar" onClick={() => setOpen(o => !o)}>{initials}</button>
          <div className={`menu ${open ? 'open' : ''}`}>
            <div className="menu-head">
              <b>{name}</b>
              <span>Verified account ✓</span>
            </div>
            <button onClick={() => { setOpen(false); onProfile() }}>My profile</button>
            <button onClick={() => { setOpen(false); onSettings() }}>Account settings</button>
            <button onClick={() => { setOpen(false); onSaved() }}>Saved plans</button>
            <button className="danger" onClick={() => { setOpen(false); onLogout() }}>Log out</button>
          </div>
        </div>
      </div>
    </header>
  )
}
