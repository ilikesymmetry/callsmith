export async function POST(request: Request) {
  return Response.json({ test: true, name: "POST /service/items" });
}

export async function GET(request: Request) {
  return Response.json({ test: true, name: "GET /service/items" });
}
