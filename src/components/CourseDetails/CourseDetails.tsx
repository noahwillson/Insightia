import DetailsPage from "../../ui/DetailsPage";
import courses from "../../data/Courses";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  const coursesArray = Object.values(courses).flatMap((category) => category);
  const course = coursesArray.find((course) => course.id == id);

  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div className="flex justify-start flex-col lg:px-52 xl:px-52 px-12">
      <DetailsPage
        key={course.id}
        courseTitle={course.title}
        author={course.author}
        courseCategory={course.badge}
        courseGenre={course.category}
        rate={course.rating.rate}
        rateCount={course.rating.count}
        price={course.price}
      />
    </div>
  );
};

export default CourseDetails;
