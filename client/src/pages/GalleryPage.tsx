// import GalleryCard from "../components/GalleryCard";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { galleryArray } from "../resources";

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

  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[208px] leading-none font-bold">Our Work</h1>
        <NavBar />
        <div
          id="masonry-gallery"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {galleryArray.map((item, index) => (
            <div
              id="GalleryCard"
              key={index}
              className="relative group h-64 bg-gray-300 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex flex-col justify-end overflow-hidden">
                <span
                  className="text-white text-lg p-4 hidden group-hover:block break-words"
                  id="title"
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {isLightboxOpen && currentIndex !== null && (
          <div
            id="lightbox"
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col xl:flex-row justify-center items-center gap-5 p-10"
            onClick={closeLightbox}
          >
            <img
              src={galleryArray[currentIndex].img}
              alt={galleryArray[currentIndex].title}
              className="max-w-full max-h-[70vh] mx-auto"
            />
            <div className="text-left flex flex-col">
              <h2 className="text-xl font-bold">
                {galleryArray[currentIndex].title}
              </h2>
              <p className="mt-2">{galleryArray[currentIndex].description}</p>
              <div
                id="next-previous-buttons"
                className="flex items-center justify-center gap-5 mt-5"
              >
                <button
                  disabled={currentIndex <= 0}
                  className="px-4 py-2 rounded-full border-2 border-white hover:border-orange-500 hover:text-orange-500 disabled:border-stone-700 disabled:text-stone-700"
                  onClick={handlePreviousButton}
                >
                  Previous
                </button>
                <button
                  disabled={currentIndex >= galleryArray.length - 1}
                  className="px-4 py-2 rounded-full border-2 border-white hover:border-orange-500 hover:text-orange-500 disabled:border-stone-700 disabled:text-stone-700"
                  onClick={handleNextButton}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
