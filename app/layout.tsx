// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nehetek Technology Solutions, LLC',
  description:
    'Nehetek Technology Solutions, LLC – Cloud services, IT management consulting, application design & development, and system integrations.',
  icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  )
}
