import { useState, useEffect } from "react";
import styles from "./landing-hero.module.css"; // Import the CSS module

export function LandingHero() {
    // Array of images for the carousel
    const backgroundImages = [
        "/background_image3.jpg?height=485&width=940", // Replace with actual image URLs
        "/background_image4.jpg?height=485&width=940",
        "/background_image2.jpg?height=485&width=940"
    ];

    // State to track the current background image index and fade state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeState, setFadeState] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState(false); // Start fade out
            setTimeout(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % backgroundImages.length
                );
                setFadeState(true); // Start fade in
            }, 500); // Sync with the CSS transition duration
        }, 10000); // Change image every 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <div>
            <section
                className={`${styles.landingHero} bg-cover bg-center py-16 px-8`}
                style={{
                    height: "400px",
                    position: "relative",
                    overflow: "hidden" // Hide overflow for smooth fade effect
                }}
            >
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity:
                                currentImageIndex === index && fadeState
                                    ? 1
                                    : 0,
                            transition: "opacity 0.5s ease-in-out"
                        }}
                    />
                ))}

                {/* Text overlay */}
                <div
                    className={styles.landingHeroText}
                    style={{ color: "black" }}
                >
                    <h1 className={styles.landingHeroTitle}>MK Residencies</h1>
                    <p className={styles.landingHeroSubtitle}>
                        Corporate Hotels and Suites
                    </p>
                </div>
            </section>
            {/* SearchBar container */}
            <div className="w-full flex justify-center mt-10">
                {/* Additional container for search bar */}
                {/* Uncomment below as needed */}
                {/* <SearchBar /> */}
                {/* <BookingButton /> */}
            </div>
        </div>
    );
}
