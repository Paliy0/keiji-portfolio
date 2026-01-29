'use client';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width = 1200,
  height = 800,
  text = 'Image',
  className = '',
}: PlaceholderImageProps) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#262626"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="system-ui, sans-serif"
        font-size="${Math.min(width, height) * 0.05}px"
        fill="#666666"
      >
        ${text}
      </text>
    </svg>
  `;

  const dataUri = `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dataUri}
      alt={text}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
}
