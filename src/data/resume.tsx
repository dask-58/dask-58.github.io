import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhruv Koli",
  initials: "DK",
  url: "https://dask-58.github.io",
  location: "Hubli, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "20 year old CS major",
  summary:
    "I enjoy playing video games, sleeping, and competing in online algorithmic and heuristic contests. When I’m not doing any of those, I’m either eating [ 🍕 ] or playing or watching football [ ❤️💙 ]. I attend college classes during the day, though they’re not activities I choose for fun.",
  avatarUrl: "/me.jpeg",
  skills: [
    "C/C++",
    "Java",
    "Python",
    "Next.js",
    "Typescript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "REST API's",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "googldhruv@gmail.com",
    tel: "+123456789",
    social: {
      X: {
        name: "X",
        url: "https://x.com/dask_58",
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dask-58",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dhruvkoli",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/dask_58",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {

    }
  ],
  education: [
    {
      school: "Indian Institute of Information Technology, Dharwad",
      href: "https://iiitdwd.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/iiit-2.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Hukum",
      href: "https://hukum-rose.vercel.app",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description:
        "An attendance management system that enables teachers and students to record and get detailed attendance-analysis by capturing column-wise photos for classes of up to 100 students achieving over 95% face-recognition accuracy and 90% detection accuracy.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Python Flask",
        "OpenCV",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://hukum-rose.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hukum.png",
      video: "",
    },
    {
      title: "rstranslate",
      href: "https://github.com/dask-58/rstranslate",
      dates: "May 2025",
      active: true,
      description:
        "Topcoder project submission: Built a fast and simple CLI tool in Rust that translates text between any languages using the Google Translate API.",
      technologies: [
        "Rust",
        "Google Translate API",
        "Serde",
        "Reqwest",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/dask-58/rstranslate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rstranslate.jpg",
      video: "",
    },
    {
      title: "FTP Server",
      href: "https://github.com/dask-58/ftp",
      dates: "January 2025",
      active: false,
      description:
        "A File Transfer Protocol (FTP) web application built with Express.js and basic-ftp. This project provides RESTful APIs for login, logout, upload, list, delete, and rename operations. A tailored version of this app was temporarily deployed as the college website’s file-management backend.",
      technologies: [
        "Express.js",
        "JavaScript",
        "basic-ftp",
        "Node.js",
        "REST API"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/dask-58/ftp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ftp.png",
      video: "",
    },
    {
      title: "Elon Money",
      href: "https://elonmoney.vercel.app",
      dates: "July 2024",
      active: true,
      description:
        "A playful Elon Musk money-spending simulator built with Next.js and TypeScript. Users can buy whimsical items and see just how far Elon’s fortune can stretch—all styled with Tailwind CSS.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://elonmoney.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/elonmoney.png",
      video: "",
    }
  ],
  cpAchievements: [
  {
    title: "Meta Hacker Cup",
    dates: "2023",
    location: "Online",
    description:
      "Ranked 1481st in Round 1 and 3537th in Round 2 - Human Tracks.",
    image: "./Meta.svg",
    links: [
      {
        title: "Dhruv Koli - Hacker Cup",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/1246647479625681",
      },
    ],
  },
  {
    title: "Codeforces",
    dates: "2023 - Present",
    location: "Online",
    description:
      "Rated 1491 (Specialist). Solved 750+ problems.",
    image: "./codeforces.svg",
    links: [
      {
        title: "eruditeO_o",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://codeforces.com/profile/eruditeO_o",
      },
    ],
  },
  {
    title: "CodeChef",
    dates: "2023 - Present",
    location: "Online",
    description:
      "Rated 4 ★ (1800 + ) on CodeChef. Solved over 500 problems.",
    image: "/codechef.png",
    links: [
      {
        title: "Profile",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://www.codechef.com/users/your_username_here",
      },
    ],
  },
  {
    title: "LeetCode",
    dates: "2023 - Present",
    location: "Online",
    description:
      "Solved 400+ problems. Rated 1870+ (Knight) on LeetCode contests.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    links: [
      {
        title: "Profile",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://leetcode.com/your_username_here",
      },
    ],
  },
],
} as const;
