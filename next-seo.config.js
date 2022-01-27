const title = `Portfolio | Patrick Lima`;
const description =
  'Patrick Lima is a Frontend Developer based in Araucária, PR - Brazil';

const SEO = {
  title,
  description,
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/social-banner.png`,
      },
    ],
    title,
    description,
  },
  twitter: {
    handle: '@opatrickgdl',
    site: '@opatrickgdl',
    cardType: 'summary_large_image',
  },
};

export default SEO;
