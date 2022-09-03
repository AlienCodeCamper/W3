// import { useEffect, useState, createContext, useContext } from "react";
// import { Web3Provider } from "@ethersproject/providers";
// import { getAddress } from "@ethersproject/address";

// import { ethers } from "ethers";

// interface BaseAppContextInterface {
//     web3: any;
// }
// export const BaseAppContext = createContext({
//     web3: {},
// } as BaseAppContextInterface);

// export default function BaseAppContextProvider({ children }) {
//     // const { setCoordinapeToken }: any = useContext(IntegrationContext);
//     const [address, setAddress] = useState(null);
//     const [network, setNetwork] = useState(null);
//     const [balance, setBalance] = useState(null);
//     const [wallet, setWallet] = useState<any>({});
//     const [provider, setProvider] = useState(null);
//     const [ethersAdapter, setEthersAdapter] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(null);
//     const [isPrevWallet, setIsPrevWallet] = useState(null);
//     const [onboard, setOnboard] = useState(null);
//     const [safeService, setSafeService] = useState(null);
//     const [isNetworkChanged, setIsNetworkChanged] = useState(false);
//     //taken wrong name actually it meant is Wallet a smart Contract.
//     const [isWalletEOA, setIsWalletEOA] = useState(false);
//     const [isGnosisWallet, setIsGnosisWallet] = useState(false);
//     const [sybilData, setSybilData] = useState({});
//     const [ensName, setENSName] = useState(null);
//     const {
//         data,
//         isError,
//         refetch: refetchAuth,
//     } = useCheckAuth({
//         refetchOnWindowFocus: false,
//         enabled: false,
//     });
//     const [ownedSafes, setOwnedSafes] = useState([]);
//     const [contributedSafes, setContributedSafes] = useState([]);
//     const { refetch: refetchDisconnect } = useDisconnect({
//         refetchOnWindowFocus: false,
//         enabled: false,
//     });
//     // const [darkMode, setDarkMode] = useState(false)
//     // const [desktopPosition, setDesktopPosition] = useState('bottomRight')
//     // const [mobilePosition, setMobilePosition] = useState('top')

//     const [isHardwareWallet, setIsHardwareWallet] = useState(false);

//     useEffect(() => {
//         const safeService = new SafeServiceClient(transactionServiceUrl);
//         setSafeService(safeService);
//         const onboard = initOnboard({
//             address: handleAddress,
//             network: handleNetwork,
//             balance: setBalance,
//             wallet: wallet => {
//                 setWallet(wallet);

//                 if (wallet.provider) {
//                     // console.info(`${wallet.name} is connected`);

//                     const ethersProvider = new Web3Provider(wallet.provider);
//                     // console.log(ethersProvider.getSigner());
//                     // signerAddress(ethersProvider.getSigner());
//                     const ethersAdapter = new EthersAdapter({
//                         ethers: ethers,
//                         signer: ethersProvider.getSigner(0),
//                     });
//                     setEthersAdapter(ethersAdapter);
//                     // provider = ethersProvider;
//                     setProvider(ethersProvider);

//                     window.localStorage.setItem("selectedWallet", wallet.name);
//                 } else {
//                     // provider = null;

//                     setProvider(false);
//                     setWallet({});
//                 }
//             },
//         });
//         try {
//             fetch("https://raw.githubusercontent.com/Uniswap/sybil-list/master/verified.json").then(
//                 async res => {
//                     res.json().then(data => {
//                         setSybilData(data);
//                     });
//                 },
//             );
//         } catch (e) {
//             console.error(e);
//             Sentry.captureException(e);
//         }

//         if (window.localStorage.getItem("selectedWallet")) {
//             setIsPrevWallet(true);
//         } else {
//             setIsPrevWallet(false);
//         }
//         setOnboard(onboard);
//     }, []);

