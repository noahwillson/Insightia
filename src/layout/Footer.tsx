import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <div className="text-xl font-bold leading-8 text-zinc-900">{title}</div>
);

interface IconImageProps {
  src: string;
  alt: string;
}

const IconImage: React.FC<IconImageProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    className="shrink-0 w-6 aspect-square"
    alt={alt}
  />
);

const FooterSection: React.FC = () => (
  <footer className="flex gap-5 justify-between items-center mt-3.5 w-full max-md:flex-wrap max-md:max-w-full">
    <div className="flex gap-5 justify-between self-stretch px-3.5 py-3 text-sm leading-5 whitespace-nowrap border border-solid bg-black bg-opacity-0 border-zinc-400 text-zinc-900">
      <div>English</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ce5a849479916019f9ac1df75070a8e3ddf0a196649085e07234dbb4b587f3b?apiKey=83975960b1ff45e1806aecdc75979389&"
        className="shrink-0 w-4 aspect-square"
        alt="Language selector icon"
      />
    </div>
    <div className="flex gap-1.5 self-stretch my-auto text-sm leading-5 whitespace-nowrap text-zinc-900">
      <div className="grow">© 2022 Brand, Inc.</div>
      <div className="my-auto text-xs leading-5">•</div>
      <div>Privacy</div>
      <div className="my-auto text-xs leading-5">•</div>
      <div>Terms</div>
      <div className="my-auto text-xs leading-5">•</div>
      <div>Sitemap</div>
    </div>
    <div className="flex gap-4 self-stretch my-auto">
      <IconImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2cf2e1e044951149339504a9dc0c8cb8b810883dbc2d6cb718aa8a9023cba3a?apiKey=83975960b1ff45e1806aecdc75979389&"
        alt="Social media icon 1"
      />
      <IconImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/278aac976e452a87c6f8a525acd52752191d4577ab988a6c238c878318c87378?apiKey=83975960b1ff45e1806aecdc75979389&"
        alt="Social media icon 2"
      />
      <IconImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f77461a86dba2b81b2095ccacd34c480e3509f38420f8248a2690d2f6203c0?apiKey=83975960b1ff45e1806aecdc75979389&"
        alt="Social media icon 3"
      />
      <IconImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a40a1ef36f57e231871eeba63a81a673e78a9844745f782968306a7c36bf9590?apiKey=83975960b1ff45e1806aecdc75979389&"
        alt="Social media icon 4"
      />
    </div>
  </footer>
);

const NewsletterSignup: React.FC = () => (
  <form
    className="flex flex-col flex-1 self-start mt-2"
    action="#"
    method="POST"
  >
    <SectionTitle title="Subscribe to our newsletter" />
    <div className="mt-3.5 text-xs leading-5 text-zinc-900">
      For product announcements and exclusive insights
    </div>
    <div className="flex gap-2 mt-5 text-sm leading-5">
      <label
        htmlFor="emailInput"
        className="flex flex-auto gap-1.5 px-3.5 py-3 bg-white border border-solid border-zinc-400 text-neutral-300 sr-only"
      >
        Input your email
      </label>
      <input
        className="flex-auto px-3.5 py-3 border border-solid border-zinc-400"
        type="email"
        id="emailInput"
        placeholder="Input your email"
        aria-label="Input your email"
      />
      <button
        type="submit"
        className="justify-center self-start px-6 py-3.5 text-white whitespace-nowrap bg-gray-600 max-md:px-5"
      >
        Subscribe
      </button>
    </div>
  </form>
);

const Footer: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full max-w-[1201px] mx-auto p-5 md:max-w-full">
    <header>
      <nav className="flex gap-5 justify-between items-start">
        {/* Logo and main navigation */}
        <div className="flex gap-5">
          <h1 className="text-3xl font-bold">INSIGHTIA</h1>
        </div>
      </nav>
    </header>

    <main>
      <section className="flex gap-5 justify-between items-start">
        <NewsletterSignup />
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcee0b221480490829d342d58d4c1e892a537b4d4ea15c5611c6703f3f89abee?apiKey=83975960b1ff45e1806aecdc75979389&"
        className="mt-16 w-full border border-solid border-zinc-200 stroke-[1px] stroke-zinc-200 max-md:mt-10 max-md:max-w-full"
        alt=""
      />
    </main>
    <FooterSection />
  </div>
);

export default Footer;
