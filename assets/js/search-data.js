// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-awards",
          title: "awards",
          description: "A chronological record of received awards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My peer-reviewed publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks-amp-tutorials",
          title: "talks&amp;tutorials",
          description: "Invited talks and tutorials at conferences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching activities and courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-professional-service",
          title: "professional service",
          description: "Academic service and reviewing activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/professional-service/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub profile and research code repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Recent updates on awards, publications, and academic activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-started-a-visiting-research-stay-at-the-department-of-computer-science-university-of-oxford-through-july-2025",
          title: 'Started a visiting research stay at the Department of Computer Science, University of...',
          description: "",
          section: "News",},{id: "news-started-a-visiting-research-stay-at-the-institut-für-informatik-humboldt-universität-zu-berlin-through-may-2026",
          title: 'Started a visiting research stay at the Institut für Informatik, Humboldt-Universität zu Berlin,...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-caise-2026-forum-predictive-process-monitoring-via-automated-planning-and-fides-a-neuro-symbolic-conversational-tool-for-faithful-production-process-intelligence",
          title: 'Two papers accepted at CAiSE 2026 Forum: Predictive Process Monitoring via Automated Planning...',
          description: "",
          section: "News",},{id: "news-gave-a-tutorial-at-caise-2026-on-developing-neuro-symbolic-conversational-systems-for-reliable-multi-perspective-production-process-intelligence-materials-available-on-zenodo",
          title: 'Gave a tutorial at CAiSE 2026 on Developing Neuro-Symbolic Conversational Systems for Reliable...',
          description: "",
          section: "News",},{id: "news-received-the-young-researcher-award-at-summersoc-2026-for-the-paper-neuro-symbolic-conversational-ai-for-reliable-production-service-intelligence",
          title: 'Received the Young Researcher Award at SummerSOC 2026 for the paper Neuro-Symbolic Conversational...',
          description: "",
          section: "News",},{id: "news-new-paper-published-in-business-amp-amp-information-systems-engineering-bise-exploring-human-trust-in-software-robots-for-robotic-process-automation",
          title: 'New paper published in Business &amp;amp;amp; Information Systems Engineering (BISE): Exploring Human Trust...',
          description: "",
          section: "News",},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/374/2815.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/angelo-casciani", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/angelo-casciani", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-7843-8045", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Angelo-Casciani/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=742nmiYAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=58997870900", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
