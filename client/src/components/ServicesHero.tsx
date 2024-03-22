// import jigsaw from "../assets/design/jigsaw.svg";

export default function ServicesHero() {
  return (
    <div
      id="hero"
      className="relative  bg-center h-[40vh] mt-10"
      //   style={{
      //     backgroundImage: `url(${jigsaw})`,
      //     backgroundAttachment: "fixed",
      //   }}
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
  );
}
