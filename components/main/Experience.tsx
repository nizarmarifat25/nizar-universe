"use client";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

import { workExperiences } from "@/constans";
import { slideInFromLeft } from "@/utils/motion";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20" id="work">
      
      <div className="w-full text-white-600">
        <motion.div
          variants={slideInFromLeft(2)}
          className=" gap-6 text-6xl font-bold text-white  w-auto h-auto"
        >
          <span>
            <span className="block text-center ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Experience
            </span>
          </span>
        </motion.div>

        
        <div className="flex justify-center mt-20">
          <div className="max-w-[900px]">
            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo"></div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
