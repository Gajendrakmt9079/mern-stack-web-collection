import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
    
    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={`font-medium ${className}`} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};