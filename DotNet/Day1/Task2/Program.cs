namespace Day1_Task2
{
    class GroupOfTasks
    {
        //(1) Print Hello and your name in a separate line
        void PrintingHelloWorld()
        {
            string userName;
            userName = "Yash Gohel";
            Console.WriteLine("Hello\n" + userName);

        }
        //(2) Print the Addition, Subtraction, Division and Multiplication of 5 numbers
        void ArithmeticOperations(float a, float b, float c, float d, float e)
        {
            //Operations
            float addition = a + b + c + d + e;
            float subtraction = a - b - c - d - e;
            float division = a / b / c / d / e;
            float multiplication = a * b * c * d * e;

            //Printing
            Console.WriteLine("Addition " + addition);
            Console.WriteLine("Subtraction " + subtraction);
            Console.WriteLine("Division: " + division);
            Console.WriteLine("Multiplication: " + multiplication);
        }
        //(3) Print on screen the output of adding, subtracting, multiplying and dividing of two numbers which will be entered by the user
        void InputArithOps()
        {
            //Defining variables
            float inputOne, inputTwo = 0;
            bool isValid = false;
            do
            {
                Console.WriteLine("Enter Number 1");
                if (!float.TryParse(Console.ReadLine(), out inputOne))
                {
                    Console.WriteLine("Invalid Input1");
                }
                else
                {
                    Console.WriteLine("Enter Number 2");
                    if (!float.TryParse(Console.ReadLine(), out inputTwo))
                    {
                        Console.WriteLine("Invalid Input2");
                        Console.WriteLine("--------Start Again---------");
                    }
                    else
                    {
                        isValid = true;
                    }
                }
            } while (!isValid);
            //Operations
            float addition = inputOne + inputTwo;
            float subtraction = inputOne - inputTwo;
            float division = inputOne / inputTwo;
            float multiplication = inputOne * inputTwo;

            //Printing
            Console.WriteLine("--------Output---------");
            Console.WriteLine("Addition: " + addition);
            Console.WriteLine("Subtraction: " + subtraction);
            Console.WriteLine("Division: " + division.ToString("F"));
            Console.WriteLine("Multiplication: " + multiplication);

        }
        //(4) Print the result of the specified operations
        public class InputOperationsResult
        {
            private static float inputOne, inputTwo;
            private static string? output;
            static void GetNumber1()
            {
                Console.WriteLine("Enter Number 1");
                if (!float.TryParse(Console.ReadLine(), out inputOne))
                {
                    Console.WriteLine("Invalid Input1");
                    GetNumber1();
                }
            }
            static void GetNumber2()
            {
                Console.WriteLine("Enter Number 2");
                if (!float.TryParse(Console.ReadLine(), out inputTwo))
                {
                    Console.WriteLine("Invalid Input2");
                    GetNumber2();
                }
            }
            static void ReadOperations()
            {

                Console.WriteLine("Enter operation: + , - , /, * : ");
                output = Console.ReadLine();
                //Printing by Switch Case
                switch (output)
                {
                    case "+":
                        Console.WriteLine("Addition: " + (inputOne + inputTwo));
                        break;
                    case "-":
                        Console.WriteLine("Subtraction: " + (inputOne - inputTwo));
                        break;
                    case "/":
                        Console.WriteLine("Division: " + (inputOne / inputTwo));
                        break;
                    case "*":
                        Console.WriteLine("Multiplication: " + (inputOne * inputTwo));
                        break;
                    default:
                        Console.WriteLine("Invalid operation");
                        ReadOperations();
                        break;
                }
            }
            public static void Operations()
            {
                GetNumber1();
                GetNumber2();
                ReadOperations();
            }
        }
        //(5) Swap two numbers(Custom Numbers)
        void SwapNumbersInput()
        {
            int inputOne, inputTwo = 0, tempVariable;
            bool isValid = false;
            do
            {
                Console.WriteLine("Enter First Number:");
                if (!int.TryParse(Console.ReadLine(), out inputOne))
                {
                    Console.WriteLine("Invalid input");
                }
                else
                {
                    Console.WriteLine("Enter Second Number:");
                    if (!int.TryParse(Console.ReadLine(), out inputTwo))
                    {
                        Console.WriteLine("Invalid input");
                        Console.WriteLine("--------Start Again---------");
                    }
                    else
                    {
                        isValid = true;
                    }
                }
            } while (!isValid);
            tempVariable = inputOne;
            inputOne = inputTwo;
            inputTwo = tempVariable;
            Console.WriteLine($"After swap\n-------------\nFirst Number is {inputOne}\nSecond Number is {inputTwo}");

        }
        //(6) Swap two numbers
        void SwapingDefault(int a, int b)
        {
            int c = a;
            a = b;
            b = c;
            Console.WriteLine($"{a} and {b}");
        }
        //(7) Takes a number as input and print its multiplication table
        void MultiplicationTableInput()
        {
            int a, b = 1;
            bool isValid = false;

            do
            {
                Console.WriteLine("Enter a Number For It's Table:");
                if (!int.TryParse(Console.ReadLine(), out a))
                {
                    Console.WriteLine("Invalid input");
                }
                else
                {
                    isValid = true;
                    Console.WriteLine($"Table of {a}\n--------------");
                }

            } while (!isValid);
            do
            {
                int c = a * b;
                Console.WriteLine($"{a} x {b} = {c}");
                b++;
            } while (b != 11);
        }
        //(8) Takes four numbers as input from user to calculate and print the average
        void AverageFourNumbers()
        {
            float a, b = 0, c = 0, d = 0, avg;
            bool validInput = false;

            do
            {
                Console.WriteLine("Enter First Number: ");
                if (!float.TryParse(Console.ReadLine(), out a))
                {
                    Console.WriteLine("Invalid Input of a");
                }
                else
                {
                    Console.WriteLine("Enter Second Number: ");
                    if (!float.TryParse(Console.ReadLine(), out b))
                    {
                        Console.WriteLine("Invalid Input of b");
                        Console.WriteLine("--------Start Again---------");
                    }
                    else
                    {

                        Console.WriteLine("Enter Third Number: ");
                        if (!float.TryParse(Console.ReadLine(), out c))
                        {
                            Console.WriteLine("Invalid Input of c");
                            Console.WriteLine("--------Start Again---------");
                        }
                        else
                        {
                            Console.WriteLine("Enter Fourth Number: ");
                            if (!float.TryParse(Console.ReadLine(), out d))
                            {
                                Console.WriteLine("Invalid Input of d");
                                Console.WriteLine("--------Start Again---------");
                            }
                            else
                            {
                                validInput = true;
                            }
                        }

                    }

                }
            } while (!validInput);
            avg = (a + b + c + d) / 4;
            Console.WriteLine("--------Output---------");
            Console.WriteLine($"Average of {a},{b},{c},{d} is: " + avg);
        }
        //(9) Takes three numbers(x,y,z) as input and print the output of (x+y).z and x.y + y.z
        void TwoLogic()
        {
            int x, y = 0, z = 0;
            bool validInput = false;
            do
            {
                Console.WriteLine("Enter x value: ");
                if (!int.TryParse(Console.ReadLine(), out x))
                {
                    Console.WriteLine("Invalid Input of x");
                }
                else
                {
                    Console.WriteLine("Enter y value: ");
                    if (!int.TryParse(Console.ReadLine(), out y))
                    {
                        Console.WriteLine("Invalid Input of y");
                        Console.WriteLine("--------Start Again---------");

                    }
                    else
                    {
                        Console.WriteLine("Enter z value: ");
                        if (!int.TryParse(Console.ReadLine(), out z))
                        {
                            Console.WriteLine("Invalid Input of z");
                            Console.WriteLine("--------Start Again---------");
                        }
                        else
                        {
                            validInput = true;
                        }
                    }
                }

            } while (!validInput);

            int result1 = (x + y) * z;
            int result2 = x * y + y * z;
            Console.WriteLine("---------Output--------");
            Console.WriteLine("(x+y).z = " + result1 + "\nx.y + y.z = " + result2);
            Console.Read();
        }
        /*(10) Take a number as input and display it four times in a row(separated by blank spaces), and then
              four times in the next row, with no separation.You should do it 5 times */
        void PrintingRows()
        {
            int inputValue;
            bool validInput = false;
            Console.WriteLine("Enter Input: ");
            do
            {
                if (!int.TryParse(Console.ReadLine(), out inputValue))
                {
                    Console.WriteLine("Invalid Input");

                }
                else
                {
                    validInput = true;
                }
            } while (!validInput);
            Console.WriteLine("------------");
            int row = 5;
            for (int i = 0; i <= row; i++)
            {
                for (int j = 0; j <= 4; j++)
                {
                    Console.Write(inputValue + " ");

                }
                Console.Write("\n");
                for (int j = 0; j <= 4; j++)
                {
                    Console.Write(inputValue);

                }
                Console.Write("\n");
            }
        }
        public static void Main(string[] args)
        {
            GroupOfTasks tasks = new GroupOfTasks();
            //tasks.PrintingHelloWorld();
            //tasks.ArithmeticOperations(5, 8, 7, 7, 6);
            //tasks.InputArithOps();
            //InputOperationsResult.Operations();
            //tasks.SwapNumbersInput();
            //tasks.SwapingDefault(5, 27);
            //tasks.MultiplicationTableInput();
            //tasks.AverageFourNumbers();
            //tasks.TwoLogic();
            //tasks.PrintingRows();
            Console.ReadKey();
        }

    }
}