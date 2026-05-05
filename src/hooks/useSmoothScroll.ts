import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Smooth scroll with offset for navbar
            const navbarHeight = 100;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
