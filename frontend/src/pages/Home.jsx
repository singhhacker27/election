import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Library, 
  Trophy, 
  History, 
  BookOpen, 
  ChevronRight,
  ShieldCheck,
  Users,
  Vote
} from 'lucide-react';
import { motion } from 'framer-motion';
import gandhiImg from '../assets/freedom-fighters/gandhi.png';
import bhagatImg from '../assets/freedom-fighters/bhagat.jpg';
import boseImg from '../assets/freedom-fighters/bose.png';
import votingImg from '../assets/voting-day.png';

const modules = [
  {
    title: 'AI Chat Assistant',
    description: 'Ask anything about Indian elections and get instant, friendly answers.',
    icon: MessageSquare,
    link: '/chat',
    color: 'bg-saffron',
    delay: 0.1
  },
  {
    title: 'Flashcards',
    description: 'Quickly learn key election terms with interactive cards.',
    icon: Library,
    link: '/flashcards',
    color: 'bg-india-green',
    delay: 0.2
  },
  {
    title: 'Interactive Quiz',
    description: 'Test your knowledge and earn badges as you learn.',
    icon: Trophy,
    link: '/quiz',
    color: 'bg-navy-blue',
    delay: 0.3
  },
  {
    title: 'Election Timeline',
    description: 'Follow the journey from announcement to results.',
    icon: History,
    link: '/timeline',
    color: 'bg-saffron',
    delay: 0.4
  },
  {
    title: 'Election Guide',
    description: 'In-depth information on how to vote and registration.',
    icon: BookOpen,
    link: '/guide',
    color: 'bg-india-green',
    delay: 0.5
  }
];

const Home = () => {
  return (
    <div className="pb-12">
      {/* Tricolor Border at Top */}
      <div className="h-0.5 w-full flex opacity-60">
        <div className="h-full w-1/3 bg-saffron"></div>
        <div className="h-full w-1/3 bg-white"></div>
        <div className="h-full w-1/3 bg-india-green"></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron/10 via-white to-india-green/10 py-20 px-4 relative overflow-hidden">

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy-blue mb-6">
              Empowering Every <span className="text-saffron">Vote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Master the world's largest democratic process with VoteIQ. 
              Fun, interactive, and easy to follow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/chat" className="btn-primary text-lg px-8 py-3">
                Start Learning
              </Link>
              <Link to="/quiz" className="btn-outline text-lg px-8 py-3">
                Take a Quiz
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="p-3 bg-saffron/20 rounded-xl text-saffron">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">ECI Verified</h3>
              <p className="text-sm text-gray-500">Based on official data</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="p-3 bg-india-green/20 rounded-xl text-india-green">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">900M+ Voters</h3>
              <p className="text-sm text-gray-500">World's largest electorate</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="p-3 bg-navy-blue/20 rounded-xl text-navy-blue">
              <Vote className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Every Vote Counts</h3>
              <p className="text-sm text-gray-500">Learn why yours matters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: module.delay }}
            >
              <Link 
                to={module.link}
                className="group block bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${module.color} opacity-5 -mr-8 -mt-8 rounded-full transition-all group-hover:scale-150 duration-500`}></div>
                
                <div className={`${module.color} text-white p-4 rounded-2xl inline-block mb-6 shadow-lg`}>
                  <module.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-saffron transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {module.description}
                </p>
                
                <div className="flex items-center text-navy-blue font-semibold group-hover:gap-2 transition-all">
                  Get Started <ChevronRight className="h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Democracy in Action Section */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-navy-blue mb-6">Democracy in Action</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              India's elections are the largest democratic exercise in the world. From the highest peaks of the Himalayas to the smallest islands in the Indian Ocean, every vote matters. Experience the power of your participation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-india-green font-bold">
                <ShieldCheck className="h-6 w-6" />
                <span>100% Secure & Transparent Process</span>
              </div>
              <div className="flex items-center gap-4 text-saffron font-bold">
                <Vote className="h-6 w-6" />
                <span>Your Voice, Your Future</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
            <img 
              src={votingImg} 
              alt="People Voting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden"></div>
          </div>
        </div>
      </section>

      {/* Freedom Fighters Section */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-blue mb-4">Salute to the Guardians of Democracy</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-saffron via-gray-200 to-india-green mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Honoring the visionaries who fought for our right to choose our leaders. 
            Their sacrifice made our democracy possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Mahatma Gandhi", image: gandhiImg, quote: "The power to question is the basis of all human progress." },
            { name: "Shaheed Bhagat Singh", image: bhagatImg, quote: "They may kill me, but they cannot kill my ideas." },
            { name: "Netaji Subhash Bose", image: boseImg, quote: "Freedom is not given, it is taken." }
          ].map((hero, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[3/4]"
            >
              <img 
                src={hero.image} 
                alt={hero.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{hero.name}</h3>
                <p className="text-sm italic opacity-80 leading-relaxed border-l-2 border-saffron pl-4">
                  "{hero.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
