/* =========================================================================
   Banca dati quiz (riprendi gli array completi già forniti)
   ========================================================================= */
const quizzes = {
  "0-28":[    { text: "Le cellule sono rivestite da una membrana plasmatica che racchiude il protoplasma.", answer: true },
    { text: "Nel protoplasma si distingue solo il citoplasma, ma non esiste un nucleo separato.", answer: false },
    { text: "I mitocondri sono organelli non membranosi che producono energia.", answer: false },
    { text: "Il complesso di Golgi è formato da 3-10 cisterne con convessità rivolta verso il nucleo.", answer: true },
    { text: "I ribosomi sono composti da proteine e RNA e sintetizzano le proteine.", answer: true },
    { text: "I lisosomi possiedono una doppia membrana.", answer: false },
    { text: "Il reticolo endoplasmatico si divide in liscio e rugoso.", answer: true },
    { text: "Nell’organismo umano si riconoscono circa 200 tipi diversi di cellule.", answer: true },
    { text: "Tutte le cellule sono prive di citoscheletro.", answer: false },
    { text: "Perossisomi e lisosomi contengono enzimi litici.", answer: true },
    { text: "Gli organi cavi presentano un lume e pareti costituite da tonache.", answer: true },
    { text: "Negli organi parenchimatosi vasi e nervi entrano da più punti della superficie esterna.", answer: false },
    { text: "Un gruppo di organi con struttura e origine embriologica omogenee forma un sistema.", answer: true },
    { text: "Gli apparati riuniscono organi omogenei per funzione, struttura e origine embriologica.", answer: false },
    { text: "L’organismo umano è costituito da apparati e sistemi che lavorano in modo coordinato.", answer: true },
    { text: "Il piano sagittale divide il corpo in una metà anteriore e una posteriore.", answer: false },
    { text: "Il piano trasversale è perpendicolare sia al sagittale sia al frontale.", answer: true },
    { text: "Un elemento più vicino al piano sagittale è detto mediale.", answer: true },
    { text: "Con abduzione si intende l’allontanamento di un segmento dal piano sagittale.", answer: true },
    { text: "La flessione avvicina un segmento al piano frontale (tranne l’estensione dorsale).", answer: false },
    { text: "La rotazione interna dell’avambraccio è detta pronazione.", answer: true },
    { text: "La circonduzione descrive un cono con apice nell’articolazione stessa.", answer: true },
    { text: "Il termine “prossimale” indica ciò che è più lontano dal corpo.", answer: false },
    { text: "Tutti gli epiteli poggiano su una membrana basale di tessuto connettivo.", answer: true },
    { text: "Gli epiteli sono direttamente vascolarizzati da capillari interni.", answer: false },
    { text: "Gli epiteli semplici includono i tipi pavimentoso, cubico, cilindrico e pseudostratificato.", answer: true },
    { text: "Negli epiteli pluristratificati lo strato germinativo è quello più superficiale.", answer: false },
    { text: "I microvilli aumentano la superficie assorbente dell’epitelio.", answer: true },
    { text: "Le ghiandole esocrine secernono i loro prodotti direttamente nel sangue.", answer: false },
    { text: "La secrezione apocrina comporta il distacco della sola parte apicale della cellula.", answer: true },
    { text: "Tutti i tessuti connettivi derivano dall’ectoderma.", answer: false },
    { text: "L’acido ialuronico è un glicosamminoglicano della sostanza fondamentale connettivale.", answer: true },
    { text: "Le fibre collagene sono molto resistenti alla trazione meccanica.", answer: true },
    { text: "I mastociti partecipano alla risposta allergica immediata.", answer: true },
    { text: "Il connettivo lasso forma la tonaca propria degli organi cavi.", answer: true },
    { text: "Il tessuto adiposo bruno è metabolicamente meno attivo di quello bianco.", answer: false },
    { text: "La cartilagine ialina riveste le superfici articolari delle ossa.", answer: true },
    { text: "La cartilagine elastica contiene molte fibre elastiche oltre a collagene.", answer: true },
    { text: "La cartilagine articolare è circondata da pericondrio.", answer: false },
    { text: "I condrociti si trovano in lacune all’interno della matrice cartilaginea.", answer: true },
    { text: "La cartilagine fibrosa è ricca di collagene di tipo I.", answer: true },
    { text: "L’osso compatto è organizzato in unità chiamate osteoni.", answer: true },
    { text: "Il canale di Havers occupa il centro di ogni osteone.", answer: true },
    { text: "L’endostio riveste la superficie esterna dell’osso.", answer: false },
    { text: "Nelle diafisi il midollo osseo giallo riempie la cavità midollare.", answer: true },
    { text: "Il periostio è riccamente innervato e partecipa alla crescita ossea.", answer: true },
    { text: "Le ossa piatte sono costituite solo da osso compatto senza diploe.", answer: false },
    { text: "Le ossa lunghe presentano due epifisi e una diafisi.", answer: true },
    { text: "L’osso spugnoso è formato da osteoni con canale centrale.", answer: false },
    { text: "Nell’ossificazione intramembranosa l’osso si forma direttamente dal mesenchima.", answer: true },
    { text: "Nell’ossificazione endocondrale il tessuto cartilagineo viene sostituito da osso.", answer: true },
    { text: "L’ossificazione inizia circa alla 6ª settimana di vita intrauterina e termina intorno ai 25 anni.", answer: true },
    { text: "La metafisi scompare completamente prima dei 10 anni di età.", answer: false },
    { text: "Durante la formazione dell’osso gli osteoblasti si trasformano in osteoclasti.", answer: false },
    { text: "Gli eritrociti sono cellule anucleate a forma di lente biconcava.", answer: true },
    { text: "Le piastrine sono corpuscoli anucleati che contribuiscono all’emostasi.", answer: true },
    { text: "Il plasma contiene principalmente fibre elastiche.", answer: false },
    { text: "Le fibre muscolari rosse sono ricche di mioglobina e adatte alla resistenza.", answer: true },
    { text: "Il sarcomero è compreso tra due linee Z.", answer: true },
    { text: "La banda I contiene filamenti spessi di miosina.", answer: false },
    { text: "Il reticolo sarcoplasmatico è ricco di Ca²⁺ e coordina la contrazione della fibra.", answer: true },
    { text: "Lo scheletro appendicolare comprende cranio e gabbia toracica.", answer: false },
    { text: "Le leve di terzo tipo sacrificano forza a favore di velocità e precisione.", answer: true },
    { text: "Le cartilagini fibrose fanno parte dell’apparato locomotore.", answer: true },
    { text: "I muscoli agonisti generano il movimento opposto a quello richiesto.", answer: false },
    { text: "Le diartrosi possiedono una camera articolare delimitata da capsula fibrosa.", answer: true },
    { text: "Le artrodie consentono soprattutto movimenti di scivolamento.", answer: true },
    { text: "Le condiloartrosi permettono solo rotazione, senza flessione né estensione.", answer: false },
    { text: "La troclea (ginglimo angolare) consente flessione ed estensione.", answer: true },
    { text: "Le sinartrosi non permettono alcun movimento.", answer: true },
    { text: "Nelle sindesmosi il tessuto interposto è cartilagine ialina.", answer: false },
    { text: "Le sinfisi sono anfiartrosi con disco di fibrocartilagine interposto.", answer: true },
    { text: "La colonna vertebrale comprende 24 vertebre mobili.", answer: true },
    { text: "La regione lombare è formata da 5 vertebre indipendenti.", answer: true },
    { text: "Le curve toracica e sacrale sono considerate curve primarie.", answer: true },
    { text: "La lordosi cervicale compare durante lo sviluppo fetale.", answer: false },
    { text: "Il canale vertebrale è costituito esclusivamente da osso.", answer: false },
    { text: "Ogni vertebra possiede due peduncoli che collegano il corpo alle lamine.", answer: true },
    { text: "Il processo spinoso si proietta ventralmente.", answer: false },
    { text: "I fori intervertebrali sono delimitati superiormente e inferiormente dai peduncoli.", answer: true },
    { text: "Le faccette articolari inferiori di una vertebra si articolano con la vertebra sottostante.", answer: true },
    { text: "Le vertebre cervicali possiedono fori trasversi nei processi trasversi.", answer: true },
    { text: "L’atlante presenta un grande processo spinoso bifido.", answer: false },
    { text: "Il dente dell’epistrofeo si articola con l’arco anteriore dell’atlante.", answer: true },
    { text: "La vertebra prominente ha un processo spinoso corto e bifido.", answer: false },
    { text: "Le vertebre toraciche T1-T10 presentano faccette costali trasverse.", answer: true },
    { text: "Il foro vertebrale delle toraciche è tipicamente triangolare.", answer: false },
    { text: "I processi spinosi delle vertebre lombari sono sottili e molto inclinati in basso.", answer: false },
    { text: "Il corpo delle vertebre lombari è più grande di quello delle toraciche.", answer: true },
    { text: "L’osso sacro deriva dalla fusione di cinque vertebre.", answer: true },
    { text: "L’hiatus sacrale è situato all’estremità craniale del sacro.", answer: false },
    { text: "La tuberosità sacrale offre inserzione ai legamenti sacro-iliaci.", answer: true },
    { text: "La prima vertebra coccigea possiede processi trasversi e due corna che si articolano col sacro.", answer: true },
    { text: "Nell’uomo ci sono 12 paia di coste.", answer: true },
    { text: "Le coste VIII-X non si collegano allo sterno in alcun modo.", answer: false },
    { text: "Le coste fluttuanti corrispondono ai numeri XI e XII.", answer: true },
    { text: "Il manubrio sternale forma con il corpo lo “angolo di Louis”.", answer: true },
    { text: "La faccetta per la prima costa si trova sul corpo dello sterno.", answer: false },
    { text: "Ciascun osso dell’anca è formato da ileo, ischio e pube.", answer: true },
    { text: "L’acetabolo è formato esclusivamente dall’ileo.", answer: false }],
  "29-53":[   { text: "La scapola è un osso piatto di forma triangolare che riposa sulla faccia posteriore della gabbia toracica.", answer: true },
    { text: "Il margine laterale della scapola è detto vertebrale.", answer: false },
    { text: "La spina scapolare si trova sulla faccia ventrale della scapola.", answer: false },
    { text: "Il processo coracoideo origina dal margine superiore della scapola, al di sopra dell’acromion.", answer: true },
    { text: "La cavità glenoidea, rivestita di cartilagine, si articola con la testa dell’omero.", answer: true },
    { text: "La tuberosità sopraglenoidea serve per l’inserzione del capo lungo del tricipite brachiale.", answer: false },
    { text: "La tuberosità sottoglenoidea è posta sul margine inferiore della testa scapolare.", answer: true },
    { text: "La clavicola presenta due curve entrambe con convessità anteriore.", answer: false },
    { text: "Sulla superficie inferiore dell’estremità sternale della clavicola si trova il tubercolo costale.", answer: true },
    { text: "L’estremità acromiale della clavicola è più piccola di quella sternale.", answer: false },
    { text: "L’articolazione sterno-clavicolare è l’unica connessione ossea diretta tra cintura scapolare e scheletro assile.", answer: true },
    { text: "L’articolazione sterno-clavicolare è classificata come enartrosi.", answer: false },
    { text: "L’articolazione acromion-clavicolare è un’artrodia dotata di disco fibrocartilagineo intra-articolare.", answer: true },
    { text: "Nell’articolazione acromion-clavicolare si articola il tubercolo conoide con l’acromion.", answer: false },
    { text: "L’articolazione scapolo-omerale è un’enartrosi con labbro glenoideo fibrocartilagineo.", answer: true },
    { text: "L’articolazione scapolo-omerale consente solo flessione ed estensione.", answer: false },
    { text: "Il legamento coraco-clavicolare è costituito da due fasci: trapezoide e conoide.", answer: true },
    { text: "Il legamento coraco-omerale rinforza il margine posteriore della capsula scapolo-omerale.", answer: false },
    { text: "Il legamento trapezoide si inserisce sul margine anteriore della faccia inferiore della clavicola.", answer: true },
    { text: "Il legamento conoide si inserisce sul tubercolo conoideo della clavicola.", answer: true },
    { text: "Il collo chirurgico dell’omero separa direttamente la testa dalle tuberosità.", answer: false },
    { text: "Il solco bicipitale dell’omero ospita il tendine del capo lungo del bicipite brachiale.", answer: true },
    { text: "Sulla grande tuberosità dell’omero si inseriscono i muscoli sopraspinato, sottospinato e piccolo rotondo.", answer: true },
    { text: "La cresta della piccola tuberosità accoglie il muscolo grande pettorale.", answer: false },
    { text: "La tuberosità deltoidea si trova sulla faccia laterale della diafisi omerale.", answer: true },
    { text: "Il solco radiale decorre anteriormente alla tuberosità deltoidea.", answer: false },
    { text: "Il condilo omerale si articola con la testa del radio.", answer: true },
    { text: "La troclea omerale si articola con l’incisura semilunare dell’ulna.", answer: true },
    { text: "L’epicondilo si trova medialmente alla troclea.", answer: false },
    { text: "L’epitroclea è posta medialmente alla troclea.", answer: true },
    { text: "L’ulna è l’osso mediale dell’avambraccio.", answer: true },
    { text: "L’olecrano è un processo anteriore dell’ulna.", answer: false },
    { text: "Il becco dell’olecrano entra nella fossa olecranica dell’omero durante l’estensione completa dell’avambraccio.", answer: true },
    { text: "Il processo coronoideo contribuisce a delimitare l’incisura semilunare.", answer: true },
    { text: "L’incisura radiale dell’ulna si trova sul processo coronoideo.", answer: true },
    { text: "La tuberosità dell’ulna dà inserzione al muscolo brachiale.", answer: true },
    { text: "Il capitello dell’ulna appartiene all’epifisi prossimale.", answer: false },
    { text: "Il processo stiloideo ulnare è laterale rispetto al capitello.", answer: false },
    { text: "Il radio è l’osso laterale dell’avambraccio.", answer: true },
    { text: "La fossetta del capitello radiale si articola con il condilo omerale.", answer: true },
    { text: "Il collo del radio è situato distalmente al capitello.", answer: true },
    { text: "La tuberosità radiale è posta sulla faccia dorsale della diafisi.", answer: false },
    { text: "Il margine mediale del radio, detto cresta interossea, riceve l’inserzione della membrana interossea.", answer: true },
    { text: "Il processo stiloideo radiale è localizzato sul margine laterale dell’epifisi distale.", answer: true },
    { text: "L’incisione ulnare del radio si trova sul margine laterale dell’epifisi distale.", answer: false },
    { text: "L’articolazione omero-ulnare è una diartrosi a ginglimo angolare.", answer: true },
    { text: "L’articolazione omero-radiale è classificata come artrodia.", answer: false },
    { text: "L’articolazione radio-ulnare prossimale consente flessione ed estensione.", answer: false },
    { text: "Il legamento anulare del radio avvolge il condilo omerale.", answer: false },
    { text: "La membrana interossea concorre alla fissità dell’articolazione del gomito.", answer: true },
    { text: "Il legamento collaterale ulnare origina dall’epitroclea.", answer: true },
    { text: "Il legamento collaterale radiale si inserisce direttamente sul radio.", answer: false },
    { text: "Il carpo è formato da otto ossa brevi disposte su due file.", answer: true },
    { text: "La concavità palmare del carpo è situata sul versante dorsale.", answer: false },
    { text: "I metacarpi sono cinque ossa lunghe che uniscono carpo e falangi.", answer: true },
    { text: "Anche il pollice possiede tre falangi.", answer: false },
    { text: "La tuberosità ungueale è presente sulla falange distale.", answer: true },
    { text: "Il muscolo grande pettorale origina dal tratto mediale della clavicola, dallo sterno e dalle cartilagini costali I-VI.", answer: true },
    { text: "Il muscolo grande pettorale si inserisce sulla cresta della piccola tuberosità.", answer: false },
    { text: "Il muscolo piccolo pettorale si inserisce sul processo coracoideo della scapola.", answer: true },
    { text: "Il muscolo dentato anteriore mantiene la scapola aderente al torace.", answer: true },
    { text: "Dentato anteriore e trapezio, ruotando la scapola, elevano il braccio sul piano frontale fino a circa 150°.", answer: true },
    { text: "Il muscolo succlavio si inserisce sulla faccia superiore della prima costa.", answer: false },
    { text: "Il muscolo succlavio avvicina la clavicola alla prima costa e può sollevare la costa stessa.", answer: true },
    { text: "La debolezza del muscolo romboide può provocare scapole alate.", answer: true },
    { text: "Il muscolo dentato anteriore è innervato dal nervo toracico lungo (C5-C7).", answer: true },
    { text: "Il muscolo sovraspinato origina dalla fossa sottospinata.", answer: false },
    { text: "Il muscolo infraspinato è parte della cuffia dei rotatori.", answer: true },
    { text: "La cuffia dei rotatori comprende i tendini di sovraspinato, infraspinato, sottoscapolare e deltoide.", answer: false },
    { text: "Il tendine del capo lungo del bicipite scorre sotto la cuffia dei rotatori.", answer: true },
    { text: "Il muscolo piccolo rotondo contribuisce all’extrarotazione del braccio.", answer: true },
    { text: "Il muscolo grande rotondo adduce, estende e intraruota il braccio.", answer: true },
    { text: "Il muscolo sottoscapolare si inserisce sulla piccola tuberosità dell’omero.", answer: true },
    { text: "Il muscolo sottoscapolare extraruota l’omero.", answer: false },
    { text: "Il capo lungo del bicipite brachiale origina dalla tuberosità sopraglenoidea.", answer: true },
    { text: "Il bicipite brachiale si inserisce sulla tuberosità ulnare.", answer: false },
    { text: "Il muscolo coracobrachiale flette e adduce il braccio.", answer: true },
    { text: "Il muscolo brachiale è innervato principalmente dal nervo muscolocutaneo.", answer: true },
    { text: "Il capo lungo del tricipite origina dalla tuberosità sottoglenoidea e il tricipite estende l’avambraccio.", answer: true },
    { text: "Il muscolo anconeo si inserisce sull’epicondilo dell’ulna.", answer: false },
    { text: "Gli estensori superficiali dell’avambraccio originano dall’epitroclea.", answer: false },
    { text: "Il muscolo pronatore rotondo origina dall’epitroclea e si inserisce sul radio.", answer: true },
    { text: "Il muscolo supinatore origina dall’epicondilo e termina sul radio.", answer: true },
    { text: "I muscoli estensori profondi dell’avambraccio originano da radio e ulna.", answer: true },
    { text: "Il flessore profondo delle dita origina dal terzo distale dell’ulna.", answer: false },
    { text: "Il brachioradiale appartiene al gruppo laterale dei muscoli dell’avambraccio.", answer: true },
    { text: "Tutti i muscoli dell’avambraccio sono innervati dal nervo mediano.", answer: false },
    { text: "L’estensore lungo del pollice è uno dei muscoli posteriori profondi dell’avambraccio.", answer: true },
    { text: "L’articolazione radio-ulnare distale è una trocoide che consente supinazione e pronazione.", answer: true },
    { text: "La capsula del gomito delimita tre cavità articolari distinte.", answer: false },
    { text: "Il legamento collaterale radiale si continua con il legamento anulare del radio.", answer: true },
    { text: "Il muscolo grande pettorale è innervato dai nervi toracici anteriori C5-T1.", answer: true },
    { text: "Il muscolo piccolo pettorale eleva le coste durante l’inspirazione.", answer: true },
    { text: "Il muscolo succlavio allontana la clavicola dalla prima costa.", answer: false },
    { text: "I movimenti di prono-supinazione avvengono nelle articolazioni radio-ulnari prossimale e distale.", answer: true },
    { text: "Nell’articolazione acromion-clavicolare il disco fibrocartilagineo è assente.", answer: false },
    { text: "La fossa sottospinata è situata cranialmente alla spina della scapola.", answer: false },
    { text: "La fossa sovraspinata ospita il muscolo sovraspinato.", answer: true },
    { text: "Il margine vertebrale della scapola è anche detto margine mediale.", answer: true },
    { text: "Il processo stiloideo radiale si trova medialmente rispetto all’incisione ulnare.", answer: false }],
  "54-81":[    { text: "La cintura pelvica è formata da due ossa coxali, ciascuna suddivisa in ileo, ischio e pube.", answer: true },
    { text: "L’acetabolo si articola con la testa della tibia.", answer: false },
    { text: "La cresta iliaca termina anteriormente con la spina iliaca anteriore superiore.", answer: true },
    { text: "La grande incisura ischiatica si trova inferiormente alla spina ischiatica.", answer: false },
    { text: "Le due ossa pubiche sono unite anteriormente dalla sinfisi pubica in fibrocartilagine.", answer: true },
    { text: "Il forame otturatorio è completamente aperto e privo di membrana otturatoria.", answer: false },
    { text: "Il ramo ischiopubico nasce dalla fusione del ramo ischiatico con il ramo inferiore del pube.", answer: true },
    { text: "La tuberosità ischiatica sostiene il peso corporeo quando si è seduti.", answer: true },
    { text: "La linea arcuata dell’ileo contribuisce a delimitare lo stretto superiore del bacino.", answer: true },
    { text: "Lo stretto superiore del bacino separa la piccola pelvi dalla cavità toracica.", answer: false },
    { text: "La testa del femore presenta la fovea capitis per l’inserzione del legamento rotondo.", answer: true },
    { text: "Il collo anatomico del femore forma un angolo di circa 150° con la diafisi.", answer: true },
    { text: "La diafisi femorale converge prossimalmente verso il bacino invece che distalmente.", answer: false },
    { text: "I condili femorali si trovano sull’epifisi distale del femore.", answer: true },
    { text: "Il grande trocantere è localizzato sull’epifisi distale del femore.", answer: false },
    { text: "Il legamento ileo-femorale, a forma di Y, limita l’estensione della coscia.", answer: true },
    { text: "Il legamento pubo-femorale origina dall’ischio e si inserisce sulla linea intertrocanterica.", answer: false },
    { text: "Il legamento ischio-femorale si inserisce sulla faccia anteriore del grande trocantere.", answer: true },
    { text: "Il legamento rotondo unisce la fovea della testa femorale all’acetabolo.", answer: true },
    { text: "Tutti i legamenti capsulari dell’anca limitano l’adduzione della coscia.", answer: false },
    { text: "Il ginocchio include in una sola cavità l’articolazione femoro-rotulea e quella femoro-tibiale.", answer: true },
    { text: "L’articolazione femoro-tibiale è una doppia condiloartrosi incompleta resa congruente dai menischi.", answer: true },
    { text: "I menischi del ginocchio sono costituiti da cartilagine ialina.", answer: false },
    { text: "Il legamento crociato anteriore impedisce alla tibia di spostarsi posteriormente.", answer: false },
    { text: "Il legamento crociato posteriore si inserisce sulla superficie mediale del condilo mediale femorale.", answer: true },
    { text: "Il legamento collaterale mediale è teso fra l’epicondilo mediale femorale e la testa del perone.", answer: false },
    { text: "Il legamento rotuleo collega la patella alla tuberosità tibiale.", answer: true },
    { text: "La patella è un osso sesamoide incluso nel tendine del quadricipite femorale.", answer: true },
    { text: "I retinacoli patellari si inseriscono sui condili tibiali anteriori, stabilizzando la patella.", answer: true },
    { text: "A gamba estesa il ginocchio permette ampia rotazione interna.", answer: false },
    { text: "La tibia è l’osso mediale della gamba e partecipa all’articolazione del ginocchio.", answer: true },
    { text: "La fibula è indispensabile per sostenere il peso corporeo durante la stazione eretta.", answer: false },
    { text: "La tuberosità tibiale è punto d’inserzione del legamento rotuleo.", answer: true },
    { text: "La fibula non possiede un malleolo distale.", answer: false },
    { text: "L’articolazione tibio-fibulare prossimale è un’artrodia fra tibia e testa della fibula.", answer: true },
    { text: "L’articolazione tibio-fibulare distale è una sinartrosi.", answer: true },
    { text: "Fra tibia e fibula è tesa una robusta membrana interossea fibrosa.", answer: true },
    { text: "L’eminenza intercondiloidea si trova sull’epifisi distale della tibia.", answer: false },
    { text: "Il malleolo mediale appartiene alla tibia.", answer: true },
    { text: "La testa della fibula presenta un processo stiloideo per l’inserzione del tendine del bicipite femorale.", answer: true },
    { text: "L’articolazione tibio-tarsica è un ginglimo angolare che consente flessione dorsale e plantare del piede.", answer: true },
    { text: "I malleoli tibiale e peroneale formano il mortaio crurale che accoglie la troclea dell’astragalo.", answer: true },
    { text: "Il legamento deltoideo origina dal malleolo laterale e si inserisce sul tarso.", answer: false },
    { text: "Il legamento collaterale laterale della caviglia si inserisce sia sull’astragalo sia sul calcagno.", answer: true },
    { text: "La caviglia permette ampi movimenti di lateralità.", answer: false },
    { text: "Il tarso comprende sette ossa, fra cui astragalo, calcagno e tre cuneiformi.", answer: true },
    { text: "Il calcagno costituisce la branca posteriore dell’arco plantare che scarica il peso a terra.", answer: true },
    { text: "L’astragalo trasmette il peso corporeo dalla tibia al piede.", answer: true },
    { text: "L’alluce possiede tre falangi come le altre dita del piede.", answer: false },
    { text: "I metatarsi si articolano prossimalmente direttamente con il calcagno.", answer: false },
    { text: "Il muscolo ileopsoas si inserisce sul piccolo trocantere del femore.", answer: true },
    { text: "Il muscolo iliaco origina dal labbro interno della cresta iliaca e dalla fossa iliaca.", answer: true },
    { text: "Il muscolo piccolo psoas si inserisce sulla cresta pettinea del pube.", answer: true },
    { text: "Il muscolo grande gluteo estende ed extraruota la coscia.", answer: true },
    { text: "Il muscolo medio gluteo è superficiale rispetto al grande gluteo.", answer: false },
    { text: "Le fibre anteriori del piccolo gluteo partecipano all’intrarotazione della coscia.", answer: true },
    { text: "Il muscolo piriforme attraversa la grande incisura ischiatica insieme al nervo sciatico.", answer: true },
    { text: "La sindrome del piriforme è dovuta a compressione del nervo femorale.", answer: false },
    { text: "Il muscolo gemello superiore è classificato tra i muscoli esterni dell’anca.", answer: true },
    { text: "Il muscolo quadrato del femore appartiene anch’esso ai muscoli esterni dell’anca.", answer: true },
    { text: "Il muscolo tensore della fascia lata origina dalla spina iliaca anteriore superiore.", answer: true },
    { text: "Il tensore della fascia lata si inserisce sulla benderella ileo-tibiale al condilo laterale della tibia.", answer: true },
    { text: "La “sindrome della fascia lata” è conosciuta anche come ginocchio del corridore.", answer: true },
    { text: "Il muscolo sartorio forma la zampa d’oca con gracile e semitendinoso.", answer: true },
    { text: "Il sartorio extra-ruota la coscia e intraruota la gamba.", answer: true },
    { text: "Il quadricipite femorale è composto da cinque capi muscolari.", answer: false },
    { text: "Il retto femorale è l’unico capo del quadricipite che flette la coscia.", answer: true },
    { text: "Gli adduttori lungo, breve e grande appartengono alla loggia postero-mediale della coscia.", answer: true },
    { text: "Il muscolo gracile origina dalla branca ischiopubica e partecipa anch’esso alla zampa d’oca.", answer: true },
    { text: "Il muscolo pettineo adduce, flette ed extraruota la coscia.", answer: true },
    { text: "Il bicipite femorale possiede un capo lungo dalla tuberosità ischiatica e un capo breve dal femore.", answer: true },
    { text: "Il capo lungo del bicipite femorale è innervato dal nervo tibiale.", answer: true },
    { text: "Il semimembranoso contribuisce a formare il legamento popliteo obliquo dietro al ginocchio.", answer: true },
    { text: "Il grande adduttore è innervato principalmente dal nervo femorale.", answer: false },
    { text: "Il muscolo gracile è innervato dal nervo otturatorio.", answer: true },
    { text: "Il tibiale anteriore flette dorsalmente e supina il piede.", answer: true },
    { text: "Il tibiale posteriore flette plantarmente e supina il piede.", answer: true },
    { text: "Il tricipite della sura è formato da gastrocnemio e soleo.", answer: true },
    { text: "Il tricipite della sura estende la gamba al ginocchio.", answer: false },
    { text: "Il peroneo lungo appartiene al gruppo laterale dei muscoli della gamba.", answer: true },
    { text: "Il muscolo plantare è incluso tra i muscoli posteriori della gamba.", answer: true },
    { text: "Il popliteo è un muscolo anteriore della gamba.", answer: false },
    { text: "Il flessore lungo dell’alluce partecipa alla flessione plantare del piede.", answer: true },
    { text: "Il peroneo breve everte il piede ma non estende le dita.", answer: true },
    { text: "Il muscolo estensore breve delle dita non interessa l’alluce.", answer: false },
    { text: "Il flessore breve delle dita agisce sulle falangi intermedie delle dita II-V.", answer: true },
    { text: "I muscoli interossei plantari adducono le dita del piede verso l’asse dell’alluce.", answer: true },
    { text: "L’abduttore dell’alluce è un muscolo del compartimento plantare mediale.", answer: true },
    { text: "Il quadrato della pianta appartiene ai muscoli plantari intermedi del piede.", answer: true },
    { text: "Il nervo otturatorio (L2-L4) innerva i principali muscoli adduttori della coscia.", answer: true },
    { text: "Il nervo femorale fornisce motilità al quadricipite femorale e sensibilità alla parte anteriore della coscia.", answer: true },
    { text: "Il nervo tibiale innerva i muscoli posteriori di coscia e gamba e origina dal plesso sacrale.", answer: true },
    { text: "Il nervo peroneo profondo innerva il compartimento mediale della gamba.", answer: false },
    { text: "Il nervo peroneo profondo innerva il tibiale anteriore.", answer: true },
    { text: "Lo scheletro dell’arto inferiore è più robusto di quello dell’arto superiore perché deve sostenere il peso corporeo.", answer: true },
    { text: "Le articolazioni dell’arto inferiore consentono maggiore libertà di movimento rispetto a quelle dell’arto superiore.", answer: false },
    { text: "Il piede umano possiede complessivamente 26 ossa.", answer: true },
    { text: "Il cingolo pelvico è collegato allo scheletro assile tramite una diartrosi mobile.", answer: false },
    { text: "Il segmento distale dell’arto inferiore è orientato perpendicolarmente al segmento intermedio.", answer: true },
    { text: "Il femore è l’osso più lungo e resistente del corpo umano.", answer: true }],
  "82-113":[    { text: "Il neurocranio è la parte del cranio che contiene e protegge cervello, tronco cerebrale e cervelletto.", answer: true },
    { text: "Il neurocranio è formato da quattordici ossa piatte.", answer: false },
    { text: "Le articolazioni fra le ossa della scatola cranica sono sincondrosi cartilaginee.", answer: false },
    { text: "L’unica articolazione mobile del cranio è quella temporo-mandibolare.", answer: true },
    { text: "Le ossa del massiccio facciale appartengono allo splancnocranio.", answer: true },
    { text: "I tre paia di ossicini dell’orecchio medio sono considerati ossa associate al cranio.", answer: true },
    { text: "L’osso ioide si articola direttamente con il neurocranio.", answer: false },
    { text: "La dura madre periostiale è fusa con il periostio della faccia interna della scatola cranica.", answer: true },
    { text: "La falce cerebrale separa i due emisferi cerebellari.", answer: false },
    { text: "Lo spazio subaracnoideo si trova tra aracnoide e pia madre ed è pieno di liquor.", answer: true },
    { text: "La dura madre meningea è interna alla dura madre periostiale.", answer: true },
    { text: "Le meningi rivestono esclusivamente l’encefalo, ma non il midollo spinale.", answer: false },
    { text: "Il midollo spinale è suddiviso in 31 segmenti funzionali.", answer: true },
    { text: "Nel midollo spinale esistono otto segmenti cervicali.", answer: true },
    { text: "Il midollo spinale termina normalmente a livello della vertebra L3.", answer: false },
    { text: "Le corna laterali di sostanza grigia sono presenti lungo tutta la colonna spinale.", answer: false },
    { text: "Il volume della sostanza bianca è maggiore a livello cervicale che sacrale.", answer: true },
    { text: "Il riflesso osteotendineo è un riflesso monosinaptico organizzato dal midollo spinale.", answer: true },
    { text: "La stimolazione dell’organo tendineo di Golgi eccita il motoneurone agonista per prevenire lesioni.", answer: false },
    { text: "Gli interneuroni inibitori spinali modulano l’attività dei motoneuroni durante i riflessi.", answer: true },
    { text: "Le fibre dell’emiretina nasale decussano nel chiasma ottico.", answer: true },
    { text: "Il tratto ottico trasporta informazioni dell’emicampo visivo ipsilaterale.", answer: false },
    { text: "Nel corpo genicolato laterale gli strati 2, 3 e 5 ricevono fibre dalla retina nasale controlaterale.", answer: false },
    { text: "Le radiazioni ottiche si dirigono dal diencefalo al lobo occipitale.", answer: true },
    { text: "L’area visiva primaria corrisponde all’area 17 di Brodmann.", answer: true },
    { text: "Nelle colonne corticali visive le afferenze arrivano inizialmente allo strato IV.", answer: true },
    { text: "La via ottica riflessa coinvolge i nuclei pretettali e regola il riflesso pupillare.", answer: true },
    { text: "La cornea costituisce la porzione anteriore trasparente del bulbo oculare.", answer: true },
    { text: "Il cristallino è connesso alla parete oculare tramite il muscolo ciliare.", answer: true },
    { text: "La contrazione del muscolo ciliare rende il cristallino più piatto.", answer: false },
    { text: "L’umor vitreo riempie la camera anteriore dell’occhio.", answer: false },
    { text: "La sclera è la tonaca più resistente e mantiene la forma dell’occhio.", answer: true },
    { text: "La retina pigmentaria è la porzione recettoriale contenente coni e bastoncelli.", answer: false },
    { text: "La fovea rappresenta la zona di massima acuità visiva.", answer: true },
    { text: "La papilla del nervo ottico è priva di recettori sensoriali.", answer: true },
    { text: "Lo strato delle cellule gangliari è più esterno di quello dei fotorecettori.", answer: false },
    { text: "Le sinapsi simmetriche sono tipicamente eccitatorie.", answer: false },
    { text: "Le spine dendritiche ospitano frequenti sinapsi asso-spino-dendritiche.", answer: true },
    { text: "Nel polmone sinistro il margine anteriore presenta l’incisura cardiaca.", answer: true },
    { text: "La lingula appartiene al lobo inferiore destro del polmone.", answer: false },
    { text: "Il lobo superiore sinistro comprende i segmenti lingulari superiore e inferiore.", answer: true },
    { text: "I bronchioli sono privi di cartilagine ma ricchi di muscolatura liscia.", answer: true },
    { text: "Il parasimpatico determina broncodilatazione dei bronchioli.", answer: false },
    { text: "Gli alveoli possono originare direttamente dai bronchioli respiratori.", answer: true },
    { text: "La membrana respiratoria è spessa per limitare la diffusione dei gas.", answer: false },
    { text: "Il liquido pleurico riduce l’attrito e mantiene pressione negativa nella cavità pleurica.", answer: true },
    { text: "La piccola circolazione inizia nel ventricolo destro e termina nell’atrio sinistro.", answer: true },
    { text: "Il tronco polmonare trasporta sangue ossigenato.", answer: false },
    { text: "Le quattro vene polmonari sboccano nell’atrio destro.", answer: false },
    { text: "L’arco aortico è la continuazione dell’aorta ascendente dopo una curva di 180°.", answer: true },
    { text: "Dal solo arco aortico nascono tronco brachiocefalico, carotide comune sinistra e succlavia sinistra.", answer: true },
    { text: "Le arterie vertebrali originano dalle succlavie e attraversano i forami trasversi cervicali.", answer: true },
    { text: "Il setto interventricolare è più spesso del setto interatriale.", answer: true },
    { text: "Gli atri hanno pareti più spesse dei ventricoli.", answer: false },
    { text: "Il forame ovale fetale permette al sangue di bypassare la piccola circolazione polmonare.", answer: true },
    { text: "Dopo la nascita il forame ovale diventa la fossa ovale.", answer: true },
    { text: "Le corde tendinee collegano i lembi valvolari ai muscoli papillari.", answer: true },
    { text: "La banda moderatrice si trova nel ventricolo sinistro.", answer: false },
    { text: "La valvola tricuspide è formata da due cuspidi.", answer: false },
    { text: "La valvola mitrale regola il flusso tra atrio e ventricolo sinistri.", answer: true },
    { text: "La valvola polmonare è una valvola semilunare a tre lembi.", answer: true },
    { text: "Durante la sistole ventricolare le valvole atrioventricolari sono chiuse.", answer: true },
    { text: "Il ventricolo sinistro ha pareti più sottili di quello destro.", answer: false },
    { text: "Il nodo seno-atriale si trova nella parete posteriore dell’atrio destro.", answer: true },
    { text: "Le vie internodali collegano il nodo seno-atriale al nodo atrioventricolare.", answer: true },
    { text: "Il sistema di conduzione cardiaca è costituito da muscolatura liscia specializzata.", answer: false },
    { text: "Il colon sigmoideo ha decorso a S e termina nel retto.", answer: true },
    { text: "Il retto è lungo circa 5 cm.", answer: false },
    { text: "L’ano è rivestito da epitelio pavimentoso stratificato corneificato.", answer: true },
    { text: "Lo sfintere anale interno è costituito da muscolatura scheletrica.", answer: false },
    { text: "Il fegato è fissato alla parete addominale anteriore dal legamento falciforme.", answer: true },
    { text: "Il legamento rotondo del fegato è il residuo della vena ombelicale fetale.", answer: true },
    { text: "Il fegato occupa l’ipocondrio destro, l’epigastrio e parte dell’ipocondrio sinistro.", answer: true },
    { text: "Il fegato pesa in media circa 3 kg.", answer: false },
    { text: "Il fegato è un organo retroperitoneale.", answer: false },
    { text: "Il sistema nervoso periferico comprende nervi e gangli.", answer: true },
    { text: "La sostanza bianca del SNC è costituita principalmente da corpi neuronali.", answer: false },
    { text: "I vasa nervorum decorrono nell’epinevrio.", answer: false },
    { text: "Nell’uomo si stimano 100-1000 miliardi di neuroni.", answer: true },
    { text: "Il citoscheletro fa parte del citoplasma cellulare.", answer: true },
    { text: "I perossisomi sono organelli non membranosi.", answer: false },
    { text: "Il complesso di Golgi presenta convessità rivolta verso il nucleo.", answer: true },
    { text: "I ribosomi sono costituiti da proteine e RNA.", answer: true },
    { text: "Il reticolo endoplasmatico liscio è specializzato nella sintesi proteica.", answer: false },
    { text: "Il tronco encefalico comprende mesencefalo, ponte e midollo allungato.", answer: true },
    { text: "I nuclei somatomotori ricevono proiezioni corticali bilaterali, eccetto quelli del VII e XII nervo.", answer: true },
    { text: "La formazione reticolare è confinata al solo mesencefalo.", answer: false },
    { text: "La regione laterale della formazione reticolare contiene grossi neuroni di proiezione.", answer: false },
    { text: "Nel cervelletto le lamelle presentano sostanza bianca centrale e grigia periferica.", answer: true },
    { text: "Le lamelle cerebellari sono organizzate in strutture dette foglie cerebellari.", answer: true },
    { text: "Il lobo medio è presente solo nel polmone destro.", answer: true },
    { text: "Con la riduzione della cartilagine bronchiale aumenta la muscolatura liscia nella parete aerea.", answer: true },
    { text: "L’ortosimpatico provoca broncocostrizione.", answer: false },
    { text: "Il piano sagittale divide il corpo in metà destra e sinistra.", answer: true },
    { text: "Un punto più lontano dal piano sagittale si definisce mediale.", answer: false },
    { text: "Il piano frontale è perpendicolare al piano trasversale.", answer: true },
    { text: "I piani trasversali separano porzioni craniali e caudali del corpo.", answer: true },
    { text: "Il termine “craniale” può essere usato come sinonimo di “rostrale”.", answer: true },
    { text: "Le suture craniche rimangono completamente mobili per tutta la vita.", answer: false },
    { text: "Le pareti alveolari sono formate da penumociti di tipo I che favoriscono lo scambio gassoso.", answer: true }],
  "114-140":[   { text: "L’apparato urinario elimina scorie e partecipa al mantenimento dell’omeostasi idro-elettrolitica.", answer: true },
    { text: "L’apparato urinario comprende un solo rene ma due ureteri.", answer: false },
    { text: "I reni ricevono circa il 25 % del flusso ematico della grande circolazione.", answer: true },
    { text: "Il peso medio di un rene adulto giovane è di circa 250 g.", answer: true },
    { text: "Con l’avanzare dell’età il peso renale aumenta fino a 300 g.", answer: false },
    { text: "I reni si proiettano approssimativamente tra le vertebre T12 ed L3.", answer: true },
    { text: "Il polo superiore di ciascun rene è in diretto contatto con il surrene.", answer: true },
    { text: "La capsula fibrosa è lo strato più interno che riveste il rene.", answer: true },
    { text: "La fascia renale è racchiusa all’interno della capsula adiposa.", answer: false },
    { text: "Il seno renale è una cavità centrale che accoglie vasi, grasso e vie urinarie intrarenali.", answer: true },
    { text: "La corticale renale costituisce lo strato più esterno del parenchima.", answer: true },
    { text: "Le papille renali corrispondono agli apici delle colonne renali.", answer: false },
    { text: "Un lobo renale è formato da una piramide e dalla corticale sovrastante.", answer: true },
    { text: "L’ilo renale è situato sul margine laterale dell’organo.", answer: false },
    { text: "I dotti collettori sboccano direttamente nei calici renali minori senza passare per i dotti papillari.", answer: false },
    { text: "La pelvi renale è la continuazione dei calici maggiori all’ilo.", answer: true },
    { text: "Le arterie interlobari decorrono lungo il confine cortico-midollare.", answer: false },
    { text: "Le arterie arcuate si trovano al limite tra midollare e corticale.", answer: true },
    { text: "Dalle arterie interlobulari nascono le arteriole afferenti dei glomeruli.", answer: true },
    { text: "Circa l’80 % dei nefroni è di tipo corticale.", answer: true },
    { text: "I nefroni iuxtamidollari possiedono tubuli molto brevi.", answer: false },
    { text: "Le vasa recta accompagnano l’ansa di Henle dei nefroni iuxtamidollari.", answer: true },
    { text: "Il corpuscolo renale è localizzato esclusivamente nella midollare.", answer: false },
    { text: "L’epitelio parietale della capsula di Bowman è pavimentoso semplice.", answer: true },
    { text: "I podociti costituiscono la parete parietale della capsula glomerulare.", answer: false },
    { text: "Fra i pedicelli dei podociti si trovano le fessure di filtrazione.", answer: true },
    { text: "Le cellule mesangiali glomerulari possono secernere renina.", answer: true },
    { text: "Il filtrato glomerulare è normalmente ricco di proteine plasmatiche.", answer: false },
    { text: "Dalle arteriole efferenti originano i capillari peritubulari che circondano il tubulo renale.", answer: true },
    { text: "Il tubulo contorto prossimale nasce al polo urinario della capsula di Bowman.", answer: true },
    { text: "L’ansa di Henle è contenuta interamente nella corticale renale.", answer: false },
    { text: "Il tubulo contorto distale è privo di microvilli.", answer: true },
    { text: "L’ADH aumenta la permeabilità dei dotti collettori all’acqua.", answer: true },
    { text: "La macula densa fa parte del tubulo contorto distale.", answer: true },
    { text: "Le cellule iuxtaglomerulari appartengono alla parete dell’arteria renale principale.", answer: false },
    { text: "L’apparato iuxtaglomerulare contribuisce al controllo pressorio attraverso la renina.", answer: true },
    { text: "Gli ureteri sono retroperitoneali lungo tutto il loro decorso.", answer: true },
    { text: "Nella tonaca muscolare degli ureteri lo strato longitudinale è interno e quello circolare esterno.", answer: true },
    { text: "La lunghezza media di ciascun uretere è di circa 30 cm.", answer: true },
    { text: "Negli uomini gli ureteri attraversano la parete del diaframma toracico prima di raggiungere la vescica.", answer: false },
    { text: "Solo la faccia superiore della vescica è rivestita da peritoneo viscerale.", answer: true },
    { text: "Nella femmina la vescica è situata anteriormente alla vagina.", answer: true },
    { text: "Nel maschio la vescica è posta dietro la sinfisi pubica e davanti al retto.", answer: true },
    { text: "Le ghiandule di Littré sono abbondanti nell’uretra cavernosa maschile.", answer: true },
    { text: "Durante la prima fase dell’eiaculazione entrambi gli sfinteri uretrali risultano aperti.", answer: false },
    { text: "Lo sfintere uretrale esterno è formato da muscolatura striata.", answer: true },
    { text: "L’uretra è rivestita da urotelio per tutta la sua lunghezza.", answer: false },
    { text: "Il dotto cistico si unisce al dotto epatico comune formando il coledoco.", answer: true },
    { text: "Lo sfintere di Oddi circonda il coledoco prima che esso si apra nel duodeno.", answer: true },
    { text: "Il pancreas si estende dalla testa incastonata nel duodeno fino alla coda adiacente alla milza.", answer: true },
    { text: "La componente endocrina del pancreas è costituita dagli acini pancreatici.", answer: false },
    { text: "Il dotto pancreatico principale di Wirsung confluisce nel duodeno.", answer: true },
    { text: "Il dotto pancreatico accessorio di Santorini è sempre assente.", answer: false },
    { text: "Il pancreas riceve sangue dalle arterie splenica, mesenterica superiore ed epatica.", answer: true },
    { text: "Le vie respiratorie superiori includono naso, cavità nasali, seni paranasali e faringe.", answer: true },
    { text: "La porzione di conduzione del tratto respiratorio comprende i bronchioli terminali.", answer: true },
    { text: "L’epitelio respiratorio tipico è pseudostratificato ciliato con cellule caliciformi.", answer: true },
    { text: "Nei bronchioli più piccoli l’epitelio diventa cubico con poche ciglia.", answer: true },
    { text: "Negli alveoli l’epitelio è pavimentoso specializzato per gli scambi gassosi.", answer: true },
    { text: "Ogni ampolla dei canali semicircolari contiene una cresta ampollare con cupola gelatinosa.", answer: true },
    { text: "Secondo il testo, l’utricolo risponde ad accelerazioni verticali mentre il sacculo a quelle orizzontali.", answer: true },
    { text: "Nel riflesso vestibolo-oculare gli occhi ruotano nello stesso senso del capo.", answer: false },
    { text: "Il sistema nervoso autonomo efferente è costituito da componenti ortosimpatica e parasimpatica.", answer: true },
    { text: "La componente simpatica è predominante nelle situazioni di riposo e digestione.", answer: false },
    { text: "Il plesso mioenterico di Auerbach coordina i movimenti della muscolatura del tubo digerente.", answer: true },
    { text: "Il plesso sottomucoso di Meissner regola la secrezione ghiandolare della parete intestinale.", answer: true },
    { text: "La peristalsi è un movimento di frammentazione e rimescolamento del bolo.", answer: false },
    { text: "Il numero di neuroni enterici è di poco inferiore a quello della corteccia cerebrale.", answer: true },
    { text: "Il tubo gastroenterico può mantenere peristalsi anche se denervato esternamente.", answer: true },
    { text: "Il sistema parasimpatico è chiamato anche metasimpatico.", answer: false },
    { text: "Il tessuto muscolare liscio è innervato da fibre del sistema nervoso autonomo.", answer: true },
    { text: "Le fibre muscolari lisce presentano striature trasversali analoghe a quelle scheletriche.", answer: false },
    { text: "Nel cuore esistono cardiomiociti specializzati che fungono da pacemaker e vie di conduzione.", answer: true },
    { text: "Lo scheletro appendicolare comprende cranio, colonna e gabbia toracica.", answer: false },
    { text: "Nelle ossa piatte il diploe è compreso tra due strati di osso compatto.", answer: true },
    { text: "Le ossa lunghe presentano due epifisi e una diafisi centrale.", answer: true },
    { text: "Il tessuto osseo compatto occupa la parte più interna dell’osso lungo.", answer: false },
    { text: "Le arterie ombelicali fetali trasportano sangue povero di O₂ verso la placenta.", answer: true },
    { text: "Alla nascita il dotto arterioso di Botallo va incontro a chiusura funzionale.", answer: true },
    { text: "Il forame ovale fetale consente il passaggio di sangue dall’atrio destro al sinistro.", answer: true },
    { text: "Dopo la nascita il forame ovale si trasforma nel legamento rotondo del fegato.", answer: false },
    { text: "L’epinevrio è la guaina connettivale più esterna che riveste l’intero nervo.", answer: true },
    { text: "Il perinevrio interno contiene i vasa nervorum.", answer: true },
    { text: "L’endonevrio avvolge fasci multipli di fibre nervose.", answer: false },
    { text: "La componente esocrina del pancreas secerne enzimi digestivi e soluzioni tampone alcaline.", answer: true },
    { text: "Il dotto pancreatico principale di Wirsung sbocca direttamente nel duodeno.", answer: true },
    { text: "Gli isolotti di Langerhans sono raggruppamenti di lobuli esocrini.", answer: false },
    { text: "Il sistema respiratorio contribuisce al controllo del pH dei fluidi corporei.", answer: true },
    { text: "L’epitelio della porzione inferiore della faringe è pavimentoso stratificato.", answer: true },
    { text: "I bronchioli terminali appartengono ancora alla porzione di conduzione delle vie aeree.", answer: true },
    { text: "Il sistema limbico comprende il giro cingolo e l’amigdala.", answer: true },
    { text: "Il corpo striato è formato da nucleo caudato e putamen.", answer: true },
    { text: "Il claustro è laterale al corpo striato e mediale alla corteccia dell’insula.", answer: true },
    { text: "L’amigdala è situata nel lobo occipitale.", answer: false },
    { text: "L’area di Broca (44-45) è deputata alla produzione del linguaggio.", answer: true },
    { text: "Il fascicolo arcuato connette l’area di Wernicke con l’area di Broca.", answer: true },
    { text: "Negli individui destrimani la dominanza emisferica per il linguaggio è normalmente a destra.", answer: false },
    { text: "Il giro cingolo circonda il corpo calloso ed è parte del sistema limbico.", answer: true },
    { text: "Negli homunculi corticali la grandezza di ogni regione riflette la densità di innervazione, non le dimensioni fisiche.", answer: true },
    { text: "Nella corteccia somatosensoriale i neuroni del piede sono adiacenti a quelli della mano.", answer: false }],
  "ProvaFinale":[    { text: "Il citoplasma è la porzione del protoplasma compresa tra membrana plasmatica e nucleo.", answer: true },
    { text: "I lisosomi sono organelli delimitati da doppia membrana identica a quella mitocondriale.", answer: false },
    { text: "La cartilagine elastica è costituita prevalentemente da fibre collagene di tipo I.", answer: false },
    { text: "La cartilagine articolare è priva di pericondrio.", answer: true },
    { text: "Il piano trasversale separa il corpo in porzioni craniale e caudale.", answer: true },
    { text: "Nelle vertebre cervicali tipiche i forami nei processi trasversi permettono il passaggio delle arterie vertebrali.", answer: true },
    { text: "Il legamento coraco-clavicolare è formato da due fasci, conoide e trapezoide.", answer: true },
    { text: "La cavità glenoidea della scapola si articola con il capitello del radio.", answer: false },
    { text: "I menischi del ginocchio sono costituiti da fibrocartilagine.", answer: true },
    { text: "Il legamento crociato anteriore impedisce alla tibia di traslare posteriormente rispetto al femore.", answer: false },
    { text: "Il muscolo grande gluteo è più superficiale del medio gluteo.", answer: true },
    { text: "Il muscolo brachiale si inserisce sulla tuberosità dell’ulna e flette l’avambraccio.", answer: true },
    { text: "Il bicipite brachiale si inserisce sulla tuberosità radiale.", answer: true },
    { text: "Il nervo tibiale innerva l’intero compartimento posteriore della gamba, incluso il tricipite della sura.", answer: true },
    { text: "Il legamento deltoideo origina dal malleolo mediale.", answer: true },
    { text: "Le fibre dell’emiretina temporale decussano nel chiasma ottico.", answer: false },
    { text: "L’area visiva primaria corrisponde all’area 17 di Brodmann, intorno alla scissura calcarina.", answer: true },
    { text: "La cornea è riccamente vascolarizzata.", answer: false },
    { text: "Il lobo medio polmonare è presente soltanto a sinistra.", answer: false },
    { text: "L’attivazione parasimpatica provoca broncocostrizione dei bronchioli.", answer: true },
    { text: "Il ventricolo sinistro possiede pareti più spesse del destro.", answer: true },
    { text: "Durante la sistole ventricolare le valvole semilunari sono aperte.", answer: true },
    { text: "Dopo la nascita il dotto arterioso di Botallo si trasforma nel legamento arterioso.", answer: true },
    { text: "Il fegato è un organo intraperitoneale ancorato dal legamento falciforme.", answer: true },
    { text: "I nefroni iuxtamidollari possiedono anse di Henle più lunghe di quelle dei nefroni corticali.", answer: true },
    { text: "L’ADH riduce la permeabilità dei dotti collettori all’acqua.", answer: false },
    { text: "Lo sfintere uretrale interno è formato da muscolatura liscia.", answer: true },
    { text: "La parte endocrina del pancreas è costituita dagli isolotti di Langerhans che secernono insulina e glucagone.", answer: true },
    { text: "Il sistema nervoso enterico può mantenere la peristalsi anche in assenza di input extrinseci.", answer: true },
    { text: "Il plesso sottomucoso di Meissner si trova tra gli strati della muscolatura liscia intestinale.", answer: false },
    { text: "Il muscolo tensore della fascia lata, tramite la benderella ileotibiale, contribuisce all’estensione del ginocchio.", answer: true },
    { text: "La cuffia dei rotatori è formata dai tendini di sovraspinato, infraspinato, piccolo rotondo e sottoscapolare.", answer: true },
    { text: "Le sinapsi asimmetriche sono generalmente eccitatorie.", answer: true },
    { text: "La quantità di sostanza bianca nel midollo spinale diminuisce procedendo cranio-caudalmente.", answer: true },
    { text: "Le arterie vertebrali derivano direttamente dalle carotidi comuni.", answer: false },
    { text: "Il muscolo popliteo appartiene al compartimento posteriore profondo della gamba e flette medialmente il ginocchio.", answer: true },
    { text: "La membrana respiratoria alveolo-capillare è spessa circa 0,5 µm per favorire la diffusione dei gas.", answer: true },
    { text: "L’osso ioide si articola con la cartilagine tiroidea tramite una sincondrosi.", answer: false },
    { text: "Il tessuto adiposo bruno è metabolicamente meno attivo di quello bianco.", answer: false },
    { text: "Il sistema limbico comprende ippocampo, amigdala, giro cingolo e corpi mammillari.", answer: true }]
};

