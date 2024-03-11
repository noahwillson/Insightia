import Card from "../ui/Card";
import courses from "../data/Courses";

const recommended = courses.recommended;
const Home = () => {
  return (
    <div className="flex px-52 py-20 justify-start">
      <div className="flex flex-col gap-4 items-center justify-start">
        <div className="flex flex-row">
          <div className="text-center">
            <h1 className="text-3xl">Recommended for you</h1>
          </div>
          {recommended.map((course) => (
            <Card
              key={course.title}
              cardTitle={course.title}
              cardBadge={course.badge}
              imgSrc={course.image}
              imgAlt={course.title}
              cardGenre={course.category}
              rate={course.rating.rate}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
