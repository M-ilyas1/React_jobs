import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Job = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 120) + "....";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4 text-left">
        <div className="mb-5">
          <p className="text-gray-600 py-2">{job.type}</p>
          <h3 className="text-xl font-semibold">{job.title}</h3>
        </div>
        <div className="text-sm mb-3 dap-3">
          {description}
          <button
            onClick={() => setShowFullDescription((preState) => !preState)}
            className="text-indigo-500 mb-5 hover:text-indigo-600"
          >
            {showFullDescription ? "less" : "read more"}
          </button>
        </div>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
        <div className="flex flex-col lg:flex-row justify-between mb-2">
          <div className="text-orange-700 mb-2">
            <i className="fa-soild fa-location-dot text-lg flex items-center gap-1">
              <IoLocationOutline />
              {job.location}
            </i>
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] outline-none bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm rounded-md text-white"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
