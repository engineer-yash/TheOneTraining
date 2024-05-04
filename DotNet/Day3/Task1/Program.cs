

//1). Write a program in C# Sharp to make such a pattern like a pyramid with a number which will repeat the number in the same row (for loop).
class Pattern
{
    static int row = 4;
    static int end = 0;
    static void PatternLogic()
    {
        for (int i = 1; i <= row; i++)
        {
            for (int k = row - i; k > end; k--)
            {
                Console.Write(" ");
            }
            for (int j = 1; j <= i; j++)
            {
                Console.Write(" " + i);
            }

            Console.WriteLine();
        }
    }
    public static void Main(string[] args)
    {
        PatternLogic();
    }
}