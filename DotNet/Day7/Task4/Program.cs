/*4). write a program to designing a simple library management system. Implement a base class LibraryItem to represent items available in the library,
such as books and DVDs. Each library item has common properties like Title, Author, and Year, and methods like CheckOut() and Return().  (5 Marks)
 
Design the LibraryItem class with appropriate properties and methods to represent common behaviors of library items.
Create derived classes Book and DVD that inherit from the LibraryItem class.
Implement abstraction by declaring the methods CheckOut() and Return() as abstract in the LibraryItem class,
as the implementation of these methods will vary for each type of library item.
Provide concrete implementations of the CheckOut() and Return() methods in the derived classes Book and DVD.
Demonstrate the use of abstraction by creating instances of both books and DVDs, and invoking the CheckOut() and Return() methods.
Write the necessary C# code to implement the described scenario, including class definitions and a simple demonstration of creating
instances of different library items and performing checkout and return operations.
*/

abstract class LibraryItem
{
    public string? Title { get; set; }
    public string? Author { get; set; }
    public int Year { get; set; }

    public abstract void CheckOut();
    public abstract void Return();
}

class Book : LibraryItem
{
    public override void CheckOut()
    {
        DateTime date = DateTime.Now;
        date = date.AddDays(-1);
        date = date.AddHours(-5);
        Console.WriteLine($"The book '{Title}' by {Author} has been checked out. At {date}");
    }
    public override void Return()
    {
        Console.WriteLine($"The book '{Title}' by {Author} has been returned. At {DateTime.Now}");
    }
}
class DVD : LibraryItem
{
    public override void CheckOut()
    {
        Console.WriteLine($"The DVD '{Title}' by {Author} has been checked out.");
    }
    public override void Return()
    {
        Console.WriteLine($"The DVD '{Title}' by {Author} has been returned.");
    }
}
class Program
{
    static void Main(string[] args)
    {
        Book book = new(){ Author = "Yash Gohel", Title = "Ferari ki Savari", Year = 2024 };
        DVD dVD = new(){ Author = "Dhruv Rathod", Title = "Love is waste of time", Year = 2022 };

        book.CheckOut();
        book.Return();

        dVD.CheckOut();
        dVD.Return();
    }
}