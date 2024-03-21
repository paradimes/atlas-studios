type OverviewCardProps = {
  title: string;
  description: string;
  timeline: string;
  img: string;
  reverse: boolean;
};
export default function OverviewCard({
  title,
  description,
  timeline,
  img,
  reverse,
}: OverviewCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8`}
    >
      <img className="w-full md:w-1/2 h-auto" src={img} alt="Milestone 1" />
      <div className="flex flex-col">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ">
          {title}
          <span className="ml-2 italic text-xl font-extralight">
            {timeline}
          </span>
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
      </div>
    </div>
  );
}
