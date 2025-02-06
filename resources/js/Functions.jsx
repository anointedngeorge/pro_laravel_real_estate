export function* rangeGenerator(start = 0, end = 10, step = 1) {

    let startNum = start == 0 ? step : start += step;
    for (startNum; startNum <= end; startNum += step) {
        yield startNum;
    }

}
