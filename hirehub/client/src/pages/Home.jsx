import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        {/* Hero */}
        <div className="text-center px-6 pt-24 pb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Find Your Dream <span className="text-purple-400">Job</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            HireMe connects talented developers with the best tech companies
            around the world.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/jobs"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Browse Jobs
            </Link>
            <Link
              to="/signup"
              className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-900"
            >
              Post a Job
            </Link>
          </div>
        </div>

        <div className="flex justify-center gap-16 py-12 border-t border-gray-800">
          {[
            { number: "100+", label: "Jobs Posted" },
            { number: "50+", label: "Companies" },
            { number: "Free", label: "Always Free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-purple-400">
                {stat.number}
              </div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up free in 30 seconds",
              },
              {
                step: "02",
                title: "Browse Jobs",
                desc: "Find jobs matching your skills",
              },
              {
                step: "03",
                title: "Get Hired",
                desc: "Apply and land your dream job",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-3">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
