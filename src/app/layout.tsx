import '../styles/globals.css';

export const metadata = {
  title: 'Pluga Dev Challenge',
  description: 'Tecnical Test for a job interview at Pluga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}