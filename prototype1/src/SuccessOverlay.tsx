import { useMemo } from 'react'

const COLOR_CLASSES = ['c1', 'c2', 'c3', 'c4', 'c5']

export default function SuccessOverlay({
  show,
  onOpenLock,
}: {
  show: boolean
  onOpenLock: () => void
}) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        cls: COLOR_CLASSES[i % 5],
        left: Math.random() * 100,
        delay: Math.random() * 0.55,
      })),
    [show]
  )

  if (!show) return null

  return (
    <div className={`success-overlay ${show ? 'show' : ''}`}>
      <div className="confetti">
        {pieces.map((p, i) => (
          <i key={i} className={p.cls} style={{ left: `${p.left}%`, animationDelay: `${p.delay}s` }} />
        ))}
      </div>
      <div className="success-card">
        <div className="lock-orb">🔒</div>
        <div className="eyebrow">Mutual acceptance complete</div>
        <h2>Dare Locked!</h2>
        <p>
          You and the crew both accepted. The temporary chat, Host introduction, public meetup point, and
          plan details are now unlocked for both sides.
        </p>
        <button className="primary" onClick={onOpenLock}>Open Dare Locked plan</button>
      </div>
    </div>
  )
}
