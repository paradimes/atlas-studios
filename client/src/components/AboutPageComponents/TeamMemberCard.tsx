type TeamMemberCardProps = {
  name: string;
  role: string;
  img: string;
  //   bio: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, img }) => {
  return (
    <div className="col-span-1 bg-neutral-900 hover:bg-neutral-800 p-6 rounded-lg flex flex-col items-center ">
      <img
        src={img}
        alt="Team Member 1"
        className="max-h-[50vh] mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold text-center hover:italic cursor-pointer">
        {name}
      </h3>
      <p className="text-gray-400 text-center hover:italic">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
