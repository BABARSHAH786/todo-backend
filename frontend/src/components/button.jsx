// import React from "react";

// export function Button({
//   variant = "primary",
//   size = "md",
//   className = "",
//   children,
//   ...props
// }) {
//   const baseStyles =
//     "font-medium rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all duration-200";

//   const variants = {
//     primary: "bg-primary text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md",
//     secondary: "bg-secondary text-foreground hover:bg-secondary-dark border border-border active:bg-border",
//     outline: "border-2 border-primary text-primary hover:bg-primary-lighter active:bg-blue-100",
//   };

//   const sizes = {
//     sm: "px-3 py-1.5 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }




// new
import React from "react";

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 active:scale-95 transition-all";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
