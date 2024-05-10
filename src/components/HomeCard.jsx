import Card from "./Card";

function HomeCard() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-6 p-3 py-10 text-center">
        <Card
          heading={"For Developer"}
          paragraph={"Broose our React Jobs and start your career today"}
          link={'/jobs'}
          job={'Browser Job'}
        />
        <Card
          heading={"For Employer"}
          paragraph={"Broose our React Jobs and start your career today"}
          btn_bg="bg-indigo-600"
          card_bg="bg-indigo-100"
          link={'/add_jobs'}
          job={'Add Job'}
        />
      </div>
    </div>
  );
}

export default HomeCard;
