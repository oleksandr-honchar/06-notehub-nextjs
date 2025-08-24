import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "@/components/Modal/Modal.module.css";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>,
    document.body
  );
}