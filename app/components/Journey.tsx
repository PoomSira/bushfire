import React from "react";

type TimelineItemProps = {
  year: string;
  title: string;
  subtitle: string;
};

const JourneyItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
}) => {
  return (
    <div className="relative flex items-center mb-10">
      <div className="flex-1 ml-10 p-6 bg-gray-900 text-white border-2 border-yellow-500 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

const Journey: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 w-1 bg-yellow-500 transform -translate-x-1/2 h-full"></div>
      <JourneyItem
        year="2024"
        title="Master's Degree"
        subtitle="Master's of Information Technology, Monash University, Clayton VIC"
      />
      <JourneyItem
        year="2021"
        title="Bachelor's Degree"
        subtitle="Bachelor's of Information System, Holmesglen, Chadstone VIC"
      />
      <JourneyItem
        year="2019"
        title="Diploma"
        subtitle="Diploma of Software Development, Holmesglen, Chadstone VIC"
      />
      <JourneyItem
        year="2018"
        title="Certificate IV"
        subtitle="Certificate IV of Programming, Holmesglen, Chadstone VIC"
      />
    </div>
  );
};

export default Journey;
