//3). Create a Dictionary of strings and integers and add the following key-value pairs: "one" - 1, "two" - 2, "three" - 3, and "four" - 4.(3 Marks)
class Dictionary
{
   static Dictionary<string, int> keyValuePairs = new Dictionary<string, int>() { { "one", 1 }, { "two", 2 }, { "three", 3 }, { "four", 4 } };
    static void Main(string[] args)
    {
        foreach (var i in keyValuePairs)
        {
            Console.WriteLine($"Key:\"{i.Key}\" Value:{i.Value}");
        }
    }
}
