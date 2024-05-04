//2). Create a List of strings and add the following values: "apple", "banana", "orange", and "grape".(3 Marks)
class ListValues
{
    static List<string> strings = new List<string>() {"apple","banana","orange","grape"};
    static void Main(string[] args)
    {
        foreach(string s in strings)
        {
            Console.WriteLine(s);
        }
    }
}