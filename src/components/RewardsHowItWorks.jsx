import React from 'react';
import { Gift, Shield, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Pay Securely',
    desc: 'Checkout like a normal store with card or UPI. Your payment is fully secured.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Play a Quick Game',
    desc: 'Right after payment, spin a wheel or flip a coin. It takes just a few seconds.',
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: 'Win Cashback',
    desc: 'Land anywhere from 5% up to 100% cashback. Refunds go to your original method.',
  },
];

const RewardsHowItWorks = () => {
  return (
    <section id="rewards" className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How the rewards work</h2>
          <p className="mt-3 text-gray-600">
            Every purchase unlocks a mini‑game with guaranteed rewards. It’s transparent, instant, and fun.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition bg-white"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-4">
          {[5, 10, 15, 25].map((p) => (
            <div
              key={p}
              className="rounded-xl border border-gray-200 p-4 text-center bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="text-3xl font-semibold">{p}%</div>
              <div className="text-sm text-gray-600">cashback tier</div>
            </div>
          ))}
          <div className="rounded-xl border border-gray-200 p-4 text-center bg-gradient-to-br from-yellow-50 to-white">
            <div className="text-3xl font-semibold">100%</div>
            <div className="text-sm text-gray-700">Jackpot</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsHowItWorks;
