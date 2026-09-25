import type { Plan, JoinRequest, InterestCard, UserProfile, WrappedStat, WrappedStatus } from './types'

export const PLANS: Plan[] = [
  { id: 0, cat: 'Food crawl', type: 'FOOD CRAWL', title: 'Flushing dumplings & dessert crawl', date: 'Sat · 5:00 PM', timeHour: 17, meta: 'Queens · Crew of 3 looking for 2', match: 97, budget: '$25–$40', venue: 'Flushing neighborhood food spots', kind: 'Restaurant crawl', host: 'Luis, 23', members: [{ initial: 'L', name: 'Luis, 23', role: 'Host · food explorer', color: 'd' }, { initial: 'N', name: 'Noa, 22', role: 'Desserts · museums', color: 'b' }, { initial: 'P', name: 'Priya, 23', role: 'Queens food spots', color: 'a' }], desc: 'A plan built around hand-pulled noodles, dumplings, and dessert in Flushing. The crew wants people who enjoy trying multiple spots and talking over food.' },
  { id: 1, cat: 'Rave', type: 'RAVE', title: 'Knockdown Center: house & techno', date: 'Sat · 10:30 PM', timeHour: 22, meta: 'Queens · Crew of 3 looking for 2', match: 95, budget: '$35–$70 + ticket', venue: 'Knockdown Center', kind: 'Music venue / bar', host: 'Maya, 24', members: [{ initial: 'M', name: 'Maya, 24', role: 'Host · house music, dancing', color: 'a' }, { initial: 'C', name: 'Chris, 23', role: 'Concerts · Brooklyn', color: 'b' }, { initial: 'J', name: 'Jordan, 25', role: 'Techno · new to NYC', color: 'c' }], desc: 'A friendly house and techno crew meeting at the entrance before heading inside. Great for someone who wants to dance but does not want to arrive alone.' },
  { id: 2, cat: 'Concert', type: 'CONCERT', title: 'Forest Hills Stadium concert crew', date: 'Next Fri · 7:00 PM', timeHour: 19, meta: 'Queens · Two friends looking for 2', match: 92, budget: '$60–$140 + ticket', venue: 'Forest Hills Stadium', kind: 'Concert venue', host: 'Amina, 22', members: [{ initial: 'A', name: 'Amina, 22', role: 'Host · live music', color: 'c' }, { initial: 'Z', name: 'Zoe, 23', role: 'Dancing · concerts', color: 'a' }], desc: 'A concert crew planning to meet for food before the show, then go in together.' },
  { id: 3, cat: 'Nightlife', type: 'NIGHTLIFE', title: 'East Village drinks & dancing', date: 'Tonight · 11:00 PM', timeHour: 23, meta: 'Manhattan · New-to-NYC crew looking for 3', match: 90, budget: '$30–$60', venue: 'East Village bar route', kind: 'Bars / nightlife', host: 'Dev, 24', members: [{ initial: 'D', name: 'Dev, 24', role: 'Host · nightlife, comedy', color: 'b' }, { initial: 'A', name: 'Ari, 26', role: 'Music · food', color: 'c' }, { initial: 'Z', name: 'Zoe, 23', role: 'Dancing · new to NYC', color: 'a' }], desc: 'A welcoming small starting group for drinks and dancing with a clear public meeting point.' },
  { id: 4, cat: 'Culture', type: 'CULTURE', title: 'Museum + Central Park walk', date: 'Sun · 2:00 PM', timeHour: 14, meta: 'Upper East Side · Crew of 2 looking for 2', match: 87, budget: '$0–$30', venue: 'Museum Mile + Central Park', kind: 'Museum / outdoor', host: 'Elena, 22', members: [{ initial: 'E', name: 'Elena, 22', role: 'Host · art, museums', color: 'a' }, { initial: 'P', name: 'Priya, 23', role: 'Walking · culture', color: 'd' }], desc: 'A daylight plan for art, a Central Park walk, and an optional coffee stop.' },
  { id: 5, cat: 'Food crawl', type: 'FOOD CRAWL', title: 'Jackson Heights momo & chai crawl', date: 'Sun · 3:00 PM', timeHour: 15, meta: 'Queens · 4 people looking for 2', match: 94, budget: '$20–$35', venue: 'Jackson Heights neighborhood spots', kind: 'Restaurant crawl', host: 'Sana, 24', members: [{ initial: 'S', name: 'Sana, 24', role: 'Host · food, travel', color: 'a' }, { initial: 'R', name: 'Ravi, 23', role: 'Chai · photography', color: 'd' }, { initial: 'K', name: 'Kira, 22', role: 'Food crawls · Queens', color: 'b' }, { initial: 'I', name: 'Imani, 25', role: 'Restaurants · culture', color: 'e' }], desc: 'A neighborhood food crawl for momos, chai, and South Asian snacks.' },
  { id: 6, cat: 'Concert', type: 'CONCERT', title: 'Brooklyn indie show + late-night pizza', date: 'Thu · 8:00 PM', timeHour: 20, meta: 'Bushwick · Crew of 2 looking for 3', match: 91, budget: '$30–$55 + ticket', venue: 'Bushwick music venue', kind: 'Concert venue', host: 'Theo, 25', members: [{ initial: 'T', name: 'Theo, 25', role: 'Host · indie music', color: 'c' }, { initial: 'G', name: 'Gia, 23', role: 'Concerts · photography', color: 'e' }], desc: 'Meet before an indie show, then decompress over a slice afterward.' },
  { id: 7, cat: 'Rave', type: 'RAVE', title: 'Sunrise warehouse techno pod', date: 'Fri · 11:30 PM', timeHour: 23, meta: 'Brooklyn · 5-person pod looking for 2', match: 89, budget: '$45–$80 + ticket', venue: 'Brooklyn warehouse venue', kind: 'Music venue / nightlife', host: 'Vera, 24', members: [{ initial: 'V', name: 'Vera, 24', role: 'Host · techno · safety lead', color: 'e' }, { initial: 'I', name: 'Isaac, 26', role: 'Electronic music', color: 'a' }, { initial: 'C', name: 'Cam, 23', role: 'Dancing · Brooklyn', color: 'b' }, { initial: 'R', name: 'Rhea, 22', role: 'Raves · nightlife', color: 'd' }, { initial: 'M', name: 'Malik, 25', role: 'Music · events', color: 'c' }], desc: 'A host-led smaller pod joining a larger warehouse event.' },
  { id: 8, cat: 'Nightlife', type: 'NIGHTLIFE', title: 'Lower East Side cocktail bars', date: 'Fri · 8:30 PM', timeHour: 20, meta: 'Manhattan · Two friends looking for 2', match: 88, budget: '$35–$70', venue: 'Lower East Side bar route', kind: 'Bars / nightlife', host: 'Farah, 23', members: [{ initial: 'F', name: 'Farah, 23', role: 'Host · cocktails, food', color: 'd' }, { initial: 'B', name: 'Ben, 24', role: 'Comedy · nightlife', color: 'a' }], desc: 'A guided bar-hop with one confirmed start location and a relaxed group vibe.' },
  { id: 9, cat: 'Sports', type: 'SPORTS', title: 'Yankees game — first-pitch crew', date: 'Sun · 1:35 PM', timeHour: 13, meta: 'Bronx · Going solo, open to a small crew', match: 83, budget: '$45–$110 + ticket', venue: 'Yankee Stadium', kind: 'Sports venue', host: 'Ari, 26', members: [{ initial: 'A', name: 'Ari, 26', role: 'Host · sports, food', color: 'c' }], desc: 'Meet for food outside the stadium and head in as a crew.' },
  { id: 10, cat: 'Sports', type: 'SPORTS', title: 'Prospect Park pickleball beginners', date: 'Sat · 11:00 AM', timeHour: 11, meta: 'Brooklyn · 3 beginners looking for 2', match: 84, budget: '$0–$15', venue: 'Prospect Park courts', kind: 'Outdoor activity', host: 'Mina, 22', members: [{ initial: 'M', name: 'Mina, 22', role: 'Host · outdoors, sports', color: 'a' }, { initial: 'R', name: 'Ryan, 24', role: 'Pickleball beginner', color: 'd' }, { initial: 'J', name: 'Jules, 23', role: 'Brooklyn · new friends', color: 'b' }], desc: 'An easygoing beginner-friendly pickleball session with extra paddles.' },
  { id: 11, cat: 'Networking', type: 'NETWORKING', title: 'Creative coffee & portfolio swap', date: 'Thu · 6:30 PM', timeHour: 18, meta: 'Brooklyn · 4 people looking for 2', match: 86, budget: '$8–$20', venue: 'Williamsburg coffee shop', kind: 'Coffee / networking', host: 'Rina, 24', members: [{ initial: 'R', name: 'Rina, 24', role: 'Host · design, product', color: 'b' }, { initial: 'S', name: 'Sofia, 22', role: 'Photography · arts', color: 'a' }, { initial: 'T', name: 'Theo, 25', role: 'UX · coffee', color: 'c' }, { initial: 'K', name: 'Kai, 23', role: 'Music · startups', color: 'd' }], desc: 'A small structured networking circle for students and early-career creatives.' },
  { id: 12, cat: 'Networking', type: 'NETWORKING', title: 'NYC founders & builders coworking', date: 'Tue · 6:00 PM', timeHour: 18, meta: 'Flatiron · 5 people looking for 3', match: 81, budget: '$0–$25', venue: 'Flatiron coworking café', kind: 'Coworking / networking', host: 'Dylan, 25', members: [{ initial: 'D', name: 'Dylan, 25', role: 'Host · startups', color: 'b' }, { initial: 'K', name: 'Kylie, 23', role: 'Marketing · design', color: 'd' }, { initial: 'A', name: 'Alex, 24', role: 'Engineering · AI', color: 'c' }, { initial: 'O', name: 'Omar, 26', role: 'Product · founders', color: 'e' }, { initial: 'N', name: 'Nora, 22', role: 'Student · business', color: 'a' }], desc: 'Bring a project, portfolio, or idea for a focused coworking session.' },
  { id: 13, cat: 'Daytime', type: 'DAYTIME', title: 'DUMBO photo walk & coffee', date: 'Sat · 1:00 PM', timeHour: 13, meta: 'Brooklyn · 2 people looking for 3', match: 85, budget: '$5–$20', venue: 'DUMBO waterfront', kind: 'Outdoor / coffee', host: 'Casey, 23', members: [{ initial: 'C', name: 'Casey, 23', role: 'Host · photography, coffee', color: 'e' }, { initial: 'H', name: 'Hana, 22', role: 'Art · walks', color: 'b' }], desc: 'Walk through DUMBO, take casual photos, and stop for coffee.' },
  { id: 14, cat: 'Daytime', type: 'DAYTIME', title: 'Sunday farmers market + brunch', date: 'Sun · 10:30 AM', timeHour: 10, meta: 'Manhattan · Crew of 3 looking for 2', match: 80, budget: '$20–$45', venue: 'Union Square Greenmarket', kind: 'Market / brunch', host: 'Leah, 24', members: [{ initial: 'L', name: 'Leah, 24', role: 'Host · food, wellness', color: 'd' }, { initial: 'E', name: 'Evan, 23', role: 'Brunch · culture', color: 'a' }, { initial: 'M', name: 'Maya, 25', role: 'Markets · walking', color: 'c' }], desc: 'Start at a farmers market, pick up pastries, and choose a brunch spot together.' },
  { id: 15, cat: 'Culture', type: 'CULTURE', title: 'Comedy show + post-show chat', date: 'Wed · 9:30 PM', timeHour: 21, meta: 'Manhattan · 3 people looking for 2', match: 86, budget: '$25–$55', venue: 'Greenwich Village comedy venue', kind: 'Comedy / nightlife', host: 'Nina, 22', members: [{ initial: 'N', name: 'Nina, 22', role: 'Host · comedy, culture', color: 'a' }, { initial: 'B', name: 'Ben, 24', role: 'Nightlife · jokes', color: 'd' }, { initial: 'J', name: 'Jae, 23', role: 'Shows · new friends', color: 'b' }], desc: 'A comedy-night crew for an easy shared conversation starter and dessert afterward.' },
  { id: 16, cat: 'Culture', type: 'CULTURE', title: 'Bookstore browse + reading hour', date: 'Sat · 4:00 PM', timeHour: 16, meta: 'Brooklyn · 2 people looking for 2', match: 78, budget: '$0–$25', venue: 'Park Slope bookstore', kind: 'Bookstore / tea', host: 'Olivia, 24', members: [{ initial: 'O', name: 'Olivia, 24', role: 'Host · books, tea', color: 'e' }, { initial: 'P', name: 'Parker, 25', role: 'Reading · museums', color: 'a' }], desc: 'Browse a local bookstore, read together, then compare finds over tea.' },
  { id: 17, cat: 'Food crawl', type: 'FOOD CRAWL', title: 'Astoria Greek bites & rooftop dessert', date: 'Fri · 6:30 PM', timeHour: 18, meta: 'Queens · 3 people looking for 2', match: 90, budget: '$30–$55', venue: 'Astoria restaurant row', kind: 'Restaurant crawl', host: 'Niko, 24', members: [{ initial: 'N', name: 'Niko, 24', role: 'Host · Greek food, rooftops', color: 'e' }, { initial: 'D', name: 'Dora, 23', role: 'Dessert · nightlife', color: 'b' }, { initial: 'S', name: 'Sam, 25', role: 'Food crawls · Queens', color: 'a' }], desc: 'Try Greek small plates, a neighborhood walk, and an optional rooftop dessert stop.' },
  { id: 18, cat: 'Concert', type: 'CONCERT', title: 'Jazz night in Harlem', date: 'Sat · 8:00 PM', timeHour: 20, meta: 'Harlem · Two friends looking for 2', match: 84, budget: '$30–$75', venue: 'Harlem jazz club', kind: 'Live music venue', host: 'Camille, 23', members: [{ initial: 'C', name: 'Camille, 23', role: 'Host · jazz, live music', color: 'a' }, { initial: 'O', name: 'Oscar, 25', role: 'Jazz · dinner', color: 'e' }], desc: 'A relaxed jazz night with a clear public meeting point and optional late dinner.' },
  { id: 19, cat: 'Nightlife', type: 'NIGHTLIFE', title: 'Rooftop sunset social in Williamsburg', date: 'Thu · 7:00 PM', timeHour: 19, meta: 'Brooklyn · 4 people looking for 2', match: 85, budget: '$25–$60', venue: 'Williamsburg rooftop bar', kind: 'Bar / nightlife', host: 'Zara, 25', members: [{ initial: 'Z', name: 'Zara, 25', role: 'Host · rooftops, sunsets', color: 'a' }, { initial: 'M', name: 'Marco, 24', role: 'Nightlife · music', color: 'c' }, { initial: 'K', name: 'Kayla, 23', role: 'Photography · drinks', color: 'd' }, { initial: 'P', name: 'Priyanka, 22', role: 'Rooftops · new friends', color: 'b' }], desc: 'Meet at sunset for a smaller crew before the venue gets crowded.' },
  { id: 20, cat: 'Sports', type: 'SPORTS', title: 'Indoor bouldering first-timers', date: 'Wed · 6:45 PM', timeHour: 18, meta: 'Brooklyn · Crew of 3 looking for 2', match: 82, budget: '$30–$45', venue: 'Brooklyn climbing gym', kind: 'Fitness / indoor activity', host: 'Owen, 24', members: [{ initial: 'O', name: 'Owen, 24', role: 'Host · climbing, fitness', color: 'e' }, { initial: 'J', name: 'Jules, 23', role: 'Bouldering beginner', color: 'b' }, { initial: 'T', name: 'Tara, 25', role: 'Fitness · new friends', color: 'c' }], desc: 'A beginner-friendly bouldering session with no experience required.' },
  { id: 21, cat: 'Daytime', type: 'DAYTIME', title: 'Governors Island bike & picnic crew', date: 'Sun · 12:00 PM', timeHour: 12, meta: 'Manhattan · 3 people looking for 3', match: 79, budget: '$15–$40', venue: 'Governors Island ferry terminal', kind: 'Outdoor activity', host: 'Marisol, 23', members: [{ initial: 'M', name: 'Marisol, 23', role: 'Host · biking, picnics', color: 'a' }, { initial: 'A', name: 'Andre, 24', role: 'Outdoors · photography', color: 'c' }, { initial: 'R', name: 'Reese, 22', role: 'Biking · new friends', color: 'd' }], desc: 'Take the ferry, rent bikes if desired, and build a picnic from nearby food stands.' },
  { id: 22, cat: 'Networking', type: 'NETWORKING', title: 'NYC student meetup: study + side quest', date: 'Mon · 5:30 PM', timeHour: 17, meta: 'Midtown · 4 students looking for 2', match: 83, budget: '$0–$15', venue: 'Midtown public study space', kind: 'Study / networking', host: 'Erica, 22', members: [{ initial: 'E', name: 'Erica, 22', role: 'Host · study groups', color: 'a' }, { initial: 'J', name: 'Jiana, 22', role: 'Business · student', color: 'b' }, { initial: 'F', name: 'Farmiha, 21', role: 'CS · student', color: 'd' }, { initial: 'L', name: 'Li, 22', role: 'Student · networking', color: 'e' }], desc: 'Study together for an hour, then choose a small nearby activity or dinner.' },
  { id: 23, cat: 'Culture', type: 'CULTURE', title: 'Film screening + post-film discussion', date: 'Fri · 7:15 PM', timeHour: 19, meta: 'Lower Manhattan · 3 people looking for 2', match: 82, budget: '$18–$35', venue: 'Lower Manhattan cinema', kind: 'Film / culture', host: 'Jordan, 25', members: [{ initial: 'J', name: 'Jordan, 25', role: 'Host · film, culture', color: 'b' }, { initial: 'S', name: 'Sara, 23', role: 'Film · discussion', color: 'a' }, { initial: 'R', name: 'Reo, 24', role: 'Culture · new friends', color: 'd' }], desc: 'Watch an independent film, then have a structured low-pressure discussion over snacks.' },
]

