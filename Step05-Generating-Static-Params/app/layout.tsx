export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head />
      <body style ={{backgroundColor:"#f9cb9c"}}>{children}</body>
    </html>
  )
}
