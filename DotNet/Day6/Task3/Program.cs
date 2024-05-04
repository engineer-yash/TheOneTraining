//3). Create a generic class called Stack that implements a stack data structure using generics. Include methods to push, pop, and peek elements.(3 Marks)
using System.Collections.Generic;

class StacKOperations
{
    static void Main(string[] args)
    {
        Stack<int> stackOfItems = new Stack<int>();
        stackOfItems.Push(432);
        stackOfItems.Push(65);
        stackOfItems.Push(909);
        stackOfItems.Push(21);

        for (int i = 0; i < 4; i++)
        {
            Console.WriteLine(stackOfItems.Peek());
            stackOfItems.Pop();
        }

    }
}