export type Locale = 'en' | 'uk';

/**
 * Calendar ID of the public Google Calendar holding the nine talks (Google Calendar > Settings > the calendar >
 * Integrate calendar > Calendar ID, e.g. "abc123@group.calendar.google.com"). While empty, the calendar button
 * falls back to the .ics file.
 */
export const GOOGLE_CALENDAR_ID = 'e4a3441f62a168a2a3581dffcd7fed1a677e6e42195555565191b6d0f7e3ae01@group.calendar.google.com';

/** One Google Meet room for every talk. */
export const MEET_URL = 'https://meet.google.com/gvh-mfse-wga';
/** Public page of the conference, used as the event URL in the .ics file. */
export const PAGE_URL = 'https://pragmasoft.dev/en/conference/';
/** Every talk runs 16:00–17:00 Kyiv time (EET, UTC+2 in winter). */
export const TIMEZONE = 'Europe/Kyiv';
export const START_LOCAL = { hour: 16, minute: 0 };
export const DURATION_MINUTES = 60;

export interface Talk {
  /** ISO date of the talk; every talk starts at START_LOCAL in TIMEZONE. */
  date: string;
  speaker: Record<Locale, string>;
  /** Initials for the placeholder portrait, used when there is no photo. */
  initials: Record<Locale, string>;
  topic: Record<Locale, string>;
  /** File name (without .jpg) of a face crop in src/assets/images/conference. */
  photo?: string;
  /** File name (without .pdf) of the slide deck in src/assets/files. */
  slides?: string;
}

export const talks: Talk[] = [
  {
    date: '2026-11-27',
    speaker: { en: 'Volodymyr Kozliakov', uk: 'Володимир Козляков' },
    initials: { en: 'VK', uk: 'ВК' },
    photo: 'kozliakov',
    topic: {
      en: 'Agents Do the Work, Gates Check It, I Decide: Running AI Coding Agents with Real Guardrails',
      uk: 'Агенти працюють, гейти перевіряють, я вирішую: AI-агенти для коду з реальними запобіжниками',
    },
  },
  {
    date: '2026-12-02',
    speaker: { en: 'Mykyta Zemnytskyi', uk: 'Микита Земницький' },
    initials: { en: 'MZ', uk: 'МЗ' },
    photo: 'zemnytskyi-mykyta',
    slides: 'lsp-in-claude-code',
    topic: { en: 'LSP in Claude Code', uk: 'LSP в Claude Code' },
  },
  {
    date: '2026-12-04',
    speaker: { en: 'Vitalii Alekask', uk: 'Віталій Алекаск' },
    initials: { en: 'VA', uk: 'ВА' },
    photo: 'alekask',
    slides: 'agentic-workflow',
    topic: {
      en: 'Agentic workflow in frontend development',
      uk: 'Агентний робочий процес у фронтенд-розробці',
    },
  },
  {
    date: '2026-12-09',
    speaker: { en: 'Andrii Kulikov', uk: 'Андрій Куліков' },
    initials: { en: 'AK', uk: 'АК' },
    photo: 'kulikov',
    topic: {
      en: 'How to Test AI: Evals in Practice on a QA Skill',
      uk: 'Як тестувати ШІ: evals на практиці на прикладі QA-скіла',
    },
  },
  {
    date: '2026-12-11',
    speaker: { en: 'Denys Liubov', uk: 'Денис Любов' },
    initials: { en: 'DL', uk: 'ДЛ' },
    photo: 'liubov',
    topic: {
      en: 'Big Tasks with AI: Context Is Short-Term Memory, Files Are Long-Term',
      uk: 'Великі завдання з AI: контекст — це короткочасна пам’ять, файли — довготривала',
    },
  },
  {
    date: '2026-12-16',
    speaker: { en: 'Oleksandr Neklesa', uk: 'Олександр Неклеса' },
    initials: { en: 'ON', uk: 'ОН' },
    photo: 'neklesa',
    topic: { en: 'Ultracode tool', uk: 'Інструмент Ultracode' },
  },
  {
    date: '2026-12-18',
    speaker: { en: 'Pavlo Romanenko', uk: 'Павло Романенко' },
    initials: { en: 'PR', uk: 'ПР' },
    photo: 'romanenko',
    topic: {
      en: 'Self-healing continuous integration environment',
      uk: 'Самовідновлюване середовище безперервної інтеграції',
    },
  },
  {
    date: '2026-12-23',
    speaker: { en: 'Oleh Novoselov', uk: 'Олег Новоселов' },
    initials: { en: 'ON', uk: 'ОН' },
    photo: 'novoselov',
    topic: {
      en: 'ArchUnit - Architectural guardrails for agents',
      uk: 'ArchUnit — архітектурні запобіжники для агентів',
    },
  },
  {
    date: '2026-12-30',
    speaker: { en: 'Dmytro Zemnytskyi', uk: 'Дмитро Земницький' },
    initials: { en: 'DZ', uk: 'ДЗ' },
    photo: 'zemnytskyi-dmytro',
    topic: {
      en: 'Sandboxes for secure agentic development',
      uk: 'Пісочниці для безпечної агентної розробки',
    },
  },
];

