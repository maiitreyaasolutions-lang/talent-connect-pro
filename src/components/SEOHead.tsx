import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const SITE_NAME = "Maiitreyaa Integrated Solutions LLP";
const BASE_URL = "https://maiitreyaaintegratedsolution.com";
const DEFAULT_DESCRIPTION =
  "Maiitreyaa Integrated Solutions LLP (LLPIN: ACW-8159) is a registered manpower supply company in Allahabad, UP providing skilled, semi-skilled, and unskilled workers for construction, manufacturing, and industrial projects across India.";

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Skilled, Semi-Skilled & Unskilled Manpower Supply`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
