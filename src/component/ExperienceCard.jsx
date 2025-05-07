import Image from "next/image";

export const ExperienceCard = ({
  logo,
  company,
  role,
  date,
  points,
  reverse = false,
}) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row gap-10 items-center pb-10 border-b-[0.8px] border-b-[#00000033] ${reverse && "md:flex-row-reverse"}`}
    >
      <div className="w-[13em] h-[13em] flex-shrink-0">
        <Image
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className=" md:flex-1">
        <h3 className="text-2xl font-bold">{company}</h3>
        <p className="text-sm text-gray-500 italic">{date}</p>
        <p className="font-bold text-[#147efb]">{role}</p>
        <ul className="list-disc ml-5 mt-2 font-medium text-md text-gray-600 space-y-1">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
