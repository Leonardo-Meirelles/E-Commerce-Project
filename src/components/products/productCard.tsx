import { Button, Card, CardContent, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleModal } from './../../store/openModal/action';

export function ProductCard({ productInfo }: any) {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    };

    const handleClick = () => dispatch(toggleModal())

    const { name, gallery, description, price, discountValue, id } = productInfo

    return (
        <Card sx={{ minWidth: 275 }}>
            <SCardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {name}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>

                <div>
                    <Image src={gallery[page - 1]} alt="Product image" />
                </div>

                <Typography variant="body2">
                    <Pagination
                        page={page}
                        count={4}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />
                </Typography>

                <br />

                <Typography color="text.secondary">
                    R$ {price}
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