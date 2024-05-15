export async function GET(request: Request) {
  return Response.json({ test: true, name: "GET /service" });
}
