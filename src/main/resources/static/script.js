
let billeter  = [];
let i = 0;


function start () {
     document.getElementById("kjøp").onclick = lagBillet;
     document.getElementById("slett").onclick = slettBillet;

}
function lagBillet(){
    document.getElementById("fornavnVarsel").innerHTML ="";
    document.getElementById("etternavnVarsel").innerHTML ="";
    document.getElementById("teleNrVarsel").innerHTML ="";
    document.getElementById("epostVarsel").innerHTML ="";
    document.getElementById("antalVarsel").innerHTML ="";

    const film = $("filmValg").val();
    const fornavn = $("fornavnr").val();
    const etternavn = $("etternavn").val();
    const telefonNr = $("teleNr").val();
    const epost = $("epost").val();
    const antall = $("antall").val();

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

    const billet = {
        filmValg: film,
        antallVerdi: antall,
        fornavnVerdi: fornavn,
        etternavnVerdi: etternavn,
        teleNrVerdi: telefonNr,
        epostVerdi: epost
    };
    billeter.push(billet);
    document.getElementById("billetListe").innerHTML += billeter[i].filmValg +" "+ billeter[i].antallVerdi +" "
     + billeter[i].fornavnVerdi + " " + billeter[i].etternavnVerdi + " " + billeter[i].teleNrVerdi + " " +
        billeter[i].epostVerdi + "<br/>";
      i ++;



    document.getElementById("filmValg").value = null;
    document.getElementById("antall").value = null;
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("teleNr").value = "";
    document.getElementById("epost").value = "";


}
function slettBillet(){
    i = 0;
    billeter = [];
    document.getElementById("billetListe").innerHTML = "";
}