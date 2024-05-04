namespace Demo
{
    class Program
    {
        public static void Main(string[] args)
        {
            Customr customer1 = new Customr()
            {
               id = 101,
               name = "Yash",
               salary = 4000
            };
            Customr customer2 = new Customr()
            {
                id = 102,
                name = "Parth",
                salary = 4000
            };
            Customr customer3 = new Customr()
            {
                id = 103,
                name = "Dhruv",
                salary = 4000
            };
            Dictionary<int, Customr> dictionaryCustomers = new Dictionary<int, Customr>();
            dictionaryCustomers.Add(customer1.id, customer1);
            dictionaryCustomers.Add(customer2.id, customer2);
            dictionaryCustomers.Add(customer3.id, customer3);

            //find value of customers by key
            Customr cust102 = dictionaryCustomers[102];
            //Console.WriteLine($"ID = {cust102.id}, Name = {cust102.name}, Salary = {cust102.salary}");


            foreach(KeyValuePair<int,Customr> keyValuePair in dictionaryCustomers)
            {
                Console.WriteLine($"Key = {keyValuePair.Key}");
                Customr cust = keyValuePair.Value;
                Console.WriteLine($"ID = {cust.id} ,Name = {cust.name}, Salary = {cust.salary}");
                Console.WriteLine("-------------------------------------");
            }
        }
    }
    public class Customr
    {
        public int id { get; set; }
        public string name { get; set; }
        public int salary { get; set; }
    }
}

