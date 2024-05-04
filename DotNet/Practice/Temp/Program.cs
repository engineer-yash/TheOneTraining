class Student
{
    public static string Name;
    public static int Age;
    private static decimal GPA;

    public void SetGPA(decimal gpa)
    {
        if(gpa >= 0.0m && gpa <= 4.0m)
        {
            GPA = gpa;
        }
        else
        {
            throw new Exception("Range should be 0.0 to 4.0");
        }
    }
    public decimal GetGPA()
    {
        return GPA;
    }
    public Student(string name, int age, decimal gpa)
    {
        Name = name;
        Age = age;
        SetGPA(gpa);
    }
}
class NewProgram
{
    static void Main(string[] args)
    {
        Student student = new Student("Yash", 21, 2.5m);
        Console.WriteLine("Initial GPA: "+ student.GetGPA());

        try
        {
            student.SetGPA(4.8m);
        }
        catch(Exception ex)
        {
            Console.WriteLine(ex.ToString());
        }
        student.SetGPA(3.0m);
        Console.WriteLine("Updated GPA: "+ student.GetGPA());
    }
}