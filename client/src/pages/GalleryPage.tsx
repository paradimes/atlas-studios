// import GalleryCard from "../components/GalleryCard";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { galleryArray } from "../resources";

type selectedImageObjectType = {
  title: string;
  description: string;
  photographer: string;
  img: string;
};

export default function GalleryPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageObject, setSelectedImageObject] =
    useState<selectedImageObjectType | null>(null);

  const openLightbox = (item: selectedImageObjectType) => {
    // setSelectedImage(imageSrc);
    setSelectedImageObject(item);
    setIsLightboxOpen(true);
  };

  console.log(selectedImageObject);

  const closeLightbox = () => {
    setSelectedImageObject(null);
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
            <div
              key={index}
              className="relative group h-64 bg-gray-300 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => openLightbox(item)}
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

        {isLightboxOpen && selectedImageObject && (
          <div
            id="lightbox"
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col xl:flex-row justify-center items-center gap-5 p-10 "
            onClick={closeLightbox}
          >
            <img
              src={selectedImageObject.img}
              alt={selectedImageObject.title}
              className="max-w-full max-h-[70vh] mx-auto"
            />
            <div className="text-left mt-4">
              <h2 className="text-xl font-bold">{selectedImageObject.title}</h2>
              <p className="mt-2">{selectedImageObject.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
