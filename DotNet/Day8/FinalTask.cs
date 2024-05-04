class StudentDetails
{
    public string? StudentName { get; set; }
    public int StudentRollNumber { get; set; }
    public int StundetStandard { get; set; }
    public char StudentDivision { get; set; }

    public int GetRollNumber()
    {
        int rollNumber;
        bool isValid = false;
        do
        {
            Console.Write("Enter Roll Number: ");
            if (!int.TryParse(Console.ReadLine(), out rollNumber))
            {
                Console.WriteLine("Please Enter a Number");
            }
            else if (rollNumber >= 100 || rollNumber <= 1)
            {
                Console.WriteLine("Number should between 1 to 100");
            }
            else
            {
                isValid = true;
            }
        } while (!isValid);
        return rollNumber;
    }

    public int GetStandard()
    {
        int standard;
        bool isValid = false;
        do
        {
            Console.Write("Enter Student's Standard");
            if (!int.TryParse(Console.ReadLine(), out standard))
            {
                Console.WriteLine("Please Enter a Number");
            }
            else if (standard >= 12 || standard <= 6)
            {
                Console.WriteLine("Standard should between 6 to 12");
            }
            else
            {
                isValid = true;
            }
        } while (!isValid);
        return standard;
    }

    public char GetDivision()
    {
        char division;
        bool isValid = false;
        do
        {
            Console.Write("Enter Student's Standard: ");
            if (!char.TryParse(Console.ReadLine(), out division))
            {
                Console.WriteLine("Enter Divsion like \'A\' or \'B\' or \'C\'");
            }
            else if (char.ToUpper(division) == 'A')
            {
                isValid = true;
            }
            else if (char.ToUpper(division) == 'B')
            {
                isValid = true;
            }
            else if (char.ToUpper(division) == 'C')
            {
                isValid = true;
            }
        } while (!isValid);
        return division;
    }
}

class StudentMarks : StudentDetails
{
    public int Maths { get; set; }
    public int SocialScience { get; set; }
    public int Science { get; set; }
    public int English { get; set; }
    public int Gujarati { get; set; }

    public int GetMarks(string subject)
    {
        int marks;
        bool isValid = false;
        do
        {
            Console.Write($"Enter Mark of {subject}: ");
            if (!int.TryParse(Console.ReadLine(), out marks))
            {
                Console.WriteLine("Please Enter a Number");
            }
            else if (marks >= 100 || marks <= 1)
            {
                Console.WriteLine("Marks should between 1 to 100");
            }
            else
            {
                isValid = true;
            }
        } while (!isValid);
        return marks;
    }
}
class MarkSheet : StudentMarks
{
    static void Main(string[] args)
    {
        MarkSheet markSheet = new MarkSheet();
        //Console.Write("Enter Your Name: ");
        //markSheet.StudentName = Console.ReadLine();
        //markSheet.StudentRollNumber = markSheet.GetRollNumber();
        //markSheet.StudentDivision = markSheet.GetDivision();
        //markSheet.Maths = markSheet.GetMarks("Maths");
        //markSheet.SocialScience = markSheet.GetMarks("SocialScience");
        //markSheet.Science = markSheet.GetMarks("Science");
        //markSheet.English = markSheet.GetMarks("English");
        //markSheet.Gujarati = markSheet.GetMarks("Gujarati");
        Console.WriteLine("=================================================================================================");
        Console.WriteLine("\t\t\t\t\tMarkSheet");
        Console.WriteLine("=================================================================================================");
        Console.WriteLine("Name: " + markSheet.StudentName);
        Console.WriteLine("Roll Number: " + markSheet.StudentRollNumber);
        Console.WriteLine("=================================================================================================");
        Console.WriteLine("Subject \t\t\t\t Out of Marks \t\t\t\t Totalmarks\n");
        Console.WriteLine($"Maths \t\t\t\t\t     100 \t\t\t\t     {markSheet.Maths}");
        Console.WriteLine($"SocialScience \t\t\t\t     100 \t\t\t\t     55");
        Console.WriteLine($"Science \t\t\t\t     100 \t\t\t\t     {markSheet.Science}");
        Console.WriteLine($"English \t\t\t\t     100 \t\t\t\t     {markSheet.English}");
        Console.WriteLine($"Gujarati \t\t\t\t     100 \t\t\t\t     {markSheet.Gujarati}");
    }
}