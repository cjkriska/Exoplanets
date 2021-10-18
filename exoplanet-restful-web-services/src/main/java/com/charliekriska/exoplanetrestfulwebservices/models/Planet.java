package com.charliekriska.exoplanetrestfulwebservices.models;

public class Planet {

    private String pl_name;
    private String hostname;
    private double pl_bmasse;
    private double pl_rade;
    private double pl_eqt;
    private String discoverymethod;
    private int disc_year;
    private double sy_dist;
    private double pl_orbsmax;

    public Planet() {}
    public Planet(String pl_name, String hostname, double pl_bmasse, double pl_rade, double pl_eqt, String discoverymethod, int disc_year, double sy_dist, double pl_orbsmax) {
        this.pl_name = pl_name;
        this.hostname = hostname;
        this.pl_bmasse = pl_bmasse;
        this.pl_rade = pl_rade;
        this.pl_eqt = pl_eqt;
        this.discoverymethod = discoverymethod;
        this.disc_year = disc_year;
        this.sy_dist = sy_dist;
        this.pl_orbsmax = pl_orbsmax;
    }

    public String getPl_name() {
        return pl_name;
    }

    public void setPl_name(String pl_name) {
        this.pl_name = pl_name;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public double getPl_bmasse() {
        return pl_bmasse;
    }

    public void setPl_bmasse(double pl_bmasse) {
        this.pl_bmasse = pl_bmasse;
    }

    public double getPl_rade() {
        return pl_rade;
    }

    public void setPl_rade(double pl_rade) {
        this.pl_rade = pl_rade;
    }

    public double getPl_eqt() {
        return pl_eqt;
    }

    public void setPl_eqt(double pl_eqt) {
        this.pl_eqt = pl_eqt;
    }

    public String getDiscoverymethod() {
        return discoverymethod;
    }

    public void setDiscoverymethod(String discoverymethod) {
        this.discoverymethod = discoverymethod;
    }

    public int getDisc_year() {
        return disc_year;
    }

    public void setDisc_year(int disc_year) {
        this.disc_year = disc_year;
    }

    public double getSy_dist() {
        return sy_dist;
    }

    public void setSy_dist(double sy_dist) {
        this.sy_dist = sy_dist;
    }

    public double getPl_orbsmax() {
        return pl_orbsmax;
    }

    public void setPl_orbsmax(double pl_orbsmax) {
        this.pl_orbsmax = pl_orbsmax;
    }
}
