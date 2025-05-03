export default function PageContainer({
  children,
  className = "",
  full = false,
}) {
  return (
    <div
      className={`${
        full ? "w-full" : "max-w-7xl mx-auto"
      } px-4 sm:px-6 lg:px-8 py-10 ${className}`}
    >
      {children}
    </div>
  );
}
