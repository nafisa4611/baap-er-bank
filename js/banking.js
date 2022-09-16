document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputValue = document.getElementById('deposit-input');
    const depositInput = depositInputValue.value;
    const depositNewInput = parseFloat(depositInput);

    const depositAmout = document.getElementById('deposit-amount').innerText;
    const depositNewAmount = parseFloat(depositAmout);

    const totalDeposit = depositNewInput + depositNewAmount;
    if (depositNewInput > 0){
        document.getElementById('deposit-amount').innerText = totalDeposit;
        const totalBalance = document.getElementById('total-balance').innerText;
        const totalNewBalance = parseFloat(totalBalance);
    
        document.getElementById('total-balance').innerText = totalNewBalance + depositNewInput;
    }
    

    depositInputValue.value = '';

})


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputValue = document.getElementById('withdraw-input');
    const withdrawInput = withdrawInputValue.value;
    const withdrawNewInput = parseFloat(withdrawInput);

    const withdrawAmout = document.getElementById('withdraw-amount').innerText;
    const withdrawNewAmount = parseFloat(withdrawAmout);

    const totalWithdraw = withdrawNewInput + withdrawNewAmount;
    if (totalWithdraw > 0 && totalWithdraw <= 1200){
        document.getElementById('withdraw-amount').innerText = totalWithdraw;
        const totalBalance = document.getElementById('total-balance').innerText;
        const totalNewBalance = parseFloat(totalBalance);
        const totalUpdateBalance = totalNewBalance - withdrawNewInput;
        if (totalUpdateBalance > 0){
            document.getElementById('total-balance').innerText = totalUpdateBalance;
        }
        
    }
    withdrawInputValue.value = '';

   
})