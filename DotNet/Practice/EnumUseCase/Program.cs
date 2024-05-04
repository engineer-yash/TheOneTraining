
class EnumUseCase
{
    //Custom Datatype and Use
    enum Heroes { 
              SpiderMan
            , Hulk
            , IronMan
            , DrStrange };
    static void Main(string[] args)
    {
        string HeroNames;
        Heroes heroes;

        Console.WriteLine("Enter Your HeroName: ");
        HeroNames = Console.ReadLine();

        Console.WriteLine("0 for SpiderMan, 1 for Hulk, 2 for IronMan, 3 for DrStrange");
        int index = int.Parse(Console.ReadLine());

        heroes = (Heroes)index;

        Console.WriteLine($"My name is {HeroNames} and I am {heroes}");

        //int Names = (int)Heroes.IronMan;
        //Console.WriteLine(Names); //11
    }
       
}