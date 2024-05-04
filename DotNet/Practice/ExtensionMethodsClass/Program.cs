using ExtensionMethodsClass;
class MainClass
{
    static void Main(string[] args)
    {
        int numbers = 51665464;
        int result = numbers.GetDigits();
        Console.WriteLine(result);
    }
}