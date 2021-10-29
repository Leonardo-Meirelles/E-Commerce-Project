import { Box, Button, Modal, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { postOrderService } from '../../services/ordersServices';
import { RootState } from '../../store';
import { toggleModal } from '../../store/openModal/action';

export interface UserProps {
    name: string;
    email: string;
};

export function BuyModal() {

    const [userData, setUserData] = useState<UserProps>({
        name: '',
        email: ''
    });

    const [orderData, setOrderData] = useState([

    ]);

    const dispatch = useDispatch();

    const modalState = useSelector((state: RootState) => state.modal.open);

    const handleClose = () => dispatch(toggleModal());

    const productsToBuy = useSelector((state: RootState) => state.modal.cart);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = async () => {

        const order = {
            user: userData,
            data: productsToBuy
        };

        try {

            await postOrderService(order);

            toast.success('Order placed successfully', {
                position: 'top-right'
            });

            dispatch(toggleModal());
            
        } catch(error) {
            
            toast.error('Something went wrong with your request');
            throw error;
        };
    };

    const isNotValid =
        userData.name === '' ||
        userData.email === ''

    return (
        <Modal
            open={modalState}
            onClose={handleClose}
        >
            <Box sx={style} display='flex' flexDirection='column'>
                <Typography variant='h6' component='h2'>
                    Faça sua compra agora
                </Typography>
                <br />
                <TextField
                    label='name'
                    name='name'
                    variant='filled'
                    type='text'
                    value={userData.name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}

                />
                <br />
                <TextField
                    label='email'
                    name='email'
                    variant='filled'
                    type='email'
                    value={userData.email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
                />
                <br />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    {productsToBuy.map((product, index) => (
                        <TableBody key={index}>
                            <TableRow>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>
                <br />
                <Button
                    variant='outlined'
                    color='success'
                    disabled={isNotValid}
                    onClick={() => handleSubmit()}
                >
                    Place Order
                </Button>
            </Box>
        </Modal>
    )
};

const style = {

    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    width: '40%',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};