import type { NextApiRequest, NextApiResponse } from "next";
type Handler = {
    req: {
        query: {
            fileName: string;
        };
    };
    res: {
        success: false;
        error: string;
    } | {
        success: true;
        imageUrl: string;
    };
};
export default function handler(req: NextApiRequest & Handler["req"], res: NextApiResponse<Handler["res"]>): void;
export {};
//# sourceMappingURL=image.d.ts.map