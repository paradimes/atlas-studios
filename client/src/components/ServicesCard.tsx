import { ReactElement } from "react";

type ServicesCardProps = {
  title: string;
  description: string;
  icon: ReactElement;
};

export default function ServicesCard({
  title,
  description,
  icon,
}: ServicesCardProps) {
  return (
    <div
      className={`flex flex-row col-span-1 items-start justify-between w-full h-full max-w-[50vh] py-3 px-6 border-l-2 xl:first:border-l-0 border-neutral-800 `}
    >
      <div className="h-full flex items-center justify-center mr-6 text-4xl text-white">
        {icon}
      </div>
      <div className="w-full flex flex-col">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-7">{description}</p>
      </div>
    </div>
  );
}
