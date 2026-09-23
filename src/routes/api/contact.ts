import { createFileRoute } from "@tanstack/react-router";
import { handleContactSubmission } from "@/server/contact";

function corsHeaders() {
  const origin = process.env.FRONTEND_ORIGIN?.trim() || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders() }),
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json(
            { success: false, message: "Unable to send your message." },
            { status: 400, headers: corsHeaders() },
          );
        }

        const result = await handleContactSubmission(payload);
        return Response.json(result.body, {
          status: result.status,
          headers: corsHeaders(),
        });
      },
    },
  },
});
