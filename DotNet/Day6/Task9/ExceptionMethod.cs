using System.Text;

namespace Task9
{
    public static class ExceptionMethod
    {
        public static string ToCSV<T>(this List<T> arrivingList)
        {
            StringBuilder stringBuilder = new StringBuilder();
            foreach (T item in arrivingList)
            {
                stringBuilder.Append(item);
                stringBuilder.Append(',');
            }
            if (stringBuilder.Length > 0)
            {
                stringBuilder.Length--;//removing last comma if it is not empty
            }
            return stringBuilder.ToString();
        }
    }
}
