/* eslint-disable @typescript-eslint/no-unused-vars */
type GalleryCardProps = {
  title: string;
  description: string;
  photographer: string;
  img: string;
};

export default function GalleryCard({
  title,
  description,
  photographer,
  img,
}: GalleryCardProps) {
  return (
    <div
      className="relative group h-64 bg-gray-300 bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex flex-col justify-end overflow-hidden">
        <span
          className="text-white text-lg p-4 hidden group-hover:block break-words"
          id="title"
        >
          {title}
        </span>
      </div>
    </div>
  );
}
