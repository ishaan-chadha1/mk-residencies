import { useState, useEffect } from "react";
import Image from "next/image";

export function PropCarousel({ property }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (currentSlide) => (currentSlide + 1) % property.images.length
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [property.images.length]);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Check out All our Properties!
                </h1>
                <p className="text-lg text-gray-600">
                    Scroll over the Property for More Information
                </p>
            </div>

            {/* Single Card Display */}
            <div
                className={`w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transition-transform ${
                    isHovered ? "scale-105" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Carousel Image */}
                <div className="relative">
                    {property.images.map((src, index) => (
                        <Image
                            key={src}
                            width={600}
                            height={400}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={`object-cover w-full h-64 transition-opacity duration-500 ease-in-out ${
                                index === currentSlide
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                            style={{
                                position:
                                    index === currentSlide
                                        ? "static"
                                        : "absolute"
                            }}
                        />
                    ))}
                </div>

                {/* Card Content */}
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
        </div>
    );
}
