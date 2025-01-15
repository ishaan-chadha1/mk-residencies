import { useState, useEffect } from "react";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

// Assuming each of these entries represents a property with its testimonials
const testimonialsData = {
    "Tea Harbour": [
        {
            id: uuid(),
            name: "Narottam Kumar",
            review: "Best hotel to stay near Doddakanalli. They have very good staff and they maintained cleanness.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Danish Jena",
            review: "Thank for everything. I feel very comfortable in your hotel.",
            rating: 5
        }
    ],
    "Tea Square": [
        {
            id: uuid(),
            name: "Surendra B",
            review: "We booked 30 rooms for a week for our team meetup. The rooms are spacious and clean, with homely tasty breakfast and fresh juice. Service is quick, and the terrace is useful for team activities. Mehul made the booking process easy and checked if we needed additional facilities. Highly recommended for corporate bookings.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Subrahmanya",
            review: " Compact Tea Square Hotel offers comfort, convenience, and hospitality. My stay was exceptional, and I look forward to returning.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Abhishek S",
            review: "This hotel deserves above 4 stars. The rooms are cozy and spacious. Liked it very much.",
            rating: 5
        }
    ],
    "Tea Pavilion": [
        {
            id: uuid(),
            name: "Jüßt- Üß",
            review: " Friendly environment. I stayed for 15 days and received good service. Morning complementary food includes coffee or omelet. Evening food is good quality home food at a valuable cost. The room was well-maintained and cleaned.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Gyanaranjan",
            review: "Good room, good food, staff excellent, all service is good.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Manju",
            review: "Best service. Suitable for family.",
            rating: 5
        }
    ]
};

export const Columns = () => {
    // Initialize currentSlide to show the first set of testimonials
    const initialSlide = 0;
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [fadeIn, setFadeIn] = useState(true);

    const getVisibleTestimonials = () => {
        const testimonialsArray = Object.values(testimonialsData).flat();
        const startIndex = currentSlide * 4;
        return testimonialsArray.slice(startIndex, startIndex + 4);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false); // Start with fade out to transition
            setTimeout(() => {
                const testimonialsArray =
                    Object.values(testimonialsData).flat();
                const totalSlides = Math.ceil(testimonialsArray.length / 4);
                setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
                setFadeIn(true); // After updating, fade in the new testimonials
            }, 500); // Adjust this timing based on your desired effect
        }, 10000); // Update every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <SectionContainer className="testimonials grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {getVisibleTestimonials().map((testimonial) => (
                <div
                    key={testimonial.id}
                    className="testimonial-item text-[#100d0d] text-left transition-opacity duration-500"
                    style={{ opacity: fadeIn ? 1 : 0 }}
                >
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {testimonial.name}
                    </h3>
                    <p>{testimonial.review}</p>
                    <div className="flex">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Icon
                                key={starIndex}
                                icon="solar:star-bold"
                                className="h-5 mr-1 text-secondary-500"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
