import Card from "../ui/Card";

const Home = () => {
  return (
    <div className="flex px-52 py-20">
      <Card
        cardTitle="Card Title"
        cardBadge="Badge"
        cardGenre="Genre"
        rate={4.5}
        price={100}
        imgSrc="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        imgAlt="Shoes"
      />
    </div>
  );
};

export default Home;
