struct BooksInformation
{
    public static string bookTitle { get; set; }
    public static string bookAuthor { get; set; }
}
class BooksOperations
{
    public static void GetBookTitle()
    {
        Console.Write("Enter Title Name: ");
        BooksInformation.bookTitle = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(BooksInformation.bookTitle))
        {
            Console.WriteLine("TitleName should not contain whitespaces and should not be empty!");
            GetBookTitle();
        }
        else if (BooksInformation.bookTitle.Length > 15)
        {
            Console.WriteLine("TitleName should be less than 15 letters");
            GetBookTitle();
        }
        else if (BooksInformation.bookTitle.Length < 3)
        {
            Console.WriteLine("TitleName should be more than 3 Letters");
            GetBookTitle();
        }
    }
    public static void GetBookAuthor()
    {
        Console.Write("Enter Author Name: ");
        BooksInformation.bookAuthor = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(BooksInformation.bookAuthor))
        {
            Console.WriteLine("AuthorName should not contain whitespaces and should not be empty!");
            GetBookAuthor();
        }
        else if (BooksInformation.bookAuthor.Length > 15)
        {
            Console.WriteLine("AuthorName should be less than 15 letters");
            GetBookAuthor();
        }
        else if (BooksInformation.bookAuthor.Length < 3)
        {
            Console.WriteLine("AuthorName shouldbe more than 3 Letters");
            GetBookAuthor();
        }
    }
    public static void Output()
    {
        GetBookTitle();
        GetBookAuthor();
    }
    static void Main(string[] args)
    {
        BooksOperations booksOperations = new BooksOperations();
        int bookNumber = 2;
        string str = "";
        for (int i = 1; i <= bookNumber; i++)
        {
            Console.WriteLine($"Book {i}");
            Output();
            str += $"{i}.Title = {BooksInformation.bookTitle.ToUpper()}, Author = {BooksInformation.bookAuthor.ToUpper()}\n";
        }

        Console.WriteLine("---------------------Output---------------------");
        Console.WriteLine(str);
    }
}

