import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Call me');
  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
