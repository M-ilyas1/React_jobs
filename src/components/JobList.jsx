 import Jobs from '../jobs.json'
import Job from './Job';
import ViewAllJobs from './ViewAllJobs';

function JobList({ onHome = false }) {

  const recentJobs = onHome ? Jobs.slice(0, 3) : Jobs;

  return (
    <>
      <div className="flex justify-center bg-blue-100 items-center w-full">
        <div className="w-[90%] flex flex-col justify-center items-center flex-wrap p-3 py-10 text-center">
          <h3 className="text-[30px] font-bold text-indigo-500 mb-6">
            {onHome ? "Recent Jobs" : "Browse Jobs"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { recentJobs.map((job) => (
            <Job job={job} key={job.id}/>
          )) }
          </div>

          <ViewAllJobs />
        </div>
      </div>
    </>
  );
}

export default JobList;
