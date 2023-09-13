import  RootLayout  from '../layout'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>{children}</RootLayout>
  )
}
