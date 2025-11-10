import { cn } from "@/functions";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import { Bluetooth, LinkIcon, CoinsIcon, SendIcon, ShieldCheck, CloudUpload } from "lucide-react";

const steps = [
    { title: "Search devices via Bluetooth", description: "Scan nearby devices using secure Bluetooth LE discovery.", icon: Bluetooth },
    { title: "Connect device properly", description: "Pair with the selected device for an encrypted P2P session.", icon: LinkIcon },
    { title: "Enter amount in XLM", description: "Choose XLM or PAYPULSE and input the transfer amount.", icon: CoinsIcon },
    { title: "Pay the amount", description: "Send funds to the selected device instantly over BLE.", icon: SendIcon },
    { title: "Verify transaction", description: "Confirm the signed transaction on both devices.", icon: ShieldCheck },
    { title: "Auto-execute when online", description: "Once online, your pending transactions sync to Stellar.", icon: CloudUpload },
];

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="How it works" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        How to use Paypulse💸
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Make secure crypto transfers over Bluetooth and automatically sync to Stellar when back online.
                    </p>
                </div>
            </Container>
            <Container>
                <div className="mt-16 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
                                        (index === 0 || index === 3) && "lg:border-l",
                                        index < 3 && "lg:border-b"
                                    )}
                                >
                                    {index < 3 && (
                                        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-violet-950/25 to-transparent pointer-events-none" />
                                    )}
                                    {index >= 3 && (
                                        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-violet-950/25 to-transparent pointer-events-none" />
                                    )}
                                    <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
                                        <div className="mb-4 relative z-10 px-10">
                                            <Icon strokeWidth={1.6} className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground" />
                                        </div>
                                        <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
                                            <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-violet-600 transition-all duration-500 origin-center" />
                                            <span className="group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading">
                                                {index + 1}. {step.title}
                                            </span>
                                        </div>
                                        <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default HowItWorks;

