import { SearchBar } from "@components/components/component/search-bar";
import styles from "./landing-hero.module.css"; // Import the CSS module

export function LandingHero() {
    const backgroundImageUrl = "/03. 5 COPIES.jpg?height=485&width=940";
    return (
        <div>
            {/* Wrapper div to contain all elements */}
            <section
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column", // Adjust the flex direction to column to stack items vertically
                    alignItems: "center", // Center vertically
                    height: "400px", // Set a fixed height to match your desired look
                    position: "relative", // Make sure the section is positioned relatively for absolute children
                    padding: "0 20px" // Add padding for better mobile view
                }}
                className={`${styles.landingHero} bg-cover bg-center py-16 px-8`}
            >
                {/* Text overlay */}
                <div className={styles.landingHeroText}>
                    <h1 className={styles.landingHeroTitle}>TeaCorpHotels</h1>
                    <p className={styles.landingHeroSubtitle}>
                        Chain of Corporate hotels
                    </p>
                </div>
            </section>
            {/* SearchBar container */}
            <div className="w-full flex justify-center mt-4">
                {/* Additional container for search bar */}
                <SearchBar />
            </div>
        </div>
    );
}
