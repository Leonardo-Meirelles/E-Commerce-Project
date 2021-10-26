import { Button } from "@mui/material";
import styled from "styled-components"

export function Header() {

    return (
        <Container>
            <Button>Primary</Button>
            <Button href="#text-buttons">Link</Button>
        </Container>
    )
}

const Container = styled.div`
    background: var(--black);
    color: var(--white);
    padding: 0.5rem 1.5rem;
`;