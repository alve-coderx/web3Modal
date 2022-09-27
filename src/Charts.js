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
                <span> <a href='#'> <h4> Promote your token </h4>  </a> </span>
                {/* <br /> */}
                <div className="div-1_centercenter">
                    <button className='btn-1' type="button">Vetted</button>
                    <button className='btn-1' type="button">Un-Vetted</button>
                </div>
                <table id="token_table">
                    <tr>
                        <th>Tokens</th>
                        <th>Balance</th>
                        <th>
                        </th>
                    </tr>
                    <tr>
                        <td>THOREUM <dollar>$0.0207 </dollar> <br />
                            <h5>Thoreum</h5></td>
                        <td>0.00 <br /> <dollar>$0.00 </dollar> </td>
                        <td> <div class="star-rating">
                            <input type="radio" name="stars" id="star-a" value="5" />
                            <label for="star-a"></label> </div> </td>
                    </tr>
                    <tr>
                        <td>BWT(👶⬜️🐯)  <dollar>$0.0000 </dollar> <br />
                            <h5> BabyWhiteTiger</h5> </td>
                        <td> 0.00 <br /> $0.00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ORFANO <dollar>$0.0000 </dollar>
                            <br /> <h5> Orfano </h5></td>
                        <td>0.00 <br /> $0.00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MOONSTAR <dollar>$0.0000 </dollar>
                            <br /> <h5> MoonStar </h5></td>
                        <td>0.00 <br /><dollar>$0.00 </dollar></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GABECOIN <dollar>$0.0000 </dollar> <br />
                            <h5> gabecoin </h5></td>
                        <td>0.00 <br /> <dollar>$0.00 </dollar></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>KABOSU <dollar>$0.0000 </dollar> <br />
                            <h5> Kabosu </h5></td>
                        <td>0.00 <br /> <dollar>$0.00 </dollar></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FEED <dollar>$0.0000 </dollar> <br />
                            <h5>Feeder.finance </h5></td>
                        <td>0.00 <br /> <dollar>$0.00 </dollar></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SHIELDNET <dollar>$0.0000 </dollar> <br />
                            <h5>Shield Network </h5></td>
                        <td>0.00 <br /> <dollar>$0.00 </dollar></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td rowSpan='3' colSpan='3'> <br /> <br /><br /><br /><br /><br /> <br /></td>
                    </tr>
                </table>
            </div>
            <iframe width="650" height="400" src="https://www.youtube.com/embed/CO30ePKq9wg">
            </iframe>
        </div>
    )
}

export default Charts

