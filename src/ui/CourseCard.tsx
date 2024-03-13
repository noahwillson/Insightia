import React from "react";

interface CourseBannerProps {
  imageUrl: string;
  altText: string;
}

interface RatingProps {
  iconUrl: string;
  altText: string;
  rating: number;
  count: number;
}

interface CourseCardProps {
  cardTitle: string;
  cardBadge: string;
  imgSrc: string;
  imgAlt: string;
  cardGenre: string;
  rate: number;
  price: number;
}

const CourseBanner: React.FC<CourseBannerProps> = ({ imageUrl, altText }) => (
  <div className="flex flex-col justify-center min-w-96 bg-gray-50">
    <img
      loading="lazy"
      src={imageUrl}
      alt={altText}
      className="w-full aspect-[1.67]"
    />
  </div>
);

const Rating: React.FC<RatingProps> = ({ iconUrl, altText, rating, count }) => (
  <div className="flex gap-0 self-start text-sm leading-5">
    <img
      loading="lazy"
      src={iconUrl}
      alt={altText}
      className="sh-0 w-5 aspect-square"
    />
    <div className="grow">{`${rating} (${count})`}</div>
  </div>
);

const CourseCard: React.FC<CourseCardProps> = ({
  cardGenre,
  cardTitle,
  cardBadge,
  imgSrc,
  imgAlt,
  rate,
  price,
}) => {
  return (
    <section className="flex flex-col grow pb-5 w-full bg-white max-md:mt-6">
      <CourseBanner imageUrl={imgSrc} altText={imgAlt} />
      <div className="flex flex-col px-4 mt-6 font-bold">
        <header className="flex gap-5 justify-between">
          <h2 className="my-auto text-xs leading-5 text-zinc-900">
            {cardGenre}
          </h2>
          <div className="flex flex-col justify-center text-xs leading-5 text-white whitespace-nowrap bg-black bg-opacity-0">
            <div className="justify-center p-2 bg-gray-600 rounded-xl">
              {cardBadge}
            </div>
          </div>
        </header>
        <h1 className="mt-6 text-base leading-7 text-zinc-900 min-w-0">
          {cardTitle}
        </h1>
        <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap text-zinc-900">
          <Rating
            iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/570ac1a3b16ab7df4a00ac2845e9cc716a43b2387791aa17a7621c8acdec7920?"
            altText="Rating Star"
            rating={rate}
            count={1253}
          />
          <div className="text-xl leading-8 text-right">${price}</div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
