import { useRef, useState } from "react";
import ImageLightbox from "./ImageLightbox";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const STACK_BASE_TOP = 72;
const STACK_STEP_Y = 34;

export default function ArcBriefShowcase({ images, side = "right", projectName, children }) {
  const previewRef = useRef(null);
  const [isDesktopActive, setIsDesktopActive] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function showDesktopPreview() {
    setIsDesktopActive(true);
  }

  function hideDesktopPreview() {
    setIsDesktopActive(false);
  }

  function updateIndexFromPreviewPointer(event) {
    const previewNode = previewRef.current;
    if (!previewNode) {
      return;
    }
    const rect = previewNode.getBoundingClientRect();
    if (!rect.height) {
      return;
    }

    const pointerY = event.clientY - rect.top;
    const minY = STACK_BASE_TOP;
    const maxY = STACK_BASE_TOP + STACK_STEP_Y * (images.length - 1);
    const clampedY = clamp(pointerY, minY, maxY);
    const nextIndex = Math.round((clampedY - STACK_BASE_TOP) / STACK_STEP_Y);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  }

  function handleCardClick(event) {
    if (event.target.closest("a,button,input,textarea,select,label")) {
      return;
    }
    setIsMobileExpanded((value) => !value);
  }

  function openLightbox() {
    setLightboxIndex(activeIndex);
  }

  function openLightboxAt(index) {
    setActiveIndex(index);
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function showPrev() {
    setActiveIndex((value) => (value - 1 + images.length) % images.length);
    setLightboxIndex((value) => {
      if (value === null) {
        return value;
      }
      return (value - 1 + images.length) % images.length;
    });
  }

  function showNext() {
    setActiveIndex((value) => (value + 1) % images.length);
    setLightboxIndex((value) => {
      if (value === null) {
        return value;
      }
      return (value + 1) % images.length;
    });
  }

  const sideClass = side === "left" ? "right-full mr-4 xl:mr-6" : "left-full ml-4 xl:ml-6";
  const hotZoneClass = side === "left" ? "right-full mr-2 xl:mr-3" : "left-full ml-2 xl:ml-3";

  return (
    <div
      className="relative"
      onMouseEnter={showDesktopPreview}
      onMouseLeave={hideDesktopPreview}
      onClick={handleCardClick}
    >
      <div
        className={[
          "relative rounded-2xl transition-all duration-200",
          isDesktopActive ? "ring-1 ring-accent/30 shadow-[0_24px_56px_-32px_rgba(24,28,27,0.45)]" : ""
        ].join(" ")}
      >
        {children}
      </div>

      <div
        className={["absolute top-2 hidden h-[70%] w-28 md:block", hotZoneClass].join(" ")}
        onMouseEnter={showDesktopPreview}
        aria-hidden="true"
      />

      <aside
        className={[
          "absolute top-2 hidden w-72 transition-all duration-300 ease-out md:block",
          sideClass,
          isDesktopActive ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        ].join(" ")}
        aria-hidden={!isDesktopActive}
      >
        <div
          ref={previewRef}
          className="relative h-72"
          onMouseEnter={showDesktopPreview}
          onMouseMove={updateIndexFromPreviewPointer}
        >
          {images.map((image, index) => {
            const delta = index - activeIndex;
            const distance = Math.abs(delta);
            const scale = Math.max(0.76, 1 - distance * 0.08);
            const opacity = Math.max(0.25, 1 - distance * 0.2);
            const outwardSign = side === "left" ? -1 : 1;
            const translateX = outwardSign * distance * 14;
            const translateY = delta * STACK_STEP_Y;
            const rotate = delta * (side === "left" ? -1.25 : 1.25);

            return (
              <button
                key={image.src}
                type="button"
                className={[
                  "absolute top-[4.5rem] h-36 w-60 overflow-hidden border border-line/70 bg-white/85 shadow-xl transition-all duration-300",
                  side === "left" ? "right-1" : "left-1",
                  index === activeIndex ? "cursor-zoom-in" : "cursor-default"
                ].join(" ")}
                style={{
                  transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                  opacity,
                  zIndex: 40 - distance,
                  borderRadius: "14px / 24px"
                }}
                tabIndex={-1}
                aria-label={image.label}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  openLightboxAt(index);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </button>
            );
          })}

          <div
            className={[
              "absolute top-[4.9rem] z-[80] flex items-center gap-1.5 rounded-full border border-line/70 bg-white/95 px-2 py-1 shadow-md",
              side === "left" ? "right-3" : "left-3"
            ].join(" ")}
          >
            {images.map((image, index) => (
              <span
                key={`${image.src}-dot`}
                className={[
                  "rounded-full transition-all duration-200",
                  index === activeIndex ? "h-2.5 w-2.5 bg-ink/80" : "h-2 w-2 bg-ink/30"
                ].join(" ")}
                aria-hidden="true"
              />
            ))}
          </div>

          <div
            className={[
              "absolute top-[13.95rem] z-[70] w-60",
              side === "left" ? "right-1" : "left-1"
            ].join(" ")}
          >
            <p className="text-center text-sm font-semibold tracking-[0.01em] text-ink">
              {images[activeIndex]?.label}
            </p>
          </div>
        </div>
      </aside>

      {isMobileExpanded ? (
        <div className="mt-3 rounded-xl border border-line/80 bg-paper/65 p-3 md:hidden">
          <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-[0.12em] text-pine/75">
            <span>{projectName} preview</span>
            <span>
              {activeIndex + 1}/{images.length}
            </span>
          </div>

          <button
            type="button"
            className="w-full overflow-hidden border border-line/80 bg-white/85"
            style={{ borderRadius: "12px / 20px" }}
            onClick={(event) => {
              event.stopPropagation();
              openLightbox();
            }}
            aria-label={`Open ${images[activeIndex].label} image`}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="h-40 w-full object-cover object-top"
              loading="lazy"
            />
          </button>

          <div className="mt-2 flex items-center gap-1.5 px-1">
            {images.map((image, index) => (
              <span
                key={`${image.src}-mobile-dot`}
                className={[
                  "rounded-full transition-all duration-200",
                  index === activeIndex ? "h-2.5 w-2.5 bg-ink/80" : "h-2 w-2 bg-ink/30"
                ].join(" ")}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-2 px-1 text-sm font-medium text-ink">{images[activeIndex].label}</p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              className="rounded-lg border border-line/90 bg-white/85 px-3 py-2 text-sm text-ink/80"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-lg border border-line/90 bg-white/85 px-3 py-2 text-sm text-ink/80"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}

      {lightboxIndex !== null ? (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </div>
  );
}
