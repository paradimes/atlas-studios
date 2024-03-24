import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { galleryArray } from "../resources";
import { AnimatePresence, motion } from "framer-motion";

export default function GalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setIsLightboxOpen(false);
  };

  const handleNextButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentIndex !== null && currentIndex < galleryArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePreviousButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (currentIndex !== null && currentIndex < galleryArray.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentIndex !== null && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        setIsLightboxOpen(false);
        setCurrentIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isLightboxOpen]);

  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <motion.h1
          className="text-[170px] md:text-[208px] leading-none font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Work
        </motion.h1>
        <NavBar />
        <div
          id="masonry-gallery"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {galleryArray.map((item, index) => (
            <motion.div
              id="GalleryCard"
              key={index}
              className="relative group h-64 bg-gray-300 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
              whileHover={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex flex-col justify-end overflow-hidden">
                <span
                  className="text-white text-lg p-4 hidden group-hover:block break-words"
                  id="title"
                >
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence onExitComplete={() => setCurrentIndex(null)}>
          {isLightboxOpen && currentIndex !== null && (
            <motion.div
              id="lightbox"
              className="fixed inset-0 bg-black bg-opacity-80 flex flex-col xl:flex-row justify-center items-center gap-5 p-10"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={galleryArray[currentIndex].img}
                  alt={galleryArray[currentIndex].title}
                  className="max-w-full max-h-[70vh] mx-auto"
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -250 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-left flex flex-col">
                  <motion.h2
                    className="text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {galleryArray[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    className="mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {galleryArray[currentIndex].description}
                  </motion.p>
                  <motion.p
                    className="mt-2 italic font-extralight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    {galleryArray[currentIndex].photographer}
                  </motion.p>

                  <div
                    id="navigation-buttons"
                    className="flex items-center justify-center gap-5 mt-5"
                  >
                    <motion.button
                      disabled={currentIndex <= 0}
                      className="px-4 py-2 rounded-full border-2 border-white hover:border-orange-500 hover:text-orange-500 disabled:border-stone-700 disabled:text-stone-700"
                      onClick={handlePreviousButton}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      Previous
                    </motion.button>
                    <motion.button
                      disabled={currentIndex >= galleryArray.length - 1}
                      className="px-4 py-2 rounded-full border-2 border-white hover:border-orange-500 hover:text-orange-500 disabled:border-stone-700 disabled:text-stone-700"
                      onClick={handleNextButton}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      Next
                    </motion.button>
                  </div>
                </div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
