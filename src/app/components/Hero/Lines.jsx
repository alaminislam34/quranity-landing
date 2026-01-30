"use client";

const InfiniteGrid = () => {
  const gap = 50; // Your strict 50px gap

  return (
    <div
      className="absolute top-0 left-0 w-full h-full min-h-screen overflow-hidden pointer-events-none -z-50"
      style={{
        maskImage: "radial-gradient(circle, black 40%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 90%)",
      }}
    >
      <div
        className="absolute opacity-50 inset-0 w-full h-full"
        style={{
          // Creates a fixed grid using linear gradients
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${gap}px ${gap}px`, // This forces the 50px x 50px squares
        }}
      />
    </div>
  );
};

export default InfiniteGrid;
