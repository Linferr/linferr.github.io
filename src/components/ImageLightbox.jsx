import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const image = images[currentIndex];

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.label} image preview`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/45 p-2 text-white transition hover:bg-black/60"
        aria-label="Close image preview"
      >
        <X size={18} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 rounded-full border border-white/25 bg-black/45 p-2 text-white transition hover:bg-black/60 sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <figure
        className="max-h-[90vh] max-w-[92vw] overflow-hidden rounded-2xl border border-white/15 bg-black/35 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-full object-contain"
          loading="lazy"
        />
        <figcaption className="border-t border-white/15 bg-black/55 px-4 py-3 text-center text-sm text-white/90">
          {image.label}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-3 rounded-full border border-white/25 bg-black/45 p-2 text-white transition hover:bg-black/60 sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
