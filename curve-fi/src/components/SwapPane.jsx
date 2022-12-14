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
    tradeRoute: "Not available",
  });
  console.log(initialState);

  const updateInputAmounts = (e) => {
    const inputValue = e.target.value;
    if (!Number.isNaN(inputValue.toString())) {
      if (e.target.id.toString().includes("to")) {
        setState((initialState) => {
          return { ...initialState, toAmount: inputValue };
        });
      } else if (e.target.id.toString().includes("from")) {
        setState((initialState) => {
          return { ...initialState, fromAmount: inputValue };
        });
      }
    }
  };

  const SwapButton = () => {
    return (
      <img
        src={swapIcon}
        alt="swap"
        width="36px"
        height="36px"
        style={{ margin: "0 12px 0 6px" }}
        onClick={() => {
          setState((initialState) => {
            return {
              ...initialState,
              fromCurrency: initialState.toCurrency,
              toCurrency: initialState.fromCurrency,
            };
          });
        }}
      />
    );
  };

  return (
    <div className="display-containers curve-gray">
      <div
        className="boxed-header"
        style={{ textAlign: "center", position: "relative" }}
      >
        <h4 className="header-perimeter">Swap using all Curve pool</h4>
        <AnimatedPipe />
        <div className="swap-content">
          <div id="swap-row">
            {/* extract in to it's own component */}
            <CurrencyOptions
              label="from"
              setParentState={setState}
              parentState={initialState}
            />
            <input
              id="from-amount"
              type="number"
              onChange={(e) => {
                updateInputAmounts(e);
              }}
            />
            <SwapButton />
            <CurrencyOptions
              label="to"
              setParentState={setState}
              parentState={initialState}
            />
            <input
              id="to-amount"
              type="number"
              onChange={(e) => {
                updateInputAmounts(e);
              }}
            />
          </div>
        </div>
        <TradeRouteText>{initialState.tradeRoute}</TradeRouteText>
        <AdvancedOptionSection></AdvancedOptionSection>
      </div>
    </div>
  );
}

function AdvancedOptionSection({ children }) {
  return (
    <div id="advanced-option-container">
      <button className="connect-wallet-btn">
        Advanced options
        <i class="fa-solid fa-play space-left rotate-90"></i>
      </button>
    </div>
  );
}

function TradeRouteText({ children }) {
  return (
    <div id="trade-route-container">
      <span>
        Trade routed through: <span id="span-trade-route">{children}</span>
      </span>
    </div>
  );
}

function CurrencyOptions({ label, setParentState, parentState }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

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

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
    if (label === "from") {
      setParentState((initialState) => {
        return {
          ...initialState,
          fromCurrency: cryptoCurrencies[index].getTicker(),
        };
      });
    } else if (label === "to") {
      setParentState((initialState) => {
        return {
          ...initialState,
          toCurrency: cryptoCurrencies[index].getTicker(),
        };
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <button
          type="button"
          onClick={toggleOptions}
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "112px",
              height: "30px",
            }}
          >
            <img
              width="24px"
              height="24px"
              src={cryptoCurrencies
                .find((x) => {
                  if (
                    label === "from" &&
                    x.getTicker() === parentState.fromCurrency
                  ) {
                    return x.getImgPath();
                  } else if (
                    label === "to" &&
                    x.getTicker() === parentState.toCurrency
                  ) {
                    return x.getImgPath();
                  }
                  return null;
                })
                .getImgPath()}
              alt={cryptoCurrencies[selectedOption].getTicker()}
              style={{ margin: "0 16px 0 0" }}
            />
            {cryptoCurrencies
              .find((x) => {
                if (
                  label === "from" &&
                  x.getTicker() === parentState.fromCurrency
                ) {
                  return x;
                } else if (
                  label === "to" &&
                  x.getTicker() === parentState.toCurrency
                ) {
                  return x;
                }
              })
              .getTicker()}
            <i class="fa-solid fa-angle-down" style={{ flexGrow: 1 }}></i>
          </div>
        </button>
        <ul
          className={`options ${isOptionsOpen ? "show" : ""}`}
          tabIndex={-1}
          role="listbox"
        >
          {cryptoCurrencies.map((option, index) => (
            <li
              key={index}
              tabIndex={0}
              role="option"
              aria-selected={selectedOption === index}
              id={option}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  width: "112px",
                }}
              >
                <img
                  width="24px"
                  height="24px"
                  src={option.getImgPath()}
                  alt={option.getTicker()}
                  style={{ margin: "4px 16px 0 0" }}
                />
                {option.getTicker()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AnimatedPipe() {
  return (
    <div id="max-span-container">
      <span style={{ position: "relative", right: "56px" }}>
        Max: <span className="animated-pipe">|</span>
      </span>
    </div>
  );
}

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

export default SwapPane;
