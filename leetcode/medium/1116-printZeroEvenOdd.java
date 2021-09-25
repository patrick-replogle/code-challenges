// first pass solution
class ZeroEvenOdd {
    private int n;
    boolean zeroFlag = false;
    boolean oddFlag = false;
    
    public ZeroEvenOdd(int n) {
        this.n = n;
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public synchronized void zero(IntConsumer printNumber) throws InterruptedException {
        for (int i = 1; i <= n; i++) {
            while (zeroFlag) {
                wait();
            }
            printNumber.accept(0);
            zeroFlag = true;
            notifyAll();
        }
    }

    public synchronized void even(IntConsumer printNumber) throws InterruptedException {
        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                while (!zeroFlag || !oddFlag) {
                    wait();
                }
                printNumber.accept(i);
                zeroFlag = false;
                oddFlag = false;
                notifyAll();
            }
        }
    }

    public synchronized void odd(IntConsumer printNumber) throws InterruptedException {
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                while (!zeroFlag || oddFlag) {
                   wait();
                }
                printNumber.accept(i);
                zeroFlag = false;
                oddFlag = true;
                notifyAll();
            }
        }
    }
}

// second pass solution
class ZeroEvenOdd {
    private int n;
    AtomicBoolean zeroFlag = new AtomicBoolean(false);
    AtomicInteger atomicInt = new AtomicInteger(1);
    
    public ZeroEvenOdd(int n) {
        this.n = n;
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public synchronized void zero(IntConsumer printNumber) throws InterruptedException {
        while (atomicInt.get() <= n) {
            while (zeroFlag.get()) {
                wait();
            }
            if (atomicInt.get() <= n) printNumber.accept(0);
            zeroFlag.set(true);
            notifyAll();
        }
    }

    public synchronized void even(IntConsumer printNumber) throws InterruptedException {
        while (atomicInt.get() <= n) {
            while (!zeroFlag.get() || atomicInt.get() % 2 != 0) {
                wait();
            }
            
            if (atomicInt.get() <= n) printNumber.accept(atomicInt.get());
            atomicInt.incrementAndGet();
            zeroFlag.set(false);
            notifyAll();
        }
    }

    public synchronized void odd(IntConsumer printNumber) throws InterruptedException {
        while (atomicInt.get() <= n) {
            while (!zeroFlag.get() || atomicInt.get() % 2 == 0) {
               wait();
            }
            if (atomicInt.get() <= n) printNumber.accept(atomicInt.get());
            atomicInt.incrementAndGet();
            zeroFlag.set(false);
            notifyAll();
        }
    }
}
