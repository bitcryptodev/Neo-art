import * as chains from "viem/chains";
import { defineChain } from "viem";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const neox_tesnet = defineChain({
  id: 12227332,
  name: "NeoX T4",
  nativeCurrency: {
    decimals: 18, name: "NeoX Coin", symbol: "GAS" 
  },
  rpcUrls: {
    default: { http: ["https://neoxt4seed1.ngd.network"], webSocket: ["wss://neoxt4wss1.ngd.network"] },
    public: { http: ["https://neoxt4seed1.ngd.network"], webSocket: ["wss://neoxt4wss1.ngd.network"] },
  },
  blockExplorers: { default: { url: "https://xt4scan.ngd.network/", name: "NEOX Chain explorer" } },
  network: "NeoX T4",
});

const scaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [neox_tesnet], // Ensure chains.hardhat has chainId=31337

  // Polling interval for frontend (in milliseconds)
  pollingInterval: 30000,

  // Alchemy API Key
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // WalletConnect Project ID
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on Hardhat network
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
