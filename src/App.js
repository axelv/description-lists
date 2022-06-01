import "./styles.css";

export default function App() {
  return (
    <div className="max-w-lg mx-5 sm:mx-auto prose">
      <h1 className="text-blue-600 text-3xl font-bold">Hi Jordy</h1>
      <p>
        In deze codesandbox vind je de technische opdracht waarmee we naar je
        HTML/CSS en React kennis willen peilen. Om wat in de sfeer van ons
        product te blijven, is het doel van deze opdracht om een klein stukje
        van onze applicatie te (her)bouwen. Ik heb React en Tailwind CSS in deze
        codesandbox reeds vooraf geinstalleerd.
      </p>
      <p>
        De informatie die artsen kwijt willen in hun consultatieverslag heeft
        vaak een structuur die lijkt op{" "}
        <a
          href="https://tailwindui.com/components/application-ui/data-display/description-lists"
          target="_blank"
        >
          Description Lists
        </a>
        . Hierbij hebben we enerzijds een "vraag", dit is een topic die de arts
        wil navragen bij de patient. En het antwoord, dit is de beschrijving of
        het antwoord dat de patient gegeven heeft.
      </p>
      <p>
        De component die je zal bouwen zal de "formulier" versie van een
        description list. We zullen hier vooral focussen op de "vragen". De
        "antwoorden" mag je gewoon vervangen door lege textareas. Het resultaat
        zal er dan min of meer zo uit zien: <img src="./example.png" />
      </p>
      <p>
        In <code>data.json</code> zit een geneste datastructuur die mag
        gebruiken om de initiele vragen de te renderen. Vervolgens zullen we de
        compent wat interactiever maken.
      </p>
      <h3>1. Aanpasbare breedte</h3>
      <p>
        {" "}
        Artsen willen instaat zijn om de breedte van de "vragen"-lijst aan te
        passen. De volgende stap is dus om ergens een handle te voorzien waarmee
        artsen de breedte van de kolommen kunnen aanpassen.
      </p>
      <h3>2. Vragen verwijderen</h3>
      <p>
        {" "}
        Vervolgens willen artsen in staat zijn om individuele vragen te
        verwijderen. Onze designer voorziet daarom een knop links van elke
        vraag:{" "}
        <figure>
          <img src="./tally.png" />
          <figcaption></figcaption>Voorbeeld van{" "}
          <a href="http://tally.so" target="_blank">
            tally.so
          </a>
        </figure>
      </p>
      <h3>3. Vragen toevoegen</h3>
      <p>
        {" "}
        Uitzonderlijke patienten zijn spijtig genoeg niet zo uitzoenderlijk en
        daarom krijgen we ook de vraag van artsen of ze zelf een vragenrij
        kunnen toevoegen. Onze designer heeft hiervoor de "plus" knop voorzien
        links van elke vraag.
      </p>
      <h3>4. Bonus - Vragen veranderen van volgorde</h3>
      <p>
        Sommige artsen zijn nogal veeleisend en letten op details. Zelf de
        volgorde van vragen is belangrijk. Daarom voorzien we een draghandle
        waarmee ze de vragen kunnen herschikken.
      </p>
    </div>
  );
}
