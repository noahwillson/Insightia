import Card from "../ui/Card";
import courses from "../data/Courses";

const recommended = courses.recommended;

const Recommended = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
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
