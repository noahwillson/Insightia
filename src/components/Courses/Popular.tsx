import courses from "../../data/Courses";
import Card from "../../ui/Card";

const Popular = () => {
  const popular = courses.popular;
  return (
    <div className="flex flex-row gap-4">
      {popular.map(
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

export default Popular;
