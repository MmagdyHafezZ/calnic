import '@mantine/core/styles.css';
import '../styles/globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from './theme';

export const metadata = {
    title: 'Calnic Medical Clinic',
    description: 'Changing Healthcare in Calgary One Patient at a Time'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-mantine-color-scheme="light">
            <head>
                <ColorSchemeScript />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#3b82f6" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="Calgary, Medical Clinic, Healthcare, Patients, Calnic" />
                <meta name="author" content="Calnic Medical Clinic" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
            </head>
            <body style={{ backgroundColor: '#F8FAFE' }}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
