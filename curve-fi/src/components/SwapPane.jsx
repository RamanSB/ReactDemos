import daiLogo from "../assets/images/cc-icons/dai.png";
import usdcLogo from "../assets/images/cc-icons/usdc.png";
import busdLogo from "../assets/images/cc-icons/busd.png";
import wBTCLogo from "../assets/images/cc-icons/wBTC.png";
import susdLogo from "../assets/images/cc-icons/susd.png";
import usdpaxLogo from "../assets/images/cc-icons/usdpax.png";
import sBTCLogo from "../assets/images/cc-icons/sBTCLogo.png";
import tusdLogo from "../assets/images/cc-icons/tusd.png";
import renBTCLogo from "../assets/images/cc-icons/renBTC.png";
import usdtLogo from "../assets/images/cc-icons/usdt.png";
import swapIcon from "../assets/images/cc-icons/exchange-alt-solid.svg";
import { useState } from "react";

function SwapPane() {
  let [initialState, setState] = useState({
    fromAmount: 0,
    fromCurrency: "DAI",
    toAmount: 0,
    toCurrency: "USDC",
  });

  return (
    <div className="display-containers curve-gray">
      <div
        className="boxed-header"
        style={{ textAlign: "center", position: "relative" }}
      >
        <h4 className="header-perimeter">Swap using all Curve pool</h4>
        <div className="swap-content">
          <div id="swap-row">
            <FromCurrencyOptions />
            <input id="from-amount" />
            <img
              src={swapIcon}
              alt="swap"
              width="36px"
              style={{ margin: "0 12px 0 6px" }}
            />
            <FromCurrencyOptions />
            <input id="to-amount" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CryptoCurrencyItem({ children, logo }) {
  return (
    <>
      <img
        src={logo}
        alt=""
        width="24px"
        height="24px"
        style={{ marginRight: "12px", padding: "4px" }}
      />
      <span>{children}</span>
    </>
  );
}

function FromCurrencyOptions() {
  return (
    <div id="from-currency-container">
      <button className="currency-drop-down-btn">
        <div style={{ display: "flex", alignItems: "center", flexFlow: "row" }}>
          <CryptoCurrencyItem logo={daiLogo}>DAI</CryptoCurrencyItem>
          <i className="fa-solid fa-chevron-down" id="from-currency"></i>
        </div>
      </button>
      <div className="dropdown-content">
        <ul>
          {cryptoCurrencies.map((cryptoCurrency) => {
            return (
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexFlow: "row",
                  justifyContent: "start",
                  textDecoration: "none",
                  padding: "4px",
                  minHeight: "16px",
                }}
              >
                <CryptoCurrencyItem logo={cryptoCurrency.getImgPath()}>
                  {cryptoCurrency.getTicker()}
                </CryptoCurrencyItem>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SwapPane;

class CryptoCurrency {
  constructor(imgPath, ticker) {
    this.ticker = ticker;
    this.imgPath = imgPath;
  }

  getImgPath() {
    return this.imgPath;
  }

  getTicker() {
    return this.ticker;
  }
}

const cryptoCurrencies = [
  new CryptoCurrency(daiLogo, "DAI"),
  new CryptoCurrency(usdcLogo, "USDC"),
  new CryptoCurrency(usdtLogo, "USDT"),
  new CryptoCurrency(tusdLogo, "TUSD"),
  new CryptoCurrency(busdLogo, "BUSD"),
  new CryptoCurrency(susdLogo, "sUSD"),
  new CryptoCurrency(usdpaxLogo, "USDPAX"),
  new CryptoCurrency(renBTCLogo, "renBTC"),
  new CryptoCurrency(wBTCLogo, "wBTC"),
  new CryptoCurrency(sBTCLogo, "sBTC"),
  new CryptoCurrency(usdtLogo, "HBTC"),
  new CryptoCurrency(usdtLogo, "GUSD"),
  new CryptoCurrency(usdtLogo, "HUSD"),
];
