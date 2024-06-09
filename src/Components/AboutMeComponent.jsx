import React from "react";

const AboutMeComponent = () => {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 mt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 I'm
                <br className="block sm:hidden" />
                Yogesh Kumar
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Welcome to my project! This is a practice project for my MCA course,
                where I have created a web application using Spring Boot for the backend
                and React.js with Tailwind CSS for the frontend. The project replicates
                some functionalities of Cricbuzz, providing information about cricket
                matches, teams, and player statistics.
              </p>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Notice: This is an unofficial project created by an MCA student
                for practice purposes. It is not affiliated with Cricbuzz.
              </p>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="https://www.linkedin.com/in/yogesh-kumar-83bb891bb/"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-lg shadow-lg"
                src="https://media.licdn.com/dms/image/D5603AQFL_6wDNBHFrw/profile-displayphoto-shrink_400_400/0/1714482035165?e=1723680000&v=beta&t=RKwmQgi5cdbd4Kx4dvU9LrEn7HMb_Q7Gc7e6A_vxU_U"
                alt="Yogesh Kumar"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMeComponent;
