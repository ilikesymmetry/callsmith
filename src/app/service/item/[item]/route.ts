import { NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto

export async function PUT(
  request: Request,
  { params }: { params: { item: string } }
) {
  return Response.json({
    test: true,
    name: "PUT /service/item/" + params.item,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { item: string } }
) {
  return Response.json({
    test: true,
    name: "PATCH /service/item/" + params.item,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { item: string } }
) {
  console.log(request);
  return Response.json({
    test: true,
    name: "DELETE /service/item/" + params.item,
  });
}
