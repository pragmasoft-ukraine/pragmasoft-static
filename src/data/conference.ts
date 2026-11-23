export type Locale = 'en' | 'uk';

/**
 * Calendar ID of the public Google Calendar holding the nine talks (Google Calendar > Settings > the calendar >
 * Integrate calendar > Calendar ID, e.g. "abc123@group.calendar.google.com"). While empty, the calendar button
 * falls back to the .ics file.
 */
export const GOOGLE_CALENDAR_ID = 'e4a3441f62a168a2a3581dffcd7fed1a677e6e42195555565191b6d0f7e3ae01@group.calendar.google.com';

export interface Talk {
  /** ISO date of the talk; every talk starts at 18:00 Europe/Kyiv. */
  date: string;
  speaker: Record<Locale, string>;
  /** Initials for the placeholder portrait. */
  initials: Record<Locale, string>;
  topic: Record<Locale, string>;
  /** Key of a face crop in src/assets/images/conference; placeholder portrait when absent. */
  photo?: 'kozliakov' | 'liubov' | 'novoselov' | 'zemnytskyi-dmytro';
}

/** Start time in UTC (18:00 Kyiv, EET, UTC+2 in winter). */
export const START_UTC = { hour: 16, minute: 0 };
/** Talk length is not confirmed by the organiser; 1 hour is a placeholder used only for the .ics end time. */
export const DURATION_MINUTES = 60;

export const talks: Talk[] = [
  {
    date: '2026-11-30',
    speaker: { en: 'Volodymyr Kozliakov', uk: 'Володимир Козляков' },
    initials: { en: 'VK', uk: 'ВК' },
    photo: 'kozliakov',
    topic: {
      en: 'Agents Do the Work, Gates Check It, I Decide: Running AI Coding Agents with Real Guardrails',
      uk: 'Агенти працюють, шлюзи перевіряють, рішення за мною: запуск AI-агентів для кодування з реальними запобіжниками',
    },
  },
  {
    date: '2026-12-01',
    speaker: { en: 'Mykyta Zemnytskyi', uk: 'Микита Земницький' },
    initials: { en: 'MZ', uk: 'МЗ' },
    topic: {
      en: 'LSP server tool in agentic harness for java development',
      uk: 'Інструмент LSP-сервера в агентному середовищі для розробки на Java',
    },
  },
  {
    date: '2026-12-02',
    speaker: { en: 'Denys Liubov', uk: 'Денис Любов' },
    initials: { en: 'DL', uk: 'ДЛ' },
    photo: 'liubov',
    topic: {
      en: 'Big Tasks with AI: Context Is Short-Term Memory, Files Are Long-Term',
      uk: 'Великі завдання з AI: контекст — це короткочасна пам’ять, файли — довготривала',
    },
  },
  {
    date: '2026-12-03',
    speaker: { en: 'Oleh Novoselov', uk: 'Олег Новоселов' },
    initials: { en: 'ON', uk: 'ОН' },
    photo: 'novoselov',
    topic: {
      en: 'ArchUnit - Architectural guardrails for agents',
      uk: 'ArchUnit — архітектурні запобіжники для агентів',
    },
  },
  {
    date: '2026-12-04',
    speaker: { en: 'Vitalii Alekask', uk: 'Віталій Алекаск' },
    initials: { en: 'VA', uk: 'ВА' },
    topic: {
      en: 'Agentic workflow in frontend development',
      uk: 'Агентний робочий процес у фронтенд-розробці',
    },
  },
  {
    date: '2026-12-07',
    speaker: { en: 'Oleksandr Neklesa', uk: 'Олександр Неклеса' },
    initials: { en: 'ON', uk: 'ОН' },
    topic: { en: 'Ultracode tool', uk: 'Інструмент Ultracode' },
  },
  {
    date: '2026-12-08',
    speaker: { en: 'Pavlo Romanenko', uk: 'Павло Романенко' },
    initials: { en: 'PR', uk: 'ПР' },
    topic: {
      en: 'Self-healing continuous integration environment',
      uk: 'Самовідновлюване середовище безперервної інтеграції',
    },
  },
  {
    date: '2026-12-09',
    speaker: { en: 'Andrii Kulikov', uk: 'Андрій Куліков' },
    initials: { en: 'AK', uk: 'АК' },
    topic: {
      en: 'How to Test AI: Evals in Practice with a QA Skill',
      uk: 'Як тестувати AI: evals на практиці зі QA-навичкою',
    },
  },
  {
    date: '2026-12-10',
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
      'Online conference by Pragmasoft OÜ: nine talks on practical agentic software engineering, 30 November to 10 December 2026, 18:00 Kyiv time on Google Meet.',
    title: 'Practical agentic software engineering 2026',
    lead: 'Nine online talks in two weeks, held by Pragmasoft OÜ.',
    facts: ['30 Nov – 10 Dec 2026', '18:00 Kyiv time', 'Google Meet'],
    addToCalendar: 'Add to Google Calendar',
    downloadIcs: 'Download .ics (Apple, Outlook)',
    seeSchedule: 'See the schedule',
    agendaLabel: 'Schedule',
    weeks: ['30 November – 4 December', '7 – 10 December'],
    timeLine: '18:00 Kyiv · 16:00 UTC',
    portraitAlt: 'Portrait placeholder for',
    closeTitle: 'Keep all nine dates',
    closeText: 'The calendar file holds every talk at 18:00 Kyiv time. The Google Meet link will be shared later.',
    organiser: 'Held by Pragmasoft OÜ, Estonia.',
    kiteAlt: 'Pragmasoft kite logo',
    icsName: 'practical-agentic-software-engineering-2026.ics',
    icsLocation: 'Google Meet (link to be shared later)',
    dateLocale: 'en-GB',
  },
  uk: {
    metaTitle: 'Practical agentic software engineering 2026',
    metaDescription:
      'Онлайн-конференція Pragmasoft OÜ: дев’ять доповідей про практичну агентну розробку програмного забезпечення, 30 листопада – 10 грудня 2026, о 18:00 за київським часом у Google Meet.',
    title: 'Practical agentic software engineering 2026',
    lead: 'Дев’ять онлайн-доповідей за два тижні від Pragmasoft OÜ.',
    facts: ['30 листопада – 10 грудня 2026', '18:00 за Києвом', 'Google Meet'],
    addToCalendar: 'Додати до Google Calendar',
    downloadIcs: 'Завантажити .ics (Apple, Outlook)',
    seeSchedule: 'Переглянути програму',
    agendaLabel: 'Програма',
    weeks: ['30 листопада – 4 грудня', '7 – 10 грудня'],
    timeLine: '18:00 Київ · 16:00 UTC',
    portraitAlt: 'Заглушка портрета:',
    closeTitle: 'Збережіть усі дев’ять дат',
    closeText: 'Файл календаря містить усі доповіді о 18:00 за київським часом. Посилання на Google Meet надішлемо пізніше.',
    organiser: 'Організатор: Pragmasoft OÜ, Естонія.',
    kiteAlt: 'Логотип Pragmasoft: повітряний змій',
    icsName: 'practical-agentic-software-engineering-2026.ics',
    icsLocation: 'Google Meet (посилання буде надіслано пізніше)',
    dateLocale: 'uk-UA',
  },
} as const;

