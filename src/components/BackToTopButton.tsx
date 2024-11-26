// src/components/BackToTopButton.tsx
import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Mengatur visibilitas tombol berdasarkan posisi scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 rounded-full bg-yellow-500 text-black shadow-lg hover:bg-yellow-600 transition duration-300"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
