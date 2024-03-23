import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

type NavBarLinkProps = {
  title: string;
  path: string;
};
export default function NavBarLink({ title, path }: NavBarLinkProps) {
  return (
    <motion.span
      className="hover:text-orange-200 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "bg-greeen-400 px-6 py-[3px] rounded-full text-orange-500 cursor-pointer block w-full h-full hover:bg-opacity-60 border-2 border-orange-500  "
            : "px-6 py-[3px] rounded-full text-white cursor-pointer block w-full h-full hover:border-orange-300 border-2 border-white hover:text-orange-300"
        }
      >
        {title}
      </NavLink>
    </motion.span>
  );
}
