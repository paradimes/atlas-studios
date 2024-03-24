import { motion } from "framer-motion";
import { ReactElement } from "react";

type CardProps = {
  title: string;
  description: string;
  img?: string;
  icon?: ReactElement;
};

export default function Card({ title, description, img, icon }: CardProps) {
  return (
    <motion.div
      className={`flex flex-col gap-8 col-span-1 items-center justify-between w-full h-full`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="w-full flex flex-col">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-7">{description}</p>
      </div>
      {img ? (
        <div
          className="w-full bg-center bg-no-repeat h-36"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ) : (
        icon && icon
      )}
    </motion.div>
  );
}
