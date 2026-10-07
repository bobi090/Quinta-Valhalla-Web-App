import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown, Check } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────── */
/*  Select – a fully custom dropdown that replaces native <select>.        */
/*  API mirrors shadcn's Select for familiarity but is implemented with    */
/*  zero external dependencies beyond Lucide icons.                        */
/* ──────────────────────────────────────────────────────────────────────── */

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  /** Currently selected value (controlled). */
  value: string;
  /** Callback when value changes. */
  onValueChange: (value: string) => void;
  /** List of options. */
  options: SelectOption[];
  /** Placeholder text when nothing is selected. */
  placeholder?: string;
  /** Additional className for the trigger button. */
  className?: string;
  /** id for accessibility / form labels. */
  id?: string;
  /** name attribute for form submission. */
  name?: string;
  /** Disable the select. */
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = 'Seleccionar…',
  className,
  id,
  name,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  /* ── Close on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ── Close on Escape ── */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  /* ── Keyboard navigation ── */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
        e.preventDefault();
        setOpen(true);
        setHighlightedIndex(options.findIndex((o) => o.value === value));
        return;
      }

      if (!open) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev + 1) % options.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            onValueChange(options[highlightedIndex].value);
            setOpen(false);
          }
          break;
        case 'Escape':
          setOpen(false);
          break;
        default:
          break;
      }
    },
    [open, highlightedIndex, options, value, onValueChange, disabled]
  );

  /* ── Scroll highlighted option into view ── */
  useEffect(() => {
    if (!open || highlightedIndex < 0 || !listRef.current) return;
    const items = listRef.current.querySelectorAll('[role="option"]');
    items[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
  }, [highlightedIndex, open]);

  return (
    <div ref={containerRef} className="relative w-full" onKeyDown={handleKeyDown}>
      {/* Hidden native input for form submission */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Trigger button */}
      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={disabled}
        onClick={() => { if (!disabled) { setOpen(!open); setHighlightedIndex(options.findIndex((o) => o.value === value)); } }}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 text-sm font-sans text-on-surface transition-all duration-300',
          'hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none',
          open && 'border-primary ring-1 ring-primary',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <span className={cn(!selectedOption && 'text-outline-variant')}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className={cn(
            'text-on-surface-variant shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown content */}
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-activedescendant={
            highlightedIndex >= 0 ? `select-option-${options[highlightedIndex].value}` : undefined
          }
          className={cn(
            'absolute z-50 mt-1.5 w-full max-h-60 overflow-y-auto rounded-xl border border-outline-variant/40 bg-surface-container-lowest shadow-lg',
            'py-1.5 focus:outline-none',
            // entry animation
            'animate-in fade-in-0 zoom-in-95'
          )}
          style={{
            animation: 'selectFadeIn 150ms ease-out',
          }}
        >
          {options.map((option, idx) => {
            const isSelected = option.value === value;
            const isHighlighted = idx === highlightedIndex;
            return (
              <li
                key={option.value}
                id={`select-option-${option.value}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlightedIndex(idx)}
                onClick={() => {
                  onValueChange(option.value);
                  setOpen(false);
                }}
                className={cn(
                  'flex items-center justify-between px-4 py-2.5 text-sm font-sans cursor-pointer transition-colors duration-150',
                  isHighlighted && 'bg-primary/[0.06]',
                  isSelected
                    ? 'text-primary font-semibold'
                    : 'text-on-surface hover:bg-primary/[0.04]'
                )}
              >
                <span>{option.label}</span>
                {isSelected && (
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className="text-primary shrink-0"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Inline keyframe animation for the dropdown */}
      {open && (
        <style>{`
          @keyframes selectFadeIn {
            from { opacity: 0; transform: scale(0.97) translateY(-4px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      )}
    </div>
  );
};
