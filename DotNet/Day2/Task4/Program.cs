//4). Write a program that Implement the public , private and Internal access modifies. This program will display the name of the employee as an output.

namespace Checking
{
    public class Task4Checking
    {
        public static int variableThree = 23;
    }
    public class Task4
    {
        private static int variableOne = 21;
        internal static int variableTwo = 22;

        public static void Main(string[] args)
        {
            Console.WriteLine(variableOne);
            Console.WriteLine(variableTwo);
            Console.WriteLine(Task4Checking.variableThree);
            Console.ReadLine();
           // Second.Program2.Using();  //  We can not use it because internal works in same assembly
        }
    }
}

namespace CheckingAnotherTime
{
    class Temp
    {
        public void Temporary()
        {
            Console.WriteLine(Checking.Task4.variableTwo);
        }
    }
}
