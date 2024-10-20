const slowka = document.querySelector("#slowka");
const cwiczenia = document.querySelector("#cwiczenia");
const test = document.querySelector("#test");
const slownictwo = document.querySelector("#slownictwo");
const problematyczne = document.querySelector("#problematyczne");
const trudne = document.querySelector("#trudne");
const pole = document.querySelector("#pole");
const wyswietlacz = document.querySelector("#wyswietlacz");
const informacja = document.querySelector("#informacja");
const slowo = document.querySelector("#slowo");
const pozostalo = document.querySelector("#pozostalo");
const wpisano = document.querySelector("#wpisano");
const blok = document.querySelector("#blok");
const sprawdzian = document.querySelector("#sprawdzian");

/*
let angielskie = ['address', 'email', 'postal', 'age', 'birth', 'date of birth', 'place of birth', 'citizen', 'divorced', 'family name', 'female', 'first name', 'ID', 'ID number', 'male', 'marital status', 'married', 'mobile phone number', 'nationality', 'occupation', 'passport number', 'sex', 'single', 'surname', 'widow', 'widower', 'adolescent', 'adult', 'age group', 'at the age of', 'baby', 'child', 'childhood', 'dead', 'death', 'elderly', 'generation', 'grow older', 'grow up', 'grown-up', 'in his early twenties', 'in his late thirties', 'in his mid-fifties', 'infant', 'kid', 'middle age', 'middle-aged', 'old age', 'over twenty', 'teenager', 'young', 'youth', 'attractive', 'beautiful', 'good-looking', 'plain', 'pretty', 'foot', 'inch', 'of medium height', 'short', 'tall', 'athletic build', 'broad shoulders', 'overweight', 'plump', 'skinny', 'slim', 'thin', 'well-built', 'beard', 'cheek', 'pale cheeks', 'chin', 'complexion', 'rosy complexion', 'tanned complexion', 'dark circles under your eyes', 'eyebrow', 'eyelash', 'forehead', 'freckles', 'lip', 'full lips', 'lower lip', 'top lip', 'lovely smile', 'moustache', 'mouth', 'tongue', 'tooth', 'teeth', 'wrinkles', 'bald', 'curly', 'dyed', 'fair', 'fringe', 'go bald', 'grey', 'ponytail', 'shiny', 'short', 'shoulder-lenght', 'spiky', 'straight', 'waist-length', 'wavy', 'white', 'look', 'looks', 'put on weight', 'tattoo', 'blouse', 'bra', 'button', 'coat', 'dress', 'dress code', 'fleece', 'hood', 'jacket', 'jeans', 'jumper', 'label'
,'outfit', 'pocket', 'pyjamas', 'shirt' ,'skirt', 'sleeve', 'sock', 'suit', 'sweater', 'sweatshirt', 'tie', 'tights', 'tracksuit', 'bottoms', 'trousers', 'underpants', 'underwear', 'uniform', 'zip', 'baseball cap', 'belt', 'boots', 'snow boots', 'bracelet', 'briefcase', 'earrings', 'flat shoes', 'glasses', 'gloves', 'handbag', 'hat','high heels', 'jewellery', 'necklace', 'piercing', 'sandals', 'scarf', 'sunglasses', 'prescription sunglasses', 'trainers',
'casual', 'checked', 'comfortable', 'uncomfortable', 'cotton', 'denim', 'designer', 'elegant', 'fashionable', 'unfashionable', 'floral', 'formal', 'informal', 'good quality', 'in good condition', 'khaki', 'leather', 'loose', 'old-fashioned', 'patterned', 'poor quality', 'second-hand', 'smart', 'silk', 'straight leg', 'stunning', 'tight', 'trendy', 'ugly', 'warm', 'dress', 'dress up as sb', 'fit', 'get a haircut', 'get changed', 'get dressed', 'iron a shirt', 'match', 'polish shoes', 'put on', 'put on make up', 'suit', 'take off', 'try on', 'wear', 'aggressive', 'ambitious', 'arrogant', 'artistic', 'bossy',
'brave', 'bright', 'calm', 'careful', 'careless', 'caring', 'cheerful', 'clever', 'cold', 'confident', 'cruel', 'disciplined', 'dull', 'easy-going', 'friendly', 'unfriendly', 'funny', 'generous', 'gentle', 'hard-working', 'helpful', 'honest', 'impatient', 'independent', 'insecure', 'intelligent', 'kind', 'unkind', 'kind-hearted', 'lazy', 'lively', 'loyal', 'disloyal', 'mean', 'messy', 'modest', 'nasty', 'neat', 'ordinary', 'outgoing', 'peaceful', 'polite', 'impolite', 'quiet', 'relaxed', 'reliable', 'responsible', 'irresponsible', 'rude', 'selfish',
'sensible', 'sensitive', 'insensitive', 'serious', 'shallow', 'shy', 'sociable', 'unsociable', 'stubborn', 'talkative', 'tolerant', 'intolerant', 'untidy', 'violent', 'wise', 'annoyed', 'annoying', 'bored', 'boring', 'depressed', 'depressing', 'disappointed', 'disappointing', 'embarrassed', 'embarrassing', 'excited', 'exciting', 'frightened', 'frightening', 'frustrated', 'frustrating', 'moved', 'moving', 'pleased', 'puzzled', 'stressed out', 'stressful', 'surprised', 'surprising', 'worried', 'worrying', 'be angry with sb', 'be in a bad mood', 'be in a good mood', 'be nervous about sth', 'be fed up with sb', 'change your mind', 'cheer up', 'feel like sth', 'have a bad day',
'have a good sense of humour', 'lose your temper', 'make up your mind', 'worry about sth', 'able to', 'unable to', 'adore', 'be an expert on sth', 'be bad at sth', 'be terrible at sth', 'be crazy about sth', 'be fond of sb', 'be good at sth', 'be interested in sth', 'be into sth', 'be keen on sth', "can't stand sb", 'come naturally to sb', 'competent', 'dislike', 'enjoy', 'gifted', 'skill', 'skilled', 'talented', 'belief', 'betray', 'change your mind', 'courage', 'faith', 'friendship', 'honesty', 'ideal', 'loyalty', 'moral standards', 'realise', 'self-respect', 'tolerance', 'treat sb the same way', 'truth', 'value system', 'wellness', 'have a positive impact', 'look down on sb', 'look up to sb', 'mentor', 'role model', 'respect', 'set an example'
];

let polskie = ['adres', 'adres email', 'adres pocztowy', 'wiek', 'narodziny', 'data urodzenia', 'miejsce urodzenia', 'obywatel', 'rozwiedziony', 'nazwisko (na f)', 'kobieta/żeński', 'imię', 'dokument tożsamości', 'numer dokumentu tożsamości', 'mężczyzna/męski', 'stan cywilny', 'żonaty;zamężna', 'numer telefonu komurkowego', 'narodowość', 'zawód', 'numer paszportu', 'płeć', 'stanu wolnego', 'nazwisko', 'wdowa', 'wdowiec',
'osoba w wieku dojrzewania', 'dorosły', 'grupa wiekowa', 'w wieku', 'niemowlę', 'dziecko', 'dzieciństwo', 'martwy', 'śmierć', 'w starszym wieku', 'pokolenie', 'starzeć się', 'dorastać', 'osoba dorosła', 'po dwudziestce (in)', 'przed czterdziestką', 'w wieku około pięćdziesięciu pięciu lat', 'małe dziecko', 'dzieciek', 'wiek średni', 'w średnim wieku', 'starość', 'po dwudziestce', 'nastolatek', 'młody', 'młodość', 'atrakcyjny', 'piękny', 'przystojny', 'przeciętny', 'ładny', 'stopa/m', 'cal', 'średniego wzrostu', 'niski', 'wysoki', 'sportowa sylwetka', 'szerokie ramiona', 'z nadwagą', 'puszysty', 'bardzo chudy', 'szczuply', 'chudy', 'dobrze zbudowany', 'broda', 'policzek', 'blade policzki', 'podbródek', 'cera', 'rumiana cera', 'opalona cera', 'podkrążone oczy', 'brew', 'rzęsa', 'czoło', 'piegi', 'warga', 'pełne usta', 'dolna warga', 'górna warga', 'uroczy uśmiech', 'wąsy', 'usta', 'język', 'ząb', 'zęby', 'zmarszczki', 'łysy', 'kręcone ', 'farbowane', 'jasne', 'grzywka', 'łysieć', 'siwa', 'kucyk', 'lśniące', 'krótkie', 'do ramion', 'sterczące', 'proste', 'do pasa', 'faliste', 'siwe', 'wyglądać', 'wygląd', 'przybierać na wadzę', 'tatuaż', 'bluzka', 'stanik', 'guzik', 'płaszcz', 'sukienka', 'zasady dotyczące ubioru', 'polar', 'kaputr', 'marynarka', 'dżinsy', 'sweter (j)', 'metka',
'strój', 'kieszeń', 'piżama', 'koszula', 'spódnica', 'rękaw', 'skarpetka', 'garnitur', 'sweter', 'bluza', 'krawat', 'rajstopy', 'dres', 'spodnie od dresu', 'spodnie', 'slipy', 'bielizna', 'mundur', 'zamek błyskawiczny', 'czapka z daszkiem', 'pasek', 'wysokie buty', 'śniegowce', 'bransoletka', 'teczka', 'kolczyki', 'buty na płaskim obcasie', 'okulary', 'rękawiczki', 'torebka', 'czapka', 'buty na wysokim obcasie', 'biżuteria', 'naszyjnik', 'kolczyk', 'sandały', 'szalik', 'okulary przeciwsłoneczne', 'korygujące okulary przeciwsłoneczne', "buty sportowe",
'nieformalny', 'w kratkę', 'wygodny', 'niwygodny', 'bawełniany', 'dżinsowy', 'markowy', 'elegancki', 'modny (f)', 'niemodny', 'kwiecisty', 'formalny', 'nieformalny', 'dobrej jakości', 'w dobrym stanie', 'w kolorze khaki', 'skórzany', 'luźny', 'staromodny', 'wzorzysty', 'złej jakości', 'używany', 'elegancki', 'jedwabny', 'o prostej nogawce', 'olśniewający', 'obcisły', 'modny', 'brzydki', 'ciepły', 'ubierać się', 'przebierać się za kogoś', 'posować pod względem rozmiaru', 'ostrzyc się', 'przebrać się', 'ubrać się', 'wyprasować koszulę', 'pasować pod względem koloru, wzoru', 'wypastować buty', 'zakładać (ubranie)', 'nakładać makijaż', 'pasować do stylu osoby', 'zdjąc z siebie (ubranie)', 'przymierzyć', 'nosić', 'agresywny', 'ambitny', 'arogancki', 'uzdolniony artystycznie', 'apodyktyczny',
'odważny', 'bystry', 'opanowany', 'ostrożny', 'nieostrożny', 'troskliw', 'radosny', 'zdolny', 'oschły', 'pewny siebie', 'okrutny', 'zdyscyplinowany', 'nieciekawy', 'wyluzowany', 'przyjazny', 'nieprzyjazny', 'zabawny', 'szczodry', 'łagodny', 'pracowidy', 'uczynny', 'uczciwy', 'niecierpliwy', 'niezależny', 'niepewny', 'inteligentny', 'miły', 'niemiły', 'dobrotliwy', 'leniwy', 'żywiołowy', 'lojalny', 'nielojalny', 'skąpy', 'nieporządny', 'skromny', 'wstrętny', 'staranny', 'zwykły', 'otwarty', 'spokojny', 'uprzejmy', 'nieuprzejmy', 'cichy', 'wyluzowany', 'godny zaufania', 'odpowiedzialny', 'nieodpowiedzialny', 'niegrzeczny', 'samolubny',
'rozdądny', 'wrażliwy', 'niewrażliwy', 'poważny', 'płytki', 'nieśmiały', 'towarzyski', 'nietowarzyski', 'uparty', 'gadatliwy', 'tolerancyjny', 'nietolerancyjny', 'nieporządny', 'agresywny', 'mądry', 'zirytowany', 'irytujący', 'znudzony', 'nudny', 'załamany', 'przygnębiający', 'rozczarowany', 'rozczarowujący', 'zawstydzony', 'wprawiający w zażenowanie', 'podekscytowany', 'ekscytujący', 'przerażony', 'przerażający', 'sfrustrowany', 'frustrujący', 'wzruszony', 'wzruszający', 'zadowolony', 'zaskoczony', 'zestresowany', 'stresujący', 'zdziwiony', 'zadziwiający', 'zmartwiony', 'martwiący', 'być złym na kogoś', 'być w złym nastroju', 'być w dobrym nastroju', 'denerwować się czymś', 'mieć kogoś dość', 'zmienić zdanie', 'rozweselić się', 'mieć na coś ochotę', 'mieć zły dzień',
'mieć poczucie humoru', 'stracić panowanie nad sobą', 'zdecydować się', 'martwić się czymś', 'zdolny do', 'niezdolny do', 'uwielbiać', 'być ekspertem w jakiejś dziedzinie', 'być w czymś zły', 'być w czymś kiepskim', 'szaleć za czymś', 'lubić kogoś', 'być w czymś dobrym', 'interesować się czymś (interested)', 'interesować się czymś', 'bardzo coś lubić', 'nie cierpieć kogoś', 'przychodzić komuś z łatwością', 'kompetentny', 'nie lubić', 'czerpać przyjemność', 'utalentowany', 'umiejętność', 'wykwalifikowany', 'utalentowany', 'przekonanie', 'zdradzić', 'zmienić zdanie', 'odwaga', 'wiara', 'przyjaźń', 'uczciwość', 'ideał', 'lojalność', 'standardy moralne', 'uświadomić sobie', 'szacunek do samego siebie', 'tolerancja', 'traktować kogoś tak samo', 'prawda', 'system wartośći', 'dobrostan', 'wpływać pozytywnie', 'patrzeć na kogoś z góry', 'podziwiać kogoś', 'mentor', 'wzór do naśladowania', 'szanować', 'dawać przykład',
];
*/
/*
const angielskie = [
    'brick', 'bush', 'ceiling', 'chimney', 'door', 'back door', 'front door', 'downstairs', 'fence', 'floor', 'first floor', 'ground floor', 'wooden floor', 'garden', 'front garden', 'rear garden', 'roof garden', 'vegetable garden', 'gate', 'iron', 'ladder', 'lawn', 'lift', 'pavement', 'porch', 'roof', 'security', 'solar panel', 'staircase', 'stairs', 'step', 'sun terrace', 'tree', 'fruit tree', 'upstairs', 'wall', 'window', 'windowsill', 'apartment', 'apartment block', 'block of flats', 'building', 'bungalow', 'castle', 'cottage', 'flat', 'houseboat', 'mansion', 'one-bedroom flat', 'semi-detached house', 'skyscraper', 'studio', 'terraced house', 'two-room flat', 'allotment', 'area', 'capital city', 'city', 'conveniently located', 'country', 'district', 'easy access to sth', 'home town', 'inhabitant', 'neighbour', 'neighbourhood', 'old town', 'parking space', 'resident', 'residential area', 'rural', 'slums', 'suburbs', 'tourist resort', 'town', 'tourist town', 'underground station', 'urban', 'village', 'across the street', 'at the top of a building', 'by the sea', 'go inside', 'in front of sth', 'in the city centre', 'in the countryside', 'in the suburbs', 'make yourself at home', 'next to sth', 'on the corner', 'on the first floor', 'on the top floor', 'opposite sth', 'within walking distance of sth', 'ancient', 'bright', 'comfortable', 'uncomfortable', 'cosy', 'empty', 'in bad condition', 'messy', 'modern', 'neat', 'old-fashioned', 'recently renovated', 'roomy', 'spacious', 'stylish', 'tidy', 'tiny', 'traditional', 'attic', 'balcony', 'basement', 'bathroom', 'bedroom', 'boiler room', 'cellar', 'corridor', 'games room', 'garage', 'underground garage', 'hall', 'kitchen', 'laundry room', 'living room', 'sitting room', 'study', 'toilet', 'blind', 'clock', 'curtain', 'net curtain', 'door handle', 'doorbell', 'doormat', 'electrical appliances', 'heater', 'light', 'light bulb', 'plant', 'house plant', 'vacuum cleaner', 'bath', 'mirror', 'pipe', 'shower', 'shower cabin', 'soap', 'tap', 'toilet seat', 'toothbrush', 'toothpaste', 'towel', 'washbasin', 'washing machine', 'bed', 'bunk bed', 'double bed', 'blanket', 'bookshelf', 'chair', 'desk', 'duvet', 'lamp', 'pillow', 'rug', 'sheet', 'shelf', 'wardrobe', 'fitted wardrobe', 'armchair', 'bookcase', 'carpet', 'CD player', 'coffee table', 'couch', 'cushion', 'dining table', 'fireplace', 'sofa', 'stereo', 'TV set', 'bowl', 'coffee maker', 'cooker', 'electric cooker', 'gas cooker', 'cup', 'cupboard', 'cutlery', 'dishwasher', 'fork', 'freezer', 'fridge', 'kettle', 'electric kettle', 'kitchen table', 'knife', 'microwave oven', 'mug', 'oven', 'pan', 'plate', 'pot', 'sink', 'spoon', 'teapot', 'toaster', 'be at home', 'be in', 'change a light bulb', 'clean the bathroom', 'clean the carpet', 'clean the floors', 'clean the windows', 'clear up the table', 'cook', 'do household jobs', 'do the cleaning', 'do the cooking', 'do the housework', 'do the ironing', 'do the shopping', 'do the washing', 'do the washing-up', 'draw the curtains', 'dry the dishes', 'dust the surfaces', 'empty the dishwasher', 'feed the cat', 'fix sth', 'fold the washing', 'get home', 'hang up the washing', 'iron clothes', 'leave the house', 'lie on the bed', 'load the dishwasher', 'lock the door', 'make the bed', 'make dinner', 'mend sth', 'mop the floor', 'mow the lawn', 'put away', 'roll down the blinds', 'see sb home', 'share the housework', 'stay in', 'stay out', 'switch on', 'switch off', 'take it in turns to do sth', 'take out the rubbish', 'take the dog for a walk', 'throw away', 'tidy your room', 'vacuum the carpet', 'wash clothes', 'wash the dishes', 'water the plants', 'accommodation', 'student accommodation', 'ad', 'amenities', 'bill', 'electricity bill', 'telephone bill', 'commute', 'en-suite bathroom', 'facilities', 'flatmate', 'for rent', 'for sale', 'fully fitted kitchen', 'furnished', 'unfurnished', 'house rules', 'per month', 'per week', 'private garden', 'public transport', 'reasonable price', 'redecorate a house', 'renovate a house', 'rent', 'roommate', 'spare room', 'to let', 'view', 'with a view of sth', 'can afford sth', 'exchange flats', 'find a place of your own', 'pay in advance', 'pay the bills', 'pay the rent', 'rent a flat', 'share a flat with sb', 'split the costs', 'carton', 'fall apart', 'fall down', 'house-warming party', 'knock down', 'makeover', 'move in', 'pack', 'unpack', 'permanent address', 'possessions', 'removal', 'secure', 'tape', 'temporary address', 'transfer'
];


const polskie = [
    'cegła', 'krzak', 'sufit', 'komin', 'drzwi', 'tylne drzwi', 'drzwi frontowe', 'na dole', 'płot', 'piętro', 'pierwsze piętro', 'parter', 'drewniana podłoga', 'ogród', 'ogród z przodu budynku', 'ogród z tyłu budynku', 'ogród na dachu', 'ogród warzywny', 'brama', 'żelazny', 'drabina', 'trawnik', 'winda', 'chodnik', 'ganek', 'dach', 'ochrona', 'panel słoneczny', 'klatka schodowa', 'schody', 'schodek', 'taras do opalania', 'drzewo', 'drzewo owocowe', 'na górze', 'ściana', 'okno', 'parapet', 'mieszkanie', 'blok mieszkalny', 'blok mieszkalny [na b]', 'budynek', 'bungalow', 'zamek', 'domek wiejski', 'mieszkanie [na f]', 'łódź mieszkalna', 'luksusowa rezydencja', 'mieszkanie z jedną sypialnią', 'dom bliźniak', 'drapacz chmur', 'kawalerka', 'dom szeregowy', 'mieszkanie dwupokojowe', 'działka', 'okolica', 'stolica', 'duże miasto', 'dogodnie położony', 'wieś', 'dzielnica', 'łatwy dostęp do czegoś', 'miasto rodzinne', 'mieszkaniec', 'sąsiad', 'okolica', 'starówka', 'miejsce parkingowe', 'mieszkaniec [na r]', 'dzielnica mieszkaniowa', 'wiejski', 'slumsy', 'przedmieścia', 'kurort', 'male miasto', 'miasto turystyczne', 'stacja metra', 'miejski', 'wieś', 'po drugiej stronie ulicy', 'na ostatnim piętrze', 'nad morzem', 'wejście do środka', 'przed czymś', 'w centrum miasta', 'na wsi', 'na przedmieściu', 'czuj się jak u siebie w domu', 'obok czegoś', 'na rogu', 'na pierwszym piętrze', 'na ostatnim piętrze', 'naprzeciwko czegoś', 'w bliskiej odległości od czegoś', 'starożytny', 'jasny', 'wygodny', 'niewygodny', 'przytulny', 'pusty', 'w złym stanie', 'nieuporządkowany', 'nowoczesny', 'schludny', 'staroświecki', 'niedawno odnowiony', 'przestronny', 'przestronny [na s]', 'stylowy', 'uporządkowany', 'malutki', 'tradycyjny', 'strych', 'balkon', 'piwnica', 'łazienka', 'sypialnia', 'kotłownia', 'piwnica [na c]', 'korytarz', 'pomieszczenie rekreacyjne', 'garaż', 'garaż podziemny', 'przedpokój', 'kuchnia', 'pralnia', 'pokój dzienny', 'pokój dzienny [na s]', 'gabinet', 'toaleta', 'roleta', 'zegar', 'zasłona', 'firanka', 'klamka', 'dzwonek', 'wycieraczka do butów', 'urządzenia elektryczne', 'grzejnik', 'światło', 'żarówka', 'roślina', 'roślina doniczkowa', 'odkurzacz', 'wanna', 'lustro', 'rura', 'prysznic', 'kabina prysznicowa', 'mydło', 'kran', 'deska sedesowa', 'szczoteczka do zębów', 'pasta do zębów', 'ręcznik', 'umywalka', 'pralka', 'łóżko', 'łóżko piętrowe', 'łóżko dwuosobowe', 'koc', 'półka na książki', 'krzesło', 'biurko', 'kołdra', 'lampa', 'poduszka', 'dywanik', 'prześcieradło', 'półka', 'szafa', 'szafa wnękowa', 'fotel', 'biblioteczka', 'dywan', 'odtwarzacz płyt CD', 'stolik kawowy', 'kanapa', 'poduszka dekoracyjna', 'stół jadalny', 'kominek', 'kanapa', 'sprzęt audio', 'telewizor', 'miska', 'ekspres do kawy', 'kuchenka', 'kuchenka elektryczna', 'kuchenka gazowa', 'filiżanka', 'szafka kuchenna', 'sztućce', 'zmywarka', 'widelec', 'zamrażarka', 'lodówka', 'czajnik', 'czajnik elektryczny', 'stół kuchenny', 'nóż', 'kuchenka mikrofalowa', 'kubek', 'piekarnik', 'rondel', 'talerz', 'garnek', 'zlew', 'łyżka', 'dzbanek do herbaty', 'toster', 'być w domu', 'być w domu [na b i i]', 'wymienić żarówkę', 'sprzątać łazienkę', 'czyścić dywan', 'myć podłogi', 'myć okna', 'sprzątać ze stołu', 'gotować', 'wykonywać prace domowe', 'sprzątać', 'gotować [z ing]', 'wykonywać prace domowe [housework]', 'prasować', 'robić zakupy', 'prać', 'myć naczynia', 'zaciągać załony', 'wycierać naczynia', 'ścierać kurze', 'wyjmować naczynia ze zmywarki', 'nakarmić kota', 'naprawić coś', 'składać pranie', 'dotrzeć do domu', 'wieszać pranie', 'prasować ubrania', 'wychodzić z domu', 'leżeć na łóżku', 'napełnić zmywarkę', 'zamknąć drzwi na klucz', 'ścielić łóżko', 'ugotować obiad', 'naprawić coś [na m]', 'myć podłogę mopem', 'kosić trawę', 'odkładać na miejsce', 'spuścić rolety', 'odprowadzić kogoś do domu', 'szielić się pracami domowymi', 'zostać w domu', 'przebywać poza domem', 'włączyć', 'wyłączyć', 'robić coś na zmianę', 'wynosić śmieci', 'wyprowadzić psa na spacer', 'wyrzucać', 'posprzątać pokój', 'odkurzyć dywan', 'prać ubrania', 'myć naczynai', 'podlewać rośliny', 'zakwaterowanie', 'akademik', 'ogłoszenie', 'udogodnienia', 'rachunek', 'rachunek za prąd', 'rachunek za telefon', 'dojeżdżać do pracy', 'łazienka przy sypialni', 'udogodnienia [na f]', 'współlokator', 'do wynajęcia', 'na sprzedaż', 'w pełni wyposażona kuchnia', 'umeblowany', 'nieumeblowany', 'zasady panujące w domu', 'miesięcznie', 'tygodniowo', 'prywatny ogród', 'transport publiczny', 'rozsądna cena', 'odnowić dom', 'odnowić dom [na re]', 'czynsz', 'współlokator [na r]', 'pokój gościnny', 'do wynajęcia', 'widok', 'z widokiem na coś', 'móc sobie pozwolić na coś', 'zamienić się mieszkaniami', 'znaleźć swój kąt', 'płacić z góry', 'płacić rachunki', 'płacić czynsz', 'wynajmować mieszkanie', 'dzielić z kimś mieszkanie', 'dzieliś się kosztami', 'karton', 'rozpaść się', 'przewróciś się', 'parepetówka', 'burzyć', 'remont', 'wprowadzać się', 'pakować', 'rozpakować', 'ogłoszenie', 'przeprowadzka', 'zabezpieczyć', 'taśma', 'adres tymczasowy', 'przeprowadzka [na t]'
]; */

