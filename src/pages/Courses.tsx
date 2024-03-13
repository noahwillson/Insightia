import { Link } from "react-router-dom";
import courses from "../data/Courses";
import Card from "../ui/Card";

const coursesArray = courses.recommended.concat(
  courses.popular,
  courses.trending,
  courses.related
);

const Courses = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">All Courses</h1>
      </div>
      <div className="flex px-12 py-11 justify-center items-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
          {coursesArray.map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <Card
                key={course.id}
                cardTitle={course.title}
                cardBadge={course.badge}
                imgSrc={course.image}
                imgAlt={course.title}
                cardGenre={course.category}
                rate={course.rating.rate}
                price={course.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
