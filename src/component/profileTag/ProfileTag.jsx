import React, { useState, useEffect } from 'react';
import './profileTag.css';

const ProfileTag = ({ icon, text }) => {
  const [grayIcon, setGrayIcon] = useState('');

  useEffect(() => {
    const fetchSvgContent = async () => {
      try {
        const response = await fetch(icon);
        const svgText = await response.text();
        const graySvgText = svgText.replace(/fill=".*?"/g, 'fill="gray"');
        setGrayIcon(`data:image/svg+xml;utf8,${graySvgText}`);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSvgContent();
  }, [icon]);

  return (
    <div className="profile-tag">
      <img src={grayIcon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default ProfileTag;
