import ContactForm from "@/components/Form/ContactForm";
import NavBar from "../components/NavBar";

export default function ContactPage() {
  return (
    <div
      id="page-container"
      className="bg-black text-white min-h-screen break-words w-full"
    >
      <div id="content-container" className="p-10 flex flex-col">
        <h1 className="text-[170px] md:text-[208px] leading-none font-bold">
          Get&nbsp;In&nbsp;Touch
        </h1>
        <NavBar />
        <ContactForm />
      </div>
    </div>
  );
}
