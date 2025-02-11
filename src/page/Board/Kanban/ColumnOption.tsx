import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import { TbDots } from 'react-icons/tb';
import DeleteIcon from '@mui/icons-material/Delete';
// import ConfirmDeleteTaskDialog from './ConfirmDeleteTaskDialog';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

interface ITaskOption {
    active: boolean;
    setEditColumnNameOpen: (open: boolean) => void
    setDeleteColumnMode: (open: boolean) => void
}

export default function ColumnOption({ active, setEditColumnNameOpen, setDeleteColumnMode }: ITaskOption) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className='flex items-center justify-center'>

            {active && <button className='hover:bg-[#ececec] mr-2' onClick={handleClick}>
                <TbDots className='text-md text-[#4e5d77] text-[18px] transition-all' />
            </button>}
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    setEditColumnNameOpen(true)
                    handleClose()
                }}
                    disableRipple
                    sx={{
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <EditIcon
                        sx={{
                            width: "16px"
                        }}
                    />
                    Edit
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setDeleteColumnMode(true)
                        handleClose()
                    }}
                    disableRipple
                    sx={{
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <DeleteIcon
                        sx={{ width: "16px" }}
                    />
                    Delete
                </MenuItem>
            </StyledMenu>
        </div>
    );
}