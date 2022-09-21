import { FC } from "react";

interface SectionHeadingProps {
  children: any;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="container relative p-4 mx-auto">
      <span className="absolute rounded-full h-2 w-[20%] md:w-[10%] bottom-0 bg-orange-500/90"></span>
      <span className="absolute rounded-full h-2 w-[12%] md:w-[7%] -bottom-3 bg-orange-500/90"></span>
      {children}
    </div>
  );
};

export default SectionHeading;
