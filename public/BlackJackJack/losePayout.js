
var currentProvider = new Web3.providers.HttpProvider('http://localhost:7545');
const web3 = new Web3(currentProvider);
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
  const payout = document.getElementById("payout");
  document.querySelector("#payout").addEventListener("click", clickPayoutHandler);


  const contract = new web3.eth.Contract(minABI);
    const masteraccount = "0x1E07f4b714733fC8a8F4D64CBDfE35aE0C9F5978"
    
    async function clickPayoutHandler() {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(account)
         window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            console.log(accounts[0])
           });

           var money = location.search
           let ret = money.replace(/^./g,"");
           money = Number(ret);

           await web3.eth.sendTransaction({
               from: account,
               to: masteraccount,
               value: web3.utils.toWei(String(money), 'ether'),
             });
             alert("精算しました")
    }
