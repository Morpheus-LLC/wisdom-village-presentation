import { Leaf, Users, Heart, Target, Award, Home, Lightbulb, Globe } from "lucide-react"

export const slides = [
  // Slide 1: Title Slide
  {
    id: 1,
    title: "Wisdom Village - Leadership Vision",
    type: "title" as const,
    content: {
      title: "Wisdom Village",
      subtitle: "Transforming Senior Living Through Self-Sustainable Communities",
      image: "/peaceful-senior-community-with-gardens-and-modern-.png",
      author: "Leadership Presentation",
      date: "2025",
    },
  },

  // Slide 2: Leadership Introduction - Changed to hero type for dramatic impact
  {
    id: 2,
    title: "Leadership Introduction",
    type: "hero" as const,
    content: {
      title: "Leading with Purpose & Vision",
      subtitle: "My commitment to transforming senior living in India",
      backgroundImage: "/professional-leader-in-community-setting-with-seni.png",
      callout: "15+ years building sustainable communities across India",
    },
  },

  // Slide 3: Personal Motivation
  {
    id: 3,
    title: "Personal Motivation",
    type: "content" as const,
    content: {
      title: "Why Wisdom Village Matters to Me",
      subtitle: "Personal experiences that drive my commitment",
      image: "/multigenerational-family-spending-time-together-in.png",
      cards: [
        {
          icon: <Heart className="h-6 w-6 text-primary-foreground" />,
          title: "Family Legacy",
          description:
            "Witnessed my grandmother's isolation in traditional care - determined to create better solutions",
        },
        {
          icon: <Users className="h-6 w-6 text-primary-foreground" />,
          title: "Community Impact",
          description: "Believe in the power of intergenerational wisdom sharing and mutual support",
        },
        {
          icon: <Leaf className="h-6 w-6 text-primary-foreground" />,
          title: "Sustainable Future",
          description: "Committed to creating environmentally responsible communities for future generations",
        },
      ],
    },
  },

  // Slide 4: Wisdom Village Philosophy - Changed to split layout for visual variety
  {
    id: 4,
    title: "Wisdom Village Philosophy",
    type: "split" as const,
    content: {
      leftTitle: "What Wisdom Village Stands For",
      leftSubtitle: "Our core values and principles",
      leftPoints: [
        "Dignity in aging - every senior deserves respect, purpose, and joy",
        "Intergenerational wisdom - bridging the gap between young and old",
        "Sustainable living - harmony with nature and responsible resource use",
        "Community over isolation - fostering meaningful connections",
      ],
      rightImage: "/diverse-community-members-of-all-ages-working-toge.png",
      rightOverlay: {
        title: "Building Tomorrow's Communities",
        description: "Where every generation thrives together",
      },
    },
  },

  // Slide 5: Vision Statement
  {
    id: 5,
    title: "10-Year Vision",
    type: "content" as const,
    content: {
      title: "Our Bold 10-Year Vision",
      subtitle: "Transforming senior living across India",
      image: "/modern-sustainable-community-with-solar-panels-and.png",
      cards: [
        {
          icon: <Award className="h-6 w-6 text-primary-foreground" />,
          title: "India's #1 Holistic Living Space",
          description:
            "Become the most preferred destination for seniors and families seeking meaningful community living",
        },
        {
          icon: <Globe className="h-6 w-6 text-primary-foreground" />,
          title: "50+ Communities Nationwide",
          description: "Establish self-sustainable Wisdom Villages in every major Indian city by 2035",
        },
        {
          icon: <Users className="h-6 w-6 text-primary-foreground" />,
          title: "100,000+ Lives Transformed",
          description: "Impact seniors, families, and communities through our innovative living model",
        },
      ],
    },
  },

  // Slide 6: Self-Sustainability Definition - Changed to quote format for impact
  {
    id: 6,
    title: "Self-Sustainability Vision",
    type: "quote" as const,
    content: {
      quote:
        "True self-sustainability means creating communities that regenerate themselves - financially, socially, and environmentally - while enriching every life they touch.",
      author: "Our Vision for Wisdom Village",
      role: "Beyond Traditional Senior Living",
    },
  },

  // Slide 7: Market Differentiation - Changed to comparison layout
  {
    id: 7,
    title: "Market Differentiation",
    type: "comparison" as const,
    content: {
      title: "Traditional vs. Wisdom Village Approach",
      subtitle: "Redefining senior living for the modern family",
      before: {
        title: "Traditional Approach",
        subtitle: "Outdated models that isolate",
        points: [
          "Seniors separated from families and communities",
          "Focus on medical care rather than holistic wellness",
          "Passive residents with limited purpose or contribution",
          "High costs with minimal community value",
          "Environmental impact ignored",
        ],
      },
      after: {
        title: "Wisdom Village Way",
        subtitle: "Integrated, sustainable, purposeful living",
        points: [
          "Intergenerational communities that strengthen family bonds",
          "Holistic wellness addressing mind, body, and spirit",
          "Active residents contributing skills and wisdom",
          "Self-sustaining model with multiple revenue streams",
          "Net-positive environmental impact",
        ],
      },
    },
  },

  // Slide 8: Financial Sustainability Model
  {
    id: 8,
    title: "Financial Sustainability",
    type: "stats" as const,
    content: {
      title: "Revenue Diversification Strategy",
      subtitle: "Multiple income streams ensure financial stability",
      stats: [
        {
          icon: <Home className="h-8 w-8 text-primary-foreground" />,
          value: "45%",
          label: "Residency Fees",
          description: "Stable base income with 95% occupancy target",
        },
        {
          icon: <Heart className="h-8 w-8 text-primary-foreground" />,
          value: "20%",
          label: "Wellness Services",
          description: "Premium revenue from residents and external clients",
        },
        {
          icon: <Users className="h-8 w-8 text-primary-foreground" />,
          value: "27%",
          label: "Tourism & Events",
          description: "Additional income showcasing our community model",
        },
        {
          icon: <Target className="h-8 w-8 text-primary-foreground" />,
          value: "8%",
          label: "Education Programs",
          description: "Healthcare partnerships and learning initiatives",
        },
      ],
    },
  },

  // Slide 9: Social Sustainability - Changed to grid layout for visual variety
  {
    id: 9,
    title: "Social Sustainability Programs",
    type: "grid" as const,
    content: {
      title: "Building Lasting Communities",
      subtitle: "Programs that create meaningful connections",
      items: [
        {
          title: "Wisdom Mentorship",
          description: "Seniors guide youth in life skills and career development",
          image: "/seniors-teaching-children-traditional-crafts-in-co.png",
          metric: "50+ mentors",
        },
        {
          title: "Tech Learning Exchange",
          description: "Youth teach technology while learning traditional crafts",
          image: "/young-people-teaching-seniors-technology-in-modern.png",
          metric: "100+ exchanges",
        },
        {
          title: "Community Gardens",
          description: "All generations work together in organic farming",
          image: "/community-garden-with-seniors-and-families-workin.png",
          metric: "80% food grown",
        },
        {
          title: "Cultural Preservation",
          description: "Traditional arts, music, and stories passed down",
          image: "/traditional-indian-cultural-activities-seniors-t.png",
          metric: "25+ traditions",
        },
        {
          title: "Skill Workshops",
          description: "Residents share professional expertise with community",
          image: "/seniors-sharing-professional-skills-in-workshop.png",
          metric: "200+ skills shared",
        },
        {
          title: "Family Integration",
          description: "Flexible spaces for extended family gatherings",
          image: "/multigenerational-family-enjoying-activities-toget.png",
          metric: "95% family satisfaction",
        },
      ],
    },
  },

  // Slide 10: Environmental Sustainability
  {
    id: 10,
    title: "Environmental Sustainability",
    type: "stats" as const,
    content: {
      title: "Our Environmental Impact",
      subtitle: "Leading by example in sustainable living",
      stats: [
        {
          icon: <Leaf className="h-8 w-8 text-primary-foreground" />,
          value: "100%",
          label: "Renewable Energy",
          description: "Solar, wind, and biogas power all operations",
        },
        {
          icon: <Target className="h-8 w-8 text-primary-foreground" />,
          value: "Zero",
          label: "Waste to Landfill",
          description: "Complete recycling and composting system",
        },
        {
          icon: <Users className="h-8 w-8 text-primary-foreground" />,
          value: "80%",
          label: "Food Self-Sufficiency",
          description: "Organic farming meets most dietary needs",
        },
      ],
    },
  },

  // Slide 11: Global Examples - Auroville - Changed to split layout for Auroville
  {
    id: 11,
    title: "Success Story: Auroville",
    type: "split" as const,
    content: {
      leftTitle: "Learning from Auroville",
      leftSubtitle: "56 years of sustainable community living",
      leftPoints: [
        "3,300+ residents from 60+ nations living in harmony since 1968",
        "Complete reforestation of 2,000+ acres of degraded land",
        "100% renewable energy through solar, wind, and biogas",
        "Organic farming feeding the entire community",
        "Zero-waste management with complete recycling",
      ],
      rightImage: "/auroville-community-with-sustainable-architecture-.png",
      rightOverlay: {
        title: "Proven Model",
        description: "56 years of sustainable community success",
      },
    },
  },

  // Slide 12: Indian Success Stories
  {
    id: 12,
    title: "Indian Senior Living Innovations",
    type: "content" as const,
    content: {
      title: "Emerging Models in India",
      subtitle: "Successful intergenerational communities",
      image: "/modern-indian-senior-living-community-with-traditi.png",
      cards: [
        {
          icon: <Home className="h-6 w-6 text-primary-foreground" />,
          title: "Primus Sangama, Bengaluru",
          description:
            "Multigenerational community with dual-zone living, shared spaces, and cultural programs fostering intergenerational bonding",
        },
        {
          icon: <Heart className="h-6 w-6 text-primary-foreground" />,
          title: "Puravankara Communities",
          description:
            "Senior-friendly projects with healthcare proximity, activity centers, and preventive wellness programs",
        },
        {
          icon: <Users className="h-6 w-6 text-primary-foreground" />,
          title: "Gracias Living",
          description:
            "Holistic well-being approach with fitness centers, mental health support, and community integration programs",
        },
      ],
    },
  },

  // Slide 13: Experience for Seniors - Changed to hero format for senior experience
  {
    id: 13,
    title: "Senior Experience Design",
    type: "hero" as const,
    content: {
      title: "Dignity, Purpose, and Joy",
      subtitle: "Creating the most preferred senior living experience in India",
      backgroundImage: "/happy-seniors-engaged-in-various-activities-like-g.png",
      callout: "Where every senior finds their purpose and passion",
    },
  },

  // Slide 14: Personal Introduction
  {
    id: 14,
    title: "Children's Learning Village",
    type: "content" as const,
    content: {
      title: "Wisdom-Based Learning for Kids",
      subtitle: "Where children learn from life's greatest teachers",
      image: "/children-learning-traditional-crafts-and-stories-f.png",
      cards: [
        {
          icon: <Lightbulb className="h-6 w-6 text-primary-foreground" />,
          title: "Traditional Wisdom",
          description: "Learn crafts, cooking, storytelling, and cultural values from experienced elders",
        },
        {
          icon: <Users className="h-6 w-6 text-primary-foreground" />,
          title: "Life Skills Development",
          description: "Practical skills like gardening, basic repairs, and financial literacy from real-world experts",
        },
        {
          icon: <Heart className="h-6 w-6 text-primary-foreground" />,
          title: "Emotional Intelligence",
          description: "Develop empathy, patience, and respect through meaningful intergenerational relationships",
        },
      ],
    },
  },

  // Slide 15: Family Experience - Changed to split layout for family experience
  {
    id: 15,
    title: "Family Integration Model",
    type: "split" as const,
    content: {
      leftTitle: "Bringing Families Together",
      leftSubtitle: "Work, live, and thrive as a connected family unit",
      leftPoints: [
        "Work-from-Village with high-speed internet and co-working spaces",
        "Flexible living arrangements for every family structure",
        "Recreation and wellness programs for all ages",
        "Educational support and career guidance",
        "Cultural celebrations that strengthen family bonds",
      ],
      rightImage: "/multigenerational-family-enjoying-activities-toget.png",
      rightOverlay: {
        title: "Family First",
        description: "Strengthening bonds across generations",
      },
    },
  },

  // Slide 16: Wisdom Circles Concept
  {
    id: 16,
    title: "Wisdom Circles Concept",
    type: "content" as const,
    content: {
      title: "Wisdom Circles: Our Signature Experience",
      subtitle: "Where generations meet, learn, and create together",
      image: "/diverse-group-of-seniors-and-children-sitting-in-c.png",
      cards: [
        {
          icon: <Users className="h-6 w-6 text-primary-foreground" />,
          title: "Daily Wisdom Sessions",
          description:
            "Morning circles where seniors share life experiences, stories, and practical wisdom with children and families",
        },
        {
          icon: <Lightbulb className="h-6 w-6 text-primary-foreground" />,
          title: "Skill Exchange Programs",
          description:
            "Seniors teach traditional crafts while learning technology; children share digital skills while learning life lessons",
        },
        {
          icon: <Heart className="h-6 w-6 text-primary-foreground" />,
          title: "Community Problem Solving",
          description:
            "Mixed-age groups collaborate on community projects, combining experience with fresh perspectives",
        },
      ],
    },
  },

  // Slide 17: 90-Day Action Plan
  {
    id: 17,
    title: "90-Day Quick Wins",
    type: "timeline" as const,
    content: {
      title: "First 90 Days: Building Momentum",
      subtitle: "Quick wins to establish credibility and visibility",
      phases: [
        {
          title: "Days 1-30: Foundation",
          duration: "Month 1",
          description: "Establish core team and initial partnerships",
          milestones: [
            "Assemble leadership team and advisory board",
            "Secure initial funding commitments",
            "Identify and evaluate potential sites",
            "Launch brand identity and digital presence",
          ],
        },
        {
          title: "Days 31-60: Partnerships",
          duration: "Month 2",
          description: "Build strategic alliances and pilot programs",
          milestones: [
            "Partner with healthcare providers and wellness centers",
            "Establish relationships with educational institutions",
            "Launch pilot intergenerational programs",
            "Begin community outreach and engagement",
          ],
        },
        {
          title: "Days 61-90: Validation",
          duration: "Month 3",
          description: "Validate model and prepare for scale",
          milestones: [
            "Complete feasibility studies and site selection",
            "Secure regulatory approvals and permits",
            "Launch pre-booking for founding residents",
            "Finalize construction and development plans",
          ],
        },
      ],
    },
  },

  // Slide 18: 2-3 Year Roadmap
  {
    id: 18,
    title: "Strategic Roadmap",
    type: "timeline" as const,
    content: {
      title: "2-3 Year Strategic Roadmap",
      subtitle: "From pilot to proven model",
      phases: [
        {
          title: "Year 1: Pilot Community",
          duration: "2025-2026",
          description: "Launch first Wisdom Village as proof of concept",
          milestones: [
            "Complete construction of 200-unit pilot community",
            "Achieve 80% occupancy within 6 months",
            "Launch all core programs and services",
            "Establish operational excellence and resident satisfaction",
          ],
        },
        {
          title: "Year 2: Model Refinement",
          duration: "2026-2027",
          description: "Optimize operations and prepare for replication",
          milestones: [
            "Achieve 95% occupancy and 90% resident satisfaction",
            "Generate 15% operational surplus for reinvestment",
            "Document and systematize all processes",
            "Begin planning for second location",
          ],
        },
        {
          title: "Year 3: Strategic Expansion",
          duration: "2027-2028",
          description: "Launch second community and franchise model",
          milestones: [
            "Open second Wisdom Village in different city",
            "Develop franchise and partnership models",
            "Establish training and certification programs",
            "Create technology platform for community management",
          ],
        },
      ],
    },
  },

  // Slide 19: Success Metrics
  {
    id: 19,
    title: "Success Metrics",
    type: "stats" as const,
    content: {
      title: "Measuring Our Impact",
      subtitle: "Key performance indicators for success",
      stats: [
        {
          icon: <Target className="h-8 w-8 text-primary-foreground" />,
          value: "95%",
          label: "Occupancy Rate",
          description: "Ensures financial sustainability and community vibrancy",
        },
        {
          icon: <Heart className="h-8 w-8 text-primary-foreground" />,
          value: "90%",
          label: "Resident Satisfaction",
          description: "Successful service delivery and quality of life",
        },
        {
          icon: <Award className="h-8 w-8 text-primary-foreground" />,
          value: "85+",
          label: "Net Promoter Score",
          description: "Strong word-of-mouth and referral potential",
        },
        {
          icon: <Users className="h-8 w-8 text-primary-foreground" />,
          value: "15%",
          label: "Financial Surplus",
          description: "Enables continuous improvement and expansion funding",
        },
      ],
    },
  },

  // Slide 20: Technology Integration - Changed to grid layout for technology
  {
    id: 20,
    title: "Technology Integration",
    type: "grid" as const,
    content: {
      title: "Smart Community Technology",
      subtitle: "Enhancing lives through thoughtful innovation",
      items: [
        {
          title: "AI Health Monitoring",
          description: "Wearable devices track vital signs and emergency situations",
          image: "/seniors-using-tablets-and-smart-home-technology-wi.png",
          metric: "24/7 monitoring",
        },
        {
          title: "Family Connection Platform",
          description: "Digital platform for seamless family communication",
          image: "/family-video-call-platform-connecting-seniors-wi.png",
          metric: "100% connected",
        },
        {
          title: "Smart Home Systems",
          description: "IoT systems for energy, security, and maintenance",
          image: "/iot-smart-home-systems-in-senior-living-communit.png",
          metric: "30% energy savings",
        },
        {
          title: "Community App",
          description: "Resident portal for activities, services, and connections",
          image: "/community-mobile-app-interface-showing-activitie.png",
          metric: "95% adoption",
        },
        {
          title: "Telemedicine Hub",
          description: "Remote healthcare consultations and monitoring",
          image: "/telemedicine-consultation-setup-for-seniors-with.png",
          metric: "50% fewer trips",
        },
        {
          title: "Learning Management",
          description: "Digital platform for skill sharing and education",
          image: "/digital-learning-platform-for-intergenerational.png",
          metric: "200+ courses",
        },
      ],
    },
  },

  // Slide 21: Leadership Fit - Changed to hero format for leadership
  {
    id: 21,
    title: "Why I'm the Right Leader",
    type: "hero" as const,
    content: {
      title: "Purpose, Passion, Performance",
      subtitle: "The unique combination needed to lead Wisdom Village to success",
      backgroundImage: "/confident-leader-presenting-to-stakeholders-in-m.png",
      callout: "Ready to transform senior living across India",
    },
  },

  // Slide 22: Call to Action - Changed to quote format for call to action
  {
    id: 22,
    title: "Call to Action",
    type: "quote" as const,
    content: {
      quote:
        "Together, we will create India's first truly self-sustainable senior living community - a model that honors our elders, strengthens our families, and builds a better future for all generations.",
      author: "My Commitment to You",
      role: "Leadership Vision for Wisdom Village",
    },
  },

  // Slide 23: Thank You
  {
    id: 23,
    title: "Thank You",
    type: "title" as const,
    content: {
      title: "Thank You",
      subtitle: "Ready to build the future of senior living together",
      image: "/celebration-scene-with-multiple-generations-in-w.png",
      author: "Questions & Discussion",
      date: "",
    },
  },
]
