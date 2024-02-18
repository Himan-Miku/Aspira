"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Axios from "axios";

const animatedComponents = makeAnimated();

export default function Assess() {
  const questions_1 = [
    {
      question: "What subjects do you enjoy the most in school?",
      options: [
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Sciences (History, Geography)",
        "English Literature",
        "Arts (Drawing, Painting, Music)",
        "Computer Science",
      ],
    },
    {
      question: "Which extracurricular activities do you participate in?",
      options: [
        "Sports (Football, Basketball, Swimming)",
        "Debate Club or Public Speaking",
        "Drama or Theater",
        "Music Band or Choir",
        "Science Club or Robotics",
        "Art Club or Creative Writing",
      ],
    },
    {
      question: "What are your hobbies or interests outside of academics?",
      options: [
        "Reading Fiction or Non-fiction Books",
        "Playing Video Games",
        "Cooking or Baking",
        "Gardening or Nature Exploration",
        "Photography or Videography",
        "Volunteering or Community Service",
      ],
    },
  ];

  const questions_2 = [
    {
      question: "What skills do you feel confident in?",
      options: [
        "Problem-solving",
        "Critical Thinking",
        "Communication (Verbal and Written)",
        "Creativity",
        "Organization and Time Management",
        "Technical Skills (Programming, Graphic Design)",
      ],
    },
    {
      question: "Are there any particular tasks or projects you excel at?",
      options: [
        "Planning and Organizing Events or Activities",
        "Analyzing Data or Information",
        "Designing or Creating Visual Artwork",
        "Writing Essays or Articles",
        "Solving Math Problems or Puzzles",
        "Building or Fixing Things (DIY Projects)",
      ],
    },
    {
      question: "Do you prefer working independently or in a team?",
      options: [
        "Independently",
        "Mostly independently, but I can collaborate when needed",
        "Equally comfortable in both settings",
        "Prefer working in a team, but can work independently if required",
        "Prefer working in a team at all times",
      ],
    },
  ];

  const questions_3 = [
    {
      question: "How do you prefer to approach problem-solving?",
      options: [
        "Methodically analyzing the problem step by step",
        "Brainstorming multiple solutions and experimenting",
        "Seeking guidance from others or collaborating with a team",
        "Trusting my intuition and taking risks",
        "Applying logical reasoning and critical thinking",
      ],
    },
    {
      question: "Are you more inclined towards creative or analytical tasks?",
      options: [
        "Creative tasks that involve imagination and innovation",
        "Analytical tasks that require logical thinking and data analysis",
        "Enjoy a balance of both creative and analytical tasks",
      ],
    },
    {
      question: "What work environment do you thrive in?",
      options: [
        "Fast-paced and dynamic environment with frequent challenges",
        "Structured and organized environment with clear guidelines",
        "Collaborative environment where teamwork is encouraged",
        "Flexible environment that allows for autonomy and creativity",
        "Supportive environment with mentorship and guidance",
      ],
    },
  ];

  const questions_4 = [
    {
      question: "What are your long-term career goals?",
      options: [
        "Pursuing a career that aligns with my passions and interests",
        "Seeking financial stability and career growth opportunities",
        "Making a positive impact on society or the environment through my work",
        "Achieving personal fulfillment and work-life balance in my career",
        "Continuously learning and adapting to new challenges in my career journey",
      ],
    },
    {
      question:
        "Are there any specific industries or fields that interest you?",
      options: [
        "Technology and Innovation",
        "Healthcare and Medicine",
        "Business and Entrepreneurship",
        "Arts and Entertainment",
        "Education and Research",
        "Social Services and Advocacy",
      ],
    },
    {
      question:
        "Do you have any role models or professionals whose careers you admire?",
      options: [
        "Elon Musk (Entrepreneur and Innovator)",
        "Malala Yousafzai (Activist and Nobel Laureate)",
        "Steve Jobs (Visionary and Founder of Apple Inc.)",
        "Oprah Winfrey (Media Mogul and Philanthropist)",
        "Serena Williams (Professional Athlete and Philanthropist)",
        "Neil deGrasse Tyson (Astrophysicist and Science Communicator)",
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  // Function to handle checkbox click event
  const handleCheckboxClick = (option: string) => {
    // Check if the option is already selected
    if (selectedOptions.includes(option)) {
      // If selected, remove it from the array
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If not selected, add it to the array
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  console.log(selectedOptions);

  return (
    <div className="flex justify-center items-center m-2 p-1">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="flex justify-evenly items-center gap-2">
          <TabsTrigger value="level-1">Level 1</TabsTrigger>
          <TabsTrigger value="level-2">Level 2</TabsTrigger>
          <TabsTrigger value="level-3">Level 3</TabsTrigger>
          <TabsTrigger value="level-4">Level 4</TabsTrigger>
        </TabsList>
        <TabsContent value="level-1">
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_1[0].question}</p>
            </div>
            <div className="options">
              {questions_1[0].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_1[1].question}</p>
            </div>
            <div className="options">
              {questions_1[1].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_1[2].question}</p>
            </div>
            <div className="options">
              {questions_1[2].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="level-2">
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_2[0].question}</p>
            </div>
            <div className="options">
              {questions_2[0].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_2[1].question}</p>
            </div>
            <div className="options">
              {questions_2[1].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_2[2].question}</p>
            </div>
            <div className="options">
              {questions_2[2].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="level-3">
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_3[0].question}</p>
            </div>
            <div className="options">
              {questions_3[0].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_3[1].question}</p>
            </div>
            <div className="options">
              {questions_3[1].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_3[2].question}</p>
            </div>
            <div className="options">
              {questions_3[2].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="level-4">
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_4[0].question}</p>
            </div>
            <div className="options">
              {questions_4[0].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_4[1].question}</p>
            </div>
            <div className="options">
              {questions_4[1].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-green-400">
            <div className="question">
              <p>{questions_4[2].question}</p>
            </div>
            <div className="options">
              {questions_4[2].options.map((q, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(q)} // Check if the option is selected
                      onChange={() => handleCheckboxClick(q)} // Call the handleCheckboxClick function on change
                      className="rounded-xl m-2 cursor-pointer"
                    />
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <button
        onClick={async () => {
          const res = await Axios.post(
            "http://localhost:4000/api/getCareerCards",
            {
              payload: JSON.stringify(selectedOptions),
            },
            { withCredentials: true }
          );
          const data = await res?.data;
          console.log(data);
        }}
      >
        Send
      </button>
    </div>
  );
}
