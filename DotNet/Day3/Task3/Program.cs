//3). Write a program to display the Elder person from age. Note: Take a Two Age number from the User and Based on that two age find the Elder person.

class AgeChecker
{
    public static string? userOneName;
    public static int userOneAge;
    public static string? userTwoName;
    public static int userTwoAge;
    public static char isRepeat;

    static void NameOfTheUserOne()
    {
        Console.WriteLine("Enter First User Name:");
        userOneName = Console.ReadLine();
       
    }
    static void AgeOfTheUserOne()
    {
        Console.WriteLine($"Enter {userOneName}\'s Age:");
        if (!int.TryParse(Console.ReadLine(), out userOneAge) || userOneAge < 0 || userOneAge > 100)
        {
            Console.WriteLine("Invalid Input for Age :( Try Again");
            AgeOfTheUserOne();
        }
    }
    static void NameOfTheUserTwo() 
    {
        Console.WriteLine("Enter Second User Name:");
        userTwoName = Console.ReadLine();
    }

    static void AgeOfTheUserTwo()
    {
        Console.WriteLine($"Enter {userTwoName}\'s Age:");
        if (!int.TryParse(Console.ReadLine(), out userTwoAge) || userTwoAge < 0 || userTwoAge > 100)
        {
            Console.WriteLine("Invalid Input for Age :( Try Again");
            AgeOfTheUserTwo();
        }

    }
    static void DisplayWhoIsElder()
    {
        if(userOneAge > userTwoAge)
        {
            Console.WriteLine($"{userOneName} is Elder than {userTwoName}");
        }
        else if(userOneAge < userTwoAge)
        {
            Console.WriteLine($"{userTwoName} is Elder than {userOneName}");
        }
        else
        {
            Console.WriteLine($"{userOneName} And {userTwoName} got the Same Age! :)");
        }
        
    }
    static void RepeatAgain()
    {
        Console.WriteLine("Do you want to play it again?(y/n)");
        char.TryParse(Console.ReadLine(), out isRepeat);
        if (isRepeat == 'y')
        {
            Main();
        }
        else if (isRepeat == 'n')
        {
            Console.WriteLine("Tata Good Bye Gaya!");
        }
        else
        {
            Console.WriteLine("Invalid Input Try Again :(");
            RepeatAgain();
        }
    }
    static void Main()
    {
        NameOfTheUserOne();
        AgeOfTheUserOne();
        NameOfTheUserTwo();
        AgeOfTheUserTwo();
        DisplayWhoIsElder();
        RepeatAgain();
        
    }
}