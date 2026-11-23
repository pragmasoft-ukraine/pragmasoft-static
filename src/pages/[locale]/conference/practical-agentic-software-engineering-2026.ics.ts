import type { APIRoute, GetStaticPaths } from 'astro';
import { toIcs, copy, type Locale } from '~/data/conference';

export const getStaticPaths = (() => [{ params: { locale: 'en' } }, { params: { locale: 'uk' } }]) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) =>
  new Response(toIcs(params.locale as Locale), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      // inline: let the browser or OS hand the file to a calendar app instead of saving it
      'Content-Disposition': `inline; filename="${copy.en.icsName}"`,
    },
  });
