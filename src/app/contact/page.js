export const metadata = { title: 'Contact Us – Course Store' };

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container" style={{ marginTop: 16 }}>
      <div className="glass card" style={{ padding: 20, maxWidth: 720, margin: '0 auto' }}>
        <h1 className="section-title">Contact Us</h1>
        <p className="text-muted mt-2">Have a question? Send us a message.</p>
        <ContactForm />
      </div>
    </div>
  );
}
