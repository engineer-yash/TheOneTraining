/* 1). write a program with designing a class to represent a Student. The Student class should have the following properties: (5 Marks)
Name: A string representing the name of the student.
Age: An integer representing the age of the student.
GPA: A decimal representing the grade point average of the student.
Implement encapsulation for the GPA property to ensure that it cannot be accessed or modified directly from outside the class.
Instead, provide public methods GetGPA() and SetGPA() to retrieve and modify the GPA respectively.
The SetGPA() method should include validation to ensure that the GPA is within the range of 0.0 to 4.0.
Write the Student class with encapsulated GPA property along with the methods GetGPA() and SetGPA(), and demonstrate its usage in a simple C# program.
*/

class Student
{
    public string name;
    public int age;
    private decimal GPA;

    public decimal GetGPA()
    {
        return GPA;
    }
    public void SetGPA(decimal gpa)
    {
        if (gpa >= 0.0m && gpa <= 4.0m)
        {
            GPA = gpa;
        }
        else
        {
            throw new ArgumentException("GPA should be in Range between 0.0 and 4.0");
        }
    }
    public Student(string name, int age, decimal gpa)
    {
        this.name = name;
        this.age = age;
        SetGPA(gpa);
    }
}
class Program
{
    static void Main(string[] args)
    {
        Student student = new Student("Yash", 21, 3.5m);

        Console.WriteLine("Name: " + student.name);
        Console.WriteLine("Age: " + student.age);
        Console.WriteLine("Initial GPA: " + student.GetGPA());

        //Trying to set inValid GPA
        try
        {
            student.SetGPA(4.5m);
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine(ex.Message);
        }
        student.SetGPA(3.2m);
        Console.WriteLine("Updated GPA: " + student.GetGPA());
    }
}
