"use client";
import cn from "@/utils/cn";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(
        `w-full bg-[#047857] p-2.5 text-white rounded-sm font-medium text-sm uppercase hover:opacity-85 duration-300 cursor-pointer`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
