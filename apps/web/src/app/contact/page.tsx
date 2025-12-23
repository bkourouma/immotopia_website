'use client';

import { Typography, Row, Col, Card } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import DemoRequestForm from '../../components/forms/DemoRequestForm';
import { useSearchParams } from 'next/navigation';

const { Title, Paragraph } = Typography;

export default function ContactPage() {
  const searchParams = useSearchParams();
  const isDemo = searchParams?.get('demo') === 'true';
  const persona = searchParams?.get('persona') || undefined;

  return (
    <div style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Title level={1}>Contactez-nous</Title>
          <Paragraph style={{ fontSize: 18, marginBottom: 32 }}>
            {isDemo
              ? 'Demandez une démonstration personnalisée de ImmoTopia'
              : 'Nous sommes là pour répondre à vos questions et vous aider à trouver la solution adaptée à vos besoins.'}
          </Paragraph>
          
          <Card>
            <div style={{ marginBottom: 16 }}>
              <MailOutlined style={{ marginRight: 8, color: '#1890ff' }} />
              <strong>Email :</strong>{' '}
              <a href="mailto:contact@immotopia.com">contact@immotopia.com</a>
            </div>
            <div>
              <PhoneOutlined style={{ marginRight: 8, color: '#1890ff' }} />
              <strong>Téléphone :</strong> +33 X XX XX XX XX
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card>
            <Title level={2} style={{ marginBottom: 24 }}>
              {isDemo ? 'Demander une démonstration' : 'Formulaire de contact'}
            </Title>
            <DemoRequestForm defaultPersona={persona} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
