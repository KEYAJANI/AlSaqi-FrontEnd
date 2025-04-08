import { useState, useEffect } from 'react';

export default function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when the screen resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Close the mobile menu when user clicks outside or scrolls
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Close if clicking outside the nav menu area
      if (!target.closest('nav')) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
}