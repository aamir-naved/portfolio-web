import { ReactNode } from "react";

type NotebookSheetProps = {
  id?: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

export function NotebookSheet({ id, title, className = "", children }: NotebookSheetProps) {
  return (
    <section id={id} className={`notebook-sheet ${className}`}>
      {title ? (
        <div className="mb-6 flex items-center gap-3">
          <span className="doodle-star text-xl text-[#d4a82e]">★</span>
          <h2 className="handwritten text-[2.8rem] leading-none text-[#1f1a17] sm:text-[3.7rem]">{title}</h2>
          <span className="ml-auto text-2xl text-[#5679a6]">✦</span>
        </div>
      ) : null}
      {children}
    </section>
  );
}
