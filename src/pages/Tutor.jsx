import { useParams } from "react-router-dom";

function Tutor() {
  const tutor = {
    fullName: "Hasan Huseyin Doeganoglullari",
    profileImageUrl: "https://i.pravatar.cc/300",
    description:
      "I Never Ask My Clients to judge me on my winners, I ask them to judge me on my losers because i have so few",
    hours: 10,
    rating: 4.5,
    badges: 5,
    id: 1,
  };
  const { id } = useParams();
  return (
    <div>
      <h1>aasdasd</h1>
      <p>asdasd</p>
      <p>{id}</p>
    </div>
  );
}

export default Tutor;
