import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[1000] bg-primary transition-all ease-in">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="loader flex space-x-1">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'].map((char, index) => (
            <span
              key={index}
              className="text-white text-[26px] animate-[loaderflip_2s_infinite]"
              style={{ animationDelay: `${100 * (index + 1)}ms` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
