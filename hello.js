import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

function handler(req: Request): Response {
  console.log("hee")
  return new Response("Hello world");
}

console.log("Listening on http://localhost:8000");
await serve(handler);
