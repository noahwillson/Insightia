import ReviewSection from "../components/CourseDetails/ReviewSection";

const DetailsPage = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <h5>Home/ Design / UI/UX Design</h5>
          <h1 className="text-3xl font-bold pt-5 pb-4">UI/UX Design</h1>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="flex gap-5 justify-between pr-1.5 mt-3.5 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 items-center my-auto text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/570ac1a3b16ab7df4a00ac2845e9cc716a43b2387791aa17a7621c8acdec7920?"
              className="shrink-0 self-stretch w-5 aspect-square"
            />
            <div className="self-stretch my-auto font-bold">4.5</div>
            <div className="self-stretch my-auto">(99 reviews)</div>
            <div className="self-stretch my-auto">|</div>
            <div className="grow self-stretch my-auto whitespace-nowrap">
              Klara Weaver
            </div>
          </div>
          <div className="flex gap-3 whitespace-nowrap">
            <div className="flex gap-1.5 justify-center px-5 py-2.5 text-gray-600 bg-gray-100">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/49ec5d6723662508be6847cbb8838e62cb700e918a2e949011a7077366c0bf07?"
                className="shrink-0 w-4 aspect-square"
              />
              <div className="grow my-auto">Share</div>
            </div>
            <div className="flex gap-1.5 justify-center px-5 py-2.5 text-white bg-gray-600">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4020efbafd152b84d28de1258b324b616e74f500dd8211ade8c6882dd52ff28?"
                className="shrink-0 w-4 aspect-square"
              />
              <div className="my-auto">Save</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-8">
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 text-gray-600 max-md:mt-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
                  className="w-full aspect-[1.82] max-md:max-w-full"
                />
                <div className="flex gap-0 justify-center self-start px-0.5 mt-5 bg-black bg-opacity-0 max-md:flex-wrap">
                  <div className="flex flex-col flex-1 justify-end pt-6 font-bold whitespace-nowrap bg-black bg-opacity-0 text-zinc-900">
                    <div>Class description</div>
                    <div className="shrink-0 mt-5 h-1 bg-zinc-900" />
                  </div>
                  <div className="grow justify-center px-3 py-6 bg-black bg-opacity-0">
                    Benefits{" "}
                  </div>
                  <div className="grow justify-center px-3 py-6 whitespace-nowrap bg-black bg-opacity-0">
                    Reviews (99)
                  </div>
                  <div className="grow justify-center px-3 py-6 whitespace-nowrap bg-black bg-opacity-0">
                    Related courses
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  loading="lazy"
                  srcSet="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  className="w-full aspect-[2.13]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.elearningindustry.com/wp-content/uploads/2020/02/what-to-check-before-an-online-course-purchase.png"
                  className="mt-5 w-full aspect-[2.08]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="text-sm leading-6 text-zinc-900 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  lorem aliquam sed lacinia quis. Nibh dictumst vulputate odio
                  pellentesque sit quis ac, sit ipsum. Sit rhoncus velit in sed
                  massa arcu sit eu. Vitae et vitae eget lorem non dui.
                  Sollicitudin ut mi adipiscing duis. <br />
                  <br />
                  Convallis in semper laoreet nibh leo. Vivamus malesuada ipsum
                  pulvinar non rutrum risus dui, risus. Purus massa velit
                  iaculis tincidunt tortor, risus, scelerisque risus. In at
                  lorem pellentesque orci aenean dictum dignissim in. Aenean
                  pulvinar diam interdum ullamcorper. Vel urna, tortor, massa
                  metus purus metus. Maecenas mollis in velit auctor cursus
                  scelerisque eget. Nibh faucibus purus elementum ultrices
                  elementum, urna.{" "}
                </div>
                <div className="mt-12 text-xl font-bold leading-none text-zinc-900 max-md:mt-10 max-md:max-w-full">
                  Be<span className="leading-none">nefits</span>
                </div>
                <div className="mt-6 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-sm leading-none text-zinc-900 max-md:mt-10">
                        <div className="flex gap-2 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0aa8f567d00191ebadc45302e90de75c853c3564c22144b7d50da18e20f29b6?"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="grow my-auto">
                            1
                            <span className="leading-none">
                              4 hours on-demand video
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37062a57a446325d8e77ae482b9bc01c5297a481648ac2a8f9744bb9bee19295?"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="flex-auto my-auto">
                            N<span className="leading-none">ative teacher</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74b20c00d9bf21d4db200bf5c3336ede3a694d71fd199126bd0123c1c3cbdb0d?"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="flex-auto my-auto">
                            100%
                            <span className="leading-none"> free document</span>
                          </div>
                        </div>
                        <div className="mt-14 text-xl font-bold leading-none max-md:mt-10">
                          R<span className="leading-none">eviews</span>
                        </div>
                        <div className="flex gap-1 mt-7 leading-[157%]">
                          <div className="flex gap-0 font-bold whitespace-nowrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13f1d4a3a3907cf2ee9156da1a56a3df34761a3323d125d85342596731a0d06c?"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div className="grow my-auto">4.5</div>
                          </div>
                          <div className="flex-auto">(99 reviews)</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-sm leading-none text-zinc-900 max-md:mt-10">
                        <div className="flex gap-2 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d2716d106a2db6a298d1fb50e7bd3c1e999219e5cde16306b0192132ae062b?"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="grow my-auto">
                            F
                            <span className="leading-none">
                              ull lifetime access
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/435e4eaaeab4e8d5640e19b4c9b450dc757329d755237242dc8fd7ac201535a0?"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="grow my-auto">
                            Ce
                            <span className="leading-none">
                              rtificate of complete
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4 leading-[157%]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19c7d3ee18b785e1e9a31be5789a62b12fb94544732366ff095c205f33ed265b?"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="flex-auto my-auto">24/7 support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-6 py-7 mx-auto mt-5 w-full bg-gray-50 max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between items-start px-px">
                  <div className="flex flex-col">
                    <div className="text-base font-bold leading-7 whitespace-nowrap text-zinc-900">
                      UX: Design with a User...
                    </div>
                    <div className="mt-6 text-sm leading-none text-zinc-900">
                      Course (12 lessons)
                    </div>
                    <div className="flex gap-4 mt-9">
                      <div className="flex-auto my-auto text-sm leading-none text-zinc-900">
                        D<span className="leading-none">ocument</span>
                      </div>
                      <div className="flex flex-col flex-1 justify-center text-xs leading-5 text-white whitespace-nowrap bg-black bg-opacity-0">
                        <div className="justify-center px-2 py-2.5 bg-gray-600 rounded-2xl">
                          Free
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col text-base font-bold leading-7 text-right whitespace-nowrap text-zinc-900">
                    <div className="flex gap-0.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a72eb4e9ecc669364d8d7340af4a8250a5b62fbdd8c63f044bd3f2240b9149aa?"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="grow my-auto">4.5</div>
                    </div>
                    <div className="flex flex-col pl-4 mt-7">
                      <div>$49</div>
                      <div className="mt-8">0</div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac1b3fc645a5235f4ecb3893d3cff7c6ca35a33547972e239d7ead3b17703d4?"
                  className="mt-5 w-full border border-gray-200 border-solid aspect-[100] stroke-[1px] stroke-gray-200 max-md:mr-0.5"
                />
                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-zinc-900">
                  <div className="text-sm leading-5">Total</div>
                  <div className="text-xl font-bold leading-8 text-right">
                    $49
                  </div>
                </div>
                <div className="justify-center items-center px-16 py-3 mt-7 text-sm leading-5 text-white whitespace-nowrap bg-gray-600 max-md:px-5">
                  Buy now
                </div>
                <div className="justify-center items-center px-16 py-3.5 mt-5 text-sm leading-5 text-gray-600 whitespace-nowrap bg-white border border-gray-600 border-solid max-md:px-5">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <ReviewSection />
      </div>
    </>
  );
};

export default DetailsPage;
