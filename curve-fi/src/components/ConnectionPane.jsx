/**
 * This component requires stateful knowledge of whether a wallet is connected.
 * If a wallet is:
 * - connected to an unsupported network then this will result in the component displaying a different view.
 * - connected to a supported network.
 * - not connected to any networks (this is the default view)
 *
 *
 */
function ConnectionPane() {
  return (
    <div className="display-containers connection-pane curve-blue">
      <span>You haven't connected a wallet.</span>
      <button className="connect-wallet-btn">Connect wallet</button>
    </div>
  );
}

export default ConnectionPane;
