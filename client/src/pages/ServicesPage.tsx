import NavBar from "../components/NavBar";
import { FaCamera, FaImage, FaVideo, FaObjectGroup } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[208px] leading-none font-bold">For You</h1>
        <NavBar />
        <div className="container mt-10 mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Services</h1>
          <p className="text-xl mb-12">
            At [Your Agency Name], we offer a wide range of commercial
            photography services to help businesses showcase their products,
            services, and brand. Our experienced photographers are dedicated to
            delivering high-quality, impactful images that tell your story and
            engage your audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800 p-8 rounded-lg flex items-center">
              <div className="mr-6 text-4xl text-blue-500">
                <FaCamera />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Product Photography</h2>
                <p>
                  Showcase your products in the best light with our professional
                  product photography services. From simple white background
                  shots to creative lifestyle images, we'll help you create
                  visuals that sell.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-800 p-8 rounded-lg flex items-center">
              <div className="mr-6 text-4xl text-green-500">
                <FaImage />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Lifestyle Photography
                </h2>
                <p>
                  Bring your brand to life with authentic, engaging lifestyle
                  photography. We'll capture images that showcase your products
                  or services in real-world settings, connecting with your
                  target audience on an emotional level.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-800 p-8 rounded-lg flex items-center">
              <div className="mr-6 text-4xl text-yellow-500">
                <FaVideo />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Corporate Photography
                </h2>
                <p>
                  From headshots to event coverage, our corporate photography
                  services help you build a strong, professional brand image.
                  We'll work with you to capture the essence of your company and
                  its people.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-800 p-8 rounded-lg flex items-center">
              <div className="mr-6 text-4xl text-red-500">
                <FaObjectGroup />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Custom Projects</h2>
                <p>
                  Have a unique photography need? We're here to help. Our team
                  is experienced in tackling custom projects of all sizes and
                  scopes. Contact us to discuss your specific requirements, and
                  we'll develop a tailored solution to meet your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
