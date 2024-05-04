class StudentDetails
{
    public string? StudentName { get; set; }
    public int StudentRollNumber { get; set; }
    public int StundetStandard { get; set; }
    public char StudentDivision { get; set; }

    public string GetName()
    {
        Console.Write("Enter Student Name: ");
        string? name = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(name))
        {
            Console.WriteLine("Name should not be Empty");
            GetName();
        }
        return name;
    }
    public int GetRollNumber()
    {
        int rollNumber;
        bool isValid = false;
        do
        {
            Console.Write("Enter Student's Roll Number: ");
            if (!int.TryParse(Console.ReadLine(), out rollNumber))
            {
                Console.WriteLine("Please Enter a Number");
            }
            else if (rollNumber >= 101 || rollNumber <= 0)
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
            Console.Write("Enter Student's Standard: ");
            if (!int.TryParse(Console.ReadLine(), out standard))
            {
                Console.WriteLine("Please Enter a Number");
            }
            else if (standard >= 13 || standard <= 5)
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
            Console.Write("Enter Student's Division like (A, B, C): ");
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
    public int Total { get; set; }

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
            else if (marks >= 101 || marks <= 0)
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
       

        markSheet.StudentName = markSheet.GetName();
        markSheet.StudentRollNumber = markSheet.GetRollNumber();
        markSheet.StundetStandard = markSheet.GetStandard();
        markSheet.StudentDivision = markSheet.GetDivision();

        markSheet.Maths = markSheet.GetMarks("Maths");
        markSheet.SocialScience = markSheet.GetMarks("SocialScience");
        markSheet.Science = markSheet.GetMarks("Science");
        markSheet.English = markSheet.GetMarks("English");
        markSheet.Gujarati = markSheet.GetMarks("Gujarati");

        Console.WriteLine("=================================================================================================");
        Console.WriteLine("\t\t\t\t\t  MarkSheet");
        Console.WriteLine("=================================================================================================");

        Console.WriteLine("Name: " + markSheet.StudentName);
        Console.WriteLine("Roll Number: " + markSheet.StudentRollNumber);
        Console.WriteLine("Standard: " + markSheet.StundetStandard);
        Console.WriteLine("Division: " + markSheet.StudentDivision);

        Console.WriteLine("=================================================================================================");
        Console.WriteLine("Subject \t\t\t\t Out of Marks \t\t\t\t Totalmarks\n");
        Console.WriteLine($"Maths \t\t\t\t\t     100 \t\t\t\t    {markSheet.Maths}");
        Console.WriteLine($"SocialScience \t\t\t\t     100 \t\t\t            {markSheet.SocialScience}");
        Console.WriteLine($"Science \t\t\t\t     100 \t\t\t\t    {markSheet.Science}");
        Console.WriteLine($"English \t\t\t\t     100 \t\t\t\t    {markSheet.English}");
        Console.WriteLine($"Gujarati \t\t\t\t     100 \t\t\t\t    {markSheet.Gujarati}");
        Console.WriteLine("=================================================================================================");

        int totalSubjectMarks = markSheet.Maths + markSheet.Science + markSheet.SocialScience + markSheet.Gujarati + markSheet.English;
        Console.WriteLine($"Total \t\t\t\t\t     500 \t\t\t\t    {totalSubjectMarks}");

        decimal totalPercentage = totalSubjectMarks * 0.2m;
        Console.WriteLine($"Percentage \t\t\t\t    {totalPercentage + " %"}");

        string store;
        if (totalPercentage >= 95)
        {
            store = "A+";
        }
        else if (totalPercentage >= 90 && totalPercentage <= 94)
        {
            store = "A";
        }
        else if (totalPercentage >= 85 && totalPercentage <= 89)
        {
            store = "B+";
        }
        else if (totalPercentage >= 80 && totalPercentage <= 84)
        {
            store = "B";
        }
        else if (totalPercentage >= 75 && totalPercentage <= 79)
        {
            store = "C+";
        }
        else if (totalPercentage >= 70 && totalPercentage <= 74)
        {
            store = "C";
        }
        else if (totalPercentage >= 60 && totalPercentage <= 69)
        {
            store = "D";
        }
        else
        {
            store = "F";
        }
        bool isPass = false;
        if (markSheet.Maths < 33 || markSheet.SocialScience < 33 || markSheet.Science < 33 || markSheet.English < 33 || markSheet.Gujarati < 33)
        {
            store = "F";
        }
        else
        {
            isPass = true;
        }
        Console.WriteLine($"Grade \t\t\t\t\t      {store}");
        Console.WriteLine("=================================================================================================");
        if (isPass)
        {
            Console.WriteLine("Congrats! You Have Passed This Exam");
        }
        else
        {
            Console.WriteLine("Sorry! You Are Failed This Exam");
        }
    }
}