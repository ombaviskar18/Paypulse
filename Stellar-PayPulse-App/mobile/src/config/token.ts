// PayPulse Token Configuration

export interface TokenConfig {
  code: string;
  issuer: string;
  decimals: number;
  name: string;
  description: string;
}

// TODO: Replace with your actual issuer public key after creating the token
export const PAYPULSE_TOKEN: TokenConfig = {
  code: 'PAYPULSE',
  issuer: 'GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Replace with actual issuer
  decimals: 7,
  name: 'PayPulse Token',
  description: 'Offline-first payment token for emerging markets'
};

// Use native XLM by default until token is created
export const USE_CUSTOM_TOKEN = false; // Set to true after creating PAYPULSE token

export const getPaymentAsset = () => {
  if (USE_CUSTOM_TOKEN && PAYPULSE_TOKEN.issuer !== 'GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') {
    return {
      code: PAYPULSE_TOKEN.code,
      issuer: PAYPULSE_TOKEN.issuer
    };
  }
  return null; // null = native XLM
};
