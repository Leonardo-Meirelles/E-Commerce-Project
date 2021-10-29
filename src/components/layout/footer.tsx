import styled from 'styled-components';

export function Footer() {
    return (
        <Container>
            Todos os direitos reservados
        </Container>
    )
};

const Container = styled.footer`
    background: var(--black);
    color: var(--white);
    text-align: center;
    padding: 0.25rem;
`;