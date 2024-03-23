import { motion } from "framer-motion";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <motion.nav className="mt-5 flex flex-row flex-wrap gap-3 justify-between text-xl">
      <NavBarLink title="HOME" path="/" />
      <NavBarLink title="GALLERY" path="/gallery" />
      <NavBarLink title="ABOUT" path="/about" />
      <NavBarLink title="SERVICES" path="/services" />
      <NavBarLink title="CONTACT" path="/contact" />
    </motion.nav>
  );
}
