function getInputValue(inputId) {
    //get the amount deposited
    const Input = document.getElementById(inputId);
    const newAmountText = Input.value;
    const newAmount = parseFloat(newAmountText);
    //clear deposit input field
    Input.value = '';
    return newAmount;

}



function updateTotalField(totalFieldId, amount) {
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newTotal = previousTotal + amount;
    totalElement.innerText = newTotal;


}
function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}
function updateTotalBalance(balanceAmount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + balanceAmount;
        balanceTotal.innerText = newBalanceTotal;

    }
    else {
        const newBalanceTotal = previousBalanceTotal - balanceAmount;
        balanceTotal.innerText = newBalanceTotal;
    }


}

//handle deposite button event

document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateTotalBalance(newDepositAmount, true);
    }


    //update account balance


})

//call deposit function
//Handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the amount deposited
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);

        //update account balance
        updateTotalBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        console.log("You can't withdraw anymore");
    }

})

//call withdraw function
