/* 6). Design a C# program that uses threads to calculate the factorial of a given number. 
  Create a method named CalculateFactorial that takes an integer input and calculates the factorial of that number using a separate thread. 
  Ensure proper synchronization and handling of the thread to avoid race conditions. 
  Implement a solution where the main thread initiates the calculation and waits for the result from the thread before 
  displaying the final factorial value.(3 Marks)*/
class FactorialCalculator
{
    public static int number;
    public static void UserInput()
    {
        if(!int.TryParse(Console.ReadLine(),out number) || number >= 10)
        {
            Console.WriteLine("Invalid Input Try Again");
            UserInput();
        }
    }
    public static void Thread()
    {
        int result = 0;

        Thread thread = new Thread(() => { result = CalculateFactorial(number); });

        thread.Start();
        thread.Join(); // Wait for the thread to finish

        Console.WriteLine($"Factorial of {number} is: {result}");
    }
    static int CalculateFactorial(int n)
    {
        if (n == 0)
            return 1;

        int factorial = 1;
        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }
        return factorial;
    }
    static void Main()
    {
        Console.WriteLine("Enter Number For Factorial: ");
        UserInput();
        Thread();
        Main();
    }
}