
import { Container } from '@/components/container'
import StyledComponentsRegistry from '@/registry'
import '../../styles/globalstyle.css'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Container>
            {children}
          </Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