export const copy = {
  en: {
    metaTitle: 'Practical agentic software engineering 2026',
    metaDescription:
      'Online conference by Pragmasoft OÜ: nine talks on practical agentic software engineering, 27 November to 30 December 2026, Wednesdays and Fridays at 16:00 Kyiv time on Google Meet.',
    title: 'Practical agentic software engineering 2026',
    lead: 'Nine online talks, Wednesdays and Fridays through December, held by Pragmasoft OÜ.',
    facts: ['27 Nov – 30 Dec 2026', '16:00 Kyiv time (EET)', 'Google Meet'],
    addToCalendar: 'Add to Google Calendar',
    downloadIcs: 'Download .ics (Apple, Outlook)',
    seeSchedule: 'See the schedule',
    agendaLabel: 'Schedule',
    weeks: ['27 November – 11 December', '16 – 30 December'],
    timeLine: '16:00 Kyiv · 14:00 UTC',
    slides: 'Slides (PDF)',
    joinMeet: 'Join on Google Meet',
    portraitAlt: 'Portrait placeholder for',
    closeTitle: 'Keep all nine dates',
    closeText: 'The calendar file holds every talk at 16:00 Kyiv time. All talks take place in the same Google Meet room.',
    organiser: 'Held by Pragmasoft OÜ, Estonia.',
    kiteAlt: 'Pragmasoft kite logo',
    icsName: 'practical-agentic-software-engineering-2026.ics',
    icsJoin: 'Join on Google Meet',
    dateLocale: 'en-GB',
  },
  uk: {
    metaTitle: 'Practical agentic software engineering 2026',
    metaDescription:
      'Онлайн-конференція Pragmasoft OÜ: дев’ять доповідей про практичну агентну розробку програмного забезпечення, 27 листопада – 30 грудня 2026, щосереди та щоп’ятниці о 16:00 за київським часом у Google Meet.',
    title: 'Practical agentic software engineering 2026',
    lead: 'Дев’ять онлайн-доповідей щосереди та щоп’ятниці впродовж грудня від Pragmasoft OÜ.',
    facts: ['27 листопада – 30 грудня 2026', '16:00 за Києвом (EET)', 'Google Meet'],
    addToCalendar: 'Додати до Google Calendar',
    downloadIcs: 'Завантажити .ics (Apple, Outlook)',
    seeSchedule: 'Переглянути програму',
    agendaLabel: 'Програма',
    weeks: ['27 листопада – 11 грудня', '16 – 30 грудня'],
    timeLine: '16:00 Київ · 14:00 UTC',
    slides: 'Слайди (PDF)',
    joinMeet: 'Приєднатися в Google Meet',
    portraitAlt: 'Заглушка портрета:',
    closeTitle: 'Збережіть усі дев’ять дат',
    closeText: 'Файл календаря містить усі доповіді о 16:00 за київським часом. Усі доповіді відбуваються в одній кімнаті Google Meet.',
    organiser: 'Організатор: Pragmasoft OÜ, Естонія.',
    kiteAlt: 'Логотип Pragmasoft: повітряний змій',
    icsName: 'practical-agentic-software-engineering-2026.ics',
    icsJoin: 'Приєднатися в Google Meet',
    dateLocale: 'uk-UA',
  },
} as const;

