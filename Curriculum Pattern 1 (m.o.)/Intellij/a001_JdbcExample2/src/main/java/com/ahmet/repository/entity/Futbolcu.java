package com.ahmet.repository.entity;

public class Futbolcu {

    private Long id;
    private String isim;
    private String mevki;
    private int formaNo;
    private Long deger;
    private Long takimId;

    // CONSTRUCTOR 1:
    public Futbolcu(String isim, String mevki, int formaNo, Long takimId) {
        this.isim = isim;
        this.mevki = mevki;
        this.formaNo = formaNo;
        this.takimId = takimId;
    }

    // CONSTRUCTOR 2:
    public Futbolcu(String isim, String mevki, int formaNo, Long deger, Long takimId) {
        this.isim = isim;
        this.mevki = mevki;
        this.formaNo = formaNo;
        this.deger = deger;
        this.takimId = takimId;
    }

    // CONSTRUCTOR 3:
    public Futbolcu(Long id, String isim, String mevki, int formaNo, Long deger, Long takimId) {
        this.id = id;
        this.isim = isim;
        this.mevki = mevki;
        this.formaNo = formaNo;
        this.deger = deger;
        this.takimId = takimId;
    }

    // CONSTRUCTOR 4:
    public Futbolcu(String isim, String mevki, int formaNo) {
        this.isim = isim;
        this.mevki = mevki;
        this.formaNo = formaNo;
    }

    // GETTERS AND SETTERS:
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIsim() {
        return isim;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String getMevki() {
        return mevki;
    }

    public void setMevki(String mevki) {
        this.mevki = mevki;
    }

    public int getFormaNo() {
        return formaNo;
    }

    public void setFormaNo(int formaNo) {
        this.formaNo = formaNo;
    }

    public Long getDeger() {
        return deger;
    }

    public void setDeger(Long deger) {
        this.deger = deger;
    }

    public Long getTakimId() {
        return takimId;
    }

    public void setTakimId(Long takimId) {
        this.takimId = takimId;
    }

    @Override
    public String toString() {
        return "Futbolcu{" +
                "id=" + id +
                ", isim='" + isim + '\'' +
                ", mevki='" + mevki + '\'' +
                ", formaNo=" + formaNo +
                ", deger=" + deger +
                ", takimId=" + takimId +
                '}';
    }

}