/*
const angielskie = ["marek", "arek", "czernica", "malina", "śliwa", "porzeczka"]
const polskie = ["marek", "arek", "czernica", "malina", "śliwa", "porzeczka"]*/
/*
const angielskie = [
    "be was were been",
    "become became become",
    "begin began begun",
    "break broke broken",
    "bring brought brought",
    "build built built",
    "burn burnt burnt",
    "buy bought bought",
    "catch caught caught",
    "choose chose chosen",
    "come came come",
    "cost cost cost",
    "cut cut cut",
    "dig dug dug",
    "do did done",
    "draw drew drawn",
    "dream dreamt dreamt",
    "drink drank drunk",
    "drive drove driven",
    "eat ate eaten",
    "fall fell fallen",
    "feed fed fed",
    "feel felt felt",
    "fight fought fought",
    "find found found",
    "fly flew flown",
    "forget forgot forgotten",
    "forgive forgave forgiven",
    "get got got",
    "give gave given",
    "go went gone",
    "grow grew grown",
    "have had had",
    "hear heard heard",
    "hide hid hidden",
    "hit hit hit",
    "hold held held",
    "hurt hurt hurt",
    "keep kept kept",
    "know knew known",
    "lead led led",
    "learn learnt learnt",
    "leave left left",
    "lend lent lent",
    "let let let",
    "lie lay lain",
    "light lit lit",
    "lose lost lost",
    "make made made",
    "mean meant meant",
    "meet met met",
    "pay paid paid",
    "put put put",
    "read read read",
    "ride rode ridden",
    "ring rang rung",
    "run ran run",
    "say said said",
    "see saw seen",
    "sell sold sold",
    "send sent sent",
    "set set set",
    "shine shone shone",
    "show showed shown",
    "shut shut shut",
    "sing sang sung",
    "sit sat sat",
    "sleep slept slept",
    "smell smelt smelt",
    "speak spoke spoken",
    "spend spent spent",
    "spill spilt spilt",
    "stand stood stood",
    "steal stole stolen",
    "swim swam swum",
    "take took taken",
    "teach taught taught",
    "tear tore torn",
    "tell told told",
    "think thought thought",
    "throw threw thrown",
    "understand understood understood",
    "wake woke woken",
    "wear wore worn",
    "win won won",
    "write wrote written"
  ];

  const polskie = [
    "być był było",
    "stać się stał się stało się",
    "zacząć zaczął zaczęła",
    "złamać złamał złamała",
    "przynieść przyniósł przyniosła",
    "budować zbudował zbudowała",
    "spalić spalił spaliła",
    "kupować kupił kupiła",
    "złapać złapał złapała",
    "wybrać wybrał wybrała",
    "przyjść przyszedł przyszła",
    "kosztować kosztował kosztowała",
    "ciąć  ciął cięła",
    "kopać kopał kopała",
    "zrobić zrobił zrobiła",
    "rysować rysował rysowała",
    "śnić śnił śniła",
    "pić pił piła",
    "prowadzić samochód prowadził samochód prowadziła samochód",
    "jeść jadł jadła",
    "upaść upadł upadła",
    "karmić karmił karmiła",
    "czuć czuł czuła",
    "walczyć walczył walczyła",
    "znaleźć znalazł znalazła",
    "lecieć leciał leciała",
    "zapomnieć zapomniał zapomniała",
    "wybaczyć wybaczył wybaczyła",
    "dostać dostał dostała",
    "dać dał dała",
    "iść poszedł poszła",
    "rosnąć rósł rosła",
    "mieć miał miała",
    "słyszeć słyszał słyszała",
    "chować chował chowała",
    "uderzyć uderzył uderzyła",
    "trzymać trzymał trzymała",
    "zranić zranił zraniła",
    "trzymać [na k]",
    "wiedzieć wiedział wiedziała",
    "prowadzić prowadził prowadziła",
    "uczyć się uczył się uczyła się",
    "opuścić opuścił opuściła",
    "pożyczyć komuś pożyczył komuś pożyczyła komuś",
    "pozwolić pozwolił pozwoliła",
    "leżeć leżał leżała",
    "zapalać zapalił zapaliła",
    "zgubić zgubił zgubiła",
    "zrobić zrobił zrobiła",
    "znaczyć znaczył znaczyła",
    "spotkać spotkał spotkała",
    "płacić zapłacił zapłaciła",
    "położyć położył położyła",
    "czytać czytał czytała",
    "jeździć na jeździł na jeździła na",
    "dzwonić dzwonił dzwoniła",
    "biegać biegał biegała",
    "powiedzieć powiedział powiedziała",
    "zobaczyć zobaczył zobaczyła",
    "sprzedać sprzedał sprzedała",
    "wysłać wysłał wysłała",
    "ustawić ustawił ustawiła",
    "świecić świecił świeciła",
    "pokazać pokazał pokazała",
    "zamknąć zamknął zamknęła",
    "śpiewać śpiewał śpiewała",
    "siedzieć siedział siedziała",
    "spać spał spała",
    "wąchać/pachnieć wąchał/pachniał wąchała/pachniała",
    "mówić mówił mówiła",
    "spędzać spędzał spędzała",
    "rozlać rozlał rozlała",
    "stać stał stała",
    "ukraść ukradł ukradła",
    "płynąć płynął płynęła",
    "wziąć wziął wzięła",
    "uczyć uczył uczyła",
    "podrzeć podrzeł podrazała",
    "powiedzieć powiedział powiedziała",
    "myśleć myślał myślała",
    "rzucać rzucał rzucała",
    "rozumieć rozumiał rozumiała",
    "obudzić się obudził się obudziła się",
    "nosić nosił nosiła",
    "wygrać wygrał wygrała",
    "pisać pisał pisała"
  ];*/
