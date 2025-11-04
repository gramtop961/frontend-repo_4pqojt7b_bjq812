import React, { useMemo, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const PERCENTAGES = [5, 10, 15, 25, 50, 100];

const GamePreview = () => {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null);

  const displayed = useMemo(() => (result !== null ? `${result}%` : 'Flip'), [result]);

  const onFlip = () => {
    if (flipping) return;
    setFlipping(true);
    setResult(null);

    const chosen = PERCENTAGES[Math.floor(Math.random() * PERCENTAGES.length)];
    setTimeout(() => {
      setResult(chosen);
      setFlipping(false);
    }, 1400);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Try the cashback game</h2>
            <p className="mt-3 text-gray-600">
              After checkout, you’ll play a quick mini‑game like this coin toss. Your reward is applied as an instant refund to your original payment method.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Transparent odds with tiers from 5% up to a jackpot 100% refund.</li>
              <li>Fast processing with our payment partner for UPI and cards.</li>
              <li>Every order plays — no minimum spends.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-800 text-white flex items-center justify-center text-3xl font-semibold shadow-2xl"
                animate={flipping ? { rotateY: [0, 180, 360] } : { rotateY: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {displayed}
              </motion.div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onFlip}
                className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-black/90 transition"
                disabled={flipping}
              >
                {flipping ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Flipping...
                  </>
                ) : (
                  'Flip the coin'
                )}
              </button>
              {result !== null && (
                <div className="text-sm text-gray-700">You won {result}% cashback!</div>
              )}
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Demo preview. Actual reward is revealed post‑payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePreview;
