import Image from "next/image";

export function FeaturedCollection() {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
                Corporate Accommodation Near
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Strategic Location"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/ecoworld.jpg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        RMZ Eco world
                    </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Strategic Location"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/ecosoace.jpg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        RMZ Eco Space
                    </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Strategic Location"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/embassy.jpg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        Embassy Tech Park
                    </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Strategic Location"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/startech.jpg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        RMZ StarTech Park
                    </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Strategic Location"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/prestige.jpeg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        Prestige Ferns Galaxy
                    </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Proximity to Business Districts"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/salarpuria.jpg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        Salarpuria Softzone
                    </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Proximity to Business Districts"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="200"
                        src="/signature.jpg"
                        style={{
                            aspectRatio: "300/200",
                            objectFit: "cover"
                        }}
                        width="300"
                    />
                    <h3 className="text-lg font-medium mt-2 text-center mb-0">
                        Vaishnavi Signature
                    </h3>
                </div>
            </div>
        </div>
    );
}
