import NavBar from "../components/NavBar";
import everest from "../assets/aboutImages/everest.png";
import foundingTeam from "../assets/aboutImages/foundingTeam.png";
import future from "../assets/aboutImages/future.jpeg";
import tokyo from "../assets/aboutImages/tokyo.jpeg";
import topography from "../assets/topography.svg";

export default function AboutPage() {
  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[208px] leading-none font-bold">Our Story</h1>
        <NavBar />
        {/* Hero Section */}
        {/* BG holder and relative positiong context for its children */}
        <div
          id="hero"
          className="relative bg-cover bg-center h-[50vh] mt-10"
          style={{ backgroundImage: `url(${topography})` }}
        >
          {/* Overlay div, darkens the bg image and serves as the container to center the text */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <h1 className="text-white text-4xl md:text-6xl font-bold px-4 text-center">
              Capturing The World Through Our Lenses - Join Us on Our Journey
            </h1>
          </div>
        </div>
        {/* Hero Section */}

        {/* Our Story Section */}
        <div className="py-16 text-white">
          <h2 className="text-3xl font-bold text-left mb-8 w-fit">
            An Overview
          </h2>
          <div className="space-y-10">
            {/* Story Block 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
                className="w-full md:w-1/2 h-auto"
                src={foundingTeam}
                alt="Milestone 1"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">
                  Inception and Vision
                  <span className="ml-2 italic text-base font-extralight">
                    Year 1
                  </span>
                </h3>
                <p className="mt-1">
                  Our journey began in 2015, rooted in a shared passion for
                  storytelling through the lens. In the humble confines of a
                  small studio, our founders envisioned a platform where every
                  photograph tells a deeper story - not just of the subject it
                  captures but of the moment, the emotion, and the unspoken
                  tales intertwined with each frame.
                </p>
              </div>
            </div>
            {/* Story Block 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <img
                className="w-full md:w-1/2 h-auto"
                src={everest}
                alt="Milestone 2"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">
                  First Major Project and Recognition
                  <span className="ml-2 italic text-base font-extralight">
                    Year 2-3
                  </span>
                </h3>
                <p className="mt-1">
                  By 2017, our dedication bore fruit with Nimbus, a series that
                  delved into the heart of Mount Everest, unearthing stories
                  that lay hidden beneath the surface. This project not only
                  challenged our limits but also earned us our first Photograph
                  of the Year award, setting the stage for the path ahead.
                </p>
              </div>
            </div>
            {/* Story Block 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
                className="w-full md:w-1/2 h-auto"
                src={tokyo}
                alt="Milestone 3"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">
                  Expansion and Diversification
                  <span className="ml-2 italic text-base font-extralight">
                    Year 4-5
                  </span>
                </h3>
                <p className="mt-1">
                  The following years were a time of expansion and exploration.
                  From the silent whispers of the Arctic tundra to the bustling
                  streets of Tokyo, we broadened our horizons, diversifying our
                  portfolio. Our team grew, welcoming new talents who brought
                  fresh perspectives and ideas, enriching our storytelling
                  fabric.
                </p>
              </div>
            </div>
            {/* Story Block 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <img
                className="w-full md:w-1/2 h-auto"
                src={future}
                alt="Milestone 4"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">
                  Impact and Future
                  <span className="ml-2 italic text-base font-extralight">
                    Present
                  </span>
                </h3>
                <p className="mt-1">
                  Today, we stand at the precipice of a new chapter. With every
                  click, we strive not just to capture, but to make an impact,
                  to tell stories that matter. Our mission remains unwavering -
                  to unveil the untold, to document the fleeting, and to
                  preserve the moments that, in turn, preserve us. The journey
                  ahead is long, but our lenses are ready, and our spirits
                  undeterred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
