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
            review: "I recently had the pleasure of staying at a hotel in the heart of Dibrugarh city, recommended by one of our employees, Mr. Dekhial. Our company booked an executive suite, and I was pleasantly surprised by the top-notch room amenities typically found in 5-star accommodations. The tariffs were reasonable, and the service was very good. The complimentary breakfast offered a variety of options to suit most tastes. I highly recommend this hotel for its quality ambiance, affordability, and the wonderful hospitality provided by the staff.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Priyakshi Bordoloi",
            review: "I stayed for two days and I loved it. Their breakfast menu is really good. I loved the sauteed vegetables so much.. Maybe it is on their winter's menu (don't know..). Also, the staff is professional.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Rumi 24fit",
            review: "This place is always my favorite and is great! Atmosphere is mind blowing and fantastic, and the staff members are also really outstanding. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty lovely good, some and for their prices it’s 100% worth it. Thank you so much, we really enjoyed a lot.",
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
            review: "For our team meetup, we booked 30 rooms for a week here. Rooms are spacious and clean. Breakfast is homely tasty, they make fresh then and there. They serve fresh juice along with breakfast. Service is very quick. Everyone in the team felt this is better than any 4-star hotel in the surroundings. Space on the terrace is useful for small team activities too. I have coordinated with Mehul for the booking and he made the entire booking to billing so easy. He proactively checked if we need any additional facilities or service. I would definitely recommend this hotel for corporate bookings.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Subrahmanya",
            review: "Compact Tea Square Hotel offers a perfect blend of comfort, convenience, and hospitality. This hidden gem is sure to exceed your expectations. My stay was nothing short of exceptional, and I look forward to returning in the future.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Abhishek S",
            review: "Not sure why this hotel has low ratings. Definitely an above 4 star rating hotel. Rooms are cozy and spacious. Liked it very much.",
            rating: 5
        }
    ],
    "Tea Pavilion": [
        {
            id: uuid(),
            name: "Jüßt- Üß",
            review: "Friendly environment. I stayed there for 15 days. Provide good service. Morning complementary food is there, we can order coffee or omelet also. In the evening I ask for food, they provide a good quality home food for valuable cost. They maintained the room well and cleaned.",
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
