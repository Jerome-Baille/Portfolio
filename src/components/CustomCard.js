import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  };

const borderColor = (status) => {
    switch (status) {
        case 'completed':
            return '#bfe3b4';
        case 'inProgress':
            return '#BEBEBE';
        case 'planned':
            return '#967bb6';
        default:
            return '$primary-color';
    }
}

const CustomCard = ({ 
    dataCardGeneric,
    dataCardLocale,
    modal
 }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Card
                sx={{ border: '5px solid', borderColor: borderColor(dataCardGeneric.status) }}
            >
                <CardHeader
                    sx={{ height: '95px' }}
                    avatar={
                    <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                        <img src={process.env.PUBLIC_URL + dataCardGeneric.img} alt={`${dataCardLocale.name} by ${dataCardGeneric.author}`} />
                    </Avatar>
                    }
                    title={dataCardLocale.name}
                    subheader={dataCardLocale.type}
                />
                <CardActions
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Button 
                        size="small"
                        href={dataCardGeneric.url}
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        Link
                    </Button>
                    <Button 
                        onClick={handleOpen}
                    >
                        See details
                    </Button>
                </CardActions>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2>
                        {dataCardLocale.name}
                    </h2>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                        <span className='accent-color'>{modal.author} : </span>
                        {dataCardGeneric.author}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className='accent-color'>{modal.type} : </span> 
                        {dataCardLocale.type}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className='accent-color'>{modal.content} :</span>
                        <br/>
                        {dataCardLocale.descriptions.split('\n').map((sentence, idx) => (
                                <span key={idx}>
                                    <span className='accent-color'>{idx+1} - </span>{sentence}<br/>
                                </span>
                            ))
                        }
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className='accent-color'>{modal.source} :</span>
                        <br/> 
                        <a 
                            href={dataCardGeneric.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {dataCardGeneric.url}
                        </a>
                    </Typography>
                    <button 
                        className='flat-button'
                        onClick={handleClose}
                    >
                        {modal.close}
                    </button>
                </Box>
            </Modal>
        </>
    )
}

export default CustomCard;