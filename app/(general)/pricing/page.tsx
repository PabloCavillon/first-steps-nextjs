import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pagina de pricing!',
    keywords: ['pricing', 'page', 'Pablo']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}