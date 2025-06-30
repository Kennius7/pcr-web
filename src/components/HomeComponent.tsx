
// components/HomeSection.jsx
import ListingCard from "./ListingCard";
import { listings } from "@/lib/data";



type HomeSectionProps = {
    title: string;
};

export default function HomeSection({ title }: HomeSectionProps) {
    return (
        <section className="mb-10 px-4">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
                {listings.map((listing, idx) => (
                    <ListingCard key={idx} {...listing} />
                ))}
            </div>
        </section>
    );
}