export const SAMPLE_REQUESTS: JoinRequest[] = [
  { id: 0, name: 'Maya, 23', initial: 'M', color: 'a', bio: 'New to NYC · photography and museums', tags: ['94% match', 'Small groups', 'Outdoors'] },
  { id: 1, name: 'Sam, 24', initial: 'S', color: 'b', bio: 'Brooklyn · coffee, walks, and concerts', tags: ['88% match', 'Creative', 'Daytime'] },
]

export const INTEREST_CARDS: InterestCard[] = [
  { id: 0, emoji: '🥟', title: 'Flushing dumplings after dark', subtitle: 'Queens · food crawl energy', gradientClass: 'iv1' },
  { id: 1, emoji: '🎶', title: 'Outdoor concert crew', subtitle: 'Live music · Forest Hills', gradientClass: 'iv2' },
  { id: 2, emoji: '🍸', title: 'Late-night cocktail crawl', subtitle: 'East Village · nightlife', gradientClass: 'iv3' },
  { id: 3, emoji: '🌿', title: 'Sunset picnic and bike ride', subtitle: 'Governors Island · outdoors', gradientClass: 'iv4' },
  { id: 4, emoji: '🎭', title: 'Comedy show with new people', subtitle: 'Greenwich Village · culture', gradientClass: 'iv5' },
  { id: 5, emoji: '🧗', title: 'Beginner bouldering session', subtitle: 'Brooklyn · active indoor', gradientClass: 'iv6' },
  { id: 6, emoji: '🎧', title: 'Warehouse techno set', subtitle: 'Brooklyn · rave energy', gradientClass: 'iv2' },
  { id: 7, emoji: '📚', title: 'Bookstore & tea afternoon', subtitle: 'Park Slope · low-key', gradientClass: 'iv5' },
]

