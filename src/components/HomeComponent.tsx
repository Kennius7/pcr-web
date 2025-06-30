
// components/HomeSection.jsx
import ListingCard from "./ListingCard";
import { listings } from "@/lib/data";



type HomeSectionProps = {
    title: string;
};

export default function HomeSection({ title }: HomeSectionProps) {
    return (
        <section className="mb-10 md:px-4 px-2">
            <h2 className="md:text-xl text-2xl font-semibold mb-3">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-3 no-scrollbar">
                {listings.map((listing, idx) => (
                    <ListingCard key={idx} {...listing} />
                ))}
            </div>
        </section>
    );
}

