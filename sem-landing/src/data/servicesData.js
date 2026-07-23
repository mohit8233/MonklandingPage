import {
  Search,
  Globe,
  Megaphone,
  Share2,
  Palette,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "seo-services",
    icon: Search,
    tag: "SEO",

    title: "SEO Services",
    shortTitle: "Search Engine Optimization",

    subtitle:
      "Rank higher on Google and drive consistent organic traffic with proven SEO strategies.",

    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",

    description:
      "Our SEO services help businesses increase organic traffic through technical optimization, keyword research, content strategy, and quality link building.",

    overview: [
      "Website Audit",
      "Technical SEO",
      "Keyword Research",
      "Competitor Analysis",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "Monthly Reports",
    ],

    features: [
      {
        title: "Technical SEO",
        description:
          "Improve indexing, crawling, website speed and Core Web Vitals.",
      },
      {
        title: "Keyword Research",
        description:
          "Find profitable keywords that attract your ideal customers.",
      },
            {
        title: "On-Page SEO",
        description:
          "Optimize titles, headings, URLs and website content.",
      },
      {
        title: "Link Building",
        description:
          "Build website authority using high-quality backlinks.",
      },
      {
        title: "Content Strategy",
        description:
          "SEO-friendly content for long-term rankings.",
      },
      {
        title: "Performance Reports",
        description:
          "Monthly reports with ranking and traffic analysis.",
      },
    ],

    benefits: [
      "Higher Google Rankings",
      "Increase Organic Traffic",
      "More Leads",
      "Better Brand Visibility",
      "Long-Term ROI",
      "Business Growth",
    ],

    process: [
      {
        title: "Website Audit",
        description:
          "Analyze your website and identify technical SEO issues.",
      },
      {
        title: "Research",
        description:
          "Perform keyword and competitor research.",
      },
      {
        title: "Strategy",
        description:
          "Create a customized SEO growth strategy.",
      },
      {
        title: "Optimization",
        description:
          "Optimize website content, structure and technical SEO.",
      },
      {
        title: "Monitoring",
        description:
          "Track rankings, traffic and overall SEO performance.",
      },
            {
        title: "Reporting",
        description:
          "Deliver monthly SEO reports with insights and recommendations.",
      },
    ],

    faq: [
      {
        question: "How long does SEO take?",
        answer:
          "Normally 3–6 months depending on competition and website condition.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No agency can guarantee rankings, but we follow Google best practices for sustainable growth.",
      },
    ],
  },

  {
    id: 2,
    slug: "web-development",
    icon: Globe,
    tag: "Development",

    title: "Website Development",
    shortTitle: "Modern Website Development",

    subtitle:
      "Modern, responsive and high-converting websites designed for business growth.",

    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80",

    description:
      "We build premium websites using modern technologies that are fast, secure, responsive and optimized for conversions.",

    overview: [
      "Business Website",
      "Landing Page",
      "Corporate Website",
      "Portfolio",
      "React Development",
      "CMS Integration",
            "Ecommerce",
      "Maintenance",
    ],

    features: [
      {
        title: "Responsive Design",
        description:
          "Optimized for mobile, tablet and desktop devices.",
      },
      {
        title: "Fast Performance",
        description:
          "Lightning-fast loading speed and Core Web Vitals optimization.",
      },
      {
        title: "SEO Friendly",
        description:
          "Built following the latest SEO best practices.",
      },
      {
        title: "Premium UI",
        description:
          "Modern and engaging user interface design.",
      },
      {
        title: "Secure Development",
        description:
          "Clean coding standards with enhanced security.",
      },
      {
        title: "Easy Management",
        description:
          "Simple content management for future updates.",
      },
    ],

    benefits: [
      "Professional Design",
      "Responsive Layout",
      "Higher Conversion",
      "SEO Ready",
      "Fast Loading",
      "Secure Website",
    ],

    process: [
      {
        title: "Discovery",
        description:
          "Understand your business goals and project requirements.",
      },
            {
        title: "Planning",
        description:
          "Prepare project architecture, sitemap and development roadmap.",
      },
      {
        title: "UI Design",
        description:
          "Design modern, user-friendly and conversion-focused interfaces.",
      },
      {
        title: "Development",
        description:
          "Build a fast, responsive and scalable website using modern technologies.",
      },
      {
        title: "Testing",
        description:
          "Perform cross-browser testing, fix bugs and optimize performance.",
      },
      {
        title: "Launch",
        description:
          "Deploy your website and ensure everything runs smoothly.",
      },
    ],

    faq: [
      {
        question: "How long does development take?",
        answer:
          "Usually between 2–6 weeks depending on project complexity.",
      },
      {
        question: "Will my website be mobile friendly?",
        answer:
          "Yes. Every website we build is fully responsive and optimized for all devices.",
      },
    ],
  },

  {
    id: 3,
    slug: "google-ads",
    icon: Megaphone,
    tag: "Advertising",

    title: "Google Ads",

    shortTitle: "Google Ads Management",
        subtitle:
      "Reach customers instantly with optimized Google Ads campaigns.",

    heroImage:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1400&q=80",

    description:
      "We create high-performing Google Ads campaigns that generate qualified leads while maximizing your return on investment.",

    overview: [
      "Search Ads",
      "Display Ads",
      "Performance Max",
      "Remarketing",
      "Conversion Tracking",
      "Campaign Optimization",
      "Keyword Targeting",
      "Monthly Reports",
    ],

    features: [
      {
        title: "Campaign Setup",
        description:
          "Professional campaign structure with the right targeting.",
      },
      {
        title: "Keyword Targeting",
        description:
          "Reach customers actively searching for your products and services.",
      },
      {
        title: "Performance Max",
        description:
          "AI-powered campaigns for maximum reach and conversions.",
      },
      {
        title: "Conversion Tracking",
        description:
          "Track every lead, sale and customer action accurately.",
      },
      {
        title: "Budget Optimization",
        description:
          "Reduce wasted ad spend while maximizing ROI.",
      },
      {
        title: "Performance Reports",
        description:
          "Detailed monthly reports with actionable insights.",
      },
    ],

    benefits: [
      "Instant Leads",
      "Higher ROI",
      "More Website Traffic",
      "Quality Conversions",
      "Targeted Audience",
      "Business Growth",
    ],

    process: [
      {
        title: "Research",
        description:
          "Analyze your market, competitors and target keywords.",
      },
            {
        title: "Campaign Setup",
        description:
          "Create a well-structured Google Ads campaign with proper targeting.",
      },
      {
        title: "Ad Creation",
        description:
          "Write compelling ad copies and optimize creatives for better CTR.",
      },
      {
        title: "Optimization",
        description:
          "Continuously improve bidding, keywords and ad performance.",
      },
      {
        title: "Scaling",
        description:
          "Increase budget strategically for campaigns delivering the best ROI.",
      },
      {
        title: "Reporting",
        description:
          "Provide detailed monthly reports with recommendations and insights.",
      },
    ],

    faq: [
      {
        question: "How quickly do Google Ads work?",
        answer:
          "Ads can start generating traffic and leads within hours after approval.",
      },
      {
        question: "Do you manage existing campaigns?",
        answer:
          "Yes. We can optimize and manage both new and existing Google Ads campaigns.",
      },
    ],
  },

  {
    id: 4,
    slug: "social-media",
    icon: Share2,
    tag: "Marketing",

    title: "Social Media Marketing",

    shortTitle: "Social Media Growth",

    subtitle:
      "Grow your brand, engage your audience and generate quality leads through strategic social media marketing.",

    heroImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&q=80",

    description:
      "We create high-performing social media strategies that increase engagement, build trust and turn followers into loyal customers.",

    overview: [
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Creation",
            "Reel Strategy",
      "Paid Campaigns",
      "Community Management",
      "Monthly Reports",
    ],

    features: [
      {
        title: "Content Strategy",
        description:
          "Creative content planned specifically for your audience.",
      },
      {
        title: "Creative Designs",
        description:
          "Eye-catching graphics and engaging social creatives.",
      },
      {
        title: "Paid Advertising",
        description:
          "Generate leads with targeted Meta advertising campaigns.",
      },
      {
        title: "Audience Growth",
        description:
          "Build a genuine and engaged community around your brand.",
      },
      {
        title: "Analytics",
        description:
          "Track every campaign with detailed performance reports.",
      },
      {
        title: "Brand Awareness",
        description:
          "Increase visibility across multiple social media platforms.",
      },
    ],

    benefits: [
      "Better Engagement",
      "Increase Followers",
      "More Leads",
      "Brand Awareness",
      "Higher Reach",
      "Better ROI",
    ],

    process: [
      {
        title: "Research",
        description:
          "Understand your audience, competitors and industry trends.",
      },
      {
        title: "Planning",
        description:
          "Create a monthly content calendar and growth strategy.",
      },
      {
        title: "Content Creation",
        description:
          "Design engaging graphics, reels and marketing creatives.",
      },
      {
        title: "Publishing",
        description:
          "Schedule and publish content consistently across platforms.",
      },
      {
        title: "Optimization",
        description:
          "Analyze engagement and optimize campaign performance.",
      },
      {
        title: "Reporting",
        description:
          "Provide monthly reports with growth insights.",
      },
    ],

    faq: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Facebook, Instagram, LinkedIn, X (Twitter), Pinterest and more.",
      },
      {
        question: "Do you create content as well?",
        answer:
          "Yes. We create graphics, captions, reels and complete content calendars.",
      },
    ],
  },

  {
    id: 5,
    slug: "branding",
    icon: Palette,
    tag: "Branding",

    title: "Branding",

    shortTitle: "Brand Identity",

    subtitle:
      "Create a memorable brand identity that customers instantly recognize and trust.",

    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",

    description:
      "From logo design to complete brand guidelines, we help businesses build a powerful and consistent brand identity.",

    overview: [
      "Logo Design",
      "Brand Guidelines",
      "Typography",
      "Color Palette",
      "Business Stationery",
            "Social Branding",
      "Brand Positioning",
      "Visual Identity",
    ],

    features: [
      {
        title: "Logo Design",
        description:
          "Unique and memorable logo designs for your business.",
      },
      {
        title: "Brand Identity",
        description:
          "Consistent branding across all digital and print platforms.",
      },
      {
        title: "Color Strategy",
        description:
          "Professional color combinations that reflect your brand.",
      },
      {
        title: "Typography",
        description:
          "Modern typography system for strong brand recognition.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Complete documentation for maintaining brand consistency.",
      },
      {
        title: "Marketing Assets",
        description:
          "Business cards, banners, brochures and social media creatives.",
      },
    ],

    benefits: [
      "Professional Image",
      "Customer Trust",
      "Higher Recognition",
      "Stronger Identity",
      "Brand Consistency",
      "Competitive Advantage",
    ],

    process: [
      {
        title: "Research",
        description:
          "Understand your business, competitors and target audience.",
      },
      {
        title: "Concept",
        description:
          "Develop multiple branding concepts and creative directions.",
      },
      {
        title: "Design",
        description:
          "Design logo, colors, typography and visual identity.",
      },
      {
        title: "Refinement",
        description:
          "Revise designs based on your feedback.",
      },
      {
        title: "Approval",
        description:
          "Finalize the selected branding concept.",
      },
      {
        title: "Delivery",
        description:
          "Deliver all editable branding files and brand guidelines.",
      },
    ],
        faq: [
      {
        question: "Will I receive editable files?",
        answer:
          "Yes. We provide editable source files along with print-ready and digital formats.",
      },
      {
        question: "Can you redesign my existing brand?",
        answer:
          "Absolutely. We can refresh or completely redesign your existing brand identity.",
      },
    ],
  },

  {
    id: 6,
    slug: "ai-solutions",
    icon: Sparkles,
    tag: "AI",

    title: "AI Marketing Solutions",

    shortTitle: "AI Solutions",

    subtitle:
      "Automate marketing, customer engagement and business operations using Artificial Intelligence.",

    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",

    description:
      "We integrate AI tools and automation into your business to improve efficiency, customer experience and overall growth.",

    overview: [
      "AI Chatbots",
      "Marketing Automation",
      "AI Content",
      "Workflow Automation",
      "Lead Qualification",
      "Email Automation",
      "CRM Integration",
      "AI Analytics",
    ],

    features: [
      {
        title: "AI Chatbots",
        description:
          "24/7 intelligent customer support with AI assistants.",
      },
      {
        title: "Workflow Automation",
        description:
          "Reduce repetitive manual work using smart automation.",
      },
      {
        title: "Lead Automation",
        description:
          "Automatically qualify and manage leads using AI.",
      },
      {
        title: "AI Content",
        description:
          "Generate blogs, ads and marketing content faster.",
      },
      {
        title: "Business Intelligence",
        description:
          "AI-powered insights for smarter business decisions.",
      },
      {
        title: "Custom AI Solutions",
        description:
          "Tailored AI implementation based on your business needs.",
      },
    ],

    benefits: [
      "Save Time",
      "Reduce Costs",
      "Improve Productivity",
      "Better Customer Support",
      "Increase Revenue",
      "Scale Faster",
    ],
        process: [
      {
        title: "Business Analysis",
        description:
          "Understand your current workflows and business challenges.",
      },
      {
        title: "AI Strategy",
        description:
          "Create a customized AI implementation roadmap.",
      },
      {
        title: "Implementation",
        description:
          "Deploy AI tools and automation into your business.",
      },
      {
        title: "Integration",
        description:
          "Connect AI solutions with your CRM, website and other systems.",
      },
      {
        title: "Testing",
        description:
          "Test every workflow to ensure reliable performance.",
      },
      {
        title: "Optimization",
        description:
          "Continuously improve AI models and automation for better results.",
      },
    ],

    faq: [
      {
        question: "Can AI integrate with existing systems?",
        answer:
          "Yes. We integrate AI solutions with your existing website, CRM and business tools.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. We handle the complete setup and provide training if required.",
      },
    ],
  },
];

export default services;