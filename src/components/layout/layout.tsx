import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutPortalProps {
    children: React.ReactNode
};

export function Layout({ children }: LayoutPortalProps) {

    return (
        <Container>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    flex: 1;
`;