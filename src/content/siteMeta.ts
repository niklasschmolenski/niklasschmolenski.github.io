export interface SiteMeta {
  siteUrl: string;
  title: string;
  description: string;
  ogImage: string;
  author: string;
  locale: string;
  social: {
    twitterSite: string;
    twitterCreator: string;
    github: string;
    linkedin: string;
  };
}

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
}

export const siteMeta: SiteMeta = {
  siteUrl: "https://niklasschmolenski.github.io",
  title: "Niklas Schmolenski",
  description:
    "Computer science student at the Technical University of Berlin, with previous internships at Adobe and Fraunhofer HHI.",
  ogImage: "/og-image.svg",
  author: "Niklas Schmolenski",
  locale: "en_US",
  social: {
    twitterSite: "@niklasschmo",
    twitterCreator: "@niklasschmo",
    github: "https://github.com/aski02",
    linkedin: "https://linkedin.com/in/niklas-schmolenski",
  },
};

export const siteJsonLd: JsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://niklasschmolenski.github.io/#person",
      name: "Niklas Schmolenski",
      url: "https://niklasschmolenski.github.io/",
      jobTitle: "Machine Learning Engineer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Technical University of Berlin",
      },
      sameAs: [
        "https://linkedin.com/in/niklas-schmolenski",
        "https://github.com/aski02",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://niklasschmolenski.github.io/#website",
      name: "Niklas Schmolenski",
      url: "https://niklasschmolenski.github.io/",
      inLanguage: "en",
      publisher: { "@id": "https://niklasschmolenski.github.io/#person" },
    },
    {
      "@type": "CreativeWork",
      "@id": "https://niklasschmolenski.github.io/#cvchecked",
      name: "cvchecked.com",
      url: "https://cvchecked.com",
      description:
        "AI-assisted resume checker with ATS-focused feedback and improvement suggestions.",
      creator: { "@id": "https://niklasschmolenski.github.io/#person" },
      isPartOf: { "@id": "https://niklasschmolenski.github.io/#website" },
    },
  ],
};