/* =========================================================================
   Variabili & costanti
   ========================================================================= */
let currentQuizKey=null,currentQuestions=[],currentIndex=0,correctAnswers=0;
let timerInterval=null;
const FINAL_DURATION=1500; // 25 min
let timeLeft=FINAL_DURATION;

/* =========================================================================
   Riferimenti DOM
   ========================================================================= */
const homeSection   =document.getElementById("home");
const quizListDiv   =document.getElementById("quiz-list");

const quizSection   =document.getElementById("quiz-container");
const quizTitle     =document.getElementById("quiz-title");
const timerBox      =document.getElementById("timer");
const questionBox   =document.getElementById("question-box");
const questionText  =document.getElementById("question-text");
const trueBtn       =document.getElementById("true-btn");
const falseBtn      =document.getElementById("false-btn");
const feedbackEl    =document.getElementById("feedback");
const nextBtn       =document.getElementById("next-btn");
const quitBtn       =document.getElementById("quit-btn");

const resultSection =document.getElementById("result-container");
const resultText    =document.getElementById("result-text");
const homeBtn       =document.getElementById("home-btn");

/* =========================================================================
   Inizializzazione
   ========================================================================= */
document.addEventListener("DOMContentLoaded",()=>{
  buildQuizButtons();
  trueBtn .addEventListener("click",()=>handleAnswer(true));
  falseBtn.addEventListener("click",()=>handleAnswer(false));
  nextBtn .addEventListener("click",nextQuestion);
  homeBtn.addEventListener("click",returnHome);
  quitBtn.addEventListener("click",returnHome);
});

