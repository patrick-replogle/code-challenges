// first pass solution
class Foo {
    ReentrantLock lock = new ReentrantLock();
    boolean conditionOne = false;
    boolean conditionTwo = false;

    public void first(Runnable printFirst) throws InterruptedException {
        lock.lock();
        try {
            printFirst.run(); 
            conditionOne = true;
        } finally {
            lock.unlock();
        } 
    }

    public void second(Runnable printSecond) throws InterruptedException {
        try {
            while(!conditionOne);
            lock.lock();
            printSecond.run(); 
            conditionTwo = true;
        } finally {
            lock.unlock();
        }
    }

    public void third(Runnable printThird) throws InterruptedException {
        try {
            while(!conditionTwo);
            lock.lock();
            printThird.run(); 
        } finally {
            lock.unlock();
        }
    }
}
