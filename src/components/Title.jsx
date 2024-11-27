export default function Title({ title, subtitle, className }) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`font-title antialiased text-4xl font-semibold my-7`}
      >
        {title}
      </h1>

      {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
    </div>
  );
}
