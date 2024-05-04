namespace Task7
{
    public static class ExtensionMethod
    {
        public static string ReverseString(this string stringToBeReversed)
        {

            char[] chars = stringToBeReversed.ToCharArray();
            Array.Reverse(chars);
            string newString = new(chars);
            return newString;
        }
    }
}
