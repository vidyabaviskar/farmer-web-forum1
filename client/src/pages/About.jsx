import React from "react";
import { MdLanguage } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdMobileFriendly } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="w-[200px] min-w-[200px] h-[60px] mt-[10px] text-white px-4 py-2 md:w-64 md:mx-auto uppercase title-font font-semibold bg-green-900 rounded-full text-[19px] hover:bg-green-100 hover:text-green-900 transition-all flex items-center justify-center">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Connecting Farmers, Breaking Language Barriers, and Cultivating
              Knowledge.
            </p>
            <p className="mt-4 max-w-6xl text-lg text-gray-500 lg:mx-auto ">
              Farmer Web Forum is an online platform built to help farmers
              connect, share experiences, and find solutions to their
              agricultural problems. With support for regional languages and
              built-in AI moderation, it creates a safe, inclusive space where
              farmers can post questions, discuss challenges, and learn from one
              another—without worrying about language or online safety. Designed
              with simplicity and purpose, this forum bridges the digital divide
              in rural communities and brings farmers together, one post at a
              time.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                    <MdLanguage className="text-4xl" />
                  </div>
                  
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Multilingual Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Farmers can post and read in their local languages with automatic translation.
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                    <GiArtificialIntelligence className="text-4xl" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    AI Content Moderation
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Detects and filters out spam, abuse, or irrelevant content to keep the forum safe.
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                    <MdMobileFriendly className="text-4xl" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    User-Friendly Forum
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Simple interface for asking questions, replying, and browsing farming discussions.
                </dd>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                    <RiLockPasswordLine className="text-4xl" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Secure Authentication
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Safe login and registration system with protected user data.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
