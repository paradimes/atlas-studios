// import GalleryCard from "../components/GalleryCard";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { galleryArray } from "../resources";

export default function GalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
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
            // <GalleryCard
            //   key={index}
            //   title={item.title}
            //   description={item.description}
            //   photographer={item.photographer}
            //   img={item.img}
            // />
            <div
              key={index}
              className="relative group h-64 bg-gray-300 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => openLightbox(item.img)}
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

        {isLightboxOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4"
            onClick={closeLightbox}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
