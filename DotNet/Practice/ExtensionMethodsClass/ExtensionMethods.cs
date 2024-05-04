using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensionMethodsClass
{
    static class Class1
    {
        public static int GetDigits(this int num)
        {
            int count = 0;
            while(num != 0)
            {
                count++;
                num /= 10;
            }
            return count;
        }
    }
}
