import React, { useEffect, useRef } from "react";
import Image from "next/image";

const FeaturesSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const cards = [
        {
            title: "General Information",
            description: "We provide key insights about your website's overall SEO health.",
            image: "/images/Activity.png",
        },
        {
            title: "Performance Metrics",
            description: "We help identify the best ways to improve your business.",
            image: "/images/Heart.png",
        },
        {
            title: "Content Analysis",
            description: "We provide insights into your content's relevance and quality.",
            image: "/images/Work.png",
        },
        {
            title: "Metadata",
            description: "We analyze metadata to ensure it's optimized for search engines.",
            image: "/images/Activity.png",
        },
        {
            title: "Notes & Recommendations",
            description: "We provide detailed notes and actionable recommendations for improving your SEO.",
            image: "/images/Activity.png",
        },
    ];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;

        const scroll = () => {
            if (scrollContainer) {
                scrollAmount += 1.5; // Meningkatkan kecepatan scroll
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    // Reset scrollAmount jika mencapai setengah panjang elemen (karena kita mengulangi cards dua kali)
                    scrollAmount = 0;
                }
                scrollContainer.scrollTo({
                    left: scrollAmount,
                });
            }
            requestAnimationFrame(scroll); // Menggunakan requestAnimationFrame untuk animasi yang lebih smooth
        };

        requestAnimationFrame(scroll);

        // Mencegah interaksi pengguna dengan scroll
        const preventScroll = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
        };

        // Menambahkan event listener untuk mencegah interaksi pengguna
        scrollContainer.addEventListener("scroll", preventScroll, { passive: false });

        return () => {
            scrollContainer.removeEventListener("scroll", preventScroll); // Menghapus event listener saat komponen di-unmount
        };
    }, []);

    return (
        <section className="py-20">
            <h2 className="mb-10 text-4xl font-bold text-center text-black">
                We provide the Perfect Solution to your business growth
            </h2>
            <div
                ref={scrollContainerRef}
                className="flex space-x-6 overflow-x-hidden px-4 w-full scrollbar-hide"
            >
                {/* Menampilkan dua kali elemen card untuk menciptakan efek loop tak berujung */}
                {[...cards, ...cards].map((card, index) => (
                    <div
                        key={index}
                        className="card bg-yellow-100 p-6 min-w-[350px] max-w-[400px] flex-shrink-0"
                    >
                        <figure className="mt-12 mb-8">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={100}
                                height={100}
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-lg font-bold text-black">{card.title}</h3>
                            <p className="text-black">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturesSection;
