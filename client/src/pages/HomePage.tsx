import reindeer from "../assets/images/Reindeer_Katie_Orlinsky_Saturation.png";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[170px] md:text-[208px] leading-none font-bold">
          Atlas/Studios
        </h1>
        <NavBar />
        <section
          id="heading-and-body"
          className="mt-[70px] flex flex-row gap-20"
        >
          <p className="w-[50vw] italic mt-auto">
            At Atlas, we believe in more than just capturing images; we believe
            in creating a portal to the wonders that thrive in the hidden
            corners of the Earth. Our team of world-renowned photographers
            venture into the uncharted to bring back not just photos, but
            stories of nature&apos;s untold beauty.
          </p>
          <div
            id="heading"
            className="flex flex-col items-end justify-end w-[50vw]"
          >
            <h3 className="w-fit font-medium italic text-5xl text-end">
              Unveiling
            </h3>
            <h3 className="w-fit font-medium italic text-5xl text-end">
              The World's Hidden Wonders
            </h3>
          </div>
        </section>
        <img
          src={reindeer}
          alt="Inuvialuit herders move Canada's last free-range herd of reindeer, numbering around 4,000, to the animals' calving grounds. The Inuvialuit Regional Corporation took full ownership of the herd in 2021 with a goal of growing a sustainable food source. PHOTOGRAPH BY KATIE ORLINSKY."
          className="mt-[30px] object-cover object-bottom w-full  h-[700px]"
        />
      </div>
    </div>
  );
}
