import { useState } from 'react';
import abi from "../../../artifacts/contracts/judiciary.sol/Judiciary.json";
import Web3 from 'web3';
import './Wallet.css';

const ABI = abi.abi

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(false); // Initialize as false

  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' }); // help in opening metamask
      const contract = new web3.eth.Contract(
        ABI,
        "0xcBeA3D1CFE114f7ea36b20a99f9E2fC68867b4AA"
      );
      setConnected(true);
      saveState({ web3: web3, contract: contract });
    } catch (error) {
      alert("Please Install MetaMask");
    }
  };

  const disconnect = () => {
    // Add logic to disconnect or logout from MetaMask
    // For example, you can call window.ethereum.disconnect()
    setConnected(false);
    // Additional cleanup or logout logic if needed
  };

  return (
    <>
      <div className="header">
        {connected ? (
          <button className="connectBTN" onClick={disconnect}>
            Disconnect
          </button>
        ) : (
          <button className="connectBTN" onClick={init}>
            Connect MetaMask
          </button>
        )}
      </div>
    </>
  );
};

export default Wallet;
