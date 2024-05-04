//2). Write a C# Sharp program to check whether an alphabet letter is a vowel or a consonant(switch case).
class VowelsOrConsonantChecking
{
    static char isRepeat;
    static void VowelConsonantChecking()
    {
        Console.WriteLine("Write One Character: ");
        char character;
        char.TryParse(Console.ReadLine(), out character);
        List<char> list = new List<char>();
        list.Add('a');
        list.Add('e');
        list.Add('i');
        list.Add('o');
        list.Add('u');

        bool isVowel = list.Contains(character);

        if (char.IsLetter(character))
        {
            switch (isVowel)
            {
                case true:
                    Console.WriteLine($"{character} is a Vowel");
                    break;
                case false:
                    Console.WriteLine($"{character} is a Consonant");
                    break;
            }
        }
        else
        {
            Console.WriteLine("Please enter a valid letter.");
        }
    }

    static void RepeatInput()
    {
        Console.WriteLine("Do you want to check again?(y/n): ");
        char.TryParse(Console.ReadLine(), out isRepeat);
        
        if(char.ToLower(isRepeat) == 'y')
        {
            VowelConsonantChecking();
            RepeatInput();
        }
        else if(char.ToLower(isRepeat) == 'n')
        {
            Console.WriteLine("Enter any key to Close");
        }
        else
        {
           Console.WriteLine("Wrong input Answer it Again");
            RepeatInput();
        }
    }
    static void Main(string[] args)
    {
        VowelConsonantChecking();
        RepeatInput();
        Console.ReadKey();
    }
}