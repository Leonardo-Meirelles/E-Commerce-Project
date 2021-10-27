import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "@reach/router";

export function Header() {

    return (
        <Container>
            <Content>
                <Logo>
                    <h1>Logo da loja</h1>
                </Logo>

                <div>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                    <Link to="/products">
                        <Button>Products</Button>
                    </Link>
                    <Button>
                        <TiShoppingCart />
                    </Button>
                </div>
            </Content>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: var(--black);
    padding: 0.5rem 1.5rem;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85rem;
`

const Button = styled.button`
    font-size: 1.25rem;
    padding: 0.75rem;
    border: 0;
    background: transparent;
    color: var(--white);
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
  }
`;

const Logo = styled.div`
    color: var(--white);
`;