const projects = [
  {
    title: "AI Debate App",
    imageSrc: "/images/ai-debate-app.png",
    description: `A real-time debate application where users engage in structured arguments with AI opponents across various topics. Features distinct AI personas with unique personalities and debate styles, powered by natural language processing for coherent arguments and counterarguments.`,
    techStack: ["React", "Django", "OpenAI", "Websockets"],
    links: [
      {
        label: "Demo",
        href: "http://ec2-98-91-200-9.compute-1.amazonaws.com/",
      },
    ],
  },
  {
    title: "Zoo Administration App",
    videoSrc: "/images/zooproject.mp4",
    description: `Group project for a Database Design course simulating zoo operations.
The app includes a customer-facing website and an admin portal with role-based access. The app also contains lots of data visualizations to get better insights into how the zoo is doing.`,
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
    description: `Have a chat with a database filled with movies and actors. Query the data using natural language and the LLM will respond using the data from the database. The LLM will also respond with the SQL query it used to form the response and can perform actions such as retrieving data from tables, creating data, or updating data.`,
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
    description: `Gift recommendation website powered by Contentful CMS and optimized for SEO, performance, and offline usage. This site uses a user friendly CMS to add new products, and uses graphql to easily query data from the CMS. Other features include, lazy loading of images, sorting, filtering, and categories.`,
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
    description: `Website built for a local nonprofit community center to showcase its amenties, events, and media. Features event calendars, image/video galleries, and more, all using WordPress and Elementor for an easy to use admin experience.`,
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