//     useEffect(() => {
//         if (network && wallet && wallet.provider) {
//             const ethersProvider = new Web3Provider(wallet.provider);
//             const ethersAdapter = new EthersAdapter({
//                 ethers: ethers,
//                 signer: ethersProvider.getSigner(0),
//             });

//             setEthersAdapter(ethersAdapter);
//             setProvider(ethersProvider);
//         }
//     }, [network]);

//     useEffect(() => {
//         const previouslySelectedWallet = window.localStorage.getItem("selectedWallet");
//         if (onboard && previouslySelectedWallet) {
//             onboard.walletSelect(previouslySelectedWallet);
//         }
//     }, [onboard]);

//     useEffect(() => {
//         if (provider && address) {
//             refetchAuth();
//         }
//     }, [provider, address]);

//     useEffect(() => {
//         if (isError) {
//             // console.log(error, "Here");
//             setIsLoggedIn(false);

//             return;
//         }

//         if (data) {
//             setIsLoggedIn(true);
//             setOwnedSafes(data.data.me.ownedSafes);
//             setContributedSafes(data.data.me.contributedSafes);
//         }
//     }, [data, isError]);

//     useEffect(() => {
//         if (wallet) {
//             if (wallet?.name === "Ledger" || wallet?.name === "Trezor") {
//                 setIsHardwareWallet(true);
//             } else {
//                 setIsHardwareWallet(false);
//             }
//         }
//     }, [wallet]);

//     const handleAddress = async account => {
//         setAddress(prev => {
//             // console.log(prev, account, "from acc");
//             if (prev === null || prev === undefined) return account;
//             if (prev === account) return account;
//             window.localStorage.removeItem("selectedWallet");
//             window.localStorage.removeItem("parcelv2_lastLoggedInSafeAddress");
//             window.localStorage.removeItem("LAST_WALLET");
//             refetchDisconnect().then(() => {
//                 setIsLoggedIn(false);
//                 router.push("/");
//             });
//             return account;
//         });
//         setAddress(account);
//     };
//     const handleNetwork = async network => {
//         if (networkId !== network) {
//             setIsNetworkChanged(true);
//             return;
//         }
//         setIsNetworkChanged(false);

//         setNetwork(prev => {
//             // console.log(prev, account, "from acc");
//             if (prev === null || prev === undefined) return network;
//             if (prev === network) return network;
//             window.localStorage.removeItem("selectedWallet");
//             window.localStorage.removeItem("parcelv2_lastLoggedInSafeAddress");
//             window.localStorage.removeItem("LAST_WALLET");
//             refetchDisconnect().then(() => {
//                 setIsLoggedIn(false);
//                 router.push("/");
//             });
//             return network;
//         });
//         setNetwork(network);
//     };

//     const getLabelName = async () => {
//         try {
//             const name = await provider.lookupAddress(address);
//             setENSName(name);
//         } catch (err) {
//             setENSName(null);
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         if (!!address) {
//             getLabelName();
//         }
//     }, [address]);

//     return (
//         <BaseAppContext.Provider
//             value={{
//                 web3: {
//                     onboard,
//                     account: address ? getAddress(address) : undefined,
//                     ensName: ensName,
//                     chainId: network,
//                     library: provider,
//                     ethersAdapterOwner: ethersAdapter,
//                     connector: wallet,
//                     balance: balance,
//                     active: address && balance ? true : false,
//                     isLoggedIn,
//                     setIsLoggedIn,
//                     isPrevWallet,
//                     setIsPrevWallet,
//                     safeService,
//                     ownedSafes,
//                     refetchAuth,
//                     isNetworkChanged,
//                     setIsNetworkChanged,
//                     contributedSafes,
//                     setIsWalletEOA,
//                     isWalletEOA,
//                     sybilData,
//                     isHardwareWallet,
//                     setIsGnosisWallet,
//                     isGnosisWallet,
//                 },
//             }}
//         >
//             {children}
//         </BaseAppContext.Provider>
//     );
// }
