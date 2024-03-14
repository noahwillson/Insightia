import * as React from "react";
import NavItem from "../../layout/NavItem";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="w-full" />
);

type SectionProps = {
  title: string;
  content: string;
};

const SectionComponent: React.FC<SectionProps> = ({ title, content }) => (
  <section className="flex flex-col flex-1 justify-end pt-6 px-3 font-bold whitespace-nowrap bg-black bg-opacity-0 text-zinc-900">
    {/* <h2>{title}</h2>
    <div className="shrink-0 mt-5 h-1 bg-zinc-900" />
    <p>{content}</p> */}
    <NavItem
      path={`/courses/${title.split(" ").join("-").toLowerCase()}`}
      text={title}
      className="shrink-0 mt-5 h-1 bg-zinc-900"
    />
    <p>{content}</p>
  </section>
);

const ClassInformation: React.FC = () => {
  return (
    <main className="mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col grow text-sm leading-5 text-gray-600 max-md:mt-5 max-md:max-w-full">
            <ImageComponent
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
              alt="Class overview image"
              className="aspect-[1.82] max-md:max-w-full"
            />
            <nav className="flex gap-2 justify-center self-start px-0.5 mt-5 bg-black bg-opacity-0 max-md:flex-wrap list-none">
              <SectionComponent title="description" content="" />
              <SectionComponent title="Benefits" content="" />
              <SectionComponent title="Reviews (99 Reviews)" content="" />
              <SectionComponent title="Related courses" content="" />
            </nav>
          </article>
        </div>
        <aside className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-5">
            <ImageComponent
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt="Additional class image 1"
              className="aspect-[2.13]"
            />
          </div>
          <div className="flex flex-col mt-14 max-md:mt-5">
            <ImageComponent
              src="https://cdn.elearningindustry.com/wp-content/uploads/2020/02/what-to-check-before-an-online-course-purchase.png"
              alt="Additional class image 2"
              className="mt-5 aspect-[2.50] "
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ClassInformation;
