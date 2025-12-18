import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Nouveau message de {name}</h1>
    <p><strong>Sujet :</strong> {subject}</p>
    <p><strong>Email de contact :</strong> {email}</p>
    <hr />
    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
  </div>
);