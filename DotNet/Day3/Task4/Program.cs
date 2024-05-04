//4). Write a C# Sharp program to display the n (n is the input value from the console) terms of odd natural numbers and their sums.
class OddNumbersAndSum
{
    static int inputNumber;
    static void InputFromUser()
    {
        Console.WriteLine("Enter n Input: ");
        if(!int.TryParse(Console.ReadLine(), out inputNumber))
        {
            Console.WriteLine("Invalid Input Try Again:(");
            InputFromUser();
        }
    }
    static void PrintAndSum()
    {
        Console.WriteLine("Odd Numbers Are: ");
        int sumOfOddNums = 0;
        var numbers = OddNums(inputNumber);
        string oddNums = string.Join(',', numbers);
        foreach(var number in numbers)
        {
            sumOfOddNums += number;
        }
        Console.WriteLine("Below are the odd nubers you have choosen for ");
        Console.WriteLine(oddNums);
        
        Console.WriteLine("\nAnd Sum of All Above Odd Numbers is " + sumOfOddNums);
    }
    static void Main(string[] args)
    {
        InputFromUser();
        PrintAndSum();
    }

    static IEnumerable<int> OddNums(int count)
    {
        for (int i = 1; i <= count; i += 2)
        {
            yield return i;
        }
    }
}