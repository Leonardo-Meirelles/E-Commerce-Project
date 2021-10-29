import { Button, Card, CardContent, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { assetsModal, toggleModal } from '../../store/openModal/action';

export function EuropeanCard({ productInfo }: any) {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    };
    
    const { name, gallery, description, price, discountValue, id } = productInfo;
    
    const handleClick = () => {

        const data ={
            name,
            price,
            vendor: 'european',
            id
        };

        dispatch(toggleModal());
        
        dispatch(assetsModal(data));
    };


    return (
        <Card sx={{minWidth: 300, maxWidth: 300, margin: 2 }}>
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
                        count={gallery.length}
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
                    Buy
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
`;

const Image = styled.img`
    width: 100%;
`;