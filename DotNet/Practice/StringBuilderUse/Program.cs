
using System.Text;

class StringBuilderMethods
{
    static void Append()
    {
        StringBuilder strBuild = new StringBuilder("Hello");
        Console.WriteLine(strBuild);
        strBuild.Append(" Yash Gohel");
        Console.WriteLine(strBuild);
    }
    static void Replace()
    {
        StringBuilder strBuild = new StringBuilder("Hello");
        Console.WriteLine(strBuild);
        strBuild.Replace("Hello", "Hi");
        Console.WriteLine(strBuild);
    }
    static void Clear()
    {
        StringBuilder strBuild = new StringBuilder("Good");
        Console.WriteLine(strBuild);
        strBuild.Clear();
        Console.WriteLine(strBuild);//Print blank line
    }
    static void Remove()
    {
        StringBuilder strBuild = new StringBuilder("Good");
        Console.WriteLine(strBuild);
        strBuild.Remove(0,3);
        Console.WriteLine(strBuild);
    }
    static void Insert()
    {
        StringBuilder strBuild = new StringBuilder("Good");
        Console.WriteLine(strBuild);
        strBuild.Insert(0, "Yash ");
        Console.WriteLine(strBuild);
    }
    static void Equals()
    {
        StringBuilder strgBldr1 = new StringBuilder("Hello World");
        StringBuilder strgBldr2 = new StringBuilder("World");
        StringBuilder strgBldr3 = new StringBuilder("Hello World");

        Console.WriteLine(strgBldr1.Equals(strgBldr2));
        Console.WriteLine(strgBldr1.Equals(strgBldr3));
    }
    static void Main(string[] args)
    {
        Append();
        Replace();
        Clear();
        Remove();
        Insert();
        Equals();
    }
}