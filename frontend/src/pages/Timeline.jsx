import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, UserPlus, FileEdit, Users, Vote, BarChart3, ChevronDown } from 'lucide-react';

const timelineSteps = [
  {
    title: "Announcement",
    description: "The Election Commission of India (ECI) announces the election schedule. The Model Code of Conduct comes into effect immediately.",
    icon: Megaphone,
    color: "bg-saffron",
    details: "This includes dates for nominations, polling, and counting. From this moment, the government cannot announce new projects or schemes to influence voters."
  },
  {
    title: "Voter Registration",
    description: "Citizens ensure they are on the Electoral Roll. New voters can register via Form 6.",
    icon: UserPlus,
    color: "bg-navy-blue",
    details: "The ECI updates the voter list. You can check your name on the electoral search portal using your EPIC number."
  },
  {
    title: "Nominations",
    description: "Candidates file their nomination papers and provide affidavits about their background.",
    icon: FileEdit,
    color: "bg-india-green",
    details: "Affidavits include information about criminal records, assets, liabilities, and educational qualifications, which are made public."
  },
  {
    title: "Campaigning",
    description: "Political parties and candidates reach out to voters with their manifestos and promises.",
    icon: Users,
    color: "bg-saffron",
    details: "Campaigning must stop 48 hours before the conclusion of polling (Silent Period) to allow voters to reflect."
  },
  {
    title: "Voting Day",
    description: "Voters go to polling booths to cast their votes using Electronic Voting Machines (EVMs).",
    icon: Vote,
    color: "bg-navy-blue",
    details: "Voters must carry a valid ID. After voting, an indelible ink mark is applied to the finger to prevent multiple voting."
  },
  {
    title: "Counting & Results",
    description: "Votes are counted at designated centers, and the candidate with the most votes is declared the winner.",
    icon: BarChart3,
    color: "bg-india-green",
    details: "The counting process is closely monitored by agents of all candidates to ensure transparency. Results are officially notified by the ECI."
  }
];

const Timeline = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-navy-blue mb-4">Election Process Journey</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Understand the journey of the world's largest democratic exercise, from the first announcement to the final results.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

        <div className="space-y-12">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 w-full md:w-1/2 p-6">
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 group">
                  <div className={`inline-block p-3 rounded-2xl ${step.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  <details className="group/details">
                    <summary className="list-none cursor-pointer flex items-center gap-2 text-saffron font-bold hover:gap-3 transition-all">
                      Learn More <ChevronDown className="h-4 w-4 transition-transform group-open/details:rotate-180" />
                    </summary>
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl text-sm text-gray-700 leading-relaxed border-l-4 border-saffron">
                      {step.details}
                    </div>
                  </details>
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative flex items-center justify-center w-12 h-12 md:mx-8">
                <div className={`w-6 h-6 rounded-full ${step.color} border-4 border-white shadow-lg z-10`}></div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-navy-blue p-12 rounded-3xl text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to test your knowledge?</h2>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          Now that you've seen the process, why not take a quick quiz to see how much you remember?
        </p>
        <button onClick={() => window.location.href = '/quiz'} className="btn-primary">
          Go to Quiz
        </button>
      </div>
    </div>
  );
};

export default Timeline;
