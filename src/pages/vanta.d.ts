declare global {
    interface Window {
      VANTA: {
        [key: string]: (options: {
          el: string | HTMLElement,
          mouseControls?: boolean,
          touchControls?: boolean,
          gyroControls?: boolean,
          minHeight?: number,
          minWidth?: number,
          scale?: number,
          scaleMobile?: number,
          color?: number,
          backgroundColor?: number
        }) => void;
      };
    }
  }
  
  export {};