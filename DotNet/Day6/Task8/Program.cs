using Task8;

class IsPrime
{
    public static void Main(string[] args)
    {
        try
        {
            Console.WriteLine("Enter a Number: ");
            string? givenNumber = Console.ReadLine();
            int number = int.Parse(givenNumber);

            if (number.IsPrimeNumber())
            {
                Console.WriteLine($"{number} is a Prime Number");
            }
            else
            {
                Console.WriteLine($"{number} is Not a Prime Number");
            }
        }catch(Exception ex)
        {
            Console.WriteLine(ex.Message + " Invalid Input! Try Again");
            Main(args);
        }
    }
}