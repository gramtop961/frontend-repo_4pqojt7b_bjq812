import React from 'react';
import Hero3D from './components/Hero3D';
import RewardsHowItWorks from './components/RewardsHowItWorks';
import FeaturedProducts from './components/FeaturedProducts';
import GamePreview from './components/GamePreview';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">CASHBACK CLOSET</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-black">Shop</a>
            <a href="#rewards" className="hover:text-black">Rewards</a>
            <a href="#game" className="hover:text-black">Play</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">Sign in</button>
            <button className="rounded-lg bg-black text-white px-3 py-2 text-sm hover:bg-black/90">Cart (0)</button>
          </div>
        </div>
      </header>

      <main>
        <Hero3D />
        <FeaturedProducts />
        <RewardsHowItWorks />
        <div id="game">
          <GamePreview />
        </div>
      </main>

      <footer className="border-t border-gray-200 py-10">
        <div className="container mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Cashback Closet. All rights reserved.</p>
          <div className="text-sm text-gray-600">
            <a href="#" className="hover:text-black">Privacy</a>
            <span className="mx-3">•</span>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