export const weekOf = (talk: Talk): 0 | 1 => (talk.date < '2026-12-07' ? 0 : 1);

export const formatDay = (iso: string, locale: Locale) => {
  const d = new Date(iso + 'T12:00:00Z');
  const l = copy[locale].dateLocale;
  const f = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(l, { timeZone: 'UTC', ...o }).format(d);
  return { day: f({ day: 'numeric' }), month: f({ month: 'short' }).replace('.', ''), weekday: f({ weekday: 'long' }) };
};

export const toIcs = (locale: Locale): string => {
  const c = copy[locale];
  const stamp = '20261122T000000Z';
  const pad = (n: number) => String(n).padStart(2, '0');
  const esc = (s: string) => s.replace(/([\;,])/g, '\\$1').replace(/\n/g, '\\n');
  const events = talks.map((t, i) => {
    const [y, m, d] = t.date.split('-');
    const start = new Date(Date.UTC(+y, +m - 1, +d, START_UTC.hour, START_UTC.minute));
    const end = new Date(start.getTime() + DURATION_MINUTES * 60000);
    const fmt = (x: Date) =>
      `${x.getUTCFullYear()}${pad(x.getUTCMonth() + 1)}${pad(x.getUTCDate())}T${pad(x.getUTCHours())}${pad(x.getUTCMinutes())}00Z`;
    return [
      'BEGIN:VEVENT',
      `UID:agentic-2026-${i + 1}-${locale}@pragmasoft`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:${esc(`${t.speaker[locale]}: ${t.topic[locale]}`)}`,
      `DESCRIPTION:${esc(`${c.title}. ${t.speaker[locale]}`)}`,
      `LOCATION:${esc(c.icsLocation)}`,
      'END:VEVENT',
    ].join('\r\n');
  });
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
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Pragmasoft//Agentic 2026//EN', 'CALSCALE:GREGORIAN', `X-WR-CALNAME:${esc(c.title)}`, ...events, 'END:VCALENDAR', ''].join('\r\n').split('\r\n').map(fold).join('\r\n');
};
