import { Button, Card, CardContent, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleModal } from './../../store/openModal/action';

export function BrazilianCard({ brazilianProductInfo }: any) {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    };

    const handleClick = () => dispatch(toggleModal())

    const { nome, descricao, categoria, imagem, preco, material, departamento } = brazilianProductInfo

    return (
        <Card sx={{minWidth: 300, maxWidth: 300, margin: 2 }}>
            <SCardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {nome}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {descricao}
                </Typography>

                <div>
                    <Image src={imagem} alt="Product image" />
                </div>

                <Typography variant="body2">
                    <Pagination
                        page={page}
                        count={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />
                </Typography>

                <br />

                <Typography color="text.secondary">
                    R$ {preco}
                </Typography>

                <Button
                    variant="outlined"
                    onClick={() => handleClick()}
                >
                    Comprar
                </Button>
            </SCardContent>
        </Card>
    )
};

const SCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
`