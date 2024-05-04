//3). Write a program that checks whether a given number is even or odd using the modulo (%) operator.
class OddEvenNumber
{
    static int inputValue;
    public static void GetInput()
    {
        Console.WriteLine("Enter Input for checking Odd or Even: ");
        if(!int.TryParse(Console.ReadLine(),out inputValue))
        {
            Console.WriteLine("Invalid Input! Try again");
            GetInput();
        }
    }

    public static void CheckingOddEven()
    {
        if(inputValue % 2 == 0)
        {
            Console.WriteLine($"{inputValue} is Even");
        }
        else
        {
            Console.WriteLine($"{inputValue} is Odd");
        }
    }

    public static void RepeatInput()
    {
        Console.WriteLine("Do you want to repeat agian? - (y/n)");
        var isCheck = Console.ReadLine();
        switch (isCheck.ToLower())
        {
            case "y":
                GetInput();
                CheckingOddEven();
                RepeatInput();
                break;

            case "n":
                break;

            default:
                Console.WriteLine("You Entered Wrong Input! Please Try Again.");
                RepeatInput();
                break;
        }

    }

    public static void Main(string[] args)
    {
        GetInput();
        CheckingOddEven();
        RepeatInput();
    }
}