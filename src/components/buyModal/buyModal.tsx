import { Box, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModal } from "../../store/openModal/action";


export function BuyModal() {

    const dispatch = useDispatch()

    const modalState = useSelector((state: RootState) => state.modal.open)

    const handleClose = () => dispatch(toggleModal());

    return (
        <Modal
            open={modalState}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Faça sua compra agora
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};