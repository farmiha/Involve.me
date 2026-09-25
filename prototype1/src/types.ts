export type PlanCategory =
  | 'Food crawl'
  | 'Concert'
  | 'Rave'
  | 'Nightlife'
  | 'Culture'
  | 'Sports'
  | 'Networking'
  | 'Daytime'

export interface CrewMember {
  initial: string
  name: string
  role: string
  color: string
}

export interface Plan {
  id: number
  cat: PlanCategory
  type: string
  title: string
  date: string
  timeHour: number
  meta: string
  match: number
  budget: string
  venue: string
  kind: string
  host: string
  members: CrewMember[]
  desc: string
}

export interface JoinRequest {
  id: number
  name: string
  initial: string
  color: string
  bio: string
  tags: string[]
}

export interface InterestCard {
  id: number
  emoji: string
  title: string
  subtitle: string
  gradientClass: string
}

export type View =
  | 'home'
  | 'plans'
  | 'planDetail'
  | 'host'
  | 'dare'
  | 'dareLocked'
  | 'profile'
  | 'settings'

export type AuthMode = 'login' | 'signup'
export type SignupStep = 1 | 2 | 3

export interface UserProfile {
  name: string
  email: string
  age: number
  verified: boolean
  intent: string
  groupSize: string
  interests: string[]
  artists: string[]
  hobbies: string[]
  darePoints: number
  plansAttended: number
  reliability: number
  badges: string[]
}

export interface WrappedStat {
  label: string
  value: string | number
}

export interface WrappedStatus {
  icon: string
  title: string
  description: string
  unlocked: boolean
}
