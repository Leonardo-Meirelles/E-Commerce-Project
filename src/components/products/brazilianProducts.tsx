import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { getBrazilianProducts } from "../../store/brazilianProducts/action";
import { BrazilianCard } from "./brazilianCard";

export function BrazilianProducts () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrazilianProducts())
    }, []);

    const brazilianProducts = useSelector((state: RootState) => (
        state.brazilianProducts.products
    ));

    return (
            <CardContent>
                {brazilianProducts.length > 0 ?

                    brazilianProducts.map((product) => (
                        <BrazilianCard key={product.id} brazilianProductInfo={product} />
                    )) :
                    <>
                        <Skeleton variant="rectangular" width={300} height={150} />
                        <Skeleton variant="rectangular" width={300} height={150} />
                        <Skeleton variant="rectangular" width={300} height={150} />
                    </>
                }
            </CardContent>
    )
};

const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;