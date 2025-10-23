export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Try to serve the requested asset first.
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404 && request.method === "GET") {
      const url = new URL(request.url);

      // Attempt to serve the route as a folder with an index.html (e.g. /about -> /about/index.html).
      if (!url.pathname.endsWith("/")) {
        const directoryUrl = new URL(`${url.pathname}/`, url.origin);
        const directoryRequest = new Request(directoryUrl.toString(), request);
        response = await env.ASSETS.fetch(directoryRequest);
        if (response.status !== 404) {
          return response;
        }
      }

      // Fallback to the root index.html for SPA-style routing.
      const indexUrl = new URL("/index.html", url.origin);
      const indexRequest = new Request(indexUrl.toString(), request);
      const indexResponse = await env.ASSETS.fetch(indexRequest);
      if (indexResponse.status !== 404) {
        return indexResponse;
      }
    }

    return response;
  },
};
