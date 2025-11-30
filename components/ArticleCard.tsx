import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: (id: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer flex flex-col h-full"
      onClick={() => onClick(article.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {article.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-slate-500 mb-3 space-x-2">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
          <span className="text-sm font-medium text-accent flex items-center group-hover:underline">
            Read Article 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;