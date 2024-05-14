//  import Jobs from '../jobs.json'
import { useState, useEffect } from "react";
import Job from "./Job";
import ViewAllJobs from "./ViewAllJobs";
import Spinner from "./Spinner";

function JobList({ onHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = onHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const api = await fetch(apiUrl);
        const data = await api.json();
        setJobs(data);
      }catch (error) {
        console.log("Error", error);
      } finally {
        setloading(false)
      }
    }
    fetchJobs()
  }, []);
  

  return (
    <>
      <div className="flex justify-center bg-blue-100 items-center w-full">
        <div className="w-[90%] flex flex-col justify-center items-center flex-wrap p-3 py-10 text-center">
          <h3 className="text-[30px] font-bold text-indigo-500 mb-6">
            {onHome ? "Recent Jobs" : "Browse Jobs"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              loading ? (
                <Spinner />
                ) : (
                  <>
                    {jobs.map((job) => (
                      <Job job={job} key={job.id} />
                    ))}
                  </>
                )
            }
          </div>

          <ViewAllJobs />
        </div>
      </div>
    </>
  );
}

export default JobList;
