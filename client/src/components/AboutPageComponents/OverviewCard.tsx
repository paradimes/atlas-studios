import { motion } from "framer-motion";

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
      <motion.img
        className="w-full md:w-1/2 h-auto"
        src={img}
        alt="Milestone 1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <div className="flex flex-col">
        <motion.h3
          className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {title}
          <motion.span
            className="ml-2 italic text-xl font-extralight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {timeline}
          </motion.span>
        </motion.h3>
        <motion.p
          className="leading-7 [&:not(:first-child)]:mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
