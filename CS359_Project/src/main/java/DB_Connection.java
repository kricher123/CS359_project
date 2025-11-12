import com.google.gson.JsonObject;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class DB_Connection {
    private static final String url = "jdbc:mysql://localhost";
    private static final String databaseName = "hy359_2022";
    private static final int port = 3306;
    private static final String username = "root";
    private static final String password = "";
    public static Connection getConnection() throws SQLException,
            ClassNotFoundException {
         Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection(url + ":" + port + "/" +
                databaseName, username, password);
    }
    public static Connection getInitialConnection() throws SQLException,
            ClassNotFoundException {
            Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection(url + ":" + port, username,
                password);
    }
}

