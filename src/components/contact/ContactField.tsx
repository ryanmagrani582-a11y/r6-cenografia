import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";

export const ContactField = forwardRef<
  HTMLInputElement,
  { label: string; error?: string; placeholder?: string; required?: boolean } & InputHTMLAttributes<HTMLInputElement>
>(({ label, error, placeholder, required, ...props }, ref) => (
  <div className="flex flex-col gap-6">
    <h3 className="r6-h3 uppercase">{label}</h3>
    <input ref={ref} placeholder={placeholder} required={required} className={inputCn(error, "rounded-full")} {...props} />
    <Error message={error} />
  </div>
));
ContactField.displayName = "ContactField";

export const ContactTextarea = forwardRef<
  HTMLTextAreaElement,
  { label: string; error?: string; placeholder?: string; required?: boolean; rows?: number } & TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ label, error, placeholder, required, rows = 5, ...props }, ref) => (
  <div className="flex flex-col gap-6">
    <h3 className="r6-h3 uppercase">{label}</h3>
    <textarea ref={ref} rows={rows} placeholder={placeholder} required={required} className={inputCn(error, "resize-none rounded-2xl")} {...props} />
    <Error message={error} />
  </div>
));
ContactTextarea.displayName = "ContactTextarea";

export const ContactSelect = forwardRef<
  HTMLSelectElement,
  { label: string; options: { value: string; label: string }[] } & SelectHTMLAttributes<HTMLSelectElement>
>(({ label, options, ...props }, ref) => (
  <div className="relative flex flex-col gap-6">
    <h3 className="r6-h3 uppercase">{label}</h3>
    <select ref={ref} className="w-full appearance-none rounded-full border border-line bg-void px-6 py-4 text-bone focus:border-acid focus:outline-none transition-colors duration-300" {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-void">{opt.label}</option>
      ))}
    </select>
    <svg className="pointer-events-none absolute bottom-6 right-6 h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  </div>
));
ContactSelect.displayName = "ContactSelect";

function Error({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-400">{message}</p>;
}

function inputCn(error?: string, extra = "rounded-full") {
  return `w-full border ${error ? "border-red-400" : "border-line"} bg-void ${extra} px-6 py-4 text-bone placeholder:text-muted focus:border-acid focus:outline-none transition-colors duration-300`;
}