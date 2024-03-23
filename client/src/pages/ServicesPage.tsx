import NavBar from "../components/NavBar";
import { FaCamera, FaImage, FaVideo } from "react-icons/fa";
import ServicesCard from "../components/ServicesCard";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import ServicesHero from "@/components/ServicesHero";
import { motion } from "framer-motion";

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
              <ServicesCard
                title="Product Photography"
                description="Showcase your products in the best light with our professional product photography services. From simple white background shots to creative lifestyle images, we'll help you create visuals that sell."
                icon={<FaCamera />}
              />
              {/* Service 2 */}
              <ServicesCard
                title="Lifestyle Photography"
                description="Bring your brand to life with authentic, engaging lifestyle photography. We'll capture images that showcase your products or services in real-world settings, connecting with your target audience on an emotional level."
                icon={<FaImage />}
              />
              {/* Service 3 */}
              <ServicesCard
                title="Corporate Photography"
                description="From headshots to event coverage, our corporate photography services help you build a strong, professional brand image. We'll work with you to capture the essence of your company and its people."
                icon={<FaVideo />}
              />
              {/* Service 4 */}
              <ServicesCard
                title="Custom Projects"
                description="Have a unique photography need? We're here to help. Our team is experienced in tackling custom projects of all sizes and scopes. Contact us to discuss your specific requirements, and we'll develop a tailored solution to meet your goals."
                icon={<MdOutlineDashboardCustomize />}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
