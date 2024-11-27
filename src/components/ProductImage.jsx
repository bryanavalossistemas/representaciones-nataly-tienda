export default function ProductImage({
  src,
  alt,
  className,
  style,
  width,
  height,
}) {
  return (
    <img
      src={src ? src : "/logo.png"}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
    />
  );
}
