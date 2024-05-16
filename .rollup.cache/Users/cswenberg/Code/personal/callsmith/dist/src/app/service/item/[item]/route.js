export const dynamic = "force-dynamic"; // defaults to auto
export async function PUT(request, { params }) {
    return Response.json({
        test: true,
        name: "PUT /service/item/" + params.item,
    });
}
export async function PATCH(request, { params }) {
    return Response.json({
        test: true,
        name: "PATCH /service/item/" + params.item,
    });
}
export async function DELETE(request, { params }) {
    console.log(request);
    return Response.json({
        test: true,
        name: "DELETE /service/item/" + params.item,
    });
}
//# sourceMappingURL=route.js.map