import { motion } from "framer-motion";
import { ReactElement } from "react";

type ServicesCardProps = {
  title: string;
  description: string;
  icon: ReactElement;
  delay?: number;
};

export default function ServicesCard({
  title,
  description,
  icon,
  delay,
}: ServicesCardProps) {
  return (
    <motion.div
      className={`flex flex-row col-span-1 items-start justify-between w-full h-full py-3 px-6 border-l-2 xl:first:border-l-0 border-neutral-800 `}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: delay || 0 }}
      viewport={{ once: true }}
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
    </motion.div>
  );
}
