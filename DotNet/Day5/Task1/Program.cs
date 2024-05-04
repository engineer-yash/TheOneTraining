//1).  Create an array of integers and initialize it with the values 1, 2, 3, 4, and 5.(3 Marks)
class ArrayTask
{
    static void Main(string[] args)
    {
        int[] arr = [ 1, 2, 3, 4, 5 ];
        for(int i = 0; i < arr.Length; i++)
        {
            Console.WriteLine(arr[i]);
        } 
    }
}