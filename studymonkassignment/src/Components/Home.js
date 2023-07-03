import React from "react";
import LoginComp from "./Login";

const Home = () => {
  return (
    <div className="text-2xl pt-20 text-gray-500 h-full bg-gray-900 space-y-5">
      <section className="hero bg-gray-900 text-white h-[70vh] flex items-center  gap-5 p-5">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src="/seamless.png" alt="Seamless Hiring" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center  px-8">
            <h1 className="text-4xl font-bold mb-6">
              Seamless Hiring for MNCs
            </h1>
            <p className="text-xl mb-6">
              Streamline your recruitment process and find top talent
              efficiently.
            </p>
            <div className="pt-5">
              <a
                href="#"
                className="bg-teal-500 text-white px-6  py-3 rounded-lg font-bold hover:bg-teal-600  "
              >
                <button type="button">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="features py-10 gap-5 p-5 pt-40 md:pt-20">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-10 text-white">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 1"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Efficient Candidate Search
              </h3>
              <p class="text-gray-600">
                Find the right candidates based on location and job roles.
              </p>
            </div>
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 2"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Collaborative Hiring Process
              </h3>
              <p class="text-gray-600">
                Seamlessly collaborate with your team and make informed hiring
                decisions.
              </p>
            </div>
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 3"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Automated Screening
              </h3>
              <p class="text-gray-600">
                Automate the screening process and save time on candidate
                evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="main-content  py-10 gap-5  p-5">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-10 text-center text-white">
            Why Choose Us?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 4"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Advanced Candidate Filtering
              </h3>
              <p class="text-gray-600">
                Efficiently filter candidates based on qualifications,
                experience, and more.
              </p>
            </div>
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 5"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Customizable Hiring Workflows
              </h3>
              <p class="text-gray-600">
                Tailor the hiring process to your company's specific needs and
                requirements.
              </p>
            </div>
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 6"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Integrated Interview Scheduling
              </h3>
              <p class="text-gray-600">
                Effortlessly schedule interviews with candidates and sync with
                your calendar.
              </p>
            </div>
            <div class="feature">
              <img
                src="/searchperson.png"
                alt="Feature 7"
                class="w-[50%] m-auto mb-4"
              />
              <h3 class="text-white text-xl font-bold mb-2">
                Comprehensive Analytics
              </h3>
              <p class="text-gray-600">
                Access detailed insights and analytics to track recruitment
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class=" py-4 text-center md:text-2xl  text-lg">
        <p class="text-white">
          &copy; 2023 TalentConnect360. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
