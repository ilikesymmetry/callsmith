import { __awaiter, __generator } from "tslib";
// import { getTransactionUrl, requireFields, requireMethods } from "@/lib/utils";
// import { Address, isAddressEqual } from "viem";
// import grouposConfig from "../../../../groupos.config";
// import { readContract } from "viem/actions";
// import { getApiWalletClient, getClient } from "@/lib/viem/client";
// import { PermissionsAbi } from "@/lib/abi/Permissions";
// import { Operation } from "@/lib/constants";
// import { ERC1155RailsAbi } from "@/lib/abi/ERC1155Rails";
// async function mintTokens(req: NextApiRequest, res: NextApiResponse) {
//   console.log("new request /erc1155/mint", req.body);
//   const { chainId, contractAddress, recipientAddress, tokenId, amount } =
//     req.body as {
//       chainId: number;
//       contractAddress: Address;
//       recipientAddress: Address;
//       tokenId: string | number;
//       amount: string | number;
//     };
//   console.log("request body", req.body);
//   requireFields({
//     chainId,
//     contractAddress,
//     recipientAddress,
//     tokenId,
//     amount,
//   });
//   const walletClient = await getApiWalletClient(chainId);
//   if (!walletClient) {
//     throw Error(
//       "Could not construct API WalletClient. Must set API_PRIVATE_KEY in environment."
//     );
//   }
//   console.log("connected walletClient");
//   const tokenContract = grouposConfig.tokenContracts.find(
//     (v) =>
//       v.chainId === chainId &&
//       isAddressEqual(v.contractAddress, contractAddress) &&
//       v.tokenStandard === "ERC1155"
//   );
//   if (!tokenContract) {
//     return res.status(404).json({ message: "Token contract does not exist." });
//   }
//   const apiCanMint = await readContract(getClient(chainId), {
//     address: contractAddress,
//     abi: PermissionsAbi,
//     functionName: "hasPermission",
//     args: [Operation.MINT, walletClient.account.address],
//   });
//   if (!apiCanMint) {
//     throw Error(
//       `Token missing MINT permission for API account: ${walletClient.account.address}`
//     );
//   }
//   try {
//     const transactionHash = await walletClient.writeContract({
//       abi: ERC1155RailsAbi,
//       address: contractAddress,
//       functionName: "mintTo",
//       args: [recipientAddress, BigInt(tokenId), BigInt(amount)],
//     });
//     console.log("new transaction", transactionHash);
//     res.status(200).json({
//       success: true,
//       transactionHash,
//       transactionUrl: getTransactionUrl(chainId, transactionHash),
//     });
//   } catch (e: any) {
//     console.error(e.message);
//     throw Error("Error encountered in minting. Please contact support.");
//   }
// }
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // requireMethods(["POST"], req.method);
            }
            catch (e) {
                res.status(405).json({ error: e.message });
                res.end();
                return [2 /*return*/];
            }
            try {
                // await mintTokens(req, res);
                return [2 /*return*/, res.status(500).json({ test: true })];
            }
            catch (e) {
                console.error(e.message);
                return [2 /*return*/, res.status(500).json({ success: false, error: e.message })];
            }
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=mint.js.map