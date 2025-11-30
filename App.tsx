import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import AIChatWidget from './components/AIChatWidget';
import { articles } from './data/articles';
import { ViewState, Category, Article } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('HOME');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');

  // Filter logic
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
    setViewState('ARTICLE_DETAIL');
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setViewState('SEARCH_RESULTS');
    setSelectedCategory('ALL');
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    setViewState('HOME');
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  };

  const currentArticle = articles.find(a => a.id === selectedArticleId);

  // --- Sub-components for Clean Layout ---

  const HeroSection = () => (
    <div className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Roof Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight font-serif">
            Protect Your Home. <br/>
            <span className="text-accent">Understand Your Roof.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            The unbiased education hub for homeowners. Learn about storm damage, insurance claims, and maintenance without the sales pressure.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => {
                setSearchQuery('Insurance');
                setViewState('SEARCH_RESULTS');
              }}
              className="bg-accent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-orange-500/20"
            >
              Start Learning
            </button>
            <button 
              onClick={() => {
                 // Trigger AI chat open - we'd need to lift state for this, but for now simple alert or scroll
                 alert("Click the orange chat button in the bottom right to talk to our AI expert!");
              }}
              className="bg-transparent border-2 border-slate-600 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Ask an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CategoryFilter = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <button 
        onClick={() => setSelectedCategory('ALL')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'ALL' ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
      >
        All Topics
      </button>
      {Object.values(Category).map(cat => (
        <button 
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onSearch={handleSearch} onHomeClick={handleHomeClick} />

      <main className="flex-grow">
        {viewState === 'HOME' && (
          <>
            <HeroSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Latest Educational Articles</h3>
                <p className="text-slate-500 max-w-2xl mx-auto">Browse our library of expert guides designed to help you make informed decisions about your property.</p>
              </div>
              
              <CategoryFilter />

              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} onClick={handleArticleClick} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                  <p className="text-slate-500 text-lg">No articles found in this category.</p>
                </div>
              )}
            </div>
          </>
        )}

        {viewState === 'SEARCH_RESULTS' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
             <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Search Results for "<span className="text-accent">{searchQuery}</span>"
                </h2>
                <button 
                  onClick={handleHomeClick}
                  className="text-sm text-slate-500 hover:text-primary underline"
                >
                  Clear Search
                </button>
             </div>
             
             {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} onClick={handleArticleClick} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
                     <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No results found</h3>
                  <p className="text-slate-500">Try adjusting your search terms or ask our AI expert for help.</p>
                </div>
              )}
          </div>
        )}

        {viewState === 'ARTICLE_DETAIL' && currentArticle && (
          <article className="bg-white">
            {/* Article Hero */}
            <div className="relative h-64 md:h-96 w-full">
               <img src={currentArticle.imageUrl} alt={currentArticle.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
                  <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    {currentArticle.category}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                    {currentArticle.title}
                  </h1>
                  <div className="flex items-center text-slate-300 text-sm space-x-4">
                    <span className="font-medium text-white">{currentArticle.author}</span>
                    <span>•</span>
                    <span>{currentArticle.date}</span>
                    <span>•</span>
                    <span>{currentArticle.readTime} min read</span>
                  </div>
               </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
               <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-accent hover:prose-a:text-orange-700 mx-auto">
                 <div dangerouslySetInnerHTML={{ __html: currentArticle.content }} />
               </div>
               
               {/* CTA Box */}
               <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Need a Professional Opinion?</h3>
                  <p className="text-slate-600 mb-6">
                    If you suspect damage after reading this, don't wait. Get a comprehensive, no-obligation roof inspection today.
                  </p>
                  <button className="bg-primary hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                    Schedule Free Inspection
                  </button>
               </div>
            </div>
            
            {/* Related/More Articles Nav */}
             <div className="max-w-7xl mx-auto px-4 py-8 border-t border-slate-100 mb-8">
                <button 
                  onClick={handleHomeClick}
                  className="flex items-center text-slate-600 hover:text-accent font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to Articles
                </button>
             </div>
          </article>
        )}
      </main>

      <AIChatWidget />
      <Footer />
    </div>
  );
};

export default App;