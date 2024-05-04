//3). Write a program in C# to create an enum of colors (you can define the enum as you like) and use a for loop to print each color on a new line.

class ColorsCombination
{
    enum Colours {red, green, yellow, white}
    static void Main(string[] args)
    {
        Console.WriteLine("Colours\n======");
        foreach (var i in Enum.GetNames<Colours>())
        {
            Console.WriteLine(i);
        }
    }
}