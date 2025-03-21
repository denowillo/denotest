import { serve } from "https://deno.land/std@0.130.0/http/server.ts";
// test
const port = 8080;

const handler = (request: Request): Response => {
  console.log(request)

  let body = "Your user-agent is:\n\n";
  body += request.headers.get("user-agent") || "Unknown";

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
