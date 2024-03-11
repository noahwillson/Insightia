import { IoStarOutline } from "react-icons/io5";

interface Props {
  cardTitle: string;
  cardBadge: string;
  imgSrc: string;
  imgAlt: string;
  cardGenre: string;
  rate: number;
  price: number;
}
const Card = ({
  cardGenre,
  cardTitle,
  cardBadge,
  imgSrc,
  imgAlt,
  rate,
  price,
}: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="w-full h-40">
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="card-body gap-4">
        <div className="flex items-center justify-between">
          <p className="card-title font-normal text-lg">{cardGenre}</p>
          <div className="badge !justify-end badge-secondary">{cardBadge}</div>
        </div>
        <h2 className="card-title max-w-auto truncate">{cardTitle}</h2>
        <div className="card-actions justify-between mt-4">
          <div className="flex items-center text-2xl ">
            <IoStarOutline className="" />
            <p className="ml-1">{rate}</p>
          </div>
          <div className="text-2xl">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
