/** @type {import('next').NextConfig} */
const estatico = process.env.EXPORT_ESTATICO === '1';

const nextConfig = {
  // EXPORT_ESTATICO=1 gera a pasta out/ para publicar arrastando na Vercel.
  ...(estatico ? { output: 'export', images: { unoptimized: true } } : {}),
  trailingSlash: false,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  ...(estatico ? {} : { async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  } }),
};

export default nextConfig;
