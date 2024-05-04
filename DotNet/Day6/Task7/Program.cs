//7). Create an extension method called Reverse for the string class that reverses the given string.(3 Marks)

using Task7;
class ReversedString
{
   public static void Main(string[] args)
    {
        Console.WriteLine("Enter Some Text That You Want to Reverse: ");
        string? originalString = Console.ReadLine();
        Console.WriteLine("Reversed Text: " + originalString?.ReverseString());
    }
}