const config = {
  title: "Sachin Rana | Front-End Developer",
  description: {
    long: "Explore the portfolio of Sachin, a front-end developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Sachin, a front-end developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Sachin",
    "portfolio",
    "front-end developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Sachin Rana",
  email: "sachinrana2304@gmail.com",
  site: "https://sachinrana.site",

  // for github stars button
  githubUsername: "sachin23rana",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/sachin2304r/",
    instagram: "https://www.instagram.com/sachinrana",
    facebook: "https://www.facebook.com/sachinrana/",
    github: "https://github.com/sachin23rana",
  },
};
export { config };
