import { motion } from "framer-motion";
import reindeer from "../assets/images/Reindeer_Katie_Orlinsky_Saturation.png";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <motion.h1
          className="text-[170px] md:text-[208px] leading-none font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Atlas/Studios
        </motion.h1>
        <NavBar />
        <section
          id="heading-and-body"
          className="mt-[70px] flex flex-col min-[400px]:flex-row gap-10 min-[400px]:gap-20"
        >
          <motion.p
            className="w-full min-[400px]:w-[50vw] italic mt-auto"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            At Atlas, we believe in more than just capturing images; we believe
            in creating a portal to the wonders that thrive in the hidden
            corners of the Earth. Our team of world-renowned photographers
            venture into the uncharted to bring back not just photos, but
            stories of nature&apos;s untold beauty.
          </motion.p>
          <motion.div
            id="heading"
            className="flex flex-col items-end justify-end w-full min-[400px]:w-[50vw]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="w-fit font-medium italic text-5xl text-end">
              Unveiling
            </h3>
            <h3 className="w-fit font-medium italic text-5xl text-end">
              The World's Hidden Wonders
            </h3>
          </motion.div>
        </section>
        <motion.img
          src={reindeer}
          alt="Inuvialuit herders move Canada's last free-range herd of reindeer, numbering around 4,000, to the animals' calving grounds. The Inuvialuit Regional Corporation took full ownership of the herd in 2021 with a goal of growing a sustainable food source. PHOTOGRAPH BY KATIE ORLINSKY."
          className="mt-[30px] object-cover object-bottom w-full  h-[700px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
