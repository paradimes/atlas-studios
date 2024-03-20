import NavBar from "../components/NavBar";
import everest from "../assets/aboutImages/everest.png";
import foundingTeam from "../assets/aboutImages/foundingTeam.png";
import future from "../assets/aboutImages/future.jpeg";
import tokyo from "../assets/aboutImages/tokyo.jpeg";
import topography from "../assets/design/topography.svg";
import jigsaw from "../assets/design/jigsaw.svg";

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
            <h1 className="text-white text-4xl md:text-5xl font-light px-4 text-center italic w-[40vw]">
              "Seeing the world through a lens, I found my vision."
            </h1>
          </div>
        </div>
        {/* Our Story Section */}
        <div className="mt-10 text-white">
          <h2 className="text-5xl font-bold text-left mb-8 w-fit">
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

        {/* Mission and Vision */}
        <div id="section-container" className="mt-10 ">
          <h2 className="text-5xl font-bold text-left w-fit">
            Mission & Vision
          </h2>
          <div className="flex flex-col lg:flex-row mt-10 gap-5 ">
            <div
              id="mission-container"
              className="flex flex-col items-start lg:items-center justify-center gap-10 "
            >
              <div className="w-full lg:w-3/4">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p>
                  At Atlas Studios, our mission is to capture and share the
                  untold stories of the world through the power of photography.
                  We strive to create a platform where every image speaks
                  volumes, connecting people across borders and cultures.
                </p>
              </div>
              <div
                className="w-1/2 bg-center bg-repeat h-36 mx-auto "
                style={{ backgroundImage: `url(${jigsaw})` }}
              ></div>
            </div>
            <div
              id="vision-container"
              className="flex flex-col items-start lg:items-center justify-center gap-10  "
            >
              <div className="w-full lg:w-3/4">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p>
                  Our vision is to become the leading global photography agency,
                  recognized for our unparalleled storytelling and commitment to
                  making a positive impact. We aim to inspire change, preserve
                  moments, and foster understanding through the lens of our
                  cameras.
                </p>
              </div>
              <div
                className="w-1/2 bg-center bg-repeat h-36 mx-auto "
                style={{ backgroundImage: `url(${jigsaw})` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <img
                src={foundingTeam}
                alt="Team Member 1"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <img
                src={foundingTeam}
                alt="Team Member 1"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <img
                src={foundingTeam}
                alt="Team Member 1"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            {/* Add more team member cards */}
          </div>
        </div>
        {/* Values and Culture */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Authenticity: We believe in the power of genuine storytelling.
            </li>
            <li>
              Creativity: We embrace innovation and push the boundaries of
              visual narratives.
            </li>
            <li>
              Collaboration: We foster a culture of teamwork and value diverse
              perspectives.
            </li>
            <li>
              Impact: We strive to make a positive difference through our work.
            </li>
          </ul>
        </div>
        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <p className="text-xl mb-4">
            Ready to embark on a visual journey with us?
          </p>
          <a
            href="/services"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