/** The agenda is split into two sheets: until 11 December, then the rest of December. */
export const sectionOf = (talk: Talk): 0 | 1 => (talk.date < '2026-12-12' ? 0 : 1);

export const formatDay = (iso: string, locale: Locale) => {
  const d = new Date(iso + 'T12:00:00Z');
  const l = copy[locale].dateLocale;
  const f = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(l, { timeZone: 'UTC', ...o }).format(d);
  return { day: f({ day: 'numeric' }), month: f({ month: 'short' }).replace('.', ''), weekday: f({ weekday: 'long' }) };
};

/** Europe/Kyiv rules (EET/EEST), so calendar apps show the talks in Kyiv time whatever their own zone. */
const VTIMEZONE = [
  'BEGIN:VTIMEZONE',
  `TZID:${TIMEZONE}`,
  `X-LIC-LOCATION:${TIMEZONE}`,
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:+0200',
  'TZOFFSETTO:+0300',
  'TZNAME:EEST',
  'DTSTART:19700329T030000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0300',
  'TZOFFSETTO:+0200',
  'TZNAME:EET',
  'DTSTART:19701025T040000',
  'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
  'END:STANDARD',
  'END:VTIMEZONE',
];

export const toIcs = (locale: Locale): string => {
  const c = copy[locale];
  // Bump STAMP and SEQUENCE together whenever the schedule changes, so calendar apps take the update.
  const stamp = '20261126T000000Z';
  const sequence = 1;
  const pad = (n: number) => String(n).padStart(2, '0');
  const esc = (s: string) => s.replace(/([\\;,])/g, '\\$1').replace(/\n/g, '\\n');
  const local = (date: string, minutes: number) =>
    `${date.replace(/-/g, '')}T${pad(Math.floor(minutes / 60))}${pad(minutes % 60)}00`;
  const startMin = START_LOCAL.hour * 60 + START_LOCAL.minute;
  const events = talks.map((t, i) =>
    [
      'BEGIN:VEVENT',
      `UID:agentic-2026-${i + 1}-${locale}@pragmasoft`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=${TIMEZONE}:${local(t.date, startMin)}`,
      `DTEND;TZID=${TIMEZONE}:${local(t.date, startMin + DURATION_MINUTES)}`,
      `SUMMARY:${esc(`${t.speaker[locale]}: ${t.topic[locale]}`)}`,
      `DESCRIPTION:${esc(`${c.title}\n${t.speaker[locale]}: ${t.topic[locale]}\n\n${c.icsJoin}: ${MEET_URL}\n${PAGE_URL.replace('/en/', `/${locale}/`)}`)}`,
      `LOCATION:${esc(MEET_URL)}`,
      `URL:${PAGE_URL.replace('/en/', `/${locale}/`)}`,
      `X-GOOGLE-CONFERENCE:${MEET_URL}`,
      `SEQUENCE:${sequence}`,
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      'END:VEVENT',
    ].join('\r\n')
  );
  const fold = (line: string) => {
    const out: string[] = [];
    let cur = '';
    let bytes = 0;
    for (const ch of line) {
      const n = new TextEncoder().encode(ch).length;
      if (bytes + n > (out.length ? 74 : 75)) { out.push(cur); cur = ''; bytes = 0; }
      cur += ch; bytes += n;
    }
    out.push(cur);
    return out.join('\r\n ');
  };
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Pragmasoft//Agentic 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${esc(c.title)}`,
    `X-WR-TIMEZONE:${TIMEZONE}`,
    ...VTIMEZONE,
    ...events,
    'END:VCALENDAR',
    '',
  ].join('\r\n').split('\r\n').map(fold).join('\r\n');
};
