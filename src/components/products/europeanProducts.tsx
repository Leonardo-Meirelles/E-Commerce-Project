import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { EuropeanCard } from "./europeanCard";
import { RootState } from "../../store";
import { getEuropeanProducts } from "../../store/europeanProducts/action";

export function EuropeanProducts () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEuropeanProducts())
    }, []);

    const europeanProducts = useSelector((state: RootState) => (
        state.europeanProducts.products
    ));

    return (
            <CardContent>
                {europeanProducts.length > 0 ?

                    europeanProducts.map((product) => (
                        <EuropeanCard key={product.id} productInfo={product} />
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