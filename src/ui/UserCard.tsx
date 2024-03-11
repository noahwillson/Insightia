import React from "react";

interface UserDetails {
  avatarUrl: string;
  name: string;
  time: string;
  rating: number;
  description: string;
}

const UserData: UserDetails[] = [
  {
    avatarUrl: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Favatar1",
    name: "Jay Rutherford",
    time: "12:00 PM",
    rating: 5,
    description:
      "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur",
  },
  {
    avatarUrl: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Favatar1",
    name: "Jay Rutherford",
    time: "12:00 PM",
    rating: 5,
    description:
      "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur",
  },
  {
    avatarUrl: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Favatar1",
    name: "Jay Rutherford",
    time: "12:00 PM",
    rating: 5,
    description:
      "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur",
  },
  {
    avatarUrl: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Favatar1",
    name: "Jay Rutherford",
    time: "12:00 PM",
    rating: 5,
    description:
      "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur",
  },
];

interface UserCardProps {
  userDetails: UserDetails;
}

const UserCard: React.FC<UserCardProps> = ({ userDetails }) => (
  <article className="flex flex-col grow shrink-0 self-start py-1 bg-white basis-0 w-fit max-md:max-w-full">
    <header className="flex gap-3 self-start whitespace-nowrap">
      <img
        loading="lazy"
        src={userDetails.avatarUrl}
        className="shrink-0 w-9 aspect-square"
        alt="User avatar"
      />
      <div className="flex flex-col flex-1 my-auto">
        <h3 className="text-sm leading-5">{userDetails.name}</h3>
        <div className="flex gap-2 mt-2.5 text-xs leading-5">
          <div className="grow">Rated {userDetails.rating}</div>
          <time className="grow">{userDetails.time}</time>
        </div>
      </div>
    </header>
    <section className="mt-5 text-sm leading-5 max-md:max-w-full">
      <p>{userDetails.description}</p>
    </section>
  </article>
);

export const UserReviewSection: React.FC = () => (
  <main>
    {UserData.map((userDetails, index) => (
      <UserCard key={index} userDetails={userDetails} />
    ))}
  </main>
);
