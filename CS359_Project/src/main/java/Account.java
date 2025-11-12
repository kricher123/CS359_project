
public class Account{
    String username;
    String email;
    String password;
    String name;
    String surname;
    String personalpage;
    String town;
    String address;
    String country;
    String gender;
    String date;
    String phoneNumber;

    String typeOfUser;
    String passId;
    String passStartDate;
    String passDueDate;
    String studies;
    String department;

    public Account(String u, String e, String p, String n, String s, String pp,
                   String t, String a, String c, String g, String d, String pn,
                   String tou, String pi, String psd, String pdd, String st, String dm) {
        this.username = u;
        this.email = e;
        this.password = p;
        this.name = n;
        this.surname = s;
        this.personalpage = pp;
        this.town = t;
        this.address = a;
        this.country = c;
        this.gender = g;
        this.date = d;
        this.phoneNumber = pn;
        this.typeOfUser=tou;
        this.passId=pi;
        this.passStartDate=psd;
        this.passDueDate=pdd;
        this.studies=st;
        this.department=dm;
    }
}