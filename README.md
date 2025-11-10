<img src="./public/images/logo.png" alt="PayPulse Logo" width="50" height="50">


# 💸⚡ PayPulse Stellar — Offline-First Crypto Payments via Bluetooth

<!-- <img src="https://github.com/user-attachments/assets/deab03fd-4234-44c3-a6ad-484c4a1a02a1" alt="Linkify Thubmnail"> -->
<img src="./public/images/thumbnail.png" alt="PayPulse Thumbnail" style="border-radius: 12px;" width="1280">


## 🌟 Introduction
PayPulse Stellar enables crypto payments without internet using Bluetooth Low Energy (BLE). Send and receive XLM or custom tokens (PAYPULSE) offline. When you're back online, transactions auto-sync to the Stellar blockchain.

## 🚀 Key Features

- Offline payments over Bluetooth (BLE)
- Auto-sync to Stellar blockchain
- Secure wallet: Ed25519 keys, encrypted storage, biometric auth
- Multi-asset support: XLM and PAYPULSE via trustlines
- Modern UI/UX with dark mode and real-time balances

## 🔗 Live Preview

Demo link (coming soon)

## 🎥 Demo Scenarios

- Offline Payment: Device A → send 10 XLM → Device B (no internet). Auto-syncs when online.
- Online Payment: Instant Stellar transfer (testnet/mainnet).
- Token Transfer: Add trustline and transfer PAYPULSE.

## 💻 Tech Stack

Frontend: Next.js, Tailwind, Shadcn
Mobile (native app): React Native, Expo, TypeScript
Blockchain: Stellar SDK, Soroban (Rust/Wasm)


## 🛠️ Installation (Web)
To run the web landing locally:

1. Clone the repository:
    ```bash
    git clone <your_repo_url>
    ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Set up environment variables in a `.env` file:
    ```
    # app
    NEXT_PUBLIC_APP_NAME=
    NEXT_PUBLIC_APP_DOMAIN=

    # database
    DATABASE_URL=
    ```

4. Run the development server:
    ```bash
    pnpm run dev
    ```

## 🧭 Roadmap
- v1.0: Offline + online payments, Bluetooth transfer, token support, biometrics
- v1.1: Soroban escrow/vesting/staking, iOS + Web Bluetooth
- v2.0: Multi-chain, DEX swaps, NFC tap-to-pay, merchant dashboard, fiat on/off-ramps

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 💬 Contact
Create an issue or reach out via GitHub Issues.

---

Built with ❤️ by [Shreyas](https://shreyas-sihasane.vercel.app/)
