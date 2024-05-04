class ThreadCreation
{
    //Thread - execution path of the program
    //MultiThreading is used to perform multiple task at the same time
    //Current thread running is Main thread using System.Threading;
    static void Main(string[] args)
    {
        Thread mainThread = Thread.CurrentThread;
        mainThread.Name = "main";

        Thread thread1 = new(CountDown);
        Thread thread2 = new(CountUp);
        thread1.Start();
        thread2.Start();

        //Console.WriteLine(m);
        //CountDown();
        //CountUp();
        Console.WriteLine(mainThread.Name+ "Timer Thread is complete!");

        Console.ReadKey();
    }

    public static void CountDown()
    {
         for(int i = 10; i >= 0; i--)
        {
            Console.WriteLine("Timer #1: "+ i + " Seconds");
            Thread.Sleep(1000);
        }
        Console.WriteLine("Timer #1 is complete!");
    }

    public static void CountUp()
    {
        for (int i = 0; i <= 10; i++)
        {
            Console.WriteLine("Timer #2: " + i + " Seconds");
            Thread.Sleep(1000);
        }
        Console.WriteLine("Timer #2 is complete!");
    }

}