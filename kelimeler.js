const wordDatabase = [
    {
        "id": 1,
        "word": "trifling",
        "turkish": "önemsiz",
        "synonyms": [
            "trivial",
            "unimportant",
            "insignificant"
        ],
        "antonyms": [
            "important",
            "significant"
        ],
        "sentence": "It was such a trifling sum of money to argue about!"
    },
    {
        "id": 2,
        "word": "abundant",
        "turkish": "bol, bereketli",
        "synonyms": [
            "plentiful",
            "in large quantities",
            "abounding",
            "teeming"
        ],
        "antonyms": [
            "scarce",
            "insufficient",
            "bare",
            "impoverished"
        ],
        "sentence": "Cheap consumer goods are abundant in this region."
    },
    {
        "id": 3,
        "word": "consecutive",
        "turkish": "art arda, birbirini takiben",
        "synonyms": [
            "successive",
            "sequential",
            "subsequent"
        ],
        "antonyms": [
            "discontinuous"
        ],
        "sentence": "This is the fifth consecutive weekend that I've spent working."
    },
    {
        "id": 4,
        "word": "deception",
        "turkish": "aldat(n)ma, hilekarlık, dolandırma.",
        "synonyms": [
            "deceiving",
            "dishonesty",
            "trickery"
        ],
        "antonyms": [
            "honesty"
        ],
        "sentence": "He was found guilty of obtaining money by deception."
    },
    {
        "id": 5,
        "word": "disperse",
        "turkish": "dağıtmak, dağılmak",
        "synonyms": [
            "scatter",
            "dispel",
            "diffuse"
        ],
        "antonyms": [
            "gather",
            "collect",
            "concentrate"
        ],
        "sentence": "Just after the rain came down the clouds started to disperse."
    },
    {
        "id": 6,
        "word": "exact",
        "turkish": "tam, kesin",
        "synonyms": [
            "correct",
            "precise",
            "definite"
        ],
        "antonyms": [
            "vague",
            "ambigious",
            "unclear"
        ],
        "sentence": "The exact time of the accident was 2.43 pm."
    },
    {
        "id": 7,
        "word": "formidable",
        "turkish": "sert, sağlam, yenilmez, dayanıklı",
        "synonyms": [
            "challenging",
            "difficult",
            "invincible"
        ],
        "antonyms": [
            "susceptible",
            "vulnerable",
            "fragile",
            "sensitive"
        ],
        "sentence": "The Ottoman Empire was a formidable opponent for other empires."
    },
    {
        "id": 8,
        "word": "graceful",
        "turkish": "hoş, çekici, zarif, nazik",
        "synonyms": [
            "attractive",
            "charming"
        ],
        "antonyms": [
            "awkward",
            "ugly"
        ],
        "sentence": "The player showed graceful movements."
    },
    {
        "id": 9,
        "word": "grasp",
        "turkish": "kapmak, algılamak, kavramak",
        "synonyms": [
            "snatch",
            "grab",
            "perceive"
        ],
        "antonyms": [
            "loose",
            "release"
        ],
        "sentence": "We must grasp every opportunity to strengthen economic ties with other countries."
    },
    {
        "id": 10,
        "word": "humid",
        "turkish": "nemli",
        "synonyms": [
            "damp",
            "moist",
            "wet"
        ],
        "antonyms": [
            "dry"
        ],
        "sentence": "New York is very hot and humid in the summer."
    },
    {
        "id": 11,
        "word": "indifferent to",
        "turkish": "ilgisiz, kayıtsız",
        "synonyms": [
            "uninterested"
        ],
        "antonyms": [
            "interested"
        ],
        "sentence": "Why don't you vote - how can you be so indifferent?"
    },
    {
        "id": 12,
        "word": "instill",
        "turkish": "aşılamak, yüklemek",
        "synonyms": [
            "fill",
            "inspire"
        ],
        "antonyms": [
            "extract",
            "empty"
        ],
        "sentence": "It is part of a teacher's job to instill confidence in his or her students."
    },
    {
        "id": 13,
        "word": "isolate",
        "turkish": "soyutlamak, ayırmak, (hastayı) tecrit etmek",
        "synonyms": [
            "seperate",
            "segregate"
        ],
        "antonyms": [
            "unify"
        ],
        "sentence": "Associate, unite"
    },
    {
        "id": 14,
        "word": "spoil",
        "turkish": "çürümek, bozulmak",
        "synonyms": [
            "decay",
            "rotten"
        ],
        "antonyms": [],
        "sentence": "The dessert will spoil if you don't keep it in the fridge."
    },
    {
        "id": 15,
        "word": "spontaneous",
        "turkish": "kendiliğinden olan, doğal",
        "synonyms": [
            "natural"
        ],
        "antonyms": [
            "artificial"
        ],
        "sentence": "His jokes seemed spontaneous, but were in fact carefully prepared beforehand."
    },
    {
        "id": 16,
        "word": "substantial",
        "turkish": "büyük, önemli",
        "synonyms": [
            "considerable",
            "extensive",
            "significant"
        ],
        "antonyms": [
            "minor",
            "trivial"
        ],
        "sentence": "She inherited a substantial fortune from her grandmother."
    },
    {
        "id": 17,
        "word": "precipitate",
        "turkish": "hızlandırmak, yağmak, çökmek",
        "synonyms": [
            "accelerate",
            "hasten"
        ],
        "antonyms": [
            "decelerate"
        ],
        "sentence": "An unexpected invasion would certainly precipitate a political crisis."
    },
    {
        "id": 18,
        "word": "quotation",
        "turkish": "alıntılama, alıntı yapma, aktarma",
        "synonyms": [
            "extract",
            "excerpt",
            "citation",
            "saying"
        ],
        "antonyms": [],
        "sentence": "At the beginning of the book, there is a quotation from A.Lincoln."
    },
    {
        "id": 19,
        "word": "realm",
        "turkish": "alan, saha, krallık, ülke, memleket",
        "synonyms": [
            "area",
            "region",
            "field"
        ],
        "antonyms": [],
        "sentence": "Her interests are in the realm of practical politics."
    },
    {
        "id": 20,
        "word": "legitimate",
        "turkish": "yasal, meşru",
        "synonyms": [
            "legal",
            "lawful"
        ],
        "antonyms": [
            "illegal",
            "illegitimate"
        ],
        "sentence": "The army must give power back to the legitimate government."
    },
    {
        "id": 21,
        "word": "relentlessly",
        "turkish": "acımasızca / sürekli olarak, dur durak bilmeden",
        "synonyms": [
            "continuously",
            "constantly"
        ],
        "antonyms": [
            "temporarily"
        ],
        "sentence": "She has campaigned relentlessly for her husband's release from prison."
    },
    {
        "id": 22,
        "word": "migration",
        "turkish": "göç",
        "synonyms": [
            "immigration",
            "movement"
        ],
        "antonyms": [
            "remain",
            "stay"
        ],
        "sentence": "There was a mass migration of poverty-struck farmers into the cities."
    },
    {
        "id": 23,
        "word": "nullify",
        "turkish": "iptal etmek, geçersiz kılmak",
        "synonyms": [
            "cancel",
            "annul",
            "invalidate",
            "abolish"
        ],
        "antonyms": [
            "enact",
            "legislate"
        ],
        "sentence": "The state death penalty law was nullified in 1977."
    },
    {
        "id": 24,
        "word": "obesity",
        "turkish": "aşırı şişmanlık, obezite",
        "synonyms": [
            "fatness",
            "plumpness"
        ],
        "antonyms": [],
        "sentence": "A diet that is high in fat can lead to obesity."
    },
    {
        "id": 25,
        "word": "poison",
        "turkish": "zehir",
        "synonyms": [
            "venom",
            "toxin"
        ],
        "antonyms": [],
        "sentence": "Her drink has been laced with a deadly poison."
    },
    {
        "id": 26,
        "word": "susceptible to",
        "turkish": "hassas, duyarlı, kolay mikrop kapabilen",
        "synonyms": [
            "sensitive",
            "vulnerable",
            "fragile"
        ],
        "antonyms": [
            "indiffirent",
            "formidable",
            "strong"
        ],
        "sentence": "These plants are particularly susceptible to frost."
    },
    {
        "id": 27,
        "word": "specify",
        "turkish": "belirlemek",
        "synonyms": [
            "identify",
            "state",
            "indicate"
        ],
        "antonyms": [],
        "sentence": "He said we should meet but didn't specify a time."
    },
    {
        "id": 28,
        "word": "supplant",
        "turkish": "yerini almak",
        "synonyms": [
            "take the place of sth"
        ],
        "antonyms": [
            "set off",
            "leave"
        ],
        "sentence": "In most offices, the typewriter has now been supplanted by the computer."
    },
    {
        "id": 29,
        "word": "hostile",
        "turkish": "düşmanca, saldırgan, -e karşı",
        "synonyms": [
            "unfriendly"
        ],
        "antonyms": [
            "friendly"
        ],
        "sentence": "I'm not hostile to the idea of such a change."
    },
    {
        "id": 30,
        "word": "dilate",
        "turkish": "genişlemek",
        "synonyms": [
            "expand",
            "enlarge"
        ],
        "antonyms": [
            "minimize",
            "compress"
        ],
        "sentence": "The pupils of the eyes dilate as darkness increases."
    },
    {
        "id": 31,
        "word": "deal",
        "turkish": "anlaşma, uzlaşma",
        "synonyms": [
            "agreement"
        ],
        "antonyms": [
            "disagreement"
        ],
        "sentence": "I'll make/do a deal with you - you wash the car and I'll let you use it tonight"
    },
    {
        "id": 32,
        "word": "decade",
        "turkish": "on yıl",
        "synonyms": [
            "a 10-year period"
        ],
        "antonyms": [],
        "sentence": "He has been living here for a decade."
    },
    {
        "id": 33,
        "word": "contempt",
        "turkish": "aşağılama, küçük görme, karşı gelme",
        "synonyms": [
            "abhorance",
            "disdain"
        ],
        "antonyms": [
            "respect",
            "admire"
        ],
        "sentence": "At school she had complete contempt for all her teachers."
    },
    {
        "id": 34,
        "word": "content with",
        "turkish": "hoşnut, memnun",
        "synonyms": [
            "satisfied",
            "pleased",
            "contended"
        ],
        "antonyms": [
            "dissatisfied"
        ],
        "sentence": "He seems fairly content with his life."
    },
    {
        "id": 35,
        "word": "punctual",
        "turkish": "dakik, tam vaktinde",
        "synonyms": [
            "on time",
            "prompt"
        ],
        "antonyms": [
            "belated"
        ],
        "sentence": "He's always punctual."
    },
    {
        "id": 36,
        "word": "adjourn",
        "turkish": "ertelemek, ara vermek, erteleme",
        "synonyms": [
            "postpone",
            "delay",
            "defer",
            "suspend"
        ],
        "antonyms": [
            "complete",
            "terminate"
        ],
        "sentence": "The meeting was adjourned until Tuesday."
    },
    {
        "id": 37,
        "word": "assign",
        "turkish": "ayırmak, tahsis etmek, görev vermek",
        "synonyms": [
            "allocate",
            "allot",
            "appoint"
        ],
        "antonyms": [],
        "sentence": "UN troops were assigned the task of rebuilding the hospital."
    },
    {
        "id": 38,
        "word": "track",
        "turkish": "takip etmek",
        "synonyms": [
            "follow",
            "trace"
        ],
        "antonyms": [],
        "sentence": "The military use radar satellites to track targets through clouds and at night."
    },
    {
        "id": 39,
        "word": "treasure",
        "turkish": "değer vermek",
        "synonyms": [
            "cherish",
            "value",
            "prize"
        ],
        "antonyms": [],
        "sentence": "This pen that my grandfather gave me is one of my most treasured possessions."
    },
    {
        "id": 40,
        "word": "threat",
        "turkish": "tehdit, korkutma, gözdağı, tehlike",
        "synonyms": [
            "menace"
        ],
        "antonyms": [],
        "sentence": "The threat of jail failed to deter him from petty crime."
    },
    {
        "id": 41,
        "word": "attach",
        "turkish": "bağlamak, iliştirmek",
        "synonyms": [
            "connect",
            "join",
            "fasten",
            "tie",
            "bind"
        ],
        "antonyms": [
            "detach"
        ],
        "sentence": "I attached a photo to my application form."
    },
    {
        "id": 42,
        "word": "attitude",
        "turkish": "tavır, tutum",
        "synonyms": [
            "manner",
            "stance",
            "posture"
        ],
        "antonyms": [],
        "sentence": "It's very difficult to change people's attitudes."
    },
    {
        "id": 43,
        "word": "apathy",
        "turkish": "ilgisizlik, umursamazlık",
        "synonyms": [
            "unconcern",
            "indifference",
            "insensibility"
        ],
        "antonyms": [
            "sensitiveness",
            "passion",
            "vehemence",
            "emotion",
            "interest"
        ],
        "sentence": "There is widespread apathy among students."
    },
    {
        "id": 44,
        "word": "annihilation",
        "turkish": "yok olma, yıkılma, yok etme",
        "synonyms": [
            "extermination",
            "eradication",
            "destruction"
        ],
        "antonyms": [
            "existence",
            "being"
        ],
        "sentence": "The annihilation of the city by the bomb will never be forgotten."
    },
    {
        "id": 45,
        "word": "consolidate",
        "turkish": "güçlendirmek, sağlamlaştırmak",
        "synonyms": [
            "strenghten",
            "fortify"
        ],
        "antonyms": [
            "weaken",
            "dissect"
        ],
        "sentence": "She hoped that marriage would consolidate their relationship."
    },
    {
        "id": 46,
        "word": "coerce",
        "turkish": "zorlamak",
        "synonyms": [
            "force",
            "compel"
        ],
        "antonyms": [],
        "sentence": "He is thought to be coerced into making a confession about the crime."
    },
    {
        "id": 47,
        "word": "compete with/against",
        "turkish": "yarışmak, mücadele içinde olmak",
        "synonyms": [
            "race"
        ],
        "antonyms": [
            "share",
            "participate"
        ],
        "sentence": "Kangaroos compete with sheep for sparse supplies of food and water."
    },
    {
        "id": 48,
        "word": "defect",
        "turkish": "kusur, eksiklik",
        "synonyms": [
            "fault",
            "error"
        ],
        "antonyms": [
            "perfection"
        ],
        "sentence": "There are so many defects in our education system."
    },
    {
        "id": 49,
        "word": "corresponding",
        "turkish": "denk, tekabül eden",
        "synonyms": [
            "equivalent",
            "matching",
            "parallel"
        ],
        "antonyms": [
            "irrelevant"
        ],
        "sentence": "As the course becomes more difficult, there's usually a corresponding drop in attendance."
    },
    {
        "id": 50,
        "word": "despise",
        "turkish": "aşağılamak, küçümsemek",
        "synonyms": [
            "look down on",
            "scorn",
            "dislike",
            "humiliate"
        ],
        "antonyms": [
            "appraise",
            "respect",
            "regard",
            "look up to"
        ],
        "sentence": "She despised him for the way he treated her sister."
    },
    {
        "id": 51,
        "word": "expend",
        "turkish": "harcamak, masraf yapmak",
        "synonyms": [
            "use up",
            "exhaust"
        ],
        "antonyms": [
            "conserve",
            "preserve"
        ],
        "sentence": "Governments expend a lot of resources on war."
    },
    {
        "id": 52,
        "word": "entitle",
        "turkish": "hak vermek, yetki vermek",
        "synonyms": [
            "warrant",
            "give right to"
        ],
        "antonyms": [
            "disable",
            "disqualify"
        ],
        "sentence": "Being unemployed entitles you to free medical treatment."
    },
    {
        "id": 53,
        "word": "erroneous",
        "turkish": "hatalı",
        "synonyms": [
            "incorrect",
            "wrong"
        ],
        "antonyms": [
            "perfect"
        ],
        "sentence": "They had an erroneous belief, which misled them."
    },
    {
        "id": 54,
        "word": "illustrate",
        "turkish": "örneklerle açıklamak",
        "synonyms": [
            "explain",
            "clarify"
        ],
        "antonyms": [
            "confuse",
            "mystify"
        ],
        "sentence": "The lecturer illustrated his point with a diagram on the blackboard."
    },
    {
        "id": 55,
        "word": "influx",
        "turkish": "akın etme, akış",
        "synonyms": [
            "flood",
            "arrival"
        ],
        "antonyms": [],
        "sentence": "Turkey is expecting an influx of several thousand refugees over the next few days."
    },
    {
        "id": 56,
        "word": "grumble",
        "turkish": "şikayet etmek, sızlanmak",
        "synonyms": [
            "complain"
        ],
        "antonyms": [
            "show gratitude"
        ],
        "sentence": "She spent the evening grumbling to me about her job."
    },
    {
        "id": 57,
        "word": "profound",
        "turkish": "derin, büyük",
        "synonyms": [
            "deep"
        ],
        "antonyms": [],
        "sentence": "His mother's death when he was aged six had a very profound effect on him."
    },
    {
        "id": 58,
        "word": "obligation",
        "turkish": "yükümlülük, zorunluluk",
        "synonyms": [
            "compulsion",
            "requirement"
        ],
        "antonyms": [],
        "sentence": "If you have not signed a contract, you are under no obligation to pay them any money."
    },
    {
        "id": 59,
        "word": "momentum",
        "turkish": "hız, ivme",
        "synonyms": [
            "speed",
            "velocity",
            "impetus"
        ],
        "antonyms": [],
        "sentence": "The spacecraft will fly round the Earth to gather momentum for its trip to Jupiter."
    },
    {
        "id": 60,
        "word": "menace",
        "turkish": "tehdit etmek",
        "synonyms": [
            "threaten"
        ],
        "antonyms": [],
        "sentence": "Hurricane Hugo menaced the US coast for a week."
    },
    {
        "id": 61,
        "word": "mature",
        "turkish": "olgun",
        "synonyms": [
            "developed",
            "full-grown"
        ],
        "antonyms": [
            "immature",
            "young",
            "juvenile"
        ],
        "sentence": "Mature male gorillas have silver-grey hairs on their backs."
    },
    {
        "id": 62,
        "word": "negotiate",
        "turkish": "görüşmek, pazarlık yapmak",
        "synonyms": [
            "discuss",
            "talk",
            "bargain"
        ],
        "antonyms": [],
        "sentence": "The government has refused to negotiate with the strikers."
    },
    {
        "id": 63,
        "word": "pose",
        "turkish": "yaratmak, oluşturmak",
        "synonyms": [
            "create"
        ],
        "antonyms": [],
        "sentence": "Nuclear weapons pose a threat to everyone."
    },
    {
        "id": 64,
        "word": "just",
        "turkish": "adil, haklı, yerinde, doğru",
        "synonyms": [
            "fair"
        ],
        "antonyms": [
            "unjust",
            "unlawful"
        ],
        "sentence": "The judge's sentence was perfectly just in the circumstances"
    },
    {
        "id": 65,
        "word": "gorgeous",
        "turkish": "büyüleyici, harika",
        "synonyms": [
            "impressive",
            "splendid"
        ],
        "antonyms": [
            "ugly"
        ],
        "sentence": "The bride looked gorgeous."
    },
    {
        "id": 66,
        "word": "incredible",
        "turkish": "inanılmaz",
        "synonyms": [
            "unbeliavable"
        ],
        "antonyms": [
            "believable"
        ],
        "sentence": "It seems incredible that no one foresaw the crisis."
    },
    {
        "id": 67,
        "word": "extremely",
        "turkish": "aşırı derecede, büyük ölçüde",
        "synonyms": [
            "enormously",
            "tremendously"
        ],
        "antonyms": [
            "tiny",
            "little"
        ],
        "sentence": "She's extremely beautiful."
    },
    {
        "id": 68,
        "word": "exaggerate",
        "turkish": "abartmak",
        "synonyms": [
            "overstate"
        ],
        "antonyms": [
            "understate",
            "minimize"
        ],
        "sentence": "I'm not exaggerating - it is the worst meal I've ever eaten in my life."
    },
    {
        "id": 69,
        "word": "exhaust",
        "turkish": "yormak, tüketmek",
        "synonyms": [
            "tire",
            "use up",
            "deplete"
        ],
        "antonyms": [
            "refresh",
            "invigorate"
        ],
        "sentence": "The long journey exhausted the children."
    },
    {
        "id": 70,
        "word": "discriminate",
        "turkish": "ayırdetmek, ayrımcılık yapmak",
        "synonyms": [
            "differentiate",
            "distinguish"
        ],
        "antonyms": [],
        "sentence": "She felt she had been discriminated against because of her age."
    },
    {
        "id": 71,
        "word": "dismiss",
        "turkish": "kovmak, -den çıkarmak",
        "synonyms": [
            "fire",
            "sack"
        ],
        "antonyms": [
            "employ",
            "recruit"
        ],
        "sentence": "He has been dismissed from his job, which made him angry."
    },
    {
        "id": 72,
        "word": "custody",
        "turkish": "nezaret, velayet",
        "synonyms": [
            "confinement",
            "jail"
        ],
        "antonyms": [
            "release"
        ],
        "sentence": "The mother got/received the custody of the child."
    },
    {
        "id": 73,
        "word": "common",
        "turkish": "ortak, yaygın",
        "synonyms": [
            "shared"
        ],
        "antonyms": [
            "private",
            "distinctive",
            "unusual"
        ],
        "sentence": "English has some features common to many languages."
    },
    {
        "id": 74,
        "word": "commerce",
        "turkish": "ticaret",
        "synonyms": [
            "trade",
            "traffic",
            "business",
            "exchange"
        ],
        "antonyms": [],
        "sentence": "The world of commerce and industry is improving day by day."
    },
    {
        "id": 75,
        "word": "ambition",
        "turkish": "hırs, istek, hedef, amaç",
        "synonyms": [
            "desire",
            "aspiration",
            "goal",
            "objective",
            "aim",
            "target"
        ],
        "antonyms": [
            "vain",
            "futile (adj)"
        ],
        "sentence": "He has already achieved his main ambition in life."
    },
    {
        "id": 76,
        "word": "absurd",
        "turkish": "saçma",
        "synonyms": [
            "highly unreasonable",
            "illogical",
            "ridiculous"
        ],
        "antonyms": [
            "reasonable",
            "logical",
            "sensible",
            "rational",
            "plausible"
        ],
        "sentence": "The belief that the earth is flat is absurd."
    },
    {
        "id": 77,
        "word": "absorb",
        "turkish": "emmek, içine çekmek.",
        "synonyms": [
            "take in",
            "suck up (liquid",
            "knowledge)",
            "soak up",
            "use up (time)"
        ],
        "antonyms": [
            "send out",
            "throw off",
            "emit",
            "disperse"
        ],
        "sentence": "Plants absorb carbon dioxide."
    },
    {
        "id": 78,
        "word": "apprehension",
        "turkish": "endişe, korku",
        "synonyms": [
            "anxiety",
            "fear",
            "dread",
            "concern"
        ],
        "antonyms": [
            "confidence",
            "braveness"
        ],
        "sentence": "It's normal to feel a little apprehension before starting a new job."
    },
    {
        "id": 79,
        "word": "assure",
        "turkish": "garanti vermek, temin etmek",
        "synonyms": [
            "ensure",
            "guarantee",
            "warrant",
            "promise"
        ],
        "antonyms": [
            "to raise doubt"
        ],
        "sentence": "The mechanic assured him that the car would be ready the next day."
    },
    {
        "id": 80,
        "word": "shortage",
        "turkish": "kıtlık, eksiklik",
        "synonyms": [
            "lack",
            "scarcity"
        ],
        "antonyms": [
            "plenty",
            "abundance"
        ],
        "sentence": "There's a shortage of food and shelter in the refugee camps."
    },
    {
        "id": 81,
        "word": "tempt",
        "turkish": "cezbetmek, baştan çıkarmak",
        "synonyms": [
            "allure",
            "appeal"
        ],
        "antonyms": [
            "repel",
            "dissuade"
        ],
        "sentence": "The offer of a free car stereo tempted her into buying a new car."
    },
    {
        "id": 82,
        "word": "ultimate",
        "turkish": "son, nihai",
        "synonyms": [
            "eventual",
            "final"
        ],
        "antonyms": [
            "first",
            "initial"
        ],
        "sentence": "Infidelity is the ultimate betrayal."
    },
    {
        "id": 83,
        "word": "ascend",
        "turkish": "yükselmek, çıkmak",
        "synonyms": [
            "go up",
            "climb",
            "rise",
            "mount"
        ],
        "antonyms": [
            "descend",
            "fall",
            "sink"
        ],
        "sentence": "The divers have begun to ascend to the surface of the water."
    },
    {
        "id": 84,
        "word": "assault",
        "turkish": "saldırı",
        "synonyms": [
            "attack",
            "invasion",
            "charge",
            "agression"
        ],
        "antonyms": [
            "resistance",
            "defence"
        ],
        "sentence": "We were all saddened by the assault on a police officer."
    },
    {
        "id": 85,
        "word": "compulsory",
        "turkish": "zorunlu",
        "synonyms": [
            "obligatory",
            "mandatory",
            "must"
        ],
        "antonyms": [
            "optional",
            "voluntary"
        ],
        "sentence": "In East Germany learning Russian was compulsory."
    },
    {
        "id": 86,
        "word": "discern",
        "turkish": "fark etmek, algılamak, ayırt etmek",
        "synonyms": [
            "perceive",
            "notice",
            "see"
        ],
        "antonyms": [
            "neglect",
            "miss",
            "overlook"
        ],
        "sentence": "I could just discern something in the darkness."
    },
    {
        "id": 87,
        "word": "devoid of",
        "turkish": "yoksun",
        "synonyms": [
            "lacking"
        ],
        "antonyms": [
            "full",
            "supplied",
            "provided"
        ],
        "sentence": "Their apartment is devoid of all comforts."
    },
    {
        "id": 88,
        "word": "evacuate",
        "turkish": "boşaltmak, tahliye etmek",
        "synonyms": [
            "empty"
        ],
        "antonyms": [
            "seize",
            "occupy",
            "fill"
        ],
        "sentence": "The police evacuated the village shortly before the explosion."
    },
    {
        "id": 89,
        "word": "implicate",
        "turkish": "ilişkilendirmek, bağlantı kurmak",
        "synonyms": [
            "connect",
            "associate"
        ],
        "antonyms": [
            "disconnect"
        ],
        "sentence": "Have they any evidence to implicate him in the robbery?"
    },
    {
        "id": 90,
        "word": "happen to",
        "turkish": "tesadüfen …mek, şans eseri karşılaşmak",
        "synonyms": [
            "do sth by chance"
        ],
        "antonyms": [],
        "sentence": "I happened to him when I was shopping."
    },
    {
        "id": 91,
        "word": "gauge",
        "turkish": "ölçmek, tahmin etmek",
        "synonyms": [
            "measure",
            "estimate",
            "evaluate"
        ],
        "antonyms": [],
        "sentence": "You can use a thermometer to gauge the temperature."
    },
    {
        "id": 92,
        "word": "surveillance",
        "turkish": "gözetim, yakın takip",
        "synonyms": [
            "close observation",
            "scrutiny"
        ],
        "antonyms": [],
        "sentence": "Banks are now installing surveillance cameras."
    },
    {
        "id": 93,
        "word": "sparse",
        "turkish": "seyrek, az",
        "synonyms": [
            "thin",
            "bare",
            "meager"
        ],
        "antonyms": [
            "dense",
            "thick"
        ],
        "sentence": "Information coming out of the disaster area is sparse."
    },
    {
        "id": 94,
        "word": "superficial",
        "turkish": "yüzeysel, üstünkörü",
        "synonyms": [
            "surface",
            "shallow"
        ],
        "antonyms": [
            "deep",
            "profound",
            "detailed"
        ],
        "sentence": "I only have a superficial knowledge of French."
    },
    {
        "id": 95,
        "word": "pledge",
        "turkish": "söz, vaat, işaret, teminat, rehin, bağışlanacağına söz verilmiş para",
        "synonyms": [
            "promise"
        ],
        "antonyms": [],
        "sentence": "Thousands of people made pledges to the “Children in Need charity campaign”."
    },
    {
        "id": 96,
        "word": "notorious",
        "turkish": "adı çıkmış, dile düşmüş, kötülüğüyle ünlenmiş",
        "synonyms": [
            "infamous",
            "disreputable"
        ],
        "antonyms": [
            "famous",
            "well-known",
            "reknown",
            "eminent"
        ],
        "sentence": "The company is notorious for paying its bills late."
    },
    {
        "id": 97,
        "word": "onslaught",
        "turkish": "saldırı",
        "synonyms": [
            "attack",
            "assault"
        ],
        "antonyms": [
            "withdraw"
        ],
        "sentence": "Scotland's onslaught on Wales in the second half of the match earned them a 4-1 victory."
    },
    {
        "id": 98,
        "word": "permanent",
        "turkish": "sürekli, devam eden",
        "synonyms": [
            "perpetual",
            "continuous"
        ],
        "antonyms": [
            "temporary"
        ],
        "sentence": "She is looking for a permanent place to stay."
    },
    {
        "id": 99,
        "word": "relative",
        "turkish": "göreceli, izafi, bağıl",
        "synonyms": [
            "comparative"
        ],
        "antonyms": [
            "absolute",
            "definite"
        ],
        "sentence": "The amount of petrol a car uses is relative to its speed."
    },
    {
        "id": 100,
        "word": "render",
        "turkish": "-mesine neden olmak, duruma getirmek, netleştirmek",
        "synonyms": [
            "make",
            "cause to be"
        ],
        "antonyms": [],
        "sentence": "New technology has rendered my old computer to be out of date."
    },
    {
        "id": 101,
        "word": "reputation",
        "turkish": "ün, şöhret",
        "synonyms": [
            "fame",
            "prominence",
            "eminence"
        ],
        "antonyms": [],
        "sentence": "The company has a worldwide reputation for quality."
    },
    {
        "id": 102,
        "word": "reconciliation",
        "turkish": "anlaşma, uzlaşma",
        "synonyms": [
            "agreement",
            "settlement"
        ],
        "antonyms": [
            "disagreement"
        ],
        "sentence": "It took hours of negotiations to bring about a reconciliation between the two sides."
    },
    {
        "id": 103,
        "word": "prevail",
        "turkish": "hakim olmak, hüküm sürmek, yaygın olmak",
        "synonyms": [
            "abound",
            "exist thoroughly"
        ],
        "antonyms": [],
        "sentence": "I am sure that common sense will prevail in the end."
    },
    {
        "id": 104,
        "word": "probe",
        "turkish": "araştırma, insansız uzay roketi",
        "synonyms": [
            "exploration",
            "investigation",
            "inquiry"
        ],
        "antonyms": [],
        "sentence": "An FBI probe into corruption has been started."
    },
    {
        "id": 105,
        "word": "keen",
        "turkish": "çok hevesli, gözü açık",
        "synonyms": [
            "eager",
            "willing"
        ],
        "antonyms": [
            "unwilling"
        ],
        "sentence": "They were very keen to start work as soon as possible."
    },
    {
        "id": 106,
        "word": "forgery",
        "turkish": "sahte, sahtekarlık",
        "synonyms": [
            "counterfeiting",
            "being fake"
        ],
        "antonyms": [
            "honesty"
        ],
        "sentence": "He increased his income by forgery."
    },
    {
        "id": 107,
        "word": "grateful",
        "turkish": "minnettar",
        "synonyms": [
            "thankful",
            "appreciative"
        ],
        "antonyms": [
            "ungrateful"
        ],
        "sentence": "If you could get that report finished by Thursday I'd be very grateful."
    },
    {
        "id": 108,
        "word": "imperative",
        "turkish": "acil",
        "synonyms": [
            "urgent"
        ],
        "antonyms": [
            "trivial",
            "insignificant"
        ],
        "sentence": "It's imperative to act now before the problem gets really serious."
    },
    {
        "id": 109,
        "word": "erudite",
        "turkish": "bilgili, detaylı, iyi",
        "synonyms": [
            "knowlegable",
            "learned"
        ],
        "antonyms": [
            "illiterate",
            "ignorant"
        ],
        "sentence": "He's the author of an erudite book on Scottish history."
    },
    {
        "id": 110,
        "word": "equip",
        "turkish": "donatmak",
        "synonyms": [
            "furnish",
            "supply"
        ],
        "antonyms": [],
        "sentence": "It's going to cost $4 million to equip the hospital."
    },
    {
        "id": 111,
        "word": "dominate",
        "turkish": "baskın olmak, hakim olmak",
        "synonyms": [
            "manage",
            "rule smb/sth"
        ],
        "antonyms": [
            "be inferior"
        ],
        "sentence": "He refuses to let others speak and dominates every meeting."
    },
    {
        "id": 112,
        "word": "comprehend",
        "turkish": "anlamak",
        "synonyms": [
            "understand",
            "apprehend",
            "grasp"
        ],
        "antonyms": [
            "misunderstand"
        ],
        "sentence": "I just cannot comprehend your attitude."
    },
    {
        "id": 113,
        "word": "considerate",
        "turkish": "düşünceli, ince ruhlu",
        "synonyms": [
            "thoughtful"
        ],
        "antonyms": [
            "indifferent"
        ],
        "sentence": "It wasn't very considerate of you to drink all the milk."
    },
    {
        "id": 114,
        "word": "arrogant",
        "turkish": "kendini beğenmiş, kibirli, küstah",
        "synonyms": [
            "conceited",
            "self-admiring",
            "egoistic"
        ],
        "antonyms": [
            "humble",
            "modest"
        ],
        "sentence": "She is both very arrogant and very rude."
    },
    {
        "id": 115,
        "word": "advocate",
        "turkish": "savunmak, destek olmak.",
        "synonyms": [
            "support",
            "counsel",
            "back up"
        ],
        "antonyms": [
            "accuse",
            "blame",
            "charge"
        ],
        "sentence": "Mr.Williams is a conservative who advocates fewer government control on business."
    },
    {
        "id": 116,
        "word": "viable",
        "turkish": "olası, yapılabilir",
        "synonyms": [
            "feasible",
            "possible"
        ],
        "antonyms": [
            "impossible"
        ],
        "sentence": "I am afraid your plan is not commercially viable."
    },
    {
        "id": 117,
        "word": "volatility",
        "turkish": "istikrarsızlık, değişkenlik",
        "synonyms": [
            "instability"
        ],
        "antonyms": [
            "stability"
        ],
        "sentence": "The volatility of food and fuel prices is hardly surprising in a war situation."
    },
    {
        "id": 118,
        "word": "volunteer",
        "turkish": "gönüllü olmak",
        "synonyms": [
            "enter/start sth. willingly"
        ],
        "antonyms": [
            "compel",
            "force"
        ],
        "sentence": "During the emergency many staff volunteered to work weekends."
    },
    {
        "id": 119,
        "word": "sluggish",
        "turkish": "ağır işleyen, yavaş seyreden",
        "synonyms": [
            "slow-moving"
        ],
        "antonyms": [
            "fast-moving",
            "quick"
        ],
        "sentence": "Something is wrong with the car - the engine feels a bit sluggish."
    },
    {
        "id": 120,
        "word": "solidarity",
        "turkish": "dayanışma",
        "synonyms": [
            "unity",
            "cohesion"
        ],
        "antonyms": [
            "division"
        ],
        "sentence": "The lecturers joined the protest march to show solidarity with their students."
    },
    {
        "id": 121,
        "word": "adjust",
        "turkish": "ayarlamak, düzenlemek, kurmak, tamir etmek",
        "synonyms": [
            "set",
            "regulate",
            "mend",
            "repair",
            "fix",
            "arrange",
            "adapt"
        ],
        "antonyms": [
            "disturb",
            "confuse",
            "break down"
        ],
        "sentence": "As a teacher you have to adjust your methods to suit the needs of slower learners."
    },
    {
        "id": 122,
        "word": "contain",
        "turkish": "içermek, kontrol altına almak",
        "synonyms": [
            "consist of",
            "include",
            "control"
        ],
        "antonyms": [
            "exclude"
        ],
        "sentence": "I've lost a file containing a lot of important documents."
    },
    {
        "id": 123,
        "word": "daring",
        "turkish": "cesaretli, cüretkar",
        "synonyms": [
            "brave",
            "bold",
            "courageous",
            "dauntless"
        ],
        "antonyms": [
            "coward"
        ],
        "sentence": "Emergency crews quickly planned a daring rescue to get the people out of the burning building."
    },
    {
        "id": 124,
        "word": "curtail",
        "turkish": "azaltmak, kısaltmak",
        "synonyms": [
            "reduce",
            "decrease",
            "abate",
            "lessen"
        ],
        "antonyms": [
            "increase",
            "enhance"
        ],
        "sentence": "The last government severely curtailed trade union rights."
    },
    {
        "id": 125,
        "word": "credible",
        "turkish": "inanılabilir, inanılır",
        "synonyms": [
            "believable"
        ],
        "antonyms": [
            "unbeliavable",
            "incredible",
            "unlikely"
        ],
        "sentence": "They haven't produced any credible evidence for convicting him."
    },
    {
        "id": 126,
        "word": "dispute",
        "turkish": "tartışmak",
        "synonyms": [
            "debate",
            "argue"
        ],
        "antonyms": [],
        "sentence": "The reasons of her death have been hotly disputed."
    },
    {
        "id": 127,
        "word": "discreet",
        "turkish": "ayrı, belirgin, akıllı, gizli",
        "synonyms": [
            "wise",
            "discerning",
            "considerate"
        ],
        "antonyms": [
            "careless",
            "reckless",
            "foolish"
        ],
        "sentence": "The family made discreet enquiries about his background."
    },
    {
        "id": 128,
        "word": "dismay",
        "turkish": "korku, cesaretin kırılması, üzüntü, endişe",
        "synonyms": [
            "discouragement",
            "wonder",
            "disappointment"
        ],
        "antonyms": [
            "encouragement"
        ],
        "sentence": "The supporters watched in/with dismay as their team lost 5-0."
    },
    {
        "id": 129,
        "word": "impede",
        "turkish": "engel olmak",
        "synonyms": [
            "prevent",
            "hinder",
            "hamper"
        ],
        "antonyms": [
            "help",
            "encourage",
            "facilitate"
        ],
        "sentence": "Although he's shy, it certainly hasn't impeded his career in any way."
    },
    {
        "id": 130,
        "word": "illegible",
        "turkish": "okunaksız",
        "synonyms": [
            "cannot be read"
        ],
        "antonyms": [
            "legible"
        ],
        "sentence": "His writing is almost illegible."
    },
    {
        "id": 131,
        "word": "inherent",
        "turkish": "doğal, doğuştan gelen",
        "synonyms": [
            "inborn"
        ],
        "antonyms": [
            "incidental"
        ],
        "sentence": "I have an inherent distrust of lawyers."
    },
    {
        "id": 132,
        "word": "inhibit",
        "turkish": "engel olmak",
        "synonyms": [
            "prevent",
            "hamper"
        ],
        "antonyms": [
            "help",
            "pave the way"
        ],
        "sentence": "This drug inhibits the growth of tumours."
    },
    {
        "id": 133,
        "word": "forecast",
        "turkish": "tahmin etmek, beklemek",
        "synonyms": [
            "predict",
            "foresee"
        ],
        "antonyms": [],
        "sentence": "Snow has been forecast for tonight."
    },
    {
        "id": 134,
        "word": "foresee",
        "turkish": "öngörmek, tahmin etmek",
        "synonyms": [
            "foretell",
            "see ahead"
        ],
        "antonyms": [],
        "sentence": "I don't foresee any difficulties so long as we keep within budget."
    },
    {
        "id": 135,
        "word": "justify",
        "turkish": "haklı çıkarmak, doğrulamak, suçsuzluğunu ortaya çıkarmak",
        "synonyms": [
            "vindicate",
            "acquit"
        ],
        "antonyms": [
            "condemn"
        ],
        "sentence": "It was the only thing that I could do - I don't have to justify myself to anyone."
    },
    {
        "id": 136,
        "word": "pros and cons",
        "turkish": "artılar ve eksiler",
        "synonyms": [
            "advantages and disadvantages"
        ],
        "antonyms": [],
        "sentence": "We're just weighing up the pros and cons of moving to a bigger house."
    },
    {
        "id": 137,
        "word": "potent",
        "turkish": "güçlü",
        "synonyms": [
            "effective",
            "powerful"
        ],
        "antonyms": [
            "ineffective",
            "weak"
        ],
        "sentence": "The Berlin Wall was a potent symbol of the Cold War."
    },
    {
        "id": 138,
        "word": "manifest",
        "turkish": "göstermek",
        "synonyms": [
            "show",
            "exhibit"
        ],
        "antonyms": [
            "hide",
            "conceal"
        ],
        "sentence": "The workers manifested their dissatisfaction in a series of strikes."
    },
    {
        "id": 139,
        "word": "massacre",
        "turkish": "katliam, toplu kıyım",
        "synonyms": [
            "genocide",
            "slaughter"
        ],
        "antonyms": [],
        "sentence": "He ordered the massacre of 2,000 women and children."
    },
    {
        "id": 140,
        "word": "mend",
        "turkish": "tamir etmek, onarmak",
        "synonyms": [
            "repair",
            "fix"
        ],
        "antonyms": [
            "damage",
            "harm"
        ],
        "sentence": "The plumber came to mend the burst pipe."
    },
    {
        "id": 141,
        "word": "modify",
        "turkish": "değiştirmek",
        "synonyms": [
            "change",
            "alter",
            "shift",
            "vary"
        ],
        "antonyms": [],
        "sentence": "The proposals were not reasonable and were only accepted in a modified form."
    },
    {
        "id": 142,
        "word": "mitigate",
        "turkish": "azaltmak",
        "synonyms": [
            "lessen",
            "ease"
        ],
        "antonyms": [
            "aggravate"
        ],
        "sentence": "It isn’t certain how to mitigate the effects of tourism on the island."
    },
    {
        "id": 143,
        "word": "obstinate",
        "turkish": "inatçı",
        "synonyms": [
            "stubborn"
        ],
        "antonyms": [
            "compliant"
        ],
        "sentence": "He can be very obstinate at times."
    },
    {
        "id": 144,
        "word": "intrinsic",
        "turkish": "asıl, esas, kendine özgü, içten gelen",
        "synonyms": [
            "inherent",
            "inborn",
            "basic"
        ],
        "antonyms": [
            "extrinsic"
        ],
        "sentence": "Maths is an intrinsic part of the school curriculum."
    },
    {
        "id": 145,
        "word": "fatal",
        "turkish": "ölümcül",
        "synonyms": [
            "mortal",
            "deadly",
            "lethal"
        ],
        "antonyms": [
            "teeming with life"
        ],
        "sentence": "This illness is fatal in almost all cases."
    },
    {
        "id": 146,
        "word": "hasty",
        "turkish": "acele, hızlı",
        "synonyms": [
            "hurried",
            "speedy"
        ],
        "antonyms": [
            "slow",
            "deliberate"
        ],
        "sentence": "He warned against making hasty decisions."
    },
    {
        "id": 147,
        "word": "impact",
        "turkish": "etki, çarpma",
        "synonyms": [
            "effect",
            "influence"
        ],
        "antonyms": [],
        "sentence": "The impact of the crash reduced the car to a third of its original length."
    },
    {
        "id": 148,
        "word": "inadequate",
        "turkish": "yetersiz",
        "synonyms": [
            "insufficient",
            "deficient",
            "not enough"
        ],
        "antonyms": [
            "adequate",
            "enough"
        ],
        "sentence": "This work is extremely inadequate - you'll have to do it again."
    },
    {
        "id": 149,
        "word": "diffuse",
        "turkish": "yaymak",
        "synonyms": [
            "scatter",
            "spread"
        ],
        "antonyms": [
            "assemble",
            "draw"
        ],
        "sentence": "Oxygen diffuses from the lungs into the bloodstream."
    },
    {
        "id": 150,
        "word": "dwarf",
        "turkish": "cüce",
        "synonyms": [
            "very short person"
        ],
        "antonyms": [
            "tall"
        ],
        "sentence": "Snow White and the Seven Dwarves is known to everybody."
    },
    {
        "id": 151,
        "word": "entrepreneur",
        "turkish": "girişimci, yatırımcı",
        "synonyms": [
            "capitalist",
            "industrialist",
            "investor"
        ],
        "antonyms": [],
        "sentence": "He was one of the entrepreneurs of the eighties and made lots of money."
    },
    {
        "id": 152,
        "word": "convert",
        "turkish": "dönüştürmek, değiştirmek",
        "synonyms": [
            "turn into",
            "alter",
            "change",
            "transform"
        ],
        "antonyms": [
            "keep stable"
        ],
        "sentence": "He converted to Catholicism when he got married."
    },
    {
        "id": 153,
        "word": "deduce from",
        "turkish": "çıkarım yapmak, sonucuna varmak",
        "synonyms": [
            "infer from"
        ],
        "antonyms": [],
        "sentence": "The police have deduced that he must have left his apartment yesterday evening."
    },
    {
        "id": 154,
        "word": "deliberately",
        "turkish": "kasıtlı, bilerek",
        "synonyms": [
            "intentionally",
            "on purpose"
        ],
        "antonyms": [
            "accidentally",
            "by chance",
            "by accident"
        ],
        "sentence": "I'm sure he says these things deliberately to annoy me."
    },
    {
        "id": 155,
        "word": "accuse",
        "turkish": "suçlamak",
        "synonyms": [
            "blame",
            "charge",
            "indict",
            "reproach"
        ],
        "antonyms": [
            "discharge",
            "defend",
            "release"
        ],
        "sentence": "Are you accusing me of lying?"
    },
    {
        "id": 156,
        "word": "accustomed to",
        "turkish": "alışkın olmak, alıştırmak",
        "synonyms": [
            "be used to",
            "be addicted to"
        ],
        "antonyms": [
            "be unfamiliar to",
            "feel strange",
            "odd"
        ],
        "sentence": "The army accustomed him to discipline."
    },
    {
        "id": 157,
        "word": "arbitrary",
        "turkish": "rasgele, keyfi, otoriter",
        "synonyms": [
            "random",
            "chance",
            "dictatorial"
        ],
        "antonyms": [],
        "sentence": "What guided your decision or was it arbitrary?"
    },
    {
        "id": 158,
        "word": "arise from",
        "turkish": "-den doğmak, kaynaklanmak",
        "synonyms": [
            "originate from",
            "proceed",
            "spring",
            "result from",
            "emerge from"
        ],
        "antonyms": [
            "lead to",
            "give rise to",
            "result in"
        ],
        "sentence": "Are there any matters arising from the last meeting?"
    },
    {
        "id": 159,
        "word": "beat",
        "turkish": "yenmek, bozguna uğratmak, vurmak",
        "synonyms": [
            "defeat",
            "strike",
            "hit"
        ],
        "antonyms": [
            "lose"
        ],
        "sentence": "They saw him beating his dog with a stick."
    },
    {
        "id": 160,
        "word": "case",
        "turkish": "durum, vaka",
        "synonyms": [
            "condition",
            "situation"
        ],
        "antonyms": [],
        "sentence": "I wouldn't normally agree but it will be an exception in this case."
    },
    {
        "id": 161,
        "word": "ban",
        "turkish": "yasaklamak, müsade etmemek",
        "synonyms": [
            "prohibit",
            "forbid"
        ],
        "antonyms": [
            "let",
            "allow"
        ],
        "sentence": "The film was banned in several countries."
    },
    {
        "id": 162,
        "word": "pursue",
        "turkish": "takip etmek, izlemek",
        "synonyms": [
            "follow",
            "chase",
            "succeed"
        ],
        "antonyms": [],
        "sentence": "The car was pursued by helicopters."
    },
    {
        "id": 163,
        "word": "affiliate with",
        "turkish": "bağlamak, ilişkilendirmek, ilişki içinde olmak",
        "synonyms": [
            "associate",
            "connect",
            "incorporate"
        ],
        "antonyms": [
            "seperate",
            "dissociate"
        ],
        "sentence": "The school is affiliated with a national association."
    },
    {
        "id": 164,
        "word": "affluent",
        "turkish": "zengin, gelişmiş",
        "synonyms": [
            "rich",
            "wealthy",
            "prosperous",
            "well-off"
        ],
        "antonyms": [
            "poor",
            "unwealthy"
        ],
        "sentence": "Affluent nations always have the power."
    },
    {
        "id": 165,
        "word": "convene",
        "turkish": "toplanmak",
        "synonyms": [
            "meet",
            "assemble"
        ],
        "antonyms": [
            "dismiss"
        ],
        "sentence": "The council will be convening on the morning of the 25th."
    },
    {
        "id": 166,
        "word": "damage",
        "turkish": "zarar, ziyan görmek",
        "synonyms": [
            "harm",
            "injury"
        ],
        "antonyms": [
            "benefit"
        ],
        "sentence": "Many buildings were badly damaged during the war."
    },
    {
        "id": 167,
        "word": "coincide with",
        "turkish": "tesadüfen kesişmek, uyuşmak",
        "synonyms": [
            "match",
            "correspond",
            "agree"
        ],
        "antonyms": [],
        "sentence": "Our views coincide on a range of subjects."
    },
    {
        "id": 168,
        "word": "enormous",
        "turkish": "büyük, devasa",
        "synonyms": [
            "tremendous",
            "vast"
        ],
        "antonyms": [
            "tiny",
            "small"
        ],
        "sentence": "He earns an enormous salary."
    },
    {
        "id": 169,
        "word": "dissolve",
        "turkish": "eritmek",
        "synonyms": [
            "melt",
            "thaw"
        ],
        "antonyms": [
            "solidify"
        ],
        "sentence": "Nitric acid will dissolve most animal tissue."
    },
    {
        "id": 170,
        "word": "hurricane",
        "turkish": "kasırga",
        "synonyms": [
            "storm"
        ],
        "antonyms": [],
        "sentence": "The state of Florida was hit by a hurricane that did serious damage."
    },
    {
        "id": 171,
        "word": "hinder",
        "turkish": "engellemek",
        "synonyms": [
            "hamper",
            "prevent",
            "impede",
            "obstruct"
        ],
        "antonyms": [
            "facilitate"
        ],
        "sentence": "Strong winds have hindered firefighters in their efforts to put out the fire."
    },
    {
        "id": 172,
        "word": "horizontal",
        "turkish": "yatay",
        "synonyms": [
            "parallel",
            "flat"
        ],
        "antonyms": [
            "vertical"
        ],
        "sentence": "Keep the patient horizontal with the feet slightly raised."
    },
    {
        "id": 173,
        "word": "instinct",
        "turkish": "içgüdü",
        "synonyms": [
            "natural feeling",
            "impulse"
        ],
        "antonyms": [
            "reason"
        ],
        "sentence": "It is their instinct that tells the birds when to begin their migration."
    },
    {
        "id": 174,
        "word": "indefinitely",
        "turkish": "süresiz olarak, sonsuza dek",
        "synonyms": [
            "forever"
        ],
        "antonyms": [],
        "sentence": "We cannot wait indefinitely. You had better hurry up."
    },
    {
        "id": 175,
        "word": "guilt",
        "turkish": "suç",
        "synonyms": [
            "crime",
            "offence"
        ],
        "antonyms": [
            "innocence"
        ],
        "sentence": "Both suspects admitted their guilt to the police."
    },
    {
        "id": 176,
        "word": "quantity",
        "turkish": "nicelik, miktar",
        "synonyms": [
            "amount",
            "greatness",
            "bulk",
            "extent",
            "size"
        ],
        "antonyms": [],
        "sentence": "We consumed vast quantity of food and drink that night."
    },
    {
        "id": 177,
        "word": "paradise",
        "turkish": "cennet",
        "synonyms": [
            "heaven"
        ],
        "antonyms": [
            "hell"
        ],
        "sentence": "They believe they'll go to paradise after they die."
    },
    {
        "id": 178,
        "word": "mandatory",
        "turkish": "zorunlu",
        "synonyms": [
            "obligatory",
            "compulsory",
            "required"
        ],
        "antonyms": [],
        "sentence": "Athletes must undergo a mandatory drugs test before competing in the championship."
    },
    {
        "id": 179,
        "word": "repeal",
        "turkish": "(Yasayı) yürülükten kaldırmak, iptal etmek",
        "synonyms": [
            "revoke",
            "annul"
        ],
        "antonyms": [
            "enact"
        ],
        "sentence": "If a government repeals a law, it causes that law no longer to have any legal force."
    },
    {
        "id": 180,
        "word": "litter",
        "turkish": "çöp",
        "synonyms": [
            "rubbish",
            "garbage"
        ],
        "antonyms": [
            "order",
            "cleanliness"
        ],
        "sentence": "About 2% of fast-food packaging ends up as litter."
    },
    {
        "id": 181,
        "word": "merciful",
        "turkish": "merhametli, insaflı, bağışlayıcı",
        "synonyms": [
            "tender",
            "lender",
            "forgiving"
        ],
        "antonyms": [
            "cruel",
            "severe",
            "pitiless"
        ],
        "sentence": "\"God is merciful.\" said the priest."
    },
    {
        "id": 182,
        "word": "recruit",
        "turkish": "işe almak, askere almak",
        "synonyms": [
            "employ",
            "enroll"
        ],
        "antonyms": [
            "sack",
            "fire",
            "dismiss"
        ],
        "sentence": "Even young boys under 18 are now being recruited into the army."
    },
    {
        "id": 183,
        "word": "moist",
        "turkish": "rutubetli, nemli",
        "synonyms": [
            "damp",
            "humid",
            "wet"
        ],
        "antonyms": [
            "dry"
        ],
        "sentence": "Keep the soil in the pot moist, but not too wet."
    },
    {
        "id": 184,
        "word": "nuisance",
        "turkish": "dert, baş belası",
        "synonyms": [
            "trouble",
            "problem"
        ],
        "antonyms": [
            "pleasure",
            "delight"
        ],
        "sentence": "It's such a nuisance having to rewrite those letters."
    },
    {
        "id": 185,
        "word": "nurture",
        "turkish": "bakmak, beslemek, geliştirmek",
        "synonyms": [
            "look after",
            "cultivate",
            "rear"
        ],
        "antonyms": [
            "neglect"
        ],
        "sentence": "She wants to stay home and nurture her children."
    },
    {
        "id": 186,
        "word": "split",
        "turkish": "bölmek, ayırmak",
        "synonyms": [
            "divide"
        ],
        "antonyms": [
            "unite",
            "bring together"
        ],
        "sentence": "The teacher split the children into three groups."
    },
    {
        "id": 187,
        "word": "genuine",
        "turkish": "gerçek, hakiki",
        "synonyms": [
            "real",
            "authentic"
        ],
        "antonyms": [
            "fake",
            "counterfeit"
        ],
        "sentence": "If it is a genuine Michelangelo drawing, it might sell for millions."
    },
    {
        "id": 188,
        "word": "gigantic",
        "turkish": "devasa, çok büyük",
        "synonyms": [
            "massive",
            "immense"
        ],
        "antonyms": [
            "tiny",
            "minute"
        ],
        "sentence": "The cost has been gigantic."
    },
    {
        "id": 189,
        "word": "dispose of",
        "turkish": "atmak, kurtulmak, yenmek",
        "synonyms": [
            "throw out",
            "get rid of",
            "discard"
        ],
        "antonyms": [
            "absorb",
            "take in"
        ],
        "sentence": "It took a mere five minutes for the world champion to dispose of his opponent"
    },
    {
        "id": 190,
        "word": "dull",
        "turkish": "sıkıcı",
        "synonyms": [
            "boring",
            "tedious"
        ],
        "antonyms": [
            "enjoyable",
            "entertaining"
        ],
        "sentence": "He's pleasant enough, but deadly dull."
    },
    {
        "id": 191,
        "word": "disdain",
        "turkish": "küçümseme, hor görme",
        "synonyms": [
            "scorn",
            "despise",
            "disregard"
        ],
        "antonyms": [
            "respect",
            "admire"
        ],
        "sentence": "My dear wife speaks with disdain about white people."
    },
    {
        "id": 192,
        "word": "establish",
        "turkish": "kurmak",
        "synonyms": [
            "found",
            "set up"
        ],
        "antonyms": [
            "demolish",
            "destruct"
        ],
        "sentence": "Their company was established in 1822."
    },
    {
        "id": 193,
        "word": "exploit",
        "turkish": "sömürmek, faydalanmak",
        "synonyms": [
            "misuse",
            "abuse"
        ],
        "antonyms": [
            "utilize"
        ],
        "sentence": "Laws exist to stop companies exploiting their employees."
    },
    {
        "id": 194,
        "word": "extend",
        "turkish": "uza(t)mak, sürmek, yardım, kredi v.b. vermek",
        "synonyms": [
            "stretch",
            "prolong"
        ],
        "antonyms": [
            "shorten"
        ],
        "sentence": "The path extends beyond the end of the road."
    },
    {
        "id": 195,
        "word": "collaborate with",
        "turkish": "işbirliği yapmak, beraber çalışmak",
        "synonyms": [
            "work together",
            "cooperate"
        ],
        "antonyms": [
            "work individually"
        ],
        "sentence": "Two writers collaborated on the script for the film."
    },
    {
        "id": 196,
        "word": "craft",
        "turkish": "beceri, hüner, sanat",
        "synonyms": [
            "talent",
            "ability",
            "gift",
            "knack"
        ],
        "antonyms": [],
        "sentence": "The craft of 7furniture making is very difficult."
    },
    {
        "id": 197,
        "word": "delusion",
        "turkish": "yanılma, hile, aldatma",
        "synonyms": [
            "illusion",
            "fallacy",
            "deception"
        ],
        "antonyms": [],
        "sentence": "He's under the delusion that he will be promoted this year."
    },
    {
        "id": 198,
        "word": "altitude",
        "turkish": "yükseklik",
        "synonyms": [
            "height",
            "elevation",
            "ascent"
        ],
        "antonyms": [
            "depth"
        ],
        "sentence": "We are currently flying at an altitude of 15.000 metres."
    },
    {
        "id": 199,
        "word": "ability",
        "turkish": "yetenek, kabiliyet",
        "synonyms": [
            "skill",
            "talent",
            "gift",
            "knack",
            "capability",
            "competence"
        ],
        "antonyms": [
            "inability",
            "incompetence"
        ],
        "sentence": "She has the ability to play the guitar."
    },
    {
        "id": 200,
        "word": "shipment",
        "turkish": "sevkiyat",
        "synonyms": [
            "delivery"
        ],
        "antonyms": [],
        "sentence": "A shipment of urgent medical supplies is expected to arrive very soon."
    },
    {
        "id": 201,
        "word": "severe",
        "turkish": "ciddi, sert, önemli",
        "synonyms": [
            "serious",
            "acute"
        ],
        "antonyms": [
            "mild",
            "flexible"
        ],
        "sentence": "This is a school for children with severe learning difficulties."
    },
    {
        "id": 202,
        "word": "withold",
        "turkish": "tutmak, vermemek, korumak, saklamak",
        "synonyms": [
            "reserve",
            "hold back"
        ],
        "antonyms": [
            "release",
            "give"
        ],
        "sentence": "During the trial, the prosecution was accused of withholding crucial evidence from the defence."
    },
    {
        "id": 203,
        "word": "withstand",
        "turkish": "karşı koymak, dayanmak",
        "synonyms": [
            "stand against",
            "resist",
            "oppose"
        ],
        "antonyms": [
            "concede",
            "submit"
        ],
        "sentence": "They have designed a bridge to withstand earthquakes."
    },
    {
        "id": 204,
        "word": "rival",
        "turkish": "rakip",
        "synonyms": [
            "opponent",
            "competitor"
        ],
        "antonyms": [],
        "sentence": "The companies produce rival versions of the toy."
    },
    {
        "id": 205,
        "word": "zest",
        "turkish": "keyif, neşe, heves",
        "synonyms": [
            "excitement",
            "enthusiasm",
            "eagerness",
            "smack"
        ],
        "antonyms": [],
        "sentence": "It's wonderful to see the children's zest for life."
    },
    {
        "id": 206,
        "word": "vintage",
        "turkish": "eski",
        "synonyms": [
            "old",
            "antique"
        ],
        "antonyms": [
            "new",
            "recent"
        ],
        "sentence": "Vintage toys are sought-after by most people."
    },
    {
        "id": 207,
        "word": "verify",
        "turkish": "doğrulamak",
        "synonyms": [
            "confirm",
            "validate"
        ],
        "antonyms": [
            "subvert",
            "misrepresent"
        ],
        "sentence": "Are you able to verify your account/allegation/report/theory?"
    },
    {
        "id": 208,
        "word": "vermin",
        "turkish": "zararlı hayvan, parazit",
        "synonyms": [
            "parasites",
            "pest"
        ],
        "antonyms": [],
        "sentence": "Flies, lice, rats, foxes and cockroaches can all be described as vermin."
    },
    {
        "id": 209,
        "word": "unilateral",
        "turkish": "tek taraflı",
        "synonyms": [
            "one-sided"
        ],
        "antonyms": [
            "multilateral"
        ],
        "sentence": "The party leader has actually declared her support for unilateral nuclear disarmament."
    },
    {
        "id": 210,
        "word": "vacuum",
        "turkish": "boşluk, hava boşluğu",
        "synonyms": [
            "empty space"
        ],
        "antonyms": [
            "occupied"
        ],
        "sentence": "Edison knew that he had to create a vacuum inside the lightbulb."
    },
    {
        "id": 211,
        "word": "acquire",
        "turkish": "elde etmek",
        "synonyms": [
            "gain",
            "obtain",
            "earn",
            "win",
            "attain",
            "achieve",
            "get"
        ],
        "antonyms": [
            "lose",
            "surrender",
            "miss"
        ],
        "sentence": "He began to acquire a reputation during the 16th century."
    },
    {
        "id": 212,
        "word": "adopt",
        "turkish": "benimsemek, kabul etmek, evlat edinmek",
        "synonyms": [
            "assume",
            "approve",
            "accept",
            "foster",
            "support"
        ],
        "antonyms": [
            "reject",
            "deny",
            "abandon"
        ],
        "sentence": "I think it's time to adopt a different strategy."
    },
    {
        "id": 213,
        "word": "clumsy",
        "turkish": "beceriksiz, yeteneksiz, sakar",
        "synonyms": [
            "awkward",
            "unskilled"
        ],
        "antonyms": [
            "talented",
            "gifted"
        ],
        "sentence": "That's the third glass you've smashed this week, - you're so clumsy!"
    },
    {
        "id": 214,
        "word": "excavate",
        "turkish": "kazmak",
        "synonyms": [
            "dig",
            "dig up"
        ],
        "antonyms": [
            "inter",
            "bury"
        ],
        "sentence": "Tintagel Castle, the reputed birthplace of King Arthur, is being excavated for the first time."
    },
    {
        "id": 215,
        "word": "enlighten",
        "turkish": "aydınlatmak",
        "synonyms": [
            "shed light on",
            "illuminate"
        ],
        "antonyms": [
            "darken"
        ],
        "sentence": "I don't understand this. Could you enlighten me on this issue?"
    },
    {
        "id": 216,
        "word": "diverge",
        "turkish": "sapmak, yön değiştirmek",
        "synonyms": [
            "deviate",
            "move away"
        ],
        "antonyms": [
            "join",
            "converge"
        ],
        "sentence": "They walked along the road together until they reached the village, but then their paths diverged."
    },
    {
        "id": 217,
        "word": "rampant",
        "turkish": "yaygın, aşırı boyutlara varmış, her tarafa yayılmış",
        "synonyms": [
            "widespread",
            "increasing",
            "prevalent"
        ],
        "antonyms": [],
        "sentence": "Disease is quite rampant in overcrowded cities."
    },
    {
        "id": 218,
        "word": "perplex",
        "turkish": "şaşırtmak, kafasını karıştırmak",
        "synonyms": [
            "bewilder",
            "confuse",
            "astonish"
        ],
        "antonyms": [],
        "sentence": "The disease has continued to perplex doctors."
    },
    {
        "id": 219,
        "word": "rebel against",
        "turkish": "ayaklanmak, isyan etmek, karşı gelmek",
        "synonyms": [
            "revolt",
            "rise up"
        ],
        "antonyms": [],
        "sentence": "The people rebelled against the new government."
    },
    {
        "id": 220,
        "word": "massive",
        "turkish": "büyük, kocaman",
        "synonyms": [
            "huge",
            "immense"
        ],
        "antonyms": [
            "small",
            "slight"
        ],
        "sentence": "They've got a massive house."
    },
    {
        "id": 221,
        "word": "renown",
        "turkish": "ün, şöhret",
        "synonyms": [
            "fame",
            "reputation"
        ],
        "antonyms": [],
        "sentence": "Her renown spread across the country."
    },
    {
        "id": 222,
        "word": "neat",
        "turkish": "temiz, düzenli",
        "synonyms": [
            "tidy"
        ],
        "antonyms": [
            "untidy"
        ],
        "sentence": "She likes everything neat and tidy."
    },
    {
        "id": 223,
        "word": "quality",
        "turkish": "nitelik, vasıf, kalite",
        "synonyms": [
            "characteristic",
            "property",
            "excellence"
        ],
        "antonyms": [],
        "sentence": "Their products are of high quality."
    },
    {
        "id": 224,
        "word": "plain",
        "turkish": "sade, yalın",
        "synonyms": [
            "simple"
        ],
        "antonyms": [
            "complex"
        ],
        "sentence": "We've chosen a plain carpet and patterned curtains."
    },
    {
        "id": 225,
        "word": "glitter",
        "turkish": "ışıldamak",
        "synonyms": [
            "shine"
        ],
        "antonyms": [],
        "sentence": "Her diamond necklace glittered brilliantly under the spotlights."
    },
    {
        "id": 226,
        "word": "gaze at",
        "turkish": "gözünü dikip bakmak, seyretmek",
        "synonyms": [
            "stare",
            "look"
        ],
        "antonyms": [
            "ignore"
        ],
        "sentence": "He spends hours gazing out of the window when he should be working."
    },
    {
        "id": 227,
        "word": "impulsive",
        "turkish": "ani, içgüdüsel, fevri",
        "synonyms": [
            "instinctive",
            "intuitive",
            "sudden"
        ],
        "antonyms": [
            "cautious",
            "reluctant"
        ],
        "sentence": "Don't be so impulsive – think before you act."
    },
    {
        "id": 228,
        "word": "hitherto",
        "turkish": "şu ana kadar",
        "synonyms": [
            "up till now",
            "so far",
            "to date",
            "thus far"
        ],
        "antonyms": [],
        "sentence": "She has hitherto improved her English considerably."
    },
    {
        "id": 229,
        "word": "diligent",
        "turkish": "çalışkan, başarılı",
        "synonyms": [
            "hardworking",
            "studious",
            "industrious"
        ],
        "antonyms": [
            "lazy"
        ],
        "sentence": "Their lawyer was extremely diligent in preparing their case."
    },
    {
        "id": 230,
        "word": "encounter",
        "turkish": "karşılaşmak",
        "synonyms": [
            "face",
            "confront"
        ],
        "antonyms": [
            "escape"
        ],
        "sentence": "When did you first encounter these difficulties?"
    },
    {
        "id": 231,
        "word": "evaporate",
        "turkish": "buharlaşmak, yok olmak",
        "synonyms": [
            "vanish",
            "dissolve",
            "disappear"
        ],
        "antonyms": [
            "solidify",
            "harden"
        ],
        "sentence": "Plants keep cool during the summer by evaporating water from their leaves."
    },
    {
        "id": 232,
        "word": "evoke",
        "turkish": "akla getirmek, hatırlatmak",
        "synonyms": [
            "bring to mind",
            "remind"
        ],
        "antonyms": [
            "prevent",
            "stop"
        ],
        "sentence": "This smell always evokes me my old school."
    },
    {
        "id": 233,
        "word": "fallacy",
        "turkish": "yanılgı, yanılsama",
        "synonyms": [
            "false notion",
            "deception",
            "mistake"
        ],
        "antonyms": [
            "truth",
            "fact"
        ],
        "sentence": "It is a common fallacy that women are worse drivers than men."
    },
    {
        "id": 234,
        "word": "concede",
        "turkish": "kabul etmek",
        "synonyms": [
            "admit",
            "accept"
        ],
        "antonyms": [
            "refuse",
            "reject",
            "deny"
        ],
        "sentence": "The student conceded that his term-paper was inadequate."
    },
    {
        "id": 235,
        "word": "curb",
        "turkish": "kontrol altına almak",
        "synonyms": [
            "control",
            "check"
        ],
        "antonyms": [],
        "sentence": "The Government should act to curb tax evasion."
    },
    {
        "id": 236,
        "word": "allocate",
        "turkish": "ayırmak, tahsis etmek",
        "synonyms": [
            "assign",
            "allot",
            "set apart"
        ],
        "antonyms": [
            "withold",
            "retain"
        ],
        "sentence": "The government will allocate 10 million dollars for health education."
    },
    {
        "id": 237,
        "word": "bustle",
        "turkish": "hareketlilik, canlılık",
        "synonyms": [
            "movement",
            "vividness"
        ],
        "antonyms": [
            "recession",
            "stability"
        ],
        "sentence": "I sat in a café and watched the bustle of the street outside."
    },
    {
        "id": 238,
        "word": "apparent",
        "turkish": "görünürde, belli olan",
        "synonyms": [
            "obvious",
            "clear",
            "noticable"
        ],
        "antonyms": [
            "gloomy",
            "covered"
        ],
        "sentence": "Her unhappiness was apparent to everyone."
    },
    {
        "id": 239,
        "word": "associate with",
        "turkish": "ilişkilendirmek, bağlantı kurmak",
        "synonyms": [
            "connect",
            "relate",
            "link",
            "join",
            "combine"
        ],
        "antonyms": [
            "disconnect"
        ],
        "sentence": "Most people associate this brand with good quality."
    },
    {
        "id": 240,
        "word": "asset",
        "turkish": "kazanç, mal varlığı, artı yön",
        "synonyms": [
            "advantage",
            "benefit",
            "possession"
        ],
        "antonyms": [
            "harm",
            "deficit"
        ],
        "sentence": "Knowledge of foreign languages is a real asset in this sort of work."
    },
    {
        "id": 241,
        "word": "austere",
        "turkish": "sert, ciddi, katı",
        "synonyms": [
            "severe",
            "serious",
            "strict",
            "stern",
            "hard",
            "harsh",
            "rigid"
        ],
        "antonyms": [
            "soft",
            "indulgent"
        ],
        "sentence": "He experienced an austere childhood during the war."
    },
    {
        "id": 242,
        "word": "bluntly",
        "turkish": "açık, dürüst bir şekilde",
        "synonyms": [
            "frankly",
            "honestly"
        ],
        "antonyms": [
            "indirectly",
            "by implying"
        ],
        "sentence": "To put it bluntly, you have to improve your English."
    },
    {
        "id": 243,
        "word": "anticipate",
        "turkish": "beklemek, ummak",
        "synonyms": [
            "expect",
            "await",
            "foresee",
            "forecast"
        ],
        "antonyms": [
            "unforesee"
        ],
        "sentence": "They anticipate having several applications for the job."
    },
    {
        "id": 244,
        "word": "ailment",
        "turkish": "hastalık",
        "synonyms": [
            "illness",
            "disease",
            "complaint",
            "disorder",
            "malfunction"
        ],
        "antonyms": [
            "health",
            "peace"
        ],
        "sentence": "Nurses can treat minor ailments themselves."
    },
    {
        "id": 245,
        "word": "accompany",
        "turkish": "eşlik etmek",
        "synonyms": [
            "go with",
            "escort",
            "attend",
            "follow"
        ],
        "antonyms": [
            "abandon",
            "leave",
            "quit",
            "desert"
        ],
        "sentence": "Depression is always accompanied by insomnia."
    },
    {
        "id": 246,
        "word": "accordingly",
        "turkish": "uygun şekilde, bu nedenle, -e bağlı olarak",
        "synonyms": [
            "appropriately",
            "consequently",
            "therefore",
            "hence",
            "as a result"
        ],
        "antonyms": [
            "inconsistently",
            "conversely"
        ],
        "sentence": "She's an expert in her field, and is well- paid accordingly."
    },
    {
        "id": 247,
        "word": "abduct",
        "turkish": "kaçırmak",
        "synonyms": [
            "kidnap",
            "seize",
            "drag away"
        ],
        "antonyms": [
            "restore",
            "reinstate"
        ],
        "sentence": "They abducted the little innocent girl."
    },
    {
        "id": 248,
        "word": "shift",
        "turkish": "değişmek, değiştirmek, kımıldamak",
        "synonyms": [
            "change",
            "alter",
            "modify"
        ],
        "antonyms": [
            "conserve",
            "preserve"
        ],
        "sentence": "The wind is expected to shift to the east tomorrow."
    },
    {
        "id": 249,
        "word": "secular",
        "turkish": "laik",
        "synonyms": [
            "worldly"
        ],
        "antonyms": [
            "religious"
        ],
        "sentence": "We live in an increasingly secular society, in which religion has less and less influence on our daily lives."
    },
    {
        "id": 250,
        "word": "course",
        "turkish": "seyir, akış, yol, yön",
        "synonyms": [
            "route",
            "way",
            "direction",
            "drift"
        ],
        "antonyms": [],
        "sentence": "The pilot avoided a collision by changing course."
    },
    {
        "id": 251,
        "word": "depart",
        "turkish": "ayrılmak, hareket etmek",
        "synonyms": [
            "leave",
            "set off"
        ],
        "antonyms": [
            "arrive",
            "come"
        ],
        "sentence": "The train for London departs from Platform 2."
    },
    {
        "id": 252,
        "word": "constrain",
        "turkish": "zorlamak, baskı altına almak, sınırlamak",
        "synonyms": [
            "force",
            "compel",
            "limit"
        ],
        "antonyms": [],
        "sentence": "The company's progress was constrained by the managers who refused to look forward."
    },
    {
        "id": 253,
        "word": "deviate",
        "turkish": "sapmak, yön değiştirmek",
        "synonyms": [
            "move away",
            "diverge"
        ],
        "antonyms": [],
        "sentence": "The road deviates both to the right and left."
    },
    {
        "id": 254,
        "word": "devout",
        "turkish": "dindar",
        "synonyms": [
            "religious"
        ],
        "antonyms": [
            "irreligious",
            "indifferent"
        ],
        "sentence": "He is a devout person who always goes to church."
    },
    {
        "id": 255,
        "word": "drought",
        "turkish": "kuraklık",
        "synonyms": [
            "dry season"
        ],
        "antonyms": [
            "wet season",
            "precipitation"
        ],
        "sentence": "This year a severe drought has ruined the crops."
    },
    {
        "id": 256,
        "word": "eligible",
        "turkish": "uygun, seçilebilir",
        "synonyms": [
            "suitable",
            "appropriate"
        ],
        "antonyms": [
            "ineligible",
            "ordinary"
        ],
        "sentence": "Only people over 18 are eligible to vote."
    },
    {
        "id": 257,
        "word": "fulfill",
        "turkish": "yerine getirmek",
        "synonyms": [
            "execute",
            "carry out",
            "implement"
        ],
        "antonyms": [
            "neglect",
            "ignore",
            "falsify"
        ],
        "sentence": "School fails if it does not fulfil the needs of its pupils."
    },
    {
        "id": 258,
        "word": "harass",
        "turkish": "taciz etmek",
        "synonyms": [
            "bother",
            "pester"
        ],
        "antonyms": [],
        "sentence": "Stop harassing me with your words!"
    },
    {
        "id": 259,
        "word": "peak",
        "turkish": "zirve",
        "synonyms": [
            "summit",
            "zenith"
        ],
        "antonyms": [
            "bottom"
        ],
        "sentence": "The climbers reached the peak in the end."
    },
    {
        "id": 260,
        "word": "outweigh",
        "turkish": "daha ağır basmak, daha önemli olmak",
        "synonyms": [
            "be greater in weight",
            "be more than"
        ],
        "antonyms": [],
        "sentence": "The benefits of this treatment far outweigh any risk."
    },
    {
        "id": 261,
        "word": "precise",
        "turkish": "kesin, kati, tam",
        "synonyms": [
            "exact",
            "definite"
        ],
        "antonyms": [
            "vague",
            "ambigious"
        ],
        "sentence": "He caught me at the precise moment that I fainted."
    },
    {
        "id": 262,
        "word": "raise",
        "turkish": "artırmak, yükselmek, gündeme getirmek",
        "synonyms": [
            "increase",
            "rear",
            "bring up",
            "mention"
        ],
        "antonyms": [
            "decrease",
            "abate"
        ],
        "sentence": "The government is planning to raise taxes."
    },
    {
        "id": 263,
        "word": "gratify",
        "turkish": "memnun etmek, tatmin etmek",
        "synonyms": [
            "please",
            "satisfy"
        ],
        "antonyms": [
            "displease"
        ],
        "sentence": "He was gratified to see how well his students had done."
    },
    {
        "id": 264,
        "word": "illicit",
        "turkish": "yasa dışı",
        "synonyms": [
            "illegal",
            "unlawful"
        ],
        "antonyms": [
            "legal"
        ],
        "sentence": "The illicit trade in stolen vehicles is a controversial issue."
    },
    {
        "id": 265,
        "word": "insult",
        "turkish": "aşağılamak, hakaret etmek",
        "synonyms": [
            "offend",
            "look down on",
            "humiliate"
        ],
        "antonyms": [
            "honor",
            "praise"
        ],
        "sentence": "She made several insults about my appearance."
    },
    {
        "id": 266,
        "word": "cite",
        "turkish": "bahsetmek",
        "synonyms": [
            "mention",
            "talk about",
            "refer to"
        ],
        "antonyms": [
            "keep silent"
        ],
        "sentence": "The lawyer cited two similar cases."
    },
    {
        "id": 267,
        "word": "defeat",
        "turkish": "yenmek, bozguna uğratmak",
        "synonyms": [
            "beat",
            "overcome"
        ],
        "antonyms": [
            "win",
            "gain"
        ],
        "sentence": "If we can defeat the Italian team, we'll be through to the final."
    },
    {
        "id": 268,
        "word": "decree",
        "turkish": "ilan etmek, duyurmak, buyurmak",
        "synonyms": [
            "declare",
            "announce",
            "order"
        ],
        "antonyms": [],
        "sentence": "The local council has decreed that the hospital should be closed."
    },
    {
        "id": 269,
        "word": "convince",
        "turkish": "ikna etmek",
        "synonyms": [
            "persuade",
            "win over",
            "bring round"
        ],
        "antonyms": [
            "deter"
        ],
        "sentence": "He managed to convince the jury of his innocence."
    },
    {
        "id": 270,
        "word": "revoke",
        "turkish": "iptal etmek, feshetmek, geri almak",
        "synonyms": [
            "cancel",
            "annul",
            "repeal"
        ],
        "antonyms": [],
        "sentence": "The authorities have revoked their original decision to allow development of this rural area."
    },
    {
        "id": 271,
        "word": "wipe out",
        "turkish": "silip süpürmek, kökünü kazımak",
        "synonyms": [
            "destroy",
            "exterminate"
        ],
        "antonyms": [],
        "sentence": "One bad harvest could wipe out all of a grower's profits for the previous two years."
    },
    {
        "id": 272,
        "word": "wisdom",
        "turkish": "bilgelik, akıl, sağduyu",
        "synonyms": [
            "common sense",
            "prudence",
            "insight"
        ],
        "antonyms": [
            "folly",
            "idiocy",
            "imbecility"
        ],
        "sentence": "He's got a weekly radio programme in which he dispenses wisdom on a variety of subjects."
    },
    {
        "id": 273,
        "word": "withdraw",
        "turkish": "geri çekmek",
        "synonyms": [
            "take back",
            "pull back",
            "extract"
        ],
        "antonyms": [
            "advance",
            "enter",
            "penetrate"
        ],
        "sentence": "The UN has withdrawn its troops from the country."
    },
    {
        "id": 274,
        "word": "unique",
        "turkish": "eşsiz, benzersiz",
        "synonyms": [
            "exclusive",
            "only",
            "single"
        ],
        "antonyms": [
            "common",
            "ordinary"
        ],
        "sentence": "Each person's genetic code is unique except in the case of identical twins."
    },
    {
        "id": 275,
        "word": "prey",
        "turkish": "av, kurban",
        "synonyms": [
            "victim"
        ],
        "antonyms": [],
        "sentence": "A hawk hovers in the air before swooping on its prey."
    },
    {
        "id": 276,
        "word": "unrest",
        "turkish": "huzursuzluk",
        "synonyms": [
            "uneasiness",
            "restlessness"
        ],
        "antonyms": [
            "rest",
            "peace"
        ],
        "sentence": "It is feared that the civil unrest we are now witnessing could lead to full- scale civil war."
    },
    {
        "id": 277,
        "word": "verge",
        "turkish": "eşik, kenar",
        "synonyms": [
            "edge",
            "threshold"
        ],
        "antonyms": [
            "centre",
            "midst"
        ],
        "sentence": "They set up camp on the verge of the desert."
    },
    {
        "id": 278,
        "word": "trend",
        "turkish": "eğilim, moda",
        "synonyms": [
            "tendency",
            "fashion"
        ],
        "antonyms": [],
        "sentence": "There's been a downward trend in sales in the last few years."
    },
    {
        "id": 279,
        "word": "amass",
        "turkish": "biriktirmek, toplamak",
        "synonyms": [
            "accumulate",
            "gather up",
            "heap up",
            "pile up"
        ],
        "antonyms": [
            "disperse",
            "scatter",
            "waste",
            "dissipate"
        ],
        "sentence": "She has amassed a huge fortune through her novels."
    },
    {
        "id": 280,
        "word": "bother",
        "turkish": "sıkıntı vermek, zahmet vermek",
        "synonyms": [
            "trouble"
        ],
        "antonyms": [
            "relieve"
        ],
        "sentence": "Don't bother making the bed - I'll do it later."
    },
    {
        "id": 281,
        "word": "adequate",
        "turkish": "yeterli",
        "synonyms": [
            "competent",
            "sufficient",
            "capable",
            "satisfactory",
            "enough"
        ],
        "antonyms": [
            "inferior",
            "useless",
            "incompetent",
            "insufficient"
        ],
        "sentence": "Is there any language adequate to describe my feelings?"
    },
    {
        "id": 282,
        "word": "thrive",
        "turkish": "gelişmek, büyümek",
        "synonyms": [
            "prosper",
            "flourish"
        ],
        "antonyms": [
            "fail",
            "decline"
        ],
        "sentence": "His business thrived in the years before the war."
    },
    {
        "id": 283,
        "word": "contradict",
        "turkish": "aksini söylemek, çelişmek",
        "synonyms": [
            "counter",
            "oppose"
        ],
        "antonyms": [
            "accept"
        ],
        "sentence": "He kept contradicting himself when we were arguing."
    },
    {
        "id": 284,
        "word": "defer",
        "turkish": "ertelemek",
        "synonyms": [
            "put off",
            "postpone",
            "delay"
        ],
        "antonyms": [
            "hurry",
            "hasten",
            "quicken"
        ],
        "sentence": "Can we defer making a decision until next week?"
    },
    {
        "id": 285,
        "word": "deceit",
        "turkish": "aldatma, dolandırma",
        "synonyms": [
            "deception",
            "fraud",
            "cheating"
        ],
        "antonyms": [
            "honesty",
            "sincerity"
        ],
        "sentence": "When the newspapers published the full story, all his earlier deceits were revealed."
    },
    {
        "id": 286,
        "word": "delay",
        "turkish": "gecik(tir)mek",
        "synonyms": [
            "defer",
            "put off",
            "postpone"
        ],
        "antonyms": [
            "advance",
            "hasten"
        ],
        "sentence": "My plane was delayed for an hour."
    },
    {
        "id": 287,
        "word": "compulsion",
        "turkish": "zorlama, baskı",
        "synonyms": [
            "force",
            "urge"
        ],
        "antonyms": [],
        "sentence": "He was under compulsion when he was forced to talk."
    },
    {
        "id": 288,
        "word": "concern with",
        "turkish": "ilgilenmek, ilgili olmak",
        "synonyms": [
            "be related to/with",
            "be interested in"
        ],
        "antonyms": [
            "be not related",
            "ignore"
        ],
        "sentence": "You had better not concern yourself with my problems."
    },
    {
        "id": 289,
        "word": "concession",
        "turkish": "imtiyaz, hak, ödün, taviz",
        "synonyms": [
            "compromise",
            "giving in"
        ],
        "antonyms": [],
        "sentence": "The government has granted concessions to three private telephone companies."
    },
    {
        "id": 290,
        "word": "exterminate",
        "turkish": "yok etmek",
        "synonyms": [
            "destroy",
            "eradicate"
        ],
        "antonyms": [
            "establish",
            "found",
            "invent"
        ],
        "sentence": "Millions of Jewish people were exterminated in concentration camps in the Second World War."
    },
    {
        "id": 291,
        "word": "evasive",
        "turkish": "kaçamaklı, kaçamak hareket",
        "synonyms": [
            "elusive"
        ],
        "antonyms": [
            "straightforward"
        ],
        "sentence": "By the time the pilot realised how close the plane was to the building, it was too late to take evasive action."
    },
    {
        "id": 292,
        "word": "eminent",
        "turkish": "seçkin, ünlü, bilinen, saygın",
        "synonyms": [
            "famous",
            "well-known",
            "reputed",
            "prominent"
        ],
        "antonyms": [
            "notorious",
            "mediocre"
        ],
        "sentence": "He is thought to be an eminent historian."
    },
    {
        "id": 293,
        "word": "inquisitive",
        "turkish": "meraklı",
        "synonyms": [
            "curious",
            "inquiring"
        ],
        "antonyms": [
            "uninterested"
        ],
        "sentence": "She could see inquisitive faces looking out from the windows next door."
    },
    {
        "id": 294,
        "word": "fatigue",
        "turkish": "aşırı yorgunluk, bitkinlik, aşınma",
        "synonyms": [
            "extreme tiredness",
            "exhaustion"
        ],
        "antonyms": [
            "freshness",
            "vigour"
        ],
        "sentence": "She was suffering from fatigue and a stress-related illness."
    },
    {
        "id": 295,
        "word": "fetch",
        "turkish": "alıp getirmek, kapmak",
        "synonyms": [
            "go and bring"
        ],
        "antonyms": [
            "put away",
            "throw away"
        ],
        "sentence": "I have to fetch my mother from the station."
    },
    {
        "id": 296,
        "word": "spill",
        "turkish": "dökmek, devirmek",
        "synonyms": [
            "leak",
            "overturn",
            "splash about"
        ],
        "antonyms": [],
        "sentence": "I spilt coffee on my silk shirt."
    },
    {
        "id": 297,
        "word": "manufacture",
        "turkish": "üretmek, imal etmek",
        "synonyms": [
            "make",
            "produce",
            "generate"
        ],
        "antonyms": [],
        "sentence": "He works for a company that manufactures car parts."
    },
    {
        "id": 298,
        "word": "option",
        "turkish": "seçenek, tercih",
        "synonyms": [
            "choice",
            "alternative",
            "preference"
        ],
        "antonyms": [],
        "sentence": "The best option would be to cancel the trip altogether."
    },
    {
        "id": 299,
        "word": "necessary",
        "turkish": "gerekli",
        "synonyms": [
            "essential"
        ],
        "antonyms": [
            "unnecessary"
        ],
        "sentence": "He lacks the necessary skills for the job."
    },
    {
        "id": 300,
        "word": "magnificent",
        "turkish": "büyüleyici,görkemli, ihtişamlı, büyük, fevkalade",
        "synonyms": [
            "splendid",
            "impressive"
        ],
        "antonyms": [
            "ordinary",
            "tiny"
        ],
        "sentence": "They live in a magnificent Tudor house."
    },
    {
        "id": 301,
        "word": "nourish",
        "turkish": "beslemek",
        "synonyms": [
            "feed",
            "nurture"
        ],
        "antonyms": [
            "starve"
        ],
        "sentence": "Children need plenty of good fresh food to nourish them."
    },
    {
        "id": 302,
        "word": "passion",
        "turkish": "tutku, hırs",
        "synonyms": [
            "love",
            "desire",
            "greed"
        ],
        "antonyms": [
            "hatred",
            "anger"
        ],
        "sentence": "Football arouses a good deal of passion among its supporters."
    },
    {
        "id": 303,
        "word": "penetrate",
        "turkish": "girmek, nüfuz etmek",
        "synonyms": [
            "enter",
            "go in"
        ],
        "antonyms": [
            "exit",
            "leave",
            "set off"
        ],
        "sentence": "Amazingly, the bullet did not penetrate his brain."
    },
    {
        "id": 304,
        "word": "perennially",
        "turkish": "sürekli, kalıcı",
        "synonyms": [
            "constantly",
            "always"
        ],
        "antonyms": [
            "temporarily"
        ],
        "sentence": "We perennially face the problem of not having enough money."
    },
    {
        "id": 305,
        "word": "recurrence",
        "turkish": "(hastalık) depreşme, nüksetme, tekrarlama, yineleme",
        "synonyms": [
            "reappearance",
            "repetition"
        ],
        "antonyms": [],
        "sentence": "The doctor told him to go to the hospital if there was a recurrence of his symptoms."
    },
    {
        "id": 306,
        "word": "succeed",
        "turkish": "izlemek, yerini almak",
        "synonyms": [
            "follow",
            "come after"
        ],
        "antonyms": [],
        "sentence": "During the succeeding months he began to wonder if he had made a mistake."
    },
    {
        "id": 307,
        "word": "far-fetched",
        "turkish": "inanılmaz, gerçekten uzak",
        "synonyms": [
            "incredible",
            "fantastic",
            "unbelievable"
        ],
        "antonyms": [
            "credible"
        ],
        "sentence": "He told us a far-fetched story."
    },
    {
        "id": 308,
        "word": "ingenious",
        "turkish": "hünerli, marifetli, akıllı",
        "synonyms": [
            "clever",
            "creative",
            "highly skilled"
        ],
        "antonyms": [
            "unskillful",
            "uninventive"
        ],
        "sentence": "Johnny is so ingenious. He can make most remarkable sculptures from the most ordinary materials."
    },
    {
        "id": 309,
        "word": "inhabit",
        "turkish": "yaşamak",
        "synonyms": [
            "live on"
        ],
        "antonyms": [],
        "sentence": "These remote islands are inhabited only by birds and small animals."
    },
    {
        "id": 310,
        "word": "detect",
        "turkish": "farketmek, tespit etmek",
        "synonyms": [
            "notice",
            "discover"
        ],
        "antonyms": [
            "ignore"
        ],
        "sentence": "Some sounds cannot be detected by the human ear."
    },
    {
        "id": 311,
        "word": "upheaval",
        "turkish": "ani değişiklik, kargaşa, isyan, baş kaldırı",
        "synonyms": [
            "uprising",
            "rebellion",
            "disruption",
            "turmoil"
        ],
        "antonyms": [],
        "sentence": "The long garbage strike in 1970 caused much political upheaval."
    },
    {
        "id": 312,
        "word": "utmost",
        "turkish": "en üstün, azami",
        "synonyms": [
            "greatest",
            "maximum",
            "highest"
        ],
        "antonyms": [
            "minor",
            "lowly"
        ],
        "sentence": "Speed was of the utmost importance."
    },
    {
        "id": 313,
        "word": "wrangle",
        "turkish": "tartışmak",
        "synonyms": [
            "dispute",
            "argue"
        ],
        "antonyms": [],
        "sentence": "They had been wrangling with the authorities about/over parking spaces."
    },
    {
        "id": 314,
        "word": "witness",
        "turkish": "tanık olmak, görmek",
        "synonyms": [
            "see",
            "observe"
        ],
        "antonyms": [],
        "sentence": "They were staying in the capital at the time of the riots and witnessed several street battles."
    },
    {
        "id": 315,
        "word": "yield to/in",
        "turkish": "boyun eğmek, teslim olmak",
        "synonyms": [
            "give in to",
            "accept"
        ],
        "antonyms": [
            "stand against",
            "oppose",
            "confront"
        ],
        "sentence": "Despite renewed pressure to give up the occupied territory, they will not yield."
    },
    {
        "id": 316,
        "word": "yell",
        "turkish": "bağırmak, haykırmak",
        "synonyms": [
            "shout",
            "cry",
            "scream"
        ],
        "antonyms": [
            "whisper"
        ],
        "sentence": "Our neighbours were yelling to each other this morning."
    },
    {
        "id": 317,
        "word": "senseless",
        "turkish": "anlamsız",
        "synonyms": [
            "pointless",
            "meaningless"
        ],
        "antonyms": [
            "meaningful",
            "sensible"
        ],
        "sentence": "A senseless argument was started by the chairman."
    },
    {
        "id": 318,
        "word": "sentiment",
        "turkish": "duygu, his, aşırı duyarlılık, fikir, düşünce",
        "synonyms": [
            "feeling"
        ],
        "antonyms": [],
        "sentence": "Nationalist sentiment has increased in the area since the bombing."
    },
    {
        "id": 319,
        "word": "sever",
        "turkish": "bağını kopartmak, kesmek, ayırmak",
        "synonyms": [
            "cut off",
            "break"
        ],
        "antonyms": [
            "join",
            "connect"
        ],
        "sentence": "Electricity cables have been severed by the storm."
    },
    {
        "id": 320,
        "word": "accomplish",
        "turkish": "başarmak",
        "synonyms": [
            "achieve",
            "perform",
            "complete",
            "succeed in doing"
        ],
        "antonyms": [
            "fail"
        ],
        "sentence": "He accomplished the mission in less than five minutes."
    },
    {
        "id": 321,
        "word": "accede",
        "turkish": "kabul etmek, onaylamak, razı olmak",
        "synonyms": [
            "assent to",
            "agree to",
            "accept",
            "comply",
            "approve"
        ],
        "antonyms": [
            "decline",
            "oppose",
            "refuse",
            "reject",
            "dissent",
            "turn down"
        ],
        "sentence": "He acceded to our offer."
    },
    {
        "id": 322,
        "word": "accelerate",
        "turkish": "hızlan(dır)mak",
        "synonyms": [
            "increase in rate/amount/extent",
            "speed up"
        ],
        "antonyms": [
            "delay",
            "impede",
            "hinder",
            "drag",
            "obstruct"
        ],
        "sentence": "The government is to accelerate its privatisation programme."
    },
    {
        "id": 323,
        "word": "ambiguous",
        "turkish": "belirsiz, şüpheli",
        "synonyms": [
            "doubtful",
            "dubious",
            "unclear",
            "uncertain",
            "indefinite",
            "vague",
            "obscure"
        ],
        "antonyms": [
            "obvious",
            "plain",
            "clear",
            "lucid"
        ],
        "sentence": "The government is still ambiguous on this issue."
    },
    {
        "id": 324,
        "word": "seize",
        "turkish": "kavramak, yakalamak, ele geçirmek",
        "synonyms": [
            "capture",
            "grab"
        ],
        "antonyms": [
            "release"
        ],
        "sentence": "Troops yesterday seized control of the broadcasting station."
    },
    {
        "id": 325,
        "word": "reward",
        "turkish": "ödül",
        "synonyms": [
            "prize"
        ],
        "antonyms": [],
        "sentence": "There's a reward for whoever finishes first."
    },
    {
        "id": 326,
        "word": "wield",
        "turkish": "kullanmak, sahip olmak",
        "synonyms": [
            "employ",
            "exercise",
            "use",
            "have"
        ],
        "antonyms": [],
        "sentence": "She was confronted by a man wielding a knife."
    },
    {
        "id": 327,
        "word": "verdict",
        "turkish": "karar, hüküm",
        "synonyms": [
            "decision"
        ],
        "antonyms": [],
        "sentence": "The jury reached a verdict of not guilty after six hours of deliberation."
    },
    {
        "id": 328,
        "word": "unsubstantiated",
        "turkish": "kanıtlanmamış, onaylanmamış",
        "synonyms": [
            "unproven",
            "unconfirmed",
            "questionable"
        ],
        "antonyms": [
            "substantiated",
            "confirmed",
            "doubtless"
        ],
        "sentence": "Sunday World made unsubstantiated allegations against Berti Ahem."
    },
    {
        "id": 329,
        "word": "tangible",
        "turkish": "elle tutulur, somut",
        "synonyms": [
            "can be touched",
            "concrete"
        ],
        "antonyms": [
            "imperceptible",
            "abstract"
        ],
        "sentence": "We need tangible evidence if we're going to take legal action."
    },
    {
        "id": 330,
        "word": "tender",
        "turkish": "yumuşak, şefkatli",
        "synonyms": [
            "soft",
            "gentle"
        ],
        "antonyms": [
            "hard",
            "tough"
        ],
        "sentence": "What you need is some tender loving care."
    },
    {
        "id": 331,
        "word": "distinctive",
        "turkish": "belirgin, ayrı, farklı",
        "synonyms": [
            "unique",
            "distinguishing"
        ],
        "antonyms": [
            "indefinite",
            "vague"
        ],
        "sentence": "She's got a very distinctive voice."
    },
    {
        "id": 332,
        "word": "enterprise",
        "turkish": "girişim, teşebbüs",
        "synonyms": [
            "venture",
            "project"
        ],
        "antonyms": [],
        "sentence": "Don't forget this is a commercial enterprise - we're here to make money."
    },
    {
        "id": 333,
        "word": "exceed",
        "turkish": "aşmak, geçmek",
        "synonyms": [
            "surpass",
            "surmount"
        ],
        "antonyms": [
            "fall behind"
        ],
        "sentence": "The success of our campaign has exceeded our expectations."
    },
    {
        "id": 334,
        "word": "exclusive",
        "turkish": "özel, seçkin",
        "synonyms": [
            "special",
            "private",
            "unique"
        ],
        "antonyms": [
            "common",
            "shared"
        ],
        "sentence": "This room is for the exclusive use of guests."
    },
    {
        "id": 335,
        "word": "concisely",
        "turkish": "kısaca, öz",
        "synonyms": [
            "briefly",
            "shortly",
            "in brief"
        ],
        "antonyms": [
            "in detail"
        ],
        "sentence": "He has written his report clearly and concisely."
    },
    {
        "id": 336,
        "word": "conflict",
        "turkish": "anlaşmazlık, çatışma",
        "synonyms": [
            "hostility"
        ],
        "antonyms": [
            "agreement"
        ],
        "sentence": "There was a lot of conflict between him and his father."
    },
    {
        "id": 337,
        "word": "chief",
        "turkish": "başlıca",
        "synonyms": [
            "main",
            "principal",
            "leading",
            "major"
        ],
        "antonyms": [
            "minor",
            "inferior"
        ],
        "sentence": "The chief problem we have in the area now is the spread of the disease."
    },
    {
        "id": 338,
        "word": "crude",
        "turkish": "ham, işlenmemiş, basit",
        "synonyms": [
            "raw",
            "unrefined",
            "unprocessed",
            "simple"
        ],
        "antonyms": [
            "refined",
            "processed"
        ],
        "sentence": "The soldiers used crude weapons."
    },
    {
        "id": 339,
        "word": "indispensable",
        "turkish": "vazgeçilemez, gerekli",
        "synonyms": [
            "necessary",
            "essential"
        ],
        "antonyms": [
            "dispensable"
        ],
        "sentence": "This book is an indispensable resource for researchers."
    },
    {
        "id": 340,
        "word": "range from…to",
        "turkish": "arasında farklılık göstermek",
        "synonyms": [
            "vary"
        ],
        "antonyms": [],
        "sentence": "Prices range between $50 and $250."
    },
    {
        "id": 341,
        "word": "proponent",
        "turkish": "savunucu, taraftar",
        "synonyms": [
            "advocate",
            "defender",
            "exponent"
        ],
        "antonyms": [
            "rival",
            "opponent"
        ],
        "sentence": "He is one of the leading proponents of capital punishment."
    },
    {
        "id": 342,
        "word": "surmount",
        "turkish": "üstesinden gelmek",
        "synonyms": [
            "overcome",
            "conquer"
        ],
        "antonyms": [
            "fail"
        ],
        "sentence": "They managed to surmount all objections to their plans."
    },
    {
        "id": 343,
        "word": "intuition",
        "turkish": "sezgi",
        "synonyms": [
            "instinctive knowledge"
        ],
        "antonyms": [],
        "sentence": "I can't explain how I knew - I just had an intuition that you'd been involved in an accident."
    },
    {
        "id": 344,
        "word": "intimacy",
        "turkish": "yakınlık, samimiyet",
        "synonyms": [
            "closeness",
            "sincerity"
        ],
        "antonyms": [
            "distance"
        ],
        "sentence": "Intimacy between teachers and students is not recommended."
    },
    {
        "id": 345,
        "word": "fertile",
        "turkish": "verimli, üretken",
        "synonyms": [
            "productive",
            "rich",
            "fruitful",
            "prolific"
        ],
        "antonyms": [
            "unproductive",
            "fruitless"
        ],
        "sentence": "The soil is very fertile in this area."
    },
    {
        "id": 346,
        "word": "retain",
        "turkish": "tutmak, alıkoymak, muhafaza etmek",
        "synonyms": [
            "keep",
            "maintain",
            "preserve",
            "hold"
        ],
        "antonyms": [
            "release"
        ],
        "sentence": "He managed to retain his dignity throughout the performance."
    },
    {
        "id": 347,
        "word": "odd",
        "turkish": "garip, tuhaf",
        "synonyms": [
            "strange",
            "weird",
            "peculiar"
        ],
        "antonyms": [
            "usual",
            "normal",
            "logical"
        ],
        "sentence": "Her father was an odd man."
    },
    {
        "id": 348,
        "word": "lucrative",
        "turkish": "karlı, kazançlı, yararlı",
        "synonyms": [
            "profitable",
            "remunerative"
        ],
        "antonyms": [],
        "sentence": "The merger proved to be very lucrative for both companies."
    },
    {
        "id": 349,
        "word": "lay",
        "turkish": "koymak",
        "synonyms": [
            "put down"
        ],
        "antonyms": [
            "lift up"
        ],
        "sentence": "She laid the baby on the bed and made her sleep."
    },
    {
        "id": 350,
        "word": "consume",
        "turkish": "tüketmek",
        "synonyms": [
            "use up",
            "deplete",
            "expend"
        ],
        "antonyms": [
            "produce",
            "manufacture"
        ],
        "sentence": "He consumes vast quantities of chips with every meal."
    },
    {
        "id": 351,
        "word": "explicit",
        "turkish": "açık, yalın",
        "synonyms": [
            "clear",
            "unambiguous"
        ],
        "antonyms": [
            "implicit",
            "vague",
            "ambigious"
        ],
        "sentence": "I gave her very explicit directions how to get here."
    },
    {
        "id": 352,
        "word": "unanimously",
        "turkish": "oy birliğiyle",
        "synonyms": [
            "collectively"
        ],
        "antonyms": [],
        "sentence": "All four proposals to the committee were unanimously approved."
    },
    {
        "id": 353,
        "word": "venture",
        "turkish": "tehlikeli iş",
        "synonyms": [
            "business enterprise"
        ],
        "antonyms": [],
        "sentence": "His most recent business venture ended in bankruptcy."
    },
    {
        "id": 354,
        "word": "vice versa",
        "turkish": "tam tersi",
        "synonyms": [
            "conversely",
            "reversely"
        ],
        "antonyms": [],
        "sentence": "Andy doesn't trust Kate, and vice versa"
    },
    {
        "id": 355,
        "word": "vicious cycle",
        "turkish": "kısır döngü",
        "synonyms": [
            "vicious circle"
        ],
        "antonyms": [],
        "sentence": "Many people get trapped in a vicious cycle of dieting and weight gain."
    },
    {
        "id": 356,
        "word": "wage",
        "turkish": "yürütmek, yapmak",
        "synonyms": [
            "conduct",
            "carry on"
        ],
        "antonyms": [],
        "sentence": "We have been waging a desperate campaign against the drug addicts."
    },
    {
        "id": 357,
        "word": "ward off",
        "turkish": "önlemek",
        "synonyms": [
            "prevent",
            "hinder"
        ],
        "antonyms": [],
        "sentence": "In the winter I take vitamin C to ward off colds."
    },
    {
        "id": 358,
        "word": "sane",
        "turkish": "aklı başında",
        "synonyms": [
            "plausible",
            "sensible",
            "sound",
            "reasonable"
        ],
        "antonyms": [
            "insane"
        ],
        "sentence": "It was a sane decision and one we all respected."
    },
    {
        "id": 359,
        "word": "asylum",
        "turkish": "sığınak, barınak, akıl hastanesi, iltica",
        "synonyms": [
            "shelter",
            "protection"
        ],
        "antonyms": [],
        "sentence": "He was sent to asylum for treatment."
    },
    {
        "id": 360,
        "word": "appraise",
        "turkish": "değerlendirmek, değer biçmek",
        "synonyms": [
            "assess",
            "evaluate",
            "estimate",
            "value",
            "rate"
        ],
        "antonyms": [
            "undervalue",
            "discard"
        ],
        "sentence": "The experts will appraise the individuals’ needs."
    },
    {
        "id": 361,
        "word": "brilliant",
        "turkish": "zeki, dahice",
        "synonyms": [
            "clever",
            "smart",
            "intelligent"
        ],
        "antonyms": [
            "stupid"
        ],
        "sentence": "Her mother was a brilliant journalist."
    },
    {
        "id": 362,
        "word": "aggravate",
        "turkish": "kötüleştirmek, şiddetlendirmek",
        "synonyms": [
            "worsen",
            "intensify",
            "deteriorate"
        ],
        "antonyms": [
            "diminish",
            "lessen",
            "flourish"
        ],
        "sentence": "The treatment only aggravated the condition."
    },
    {
        "id": 363,
        "word": "affect",
        "turkish": "etkilemek",
        "synonyms": [
            "influence",
            "impact",
            "impress"
        ],
        "antonyms": [],
        "sentence": "Both buildings were badly affected by the fire."
    },
    {
        "id": 364,
        "word": "acclaim",
        "turkish": "övmek, beğenmek",
        "synonyms": [
            "praise",
            "extol",
            "commend"
        ],
        "antonyms": [
            "criticize",
            "denounce",
            "condemn"
        ],
        "sentence": "Though it was acclaimed, the novel did not sell well."
    },
    {
        "id": 365,
        "word": "enthusiastic",
        "turkish": "istekli, hevesli",
        "synonyms": [
            "eager",
            "earnest"
        ],
        "antonyms": [
            "unwilling",
            "reluctant"
        ],
        "sentence": "You don't seem very enthusiastic about the party - don't you want to go tonight?"
    },
    {
        "id": 366,
        "word": "entire",
        "turkish": "bütün, tüm",
        "synonyms": [
            "whole",
            "complete"
        ],
        "antonyms": [
            "partial",
            "incomplete",
            "broken"
        ],
        "sentence": "He'd spent the entire journey sleeping."
    },
    {
        "id": 367,
        "word": "destiny",
        "turkish": "kader",
        "synonyms": [
            "fate",
            "lot",
            "fortune"
        ],
        "antonyms": [],
        "sentence": "The destiny of our nation depends on this vote."
    },
    {
        "id": 368,
        "word": "consequence",
        "turkish": "sonuç, etki",
        "synonyms": [
            "result",
            "effect"
        ],
        "antonyms": [
            "cause"
        ],
        "sentence": "If you insist on eating so much, you'll have to take the consequences!"
    },
    {
        "id": 369,
        "word": "client",
        "turkish": "müşteri, müvekkil",
        "synonyms": [
            "customer",
            "consumer"
        ],
        "antonyms": [
            "producer",
            "manufacturer"
        ],
        "sentence": "Mr. Black has been a client of this firm for many years."
    },
    {
        "id": 370,
        "word": "dazzle",
        "turkish": "şaşırtmak, etkilemek",
        "synonyms": [
            "impress",
            "astonish",
            "surprise",
            "perplex"
        ],
        "antonyms": [],
        "sentence": "I was dazzled by his good looks."
    },
    {
        "id": 371,
        "word": "contrive",
        "turkish": "icat etmek, yaratmak, başarmak",
        "synonyms": [
            "invent",
            "devise",
            "manage"
        ],
        "antonyms": [
            "fail"
        ],
        "sentence": "Somehow she contrived to get tickets for the concert."
    },
    {
        "id": 372,
        "word": "loath",
        "turkish": "isteksiz",
        "synonyms": [
            "unwilling",
            "reluctant"
        ],
        "antonyms": [
            "eager",
            "enthusiastic"
        ],
        "sentence": "I'm loath to spend it all at once."
    },
    {
        "id": 373,
        "word": "obscure",
        "turkish": "belirsiz, karanlık, silik",
        "synonyms": [
            "vague",
            "ambigious"
        ],
        "antonyms": [
            "definite",
            "clear"
        ],
        "sentence": "There are obscure islands in the Pacific."
    },
    {
        "id": 374,
        "word": "paramount",
        "turkish": "son derece önemli",
        "synonyms": [
            "supreme"
        ],
        "antonyms": [
            "trivial",
            "unimportant"
        ],
        "sentence": "There are many priorities, but reducing the budget deficit is of paramount importance."
    },
    {
        "id": 375,
        "word": "foster",
        "turkish": "teşvik etmek, büyütmek, bakmak",
        "synonyms": [
            "encourage",
            "nurture",
            "bring up"
        ],
        "antonyms": [
            "discourage"
        ],
        "sentence": "I'm trying to foster an interest in classical music in my children."
    },
    {
        "id": 376,
        "word": "fancy",
        "turkish": "hayal etmek, sanmak, -den hoşlanmak, istemek",
        "synonyms": [
            "imagine",
            "suppose"
        ],
        "antonyms": [],
        "sentence": "I fancied you were angry."
    },
    {
        "id": 377,
        "word": "handle",
        "turkish": "ele almak, baş etmek",
        "synonyms": [
            "deal with",
            "manage",
            "direct"
        ],
        "antonyms": [],
        "sentence": "I think that he has handled the situation very well."
    },
    {
        "id": 378,
        "word": "infringe",
        "turkish": "çiğnemek, ihlal etmek",
        "synonyms": [
            "break",
            "violate",
            "disobey"
        ],
        "antonyms": [
            "keep",
            "obey",
            "comply with",
            "conform to",
            "abide by"
        ],
        "sentence": "They infringed building regulations."
    },
    {
        "id": 379,
        "word": "interact",
        "turkish": "etkileşimde bulunmak",
        "synonyms": [
            "act on each other"
        ],
        "antonyms": [],
        "sentence": "Dominique's teacher says that she interacts well with the other children."
    },
    {
        "id": 380,
        "word": "prohibit",
        "turkish": "yasaklamak, menetmek",
        "synonyms": [
            "ban",
            "forbid"
        ],
        "antonyms": [
            "allow",
            "let"
        ],
        "sentence": "Motor vehicles are prohibited from driving in the town centre."
    },
    {
        "id": 381,
        "word": "submit",
        "turkish": "teslim etmek, sunmak",
        "synonyms": [
            "hand in",
            "present"
        ],
        "antonyms": [],
        "sentence": "You must submit your application before January 1st."
    },
    {
        "id": 382,
        "word": "flair",
        "turkish": "yetenek",
        "synonyms": [
            "ability",
            "talent",
            "gift",
            "knack"
        ],
        "antonyms": [],
        "sentence": "He has a flair for learning languages."
    },
    {
        "id": 383,
        "word": "mishap",
        "turkish": "aksilik, kaza",
        "synonyms": [
            "misfortune",
            "unfortunate accident"
        ],
        "antonyms": [],
        "sentence": "The parade was very well organised and passed without mishap."
    },
    {
        "id": 384,
        "word": "relevant",
        "turkish": "ilgili, alakalı, konuyla ilgili, yerinde, -e uygun",
        "synonyms": [
            "related",
            "pertinent"
        ],
        "antonyms": [
            "irrelevant"
        ],
        "sentence": "Education should be relevant to the child's needs."
    },
    {
        "id": 385,
        "word": "refrain from",
        "turkish": "-den kaçınmak, -den çekinmek",
        "synonyms": [
            "abstain from",
            "avoid doing sth"
        ],
        "antonyms": [],
        "sentence": "We refrained from talking until we knew that the room was safe."
    },
    {
        "id": 386,
        "word": "legacy",
        "turkish": "miras",
        "synonyms": [
            "inheritance",
            "bequest"
        ],
        "antonyms": [],
        "sentence": "An elderly cousin left her a small legacy."
    },
    {
        "id": 387,
        "word": "legible",
        "turkish": "okunaklı, okunabilir",
        "synonyms": [
            "well-written"
        ],
        "antonyms": [
            "illegible"
        ],
        "sentence": "Her handwriting is barely legible."
    },
    {
        "id": 388,
        "word": "crucial",
        "turkish": "önemli",
        "synonyms": [
            "important",
            "vital",
            "significant"
        ],
        "antonyms": [
            "trivial",
            "unimportant"
        ],
        "sentence": "It is crucial that the problem be tackled immediately."
    },
    {
        "id": 389,
        "word": "culminate in",
        "turkish": "zirveye ulaşmak, son bulmak, ile sonuçlanmak",
        "synonyms": [
            "reach the top",
            "finalize"
        ],
        "antonyms": [
            "come to the bottom",
            "fall"
        ],
        "sentence": "Their many years of research have finally culminated in a cure for the disease."
    },
    {
        "id": 390,
        "word": "delinquency",
        "turkish": "suçluluk",
        "synonyms": [
            "misdeed",
            "misconduct"
        ],
        "antonyms": [
            "innocence"
        ],
        "sentence": "There is a high rate of juvenile delinquency in this area."
    },
    {
        "id": 391,
        "word": "circumstantial",
        "turkish": "ikinci derecede, durumla ilgili, ayrıntılı",
        "synonyms": [
            "secondary",
            "indirect"
        ],
        "antonyms": [
            "initial",
            "first",
            "direct"
        ],
        "sentence": "The case against her was circumstantial."
    },
    {
        "id": 392,
        "word": "confirm",
        "turkish": "doğrulamak, teyit etmek",
        "synonyms": [
            "verify",
            "substantiate",
            "approve",
            "endorse"
        ],
        "antonyms": [
            "cancel",
            "annul"
        ],
        "sentence": "Six people have confirmed that they will be attending but ten haven't replied yet."
    },
    {
        "id": 393,
        "word": "condense",
        "turkish": "yoğunlaştırmak",
        "synonyms": [
            "compress",
            "compact"
        ],
        "antonyms": [],
        "sentence": "Water vapour in the air condenses into fog."
    },
    {
        "id": 394,
        "word": "disparity",
        "turkish": "farklılık, fark, boşluk, uçurum",
        "synonyms": [
            "difference",
            "gap"
        ],
        "antonyms": [
            "similarity"
        ],
        "sentence": "The disparity between rich and poor is growing."
    },
    {
        "id": 395,
        "word": "admit",
        "turkish": "kabul etmek, itiraf etmek.",
        "synonyms": [
            "accept",
            "acknowledge",
            "approve",
            "confess"
        ],
        "antonyms": [
            "deny",
            "reject",
            "refuse",
            "turn down"
        ],
        "sentence": "At first he denied stealing the money, but he later admitted it."
    },
    {
        "id": 396,
        "word": "artificial",
        "turkish": "yapay, doğal olmayan",
        "synonyms": [
            "unnatural",
            "unreal",
            "synthetic"
        ],
        "antonyms": [
            "natural",
            "genuine"
        ],
        "sentence": "Her smile was rather artificial."
    },
    {
        "id": 397,
        "word": "aspire",
        "turkish": "arzu etmek, istemek",
        "synonyms": [
            "desire",
            "long for",
            "hope",
            "wish"
        ],
        "antonyms": [
            "be unwilling",
            "be reluctant"
        ],
        "sentence": "Few people who aspire to fame ever achieve it."
    },
    {
        "id": 398,
        "word": "sanction",
        "turkish": "yaptırım",
        "synonyms": [
            "penalty",
            "punishment",
            "restriction"
        ],
        "antonyms": [],
        "sentence": "Economic sanctions will only be lifted when the aggressor nation withdraws its troops."
    },
    {
        "id": 399,
        "word": "tend to",
        "turkish": "eğilimli olmak",
        "synonyms": [
            "be inclined to",
            "apt to"
        ],
        "antonyms": [],
        "sentence": "We tend to get cold winters and warm, dry summers in this part of the country."
    },
    {
        "id": 400,
        "word": "testimony",
        "turkish": "ifade, tanıklık, kanıt, delil",
        "synonyms": [
            "evidence",
            "statement"
        ],
        "antonyms": [],
        "sentence": "Some doubts have been expressed about his testimony."
    },
    {
        "id": 401,
        "word": "sort",
        "turkish": "sıralamak, sınıflandırmak",
        "synonyms": [
            "classify",
            "arrange"
        ],
        "antonyms": [],
        "sentence": "You can use the computer to sort the newspaper articles alphabetically, by date, or by subject."
    },
    {
        "id": 402,
        "word": "virtually",
        "turkish": "hemen hemen, neredeyse",
        "synonyms": [
            "almost",
            "practically",
            "nearly",
            "approximately",
            "wellnigh"
        ],
        "antonyms": [
            "exactly",
            "directly",
            "definitely"
        ],
        "sentence": "That wine stain on my shirt has virtually disappeared."
    },
    {
        "id": 403,
        "word": "appalling",
        "turkish": "korkutucu, ürkütücü",
        "synonyms": [
            "terrifying",
            "shocking",
            "frightful",
            "dreadful",
            "awful"
        ],
        "antonyms": [
            "reassuring"
        ],
        "sentence": "Prisoners are being kept in most appalling conditions."
    },
    {
        "id": 404,
        "word": "anxious",
        "turkish": "endişeli, kaygılı",
        "synonyms": [
            "worried",
            "concerned",
            "troubled",
            "apprehensive"
        ],
        "antonyms": [
            "calm",
            "confident",
            "cool"
        ],
        "sentence": "The drought has made farmers anxious about the harvest."
    },
    {
        "id": 405,
        "word": "achieve",
        "turkish": "başarmak, üstesinden gelmek",
        "synonyms": [
            "succeed",
            "accomplish",
            "attain",
            "acquire",
            "gain",
            "earn"
        ],
        "antonyms": [
            "fail",
            "neglect",
            "lose"
        ],
        "sentence": "I've been working all day, but I feel as if I achieved nothing."
    },
    {
        "id": 406,
        "word": "emerge from",
        "turkish": "-den çıkmak, -den gelişmek, -den ortaya çıkmak",
        "synonyms": [
            "develope out of",
            "arise from",
            "result from"
        ],
        "antonyms": [
            "lead to",
            "give rise to",
            "result in"
        ],
        "sentence": "These problems emerge from unknown factors."
    },
    {
        "id": 407,
        "word": "collide",
        "turkish": "çarpışmak",
        "synonyms": [
            "crash",
            "strike",
            "bump into"
        ],
        "antonyms": [],
        "sentence": "The two lorries collided at the crossroads."
    },
    {
        "id": 408,
        "word": "convict",
        "turkish": "mahkum etmek, tutuklamak, suçlamak",
        "synonyms": [
            "find guilty"
        ],
        "antonyms": [
            "acquit",
            "release"
        ],
        "sentence": "He has twice been convicted of robbery/arson."
    },
    {
        "id": 409,
        "word": "corroborate",
        "turkish": "doğrulamak, teyit etmek",
        "synonyms": [
            "confirm",
            "back up",
            "support"
        ],
        "antonyms": [
            "refuse",
            "reject",
            "invalidate"
        ],
        "sentence": "Recent research seems to corroborate his theory."
    },
    {
        "id": 410,
        "word": "miserable",
        "turkish": "sefil, mutsuz, neşesiz",
        "synonyms": [
            "unhappy",
            "cheerless",
            "awful"
        ],
        "antonyms": [
            "happy",
            "glad"
        ],
        "sentence": "She's miserable living on her own."
    },
    {
        "id": 411,
        "word": "omit",
        "turkish": "çıkarmak",
        "synonyms": [
            "delete",
            "leave out"
        ],
        "antonyms": [
            "include"
        ],
        "sentence": "She was omitted from the list of contributors to the report."
    },
    {
        "id": 412,
        "word": "occupy",
        "turkish": "işgal etmek",
        "synonyms": [
            "inhabit",
            "reside",
            "lodge in"
        ],
        "antonyms": [
            "evacuate"
        ],
        "sentence": "The bathroom's occupied - I think John's in there."
    },
    {
        "id": 413,
        "word": "imminent",
        "turkish": "yakında olmasından korkulan, yakın, yaklaşan",
        "synonyms": [
            "approaching"
        ],
        "antonyms": [
            "distant"
        ],
        "sentence": "A strike is imminent."
    },
    {
        "id": 414,
        "word": "illusion",
        "turkish": "yanılgı",
        "synonyms": [
            "deception",
            "mirage"
        ],
        "antonyms": [
            "reality"
        ],
        "sentence": "He had no illusions about his talents as a singer."
    },
    {
        "id": 415,
        "word": "stationary",
        "turkish": "hareketsiz, sabit",
        "synonyms": [
            "immobile",
            "at rest"
        ],
        "antonyms": [
            "mobile"
        ],
        "sentence": "The rate of inflation has been stationary for several months."
    },
    {
        "id": 416,
        "word": "spark",
        "turkish": "kıvılcım saçmak, başlatmak",
        "synonyms": [
            "generate",
            "produce",
            "initiate"
        ],
        "antonyms": [],
        "sentence": "You can start a fire by rubbing two dry pieces of wood together until it sparks."
    },
    {
        "id": 417,
        "word": "intentional",
        "turkish": "kasıtlı, kasti, bile bile yapılan",
        "synonyms": [
            "deliberate",
            "on purpose",
            "planned"
        ],
        "antonyms": [
            "accidental"
        ],
        "sentence": "Did you leave his name out by accident or was it intentional?"
    },
    {
        "id": 418,
        "word": "lack of",
        "turkish": "yoksun olma, eksiklik",
        "synonyms": [
            "deficiency",
            "shortness"
        ],
        "antonyms": [
            "plenty",
            "abundance"
        ],
        "sentence": "Her only problem is lack of confidence."
    },
    {
        "id": 419,
        "word": "promote",
        "turkish": "terfi etmek, ilerlemek",
        "synonyms": [
            "give a higher position to smb.",
            "aid",
            "foster"
        ],
        "antonyms": [],
        "sentence": "It has long been known that regular exercise promotes all-round good health."
    },
    {
        "id": 420,
        "word": "rare",
        "turkish": "nadir, kıt, az bulunan",
        "synonyms": [
            "scarce"
        ],
        "antonyms": [
            "plentiful",
            "abundant"
        ],
        "sentence": "The museum is full of rare and precious treasures."
    },
    {
        "id": 421,
        "word": "query",
        "turkish": "soru sormak, doğruluğunu araştırmak",
        "synonyms": [
            "question",
            "inquire",
            "ask",
            "suspect"
        ],
        "antonyms": [],
        "sentence": "A few students have queried their marks."
    },
    {
        "id": 422,
        "word": "prior to",
        "turkish": "-den önce",
        "synonyms": [
            "before"
        ],
        "antonyms": [
            "after"
        ],
        "sentence": "The weeks prior to her death were very difficult for the family."
    },
    {
        "id": 423,
        "word": "sustenance",
        "turkish": "beslenme, hayatta kalma",
        "synonyms": [
            "nourishment",
            "nutrition"
        ],
        "antonyms": [],
        "sentence": "During this freezing weather, the food put out by householders is the only chance of sustenance that the birds have."
    },
    {
        "id": 424,
        "word": "stimulate",
        "turkish": "teşvik etmek, uyarmak",
        "synonyms": [
            "arouse",
            "encourage"
        ],
        "antonyms": [
            "discourage"
        ],
        "sentence": "Good teachers should ask questions that stimulate students to think."
    },
    {
        "id": 425,
        "word": "incentive",
        "turkish": "teşvik, motivasyon",
        "synonyms": [
            "motivation",
            "encouragement"
        ],
        "antonyms": [
            "deterrent",
            "disincentive"
        ],
        "sentence": "Bonus payments provide an incentive to work harder."
    },
    {
        "id": 426,
        "word": "grant",
        "turkish": "burs",
        "synonyms": [
            "scholarship",
            "funding",
            "allowance"
        ],
        "antonyms": [],
        "sentence": "They gave/awarded her a grant to study abroad for one year."
    },
    {
        "id": 427,
        "word": "partial",
        "turkish": "kısmi",
        "synonyms": [
            "incomplete"
        ],
        "antonyms": [
            "complete"
        ],
        "sentence": "The general has ordered a partial withdrawal of troops from the area."
    },
    {
        "id": 428,
        "word": "overwhelming",
        "turkish": "karşı konulmaz, çok kuvvetli, bunaltıcı",
        "synonyms": [
            "overpowering"
        ],
        "antonyms": [],
        "sentence": "She felt an overwhelming desire to tell someone about what had happened."
    },
    {
        "id": 429,
        "word": "meticulous",
        "turkish": "özenli, dikkatli",
        "synonyms": [
            "careful"
        ],
        "antonyms": [
            "careless",
            "sloppy"
        ],
        "sentence": "Many hours of this meticulous preparation have gone into writing the book."
    },
    {
        "id": 430,
        "word": "dawn",
        "turkish": "şafak, gündoğuşu",
        "synonyms": [
            "sunrise"
        ],
        "antonyms": [
            "sunset",
            "end"
        ],
        "sentence": "We left as dawn was breaking."
    },
    {
        "id": 431,
        "word": "distinguish",
        "turkish": "ayırt etmek, ayırmak",
        "synonyms": [
            "differentiate"
        ],
        "antonyms": [
            "unite"
        ],
        "sentence": "I sometimes have difficulty distinguishing Spanish from Portuguese."
    },
    {
        "id": 432,
        "word": "detention",
        "turkish": "gözaltına alma",
        "synonyms": [
            "arrest",
            "custody"
        ],
        "antonyms": [
            "release"
        ],
        "sentence": "The detention of the suspect by the police was not as difficult as it was expected."
    },
    {
        "id": 433,
        "word": "faith",
        "turkish": "inanç, güven",
        "synonyms": [
            "belief",
            "conviction",
            "confidence",
            "trust"
        ],
        "antonyms": [
            "distrust",
            "disbelief"
        ],
        "sentence": "Even in the bad times she never lost her faith."
    },
    {
        "id": 434,
        "word": "annual",
        "turkish": "yıllık",
        "synonyms": [
            "yearly",
            "every year",
            "once a year"
        ],
        "antonyms": [
            "daily",
            "weekly"
        ],
        "sentence": "Companies publish annual reports to inform the public."
    },
    {
        "id": 435,
        "word": "adverse",
        "turkish": "negatif, ters, kötü, olumsuz.",
        "synonyms": [
            "harmful",
            "unfavorable",
            "opposite",
            "contrary"
        ],
        "antonyms": [
            "favorable",
            "fortunate",
            "beneficial"
        ],
        "sentence": "So far the drug is thought not to have any adverse effects."
    },
    {
        "id": 436,
        "word": "assess",
        "turkish": "değerlendirmek",
        "synonyms": [
            "evaluate",
            "appraise",
            "value"
        ],
        "antonyms": [],
        "sentence": "Examinations are not the only means of assessing students' ability."
    },
    {
        "id": 437,
        "word": "significant",
        "turkish": "önemli, kayda değer, anlamlı, manalı",
        "synonyms": [
            "crucial",
            "vital",
            "important"
        ],
        "antonyms": [
            "insignificant"
        ],
        "sentence": "There has been a significant increase in the number of women students in recent years."
    },
    {
        "id": 438,
        "word": "tough",
        "turkish": "sert, katı",
        "synonyms": [
            "severe",
            "strict",
            "rigid"
        ],
        "antonyms": [
            "soft",
            "weak"
        ],
        "sentence": "These toys are made from tough plastic."
    },
    {
        "id": 439,
        "word": "undertake",
        "turkish": "üstlenmek, söz vermek",
        "synonyms": [
            "assume",
            "take on"
        ],
        "antonyms": [],
        "sentence": "She undertook not to publish the names of the people involved."
    },
    {
        "id": 440,
        "word": "vertical",
        "turkish": "dikey",
        "synonyms": [
            "perpendicular"
        ],
        "antonyms": [
            "horizontal"
        ],
        "sentence": "She looked over the cliff and found she was standing at the edge of a vertical rock."
    },
    {
        "id": 441,
        "word": "sacrifice",
        "turkish": "fedakarlık yapmak, kurban etmek",
        "synonyms": [
            "relinguish",
            "abandon"
        ],
        "antonyms": [],
        "sentence": "Many women sacrifice careers for their family."
    },
    {
        "id": 442,
        "word": "annul",
        "turkish": "iptal etmek, kabul edilmemek, geçersiz sayılmak (evlilik, yasa vs.)",
        "synonyms": [
            "cancel",
            "repeal",
            "revoke",
            "call off"
        ],
        "antonyms": [
            "confirm",
            "approve",
            "affirm",
            "endorse"
        ],
        "sentence": "His second marriage was annulled since he never divorced his first wife."
    },
    {
        "id": 443,
        "word": "abide by",
        "turkish": "uymak, kabul etmek, bağlı kalmak",
        "synonyms": [
            "obey",
            "comply with",
            "accept",
            "conform to",
            "stick to"
        ],
        "antonyms": [
            "reject",
            "refuse",
            "disobey",
            "break",
            "violate"
        ],
        "sentence": "You had better abide by the rules."
    },
    {
        "id": 444,
        "word": "eternal",
        "turkish": "sonsuz, bitmeyen",
        "synonyms": [
            "infinite",
            "endless"
        ],
        "antonyms": [
            "temporary"
        ],
        "sentence": "Will you two never stop your eternal arguing?"
    },
    {
        "id": 445,
        "word": "ease",
        "turkish": "kolaylaştırmak, azal(t)mak",
        "synonyms": [
            "make easier",
            "facilitate",
            "lessen",
            "alleviate"
        ],
        "antonyms": [
            "aggravate",
            "deteriorate"
        ],
        "sentence": "These pills should ease the pain."
    },
    {
        "id": 446,
        "word": "cruel",
        "turkish": "zalim, acımasız, merhametsiz",
        "synonyms": [
            "brutal",
            "merciless",
            "pitiless"
        ],
        "antonyms": [
            "merciful",
            "gentle"
        ],
        "sentence": "Children can be very cruel to each other at times."
    },
    {
        "id": 447,
        "word": "creep",
        "turkish": "sürünmek",
        "synonyms": [
            "crawl",
            "sneak",
            "wriggle"
        ],
        "antonyms": [
            "run",
            "walk"
        ],
        "sentence": "The spider crept up the wall."
    },
    {
        "id": 448,
        "word": "deplete",
        "turkish": "tüketmek",
        "synonyms": [
            "use up",
            "consume",
            "exhaust"
        ],
        "antonyms": [
            "produce",
            "manufacture"
        ],
        "sentence": "If we continue to deplete the Earth's natural resources, we will cause serious damage to the environment."
    },
    {
        "id": 449,
        "word": "delicate",
        "turkish": "dayanıksız, kırılgan, ince, zarif",
        "synonyms": [
            "fragile",
            "subtle",
            "sensitive"
        ],
        "antonyms": [
            "coarse",
            "thick",
            "strong"
        ],
        "sentence": "Delicate plants need to be kept in a greenhouse during the winter."
    },
    {
        "id": 450,
        "word": "commence",
        "turkish": "başla(t)mak",
        "synonyms": [
            "start",
            "begin",
            "embark on"
        ],
        "antonyms": [
            "finish",
            "end"
        ],
        "sentence": "We will commence building work in August of next year."
    },
    {
        "id": 451,
        "word": "consistent",
        "turkish": "sürekli, istikrarlı, tutarlı",
        "synonyms": [
            "steady",
            "constant"
        ],
        "antonyms": [
            "inconsistent",
            "incompatible"
        ],
        "sentence": "Her work is sometimes good, but the problem is she's not consistent."
    },
    {
        "id": 452,
        "word": "retrieve",
        "turkish": "geri almak, geri getirmek",
        "synonyms": [
            "recover",
            "bring back"
        ],
        "antonyms": [],
        "sentence": "Computers are ideal to store and retrieve information efficiently."
    },
    {
        "id": 453,
        "word": "haphazard",
        "turkish": "tesadüfi",
        "synonyms": [
            "random"
        ],
        "antonyms": [
            "intended",
            "deliberate"
        ],
        "sentence": "He was able to overcome the problem in a haphazard manner."
    },
    {
        "id": 454,
        "word": "glance",
        "turkish": "hızlı bakış, göz atma",
        "synonyms": [
            "brief look",
            "quick view"
        ],
        "antonyms": [],
        "sentence": "She took a glance at her watch and slept again."
    },
    {
        "id": 455,
        "word": "impoverish",
        "turkish": "fakirleştirmek",
        "synonyms": [
            "make poor",
            "deprive"
        ],
        "antonyms": [
            "enrich"
        ],
        "sentence": "Excessive farming has impoverished the soil."
    },
    {
        "id": 456,
        "word": "immune",
        "turkish": "bağışıklık kazanmış",
        "synonyms": [
            "resistant",
            "protected"
        ],
        "antonyms": [
            "susceptible",
            "vulnerable",
            "sensitive",
            "fragile"
        ],
        "sentence": "Most people who've had chicken pox once are immune to it for the rest of their lives."
    },
    {
        "id": 457,
        "word": "inherit",
        "turkish": "miras almak, kalıtım yoluyla elde etmek",
        "synonyms": [
            "receive",
            "derive from a death"
        ],
        "antonyms": [
            "bequeath"
        ],
        "sentence": "Who will inherit the house when he dies?"
    },
    {
        "id": 458,
        "word": "invalid",
        "turkish": "geçersiz",
        "synonyms": [
            "unacceptable",
            "null and void"
        ],
        "antonyms": [
            "valid"
        ],
        "sentence": "I'm afraid your driving licence is invalid in Eastern Europe."
    },
    {
        "id": 459,
        "word": "precaution",
        "turkish": "önlem, tedbir",
        "synonyms": [
            "measure",
            "step",
            "action"
        ],
        "antonyms": [],
        "sentence": "They failed to take the necessary precautions to avoid infection."
    },
    {
        "id": 460,
        "word": "prominent",
        "turkish": "ünlü, tanınmış, belirgin",
        "synonyms": [
            "famous",
            "well-known",
            "eminent"
        ],
        "antonyms": [],
        "sentence": "The government should be playing a more prominent role in promoting human rights."
    },
    {
        "id": 461,
        "word": "preliminary",
        "turkish": "ilk, ön, hazırlayıcı",
        "synonyms": [
            "first",
            "early",
            "initial"
        ],
        "antonyms": [
            "the last",
            "final"
        ],
        "sentence": "Preliminary results show that the vaccine is effective."
    },
    {
        "id": 462,
        "word": "squeeze",
        "turkish": "sıkıştırmak, baskı yapmak, ezmek",
        "synonyms": [
            "press"
        ],
        "antonyms": [],
        "sentence": "Cut the lemon in half and squeeze the juice into the bowl."
    },
    {
        "id": 463,
        "word": "identical",
        "turkish": "benzer, aynı",
        "synonyms": [
            "same",
            "alike"
        ],
        "antonyms": [
            "different"
        ],
        "sentence": "The two rooms were virtually identical."
    },
    {
        "id": 464,
        "word": "greed",
        "turkish": "açgözlü, doyumsuz",
        "synonyms": [
            "insatiable"
        ],
        "antonyms": [
            "satiable"
        ],
        "sentence": "I don't know why I'm eating more - it's not hunger, it's just greed!"
    },
    {
        "id": 465,
        "word": "grim",
        "turkish": "karamsar",
        "synonyms": [
            "gloomy",
            "bleak",
            "pessimistic"
        ],
        "antonyms": [
            "promising",
            "optimistic"
        ],
        "sentence": "The future looks grim."
    },
    {
        "id": 466,
        "word": "modest",
        "turkish": "alçakgönüllü",
        "synonyms": [
            "decent",
            "humble"
        ],
        "antonyms": [
            "arrogant"
        ],
        "sentence": "He is a modest man who never boasts."
    },
    {
        "id": 467,
        "word": "restrain",
        "turkish": "kontrol altında tutmak, sınırlamak",
        "synonyms": [
            "restrict",
            "check",
            "keep under control"
        ],
        "antonyms": [],
        "sentence": "When he started fighting, four police officers were able to restrain him."
    },
    {
        "id": 468,
        "word": "occur",
        "turkish": "meydana gelmek",
        "synonyms": [
            "happen",
            "take place"
        ],
        "antonyms": [],
        "sentence": "If any of these symptoms occur while you are taking the medicine, consult your doctor immediately."
    },
    {
        "id": 469,
        "word": "obstruct",
        "turkish": "engel olmak",
        "synonyms": [
            "block",
            "hinder",
            "impede"
        ],
        "antonyms": [
            "aid",
            "promote"
        ],
        "sentence": "After the earthquake many roads were obstructed by collapsed buildings."
    },
    {
        "id": 470,
        "word": "offspring",
        "turkish": "çocuklar, gelecek nesil",
        "synonyms": [
            "children"
        ],
        "antonyms": [],
        "sentence": "The ages of offspring varies between two and five."
    },
    {
        "id": 471,
        "word": "odor",
        "turkish": "koku",
        "synonyms": [
            "smell"
        ],
        "antonyms": [],
        "sentence": "Inside the room there was the nice odor of a nice lady."
    },
    {
        "id": 472,
        "word": "obstacle",
        "turkish": "engel",
        "synonyms": [
            "barrier",
            "obstruction",
            "impediment"
        ],
        "antonyms": [
            "support",
            "aid"
        ],
        "sentence": "The biggest obstacle in our way was a tree trunk in the road."
    },
    {
        "id": 473,
        "word": "clarity",
        "turkish": "açıklık, netlik",
        "synonyms": [
            "clearness",
            "lucidity",
            "precision"
        ],
        "antonyms": [
            "obscurity"
        ],
        "sentence": "She was phoning from Australia, but I was amazed at the clarity of her voice."
    },
    {
        "id": 474,
        "word": "convey",
        "turkish": "taşımak, nakletmek",
        "synonyms": [
            "carry",
            "transfer",
            "move"
        ],
        "antonyms": [],
        "sentence": "Could you convey a message to Mr Merrick for me, please?"
    },
    {
        "id": 475,
        "word": "differentiate",
        "turkish": "ayırt etmek",
        "synonyms": [
            "discriminate",
            "distinguish"
        ],
        "antonyms": [
            "unite",
            "generalize"
        ],
        "sentence": "We do not differentiate between our workers on the basis of their background or ethnic origin."
    },
    {
        "id": 476,
        "word": "execute",
        "turkish": "uygulamak, yerine getirmek",
        "synonyms": [
            "carry out",
            "implement"
        ],
        "antonyms": [
            "neglect"
        ],
        "sentence": "To execute a plan is a hard job."
    },
    {
        "id": 477,
        "word": "accurate",
        "turkish": "doğru, tam, net",
        "synonyms": [
            "correct",
            "careful",
            "precise",
            "lacking errors",
            "exact"
        ],
        "antonyms": [
            "incorrect",
            "wrong",
            "vague",
            "ambiguous",
            "imprecise"
        ],
        "sentence": "She gave an accurate description of the thieves."
    },
    {
        "id": 478,
        "word": "account for",
        "turkish": "oluşturmak, hesap vermek, açıklamak, sorumlu olmak",
        "synonyms": [
            "be responsible for",
            "explain",
            "form",
            "make up"
        ],
        "antonyms": [
            "be irresponsible for"
        ],
        "sentence": "Women account for the vast majority of our customers."
    },
    {
        "id": 479,
        "word": "ample",
        "turkish": "bol, bereketli",
        "synonyms": [
            "abundant",
            "plentiful",
            "extensive",
            "generous",
            "spacious"
        ],
        "antonyms": [
            "scarce",
            "insufficient",
            "inadequate"
        ],
        "sentence": "There's ample evidence that proves his guilt."
    },
    {
        "id": 480,
        "word": "alert",
        "turkish": "dikkatli, tetikte",
        "synonyms": [
            "wary",
            "watchful",
            "cautious",
            "attentive",
            "ready"
        ],
        "antonyms": [],
        "sentence": "Parents should be alert to sudden changes in children's behaviour."
    },
    {
        "id": 481,
        "word": "accessible",
        "turkish": "ulaşılabilir, erişilebilir",
        "synonyms": [
            "reachable",
            "approachable",
            "available"
        ],
        "antonyms": [
            "unreachable",
            "far",
            "unavailable",
            "inaccessible"
        ],
        "sentence": "The problem is that drugs are very accessible."
    },
    {
        "id": 482,
        "word": "pursuit",
        "turkish": "arayış, uğraş",
        "synonyms": [
            "search",
            "leisure activity"
        ],
        "antonyms": [],
        "sentence": "I don't have much opportunity for leisure pursuits these days."
    },
    {
        "id": 483,
        "word": "calamity",
        "turkish": "felaket",
        "synonyms": [
            "disaster",
            "catastrophe"
        ],
        "antonyms": [
            "prosperity",
            "well-being"
        ],
        "sentence": "The whole city was affected by the irremediable calamity."
    },
    {
        "id": 484,
        "word": "bound",
        "turkish": "zorunlu, kaçınılmaz",
        "synonyms": [
            "inevitable",
            "unavoidable"
        ],
        "antonyms": [
            "avoidable"
        ],
        "sentence": "You're bound to feel nervous about your interview."
    },
    {
        "id": 485,
        "word": "charge with",
        "turkish": "suçlamak",
        "synonyms": [
            "accuse of",
            "blame for"
        ],
        "antonyms": [
            "retreat",
            "acquit"
        ],
        "sentence": "She is charged with murdering her husband."
    },
    {
        "id": 486,
        "word": "undermine",
        "turkish": "zayıflatmak, sarsmak, zarar vermek",
        "synonyms": [
            "weaken",
            "harm"
        ],
        "antonyms": [
            "strengthen"
        ],
        "sentence": "The President has accused two cabinet ministers of working secretly to undermine his position."
    },
    {
        "id": 487,
        "word": "fabric",
        "turkish": "doku, kumaş",
        "synonyms": [
            "structure"
        ],
        "antonyms": [],
        "sentence": "The most quality dress fabric is produced in Turkiye."
    },
    {
        "id": 488,
        "word": "emit",
        "turkish": "yaymak, çıkarmak, salıvermek",
        "synonyms": [
            "release",
            "send out",
            "give off"
        ],
        "antonyms": [
            "absorb",
            "retain",
            "withhold"
        ],
        "sentence": "The machine emits a high-pitched sound when you press the button."
    },
    {
        "id": 489,
        "word": "endorse",
        "turkish": "doğrulamak, onaylamak, desteklemek",
        "synonyms": [
            "approve",
            "ratify",
            "support"
        ],
        "antonyms": [],
        "sentence": "I fully endorse everything the Chairperson has said."
    },
    {
        "id": 490,
        "word": "enhance",
        "turkish": "artırmak",
        "synonyms": [
            "increase",
            "improve"
        ],
        "antonyms": [
            "decrease",
            "diminish"
        ],
        "sentence": "Your chance will be enhanced if you study."
    },
    {
        "id": 491,
        "word": "diminish",
        "turkish": "azal(t)mak",
        "synonyms": [
            "decrease",
            "abate",
            "allay",
            "subside"
        ],
        "antonyms": [
            "increase",
            "magnify",
            "expand"
        ],
        "sentence": "Our house has diminished greatly/sharply/substantially in value over the last six months."
    },
    {
        "id": 492,
        "word": "contemplate",
        "turkish": "düşünmek, tasarlamak",
        "synonyms": [
            "think of",
            "consider"
        ],
        "antonyms": [],
        "sentence": "I'm contemplating going abroad for a year."
    },
    {
        "id": 493,
        "word": "oblivious",
        "turkish": "habersiz",
        "synonyms": [
            "unaware",
            "unconscious"
        ],
        "antonyms": [
            "conscious",
            "aware"
        ],
        "sentence": "The government seems oblivious to the likely effects of the new legislation."
    },
    {
        "id": 494,
        "word": "malnutrition",
        "turkish": "kötü beslenme, dengesiz beslenme, yetersiz beslenme",
        "synonyms": [
            "lack of proper nutrition"
        ],
        "antonyms": [],
        "sentence": "Many of the refugees are suffering from severe malnutrition."
    },
    {
        "id": 495,
        "word": "futile",
        "turkish": "boşuna, nafile",
        "synonyms": [
            "vain",
            "without result"
        ],
        "antonyms": [
            "fertile",
            "worthwhile"
        ],
        "sentence": "All my attempts to cheer her up proved futile."
    },
    {
        "id": 496,
        "word": "holy",
        "turkish": "kutsal",
        "synonyms": [
            "sacred"
        ],
        "antonyms": [
            "wicked",
            "profane"
        ],
        "sentence": "The archeologists have found holy scriptures."
    },
    {
        "id": 497,
        "word": "inadvertently",
        "turkish": "istemeyerek",
        "synonyms": [
            "unintentionally",
            "involuntarily"
        ],
        "antonyms": [
            "voluntarily",
            "deliberately"
        ],
        "sentence": "All authors need to be wary of copying of other people's ideas inadvertently."
    },
    {
        "id": 498,
        "word": "surpass",
        "turkish": "aşmak, geçmek",
        "synonyms": [
            "exceed"
        ],
        "antonyms": [],
        "sentence": "The book's success has surpassed everyone's expectations."
    },
    {
        "id": 499,
        "word": "stubborn",
        "turkish": "inatçı",
        "synonyms": [
            "obstinate",
            "inflexible"
        ],
        "antonyms": [
            "flexible"
        ],
        "sentence": "They have massive rows because they're both so stubborn."
    },
    {
        "id": 500,
        "word": "juvenile",
        "turkish": "gençliğe özgü, genç, olgunlaşmamış, çocuksu",
        "synonyms": [
            "young",
            "childish",
            "immature"
        ],
        "antonyms": [
            "mature",
            "adult"
        ],
        "sentence": "Juvenile crime has increased over recent years."
    },
    {
        "id": 501,
        "word": "prolific",
        "turkish": "verimli, üretken, bereketli",
        "synonyms": [
            "productive",
            "fertile",
            "fruitful"
        ],
        "antonyms": [
            "futile"
        ],
        "sentence": "He was probably the most prolific songwriter of his generation."
    },
    {
        "id": 502,
        "word": "privileged",
        "turkish": "ayrıcalıklı, imtiyazlı",
        "synonyms": [
            "special"
        ],
        "antonyms": [],
        "sentence": "I am privileged to work with the pioneers of silicon technology."
    },
    {
        "id": 503,
        "word": "hamper",
        "turkish": "engellemek",
        "synonyms": [
            "prevent",
            "hinder",
            "impede"
        ],
        "antonyms": [
            "facilitate"
        ],
        "sentence": "Fierce storms have been hampering rescue efforts."
    },
    {
        "id": 504,
        "word": "grievance",
        "turkish": "yakınma, şikayet",
        "synonyms": [
            "complaint"
        ],
        "antonyms": [
            "benefit",
            "privilege"
        ],
        "sentence": "A special committee has been appointed to handle prisoners' grievances."
    },
    {
        "id": 505,
        "word": "hazard",
        "turkish": "tehlike",
        "synonyms": [
            "danger"
        ],
        "antonyms": [],
        "sentence": "The busy traffic entrance was a hazard to pedestrians."
    },
    {
        "id": 506,
        "word": "fluctuate",
        "turkish": "dalgalanmak, değişiklik göstermek",
        "synonyms": [
            "go up and down",
            "wave"
        ],
        "antonyms": [
            "persist",
            "stand fast",
            "stand still"
        ],
        "sentence": "Vegetable prices fluctuate according to the season."
    },
    {
        "id": 507,
        "word": "reign",
        "turkish": "tahtta olmak, hüküm sürmek",
        "synonyms": [
            "rule",
            "power",
            "govern"
        ],
        "antonyms": [],
        "sentence": "Queen Victoria reigned over Britain from 1837 to 1901."
    },
    {
        "id": 508,
        "word": "offend",
        "turkish": "gücendirmek",
        "synonyms": [
            "annoy"
        ],
        "antonyms": [
            "cheer smb. up"
        ],
        "sentence": "You shouldn’t have shouted at her. You offended her."
    },
    {
        "id": 509,
        "word": "oppress",
        "turkish": "eziyet etmek, ezmek, zulmetmek",
        "synonyms": [
            "suppress",
            "trouble"
        ],
        "antonyms": [
            "relax",
            "comfort"
        ],
        "sentence": "For years now, the people have been oppressed by a merciless dictator."
    },
    {
        "id": 510,
        "word": "culprit",
        "turkish": "suçlu, sebep",
        "synonyms": [
            "guilty",
            "criminal",
            "cause",
            "reason"
        ],
        "antonyms": [
            "innocent"
        ],
        "sentence": "Police hope the public will help them find the culprits."
    },
    {
        "id": 511,
        "word": "esteem",
        "turkish": "saygı",
        "synonyms": [
            "respect",
            "regard"
        ],
        "antonyms": [
            "disrespect"
        ],
        "sentence": "There has been a drop in public esteem for teachers."
    },
    {
        "id": 512,
        "word": "expose to",
        "turkish": "maruz bırakmak",
        "synonyms": [
            "subject to",
            "make liable"
        ],
        "antonyms": [],
        "sentence": "It is feared that people living near the power station may have been exposed to radiation."
    },
    {
        "id": 513,
        "word": "temporary",
        "turkish": "geçici",
        "synonyms": [
            "provisional",
            "interim"
        ],
        "antonyms": [
            "constant",
            "permanent"
        ],
        "sentence": "The ceasefire will only provide a temporary solution to the crisis."
    },
    {
        "id": 514,
        "word": "wander",
        "turkish": "gezmek, dolaşmak",
        "synonyms": [
            "walk about",
            "go aimlessly",
            "roam"
        ],
        "antonyms": [
            "remain",
            "stay"
        ],
        "sentence": "We spent the morning wandering around the old part of the city."
    },
    {
        "id": 515,
        "word": "vaccinate",
        "turkish": "aşı yapmak",
        "synonyms": [
            "inoculate"
        ],
        "antonyms": [],
        "sentence": "Our children have been vaccinated for measles and other childhood diseases."
    },
    {
        "id": 516,
        "word": "would-be",
        "turkish": "olası, müstakbel, sözde",
        "synonyms": [
            "most likely",
            "hopeful"
        ],
        "antonyms": [],
        "sentence": "Passengers and crew foiled would-be Russian hijacker."
    },
    {
        "id": 517,
        "word": "sacred",
        "turkish": "kutsal",
        "synonyms": [
            "holy"
        ],
        "antonyms": [
            "secular"
        ],
        "sentence": "People worship in some sacred relics/temples."
    },
    {
        "id": 518,
        "word": "attribute to",
        "turkish": "atfetmek, -e bağlamak",
        "synonyms": [
            "ascribe",
            "assign",
            "refer",
            "associate",
            "connect"
        ],
        "antonyms": [
            "disconnect",
            "seperate"
        ],
        "sentence": "The doctors have attributed the cause of the illness to an unknown virus."
    },
    {
        "id": 519,
        "word": "augment",
        "turkish": "artırmak",
        "synonyms": [
            "increase",
            "launch",
            "rise",
            "go up"
        ],
        "antonyms": [
            "decrease",
            "fall"
        ],
        "sentence": "He had to find an extra work to augment his income."
    },
    {
        "id": 520,
        "word": "abuse",
        "turkish": "kötüye kullanma, suistimal etme, zarar verme",
        "synonyms": [
            "misuse",
            "maltreat",
            "exploit"
        ],
        "antonyms": [
            "protect",
            "cherish",
            "shield",
            "care for",
            "look after"
        ],
        "sentence": "She is continually abusing her authority."
    },
    {
        "id": 521,
        "word": "accept",
        "turkish": "kabul etmek",
        "synonyms": [
            "be consent to receive",
            "assent",
            "comply",
            "approve",
            "accede"
        ],
        "antonyms": [
            "reject",
            "refuse",
            "turn down"
        ],
        "sentence": "I offered her an apology, yet she didn't accept it."
    },
    {
        "id": 522,
        "word": "ancient",
        "turkish": "eski",
        "synonyms": [
            "antique",
            "old",
            "obsolete",
            "aged",
            "old-fashioned"
        ],
        "antonyms": [
            "modern",
            "fresh",
            "new"
        ],
        "sentence": "The people of this tribe have lived in this valley since ancient times."
    },
    {
        "id": 523,
        "word": "astonish",
        "turkish": "şaşırtmak",
        "synonyms": [
            "amaze",
            "startle",
            "perplex",
            "astound"
        ],
        "antonyms": [
            "bore"
        ],
        "sentence": "They were astonished when I announced I was pregnant."
    },
    {
        "id": 524,
        "word": "vie for",
        "turkish": "yarışmak, mücadele etmek",
        "synonyms": [
            "compete",
            "race"
        ],
        "antonyms": [],
        "sentence": "Six candidates are currently vying for the Democratic presidential nomination."
    },
    {
        "id": 525,
        "word": "temperate",
        "turkish": "ılımlı, ölçülü",
        "synonyms": [
            "moderate",
            "mild",
            "calm"
        ],
        "antonyms": [
            "extreme"
        ],
        "sentence": "A temperate climate is rarely seen throughout the world."
    },
    {
        "id": 526,
        "word": "deprive of",
        "turkish": "yoksun bırakmak",
        "synonyms": [
            "take away",
            "be devoid of"
        ],
        "antonyms": [
            "provide",
            "supply"
        ],
        "sentence": "You can't function properly when you're deprived of sleep."
    },
    {
        "id": 527,
        "word": "temper",
        "turkish": "öfke, huysuzluk",
        "synonyms": [
            "anger",
            "annoyance"
        ],
        "antonyms": [
            "patience"
        ],
        "sentence": "He's got a really bad temper."
    },
    {
        "id": 528,
        "word": "desert",
        "turkish": "terketmek",
        "synonyms": [
            "abandon",
            "give up"
        ],
        "antonyms": [
            "arrive",
            "hug"
        ],
        "sentence": "He deserted his wife and family for another woman."
    },
    {
        "id": 529,
        "word": "deplore",
        "turkish": "üzüntü duymak",
        "synonyms": [
            "regret",
            "feel sorry"
        ],
        "antonyms": [
            "feel happy",
            "be pleased"
        ],
        "sentence": "We deeply deplore the loss of life of animals."
    },
    {
        "id": 530,
        "word": "compensate for",
        "turkish": "telafi etmek, bedelini ödemek",
        "synonyms": [
            "make up for"
        ],
        "antonyms": [],
        "sentence": "The authorities promised to compensate for the price rise."
    },
    {
        "id": 531,
        "word": "outcome",
        "turkish": "sonuç",
        "synonyms": [
            "result",
            "consequence"
        ],
        "antonyms": [],
        "sentence": "It's too early to predict the outcome of the meeting."
    },
    {
        "id": 532,
        "word": "overlap",
        "turkish": "üst üste gelmek, örtmek",
        "synonyms": [
            "cover by extension"
        ],
        "antonyms": [],
        "sentence": "The fence is made of panels which overlap each other."
    },
    {
        "id": 533,
        "word": "repent",
        "turkish": "pişman olmak, üzgün hissetmek, tövbe etmek",
        "synonyms": [
            "regret",
            "feel sorry"
        ],
        "antonyms": [],
        "sentence": "He repented of his sins just hours before he died."
    },
    {
        "id": 534,
        "word": "prejudice",
        "turkish": "önyargı, kayırma, taraf tutma",
        "synonyms": [
            "bias",
            "prejudgement"
        ],
        "antonyms": [],
        "sentence": "She is full of prejudice; that is, she is not objective."
    },
    {
        "id": 535,
        "word": "mean",
        "turkish": "cimri",
        "synonyms": [
            "stingy",
            "selfish"
        ],
        "antonyms": [
            "generous"
        ],
        "sentence": "My landlord's very mean with the heating - it's only on for two hours each day."
    },
    {
        "id": 536,
        "word": "gloomy",
        "turkish": "karamsar, karanlık",
        "synonyms": [
            "dark",
            "pessimistic"
        ],
        "antonyms": [
            "encouraging",
            "cheerful",
            "happy"
        ],
        "sentence": "The cemetery is a gloomy place, which makes people sad."
    },
    {
        "id": 537,
        "word": "intangible",
        "turkish": "fiziksel varlığı olmayan, dokunulmaz, elle tutulmayan",
        "synonyms": [
            "untouchable"
        ],
        "antonyms": [
            "touchable"
        ],
        "sentence": "She has that intangible quality which you might call “charisma”."
    },
    {
        "id": 538,
        "word": "talent",
        "turkish": "yetenek, kabiliyet, hüner",
        "synonyms": [
            "ability",
            "gift",
            "aptitude"
        ],
        "antonyms": [
            "inability"
        ],
        "sentence": "Her talent for music showed at an early age."
    },
    {
        "id": 539,
        "word": "submissive",
        "turkish": "itaatkar, uyumlu",
        "synonyms": [
            "obedient",
            "compliant"
        ],
        "antonyms": [
            "rebellious"
        ],
        "sentence": "He was looking for a quiet submissive wife who would obey his every word."
    },
    {
        "id": 540,
        "word": "subsidy",
        "turkish": "mali destek",
        "synonyms": [
            "financial support"
        ],
        "antonyms": [],
        "sentence": "The government is planning to abolish subsidies to farmers."
    },
    {
        "id": 541,
        "word": "swamp",
        "turkish": "bataklık",
        "synonyms": [
            "marsh"
        ],
        "antonyms": [],
        "sentence": "The Everglades are an area of swamp in southern Florida."
    },
    {
        "id": 542,
        "word": "swell",
        "turkish": "şişmek",
        "synonyms": [
            "become bigger"
        ],
        "antonyms": [
            "decrease"
        ],
        "sentence": "It was obvious she had broken her toe, because it immediately started to swell."
    },
    {
        "id": 543,
        "word": "strain",
        "turkish": "gerilim, yük, zorlanma",
        "synonyms": [
            "force",
            "exertion",
            "burden",
            "tension"
        ],
        "antonyms": [],
        "sentence": "The hurricane put such a strain on the bridge that it collapsed."
    },
    {
        "id": 544,
        "word": "inspire",
        "turkish": "ilham vermek, (öfke, sevgi v.b.) uyandırmak, solumak",
        "synonyms": [
            "motivate",
            "encourage"
        ],
        "antonyms": [
            "discourage"
        ],
        "sentence": "The captain's heroic effort inspired them with determination."
    },
    {
        "id": 545,
        "word": "innate",
        "turkish": "doğuştan gelen",
        "synonyms": [
            "inborn",
            "inherited"
        ],
        "antonyms": [
            "incidental"
        ],
        "sentence": "Cyril's most impressive quality was his innate goodness."
    },
    {
        "id": 546,
        "word": "gift",
        "turkish": "yetenek",
        "synonyms": [
            "knack",
            "ability",
            "talent",
            "skill"
        ],
        "antonyms": [
            "inability",
            "weakness"
        ],
        "sentence": "She has an amazing gift for design."
    },
    {
        "id": 547,
        "word": "legend",
        "turkish": "efsane",
        "synonyms": [
            "folk",
            "tale",
            "myth"
        ],
        "antonyms": [
            "fact",
            "truth"
        ],
        "sentence": "She is writing a thesis on Irish legends and mythology."
    },
    {
        "id": 548,
        "word": "revenue",
        "turkish": "gelir, kazanç",
        "synonyms": [
            "income",
            "earnings"
        ],
        "antonyms": [
            "outcome",
            "expense",
            "expenditure"
        ],
        "sentence": "Taxes provide most of the government's revenue."
    },
    {
        "id": 549,
        "word": "nutrition",
        "turkish": "gıda, beslenme",
        "synonyms": [
            "food",
            "nutriment",
            "nourishment"
        ],
        "antonyms": [],
        "sentence": "Good nutrition is essential if patients are to make a quick recovery."
    },
    {
        "id": 550,
        "word": "contemporary",
        "turkish": "çağdaş, aynı zamanda olan",
        "synonyms": [
            "modern"
        ],
        "antonyms": [
            "old-fashioned",
            "ancient"
        ],
        "sentence": "Most of the writers he was contemporary with were interested in the same subjects."
    },
    {
        "id": 551,
        "word": "contentious",
        "turkish": "tartışmalı, çelişkili",
        "synonyms": [
            "controversial"
        ],
        "antonyms": [
            "clear",
            "concise",
            "undisputed"
        ],
        "sentence": "She has some rather contentious views on education."
    },
    {
        "id": 552,
        "word": "contend",
        "turkish": "iddia etmek, öne sürmek",
        "synonyms": [
            "claim",
            "assert",
            "allege",
            "maintain"
        ],
        "antonyms": [],
        "sentence": "The lawyer contended that her client had never been even near the scene of the crime."
    },
    {
        "id": 553,
        "word": "curiosity",
        "turkish": "merak, ilgi",
        "synonyms": [
            "interest",
            "inquisitive"
        ],
        "antonyms": [
            "being indifferent to sth"
        ],
        "sentence": "I'm burning with curiosity - you must tell me who's won."
    },
    {
        "id": 554,
        "word": "endeavor",
        "turkish": "çaba göstermek",
        "synonyms": [
            "strive",
            "try hard"
        ],
        "antonyms": [
            "ignore"
        ],
        "sentence": "Engineers are endeavouring to locate the source of the problem."
    },
    {
        "id": 555,
        "word": "unease",
        "turkish": "huzursuzluk",
        "synonyms": [
            "discomfort",
            "restlessness"
        ],
        "antonyms": [],
        "sentence": "Growing unease at the prospect of an election is causing fierce arguments within the party."
    },
    {
        "id": 556,
        "word": "unceasing",
        "turkish": "sürekli",
        "synonyms": [
            "perpetual",
            "constant",
            "continuous"
        ],
        "antonyms": [
            "stative"
        ],
        "sentence": "We had a fortnight of unceasing rain."
    },
    {
        "id": 557,
        "word": "trait",
        "turkish": "özellik",
        "synonyms": [
            "property",
            "characteristic",
            "feature"
        ],
        "antonyms": [],
        "sentence": "His sense of humour is one of his best traits."
    },
    {
        "id": 558,
        "word": "seek",
        "turkish": "aramak",
        "synonyms": [
            "look for",
            "search for"
        ],
        "antonyms": [],
        "sentence": "Legal advice should be sought before you take any further action."
    },
    {
        "id": 559,
        "word": "abound in",
        "turkish": "bol, dolu, çok olmak",
        "synonyms": [
            "be plentiful",
            "be rich in",
            "teem with",
            "multiply",
            "flourish"
        ],
        "antonyms": [
            "lessen",
            "decrease",
            "die",
            "decay",
            "fall"
        ],
        "sentence": "Venice abounds in famous hotels."
    },
    {
        "id": 560,
        "word": "spare",
        "turkish": "yedek",
        "synonyms": [
            "extra"
        ],
        "antonyms": [],
        "sentence": "We've got a spare room if you want to stay overnight with us."
    },
    {
        "id": 561,
        "word": "solace",
        "turkish": "teselli",
        "synonyms": [
            "comfort",
            "consolation"
        ],
        "antonyms": [
            "afflict"
        ],
        "sentence": "William Cowper found great solace in these poems during his periods of depression."
    },
    {
        "id": 562,
        "word": "treaty",
        "turkish": "anlaşma",
        "synonyms": [
            "agreement",
            "pack"
        ],
        "antonyms": [],
        "sentence": "We've signed a treaty with neighbouring states to limit emissions of harmful gases."
    },
    {
        "id": 563,
        "word": "tyranny",
        "turkish": "diktatörlük, zorbalık yönetimi, zulüm, zorbalık, gaddarlık",
        "synonyms": [
            "dictatorship",
            "despotism"
        ],
        "antonyms": [
            "democracy"
        ],
        "sentence": "This, as the president promised us, was a war against tyranny."
    },
    {
        "id": 564,
        "word": "expel",
        "turkish": "kovmak, atmak",
        "synonyms": [
            "dismiss"
        ],
        "antonyms": [
            "recruit"
        ],
        "sentence": "My brother was expelled from school for bad behaviour."
    },
    {
        "id": 565,
        "word": "deter from",
        "turkish": "vazgeçirmek, caydırmak",
        "synonyms": [
            "discourage",
            "dissuade"
        ],
        "antonyms": [
            "encourage"
        ],
        "sentence": "High prices are deterring many young people from buying houses."
    },
    {
        "id": 566,
        "word": "debate",
        "turkish": "tartışmak",
        "synonyms": [
            "discuss",
            "argue",
            "dispute"
        ],
        "antonyms": [
            "agree",
            "reconcile"
        ],
        "sentence": "They are debating the topic of education right now."
    },
    {
        "id": 567,
        "word": "decent",
        "turkish": "uygun",
        "synonyms": [
            "appropriate",
            "suitable",
            "proper"
        ],
        "antonyms": [
            "improper"
        ],
        "sentence": "Everyone should be given a decent wage."
    },
    {
        "id": 568,
        "word": "cognitive",
        "turkish": "bilişsel",
        "synonyms": [
            "connected with thinking"
        ],
        "antonyms": [
            "physical"
        ],
        "sentence": "Some of her cognitive functions have been impaired."
    },
    {
        "id": 569,
        "word": "cohesive",
        "turkish": "birleştirici, yapıştırıcı",
        "synonyms": [
            "unified",
            "interconnected"
        ],
        "antonyms": [
            "apart",
            "separate"
        ],
        "sentence": "Cohesive forces have played an important role in the victory."
    },
    {
        "id": 570,
        "word": "nocturnal",
        "turkish": "geceye özgü, geceleyin olan",
        "synonyms": [
            "night",
            "dark"
        ],
        "antonyms": [],
        "sentence": "Most bats are nocturnal."
    },
    {
        "id": 571,
        "word": "moody",
        "turkish": "sinirli, asabi",
        "synonyms": [
            "irritable"
        ],
        "antonyms": [
            "even-tempered"
        ],
        "sentence": "He can be quite moody at times."
    },
    {
        "id": 572,
        "word": "lottery",
        "turkish": "şans oyunu, piyango",
        "synonyms": [
            "chance game",
            "raffle"
        ],
        "antonyms": [],
        "sentence": "If I won the lottery, I would help poor people."
    },
    {
        "id": 573,
        "word": "means",
        "turkish": "araç, yol, yöntem, gelir, para, varlık, servet",
        "synonyms": [
            "way",
            "method"
        ],
        "antonyms": [],
        "sentence": "We need to find some other means of transportation."
    },
    {
        "id": 574,
        "word": "merchandise",
        "turkish": "mal, mülk, ticari eşya",
        "synonyms": [
            "property",
            "good"
        ],
        "antonyms": [],
        "sentence": "Shoppers complained about poor quality merchandise and high prices."
    },
    {
        "id": 575,
        "word": "gratitude",
        "turkish": "şükran, minnettarlık",
        "synonyms": [
            "appreciation",
            "gratefulness"
        ],
        "antonyms": [
            "resentment"
        ],
        "sentence": "She sent them a present to show/express her gratitude."
    },
    {
        "id": 576,
        "word": "fragile",
        "turkish": "kırılabilir, hassas",
        "synonyms": [
            "delicate"
        ],
        "antonyms": [
            "formidable"
        ],
        "sentence": "Be careful with that vase - it's very fragile."
    },
    {
        "id": 577,
        "word": "influence",
        "turkish": "etki",
        "synonyms": [
            "effect",
            "impact"
        ],
        "antonyms": [],
        "sentence": "At the time she was under the influence of her father."
    },
    {
        "id": 578,
        "word": "stamina",
        "turkish": "dayanma gücü",
        "synonyms": [
            "endurance"
        ],
        "antonyms": [],
        "sentence": "The triathlon is a great test of stamina."
    },
    {
        "id": 579,
        "word": "staple",
        "turkish": "başlıca",
        "synonyms": [
            "chief",
            "main",
            "principal"
        ],
        "antonyms": [
            "minor",
            "inferior"
        ],
        "sentence": "Prices of staple foods such as wheat and vegetables have also been increasing."
    },
    {
        "id": 580,
        "word": "invade",
        "turkish": "istila etmek",
        "synonyms": [
            "occupy",
            "enter by force"
        ],
        "antonyms": [
            "abandon"
        ],
        "sentence": "All the villages were invaded during the war."
    },
    {
        "id": 581,
        "word": "invariably",
        "turkish": "değişmez şekilde, daima, sürekli",
        "synonyms": [
            "always",
            "constantly"
        ],
        "antonyms": [
            "momentarily",
            "instantly"
        ],
        "sentence": "The train is invariably late."
    },
    {
        "id": 582,
        "word": "subsistence",
        "turkish": "hayatta kalma",
        "synonyms": [
            "survival",
            "continuation"
        ],
        "antonyms": [],
        "sentence": "This money is to provide a basic subsistence and should not be paid to someone who receives other income."
    },
    {
        "id": 583,
        "word": "take sth. for granted",
        "turkish": "gerçek değerini vermemek, düşünmeden öyle olduğunu varsaymak",
        "synonyms": [
            "assume",
            "presume"
        ],
        "antonyms": [],
        "sentence": "The editors felt that the publisher was taking them for granted."
    },
    {
        "id": 584,
        "word": "insane",
        "turkish": "çılgın, deli",
        "synonyms": [
            "crazy",
            "mad"
        ],
        "antonyms": [
            "sane",
            "sensible"
        ],
        "sentence": "I sometimes think I'm going insane."
    },
    {
        "id": 585,
        "word": "humor",
        "turkish": "mizah",
        "synonyms": [
            "joking"
        ],
        "antonyms": [
            "seriousness"
        ],
        "sentence": "He's got a great sense of humour."
    },
    {
        "id": 586,
        "word": "scholar",
        "turkish": "bilgin, araştırmacı",
        "synonyms": [
            "academic",
            "researcher"
        ],
        "antonyms": [],
        "sentence": "Dr. Miles was a distinguished scholar of Russian history."
    },
    {
        "id": 587,
        "word": "reprisal",
        "turkish": "misilleme, aynen karşılığını yapma",
        "synonyms": [
            "counter-attack",
            "retaliation"
        ],
        "antonyms": [],
        "sentence": "The attack was in reprisal for the kidnapping of their leaders."
    },
    {
        "id": 588,
        "word": "ostensibly",
        "turkish": "görünürde, sözde",
        "synonyms": [
            "apparently",
            "seemingly"
        ],
        "antonyms": [],
        "sentence": "He has spent the past three months in Florida, ostensibly for medical treatment, but in actual fact to avoid prosecution for a series of notorious armed robberies."
    },
    {
        "id": 589,
        "word": "predominantly",
        "turkish": "başlıca, baskın şekilde, çoğunlukla",
        "synonyms": [
            "mainly",
            "chiefly"
        ],
        "antonyms": [
            "partly"
        ],
        "sentence": "She predominantly dances, but she also sings."
    },
    {
        "id": 590,
        "word": "compare",
        "turkish": "karşılaştırmak",
        "synonyms": [
            "match",
            "relate",
            "correspond"
        ],
        "antonyms": [
            "contrast"
        ],
        "sentence": "This road is quite busy compared to/with ours."
    },
    {
        "id": 591,
        "word": "contest",
        "turkish": "yarışmak, mücadele etmek",
        "synonyms": [
            "challenge",
            "dispute",
            "compete for"
        ],
        "antonyms": [],
        "sentence": "The medal is being keenly contested by eighty gymnasts."
    },
    {
        "id": 592,
        "word": "conclusive",
        "turkish": "kesin, kati, tartışılmaz",
        "synonyms": [
            "decisive",
            "indisputable"
        ],
        "antonyms": [
            "inconclusive",
            "vague",
            "uncertain"
        ],
        "sentence": "They claim there is no conclusive evidence that any murders take place."
    },
    {
        "id": 593,
        "word": "depreciate",
        "turkish": "değer kaybet(tir)mek",
        "synonyms": [
            "decline in value"
        ],
        "antonyms": [],
        "sentence": "Our car depreciated by £1500 in the first year we owned it."
    },
    {
        "id": 594,
        "word": "descent",
        "turkish": "soy, köken",
        "synonyms": [
            "ancestry",
            "origin"
        ],
        "antonyms": [],
        "sentence": "She's a woman of French descent."
    },
    {
        "id": 595,
        "word": "underestimate",
        "turkish": "küçümsemek, hafife almak",
        "synonyms": [
            "minimize",
            "belittle"
        ],
        "antonyms": [
            "maximize",
            "exaggerate"
        ],
        "sentence": "One shouldn't underestimate the difficulties of getting all the political parties to the conference table."
    },
    {
        "id": 596,
        "word": "trace",
        "turkish": "iz",
        "synonyms": [
            "sign",
            "mark"
        ],
        "antonyms": [],
        "sentence": "He attempted to cover up all the traces of his crime."
    },
    {
        "id": 597,
        "word": "untapped",
        "turkish": "dokunulmamış, el sürülmemiş",
        "synonyms": [
            "unused",
            "untouched",
            "maiden",
            "virgin"
        ],
        "antonyms": [
            "tapped"
        ],
        "sentence": "The country's forests are largely untapped resources."
    },
    {
        "id": 598,
        "word": "unsanitary",
        "turkish": "kirli, sağlıksız",
        "synonyms": [
            "not clean",
            "polluted"
        ],
        "antonyms": [
            "sanitary"
        ],
        "sentence": "Measures must be taken against unsanitary living conditions."
    },
    {
        "id": 599,
        "word": "sedentary",
        "turkish": "oturarak, hareketsiz, masabaşı",
        "synonyms": [
            "sitting",
            "inactive"
        ],
        "antonyms": [
            "active",
            "walking"
        ],
        "sentence": "A sedentary job/occupation makes some bored."
    },
    {
        "id": 600,
        "word": "ridiculous",
        "turkish": "gülünç, saçma",
        "synonyms": [
            "absurd",
            "funny"
        ],
        "antonyms": [
            "reasonable",
            "logical",
            "sound"
        ],
        "sentence": "It's ridiculous to expect a two-year-old to be able to read!"
    },
    {
        "id": 601,
        "word": "ritual",
        "turkish": "dinsel tören, ayin, seremoni",
        "synonyms": [
            "ceremony"
        ],
        "antonyms": [],
        "sentence": "Different religions have different rituals."
    },
    {
        "id": 602,
        "word": "abandon",
        "turkish": "terketmek, bırakmak, vazgeçmek",
        "synonyms": [
            "give up",
            "leave",
            "desert",
            "forsake"
        ],
        "antonyms": [
            "keep",
            "retain",
            "continue",
            "uphold",
            "maintain"
        ],
        "sentence": "The party abandoned some of its policies."
    },
    {
        "id": 603,
        "word": "cheat",
        "turkish": "kopya çekmek, aldatmak",
        "synonyms": [
            "copy",
            "deceive",
            "swindle",
            "trick"
        ],
        "antonyms": [
            "to be honest",
            "to be frank"
        ],
        "sentence": "She cheated in the test by copying from the boy in the front."
    },
    {
        "id": 604,
        "word": "cease",
        "turkish": "durmak, durdurmak",
        "synonyms": [
            "stop"
        ],
        "antonyms": [
            "continue",
            "keep on"
        ],
        "sentence": "The company has decided to cease all operations."
    },
    {
        "id": 605,
        "word": "beneficial",
        "turkish": "faydalı, yararlı, olumlu",
        "synonyms": [
            "useful"
        ],
        "antonyms": [
            "useless",
            "futile"
        ],
        "sentence": "The improvement in sales figures had a beneficial effect on the company."
    },
    {
        "id": 606,
        "word": "bewilder",
        "turkish": "şaşır(t)mak, hayrete düşürmek",
        "synonyms": [
            "confuse",
            "astonish"
        ],
        "antonyms": [],
        "sentence": "The instructions completely bewildered me."
    },
    {
        "id": 607,
        "word": "dwell",
        "turkish": "yaşamak, yerleşmek",
        "synonyms": [
            "live",
            "inhabit"
        ],
        "antonyms": [],
        "sentence": "She dwelt in remote parts of Asia for many years."
    },
    {
        "id": 608,
        "word": "exert",
        "turkish": "kullanmak, uygulamak",
        "synonyms": [
            "use",
            "make use of",
            "utilize"
        ],
        "antonyms": [],
        "sentence": "Some managers exert considerable pressure on their staff to work extra hours without being paid."
    },
    {
        "id": 609,
        "word": "evade",
        "turkish": "kaçırmak, kurtulmak",
        "synonyms": [
            "escape",
            "avoid"
        ],
        "antonyms": [
            "stay",
            "keep standstill"
        ],
        "sentence": "Just give me an answer and do not try evading the question!"
    },
    {
        "id": 610,
        "word": "explode",
        "turkish": "patlamak, infilak etmek",
        "synonyms": [
            "go off"
        ],
        "antonyms": [],
        "sentence": "A bomb exploded at one of London's busiest railway stations this morning."
    },
    {
        "id": 611,
        "word": "commemorate",
        "turkish": "anmak, hatırlamak",
        "synonyms": [
            "celebrate",
            "honor"
        ],
        "antonyms": [
            "forget"
        ],
        "sentence": "A statue has been built to commemorate the 100th anniversary of the poet's birthday."
    },
    {
        "id": 612,
        "word": "perish",
        "turkish": "yok olmak, çürümek",
        "synonyms": [
            "die out",
            "disappear"
        ],
        "antonyms": [
            "blossom"
        ],
        "sentence": "Three hundred people perished in the earthquake."
    },
    {
        "id": 613,
        "word": "nonsense",
        "turkish": "saçma",
        "synonyms": [
            "irrational",
            "ridiculous",
            "absurd"
        ],
        "antonyms": [
            "rational",
            "logical",
            "plausible",
            "sensible",
            "reasonable"
        ],
        "sentence": "This report is nonsense and nothing but a waste of paper."
    },
    {
        "id": 614,
        "word": "notify",
        "turkish": "bildirmek, bilgilendirmek, haber vermek",
        "synonyms": [
            "inform"
        ],
        "antonyms": [
            "conceal",
            "misinform"
        ],
        "sentence": "The school is required to notify parents if their children fail to come to school."
    },
    {
        "id": 615,
        "word": "resume",
        "turkish": "yeniden başlamak, kaldığı yerden devam etmek",
        "synonyms": [
            "start again",
            "go back"
        ],
        "antonyms": [
            "finish"
        ],
        "sentence": "Please resume your seats, the performance will continue in two minutes."
    },
    {
        "id": 616,
        "word": "muster",
        "turkish": "toplamak, biraraya getirmek",
        "synonyms": [
            "collect",
            "gather",
            "assemble"
        ],
        "antonyms": [
            "disperse"
        ],
        "sentence": "The general mustered his troops."
    },
    {
        "id": 617,
        "word": "lure",
        "turkish": "cezbetmek, çekmek",
        "synonyms": [
            "attract",
            "allure",
            "entice"
        ],
        "antonyms": [],
        "sentence": "Supermarket chains try to lure customers with price discounts."
    },
    {
        "id": 618,
        "word": "furious",
        "turkish": "kızgın",
        "synonyms": [
            "angry"
        ],
        "antonyms": [
            "calm"
        ],
        "sentence": "I was late and he was furious with me."
    },
    {
        "id": 619,
        "word": "prosper",
        "turkish": "gelişmek, zenginleşmek, başarılı olmak",
        "synonyms": [
            "flourish",
            "thrive"
        ],
        "antonyms": [],
        "sentence": "A lot of microchip manufacturing companies prospered during that time."
    },
    {
        "id": 620,
        "word": "disaster",
        "turkish": "felaket",
        "synonyms": [
            "calamity",
            "catastrophe"
        ],
        "antonyms": [
            "prosperity",
            "blessing",
            "well-being"
        ],
        "sentence": "This is one of the worst natural disasters I have ever witnessed."
    },
    {
        "id": 621,
        "word": "frustrate",
        "turkish": "hayal kırıklığına uğratmak, üzmek",
        "synonyms": [
            "disappoint"
        ],
        "antonyms": [
            "cheer up",
            "entertain"
        ],
        "sentence": "It frustrates me that I'm not able to put any of my ideas into practice."
    },
    {
        "id": 622,
        "word": "illuminate",
        "turkish": "açıklamak, aydınlatmak",
        "synonyms": [
            "clarify",
            "shed light on"
        ],
        "antonyms": [
            "darken",
            "obscure"
        ],
        "sentence": "Some articles which illuminate these issues are necessary."
    },
    {
        "id": 623,
        "word": "inquire",
        "turkish": "sormak, soruşturmak",
        "synonyms": [
            "ask",
            "investigate"
        ],
        "antonyms": [],
        "sentence": "\"Where are we going?\" he inquired politely."
    },
    {
        "id": 624,
        "word": "infer",
        "turkish": "çıkarım yapmak",
        "synonyms": [
            "conclude",
            "deduce"
        ],
        "antonyms": [],
        "sentence": "I inferred from her face expression that she wanted to leave."
    },
    {
        "id": 625,
        "word": "naive",
        "turkish": "saf",
        "synonyms": [
            "foolish",
            "credulous"
        ],
        "antonyms": [
            "shrewe"
        ],
        "sentence": "She was very naive to believe that he would stay with her."
    },
    {
        "id": 626,
        "word": "moral",
        "turkish": "ahlaki, etik",
        "synonyms": [
            "ethical",
            "virtuos"
        ],
        "antonyms": [
            "immoral"
        ],
        "sentence": "It's her moral obligation to tell the police what she knows."
    },
    {
        "id": 627,
        "word": "resolution",
        "turkish": "karar tasarısı, önerge, teklif",
        "synonyms": [
            "decision"
        ],
        "antonyms": [],
        "sentence": "Joint resolution has been presented to the Parliament."
    },
    {
        "id": 628,
        "word": "reminiscent",
        "turkish": "-i anımsatan, -i hatırlatan",
        "synonyms": [
            "remindful"
        ],
        "antonyms": [],
        "sentence": "This song is so reminiscent of my adolescence."
    },
    {
        "id": 629,
        "word": "redundant",
        "turkish": "gereksiz, fazla, işsiz",
        "synonyms": [
            "unnecessary",
            "inessential"
        ],
        "antonyms": [
            "necessary",
            "essential"
        ],
        "sentence": "To keep the company alive, half the workforce is being made redundant."
    },
    {
        "id": 630,
        "word": "negligible",
        "turkish": "önemsiz",
        "synonyms": [
            "unimportant",
            "insignificant"
        ],
        "antonyms": [
            "important"
        ],
        "sentence": "The difference between the two products is negligible."
    },
    {
        "id": 631,
        "word": "nominate",
        "turkish": "aday gösterme",
        "synonyms": [
            "appoint",
            "elect",
            "select"
        ],
        "antonyms": [
            "withdraw"
        ],
        "sentence": "President Yeltsin nominated prime minister Sergei Kiriyenko to head the government."
    },
    {
        "id": 632,
        "word": "per",
        "turkish": "başına, tek",
        "synonyms": [
            "one",
            "for each"
        ],
        "antonyms": [],
        "sentence": "The car was travelling at 70 miles per hour."
    },
    {
        "id": 633,
        "word": "conform",
        "turkish": "uymak",
        "synonyms": [
            "obey",
            "comply with",
            "abide by"
        ],
        "antonyms": [
            "violate",
            "dissent",
            "disagree"
        ],
        "sentence": "At our school, you are required to conform the rules."
    },
    {
        "id": 634,
        "word": "decency",
        "turkish": "uygunluk, edepli olma",
        "synonyms": [
            "morality",
            "propriety",
            "modesty"
        ],
        "antonyms": [
            "indecency"
        ],
        "sentence": "She didn't even have the decency to apologize."
    },
    {
        "id": 635,
        "word": "divine",
        "turkish": "ilahi, tanrısal",
        "synonyms": [
            "godlike",
            "heavenly"
        ],
        "antonyms": [
            "human",
            "earthly"
        ],
        "sentence": "Some fans seem to regard footballers as divine beings."
    },
    {
        "id": 636,
        "word": "barely",
        "turkish": "zorlukla, güçlükle, nadiren, hemen hemen hiç",
        "synonyms": [
            "hardly",
            "scarcely"
        ],
        "antonyms": [
            "often",
            "generally"
        ],
        "sentence": "I can barely hear you."
    },
    {
        "id": 637,
        "word": "battle",
        "turkish": "kavga, çatışma, savaş",
        "synonyms": [
            "fight",
            "war",
            "conflict"
        ],
        "antonyms": [
            "peace and quiet"
        ],
        "sentence": "Her only brother was killed in battle."
    },
    {
        "id": 638,
        "word": "slope",
        "turkish": "eğim",
        "synonyms": [
            "incline"
        ],
        "antonyms": [],
        "sentence": "There's a very steep slope just before you reach the top of the mountain."
    },
    {
        "id": 639,
        "word": "segregate",
        "turkish": "ayırmak",
        "synonyms": [
            "separate"
        ],
        "antonyms": [
            "unite"
        ],
        "sentence": "Blacks were segregated from whites in every area of life."
    },
    {
        "id": 640,
        "word": "setback",
        "turkish": "yenilgi, zorluk, aksilik",
        "synonyms": [
            "defeat",
            "difficulty"
        ],
        "antonyms": [
            "ease"
        ],
        "sentence": "There has been a temporary setback in our plans."
    },
    {
        "id": 641,
        "word": "abrupt",
        "turkish": "ani, beklenmeyen",
        "synonyms": [
            "sudden",
            "unexpected",
            "hasty"
        ],
        "antonyms": [
            "foreseen",
            "expected"
        ],
        "sentence": "His abrupt reaction surprised us all."
    },
    {
        "id": 642,
        "word": "appropriate",
        "turkish": "uygun",
        "synonyms": [
            "suitable",
            "proper",
            "fitting"
        ],
        "antonyms": [
            "irrelevant",
            "improper"
        ],
        "sentence": "Is this film appropriate for small children?"
    },
    {
        "id": 643,
        "word": "entail",
        "turkish": "gerektirmek",
        "synonyms": [
            "require",
            "necessitate"
        ],
        "antonyms": [
            "prevent",
            "nullify"
        ],
        "sentence": "Such a large investment inevitably entails some risk."
    },
    {
        "id": 644,
        "word": "eradicate",
        "turkish": "yok etmek, kökünü kazmak",
        "synonyms": [
            "get rid of",
            "wipe out",
            "eliminate"
        ],
        "antonyms": [
            "erect",
            "found"
        ],
        "sentence": "The disease which once affected millions of people has now been eradicated."
    },
    {
        "id": 645,
        "word": "contaminate",
        "turkish": "kirletmek",
        "synonyms": [
            "pollute"
        ],
        "antonyms": [
            "purify",
            "cleanse"
        ],
        "sentence": "Much of the coast has been contaminated by nuclear waste."
    },
    {
        "id": 646,
        "word": "conspiracy",
        "turkish": "entrika, söylenti, komplo",
        "synonyms": [
            "intrigue",
            "trickery"
        ],
        "antonyms": [],
        "sentence": "I think there was a conspiracy to keep me out of the committee."
    },
    {
        "id": 647,
        "word": "compassion",
        "turkish": "merhamet, acıma",
        "synonyms": [
            "sympathy",
            "tenderness",
            "kindness",
            "pity",
            "mercy"
        ],
        "antonyms": [
            "cruelty",
            "harshness"
        ],
        "sentence": "I was hoping she might show a little compassion."
    },
    {
        "id": 648,
        "word": "outlay",
        "turkish": "masraf, harcama",
        "synonyms": [
            "expense",
            "expenditure"
        ],
        "antonyms": [
            "income",
            "revenue"
        ],
        "sentence": "To make up for the initial outlay of £2000 to buy the equipment, you should market the product well."
    },
    {
        "id": 649,
        "word": "obedient",
        "turkish": "uyumlu, kurallara uyan",
        "synonyms": [
            "conformable",
            "abiding"
        ],
        "antonyms": [
            "disrespectful"
        ],
        "sentence": "Students are expected to be quiet and obedient in the classroom."
    },
    {
        "id": 650,
        "word": "mutiny",
        "turkish": "isyan",
        "synonyms": [
            "revolt",
            "rebellion"
        ],
        "antonyms": [],
        "sentence": "Conditions on the ship were often very bad, and crews were on the point of mutiny."
    },
    {
        "id": 651,
        "word": "revenge",
        "turkish": "intikam",
        "synonyms": [
            "vengeance"
        ],
        "antonyms": [],
        "sentence": "She took her revenge on him for leaving her."
    },
    {
        "id": 652,
        "word": "literacy",
        "turkish": "okur yazarlık",
        "synonyms": [
            "ability to read and write"
        ],
        "antonyms": [
            "illiteracy"
        ],
        "sentence": "Far more resources are needed to improve adult literacy average."
    },
    {
        "id": 653,
        "word": "initial",
        "turkish": "ilk, öncelikli",
        "synonyms": [
            "first",
            "beginning"
        ],
        "antonyms": [
            "last",
            "final"
        ],
        "sentence": "Initial reports say that seven people have died, though this has not yet been confirmed."
    },
    {
        "id": 654,
        "word": "impair",
        "turkish": "bozmak, zarar vermek",
        "synonyms": [
            "spoil",
            "worsen",
            "damage",
            "harm"
        ],
        "antonyms": [
            "repair",
            "improve"
        ],
        "sentence": "A recurring knee injury may have impaired his chances of winning the tournament."
    },
    {
        "id": 655,
        "word": "forbid",
        "turkish": "yasaklamak",
        "synonyms": [
            "prohibit",
            "ban",
            "not allow"
        ],
        "antonyms": [
            "allow",
            "let"
        ],
        "sentence": "The law forbids the sale of cigarettes to people under the age of 16."
    },
    {
        "id": 656,
        "word": "quarrel",
        "turkish": "kavga, münakaşa, çekişme",
        "synonyms": [
            "argument",
            "dispute",
            "disagreement",
            "fight"
        ],
        "antonyms": [
            "agreement"
        ],
        "sentence": "They had a quarrel over/about money three years ago and they have not talked to each other since."
    },
    {
        "id": 657,
        "word": "involve",
        "turkish": "içermek, gerektirmek",
        "synonyms": [
            "include",
            "require"
        ],
        "antonyms": [
            "exclude"
        ],
        "sentence": "I prefer teaching methods that actively involve students in learning."
    },
    {
        "id": 658,
        "word": "jeopardize",
        "turkish": "tehlikeye atmak",
        "synonyms": [
            "endanger"
        ],
        "antonyms": [
            "protect"
        ],
        "sentence": "She knew that by failing her exams she could jeopardize her whole future."
    },
    {
        "id": 659,
        "word": "subject to",
        "turkish": "maruz kalmak",
        "synonyms": [
            "exposed to"
        ],
        "antonyms": [],
        "sentence": "The inquiry revealed that they had been subjected to unfair treatment."
    },
    {
        "id": 660,
        "word": "surplus",
        "turkish": "fazlalık",
        "synonyms": [
            "extra",
            "excess"
        ],
        "antonyms": [],
        "sentence": "The government has authorized the army to sell its surplus weapons."
    },
    {
        "id": 661,
        "word": "stiff",
        "turkish": "sert, katı",
        "synonyms": [
            "firm",
            "rigid",
            "inflexible",
            "severe"
        ],
        "antonyms": [
            "flexible"
        ],
        "sentence": "This hair spray has made my hair stiff."
    },
    {
        "id": 662,
        "word": "intimidate",
        "turkish": "korkutmak, göz dağı vermek, sindirmek",
        "synonyms": [
            "scare",
            "frighten",
            "threaten"
        ],
        "antonyms": [
            "encourage",
            "relieve"
        ],
        "sentence": "They were intimidated into accepting a pay cut by the threat of losing their jobs."
    },
    {
        "id": 663,
        "word": "intermittent",
        "turkish": "aralıklı",
        "synonyms": [
            "periodic"
        ],
        "antonyms": [
            "continuous"
        ],
        "sentence": "Although she made intermittent movie appearances, she was essentially a stage actress."
    },
    {
        "id": 664,
        "word": "prospect",
        "turkish": "olasılık, beklenti",
        "synonyms": [
            "chance",
            "likelihood",
            "hope",
            "expectation"
        ],
        "antonyms": [],
        "sentence": "Is there any prospect of the weather improving?"
    },
    {
        "id": 665,
        "word": "phase",
        "turkish": "safha, evre",
        "synonyms": [
            "stage",
            "period"
        ],
        "antonyms": [],
        "sentence": "The project is only in the initial phase as yet, but it's quite promising."
    },
    {
        "id": 666,
        "word": "generous",
        "turkish": "cömert",
        "synonyms": [
            "open-handed"
        ],
        "antonyms": [
            "mean",
            "stingy"
        ],
        "sentence": "It was most generous of you to lend me the money."
    },
    {
        "id": 667,
        "word": "fascinate",
        "turkish": "büyülemek",
        "synonyms": [
            "charm"
        ],
        "antonyms": [
            "bore"
        ],
        "sentence": "Anything to do with aeroplanes and flying fascinates him."
    },
    {
        "id": 668,
        "word": "ignore",
        "turkish": "önemsememek, aldırmamak",
        "synonyms": [
            "disregard",
            "overlook"
        ],
        "antonyms": [
            "notice",
            "recognize"
        ],
        "sentence": "How can the government ignore the wishes of the majority?"
    },
    {
        "id": 669,
        "word": "infinite",
        "turkish": "sonsuz, sınırsız, bitmez, tükenmez",
        "synonyms": [
            "unlimited",
            "endless"
        ],
        "antonyms": [
            "limited",
            "restricted"
        ],
        "sentence": "The universe is theoretically infinite."
    },
    {
        "id": 670,
        "word": "conceive",
        "turkish": "algılamak, düşünmek, tasavvur etmek",
        "synonyms": [
            "imagine",
            "think of",
            "visualize",
            "perceive"
        ],
        "antonyms": [],
        "sentence": "I just cannot even conceive of that quantity of money together."
    },
    {
        "id": 671,
        "word": "deficiency",
        "turkish": "eksiklik",
        "synonyms": [
            "inadequacy",
            "insufficiency",
            "lack"
        ],
        "antonyms": [
            "abundance",
            "plenty",
            "profusion"
        ],
        "sentence": "Pregnant women often suffer from iron deficiency."
    },
    {
        "id": 672,
        "word": "definite",
        "turkish": "kesin, belirgin",
        "synonyms": [
            "specific",
            "particular",
            "exact",
            "precise"
        ],
        "antonyms": [
            "vague",
            "ambiguous"
        ],
        "sentence": "The date for the meeting is now definite: 5th March."
    },
    {
        "id": 673,
        "word": "considerable",
        "turkish": "büyük, önemli derecede",
        "synonyms": [
            "significant",
            "substantial",
            "great"
        ],
        "antonyms": [
            "insignificant",
            "triffling"
        ],
        "sentence": "The fire caused considerable damage to the church."
    },
    {
        "id": 674,
        "word": "epidemic",
        "turkish": "salgın",
        "synonyms": [
            "prevalent",
            "widespread",
            "rampant"
        ],
        "antonyms": [],
        "sentence": "Poverty in this country has reached epidemic proportions."
    },
    {
        "id": 675,
        "word": "exclude",
        "turkish": "-ın dışında bırakmak, hariç bırakmak, dışlamak",
        "synonyms": [
            "rule out",
            "keep out",
            "leave out"
        ],
        "antonyms": [
            "include"
        ],
        "sentence": "Microbes must, as far as possible, be excluded from the operation theater during an operation."
    },
    {
        "id": 676,
        "word": "exhort",
        "turkish": "tavsiye etmek, uyarmak",
        "synonyms": [
            "encourage",
            "stimulate",
            "warn"
        ],
        "antonyms": [],
        "sentence": "The manager of the prison exhorted the prisoners not to riot."
    },
    {
        "id": 677,
        "word": "dwindle",
        "turkish": "azalmak",
        "synonyms": [
            "decrease",
            "diminish",
            "alleviate"
        ],
        "antonyms": [
            "grow",
            "increase"
        ],
        "sentence": "The community has dwindled to a tenth of its former size in the last two years."
    },
    {
        "id": 678,
        "word": "devastate",
        "turkish": "yıkmak, tahrip etmek",
        "synonyms": [
            "destroy",
            "wreck",
            "ruin"
        ],
        "antonyms": [
            "build up",
            "erect",
            "restore"
        ],
        "sentence": "The villages of thousands of people were devastated."
    },
    {
        "id": 679,
        "word": "span",
        "turkish": "aralık, mesafe",
        "synonyms": [
            "distance",
            "length"
        ],
        "antonyms": [],
        "sentence": "People in this region have an average life span of seventy years."
    },
    {
        "id": 680,
        "word": "turmoil",
        "turkish": "karışıklık, kargaşa, telaşe",
        "synonyms": [
            "disorder",
            "chaos"
        ],
        "antonyms": [],
        "sentence": "The whole region is in turmoil."
    },
    {
        "id": 681,
        "word": "victory",
        "turkish": "zafer, başarı, yengi, utku",
        "synonyms": [
            "win",
            "triumph"
        ],
        "antonyms": [
            "defeat",
            "retreat"
        ],
        "sentence": "The Redskins opened the season by scoring a impressive 25-3 victory against Detroit."
    },
    {
        "id": 682,
        "word": "zeal",
        "turkish": "şevk, istek",
        "synonyms": [
            "eagerness",
            "enthusiasm"
        ],
        "antonyms": [
            "apathy",
            "coldness"
        ],
        "sentence": "The zeal for money-making never ends for some people."
    },
    {
        "id": 683,
        "word": "wreck",
        "turkish": "yıkmak, tahrip etmek",
        "synonyms": [
            "destroy",
            "ruin"
        ],
        "antonyms": [
            "preserve"
        ],
        "sentence": "The explosion shattered nearby windows and wrecked two cars."
    },
    {
        "id": 684,
        "word": "yield",
        "turkish": "ürün, hasat",
        "synonyms": [
            "harvest",
            "crop"
        ],
        "antonyms": [],
        "sentence": "The yield of corn varies from year to year."
    },
    {
        "id": 685,
        "word": "will",
        "turkish": "irade, istek, vasiyet",
        "synonyms": [
            "determination",
            "decision"
        ],
        "antonyms": [],
        "sentence": "After six months in hospital she began to lose the will to live."
    },
    {
        "id": 686,
        "word": "welfare",
        "turkish": "refah, mutluluk",
        "synonyms": [
            "well-being",
            "prosperity",
            "affluence"
        ],
        "antonyms": [
            "adversity",
            "failure"
        ],
        "sentence": "These organizations have fought very hard for the rights and welfare of immigrants."
    },
    {
        "id": 687,
        "word": "widespread",
        "turkish": "yaygın, geniş çapta",
        "synonyms": [
            "plenty",
            "abundant"
        ],
        "antonyms": [
            "limited",
            "less",
            "narrow"
        ],
        "sentence": "Malnutrition in the region is widespread - affecting up to 78% of children under five years old."
    },
    {
        "id": 688,
        "word": "appeal",
        "turkish": "ilgisini çekmek",
        "synonyms": [
            "invoke",
            "attract",
            "provoke attention",
            "captivate"
        ],
        "antonyms": [
            "be indifferent to"
        ],
        "sentence": "I think what appeals to me about his painting is the colors he uses."
    },
    {
        "id": 689,
        "word": "divert",
        "turkish": "yön değiştirmek",
        "synonyms": [
            "distract",
            "deviate",
            "shift"
        ],
        "antonyms": [],
        "sentence": "Our plane had to be diverted to Stansted because of the storm."
    },
    {
        "id": 690,
        "word": "convenient",
        "turkish": "uygun, elverişli",
        "synonyms": [
            "suitable",
            "appropriate"
        ],
        "antonyms": [
            "inconvenient",
            "useless",
            "awkward"
        ],
        "sentence": "What time would it be convenient for me to come round?"
    },
    {
        "id": 691,
        "word": "comply with",
        "turkish": "uymak",
        "synonyms": [
            "abide by",
            "obey",
            "conform to",
            "stick to"
        ],
        "antonyms": [
            "violate",
            "resist"
        ],
        "sentence": "He had no choice but to comply with the rules."
    },
    {
        "id": 692,
        "word": "compel",
        "turkish": "zorlamak",
        "synonyms": [
            "force"
        ],
        "antonyms": [
            "volunteer to"
        ],
        "sentence": "I felt morally compelled to help."
    },
    {
        "id": 693,
        "word": "initiate",
        "turkish": "başlatmak",
        "synonyms": [
            "start",
            "begin"
        ],
        "antonyms": [
            "end",
            "finish"
        ],
        "sentence": "Who initiated the violence?"
    },
    {
        "id": 694,
        "word": "incline",
        "turkish": "eğim, meyil",
        "synonyms": [
            "slope"
        ],
        "antonyms": [],
        "sentence": "A steep incline made the climbers exhausted."
    },
    {
        "id": 695,
        "word": "grave",
        "turkish": "ciddi, önemli",
        "synonyms": [
            "serious",
            "crucial",
            "solemn",
            "severe"
        ],
        "antonyms": [
            "trivial",
            "unimportant"
        ],
        "sentence": "This was a grave situation, which necessitated great experience."
    },
    {
        "id": 696,
        "word": "provisions",
        "turkish": "erzak, azık, araç-gereç",
        "synonyms": [
            "food",
            "groceries",
            "preparation"
        ],
        "antonyms": [],
        "sentence": "Provisions for the journey have been started beforehand."
    },
    {
        "id": 697,
        "word": "stem from",
        "turkish": "-den kaynaklanmak, ileri gelmek",
        "synonyms": [
            "arise from",
            "develop out of",
            "originate from"
        ],
        "antonyms": [
            "lead to",
            "result in",
            "give rise to"
        ],
        "sentence": "Their disagreement stemmed from a misunderstanding."
    },
    {
        "id": 698,
        "word": "reluctant",
        "turkish": "isteksiz, gönülsüz, tereddütlü",
        "synonyms": [
            "unwilling"
        ],
        "antonyms": [
            "willing",
            "eager",
            "volunteer"
        ],
        "sentence": "She persuaded her reluctant husband to take a trip to Florida with her."
    },
    {
        "id": 699,
        "word": "pace",
        "turkish": "hız, bir adımda alınan mesafe, ilerleme hızı, yürüyüş",
        "synonyms": [
            "step",
            "tempo"
        ],
        "antonyms": [],
        "sentence": "When she thought she heard someone following her, she quickened her pace."
    },
    {
        "id": 700,
        "word": "paradox",
        "turkish": "çelişki",
        "synonyms": [
            "contradiction",
            "inconsistency"
        ],
        "antonyms": [
            "consistency"
        ],
        "sentence": "It's an interesting paradox that drinking a lot of water can often make you feel thirsty."
    },
    {
        "id": 701,
        "word": "likely",
        "turkish": "olası, muhtemel",
        "synonyms": [
            "probable",
            "possible"
        ],
        "antonyms": [
            "unlikely",
            "improbable"
        ],
        "sentence": "Please, do remind me the concert because I'm likely to forget."
    },
    {
        "id": 702,
        "word": "legislate",
        "turkish": "yasa yapmak",
        "synonyms": [
            "make laws",
            "enforce laws"
        ],
        "antonyms": [],
        "sentence": "They promised to legislate against cigarette advertising."
    },
    {
        "id": 703,
        "word": "irreversible",
        "turkish": "geri dönüşü olmayan, tersine çevrilemez",
        "synonyms": [
            "irreparable"
        ],
        "antonyms": [
            "reversible"
        ],
        "sentence": "Smoking has caused irreversible damage to his lungs."
    },
    {
        "id": 704,
        "word": "investigate",
        "turkish": "araştırmak",
        "synonyms": [
            "look into",
            "explore"
        ],
        "antonyms": [],
        "sentence": "We are of course investigating how an error like this could have occurred."
    },
    {
        "id": 705,
        "word": "harsh",
        "turkish": "acımasız, sert, haşin",
        "synonyms": [
            "severe",
            "pitiless"
        ],
        "antonyms": [
            "gentle",
            "kind"
        ],
        "sentence": "The punishment was rather harsh for such a minor offence."
    },
    {
        "id": 706,
        "word": "flatter",
        "turkish": "övmek, övünmek",
        "synonyms": [
            "compliment",
            "praise"
        ],
        "antonyms": [
            "insult",
            "look down on",
            "humiliate"
        ],
        "sentence": "I knew he was only flattering me because he wanted to borrow some money."
    },
    {
        "id": 707,
        "word": "fever",
        "turkish": "yüksek ateş",
        "synonyms": [
            "high temperature"
        ],
        "antonyms": [],
        "sentence": "He's got a headache and a slight fever."
    },
    {
        "id": 708,
        "word": "finite",
        "turkish": "sınırlı, kısıtlı",
        "synonyms": [
            "limited",
            "restricted"
        ],
        "antonyms": [
            "infinite",
            "unlimited"
        ],
        "sentence": "The funds available for the health service are finite."
    },
    {
        "id": 709,
        "word": "firm",
        "turkish": "sert, katı",
        "synonyms": [
            "stiff",
            "rigid"
        ],
        "antonyms": [
            "soft",
            "tender"
        ],
        "sentence": "These pears are still too firm to eat."
    },
    {
        "id": 710,
        "word": "genocide",
        "turkish": "katliam, soykırım",
        "synonyms": [
            "massacre"
        ],
        "antonyms": [],
        "sentence": "We should all pray for the victims of genocide."
    },
    {
        "id": 711,
        "word": "coherent",
        "turkish": "mantıklı, birleşik, kendinde",
        "synonyms": [
            "connected",
            "consistent",
            "rational"
        ],
        "antonyms": [
            "irrational",
            "loose"
        ],
        "sentence": "When she calmed down, she was more coherent in her speech."
    },
    {
        "id": 712,
        "word": "conserve",
        "turkish": "korumak, muhafaza etmek",
        "synonyms": [
            "preserve",
            "protect"
        ],
        "antonyms": [
            "neglect",
            "destroy"
        ],
        "sentence": "The nationalists are very keen to conserve their customs and language."
    },
    {
        "id": 713,
        "word": "display",
        "turkish": "göstermek, sergilemek",
        "synonyms": [
            "show",
            "exhibit",
            "portray"
        ],
        "antonyms": [
            "hide",
            "conceal"
        ],
        "sentence": "The British traditionally tend not to display much emotion in public."
    },
    {
        "id": 714,
        "word": "embark on",
        "turkish": "başlamak",
        "synonyms": [
            "start",
            "initiate"
        ],
        "antonyms": [
            "finish",
            "end"
        ],
        "sentence": "We're embarking upon a new project later this year."
    },
    {
        "id": 715,
        "word": "eliminate",
        "turkish": "ortadan kaldırmak, elemek",
        "synonyms": [
            "get rid of",
            "eradicate",
            "do away with"
        ],
        "antonyms": [
            "recruit",
            "employ"
        ],
        "sentence": "He was eliminated in the third round of the competition."
    },
    {
        "id": 716,
        "word": "dim",
        "turkish": "karanlık, loş",
        "synonyms": [
            "not bright",
            "darkish"
        ],
        "antonyms": [
            "bright"
        ],
        "sentence": "He sat in a dim corner of the waiting-room."
    },
    {
        "id": 717,
        "word": "dispense",
        "turkish": "vazgeçmek, -den kurtulmak, -sız yapmak",
        "synonyms": [
            "give away",
            "do without"
        ],
        "antonyms": [
            "have",
            "possess",
            "own"
        ],
        "sentence": "They've had to dispense with a lot of luxuries since Mike lost his job."
    },
    {
        "id": 718,
        "word": "era",
        "turkish": "çağ, dönem",
        "synonyms": [
            "age",
            "period"
        ],
        "antonyms": [],
        "sentence": "The fall of the Berlin wall was the end of an era."
    },
    {
        "id": 719,
        "word": "addicted",
        "turkish": "bağımlı, müptela, kendini kaptıran",
        "synonyms": [
            "dependent",
            "attached"
        ],
        "antonyms": [
            "averse",
            "unaccustomed"
        ],
        "sentence": "He is addicted to chocolate."
    },
    {
        "id": 720,
        "word": "allure",
        "turkish": "etkilemek, çekmek, cezbetmek",
        "synonyms": [
            "attract",
            "entice",
            "seduce",
            "charm"
        ],
        "antonyms": [
            "repel",
            "dissuade",
            "push away"
        ],
        "sentence": "This game allures most of the children."
    },
    {
        "id": 721,
        "word": "alienate",
        "turkish": "uzaklaştırmak, yabancılaştırmak",
        "synonyms": [
            "separate",
            "estrange"
        ],
        "antonyms": [
            "conciliate",
            "bring together"
        ],
        "sentence": "Disagreements can alienate children from their families."
    },
    {
        "id": 722,
        "word": "acknowledge",
        "turkish": "kabul etmek, itiraf etmek, tanımak",
        "synonyms": [
            "recognize",
            "accept",
            "admit",
            "confess"
        ],
        "antonyms": [
            "disclaim",
            "deny",
            "ignore",
            "repudiate"
        ],
        "sentence": "They refused to acknowledge the new government."
    },
    {
        "id": 723,
        "word": "apt to",
        "turkish": "eğilimli olmak, eğiliminde olmak",
        "synonyms": [
            "likely",
            "prone to",
            "liable to",
            "inclined to"
        ],
        "antonyms": [
            "unlikely"
        ],
        "sentence": "The kitchen roof is apt to leak when it rains."
    },
    {
        "id": 724,
        "word": "aptitude",
        "turkish": "yetenek",
        "synonyms": [
            "ability",
            "talent",
            "gift",
            "knack",
            "tendency"
        ],
        "antonyms": [
            "awkwardness (n)"
        ],
        "sentence": "We will take your personal aptitudes and abilities into account."
    },
    {
        "id": 725,
        "word": "bear",
        "turkish": "dayanmak, tahammül etmek",
        "synonyms": [
            "stand",
            "endure",
            "tolerate"
        ],
        "antonyms": [
            "can’t stand"
        ],
        "sentence": "He couldn't bear seeing the dog in pain."
    },
    {
        "id": 726,
        "word": "cautious",
        "turkish": "tedbirli, ihtiyatlı",
        "synonyms": [
            "careful",
            "attentive"
        ],
        "antonyms": [
            "incautious"
        ],
        "sentence": "He's a cautious driver."
    },
    {
        "id": 727,
        "word": "cancel",
        "turkish": "iptal etmek",
        "synonyms": [
            "call off",
            "annul",
            "revoke",
            "abandon"
        ],
        "antonyms": [
            "resume"
        ],
        "sentence": "They've had to cancel tomorrow's football match because of the bad weather."
    },
    {
        "id": 728,
        "word": "rigorous",
        "turkish": "sert, şiddetli",
        "synonyms": [
            "severe",
            "harsh"
        ],
        "antonyms": [
            "soft",
            "mild",
            "easy-going",
            "lenient",
            "loose"
        ],
        "sentence": "Some parts of Turkiye has a rigorous climate."
    },
    {
        "id": 729,
        "word": "roughly",
        "turkish": "yaklaşık olarak, kabaca, aşağı yukarı",
        "synonyms": [
            "approximately",
            "nearly",
            "almost",
            "about",
            "virtually"
        ],
        "antonyms": [
            "exactly",
            "absolutely"
        ],
        "sentence": "There has been an increase of roughly 2 million."
    },
    {
        "id": 730,
        "word": "sovereign",
        "turkish": "hükmeden, egemen olan",
        "synonyms": [
            "ruling",
            "reigning"
        ],
        "antonyms": [
            "secondary",
            "dependent"
        ],
        "sentence": "We must respect the rights of sovereign nations to conduct their own affairs."
    },
    {
        "id": 731,
        "word": "disrupt",
        "turkish": "aksatmak, bozmak",
        "synonyms": [
            "interrupt",
            "break",
            "disturb",
            "upset"
        ],
        "antonyms": [
            "keep in order"
        ],
        "sentence": "A heavy fall of rain has disrupted the city's transport system."
    },
    {
        "id": 732,
        "word": "donate",
        "turkish": "bağış yapmak",
        "synonyms": [
            "give",
            "contribute"
        ],
        "antonyms": [
            "take",
            "get",
            "obtain"
        ],
        "sentence": "An anonymous businesswoman donated one million dollars to the charity."
    },
    {
        "id": 733,
        "word": "confidential",
        "turkish": "gizli",
        "synonyms": [
            "secret",
            "intimate"
        ],
        "antonyms": [
            "public"
        ],
        "sentence": "All information will be treated as strictly confidential."
    },
    {
        "id": 734,
        "word": "compatible with",
        "turkish": "uyumlu",
        "synonyms": [
            "harmonious"
        ],
        "antonyms": [],
        "sentence": "The new system will be compatible with existing equipment."
    },
    {
        "id": 735,
        "word": "compile",
        "turkish": "toplamak, biraraya getirmek",
        "synonyms": [
            "collect",
            "gather",
            "assemble"
        ],
        "antonyms": [
            "distribute"
        ],
        "sentence": "It took ten years to compile the book."
    },
    {
        "id": 736,
        "word": "interrogate",
        "turkish": "sorgulamak",
        "synonyms": [
            "question"
        ],
        "antonyms": [],
        "sentence": "Thousands of suspects have been interrogated and imprisoned in recent weeks."
    },
    {
        "id": 737,
        "word": "interim",
        "turkish": "geçici",
        "synonyms": [
            "provisional",
            "temporary"
        ],
        "antonyms": [],
        "sentence": "An interim government was set up for the period before the country's first free election."
    },
    {
        "id": 738,
        "word": "rash",
        "turkish": "aceleci, düşüncesiz",
        "synonyms": [
            "hasty",
            "reckless",
            "thoughtless"
        ],
        "antonyms": [
            "considerate"
        ],
        "sentence": "That was a rash decision - you didn't think about the costs involved at all."
    },
    {
        "id": 739,
        "word": "perceive",
        "turkish": "algılamak",
        "synonyms": [
            "see",
            "notice"
        ],
        "antonyms": [],
        "sentence": "Bill perceived a tiny figure in the distance."
    },
    {
        "id": 740,
        "word": "peculiar",
        "turkish": "tuhaf, acaip",
        "synonyms": [
            "strange",
            "odd",
            "weird"
        ],
        "antonyms": [
            "normal",
            "reasonable"
        ],
        "sentence": "She has most peculiar ideas which surprise everybody."
    },
    {
        "id": 741,
        "word": "overcome",
        "turkish": "aşmak, üstesinden gelmek",
        "synonyms": [
            "conquer",
            "surmount"
        ],
        "antonyms": [],
        "sentence": "Eventually she managed to overcome her shyness in class."
    },
    {
        "id": 742,
        "word": "relish",
        "turkish": "hoşlanmak, -den zevk almak",
        "synonyms": [
            "like",
            "enjoy"
        ],
        "antonyms": [
            "dislike",
            "hate",
            "detest"
        ],
        "sentence": "I don't relish telling her that her son has been arrested."
    },
    {
        "id": 743,
        "word": "reversal",
        "turkish": "iptal, tersine çevirme",
        "synonyms": [
            "repeal",
            "annulment"
        ],
        "antonyms": [],
        "sentence": "The low number of refugees accepted to the USA was indeed a reversal, which was necessitated by post-September procedures."
    },
    {
        "id": 744,
        "word": "merge",
        "turkish": "birleşmek, birleştirmek, içine karışıp kaybolmak",
        "synonyms": [
            "unite",
            "join"
        ],
        "antonyms": [
            "separate"
        ],
        "sentence": "The country's two biggest banks are planning to merge."
    },
    {
        "id": 745,
        "word": "miracle",
        "turkish": "mucize",
        "synonyms": [
            "wonder",
            "marvel"
        ],
        "antonyms": [],
        "sentence": "I can't promise a miracle cure, but I think we can improve things."
    },
    {
        "id": 746,
        "word": "prudent",
        "turkish": "akıllı, tedbirli",
        "synonyms": [
            "wise",
            "sensible",
            "cautious"
        ],
        "antonyms": [],
        "sentence": "It's always prudent to read a contract properly before signing it."
    },
    {
        "id": 747,
        "word": "persuade",
        "turkish": "ikna etmek, inandırmak",
        "synonyms": [
            "convince"
        ],
        "antonyms": [
            "deter",
            "discourage"
        ],
        "sentence": "If she doesn't want to go, nothing you can say will persuade her."
    },
    {
        "id": 748,
        "word": "irritate",
        "turkish": "kızdırmak",
        "synonyms": [
            "anger",
            "annoy"
        ],
        "antonyms": [
            "cheer up"
        ],
        "sentence": "After a while her behaviour really began to irritate me."
    },
    {
        "id": 749,
        "word": "humble",
        "turkish": "alçakgönüllü",
        "synonyms": [
            "modest"
        ],
        "antonyms": [
            "proud",
            "arrogant"
        ],
        "sentence": "He's very humble about his success."
    },
    {
        "id": 750,
        "word": "dilemma",
        "turkish": "ikilem, çelişki",
        "synonyms": [
            "controversy"
        ],
        "antonyms": [],
        "sentence": "The President is clearly in a dilemma about/over how to tackle the crisis."
    },
    {
        "id": 751,
        "word": "evaluate",
        "turkish": "değerlendirmek",
        "synonyms": [
            "assess",
            "appraise"
        ],
        "antonyms": [
            "ignore"
        ],
        "sentence": "It's impossible to evaluate these results without knowing more about the research methods employed."
    },
    {
        "id": 752,
        "word": "evolve",
        "turkish": "gelişmek, geliştirmek",
        "synonyms": [
            "develop"
        ],
        "antonyms": [
            "perish",
            "deteriorate"
        ],
        "sentence": "Bacteria are evolving resistance to antibiotics."
    },
    {
        "id": 753,
        "word": "fake",
        "turkish": "sahte",
        "synonyms": [
            "false",
            "imitation"
        ],
        "antonyms": [
            "real"
        ],
        "sentence": "Experts revealed that the painting was a fake."
    },
    {
        "id": 754,
        "word": "slippery",
        "turkish": "kaygan, hiç sağlam olmayan, kaypak, güvenilmez",
        "synonyms": [
            "icy",
            "oily"
        ],
        "antonyms": [
            "firm",
            "safe"
        ],
        "sentence": "The road was wet and slippery."
    },
    {
        "id": 755,
        "word": "breed",
        "turkish": "çiftleş(tir)mek",
        "synonyms": [
            "produce"
        ],
        "antonyms": [
            "kill",
            "become extinct"
        ],
        "sentence": "Most birds breed in the spring."
    },
    {
        "id": 756,
        "word": "bribery",
        "turkish": "rüşvet",
        "synonyms": [
            "corruption"
        ],
        "antonyms": [],
        "sentence": "The company was always rife with bribery."
    },
    {
        "id": 757,
        "word": "assemble",
        "turkish": "biraraya gelmek, topla(n)mak",
        "synonyms": [
            "compile",
            "come together",
            "meet",
            "convene"
        ],
        "antonyms": [
            "disperse",
            "scatter",
            "apart"
        ],
        "sentence": "We assembled in the meeting room after lunch."
    },
    {
        "id": 758,
        "word": "acute",
        "turkish": "keskin, ciddi, şiddetli",
        "synonyms": [
            "critical",
            "serious",
            "sharp",
            "intense",
            "severe"
        ],
        "antonyms": [],
        "sentence": "The two roads meet at an acute angle."
    },
    {
        "id": 759,
        "word": "adhere to",
        "turkish": "bağlı olmak, uymak",
        "synonyms": [
            "stick to",
            "be attached",
            "comply with"
        ],
        "antonyms": [
            "be distant",
            "remote",
            "detached"
        ],
        "sentence": "She adhered to her principles throughout her life."
    },
    {
        "id": 760,
        "word": "advance",
        "turkish": "ilerlemek, gelişim göstermek",
        "synonyms": [
            "proceed",
            "progress",
            "promote",
            "improve",
            "rise",
            "increase"
        ],
        "antonyms": [
            "regress",
            "decrease",
            "recession"
        ],
        "sentence": "He's doing his best to advance his own career."
    },
    {
        "id": 761,
        "word": "allege",
        "turkish": "iddia etmek, suçlamak",
        "synonyms": [
            "claim",
            "assert",
            "charge"
        ],
        "antonyms": [
            "refute",
            "deny",
            "disprove"
        ],
        "sentence": "The men allege that the police forced them to make false confessions."
    },
    {
        "id": 762,
        "word": "census",
        "turkish": "nüfus sayımı",
        "synonyms": [
            "counting",
            "demography"
        ],
        "antonyms": [],
        "sentence": "We have a census in this country every ten years."
    },
    {
        "id": 763,
        "word": "betray",
        "turkish": "ihanet etmek",
        "synonyms": [
            "deceive",
            "to be disloyal"
        ],
        "antonyms": [
            "to be loyal",
            "to be honest",
            "to be frank"
        ],
        "sentence": "He was accused of betraying his country during the war."
    },
    {
        "id": 764,
        "word": "boom",
        "turkish": "artmak",
        "synonyms": [
            "boost",
            "increase",
            "expand",
            "develop"
        ],
        "antonyms": [
            "decrease",
            "abate",
            "subside"
        ],
        "sentence": "The textile industry is booming."
    },
    {
        "id": 765,
        "word": "erect",
        "turkish": "dikmek, inşa etmek",
        "synonyms": [
            "build up",
            "put up"
        ],
        "antonyms": [
            "eradicate",
            "collapse"
        ],
        "sentence": "The soldiers have erected barricades to protect themselves."
    },
    {
        "id": 766,
        "word": "elude",
        "turkish": "-den sıyrılmak, kurtulmak",
        "synonyms": [
            "escape",
            "evade",
            "avoid"
        ],
        "antonyms": [],
        "sentence": "They eluded the police."
    },
    {
        "id": 767,
        "word": "embezzle",
        "turkish": "zimmetine geçirmek",
        "synonyms": [
            "steal"
        ],
        "antonyms": [
            "donate",
            "give away"
        ],
        "sentence": "She embezzled thousands of dollars from the charity."
    },
    {
        "id": 768,
        "word": "elicit",
        "turkish": "almak, elde etmek, ortaya çıkarmak",
        "synonyms": [
            "obtain",
            "get",
            "extract",
            "evoke",
            "draw out"
        ],
        "antonyms": [],
        "sentence": "They were able to elicit the support of the public."
    },
    {
        "id": 769,
        "word": "comprise",
        "turkish": "oluşmak",
        "synonyms": [
            "consist of",
            "be composed of",
            "be made up of"
        ],
        "antonyms": [],
        "sentence": "The book comprises 350 pages."
    },
    {
        "id": 770,
        "word": "compromise",
        "turkish": "uzlaşmak",
        "synonyms": [
            "agree on sth"
        ],
        "antonyms": [
            "disagree"
        ],
        "sentence": "The two sides reached a compromise by bargaining."
    },
    {
        "id": 771,
        "word": "console",
        "turkish": "teselli etmek, rahatlatmak",
        "synonyms": [
            "comfort"
        ],
        "antonyms": [
            "distress",
            "hurt"
        ],
        "sentence": "Andy tried to console her, but she kept saying it was all her own fault."
    },
    {
        "id": 772,
        "word": "constitute",
        "turkish": "oluşturmak",
        "synonyms": [
            "compose",
            "make up",
            "form"
        ],
        "antonyms": [
            "destroy",
            "collapse"
        ],
        "sentence": "The under-18s constitute nearly 25% of the town's population."
    },
    {
        "id": 773,
        "word": "courageous",
        "turkish": "cesur, cesaretli",
        "synonyms": [
            "brave",
            "bold",
            "daring"
        ],
        "antonyms": [
            "coward",
            "timid",
            "fearful"
        ],
        "sentence": "It was a courageous decision to resign."
    },
    {
        "id": 774,
        "word": "depict",
        "turkish": "göstermek, anlatmak",
        "synonyms": [
            "show",
            "represent",
            "draw"
        ],
        "antonyms": [
            "hide"
        ],
        "sentence": "Her paintings depict the lives of ordinary people in the last century."
    },
    {
        "id": 775,
        "word": "impose",
        "turkish": "empoze etmek",
        "synonyms": [
            "place on",
            "lay upon"
        ],
        "antonyms": [
            "remove",
            "lift"
        ],
        "sentence": "Very high taxes have recently been imposed on cigarettes."
    },
    {
        "id": 776,
        "word": "inferior",
        "turkish": "aşağı, alt derece",
        "synonyms": [
            "low",
            "subordinate"
        ],
        "antonyms": [
            "superior",
            "excellent"
        ],
        "sentence": "These products are inferior to those we bought last year."
    },
    {
        "id": 777,
        "word": "groundless",
        "turkish": "yersiz, dayanaksız, asılsız",
        "synonyms": [
            "baseless",
            "without basis"
        ],
        "antonyms": [
            "well-founded"
        ],
        "sentence": "My fears turned out to be groundless."
    },
    {
        "id": 778,
        "word": "intrude",
        "turkish": "izinsiz girmek",
        "synonyms": [
            "infringe"
        ],
        "antonyms": [],
        "sentence": "I didn't realise your husband was here, Dr Jones - I hope I'm not intruding."
    },
    {
        "id": 779,
        "word": "irrelevant",
        "turkish": "ilgisiz, alakasız",
        "synonyms": [
            "impertinent"
        ],
        "antonyms": [
            "relevant"
        ],
        "sentence": "These documents are largely irrelevant to the present investigation."
    },
    {
        "id": 780,
        "word": "latent",
        "turkish": "gizli",
        "synonyms": [
            "hidden",
            "concealed"
        ],
        "antonyms": [
            "visible",
            "apparent"
        ],
        "sentence": "We're trying to bring out the latent talents that many people possess without realising it."
    },
    {
        "id": 781,
        "word": "intervene",
        "turkish": "müdahale etmek, araya girmek",
        "synonyms": [
            "interfere"
        ],
        "antonyms": [],
        "sentence": "The Minister intervened personally to stop the museum being closed."
    },
    {
        "id": 782,
        "word": "interpret",
        "turkish": "yorumlamak, tercüme yapmak",
        "synonyms": [
            "elucidate",
            "explain"
        ],
        "antonyms": [],
        "sentence": "If Shakespeare's plays are to reach a large audience they need to be interpreted in a modern style."
    },
    {
        "id": 783,
        "word": "interfere in/with",
        "turkish": "-e karışmak, -e müdahale etmek, -e burnunu sokmak",
        "synonyms": [
            "intervene in"
        ],
        "antonyms": [],
        "sentence": "Interfering in other people's relationships is always a mistake."
    },
    {
        "id": 784,
        "word": "goods",
        "turkish": "mal, mülk, eşya",
        "synonyms": [
            "commodity",
            "property"
        ],
        "antonyms": [],
        "sentence": "The house insurance will not cover your personal goods."
    },
    {
        "id": 785,
        "word": "feature",
        "turkish": "özellik",
        "synonyms": [
            "property",
            "trait",
            "characteristic"
        ],
        "antonyms": [],
        "sentence": "The town's main features are its beautiful mosque and ancient marketplace."
    },
    {
        "id": 786,
        "word": "illiterate",
        "turkish": "cahil, okuma yazma bilmeyen",
        "synonyms": [
            "unable to read and write"
        ],
        "antonyms": [
            "literate"
        ],
        "sentence": "A surprising percentage of the population are illiterate."
    },
    {
        "id": 787,
        "word": "moderate",
        "turkish": "ılımlı, ölçülü",
        "synonyms": [
            "mild",
            "reasonable"
        ],
        "antonyms": [
            "extreme",
            "immoderate"
        ],
        "sentence": "The cabin is of moderate size - just right for a small family."
    },
    {
        "id": 788,
        "word": "overriding",
        "turkish": "önemli, ağır basan, başlıca",
        "synonyms": [
            "major",
            "principal"
        ],
        "antonyms": [
            "minor"
        ],
        "sentence": "The government's overriding concern is to reduce inflation."
    },
    {
        "id": 789,
        "word": "noteworthy",
        "turkish": "kayda değer, önemli",
        "synonyms": [
            "remarkable",
            "extraordinary"
        ],
        "antonyms": [
            "ordinary",
            "common"
        ],
        "sentence": "It is noteworthy that one-third of students do not pay any tuition fees."
    },
    {
        "id": 790,
        "word": "obviate",
        "turkish": "önlemek, gereksiz kılmak, savuşturmak",
        "synonyms": [
            "prevent",
            "hamper"
        ],
        "antonyms": [],
        "sentence": "A peaceful solution would obviate the need to send a UN military force."
    },
    {
        "id": 791,
        "word": "density",
        "turkish": "yoğunluk",
        "synonyms": [
            "solidity",
            "massiveness"
        ],
        "antonyms": [
            "being sparse or scattered"
        ],
        "sentence": "The area has a high population density."
    },
    {
        "id": 792,
        "word": "cope with",
        "turkish": "başa çıkmak, uğraşmak",
        "synonyms": [
            "deal with",
            "manage",
            "get by"
        ],
        "antonyms": [
            "ignore"
        ],
        "sentence": "It must be difficult to cope with three small children and a job."
    },
    {
        "id": 793,
        "word": "concurrent",
        "turkish": "aynı anda, paralel",
        "synonyms": [
            "simultaneous"
        ],
        "antonyms": [
            "at different times"
        ],
        "sentence": "Galerie St Etienne is holding three concurrent exhibitions."
    },
    {
        "id": 794,
        "word": "clarify",
        "turkish": "açıklamak, netleştirmek",
        "synonyms": [
            "make it clear",
            "explain"
        ],
        "antonyms": [
            "confuse",
            "muddle"
        ],
        "sentence": "The position of all shareholders will be clarified next month."
    },
    {
        "id": 795,
        "word": "despair",
        "turkish": "umudunu yitirmek",
        "synonyms": [
            "lose all hope"
        ],
        "antonyms": [],
        "sentence": "Don't despair! We'll find a way out!"
    },
    {
        "id": 796,
        "word": "endow",
        "turkish": "bağışlamak, vermek",
        "synonyms": [
            "grant",
            "provide",
            "supply"
        ],
        "antonyms": [
            "deprive"
        ],
        "sentence": "This hospital was endowed by the citizens of Strasbourg in the 16th century."
    },
    {
        "id": 797,
        "word": "expectancy",
        "turkish": "beklenti",
        "synonyms": [
            "expectation",
            "hope",
            "anticipation"
        ],
        "antonyms": [],
        "sentence": "Life expectancy in Europe has increased greatly in the 20th century."
    },
    {
        "id": 798,
        "word": "bloom",
        "turkish": "çiçek açmak, ürün vermek",
        "synonyms": [
            "blossom",
            "flower"
        ],
        "antonyms": [],
        "sentence": "These flowers will bloom all through the summer."
    },
    {
        "id": 799,
        "word": "admonish",
        "turkish": "azarlamak.",
        "synonyms": [
            "scold",
            "reprimand",
            "rebuke"
        ],
        "antonyms": [
            "appreciate",
            "adore",
            "admire"
        ],
        "sentence": "Her teacher admonished her to work harder for her exams."
    },
    {
        "id": 800,
        "word": "amnesty",
        "turkish": "genel af",
        "synonyms": [
            "pardon"
        ],
        "antonyms": [
            "accusation"
        ],
        "sentence": "Most prisoners were freed under the terms of the amnesty."
    },
    {
        "id": 801,
        "word": "abhor",
        "turkish": "nefret etmek",
        "synonyms": [
            "hate",
            "detest",
            "disgust",
            "loathe",
            "dislike"
        ],
        "antonyms": [
            "like",
            "enjoy",
            "desire",
            "admire"
        ],
        "sentence": "He abhors living in that small cottage."
    },
    {
        "id": 802,
        "word": "abolish",
        "turkish": "yürürlükten kaldırmak, son vermek",
        "synonyms": [
            "put an end",
            "eradicate",
            "annul",
            "destroy"
        ],
        "antonyms": [
            "maintain",
            "keep",
            "confirm",
            "endorse",
            "implement"
        ],
        "sentence": "The new government abolished unnecassary regulations."
    },
    {
        "id": 803,
        "word": "absolute",
        "turkish": "kesin, mutlak",
        "synonyms": [
            "certain",
            "definite"
        ],
        "antonyms": [
            "partial",
            "limited",
            "conditional"
        ],
        "sentence": "The proof is absolute."
    },
    {
        "id": 804,
        "word": "bankrupt",
        "turkish": "iflas etmek",
        "synonyms": [
            "penniless",
            "ruined"
        ],
        "antonyms": [
            "rich",
            "wealthy"
        ],
        "sentence": "The recession has led to many small businesses going bankrupt."
    },
    {
        "id": 805,
        "word": "avert",
        "turkish": "önlemek, yönünü değiştirmek",
        "synonyms": [
            "avoid",
            "prevent",
            "turn away"
        ],
        "antonyms": [
            "stabilize"
        ],
        "sentence": "It is not always easy to avert economic collapse."
    },
    {
        "id": 806,
        "word": "challenge",
        "turkish": "meydan okumak",
        "synonyms": [
            "defy"
        ],
        "antonyms": [],
        "sentence": "The player challanged his opponents."
    },
    {
        "id": 807,
        "word": "sewage",
        "turkish": "lağım pisliği",
        "synonyms": [
            "manure"
        ],
        "antonyms": [],
        "sentence": "Some cities in the world do not have proper facilities for the disposal of sewage."
    },
    {
        "id": 808,
        "word": "eventual",
        "turkish": "son, nihai",
        "synonyms": [
            "ultimate",
            "final",
            "consequent"
        ],
        "antonyms": [
            "initial",
            "first"
        ],
        "sentence": "Although the original budget for the project was $1 billion, the eventual cost is likely to be 50% higher."
    },
    {
        "id": 809,
        "word": "effect",
        "turkish": "etki",
        "synonyms": [
            "influence",
            "impact"
        ],
        "antonyms": [],
        "sentence": "The radiation leak has had a disastrous effect on/upon the environment."
    },
    {
        "id": 810,
        "word": "cultivate",
        "turkish": "toprağı işlemek",
        "synonyms": [
            "refine",
            "make it ready for crops"
        ],
        "antonyms": [
            "deteriorate",
            "make worse"
        ],
        "sentence": "Most of the land is too poor to cultivate."
    },
    {
        "id": 811,
        "word": "demolish",
        "turkish": "yıkmak, çökertmek",
        "synonyms": [
            "destroy",
            "pull down",
            "collapse"
        ],
        "antonyms": [
            "erect",
            "build",
            "construct"
        ],
        "sentence": "A number of houses were demolished so that the supermarket could be built."
    },
    {
        "id": 812,
        "word": "defy",
        "turkish": "meydan okumak, karşı gelmek, karşı koymak",
        "synonyms": [
            "challenge",
            "dare",
            "oppose"
        ],
        "antonyms": [],
        "sentence": "A few workers have defied the majority decision and gone into work despite the strike."
    },
    {
        "id": 813,
        "word": "object",
        "turkish": "itiraz etmek",
        "synonyms": [
            "disapprove",
            "protest"
        ],
        "antonyms": [
            "agree",
            "approve"
        ],
        "sentence": "No-one objected when the boss said it was time to go home."
    },
    {
        "id": 814,
        "word": "maintain",
        "turkish": "sürdürmek, korumak, beslemek, geçindirmek, iddia etmek",
        "synonyms": [
            "keep",
            "continue",
            "preserve"
        ],
        "antonyms": [
            "neglect",
            "abandon"
        ],
        "sentence": "The film has maintained its position as the critics' favourite."
    },
    {
        "id": 815,
        "word": "relief",
        "turkish": "rahatlık, ferahlama",
        "synonyms": [
            "comfort",
            "aid"
        ],
        "antonyms": [],
        "sentence": "Pop stars have raised millions of pounds for famine relief in Africa."
    },
    {
        "id": 816,
        "word": "reinforce",
        "turkish": "güçlendirmek, takviye etmek, desteklemek, sağlamlaştırmak",
        "synonyms": [
            "strengthen",
            "make stronger"
        ],
        "antonyms": [
            "weaken"
        ],
        "sentence": "His bad behaviour merely reinforced my dislike of him."
    },
    {
        "id": 817,
        "word": "launch",
        "turkish": "başla(t)mak, fırlatmak",
        "synonyms": [
            "start",
            "begin",
            "set off"
        ],
        "antonyms": [],
        "sentence": "The airline company will launch its new transatlantic service next month."
    },
    {
        "id": 818,
        "word": "imply",
        "turkish": "ima etmek",
        "synonyms": [
            "say indirectly",
            "hint"
        ],
        "antonyms": [
            "declare"
        ],
        "sentence": "Are you implying that I'm fat?"
    },
    {
        "id": 819,
        "word": "favorable",
        "turkish": "elverişli, uygun",
        "synonyms": [
            "suitable",
            "approving"
        ],
        "antonyms": [
            "unfavourable"
        ],
        "sentence": "We have had a favourable response to the plan so far."
    },
    {
        "id": 820,
        "word": "provisional",
        "turkish": "geçici, eğreti, nihai olmayan",
        "synonyms": [
            "interim",
            "temporary"
        ],
        "antonyms": [
            "permenant"
        ],
        "sentence": "He was given a provisional driving license."
    },
    {
        "id": 821,
        "word": "subtle",
        "turkish": "hassas, ince, kolay fark edilmeyen",
        "synonyms": [
            "delicate",
            "indirect"
        ],
        "antonyms": [
            "direct"
        ],
        "sentence": "There is a subtle difference between these two plans."
    },
    {
        "id": 822,
        "word": "succumb",
        "turkish": "boyun eğmek, yenik düşmek",
        "synonyms": [
            "yield in",
            "give in"
        ],
        "antonyms": [
            "rebel against"
        ],
        "sentence": "Thousands of animals have succumbed to the disease in the past few months."
    },
    {
        "id": 823,
        "word": "summit",
        "turkish": "zirve",
        "synonyms": [
            "zenith",
            "top",
            "peak"
        ],
        "antonyms": [
            "bottom"
        ],
        "sentence": "The climbers were able to reach the summit of Mont Blanc."
    },
    {
        "id": 824,
        "word": "interval",
        "turkish": "ara",
        "synonyms": [
            "break",
            "gap"
        ],
        "antonyms": [
            "continuity"
        ],
        "sentence": "We see each other at regular intervals - usually about once a month."
    },
    {
        "id": 825,
        "word": "staggering",
        "turkish": "şaşırtıcı, hayret veren, yavaş ilerleyen",
        "synonyms": [
            "astounding",
            "surprising",
            "sluggish"
        ],
        "antonyms": [
            "familiar",
            "usual"
        ],
        "sentence": "Bill has just announced a staggering project."
    },
    {
        "id": 826,
        "word": "stagnant",
        "turkish": "durgun, hareketsiz",
        "synonyms": [
            "sluggish",
            "inactive"
        ],
        "antonyms": [
            "active"
        ],
        "sentence": "A stagnant economy is dangerous in the long-term."
    },
    {
        "id": 827,
        "word": "implement",
        "turkish": "uygulamak",
        "synonyms": [
            "carry out",
            "execute"
        ],
        "antonyms": [],
        "sentence": "The changes to the national health system will be implemented next year."
    },
    {
        "id": 828,
        "word": "measure",
        "turkish": "önlem, ölçü, miktar, ölçüm",
        "synonyms": [
            "step",
            "precaution",
            "action"
        ],
        "antonyms": [],
        "sentence": "The government has to take some measures to curb inflation."
    },
    {
        "id": 829,
        "word": "decadence",
        "turkish": "çürüme, bozulma",
        "synonyms": [
            "corruption"
        ],
        "antonyms": [],
        "sentence": "Western decadence affected the whole world."
    },
    {
        "id": 830,
        "word": "deserve",
        "turkish": "haketmek, layık olmak",
        "synonyms": [
            "merit",
            "to be entitled to"
        ],
        "antonyms": [],
        "sentence": "I hope they get the punishment they deserve."
    },
    {
        "id": 831,
        "word": "familiar",
        "turkish": "aşina, tanıdık",
        "synonyms": [
            "acquainted"
        ],
        "antonyms": [
            "strange"
        ],
        "sentence": "There were one or two familiar faces."
    },
    {
        "id": 832,
        "word": "explore",
        "turkish": "araştırmak, tetkik yapmak, keşfetmek",
        "synonyms": [
            "research",
            "investigate",
            "probe"
        ],
        "antonyms": [],
        "sentence": "The best way to explore the countryside is on foot."
    },
    {
        "id": 833,
        "word": "solitary",
        "turkish": "yalnız",
        "synonyms": [
            "lonely",
            "lonesome"
        ],
        "antonyms": [],
        "sentence": "In the distance was a solitary building"
    },
    {
        "id": 834,
        "word": "sceptical",
        "turkish": "şüpheci, kuşkulu",
        "synonyms": [
            "doubtful",
            "dubious",
            "disbelieving"
        ],
        "antonyms": [
            "undoubtful"
        ],
        "sentence": "Many experts remain sceptical about/of his claims."
    },
    {
        "id": 835,
        "word": "unify",
        "turkish": "birleştirmek",
        "synonyms": [
            "unite",
            "join",
            "combine"
        ],
        "antonyms": [
            "seperate"
        ],
        "sentence": "If the new leader does manage to unify his warring party, it will be quite an achievement."
    },
    {
        "id": 836,
        "word": "urgent",
        "turkish": "acil, önemli",
        "synonyms": [
            "immediate",
            "imperative"
        ],
        "antonyms": [
            "trivial",
            "insignificant"
        ],
        "sentence": "The plumbing in this building is in urgent need of repair."
    },
    {
        "id": 837,
        "word": "unbiased",
        "turkish": "önyargısız",
        "synonyms": [
            "unprejudiced",
            "fair",
            "impartial"
        ],
        "antonyms": [
            "biased"
        ],
        "sentence": "An unbiased opinion will ease the process."
    },
    {
        "id": 838,
        "word": "terrain",
        "turkish": "bölge, arazi",
        "synonyms": [
            "ground",
            "territory"
        ],
        "antonyms": [],
        "sentence": "His car handles particularly well on rough terrain."
    },
    {
        "id": 839,
        "word": "tenet",
        "turkish": "görüş, ilke, inanç",
        "synonyms": [
            "belief",
            "opinion"
        ],
        "antonyms": [],
        "sentence": "It is a tenet of contemporary psychology that an individual's mental health is supported by having good social relationships."
    },
    {
        "id": 840,
        "word": "accumulate",
        "turkish": "birik(tir)mek",
        "synonyms": [
            "gather",
            "collect",
            "pile up",
            "store"
        ],
        "antonyms": [
            "seperate",
            "disperse",
            "dissipate",
            "scatter"
        ],
        "sentence": "Overnight, the snow accumulated too much."
    },
    {
        "id": 841,
        "word": "cherish",
        "turkish": "keyfini çıkartmak, değer vermek",
        "synonyms": [
            "value",
            "relish",
            "enjoy too much"
        ],
        "antonyms": [
            "hate",
            "detest",
            "not enjoy"
        ],
        "sentence": "She cherishes her 1967 Cadillac."
    },
    {
        "id": 842,
        "word": "awkward",
        "turkish": "beceriksiz, uğraşılması zor, zor",
        "synonyms": [
            "clumsy",
            "uncomfortable",
            "not easy to deal with"
        ],
        "antonyms": [
            "easy to deal with",
            "clever",
            "handy"
        ],
        "sentence": "It was an awkward situation."
    },
    {
        "id": 843,
        "word": "assume",
        "turkish": "varsaymak",
        "synonyms": [
            "presume",
            "suppose",
            "take for granted",
            "postulate"
        ],
        "antonyms": [],
        "sentence": "Let's assume that they're coming and make plans on that basis."
    },
    {
        "id": 844,
        "word": "approve of",
        "turkish": "onaylamak",
        "synonyms": [
            "support",
            "endorse",
            "back up",
            "favor"
        ],
        "antonyms": [
            "annul"
        ],
        "sentence": "I thoroughly approve of what the government is doing."
    },
    {
        "id": 845,
        "word": "scrutinize",
        "turkish": "incelemek, detaylı araştırmak",
        "synonyms": [
            "examine in detail"
        ],
        "antonyms": [
            "guess",
            "glance superficially"
        ],
        "sentence": "He scrutinized the men's faces carefully/closely, trying to work out who was lying."
    },
    {
        "id": 846,
        "word": "sculpture",
        "turkish": "heykel",
        "synonyms": [
            "statue"
        ],
        "antonyms": [],
        "sentence": "The museum has several life-sized sculptures of people and animals."
    },
    {
        "id": 847,
        "word": "revival",
        "turkish": "canlandırma, hayat verme",
        "synonyms": [
            "renewal",
            "restoration"
        ],
        "antonyms": [],
        "sentence": "Recently, there has been some revival of interest in ancient music."
    },
    {
        "id": 848,
        "word": "eject",
        "turkish": "çıkartmak",
        "synonyms": [
            "force out",
            "evict"
        ],
        "antonyms": [
            "retain",
            "absorb",
            "take in"
        ],
        "sentence": "The coffee machine suddenly ejected a handful of coins."
    },
    {
        "id": 849,
        "word": "elaborate",
        "turkish": "ayrıntılı, karmaşık, özenli",
        "synonyms": [
            "detailed",
            "complicated",
            "intricate"
        ],
        "antonyms": [
            "simple",
            "unadorned"
        ],
        "sentence": "They're making most elaborate preparations for the wedding."
    },
    {
        "id": 850,
        "word": "elevate",
        "turkish": "yükseltmek",
        "synonyms": [
            "raise",
            "heighten",
            "lift up"
        ],
        "antonyms": [
            "lower",
            "degrade"
        ],
        "sentence": "The platform was elevated by means of hydraulic legs."
    },
    {
        "id": 851,
        "word": "confine to",
        "turkish": "sınırlamak",
        "synonyms": [
            "limit",
            "restrict"
        ],
        "antonyms": [
            "release",
            "let free"
        ],
        "sentence": "Please confine your use of the telephone to business calls."
    },
    {
        "id": 852,
        "word": "concrete",
        "turkish": "somut, elle tutulur, beton",
        "synonyms": [
            "tangible",
            "real"
        ],
        "antonyms": [
            "abstract"
        ],
        "sentence": "There is no concrete evidence against her."
    },
    {
        "id": 853,
        "word": "resort to",
        "turkish": "(Son çare olarak) -e başvurmak",
        "synonyms": [
            "turn to",
            "adopt"
        ],
        "antonyms": [],
        "sentence": "He got hold of the money legally, without resorting to violence."
    },
    {
        "id": 854,
        "word": "overlook",
        "turkish": "gözardı etmek, göz yummak, dikkate almamak, bakmak",
        "synonyms": [
            "ignore",
            "disregard"
        ],
        "antonyms": [
            "take into consideration"
        ],
        "sentence": "I think there is one key fact that you have overlooked."
    },
    {
        "id": 855,
        "word": "induce",
        "turkish": "ikna etmek, neden olmak, tetiklemek",
        "synonyms": [
            "persuade",
            "tempt",
            "bring about",
            "encourage"
        ],
        "antonyms": [
            "deter",
            "discourage"
        ],
        "sentence": "Nothing could induce me to climb a mountain."
    },
    {
        "id": 856,
        "word": "intense",
        "turkish": "yoğun",
        "synonyms": [
            "extreme",
            "intensified"
        ],
        "antonyms": [
            "mild",
            "relaxed"
        ],
        "sentence": "He suddenly felt an intense pain in his back."
    },
    {
        "id": 857,
        "word": "glorious",
        "turkish": "şanlı, parlak",
        "synonyms": [
            "splendid",
            "brilliant",
            "dazzling"
        ],
        "antonyms": [
            "unknown",
            "dull",
            "awful"
        ],
        "sentence": "They had a glorious victory."
    },
    {
        "id": 858,
        "word": "interfere in/with",
        "turkish": "-e engel olmak",
        "synonyms": [
            "prevent",
            "inhibit"
        ],
        "antonyms": [],
        "sentence": "Even a low level of noise interferes with my concentration."
    },
    {
        "id": 859,
        "word": "posterity",
        "turkish": "gelecek nesil",
        "synonyms": [
            "future generation"
        ],
        "antonyms": [
            "ancestors"
        ],
        "sentence": "Every attempt is being made to ensure that these works of art are preserved for posterity."
    },
    {
        "id": 860,
        "word": "presume",
        "turkish": "varsaymak, farzetmek, sanmak, tahmin etmek",
        "synonyms": [
            "think",
            "assume"
        ],
        "antonyms": [],
        "sentence": "I presume they're not coming, since they haven't replied to the invitation."
    },
    {
        "id": 861,
        "word": "property",
        "turkish": "mal, mülk, emlak, özellik",
        "synonyms": [
            "possession",
            "belonging",
            "feature",
            "characteristic"
        ],
        "antonyms": [],
        "sentence": "He owns a number of properties in the centre of London."
    },
    {
        "id": 862,
        "word": "pertain to",
        "turkish": "ile ilişkili olmak, -e ait olmak",
        "synonyms": [
            "relate to",
            "bear upon"
        ],
        "antonyms": [],
        "sentence": "We are only interested in the proposals that pertain to local issues."
    },
    {
        "id": 863,
        "word": "strata",
        "turkish": "tabaka",
        "synonyms": [
            "layer"
        ],
        "antonyms": [],
        "sentence": "The report shows that drugs have penetrated every stratum of American society."
    },
    {
        "id": 864,
        "word": "innovation",
        "turkish": "yenilik",
        "synonyms": [
            "change",
            "alteration",
            "newness"
        ],
        "antonyms": [],
        "sentence": "The fashion industry is always open to innovation."
    },
    {
        "id": 865,
        "word": "impotence",
        "turkish": "iktidarsızlık, güçsüzlük",
        "synonyms": [
            "inability",
            "powerlessness"
        ],
        "antonyms": [
            "ability",
            "strength"
        ],
        "sentence": "Impotence is a serious problem which men encounter frequently."
    },
    {
        "id": 866,
        "word": "persist in",
        "turkish": "ısrar etmek, devam etmek",
        "synonyms": [
            "persevere",
            "continue"
        ],
        "antonyms": [
            "finish",
            "end"
        ],
        "sentence": "If the pain persists, consult a doctor."
    },
    {
        "id": 867,
        "word": "regardless of",
        "turkish": "-e bakılmaksızın, -i düşünmeden, -e aldırmadan",
        "synonyms": [
            "irrespective of"
        ],
        "antonyms": [
            "by taking into consideration"
        ],
        "sentence": "This job is open to all, regardless of previous experience."
    },
    {
        "id": 868,
        "word": "reliability",
        "turkish": "güvenilirlik",
        "synonyms": [
            "dependability",
            "trustworthiness"
        ],
        "antonyms": [],
        "sentence": "Rolls-Royce cars are famous for their quality and reliability."
    },
    {
        "id": 869,
        "word": "retention",
        "turkish": "muhafaza etme, koruma",
        "synonyms": [
            "preservation",
            "maintenance"
        ],
        "antonyms": [],
        "sentence": "The retention of old technology has slowed the company's growth."
    },
    {
        "id": 870,
        "word": "retaliate",
        "turkish": "missillemede bulunmak, karşılık vermek",
        "synonyms": [
            "get revenge",
            "strike back"
        ],
        "antonyms": [],
        "sentence": "If someone insults you, don't retaliate as it only makes the situation worse."
    },
    {
        "id": 871,
        "word": "combustible",
        "turkish": "yanıcı, yanan",
        "synonyms": [
            "burning"
        ],
        "antonyms": [],
        "sentence": "Wood and coal are both combustible substances."
    },
    {
        "id": 872,
        "word": "corporate",
        "turkish": "ticari, şirkete ait, ortak",
        "synonyms": [
            "commercial"
        ],
        "antonyms": [
            "individual"
        ],
        "sentence": "All adults take corporate responsibility for the upbringing of the tribe's children."
    },
    {
        "id": 873,
        "word": "efficiency",
        "turkish": "verimlilik, etkili olma",
        "synonyms": [
            "effectiveness"
        ],
        "antonyms": [
            "ineffectiveness",
            "incompetence"
        ],
        "sentence": "What is so impressive about their society is the efficiency of the public services."
    },
    {
        "id": 874,
        "word": "discrepancy",
        "turkish": "tutarsızlık, farklılık",
        "synonyms": [
            "difference",
            "inconsistency"
        ],
        "antonyms": [
            "similarity"
        ],
        "sentence": "There is some discrepancy between the two accounts."
    },
    {
        "id": 875,
        "word": "expire",
        "turkish": "süresi dolmak, sona ermek",
        "synonyms": [
            "end",
            "terminate"
        ],
        "antonyms": [
            "start",
            "begin",
            "commence"
        ],
        "sentence": "The contract between the two companies will expire at the end of the year."
    },
    {
        "id": 876,
        "word": "exhilarate",
        "turkish": "canlandırmak, keyif vermek",
        "synonyms": [
            "enliven",
            "invigorate"
        ],
        "antonyms": [
            "depress",
            "unnerve"
        ],
        "sentence": "We were exhilarated by our walk in the snow."
    },
    {
        "id": 877,
        "word": "ruin",
        "turkish": "yıkmak, mahvetmek",
        "synonyms": [
            "destroy",
            "collapse"
        ],
        "antonyms": [
            "create",
            "build"
        ],
        "sentence": "Huge modern hotels have ruined this once unspoilt coastline."
    },
    {
        "id": 878,
        "word": "appease",
        "turkish": "yatıştırmak, teskin etmek",
        "synonyms": [
            "calm down",
            "pacify",
            "soothe",
            "reconcile"
        ],
        "antonyms": [
            "aggravate",
            "intensify"
        ],
        "sentence": "She claimed that the government had changed the law in order to appease their critics."
    },
    {
        "id": 879,
        "word": "charity",
        "turkish": "yardım, vakıf",
        "synonyms": [
            "assistance",
            "help"
        ],
        "antonyms": [],
        "sentence": "People tend to give money to charity during Ramadan."
    },
    {
        "id": 880,
        "word": "allow",
        "turkish": "izin vermek, müsade etmek",
        "synonyms": [
            "let",
            "permit",
            "authorize"
        ],
        "antonyms": [
            "forbid",
            "prohibit",
            "disapprove"
        ],
        "sentence": "Red Cross staff were allowed access to the prison for the first time a few days ago."
    },
    {
        "id": 881,
        "word": "anguish",
        "turkish": "acı, ızdırap",
        "synonyms": [
            "pain",
            "torture",
            "torment",
            "misery"
        ],
        "antonyms": [
            "ease",
            "pleasure"
        ],
        "sentence": "Because of her anguish, she forgot to leave a message."
    },
    {
        "id": 882,
        "word": "zenith",
        "turkish": "zirve",
        "synonyms": [
            "peak",
            "summit"
        ],
        "antonyms": [],
        "sentence": "His career reached its zenith in the 1960s."
    },
    {
        "id": 883,
        "word": "unification",
        "turkish": "birleşme",
        "synonyms": [
            "union",
            "merger"
        ],
        "antonyms": [
            "separation"
        ],
        "sentence": "The unification of East and West Germany did not surprise people."
    },
    {
        "id": 884,
        "word": "vigorous",
        "turkish": "güçlü, enerjik",
        "synonyms": [
            "powerful",
            "energetic"
        ],
        "antonyms": [
            "weak",
            "impotent"
        ],
        "sentence": "There has been vigorous opposition to the proposals for a new road."
    },
    {
        "id": 885,
        "word": "violate",
        "turkish": "çiğnemek, ihlal etmek",
        "synonyms": [
            "break",
            "disregard"
        ],
        "antonyms": [
            "obey",
            "comply with",
            "conform to"
        ],
        "sentence": "It seems that the planes deliberately violated the cease-fire agreement."
    },
    {
        "id": 886,
        "word": "famine",
        "turkish": "açlık",
        "synonyms": [
            "starvation",
            "shortage of food"
        ],
        "antonyms": [
            "wealth",
            "affluence",
            "prosperity"
        ],
        "sentence": "There was news of refugees dying of famine."
    },
    {
        "id": 887,
        "word": "deteriorate",
        "turkish": "kötüleşmek, bozulmak",
        "synonyms": [
            "get worse"
        ],
        "antonyms": [
            "improve"
        ],
        "sentence": "The political situation in the region has deteriorated rapidly."
    },
    {
        "id": 888,
        "word": "durable",
        "turkish": "dayanıklı",
        "synonyms": [
            "long-lasting",
            "strong",
            "enduring"
        ],
        "antonyms": [
            "perishable"
        ],
        "sentence": "The machines have to be made of durable materials."
    },
    {
        "id": 889,
        "word": "controversial",
        "turkish": "çelişkili, tartışmalı",
        "synonyms": [
            "debatable",
            "arguable"
        ],
        "antonyms": [
            "unquestioned",
            "undisputed"
        ],
        "sentence": "The book was on a very controversial issue."
    },
    {
        "id": 890,
        "word": "dedicate to",
        "turkish": "adamak",
        "synonyms": [
            "devote to"
        ],
        "antonyms": [],
        "sentence": "He has dedicated his life to scientific research."
    },
    {
        "id": 891,
        "word": "mighty",
        "turkish": "güçlü",
        "synonyms": [
            "powerful",
            "strong"
        ],
        "antonyms": [
            "weak",
            "frail"
        ],
        "sentence": "In the next game they will face the mighty Redskins."
    },
    {
        "id": 892,
        "word": "rear",
        "turkish": "büyütmek, yetiştirmek, kaldırmak, dikmek, inşa etmek",
        "synonyms": [
            "bring up",
            "raise",
            "care for"
        ],
        "antonyms": [],
        "sentence": "The lion slowly reared its head and looked around."
    },
    {
        "id": 893,
        "word": "repel",
        "turkish": "geri püskürtmek, itmek, reddetmek, tiksindirmek",
        "synonyms": [
            "keep away",
            "drive back"
        ],
        "antonyms": [
            "absorb",
            "suck in"
        ],
        "sentence": "The defenders repelled the attack without losing any men."
    },
    {
        "id": 894,
        "word": "obsess",
        "turkish": "saplantı haline getirmek",
        "synonyms": [
            "preoccupy",
            "recur in the mind"
        ],
        "antonyms": [],
        "sentence": "Why are people so obsessed with money?"
    },
    {
        "id": 895,
        "word": "insurmountable",
        "turkish": "başa çıkılmaz, üstesinden gelinemez, çok büyük",
        "synonyms": [
            "formidable",
            "overwhelming"
        ],
        "antonyms": [
            "surmountable"
        ],
        "sentence": "This small country is faced with an insurmountable debt."
    },
    {
        "id": 896,
        "word": "indulge",
        "turkish": "kendini kaptırmak, müptela olmak",
        "synonyms": [
            "enjoy too much",
            "give in too much"
        ],
        "antonyms": [],
        "sentence": "The soccer fans indulged in the match, waving flags and singing songs."
    },
    {
        "id": 897,
        "word": "inflict",
        "turkish": "(Kötü bir şeye) neden olmak, -e uğratmak",
        "synonyms": [
            "lead to",
            "cause",
            "bring about"
        ],
        "antonyms": [],
        "sentence": "These new bullets are capable of inflicting massive injuries."
    },
    {
        "id": 898,
        "word": "fraction",
        "turkish": "küçük parça, kesir.",
        "synonyms": [
            "bit",
            "tiny portion"
        ],
        "antonyms": [
            "whole",
            "total"
        ],
        "sentence": "¼ and 0.25 are different ways of representing the same fraction."
    },
    {
        "id": 899,
        "word": "swindle",
        "turkish": "dolandırmak",
        "synonyms": [
            "deceive",
            "cheat"
        ],
        "antonyms": [],
        "sentence": "They swindled local businesses out of thousands of pounds."
    },
    {
        "id": 900,
        "word": "sweat",
        "turkish": "terlemek",
        "synonyms": [
            "perspire"
        ],
        "antonyms": [],
        "sentence": "It was so hot when we arrived in Tripoli that we started to sweat as soon as we got off the plane."
    },
    {
        "id": 901,
        "word": "queue",
        "turkish": "kuyruk, sıra",
        "synonyms": [
            "line",
            "line up",
            "stand in line"
        ],
        "antonyms": [],
        "sentence": "If you want tickets, you had beter join the queue."
    },
    {
        "id": 902,
        "word": "justice",
        "turkish": "adalet, hak, haklılık, doğruluk",
        "synonyms": [
            "fairness",
            "equity"
        ],
        "antonyms": [
            "injustice",
            "unfairness"
        ],
        "sentence": "There's no justice in the world, people aren’t treated equally."
    },
    {
        "id": 903,
        "word": "inborn",
        "turkish": "doğuştan gelen",
        "synonyms": [
            "innate"
        ],
        "antonyms": [
            "unnatural"
        ],
        "sentence": "She seems to have an inborn talent for physics."
    },
    {
        "id": 904,
        "word": "idle",
        "turkish": "başı boş, aylak, boşta, çalışmayan, tembel",
        "synonyms": [
            "unoccupied"
        ],
        "antonyms": [
            "occupied"
        ],
        "sentence": "Half of these factories now stand idle."
    },
    {
        "id": 905,
        "word": "humiliate",
        "turkish": "küçük düşürmek, aşağılamak",
        "synonyms": [
            "degrade",
            "disgrace",
            "look down on"
        ],
        "antonyms": [
            "honor",
            "look up to"
        ],
        "sentence": "You cannot humiliate me by questioning in front of everyone like that."
    },
    {
        "id": 906,
        "word": "recreation",
        "turkish": "eğlence",
        "synonyms": [
            "leisure",
            "pastime",
            "amusement"
        ],
        "antonyms": [],
        "sentence": "His favourite recreations are golf and playing scrabble."
    },
    {
        "id": 907,
        "word": "mutual",
        "turkish": "karşılıklı, çift taraflı",
        "synonyms": [
            "reciprocal",
            "common"
        ],
        "antonyms": [],
        "sentence": "Theirs was a partnership based on mutual respect, trust and understanding."
    },
    {
        "id": 908,
        "word": "scope",
        "turkish": "kapsam",
        "synonyms": [
            "range"
        ],
        "antonyms": [],
        "sentence": "I'm afraid that problem is beyond/outside the scope of my lecture."
    },
    {
        "id": 909,
        "word": "merely",
        "turkish": "yalnızca, sadece",
        "synonyms": [
            "only",
            "solely",
            "just"
        ],
        "antonyms": [],
        "sentence": "I wasn't complaining, I merely said that I was tired."
    },
    {
        "id": 910,
        "word": "lethal",
        "turkish": "öldürücü, ölümcül",
        "synonyms": [
            "fatal",
            "deadly",
            "mortal"
        ],
        "antonyms": [
            "safe"
        ],
        "sentence": "In the car the police found guns, knives and other lethal weapons."
    },
    {
        "id": 911,
        "word": "demonstrate",
        "turkish": "göstermek",
        "synonyms": [
            "show",
            "display",
            "indicate"
        ],
        "antonyms": [
            "hide",
            "disprove"
        ],
        "sentence": "These problems demonstrate the importance of strategic planning."
    },
    {
        "id": 912,
        "word": "delineate",
        "turkish": "tasvir etmek, betimlemek",
        "synonyms": [
            "describe",
            "portray"
        ],
        "antonyms": [],
        "sentence": "The main characters are clearly delineated in the first chapter of the book."
    },
    {
        "id": 913,
        "word": "commend",
        "turkish": "övmek",
        "synonyms": [
            "praise",
            "extol",
            "acclaim"
        ],
        "antonyms": [
            "look down on",
            "humiliate"
        ],
        "sentence": "For a low-budget film, it has much to commend in it."
    },
    {
        "id": 914,
        "word": "extravagant",
        "turkish": "müsrif, aşırı harcama yapan, savurgan",
        "synonyms": [
            "excessive",
            "lavish"
        ],
        "antonyms": [
            "stingy",
            "mean"
        ],
        "sentence": "The extravagant lifestyle of a movie star affects lots of young people."
    },
    {
        "id": 915,
        "word": "essential",
        "turkish": "gerekli, vazgeçilemeyen",
        "synonyms": [
            "necessary",
            "indispensable"
        ],
        "antonyms": [
            "unnecessary",
            "redundant"
        ],
        "sentence": "Government support will be essential if the project is to succeed."
    },
    {
        "id": 916,
        "word": "erupt",
        "turkish": "patlamak, püskürtmek",
        "synonyms": [
            "explode",
            "emit",
            "break out"
        ],
        "antonyms": [],
        "sentence": "Since the volcano last erupted, many houses have been rebuilt."
    },
    {
        "id": 917,
        "word": "endure",
        "turkish": "dayanmak, katlanmak, tahammül etmek",
        "synonyms": [
            "bear",
            "tolerate",
            "put up with"
        ],
        "antonyms": [
            "can’t stand",
            "can’t bear"
        ],
        "sentence": "She's had to endure three painful operations on her leg."
    },
    {
        "id": 918,
        "word": "appoint",
        "turkish": "atamak",
        "synonyms": [
            "assign",
            "allot",
            "direct"
        ],
        "antonyms": [
            "withhold",
            "cancel"
        ],
        "sentence": "He's been appointed as the director of the publishing division."
    },
    {
        "id": 919,
        "word": "appreciate",
        "turkish": "takdir etmek, beğenmek, anlamak",
        "synonyms": [
            "admire",
            "esteem",
            "value highly",
            "respect"
        ],
        "antonyms": [
            "undervalue",
            "misjudge",
            "depreciate"
        ],
        "sentence": "We really appreciate all the support you gave us last weekend."
    },
    {
        "id": 920,
        "word": "available",
        "turkish": "mümkün, elde edilebilir",
        "synonyms": [
            "accessible",
            "obtainable"
        ],
        "antonyms": [
            "unavailable",
            "inaccessible"
        ],
        "sentence": "It is vital that food is made available to the famine areas."
    },
    {
        "id": 921,
        "word": "triumph",
        "turkish": "zafer, başarı",
        "synonyms": [
            "victory",
            "achievement",
            "success"
        ],
        "antonyms": [
            "defeat",
            "failure"
        ],
        "sentence": "The signing of the agreement was a personal triumph for the Prime Minister."
    },
    {
        "id": 922,
        "word": "rule",
        "turkish": "yönetmek, hüküm sürmek, egemen olmak",
        "synonyms": [
            "govern",
            "reign"
        ],
        "antonyms": [],
        "sentence": "Most modern kings and queens rule their countries only in a formal way, without real power."
    },
    {
        "id": 923,
        "word": "sophisticated",
        "turkish": "görmüş geçirmiş, gelişmiş, karmaşık",
        "synonyms": [
            "cultivated",
            "developed",
            "complex"
        ],
        "antonyms": [
            "simple"
        ],
        "sentence": "I think a more sophisticated approach is needed to solve this problem."
    },
    {
        "id": 924,
        "word": "expedition",
        "turkish": "sefer",
        "synonyms": [
            "special journey",
            "trip"
        ],
        "antonyms": [],
        "sentence": "Scott died while he was on an expedition to the Antarctic in 1912."
    },
    {
        "id": 925,
        "word": "edible",
        "turkish": "yenilebilir",
        "synonyms": [
            "can be eaten"
        ],
        "antonyms": [
            "inedible"
        ],
        "sentence": "Only the leaves of the plant are edible."
    },
    {
        "id": 926,
        "word": "embody",
        "turkish": "simgelemek, temsil etmek",
        "synonyms": [
            "symbolize",
            "stand for",
            "represent"
        ],
        "antonyms": [
            "exclude"
        ],
        "sentence": "She embodied good sportsmanship on the playing field."
    },
    {
        "id": 927,
        "word": "conquer",
        "turkish": "fethetmek, işgal etmek",
        "synonyms": [
            "occupy"
        ],
        "antonyms": [
            "yield",
            "withdraw"
        ],
        "sentence": "England was conquered by the Normans in 1066."
    },
    {
        "id": 928,
        "word": "consent",
        "turkish": "razı olma, kabullenme, rıza",
        "synonyms": [
            "agreement",
            "acceptance"
        ],
        "antonyms": [
            "disallowance",
            "dismissal"
        ],
        "sentence": "They can't publish your name without your consent."
    },
    {
        "id": 929,
        "word": "corrupt",
        "turkish": "rüşvet alan, ahlaksız, bozuk, yozlaşmış",
        "synonyms": [
            "dishonest",
            "immoral"
        ],
        "antonyms": [
            "honest",
            "virtuous"
        ],
        "sentence": "The whole system was corrupt - every official she approached wanted money before helping her."
    },
    {
        "id": 930,
        "word": "recession",
        "turkish": "(Ekonomik) durgunluk, gerileme, geri çekilme",
        "synonyms": [
            "decline",
            "downturn",
            "slump"
        ],
        "antonyms": [
            "promotion",
            "advance"
        ],
        "sentence": "The country is sliding into the depths of a recession."
    },
    {
        "id": 931,
        "word": "resent",
        "turkish": "alınmak, gücenmek",
        "synonyms": [
            "feel angry",
            "feel offended"
        ],
        "antonyms": [],
        "sentence": "She bitterly resented her father's new wife."
    },
    {
        "id": 932,
        "word": "impress",
        "turkish": "etkilemek",
        "synonyms": [
            "affect",
            "influence",
            "impact"
        ],
        "antonyms": [],
        "sentence": "He tried to impress me with his extensive knowledge of wine."
    },
    {
        "id": 933,
        "word": "furnish",
        "turkish": "döşemek, donatmak, sağlamak",
        "synonyms": [
            "provide",
            "supply"
        ],
        "antonyms": [],
        "sentence": "They've furnished the room very simply."
    },
    {
        "id": 934,
        "word": "feasible",
        "turkish": "mümkün, yapılabilir",
        "synonyms": [
            "possible"
        ],
        "antonyms": [
            "impossible"
        ],
        "sentence": "It may be feasible to clone human beings, but is it ethical?"
    },
    {
        "id": 935,
        "word": "steep",
        "turkish": "dik, sarp",
        "synonyms": [
            "sharp",
            "vertical"
        ],
        "antonyms": [],
        "sentence": "It's a steep climb to the top of the mountain, but the view is worth it."
    },
    {
        "id": 936,
        "word": "subsequent",
        "turkish": "devamındaki, bir sonraki, ardışık",
        "synonyms": [
            "following",
            "later",
            "successive"
        ],
        "antonyms": [
            "previous"
        ],
        "sentence": "The book discusses his illness and subsequent resignation from the government."
    },
    {
        "id": 937,
        "word": "rank",
        "turkish": "mevki, makam, sıra",
        "synonyms": [
            "position",
            "title",
            "status"
        ],
        "antonyms": [],
        "sentence": "He has eventually been promoted to the rank of captain."
    },
    {
        "id": 938,
        "word": "prompt",
        "turkish": "sevketmek, yöneltmek, neden olmak",
        "synonyms": [
            "cause",
            "urge",
            "motivate",
            "encourage"
        ],
        "antonyms": [
            "discourage",
            "deter"
        ],
        "sentence": "I don't know what prompted him to leave."
    },
    {
        "id": 939,
        "word": "prove",
        "turkish": "kanıtlamak",
        "synonyms": [
            "verify",
            "confirm"
        ],
        "antonyms": [
            "refute"
        ],
        "sentence": "They suspected that she'd killed her brother, but they could never actually prove that it was her."
    },
    {
        "id": 940,
        "word": "promising",
        "turkish": "gelecek vadeden",
        "synonyms": [
            "hopeful",
            "encouraging"
        ],
        "antonyms": [
            "pessimistic"
        ],
        "sentence": "They won the award for the most promising new band of the year."
    },
    {
        "id": 941,
        "word": "qualify",
        "turkish": "hak kazanmak/kazandırmak, hafifletmek, nitelemek",
        "synonyms": [
            "certify",
            "entitle",
            "suit",
            "fit",
            "prepare"
        ],
        "antonyms": [
            "disqualify"
        ],
        "sentence": "She hopes to qualify as a lawyer at the end of the year."
    },
    {
        "id": 942,
        "word": "tactful",
        "turkish": "nazik, incelik içeren, nazik ve anlayışlı",
        "synonyms": [
            "sensitive",
            "thoughtful"
        ],
        "antonyms": [
            "rude"
        ],
        "sentence": "Mentioning his baldness wasn't very tactful."
    },
    {
        "id": 943,
        "word": "sustain",
        "turkish": "sürdürmek",
        "synonyms": [
            "maintain",
            "keep"
        ],
        "antonyms": [
            "end"
        ],
        "sentence": "The economy looks set to sustain its growth into next year as well."
    },
    {
        "id": 944,
        "word": "take sth. into account",
        "turkish": "gözönüne almak, hesaba katmak",
        "synonyms": [
            "consider"
        ],
        "antonyms": [
            "ignore"
        ],
        "sentence": "You should take the difficulties of a private business into account before you embark on."
    },
    {
        "id": 945,
        "word": "prerequisite",
        "turkish": "önkoşul, önceden gerekli olan şey",
        "synonyms": [
            "requirement",
            "precondition"
        ],
        "antonyms": [],
        "sentence": "Passing a written exam is a prerequisite for taking the advanced course."
    },
    {
        "id": 946,
        "word": "sporadic",
        "turkish": "aralıklı, arasıra meydana gelen",
        "synonyms": [
            "irregular",
            "intermittent"
        ],
        "antonyms": [
            "regular",
            "permanent"
        ],
        "sentence": "More than 100 people have been killed this year in sporadic outbursts of ethnic violence."
    },
    {
        "id": 947,
        "word": "fairly",
        "turkish": "adil şekilde",
        "synonyms": [
            "equitably",
            "justly"
        ],
        "antonyms": [
            "subjectively"
        ],
        "sentence": "The money was not distributed fairly."
    },
    {
        "id": 948,
        "word": "grief",
        "turkish": "üzüntü, kader",
        "synonyms": [
            "sorrow",
            "sadness"
        ],
        "antonyms": [
            "joy",
            "delight",
            "happiness"
        ],
        "sentence": "Her grief at her son's death was terrible."
    },
    {
        "id": 949,
        "word": "malign",
        "turkish": "kötü",
        "synonyms": [
            "bad",
            "negative"
        ],
        "antonyms": [
            "good",
            "positive",
            "benign"
        ],
        "sentence": "Foreign domination had a malign influence on local politics."
    },
    {
        "id": 950,
        "word": "obey",
        "turkish": "uymak",
        "synonyms": [
            "abide by",
            "comply with"
        ],
        "antonyms": [
            "disobey",
            "resist",
            "challenge",
            "violate"
        ],
        "sentence": "The soldiers refused to obey the orders."
    },
    {
        "id": 951,
        "word": "loyal",
        "turkish": "sadık",
        "synonyms": [
            "faithful"
        ],
        "antonyms": [
            "disloyal"
        ],
        "sentence": "Even if all her other friends deserted her, Mary remained loyal."
    },
    {
        "id": 952,
        "word": "condemn",
        "turkish": "kınamak, yermek",
        "synonyms": [
            "denounce"
        ],
        "antonyms": [
            "praise",
            "approve",
            "commend"
        ],
        "sentence": "The terrorist actions have been condemned."
    },
    {
        "id": 953,
        "word": "detriment",
        "turkish": "zarar, ziyan",
        "synonyms": [
            "harm",
            "damage"
        ],
        "antonyms": [
            "benefit",
            "remedy",
            "improvement"
        ],
        "sentence": "Are you sure that I can follow this diet without detriment to my health?"
    },
    {
        "id": 954,
        "word": "empirical",
        "turkish": "deneysel",
        "synonyms": [
            "experimental",
            "empirical"
        ],
        "antonyms": [],
        "sentence": "This theory needs to be backed up with solid empirical evidence."
    },
    {
        "id": 955,
        "word": "evidence",
        "turkish": "kanıt, delil",
        "synonyms": [
            "proof"
        ],
        "antonyms": [
            "disproof",
            "concealment"
        ],
        "sentence": "The police have found no evidence of a terrorist link with the murder."
    },
    {
        "id": 956,
        "word": "sensible",
        "turkish": "akıllı, mantıklı, aklı başında, akla uygun",
        "synonyms": [
            "reasonable",
            "rational",
            "logical"
        ],
        "antonyms": [
            "unreasonable",
            "illogical",
            "absurd"
        ],
        "sentence": "He made sensible decisions despite the pressures."
    },
    {
        "id": 957,
        "word": "wealth",
        "turkish": "zenginlik, servet",
        "synonyms": [
            "prosperity",
            "affluence"
        ],
        "antonyms": [
            "poverty",
            "indigence"
        ],
        "sentence": "During a successful business career, she accumulated a great amount of wealth."
    },
    {
        "id": 958,
        "word": "torture",
        "turkish": "işkence yapmak",
        "synonyms": [
            "torment",
            "make suffer"
        ],
        "antonyms": [],
        "sentence": "Half of the prisoners died after torture and starvation."
    },
    {
        "id": 959,
        "word": "versatile",
        "turkish": "çok yönlü",
        "synonyms": [
            "many-skilled",
            "ingenious"
        ],
        "antonyms": [],
        "sentence": "He's a very versatile young actor who's as happy in horror films as he is in TV comedies."
    },
    {
        "id": 960,
        "word": "utility",
        "turkish": "yararlılık, fayda",
        "synonyms": [
            "usefulness",
            "effectiveness"
        ],
        "antonyms": [
            "futility",
            "uselessness"
        ],
        "sentence": "This car’s basic utility lies in being able to drive where other vehicles can't go."
    },
    {
        "id": 961,
        "word": "unprecedented",
        "turkish": "daha önce görülmemiş, eşsiz",
        "synonyms": [
            "unique",
            "unmatched"
        ],
        "antonyms": [
            "precedented"
        ],
        "sentence": "This century has witnessed environmental destruction on an unprecedented scale."
    },
    {
        "id": 962,
        "word": "vibrate",
        "turkish": "titreşim yapmak",
        "synonyms": [
            "shake",
            "tremble",
            "oscillate"
        ],
        "antonyms": [
            "rest",
            "be still"
        ],
        "sentence": "The whole station seemed to vibrate as the express train rushed through."
    },
    {
        "id": 963,
        "word": "vulnerable",
        "turkish": "korunmasız, savunmasız",
        "synonyms": [
            "susceptible",
            "defenseless",
            "unprotected"
        ],
        "antonyms": [
            "defended",
            "formidable"
        ],
        "sentence": "Tourists are more vulnerable to attack, because they do not know which areas of the city to avoid."
    },
    {
        "id": 964,
        "word": "terminate",
        "turkish": "sona er (dir)mek, bitirmek",
        "synonyms": [
            "end",
            "conclude"
        ],
        "antonyms": [
            "begin",
            "start",
            "commence"
        ],
        "sentence": "They terminated my contract in October"
    },
    {
        "id": 965,
        "word": "warrant",
        "turkish": "garanti etmek, haklı kılmak, gerektirmek",
        "synonyms": [
            "justify",
            "necessitate",
            "guarantee"
        ],
        "antonyms": [
            "invalidate"
        ],
        "sentence": "This is a relatively simple task that really doesn't warrant a great deal of time being spent on it."
    },
    {
        "id": 966,
        "word": "shrink",
        "turkish": "küçülmek, çekmek, azalmak",
        "synonyms": [
            "diminish",
            "become smaller"
        ],
        "antonyms": [
            "expand",
            "swell"
        ],
        "sentence": "Your sweater might shrink if you wash it at too high a temperature."
    },
    {
        "id": 967,
        "word": "bias",
        "turkish": "önyargı",
        "synonyms": [
            "prejudice",
            "prejudgment"
        ],
        "antonyms": [
            "being objective",
            "unprejudiced"
        ],
        "sentence": "There was clear evidence of a strong bias against her."
    },
    {
        "id": 968,
        "word": "alter",
        "turkish": "değiştirmek",
        "synonyms": [
            "change",
            "modify",
            "shift",
            "convert"
        ],
        "antonyms": [
            "conserve",
            "preserve",
            "keep",
            "retain"
        ],
        "sentence": "We've had to alter some of our plans."
    },
    {
        "id": 969,
        "word": "adamant",
        "turkish": "kararlı, vazgeçmeyen, inatçı",
        "synonyms": [
            "resolute",
            "obstinate",
            "unyielding"
        ],
        "antonyms": [
            "yielding",
            "easy-going"
        ],
        "sentence": "The prime minister is adamant that he will not resign."
    },
    {
        "id": 970,
        "word": "abstain from",
        "turkish": "çekimser kalmak, uzak durmak, -den kaçınmak",
        "synonyms": [
            "refrain from",
            "avoid"
        ],
        "antonyms": [
            "indulge",
            "commit"
        ],
        "sentence": "The president abstained from mentioning the issue."
    },
    {
        "id": 971,
        "word": "essence",
        "turkish": "öz, esas",
        "synonyms": [
            "basic nature",
            "essential quality"
        ],
        "antonyms": [],
        "sentence": "Vanilla essence is my favourite."
    },
    {
        "id": 972,
        "word": "drawback",
        "turkish": "kusur, sakınca",
        "synonyms": [
            "pitfall",
            "shortcoming",
            "disadvantage",
            "obstacle",
            "defect"
        ],
        "antonyms": [
            "advantage",
            "merit",
            "plus"
        ],
        "sentence": "One of the drawbacks of living with someone is having to share the same bathroom."
    },
    {
        "id": 973,
        "word": "commit",
        "turkish": "(suç) işlemek, emanet etmek, teslim etmek, -e karışmak",
        "synonyms": [
            "perform",
            "assign",
            "carry out"
        ],
        "antonyms": [],
        "sentence": "He was sent to prison for a crime that he didn't commit."
    },
    {
        "id": 974,
        "word": "cure",
        "turkish": "tedavi etmek, iyileştirmek",
        "synonyms": [
            "treat",
            "heal",
            "find remedy"
        ],
        "antonyms": [
            "make worse",
            "get ill"
        ],
        "sentence": "At one time the doctors couldn't cure TB."
    },
    {
        "id": 975,
        "word": "medieval",
        "turkish": "orta çağa ait",
        "synonyms": [
            "belonging to middle ages"
        ],
        "antonyms": [],
        "sentence": "This is a medieval painting."
    },
    {
        "id": 976,
        "word": "outnumber",
        "turkish": "sayıca üstün olmak",
        "synonyms": [
            "to be greater in number"
        ],
        "antonyms": [],
        "sentence": "In our office, the women outnumber the men 3 to 1."
    },
    {
        "id": 977,
        "word": "retard",
        "turkish": "geciktirmek, yavaşlatmak",
        "synonyms": [
            "delay",
            "impede",
            "obstruct"
        ],
        "antonyms": [],
        "sentence": "A rise in interest rates will severely retard economic growth."
    },
    {
        "id": 978,
        "word": "heritage",
        "turkish": "miras",
        "synonyms": [
            "legacy",
            "inheritance"
        ],
        "antonyms": [],
        "sentence": "These scripts are a vital part of the cultural heritage of South America."
    },
    {
        "id": 979,
        "word": "hardly",
        "turkish": "hemen hemen hiç, neredeyse hiç, zar zor, güç bela",
        "synonyms": [
            "barely",
            "scarcely",
            "almost not"
        ],
        "antonyms": [
            "often",
            "almost always"
        ],
        "sentence": "He ate hardly anything."
    },
    {
        "id": 980,
        "word": "spin",
        "turkish": "dönmek",
        "synonyms": [
            "rotate",
            "turn"
        ],
        "antonyms": [],
        "sentence": "The Earth spins on its axis."
    },
    {
        "id": 981,
        "word": "quota",
        "turkish": "hisse, pay, kontenjan, kota",
        "synonyms": [
            "limitation",
            "restriction"
        ],
        "antonyms": [],
        "sentence": "The country now have a quota on immigration"
    },
    {
        "id": 982,
        "word": "gradual",
        "turkish": "aşamalı, kademeli, yavaş yavaş olan",
        "synonyms": [
            "step by step"
        ],
        "antonyms": [
            "sudden",
            "immediate"
        ],
        "sentence": "There has been a gradual improvement in our sales figures over the last two years."
    },
    {
        "id": 983,
        "word": "far-reaching",
        "turkish": "geniş kapsamlı",
        "synonyms": [
            "extensive",
            "broad",
            "comprehensive"
        ],
        "antonyms": [
            "simple"
        ],
        "sentence": "These new laws will have far-reaching benefits for all working mothers."
    },
    {
        "id": 984,
        "word": "inept",
        "turkish": "uygunsuz, yakışıksız, yersiz, beceriksiz, hünersiz",
        "synonyms": [
            "inappropriate"
        ],
        "antonyms": [
            "appropriate",
            "suitable"
        ],
        "sentence": "He was criticized for his inept handling of the situation."
    },
    {
        "id": 985,
        "word": "indict",
        "turkish": "suçlamak",
        "synonyms": [
            "accuse",
            "blame"
        ],
        "antonyms": [],
        "sentence": "Five people were indicted for making and using counterfeit currency."
    },
    {
        "id": 986,
        "word": "reassure",
        "turkish": "güvence vermek, birinin şüphelerini gidermek",
        "synonyms": [
            "assure",
            "confide"
        ],
        "antonyms": [],
        "sentence": "He reassured me that my cheque would arrive soon."
    },
    {
        "id": 987,
        "word": "persevere",
        "turkish": "sebat etmek, ısrar etmek",
        "synonyms": [
            "persist",
            "continue"
        ],
        "antonyms": [],
        "sentence": "The education director is persevering in his attempt to obtain additional funding for the school."
    },
    {
        "id": 988,
        "word": "precipitation",
        "turkish": "yağış",
        "synonyms": [
            "rainfall",
            "snow"
        ],
        "antonyms": [],
        "sentence": "The forecast is for cloudy weather with no precipitation expected."
    },
    {
        "id": 989,
        "word": "obsolete",
        "turkish": "modası geçmiş, eskimiş",
        "synonyms": [
            "old-fashioned",
            "outdated"
        ],
        "antonyms": [
            "modern",
            "current"
        ],
        "sentence": "Gas lamps became obsolete when electric lighting was invented."
    },
    {
        "id": 990,
        "word": "notably",
        "turkish": "özellikle",
        "synonyms": [
            "especially",
            "particularly",
            "in particular"
        ],
        "antonyms": [],
        "sentence": "They have begun attracting investors, most notably big Japanese companies."
    },
    {
        "id": 991,
        "word": "liability",
        "turkish": "borç, sorumluluk, eğilim",
        "synonyms": [
            "responsibility",
            "inclination",
            "proneness",
            "debt"
        ],
        "antonyms": [
            "irresponsibility"
        ],
        "sentence": "He denies any liability for the damage caused."
    },
    {
        "id": 992,
        "word": "decline",
        "turkish": "azalmak, düşmek, reddetmek",
        "synonyms": [
            "decrease",
            "fall",
            "refuse"
        ],
        "antonyms": [
            "increase",
            "rise"
        ],
        "sentence": "His interest in the project declined after his wife died."
    },
    {
        "id": 993,
        "word": "consensus",
        "turkish": "fikir birliği, uzlaşma",
        "synonyms": [
            "agreement"
        ],
        "antonyms": [
            "disagreement"
        ],
        "sentence": "Could we reach a consensus on this matter?"
    },
    {
        "id": 994,
        "word": "confront",
        "turkish": "karşılaşmak",
        "synonyms": [
            "face up to",
            "encounter",
            "oppose"
        ],
        "antonyms": [
            "escape"
        ],
        "sentence": "As she left the court, she was confronted by angry crowds."
    },
    {
        "id": 995,
        "word": "determine",
        "turkish": "karar vermek",
        "synonyms": [
            "decide",
            "ascertain"
        ],
        "antonyms": [],
        "sentence": "People should be allowed to determine their own future."
    },
    {
        "id": 996,
        "word": "ensure",
        "turkish": "temin etmek, sağlamak",
        "synonyms": [
            "make sure",
            "secure",
            "provide",
            "safeguard"
        ],
        "antonyms": [
            "neglect"
        ],
        "sentence": "The airline companies are taking steps to ensure safety on their aircraft."
    },
    {
        "id": 997,
        "word": "abate",
        "turkish": "azal(t)mak, dinmek",
        "synonyms": [
            "diminish",
            "decrease",
            "reduce",
            "lessen",
            "lower"
        ],
        "antonyms": [
            "intensify",
            "increase",
            "extend",
            "enhance"
        ],
        "sentence": "Nothing can abate his energy."
    },
    {
        "id": 998,
        "word": "bargain",
        "turkish": "pazarlık yapmak, görüşmek",
        "synonyms": [
            "negotiate"
        ],
        "antonyms": [
            "buy",
            "purchase immediately"
        ],
        "sentence": "Unions bargain with employers for better rates of pay each year."
    },
    {
        "id": 999,
        "word": "sole",
        "turkish": "tek, bir tane",
        "synonyms": [
            "only",
            "unique"
        ],
        "antonyms": [
            "common"
        ],
        "sentence": "The sole survivor of the accident was found in the water after six hours."
    },
    {
        "id": 1000,
        "word": "soar",
        "turkish": "çok yükselmek",
        "synonyms": [
            "rise",
            "climb",
            "mount"
        ],
        "antonyms": [
            "descend"
        ],
        "sentence": "Temperatures will soar into the forties over the weekend say the weather forecasters."
    },
    {
        "id": 1001,
        "word": "tiny",
        "turkish": "çok küçük",
        "synonyms": [
            "very small",
            "petty"
        ],
        "antonyms": [
            "enormous",
            "huge"
        ],
        "sentence": "A tiny flower made her happy."
    },
    {
        "id": 1002,
        "word": "thrilling",
        "turkish": "heyecan verici",
        "synonyms": [
            "exciting"
        ],
        "antonyms": [
            "boring",
            "dull"
        ],
        "sentence": "The book is a thrilling adventure story."
    },
    {
        "id": 1003,
        "word": "vain",
        "turkish": "değersiz, boş, yararsız",
        "synonyms": [
            "worthless",
            "useless"
        ],
        "antonyms": [
            "fruitful"
        ],
        "sentence": "Employers clearly hoped that the workers would stay longer, but their efforts were largely in vain."
    },
    {
        "id": 1004,
        "word": "burden",
        "turkish": "ağır yük (soyut)",
        "synonyms": [
            "load",
            "strain"
        ],
        "antonyms": [],
        "sentence": "Buying a house often places financial burden on young couples."
    },
    {
        "id": 1005,
        "word": "assert",
        "turkish": "ileri sürmek, iddia etmek",
        "synonyms": [
            "put forward",
            "claim",
            "maintain"
        ],
        "antonyms": [
            "keep silent"
        ],
        "sentence": "The Allies asserted their right to move freely between the two borders."
    },
    {
        "id": 1006,
        "word": "emphasize",
        "turkish": "vurgulamak",
        "synonyms": [
            "stress"
        ],
        "antonyms": [
            "understate",
            "underestimate"
        ],
        "sentence": "I'd just like to emphasize how important it is for people to learn foreign languages."
    },
    {
        "id": 1007,
        "word": "facilitate",
        "turkish": "kolaylaştırmak",
        "synonyms": [
            "make it easy",
            "ease"
        ],
        "antonyms": [
            "make sth difficult"
        ],
        "sentence": "The new ramp will facilitate the entry of wheelchairs."
    },
    {
        "id": 1008,
        "word": "extinct",
        "turkish": "soyu tükenmiş, yok olmuş",
        "synonyms": [
            "vanished",
            "died out"
        ],
        "antonyms": [
            "survive"
        ],
        "sentence": "There is concern that the giant panda will soon become extinct."
    },
    {
        "id": 1009,
        "word": "descend",
        "turkish": "inmek, alçalmak",
        "synonyms": [
            "drop",
            "fall",
            "go down"
        ],
        "antonyms": [
            "ascend"
        ],
        "sentence": "Jane descended the stairs."
    },
    {
        "id": 1010,
        "word": "deal with",
        "turkish": "başetmek, ele almak",
        "synonyms": [
            "cope with",
            "handle",
            "tackle"
        ],
        "antonyms": [],
        "sentence": "Her new film deals with the relationship between a woman and her sick daughter."
    },
    {
        "id": 1011,
        "word": "layer",
        "turkish": "tabaka",
        "synonyms": [
            "stratum"
        ],
        "antonyms": [],
        "sentence": "A thick layer of clay lies over the sandstone."
    },
    {
        "id": 1012,
        "word": "perspire",
        "turkish": "terlemek",
        "synonyms": [
            "sweat"
        ],
        "antonyms": [],
        "sentence": "He was perspiring due to his thick woollen jumper."
    },
    {
        "id": 1013,
        "word": "miscellaneous",
        "turkish": "çeşitli",
        "synonyms": [
            "various",
            "diverse"
        ],
        "antonyms": [],
        "sentence": "There are miscellaneous rumors about the murder."
    },
    {
        "id": 1014,
        "word": "portray",
        "turkish": "göstermek, sergilemek",
        "synonyms": [
            "represent",
            "display"
        ],
        "antonyms": [],
        "sentence": "The painting portrays a beautiful young woman in a blue dress."
    },
    {
        "id": 1015,
        "word": "pervade",
        "turkish": "yayılmak, dağılmak, istila etmek, kaplamak, bürümek",
        "synonyms": [
            "spread",
            "penetrate"
        ],
        "antonyms": [],
        "sentence": "The film is a reflection of the violence that pervades American culture."
    },
    {
        "id": 1016,
        "word": "suspend",
        "turkish": "askıya almak, ertelemek",
        "synonyms": [
            "hang",
            "hang up",
            "postpone"
        ],
        "antonyms": [],
        "sentence": "The ferry service has been suspended for the day because of bad weather."
    },
    {
        "id": 1017,
        "word": "species",
        "turkish": "tür",
        "synonyms": [
            "type",
            "kind",
            "variety"
        ],
        "antonyms": [],
        "sentence": "Over a hundred species of insect are found in this area."
    },
    {
        "id": 1018,
        "word": "stick to",
        "turkish": "bağlı kalmak, yapışık olmak",
        "synonyms": [
            "abide by",
            "comply with",
            "adhere to"
        ],
        "antonyms": [],
        "sentence": "Don’t worry! We’ll stick to the agreement."
    },
    {
        "id": 1019,
        "word": "stun",
        "turkish": "sersemletmek, şok etmek",
        "synonyms": [
            "shock",
            "make unconscious"
        ],
        "antonyms": [
            "comfort",
            "relax"
        ],
        "sentence": "News of the disaster stunned people throughout the world."
    },
    {
        "id": 1020,
        "word": "strive",
        "turkish": "çaba göstermek",
        "synonyms": [
            "try",
            "attempt"
        ],
        "antonyms": [],
        "sentence": "In her essay she strove for a balance between innovation and familiar prose forms."
    },
    {
        "id": 1021,
        "word": "startle",
        "turkish": "şaşırtmak, korkutmak",
        "synonyms": [
            "surprise",
            "astonish",
            "frighten"
        ],
        "antonyms": [],
        "sentence": "The noise of the car startled the birds and the whole flock flew up into the air."
    },
    {
        "id": 1022,
        "word": "kidnap",
        "turkish": "insan kaçırmak",
        "synonyms": [
            "abduct"
        ],
        "antonyms": [
            "free",
            "liberate"
        ],
        "sentence": "The wife of a businessman has been kidnapped from her home in Surrey."
    },
    {
        "id": 1023,
        "word": "knack",
        "turkish": "yetenek",
        "synonyms": [
            "ability",
            "talent",
            "gift",
            "skill"
        ],
        "antonyms": [
            "inability",
            "awkwardness"
        ],
        "sentence": "She has the knack of persuading people easily."
    },
    {
        "id": 1024,
        "word": "irrigate",
        "turkish": "sulamak",
        "synonyms": [
            "water"
        ],
        "antonyms": [],
        "sentence": "Plants must be irrigated at regular intervals."
    },
    {
        "id": 1025,
        "word": "subversive",
        "turkish": "isyankar",
        "synonyms": [
            "rebellious"
        ],
        "antonyms": [
            "obedient"
        ],
        "sentence": "Subversive groups in society always exist."
    },
    {
        "id": 1026,
        "word": "flourish",
        "turkish": "gelişmek, büyümek, zenginleşmek",
        "synonyms": [
            "prosper",
            "grow",
            "thrive"
        ],
        "antonyms": [
            "fail",
            "decline"
        ],
        "sentence": "My tomatoes are flourishing this summer - it must be the warm weather."
    },
    {
        "id": 1027,
        "word": "reciprocal",
        "turkish": "işteş, karşılıklı, iki taraflı",
        "synonyms": [
            "mutual"
        ],
        "antonyms": [],
        "sentence": "The terms of any agreement must be reciprocal."
    },
    {
        "id": 1028,
        "word": "rehearsal",
        "turkish": "deneme, prova",
        "synonyms": [
            "trial",
            "preparation"
        ],
        "antonyms": [],
        "sentence": "They didn't have time for a rehearsal before the performance."
    },
    {
        "id": 1029,
        "word": "persecute",
        "turkish": "kötü davranmak, zulmetmek, eziyet etmek",
        "synonyms": [
            "abuse",
            "maltreat"
        ],
        "antonyms": [],
        "sentence": "Religious minorities were persecuted during the ten-year regime."
    },
    {
        "id": 1030,
        "word": "notion",
        "turkish": "fikir",
        "synonyms": [
            "idea",
            "concept"
        ],
        "antonyms": [],
        "sentence": "I have only a vague notion of what she does for a living."
    },
    {
        "id": 1031,
        "word": "mediocre",
        "turkish": "orta, vasat",
        "synonyms": [
            "average"
        ],
        "antonyms": [
            "superior",
            "inferior"
        ],
        "sentence": "The film's plot is predictable and the acting is mediocre."
    },
    {
        "id": 1032,
        "word": "denounce",
        "turkish": "kınamak, kötü tarafları açığa vurmak, ihbar etmek",
        "synonyms": [
            "condemn"
        ],
        "antonyms": [
            "praise"
        ],
        "sentence": "The government's economic policy has been denounced on all sides."
    },
    {
        "id": 1033,
        "word": "collapse",
        "turkish": "çökmek, yıkılmak, bayılmak",
        "synonyms": [
            "fall down"
        ],
        "antonyms": [
            "erect",
            "build up"
        ],
        "sentence": "Thousands of buildings collapsed in the earthquake."
    },
    {
        "id": 1034,
        "word": "drastic",
        "turkish": "köklü, sert",
        "synonyms": [
            "radical",
            "far-reaching",
            "strict"
        ],
        "antonyms": [
            "known",
            "usual"
        ],
        "sentence": "The government must take drastic measures."
    },
    {
        "id": 1035,
        "word": "emancipated",
        "turkish": "özgür, serbest",
        "synonyms": [
            "liberated",
            "free"
        ],
        "antonyms": [
            "captivated"
        ],
        "sentence": "The twenties and sixties are often known as the most emancipated decades."
    },
    {
        "id": 1036,
        "word": "escalate",
        "turkish": "tırmanmak, artmak",
        "synonyms": [
            "increase",
            "intensify"
        ],
        "antonyms": [
            "decrease",
            "diminish",
            "allay"
        ],
        "sentence": "His financial problems escalated after he became unemployed."
    },
    {
        "id": 1037,
        "word": "bleak",
        "turkish": "karamsar, kötü",
        "synonyms": [
            "hopeless",
            "gloomy"
        ],
        "antonyms": [
            "hopeful",
            "optimistic",
            "promising"
        ],
        "sentence": "The economic situation is very bleak."
    },
    {
        "id": 1038,
        "word": "sack",
        "turkish": "kovmak, işten çıkartmak",
        "synonyms": [
            "fire",
            "dismiss"
        ],
        "antonyms": [
            "recruit"
        ],
        "sentence": "They sacked her for being late."
    },
    {
        "id": 1039,
        "word": "foster",
        "turkish": "teşvik etmek",
        "synonyms": [
            "encourage",
            "nurture"
        ],
        "antonyms": [
            "discourage"
        ],
        "sentence": "I'm trying to foster an interest in classical music in my children."
    },
    {
        "id": 1040,
        "word": "plummet",
        "turkish": "(Hızlıca ve aniden) düşmek, azalmak",
        "synonyms": [
            "decline",
            "decrease",
            "drop down",
            "precipitate"
        ],
        "antonyms": [
            "ascend",
            "go up",
            "increase",
            "rise",
            "raise"
        ],
        "sentence": "House prices have plummeted in recent months."
    },
    {
        "id": 1041,
        "word": "substitution",
        "turkish": "yerine başkasını koyma, ikame",
        "synonyms": [
            "exchange",
            "change",
            "replacement"
        ],
        "antonyms": [],
        "sentence": "The substitutions we made didn't affect the shape of the team"
    },
    {
        "id": 1042,
        "word": "necessity",
        "turkish": "gereklilik",
        "synonyms": [
            "requirement",
            "requisite"
        ],
        "antonyms": [],
        "sentence": "Empathy is often considered a baseline necessity for prompting social change."
    },
    {
        "id": 1043,
        "word": "immense",
        "turkish": "büyük, kocaman, muazzam",
        "synonyms": [
            "enormous",
            "huge",
            "vast",
            "gigantic"
        ],
        "antonyms": [
            "minute",
            "tiny"
        ],
        "sentence": "There have been queens and female world leaders before, many with immense power"
    },
    {
        "id": 1044,
        "word": "sustainable",
        "turkish": "sürdürülebilir",
        "synonyms": [
            "continuous",
            "unceasing"
        ],
        "antonyms": [
            "temporary"
        ],
        "sentence": "We need sustainable practices so as to protect our watersheds from pollution."
    },
    {
        "id": 1045,
        "word": "considerably",
        "turkish": "oldukça, önemli derecede",
        "synonyms": [
            "significantly",
            "substantially",
            "dramatically",
            "enormously",
            "remarkably"
        ],
        "antonyms": [
            "insignificantly",
            "unremarkably"
        ],
        "sentence": "The list of Republicans endorsing Donald Trump has grown considerably in recent weeks."
    },
    {
        "id": 1046,
        "word": "pretend",
        "turkish": "inandırmak, … izlemini/intibaını vermek",
        "synonyms": [
            "make believe",
            "act",
            "play"
        ],
        "antonyms": [],
        "sentence": "He has actually spent his first two months restlessly, pretending everything is fine."
    },
    {
        "id": 1047,
        "word": "expenditure",
        "turkish": "masraf, gider",
        "synonyms": [
            "expense",
            "spending",
            "outgoings"
        ],
        "antonyms": [
            "savings",
            "income",
            "revenue"
        ],
        "sentence": "There was a 5 percent increase in total park expenditure per resident."
    },
    {
        "id": 1048,
        "word": "diversity",
        "turkish": "çeşitlilik, farklılık",
        "synonyms": [
            "difference",
            "dissimilarity",
            "variety"
        ],
        "antonyms": [
            "similarity",
            "uniformity"
        ],
        "sentence": "Because of California's ethnic and cultural diversity, we cannot ignore these economic and social realities."
    },
    {
        "id": 1049,
        "word": "prevent",
        "turkish": "engellemek, önlemek",
        "synonyms": [
            "obstruct",
            "hamper",
            "hinder"
        ],
        "antonyms": [
            "permit",
            "allow"
        ],
        "sentence": "Corruption is one of the most significant factors preventing law enforcement."
    },
    {
        "id": 1050,
        "word": "complementary",
        "turkish": "tamamlayıcı, bütünleyici",
        "synonyms": [
            "integral",
            "completing"
        ],
        "antonyms": [
            "independent",
            "unrelated"
        ],
        "sentence": "This Coral Reef Airborne Laboratory can provide a very high-level, complementary type of data."
    },
    {
        "id": 1051,
        "word": "relatively",
        "turkish": "nispeten, oldukça",
        "synonyms": [
            "comparatively",
            "somewhat"
        ],
        "antonyms": [],
        "sentence": "In general, the side effects from vitamin D supplements are uncommon and relatively benign."
    },
    {
        "id": 1052,
        "word": "convey",
        "turkish": "taşımak, aktarmak, iletmek",
        "synonyms": [
            "conduct",
            "transmit",
            "carry"
        ],
        "antonyms": [
            "receive",
            "withhold"
        ],
        "sentence": "Anyone who has survived combat knows that words are entirely incapable of conveying the horrors of battle."
    },
    {
        "id": 1053,
        "word": "tendency",
        "turkish": "eğilim",
        "synonyms": [
            "inclination",
            "propensity"
        ],
        "antonyms": [
            "–"
        ],
        "sentence": "As a society, we have a tendency to celebrate the people we love only once they are gone."
    },
    {
        "id": 1054,
        "word": "entitle",
        "turkish": "hak kazandırmak, yetki vermek, ünvan vermek",
        "synonyms": [
            "qualify",
            "authorize",
            "empower"
        ],
        "antonyms": [
            "–"
        ],
        "sentence": "EU citizens from non-UK countries are not entitled to vote, unless they are citizens of the Irish Republic, Cyprus or Malta."
    },
    {
        "id": 1055,
        "word": "inconsistent",
        "turkish": "tutarsız",
        "synonyms": [
            "irregular",
            "uneven",
            "unstable",
            "unsteady"
        ],
        "antonyms": [
            "definite",
            "consistent"
        ],
        "sentence": "All three witnesses acknowledged under cross-examination that they had lied to authorities and given inconsistent statements."
    },
    {
        "id": 1056,
        "word": "precisely",
        "turkish": "kesin olarak",
        "synonyms": [
            "exactly",
            "absolutely"
        ],
        "antonyms": [
            "questionably",
            "imprecisely"
        ],
        "sentence": "Research will continue to find out precisely how the color change occurs."
    },
    {
        "id": 1057,
        "word": "weaken",
        "turkish": "zayıflatmak, zayıf düşürmek",
        "synonyms": [
            "mitigate",
            "undermine",
            "impoverish"
        ],
        "antonyms": [
            "strengthen",
            "consolidate"
        ],
        "sentence": "The price of crude oil has risen over the last few days as the dollar has weakened."
    },
    {
        "id": 1058,
        "word": "postpone",
        "turkish": "ertelemek, geciktirmek",
        "synonyms": [
            "delay",
            "adjourn",
            "postpone"
        ],
        "antonyms": [
            "hasten",
            "accelerate"
        ],
        "sentence": "Last month the government bowed to domestic and foreign pressure and postponed elections due on June 5."
    },
    {
        "id": 1059,
        "word": "access",
        "turkish": "erişim, giriş",
        "synonyms": [
            "admission",
            "admittance"
        ],
        "antonyms": [
            "outlet",
            "conclusion"
        ],
        "sentence": "The location was so remote that they had to use a satellite modem to connect to the internet and get access to the game."
    },
    {
        "id": 1060,
        "word": "adversely",
        "turkish": "ters, kötü şekilde",
        "synonyms": [
            "negatively",
            "abnormally"
        ],
        "antonyms": [
            "positively"
        ],
        "sentence": "High pollution levels will certainly affect our health adversely."
    },
    {
        "id": 1061,
        "word": "insight",
        "turkish": "bir şeyin içyüzünü kavrama",
        "synonyms": [
            "understanding",
            "perception",
            "comprehension"
        ],
        "antonyms": [
            "ignorance"
        ],
        "sentence": "Sometimes test results offer useful insights into student ability, but sometimes they obscure the truth"
    },
    {
        "id": 1062,
        "word": "thoroughly",
        "turkish": "tamamen, bütünüyle",
        "synonyms": [
            "completely",
            "totally"
        ],
        "antonyms": [
            "partially",
            "partly"
        ],
        "sentence": "The blood samples is thoroughly tested, and considered very low-risk."
    },
    {
        "id": 1063,
        "word": "extract",
        "turkish": "sökmek, alıp çıkartmak",
        "synonyms": [
            "draw/pull out",
            "remove",
            "withdraw"
        ],
        "antonyms": [
            "insert"
        ],
        "sentence": "In addition to life-saving skills, he had been taught how to stitch a wound, give an injection and even extract a tooth ."
    },
    {
        "id": 1064,
        "word": "abusively",
        "turkish": "kabaca, fesatlıkla",
        "synonyms": [
            "offensively",
            "in a rude manner"
        ],
        "antonyms": [
            "kindly",
            "gently"
        ],
        "sentence": "Behavioral and mental health effects may occur if pepper spray is used abusively."
    },
    {
        "id": 1065,
        "word": "undergo",
        "turkish": "geçirmek, maruz kalmak, -e uğramak",
        "synonyms": [
            "experience",
            "live/go through",
            "be subjected to"
        ],
        "antonyms": [],
        "sentence": "On Tuesday, he underwent an operation to clear an artery and the doctors said the results were satisfactory."
    },
    {
        "id": 1066,
        "word": "coincidentally",
        "turkish": "tesadüfen, şans eseri olarak, aynı anda olan",
        "synonyms": [
            "by chance",
            "happening at the same time"
        ],
        "antonyms": [
            "on purpose",
            "deliberately",
            "intentionally",
            "simultaneously"
        ],
        "sentence": "Coincidentally, James and Curry are both from Akron, Ohio, born in the same hospital 2 months apart."
    },
    {
        "id": 1067,
        "word": "attainable",
        "turkish": "erişilebilir, ulaşılabilir",
        "synonyms": [
            "obtainable",
            "reachable"
        ],
        "antonyms": [
            "unreachable",
            "unattainable"
        ],
        "sentence": "His major championship record I think is certainly still attainable."
    },
    {
        "id": 1068,
        "word": "regulate",
        "turkish": "düzenlemek",
        "synonyms": [
            "adjust",
            "set",
            "fix",
            "order",
            "govern"
        ],
        "antonyms": [
            "damage",
            "violate"
        ],
        "sentence": "A technician in a control tower can regulate each turbine with the touch of a button."
    },
    {
        "id": 1069,
        "word": "task",
        "turkish": "iş, görev",
        "synonyms": [
            "undertaking",
            "duty",
            "assignment"
        ],
        "antonyms": [],
        "sentence": "Humans are far better at tasks like distinguishing one face or voice from another, partly because of the brain’s parallel structure."
    },
    {
        "id": 1070,
        "word": "supplementary",
        "turkish": "ek, ilave, bütünleyici, tamamlayıcı",
        "synonyms": [
            "additional",
            "subsidiary"
        ],
        "antonyms": [],
        "sentence": "Supplementary information is available in the online version."
    },
    {
        "id": 1071,
        "word": "recklessly",
        "turkish": "dikkatsizce, ulu orta",
        "synonyms": [
            "carelessly"
        ],
        "antonyms": [
            "carefully"
        ],
        "sentence": "He initially refused to stop and continued driving recklessly until finally stopping."
    },
    {
        "id": 1072,
        "word": "investment",
        "turkish": "yatırım",
        "synonyms": [
            "asset",
            "purchasing"
        ],
        "antonyms": [],
        "sentence": "Firms may understandably choose to defer or abandon investment plans."
    },
    {
        "id": 1073,
        "word": "respectively",
        "turkish": "ardı ardına, sırasıyla",
        "synonyms": [
            "consecutively",
            "subsequently",
            "successively"
        ],
        "antonyms": [],
        "sentence": "Black and Latino high school students had about the same rate of absenteeism, 22 percent and 20 percent, respectively."
    },
    {
        "id": 1074,
        "word": "owe",
        "turkish": "borçlu olmak",
        "synonyms": [
            "hem yüzyıllardır burada olan hem de yeni göçmen tüm amerikalı müslümanlar bizi bütünleştirdiği için muhammed ali’ye teşekkür borçlular"
        ],
        "antonyms": [
            "be in debt to",
            "be indebted to"
        ],
        "sentence": "I owe so much of my life, my confidence, my personality, to him."
    },
    {
        "id": 1075,
        "word": "contribute to",
        "turkish": "katkıda bulunmak, -e sebep olmak",
        "synonyms": [
            "aid",
            "assist",
            "provide",
            "lead to"
        ],
        "antonyms": [
            "obstruct",
            "impede"
        ],
        "sentence": "Police said speed and inexperience contributed to the crash and that alcohol did not appear to play a role"
    },
    {
        "id": 1076,
        "word": "component",
        "turkish": "bileşen, unsur",
        "synonyms": [
            "constituent",
            "element",
            "factor",
            "ingredient"
        ],
        "antonyms": [],
        "sentence": "The more luxurious the car, the more interconnected its technological components may be."
    },
    {
        "id": 1077,
        "word": "domestic",
        "turkish": "yerli, iç, eve ait",
        "synonyms": [
            "native",
            "indigenous",
            "internal"
        ],
        "antonyms": [
            "foreign"
        ],
        "sentence": "China launched its domestic high-speed rail service in 2007 and has the world’s most extensive network of such trains."
    },
    {
        "id": 1078,
        "word": "excessive",
        "turkish": "aşırı",
        "synonyms": [
            "immoderate",
            "disproportionate"
        ],
        "antonyms": [
            "economical",
            "moderate"
        ],
        "sentence": "Excessive water from automatic irrigation systems may cause plants to rot."
    },
    {
        "id": 1079,
        "word": "incorporate",
        "turkish": "içermek, kapsamak, ihtiva etmek, -nın parçası haline getirmek, şirket kurmak",
        "synonyms": [
            "blend",
            "integrate",
            "cover"
        ],
        "antonyms": [
            "exclude",
            "disperse"
        ],
        "sentence": "He began to incorporate dance and mime into his plays."
    },
    {
        "id": 1080,
        "word": "reinstate",
        "turkish": "tekrar yürürlüğe/işleme koymak, görevine iade etmek",
        "synonyms": [
            "reestablish",
            "restore"
        ],
        "antonyms": [
            "dismiss",
            "sack",
            "fire"
        ],
        "sentence": "The education ministry has reinstated Arabic into the curriculum as the language of science in all schools."
    }
]
