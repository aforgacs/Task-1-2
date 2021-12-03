package hu.ifsz.Task12.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ifsz.ifsz1.domain.Contract;

import java.util.Date;

public class CreateContractCommand {

    private String megnevezes;
    private float ertek;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date erv_kezdete;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date erv_vege;
    private String aktiv;




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
        String ertekString = String.format("%.2f", ertek);
        float ertekMod = Float.parseFloat(ertekString);
        this.ertek = ertekMod;
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