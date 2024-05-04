public class Pair<T1, T2>
{
    private T1? firstName;
    private T2? secondName;

    public void setFirst(T1 first)
    {
        firstName = first;
    }
    public void setSecond(T2 second)
    {
        secondName = second;
    }
    public T1 getFirst() => firstName; //new way for return

    public T2 getSecond() => secondName;
}