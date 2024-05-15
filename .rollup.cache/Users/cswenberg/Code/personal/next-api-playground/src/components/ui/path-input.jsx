import { __rest } from "tslib";
import * as React from "react";
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
import { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";
var PathInput = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["className"]);
    var _c = useState(""), inputValue = _c[0], setInputValue = _c[1];
    var _d = useState(1), inputWidth = _d[0], setInputWidth = _d[1];
    var hiddenInputRef = useRef(null);
    useEffect(function () {
        if (hiddenInputRef.current) {
            setInputWidth(hiddenInputRef.current.scrollWidth);
        }
    }, [inputValue]);
    return (<div className="inline-block relative p-1">
      <input ref={hiddenInputRef} value={inputValue} readOnly className="absolute top-0 left-0 invisible h-0 overflow-hidden p-1" {...props}/>
      <input value={inputValue} onChange={function (e) { return setInputValue(e.target.value); }} style={{ width: "".concat(inputWidth, "px") }} className={"p-1 box-border dark:bg-neutral-900 ".concat(className)} {...props}/>
    </div>);
};
export { PathInput };
//# sourceMappingURL=path-input.jsx.map