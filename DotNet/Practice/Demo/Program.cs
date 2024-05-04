using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo
{
    internal class Program
    {
        static int value;
        public void Method1()
        {
            
            Console.WriteLine(value);
        }
        //public Program()
        //{
        //    if(value == 0)
        //    {
        //        value = 10;
        //    }
        //}
        public Program()
        {
            if (value == 0)
            {
                value = 6;
            }
        }
        static void Main(string[] args)
        {
            Program program = new Program();
            program.Method1();
            Console.ReadKey();
        }
    }
}
