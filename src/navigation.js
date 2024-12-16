import { SITE } from 'astrowind:config';
import { getHomePermalink } from './utils/permalinks';
import { useTranslations } from './i18n/utils';

export const headerData = (locale) => {
  const t = useTranslations(locale);

  return ({
    links: [
      {
        text: t("nav.about"),
        href: getHomePermalink(locale) + '#about',
      },
      {
        text: t("nav.projects"),
        href: getHomePermalink(locale) + '#projects',
      },
      {
        text: t("nav.team"),
        href: getHomePermalink(locale) + '#team',
      },
      {
        text: t("nav.quality"),
        href: getHomePermalink(locale) + '#quality',
      },
      {
        text: t("nav.jobs"),
        href: 'https://djinni.co/jobs/?company=pragmasoft-fde72',
        external: true,
      },
    ],
    // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  });
};

export const footerData = (locale) => {
  const t = useTranslations(locale);

  return ({
    secondaryLinks: [
      { text: t("nav.about"), href: getHomePermalink(locale) + '#about' },
      { text: t("nav.team"), href: getHomePermalink(locale) + '#team' },
      { text: t("nav.jobs"), href: 'https://djinni.co/jobs/?company=pragmasoft-fde72' },
    ],
    socialLinks: [
      { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/pragmasoft-ukraine' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/pages/Pragmasoft/340275132655051' },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pragmasoft-ukraine' },
      { ariaLabel: 'Dou', icon: 'logos/dou', href: 'https://jobs.dou.ua/companies/pragmasoft' },
      { ariaLabel: 'Djinni.co', icon: 'logos/djinni', href: 'https://djinni.co/jobs/?company=pragmasoft-fde72' },
    ],
    footNote: `
      © ${(new Date()).getFullYear()} ${SITE?.name}. All rights reserved.
    `,
  })
};
