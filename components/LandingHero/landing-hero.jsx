import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { SearchBar } from "@components/components/component/search-bar";

export function LandingHero() {
    return (
        <section className="bg-[url('/1.jpg?height=485&width=940')] bg-cover bg-center py-16 px-8">
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
