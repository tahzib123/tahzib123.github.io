const projects = [
  {
    title: "Zoo Administration App",
    videoSrc: "/images/zooproject.mp4",
    description: `Group project for a Database Design course simulating zoo operations.
The app includes a customer-facing website and an admin portal with role-based access.`,
    techStack: ["NodeJS", "MySQL", "HTML/CSS"],
    links: [
      {
        label: "Github",
        href: "https://github.com/migsbeast/ZooDB",
      },
    ],
  },
  {
    title: "AI Database Chatbot",
    videoSrc: "/images/aichatbot.mp4",
    description: `Chat with a sample movie database. The AI replies with the SQL query it uses.`,
    techStack: ["React", "NextJS", "MySQL", "Langchain"],
    links: [
      {
        label: "Demo",
        href: "https://langchain-eta-weld.vercel.app",
      },
      {
        label: "Github",
        href: "https://github.com/Tahzib1/langchain",
      },
    ],
  },
  {
    title: "Holiday Gift Finder",
    videoSrc: "/images/g4gvideo.mp4",
    description: `Gift recommendation website powered by Contentful CMS and optimized for SEO, performance, and offline usage.`,
    techStack: ["React", "Gatsby", "GraphQL", "Contentful"],
    links: [
      {
        label: "Demo",
        href: "https://vigilant-ritchie-2d2c54.netlify.app/",
      },
      {
        label: "Github",
        href: "https://github.com/tahzib123/GatsbySite",
      },
    ],
  },
  {
    title: "Community Center Website",
    imageSrc: "/images/community-center-site.png",
    description: `Built for a nonprofit community center. Features event calendars, galleries, and more, all using WordPress and Elementor.`,
    techStack: ["Wordpress", "MySQL", "Elementor"],
    links: [
      {
        label: "Demo",
        href: "https://cffusa.org/",
      },
    ],
  },
];

export default projects;
