using System;

class Program
{
    static void Main()
    {
        string[] validInputs = { "m", "p", "c" };
        string[] players = { "User1", "User2" };
        int currentPlayer = 0;
        int currentInputIndex = 0;

        Console.WriteLine("Welcome to the game!");

        while (currentInputIndex < validInputs.Length)
        {
            Console.Write($"{players[currentPlayer]}, enter your next input (m/p/c): ");
            string input = Console.ReadLine().ToLower();

            if (input == validInputs[currentInputIndex])
            {
                currentInputIndex++;
                currentPlayer = (currentPlayer + 1) % 2; // Switch players
            }
            else
            {
                Console.WriteLine($"{players[currentPlayer]} loses! Invalid input.");
                return;
            }
        }

        Console.WriteLine($"{players[(currentPlayer + 1) % 2]} loses! Game over.");
    }
}
