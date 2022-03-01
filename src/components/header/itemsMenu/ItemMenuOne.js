import React from 'react';
import { Link } from "react-router-dom";
// Material ui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ItemMenuOne = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
        
        {/* Boton 1 */}
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{color: '#fff'}}
        >
            Busca trabajo
        </Button>
        
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Busca proyecto</MenuItem>
            <MenuItem onClick={handleClose}>Proyectos con mis habilidades</MenuItem>
            <MenuItem onClick={handleClose}>Mis clientes favoritos</MenuItem>
        </Menu>
        
    </div>
  )
};

export default ItemMenuOne;