//5). Write a method that takes a List of strings as a parameter and returns the number of elements that have a length greater than 5.(3 Marks)
class StringsInList
{
    static List<string> strings = new List<string>() { "apple", "banana", "orange", "grape" };
    static int MethodAsListOfStrings(List<string> ListOfString)
    {
        int count = 0;
        foreach(string str in ListOfString)
        {
            if(str.Length > 5)
            {
                count++;
            }
        }
        count = ListOfString.Where(x => x.Length > 5).Count();
        return count;
    }
    static void Main(string[] args)
    {
        Console.WriteLine(MethodAsListOfStrings(strings));
    }
}