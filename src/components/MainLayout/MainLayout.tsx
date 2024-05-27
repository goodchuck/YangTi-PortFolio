import StyledMainLayout from "./MainLayout.style"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <StyledMainLayout>
            {children}
        </StyledMainLayout>
    )
}

export default MainLayout