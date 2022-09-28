import React from 'react';
import './Charts.css';

function Charts() {
    return (
        <div className="main">
            <div className="main_heading">
                <h1>BSC Charts</h1>
                <h2>View price charts for any token in your wallet (binance smart chain)</h2>
                <p> Telegram public chat: <a href='https://t.me/poocointokenchat' > https://t.me/poocointokenchat </a> </p>
            </div>
            <div className="textbox">
                <input type="text" list="tokens" placeholder="Enter token name / address..." />
                <datalist id="tokens">
                    <option value="CryptoZoo" />
                    <option value="HaiKhuu Coin" />
                    <option value="PooCoin" />
                    <option value="BitCoin" />
                    <option value="DogeCoin" />
                    <option value="GameDao Token (GDT)" />
                    <option value="Media Licensing Token (MLT)" />
                    <option value="Big Digital Shares (BDS)" />
                </datalist>
            </div>
            <div className="div-1">
                <input type="text" placeholder="Filter..." />
                <div className="div-1_centercenter">
                    <button className='btn' type="button" >Promoted</button>
                    <button className='btn' type="button" >Wallet</button>
                    <button className='btn' type="button">Starred</button>
                    <button className='btn' type="button">History</button>
                </div>
                <hr />
                <span> <h4> Promote your token </h4>  </span>
                {/* <br /> */}
                <div className="div-1_centercenter">
                    <button className='btn-1' type="button">Vetted</button>
                    <button className='btn-1' type="button">Un-Vetted</button>
                </div>
                <table id="token_table">
                    <thead>
                        <tr>
                            <th>Tokens</th>
                            <th>Balance</th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>THOREUM $0.0207  <br />
                                <h5>Thoreum</h5></td>
                            <td>0.00 <br /> $0.00  </td>
                            <td> <div className="star-rating">
                                <input type="radio" name="stars" id="star-a" value="5" />
                                <label ></label> </div> </td>
                        </tr>
                        <tr>
                            <td>BWT(👶⬜️🐯)  $0.0000  <br />
                                <h5> BabyWhiteTiger</h5> </td>
                            <td> 0.00 <br /> $0.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ORFANO $0.0000
                                <br /> <h5> Orfano </h5></td>
                            <td>0.00 <br /> $0.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MOONSTAR $0.0000
                                <br /> <h5> MoonStar </h5></td>
                            <td>0.00 <br />$0.00 </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GABECOIN $0.0000  <br />
                                <h5> gabecoin </h5></td>
                            <td>0.00 <br /> $0.00 </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KABOSU $0.0000  <br />
                                <h5> Kabosu </h5></td>
                            <td>0.00 <br /> $0.00 </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>FEED $0.0000  <br />
                                <h5>Feeder.finance </h5></td>
                            <td>0.00 <br /> $0.00 </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SHIELDNET $0.0000  <br />
                                <h5>Shield Network </h5></td>
                            <td>0.00 <br /> $0.00 </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan='3' colSpan='3'> <br /> <br /><br /><br /><br /><br /> <br /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Charts

