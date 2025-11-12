import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.*;
import java.sql.SQLException;
import java.util.stream.Collectors;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;



@WebServlet(name = "MyServlet", value = "/MyServlet")
public class MyServlet extends HttpServlet {
    String Temp="original";

/*    public void init() {
        System.out.println("Test");
        try {
            InitTables();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void InitTables() throws RuntimeException, ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DB_Connection.getConnection();
        Statement stmt = null;
        stmt = con.createStatement();
        String query = "CREATE TABLE students "
                + "(user_id INTEGER not NULL AUTO_INCREMENT, "
                + " username VARCHAR(30) not null unique,"
                + " email VARCHAR(200) not null unique, "
                + " password VARCHAR(32) not null,"
                + " firstname VARCHAR(30) not null,"
                + " lastname VARCHAR(30) not null,"
                + " birthdate DATE not null,"
                + " gender VARCHAR (7) not null,"
                + " country VARCHAR(30) not null,"
                + " city VARCHAR(50) not null,"
                + " address VARCHAR(50) not null,"
                + " student_type VARCHAR(50) not null,"
                + " student_id VARCHAR(14) not null unique,"
                + " student_id_from_date DATE not null,"
                + " student_id_to_date DATE not null,"
                + " university VARCHAR(50) not null,"
                + " department VARCHAR(50) not null,"
                + " lat DOUBLE,"
                + " lon DOUBLE,"
                + " telephone VARCHAR(14),"
                + " personalpage VARCHAR(200),"
                + " PRIMARY KEY ( user_id))";
        stmt.execute(query);
        stmt.close();
    }*/

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter WriteBack = response.getWriter();
        response.setStatus(200);
        WriteBack.write(Temp+" Test\n");
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        BufferedReader reader = request.getReader();
        System.out.println("Test\n");
        String requestData = request.getReader().lines().collect(Collectors.joining());
        System.out.println(requestData);
        Gson gson = new Gson();
        Account Account = gson.fromJson(requestData,Account.class);
        System.out.println(Account.name);
        PrintWriter WriteBack = response.getWriter();
        String Name=request.getParameter("name");
        WriteBack.write(Temp);
        response.setStatus(201);
        Connection con = null;
        try {
            con = DB_Connection.getInitialConnection();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
        Statement stmt = null;
        try {
            stmt = con.createStatement();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        try {
            if(con.isValid(5)){
                System.out.println("Connected");
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        try {
            stmt.execute("use hy359_2022");
            stmt.execute("INSERT INTO accounts(username , password) "
                    +"VALUES('test_username','lala')");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        try {
            stmt.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        InitializeDatabase ID = new InitializeDatabase();
        try {
            ID.Create();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

}
