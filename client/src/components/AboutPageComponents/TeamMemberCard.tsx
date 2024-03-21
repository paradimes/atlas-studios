type TeamMemberCardProps = {
  name: string;
  role: string;
  img: string;
  //   bio: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, img }) => {
  return (
    <div className="col-span-1 bg-neutral-900 p-6 rounded-lg flex flex-col items-center ">
      <img
        src={img}
        alt="Team Member 1"
        className="max-h-[50vh] mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
