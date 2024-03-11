import Card from "../../ui/Card";
import courses from "../../data/Courses";

const recommended = courses.recommended;

const Recommended = () => {
  return (
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
  );
};

export default Recommended;
