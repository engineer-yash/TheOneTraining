//2). Write a program that converts temperature from Fahrenheit to Celsius using the arithmetic operators for subtraction and division.
class FahrenheitToCelsiusTask
{
    static float tempratureFahrenheit;
    static float tempratureCelsius;

    public static void GetInput()
    {
        Console.WriteLine("Enter Fahrenheit Value: ");
        if(!float.TryParse(Console.ReadLine(),out tempratureFahrenheit))
        {
            Console.WriteLine("Invalid Value");
            GetInput();
        }
    }
    public static void FahrenheitToCelsius()
    {
        tempratureCelsius = (tempratureFahrenheit - 32) * 5 / 9;
        Console.WriteLine($"{tempratureFahrenheit}°F Converted into = " + tempratureCelsius+ "°C");
    }

    public static void RepeatInput()
    {
        Console.WriteLine("Do you want to repeat agian? - (y/n)");
        var isCheck = Console.ReadLine();
        switch (isCheck.ToLower()) {
            case "y":
                GetInput();
                FahrenheitToCelsius();
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
        FahrenheitToCelsius();
        RepeatInput();
    }
}