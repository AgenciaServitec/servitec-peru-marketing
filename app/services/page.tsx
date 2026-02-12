import {ServicesGrid} from "@/sections/services-sections/ServicesGrid";
import {ProcessSection} from "@/sections/services-sections/ProcessSection";

export default function ServicesPage() {
    return (
        <main className="bg-background min-h-screen">
            <ServicesGrid />
            <ProcessSection />
        </main>
    );
}