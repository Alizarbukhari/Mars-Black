declare module '@studio-freight/lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal';
    smooth?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
  }

   interface ScrollEvent {
    scroll: number;
    // You can add more properties here if needed (e.g. progress, velocity, etc.)
  }
  class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    destroy(): void;
    on(event: 'scroll', callback: (event: ScrollEvent) => void): void;
    off(event: 'scroll', callback: (event: ScrollEvent) => void): void;
  }

  export default Lenis;
}