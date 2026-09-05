import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  asChild = false,
  href,
  target,
  rel,
}) => {
  const baseClasses = "flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out";

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white",
    secondary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white",
    outline:
      "border border-gradient-to-r from-purple-600 to-blue-600 bg-transparent text-purple-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses =
    "opacity-50 cursor-not-allowed hover:from-purple-600 hover:to-blue-600";

  const isDisabled = disabled || !onClick && !href;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isDisabled ? disabledClasses : ""} ${className}`.trim();

  const Component = asChild || href ? "a" : "button";

  const props: any = {
    className: classes,
    disabled: isDisabled,
    ...(href && { href, target, rel }),
    ...(!asChild && !href && { onClick }),
  };

  return <Component {...props}>{children}</Component>;
};