/*3). Write a program of simple payroll system for a company. The company has two types of employees: full-time employees and part-time employees.
Both types of employees receive a base salary, but full-time employees also receive benefits such as health insurance. (5 Marks)
Design a base class Employee with properties like Name and BaseSalary, and a method CalculatePay() to calculate the total pay for an employee.
Create derived classes FullTimeEmployee and PartTimeEmployee that inherit from the Employee class.
Implement polymorphism by overriding the CalculatePay() method in each derived class to include additional
pay components specific to each employee type (e.g., benefits for full-time employees).
Demonstrate the use of polymorphism by creating instances of both full-time and part-time employees and calculating their total pay.
Write the necessary C# code to implement the described scenario,
including class definitions and a simple demonstration of creating instances of different employee types and calculating their pay. 
*/
class Employee
{
    public string Name { get; set; }
    public decimal BaseSalary { get; set; }
    public virtual decimal CalculatePay()
    {
        return BaseSalary;
    }
}
class FullTimeEmployee : Employee
{
    public decimal Benefits { get; set; }
    public override decimal CalculatePay()
    {
        return BaseSalary + Benefits;
    }
}
class PartTimeEmployee : Employee
{
    public override decimal CalculatePay()
    {
        return BaseSalary;
    }
}
class Program
{
    static void Main(string[] args)
    {
        FullTimeEmployee fullTimeEmployee = new FullTimeEmployee { Name = "Yash Gohel", BaseSalary = 25000, Benefits = 3500 };
        PartTimeEmployee partTimeEmployee = new PartTimeEmployee { Name = "Parth Kanzariya", BaseSalary = 7500};

        Console.WriteLine($"Total pay for {fullTimeEmployee.Name}: {fullTimeEmployee.CalculatePay()}");
        Console.WriteLine($"Total pay for {partTimeEmployee.Name}: {partTimeEmployee.CalculatePay()}");
    }
}