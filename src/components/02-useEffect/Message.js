import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coord, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coord;
  useEffect(() => {
    const mouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  return (
    <div>
      <h3>Great Hooks</h3>
      <p>x: {x} : y:{y}</p>
    </div>
  );
};
