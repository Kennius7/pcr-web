
// components/ListingCard.jsx
import { Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type ListingCardProps = {
    image: string | StaticImageData;
    title: string;
    price: number;
    rating: number;
    location?: string;
};

export default function ListingCard({ image, title, price, rating, location }: ListingCardProps) {
    return (
        <div className="relative md:min-w-[250px] min-w-[155px] md:max-w-[300px] max-w-[170px] 
            md:rounded-2xl rounded-lg overflow-hidden shadow-sm">
            {/* Image */}
            <div className="relative w-full md:h-48 h-[110px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                {/* Favorite badge */}
                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-medium shadow">
                    Guest favorite
                </div>
                {/* Heart icon */}
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                    <Heart size={16} className="text-gray-600" />
                </div>
            </div>

            {/* Info */}
            <div className="px-2 py-2">
                <h3 className="text-sm font-semibold">{title}</h3>
                {location && <p className="text-xs text-gray-500">{location}</p>}
                <p className="text-sm text-gray-600">${price} for 2 nights</p>
                <p className="text-sm text-gray-600">⭐ {rating}</p>
            </div>
        </div>
    );
}

