const calculate = () => {
    // 1. Corrected the ID to "principal" and converted values to Numbers
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    // 2. Simple Interest Formula
    let simpleInterest = (p * r * t) / 100;

    // 3. Total Amount Formula (Principal + Interest)
    let amount = p + simpleInterest;

    let result = document.getElementById("result");

    // 4. Using toFixed(2) now works because p, simpleInterest, and amount are Numbers
    result.innerHTML = `
        <div>Principal Amount: <span>$${p.toFixed(2)}</span></div>
        <div>Total Interest: <span>$${simpleInterest.toFixed(2)}</span></div>
        <div>Total Amount: <span>$${amount.toFixed(2)}</span></div>
    `;
};
