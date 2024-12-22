// App.js 파일
import { useNavigate } from "react-router-dom"
import '../je.css';
import useWeb3 from '../hooks/useWeb3';
import { useEffect, useState } from 'react';
import background from "./image.jpeg";
import "./style.css";


const useJe = () =>{
  let minABI = [
    // balanceOf
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];
    const [account, web3] = useWeb3();
    const [isLogin, setIsLogin] = useState(false);
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        await web3.eth.sendTransaction({
            from: account,
            to: e.target.received.value,
            value: web3.utils.toWei(e.target.amount.value, 'ether'),
        });
    };

    useEffect(() => {

        const init = async () => {
            const balance = await web3?.eth.getBalance(account);
            setBalance(balance / 10 ** 18);


        };

        if (account) setIsLogin(true);
        init();
    }, [account]);

    if (!isLogin)
        return (
            <div>
                <h1>Please use metadata after login.</h1>
            </div>
        );
        const redirectToGoogle = () => {
        let vari = "?" + balance;
        let url="http://localhost:3000/blackjackjack/index.html" + vari;
        window.location.href = url;};

    return (
        <div className="App">
            <div style={styles.back}>
                <div style={styles.div2}>
                    <div style={styles.box}>
                        <p></p>
                        <div style={styles.font}>WELCOME!</div>
                        <div style={styles.acc}>Account : {account}</div>
                        <div style={styles.bal}>Balance : {balance} ETH</div>
                        <p></p>
                        <form onSubmit={handleSubmit}></form>
                        <div onClick={redirectToGoogle} style={styles.button}>PLAY</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

var styles = {
    back: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        width:'1300px',
        height: '680px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative'
    },
    box: {
        width: '70%',
        height: '25%',
        background: 'white',
        borderTop: 'solid 3px #AAAAAA',
        borderLeft: 'solid 3px #AAAAAA',
        borderBottom: 'solid 3px #AAAAAA',
        borderRight: 'solid 3px #AAAAAA',
        borderRadius: '10px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    font: {
        fontWeight: '200',
        fontSize: '30px',
        fontFamily: '"Caveat", cursive'
    },
    acc: {
        fontWeight: '100',
        fontFamily: '"Caveat", cursive'
    },
    bal: {
        fontWeight: '100',
        fontFamily: '"Caveat", cursive'
    },
    button:{
        width: '10%',
        top: '80%',
        left: '50%',
        borderTop: 'solid 1px black',
        borderLeft: 'solid 1px black',
        borderBottom: 'solid 1px black',
        borderRight: 'solid 1px black',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        fontSize: '25px',
        fontWeight: '100',
        fontFamily: '"Amatic SC", cursive',
        borderRadius: '10px',
    }
}

export default useJe;
