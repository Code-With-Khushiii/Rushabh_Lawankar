import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), ...(certifications.length > 0 ? ['certifications'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Aviation Technical Services Engineer with 2+ years of experience in CAMO, continuing airworthiness, aircraft maintenance planning, and regulatory compliance across Airbus, Boeing, ATR, and business jet fleets. Contributed to 97% fleet reliability and zero Level 1 audit findings through AD/SB compliance monitoring, technical records management, and MRO coordination. MSc in Aerospace Management with expertise in Aircraft Maintenance Programmes (AMP), maintenance forecasting, and aviation supply chain operations.";

  const experience = [
    {
      company: "Ascentis Technologies",
      role: "Freelance Consultant",
      location: "Remote",
      dates: "Jul 2026 – Present",
      highlights: [
        "Audited technical records for 2 Bombardier aircraft models (Global XRS and Learjet 45), validating maintenance documentation, records accuracy, and continuing airworthiness compliance."
      ]
    },
    {
      company: "Karnavati Adani Aviation Pvt. Ltd.",
      role: "Technical Officer - CAMO & Planning",
      location: "Ahmedabad, India",
      dates: "Jan 2024 – Jul 2024",
      highlights: [
        "Managed Aircraft Maintenance Programme (AMP) reviews, maintenance scheduling, and continuing airworthiness compliance across a multi-type fleet under applicable Part-M and Part-145 requirements.",
        "Prepared maintenance work packages and Engineering Orders (EOs), contributing to zero reported compliance findings through accurate technical documentation.",
        "Tracked Airworthiness Directives (ADs), Service Bulletins (SBs), and maintenance records to maintain regulatory compliance and aircraft operational readiness.",
        "Coordinated maintenance activities with MRO providers, Part-145 workshops, and component suppliers to maintain material availability and minimize aircraft downtime."
      ]
    },
    {
      company: "Airworks India Engineering Pvt. Ltd.",
      role: "Junior Technical Officer - CAMO & Planning",
      location: "Mumbai / Bengaluru, India",
      dates: "Apr 2022 – Dec 2023",
      highlights: [
        "Conducted Pre-Purchase Inspections (PPI), aircraft records audits, and maintenance documentation verification across Airbus, Boeing, and ATR fleets, contributing to 97% fleet reliability.",
        "Coordinated Modification Committee Meetings, safety audits, and annual reviews, contributing to zero Level 1 findings through regulatory compliance monitoring.",
        "Executed maintenance forecasting, work package preparation, and scheduled maintenance tracking to support fleet operational requirements.",
        "Updated aircraft maintenance records using CAMP and RAMCO ERP systems and produced technical publications aligned with ATA 100 and S1000D specifications."
      ]
    }
  ];

  const projects = [
    {
      title: "Business Jet Operations & Airport Infrastructure Planning",
      subtitle: "MITAT × TBS Education",
      category: "Airport & GA Operations",
      introduction: "Developed a business aviation strategy to redirect private jet traffic to Toulouse-Francazal Airport, incorporating airport infrastructure planning, aircraft parking capacity, helicopter bays, and general aviation operations.",
      problem: "Private jet traffic needed a suitable alternative airport option, requiring a plan that balanced infrastructure capacity, aircraft parking, helicopter operations, and general aviation activity.",
      objective: "Create a business aviation strategy and a sustainable General Aviation (GA) traffic management plan for Toulouse-Francazal Airport.",
      methodology: [
        "Planned airport infrastructure including aircraft parking capacity, helicopter bays, and general aviation operations.",
        "Designed a sustainable GA traffic management plan covering airport resource allocation and aircraft ground operations.",
        "Optimized the plan for operational efficiency across airport resources."
      ],
      results: [
        "Delivered a business aviation strategy to redirect private jet traffic to Toulouse-Francazal Airport.",
        "Secured adoption of the GA traffic management plan by the project committee."
      ],
      conclusion: "Showed how structured infrastructure planning and resource allocation can support sustainable business and general aviation growth at a regional airport."
    },
    {
      title: "Aerospace Supply Chain Optimisation & Market Expansion Strategy",
      subtitle: "Space-Sector SME × TBS Education",
      category: "Supply Chain & Strategy",
      introduction: "Conducted financial performance analysis for an aerospace coatings company and developed a 5-year market expansion strategy alongside a supply chain optimisation plan.",
      problem: "The company needed a clear view of its profitability, cost structures, and financial sustainability, together with a growth plan and more efficient sourcing.",
      objective: "Evaluate financial performance and build a market expansion and supply chain optimisation strategy that reduces input costs.",
      methodology: [
        "Evaluated profitability, cost structures, and financial sustainability against a 92% Return on Equity (ROE) and a 31% profit margin.",
        "Developed a 5-year market expansion strategy.",
        "Identified procurement efficiencies and sourcing improvements across the supply chain."
      ],
      results: [
        "Delivered a supply chain optimisation plan achieving a 10% reduction in input costs.",
        "Provided a 5-year market expansion roadmap grounded in financial analysis."
      ],
      conclusion: "Combined financial analysis with procurement and sourcing improvements to support cost reduction and long-term growth for an aerospace SME."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Continuing Airworthiness & CAMO',
      skills: ['CAMO', 'Aircraft Maintenance Programme (AMP)', 'Airworthiness Directives (AD)', 'Service Bulletins (SB)', 'Part-M', 'Part-145', 'Compliance Monitoring', 'Aircraft Technical Records', 'Regulatory Compliance', 'Records Auditing']
    },
    {
      icon: Rocket,
      title: 'Maintenance & Technical Services',
      skills: ['Maintenance Planning & Scheduling', 'Maintenance Forecasting', 'Work Package Preparation', 'Engineering Orders (EO)', 'Pre-Purchase Inspections (PPI)', 'Maintenance Documentation', 'MRO Coordination', 'Fleet Maintenance', 'Aircraft Modifications', 'ATA 100', 'S1000D']
    },
    {
      icon: TrendingUp,
      title: 'Supply Chain & Procurement',
      skills: ['Supply Chain Management', 'Supply Chain Optimisation', 'Procurement Planning', 'Supplier Coordination', 'Material Availability', 'Inventory Management', 'Cost Analysis', 'Strategic Sourcing', 'Aircraft Fleet Integration']
    },
    {
      icon: Lightbulb,
      title: 'Engineering & Analysis',
      skills: ['Computer-Aided Design (CAD)', 'Finite Element Analysis (FEA)', 'Technical Documentation', 'Financial Analysis', 'Data Analysis', 'Technical Reporting', 'Project Management']
    },
    {
      icon: Award,
      title: 'Software & Tools',
      skills: ['CAMP', 'RAMCO', 'SAP', 'CATIA V5', 'Siemens NX', 'ANSYS', 'Tableau', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Google Workspace']
    },
    {
      icon: Users,
      title: 'Languages',
      skills: ['English (Full Professional Proficiency)', 'French (Intermediate - B1/B2)', 'Hindi (Native)', 'Marathi (Native)']
    }
  ];

  const education = [
    {
      school: "TBS Education",
      degree: "Master of Science (MSc) in Aerospace Management",
      location: "Toulouse, France",
      dates: "Sep 2024 – Oct 2025",
      details: ""
    },
    {
      school: "Government College of Engineering",
      degree: "Bachelor of Engineering (BEng) in Mechanical Engineering",
      location: "Nagpur, India",
      dates: "Aug 2016 – May 2020",
      details: ""
    }
  ];
  const papers: { title: string; publication: string; year: string; link: string }[] = [
    // Add published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications: { title: string; platform: string; description: string; link: string }[] = [
    { title: "Design Organisation, Production Organisation & Maintenance Organisation (DO/PO/MO)", platform: "R&R Consulting · 2024", description: "EASA Part 21J/G, CS-23, CS-25, CS-27, CS-29, Aircraft Airworthiness Processes.", link: "" },
    { title: "Aircraft Maintenance Engineering (AME) Training", platform: "Edgevarsity / ATCC · 2022", description: "MSG-3, Aircraft Technical Publications, ATA 100, Aircraft Asset Management, Technical Records Management.", link: "" },
    { title: "Data Analytics & Business Strategy", platform: "Boston Consulting Group (BCG), Forage · 2025", description: "", link: "" },
    { title: "McKinsey Forward Programme", platform: "McKinsey & Company · 2025", description: "Digital Transformation, Business Strategy.", link: "" }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="relative flex items-center justify-center">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Rushabh Lawankar"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              RUSHABH LAWANKAR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Aviation Technical Services Engineer · CAMO & Continuing Airworthiness
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              TOULOUSE, FRANCE · OPEN TO RELOCATION ACROSS THE EU
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'FLEET RELIABILITY', value: '97%', detail: 'Airbus, Boeing & ATR Fleets' },
              { label: 'LEVEL 1 AUDIT FINDINGS', value: 'Zero', detail: 'Regulatory Compliance Monitoring' },
              { label: 'INPUT COST REDUCTION', value: '10%', detail: 'Aerospace Supply Chain Project' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Aviation technical services engineer combining CAMO and continuing airworthiness expertise with aerospace management and supply chain skills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Continuing Airworthiness',
                detail: 'Manage AMP reviews, AD/SB compliance monitoring, and technical records under Part-M and Part-145 across Airbus, Boeing, ATR, and business jet fleets.'
              },
              {
                icon: Rocket,
                title: 'Maintenance Planning & MRO',
                detail: 'Prepare work packages and Engineering Orders, forecast maintenance, and coordinate MRO providers, workshops, and suppliers to minimize aircraft downtime.'
              },
              {
                icon: Lightbulb,
                title: 'Supply Chain & Strategy',
                detail: 'Apply an MSc in Aerospace Management to procurement planning, supply chain optimisation, and cost analysis, delivering a 10% reduction in input costs.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              CAMO, continuing airworthiness, and technical records experience across consulting and aviation engineering organisations.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Academic and industry projects in airport operations, general aviation, and aerospace supply chain strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Airworthiness, maintenance planning, supply chain, and engineering tools expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  {(edu.location || edu.dates) && (
                    <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                      {edu.location}{edu.location && edu.dates ? ' · ' : ''}{edu.dates}
                    </div>
                  )}
                </div>
                {edu.details && (
                  <p className="text-brown leading-relaxed font-light">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in AI, machine learning, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                {cert.description && <p className="text-brown leading-relaxed font-light">{cert.description}</p>}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss CAMO, continuing airworthiness, maintenance planning, or aviation technical services opportunities across the EU.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+33759551777"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +33 7 59 55 17 77
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:rushabhdlawankar300797@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                rushabhdlawankar300797@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Rushabh Lawankar · Aviation Technical Services Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