/*
const angielskie = ["canteen", "classroom", "computer room", "corridor", "gym", "head teacher's office", "laboratory", "library", "office", "playground", "playing field", "teachers' room", "Art", "Biology", "Chemistry", "Civics", "English Language and Literature", "foreign languages", "Geography", "History", "humanities", "Information and Communication Technology", "Mathematics", "Music", "Physical Education", "Physics", "Polish Language and Literature", "Religious Education", "Science", "science subjects", "attend", "attend a course", "attend classes", "attend school", "collaborate with sb", "concentrate", "concentration", "cooperate with sb", "copy answers from sb", "copy homework from sb", "discuss set books", "do a project", "do a task", "do an activity", "do an experiment", "do homework", "do well", "do your best", "expel sb from school", "find it impossible to do sth", "focus on sth", "go to school", "hand in homework", "have a break", "have lessons", "knowledge", "learn about sth", "learn by heart", "learn new skills", "learn sth", "make a good impression", "make a presentation", "make mistakes", "make progress", "memorise", "miss lessons", "motivate", "notes", "make notes", "participate in sth", "pay attention", "read maps", "report findings", "revision", "skip classes", "solve a problem", "study hard", "take lessons", "take part in sth", "teach a subject", "turn up late", "wipe the board", "work in groups", "write an essay", "achieve your aims", "advance", "advanced", "aim", "autonomous study", "complete a course", "develop", "develop a new skill", "development", "do scientific research", "do a course", "gain new qualifications", "goal", "improve", "improve your study skills", "improvement", "learning objective", "motivation", "lack in motivation", "motivation to learn", "motivator", "act as a motivator", "online education", "personal development", "professional life", "self-motivated learner", "set yourself a goal", "take an active role", "think flexibly", "training", "blackboard", "board", "board eraser", "calculator", "chalk", "coloured pencil", "copybook", "correction fluid", "coursebook", "crayons", "desk", "dictionary", "exercise book", "file", "folder", "highlighter", "interactive whiteboard", "locker", "notebook", "PE kit", "pen", "pencil", "pencil case", "sharpener", "binder", "row of desks", "rubber", "ruler", "school bag", "textbook", "whiteboard", "whiteboard marker", "workbook", "academic results", "academic standards", "credit", "exam paper", "exam results", "exam", "examine", "grade", "mark", "past exam paper", "school-leaving exam", "score", "university entrance exam", "written exam", "cheat in an exam", "take an exam", "do badly in an exam", "fail an exam", "get 10 points in a test", "get good marks", "grade an exam paper", "grade a test", "grade homework", "pass an exam", "prepare for an exam", "retake an exam", "revise for an exam", "study for an exam", "absence", "attendance", "blended learning", "break", "lunch break", "bullying", "class", "class register", "electronic class register", "take the class register", "compulsory", "deadline", "dyslexia", "dyslexic", "exchange student", "group work", "holiday", "learning difficulties", "lesson", "newcomer", "open day", "optional", "parent-teacher conference", "personalised education", "school trip", "school uniform", "school year", "set books", "strict rules", "student exchange programme", "term", "timetable", "troublemaker", "workshop", "written work", "classmate", "deputy head", "examiner", "form teacher", "head teacher", "instructor", "lecturer", "professor", "pupil", "schoolboy", "schoolgirl", "schoolmate", "secretary", "student", "teacher", "teaching staff", "tutor", "university student", "absent", "active", "cooperative", "uncooperative", "demanding", "fair", "unfair", "gifted", "hard-working", "imaginative", "motivated", "motivating", "passive", "present", "professional", "punctual", "strict", "talented", "weak", "club", "book club", "chess club", "drama club", "sports", "competition", "sports day", "academy", "college", "co-educational school", "comprehensive school", "elementary school", "fee-paying school", "grade six", "high school", "independent school", "junior high school", "nursery school", "primary school", "private school", "public school", "secondary school", "single-sex school", "state school", "university", "year six", "A levels", "Bachelor of Arts", "Bachelor of Science", "graduate", "Master of Arts", "Master of Science", "Doctor of Philosophy", "fresh out of uni", "get degree", "graduate from university", "have a diploma", "have degree in"];
const polskie = ["stołówka", "klasa", "pracownia komputerowa", "korytarz", "sala gimnastyczna", "gabinet dyrektorki", 
"pracownia naukowa", "biblioteka", "sekretariat", "plac zabaw", "boisko", "pokój nauczycielski", 
"plastyka", "biologia", "chemia", "WOS", "język angielski", "języki obce", "geografia", "historia", 
"przedmioty humanistyczne", "informatyka", "matematyka", "muzyka", "WF", "fizyka", "język polski", 
"religia", "nauki przyrodnicze", "przedmioty ścisłe", "uczęszczać", "uczęszczać na kurs", 
"uczęszczać na zajęcia", "chodzić do szkoły", "współpracować z kimś [col...]", "koncentrować się", 
"koncentracja", "współpracować z kimś [coo...]", "przepisywać odpowiedzi od kogoś", 
"przepisywać pracę domową od kogoś", "omawiać lektury", "robić projekt", "wykonywać zadanie", 
"robić ćwiczenie", "przeprowadzić eksperyment", "odrabiać pracę domową", "dobrze sobie radzić", 
"bardzo się starać", "wydaliś kogoś ze szkoły", "nie być w stanie czegoś zrobić", 
"skupiać się na czymś", "chodzić do szkoły", "oddawać pracę domową", "zrobić sobie przerwę", 
"mieć lekcje", "wiedza", "dowiadywać się o czymś", "uczyć się na pamięć [lea...]", 
"nabyć nowych umiejętności", "uczyć się czegoś", "zrobić dobre wrażenie", "zrobić prezentację", 
"robić błędy", "robić postępy", "ucyzć się na pamięć [mem...]", "opuszczać lekcje", "motywować", 
"notatki", "robić notatki", "brać w czymś udział", "uważać na lekcji", "czytać mapy", 
"przedstawiać wnioski", "powtórka", "opuszczać zajęcia", "rozwiązywać problemy", 
"uczyć się pilnie", "chodzić na lekcje", "brać w czymś udział", "nauczać", "spóźniać isę", 
"ścierać tablicę", "pracować w grupach", "pisać wypracowanie", "osiągać swoje cele", 
"rozwijać się [adv...]", "zaawansowany", "cel [a...]", "samodzielna nauka", "ukończyć kurs", 
"rozwijać się [dev...]", "rozwijać nową umiejętność", "rozwój", "przeprowadzać badania naukowe", 
"chodzić na kurs", "zdobyć nowe kwalifikacje", "cel [goa...]", "poprawić", 
"poprawić umiejętności uczenia się", "poprawa", "cel nauki", "motywacja", 
"mieć zbyt mało motywacji", "motywacja do nauki", "czynnik motywujący", 
"działać jako czynnik motywujący", "kształcenie na odległość", "rozwój osobisty", 
"życie zawodowe", "uczeń o silnej motywacji wewnętrznej", "wyznaczyć sobie cel", 
"brać aktywny udział", "myśleć elastycznie", "szkolenie", "tablica (czarna)", "tablica", 
"gąbka do tablicy", "kalkulator", "kreda", "kredka", "zeszyt", "korektor", "podręcznik", 
"kredki świecowe", "ławka", "słownik", "zeszyt ćwiczeń", "teczka na dokumenty", 
"teczka tekturowa", "zakreślacz", "tablica interaktywna", "szafka", "zeszyt", "strój gimnastyczny", 
"długopis", "ołówek", "piórnik", "temperówka", "segregator", "rząd ławek", "gumka", 
"linijka", "tornister", "podręcznik", "tablica", "pisak do tablicy", "zeszyt ćwiczeń", "wyniki w nauce", "poziom nauczania", 
"zaliczenie", "arkusz egzaminacyjny", "wyniki egzaminu", "egzamin", "przeegzaminować", 
"stopień", "ocena", "arkusz egzaminacyjny z ubiegłych lat", "egzamin końcowy", "wynik", 
"egzamin wstępny na uczelnię", "egzamin pisemny", "ściągać na egzaminie", 
"przystępować do egzaminu", "źle sobie poradzić na egzaminie", "oblać egzamin", 
"dostać 10 punktów z testu", "dostawać dobre oceny", "sprawdzać arkusz egzaminacyjny", 
"sprawdzać test", "sprawdzać pracę domową", "zdać egzamin", "przygotowywać się do egzaminu", 
"ponownie przystępować do egzaminu", "powtarzać do egzaminu", "uczyć się do egzaminu", 
"nieobecność", "obecność", "nouczanie hybrydowe", "przerwa", "przerwa na lunch", 
"prześladowanie", "lekcja", "dziennik lekcyjny", "dziennik elektroniczny", 
"sprawdzać listę obecności w dzienniku", "obowiązkowy", "termin wykonania pracy", 
"dysleksja", "dyslektyczny", "uczeń uczestniczący w wymianie", "praca w grupie", "wakacje", 
"trudności w nauce", "lekcja", "nowy uczeń", "dzień otwarty", "nieobowiązkowy", "wywiadówka", 
"nauczanie indywidualne", "wycieczka szkolna", "mundurek szkolny", "rok szkolny", 
"lektury szkolne", "surowe zasady", "wymiana uczniowska", "semestr", "plan lekcji", 
"osoba sprawiająca kłopoty", "warsztaty", "praca pisemna", "kolega z klasy", 
"wicedyrektor", "egzaminator", "wychowawca", "dyrektor szkoły", "instruktor", "wykładowca", 
"profesor", "uczeń [pup...]", "uczeń [sch...]", "uczennica", "kolega ze szkoły", "sekretarz", 
"uczeń [stu...]", "nauczyciel", "grono pedagogiczne", "korepetytor", "student uniwersytetu", 
"nieobecny", "aktywny", "chętny do współpracy", "niechętny do współpracy", "wymagający", "sprawiedliwy", "niesprawiedliwy", 
"utalentowany [gif...]", "pracowity", "obdarzony wyobraźnią", "zmotywowany", "motywujący", 
"bierny", "obecny", "profesjonalny", "punktualny", "surowy", "utalentowany [tal...]", "słaby", 
"kółko zainteresować", "klub książki", "kółko szachowe", "kółko teatralne", "SKS", 
"olimpiada przedmiotowa", "dzień sportu", "akademia", "szkoła wyższa", "szkoal koedukacyjna", 
"szkoła państwowa dla uczniów powyżej 11 roku życia", "szkoal podstawowa", "płatna szkoła", 
"szósta klasa [gra...]", "szkoła średnia [hig...]", "szkoła niepubliczna", "gimnazjum", 
"przedszkole", "podstawówka", "szkoła prywatna", "szkoła publiczna w USA a w WB prywatna", 
"szkoła średnia [sec...]", "szkoła tylko dla chłopców lub dziewcząt", "szkola publiczna", 
"uniwersytet", "szósta klasa [yea...]", "egzamin po szkole śkredniej (matura)", 
"licencjat (nauki humanistyczne)", "licencjat (nauki ścisłe)", "absolwent", 
"magister (nauki humanistyczne)", "magister (nauki ścisłe)", 
"doktor (nauki humanistyczne i ścisłe)", "świeżo po studiach", "otrzymać dyplom", 
"ukończyć studia uniwersyteckie", "mieć dyplom", "mieć stopień naukowy"];
*/
/*
const angielskie = ["advise","assist sb","be on duty","be open for business","care for sb/sth","coordinate","create","deal with sth","direct","do your job well","do physical work","do a training course","draft","employ","file documents","fill in","flexible working hours","give sb a call","give sb a hand","handle","inspect","instruct","keep watch","lecture","maintain","manage a team","operate","organise","patrol","represent","service","start your own business","take care of sth","take orders","take over duties from sb","trade","train","headquarters","military base","career","career choice","consider","interviewer","job","current job","job centre","job opportunity","lack of experience","letter of recommendation","occupation","personal details","profession","recruiter","role","short contract","training","work contract","apply for position","interview applicants","involve doing sth","recruit a new employee","get paid","give up your job","pay a salary/tax", "accountant", "actor", "actress", "app developer", "architect", "beautician", "builder", "bus driver", "carer", "careers adviser", "carpenter", "chef", "chemist", "civil servant", "cleaner", "computer programmer", "cook", "counsellor", "dentist", "director", "film director", "doctor", "economist", "electrician", "engineer", "farmer", "fashion designer", "firefighter", "flight attendant", "gardener", "hairdresser", "historian", "housewife", "house husband", "instructor", "driving instructor", "fitness instructor", "ski instructor", "interior designer", "inventor", "IT specialist", "journalist", "landscaper", "lawyer", "librarian", "lorry driver", "manager", "miner", "musician", "nurse", "office worker", "painter", "house painter", "pharmacist", "photographer", "pianist", "pilot", "plumber", "police officer", "politician", "postal worker", "psychologist", "receptionist", "sailor", "sales representative", "scientist", "secretary", "security guard", "shop assistant", "shopkeeper", "influencer", "surgeon", "taxi driver", "ticket inspector", "tour guide", "translator", "travel agent", "TV presenter", "vet", "vlogger", "waiter", "waitress", "website designer", "badly-paid", "challenging", "creative", "dull", "freelance", "full-time", "manual", "part-time", "permanent", "rewarding", "satisfying", "seasonal", "stressful", "temporary", "well-paid", "be at work", "be good at sth", "be in charge of sth/sb", "be part of a team", "be punctual", "be qualified", "be responsible for sb/sth", "be self-employed", "get promoted", "go on strike", "run your own business", "voluntary work", "work as", "work flexitime", "work for a company", "work for sb", "work freelance", "work from home", "work in a team", "work long hours", "work on sth", "work on your own", "work overtime", "work shifts", "work under pressure", "work with sb", "clinic", "company", "multinational company", "construction site", "dental practice", "department", "factory", "laboratory", "mine", "plant", "surgery", "workplace", "workshop", "apprentice", "boss", "colleague", "employee", "employer", "freelancer", "management", "member of staff", "team", "team member", "teamwork", "teleworker", "worker", "factory worker", "workmate", "babysitter", "cashier", "dog walker", "fruit picker", "kitchen help", "pizza delivery driver", "product demonstrator", "summer camp supervisor", "summer job", "applicant", "candidate", "suitable candidate", "curriculum vitae", "covering letter", "contract of employment", "experience", "five years' experience", "previous experience", "work experience", "job interview", "qualifications", "additional qualifications", "skills", "computer skills", "customer service", "language skills", "organisational skills", "people skills", "training", "apply for a job", "attach a CV", "enclose a CV", "fill in a form", "look for a job", "sign a contract", "hard work", "holiday", "bank holiday", "job satisfaction", "leave", "maternity leave", "paternity leave", "sick leave", "office politics", "out of work", "overworked", "retirement", "early retirement", "unemployed", "unemployment", "unemployment benefit", "working conditions", "working hours", "workload", "bonus", "earnings", "income", "minimum wage", "pay", "decent pay", "pay cut", "pay freeze", "pay rise", "pension", "profit", "salary", "tax", "tip", "wages", "be off sick", "be on maternity leave", "be on paternity leave", "be on sick leave", "do sth for a living", "earn", "earn a living", "earn minimum", "fire sb", "go bankrupt", "hand in your resignation", "leave your job", "lose your job", "make a living", "quit", "resign", "retire", "sack sb", "take a week's leave", "take a day off"]
const polskie = ["doradzać","pomagać komuś [ass...]","być na dyżurze","być czynnym (o sklepie)","dbać o kogoś/coś","koordynować","tworzyć","zajmować się czymś","zarządzać [dir...]","wykonywać dobrze swoją pracę","pracować fizycznie","odbyć szkolenie","przygotować szkic","zatrudniać","przechowywać dokumenty","wypełniać","elastyczne godziny pracy","dzwonić do kogoś","pomagać komuś [giv...]","zajmować się","sprawdzać/kontrolować","instruować","pilnować","wygłaszać wykład/pouczać","utrzymywać","zarządzać zespołem","obsługiwać","organizować","patrolować","reprezentować","serwisować","założyć własną firmę","dbać o coś","odbierać zamówienia","przejmować od kogoś obowiązki","handlować","szkolić","siedziba główna","baza wojskowa","kariera zawodowa","wybór kariery zawodowej","brać pod uwagę","osoba przeprowadzająca rozmowę kwalifikacyjną","praca [job...]","obecna praca","biuro pośrednictwa pracy","okazja zawodowa","brak doświadczenia","lict polecający","zawód [occ...]","dane osobowe","zawód (wymagający kwalifikacji)","osoba rekrutująca","stanowisko/zadanie","umowa krótkoterminowa","szkolenie","umowa o pracę [wor...]","ubiegać się o stanowisko","przeprowadzac rozmowę kwalifikacyjną z kandydatami","wymagać czegoś","rekrutować nowego pracownika","otrzymywać wypłatę","rzucić pracę","płacić pensję/podatek","księgowy/księgowa", "aktor", "aktorka", "autor aplikacji", "architekt", "kosmetyczka", "budowniczy", "kierowca autobusu", "opiekun [car...]", "doradca zawodowy", "stolarz", "szef [che...]", "farmaceuta [che...]", "urzędnik", "sprzątacz", "programista", "kucharz", "doradca", "dentysta", "dyrektor", "reżyser filmowy", "lekarz", "ekonomista", "elektryk", "inżynier", "rolnik", "projektant mody", "strażak", "steward", "ogrodnik", "fryzjer", "historyk", "osoba zajmująca się domem (babka)", "osoba zajmująca się domem (chłopak)", "instruktor", "instruktor jazdy", "instruktor fitness", "instruktor narciarstwa", "projektant wnętrz", "wynalazca", "informatyk", "dziennikarz", "architekt krajobrazu", "prawnik", "bibliotekarz", "kierowca ciężarówki", "menedżer/kierownik", "górnik", "muzyk", "pielęgniarz", "pracownik biurowy", "malarz", "malarz pokojowy", "farmaceuta [pha...]", "fotograf", "pianista", "pilot", "hydraulik", "policjant", "polityk", "listonosz", "psycholog", "recepcjonista", "marynarz", "przedstawiciel handlowy", "naukowiec", "sekretarz", "pracownik ochrony", "sprzedawca", "sklepikarz", "influencer", "chirurg", "taksówkarz", "kontroler biletów", "przewodnik", "tłumacz", "agent biura podróży", "prezenter telewizyjny", "weterynarz", "vlogger", "kelner", "kelnerka", "projektant stron internetowych", "źle płatny", "ambitny/pełen wyzwań", "twórczy", "nudny/nieciekawy", "na własny rachunek", "na pełen etat", "fizyczny", "w niepełnym wymiarze godzin", "stały", "satysfakcjonujący [re...]", "satysfakcjonujący [sa...]", "sezonowy", "stresujący", "tymczasowy", "dobrze płatny", "być w pracy", "być w czymś dobrym", "kierować czymś/kimś", "być częścią zespołu", "być punktualnym", "być wykwalifikowanym", "być odpowiedzialnym za kogoś/coś", "prowadzić działalność gospodarczą", "awansować", "rozpocząć strajk", "prowadzić własną firmę", "praca charytatywna", "pracować jako", "mieć elastyczne godziny pracy", "pracować w firmie", "pracować dla kogoś", "pracować na własny rachunek", "pracować z domu", "pracować w zespole", "pracować wiele godzin", "pracować nad czymś", "pracować samodzielnie", "pracować w nadgodzinach", "pracować na zmiany", "pracować pod presją", "pracować z kimś", "klinika", "firma", "firma międzynarodowa", "plac budowy", "gabinet stomatologiczny", "dział", "fabryka [fa...]", "laboratorium", "kopalnia", "fabryka [pl...]", "gabinet lekarski", "miejsce pracy", "warsztat", "praktykant", "szef [bos...]", "kolega z pracy [col...]", "pracownik", "pracodawca", "freelancer", "zarząd", "pracownik [me...]", "team", "członek zespołu", "praca zespołowa", "pracownik zdalny", "pracownik [wor...]", "pracownik fabryki", "kolega z pracy [wor...]", "opiekun [bab...]", "kasjer", "osoba wyprowadzająca psy", "osoba zbierająca owoce", "pomoc kuchenna", "dostawca pizzy", "host", "kierownik obozu wakacyjnego", "praca wakacyjna", "osoba starająca się o pracę", "kandydat" , "odpowiedni kandydat", "CV", "list przewodni", "umowa o pracę [con]", "doświadczenie", "pięcioletnie doświadczenie", "dotychczasowe doświadczenie", "doświadczenie zawodowe", "rozmowa kwalifikacyjna", "kwalifikacje", "dodatkowe kwalifikacje", "umiejętności", "umiejętność obsługi komputera", "umiejętności w zakresie obsługi klienta", "znajomość języka", "umiejętności organizacyjne", "zdolności interpersonalne", "szkolenie", "złożyć podanie o pracę", "załączyć życiorys [at...]", "załączyć życiorys [en...]", "wypełnić formularz", "szukać pracy", "podpisać umowę", "ciężka praca", "urlop [ho...]", "święto państwowe", "zadowolenie z pracy", "urlop/zwolnienie [le...]", "urlop macierzyński", "urlop ojcowski", "zwolnienie lekarskie", "polityka biurowa", "bezrobotny [out...]", "przepracowany", "emerytura", "wcześniejsza emerytura", "bezrobotny [une...]", "bezrobocie", "zasiłek dla bezrobotnych", "warunki pracy", "godziny pracy", "obciążenie pracą", "premia", "zarobki", "dochód", "płaca minimalna", "płaca", "przyzwoita płaca", "cięcie płac", "zamrożenie płac", "podwyżka wynagrodzenia", "emerytura", "zysk", "pensja", "podatek", "napiwek", "płaca", "być na zwolnieniu lekarskim [be of ...]", "być na urlopie macierzyńskim", "być na urlopie ojcowskim", "być na zwolnieniu lekarskim [be on ...]", "zarabiać na życie [do...]", "zarabiać", "zarabiać na życię", "zarabiać stawkę minimalną", "zwolnić kogoś z pracy [fi..]", "zbankrutować", "złożyć wypowiedzenie", "odejść z pracy", "stracić pracę", "zarabiać na życie [ma...]", "złożyć wypowiedzenie [qu..]", "złożyć wypowiedzenie [re...]", "odejść na emeryturę", "zwolnić kogoś z pracy [sa...]", "wziąć tydzień urlopu", "wziąć dzień wolny"];
*/
/*
const angielskie = ['ageing', 'be in your prime', 'be on your deathbed', 'minor', 'pass away', 'pensioner', 'toddler', 'turn eighteen', 'hoodie', 'joggers', 'loungewear', 'blend into the crowd', 'dress down', 'dress up', 'let out', 'roll up', 'slip on', 'stand out from the crowd', 'take in', 'throw on', 'turn up', 'wrap up', 'anger', 'disapproval', 'discomfort', 'impatience', 'indecision', 'insecurity', 'irritation', 'shyness', 'bang your fist on a table', 'blink', 'cross your legs', 'fold your arms', 'frown', 'glimpse', 'grind your teeth', 'purse your lips', 'raise your eyebrows', 'shrug your shoulders', 'tap your fingers on a table', 'wink at sb', 'be down in the dumps', 'be over the moon', 'cope with sth', 'face up to sth', 'get butterflies in your stomach', 'have a chip on your shoulder', 'lose control', 'appeal to sb', 'be familiar with sth', 'capable of doing sth', 'convinced of sth', 'disapprove of sth', 'grasp sth', 'have a go at sth', 'pride yourself is sth', 'regard sth as sth', 'take an interest in sth', 'take pride in sth', 'take risks', 'keep an eye on your goals', 'rebel against sth', 'self-esteem', 'approve of sb/sth', 'compromise', 'discriminate against sb', 'ethics', 'follow the rules', 'human rights', 'liberty', 'achievement', 'aspire to sth', 'philantropist', 'visionary', 'well-rounded', 'have sth in common with sb', 'relate to sb', 'set sb/sth apart', 'share values/views'];
const polskie = ['starzejęący się', 'być w kwiecie wieku', 'być na łożu X', 'osoba nieletnia', 'odejść', 'emeryt', 'kilkulatek', 'skońcyzć osiemnaście lat', 'bluza z kapturem', 'wygodne spodnie (np dresowe)', 'odzieżdomowa', 'wmieszać sięw tłum', 'ubrać się mniej formalnie niż zwykle', 'wystroić się bardziej formalnie niż zwykle', 'poszerzyć', 'podwinąć [rol]', 'wsunąć', 'wyróżniać się z tłumu', 'zwęcić', 'zarzucić na siebie', 'podwinąć', 'owinąć się', 'złość', 'dezaprobata', 'dyskomfort', 'zniecierpliwienie', 'niezdecydowanie', 'niepewność', 'irytacja', 'nieśmiałość', 'uderzyć pięścią w stół', 'mrugać powiekami', 'skrzyżować nogi', 'skrzyżować ramiona', 'zmarszczyć brwi', 'spojrzeć przelotnie', 'zgrzytać zębami', 'zacisnąć usta', 'unieść brwi (np ze zdumienia)', 'wzruszyć ramionami', 'bębnić palcami w stół', 'mrugnąć okiem do kogoś', 'być bardzo smutnym', 'nie posiadać się ze szczęścia', 'radzić sobie z czymś', 'stawiać czemuś czoło', 'mieć tremę', 'być przewrażliwionym', 'stracić panowanie nad sobą', 'podobaćsię', 'znać coś', 'zdolny do zrobiena czegoś', 'przekonany o czymś', 'nie pochwalać czegoś', 'rozumieć coś', 'spróbować coś zrobić', 'szczycić się czymś [pri]', 'uważać coś za coś', 'zainteeresować sięczymś', 'szczycić się czymś', 'podejmować ryzyko', 'koncentrować się na swoich celach', 'buntowaćsię przeciwko czemuś', 'poczucie własnej wartości', 'pochwalać kogoś/coś', 'kompromis', 'dyskryminować kogoś', 'moralność', 'przestrzegać zasad', 'prawa człowieka', 'wolność', 'osiągnięcie', 'dążyć do czegoś', 'filantrop', 'wizjoner', 'gruntownie wykształcony', 'mieć z kimś coś wspólnego', 'rozumieć kogoś', 'odróżniać kogoś/coś', 'podzielać poglądy'];
*/

