import './globals.css'

export const metadata = {
  title: 'Ultimate Bodies By Carlos | Atlanta\'s Premier Fitness Family',
  description: 'Transform your body and life at Ultimate Bodies By Carlos. Located on Piedmont Park in Midtown Atlanta. 30 years of changing lives. Start your free 3-day trial today.',
  keywords: 'gym atlanta, personal training midtown, fitness piedmont park, carlos jordan trainer, atlanta fitness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
