import { onRequest as auth } from './auth.js';
import { onRequest as callback } from './callback.js';

// Decap CMS GitHub OAuth handlers. Everything else is served from static assets.
export default {
    async fetch(request, env, ctx) {
        const { pathname } = new URL(request.url);
        const context = { request, env, waitUntil: ctx.waitUntil.bind(ctx) };
        if (pathname === '/api/auth') return auth(context);
        if (pathname === '/api/callback') return callback(context);
        return env.ASSETS.fetch(request);
    },
};
