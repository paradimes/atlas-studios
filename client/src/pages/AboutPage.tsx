import NavBar from "../components/NavBar";
import everest from "../assets/aboutImages/everest.png";
import foundingTeam from "../assets/aboutImages/foundingTeam.png";
import future from "../assets/aboutImages/future.jpeg";
import tokyo from "../assets/aboutImages/tokyo.jpeg";
import topography from "../assets/design/topography.svg";
import jigsaw from "../assets/design/jigsaw.svg";
import OverviewCard from "../components/AboutPageComponents/OverviewCard";
import Card from "../components/AboutPageComponents/Card";
import TeamMemberCard from "../components/AboutPageComponents/TeamMemberCard";
import carol from "../assets/aboutImages/carol.jpeg";
import tony from "../assets/aboutImages/tony.jpeg";
import george from "../assets/aboutImages/george.jpeg";
import { Link } from "react-router-dom";
// import arrow from "../assets/icons/arrow.svg";

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
          style={{
            backgroundImage: `url(${topography})`,
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay div, darkens the bg image and serves as the container to center the text */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <blockquote className="mt-6 border-l-2 italic text-white text-4xl md:text-5xl font-light px-4 text-center w-[40vw]">
              "Seeing the world through a lens, I found my vision."
            </blockquote>
          </div>
        </div>
        {/* Our Story Section */}
        <div className="mt-10 text-white">
          <h3 className="w-fit font-medium text-5xl mt-10 scroll-m-20 pb-2 tracking-tight transition-colors first:mt-0">
            An Overview
          </h3>
          <div className="space-y-10 mt-6">
            {/* Story Block 1 */}
            <OverviewCard
              title="Inception and Vision"
              description="Our journey began in 2015, rooted in a shared passion for
                  storytelling through the lens. In the humble confines of a
                  small studio, our founders envisioned a platform where every
                  photograph tells a deeper story - not just of the subject it
                  captures but of the moment, the emotion, and the unspoken
                  tales intertwined with each frame."
              timeline="Year 1"
              img={foundingTeam}
              reverse={false}
            />
            {/* Story Block 2 */}
            <OverviewCard
              title="First Major Project and Recognition"
              description="By 2017, our dedication bore fruit with Nimbus, a series that
                  delved into the heart of Mount Everest, unearthing stories
                  that lay hidden beneath the surface. This project not only
                  challenged our limits but also earned us our first Photograph
                  of the Year award, setting the stage for the path ahead."
              timeline="Year 2-3"
              img={everest}
              reverse={true}
            />
            {/* Story Block 3 */}
            <OverviewCard
              title="Expansion and Diversification"
              description="The following years were a time of expansion and exploration.
                  From the silent whispers of the Arctic tundra to the bustling
                  streets of Tokyo, we broadened our horizons, diversifying our
                  portfolio. Our team grew, welcoming new talents who brought
                  fresh perspectives and ideas, enriching our storytelling
                  fabric."
              timeline="Year 4-5"
              img={tokyo}
              reverse={false}
            />
            {/* Story Block 4 */}
            <OverviewCard
              title="Impact and Future"
              description=" Today, we stand at the precipice of a new chapter. With every
                  click, we strive not just to capture, but to make an impact,
                  to tell stories that matter. Our mission remains unwavering -
                  to unveil the untold, to document the fleeting, and to
                  preserve the moments that, in turn, preserve us. The journey
                  ahead is long, but our lenses are ready, and our spirits
                  undeterred."
              timeline="Present"
              img={future}
              reverse={true}
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div id="section-container" className="mt-10 ">
          <h3 className="w-fit font-medium text-5xl mt-10 scroll-m-20 pb-2 tracking-tight transition-colors first:mt-0">
            Mission & Vision
          </h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            <Card
              title="Our Mission"
              description="At Atlas Studios, our mission is to capture and share the
                  untold stories of the world through the power of photography.
                  We strive to create a platform where every image speaks
                  volumes, connecting people across borders and cultures."
              img={jigsaw}
            />
            <Card
              title="Our Vision"
              description="Our vision is to become the leading global photography agency,
                  recognized for our unparalleled storytelling and commitment to
                  making a positive impact. We aim to inspire change, preserve
                  moments, and foster understanding through the lens of our
                  cameras."
              img={jigsaw}
            />
          </div>
        </div>

        {/* Values and Culture */}
        <div className="mt-10">
          <h3 className="w-fit font-medium text-5xl mt-10 scroll-m-20 pb-2 tracking-tight transition-colors first:mt-0">
            Our Values
          </h3>
          <div
            className={`mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-cover p-4`}
            style={{
              backgroundImage: `url(${topography})`,
              backgroundAttachment: "fixed",
            }}
          >
            <Card
              title="Authenticity"
              description="We believe in the power of genuine storytelling."
              img={jigsaw}
            />
            <Card
              title="Creativity"
              description="We embrace innovation and push the boundaries of visual narratives."
              img={jigsaw}
            />
            <Card
              title="Collaboration"
              description=" We foster a culture of teamwork and value diverse perspectives."
              img={jigsaw}
            />
            <Card
              title="Impact"
              description="We strive to make a positive difference through our work."
              img={jigsaw}
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-10">
          <h3 className="w-fit font-medium text-5xl mt-10 scroll-m-20 pb-2 tracking-tight transition-colors first:mt-0">
            Our Team
          </h3>
          <div className="mt-10 flex justify-center">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {/* Team member cards */}
              <TeamMemberCard
                name="Jacob Smith"
                role="Creative Director"
                img={tony}
              />{" "}
              <TeamMemberCard
                name="Carol Jones"
                role="Photography Manager"
                img={carol}
              />
              <TeamMemberCard
                name="George Robbins"
                role="Marketing Specialist"
                img={george}
              />
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-20 mb-5 text-center flex flex-col items-center justify-center">
          <p className="text-4xl mb-10">
            Are you ready to embark on a{" "}
            <span className="italic font-semibold bg-gradient-to-r from-orange-400 to-red-600 hover:from-[#7525ff] hover:to-[#ff00d0] inline-block text-transparent bg-clip-text">
              visual journey
            </span>{" "}
            with us?
          </p>
          <Link
            to={"/services"}
            className="text-xl transition duration-300 border-2 border-white bg-black hover:bg-white hover:text-black flex flex-row items-center justify-center gap-4 px-6 py-4 rounded-full"
          >
            Explore Our Services
            <div className="svg-icon">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-black hover:text-orange-500"
              >
                <rect
                  width="20"
                  height="20"
                  rx="10"
                  transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 20.5)"
                  fill="currentColor"
                />
                <path
                  d="M13.5 7.5C13.5 7.22386 13.2761 7 13 7L8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8H12.5V12C12.5 12.2761 12.7239 12.5 13 12.5C13.2761 12.5 13.5 12.2761 13.5 12L13.5 7.5ZM7.35355 13.8536L13.3536 7.85355L12.6464 7.14645L6.64645 13.1464L7.35355 13.8536Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
