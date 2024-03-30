import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { SearchBar } from "@components/components/component/search-bar";

export function LandingHero() {
    const backgroundImageUrl = "/placeholder.svg?height=485&width=940";
    return (
        <section
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "64px 32px" // This converts py-16 px-8 to standard CSS
            }}
            className="bg-cover bg-center py-16 px-8"
        >
            {" "}
            <div className="max-w-7xl mx-auto">
                <div className="text-black">
                    <h1 className="text-5xl font-bold mb-4">
                        Welcome to TeaCorp Hotels
                    </h1>
                    <p className="mb-6 max-w-xl">Home Away From Home</p>

                    <div className="relative w-full">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </section>
    );
}
