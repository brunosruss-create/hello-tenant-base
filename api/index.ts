// Adaptador pra rodar o handler SSR do TanStack Start (formato Cloudflare Worker
// fetch(request, env, ctx)) como Vercel Function. O app já lê configs via
// process.env diretamente (ver src/lib/evolution.server.ts), então passamos
// process.env como "env" — não depende de bindings específicos do Cloudflare.
//
// IMPORTANTE: precisa exportar `fetch` nomeado (não `export default`).
// Com export default, a Vercel invoca a function no formato legado Node.js
// (req, res) — o req.url vem relativo ("/"), o que quebra o `new URL()`
// interno do h3/TanStack Start. Exportando `fetch`, a Vercel usa a
// convenção Web-standard (Request/Response) e passa a URL absoluta.
import handler from "../dist/server/index.js";

export async function fetch(request: Request): Promise<Response> {
  return handler.fetch(request, process.env as unknown as Record<string, unknown>, {});
}
