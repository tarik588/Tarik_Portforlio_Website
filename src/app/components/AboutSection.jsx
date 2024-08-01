"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "End-User Skills (Front-end)",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>MaterialUI</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Springboot</li>
        <li>Python</li>
        <li>Firebase</li>
        <li>PHP</li>
        <li>NodeJS</li>
      </ul>
    ),
  },
  {
    title: "Apimanagement",
    id: "apimanagement",
    content: (
      <ul className="list-disc pl-2">
        <li>Postman</li>
      </ul>
    ),
  },
  {
    title: "Database",
    id: "database",
    content: (
      <ul className="list-disc pl-2">
        <li>MySQL</li>
        <li>SQLite</li>
        <li>PosgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Word</li>
        <li>Microsoft Excel</li>
        <li>Microsoft Access</li>
        <li>Microsoft Powerpoint</li>
        <li>Google Docs</li>
        <li>Google Sheets</li>
        <li>Google Slides</li>
      </ul>
    ),
  },
  {
    title: "Administrative",
    id: "administrative",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Word</li>
        <li>Microsoft Excel</li>
        <li>Microsoft Access</li>
        <li>Microsoft Powerpoint</li>
        <li>Google Docs</li>
        <li>Google Sheets</li>
        <li>Google Slides</li>
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
      <Image src="" width={500} height={500} alt="My picture" />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi there! I&apos;m Tarik Amraoui, your local Full-Stack Software Engineer based in the New York Metro Area. Below are the technologies I'm proficient in!

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
             Front End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Back End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("apimanagement")}
              active={tab === "apimanagement"}
            >
              {" "}
              API Management{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
              {" "}
              Database{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              {" "}
              Technologies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("administrative")}
              active={tab === "administrative"}
            >
              {" "}
              Administrative Tools{" "}
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
