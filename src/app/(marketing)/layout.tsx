import React from 'react';
import { Navbar, Footer } from "@/components";
import Ribbons from "@/components/ui/ribbons";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <div id="home" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px" />
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <Ribbons
                    colors={['#a855f7']}
                    baseThickness={28}
                    speedMultiplier={0.55}
                    maxAge={500}
                    enableFade={false}
                    enableShaderEffect
                    useWindowEvents
                />
            </div>
            <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
