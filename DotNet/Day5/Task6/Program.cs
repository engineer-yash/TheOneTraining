/* 
6). Generate Below Exception.(5 Marks)
NullReferenceException
IndexOutOfRangeException 
StackOverflowException 
OutOfMemoryException 
InvalidCastException 
InvalidOperationException */

using System.Text;

class CheckingExceptions
{
    static void NullReferenceException()
    {
        try
        {
            string exceptionCheck = null;
            Console.WriteLine(exceptionCheck.Length);

        }
        catch(Exception ex)
        {
            Console.WriteLine("-------------NullReferenceException-----------------");
            Console.WriteLine(ex+"\n");
        }
    }
    static void IndexOutOfRange()
    {
        try
        {
            int[] arr = { 1, 2, 3 };
            Console.WriteLine(arr[3]);
        }
        catch(Exception ex)
        {
            Console.WriteLine("-------------IndexOutOfRange-----------------");
            Console.WriteLine(ex + "\n");
        }
    }
    static void StackOverflowException()
    {
        //Print();
        //void Print()
        //{
        //    Print();
        //}
        //try
        //{
        //    RecursiveMethod(1);
        //}
        //catch (StackOverflowException ex)
        //{
        //    Console.WriteLine("StackOverflowException caught: " + ex.Message);
        //}
        try
        {
            throw new StackOverflowException();
        }
        catch (Exception ex)
        {
            Console.WriteLine("-------------StackOverflowException-----------------");
            Console.WriteLine(ex + "\n");
        }
    }
    static void RecursiveMethod(int value)
    {
        Console.WriteLine("Current Number: "+ value);
        RecursiveMethod(value + 1);
    }
    static void OutOfMemoryException()
    {
        StringBuilder stringBuilder = new StringBuilder(1, 100);//Capacity - ArgumentOutOfRange, Character Max Capacity - OutOfMemoryException
        stringBuilder.Append("Welcome to the ");
        try
        {
            stringBuilder.Insert(0, "world of C# programming", 5);//Index to insert, String, Offset: - Repeatation Count
            Console.WriteLine(stringBuilder.ToString());

        }
        catch (Exception ex)
        {
            Console.WriteLine("-------------OutOfMemoryException-----------------");
            Console.WriteLine(ex.Message + "\n");
        }
    }
    static void InvalidCastException()
    {
        int isInt;
        Object obj = new Object();
        try
        {
            isInt = (char)obj;
        }
        catch (InvalidCastException ex)
        {
            Console.WriteLine("-------------InvalidCastException-----------------");
            Console.WriteLine(ex + "\n");
        }
    }
    static void InvalidOperationException()
    {
        try
        {
            throw new InvalidOperationException();
        }
        catch(InvalidOperationException ex)
        {
            Console.WriteLine("-------------InvalidOperationException-----------------");
            Console.WriteLine(ex + "\n");
        }
    }

    static void Main(string[] args)
    {
        NullReferenceException();
        IndexOutOfRange();
        StackOverflowException();
        OutOfMemoryException();
        InvalidCastException();
        InvalidOperationException();

    }
}