function ProfileCard({ name, skill, city }) {
  return (
    <div>
      <h2>👤 {name}</h2>
      <p>🛠️ Skill: {skill}</p>
      <p>📍 City: {city}</p>
    </div>
  );
}

export default ProfileCard;
