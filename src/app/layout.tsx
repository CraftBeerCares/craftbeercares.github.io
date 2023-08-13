// These styles apply to every route in the application
import './global.css'
import {primary} from "../styles/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={primary.className}>
      <body>{children}</body>
    </html>
  )
}