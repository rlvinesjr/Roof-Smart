import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-primary text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-bold mr-2">
                  R
                </div>
                <span className="text-xl font-bold text-white">RoofSmart</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Empowering homeowners with the knowledge they need to make smart decisions about their roof and insurance.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Insurance Claims</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Storm Damage</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Materials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Glossary</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Find a Contractor</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                1-800-ROOF-EDU
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                help@roofsmart.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} RoofSmart Education Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;