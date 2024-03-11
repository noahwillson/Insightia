import * as React from "react";

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
  <section className="flex flex-col flex-1 justify-end pt-6 font-bold whitespace-nowrap bg-black bg-opacity-0 text-zinc-900">
    <h2>{title}</h2>
    <div className="shrink-0 mt-5 h-1 bg-zinc-900" />
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/460d8415bf1df84fafdbc976f39bdfcf31bd4f5a71cd80051fc33b6295c14bd2?apiKey=83975960b1ff45e1806aecdc75979389&"
              alt="Class overview image"
              className="aspect-[1.82] max-md:max-w-full"
            />
            <nav className="flex gap-0 justify-center self-start px-0.5 mt-5 bg-black bg-opacity-0 max-md:flex-wrap">
              <SectionComponent title="Class description" content="Benefits" />
              <SectionComponent title="Reviews" content="99 Reviews" />
              <SectionComponent title="Related courses" content="" />
            </nav>
          </article>
        </div>
        <aside className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-5">
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98a56db723cd1427414a1732c4248af0c579f72cd107a12c3e1e35c1d50ceae5?apiKey=83975960b1ff45e1806aecdc75979389&"
              alt="Additional class image 1"
              className="aspect-[2.13]"
            />
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1b0abab80904d4a4d93b7a0a73b441eea36aa2ecea295f481812de15a1cfdc?apiKey=83975960b1ff45e1806aecdc75979389&"
              alt="Additional class image 2"
              className="mt-5 aspect-[2.50]"
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ClassInformation;
