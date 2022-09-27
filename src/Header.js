import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'


const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});
function Header() {
    const { active, chainId, account } = useWeb3React();
    const { activate, deactivate } = useWeb3React();

    console.log( active, chainId, account)
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_centerleft">
                    <img
                        src="https://poocoin.app/images/logo/poocoin512.png"
                    />
                    <div className="title">
                        <span>
                            <Link to="/Charts">
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
                <a><Link to="/Charts">Charts</Link></a>
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
                <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
                <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
                <button onClick={() => { activate(Injected) }}>Metamask</button>

                <button onClick={deactivate}>Disconnect</button>
            </div>
        </div>
    )
}

export default Header
