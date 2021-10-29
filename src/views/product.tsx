import { Button, Card, CardContent, Pagination, Typography } from "@mui/material";
import { RouteComponentProps, useLocation } from "@reach/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BuyModal } from "../components/buyModal/buyModal";
import { assetsModal, toggleModal } from './../store/openModal/action';

export function SearchProduct(props: RouteComponentProps) {

    const { state }: any = useLocation();

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    };

    const handleClick = () => {

        const data = {
            name: state.data.nome || state.data.name,
            price: state.data.preco || state.data.price,
            vendor: state.vendor,
            id: state.data.id
        }

        dispatch(toggleModal());

        dispatch(assetsModal(data));
    };

    return (
        <>
            <Card sx={{ minWidth: 300, maxWidth: 300, margin: 2 }}>
                <SCardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {state.data.nome || state.data.name}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {state.data.descricao || state.data.description}
                    </Typography>

                    <div>
                        <Image src={state.data.imagem || state.data.gallery[page - 1]} alt="Product image" />
                    </div>

                    <Typography variant="body2">
                        <Pagination
                            page={page}
                            count={state.data.gallery ? state.data.gallery.length : 1}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                        />
                    </Typography>

                    <br />

                    <Typography color="text.secondary">
                        R$ {state.data.preco || state.data.price}
                    </Typography>

                    <Button
                        variant="outlined"
                        onClick={() => handleClick()}
                    >
                        Buy
                    </Button>
                </SCardContent>
            </Card>
            <BuyModal />
        </>
    )
};

const SCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
`;