import { useCallback, useRef, useState } from 'react'

export function useToast() {
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)
  const timer = useRef<number | null>(null)

  const notify = useCallback((msg: string) => {
    setMessage(msg)
    setShow(true)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setShow(false), 3100)
  }, [])

  return { message, show, notify }
}

export function Toast({ message, show }: { message: string; show: boolean }) {
  return <div className={`toast ${show ? 'show' : ''}`}>{message}</div>
}
