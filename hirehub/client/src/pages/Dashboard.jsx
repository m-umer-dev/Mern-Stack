import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext.jsx";

const Dashboard = () => {
  const { token } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("full-time");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMyJobs = async () => {
    try {
      const { data } = await api.get("/jobs");
      setJobs(data.jobs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillsArray = skills.split(",").map((skill) => skill.trim());
    try {
      const { data } = await api.post(
        "/jobs",
        {
          title,
          company,
          location,
          salary,
          description,
          type,
          skills: skillsArray,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setDescription("");
      setSkills("");
      await fetchMyJobs();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchMyJobs();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return <p className="text-center pt-20 text-white">Loading jobs...</p>;

  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Create Job
          </h1>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="textarea"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg 
 font-semibold hover:bg-purple-700"
          >
            Post Job
          </button>
        </form>
      </div>
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
            <button
              onClick={() => handleDelete(job._id)}
              className="mt-3 bg-red-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-red-700"
            >
              Delete 🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
