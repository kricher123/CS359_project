import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class InitializeDatabase {
    public void Create() throws SQLException, ClassNotFoundException {
        Connection con = DB_Connection.getInitialConnection();
        Statement stmt=con.createStatement();
        stmt.execute("use hy359_2022");
    }

    public void TableCreation(Statement stmt) throws SQLException {
        String sql = "CREATE TABLE adminmessages "
                + "(message_id INTEGER not NULL AUTO_INCREMENT, "
                + "message VARCHAR(500) not NULL, "
                + "date DATE not null,"
                + "PRIMARY KEY ( message_id ))";
        stmt.execute(sql);
        sql = "CREATE TABLE booksinlibraries "
                + "(bookcopy_id INTEGER not NULL AUTO_INCREMENT, "
                + "isbn  VARCHAR(13) not null,"
                + "library_id INTEGER not null,"
                + "available VARCHAR(5) not null,"
                + "FOREIGN KEY (isbn) REFERENCES books(isbn), "
                + "FOREIGN KEY (library_id) REFERENCES librarians(library_id), "
                + "PRIMARY KEY ( bookcopy_id ))";
        stmt.execute(sql);
        sql = "CREATE TABLE books "
                + "(isbn VARCHAR(13) not NULL, "
                + "title VARCHAR(500) not null,"
                + "authors VARCHAR(500)  not null, "
                + "genre VARCHAR(500)  not null, "
                + "pages INTEGER not null , "
                + "publicationyear INTEGER not null , "
                + "url VARCHAR (500), "
                + "photo VARCHAR (500), "
                + "PRIMARY KEY ( isbn ))";
        stmt.execute(sql);
        sql = "CREATE TABLE borrowing "
                + "(borrowing_id INTEGER not NULL AUTO_INCREMENT, "
                + " bookcopy_id INTEGER not NULL, "
                + " user_id INTEGER not NULL, "
                + " fromdate DATE not NULL, "
                + " todate DATE not NULL, "
                + " status VARCHAR(15) not NULL, "
                + "FOREIGN KEY (user_id) REFERENCES students(user_id), "
                + "FOREIGN KEY (bookcopy_id) REFERENCES booksinlibraries(bookcopy_id), "
                + " PRIMARY KEY (borrowing_id))";
        stmt.execute(sql);
    }
}
