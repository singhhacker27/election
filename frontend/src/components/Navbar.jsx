import React from 'react';
import { Link } from 'react-router-dom';
import { Vote, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Vote className="h-8 w-8 text-saffron" />
              <span className="text-2xl font-bold bg-gradient-to-r from-saffron via-navy-blue to-india-green bg-clip-text text-transparent">
                VoteIQ
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/guide" className="text-gray-700 hover:text-saffron transition-colors font-medium">Guide</Link>
            <Link to="/timeline" className="text-gray-700 hover:text-saffron transition-colors font-medium">Timeline</Link>
            <Link to="/flashcards" className="text-gray-700 hover:text-saffron transition-colors font-medium">Flashcards</Link>
            <Link to="/quiz" className="text-gray-700 hover:text-saffron transition-colors font-medium">Quiz</Link>
            <Link to="/chat" className="btn-primary">Ask Assistant</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-saffron p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 space-y-1">
            <Link to="/guide" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Guide</Link>
            <Link to="/timeline" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Timeline</Link>
            <Link to="/flashcards" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Flashcards</Link>
            <Link to="/quiz" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Quiz</Link>
            <Link to="/chat" className="block px-3 py-2 bg-saffron text-white rounded-md text-center mt-4">Ask Assistant</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
