<!------------------------
    CONSEGNA ESERCIZIO
------------------------->
Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Numero push minimi: 7
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.



<!-------------------
    PSEUDO-CODICE
-------------------->
1.  Genera 5 numeri casuali univoci con una funzione creata e assegnali a "randomNumbers"
    (tra parentesi numero numeri da generare 'i')
    - `randomNumbers = generateRandomNumbers(5)`
2.  Visualizza "randomNumbers" in pagina
3.  Avvia un timer di 30 secondi
    - `startTimer(30 secondi)`
4.  Dopo 30 secondi, nascondi "randomNumbers"
5.  Richiedi di inserire i 5 numeri tramite prompt()
    - `userNumbers = []`
    - `FOR i da 0 a 4:`
        - `userNumbers[i] = prompt("Inserisci uno dei numeri che hai visto:")`
6.  Confronta "userNumbers" con "randomNumbers" per trovare i numeri corretti
    - `correctNumbers = []`
    - `FOR i da 0 a 4:`
        - `IF userNumbers[i] è in randomNumbers:`
            - `aggiungi userNumbers[i] a correctNumbers`
7.  Mostra il risultato
    - `alert("Hai indovinato " + correctNumbers.length + " numeri: " + correctNumbers)`