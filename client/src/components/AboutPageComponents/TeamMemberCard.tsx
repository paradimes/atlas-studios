import { motion } from "framer-motion";

type TeamMemberCardProps = {
  name: string;
  role: string;
  img: string;
  //   bio: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, img }) => {
  return (
    <motion.div
      className="col-span-1 bg-neutral-900 hover:bg-neutral-800 p-6 rounded-lg flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={img}
        alt="Team Member 1"
        className="max-h-[50vh] mb-4 rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.h3
        className="text-xl font-bold text-center hover:italic cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-center hover:italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {role}
      </motion.p>
    </motion.div>
  );
};

export default TeamMemberCard;
