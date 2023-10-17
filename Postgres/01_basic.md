# postgresQL : 

### Some Basic Fundamentals of Command line 
> \\? : for help   <br>
> -wq : returning back
> \l : lists of databases
> psql --help :
>

### Creating database 
- CREATE DATABASE database_name;

### how to connect database 
 -  **Connection options: <br>**
    -h, --host=HOSTNAME      database server host or socket directory (default: "local socket") <br>
    -p, --port=PORT          database server port (default: "5432") <br>
    -U, --username=USERNAME  database user name (default: "tanmaypatel") <br>
    -w, --no-password        never prompt for password <br>
    -W, --password           force password prompt (should happen automatically) <br>

- **So what is the code :** <br>


        psql -h localhost -p 5432 -U tanmaypatel database_name

- **what is other way :** <br>


       \c test 

### creating tables with POstgres

      CREATE TABLE table_name (
          Column name + data type + constraints if any
      )
  <br>
  
      CREATE TABLE person (
          id int,
          first_name VARCHAR (50),
          Lender VARCHAR (6) ,50)
          date_of_birth TIMESTAMP,
      )


      
