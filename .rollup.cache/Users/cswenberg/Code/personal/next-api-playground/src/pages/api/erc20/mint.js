import { __awaiter, __generator } from "tslib";
// import { getTransactionUrl, requireFields, requireMethods } from "@/lib/utils";
// import { Hex, erc20Abi, isAddressEqual, parseUnits } from "viem";
// import grouposConfig from "../../../../groupos.config";
// import { readContract } from "viem/actions";
// import { getApiWalletClient, getClient } from "@/lib/viem/client";
// import { ERC20RailsAbi } from "@/lib/abi/ERC20Rails";
// import { PermissionsAbi } from "@/lib/abi/Permissions";
// import { Operation } from "@/lib/constants";
function mintTokens(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    try {
                        // requireMethods(["POST"], req.method);
                    }
                    catch (e) {
                        res.status(405).json({ error: e.message });
                        res.end();
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mintTokens(req, res)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1.message);
                    return [2 /*return*/, res.status(500).json({ success: false, error: e_1.message })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=mint.js.map