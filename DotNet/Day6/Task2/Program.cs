//2). Write a generic method called Swap that swaps the values of two variables of any data type.(3 Marks)
class SwappingTwoValues
{
    public static void Swap<T>(T parameterOne, T parameterTwo)
    {
        Console.WriteLine($"Original Values\nParameter 1:{parameterOne}\nParameter 2:{parameterTwo}");
        T tempVariable = parameterOne;
        parameterOne = parameterTwo;
        parameterTwo = tempVariable;
        Console.WriteLine($"After Swapping\nParameter 1 ------> {parameterOne}\nParameter 2 ------> {parameterTwo}");
    }
    static void Main(string[] args)
    {
        Swap<int>(45, 85);
        Swap<string>("Chaddi","Gang");
    }
}