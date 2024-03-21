type CardProps = {
  title: string;
  description: string;
  img: string;
};

export default function Card({ title, description, img }: CardProps) {
  return (
    <div
      className={`flex flex-col col-span-1 items-start lg:items-center justify-between w-full h-full`}
    >
      <div className="w-full flex flex-col">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-7">{description}</p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat h-36 mt-8"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
}
