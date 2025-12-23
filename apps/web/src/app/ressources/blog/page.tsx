import { Typography } from 'antd';
import { generateMetadata } from '../../../lib/seo';

const { Title, Paragraph } = Typography;

export const metadata = generateMetadata({
  title: 'Blog - ImmoTopia',
  description: 'Articles, conseils et actualités sur la gestion immobilière professionnelle.',
  canonicalUrl: '/ressources/blog',
});

export default function BlogPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={1}>Blog</Title>
      <Paragraph style={{ fontSize: 18 }}>
        Articles et actualités à venir...
      </Paragraph>
    </div>
  );
}

