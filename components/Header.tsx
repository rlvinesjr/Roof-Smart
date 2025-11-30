import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onHomeClick }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={onHomeClick}>
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg shadow-orange-200">
              R
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">RoofSmart</h1>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Education Hub</p>
            </div>
          </div>

          {/* Desktop Search & Nav */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Search articles (e.g., 'hail damage', 'insurance')..."
                className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-5 pr-12 text-sm text-slate-800 focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={onHomeClick} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Articles</button>
            <a href="#footer" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</a>
            <button className="bg-primary hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-sm">
              Free Inspection
            </button>
          </div>
          
          {/* Mobile Menu Button (simplified) */}
          <div className="md:hidden">
             <button className="text-slate-500 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
          </div>
        </div>
        
        {/* Mobile Search (visible only on mobile) */}
        <div className="md:hidden pb-4">
             <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-slate-100 border-none rounded-lg py-2 pl-4 pr-10 text-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </form>
        </div>
      </div>
    </header>
  );
};

export default Header;