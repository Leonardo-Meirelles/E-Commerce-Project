import { Skeleton } from "@mui/material";
import { RouteComponentProps } from "@reach/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BuyModal } from "../components/buyModal/buyModal";
import { ProductCard } from "../components/products/productCard";
import { RootState } from "../store";
import { getEuropeanProducts } from "../store/europeanProducts/action";

export function Products(props: RouteComponentProps) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEuropeanProducts())
    }, []);

    const europeanProducts = useSelector((state: RootState) => (
        state.europeanProducts.products
    ));

    return (
        <Container>
            <CardContent>
                {europeanProducts.length > 0 ?

                    europeanProducts.map((product) => (
                        <ProductCard key={product.id} productInfo={product} />
                    )) :
                    <>
                        <Skeleton variant="rectangular" width={300} height={150} />
                        <Skeleton variant="rectangular" width={300} height={150} />
                        <Skeleton variant="rectangular" width={300} height={150} />
                    </>
                }
            </CardContent>
            <BuyModal />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85rem;
`;

const CardContent = styled.div`
    justify-content: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem;
`;