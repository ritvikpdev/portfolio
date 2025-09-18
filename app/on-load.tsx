'use client';

import { useEffect } from 'react';

export default function ClientOnLoad() {
  useEffect(() => {
    // If there's a hash, strip it so we land at the top/home
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        const { pathname, search } = window.location;
        window.history.replaceState({}, '', pathname + search);
      }
      // Scroll to top on initial load
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return null;
}


