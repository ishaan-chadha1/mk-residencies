import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { SearchBar } from "@components/components/component/search-bar";

export function LandingHero() {
    const backgroundImageUrl = "/teabg.jpeg?height=485&width=940";
    return (
        <section
            style={{
                backgroundImageUrl: "/main.jpg",
                backgroundSize: "contain",
                backgroundPosition: "center",
                padding: "64px 32px" // This converts py-16 px-8 to standard CSS
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
