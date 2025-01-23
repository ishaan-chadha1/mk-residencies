import { useState, useEffect } from "react";
import Image from "next/image";

export function PropCarousel({ property }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (currentSlide) => (currentSlide + 1) % property.images.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [property.images.length]);

    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto my-8">
            <div className="relative">
                {property.images.map((src, index) => (
                    <Image
                        key={src}
                        width={600}
                        height={400}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`object-cover w-full h-64 transition-opacity duration-500 ease-in-out ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            position:
                                index === currentSlide ? "static" : "absolute"
                        }}
                    />
                ))}
            </div>
            <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {property.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    {property.location}
                </p>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <p className="text-gray-600 mb-2">
                    <strong>Room Types:</strong> {property.roomTypes}
                </p>
                {property.specialFeatures && (
                    <p className="text-gray-600 mb-4">
                        <strong>Special Features:</strong>{" "}
                        {property.specialFeatures}
                    </p>
                )}
                <p className="text-sm text-gray-500">
                    <strong>Contact:</strong> {property.contactInfo}
                </p>
            </div>
        </div>
    );
}
