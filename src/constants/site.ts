export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "PayPulse Stellar";

export const APP_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN || "paypulse.app"}`;

export const APP_HOSTNAMES = new Set([
    process.env.NEXT_PUBLIC_APP_DOMAIN || "paypulse.app",
    `www.${process.env.NEXT_PUBLIC_APP_DOMAIN || "paypulse.app"}`,
]);
