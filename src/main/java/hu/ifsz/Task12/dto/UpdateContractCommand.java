package hu.ifsz.Task12.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.ifsz.Task12.domain.Contract;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class UpdateContractCommand {


    private String megnevezes;
    private float ertek;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date erv_kezdete;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date erv_vege;
    private String aktiv;


    public UpdateContractCommand() {
    }

    public UpdateContractCommand(Contract contract) {



            this.megnevezes = contract.getMegnevezes();
            this.ertek = contract.getErtek();
            this.erv_kezdete = contract.getErv_kezdete();
            this.erv_vege = contract.getErv_vege();
            this.aktiv = contract.getAktiv();


    }

/*public Date formatDateNormally(Date myDate) {
    SimpleDateFormat sm = new SimpleDateFormat("yyyy-MM-dd");
    Date dateDate = null;
    String strDate = sm.format(myDate);
        try {

             dateDate = sm.parse(strDate);

        }catch (ParseException e) {
            System.out.println("ROSSZ A DATUM FORMAZO");
        }
   return dateDate;
}*/

    public String getMegnevezes() {
        return megnevezes;
    }

    public void setMegnevezes(String megnevezes) {
        this.megnevezes = megnevezes;
    }

    public float getErtek() {
        return ertek;
    }

    public void setErtek(float ertek) {
        /*String ertekString = String.format("%.2f", ertek);
        float ertekMod = Float.parseFloat(ertekString);
        this.ertek = ertekMod;*/

        this.ertek = ertek;

    }

    public Date getErv_kezdete() {
        return erv_kezdete;
    }

    public void setErv_kezdete(Date erv_kezdete) {
        this.erv_kezdete = erv_kezdete;
    }

    public Date getErv_vege() {
        return erv_vege;
    }

    public void setErv_vege(Date erv_vege) {
        this.erv_vege = erv_vege;
    }

    public String getAktiv() {
        return aktiv;
    }

    public void setAktiv(String aktiv) {
        this.aktiv = aktiv;
    }
}
