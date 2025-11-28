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
            </head>
            <body style={{backgroundColor: '#F8FAFE'}}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
