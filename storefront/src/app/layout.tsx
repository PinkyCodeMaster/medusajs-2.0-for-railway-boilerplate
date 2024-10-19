import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  title: 'Front Line Military',
  description: 'One-stop shop for frontline military equipment in Salisbury',
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}