import Card from "../ui/Card";
import courses from "../data/Courses";

const recommended = courses.recommended;
const Home = () => {
  return (
    <div className="flex px-52 py-20 justify-start">
      <div className="flex flex-col gap-4 items-center justify-start">
        <div className="flex flex-row gap-4">
          {recommended.map(
            (course, index) =>
              index < 4 && (
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
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
