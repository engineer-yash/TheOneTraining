/*2).You are tasked with designing a simple banking system. Implement a base class Account with the following properties and methods: (5 Marks)
Properties:
AccountNumber: An integer representing the account number.
Balance: A decimal representing the current balance.
Methods:
Deposit(decimal amount): Adds the specified amount to the account balance.
Withdraw(decimal amount): Subtracts the specified amount from the account balance.
Extend the Account class to create two derived classes: SavingsAccount andCheckingAccount.
SavingsAccount: Should include an additional property InterestRate and a method CalculateInterest()
to calculate and add interest to the account balance based on the interest rate.
CheckingAccount: Should include methods WriteCheck(decimal amount) to deduct the specified amount 
from the account balance and DepositCheck(decimal amount) to deposit the specified amount into the account.
Implement these classes and demonstrate their usage in a simple C# program.
*/
class Account
{
    public int AccountNumber { get; set; }
    public decimal Balance { get; set; }
    public void Deposit(decimal amount)
    {
        Balance += amount;
        Console.WriteLine($"Deposited {amount:C}, New Balance {Balance:C}");
    }
    public void Withdraw(decimal amount)
    {
        if (Balance >= amount)
        {
            Balance -= amount;
            Console.WriteLine($"Withdrawn {amount:C}. New balance: {Balance:C}");
        }
        else
        {
            Console.WriteLine($"You don't have Enough Money in Your account to Withdraw {amount:C} Amount.");
        }
    }
}
class SavingsAccount : Account
{
    public decimal InterestedRate { get; set; }
    public void CalculateInterest()
    {
        decimal interest = (Balance * InterestedRate) / 100;
        Console.WriteLine($"Interest of {interest:C} added.");
        Deposit(interest); //Adding Interest amount to main BALANCE
    }
}
class CheckingAccount : Account
{
    public void WriteCheck(decimal amount)
    {
        if (Balance >= amount)
        {
            Balance -= amount;
        }
        else
        {
            Console.WriteLine("There is no Money!");
        }
    }
    public void DepositCheck(decimal amount)
    {
        Balance += amount;
    }
}
class Program
{
    static void Main()
    {
        SavingsAccount savingAccount = new SavingsAccount { AccountNumber = 12345, Balance = 1000, InterestedRate = 1.5m };
        Console.WriteLine($"Account Number: {savingAccount.AccountNumber} and It's Initial Balance is: {savingAccount.Balance}");
        savingAccount.Deposit(500);
        savingAccount.CalculateInterest();
        savingAccount.Withdraw(1500);
        Console.WriteLine($"Savings Account Balance: {savingAccount.Balance}");

        CheckingAccount checkingAccount = new CheckingAccount { AccountNumber = 54321, Balance = 2000 };
        checkingAccount.WriteCheck(500);//2000 - 500 = 1500
        checkingAccount.DepositCheck(1000);//1500 + 1000 = 2500
        Console.WriteLine($"Checking Account Balance: {checkingAccount.Balance}");//2500
    }
}