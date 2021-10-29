import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { Link, navigate } from "@reach/router";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveProductNames } from "../../store/productNames/action";
import { RootState } from "../../store";
import { getBrazilianProductByIdService } from "../../services/brazilianProductsServices";
import { getEuropeanProductByIdService } from "../../services/europeanProductsServices";
import { toggleModal } from "../../store/openModal/action";

export function Header() {

    const [productName, setProductName] = useState();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(saveProductNames());
    }, []);

    const names = useSelector((state: RootState) => state.productNames.productNames);

    useEffect(() => {

        async function sendProduct() {

            const find = names.find((product: any) => {
                return product.label === productName
            });

            if (find?.vendor === 'brazilian') {

                const resultBr = await getBrazilianProductByIdService(find.id);

                await navigate('/product', { state: { data: resultBr.data, vendor: 'brazilian' } });

            } else if (find?.vendor === 'european') {

                const resultEu = await getEuropeanProductByIdService(find.id);

                await navigate('/product', { state: { data: resultEu.data, vendor: 'european' } });
            }
        }
        sendProduct();

    }, [productName]);

    const handleClick = () => dispatch(toggleModal());

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
                    autoSelect={true}
                    renderInput={(params) => (
                        <SearchDiv>
                            <h3>Press enter to search</h3>
                            <STextField
                                {...params}
                                onKeyPress={(event: any) => event.code === 'Enter' ? setProductName(() => event.target.value) : null}
                            />

                        </SearchDiv>
                    )}
                />

                <div>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>

                    <Button onClick={() => handleClick()} >
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
`;

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
`;

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
`;