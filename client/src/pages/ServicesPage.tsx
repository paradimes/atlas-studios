import NavBar from "../components/NavBar";
import { FaCamera, FaImage, FaVideo } from "react-icons/fa";
import ServicesCard from "../components/ServicesCard";
import jigsaw from "../assets/jigsaw.svg";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export default function ServicesPage() {
  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[170px] md:text-[208px]  leading-none font-bold">
          For You
        </h1>
        <NavBar />
        <div id="body" className="mt-10 w-full">
          {/* Hero Section */}
          {/* BG holder and relative positiong context for its children */}
          <div
            id="hero"
            className="relative  bg-center h-[40vh] mt-10"
            style={{
              backgroundImage: `url(${jigsaw})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="mt-6 text-4xl md:text-5xl  text-center max-w-[40vw]  shadow-inner shadow-neutral-700 px-8 py-4 bg-black rounded-3xl font-medium">
                Take the{" "}
                <span className="italic font-semibold bg-gradient-to-r from-orange-400 to-red-600 hover:from-[#7525ff] hover:to-[#ff00d0] inline-block text-transparent bg-clip-text">
                  first
                </span>{" "}
                step
              </h3>
            </div>
          </div>

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
    </div>
  );
}
