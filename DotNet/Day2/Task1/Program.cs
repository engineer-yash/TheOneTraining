/*1). Write a program that displays all types of variable with values as an output in console application.
Demo Output: String: “Hello TOT!”*/

class DisplayVariableValues
{
    static void Main(string[] args)
    {
         int integerValue = 21;
         string stringValue = "\"Hello Yash Gohel\"";
         double doubleValue = 6.00D;
         bool boolValue = false;
         char characterValue = 'y';
         float floatValue = 1.15F;
         byte byteValue = 255;
        //var can be used in local scope only
        //Integer Literals
        var decimalLiteral = 42;//decimal: without any prefix
        var hexLiteral = 0x2A;//hexadecimal: with the 0x or 0X prefix
        var binaryLiteral = 0b_0010_1010;//binary: with the 0b or 0B prefix

        Console.WriteLine($"1). {integerValue.GetType()}: " + integerValue);
        Console.WriteLine($"2). {stringValue.GetType()}: " + stringValue);
        Console.WriteLine($"3). {doubleValue.GetType()}: " + doubleValue);
        Console.WriteLine($"4). {boolValue.GetType()}: " + boolValue);
        Console.WriteLine($"5). {characterValue.GetType()}: '" + characterValue + "'");
        Console.WriteLine($"6). {floatValue.GetType()}: " + floatValue);
        Console.WriteLine($"7). {byteValue.GetType()}: " + byteValue);

        Console.WriteLine("8). Decimal: " + decimalLiteral);
        Console.WriteLine("9). Hexadecimal: " + hexLiteral);
        Console.WriteLine("10). Binary: " + binaryLiteral);
        Console.ReadKey();
    }
}


