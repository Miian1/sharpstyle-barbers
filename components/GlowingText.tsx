import React from 'react';

interface GlowingTextProps {
  text: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ text }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <span key={index} className="glow-letter">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

export default GlowingText;
