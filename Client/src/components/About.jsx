import { useEffect, useState } from "react";
import { MapPin, ChevronsLeft, ChevronsRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Sadie Lewis",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Thilde Olaisen",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
    position: "Marketing Lead",
  },
  {
    name: "Deepika Ramesh",
    image:
      "https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",
    position: "Front-end developer",
  },
  {
    name: "Jordi Santiago",
    image:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: "Front-end developer",
  },
  {
    name: "Kerim Fahri",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Back-end developer",
  },
];

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [userIndex, setUserIndex] = useState(0);

  const nextUser = () => {
    setUserIndex((prevIndex) =>
      prevIndex === users.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevUser = () => {
    setUserIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div
          className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="max-w-max rounded-full border bg-gray-50 dark:bg-black p-1 px-3 ">
            <p className="text-xs font-semibold leading-normal md:text-sm dark:text-white">
              About the company
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10 dark:text-gray-100">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 dark:text-gray-50 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>
        <div
          className="w-full space-y-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        {/* locations */}
        <div
          className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          {locations.map((location) => (
            <div
              key={location.title}
              className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
            >
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900 dark:text-gray-200 ">
                {location.title}
              </p>
              <p className="w-full text-base text-gray-700 dark:text-gray-100">
                {location.timings}
              </p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
        {/* greetings */}
        <div
          className="mt-16 flex items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 dark:text-gray-900 p-1 px-3 hover:scale-110  ease-in-out transition-all duration-300">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Join Us &rarr;
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-50 md:text-4xl">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 dark:text-gray-100 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <div></div>
          </div>
        </div>
        {/* Team */}
        <div
          className="flex items-center justify-between py-12 pb-20"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <button type="button" onClick={prevUser}>
            <ChevronsLeft className="h-6 w-6 text-gray-600 dark:text-gray-100" />
          </button>
          <div className="flex flex-col items-center gap-4">
            <img
              src={users[userIndex].image}
              alt={users[userIndex].name}
              height={400}
              width={600}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="text-center text-xl font-semibold text-gray-900 dark:text-gray-200">
                {users[userIndex].name}
              </p>
              <p className="text-center pb-6 text-sm font-semibold text-gray-500 dark:text-gray-100">
                {users[userIndex].position}
              </p>
            </div>
          </div>
          <button type="button" onClick={nextUser}>
            <ChevronsRight className="h-6 w-6 text-gray-600 dark:text-gray-100" />
          </button>
        </div>
        {/* Hiring Banner */}
        <div
          className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">
              Join our team &rarr;
            </p>
            <p className="text-3xl font-bold md:text-4xl">
              We&apos;re just getting started
            </p>
            <p className="text-base text-gray-600 dark:text-gray-50 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <button
              type="button"
              className="bg-black dark:bg-white px-3 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white rounded-xl hover:scale-110 hover:bg-[#333] ease-in-out transition-all duration-300"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  );
}

export default About;
