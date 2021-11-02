import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
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

    const dispatch = useDispatch();

    const [productName, setProductName] = useState<any>();

    useEffect(() => {

        dispatch(saveProductNames());
    }, []);

    const names = useSelector((state: RootState) => state.productNames.productNames);

    const searchProduct = async () => {

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

    const handleClickOpenModal = () => dispatch(toggleModal());

    const handleChange = (event: any) => {
        event.persist()
        let text = event.target.textContent
        setProductName(text)
    }

    return (
        <Container>
            <Content>
                <Logo>
                    <FaShopify />
                </Logo>

                <Autocomplete
                    disablePortal
                    options={names}
                    sx={{ width: 300 }}
                    autoSelect={true}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <SearchDiv>
                            <STextField
                                {...params}
                                onKeyPress={(event: any) => searchProduct()}
                            />
                            <SButton onClick={() => searchProduct()} >
                                <BsSearch />
                            </SButton>

                        </SearchDiv>
                    )}
                />

                <div>
                    <Link to="/">
                        <SButton>Home</SButton>
                    </Link>

                    <SButton onClick={() => handleClickOpenModal()} >
                        <TiShoppingCart />
                    </SButton>
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

    @media only screen and (max-width: 540px) {
        flex-direction: column;
    }
`;

const SButton = styled.button`
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
font-size: 4rem;
    color: var(--white);
`;

const STextField = styled(TextField)`
    background-color: white;
    border-radius: 0.5rem;
`;

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    color: var(--white);

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
        color: var(--white);
        &:hover {
            filter: brightness(0.8);
        }
    }
`;