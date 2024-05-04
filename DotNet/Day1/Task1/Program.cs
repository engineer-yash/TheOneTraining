//Task 1
namespace EmployeeManagement
{
    class Employee
    {
        public int employeeId;
        public string? employeeName;
        public string? employeeDepartment;
        public double employeeSalary;

        static void DisplayDetails(int employeeId, string employeeName, string employeeDepartment, double employeeSalary)
        {
            Console.WriteLine("Employee Details:\nID: " + employeeId + "\nName: " + employeeName + "\nDepartment: " + employeeDepartment + "\nSalary: $" + employeeSalary.ToString("F"));
            //ToString("F") is used to show Double values in points - 60000.00
            //ToString("C") is used to show Double values into dollars sign with (,)comma - $60,000
            Console.ReadKey(); //After pressing key console will be close. and debugging lines are removed
        }
        public static void Main(string[] args)
        {
            Employee emp = new()
            {
                employeeId = 101,
                employeeName = "John Doe",
                employeeDepartment = "Engineering",
                employeeSalary = 60000
            };
            DisplayDetails(emp.employeeId, emp.employeeName, emp.employeeDepartment, emp.employeeSalary);
        }
    }

}
