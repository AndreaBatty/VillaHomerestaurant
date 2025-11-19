import { forwardRef, ReactNode } from "react";
import "./Dialog.css";

interface DialogProps {
  title?: string;
  onClose: () => void;
  children?: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { title, onClose, children },
  ref
) {
  return (
    <dialog autoFocus ref={ref} className="dialog-container" aria-labelledby="dialog-title">
      <header className="dialog-header">
        {title && <h2 id="dialog-title">{title}</h2>}

        <button
          onClick={onClose}
          className="dialog-close"
          aria-label="Chiudi modale"
        >
          ×
        </button>
      </header>

      <div className="dialog-body">{children}</div>
    </dialog>
  );
});

export default Dialog;
