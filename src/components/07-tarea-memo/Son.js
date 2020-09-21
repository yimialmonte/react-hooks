import React from 'react';

export const Son = React.memo(({ number, incrementar }) => {
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(number)}
    >
      {number}
    </button>
  );
});
