import Greeting from "./Greeting";
import ProfileCard from "./ProfileCard";
import Counter from "./Counter";

function App() {
  const myName = "Umer";
  const myJob = "MERN Stack Developer";
  const myCity = "Lahore";

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Hello, I am {myName}! 👋</h1>
      <h2>I am a {myJob}</h2>
      <p>Based in {myCity}, Pakistan 🇵🇰</p>

      <Greeting />
      <ProfileCard name="umer" skill="Mern Stack dev" city="Lahore" />
      <ProfileCard name="talha" skill="Frontend" city="Lahore" />
      <ProfileCard name="abdul" skill="WordPress Dev" city="Lahore" />

      <Counter />
    </div>
  );
}

export default App;
