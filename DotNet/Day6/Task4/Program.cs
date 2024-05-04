//4). Create a C# program that demonstrates the creation and execution of a simple thread.
//The thread should print numbers from 1 to 5 with a delay of 500 milliseconds between each number.(3 Marks)

class BasicThread
{
    static void Main(string[] args)
    {
        Thread newThread = new(PrintNumbers);
        newThread.Start();
    }
    public static void PrintNumbers()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine(i);
            Thread.Sleep(500);
        }
    }
}