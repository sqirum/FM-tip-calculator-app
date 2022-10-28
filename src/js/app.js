
    // Get Selectors
    const billTotal = document.querySelector('#billTotal');
    const tipsAmount = document.querySelectorAll('#tipAmount input');
    const people = document.querySelector('#people');
    console.log(tipsAmount);

    // Post Selectors
    const tipSingular = document.querySelector('#tipSingular');
    const totalSingular = document.querySelector('#totalSingular');



const updateTotal = () => {

    const billTotalValue = billTotal.value;
    const tipsAmountValue = tipsAmount.value;
    const peopleValue = people.value;

    tipSingular.value = ((billTotalValue * tipsAmountValue) / 100) / peopleValue;
    totalSingular.value = (billTotalValue / peopleValue) + tipSingularValue;

    console.log(tipSingular.value);
    console.log(totalSingular.value);
}

billTotal.addEventListener('keyup', updateTotal);
people.addEventListener('keyup', updateTotal);

// tipsAmount.forEach(tip => {

//     tip.addEventListener('click', () => {
//         tip.classList.add('active');
//     })
// })

