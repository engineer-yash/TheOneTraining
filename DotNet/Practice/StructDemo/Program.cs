class Cars
{
    public string Car = "Mustang";
}
class Vehicle : Cars
{
    public string Version = "2018";
}
class StructDemo
{
    static void Main(string[] args)
    {
        //StructureName Person;
        //Person.Age = 10;
        //Console.WriteLine(Person.Age);//10
        //Person.Method();
        StructureName number = new StructureName(); //Calling Constructor
        Console.WriteLine(StructureName.Age);

        Console.WriteLine(StructureName.Age);

        Vehicle vehicle = new Vehicle();
        Console.WriteLine(vehicle.Car + vehicle.Version);
    }
}
struct StructureName
{
   public static int Age = 15;

    public void Method()
    {
        Console.WriteLine("Hi");
    }

    //Can't create parameterless CONSTRUCTOR

    //This is Parameterized CONSTRUCTOR
    public StructureName()
    {
        Console.WriteLine("hello");
    }
}
//struct AnotherOne : StructureName
//{
//    public string Data = "I am yash";
//    public void MethodWroks()
//    {
//        Console.WriteLine("Hello" + Data);
//    }

//}
