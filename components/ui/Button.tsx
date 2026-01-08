import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-[#93B532] text-white hover:bg-[#7a9629] focus:ring-[#93B532]',
    secondary:
      'bg-[#0F2F02] text-white hover:bg-green-900 focus:ring-[#0F2F02]',
    outline:
      'border-2 border-[#93B532] text-[#93B532] hover:bg-[#93B532] hover:text-white',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E]',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}>
      {children}
    </button>
  );
};