const angielskie = ['aunt/auntie', 'brother', 'brother-in-law', 'cousin', 'dad/daddy', 'daughter', 'daughter-in-law', 'ex-husband/ex-wife', 'father', 'father-in-law', 'grandchildren', 'granddaughter', 'grandfather/grandad', 'grandmother/grandma', 'grandpa', 'grandparents', 'grandson', 'granny', 'great-grandchildren', 'great-granddaughter', 'great-grandfather', 'great-grandmother', 'great-grandparents', 'great-grandson', 'half-brother', 'half-sister', 'husband', 'mother', 'mother-in-law', 'mum/mummy', 'nephew', 'niece', 'only child', 'parents', 'parents-in-law', 'relative', 'sister', 'sister-in-law', 'single father/mother', 'single parent', 'son', 'son-in-law', 'twin brother/sister', 'twins', 'uncle', 'wife', 'be widowed', 'divorce', 'engaged', 'become/get engaged', 'engagement', 'get a divorce/divorced', 'get married to sb', 'honeymoon', 'marriage', 'married couple', 'marry sb', 'propose marriage', 'propose to sb', 'remarry', 'separation', 'stay single', 'wedding', 'be a strict parent', 'be expecting a child', 'be pregnant', 'care for sb', 'get pregnant', 'give birth to a child', 'grow out of sth', 'grow up', 'have a baby', 'look after sb', 'look alike', 'take care of sb', 'acquaintance', 'boyfriend', 'circle of friends', 'colleague', 'date', 'fascination', 'friend', 'best friend', 'close friend', 'family friend', 'girlfriend', 'love at first sight', 'mate', 'mutual', 'schoolmate', 'soulmate', 'ask sb out', 'be fond of sb', 'be in love (with sb)', 'be ready for a serious relationship', 'get along (well) with sb', 'get on well with sb', 'go out with sb', 'get together with sb', 'have sth/a lot in common with sb', 'look up to sb', 'love sb', 'make new friends', 'rely on sb', 'share interests', 'split up', 'start a relationship with sb', 'stay in touch with sb', 'babysit', 'cook a meal', 'daily routine', 'eat out', 'get dressed', 'get ready (for bed/school)', 'get the children to school', 'get up', 'go to bed (early/late)', 'go to school', 'go to work', 'have a coffee', 'have a meal', 'have breakfast', 'have dinner', 'have lunch', 'have supper', 'have tea', 'have/take a bath', 'have/take a nap', 'have/take a rest', 'have/take a shower', 'lie down', 'pick up the children from school', 'prepare a meal', 'take it in turns to do sth', 'take the children to school', 'take the dog for a walk', 'undress', 'wake up'];
const polskie = ['ciocia', 'brat', 'szwagier', 'kuzyn, kuzynka', 'tata, tatuś', 'córka', 'synowa', 'były mąż / była żona', 'ojciec', 'teść', 'wnuki', 'wnuczka', 'dziadek [gradnf]', 'babcia [grand]', 'dziadek [grandp]', 'dziadkowie', 'wnuk', 'babcia [gran]', 'prawnuki', 'prawnuczka', 'pradziadek', 'prababcia', 'pradziadkowie', 'prawnuk', 'brat przyrodni', 'siostra przyrodnia', 'mąż', 'matka', 'teściowa', 'mama, mamusia', 'siostrzeniec, bratanek', 'siostrzenica, bratanica', 'jedynak, jedynaczka', 'rodzice', 'teściowie [par]', 'krewny', 'siostra', 'szwagierka, bratowa', 'ojciec/matka samotnie wychowujący/wychowująca dziecko', 'rodzic samotnie wychowujący dziecko', 'syn', 'zięć', 'brat bliźniak/siostra bliźniaczka', 'bliźniaki', 'wujek, stryjek', 'żona', 'być wdową/wdowcem', 'rozwieść się; rozwód', 'zaręczony, zaręczona', 'zaręczyć się', 'zaręczyny', 'rozwieść się', 'poślubić kogoś [g]', 'miesiąc miodowy', 'małżeństwo (związek)', 'małżeństwo (para małżeńska)', 'poślubić kogoś [m]', 'oświadczyć się', 'oświadczyć się komuś', 'ponownie wyjść za mąż, ożenić się', 'separacja', 'pozostać w stanie wolnym', 'ślub, wesele', 'być surowym rodzicem', 'spodziewać się dziecka', 'być w ciąży', 'troszczyć się o kogoś', 'zajść w ciążę', 'urodzić dziecko [g]', 'wyrosnąć z czegoś', 'dorastać', 'urodzić dziecko [h]', 'opiekować się kimś [l]', 'wyglądać podobnie', 'opiekować się kimś [t]', 'znajomy, znajoma; znajomość', 'chłopak (sympatia)', 'grono przyjaciół', 'kolega, koleżanka z pracy', 'randka', 'fascynacja, zauroczenie', 'przyjaciel, przyjaciółka', 'najlepszy przyjaciel, najlepsza przyjaciółka', 'bliski przyjaciel, bliska przyjaciółka', 'przyjaciel/przyjaciółka rodziny', 'dziewczyna (sympatia)', 'miłość od pierwszego wejrzenia', 'kumpel, kumpelka', 'wzajemny', 'kolega, koleżanka ze szkoły', 'bratnia dusza', 'zaprosić kogoś na randkę', 'czuć do kogoś sympatię', 'być zakochanym (w kimś)', 'być gotowym na poważny związek', 'być z kimś w dobrych stosunkach', 'mieć z kimś dobre relacje', 'spotykać się z kimś', 'mieć z kimś coś/wiele wspólnego', 'podziwiać kogoś', 'kochać kogoś', 'zawierać nowe przyjaźnie', 'polegać na kimś', 'mieć podobne zainteresowania', 'rozstać się, rozejść się', 'wejść z kimś w związek', 'utrzymywać kontakt z kimś', 'umawiać się z kimś na randki [d]', 'opiekować się dzieckiem (kogoś innego)', 'ugotować posiłek', 'ustalony porządek dnia', 'jeść poza domem', 'ubierać się', 'szykować się (do snu/szkoły)', 'zaprowadzić/zawieźć dzieci do szkoły [g]', 'wstawać', 'kłaść się spać (wcześnie/późno)', 'iść do szkoły', 'iść do pracy', 'wypić kawę', 'zjeść posiłek', 'jeść śniadanie', 'jeść obiad', 'jeść lunch', 'jeść kolację', 'jeść podwieczorek; pić herbatę', 'brać kąpiel', 'zdrzemnąć się', 'odpoczywać', 'brać prysznic', 'położyć się', 'odebrać dzieci ze szkoły', 'przygotować posiłek', 'wykonywać coś na zmianę', 'zaprowadzić/zawieźć dzieci do szkoły [t]', 'wyprowadzić psa na spacer', 'rozbierać się', 'budzić się'];

