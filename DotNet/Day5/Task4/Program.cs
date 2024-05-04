//4). Write a method that takes an array of integers as a parameter and returns the sum of its elements.(3 Marks)
class ArrayReturns
{
    static int sum;
    static int[] arr1 = { 45, 45, 45 };
    static int Returning(int[] array)
    {
        //for (int i = 0; i < array.Length; i++)
        // {
        //     sum += array[i];
        // }
        sum = arr1.Sum();
        return sum;
    }
    static void Main(string[] args)
    {
        Console.WriteLine(Returning(arr1));
    }
}