import React, { useState, forwardRef } from 'react';
import { cn } from '../lib/utils';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showClearButton?: boolean;
  showPasswordToggle?: boolean;
  onClear?: () => void;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      value = '',
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled = false,
      invalid = false,
      loading = false,
      variant = 'outlined',
      size = 'md',
      showClearButton = false,
      showPasswordToggle = false,
      onClear,
      type = 'text',
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputId] = useState(() => id || `input-${Math.random().toString(36).substr(2, 9)}`);
    const [labelId] = useState(() => `label-${inputId}`);
    const [helperId] = useState(() => `helper-${inputId}`);
    const [errorId] = useState(() => `error-${inputId}`);

    const isPassword = type === 'password';
    const inputType = isPassword && showPasswordToggle ? (showPassword ? 'text' : 'password') : type;
    const hasValue = value !== undefined && value !== '';
    const hasError = invalid || errorMessage;

    const baseInputClasses = cn(
      'w-full transition-all duration-200 ease-in-out font-medium',
      'focus:outline-none focus:ring-2 focus:ring-offset-0',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'placeholder:text-gray-400 dark:placeholder:text-gray-500'
    );

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    };

    const variantClasses = {
      filled: cn(
        'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
        'focus:bg-white dark:focus:bg-gray-900 focus:border-primary-500 dark:focus:border-primary-400',
        'hover:bg-gray-100 dark:hover:bg-gray-700',
        hasError && 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400'
      ),
      outlined: cn(
        'bg-transparent border border-gray-300 dark:border-gray-600',
        'focus:border-primary-500 dark:focus:border-primary-400',
        'hover:border-gray-400 dark:hover:border-gray-500',
        hasError && 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400'
      ),
      ghost: cn(
        'bg-transparent border-b border-gray-300 dark:border-gray-600',
        'focus:border-primary-500 dark:focus:border-primary-400',
        'hover:border-gray-400 dark:hover:border-gray-500',
        'rounded-none',
        hasError && 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400'
      ),
    };

    const focusRingClasses = {
      filled: 'focus:ring-primary-500/20 dark:focus:ring-primary-400/20',
      outlined: 'focus:ring-primary-500/20 dark:focus:ring-primary-400/20',
      ghost: 'focus:ring-primary-500/20 dark:focus:ring-primary-400/20',
    };

    const inputClasses = cn(
      baseInputClasses,
      sizeClasses[size],
      variantClasses[variant],
      focusRingClasses[variant],
      variant !== 'ghost' && 'rounded-lg',
      className
    );

    const labelClasses = cn(
      'block font-medium transition-colors duration-200',
      size === 'sm' && 'text-sm mb-1',
      size === 'md' && 'text-sm mb-2',
      size === 'lg' && 'text-base mb-2',
      hasError ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
    );

    const helperTextClasses = cn(
      'text-sm transition-colors duration-200',
      size === 'sm' && 'mt-1',
      size === 'md' && 'mt-2',
      size === 'lg' && 'mt-2',
      hasError ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
    );

    const handleClear = () => {
      if (onClear) {
        onClear();
      } else if (onChange) {
        const event = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelClasses} id={labelId}>
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled || loading}
            aria-invalid={hasError}
            aria-describedby={
              cn(
                helperText && helperId,
                errorMessage && errorId
              ) || undefined
            }
            aria-labelledby={label ? labelId : undefined}
            className={inputClasses}
            {...props}
          />
          
          {/* Loading Spinner */}
          {loading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-primary-500"></div>
            </div>
          )}
          
          {/* Clear Button */}
          {showClearButton && hasValue && !loading && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear input"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          {/* Password Toggle */}
          {showPasswordToggle && isPassword && !loading && !disabled && (
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          )}
        </div>
        
        {/* Helper Text */}
        {helperText && !errorMessage && (
          <p className={helperTextClasses} id={helperId}>
            {helperText}
          </p>
        )}
        
        {/* Error Message */}
        {errorMessage && (
          <p className={cn(helperTextClasses, 'text-red-600 dark:text-red-400')} id={errorId}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
