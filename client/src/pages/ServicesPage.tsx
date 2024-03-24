import NavBar from "../components/NavBar";
import ServicesCard from "../components/ServicesCard";
import ServicesHero from "@/components/ServicesHero";
import { motion } from "framer-motion";
import { serviceCardArray } from "@/resources";

export default function ServicesPage() {
  return (
    <motion.div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[170px] md:text-[208px]  leading-none font-bold">
          For You
        </h1>
        <NavBar />
        <div id="body" className="mt-10 w-full">
          {/* Hero Section */}
          {/* BG holder and relative positiong context for its children */}
          <ServicesHero />

          <div className="mt-10 flex justify-center ">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {serviceCardArray.map((card, index) => (
                <ServicesCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
