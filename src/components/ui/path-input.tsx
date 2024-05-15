import * as React from "react";

import { cn } from "@/lib/utils";

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const PathInput = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex rounded-md w-fit px-1 bg-neutral-100 dark:bg-neutral-900 ring-offset-white file:border-0 file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-600 dark:focus-visible:ring-neutral-300",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// PathInput.displayName = "PathInput";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import "tailwindcss/tailwind.css";

interface PathInputInputProps {
  className?: string;
}

const PathInput: React.FC<PathInputInputProps> = ({
  className = "",
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputWidth, setInputWidth] = useState(1);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hiddenInputRef.current) {
      setInputWidth(hiddenInputRef.current.scrollWidth);
    }
  }, [inputValue]);

  return (
    <div className="inline-block relative p-1">
      <input
        ref={hiddenInputRef}
        value={inputValue}
        readOnly
        className="absolute top-0 left-0 invisible h-0 overflow-hidden p-1"
        {...props}
      />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: `${inputWidth}px` }}
        className={`p-1 box-border dark:bg-neutral-900 ${className}`}
        {...props}
      />
    </div>
  );
};

export { PathInput };