export const ARTIST_OPTIONS = ['Charli xcx', 'Fred again..', 'Bad Bunny', 'SZA', 'Omar Apollo', 'The Marías', 'Tame Impala', 'Lola Young', 'RÜFÜS DU SOL']

export const HOBBY_OPTIONS = ['Hiking & long walks', 'Sports & fitness', 'Dancing', 'Cooking', 'Photography', 'Reading', 'Museums & art', 'Gaming', 'Coffee shops', 'Thrifting', 'Wellness', 'Making things']

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Jiana Sta. Ana',
  email: 'jiana@example.com',
  age: 22,
  verified: false,
  intent: 'Friends & side quests',
  groupSize: 'Small: 2–5 people',
  interests: ['Flushing dumplings after dark', 'Outdoor concert crew', 'Late-night cocktail crawl'],
  artists: ['Charli xcx', 'Fred again..', 'The Marías'],
  hobbies: ['Photography', 'Museums & art', 'Dancing', 'Coffee shops'],
  darePoints: 180,
  plansAttended: 24,
  reliability: 92,
  badges: ['Queens Food Explorer', 'Dare Finisher', 'Reliable Crew Member'],
}

export const YEAR_ATTENDANCE = {
  totalPlans: 24,
  daresAccepted: 12,
  newCrews: 11,
  neighborhoods: 8,
  foodPlans: 9,
  concertPlans: 6,
  nightlifePlansAfter11: 7,
  totalNightlifePlans: 9,
  outdoorPlans: 5,
  networkingPlans: 3,
}

