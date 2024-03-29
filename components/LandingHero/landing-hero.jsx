import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

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
                        <input
                            className="w-full px-4 py-2 pl-10 bg-white/70 text-gray-900 rounded-md"
                            placeholder="Where are you going?"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 text-white bg-orange-500 rounded-r-md hover:bg-orange-600">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
