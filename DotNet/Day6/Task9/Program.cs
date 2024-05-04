//9). Create an extension method called ToCsv for the List<T> class that converts the list to a CSV - (Comma Seperated String) string.(3 Marks)
using Task9;
class ConvertingListToCSV
{
    public static void Main(string[] args)
    {
        //Int List
        List<int> list = new List<int>() { 1, 5, 8, 98, 465, 145 };
        string result = list.ToCSV();
        Console.WriteLine(result);

        //String List
        List<string> listTwo = new List<string>() { "Yash", "Parth", "Dhruv", };
        string resultTwo = listTwo.ToCSV();
        Console.WriteLine("Chaddi Gang: " + resultTwo);
    }
}