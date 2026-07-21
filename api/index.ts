// Adaptador pra rodar o handler SSR do TanStack Start (formato Cloudflare Worker
// fetch(request, env, ctx)) como Vercel Function. O app já lê configs via
// process.env diretamente (ver src/lib/evolution.server.ts), então passamos
// process.env como "env" — não depende de bindings específicos do Cloudflare.
import handler from "../dist/server/index.js";

export default async function (request: Request): Promise<Response> {
  return handler.fetch(request, process.env as unknown as Record<string, unknown>, {});
}
