import { useState } from 'react';
import { Tag } from '../types/types';

interface HeaderProps {
  tags: Tag[];
  activeTag: string | null;
  setActiveTag: (tagName: string | null) => void;
}

const Header = ({ tags, activeTag, setActiveTag }: HeaderProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">BuyLow</h1>
            <p className="ml-3 text-sm text-gray-500 hidden md:block">Find the best deals across the web</p>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <nav className={`mt-4 ${showMobileMenu ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-wrap gap-2">
            <li>
              <button
                onClick={() => setActiveTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === null
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All
              </button>
            </li>
            {tags.map((tag) => (
              <li key={tag.id}>
                <button
                  onClick={() => setActiveTag(tag.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTag === tag.name
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tag.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 