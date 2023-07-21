using EMSys.models;

namespace EMSys.Data
{
    public static class DbSeeder
    {
        public static void SeedData(EMSysDbContext dbContext)
        {
         Employee e1 = new()
            {
              //  Id = 1 ,
                Name = "Marko Markic",
                Email = "markom@gmail.com",
                Department = "HR",
                JobTitle = "HR Manager",
                Salary = 800
            };

            Employee e2 = new()
            {
              //  Id = 2 ,
                Name = "Ivana Ivic",
                Email = "ivanai@gmail.com",
                Department = "Prodaja",
                JobTitle = "Blagajnik",
                Salary = 850
            };

             Employee e3 = new()
            {
              //  Id = 3 ,
                Name = "Iva Maric",
                Email = "ivam@gmail.com",
                Department = "Računovodstvo",
                JobTitle = "Računovođa",
                Salary = 950
            };

            Employee e4 = new()
            {
              //  Id = 4 ,
                Name = "Luka Lukic",
                Email = "lukal@gmail.com",
                Department = "Dizajn",
                JobTitle = "Dizajn letaka",
                Salary = 830
            };

            Employee e5 = new Employee()
            {
              //  Id = 5,
                Name = "Ana Anić",
                Email = "anaa@gmail.com",
                Department = "IT",
                JobTitle = "Software Engineer",
                Salary = 1200
            };

            Employee e6 = new Employee()
            {
              //  Id = 6,
                Name = "Mario Marić",
                Email = "mariom@gmail.com",
                Department = "Sales",
                JobTitle = "Sales Representative",
                Salary = 900
            };

            Employee e7 = new Employee()
            {
               // Id = 7,
                Name = "Petra Perić",
                Email = "petrap@gmail.com",
                Department = "Finance",
                JobTitle = "Financial Analyst",
                Salary = 1050
            };

            Employee e8 = new Employee()
            {
               // Id = 8,
                Name = "Ivan Ivić",
                Email = "ivani@gmail.com",
                Department = "Marketing",
                JobTitle = "Marketing Specialist",
                Salary = 950
            };

            Employee e9 = new Employee()
            {
              //  Id = 9,
                Name = "Marta Maras",
                Email = "martam@gmail.com",
                Department = "HR",
                JobTitle = "Recruiter",
                Salary = 850
            };

            Employee e10 = new Employee()
            {
               // Id = 10,
                Name = "Tomislav Tomić",
                Email = "tomot@gmail.com",
                Department = "Operations",
                JobTitle = "Operations Manager",
                Salary = 1300
            };

            Employee e11 = new Employee()
            {
              //  Id = 11,
                Name = "Elena Elez",
                Email = "elenae@gmail.com",
                Department = "IT",
                JobTitle = "Frontend Developer",
                Salary = 1100
            };

            Employee e12 = new Employee()
            {
             //   Id = 12,
                Name = "Robert Robić",
                Email = "robertr@gmail.com",
                Department = "Sales",
                JobTitle = "Sales Manager",
                Salary = 1400
            };

            Employee e13 = new Employee()
            {
              //  Id = 13,
                Name = "Lea Lež",
                Email = "leal@gmail.com",
                Department = "Finance",
                JobTitle = "Accountant",
                Salary = 950
            };

            Employee e14 = new Employee()
            {
                //Id = 14,
                Name = "Antonio Antić",
                Email = "antonioa@gmail.com",
                Department = "Marketing",
                JobTitle = "Marketing Manager",
                Salary = 1600
            };

            Employee e15 = new Employee()
            {
              //  Id = 15,
                Name = "Helena Heljić",
                Email = "helenah@gmail.com",
                Department = "HR",
                JobTitle = "HR Specialist",
                Salary = 900
            };

            Employee e16 = new Employee()
            {
              //  Id = 16,
                Name = "Toni Tomaš",
                Email = "tonit@gmail.com",
                Department = "Operations",
                JobTitle = "Logistics Coordinator",
                Salary = 1000
            };

            Employee e17 = new Employee()
            {
              //  Id = 17,
                Name = "Mia Mijat",
                Email = "miam@gmail.com",
                Department = "IT",
                JobTitle = "Backend Developer",
                Salary = 1150
            };

            Employee e18 = new Employee()
            {
              //  Id = 18,
                Name = "Ante Ančić",
                Email = "antea@gmail.com",
                Department = "Sales",
                JobTitle = "Sales Representative",
                Salary = 900
            };

            Employee e19 = new Employee()
            {
               // Id = 19,
                Name = "Ivona Ivandić",
                Email = "ivona@gmail.com",
                Department = "Finance",
                JobTitle = "Financial Analyst",
                Salary = 1050
            };

            Employee e20 = new Employee()
            {
             //   Id = 20,
                Name = "Luka Luketin",
                Email = "lukal@gmail.com",
                Department = "Marketing",
                JobTitle = "Marketing Specialist",
                Salary = 950
            };


            dbContext.Employees.Add(e1);
            dbContext.Employees.Add(e2);
            dbContext.Employees.Add(e3);
            dbContext.Employees.Add(e4);
            dbContext.Employees.Add(e5);
            dbContext.Employees.Add(e6);
            dbContext.Employees.Add(e7);
            dbContext.Employees.Add(e8);
            dbContext.Employees.Add(e9);
            dbContext.Employees.Add(e10);
            dbContext.Employees.Add(e11);
            dbContext.Employees.Add(e12);
            dbContext.Employees.Add(e13);
            dbContext.Employees.Add(e14);
            dbContext.Employees.Add(e15);
            dbContext.Employees.Add(e16);
            dbContext.Employees.Add(e17);
            dbContext.Employees.Add(e18);
            dbContext.Employees.Add(e19);
            dbContext.Employees.Add(e20);

            dbContext.SaveChanges();
        }
    }
}
