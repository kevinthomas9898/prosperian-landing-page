"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface AnimationContextType {
  isReady: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ isReady: false });

export function AnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Delay animation triggers to allow page to settle
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimationContext.Provider value={{ isReady }}>
      {!isReady ? <div style={{ visibility: 'hidden', position: 'absolute' }}>{children}</div> : children}
    </AnimationContext.Provider>
  );
}

export function useAnimationReady() {
  return useContext(AnimationContext).isReady;
}
