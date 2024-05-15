import { __awaiter, __generator } from "tslib";
export var dynamic = "force-dynamic"; // defaults to auto
export function PUT(request_1, _a) {
    return __awaiter(this, arguments, void 0, function (request, _b) {
        var params = _b.params;
        return __generator(this, function (_c) {
            return [2 /*return*/, Response.json({
                    test: true,
                    name: "PUT /service/item/" + params.item,
                })];
        });
    });
}
export function PATCH(request_1, _a) {
    return __awaiter(this, arguments, void 0, function (request, _b) {
        var params = _b.params;
        return __generator(this, function (_c) {
            return [2 /*return*/, Response.json({
                    test: true,
                    name: "PATCH /service/item/" + params.item,
                })];
        });
    });
}
export function DELETE(request_1, _a) {
    return __awaiter(this, arguments, void 0, function (request, _b) {
        var params = _b.params;
        return __generator(this, function (_c) {
            console.log(request);
            return [2 /*return*/, Response.json({
                    test: true,
                    name: "DELETE /service/item/" + params.item,
                })];
        });
    });
}
//# sourceMappingURL=route.js.map