import { useState, useEffect } from "react";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

// Assuming each of these entries represents a property with its testimonials
const testimonialsData = {
    "Tea County": [
        {
            id: uuid(),
            name: "Bhaskar Rabha",
            review: "I had a pleasant stay at a hotel in Dibrugarh city, recommended by Mr. Dekhial. Our company booked an executive suite with top-notch amenities at reasonable tariffs. The complimentary breakfast was diverse, and the staff provided wonderful hospitality. Highly recommended for its quality ambiance and affordability.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Priyakshi Bordoloi",
            review: "I stayed for two days and loved it. The breakfast menu, especially the sauteed vegetables, was really good. The staff is professional.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Rumi 24fit",
            review: "This place is always my favorite! The atmosphere is mind-blowing, and the staff is outstanding. They prioritize customer happiness, and the food is pretty good. Totally worth the price. We really enjoyed a lot. Thank you!",
            rating: 5
        }
    ],
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
    // Initialize currentSlide to show the first testimonial of each property
    const initialSlide = Object.keys(testimonialsData).reduce(
        (acc, property) => {
            acc[property] = 0;
            return acc;
        },
        {}
    );

    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false); // Start with fade out to transition
            setTimeout(() => {
                const newSlide = {};
                Object.keys(testimonialsData).forEach((property) => {
                    newSlide[property] =
                        ((currentSlide[property] || 0) + 1) %
                        testimonialsData[property].length;
                });
                setCurrentSlide(newSlide);
                setFadeIn(true); // After updating, fade in the new testimonial
            }, 500); // Adjust this timing based on your desired effect
        }, 10000); // Update every 10 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <SectionContainer className="testimonials grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {Object.keys(testimonialsData).map((property) =>
                testimonialsData[property].map(
                    (testimonial, index) =>
                        currentSlide[property] === index && (
                            <div
                                key={testimonial.id}
                                className="testimonial-item text-[#737373] text-left transition-opacity duration-500"
                                style={{ opacity: fadeIn ? 1 : 0 }}
                            >
                                <h3 className="text-xl mb-2 font-medium text-black">
                                    {testimonial.name}
                                </h3>
                                <p>{testimonial.review}</p>
                                <div className="flex">
                                    {[...Array(testimonial.rating)].map(
                                        (_, starIndex) => (
                                            <Icon
                                                key={starIndex}
                                                icon="solar:star-bold"
                                                className="h-5 mr-1 text-secondary-500"
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )
                )
            )}
        </SectionContainer>
    );
};
