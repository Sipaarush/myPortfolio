// src/app/layout.js
import globalStyles from '../lib/styles';

export const metadata = {
  title: 'Priyanshu Kumar Singh — RF & Wireless Engineer',
  description:
    'B.Tech ECE @ Amrita School of Engineering. Specialist in RF Energy Harvesting, UAV-IRS-RSMA Networks & Embedded Avionics. Building systems at the frontier of 6G.',
  keywords: [
    'RF Engineer',
    'Wireless Systems',
    '6G',
    'UAV',
    'IRS',
    'RSMA',
    'RF Energy Harvesting',
    'Embedded Avionics',
    'ECE',
    'Amrita',
  ],
  authors: [{ name: 'Priyanshu Kumar Singh' }],
  openGraph: {
    title: 'Priyanshu Kumar Singh — RF & Wireless Engineer',
    description: "'Designing Tomorrow's RF Infrastructure'",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Inline all styles — no external CSS file needed */}
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