/* ------------------ Pulsanti Home ------------------ */
function buildQuizButtons(){
  Object.keys(quizzes).forEach(key=>{
    const btn=document.createElement("button");
    btn.className="primary-btn";
    btn.textContent=key==="ProvaFinale"?"PROVA FINALE":`Quiz: Pagine ${key}`;
    btn.addEventListener("click",()=>startQuiz(key));
    quizListDiv.appendChild(btn);
  });
}

/* ------------------ Avvio quiz ------------------ */
function startQuiz(key){
  currentQuizKey=key;
  currentQuestions=[...quizzes[key]];
  currentIndex=0;correctAnswers=0;
  feedbackEl.textContent="";nextBtn.classList.add("hidden");

  quizTitle.textContent=key==="ProvaFinale"?"PROVA FINALE":`Quiz Pagine ${key}`;

  // Tema sobrio per la Prova Finale
  document.documentElement.classList.toggle("final-mode",key==="ProvaFinale");

  if(key==="ProvaFinale"){
    timerBox.classList.remove("hidden");
    quitBtn.classList.add("hidden");
    timeLeft=FINAL_DURATION;
    updateTimerDisplay();
    timerInterval=setInterval(countDown,1000);
  }else{
    timerBox.classList.add("hidden");
    quitBtn.classList.remove("hidden");
  }

  homeSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");

  renderQuestion();
}