export function computeWrappedStats(): WrappedStat[] {
  const y = YEAR_ATTENDANCE
  return [
    { label: 'verified plans attended', value: y.totalPlans },
    { label: 'Dare Crews accepted', value: y.daresAccepted },
    { label: 'new crews explored', value: y.newCrews },
    { label: 'NYC neighborhoods visited', value: y.neighborhoods },
  ]
}

export function computeWrappedStatuses(): WrappedStatus[] {
  const y = YEAR_ATTENDANCE
  return [
    {
      icon: '🗺️',
      title: 'Adventurer',
      description: `You explored ${y.neighborhoods} neighborhoods and tried plans outside your usual area.`,
      unlocked: y.neighborhoods >= 6,
    },
    {
      icon: '⚡',
      title: 'Spontaneous',
      description: `You accepted ${y.daresAccepted} Dare Crews this year—past the 10-Dare milestone.`,
      unlocked: y.daresAccepted >= 10,
    },
    {
      icon: '🌙',
      title: 'Night Owl',
      description: `${y.nightlifePlansAfter11} of your ${y.totalNightlifePlans} nightlife plans began after 11 PM.`,
      unlocked: y.nightlifePlansAfter11 / y.totalNightlifePlans >= 0.5,
    },
    {
      icon: '🥟',
      title: 'Certified Foodie',
      description: `You attended ${y.foodPlans} food-related plans, from crawls to late-night dessert stops.`,
      unlocked: y.foodPlans >= 6,
    },
    {
      icon: '🎶',
      title: 'Concert Goer',
      description: `You joined ${y.concertPlans} live-music plans and discovered new artists live.`,
      unlocked: y.concertPlans >= 4,
    },
    {
      icon: '🤝',
      title: 'Reliable Crew Member',
      description: 'You maintained a 92% follow-through rate and gave timely notice when plans changed.',
      unlocked: true,
    },
    {
      icon: '🌳',
      title: 'Outdoor Explorer',
      description: `You joined ${y.outdoorPlans} outdoor or daytime plans this year.`,
      unlocked: y.outdoorPlans >= 4,
    },
    {
      icon: '💼',
      title: 'Networker',
      description: `You attended ${y.networkingPlans} networking or coworking plans.`,
      unlocked: y.networkingPlans >= 3,
    },
  ]
}

export const MOST_COMPATIBLE_GROUP = {
  name: 'Queens Food Explorers',
  match: 96,
  reason: 'Shared food-crawl interests, small-group preference, weekend availability, and consistently positive post-plan feedback made this your strongest crew fit.',
}
