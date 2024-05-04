
namespace ConsoleApplication4
{
    abstract class M1
    {
        public int add(int a, int b)
        {
            return (a + b);
        }
    }
    class M2 : M1
    {
        public int mul(int a, int b)
        {
            return a * b;
        }
    }
    class Test
    {
        static void Main(string[] args)
        {
            M2 ob = new M2();
            int result = ob.add(10, 20);
            Console.WriteLine("the result is {0}", result);
            Console.ReadLine();
        }
    }
}