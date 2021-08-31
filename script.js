const nutzer =
[
    {
        id: 0,
        vorname: "Max",
        nachname: "Mustermann",
		alter: 25
    },
    {
        id: 1,
        vorname: "Lucas",
        nachname: "Müller",
		alter: 38
    },
    {
        id: 2,
        vorname: "Laura",
        nachname: "Musterfrau",
		alter: 30
    },
    {
        id: 3,
        vorname: "Emma",
        nachname: "Jäger",
		alter: 26
    },
    {
        id: 4,
        vorname: "Anton",
        nachname: "Schneider",
		alter: 40
    },
    {
        id: 5,
        vorname: "Martin",
        nachname: "Schmidt",
		alter: 38
    },
    {
        id: 6,
        vorname: "Jena",
        nachname: "Fischer",
		alter: 21
    },
    {
        id: 7,
        vorname: "Alex",
        nachname: "Weber",
		alter: 34
    },
    {
        id: 8,
        vorname: "Karl",
        nachname: "Meyer",
		alter: 51
    },
    {
        id: 9,
        vorname: "Marcus",
        nachname: "Wagner",
		alter: 29
    },
    {
        id: 10,
        vorname: "Helen",
        nachname: "Becker",
		alter: 22
    },
    {
        id: 11,
        vorname: "Lina",
        nachname: "Schulz",
		alter: 19
    },
    {
        id: 12,
        vorname: "Peter",
        nachname: "Hoffmann",
		alter: 42
    },
]


const true_bn_name = "admin";
const true_pass = "Admin123!";



const app = new Vue(
{
    el: "#app",
    data:
    {
        step: 1,
        titel: "Anmelden",
        bn_input: "",
        pass_input: "",
        bn_meldung: "",
        pass_meldung: ""

    },

    methods:
    {

        
       anmelden: function()
       {
            // inputs.value speichern
            benutzername = app.bn_input;
            passwort = app.pass_input;

            // check inputs 
            
            // 1. wenn inputs leer sind
            if(benutzername == "")
                app.bn_meldung = " Bitte Benutzername eingeben"; 

            if(passwort=="")
                    app.pass_meldung = " Bitte Passwort eingeben";
            
            
            // 2. wenn benutzername und passwort falsch eingegeben sind
                 if(benutzername != "" && benutzername != true_bn_name )
                {
                    app.bn_meldung = "Benutzername ist falsch";
                }                   
                     
               if(passwort!="" && passwort != true_pass)
                    {
                        app.pass_meldung = "Passwort ist falsch";
                    }

            // 3. wenn benutzername und passwort richtig eingegeben sind
                if(benutzername == true_bn_name && passwort == true_pass)
                {

                    app.titel= "Dashboard";
                    app.step++;
                    app.nutzerlist= nutzer;
                }


       }, 
       // rote meldung text leer machen
       meldung_weg : function()
        {
             app.bn_meldung = "";
             app.pass_meldung = "";
        }


    }
})
