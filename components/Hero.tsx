'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { siteConfig } from '@/data/site';

export default function Hero() {
  const [typedLines, setTypedLines] = useState<string[]>(['', '', '']);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isFinishingZoom, setIsFinishingZoom] = useState<boolean>(false);

  // Lines to type
  const lines = useMemo(
    () => [
      "Hey!! I'm Ritvik.",
      'I am a developer with over 3 years of experience in creating functional applications and solutions.',
      'I aim to build user-centered digital experiences and innovative solutions according to business needs and requirements.'
    ],
    []
  );

  // Type words one by one across lines
  useEffect(() => {
    let activeLine = 0;
    let words: string[] = lines[activeLine].split(/\s+/).filter(Boolean);
    let wordIdx = 0;
    const wordDelayMs = 315; // further 50% slower than 210ms
    const lineDelayMs = 900; // proportionally slower between lines

    const typeNext = () => {
      // Completed all lines
      if (activeLine >= lines.length) {
        setIsTyping(false);
        // Keep zoom for a brief moment so buttons appear while zoomed
        setIsFinishingZoom(true);
        setTimeout(() => setIsFinishingZoom(false), 1500);
        return;
      }

      // If line just started, ensure it is empty
      setTypedLines((prev) => {
        const next = [...prev];
        if (wordIdx === 0) next[activeLine] = '';
        return next;
      });

      // Type next word for current line
      if (wordIdx < words.length) {
        const nextWord = typeof words[wordIdx] === 'string' ? words[wordIdx] : '';
        if (nextWord === '') {
          wordIdx += 1;
          setTimeout(typeNext, 0);
          return;
        }
        setTypedLines((prev) => {
          const next = [...prev];
          next[activeLine] = (next[activeLine] ? next[activeLine] + ' ' : '') + nextWord;
          return next;
        });
        wordIdx += 1;
        setTimeout(typeNext, wordDelayMs);
        return;
      }

      // Move to next line
      activeLine += 1;
      if (activeLine < lines.length) {
        words = lines[activeLine].split(/\s+/).filter(Boolean);
        wordIdx = 0;
        setTimeout(typeNext, lineDelayMs);
        return;
      }

      // Finished all
      setIsTyping(false);
    };

    const start = setTimeout(typeNext, 350);
    return () => clearTimeout(start);
  }, [lines]);

  // Hide header while zooming; ensure restored when zoom ends
  useEffect(() => {
    const headerEl = document.querySelector('header');
    if (!headerEl) return;
    if (isTyping || isFinishingZoom) {
      (headerEl as HTMLElement).style.opacity = '0';
      (headerEl as HTMLElement).style.pointerEvents = 'none';
    } else {
      (headerEl as HTMLElement).style.opacity = '1';
      (headerEl as HTMLElement).style.pointerEvents = 'auto';
      (headerEl as HTMLElement).style.zIndex = '900';
    }
    return () => {
      (headerEl as HTMLElement).style.opacity = '';
      (headerEl as HTMLElement).style.pointerEvents = '';
      (headerEl as HTMLElement).style.zIndex = '';
    };
  }, [isTyping, isFinishingZoom]);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative"
      aria-label="Hero section - Introduction"
    >
      {/* Background blur overlay while typing (keeps terminal crisp) */}
      {(isTyping || isFinishingZoom) && (
        <div
          className="fixed inset-0 z-[600] pointer-events-none bg-black/40 backdrop-blur-sm transition-opacity duration-700"
          aria-hidden="true"
        />
      )}

      <div className={`container mx-auto container-padding relative ${ (isTyping || isFinishingZoom) ? 'z-[800]' : 'z-[100]' }`}>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: (isTyping || isFinishingZoom) ? 1.4 : 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`w-full max-w-4xl rounded-xl border border-gray-800 bg-gray-900/80 shadow-xl backdrop-blur-sm`}
            aria-label="Terminal style introduction"
          >
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <div className="text-sm text-gray-400 font-medium truncate max-w-[60%]">
                ritvik.dev
              </div>
              <div className="w-16" aria-hidden="true"></div>
            </div>

            <div className="px-6 py-8 font-mono text-[15px] leading-relaxed">
              {/* Line 1 */}
              <div className="text-green-400">
                $ <span className="text-gray-100">{typedLines[0]}</span>
                {isTyping && typedLines[1] === '' && (
                  <span className="text-gray-500"> █</span>
                )}
              </div>
              {/* Line 2 */}
              <div className="text-green-400 mt-2">
                $ <span className="text-gray-300">{typedLines[1]}</span>
                {isTyping && typedLines[1] !== '' && typedLines[2] === '' && (
                  <span className="text-gray-500"> █</span>
                )}
              </div>
              {/* Line 3 */}
              <div className="text-green-400 mt-2">
                $ <span className="text-gray-300">{typedLines[2]}</span>
                {isTyping && typedLines[2] !== '' && (
                  <span className="text-gray-500"> █</span>
                )}
              </div>

              {/* Buttons appear only after typing is done (will still be visible during the smooth zoom finish) */}
              {!isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700 focus-ring"
                    aria-label="View resume PDF in new tab"
                  >
                    ./view-resume.sh
                  </motion.a>
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700 focus-ring"
                    aria-label="Scroll to contact section"
                  >
                    ./contact-me.sh
                  </motion.button>
                </motion.div>
              )}

              {/* Final blinking prompt after completion */}
              {!isTyping && (
                <div className="mt-6 text-green-400">
                  $ <span className="text-gray-500 caret-blink">█</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-8 flex justify-center space-x-6 ${isTyping ? 'blur-sm pointer-events-none opacity-70' : ''}`}
            aria-label="Social media links"
          >
            {Object.entries(siteConfig.links).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white animate-hover focus-ring"
                aria-label={`Visit ${platform} profile`}
              >
                <span className="sr-only">{platform}</span>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                  {platform === 'github' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {platform === 'linkedin' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.46c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
