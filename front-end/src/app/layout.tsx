
import { Container } from '@/components/container'
import { AuthProvider } from '@/context/AuthContext'
import { ModalProvider } from '@/context/ModalContext'
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
        <AuthProvider>
          <ModalProvider>
          <StyledComponentsRegistry>
            <Container>
              {children}
            </Container>
          </StyledComponentsRegistry>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
