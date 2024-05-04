//5) Write a C# program where you assign string values to stringBuilder and perform operations such as Insert(), Append(), AppendLine(), Replace(), and Remove().
using System.Text;

class StringBuilderUse
{
    static void ForInsert()
    {
        Console.WriteLine("Enter Your Name");
        StringBuilder insertOperation = new StringBuilder("Hello Remember You Are Precious");
        insertOperation.Insert(5, " " + Console.ReadLine());
        Console.WriteLine(insertOperation);
    }
    static void ForAppend()
    {
        Console.WriteLine("Enter Your Name");
        StringBuilder appendOperation = new StringBuilder("Hi ");
        appendOperation.Append(Console.ReadLine());
        Console.WriteLine(appendOperation);
    }
    static void ForAppendLine()
    {
        Console.WriteLine("Enter Your Age");
        StringBuilder appendLineOperation = new StringBuilder("OMG!");
        appendLineOperation.AppendLine("You Are");
        appendLineOperation.AppendLine(Console.ReadLine());
        Console.WriteLine(appendLineOperation + "Years Old! WOW");
    }
    static void ForReplace()
    {
        StringBuilder replaceOperation = new StringBuilder("I need a Water ASAP!");
        Console.WriteLine(replaceOperation);
        Console.WriteLine("Write Anything You Want Instead of \'Water\'");
        string input = Console.ReadLine();
        string isVowels = input.Substring(0, 1);
        switch (isVowels.ToLower())
        {
            case "a":
                case "e":
            case "i":
                case "o":
            case "u":
                replaceOperation.Replace(" a ", " an ");
                break;
        }
        replaceOperation.Replace("Water", input);
        Console.WriteLine(replaceOperation);
    }
    static void ForRemove()
    {
        StringBuilder removeOperation = new StringBuilder("Hey! You are Smart");
        Console.WriteLine(removeOperation);
        Console.WriteLine("After Remove Operation");
        removeOperation.Remove(0,5);
        Console.WriteLine(removeOperation);
    }
    static void Main(string[] args)
    {
        //ForInsert();
        //ForAppend();
        //ForAppendLine();
        //ForReplace();
        //ForRemove();
    }
}