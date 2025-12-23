'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DemoRequestSchema, type DemoRequest } from '@monorepo/contracts';
import styles from './DemoRequestForm.module.css';

const { TextArea } = Input;
const { Option } = Select;

interface DemoRequestFormProps {
  defaultPersona?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function DemoRequestForm({
  defaultPersona,
  onSuccess,
  className,
}: DemoRequestFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<DemoRequest>({
    resolver: zodResolver(DemoRequestSchema),
    defaultValues: {
      persona: defaultPersona as DemoRequest['persona'] | undefined,
    },
  });

  const onSubmit = async (data: DemoRequest) => {
    setLoading(true);
    try {
      // TODO: Intégrer avec l'API/CRM
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la demande');
      }

      message.success('Votre demande a été envoyée avec succès ! Nous vous contacterons sous peu.');
      onSuccess?.();
    } catch (error) {
      console.error('Error submitting demo request:', error);
      message.error('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  const personaLabels: Record<DemoRequest['persona'], string> = {
    'agences-immobilieres': 'Agence immobilière',
    'promoteurs': 'Promoteur immobilier',
    'syndics': 'Syndic de copropriété',
    'gestionnaires': 'Gestionnaire locatif',
    'proprietaires': 'Propriétaire bailleur',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${className || ''}`}>
      <Form.Item
        label="Nom complet *"
        validateStatus={errors.nom ? 'error' : ''}
        help={errors.nom?.message}
      >
        <Input
          {...register('nom')}
          placeholder="Votre nom"
          size="large"
          disabled={loading}
        />
      </Form.Item>

      <Form.Item
        label="Email *"
        validateStatus={errors.email ? 'error' : ''}
        help={errors.email?.message}
      >
        <Input
          {...register('email')}
          type="email"
          placeholder="votre@email.com"
          size="large"
          disabled={loading}
        />
      </Form.Item>

      <Form.Item
        label="Téléphone *"
        validateStatus={errors.telephone ? 'error' : ''}
        help={errors.telephone?.message}
      >
        <Input
          {...register('telephone')}
          placeholder="+33 X XX XX XX XX"
          size="large"
          disabled={loading}
        />
      </Form.Item>

      <Form.Item label="Entreprise">
        <Input
          {...register('entreprise')}
          placeholder="Nom de votre entreprise (optionnel)"
          size="large"
          disabled={loading}
        />
      </Form.Item>

      <Form.Item
        label="Profil *"
        validateStatus={errors.persona ? 'error' : ''}
        help={errors.persona?.message}
      >
        <Select
          value={watch('persona')}
          onChange={(value) => setValue('persona', value as DemoRequest['persona'])}
          placeholder="Sélectionnez votre profil"
          size="large"
          disabled={loading}
        >
          {Object.entries(personaLabels).map(([value, label]) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Message">
        <TextArea
          {...register('message')}
          placeholder="Décrivez vos besoins ou posez vos questions (optionnel)"
          rows={4}
          disabled={loading}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={loading}
          block
          className={styles.submitButton}
        >
          Envoyer la demande
        </Button>
      </Form.Item>
    </form>
  );
}
