import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VISION6_FORM_SRC =
  'https://app4.vision6.com.au/em/forms/subscribe.php?db=1018224&s=1046963&a=147654&k=1,Aw644r6Reng5eT5RsJe1Ok4-B7eg8tEFMhdebZQcKLw&emb=1';

const FORM_DOCUMENT = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <base target="_parent" />
    <style>
      html, body { margin: 0; padding: 16px; background: #ffffff; }
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1c1917; }
    </style>
  </head>
  <body>
    <script language="JavaScript" type="text/javascript" charset="utf-8" src="${VISION6_FORM_SRC}"></script>
  </body>
</html>`;

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Join the AI²Site waitlist"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg h-[min(85vh,640px)] flex flex-col bg-dark-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <h2 className="text-white font-semibold text-base">Join the AI²Site waitlist</h2>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <iframe
          title="Join the AI²Site waitlist form"
          srcDoc={FORM_DOCUMENT}
          className="w-full flex-1 min-h-0 bg-white"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation-by-user-activation"
        />
      </div>
    </div>
  );
}
