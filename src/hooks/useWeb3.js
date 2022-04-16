import { useState, useEffect } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";


export const useWeb3 = () => {
    const [web3, setWeb3] = useState(null);
    const [wallet, setWallet] = useState('');
    const [networkId, setnNetworkId] = useState('');

    useEffect(() => {
        async function getWeb3() {
            let _wallet;
            // return;
            if (window?.ethereum != null) {
                window.ethereum.on('accountsChanged', accounts => {
                    if (accounts.length < 1) return setWallet('');
                    setWallet(accounts[0]);
                });
                
                window.ethereum.on('networkChanged', networkId => {
                    console.log('network changed to: ', networkId);
                    setnNetworkId(networkId)
                });
                const providerOptions = { 
                  walletconnect: {
                    package: WalletConnectProvider, // required
                    options: {
                      infuraId: "INFURA_ID" // required
                    }
                  }
                }
                
                const web3Modal = new Web3Modal({
                  providerOptions,
                  theme: "dark"
                });
                
                const provider = await web3Modal.connect();
                
                const _web3 = new Web3(provider);
                /**
                 * Connect to Web3
                 */
                // _web3 = new Web3(window.ethereum);
                const accounts = await _web3.eth.getAccounts();

                /**
                 * If MetaMask is open, there should be accounts. If there are accounts
                 * then use the first one and try to get the token balance in AQUARI
                 */
                if(networkId != '137') {
                  window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                      {
                        chainId: "0x89",
                      },
                    ],
                  });
                }
                if (accounts.length > 0) {
                    _wallet = accounts[0];
                } else {
                    await window.ethereum.enable();
                }
                unstable_batchedUpdates(() => {
                  if(_wallet != null) {
                      setWallet(_wallet);
                  }
                  setWeb3(_web3);
              });
            } else {
                // await window.ethereum.enable();
            }

        }
        getWeb3();
    }, []);

    const enable = () => {
      console.log('enable')
      return window?.ethereum?.enable()
    }

    return { web3, wallet, eth: window.ethereum, enable, networkId };

  };