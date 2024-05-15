import { NextRequest } from "next/server";
export declare const dynamic = "force-dynamic";
export declare function PUT(request: Request, { params }: {
    params: {
        item: string;
    };
}): Promise<Response>;
export declare function PATCH(request: Request, { params }: {
    params: {
        item: string;
    };
}): Promise<Response>;
export declare function DELETE(request: NextRequest, { params }: {
    params: {
        item: string;
    };
}): Promise<Response>;
//# sourceMappingURL=route.d.ts.map