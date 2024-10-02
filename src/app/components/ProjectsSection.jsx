"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AWS EC2 WordPress Hosting",
    description: "Deployed and managed WordPress sites on AWS EC2 Linux instances. Configured servers for performance and security. Established and maintained databases. Implemented backup solutions and resolved issues promptly.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 2,
    title: "eMart Website Hosting and Deployment",
    description: "Hosted and deployed eMart website on AWS EC2 instance. Configured server settings and established database connections. Ensured smooth deployment and ongoing management of the website. Implemented security measures and backup solutions for data protection. Resolved any technical issues promptly to maintain website uptime and functionality.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/mrnavi16/obstacledetectingandavoidingcar",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 3,
    title: "Real-Time Project Hosting with AWS Services",
    description: "Successfully deployed and hosted a live domain website using AWS Route 53 for domain management. Utilized AWS S3 for scalable storage and content delivery. Configured DNS settings for seamless routing and reliability. Implemented cloud-based solutions to ensure high availability and performance. Demonstrated proficiency in AWS services for real-world project deployment and management.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/mrnavi16/Computer-Vision-Virtual-Painter",
    previewUrl: "https://github.com/mrnavi16/Computer-Vision-Virtual-Painter",
  },
  {
    id: 4,
    title: "Website Deployment Project: www.aws.tk",
    description: "Successfully deployed and managed www.aws.tk using a combination of AWS services, including EC2, S3, RDS Database, and Route 53. Utilized EC2 instances for hosting the website, S3 for scalable storage and content delivery, and RDS for managing the database. Configured DNS settings and managed domain routing using Route 53. Demonstrated proficiency in leveraging multiple AWS services for a comprehensive website deployment solution. Ensured high availability, scalability, and performance of the deployed website through effective utilization of AWS resources.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 5,
    title: "Razorpay Website Clone",
    description: "Secure Payment Processing, User-Friendly interface, Responsive Design, Seamless integration, Animations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 6,
    title: "Weather-App",
    description: "A Weather forcasting Website that takes Location from the users and tells the weather of that location. It is also able to find the weather forcast of any location thats given by the user",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
