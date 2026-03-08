import React from 'react';
export const metadata = {
  title: "Solutions",
};
const SolutionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default SolutionLayout;
