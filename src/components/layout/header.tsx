import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "@reach/router";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveProductNames } from "../../store/productNames/action";
import { RootState } from "../../store";

export function Header() {

    const dispatch = useDispatch()

    const searchHandler = () => dispatch(saveProductNames())

    const hasProducts = useSelector((state: RootState) => state.europeanProducts.products)

    const names = useSelector((state: RootState) => state.productNames.productNames)


    return (
        <Container>
            <Content>
                <Logo>
                    <h1>Logo da loja</h1>
                </Logo>

                <Autocomplete
                    disablePortal
                    options={names}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <STextField
                            {...params}
                            onClick={() => searchHandler()}
                        />)}
                />

                <div>
                    <Link to="/">
                        <Button>Home</Button>
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
    padding: 2rem 1.5rem;
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

const STextField = styled(TextField)`
    background-color: white;
    border-radius: 0.5rem;
`