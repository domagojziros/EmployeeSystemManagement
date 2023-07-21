using Microsoft.EntityFrameworkCore;

namespace EMSys.models
{
    public class EMSysDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }

         public EMSysDbContext(DbContextOptions<EMSysDbContext> options) : base(options)
        {

        } 
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    } 

}
