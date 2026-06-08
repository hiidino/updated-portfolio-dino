"use client";

import {
  IconCode,
  IconServer,
  IconLayersIntersect,
  IconPalette,
  IconSeo,
  IconChartBar,
  IconDatabase,
  IconCloud,
  IconShieldCheck,
  IconGitBranch,
  IconBolt,
  IconApi,
} from "@tabler/icons-react";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: IconCode,
    title: "Frontend Development",
    description: "Pixel-perfect UIs with React, Next.js & TypeScript. Fast, accessible, and responsive across all devices.",
    accent: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: IconServer,
    title: "Backend Development",
    description: "Scalable REST APIs and server architecture with Node.js, Express, and cloud-native deployments.",
    accent: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: IconLayersIntersect,
    title: "Full Stack Engineering",
    description: "End-to-end product ownership — from database schema to shipped UI — with the MERN stack.",
    accent: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: IconPalette,
    title: "UI / UX Design",
    description: "Intuitive, modern interfaces that convert. Wireframes, prototypes, and production-ready components.",
    accent: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-400",
  },
  {
    icon: IconSeo,
    title: "SEO Optimisation",
    description: "Technical SEO, Core Web Vitals tuning, and on-page strategy to drive organic growth.",
    accent: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: IconChartBar,
    title: "Digital Marketing",
    description: "Google Ads, Analytics, and conversion-focused campaigns that move the needle on growth.",
    accent: "from-orange-500/20 to-red-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: IconDatabase,
    title: "Database Architecture",
    description: "Schema design, query optimisation, and data modelling for MongoDB, PostgreSQL, and MySQL.",
    accent: "from-sky-500/20 to-blue-500/10",
    iconColor: "text-sky-400",
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    description: "AWS-certified infrastructure setup, CI/CD pipelines, containerisation with Docker, and production deployments.",
    accent: "from-indigo-500/20 to-blue-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: IconShieldCheck,
    title: "Auth & Security",
    description: "Secure authentication flows using JWT, OAuth 2.0, and session management with rate limiting and input validation.",
    accent: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: IconGitBranch,
    title: "System Design",
    description: "Architecting scalable, maintainable systems — microservices, load balancing, caching strategies, and API gateways.",
    accent: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: IconBolt,
    title: "Performance Engineering",
    description: "Lighthouse audits, bundle optimisation, lazy loading, and runtime profiling for sub-second load times.",
    accent: "from-yellow-500/20 to-amber-500/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: IconApi,
    title: "API Design & Integration",
    description: "RESTful and GraphQL API design, third-party integrations, webhooks, and robust error-handling patterns.",
    accent: "from-teal-500/20 to-cyan-500/10",
    iconColor: "text-teal-400",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // One observer for the whole section instead of 12 individual ones
    const obs = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-8 lg:px-16 pt-12 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6
                         transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]
                         cursor-default overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <Icon className={`h-6 w-6 ${service.iconColor}`} stroke={1.5} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
