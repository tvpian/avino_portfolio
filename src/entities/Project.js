// Defines the shape of a Project entity from schema

export const ProjectSchema = {
  title: "Project",
  required: ["title", "description", "category"],
  properties: {
    title: {
      type: "string",
      description: "Project title"
    },
    description: {
      type: "string",
      description: "Project description"
    },
    category: {
      type: "string",
      enum: ["web", "mobile", "design", "backend", "fullstack"],
      description: "Project category"
    },
    technologies: {
      type: "array",
      items: {
        type: "string"
      },
      description: "Technologies used"
    },
    image_url: {
      type: "string",
      description: "Project image URL"
    },
    demo_url: {
      type: "string",
      description: "Live demo URL"
    },
    github_url: {
      type: "string",
      description: "GitHub repository URL"
    },
    featured: {
      type: "boolean",
      default: false,
      description: "Featured project"
    }
  }
};

// Example project (for testing or initial rendering)
export const exampleProject = {
  title: "Responsive Portfolio Website",
  description: "A modern and fully responsive web portfolio for creatives.",
  category: "web",
  technologies: ["React", "Tailwind CSS", "Vite"],
  image_url: "https://example.com/portfolio.png",
  demo_url: "https://example.com/demo",
  github_url: "https://github.com/username/portfolio-project",
  featured: true
};
