//4). Write a C# program using Enum to create a class method which returns the value of an enum.
//For example, prepare an Enum and assign a value to it. Then, pass the value to the function to display the name of the enum.
class EnumNumberPassing
{
    enum GoogleApps { Gmail, Chrome, YouTube, Photos, Drive, PlayStore, Meet}
    public static int userInput;
    public static void SelectApps(int AppNumber)
    {
        Console.WriteLine($"App Name: {Enum.GetName(typeof(GoogleApps), AppNumber)}");
    }
    public static void UserInput()
    {
        if(!int.TryParse(Console.ReadLine(), out userInput) || userInput > 6)
        {
            Console.WriteLine("Invalid Input Try Again!");
            UserInput();
        }
    }
    static void Main(string[] args)
    {
        // SelectApps(4);//Direct Pass
        Console.WriteLine($"Select Your Favourite GoogleApp\nWrite\n0 for Gmail,\n1 for Chrome,\n2 for YouTube,\n3 for Photos,\n4 for Drive,\n5 for PlayStore,\n6 for Meet");
        UserInput();
        Console.WriteLine($"Your Favourite App is: {Enum.GetName(typeof(GoogleApps),userInput)}");
    }
}