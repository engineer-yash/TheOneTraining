//1). Write a program in C# Sharp to demonstrates structure initialization using both default and parameterized constructors. 

Console.WriteLine("Structure declares using default and parameterized constructors :");
Console.WriteLine("------------------------------------------------------");
StructConstructors defaultConstructors = new StructConstructors();
StructConstructors parameterisedConstructors = new StructConstructors(25, 25);

struct StructConstructors
{
    public int firstNumber { get; set; }
    public int secondNumber { get; set; }

    //Default Constructor
    public StructConstructors()
    {
        Console.WriteLine($"newStruct 1: m = {firstNumber}, n = {secondNumber}");
    }
    //Parameterized Constructor
    public StructConstructors(int numberOne, int numberTwo)
    {
        Console.WriteLine($"newStruct 2: m = {numberOne}, n = {numberTwo}");
    }
}