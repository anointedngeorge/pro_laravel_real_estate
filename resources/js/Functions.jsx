export function* rangeGenerator(start = 0, end = 10, step = 1) {

    let startNum = start == 0 ? step : start += step;
    for (startNum; startNum <= end; startNum += step) {
        yield startNum;
    }

}


export function MoneyFormat({ currency_type = 'NGN', amount = 0.00 }) {
    const formatted = new Intl.NumberFormat('en-NG', { style: 'currency', currency: currency_type }).format(amount);
    return formatted;
}