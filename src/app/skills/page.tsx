"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Heading from "@/components/ui/Heading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Javascript / Typescript", "Java", "Python", "Dart"],
    color: "from-purple-200 to-pink-200",
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap CSS",
      "React",
      "Redux",
      "Zustand",
      "Tanstack (React Query, Form, Table)",
      "Shadcn",
      "Framer Motion",
      "Fabric.js",
    ],
    color: "from-blue-200 to-teal-200",
  },
  {
    title: "Backend and Frameworks",
    skills: [
      "NextJS",
      "NestJS",
      "NodeJS (Express, Fastify)",
      "Django",
      "Socket.io",
      "ERPNext",
    ],
    color: "from-green-200 to-lime-200",
  },
  {
    title: "Databases and ORMs",
    skills: [
      "PostgreSQL (NeonDB)",
      "MongoDB",
      "MsSQL (Stored Procedures)",
      "MySQL",
      "SQLite",
      "Prisma ORM",
      "Drizzle ORM",
    ],
    color: "from-yellow-200 to-orange-200",
  },
  {
    title: "API and Integration",
    skills: ["REST APIs", "GraphQL", "Postman", "Webhooks"],
    color: "from-red-200 to-pink-200",
  },
  {
    title: "Mobile",
    skills: [
      "React Native",
      "Expo (EAS, Notifications)",
      "Nativewind",
      "Flutter (BLoC, Hive, RxDart, Dio)",
      "Firebase / Supabase",
    ],
    color: "from-indigo-200 to-purple-200",
  },
  {
    title: "Cloud and Infrastructure",
    skills: [
      "AWS (Control Tower, EC2 - autoscaling - custom AMI - Load Balancers, Elasticache, DynamoDB, Lambda, Cloudfront, RDS)",
      "GCP",
      "Cloudflare (R2, DNS, Zero Trust, Workers)",
      "Coolify",
      "Dokploy",
      "Nginx",
      "Apache",
      "Linux Server",
      "Windows Server",
      "Vercel (Workflows, Environments)",
      "Docker",
    ],
    color: "from-cyan-200 to-blue-200",
  },
  {
    title: "DevOps and CI/CD",
    skills: [
      "Jenkins",
      "Terraform",
      "Git & Github (Actions)",
      "Nexus Repository (Internal Packages)",
      "Docker Hub",
      "Secrets Management (Infisical, Doppler)",
    ],
    color: "from-teal-200 to-emerald-200",
  },
  {
    title: "CMS",
    skills: ["Payload CMS", "Strapi CMS"],
    color: "from-fuchsia-200 to-purple-200",
  },
  {
    title: "Analytics and Marketing",
    skills: [
      "PostHog",
      "Segment",
      "Customer Data Platforms",
      "Google Tag Manager",
      "Meta Conversions API",
      "Google Ads Conversion API",
      "Customer.io",
      "Resend",
      "Loops",
      "Mailchimp",
      "Polar",
    ],
    color: "from-emerald-200 to-teal-200",
  },
  {
    title: "Tooling and Automation",
    skills: [
      "Monorepos (Turborepo)",
      "npm Workspaces",
      "pnpm Catalogs",
      "N8N",
      "Google Workspace",
      "Chatwoot",
    ],
    color: "from-amber-200 to-orange-200",
  },
  {
    title: "Auth",
    skills: ["Better Auth", "Clerk", "JWT"],
    color: "from-rose-200 to-red-200",
  },
  {
    title: "AI & Development",
    skills: [
      "Openrouter",
      "FalAi",
      "Langchain",
      "Langsmith (AI Observability, Prompt Management)",
      "ElevenLabs API",
      "Pinecone",
      "RAG",
      "LoRA Finetuning",
    ],
    color: "from-violet-200 to-fuchsia-200",
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
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
