import { useState, useEffect } from "react";
import api from "../api/axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get("/jobs");
        setJobs(data.jobs);
      } catch (error) {
        console.log("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  if (loading)
    return <p className="text-center pt-20 text-white">Loading jobs...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Available Jobs 💼</h1>
      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-700 transition-colors"
          >
            <h2 className="text-xl font-bold text-white mb-1">{job.title}</h2>
            <p className="text-purple-400 mb-3">{job.company}</p>
            <div className="flex gap-4 text-gray-400 text-sm mb-3">
              <span>📍 {job.location}</span>
              <span>💼 {job.type}</span>
              <span>💰 {job.salary}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
