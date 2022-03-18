
function lagBillet(){
    document.getElementById("fornavnVarsel").innerHTML ="";
    document.getElementById("etternavnVarsel").innerHTML ="";
    document.getElementById("teleNrVarsel").innerHTML ="";
    document.getElementById("epostVarsel").innerHTML ="";
    document.getElementById("antalVarsel").innerHTML ="";

    const film = $("#filmValg").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonNr = $("#teleNr").val();
    const epost = $("#epost").val();
    const antall = $("#antall").val();

    if (antall == ""){
        document.getElementById("antalVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }

if (fornavn == ""){
 document.getElementById("fornavnVarsel").innerHTML = "må skrive noe inn i fornavnet"
    return false;
}
    if (etternavn == ""){
        document.getElementById("etternavnVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }
    if (telefonNr == ""){
        document.getElementById("teleNrVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }
    if (epost == ""){
        document.getElementById("epostVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }

    const billett = {
        filmValg: film,
        antallVerdi: antall,
        fornavnVerdi: fornavn,
        etternavnVerdi: etternavn,
        teleNrVerdi: telefonNr,
        epostVerdi: epost
    }
    $.post("/lagre", billett, function (){
        hentAlle();
    });

      $("#filmValg").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#teleNr").val("");

}
function hentAlle(){
    $.get( "/hentAlle", function (data) {
        formaterData(data);
    });
};

 function formaterData(kunder){
     let ut = "<table class="table">" +
         "<tr>" +
         "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>TeleNr</th>" +
         "<tr/>";
     for (const billett of billetter){
     ut+="<tr><td>" + billett.filmValg + "</td><td>" + billett.antallVerdi + "</td><td>" + billett.fornavnVerdi +
     "</td><td>" + billett.etternavnVerdi + "</td><td>" + billett.epostVerdi + "</td><td>" + billett.teleNrVerdi +
         "<(" +
         "</td></td>"}
     $("#billetListe").html(ut);
 }

function slettBillet(){
     $.get( "/slett")
    document.getElementById("billetListe").innerHTML = "";
}