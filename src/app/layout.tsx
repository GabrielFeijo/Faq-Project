import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const work = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'FAQ',
	description:
		'A sigla FAQ significa Frequently Asked Questions, ou Perguntas Feitas Frequentemente, em tradução livre para o português.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<body className={work.className}>{children}</body>
		</html>
	);
}
