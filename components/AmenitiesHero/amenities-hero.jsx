import { Badge } from "@components/ui/badge";
import Image from "next/image";
import { useState, useEffect } from "react";
const properties = [
    {
        title: "Spacious Rooms",
        images: [
            "/DSC09323-HDR.jpg",
            "/Suite 1.JPG",
            "/Suite 2.jpg"
        ]
    },
    {
        title: "Dining Areas",
        images: ["/DSC09308-HDR.jpg", "/DSC09308-HDR.jpg", "/DSC09308-HDR.jpg"]
    },
    {
        title: "Terrace",
        images: ["/DSC09308-HDR.jpg", "/DSC09308-HDR.jpg", "/DSC09308-HDR.jpg"]
    },
    {
        title: "Reception",
        images: ["/DSC09308-HDR.jpg", "/DSC09308-HDR.jpg", "/DSC09308-HDR.jpg"]
    }
];

export function AmenitiesHero() {
    const [currentSlides, setCurrentSlides] = useState(
        Array(properties.length).fill(0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlides((currentSlides) =>
                currentSlides.map(
                    (slide, index) =>
                        (slide + 1) % properties[index].images.length
                )
            );
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-transparent p-6">
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-4 gap-4 mb-8">
                <Badge variant="outline">
                    <UtensilsIcon className="mr-2" />
                    In-House Kitchen
                </Badge>
                <Badge variant="outline">
                    <BreakfastIcon className="mr-2" />
                    Breakfast
                </Badge>
                <Badge variant="outline">
                    <XIcon className="mr-2" />
                    AC
                </Badge>
                <Badge variant="outline">
                    <CctvIcon className="mr-2" />
                    CCTV
                </Badge>
                <Badge variant="outline">
                    <WifiIcon className="mr-2" />
                    Wifi
                </Badge>
                <Badge variant="outline">
                    <LoaderIcon className="mr-2" />
                    24/7 Power Backup
                </Badge>
                <Badge variant="outline">
                    <MicrowaveIcon className="mr-2" />
                    Microwave
                </Badge>
                <Badge variant="outline">
                    <CoffeeIcon className="mr-2" />
                    Coffee Maker & Kettle
                </Badge>
                <Badge variant="outline">
                    <StaffIcon className="mr-2" />
                    Dedicated Staff
                </Badge>
            </div>
            <h2 className="text-2xl font-semibold mb-4">
                Amenities for Remote Working
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline">
                    <WifiIcon className="mr-2 transform transition-transform hover:scale-110" />
                    High-Speed Wi-Fi
                </Badge>
                <Badge variant="outline">
                    <SignalIcon className="mr-2" />
                    Workspaces
                </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {properties.map((property, index) => (
                    <div key={index} className="group">
                        <div className="relative w-full h-64 overflow-hidden rounded-lg mb-2">
                            {/* Carousel Image Container */}
                            {property.images.map((src, imgIndex) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                        imgIndex === currentSlides[index]
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`${property.title} - Slide ${
                                            imgIndex + 1
                                        }`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-lg leading-tight truncate">
                                {property.title}
                            </h3>
                            {/* Additional details if needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function WifiIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 13a10 10 0 0 1 14 0" />
            <path d="M8.5 16.5a5 5 0 0 1 7 0" />
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <line x1="12" x2="12.01" y1="20" y2="20" />
        </svg>
    );
}

function SignalIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
        </svg>
    );
}

function ContactIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
    );
}

function UtensilsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
    );
}

function CctvIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-cctv"
        >
            <path d="M7 9h.01" />
            <path d="M16.75 12H22l-3.5 7-3.09-4.32" />
            <path d="M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z" />
            <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
            <path d="M2 21v-4" />
        </svg>
    );
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-air-vent"
        >
            <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M6 8h12" />
            <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
            <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
        </svg>
    );
}

function LoaderIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-battery-charging"
        >
            <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
            <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
            <path d="m11 7-3 5h4l-3 5" />
            <line x1="22" x2="22" y1="11" y2="13" />
        </svg>
    );
}

function MicrowaveIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="15" x="2" y="4" rx="2" />
            <rect width="8" height="7" x="6" y="8" rx="1" />
            <path d="M18 8v7" />
            <path d="M6 19v2" />
            <path d="M18 19v2" />
        </svg>
    );
}

function BreakfastIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-croissant"
        >
            <path d="m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" />
            <path d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" />
            <path d="M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" />
            <path d="m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" />
            <path d="M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" />
        </svg>
    );
}

function CoffeeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-coffee"
        >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="6" y1="2" y2="4" />
            <line x1="10" x2="10" y1="2" y2="4" />
            <line x1="14" x2="14" y1="2" y2="4" />
        </svg>
    );
}

function StaffIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-hand-platter"
        >
            <path d="M12 3V2" />
            <path d="M5 10a7.1 7.1 0 0 1 14 0" />
            <path d="M4 10h16" />
            <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
            <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
            <path d="M5 14v7H2" />
        </svg>
    );
}
