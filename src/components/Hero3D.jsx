import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          aria-label="3D credit card hero"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative container mx-auto px-6 sm:px-8 h-full flex items-end sm:items-center">
        <div className="max-w-2xl pb-12 sm:pb-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs sm:text-sm border border-white/15">
            <Sparkles size={16} className="text-yellow-300" />
            <span>Shop fashion. Win instant cashback.</span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight">
            Gamified shopping that pays you back
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Buy your favorite fits at full price, then play a quick game to unlock a random cashback — from 5% to a lucky 100% refund.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium shadow-lg hover:shadow-xl transition"
            >
              Shop New Arrivals <ArrowRight size={18} />
            </a>
            <a
              href="#rewards"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur hover:bg-white/15 transition"
            >
              How rewards work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
