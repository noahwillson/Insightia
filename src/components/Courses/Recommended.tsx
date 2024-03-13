import courses from "../../data/Courses";
import { Link } from "react-router-dom";
import CourseCard from "../../ui/CourseCard";

const recommended = courses.recommended;

const Recommended = () => {
  return (
    <div className="flex flex-row gap-4">
      {recommended.map(
        (course, index) =>
          index < 4 && (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <CourseCard
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

export default Recommended;
