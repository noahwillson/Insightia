import courses from "../../data/Courses";
import { Link } from "react-router-dom";
import Card from "../../ui/Card";

const Popular = () => {
  const popular = courses.popular;
  return (
    <div className="flex flex-row gap-4">
      {popular.map(
        (course, index) =>
          index < 4 && (
            <Link to={`/courses/${course.id}`} key={course.id}>
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
            </Link>
          )
      )}
    </div>
  );
};

export default Popular;
