import "@styles/globals.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"

export const metadata = {
  title: '"Promptopia"',
  description:
    "Discover & Share AI-generated prompts for your next creative project.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
