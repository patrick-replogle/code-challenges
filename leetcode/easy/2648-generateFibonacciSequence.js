var fibGenerator = function*() {
    yield 0;
    yield 1;

    let prevPrev = 0;
    let prev = 1;

    while (true) {
        let next = prev + prevPrev;
        prevPrev = prev;
        prev = next;

        yield next;
    }
};