const problematyczneAngielskie = [];
const problematycznePolskie = [];
  

let lista = "";
let listaProblematycznych = "";
let liczba = polskie.length + 1;
let punkty = 0;

pozostalo.innerText = polskie.length;
let otwarta = false;

function losoweSlowo() {
    liczba -= 1;
    return Math.floor(Math.random() * liczba);
}

sprawdzian.style.display = "none";
problematyczne.style.display = "none";
let losuj = losoweSlowo();
slowo.innerHTML = polskie[losuj];

slowka.addEventListener("click", () => {
    if (otwarta == false) {
        otwarta = true;
        for (let i = 0; i < polskie.length; i++) {
            lista += ("<b>"+polskie[i]+"</b>"+" - "+angielskie[i]+"<br/>")
        }
        slownictwo.innerHTML = lista;
    }
    else {
        slownictwo.style.display = "block";
    }
    blok.style.display = "none";
    sprawdzian.style.display = "none";
})

function pokazProblematyczne() {
    for (let i = 0; i < problematyczneAngielskie.length; i++) {
        listaProblematycznych += ("<b>"+problematycznePolskie[i]+"</b> - "+problematyczneAngielskie[i]+"<br/>");
    }
    blok.style.display = "none";
    problematyczne.style.display = "block";
    trudne.innerHTML = listaProblematycznych;
}

