// first pass solution
class FooBar {
    private int n;
    boolean isFoo = true;

    public FooBar(int n) {
        this.n = n;
    }

    public synchronized void foo(Runnable printFoo) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            while (!isFoo) { 
                wait();
            };
        	printFoo.run();
            isFoo = false;
            notifyAll();
        }
    }

    public synchronized void bar(Runnable printBar) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
            while (isFoo) { 
                wait();
            };
            
            printBar.run();
            isFoo = true;
            notifyAll();
        }
    }
}

// second pass solution
class FooBar {
    private int n;
    boolean isFoo = true;

    public FooBar(int n) {
        this.n = n;
    }

    public void foo(Runnable printFoo) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            synchronized(this) {
                while (!isFoo) { 
                    wait();
                };
                printFoo.run();
                isFoo = false;
                notifyAll();  
            }
        }
    }

    public void bar(Runnable printBar) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
            synchronized(this) {
                while (isFoo) { 
                    wait();
                };

                printBar.run();
                isFoo = true;
                notifyAll();
            }
        }
    }
}
