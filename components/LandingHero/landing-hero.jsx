import { SearchBar } from "@components/components/component/search-bar";

export function LandingHero() {
    const backgroundImageUrl = "/03. 5 COPIES.jpg?height=485&width=940";
    return (
        <div>
            {" "}
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
                    position: "relative" // Make sure the section is positioned relatively for absolute children
                }}
                className="bg-cover bg-center py-16 px-8"
            >
                {/* Text overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "5%",
                        color: "white",
                        padding: "10px",
                        maxWidth: "80%",
                        textAlign: "left",
                        textShadow: "2px 2px 8px rgba(0,0,0,0.8)" // Adds shadow to text
                    }}
                >
                    <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                        TeaCorpHotels
                    </h1>
                    <p style={{ fontSize: "1.5rem" }}>Home Away From Home</p>
                </div>
            </section>
            {/* SearchBar container */}
            <div className="w-full flex justify-center mt-4">
                {" "}
                {/* Additional container for search bar */}
                <SearchBar />
            </div>
        </div>
    );
}
