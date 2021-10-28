import { Button, ButtonGroup } from "@mui/material";
import { RouteComponentProps } from "@reach/router";
import { useState } from "react";
import styled from "styled-components";
import { BuyModal } from "../components/buyModal/buyModal";
import { BrazilianProducts } from "../components/products/brazilianProducts";
import { EuropeanProducts } from "../components/products/europeanProducts";


export function Home(props: RouteComponentProps) {

    const [show, setShow] = useState<string>('european')

    const handleClick = (choice: string) => {
        setShow(choice)
    }

    return (
        <Container>
            <SButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => handleClick('european')} >European Products</Button>
                <Button onClick={() => handleClick('brazilian')} >Brazilian Products</Button>
            </SButtonGroup>

            {show === 'european' ? (
                <EuropeanProducts />
            ) : (
                <BrazilianProducts />
            )
            }
            <BuyModal />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1920px;
`;

const SButtonGroup = styled(ButtonGroup)`
    margin: 0.75rem 0 0 2rem;
`;