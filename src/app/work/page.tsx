"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";
import { HiArrowUpRight } from "react-icons/hi2";

const workData = [
  {
    year: "'26",
    date: "Jan 2026 – Present",
    title: "Software Engineer",
    company: "Design Instantly",
    location: "Ahmedabad",
    companyLink: "https://designinstantly.com",
    accentColor: "from-rose-500/20 to-pink-500/20",
    dotColor: "bg-rose-400",
    label: "Founder",
    tech: [
      "Next.js",
      "NestJS",
      "Tailwind CSS",
      "shadcn/ui",
      "Turborepo",
      "pnpm",
      "Drizzle ORM",
      "Prisma",
      "Neon DB",
      "MongoDB",
      "AWS",
      "Cloudflare R2",
      "Docker",
      "Jenkins",
      "Terraform",
      "Fabric.js",
      "OpenRouter",
      "Fal.ai",
      "LangChain",
      "LangSmith",
      "ElevenLabs API",
      "Pinecone",
      "Better Auth",
      "Polar",
      "PostHog",
      "n8n",
    ],
    bullets: [
      "Founded and built a design automation platform with AI-powered template generation using Fabric.js, OpenRouter, and Fal.ai",
      "Received Startup Srujan Grant of 2.5L for Design Instantly",
      "Architected a Turborepo monorepo with Next.js frontend and NestJS backend, deployed on AWS with custom AMIs, autoscaling groups, and load balancers",
      "Integrated LangChain + LangSmith for RAG pipelines, prompt management, and AI observability across the platform",
      "Built infrastructure with Terraform, Jenkins CI/CD, Nexus Repository for internal packages, and Docker Hub for private images",
      "Set up Cloudflare R2 for asset storage, Elasticache for queues, and Dokploy/Coolify for self-hosted services",
      "Implemented full marketing and analytics stack including PostHog with CDP and funnels, Customer.io, Resend, Loops, and Mailchimp for lifecycle emails",
      "Integrated Polar for subscriptions, Better Auth for authentication, and Infisical for secrets management",
      "Deployed Ghost CMS and Payload CMS for content, ERPNext for operations, ChatWoot for customer support, and n8n for workflow automation",
      "Managed Google Workspace and all SaaS tooling for the company",
    ],
  },
  {
    year: "'25",
    date: "Jan 2025 – Dec 2025",
    title: "Full Stack Developer",
    company: "Quicko",
    location: "",
    companyLink: "https://quicko.com",
    accentColor: "from-yellow-500/20 to-amber-500/20",
    dotColor: "bg-yellow-400",
    label: "Intern → Full-time",
    tech: [
      "Flutter",
      "Node.js",
      "Java",
      "Spring Boot",
      "Maven",
      "AWS",
      "Jenkins",
      "Terraform",
    ],
    bullets: [
      "Worked with the Income Tax Mobile App team, built Foreign Income, Business & Profession in Save, Tax Relief & Tax Credits, and Loss Adjustment features",
      "Built features for Glyde including Pay, Loss Adjustment, Tax Relief, Personal Assets & Liabilities, Tax Computation, Tax Credits, and B&P in File",
      "Developed Crypto PnL and Tax PnL calculator APIs for income tax computation",
      "Drove major code quality improvements across both mobile and backend systems",
    ],
  },
  {
    year: "'24",
    date: "May 2024 – Aug 2024",
    title: "App Developer Intern",
    company: "Prasad Group of Companies",
    location: "Ahmedabad",
    companyLink: "https://prasadgroup.com",
    accentColor: "from-blue-500/20 to-cyan-500/20",
    dotColor: "bg-blue-400",
    tech: [
      "React Native",
      "Expo",
      "React Query",
      "Zustand",
      "Node.js",
      "Express",
      "JWT",
      "MsSQL",
    ],
    bullets: [
      "Developed cross-platform app using React Native, Expo, Node.js with 40% faster development cycle",
      "Implemented backend with Express, JWT, MSSQL achieving 99.9% uptime for 1000+ daily requests",
      "Created UI for marketing team resulting in 50% boost in data entry efficiency",
      "Built task management system leading to 30% increase in team productivity",
      "Optimized on-premise deployment with 25% faster database queries",
      "Distributed to 50+ users with 100% adoption within 2 weeks",
    ],
  },
  {
    year: "'23",
    date: "Jan 2023 – Jul 2023",
    title: "Web Developer Intern",
    company: "Pandit Deendayal Petroleum University",
    location: "Gandhinagar",
    companyLink: "https://pdpu.ac.in/hr-officer.html",
    accentColor: "from-emerald-500/20 to-green-500/20",
    dotColor: "bg-emerald-400",
    tech: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Django",
      "SQLite",
      "Linux VM",
    ],
    bullets: [
      "Developed web portal using Django, HTML, Bootstrap, JavaScript, AJAX and deployed on private VM",
      "Created user-friendly interface for university employee appraisal with 40% efficiency improvement",
      "Collaborated with HR to tailor solution to workflow needs",
      "Implemented analytics dashboard for real-time performance insights",
      "Optimized system, reducing page load times by 30%",
    ],
  },
  {
    year: "'22",
    date: "Aug 2022 – Jan 2023",
    title: "Instructor",
    company: "CDAC",
    location: "",
    companyLink: "https://cdac.in/",
    accentColor: "from-violet-500/20 to-purple-500/20",
    dotColor: "bg-violet-400",
    label: "Volunteer",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "C/C++",
      "Java",
      "Python",
      "React.js",
    ],
    bullets: [
      "Taught 30+ students in web development, programming basics, and React.js",
      "Created and delivered lesson plans, assignments, and exams",
      "Developed curriculum for web development course",
      "Mentored students in programming basics including C/C++, Java, and Python",
      "Led group projects, including a React.js app for local businesses",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5 max-w-4xl mx-auto">
        <Heading
          heading="Work Experience"
          subHeading="A Journey thus far"
          className="border-b mb-8"
        />

        <div className="flex flex-col gap-6">
          {workData.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
            >
              {/* Subtle gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${work.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Large watermark year */}
              <span className="absolute -top-6 -right-2 font-cal text-[140px] md:text-[180px] leading-none text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none">
                {work.year}
              </span>

              {/* Content */}
              <div className="relative z-10 p-5 md:p-7">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-2 w-2 h-2 rounded-full ${work.dotColor} shrink-0`}
                    />
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-cal text-xl md:text-2xl text-foreground leading-tight">
                          {work.title}
                        </h3>
                        {work.label && (
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground border border-white/10 px-2 py-0.5 rounded-full">
                            {work.label}
                          </span>
                        )}
                      </div>
                      <a
                        href={work.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mt-0.5"
                      >
                        {work.company}
                        {work.location && `, ${work.location}`}
                        <HiArrowUpRight size={12} className="shrink-0" />
                      </a>
                    </div>
                  </div>
                  <time className="text-xs text-muted-foreground/60 font-mono tracking-tight whitespace-nowrap pl-5 sm:pl-0">
                    {work.date}
                  </time>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5 pl-5">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-muted-foreground/80 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pl-5">
                  {work.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground/70 flex items-start gap-3 leading-relaxed"
                    >
                      <span className="text-muted-foreground/30 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/30" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
