//1). Create a generic class called Pair that can hold two values of any data type. Implement methods to set and get the values. (3 Marks)
public class MainMethodCall
    {
        static void Main(string[] args)
        {
            Pair<string, float> pair = new Pair<string, float>();

            pair.setFirst("Hello");
            pair.setSecond(123.45F);

            string firstValue = pair.getFirst();
            float secondValue = pair.getSecond();

            Console.WriteLine(firstValue);
            Console.WriteLine(secondValue);
        }
    }

