import { useEffect, useState } from 'react';
import sellerCursor from '../assets/seller-cursor.png';

const CursorAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    document.addEventListener('mousemove', updatePosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x - 40,
        top: position.y - 40,
        transform: `scale(${isHovered ? 1.5 : 1}) rotate(${isHovered ? '360deg' : '0deg'})`,
      }}
    >
      <div className="cursor-seller">
        <img 
          src={sellerCursor} 
          alt="Seller" 
          className="w-10 h-10 object-contain filter brightness-0 invert"
        />
      </div>
    </div>
  );
};

export default CursorAnimation;