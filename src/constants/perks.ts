import { Icons } from "@/components";
import { ZapIcon, ChartSplineIcon, LifeBuoyIcon, PaletteIcon, ShieldCheckIcon, WaypointsIcon, BrainCircuitIcon, SparklesIcon } from "lucide-react";
import React from "react";

export const PERKS = [
    {
        icon: ZapIcon,
        title: "Offline Bluetooth Payments",
        description: "Send and receive XLM or PAYPULSE via BLE — no internet required."
    },
    {
        icon: ChartSplineIcon,
        title: "Auto-Sync to Stellar",
        description: "Transactions sync to the Stellar blockchain automatically when back online."
    },
    {
        icon: ShieldCheckIcon,
        title: "Secure by Design",
        description: "Ed25519 keypairs, encrypted storage, and biometric authentication."
    },
    {
        icon: SparklesIcon,
        title: "Multi-Asset Support",
        description: "Use native XLM and custom tokens like PAYPULSE with trustlines."
    },
    {
        icon: PaletteIcon,
        title: "Modern UI/UX",
        description: "Fluid gradients, dark mode, and real-time balances for a delightful UX."
    },
    {
        icon: WaypointsIcon,
        title: "Developer-Friendly",
        description: "Stellar SDK + Soroban contracts for escrow, vesting, and future staking."
    },
];