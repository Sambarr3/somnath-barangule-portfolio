import "./Qualification.css";
import React, { useState } from "react";

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      title: "Bachelor of Computer App.",
      location: "Solapur - University",
      period: "2021 - 2024",
    },
    {
      title: "12th (HSC)",
      location: "Barshi - BPSC Collage",
      period: "2021",
    },
  ];

  const experienceData = [
    {
      title: "Cyber Success",
      location: "Pune - Institute",
      period: "June 2024 - Feb 2025",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-400 section">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 qualification reveal-up">
          Qualification
        </h2>
        <p className="text-zinc-400 reveal-up">My personal journey</p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-8 mb-12 reveal-up">
        <button
          className={`flex items-center gap-2 text-xl font-medium ${
            activeTab === "education" ? "text-sky-400" : "text-zinc-500"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </span>
          Education
        </button>

        <button
          className={`flex items-center gap-2 text-xl font-medium ${
            activeTab === "experience" ? "text-sky-400" : "text-zinc-500"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </span>
          Experience
        </button>
      </div>

      {/* Timeline for Desktop */}
      <div className="hidden md:block relative reveal-up">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>

        {activeTab === "education" && (
          <div className="grid grid-cols-2 gap-6">
            {educationData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Left side items (even indices) */}
                {index % 2 === 0 && (
                  <div className="text-right pr-8 mb-16">
                    <h3 className="text-xl font-medium text-sky-500">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400">{item.location}</p>
                    <div className="flex items-center mt-1 text-zinc-500 text-sm justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {item.period}
                    </div>
                  </div>
                )}

                {/* Empty column for right side when item is on left */}
                {index % 2 === 0 && <div></div>}

                {/* Empty column for left side when item is on right */}
                {index % 2 === 1 && <div></div>}

                {/* Right side items (odd indices) */}
                {index % 2 === 1 && (
                  <div className="pl-8 mb-16">
                    <h3 className="text-xl font-medium text-sky-500">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400">{item.location}</p>
                    <div className="flex items-center mt-1 text-zinc-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {item.period}
                    </div>
                  </div>
                )}

                {/* Timeline dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400"
                  style={{ top: `${index * 158 + 12}px` }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        )}

        {activeTab === "experience" && (
          <div className="grid grid-cols-2 gap-6">
            {experienceData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Empty column for left side when item is on right (even indices for experience) */}
                {index % 2 === 0 && <div></div>}

                {/* Right side items (even indices for experience) */}
                {index % 2 === 0 && (
                  <div className="pl-8 mb-16">
                    <h3 className="text-xl font-medium text-sky-500">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400">{item.location}</p>
                    <div className="flex items-center mt-1 text-zinc-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {item.period}
                    </div>
                  </div>
                )}

                {/* Left side items (odd indices for experience) */}
                {index % 2 === 1 && (
                  <div className="text-right pr-8 mb-16">
                    <h3 className="text-xl font-medium text-sky-500">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400">{item.location}</p>
                    <div className="flex items-center mt-1 text-zinc-500 text-sm justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {item.period}
                    </div>
                  </div>
                )}

                {/* Empty column for right side when item is on left */}
                {index % 2 === 1 && <div></div>}

                {/* Timeline dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400"
                  style={{ top: `${index * 158 + 12}px` }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Timeline for Mobile */}
      <div className="md:hidden relative reveal-up">
        {/* Left side line for mobile */}
        <div className="absolute left-4 top-0 w-0.5 bg-gray-600 h-full"></div>

        {activeTab === "education" && (
          <div>
            {educationData.map((item, index) => (
              <div key={index} className="relative flex mb-16">
                {/* Timeline dot */}
                <div className="absolute left-4 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400"></div>

                {/* Content (right side in mobile) */}
                <div className="ml-10 flex-grow">
                  <h3 className="text-xl font-medium text-sky-500">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400">{item.location}</p>
                  <div className="flex items-center mt-1 text-zinc-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            {experienceData.map((item, index) => (
              <div key={index} className="relative flex mb-16">
                {/* Timeline dot */}
                <div className="absolute left-4 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400"></div>

                {/* Content (right side in mobile) */}
                <div className="ml-10 flex-grow">
                  <h3 className="text-xl font-medium text-sky-500">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400">{item.location}</p>
                  <div className="flex items-center mt-1 text-zinc-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;
