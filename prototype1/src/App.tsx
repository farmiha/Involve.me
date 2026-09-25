import { useState } from 'react'
import Auth from './Auth'
import { Sidebar, Topbar } from './Layout'
import HomeView from './HomeView'
import PlansView from './PlansView'
import PlanDetailView from './PlanDetailView'
import HostView from './HostView'
import DareCrewView from './DareCrewView'
import DareLockedView from './DareLockedView'
import ProfileView from './ProfileView'
import SettingsView from './SettingsView'
import SuccessOverlay from './SuccessOverlay'
import { Toast, useToast } from './useToast'
import { PLANS, SAMPLE_REQUESTS, DEFAULT_PROFILE } from './data'
import type { AuthMode, JoinRequest, Plan, UserProfile, View } from './types'

export default function App() {
  const [authed, setAuthed] = useState(false)
  const [authMode, setAuthMode] = useState<AuthMode>('login')
  const [loggedOutMessage, setLoggedOutMessage] = useState<string | undefined>()

  const [view, setView] = useState<View>('home')
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null)
  const [plans, setPlans] = useState<Plan[]>(PLANS)
  const [requests, setRequests] = useState<JoinRequest[]>(SAMPLE_REQUESTS)
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE)
  const [showSuccess, setShowSuccess] = useState(false)

  const { message, show, notify } = useToast()

  function handleAuthComplete(updates: Partial<UserProfile>) {
    setProfile(p => ({ ...p, ...updates }))
    setAuthed(true)
    setLoggedOutMessage(undefined)
    notify(updates.name ? 'Account created. Your ID is verified for future plans.' : 'Welcome back, Jiana.')
  }

  function handleLogout() {
    setAuthed(false)
    setAuthMode('login')
    setLoggedOutMessage('Log in again or create a new prototype account.')
  }

  function handleViewPlan(id: number) {
    setSelectedPlanId(id)
    setView('planDetail')
  }

  function handleRequestJoin(plan: Plan) {
    if (plan.id === 0) {
      setShowSuccess(true)
    } else {
      notify(`Request sent to ${plan.host}, the designated crew Host.`)
    }
  }

  function handleOpenLock() {
    setShowSuccess(false)
    setView('dareLocked')
  }

  function handleAcceptRequest(id: number) {
    const r = requests.find(x => x.id === id)
    setRequests(rs => rs.filter(x => x.id !== id))
    if (r) notify(`${r.name} was accepted. Temporary crew chat and Host welcome prompt are unlocked.`)
  }

  function handleDeclineRequest(id: number) {
    const r = requests.find(x => x.id === id)
    setRequests(rs => rs.filter(x => x.id !== id))
    if (r) notify(`${r.name}'s request was declined privately.`)
  }

  function handleCreatePlan(title: string, budget: string, lookingFor: string) {
    notify(`Your new plan "${title}" is live. Compatible people looking for ${lookingFor.toLowerCase()} can now request to join.`)
  }

  function updateProfile(updates: Partial<UserProfile>) {
    setProfile(p => ({ ...p, ...updates }))
  }

  if (!authed) {
    return (
      <>
        <Auth
          initialMode={authMode}
          onComplete={handleAuthComplete}
          notify={notify}
          loggedOutMessage={loggedOutMessage}
        />
        <Toast message={message} show={show} />
      </>
    )
  }

  const selectedPlan = selectedPlanId !== null ? plans.find(p => p.id === selectedPlanId) ?? null : null
  const initials = profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')

  return (
    <div className="app">
      <Sidebar view={view} setView={setView} />
      <main>
        <Topbar
          darePoints={profile.darePoints}
          initials={initials}
          name={profile.name}
          onProfile={() => setView('profile')}
          onSettings={() => setView('settings')}
          onSaved={() => { setView('plans'); notify('Saved-plan view is represented by this Plan First prototype feed.') }}
          onLogout={handleLogout}
        />
        <div className="page">
          {view === 'home' && (
            <HomeView plans={plans} onView={handleViewPlan} setView={setView} />
          )}
          {view === 'plans' && (
            <PlansView plans={plans} onView={handleViewPlan} />
          )}
          {view === 'planDetail' && selectedPlan && (
            <PlanDetailView
              plan={selectedPlan}
              onBack={() => setView('plans')}
              onRequestJoin={handleRequestJoin}
              notify={notify}
            />
          )}
          {view === 'host' && (
            <HostView
              requests={requests}
              onAccept={handleAcceptRequest}
              onDecline={handleDeclineRequest}
              onCreatePlan={handleCreatePlan}
              notify={notify}
            />
          )}
          {view === 'dare' && (
            <DareCrewView plans={plans} onSeeDetails={handleViewPlan} notify={notify} />
          )}
          {view === 'dareLocked' && <DareLockedView />}
          {view === 'profile' && <ProfileView profile={profile} setView={setView} />}
          {view === 'settings' && (
            <SettingsView profile={profile} updateProfile={updateProfile} notify={notify} />
          )}
        </div>
      </main>
      <SuccessOverlay show={showSuccess} onOpenLock={handleOpenLock} />
      <Toast message={message} show={show} />
    </div>
  )
}
