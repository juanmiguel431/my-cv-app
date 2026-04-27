import { JSX } from "react";

import { IconProps } from "../models/cv";

export function MailIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 6h18v12H3z" />
      <path d="m4 7 8 7 8-7" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M6.5 3.5 4 6a2 2 0 0 0-.3 2.4A35 35 0 0 0 15.6 20.3 2 2 0 0 0 18 20l2.5-2.5a2 2 0 0 0 .2-2.6l-1.8-2.3a2 2 0 0 0-2.5-.6l-1.7.9a2 2 0 0 1-2.2-.3l-2.2-2.2a2 2 0 0 1-.3-2.2l.9-1.7a2 2 0 0 0-.6-2.5L9.1 3.3a2 2 0 0 0-2.6.2Z" />
    </svg>
  );
}

export function GithubIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4a3.1 3.1 0 0 0-1.3-1.7c-1-.6.1-.6.1-.6a2.5 2.5 0 0 1 1.9 1.3 2.5 2.5 0 0 0 3.5 1 2.5 2.5 0 0 1 .8-1.6c-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.5 1.3-3.3a4.8 4.8 0 0 1 .1-3.2s1.1-.3 3.5 1.3a12 12 0 0 1 6.4 0c2.4-1.6 3.5-1.3 3.5-1.3.5 1 .5 2.3.1 3.2.8.8 1.3 2 1.3 3.3 0 4.6-2.8 5.6-5.5 5.9a2.9 2.9 0 0 1 .8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function SummaryIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

export function ExperienceIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 7h18v13H3z" />
      <path d="M8 7V5h8v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function ChipIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  );
}

export function GraduationIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
    </svg>
  );
}

export function BookIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1-2-2V5Z" />
      <path d="M8 3v18" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-4 w-4" }: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}
