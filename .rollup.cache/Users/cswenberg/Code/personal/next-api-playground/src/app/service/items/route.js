import { __awaiter, __generator } from "tslib";
export function POST(request) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Response.json({ test: true, name: "POST /service/items" })];
        });
    });
}
export function GET(request) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Response.json({ test: true, name: "GET /service/items" })];
        });
    });
}
//# sourceMappingURL=route.js.map