import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
}

const SITE_NAME = "Maiitreyaa Integrated Solutions LLP";
const BASE_URL = "https://maiitreyaaintegratedsolution.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
  "Maiitreyaa Integrated Solutions LLP (LLPIN: ACW-8159) is a registered manpower supply company in Allahabad, UP providing skilled, semi-skilled, and unskilled workers for construction, manufacturing, and industrial projects across India.";

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  imageAlt = "Maiitreyaa Integrated Solutions LLP — Manpower Supply Company",
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Skilled, Semi-Skilled & Unskilled Manpower Supply`;
  const url = `${BASE_URL}${path}`;
  const absoluteImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
};

export default SEOHead;
