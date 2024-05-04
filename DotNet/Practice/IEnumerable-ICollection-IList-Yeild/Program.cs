
class IEnumerableICollectionIListYeild
{
    static IEnumerable<int> GetOddNumbers(int count)
    //IEnumerable - ReadOnly Iteration through list and objects - Not using DATABASE
    {
        //List<int> result = new List<int>();//Creating List and adding
        for (int i = 1; i <= count; i += 2)
        {
            //result.Add(i);
            yield return i;//return immediately when get the number then print and again get the number
            Console.WriteLine("print");//printing all one by one
        }
        //return result;//returning to main()
    }
    static void Main(string[] args)
    {
        //GetOddNumbers(10);//Initialization

        foreach(int i in GetOddNumbers(10))
        {
            Console.WriteLine(i);
        }
    }
}
