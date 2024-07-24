"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Heading from "@/components/ui/Heading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "PHP"],
    color: "from-purple-200 to-pink-200",
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS (Bootstrap, Tailwind)",
      "React",
      "Router",
      "Redux",
      "Zustand",
      "React Query",
    ],
    color: "from-blue-200 to-teal-200",
  },
  {
    title: "Backend",
    skills: ["Node.js (Express)", "Django", "Flask", "Socket.io"],
    color: "from-green-200 to-lime-200",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MS SQL", "SQLite", "PostgreSQL", "MongoDB"],
    color: "from-yellow-200 to-orange-200",
  },
  {
    title: "API",
    skills: ["REST", "SOAP", "GraphQL"],
    color: "from-red-200 to-pink-200",
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo"],
    color: "from-indigo-200 to-purple-200",
  },
  {
    title: "DevOps & Cloud",
    skills: ["Git", "GitHub", "GitHub Actions", "Docker", "AWS", "GCP"],
    color: "from-cyan-200 to-blue-200",
  },
  {
    title: "CMS & Frameworks",
    skills: ["Strapi", "Ghost", "Next.js"],
    color: "from-fuchsia-200 to-purple-200",
  },
  {
    title: "Other",
    skills: ["Linux", "Nginx", "Apache", "Postman"],
    color: "from-amber-200 to-orange-200",
  },
];

const SkillsPage = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5">
        <Heading
          heading="Skills"
          subHeading="In the Arsenal"
          className="border-b mb-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${category.color} border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-sm overflow-hidden`}
              >
                <CardHeader className="bg-black/5 backdrop-blur-sm">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-black/10 text-gray-800 border-none hover:bg-black/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
