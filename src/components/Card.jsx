import { Link } from "react-router-dom";
function Card({
  heading,
  paragraph,
  btn_bg = "bg-black ",
  card_bg = "bg-gray-100",
  link,
  job
}) {
  return (
    <div>
      <div
        className={`text-left p-6 rounded-md ${card_bg} w-[100%] shadow-md hover:shadow-lg`}
      >
        <h2 className="text-[24px] font-semibold">{heading}</h2>
        <p className="text-[15px] font-normal pb-4">{paragraph}</p>
        <button
          className={`px-3 py-2 ${btn_bg} hover:shadow-2xl text-white rounded-lg`}
        >
          <Link to={link}>{job}</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
