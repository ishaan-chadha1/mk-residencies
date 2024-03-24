import Image from "next/image";
export function GalleryHero() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Featured Collection</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Tea Pavillion"
                        className="w-full h-auto  transform transition-transform hover:scale-105"
                        height="400"
                        src="/ts terrace.jpg"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "cover"
                        }}
                        width="400"
                    />
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Tea Harbour"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="400"
                        src="/ts corporate room.jpg"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "cover"
                        }}
                        width="400"
                    />
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        alt="Tea square"
                        className="w-full h-auto transform transition-transform hover:scale-105"
                        height="400"
                        src="/ts terrace.jpg"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "cover"
                        }}
                        width="400"
                    />
                </div>
            </div>
        </section>
    );
}
