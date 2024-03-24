import { useState, useEffect } from "react";
import Link from "next/link";

export function PropCarousel({ property }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (currentSlide) => (currentSlide + 1) % property.images.length
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [property.images.length]);

    return (
        <div className="max-w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
                {/* Carousel Image Container */}
                {property.images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`object-cover w-full aspect-square transition-opacity duration-500 ease-in-out ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            position:
                                index === currentSlide ? "static" : "absolute"
                        }}
                    />
                ))}
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-lg leading-tight truncate">
                    {property.title}
                </h3>
                <p className="text-sm text-gray-500">{property.location}</p>
                <p className="mt-2 text-gray-600 text-sm">
                    {property.description}
                </p>
            </div>
        </div>
    );
}
