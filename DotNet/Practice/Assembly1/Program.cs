class ParsingCheck
{

    static void Main()
    {
        //int Input = int.Parse(Console.ReadLine());

        bool AnotherInput = int.TryParse(Console.ReadLine(),out int i);
        if(AnotherInput)
        {
            Console.WriteLine("Chappak!");
        }
        else
        {
            Console.WriteLine("Tata ghar jaja");
            Main();
        }
    }
}