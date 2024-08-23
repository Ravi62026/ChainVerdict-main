import { useEffect } from "react";
import { DollarSign, Filter, Moon, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-landing bg-cover bg-center bg-no-repeat h-screen pb-4">
        <div
          className="bg-black w-[80%] md:w-1/2 ml-4 md:ml-16 bg-opacity-30  max-w-7xl backdrop-blur-md rounded-3xl "
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
              <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-gray-400 md:text-4xl lg:text-6xl">
                Revolutionizing{" "}
                <span className="text-amber-800 font-extrabold"> LEGAL</span>{" "}
                Processes with AI, Blockchain, and Privacy Innovations
              </h1>
              <p className="mt-8 max-w-3xl text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ipsam nulla aperiam quo possimus, nihil molestiae modi tenetur
                esse qui repudiandae cum fuga aspernatur ea?
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className=" bg-black dark:bg-white px-3 py-2.5 text-sm font-semibold text-white shadow-sm dark:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-xl hover:scale-110 hover:bg-[#333] ease-in-out transition-all duration-300"
                >
                  <Link to={"/analysis"}> Proceed to analyse </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8 dark:bg-black">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mx-auto inline-flex rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-1.5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-black dark:text-white">
              100+ Tailwind Components
            </p>
          </div>
          <h2
            className="mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            ChainVerdict helps in simplyfing{" "}
            <span className="text-amber-800 font-extrabold"> LEGAL</span>{" "}
            solutions
          </h2>
          <p
            className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-50"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div
          className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ">
              <DollarSign className="h-9 w-9 text-gray-700 dark:text-gray-100" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black dark:text-white ">
              Secured Payments
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-100">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ">
              <Zap className="h-9 w-9 text-gray-700 dark:text-gray-100" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
              Fast & Easy to Load
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-100">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <Moon className="h-9 w-9 text-gray-700 dark:text-gray-100" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black dark:text-white ">
              Light & Dark Version
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-100">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ">
              <Filter className="h-9 w-9 text-gray-700 dark:text-gray-100 " />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
              Filter Blocks
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-100">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section
        className="relative my-12 overflow-hidden py-10 md:my-24 lg:my-32"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:-mr-2 lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white dark:bg-black pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                  <span className="mb-2 block text-sm font-semibold text-gray-400 dark:text-gray-200">
                    PREMIUM
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none dark:text-white ">
                      $150
                    </span>
                    <span className="text-sm font-semibold dark:text-white ">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          No Discount
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Basic Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Ads Banner Free
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Design Style
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Component Library
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          All limited links
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Own analytics platform
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Chat support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Optimize hashtags
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Unlimited users
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black dark:border-white px-3 py-2 text-sm font-semibold text-black dark:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
                <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black dark:bg-white px-10 pb-16 ">
                  <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white dark:bg-black  p-2">
                    <div className="flex-shrink-0 rounded-full bg-black dark:bg-white px-5 py-4 text-sm font-semibold uppercase text-white dark:text-black">
                      Most Popular
                    </div>
                  </div>
                  <span className="mb-2 block pt-10 text-sm font-semibold text-white dark:text-black ">
                    GOLD
                  </span>
                  <span className="flex items-end text-white dark:text-black">
                    <span className="text-4xl font-extrabold leading-none dark:text-black">
                      $100
                    </span>
                    <span className="text-sm font-semibold dark:text-black">/month</span>
                  </span>
                  <div className="mt-7 border-t border-orange-500 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black" >
                          No Discount
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Basic Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Ads Banner Free
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Design Style
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Component Library
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          All limited links
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Own analytics platform
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Chat support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Optimize hashtags
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white dark:text-black">
                          Unlimited users
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md bg-white dark:bg-black px-3 py-2 text-sm font-semibold text-black dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
                <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white dark:bg-black pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400 dark:text-gray-200">
                    PREMIUM
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none dark:text-white">
                      $150
                    </span>
                    <span className="text-sm font-semibold dark:text-white">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          No Discount
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Basic Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Ads Banner Free
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Design Style
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Component Library
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          All limited links
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Own analytics platform
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Chat support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Optimize hashtags
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                          Unlimited users
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black dark:border-white px-3 py-2 text-sm font-semibold text-black dark:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section
        className="mx-auto max-w-7xl bg-gray-50 dark:bg-black  px-2 py-10 md:px-0"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-100 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              assumenda
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  How do I get started?
                </h2>
                <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500 dark:text-gray-100 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi
                  nobis inventore ratione deleniti?
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600 dark:text-gray-100">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#"
              title=""
              className="black font-semibold hover:underline"
            >
              <Link to="/contact">Contact us</Link>
            </a>
          </p>
        </div>
      </section>
      {/* NewsLetter */}
      <div
        className="mx-auto my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-black dark:text-white ">
              Sign up for our weekly newsletter
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                Trusted by over 100,000+ businesses and individuals
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    4.8/5 . 3420 Reviews
                  </span>
                </span>
              </div>
            </div>
            <form className="mt-6">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 dark:border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <button
                  type="button"
                  className="w-full rounded-md bg-black dark:bg-white  px-3 py-2 text-sm font-semibold text-white dark:text-black  shadow-sm hover:bg-black/80 dark:hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white hover:scale-110 hover:bg-[#333] ease-in-out transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-600 dark:text-gray-100">
                By signing up, you agree to our terms of service and privacy
                policy.
              </span>
            </p>
          </div>
          <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <img
              className="h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Newsletter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
