class TrafficLightsChange
{
    enum Lights { Red, Yellow, Green }
    static void Main(string[] args)
    {
        //Lights RedLight = Lights.Red;
        //Lights GreenLight = Lights.Green;
        //Lights YellowLight = Lights.Yellow;

        //int RedLight = (int) Lights.Red;
        //int GreenLight = (int) Lights.Green;
        //int YellowLight = (int) Lights.Yellow;

        //int index = int.Parse(Console.ReadLine());
        for(int i = 0; i <= 1000; i++)
        {
            foreach (var name in Enum.GetNames<Lights>())
            {
                if ((Lights.Red).ToString() == name)
                {
                    Console.WriteLine("Stop! Don't you dare to accelerate! The Light is -: " + Lights.Red);
                }
                if ((Lights.Yellow).ToString() == name)
                {
                    Console.WriteLine("Get Ready to Move! The Light is -: " + Lights.Yellow);
                }
                if ((Lights.Green).ToString() == name)
                {
                    Console.WriteLine("GO! GO! GO! The Light is -: " + Lights.Green);
                }
                Thread.Sleep(3000);
            }
        }
        
    }
}
