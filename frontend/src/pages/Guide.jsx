import React from 'react';
import { motion } from 'framer-motion';
import { 
  Vote, 
  Building2, 
  Fingerprint, 
  Cpu, 
  ClipboardCheck,
  Smartphone,
  MapPin,
  HelpCircle
} from 'lucide-react';

const sections = [
  {
    id: 'how-to-vote',
    title: 'How to Vote',
    icon: Vote,
    color: 'bg-saffron',
    content: [
      "Check your name in the Voter List (Electoral Roll).",
      "Locate your polling booth (you can do this online).",
      "Carry a valid ID (Voter ID, Aadhaar, etc.).",
      "First polling official checks your name and ID.",
      "Second polling official inks your finger and gives a slip.",
      "Third polling official takes the slip and enables the EVM.",
      "Cast your vote in the voting compartment.",
      "Verify the slip in the VVPAT window."
    ]
  },
  {
    id: 'election-types',
    title: 'Types of Elections',
    icon: Building2,
    color: 'bg-navy-blue',
    content: [
      "Lok Sabha (General Elections): To elect Members of Parliament (MPs) for the national government.",
      "Rajya Sabha: Members are elected by the elected members of State Legislative Assemblies.",
      "Vidhan Sabha (State Assembly): To elect Members of Legislative Assembly (MLAs) for state governments.",
      "Local Bodies: Municipal corporations, municipalities, and Panchayats."
    ]
  },
  {
    id: 'registration',
    title: 'Voter Registration',
    icon: ClipboardCheck,
    color: 'bg-india-green',
    content: [
      "Eligibility: You must be an Indian citizen and 18+ years old.",
      "Form 6: Use this for fresh registration as a voter.",
      "Online: Register via the NVSP (National Voter's Service Portal) or Voter Helpline App.",
      "EPIC: Once registered, you will receive your Elector's Photo Identity Card."
    ]
  },
  {
    id: 'technology',
    title: 'EVM & VVPAT',
    icon: Cpu,
    color: 'bg-saffron',
    content: [
      "EVM (Electronic Voting Machine): A secure device to record and count votes.",
      "VVPAT (Voter Verifiable Paper Audit Trail): An independent system attached to EVM that allows voters to verify their vote.",
      "Security: EVMs are stand-alone machines (not connected to internet) and have multiple security layers.",
      "Transparency: A paper slip is visible for 7 seconds behind a glass window in the VVPAT."
    ]
  }
];

const Guide = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="font-bold text-navy-blue mb-6 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-saffron" /> Quick Guide
            </h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-saffron transition-all font-medium text-sm border border-transparent hover:border-saffron/20"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow space-y-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">Complete Election Guide</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Everything you need to know about exercising your democratic right in India.
            </p>
          </header>

          {sections.map((section, idx) => (
            <motion.section 
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`${section.color} text-white p-4 rounded-2xl shadow-lg`}>
                  <section.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-navy-blue">{section.title}</h2>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
                <ul className="space-y-6">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className={`mt-1.5 h-6 w-6 rounded-full ${section.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm`}>
                        {index + 1}
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-24 bg-gradient-to-r from-saffron to-india-green p-1 rounded-[3rem]">
        <div className="bg-white p-12 rounded-[2.8rem] text-center">
          <h2 className="text-4xl font-bold text-navy-blue mb-6">Need more help?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Our AI-powered Chat Assistant is available 24/7 to answer your specific questions about the election process.
          </p>
          <button onClick={() => window.location.href = '/chat'} className="btn-primary text-xl px-12 py-4">
            Ask VoteIQ Assistant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
