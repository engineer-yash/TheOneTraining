class IntegerIntoArrayStoring
{   
   
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter Number that you want to convert into Character: ");
        string? Input = Console.ReadLine();
        int[] arr = new int[Input.Length];

        for(int i = 0; i < Input.Length; i++)
        {
            arr[i] = int.Parse(Input[i].ToString());
            Console.WriteLine(arr[i]);
        }
    }
}