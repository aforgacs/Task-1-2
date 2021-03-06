package hu.ifsz.Task12.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.ifsz.Task12.domain.Contract;


import java.math.BigDecimal;
import java.util.Date;

public class ContractListItem {

    private Long id;
    private String megnevezes;
    private float ertek;
    @JsonFormat(pattern = "yyyy.MM.dd")
    private Date erv_kezdete;
    @JsonFormat(pattern = "yyyy.MM.dd")
    private Date erv_vege;
    private String aktiv;

    public ContractListItem(Contract contract) {
        this.id = contract.getId();
        this.megnevezes = contract.getMegnevezes();
       /* String ertekString = String.format("%.2f", ertek);
        float ertekMod = Float.parseFloat(ertekString);*/
        this.ertek = contract.getErtek();
        this.erv_kezdete = contract.getErv_kezdete();
        this.erv_vege = contract.getErv_vege();
        this.aktiv = contract.getAktiv();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
