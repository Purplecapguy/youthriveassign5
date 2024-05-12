// Define the bank accounts
let accounts = {
    "1557958705": {
      balance: 100000,
      pin: 1234  
    },
    "3045679097": {
      balance: 10000,
      pin: 4321
    }
  };

let airtimes = {
    airtel: "08012345678",
    mtn: "08161234567",
    glo: "07051234567",
    mobile: "09012345678"
  };

let welcome = prompt("Welcome, Insert your card by pressing YES:\n1. YES\n2. Cancel");
if (welcome === "1") {
  atm();
} else if (welcome === "2") {
  alert("Thank you for banking with us, enjoy the rest of your day!!!");
} else {
  alert("Invalid Selection")
}

function atm() {
  let userChoice = prompt("select an option:\n1. Transfer money\n2. Check Balance\n3. Withdraw\n4. Buy Airtime\n5. Others");
if (userChoice === "1") {
  // Prompt for the account number to transfer from
  let accountFrom = prompt("Enter the account number to transfer from:");
  // Prompt for the PIN
  let pin = parseInt(prompt("Enter the PIN for account " + accountFrom + ":"));
  if (accounts[accountFrom] && accounts[accountFrom].pin === pin) {
    // Prompt for the account number to transfer to
    let accountTo = prompt("Enter the account number to transfer to:");
    // Prompt for the amount to transfer
    let amount = parseFloat(prompt("Enter the amount to transfer:"));
    // Check if the accountTo exists and the amount is valid
    if (accounts[accountTo] && amount > 0 && accounts[accountFrom].balance >= amount) {
      // Deduct the amount from accountFrom
      accounts[accountFrom].balance -= amount;
      // Add the amount to accountTo
      accounts[accountTo].balance += amount;
      alert(`Transfer Successful. Transferred #${amount} from account ${accountFrom} to account ${accountTo}`);
    } else {
      // alert invalid account or amount
      alert("Invalid account or amount");
    }
  } else {
    // alert invalid account or pin
    alert("Invalid account or PIN");
  }
} else if (userChoice === "2") {
  // userchoice 2nd option 
  let accountNumber = prompt("Enter the account number to check balance:");
  // check if the account entered by the user is the same as the first account number
  if (accountNumber === "1557958705") {
    alert('The balance of account: 1557958705 is #100000');
    // if the same, display the balance
  } else {
    // if not same, display invalid account number
    alert('Invalid Account Number');
  }
} else if (userChoice === "3") {
  // userchoice 3rd option 
  alert("Service Temporarily Unavailable");
} else if (userChoice === "4") {
  // userchoice 4th option 
  airtime();
  // alert("Service Temporarily Unavailable");
} else if (userChoice === "5") {
  // userchoice 5th option 
  alert("Service Temporarily Unavailable");
} else {
  alert("Invalid option selected");
}
}

function airtime() {
  let accountFrom = prompt("Enter the account number to buy airtime from:");
  // Prompt for the PIN
  let pin = parseInt(prompt("Enter the PIN for account " + accountFrom + ":"));
  if (accounts[accountFrom] && accounts[accountFrom].pin === pin) {
    // Prompt for the account number to transfer to
    let airtimeChoice = prompt("select the Network:\n1. Airtel\n2. MTN\n3. GLO\n4. 9mobile");
    if (airtimeChoice === "1") {
      let airtel = prompt("Enter the phone number:");
      if (airtel === "08012345678") {
        alert("Transaction Successful.");
      } else {
        alert("Invalid Number.");
      }
    } else if (airtimeChoice === "2") {
      let mtn = prompt("Enter the phone number:");
      if (mtn === "08161234567") {
        alert("Transaction Successful.");
      } else {
        alert("Invalid Number.");
      }
    } else if (airtimeChoice === "3") {
      let glo = prompt("Enter the phone number:");
      if (glo === "07051234567") {
        alert("Transaction Successful.");
      } else {
        alert("Invalid Number.");
      }
    } else if (airtimeChoice === "4") {
      let mobile = prompt("Enter the phone number:");
      if (mobile === "09012345678") {
        alert("Transaction Successful.");
      } else {
        alert("Invalid Number.");
      }
    } else {
      alert("Invalid selection");
    }
  } else {
      alert("Invalid account or PIN");
  }
}