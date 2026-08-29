import type { ReactNode } from "react";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs font-bold uppercase tracking-widest text-primary">
        {label}
      </span>
      {children}
    </label>
  );
}

const base =
  "w-full border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={base} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={base} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={base} />;
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
    >
      {children}
    </button>
  );
}

export function SuccessNote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-accent bg-surface p-6">
      <h3 className="text-lg font-bold">Thank you — your enquiry has been received</h3>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
