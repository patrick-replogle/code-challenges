// synchronized
class FizzBuzz {
    int n;
    int count = 1;

    public FizzBuzz(int n) {
        this.n = n;
    }

    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        while (count <= n) {
            synchronized(this) {
                if (count % 3 == 0 && count % 5 != 0){ 
                    printFizz.run();
                    count++;
                    notifyAll();
                } else {
                    wait();
                }

            }
        }
     }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        while (count <= n) {
            synchronized(this) {
                if (count % 5 == 0 && count % 3 != 0) {
                    printBuzz.run();
                    count++;
                    notifyAll();
                } else {
                    wait();
                }
            }
        }
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        while (count <= n) {
            synchronized(this) {
                if (count % 3 == 0 && count % 5 == 0) {
                    printFizzBuzz.run();
                    count++;
                    notifyAll();
                } else {
                    wait();
                }
            }
        }
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        while (count <= n) {
            synchronized(this) {
                if (count % 3 != 0 && count % 5 != 0) {
                    printNumber.accept(count);
                    count++;
                    notifyAll();
                } else {
                    wait();
                }
            }
        }
    }
}

// atomic integers
class FizzBuzz {
    int n;
    AtomicInteger count;

    public FizzBuzz(int n) {
        this.n = n;
        count = new AtomicInteger(1);
    }

    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        while (count.get() <= n) {
            int num = count.get();
            
            if (num % 3 == 0 && num % 5 != 0) {
                printFizz.run();
                count.getAndIncrement();
            }
        }
     }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        while (count.get() <= n) {
            int num = count.get();
            
            if (num % 3 != 0 && num % 5 == 0) {
                printBuzz.run();
                count.getAndIncrement();
            } 
        }
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        while (count.get() <= n) {
            int num = count.get();
            if (num % 3 == 0 && num % 5 == 0) {
                printFizzBuzz.run();
                count.getAndIncrement();
            }
        }
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        while (count.get() <= n) {
            int num = count.get();
            
            if (num % 3 != 0 && num % 5 != 0) {
                printNumber.accept(num);
                count.getAndIncrement();
            }
        }
    }
}
