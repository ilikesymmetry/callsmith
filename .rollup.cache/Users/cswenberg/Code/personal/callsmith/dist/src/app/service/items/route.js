export async function POST(request) {
    return Response.json({ test: true, name: "POST /service/items" });
}
export async function GET(request) {
    return Response.json({ test: true, name: "GET /service/items" });
}
//# sourceMappingURL=route.js.map