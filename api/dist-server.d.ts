declare module "../dist/server/index.js" {
  const handler: {
    fetch(
      request: Request,
      env: unknown,
      ctx: unknown,
    ): Promise<Response> | Response;
  };
  export default handler;
}
