"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS,Azure</li>
        <li>Devops</li>
        {/* <li>PostgreSQL</li>
        <li>Sequelize</li> */}
        <li>Linux</li>
        <li>Git/GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> <p>2016-2019 </p> BACHELOR OF COMPUTER Application (BCA) | Ime college (Chaudhary Charan Singh University | meerut</li>
        <li> <p>2015-2016</p>Senior Secondary | CBSE | Delhi</li>
        <li> <p>2014-2015</p>Higher Secondary | CBSE | Delhi</li>
      </ul>
    ),
  },
  {
    title: "Employment History",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><p>2020-2022</p> Cloud engineer | Fourdatr Enterprise Pvt. Ltd. | Ashok nagar noida</li>
        <li><p>2022-2023</p>AWS Engineer | Infinitehub | delhi</li>
        <li><p>2024-Present</p>AWS-consultant | Croma campus pvt ltd | noida sector 16</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Akash Tiwari - Founder, Shayam Traders

          Akash Tiwari, founder of Shayam Traders, has 3 years of experience in AWS and DevOps, driving excellence in laptop sales and purchases.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
