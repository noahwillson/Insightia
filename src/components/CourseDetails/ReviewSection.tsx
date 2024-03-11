import React from "react";

interface ReviewCardProps {
  name: string;
  rating: string;
  time: string;
  content: string;
  imgUrl: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  time,
  content,
  imgUrl,
}) => {
  return (
    <div className="flex flex-col grow shrink-0 self-start py-1 bg-white basis-0 w-fit max-md:max-w-full">
      <div className="flex gap-3 self-start whitespace-nowrap">
        <img
          loading="lazy"
          src={imgUrl}
          alt={`${name} profile`}
          className="shrink-0 w-9 aspect-square"
        />
        <div className="flex flex-col flex-1 my-auto">
          <h3 className="text-sm leading-5">{name}</h3>
          <div className="flex gap-2 mt-2.5 text-xs leading-5">
            <p className="grow">Rated {rating}</p>
            <time className="grow">{time}</time>
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-5 max-md:max-w-full">{content}</p>
    </div>
  );
};

const ReviewSection: React.FC = () => {
  const reviews: ReviewCardProps[] = [
    {
      name: "Jay Rutherford",
      rating: "5",
      time: "12:00 PM",
      content:
        "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur.",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee9ebf897b539f8669d22490898bde871df820b03d40df9456600997e9dee2c?apiKey=83975960b1ff45e1806aecdc75979389&",
    },
    {
      name: "Annie Haley",
      rating: "4.5",
      time: "12:00 PM",
      content:
        "Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum.",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee9ebf897b539f8669d22490898bde871df820b03d40df9456600997e9dee2c?apiKey=83975960b1ff45e1806aecdc75979389&",
    },
    {
      name: "Jay Rutherford",
      rating: "5",
      time: "12:00 PM",
      content:
        "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur.",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee9ebf897b539f8669d22490898bde871df820b03d40df9456600997e9dee2c?apiKey=83975960b1ff45e1806aecdc75979389&",
    },
    {
      name: "Annie Haley",
      rating: "4.5",
      time: "12:00 PM",
      content:
        "Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum.",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee9ebf897b539f8669d22490898bde871df820b03d40df9456600997e9dee2c?apiKey=83975960b1ff45e1806aecdc75979389&",
    },
  ];

  return (
    <section className="flex gap-5 justify-between mt-6 text-zinc-900 max-md:flex-wrap">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </section>
  );
};

export default ReviewSection;
