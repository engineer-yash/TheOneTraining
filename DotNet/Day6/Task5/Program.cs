/*5). Design a C# program that efficiently calculates the sum of numbers from 1 to 100 using a minimum of 10 threads.
  Each thread should be responsible for computing a portion of the total sum. Implement a solution where the main thread
  coordinates the partial sums calculated by each thread and combines them to obtain the final result. 
  Consider how you can divide the workload evenly among the threads and ensure synchronization to avoid race conditions. 
  Provide a structured approach to managing the threads and aggregating the partial sums to achieve the overall sum 
  accurately and efficiently.(6 Marks)
*/
class Program
{
    static int totalSum = 0; // Declare a static variable to store the final sum
    static readonly object lockObject = new object(); // Declare an object to be used for locking

    static void Main(string[] args)
    {
        int threadCount = 10; // Define the number of threads to be used
        int numbersToProcess = 100; // Define the total numbers to be processed
        int numbersPerThread = numbersToProcess / threadCount; // Calculate the number of numbers each thread will process

        Thread[] threads = new Thread[threadCount]; // Create an array to hold the threads

        // Create and start threads to calculate partial sums
        for (int i = 0; i < threadCount; i++)
        {
            int start = i * numbersPerThread + 1; // Calculate the start number for the current thread
            int end = (i + 1) * numbersPerThread; // Calculate the end number for the current thread
            threads[i] = new Thread(() => CalculatePartialSum(start, end)); // Create a new thread to calculate the partial sum
            threads[i].Start(); // Start the thread
        }

        // Wait for all threads to finish
        foreach (var thread in threads)
        {
            thread.Join();
        }
        Console.WriteLine("Total sum: " + totalSum); // Print the final total sum
    }

    // Method to calculate the partial sum for a range of numbers
    static void CalculatePartialSum(int start, int end)
    {
        int partialSum = 0; // Initialize a variable to store the partial sum
        for (int i = start; i <= end; i++)
        {
            partialSum += i; // Calculate the partial sum for the range of numbers
        }
        lock (lockObject) // Use a lock to ensure synchronization
        {
            totalSum += partialSum; // Update the total sum inside the locked section
        }
    }
}

