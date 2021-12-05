package hu.ifsz.Task12.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.ifsz.Task12.dto.CreateContractCommand;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Contract")
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String megnevezes;
    private float ertek;
    @JsonFormat(pattern = "yyyy.MM.dd")
    private Date erv_kezdete;
    @JsonFormat(pattern = "yyyy.MM.dd")
    private Date erv_vege;
    private String aktiv;


    public Contract(String megnevezes, float ertek, Date erv_kezdete, Date erv_vege, String aktiv) {
        this.megnevezes = megnevezes;
       // String ertekString = String.format("%.2f", ertek);
       // float ertekMod = Float.parseFloat(ertekString);
        this.ertek = ertek;
        this.erv_kezdete = erv_kezdete;
        this.erv_vege = erv_vege;
        this.aktiv = aktiv;
    }


    public Contract(CreateContractCommand createContractCommand) {
        this.megnevezes = createContractCommand.getMegnevezes();
        //String ertekString = String.format("%.2f", createContractCommand.getErtek());
        //float ertekMod = Float.parseFloat(ertekString);
        this.ertek = createContractCommand.getErtek();
        this.erv_kezdete = createContractCommand.getErv_kezdete();
        this.erv_vege = createContractCommand.getErv_vege();
        this.aktiv = createContractCommand.getAktiv();
    }

    public Contract() {

    }


    public Long getId() {
        return id;
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
// ----
    public void setAktiv(String aktiv) {
        if(aktiv == "I"){
            this.aktiv = aktiv;
        }

    }
}
