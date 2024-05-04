

namespace Task8
{
    public static class ExtensionMethod
    {
        public static bool IsPrimeNumber(this int number)
        {
            if (number <= 1)
            {
                return false;
            }
            for (int i = 2; i <= number / 2; i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
