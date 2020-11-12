<template>
  <div id="guide">
    <google-codelab-analytics gaid="UA-49880327-14"></google-codelab-analytics>
    <google-codelab
      codelab-gaid=""
      id="ita-guide-1.0.9"
      title="Roomenta Web"
      environment="web"
      feedback-link="https://wescrum.sorint.it/projects/roomenta/issues/new"
    >
      <google-codelab-step label="Per Iniziare" duration="1">
        <google-codelab-about
          ><div class="codelab-title">
            <div class="token">Roomenta Web | GUIDA ALL'USO</div>
          </div>
          <div class="about-card">
            <h2 class="title">About this guide</h2>
            <div class="last-updated">
              <i class="material-icons">subject</i>Ultimo aggiornamento Nov 16, 2020
            </div>
            <div class="authors">
              <i class="material-icons">account_circle</i>Sircle Universe
            </div>
          </div></google-codelab-about
        >
        <p class="image-container">
          <img style="width: 601.70px" src="../guide/aa03106240ab1897.png" />
        </p>
        <p>
          Roomenta è una web app pensata e sviluppata per facilitare la gestione
          dell&#39;accesso agli spazi lavorativi di un&#39;azienda, ma può
          essere facilmente adattata a qualunque altro scenario.
        </p>
        <h2 is-upgraded><strong>Raggiungi Roomenta </strong></h2>
        <p>
          Per utilizzare Roomenta è necessario recarsi al seguente link:
          <a href="https://roomenta.sorint.it/" target="_blank">Roomenta</a>.
          L&#39;accesso avviene tramite il classico login Sorint per
          l&#39;utilizzo di tutte le altre applicazioni.
        </p>
        <p>La schermata principale si presenta così:</p>
        <p class="image-container">
          <img style="width: 601.70px" src="../guide/fe18f960b1710adb.png" />
        </p>
        <h2 is-upgraded>
          <strong>Elementi che costituiscono l&#39;interfaccia utente:</strong>
        </h2>
        <ul>
          <li><strong>Top Bar</strong></li>
          <li>Prima Colonna:<strong> Offices</strong></li>
          <li>Seconda Colonna:<strong> Calendar</strong></li>
          <li>Terza Colonna:<strong> Schedules</strong></li>
          <li>Quarta Colonna:<strong> My Reservations</strong></li>
        </ul>
      </google-codelab-step>

      <google-codelab-step label="Top Bar" duration="1">
        <p class="image-container">
          <img style="width: 601.70px" src="../guide/bdffb87742f82f94.png" />
        </p>
        <h2 is-upgraded>Cambio Tema</h2>
        <p>
          All&#39;estrema sinistra della Top Bar è presente uno switch button
          che consente di cambiare il tema dell&#39;applicazione da scuro a
          chiaro.
        </p>
        <p class="image-container">
          <img style="width: 242.50px" src="../guide/c354d9530d722e66.png" />
        </p>
        <h3 is-upgraded>Dark Theme</h3>
        <p class="image-container">
          <img style="width: 566.93px" src="../guide/fffc38ffd93e62c3.png" />
        </p>
        <h3 is-upgraded>Light Theme</h3>
        <p class="image-container">
          <img style="width: 566.93px" src="../guide/fe18f960b1710adb.png" />
        </p>
        <h2 is-upgraded>Info</h2>
        <p>
          Accanto allo switch button è presente un bottone che, una volta
          cliccato, apre un pop-up.
        </p>
        <p class="image-container">
          <img style="width: 340.16px" src="../guide/3a28e0f8147f9d0e.png" />
        </p>
        <p>
          Il pop-up mostra importanti informazioni riguardo la possibilità di
          accedere a:
        </p>
        <ul>
          <li>
            <strong>Guida di Roomenta: </strong>proprio la guida che stai
            leggendo ora.
          </li>
          <li>
            <strong>Emergency Taskforce: </strong>aprendo questo link è
            possibile ricevere assistenza riguardo l&#39;utilizzo
            dell&#39;applicazione (non bug tecnico). Viene create una mail vuota
            con mittente <em>Emergency Taskforce.</em>
          </li>
          <li>
            <strong>Give Us Your Feedback</strong>: reindirizza direttamente a
            WeScrum, in cui è possibile creare un carta per segnalare agli
            sviluppatori eventuali bug o richieste di modifica.
          </li>
        </ul>
        <aside class="warning">
          <p>
            <strong>Caution: </strong><em>Bug tecnico </em>e
            <em>assistenza</em> riguardano questioni differenti.
          </p>
          <p>
            Esempio #1. Ho bisogno di assistenza riguardo la prenotazione di
            un&#39;aula, allora scrivi una mail a
            <strong>Emergency Taskforce</strong>.
          </p>
          <p>
            Esempio #2. Un bottone di conferma ha il testo disallineato e non
            sembra confermare alcuna azione: premere
            <strong>Give Us Your Feedback!</strong>
          </p>
        </aside>
        <h2 is-upgraded>Nome e Versioni</h2>
        <p>
          Al centro è possibile visualizzare il nome dell&#39;applicazione, la
          versione e se è attualmente in beta oppure no.
        </p>
        <p class="image-container">
          <img style="width: 566.93px" src="../guide/8eabeadf07cc59a9.png" />
        </p>
        <h2 is-upgraded>Nome Utente e Logout</h2>
        <p>
          Nella parte destra è possibile vedere il proprio nome utente e il
          pulsante logout con cui si esce dall&#39;applicazione tornando al
          login.
        </p>
        <p class="image-container">
          <img style="width: 566.93px" src="../guide/b0ff90c01a9eee6e.png" />
        </p>
      </google-codelab-step>

      <google-codelab-step label="Prima Colonna: Offices" duration="1">
        <p>
          Nella prima colonna a sinistra è possibile leggere informazioni
          riguardo la sede e l&#39;aula attualmente selezionata.
        </p>
        <p class="image-container">
          <img style="width: 245.67px" src="../guide/a2d2a1723820cc87.png" />
        </p>
        <h2 is-upgraded>Selezione Sede e Aula</h2>
        <p>
          Tramite le schede relative alle sedi è possibile espandere
          l&#39;elenco delle relative stanze. Selezionando un&#39;aula si
          seleziona automaticamente la sede di appartenenza. Per ogni aula si
          visualizzano:
        </p>
        <ul>
          <li>
            <strong>Descrizione</strong>: Solitamente il piano in cui è situata
            all&#39;interno della sede.
          </li>
          <li>
            <strong>Capacità</strong>: Numero di persone totale che l&#39;aula
            può contenere.
          </li>
          <li>
            <strong>Icona monitor</strong>: Indica la presenza o meno di un
            monitor all&#39;interno dell&#39;aula in base all&#39;attivazione
            dell&#39;icona stessa.
          </li>
          <li>
            <strong>Icona proiettore</strong>: Indica la presenza o meno di un
            proiettore all&#39;interno dell&#39;aula in base all&#39;attivazione
            dell&#39;icona stessa.
          </li>
        </ul>
        <p>
          Alla selezione dell&#39;aula viene aggiornata la parte superiore della
          colonna con le informazioni relative alla scelta appena effettuata.
        </p>
        <h2 is-upgraded>Preferiti</h2>
        <p>
          Accanto al nome di ogni aula è presente un&#39;icona a forma di cuore
          (🤍) tramite la quale è possibile aggiungere l&#39;aula selezionata
          alla propria <strong>lista dei preferiti</strong>. Quest&#39;ultima
          viene visualizzata come una scheda aggiuntiva espandibile appena sopra
          le schede relative alle sedi.
        </p>
        <p>
          Si può rimuovere un&#39;aula dalla lista dei preferiti premendo il
          tasto a forma di croce presente a sinistra del nome dell&#39;aula.
        </p>
        <p class="image-container">
          <img style="width: 302.36px" src="../guide/db70e895c9c2edc5.png" />
        </p>
        <p>
          A destra del nome di ogni aula preferita viene mostrata la sigla della
          sede in cui è situata, per evitare che vengano creati fraintendimenti
          tra stanze omonime.
        </p>
      </google-codelab-step>

      <google-codelab-step label="Seconda Colonna: Calendar" duration="1">
        <p>
          In primo piano, nella seconda colonna, sono presenti giorno e data
          attuali.
        </p>
        <p class="image-container">
          <img style="width: 207.87px" src="../guide/3620dc8ebcf07a63.png" />
        </p>
        <h2 is-upgraded>Selezione Giorno</h2>
        <p>
          In questa sezione è presente un elenco di date. Selezionando una
          specifica data, è possibile visualizzarne i dettagli. Il formato della
          data è gg/mm/aaaa accompagnato dal nome del giorno della settimana.
        </p>
        <p>
          Le settimane sono separate le une dalle altre per mezzo una linea
          orizzontale.Sabato e domenica sono leggermente oscurate per dare
          maggior rilevanza ai giorni lavorativi.
        </p>
        <p>
          Alla selezione della data viene aggiornata la parte superiore della
          colonna con le informazioni relative alla scelta compiuta.
        </p>
      </google-codelab-step>

      <google-codelab-step label="Terza Colonna: Schedule" duration="1">
        <p>
          Nella terza colonna si leggono informazioni riguardanti i limiti della
          prenotazione dell&#39;aula attualmente selezionata. In particolare il
          <strong>tempo minimo</strong> e il <strong>tempo massimo</strong> di
          durata della prenotazione.
        </p>
        <p class="image-container">
          <img style="width: 226.77px" src="../guide/7dec2cfaf52afec5.png" />
        </p>
        <h2 is-upgraded>Selezione Slot Prenotazione</h2>
        <p>
          Nella parte centrale della colonna è presente una tabella con tre
          colonne e sette righe le cui celle contengono l&#39;orario di inizio e
          di fine dello <strong>slot</strong>.
        </p>
        <p>
          Gli slot con un colore scuro sono <strong>disabilitati </strong>ed è
          impossibile selezionarli. Questi slot vengono disabilitati quando si
          riferiscono a slot temporali non prenotabili o ad un periodo di tempo
          già passato.
        </p>
        <p>
          Premendo gli slot <strong>abilitati </strong>è possibile selezionarli.
          Si nota la selezione grazie ad un cambio di colore e spessore di
          bordo. Per poter completare in modo corretto una prenotazione è
          necessario <strong>selezionare </strong>gli slot in modo valido.
        </p>
        <aside class="special">
          <p>
            <strong>Nota: </strong>La <em>validità </em>consiste nella selezione
            di slot contigui, ovvero non selezionando uno slot tra due già
            selezionati. La <em>validità </em>è data anche dal rispetto dei
            vincoli presenti in cima alla colonna (già indicati in precedenza).
          </p>
        </aside>
        <aside class="warning">
          <p>
            <strong>Caution: </strong>In caso di violazione di validità della
            selezione apparirà un messaggio informativo in basso a sinistra con
            le informazioni necessari alla correzione. Fino a quando la
            selezione non risulta valida, non sarà possibile confermare la
            prenotazione.
          </p>
        </aside>
        <h2 is-upgraded>Consultazione Tabella</h2>
        <p>
          Dalla tabella è inoltre possibile visualizzare le prenotazioni. Le
          prenotazioni di altri utenti differiscono dalle proprie per via di una
          diversa colorazione.
        </p>
        <p>
          Passando il mouse sopra una prenotazione vengono evidenziati gli slot
          che questa comprende.
        </p>
        <p>
          Premendo su una prenotazione viene aperto un dialog contenente i
          <strong>dettagli </strong>della stessa. I dettagli consistono in
        </p>
        <ul>
          <li>
            <strong>Descrizione</strong>: Breve descrizione inserita
            dall&#39;utente al momento della prenotazione.
          </li>
          <li>
            <strong>Elenco degli invitati</strong>: Elenco di email relative
            agli invitati alla prenotazione.
          </li>
          <li>
            <strong>Elenco dei partecipanti</strong>: Elenco di email relative
            agli invitati che hanno confermato la loro presenza tramite mail di
            conferma.
          </li>
        </ul>
        <p class="image-container">
          <img style="width: 226.77px" src="../guide/c70438f0683995ed.png" />
        </p>
        <aside class="special">
          <p>
            <strong>Nota: </strong>Quando una prenotazione presente nella
            tabella è di colore verde significa che è confermata, ovvero ha
            raggiunto il numero minimo di partecipanti necessari per non essere
            annullata.
          </p>
          <p class="image-container">
            <img style="width: 212.79px" src="../guide/7b414dd4704c2e79.png" />
          </p>
        </aside>
        <h2 is-upgraded>Switch orario turni</h2>
        <p>
          E&#39; stato introdotto e reso più visibile uno switch utile a chi
          lavora su turni (es. service desk). Si passa quindi alla
          visualizzazione dei turni prenotabili sulle tipiche fasce orarie dei
          turni da otto ore. La logica rimane uguale a quella precedente: si
          possono, ovviamente, prenotare solo slot futuri e non già prenotati.
        </p>
        <aside class="special">
          <p>
            <strong>Nota:</strong> Questa modalità è visibile solo per
            prenotazioni associate a stanze di durata massima maggiore o uguale
            alle 8h. Per le altre stanze non appare. (Se vuoi provare, seleziona
            la stanza <em>Sorint Hall</em>)
          </p>
        </aside>
        <p class="image-container">
          <img style="width: 566.93px" src="../guide/36f7e761931daa9e.png" />
        </p>
        <h2 is-upgraded>Sezione Inviti</h2>
        <p>
          Al di sotto della tabella degli slot è presente la sezione inviti. Qui
          è possibile visualizzare il <strong>numero minimo</strong> di inviti
          necessari per completare la prenotazione e il numero di inviti
          <strong>massimo </strong>per l&#39;aula selezionata.
        </p>
        <p class="image-container">
          <img style="width: 359.06px" src="../guide/1a031617f9b830cc.png" />
        </p>
        <p>
          Si può aggiungere una persona da invitare, inserendo il
          <strong>nome </strong>e un indirizzo <strong>email valido</strong> nei
          campi appositi (riquadro arancione), e premendo il tasto &#34;✚&#34;
          presente nella parte destra del riquadro. Una volta completato
          correttamente l&#39;invito, il nome e la mail verranno visualizzati in
          un elenco sottostante.
        </p>
        <p>
          Da questo elenco è possibile rimuovere l&#39;invito tramite il
          pulsante 🗑 presente sul lato destro. E&#39; inoltre possibile
          cancellare dalla lista degli invitatì, il creatore della prenotazione:
          creo prenotazioni a nome di altri colleghi.
        </p>
        <p class="image-container">
          <img style="width: 359.06px" src="../guide/2f3c1b51f2216346.png" />
        </p>
        <aside class="warning">
          <p>
            <strong>Caution: </strong>Non è possibile creare reservations senza
            invitati.
          </p>
        </aside>
        <h2 is-upgraded>Descrizione Prenotazione</h2>
        <p>
          Al di sotto della sezione inviti è presente una casella di testo in
          cui è possibile specificare una descrizione per la propria
          prenotazione. <br />
        </p>
        <aside class="warning">
          <p>
            <strong>Caution: </strong>La descrizione sarà visibile a
            <strong>tutti </strong>gli utenti una volta completata la
            prenotazione.
          </p>
        </aside>
        <p>
          Se è già stata specificata una descrizione e si vuole cambiare aula o
          giorno, la descrizione rimarrà salvata e poi ripresa al momento di una
          selezione valida di slot.
        </p>
        <h2 is-upgraded>Conferma Prenotazione</h2>
        <p>
          Se la prenotazione è valida e rispetta tutti i requisiti verrà
          abilitato il pulsante di <strong>conferma</strong>, il quale può
          tornare ad essere disabilitato in caso di cambiamenti che invalidino
          la prenotazione.
        </p>
        <p>
          Una volta confermata la prenotazione viene visualizzato un messaggio
          in basso a destra che informa dell&#39;avvenuta prenotazione. A questo
          punto viene inviata una email di conferma a <strong>tutti </strong>i
          partecipanti alla riunione, compreso il creatore stesso.
        </p>
        <h2 is-upgraded>Email di Conferma</h2>
        <p>
          Quando un utente completa una prenotazione, oppure viene invitato da
          un altro utente, riceve una email, all&#39;indirizzo indicato da chi
          ha prenotato un aula, contenente i <strong>dettagli </strong>della
          prenotazione e la possibilità di <strong>confermare </strong>la
          propria presenza.
        </p>
        <p class="image-container">
          <img style="width: 601.70px" src="../guide/e551ad209818db8.png" />
        </p>
        <aside class="special">
          <p>
            <strong>Nota: </strong>Una volta raggiunto il
            <strong>limite minimo</strong> di partecipanti la prenotazione viene
            automaticamente confermata.
          </p>
        </aside>
        <h2 is-upgraded>Limite di Prenotazioni</h2>
        <p>
          Nella parte più bassa della colonna è presente un messaggio che indica
          quante prenotazioni è possibile completare ulteriormente. Se si
          desidera effettuare una ulteriore prenotazione, nonostante il
          raggiungimento del numero massimo di prenotazioni (per giorno e aula)
          è necessario eliminare una delle prenotazioni già effettuate, per
          completarne una nuova.
        </p>
        <p class="image-container">
          <img style="width: 491.34px" src="../guide/add891bb38f66dbe.png" />
        </p>
      </google-codelab-step>

      <google-codelab-step
        label="Quarta Colonna: My Reservations - NEWS!"
        duration="1"
      >
        <p>
          Nella quarta colonna è possibile leggere informazioni riguardanti il
          numero di prenotazioni effettuate.
        </p>
        <p class="image-container">
          <img style="width: 491.34px" src="../guide/4723c99fbabb762.png" />
        </p>
        <h2 is-upgraded>Carta Prenotazione</h2>
        <p>
          Per ogni prenotazione effettuata è presente una carta contenente i
          dettagli della stessa. Si può visualizzarne la <strong>data</strong>,
          la <strong>descrizione</strong>, l&#39;<strong>ora</strong> di inizio
          e di fine e l&#39;<strong>aula </strong>in cui si terrà.
        </p>
        <aside class="special">
          <p>
            <strong>Nota: </strong>L&#39;<strong>ora </strong>di inizio e di
            fine della prenotazione è indicata con un anticipo di 15 minuti
            rispetto a quella dello slot prenotato. Tale anticipo è reso
            <em>necessario </em>per il rispetto delle
            <strong>norme di sicurezza</strong> dovute alla situazione di
            emergenza sanitaria in corso.
          </p>
        </aside>
        <p>
          La prenotazione non ancora confermata avrà una colorazione
          <em>arancione</em>, mentre cambierà in <em>verde </em>una volta
          raggiunto il numero <strong>minimo </strong>di partecipanti
          necessario.
        </p>
        <h2 is-upgraded>Modifica Prenotazione</h2>
        <p>
          Una volta completata la prenotazione sarà possibile modificarne la
          descrizione tramite un pulsante 🖉<em>Edit</em> presente nella carta
          della stessa. Premendo tale tasto, la descrizione diventerà un campo
          <em>editabile</em>. Al termine della modifica è necessario
          <strong>confermare </strong>i cambiamenti premendo sul pulsante 🖪<em
            >Save</em
          >
          che comparirà al posto del pulsante 🖉<em>Edit</em> premuto in
          precedenza.
        </p>
        <h2 is-upgraded>Dettagli Prenotazione - NEWS!</h2>
        <p>
          La carta prenotazione possiede il bottone 🛈 che in primo piano apre
          una finestra attraverso cui è possibile vedere dettagliate
          informazioni associate ad una specifica prenotazione:
          <strong>descrizione</strong>, inviti <strong>pendenti</strong> e
          l&#39;elenco degli utenti che hanno
          <strong>accettato </strong>l&#39;invito di accesso all&#39;aula
          prenotata.
        </p>
        <p>
          <strong>NEWS!</strong> - E&#39; possibile aggiungere nuovi
          partecipanti anche se la prenotazione è già stata creata.
        </p>
        <aside class="special">
          <p>
            <strong>Nota:</strong> Un collega invitato ad una reservation non
            può più partecipare in presenza all&#39;incontro prenotato. Vogliamo
            che qualcuno lo sostituisca: aggiungo il nuovo invitato direttamente
            andando su MyReservation&gt;Edit&gt;Pending&gt; ⊕
          </p>
        </aside>
        <p class="image-container">
          <img style="width: 587.00px" src="../guide/b39aec2526513860.png" />
        </p>
        <aside class="special">
          <p>
            <strong>Nota: </strong>La stessa finestra viene visualizzata anche
            premendo uno slot orario prenotato dalla colonna del calendario.
          </p>
          <p class="image-container">
            <img style="width: 216.57px" src="../guide/660cde1f044cf9b3.png" />
          </p>
          <p>
            Quando il puntatore del mouse si trova sopra uno slot prenotato
            (senza cliccarlo), tale slot si colora di viola. Se lo slot viene
            cliccato, allora si apre la finestra dei dettagli.
          </p>
        </aside>
        <h2 is-upgraded>Elimina Prenotazione</h2>
        <p>
          Accanto al pulsante di modifica è presente un pulsante per
          l&#39;eliminazione della prenotazione 🗑. Una volta premuto sarà
          necessario confermare la propria scelta. Se confermata, la
          prenotazione verrà <strong>eliminata </strong>e gli slot occupati
          verranno <strong>liberati</strong>.
        </p>
        <p class="image-container">
          <img style="width: 519.50px" src="../guide/a00f5429a474670a.png" />
        </p>
        <aside class="warning">
          <p>
            <strong>Caution: </strong>Non è possibile cancellare una reservation
            già iniziata.
          </p>
        </aside>
      </google-codelab-step>
    </google-codelab>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#guide {
  height: 100vh;
  text-align: left;
}

.success {
  color: #1e8e3e;
}

.error {
  color: red;
}
</style>
