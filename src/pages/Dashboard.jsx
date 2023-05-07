import { TutorCard } from "../components/tutorCard";
import { Button } from "../components/ui/button";

export function Dashboard() {
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
  return (
    <div
      className="
        max-w-[1400px]
        mx-auto
        self-stretch
        w-full  
    "
    >
      <div className="flex flex-col justify-center w-full h-full md:px-5 py-5">
        <div className="w-full border rounded-md mb-2">
          Some kind of filter #TODO
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
          <TutorCard tutor={tutor} />
        </div>
        <Button className="mt-5" variant="link">
          Load More
        </Button>
      </div>
    </div>
  );
}
