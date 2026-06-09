import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../../data/siteData';

export default function SEO({
  title,
  description,
  path = '',
}) {
  const fullTitle = title
    ? `${title} | ${COMPANY.name}`
    : `${COMPANY.name} | ${COMPANY.tagline}`;
  const metaDescription =
    description ||
    'Launch Layer builds high-performance websites, web applications, SaaS platforms, and e-commerce stores for startups and enterprises.';

  const url = `https://launchlayer.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
