import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { SearchBar } from "@components/components/component/search-bar";

export function LandingHero() {
    return (
        <section
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,
                backgroundSize: "cover", // Changed to 'cover' to ensure the image fully covers the area
                backgroundPosition: "center",
                display: "flex", // Using flex to center the search bar
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                height: "400px" // Set a fixed height to match your desired look
            }}
            className="bg-cover bg-center py-16 px-8"
        >
            {" "}
            <div className="max-w-7xl mx-auto">
                <div className="text-black">
                    <div className="relative w-full">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </section>
    );
}
