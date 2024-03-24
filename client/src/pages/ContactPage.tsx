import ContactForm from "@/components/Form/ContactForm";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

export default function ContactPage() {
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
          Get In Touch
        </motion.h1>
        <NavBar />
        <ContactForm />
      </div>
    </div>
  );
}
