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

public class AccessAccounts {
    public void access() throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException {
        Connection con = DB_Connection.getInitialConnection();
        Statement stmt = con.createStatement();
        stmt.executeQuery("INSERT INTO accounts(username , password)"
        +"VALUES(test_username,test_password)");
    }
}