/* ------------------ Rendering ------------------ */
function renderQuestion(){
  if(currentIndex>=currentQuestions.length){endQuiz();return;}

  const q=currentQuestions[currentIndex];
  questionText.textContent=`Domanda ${currentIndex+1} / ${currentQuestions.length}\n\n${q.text}`;

  // animazione fade
  questionBox.style.animation="none";
  // forzare reflow
  void questionBox.offsetWidth;
  questionBox.style.animation="fade .25s ease-out";

  feedbackEl.className="feedback";
  feedbackEl.textContent="";
  nextBtn.classList.add("hidden");
  trueBtn.disabled=false;
  falseBtn.disabled=false;
}

/* ------------------ Risposta ------------------ */
function handleAnswer(choice){
  const isCorrect=currentQuestions[currentIndex].answer===choice;
  if(isCorrect){
    correctAnswers++;
    feedbackEl.textContent="Corretto!";
    feedbackEl.classList.add("correct");
  }else{
    feedbackEl.textContent="Sbagliato!";
    feedbackEl.classList.add("wrong");
  }
  trueBtn.disabled=falseBtn.disabled=true;
  nextBtn.classList.remove("hidden");
}

/* ------------------ Avanti ------------------ */
function nextQuestion(){currentIndex++;renderQuestion();}

/* ------------------ Fine quiz ------------------ */
function endQuiz(){
  clearInterval(timerInterval);
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultText.textContent=`Hai risposto correttamente a ${correctAnswers} su ${currentQuestions.length} domande.`;
}

/* ------------------ Torna Home ------------------ */
function returnHome(){
  clearInterval(timerInterval);
  quizSection .classList.add("hidden");
  resultSection.classList.add("hidden");
  homeSection  .classList.remove("hidden");
  document.documentElement.classList.remove("final-mode");
}

/* ------------------ Timer ------------------ */
function countDown(){
  timeLeft--;
  updateTimerDisplay();
  if(timeLeft<=0){
    feedbackEl.textContent="Tempo scaduto! Quiz chiuso.";
    trueBtn.disabled=falseBtn.disabled=true;
    nextBtn.classList.add("hidden");
    clearInterval(timerInterval);
    setTimeout(endQuiz,1500);
  }
}
function updateTimerDisplay(){
  const m=String(Math.floor(timeLeft/60)).padStart(2,"0");
  const s=String(timeLeft%60).padStart(2,"0");
  timerBox.textContent=`${m}:${s}`;
}