cwiczenia.addEventListener("click", () => {
    slownictwo.style.display = "none";
    sprawdzian.style.display = "none"
    blok.style.display = "block";
})

function przygotuj_test() {
    sprawdzian.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        const punkt = document.createElement("h4");
        punkt.innerText = polskie[losoweSlowo()];
        sprawdzian.appendChild(punkt);
        const wypelnij = document.createElement("input");
        sprawdzian.appendChild(wypelnij);
    }
    const przycisk = document.createElement("button");
    przycisk.addEventListener("click", () => {
        window.alert("To jeszcze nie działa, musisz sprawdzić test sam :)")
    })
    sprawdzian.appendChild(przycisk)
}

test.addEventListener("click", () => {
    slownictwo.style.display = "none";
    blok.style.display = "none";
    sprawdzian.style.display = "block"
    przygotuj_test();
})

pole.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (pole.value == angielskie[losuj]) {
            angielskie.splice(losuj, 1);
            polskie.splice(losuj, 1);
            losuj = losoweSlowo();
            pole.value = "";
            punkty++;
            wpisano.innerText = punkty;
            wyswietlacz.style.backgroundColor = "rgb(7, 155, 229)";
            informacja.style.color = "rgb(6, 107, 157)";
            informacja.innerText = "Correct!";
            slowo.innerText = polskie[losuj];
            pozostalo.innerText = polskie.length;
            sprawdz();
            if (polskie.length <= 0) {
                pokazProblematyczne();
            }
        } else {
            if (problematycznePolskie.includes(polskie[losuj])) {
                console.log(":D");
            }else {
                problematycznePolskie.push(polskie[losuj]);
                problematyczneAngielskie.push(angielskie[losuj]);
            }
            console.log(problematycznePolskie);
            console.log(problematyczneAngielskie);
            wyswietlacz.style.backgroundColor = "rgb(255, 79, 76)";
            informacja.style.color = "rgb(180, 20, 20)";
            informacja.innerText = angielskie[losuj];
            sprawdz();
        }
    }
})

function sprawdz() {
    setTimeout(() => {
        wyswietlacz.style.backgroundColor = "ghostwhite";
        informacja.innerText = "";
    }, 400)
}