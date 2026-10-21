const wordDatabase = [
  {
    "ingilizce": "Trifling",
    "turkce": "Önemsiz",
    "es_anlamlilar": "Trivial, unimportant, insignificant"
  },
  {
    "ingilizce": "Abundant",
    "turkce": "Bol, bereketli",
    "es_anlamlilar": "Plentiful, in large quantities, abounding, teeming"
  },
  {
    "ingilizce": "Consecutive",
    "turkce": "Art arda, birbirini takiben",
    "es_anlamlilar": "Successive, sequential, subsequent"
  },
  {
    "ingilizce": "Deception",
    "turkce": "Aldat(n)ma, hilekarlık, dolandırma.",
    "es_anlamlilar": "Deceiving, dishonesty, trickery"
  },
  {
    "ingilizce": "Disperse",
    "turkce": "Dağıtmak, dağılmak",
    "es_anlamlilar": "Scatter, dispel, diffuse"
  },
  {
    "ingilizce": "Exact",
    "turkce": "Tam, kesin",
    "es_anlamlilar": "Correct, precise, definite"
  },
  {
    "ingilizce": "Formidable",
    "turkce": "Sert, sağlam, yenilmez, dayanıklı",
    "es_anlamlilar": "Challenging, difficult, invincible"
  },
  {
    "ingilizce": "Graceful",
    "turkce": "Hoş, çekici, zarif, nazik",
    "es_anlamlilar": "Attractive, charming"
  },
  {
    "ingilizce": "Grasp",
    "turkce": "Kapmak, algılamak, kavramak",
    "es_anlamlilar": "Snatch, grab, perceive"
  },
  {
    "ingilizce": "Humid",
    "turkce": "Nemli",
    "es_anlamlilar": "Damp, moist, wet"
  },
  {
    "ingilizce": "Indifferent to",
    "turkce": "İlgisiz, kayıtsız",
    "es_anlamlilar": "Uninterested"
  },
  {
    "ingilizce": "Instill",
    "turkce": "Aşılamak, yüklemek",
    "es_anlamlilar": "Fill, inspire"
  },
  {
    "ingilizce": "Isolate",
    "turkce": "Soyutlamak, ayırmak, (hastayı) tecrit etmek",
    "es_anlamlilar": "Seperate, segregate"
  },
  {
    "ingilizce": "Spoil",
    "turkce": "Çürümek, bozulmak",
    "es_anlamlilar": "Decay, rotten"
  },
  {
    "ingilizce": "Spontaneous",
    "turkce": "Kendiliğinden olan, doğal",
    "es_anlamlilar": "Natural"
  },
  {
    "ingilizce": "Substantial",
    "turkce": "Büyük, önemli",
    "es_anlamlilar": "Considerable, extensive, significant"
  },
  {
    "ingilizce": "Precipitate",
    "turkce": "Hızlandırmak, yağmak, çökmek",
    "es_anlamlilar": "Accelerate, hasten"
  },
  {
    "ingilizce": "Quotation",
    "turkce": "Alıntılama, alıntı yapma, aktarma",
    "es_anlamlilar": "Extract, excerpt, citation, saying"
  },
  {
    "ingilizce": "Realm",
    "turkce": "Alan, saha, krallık, ülke, memleket",
    "es_anlamlilar": "Area, region, field"
  },
  {
    "ingilizce": "Legitimate",
    "turkce": "Yasal, meşru",
    "es_anlamlilar": "Legal, lawful"
  },
  {
    "ingilizce": "Relentlessly",
    "turkce": "Acımasızca / sürekli olarak, dur durak bilmeden",
    "es_anlamlilar": "Continuously, constantly"
  },
  {
    "ingilizce": "Migration",
    "turkce": "Göç",
    "es_anlamlilar": "Immigration, movement"
  },
  {
    "ingilizce": "Nullify",
    "turkce": "İptal etmek, geçersiz kılmak",
    "es_anlamlilar": "Cancel, annul, invalidate, abolish"
  },
  {
    "ingilizce": "Obesity",
    "turkce": "Aşırı şişmanlık, obezite",
    "es_anlamlilar": "Fatness, plumpness"
  },
  {
    "ingilizce": "Poison",
    "turkce": "Zehir",
    "es_anlamlilar": "Venom, toxin"
  },
  {
    "ingilizce": "Susceptible to",
    "turkce": "Hassas, duyarlı, kolay mikrop kapabilen",
    "es_anlamlilar": "Sensitive, vulnerable, fragile"
  },
  {
    "ingilizce": "Specify",
    "turkce": "Belirlemek",
    "es_anlamlilar": "Identify, state, indicate"
  },
  {
    "ingilizce": "Supplant",
    "turkce": "Yerini almak",
    "es_anlamlilar": "Take the place of sth."
  },
  {
    "ingilizce": "Hostile",
    "turkce": "Düşmanca, saldırgan, -e karşı",
    "es_anlamlilar": "Unfriendly"
  },
  {
    "ingilizce": "Dilate",
    "turkce": "Genişlemek",
    "es_anlamlilar": "Expand, enlarge"
  },
  {
    "ingilizce": "Deal",
    "turkce": "Anlaşma, uzlaşma",
    "es_anlamlilar": "Agreement"
  },
  {
    "ingilizce": "Decade",
    "turkce": "On yıl",
    "es_anlamlilar": "A 10-year period"
  },
  {
    "ingilizce": "Contempt",
    "turkce": "Aşağılama, küçük görme, karşı gelme",
    "es_anlamlilar": "Abhorance, disdain"
  },
  {
    "ingilizce": "Content with",
    "turkce": "Hoşnut, memnun",
    "es_anlamlilar": "Satisfied, pleased, contended"
  },
  {
    "ingilizce": "Punctual",
    "turkce": "Dakik, tam vaktinde",
    "es_anlamlilar": "On time, prompt"
  },
  {
    "ingilizce": "Adjourn",
    "turkce": "Ertelemek, ara vermek, erteleme",
    "es_anlamlilar": "Postpone, delay, defer, suspend"
  },
  {
    "ingilizce": "Assign",
    "turkce": "Ayırmak, tahsis etmek, görev vermek",
    "es_anlamlilar": "Allocate, allot, appoint"
  },
  {
    "ingilizce": "Track",
    "turkce": "Takip etmek",
    "es_anlamlilar": "Follow, trace"
  },
  {
    "ingilizce": "Treasure",
    "turkce": "Değer vermek",
    "es_anlamlilar": "Cherish, value, prize"
  },
  {
    "ingilizce": "Threat",
    "turkce": "Tehdit, korkutma, gözdağı, tehlike",
    "es_anlamlilar": "Menace"
  },
  {
    "ingilizce": "Attach",
    "turkce": "Bağlamak, iliştirmek",
    "es_anlamlilar": "Connect, join, fasten, tie, bind"
  },
  {
    "ingilizce": "Attitude",
    "turkce": "Tavır, tutum",
    "es_anlamlilar": "Manner, stance, posture"
  },
  {
    "ingilizce": "Apathy",
    "turkce": "İlgisizlik, umursamazlık",
    "es_anlamlilar": "Unconcern, indifference, insensibility"
  },
  {
    "ingilizce": "Annihilation",
    "turkce": "Yok olma, yıkılma, yok etme",
    "es_anlamlilar": "Extermination, eradication, destruction"
  },
  {
    "ingilizce": "Consolidate",
    "turkce": "Güçlendirmek, sağlamlaştırmak",
    "es_anlamlilar": "Strenghten, fortify"
  },
  {
    "ingilizce": "Coerce",
    "turkce": "Zorlamak",
    "es_anlamlilar": "Force, compel"
  },
  {
    "ingilizce": "Compete with/against",
    "turkce": "Yarışmak, mücadele içinde olmak",
    "es_anlamlilar": "Race"
  },
  {
    "ingilizce": "Defect",
    "turkce": "Kusur, eksiklik",
    "es_anlamlilar": "Fault, error"
  },
  {
    "ingilizce": "Corresponding",
    "turkce": "Denk, tekabül eden",
    "es_anlamlilar": "Equivalent, matching, parallel"
  },
  {
    "ingilizce": "Despise",
    "turkce": "Aşağılamak, küçümsemek",
    "es_anlamlilar": "Look down on, scorn, dislike, humiliate"
  },
  {
    "ingilizce": "Expend",
    "turkce": "Harcamak, masraf yapmak",
    "es_anlamlilar": "Use up, exhaust"
  },
  {
    "ingilizce": "Entitle",
    "turkce": "Hak vermek, yetki vermek",
    "es_anlamlilar": "Warrant, give right to"
  },
  {
    "ingilizce": "Erroneous",
    "turkce": "Hatalı",
    "es_anlamlilar": "Incorrect, wrong"
  },
  {
    "ingilizce": "Illustrate",
    "turkce": "Örneklerle açıklamak",
    "es_anlamlilar": "Explain, clarify"
  },
  {
    "ingilizce": "Influx",
    "turkce": "Akın etme, akış",
    "es_anlamlilar": "Flood, arrival"
  },
  {
    "ingilizce": "Grumble",
    "turkce": "Şikayet etmek, sızlanmak",
    "es_anlamlilar": "Complain"
  },
  {
    "ingilizce": "Profound",
    "turkce": "Derin, büyük",
    "es_anlamlilar": "Deep"
  },
  {
    "ingilizce": "Obligation",
    "turkce": "Yükümlülük, zorunluluk",
    "es_anlamlilar": "Compulsion, requirement"
  },
  {
    "ingilizce": "Momentum",
    "turkce": "Hız, ivme",
    "es_anlamlilar": "Speed, velocity, impetus"
  },
  {
    "ingilizce": "Menace",
    "turkce": "Tehdit etmek",
    "es_anlamlilar": "Threaten"
  },
  {
    "ingilizce": "Mature",
    "turkce": "Olgun",
    "es_anlamlilar": "Developed, full-grown"
  },
  {
    "ingilizce": "Negotiate",
    "turkce": "Görüşmek, pazarlık yapmak",
    "es_anlamlilar": "Discuss, talk, bargain"
  },
  {
    "ingilizce": "Pose",
    "turkce": "Yaratmak, oluşturmak",
    "es_anlamlilar": "Create"
  },
  {
    "ingilizce": "Just",
    "turkce": "Adil, haklı, yerinde, doğru",
    "es_anlamlilar": "Fair"
  },
  {
    "ingilizce": "Gorgeous",
    "turkce": "Büyüleyici, harika",
    "es_anlamlilar": "Impressive, splendid"
  },
  {
    "ingilizce": "Incredible",
    "turkce": "İnanılmaz",
    "es_anlamlilar": "Unbeliavable"
  },
  {
    "ingilizce": "Extremely",
    "turkce": "Aşırı derecede, büyük ölçüde",
    "es_anlamlilar": "Enormously, tremendously"
  },
  {
    "ingilizce": "Exaggerate",
    "turkce": "Abartmak",
    "es_anlamlilar": "Overstate"
  },
  {
    "ingilizce": "Exhaust",
    "turkce": "Yormak, tüketmek",
    "es_anlamlilar": "Tire, use up, deplete"
  },
  {
    "ingilizce": "Discriminate",
    "turkce": "Ayırdetmek, ayrımcılık yapmak",
    "es_anlamlilar": "Differentiate, distinguish"
  },
  {
    "ingilizce": "Dismiss",
    "turkce": "Kovmak, -den çıkarmak",
    "es_anlamlilar": "Fire, sack"
  },
  {
    "ingilizce": "Custody",
    "turkce": "Nezaret, velayet",
    "es_anlamlilar": "Confinement, jail"
  },
  {
    "ingilizce": "Common",
    "turkce": "Ortak, yaygın",
    "es_anlamlilar": "Shared"
  },
  {
    "ingilizce": "Commerce",
    "turkce": "Ticaret",
    "es_anlamlilar": "Trade, traffic, business, exchange"
  },
  {
    "ingilizce": "Ambition",
    "turkce": "Hırs, istek, hedef, amaç",
    "es_anlamlilar": "Desire, aspiration, goal, objective, aim, target"
  },
  {
    "ingilizce": "Absurd",
    "turkce": "Saçma",
    "es_anlamlilar": "Highly unreasonable, illogical, ridiculous"
  },
  {
    "ingilizce": "Absorb",
    "turkce": "Emmek, içine çekmek.",
    "es_anlamlilar": "Take in, suck up (liquid, knowledge), soak up, use up (time)"
  },
  {
    "ingilizce": "Apprehension",
    "turkce": "Endişe, korku",
    "es_anlamlilar": "Anxiety, fear, dread, concern"
  },
  {
    "ingilizce": "Assure",
    "turkce": "Garanti vermek, temin etmek",
    "es_anlamlilar": "Ensure, guarantee, warrant, promise"
  },
  {
    "ingilizce": "Shortage",
    "turkce": "Kıtlık, eksiklik",
    "es_anlamlilar": "Lack, scarcity"
  },
  {
    "ingilizce": "Tempt",
    "turkce": "Cezbetmek, baştan çıkarmak",
    "es_anlamlilar": "Allure, appeal"
  },
  {
    "ingilizce": "Ultimate",
    "turkce": "Son, nihai",
    "es_anlamlilar": "Eventual, final"
  },
  {
    "ingilizce": "Ascend",
    "turkce": "Yükselmek, çıkmak",
    "es_anlamlilar": "Go up, climb, rise, mount"
  },
  {
    "ingilizce": "Assault",
    "turkce": "Saldırı",
    "es_anlamlilar": "Attack, invasion, charge, agression"
  },
  {
    "ingilizce": "Compulsory",
    "turkce": "Zorunlu",
    "es_anlamlilar": "Obligatory, mandatory, must"
  },
  {
    "ingilizce": "Discern",
    "turkce": "Fark etmek, algılamak, ayırt etmek",
    "es_anlamlilar": "Perceive, notice, see"
  },
  {
    "ingilizce": "Devoid of",
    "turkce": "Yoksun",
    "es_anlamlilar": "Lacking"
  },
  {
    "ingilizce": "Evacuate",
    "turkce": "Boşaltmak, tahliye etmek",
    "es_anlamlilar": "Empty"
  },
  {
    "ingilizce": "Implicate",
    "turkce": "İlişkilendirmek, bağlantı kurmak",
    "es_anlamlilar": "Connect, associate"
  },
  {
    "ingilizce": "Happen to",
    "turkce": "Tesadüfen …mek, şans eseri karşılaşmak",
    "es_anlamlilar": "Do sth by chance"
  },
  {
    "ingilizce": "Gauge",
    "turkce": "Ölçmek, tahmin etmek",
    "es_anlamlilar": "Measure, estimate, evaluate"
  },
  {
    "ingilizce": "Surveillance",
    "turkce": "Gözetim, yakın takip",
    "es_anlamlilar": "Close observation, scrutiny"
  },
  {
    "ingilizce": "Sparse",
    "turkce": "Seyrek, az",
    "es_anlamlilar": "Thin, bare, meager"
  },
  {
    "ingilizce": "Superficial",
    "turkce": "Yüzeysel, üstünkörü",
    "es_anlamlilar": "Surface, shallow"
  },
  {
    "ingilizce": "Pledge",
    "turkce": "Söz, vaat, işaret, teminat, rehin, bağışlanacağına söz verilmiş para",
    "es_anlamlilar": "Promise"
  },
  {
    "ingilizce": "Notorious",
    "turkce": "Adı çıkmış, dile düşmüş, kötülüğüyle ünlenmiş",
    "es_anlamlilar": "Infamous, disreputable"
  },
  {
    "ingilizce": "Onslaught",
    "turkce": "Saldırı",
    "es_anlamlilar": "Attack, assault"
  },
  {
    "ingilizce": "Permanent",
    "turkce": "Sürekli, devam eden",
    "es_anlamlilar": "Perpetual, continuous"
  },
  {
    "ingilizce": "Relative",
    "turkce": "Göreceli, izafi, bağıl",
    "es_anlamlilar": "Comparative"
  },
  {
    "ingilizce": "Render",
    "turkce": "-mesine neden olmak, duruma getirmek, netleştirmek",
    "es_anlamlilar": "Make, cause to be"
  },
  {
    "ingilizce": "Reputation",
    "turkce": "Ün, şöhret",
    "es_anlamlilar": "Fame, prominence, eminence"
  },
  {
    "ingilizce": "Reconciliation",
    "turkce": "Anlaşma, uzlaşma",
    "es_anlamlilar": "Agreement, settlement"
  },
  {
    "ingilizce": "Prevail",
    "turkce": "Hakim olmak, hüküm sürmek, yaygın olmak",
    "es_anlamlilar": "Abound, exist thoroughly"
  },
  {
    "ingilizce": "Probe",
    "turkce": "Araştırma, insansız uzay roketi",
    "es_anlamlilar": "Exploration, investigation, inquiry"
  },
  {
    "ingilizce": "Keen",
    "turkce": "Çok hevesli, gözü açık",
    "es_anlamlilar": "Eager, willing"
  },
  {
    "ingilizce": "Forgery",
    "turkce": "Sahte, sahtekarlık",
    "es_anlamlilar": "Counterfeiting, being fake"
  },
  {
    "ingilizce": "Grateful",
    "turkce": "Minnettar",
    "es_anlamlilar": "Thankful, appreciative"
  },
  {
    "ingilizce": "Imperative",
    "turkce": "Acil",
    "es_anlamlilar": "Urgent"
  },
  {
    "ingilizce": "Erudite",
    "turkce": "Bilgili, detaylı, iyi",
    "es_anlamlilar": "Knowlegable, learned"
  },
  {
    "ingilizce": "Equip",
    "turkce": "Donatmak",
    "es_anlamlilar": "furnish, supply"
  },
  {
    "ingilizce": "Dominate",
    "turkce": "Baskın olmak, hakim olmak",
    "es_anlamlilar": "Manage, rule smb/sth."
  },
  {
    "ingilizce": "Comprehend",
    "turkce": "Anlamak",
    "es_anlamlilar": "Understand, apprehend, grasp"
  },
  {
    "ingilizce": "Considerate",
    "turkce": "Düşünceli, ince ruhlu",
    "es_anlamlilar": "Thoughtful"
  },
  {
    "ingilizce": "Arrogant",
    "turkce": "Kendini beğenmiş, kibirli, küstah",
    "es_anlamlilar": "Conceited, self-admiring, egoistic"
  },
  {
    "ingilizce": "Advocate",
    "turkce": "Savunmak, destek olmak.",
    "es_anlamlilar": "Support, counsel, back up."
  },
  {
    "ingilizce": "Viable",
    "turkce": "Olası, yapılabilir",
    "es_anlamlilar": "Feasible, possible"
  },
  {
    "ingilizce": "Volatility",
    "turkce": "İstikrarsızlık, değişkenlik",
    "es_anlamlilar": "Instability"
  },
  {
    "ingilizce": "Volunteer",
    "turkce": "Gönüllü olmak",
    "es_anlamlilar": "Enter/start sth. willingly"
  },
  {
    "ingilizce": "Sluggish",
    "turkce": "Ağır işleyen, yavaş seyreden",
    "es_anlamlilar": "Slow-moving"
  },
  {
    "ingilizce": "Solidarity",
    "turkce": "Dayanışma",
    "es_anlamlilar": "Unity, cohesion"
  },
  {
    "ingilizce": "Adjust",
    "turkce": "Ayarlamak, düzenlemek, kurmak, tamir etmek",
    "es_anlamlilar": "Set, regulate, mend, repair, fix, arrange, adapt"
  },
  {
    "ingilizce": "Contain",
    "turkce": "İçermek, kontrol altına almak",
    "es_anlamlilar": "Consist of, include, control"
  },
  {
    "ingilizce": "Daring",
    "turkce": "Cesaretli, cüretkar",
    "es_anlamlilar": "Brave, bold, courageous, dauntless"
  },
  {
    "ingilizce": "Curtail",
    "turkce": "Azaltmak, kısaltmak",
    "es_anlamlilar": "Reduce, decrease, abate, lessen"
  },
  {
    "ingilizce": "Credible",
    "turkce": "İnanılabilir, inanılır",
    "es_anlamlilar": "Believable"
  },
  {
    "ingilizce": "Dispute",
    "turkce": "Tartışmak",
    "es_anlamlilar": "Debate, argue"
  },
  {
    "ingilizce": "Discreet",
    "turkce": "Ayrı, belirgin, akıllı, gizli",
    "es_anlamlilar": "Wise, discerning, considerate"
  },
  {
    "ingilizce": "Dismay",
    "turkce": "Korku, cesaretin kırılması, üzüntü, endişe",
    "es_anlamlilar": "Discouragement, wonder, disappointment"
  },
  {
    "ingilizce": "Impede",
    "turkce": "Engel olmak",
    "es_anlamlilar": "Prevent, hinder, hamper"
  },
  {
    "ingilizce": "Illegible",
    "turkce": "Okunaksız",
    "es_anlamlilar": "Cannot be read"
  },
  {
    "ingilizce": "Inherent",
    "turkce": "Doğal, doğuştan gelen",
    "es_anlamlilar": "Inborn"
  },
  {
    "ingilizce": "Inhibit",
    "turkce": "Engel olmak",
    "es_anlamlilar": "Prevent, hamper"
  },
  {
    "ingilizce": "Forecast",
    "turkce": "Tahmin etmek, beklemek",
    "es_anlamlilar": "Predict, foresee"
  },
  {
    "ingilizce": "Foresee",
    "turkce": "Öngörmek, tahmin etmek",
    "es_anlamlilar": "Foretell, see ahead"
  },
  {
    "ingilizce": "Justify",
    "turkce": "Haklı çıkarmak, doğrulamak, suçsuzluğunu ortaya çıkarmak",
    "es_anlamlilar": "Vindicate, acquit"
  },
  {
    "ingilizce": "Pros and cons",
    "turkce": "Artılar ve eksiler",
    "es_anlamlilar": "Advantages and disadvantages"
  },
  {
    "ingilizce": "Potent",
    "turkce": "Güçlü",
    "es_anlamlilar": "Effective, powerful"
  },
  {
    "ingilizce": "Manifest",
    "turkce": "Göstermek",
    "es_anlamlilar": "Show, exhibit"
  },
  {
    "ingilizce": "Massacre",
    "turkce": "Katliam, toplu kıyım",
    "es_anlamlilar": "Genocide, slaughter"
  },
  {
    "ingilizce": "Mend",
    "turkce": "Tamir etmek, onarmak",
    "es_anlamlilar": "Repair, fix"
  },
  {
    "ingilizce": "Modify",
    "turkce": "Değiştirmek",
    "es_anlamlilar": "Change, alter, shift, vary"
  },
  {
    "ingilizce": "Mitigate",
    "turkce": "Azaltmak",
    "es_anlamlilar": "Lessen, ease"
  },
  {
    "ingilizce": "Obstinate",
    "turkce": "İnatçı",
    "es_anlamlilar": "Stubborn"
  },
  {
    "ingilizce": "Intrinsic",
    "turkce": "Asıl, esas, kendine özgü, içten gelen",
    "es_anlamlilar": "Inherent, inborn, basic"
  },
  {
    "ingilizce": "Fatal",
    "turkce": "Ölümcül",
    "es_anlamlilar": "Mortal, deadly, lethal"
  },
  {
    "ingilizce": "Hasty",
    "turkce": "Acele, hızlı",
    "es_anlamlilar": "Hurried, speedy"
  },
  {
    "ingilizce": "Impact",
    "turkce": "Etki, çarpma",
    "es_anlamlilar": "Effect, influence"
  },
  {
    "ingilizce": "Inadequate",
    "turkce": "Yetersiz",
    "es_anlamlilar": "Insufficient, deficient, not enough"
  },
  {
    "ingilizce": "Diffuse",
    "turkce": "Yaymak",
    "es_anlamlilar": "Scatter, spread"
  },
  {
    "ingilizce": "Dwarf",
    "turkce": "Cüce",
    "es_anlamlilar": "Very short person"
  },
  {
    "ingilizce": "Entrepreneur",
    "turkce": "Girişimci, yatırımcı",
    "es_anlamlilar": "Capitalist, industrialist, investor"
  },
  {
    "ingilizce": "Convert",
    "turkce": "Dönüştürmek, değiştirmek",
    "es_anlamlilar": "Turn into, alter, change, transform"
  },
  {
    "ingilizce": "Deduce from",
    "turkce": "Çıkarım yapmak, sonucuna varmak",
    "es_anlamlilar": "Infer from"
  },
  {
    "ingilizce": "Deliberately",
    "turkce": "Kasıtlı, bilerek",
    "es_anlamlilar": "Intentionally, on purpose"
  },
  {
    "ingilizce": "Accuse",
    "turkce": "Suçlamak",
    "es_anlamlilar": "Blame, charge, indict, reproach"
  },
  {
    "ingilizce": "Accustomed to",
    "turkce": "Alışkın olmak, alıştırmak",
    "es_anlamlilar": "Be used to, be addicted to"
  },
  {
    "ingilizce": "Arbitrary",
    "turkce": "Rasgele, keyfi, otoriter",
    "es_anlamlilar": "Random, chance, dictatorial"
  },
  {
    "ingilizce": "Arise from",
    "turkce": "-den doğmak, kaynaklanmak",
    "es_anlamlilar": "Originate from, proceed, spring, result from, emerge from"
  },
  {
    "ingilizce": "Beat",
    "turkce": "Yenmek, bozguna uğratmak, vurmak",
    "es_anlamlilar": "Defeat, strike, hit"
  },
  {
    "ingilizce": "Case",
    "turkce": "Durum, vaka",
    "es_anlamlilar": "Condition, situation"
  },
  {
    "ingilizce": "Ban",
    "turkce": "Yasaklamak, müsade etmemek",
    "es_anlamlilar": "Prohibit, forbid"
  },
  {
    "ingilizce": "Pursue",
    "turkce": "Takip etmek, izlemek",
    "es_anlamlilar": "Follow, chase, succeed"
  },
  {
    "ingilizce": "Affiliate with",
    "turkce": "Bağlamak, ilişkilendirmek, ilişki içinde olmak",
    "es_anlamlilar": "Associate, connect, incorporate"
  },
  {
    "ingilizce": "Affluent",
    "turkce": "Zengin, gelişmiş",
    "es_anlamlilar": "Rich, wealthy, prosperous, well-off"
  },
  {
    "ingilizce": "Convene",
    "turkce": "Toplanmak",
    "es_anlamlilar": "Meet, assemble"
  },
  {
    "ingilizce": "Damage",
    "turkce": "Zarar, ziyan görmek",
    "es_anlamlilar": "Harm, injury"
  },
  {
    "ingilizce": "Coincide with",
    "turkce": "Tesadüfen kesişmek, uyuşmak",
    "es_anlamlilar": "Match, correspond, agree"
  },
  {
    "ingilizce": "Enormous",
    "turkce": "Büyük, devasa",
    "es_anlamlilar": "Tremendous, vast"
  },
  {
    "ingilizce": "Dissolve",
    "turkce": "Eritmek",
    "es_anlamlilar": "Melt, thaw"
  },
  {
    "ingilizce": "Hurricane",
    "turkce": "Kasırga",
    "es_anlamlilar": "Storm"
  },
  {
    "ingilizce": "Hinder",
    "turkce": "Engellemek",
    "es_anlamlilar": "Hamper, prevent, impede, obstruct"
  },
  {
    "ingilizce": "Horizontal",
    "turkce": "Yatay",
    "es_anlamlilar": "Parallel, flat"
  },
  {
    "ingilizce": "Instinct",
    "turkce": "İçgüdü",
    "es_anlamlilar": "Natural feeling, impulse"
  },
  {
    "ingilizce": "Indefinitely",
    "turkce": "Süresiz olarak, sonsuza dek",
    "es_anlamlilar": "Forever"
  },
  {
    "ingilizce": "Guilt",
    "turkce": "Suç",
    "es_anlamlilar": "Crime, offence"
  },
  {
    "ingilizce": "Quantity",
    "turkce": "Nicelik, miktar",
    "es_anlamlilar": "Amount, greatness, bulk, extent, size"
  },
  {
    "ingilizce": "Paradise",
    "turkce": "Cennet",
    "es_anlamlilar": "Heaven"
  },
  {
    "ingilizce": "Mandatory",
    "turkce": "Zorunlu",
    "es_anlamlilar": "Obligatory, compulsory, required"
  },
  {
    "ingilizce": "Repeal",
    "turkce": "(Yasayı) yürülükten kaldırmak, iptal etmek",
    "es_anlamlilar": "Revoke, annul"
  },
  {
    "ingilizce": "Litter",
    "turkce": "Çöp",
    "es_anlamlilar": "Rubbish, garbage"
  },
  {
    "ingilizce": "Merciful",
    "turkce": "Merhametli, insaflı, bağışlayıcı",
    "es_anlamlilar": "Tender, lender, forgiving"
  },
  {
    "ingilizce": "Recruit",
    "turkce": "İşe almak, askere almak",
    "es_anlamlilar": "Employ, enroll"
  },
  {
    "ingilizce": "Moist",
    "turkce": "Rutubetli, nemli",
    "es_anlamlilar": "Damp, humid, wet"
  },
  {
    "ingilizce": "Nuisance",
    "turkce": "Dert, baş belası",
    "es_anlamlilar": "Trouble, problem"
  },
  {
    "ingilizce": "Nurture",
    "turkce": "Bakmak, beslemek, geliştirmek",
    "es_anlamlilar": "Look after, cultivate, rear"
  },
  {
    "ingilizce": "Split",
    "turkce": "Bölmek, ayırmak",
    "es_anlamlilar": "Divide"
  },
  {
    "ingilizce": "Genuine",
    "turkce": "Gerçek, hakiki",
    "es_anlamlilar": "Real, authentic"
  },
  {
    "ingilizce": "Gigantic",
    "turkce": "Devasa, çok büyük",
    "es_anlamlilar": "Massive, immense"
  },
  {
    "ingilizce": "Dispose of",
    "turkce": "Atmak, kurtulmak, yenmek",
    "es_anlamlilar": "Throw out, get rid of, discard"
  },
  {
    "ingilizce": "Dull",
    "turkce": "Sıkıcı",
    "es_anlamlilar": "Boring, tedious"
  },
  {
    "ingilizce": "Disdain",
    "turkce": "Küçümseme, hor görme",
    "es_anlamlilar": "Scorn, despise, disregard"
  },
  {
    "ingilizce": "Establish",
    "turkce": "Kurmak",
    "es_anlamlilar": "Found, set up"
  },
  {
    "ingilizce": "Exploit",
    "turkce": "Sömürmek, faydalanmak",
    "es_anlamlilar": "Misuse, abuse"
  },
  {
    "ingilizce": "Extend",
    "turkce": "Uza(t)mak, sürmek, yardım, kredi v.b. vermek",
    "es_anlamlilar": "Stretch, prolong"
  },
  {
    "ingilizce": "Collaborate with",
    "turkce": "İşbirliği yapmak, beraber çalışmak",
    "es_anlamlilar": "Work together, cooperate"
  },
  {
    "ingilizce": "Craft",
    "turkce": "Beceri, hüner, sanat",
    "es_anlamlilar": "Talent, ability, gift, knack"
  },
  {
    "ingilizce": "Delusion",
    "turkce": "Yanılma, hile, aldatma",
    "es_anlamlilar": "Illusion, fallacy, deception"
  },
  {
    "ingilizce": "Altitude",
    "turkce": "Yükseklik",
    "es_anlamlilar": "Height, elevation, ascent"
  },
  {
    "ingilizce": "Ability",
    "turkce": "Yetenek, kabiliyet",
    "es_anlamlilar": "Skill, talent, gift, knack, capability, competence"
  },
  {
    "ingilizce": "Shipment",
    "turkce": "Sevkiyat",
    "es_anlamlilar": "Delivery"
  },
  {
    "ingilizce": "Severe",
    "turkce": "Ciddi, sert, önemli",
    "es_anlamlilar": "Serious, acute"
  },
  {
    "ingilizce": "Withold",
    "turkce": "Tutmak, vermemek, korumak, saklamak",
    "es_anlamlilar": "Reserve, hold back"
  },
  {
    "ingilizce": "Withstand",
    "turkce": "Karşı koymak, dayanmak",
    "es_anlamlilar": "Stand against, resist, oppose"
  },
  {
    "ingilizce": "Rival",
    "turkce": "Rakip",
    "es_anlamlilar": "Opponent, competitor"
  },
  {
    "ingilizce": "Zest",
    "turkce": "Keyif, neşe, heves",
    "es_anlamlilar": "Excitement, enthusiasm, eagerness, smack"
  },
  {
    "ingilizce": "Vintage",
    "turkce": "Eski",
    "es_anlamlilar": "Old, antique"
  },
  {
    "ingilizce": "Verify",
    "turkce": "Doğrulamak",
    "es_anlamlilar": "Confirm, validate"
  },
  {
    "ingilizce": "Vermin",
    "turkce": "Zararlı hayvan, parazit",
    "es_anlamlilar": "Parasites, pest"
  },
  {
    "ingilizce": "Unilateral",
    "turkce": "Tek taraflı",
    "es_anlamlilar": "One-sided"
  },
  {
    "ingilizce": "Vacuum",
    "turkce": "Boşluk, hava boşluğu",
    "es_anlamlilar": "Empty space"
  },
  {
    "ingilizce": "Acquire",
    "turkce": "Elde etmek",
    "es_anlamlilar": "Gain, obtain, earn, win, attain, achieve, get"
  },
  {
    "ingilizce": "Adopt",
    "turkce": "Benimsemek, kabul etmek, evlat edinmek",
    "es_anlamlilar": "Assume, approve, accept, foster, support"
  },
  {
    "ingilizce": "Clumsy",
    "turkce": "Beceriksiz, yeteneksiz, sakar",
    "es_anlamlilar": "Awkward, unskilled"
  },
  {
    "ingilizce": "Excavate",
    "turkce": "Kazmak",
    "es_anlamlilar": "Dig, dig up"
  },
  {
    "ingilizce": "Enlighten",
    "turkce": "Aydınlatmak",
    "es_anlamlilar": "Shed light on, illuminate"
  },
  {
    "ingilizce": "Diverge",
    "turkce": "Sapmak, yön değiştirmek",
    "es_anlamlilar": "Deviate, move away"
  },
  {
    "ingilizce": "Rampant",
    "turkce": "Yaygın, aşırı boyutlara varmış, her tarafa yayılmış",
    "es_anlamlilar": "Widespread, increasing, prevalent"
  },
  {
    "ingilizce": "Perplex",
    "turkce": "Şaşırtmak, kafasını karıştırmak",
    "es_anlamlilar": "Bewilder, confuse, astonish"
  },
  {
    "ingilizce": "Rebel against",
    "turkce": "Ayaklanmak, isyan etmek, karşı gelmek",
    "es_anlamlilar": "Revolt, rise up"
  },
  {
    "ingilizce": "Massive",
    "turkce": "Büyük, kocaman",
    "es_anlamlilar": "Huge, immense"
  },
  {
    "ingilizce": "Renown",
    "turkce": "Ün, şöhret",
    "es_anlamlilar": "Fame, reputation"
  },
  {
    "ingilizce": "Neat",
    "turkce": "Temiz, düzenli",
    "es_anlamlilar": "Tidy"
  },
  {
    "ingilizce": "Quality",
    "turkce": "Nitelik, vasıf, kalite",
    "es_anlamlilar": "Characteristic, property, excellence"
  },
  {
    "ingilizce": "Plain",
    "turkce": "Sade, yalın",
    "es_anlamlilar": "Simple"
  },
  {
    "ingilizce": "Glitter",
    "turkce": "Işıldamak",
    "es_anlamlilar": "Shine"
  },
  {
    "ingilizce": "Gaze at",
    "turkce": "Gözünü dikip bakmak, seyretmek",
    "es_anlamlilar": "Stare, look"
  },
  {
    "ingilizce": "Impulsive",
    "turkce": "Ani, içgüdüsel, fevri",
    "es_anlamlilar": "Instinctive, intuitive, sudden"
  },
  {
    "ingilizce": "Hitherto",
    "turkce": "Şu ana kadar",
    "es_anlamlilar": "Up till now, so far, to date, thus far"
  },
  {
    "ingilizce": "Diligent",
    "turkce": "Çalışkan, başarılı",
    "es_anlamlilar": "Hardworking, studious, industrious"
  },
  {
    "ingilizce": "Encounter",
    "turkce": "Karşılaşmak",
    "es_anlamlilar": "Face, confront"
  },
  {
    "ingilizce": "Evaporate",
    "turkce": "Buharlaşmak, yok olmak",
    "es_anlamlilar": "Vanish, dissolve, disappear"
  },
  {
    "ingilizce": "Evoke",
    "turkce": "Akla getirmek, hatırlatmak",
    "es_anlamlilar": "Bring to mind, remind"
  },
  {
    "ingilizce": "Fallacy",
    "turkce": "Yanılgı, yanılsama",
    "es_anlamlilar": "False notion, deception, mistake"
  },
  {
    "ingilizce": "Concede",
    "turkce": "Kabul etmek",
    "es_anlamlilar": "Admit, accept"
  },
  {
    "ingilizce": "Curb",
    "turkce": "Kontrol altına almak",
    "es_anlamlilar": "Control, check"
  },
  {
    "ingilizce": "Allocate",
    "turkce": "Ayırmak, tahsis etmek",
    "es_anlamlilar": "Assign, allot, set apart"
  },
  {
    "ingilizce": "Bustle",
    "turkce": "Hareketlilik, canlılık",
    "es_anlamlilar": "Movement, vividness"
  },
  {
    "ingilizce": "Apparent",
    "turkce": "Görünürde, belli olan",
    "es_anlamlilar": "Obvious, clear, noticable"
  },
  {
    "ingilizce": "Associate with",
    "turkce": "İlişkilendirmek, bağlantı kurmak",
    "es_anlamlilar": "Connect, relate, link, join, combine"
  },
  {
    "ingilizce": "Asset",
    "turkce": "Kazanç, mal varlığı, artı yön",
    "es_anlamlilar": "Advantage, benefit, possession"
  },
  {
    "ingilizce": "Austere",
    "turkce": "Sert, ciddi, katı",
    "es_anlamlilar": "Severe, serious, strict, stern, hard, harsh, rigid"
  },
  {
    "ingilizce": "Bluntly",
    "turkce": "Açık, dürüst bir şekilde",
    "es_anlamlilar": "Frankly, honestly"
  },
  {
    "ingilizce": "Anticipate",
    "turkce": "Beklemek, ummak",
    "es_anlamlilar": "Expect, await, foresee, forecast"
  },
  {
    "ingilizce": "Ailment",
    "turkce": "Hastalık",
    "es_anlamlilar": "Illness, disease, complaint, disorder, malfunction"
  },
  {
    "ingilizce": "Accompany",
    "turkce": "Eşlik etmek",
    "es_anlamlilar": "Go with, escort, attend, follow"
  },
  {
    "ingilizce": "Accordingly",
    "turkce": "Uygun şekilde, bu nedenle, -e bağlı olarak",
    "es_anlamlilar": "Appropriately, consequently, therefore, hence, as a result"
  },
  {
    "ingilizce": "Abduct",
    "turkce": "Kaçırmak",
    "es_anlamlilar": "Kidnap, seize, drag away"
  },
  {
    "ingilizce": "Shift",
    "turkce": "Değişmek, değiştirmek, kımıldamak",
    "es_anlamlilar": "Change, alter, modify"
  },
  {
    "ingilizce": "Secular",
    "turkce": "Laik",
    "es_anlamlilar": "Worldly"
  },
  {
    "ingilizce": "Course",
    "turkce": "Seyir, akış, yol, yön",
    "es_anlamlilar": "Route, way, direction, drift"
  },
  {
    "ingilizce": "Depart",
    "turkce": "Ayrılmak, hareket etmek",
    "es_anlamlilar": "Leave, set off"
  },
  {
    "ingilizce": "Constrain",
    "turkce": "Zorlamak, baskı altına almak, sınırlamak",
    "es_anlamlilar": "Force, compel, limit"
  },
  {
    "ingilizce": "Deviate",
    "turkce": "Sapmak, yön değiştirmek",
    "es_anlamlilar": "Move away, diverge"
  },
  {
    "ingilizce": "Devout",
    "turkce": "Dindar",
    "es_anlamlilar": "Religious"
  },
  {
    "ingilizce": "Drought",
    "turkce": "Kuraklık",
    "es_anlamlilar": "Dry season"
  },
  {
    "ingilizce": "Eligible",
    "turkce": "Uygun, seçilebilir",
    "es_anlamlilar": "Suitable, appropriate"
  },
  {
    "ingilizce": "Fulfill",
    "turkce": "Yerine getirmek",
    "es_anlamlilar": "Execute, carry out, implement"
  },
  {
    "ingilizce": "Harass",
    "turkce": "Taciz etmek",
    "es_anlamlilar": "Bother, pester"
  },
  {
    "ingilizce": "Peak",
    "turkce": "Zirve",
    "es_anlamlilar": "Summit, zenith"
  },
  {
    "ingilizce": "Outweigh",
    "turkce": "Daha ağır basmak, daha önemli olmak",
    "es_anlamlilar": "Be greater in weight, be more than"
  },
  {
    "ingilizce": "Precise",
    "turkce": "Kesin, kati, tam",
    "es_anlamlilar": "Exact, definite"
  },
  {
    "ingilizce": "Raise",
    "turkce": "Artırmak, yükselmek, gündeme getirmek",
    "es_anlamlilar": "Increase, rear, bring up, mention"
  },
  {
    "ingilizce": "Gratify",
    "turkce": "Memnun etmek, tatmin etmek",
    "es_anlamlilar": "Please, satisfy"
  },
  {
    "ingilizce": "Illicit",
    "turkce": "Yasa dışı",
    "es_anlamlilar": "illegal, unlawful"
  },
  {
    "ingilizce": "Insult",
    "turkce": "Aşağılamak, hakaret etmek",
    "es_anlamlilar": "Offend, look down on, humiliate"
  },
  {
    "ingilizce": "Cite",
    "turkce": "Bahsetmek",
    "es_anlamlilar": "Mention, talk about, refer to"
  },
  {
    "ingilizce": "Defeat",
    "turkce": "Yenmek, bozguna uğratmak",
    "es_anlamlilar": "Beat, overcome"
  },
  {
    "ingilizce": "Decree",
    "turkce": "İlan etmek, duyurmak, buyurmak",
    "es_anlamlilar": "Declare, announce, order"
  },
  {
    "ingilizce": "Convince",
    "turkce": "İkna etmek",
    "es_anlamlilar": "Persuade, win over, bring round"
  },
  {
    "ingilizce": "Revoke",
    "turkce": "İptal etmek, feshetmek, geri almak",
    "es_anlamlilar": "Cancel, annul, repeal"
  },
  {
    "ingilizce": "Wipe out",
    "turkce": "Silip süpürmek, kökünü kazımak",
    "es_anlamlilar": "Destroy, exterminate"
  },
  {
    "ingilizce": "Wisdom",
    "turkce": "Bilgelik, akıl, sağduyu",
    "es_anlamlilar": "Common sense, prudence, insight"
  },
  {
    "ingilizce": "Withdraw",
    "turkce": "Geri çekmek",
    "es_anlamlilar": "Take back, pull back, extract"
  },
  {
    "ingilizce": "Unique",
    "turkce": "Eşsiz, benzersiz",
    "es_anlamlilar": "Exclusive, only, single"
  },
  {
    "ingilizce": "Prey",
    "turkce": "Av, kurban",
    "es_anlamlilar": "Victim"
  },
  {
    "ingilizce": "Unrest",
    "turkce": "Huzursuzluk",
    "es_anlamlilar": "Uneasiness, restlessness"
  },
  {
    "ingilizce": "Verge",
    "turkce": "Eşik, kenar",
    "es_anlamlilar": "Edge, threshold"
  },
  {
    "ingilizce": "Trend",
    "turkce": "Eğilim, moda",
    "es_anlamlilar": "Tendency, fashion"
  },
  {
    "ingilizce": "Amass",
    "turkce": "Biriktirmek, toplamak",
    "es_anlamlilar": "Accumulate, gather up, heap up, pile up"
  },
  {
    "ingilizce": "Bother",
    "turkce": "Sıkıntı vermek, zahmet vermek",
    "es_anlamlilar": "Trouble"
  },
  {
    "ingilizce": "Adequate",
    "turkce": "Yeterli",
    "es_anlamlilar": "Competent, sufficient, capable, satisfactory, enough"
  },
  {
    "ingilizce": "Thrive",
    "turkce": "Gelişmek, büyümek",
    "es_anlamlilar": "Prosper, flourish"
  },
  {
    "ingilizce": "Contradict",
    "turkce": "Aksini söylemek, çelişmek",
    "es_anlamlilar": "Counter, oppose"
  },
  {
    "ingilizce": "Defer",
    "turkce": "Ertelemek",
    "es_anlamlilar": "Put off, postpone, delay"
  },
  {
    "ingilizce": "Deceit",
    "turkce": "Aldatma, dolandırma",
    "es_anlamlilar": "Deception, fraud, cheating"
  },
  {
    "ingilizce": "Delay",
    "turkce": "Gecik(tir)mek",
    "es_anlamlilar": "Defer, put off, postpone"
  },
  {
    "ingilizce": "Compulsion",
    "turkce": "Zorlama, baskı",
    "es_anlamlilar": "Force, urge"
  },
  {
    "ingilizce": "Concern with",
    "turkce": "İlgilenmek, ilgili olmak",
    "es_anlamlilar": "Be related to/with, be interested in"
  },
  {
    "ingilizce": "Concession",
    "turkce": "İmtiyaz, hak, ödün, taviz",
    "es_anlamlilar": "Compromise, giving in"
  },
  {
    "ingilizce": "Exterminate",
    "turkce": "Yok etmek",
    "es_anlamlilar": "Destroy, eradicate"
  },
  {
    "ingilizce": "Evasive",
    "turkce": "Kaçamaklı, kaçamak hareket",
    "es_anlamlilar": "Elusive"
  },
  {
    "ingilizce": "Eminent",
    "turkce": "Seçkin, ünlü, bilinen, saygın",
    "es_anlamlilar": "Famous, well-known, reputed, prominent"
  },
  {
    "ingilizce": "Inquisitive",
    "turkce": "Meraklı",
    "es_anlamlilar": "Curious, inquiring"
  },
  {
    "ingilizce": "Fatigue",
    "turkce": "Aşırı yorgunluk, bitkinlik, aşınma",
    "es_anlamlilar": "Extreme tiredness, exhaustion"
  },
  {
    "ingilizce": "Fetch",
    "turkce": "Alıp getirmek, kapmak",
    "es_anlamlilar": "Go and bring"
  },
  {
    "ingilizce": "Spill",
    "turkce": "Dökmek, devirmek",
    "es_anlamlilar": "Leak, overturn, splash about"
  },
  {
    "ingilizce": "Manufacture",
    "turkce": "Üretmek, imal etmek",
    "es_anlamlilar": "Make, produce, generate"
  },
  {
    "ingilizce": "Option",
    "turkce": "Seçenek, tercih",
    "es_anlamlilar": "Choice, alternative, preference"
  },
  {
    "ingilizce": "Necessary",
    "turkce": "Gerekli",
    "es_anlamlilar": "Essential"
  },
  {
    "ingilizce": "Magnificent",
    "turkce": "Büyüleyici,görkemli, ihtişamlı, büyük, fevkalade",
    "es_anlamlilar": "Splendid, impressive"
  },
  {
    "ingilizce": "Nourish",
    "turkce": "Beslemek",
    "es_anlamlilar": "Feed, nurture"
  },
  {
    "ingilizce": "Passion",
    "turkce": "Tutku, hırs",
    "es_anlamlilar": "Love, desire, greed"
  },
  {
    "ingilizce": "Penetrate",
    "turkce": "Girmek, nüfuz etmek",
    "es_anlamlilar": "Enter, go in"
  },
  {
    "ingilizce": "Perennially",
    "turkce": "Sürekli, kalıcı",
    "es_anlamlilar": "Constantly, always"
  },
  {
    "ingilizce": "Recurrence",
    "turkce": "(hastalık) depreşme, nüksetme, tekrarlama, yineleme",
    "es_anlamlilar": "Reappearance, repetition"
  },
  {
    "ingilizce": "Succeed",
    "turkce": "İzlemek, yerini almak",
    "es_anlamlilar": "Follow, come after"
  },
  {
    "ingilizce": "Far-fetched",
    "turkce": "İnanılmaz, gerçekten uzak",
    "es_anlamlilar": "Incredible, fantastic, unbelievable"
  },
  {
    "ingilizce": "Ingenious",
    "turkce": "Hünerli, marifetli, akıllı",
    "es_anlamlilar": "Clever, creative, highly skilled"
  },
  {
    "ingilizce": "Inhabit",
    "turkce": "Yaşamak",
    "es_anlamlilar": "Live on"
  },
  {
    "ingilizce": "Detect",
    "turkce": "Farketmek, tespit etmek",
    "es_anlamlilar": "Notice, discover"
  },
  {
    "ingilizce": "Upheaval",
    "turkce": "Ani değişiklik, kargaşa, isyan, baş kaldırı",
    "es_anlamlilar": "Uprising, rebellion, disruption, turmoil"
  },
  {
    "ingilizce": "Utmost",
    "turkce": "En üstün, azami",
    "es_anlamlilar": "Greatest, maximum, highest"
  },
  {
    "ingilizce": "Wrangle",
    "turkce": "Tartışmak",
    "es_anlamlilar": "Dispute, argue"
  },
  {
    "ingilizce": "Witness",
    "turkce": "Tanık olmak, görmek",
    "es_anlamlilar": "See, observe"
  },
  {
    "ingilizce": "Yield to/in",
    "turkce": "Boyun eğmek, teslim olmak",
    "es_anlamlilar": "Give in to, accept"
  },
  {
    "ingilizce": "Yell",
    "turkce": "Bağırmak, haykırmak",
    "es_anlamlilar": "Shout, cry, scream"
  },
  {
    "ingilizce": "Senseless",
    "turkce": "Anlamsız",
    "es_anlamlilar": "Pointless, meaningless"
  },
  {
    "ingilizce": "Sentiment",
    "turkce": "Duygu, his, aşırı duyarlılık, fikir, düşünce",
    "es_anlamlilar": "Feeling"
  },
  {
    "ingilizce": "Sever",
    "turkce": "Bağını kopartmak, kesmek, ayırmak",
    "es_anlamlilar": "Cut off, break"
  },
  {
    "ingilizce": "Accomplish",
    "turkce": "Başarmak",
    "es_anlamlilar": "Achieve, perform, complete, succeed in doing"
  },
  {
    "ingilizce": "Accede",
    "turkce": "Kabul etmek, onaylamak, razı olmak",
    "es_anlamlilar": "Assent to, agree to, accept, comply, approve"
  },
  {
    "ingilizce": "Accelerate",
    "turkce": "Hızlan(dır)mak",
    "es_anlamlilar": "Increase in rate/amount/extent, speed up"
  },
  {
    "ingilizce": "Ambiguous",
    "turkce": "Belirsiz, şüpheli",
    "es_anlamlilar": "Doubtful, dubious, unclear, uncertain, indefinite, vague, obscure"
  },
  {
    "ingilizce": "Seize",
    "turkce": "Kavramak, yakalamak, ele geçirmek",
    "es_anlamlilar": "Capture, grab"
  },
  {
    "ingilizce": "Reward",
    "turkce": "Ödül",
    "es_anlamlilar": "Prize"
  },
  {
    "ingilizce": "Wield",
    "turkce": "Kullanmak, sahip olmak",
    "es_anlamlilar": "Employ, exercise, use, have"
  },
  {
    "ingilizce": "Verdict",
    "turkce": "karar, hüküm",
    "es_anlamlilar": "Decision"
  },
  {
    "ingilizce": "Unsubstantiated",
    "turkce": "Kanıtlanmamış, onaylanmamış",
    "es_anlamlilar": "Unproven, unconfirmed, questionable"
  },
  {
    "ingilizce": "Tangible",
    "turkce": "Elle tutulur, somut",
    "es_anlamlilar": "Can be touched, concrete"
  },
  {
    "ingilizce": "Tender",
    "turkce": "Yumuşak, şefkatli",
    "es_anlamlilar": "Soft, gentle"
  },
  {
    "ingilizce": "Distinctive",
    "turkce": "Belirgin, ayrı, farklı",
    "es_anlamlilar": "Unique, distinguishing"
  },
  {
    "ingilizce": "Enterprise",
    "turkce": "Girişim, teşebbüs",
    "es_anlamlilar": "Venture, project"
  },
  {
    "ingilizce": "Exceed",
    "turkce": "Aşmak, geçmek",
    "es_anlamlilar": "Surpass, surmount"
  },
  {
    "ingilizce": "Exclusive",
    "turkce": "Özel, seçkin",
    "es_anlamlilar": "Special, private, unique"
  },
  {
    "ingilizce": "Concisely",
    "turkce": "Kısaca, öz",
    "es_anlamlilar": "Briefly, shortly, in brief"
  },
  {
    "ingilizce": "Conflict",
    "turkce": "Anlaşmazlık, çatışma",
    "es_anlamlilar": "Hostility"
  },
  {
    "ingilizce": "Chief",
    "turkce": "Başlıca",
    "es_anlamlilar": "Main, principal, leading, major"
  },
  {
    "ingilizce": "Crude",
    "turkce": "Ham, işlenmemiş, basit",
    "es_anlamlilar": "Raw, unrefined, unprocessed, simple"
  },
  {
    "ingilizce": "Indispensable",
    "turkce": "Vazgeçilemez, gerekli",
    "es_anlamlilar": "Necessary, essential"
  },
  {
    "ingilizce": "Range from…to",
    "turkce": "Arasında farklılık göstermek",
    "es_anlamlilar": "Vary"
  },
  {
    "ingilizce": "Proponent",
    "turkce": "Savunucu, taraftar",
    "es_anlamlilar": "Advocate, defender, exponent"
  },
  {
    "ingilizce": "Surmount",
    "turkce": "Üstesinden gelmek",
    "es_anlamlilar": "Overcome, conquer"
  },
  {
    "ingilizce": "Intuition",
    "turkce": "Sezgi",
    "es_anlamlilar": "Instinctive knowledge"
  },
  {
    "ingilizce": "Intimacy",
    "turkce": "Yakınlık, samimiyet",
    "es_anlamlilar": "Closeness, sincerity"
  },
  {
    "ingilizce": "Fertile",
    "turkce": "Verimli, üretken",
    "es_anlamlilar": "Productive, rich, fruitful, prolific"
  },
  {
    "ingilizce": "Retain",
    "turkce": "Tutmak, alıkoymak, muhafaza etmek",
    "es_anlamlilar": "Keep, maintain, preserve, hold"
  },
  {
    "ingilizce": "Odd",
    "turkce": "Garip, tuhaf",
    "es_anlamlilar": "Strange, weird, peculiar"
  },
  {
    "ingilizce": "Lucrative",
    "turkce": "Karlı, kazançlı, yararlı",
    "es_anlamlilar": "Profitable, remunerative"
  },
  {
    "ingilizce": "Lay",
    "turkce": "Koymak",
    "es_anlamlilar": "Put down"
  },
  {
    "ingilizce": "Consume",
    "turkce": "Tüketmek",
    "es_anlamlilar": "Use up, deplete, expend"
  },
  {
    "ingilizce": "Explicit",
    "turkce": "Açık, yalın",
    "es_anlamlilar": "Clear, unambiguous"
  },
  {
    "ingilizce": "Unanimously",
    "turkce": "Oy birliğiyle",
    "es_anlamlilar": "Collectively"
  },
  {
    "ingilizce": "Venture",
    "turkce": "Tehlikeli iş",
    "es_anlamlilar": "Business enterprise"
  },
  {
    "ingilizce": "Vice versa",
    "turkce": "Tam tersi",
    "es_anlamlilar": "Conversely, reversely"
  },
  {
    "ingilizce": "Vicious cycle",
    "turkce": "Kısır döngü",
    "es_anlamlilar": "Vicious circle"
  },
  {
    "ingilizce": "Wage",
    "turkce": "Yürütmek, yapmak",
    "es_anlamlilar": "Conduct, carry on"
  },
  {
    "ingilizce": "Ward off",
    "turkce": "Önlemek",
    "es_anlamlilar": "Prevent, hinder"
  },
  {
    "ingilizce": "Sane",
    "turkce": "Aklı başında",
    "es_anlamlilar": "Plausible, sensible, sound, reasonable"
  },
  {
    "ingilizce": "Asylum",
    "turkce": "Sığınak, barınak, akıl hastanesi, iltica",
    "es_anlamlilar": "Shelter, protection"
  },
  {
    "ingilizce": "Appraise",
    "turkce": "Değerlendirmek, değer biçmek",
    "es_anlamlilar": "Assess, evaluate, estimate, value, rate"
  },
  {
    "ingilizce": "Brilliant",
    "turkce": "Zeki, dahice",
    "es_anlamlilar": "Clever, smart, intelligent"
  },
  {
    "ingilizce": "Aggravate",
    "turkce": "Kötüleştirmek, şiddetlendirmek",
    "es_anlamlilar": "Worsen, intensify, deteriorate"
  },
  {
    "ingilizce": "Affect",
    "turkce": "Etkilemek",
    "es_anlamlilar": "Influence, impact, impress"
  },
  {
    "ingilizce": "Acclaim",
    "turkce": "Övmek, beğenmek",
    "es_anlamlilar": "Praise, extol, commend"
  },
  {
    "ingilizce": "Enthusiastic",
    "turkce": "İstekli, hevesli",
    "es_anlamlilar": "Eager, earnest"
  },
  {
    "ingilizce": "Entire",
    "turkce": "Bütün, tüm",
    "es_anlamlilar": "Whole, complete"
  },
  {
    "ingilizce": "Destiny",
    "turkce": "Kader",
    "es_anlamlilar": "Fate, lot, fortune"
  },
  {
    "ingilizce": "Consequence",
    "turkce": "Sonuç, etki",
    "es_anlamlilar": "Result, effect"
  },
  {
    "ingilizce": "Client",
    "turkce": "Müşteri, müvekkil",
    "es_anlamlilar": "Customer, consumer"
  },
  {
    "ingilizce": "Dazzle",
    "turkce": "Şaşırtmak, etkilemek",
    "es_anlamlilar": "Impress, astonish, surprise, perplex"
  },
  {
    "ingilizce": "Contrive",
    "turkce": "İcat etmek, yaratmak, başarmak",
    "es_anlamlilar": "Invent, devise, manage"
  },
  {
    "ingilizce": "Loath",
    "turkce": "İsteksiz",
    "es_anlamlilar": "Unwilling, reluctant"
  },
  {
    "ingilizce": "Obscure",
    "turkce": "Belirsiz, karanlık, silik",
    "es_anlamlilar": "Vague, ambigious"
  },
  {
    "ingilizce": "Paramount",
    "turkce": "Son derece önemli",
    "es_anlamlilar": "Supreme"
  },
  {
    "ingilizce": "Foster",
    "turkce": "Teşvik etmek, büyütmek, bakmak",
    "es_anlamlilar": "Encourage, nurture, bring up"
  },
  {
    "ingilizce": "Fancy",
    "turkce": "Hayal etmek, sanmak, -den hoşlanmak, istemek",
    "es_anlamlilar": "Imagine, suppose"
  },
  {
    "ingilizce": "Handle",
    "turkce": "Ele almak, baş etmek",
    "es_anlamlilar": "Deal with, manage, direct"
  },
  {
    "ingilizce": "Infringe",
    "turkce": "Çiğnemek, ihlal etmek",
    "es_anlamlilar": "Break, violate, disobey"
  },
  {
    "ingilizce": "Interact",
    "turkce": "Etkileşimde bulunmak",
    "es_anlamlilar": "Act on each other"
  },
  {
    "ingilizce": "Prohibit",
    "turkce": "Yasaklamak, menetmek",
    "es_anlamlilar": "Ban, forbid"
  },
  {
    "ingilizce": "Submit",
    "turkce": "Teslim etmek, sunmak",
    "es_anlamlilar": "Hand in, present"
  },
  {
    "ingilizce": "Flair",
    "turkce": "Yetenek",
    "es_anlamlilar": "Ability, talent, gift, knack"
  },
  {
    "ingilizce": "Mishap",
    "turkce": "Aksilik, kaza",
    "es_anlamlilar": "Misfortune, unfortunate accident"
  },
  {
    "ingilizce": "Relevant",
    "turkce": "İlgili, alakalı, konuyla ilgili, yerinde, -e uygun",
    "es_anlamlilar": "Related, pertinent"
  },
  {
    "ingilizce": "Refrain from",
    "turkce": "-den kaçınmak, -den çekinmek",
    "es_anlamlilar": "Abstain from, avoid doing sth."
  },
  {
    "ingilizce": "Legacy",
    "turkce": "Miras",
    "es_anlamlilar": "Inheritance, bequest"
  },
  {
    "ingilizce": "Legible",
    "turkce": "Okunaklı, okunabilir",
    "es_anlamlilar": "Well-written"
  },
  {
    "ingilizce": "Crucial",
    "turkce": "Önemli",
    "es_anlamlilar": "Important, vital, significant"
  },
  {
    "ingilizce": "Culminate in",
    "turkce": "Zirveye ulaşmak, son bulmak, ile sonuçlanmak",
    "es_anlamlilar": "Reach the top, finalize"
  },
  {
    "ingilizce": "Delinquency",
    "turkce": "Suçluluk",
    "es_anlamlilar": "Misdeed, misconduct"
  },
  {
    "ingilizce": "Circumstantial",
    "turkce": "İkinci derecede, durumla ilgili, ayrıntılı",
    "es_anlamlilar": "Secondary, indirect"
  },
  {
    "ingilizce": "Confirm",
    "turkce": "Doğrulamak, teyit etmek",
    "es_anlamlilar": "Verify, substantiate, approve, endorse"
  },
  {
    "ingilizce": "Condense",
    "turkce": "Yoğunlaştırmak",
    "es_anlamlilar": "Compress, compact"
  },
  {
    "ingilizce": "Disparity",
    "turkce": "Farklılık, fark, boşluk, uçurum",
    "es_anlamlilar": "Difference, gap"
  },
  {
    "ingilizce": "Admit",
    "turkce": "Kabul etmek, itiraf etmek.",
    "es_anlamlilar": "Accept, acknowledge, approve, confess"
  },
  {
    "ingilizce": "Artificial",
    "turkce": "Yapay, doğal olmayan",
    "es_anlamlilar": "Unnatural, unreal, synthetic"
  },
  {
    "ingilizce": "Aspire",
    "turkce": "Arzu etmek, istemek",
    "es_anlamlilar": "Desire, long for, hope, wish"
  },
  {
    "ingilizce": "Sanction",
    "turkce": "Yaptırım",
    "es_anlamlilar": "Penalty, punishment, restriction"
  },
  {
    "ingilizce": "Tend to",
    "turkce": "Eğilimli olmak",
    "es_anlamlilar": "Be inclined to, apt to"
  },
  {
    "ingilizce": "Testimony",
    "turkce": "İfade, tanıklık, kanıt, delil",
    "es_anlamlilar": "Evidence, statement"
  },
  {
    "ingilizce": "Sort",
    "turkce": "Sıralamak, sınıflandırmak",
    "es_anlamlilar": "Classify, arrange"
  },
  {
    "ingilizce": "Virtually",
    "turkce": "Hemen hemen, neredeyse",
    "es_anlamlilar": "Almost, practically, nearly, approximately, wellnigh"
  },
  {
    "ingilizce": "Appalling",
    "turkce": "Korkutucu, ürkütücü",
    "es_anlamlilar": "Terrifying, shocking, frightful, dreadful, awful"
  },
  {
    "ingilizce": "Anxious",
    "turkce": "Endişeli, kaygılı",
    "es_anlamlilar": "Worried, concerned, troubled, apprehensive"
  },
  {
    "ingilizce": "Achieve",
    "turkce": "Başarmak, üstesinden gelmek",
    "es_anlamlilar": "Succeed, accomplish, attain, acquire, gain, earn"
  },
  {
    "ingilizce": "Emerge from",
    "turkce": "-den çıkmak, -den gelişmek, -den ortaya çıkmak",
    "es_anlamlilar": "Develope out of, arise from, result from"
  },
  {
    "ingilizce": "Collide",
    "turkce": "Çarpışmak",
    "es_anlamlilar": "Crash, strike, bump into"
  },
  {
    "ingilizce": "Convict",
    "turkce": "Mahkum etmek, tutuklamak, suçlamak",
    "es_anlamlilar": "Find guilty"
  },
  {
    "ingilizce": "Corroborate",
    "turkce": "Doğrulamak, teyit etmek",
    "es_anlamlilar": "Confirm, back up, support"
  },
  {
    "ingilizce": "Miserable",
    "turkce": "Sefil, mutsuz, neşesiz",
    "es_anlamlilar": "Unhappy, cheerless, awful"
  },
  {
    "ingilizce": "Omit",
    "turkce": "Çıkarmak",
    "es_anlamlilar": "Delete, leave out"
  },
  {
    "ingilizce": "Occupy",
    "turkce": "İşgal etmek",
    "es_anlamlilar": "Inhabit, reside, lodge in"
  },
  {
    "ingilizce": "Imminent",
    "turkce": "Yakında olmasından korkulan, yakın, yaklaşan",
    "es_anlamlilar": "Approaching"
  },
  {
    "ingilizce": "Illusion",
    "turkce": "Yanılgı",
    "es_anlamlilar": "Deception, mirage"
  },
  {
    "ingilizce": "Stationary",
    "turkce": "Hareketsiz, sabit",
    "es_anlamlilar": "Immobile, at rest"
  },
  {
    "ingilizce": "Spark",
    "turkce": "Kıvılcım saçmak, başlatmak",
    "es_anlamlilar": "Generate, produce, initiate"
  },
  {
    "ingilizce": "Intentional",
    "turkce": "Kasıtlı, kasti, bile bile yapılan",
    "es_anlamlilar": "Deliberate, on purpose, planned"
  },
  {
    "ingilizce": "Lack of",
    "turkce": "Yoksun olma, eksiklik",
    "es_anlamlilar": "Deficiency, shortness"
  },
  {
    "ingilizce": "Promote",
    "turkce": "Terfi etmek, ilerlemek",
    "es_anlamlilar": "Give a higher position to smb., aid, foster"
  },
  {
    "ingilizce": "Rare",
    "turkce": "Nadir, kıt, az bulunan",
    "es_anlamlilar": "Scarce"
  },
  {
    "ingilizce": "Query",
    "turkce": "Soru sormak, doğruluğunu araştırmak",
    "es_anlamlilar": "Question, inquire, ask, suspect"
  },
  {
    "ingilizce": "Prior to",
    "turkce": "-den önce",
    "es_anlamlilar": "Before"
  },
  {
    "ingilizce": "Sustenance",
    "turkce": "Beslenme, hayatta kalma",
    "es_anlamlilar": "Nourishment, nutrition"
  },
  {
    "ingilizce": "Stimulate",
    "turkce": "Teşvik etmek, uyarmak",
    "es_anlamlilar": "Arouse, encourage"
  },
  {
    "ingilizce": "Incentive",
    "turkce": "Teşvik, motivasyon",
    "es_anlamlilar": "Motivation, encouragement"
  },
  {
    "ingilizce": "Grant",
    "turkce": "Burs",
    "es_anlamlilar": "Scholarship, funding, allowance"
  },
  {
    "ingilizce": "Partial",
    "turkce": "Kısmi",
    "es_anlamlilar": "Incomplete"
  },
  {
    "ingilizce": "Overwhelming",
    "turkce": "Karşı konulmaz, çok kuvvetli, bunaltıcı",
    "es_anlamlilar": "Overpowering"
  },
  {
    "ingilizce": "Meticulous",
    "turkce": "Özenli, dikkatli",
    "es_anlamlilar": "Careful"
  },
  {
    "ingilizce": "Dawn",
    "turkce": "Şafak, gündoğuşu",
    "es_anlamlilar": "Sunrise"
  },
  {
    "ingilizce": "Distinguish",
    "turkce": "Ayırt etmek, ayırmak",
    "es_anlamlilar": "Differentiate"
  },
  {
    "ingilizce": "Detention",
    "turkce": "Gözaltına alma",
    "es_anlamlilar": "Arrest, custody"
  },
  {
    "ingilizce": "Faith",
    "turkce": "İnanç, güven",
    "es_anlamlilar": "Belief, conviction, confidence, trust"
  },
  {
    "ingilizce": "Annual",
    "turkce": "Yıllık",
    "es_anlamlilar": "Yearly, every year, once a year"
  },
  {
    "ingilizce": "Adverse",
    "turkce": "Negatif, ters, kötü, olumsuz.",
    "es_anlamlilar": "Harmful, unfavorable, opposite, contrary"
  },
  {
    "ingilizce": "Assess",
    "turkce": "Değerlendirmek",
    "es_anlamlilar": "Evaluate, appraise, value"
  },
  {
    "ingilizce": "Significant",
    "turkce": "Önemli, kayda değer, anlamlı, manalı",
    "es_anlamlilar": "Crucial, vital, important"
  },
  {
    "ingilizce": "Tough",
    "turkce": "Sert, katı",
    "es_anlamlilar": "Severe, strict, rigid"
  },
  {
    "ingilizce": "Undertake",
    "turkce": "Üstlenmek, söz vermek",
    "es_anlamlilar": "Assume, take on"
  },
  {
    "ingilizce": "Vertical",
    "turkce": "Dikey",
    "es_anlamlilar": "Perpendicular"
  },
  {
    "ingilizce": "Sacrifice",
    "turkce": "Fedakarlık yapmak, kurban etmek",
    "es_anlamlilar": "Relinguish, abandon"
  },
  {
    "ingilizce": "Annul",
    "turkce": "İptal etmek, kabul edilmemek, geçersiz sayılmak (evlilik, yasa vs.)",
    "es_anlamlilar": "Cancel, repeal, revoke, call off"
  },
  {
    "ingilizce": "Abide by",
    "turkce": "Uymak, kabul etmek, bağlı kalmak",
    "es_anlamlilar": "Obey, comply with, accept, conform to, stick to"
  },
  {
    "ingilizce": "Eternal",
    "turkce": "Sonsuz, bitmeyen",
    "es_anlamlilar": "Infinite, endless"
  },
  {
    "ingilizce": "Ease",
    "turkce": "Kolaylaştırmak, azal(t)mak",
    "es_anlamlilar": "Make easier, facilitate, lessen, alleviate"
  },
  {
    "ingilizce": "Cruel",
    "turkce": "Zalim, acımasız, merhametsiz",
    "es_anlamlilar": "Brutal, merciless, pitiless"
  },
  {
    "ingilizce": "Creep",
    "turkce": "Sürünmek",
    "es_anlamlilar": "Crawl, sneak, wriggle"
  },
  {
    "ingilizce": "Deplete",
    "turkce": "Tüketmek",
    "es_anlamlilar": "Use up, consume, exhaust"
  },
  {
    "ingilizce": "Delicate",
    "turkce": "Dayanıksız, kırılgan, ince, zarif",
    "es_anlamlilar": "Fragile, subtle, sensitive"
  },
  {
    "ingilizce": "Commence",
    "turkce": "Başla(t)mak",
    "es_anlamlilar": "Start, begin, embark on"
  },
  {
    "ingilizce": "Consistent",
    "turkce": "Sürekli, istikrarlı, tutarlı",
    "es_anlamlilar": "Steady, constant"
  },
  {
    "ingilizce": "Retrieve",
    "turkce": "Geri almak, geri getirmek",
    "es_anlamlilar": "Recover, bring back"
  },
  {
    "ingilizce": "Haphazard",
    "turkce": "Tesadüfi",
    "es_anlamlilar": "Random"
  },
  {
    "ingilizce": "Glance",
    "turkce": "Hızlı bakış, göz atma",
    "es_anlamlilar": "Brief look, quick view"
  },
  {
    "ingilizce": "Impoverish",
    "turkce": "Fakirleştirmek",
    "es_anlamlilar": "Make poor, deprive"
  },
  {
    "ingilizce": "Immune",
    "turkce": "Bağışıklık kazanmış",
    "es_anlamlilar": "Resistant, protected"
  },
  {
    "ingilizce": "Inherit",
    "turkce": "Miras almak, kalıtım yoluyla elde etmek",
    "es_anlamlilar": "Receive, derive from a death"
  },
  {
    "ingilizce": "Invalid",
    "turkce": "Geçersiz",
    "es_anlamlilar": "Unacceptable, null and void"
  },
  {
    "ingilizce": "Precaution",
    "turkce": "Önlem, tedbir",
    "es_anlamlilar": "Measure, step, action"
  },
  {
    "ingilizce": "Prominent",
    "turkce": "Ünlü, tanınmış, belirgin",
    "es_anlamlilar": "Famous, well-known, eminent"
  },
  {
    "ingilizce": "Preliminary",
    "turkce": "İlk, ön, hazırlayıcı",
    "es_anlamlilar": "First, early, initial"
  },
  {
    "ingilizce": "Squeeze",
    "turkce": "Sıkıştırmak, baskı yapmak, ezmek",
    "es_anlamlilar": "Press"
  },
  {
    "ingilizce": "Identical",
    "turkce": "Benzer, aynı",
    "es_anlamlilar": "Same, alike"
  },
  {
    "ingilizce": "Greed",
    "turkce": "Açgözlü, doyumsuz",
    "es_anlamlilar": "Insatiable"
  },
  {
    "ingilizce": "Grim",
    "turkce": "Karamsar",
    "es_anlamlilar": "Gloomy, bleak, pessimistic"
  },
  {
    "ingilizce": "Modest",
    "turkce": "Alçakgönüllü",
    "es_anlamlilar": "Decent, humble"
  },
  {
    "ingilizce": "Restrain",
    "turkce": "Kontrol altında tutmak, sınırlamak",
    "es_anlamlilar": "Restrict, check, keep under control"
  },
  {
    "ingilizce": "Occur",
    "turkce": "Meydana gelmek",
    "es_anlamlilar": "Happen, take place"
  },
  {
    "ingilizce": "Obstruct",
    "turkce": "Engel olmak",
    "es_anlamlilar": "Block, hinder, impede"
  },
  {
    "ingilizce": "Offspring",
    "turkce": "Çocuklar, gelecek nesil",
    "es_anlamlilar": "Children"
  },
  {
    "ingilizce": "Odor",
    "turkce": "Koku",
    "es_anlamlilar": "Smell"
  },
  {
    "ingilizce": "Obstacle",
    "turkce": "Engel",
    "es_anlamlilar": "Barrier, obstruction, impediment"
  },
  {
    "ingilizce": "Clarity",
    "turkce": "Açıklık, netlik",
    "es_anlamlilar": "Clearness, lucidity, precision"
  },
  {
    "ingilizce": "Convey",
    "turkce": "Taşımak, nakletmek",
    "es_anlamlilar": "Carry, transfer, move"
  },
  {
    "ingilizce": "Differentiate",
    "turkce": "Ayırt etmek",
    "es_anlamlilar": "Discriminate, distinguish"
  },
  {
    "ingilizce": "Execute",
    "turkce": "Uygulamak, yerine getirmek",
    "es_anlamlilar": "Carry out, implement"
  },
  {
    "ingilizce": "Accurate",
    "turkce": "Doğru, tam, net",
    "es_anlamlilar": "Correct, careful, precise, lacking errors, exact"
  },
  {
    "ingilizce": "Account for",
    "turkce": "Oluşturmak, hesap vermek, açıklamak, sorumlu olmak",
    "es_anlamlilar": "Be responsible for, explain, form, make up"
  },
  {
    "ingilizce": "Ample",
    "turkce": "Bol, bereketli",
    "es_anlamlilar": "Abundant, plentiful, extensive, generous, spacious"
  },
  {
    "ingilizce": "Alert",
    "turkce": "Dikkatli, tetikte",
    "es_anlamlilar": "Wary, watchful, cautious, attentive, ready"
  },
  {
    "ingilizce": "Accessible",
    "turkce": "Ulaşılabilir, erişilebilir",
    "es_anlamlilar": "Reachable, approachable, available"
  },
  {
    "ingilizce": "Pursuit",
    "turkce": "Arayış, uğraş",
    "es_anlamlilar": "Search, leisure activity"
  },
  {
    "ingilizce": "Calamity",
    "turkce": "Felaket",
    "es_anlamlilar": "Disaster, catastrophe"
  },
  {
    "ingilizce": "Bound",
    "turkce": "Zorunlu, kaçınılmaz",
    "es_anlamlilar": "Inevitable, unavoidable"
  },
  {
    "ingilizce": "Charge with",
    "turkce": "Suçlamak",
    "es_anlamlilar": "Accuse of, blame for"
  },
  {
    "ingilizce": "Undermine",
    "turkce": "Zayıflatmak, sarsmak, zarar vermek",
    "es_anlamlilar": "Weaken, harm"
  },
  {
    "ingilizce": "Fabric",
    "turkce": "Doku, kumaş",
    "es_anlamlilar": "Structure"
  },
  {
    "ingilizce": "Emit",
    "turkce": "Yaymak, çıkarmak, salıvermek",
    "es_anlamlilar": "Release, send out, give off"
  },
  {
    "ingilizce": "Endorse",
    "turkce": "Doğrulamak, onaylamak, desteklemek",
    "es_anlamlilar": "Approve, ratify, support"
  },
  {
    "ingilizce": "Enhance",
    "turkce": "Artırmak",
    "es_anlamlilar": "Increase, improve"
  },
  {
    "ingilizce": "Diminish",
    "turkce": "Azal(t)mak",
    "es_anlamlilar": "Decrease, abate, allay, subside"
  },
  {
    "ingilizce": "Contemplate",
    "turkce": "Düşünmek, tasarlamak",
    "es_anlamlilar": "Think of, consider"
  },
  {
    "ingilizce": "Oblivious",
    "turkce": "Habersiz",
    "es_anlamlilar": "Unaware, unconscious"
  },
  {
    "ingilizce": "Malnutrition",
    "turkce": "Kötü beslenme, dengesiz beslenme, yetersiz beslenme",
    "es_anlamlilar": "Lack of proper nutrition"
  },
  {
    "ingilizce": "Futile",
    "turkce": "Boşuna, nafile",
    "es_anlamlilar": "Vain, without result"
  },
  {
    "ingilizce": "Holy",
    "turkce": "Kutsal",
    "es_anlamlilar": "Sacred"
  },
  {
    "ingilizce": "Inadvertently",
    "turkce": "İstemeyerek",
    "es_anlamlilar": "Unintentionally, involuntarily"
  },
  {
    "ingilizce": "Surpass",
    "turkce": "Aşmak, geçmek",
    "es_anlamlilar": "Exceed"
  },
  {
    "ingilizce": "Stubborn",
    "turkce": "İnatçı",
    "es_anlamlilar": "Obstinate, inflexible"
  },
  {
    "ingilizce": "Juvenile",
    "turkce": "Gençliğe özgü, genç, olgunlaşmamış, çocuksu",
    "es_anlamlilar": "Young, childish, immature"
  },
  {
    "ingilizce": "Prolific",
    "turkce": "Verimli, üretken, bereketli",
    "es_anlamlilar": "Productive, fertile, fruitful"
  },
  {
    "ingilizce": "Privileged",
    "turkce": "Ayrıcalıklı, imtiyazlı",
    "es_anlamlilar": "Special"
  },
  {
    "ingilizce": "Hamper",
    "turkce": "Engellemek",
    "es_anlamlilar": "Prevent, hinder, impede"
  },
  {
    "ingilizce": "Grievance",
    "turkce": "Yakınma, şikayet",
    "es_anlamlilar": "Complaint"
  },
  {
    "ingilizce": "Hazard",
    "turkce": "Tehlike",
    "es_anlamlilar": "Danger"
  },
  {
    "ingilizce": "Fluctuate",
    "turkce": "Dalgalanmak, değişiklik göstermek",
    "es_anlamlilar": "Go up and down, wave"
  },
  {
    "ingilizce": "Reign",
    "turkce": "Tahtta olmak, hüküm sürmek",
    "es_anlamlilar": "Rule, power, govern"
  },
  {
    "ingilizce": "Offend",
    "turkce": "Gücendirmek",
    "es_anlamlilar": "Annoy"
  },
  {
    "ingilizce": "Oppress",
    "turkce": "Eziyet etmek, ezmek, zulmetmek",
    "es_anlamlilar": "Suppress, trouble"
  },
  {
    "ingilizce": "Culprit",
    "turkce": "Suçlu, sebep",
    "es_anlamlilar": "Guilty, criminal, cause, reason"
  },
  {
    "ingilizce": "Esteem",
    "turkce": "Saygı",
    "es_anlamlilar": "Respect, regard"
  },
  {
    "ingilizce": "Expose to",
    "turkce": "Maruz bırakmak",
    "es_anlamlilar": "Subject to, make liable"
  },
  {
    "ingilizce": "Temporary",
    "turkce": "Geçici",
    "es_anlamlilar": "Provisional, interim"
  },
  {
    "ingilizce": "Wander",
    "turkce": "Gezmek, dolaşmak",
    "es_anlamlilar": "Walk about, go aimlessly, roam"
  },
  {
    "ingilizce": "Vaccinate",
    "turkce": "Aşı yapmak",
    "es_anlamlilar": "Inoculate"
  },
  {
    "ingilizce": "Would-be",
    "turkce": "Olası, müstakbel, sözde",
    "es_anlamlilar": "Most likely, hopeful"
  },
  {
    "ingilizce": "Sacred",
    "turkce": "Kutsal",
    "es_anlamlilar": "Holy"
  },
  {
    "ingilizce": "Attribute to",
    "turkce": "Atfetmek, -e bağlamak",
    "es_anlamlilar": "Ascribe, assign, refer, associate, connect"
  },
  {
    "ingilizce": "Augment",
    "turkce": "Artırmak",
    "es_anlamlilar": "Increase, launch, rise, go up"
  },
  {
    "ingilizce": "Abuse",
    "turkce": "Kötüye kullanma, suistimal etme, zarar verme",
    "es_anlamlilar": "Misuse, maltreat, exploit"
  },
  {
    "ingilizce": "Accept",
    "turkce": "Kabul etmek",
    "es_anlamlilar": "Be consent to receive, assent, comply, approve, accede"
  },
  {
    "ingilizce": "Ancient",
    "turkce": "Eski",
    "es_anlamlilar": "Antique, old, obsolete, aged, old-fashioned"
  },
  {
    "ingilizce": "Astonish",
    "turkce": "Şaşırtmak",
    "es_anlamlilar": "Amaze, startle, perplex, astound"
  },
  {
    "ingilizce": "Vie for",
    "turkce": "Yarışmak, mücadele etmek",
    "es_anlamlilar": "Compete, race"
  },
  {
    "ingilizce": "Temperate",
    "turkce": "Ilımlı, ölçülü",
    "es_anlamlilar": "Moderate, mild, calm"
  },
  {
    "ingilizce": "Deprive of",
    "turkce": "Yoksun bırakmak",
    "es_anlamlilar": "Take away, be devoid of"
  },
  {
    "ingilizce": "Temper",
    "turkce": "Öfke, huysuzluk",
    "es_anlamlilar": "Anger, annoyance"
  },
  {
    "ingilizce": "Desert",
    "turkce": "Terketmek",
    "es_anlamlilar": "Abandon, give up"
  },
  {
    "ingilizce": "Deplore",
    "turkce": "Üzüntü duymak",
    "es_anlamlilar": "Regret, feel sorry"
  },
  {
    "ingilizce": "Compensate for",
    "turkce": "Telafi etmek, bedelini ödemek",
    "es_anlamlilar": "Make up for"
  },
  {
    "ingilizce": "Outcome",
    "turkce": "Sonuç",
    "es_anlamlilar": "Result, consequence"
  },
  {
    "ingilizce": "Overlap",
    "turkce": "Üst üste gelmek, örtmek",
    "es_anlamlilar": "Cover by extension"
  },
  {
    "ingilizce": "Repent",
    "turkce": "Pişman olmak, üzgün hissetmek, tövbe etmek",
    "es_anlamlilar": "Regret, feel sorry"
  },
  {
    "ingilizce": "Prejudice",
    "turkce": "Önyargı, kayırma, taraf tutma",
    "es_anlamlilar": "Bias, prejudgement"
  },
  {
    "ingilizce": "Mean",
    "turkce": "Cimri",
    "es_anlamlilar": "Stingy, selfish"
  },
  {
    "ingilizce": "Gloomy",
    "turkce": "Karamsar, karanlık",
    "es_anlamlilar": "Dark, pessimistic."
  },
  {
    "ingilizce": "Intangible",
    "turkce": "Fiziksel varlığı olmayan, dokunulmaz, elle tutulmayan",
    "es_anlamlilar": "Untouchable"
  },
  {
    "ingilizce": "Talent",
    "turkce": "Yetenek, kabiliyet, hüner",
    "es_anlamlilar": "Ability, gift, aptitude"
  },
  {
    "ingilizce": "Submissive",
    "turkce": "İtaatkar, uyumlu",
    "es_anlamlilar": "Obedient, compliant"
  },
  {
    "ingilizce": "Subsidy",
    "turkce": "Mali destek",
    "es_anlamlilar": "Financial support"
  },
  {
    "ingilizce": "Swamp",
    "turkce": "Bataklık",
    "es_anlamlilar": "Marsh"
  },
  {
    "ingilizce": "Swell",
    "turkce": "Şişmek",
    "es_anlamlilar": "Become bigger"
  },
  {
    "ingilizce": "Strain",
    "turkce": "Gerilim, yük, zorlanma",
    "es_anlamlilar": "Force, exertion, burden, tension"
  },
  {
    "ingilizce": "Inspire",
    "turkce": "İlham vermek, (öfke, sevgi v.b.) uyandırmak, solumak",
    "es_anlamlilar": "Motivate, encourage"
  },
  {
    "ingilizce": "Innate",
    "turkce": "Doğuştan gelen",
    "es_anlamlilar": "Inborn, inherited"
  },
  {
    "ingilizce": "Gift",
    "turkce": "Yetenek",
    "es_anlamlilar": "Knack, ability, talent, skill"
  },
  {
    "ingilizce": "Legend",
    "turkce": "Efsane",
    "es_anlamlilar": "Folk, tale, myth"
  },
  {
    "ingilizce": "Revenue",
    "turkce": "Gelir, kazanç",
    "es_anlamlilar": "Income, earnings"
  },
  {
    "ingilizce": "Nutrition",
    "turkce": "Gıda, beslenme",
    "es_anlamlilar": "Food, nutriment, nourishment"
  },
  {
    "ingilizce": "Contemporary",
    "turkce": "Çağdaş, aynı zamanda olan",
    "es_anlamlilar": "Modern"
  },
  {
    "ingilizce": "Contentious",
    "turkce": "Tartışmalı, çelişkili",
    "es_anlamlilar": "Controversial"
  },
  {
    "ingilizce": "Contend",
    "turkce": "İddia etmek, öne sürmek",
    "es_anlamlilar": "Claim, assert, allege, maintain"
  },
  {
    "ingilizce": "Curiosity",
    "turkce": "Merak, ilgi",
    "es_anlamlilar": "Interest, inquisitive"
  },
  {
    "ingilizce": "Endeavor",
    "turkce": "Çaba göstermek",
    "es_anlamlilar": "Strive, try hard"
  },
  {
    "ingilizce": "Unease",
    "turkce": "Huzursuzluk",
    "es_anlamlilar": "Discomfort, restlessness"
  },
  {
    "ingilizce": "Unceasing",
    "turkce": "Sürekli",
    "es_anlamlilar": "Perpetual, constant, continuous"
  },
  {
    "ingilizce": "Trait",
    "turkce": "Özellik",
    "es_anlamlilar": "Property, characteristic, feature"
  },
  {
    "ingilizce": "Seek",
    "turkce": "Aramak",
    "es_anlamlilar": "Look for, search for"
  },
  {
    "ingilizce": "Abound in",
    "turkce": "Bol, dolu, çok olmak",
    "es_anlamlilar": "Be plentiful, be rich in, teem with, multiply, flourish"
  },
  {
    "ingilizce": "Spare",
    "turkce": "Yedek",
    "es_anlamlilar": "Extra"
  },
  {
    "ingilizce": "Solace",
    "turkce": "Teselli",
    "es_anlamlilar": "Comfort, consolation"
  },
  {
    "ingilizce": "Treaty",
    "turkce": "Anlaşma",
    "es_anlamlilar": "Agreement, pack"
  },
  {
    "ingilizce": "Tyranny",
    "turkce": "Diktatörlük, zorbalık yönetimi, zulüm, zorbalık, gaddarlık",
    "es_anlamlilar": "Dictatorship, despotism"
  },
  {
    "ingilizce": "Expel",
    "turkce": "Kovmak, atmak",
    "es_anlamlilar": "Dismiss"
  },
  {
    "ingilizce": "Deter from",
    "turkce": "Vazgeçirmek, caydırmak",
    "es_anlamlilar": "Discourage, dissuade"
  },
  {
    "ingilizce": "Debate",
    "turkce": "Tartışmak",
    "es_anlamlilar": "Discuss, argue, dispute"
  },
  {
    "ingilizce": "Decent",
    "turkce": "Uygun",
    "es_anlamlilar": "Appropriate, suitable, proper"
  },
  {
    "ingilizce": "Cognitive",
    "turkce": "Bilişsel",
    "es_anlamlilar": "Connected with thinking"
  },
  {
    "ingilizce": "Cohesive",
    "turkce": "Birleştirici, yapıştırıcı",
    "es_anlamlilar": "Unified, interconnected"
  },
  {
    "ingilizce": "Nocturnal",
    "turkce": "Geceye özgü, geceleyin olan",
    "es_anlamlilar": "Night, dark"
  },
  {
    "ingilizce": "Moody",
    "turkce": "Sinirli, asabi",
    "es_anlamlilar": "Irritable"
  },
  {
    "ingilizce": "Lottery",
    "turkce": "Şans oyunu, piyango",
    "es_anlamlilar": "Chance game, raffle"
  },
  {
    "ingilizce": "Means",
    "turkce": "Araç, yol, yöntem, gelir, para, varlık, servet",
    "es_anlamlilar": "Way, method"
  },
  {
    "ingilizce": "Merchandise",
    "turkce": "Mal, mülk, ticari eşya",
    "es_anlamlilar": "Property, good"
  },
  {
    "ingilizce": "Gratitude",
    "turkce": "Şükran, minnettarlık",
    "es_anlamlilar": "Appreciation, gratefulness"
  },
  {
    "ingilizce": "Fragile",
    "turkce": "Kırılabilir, hassas",
    "es_anlamlilar": "Delicate"
  },
  {
    "ingilizce": "Influence",
    "turkce": "Etki",
    "es_anlamlilar": "Effect, impact"
  },
  {
    "ingilizce": "Stamina",
    "turkce": "Dayanma gücü",
    "es_anlamlilar": "Endurance"
  },
  {
    "ingilizce": "Staple",
    "turkce": "Başlıca",
    "es_anlamlilar": "Chief, main, principal"
  },
  {
    "ingilizce": "Invade",
    "turkce": "İstila etmek",
    "es_anlamlilar": "Occupy, enter by force"
  },
  {
    "ingilizce": "Invariably",
    "turkce": "Değişmez şekilde, daima, sürekli",
    "es_anlamlilar": "Always, constantly"
  },
  {
    "ingilizce": "Subsistence",
    "turkce": "Hayatta kalma",
    "es_anlamlilar": "Survival, continuation"
  },
  {
    "ingilizce": "Take sth. for granted",
    "turkce": "Gerçek değerini vermemek, düşünmeden öyle olduğunu varsaymak",
    "es_anlamlilar": "Assume, presume"
  },
  {
    "ingilizce": "Insane",
    "turkce": "Çılgın, deli",
    "es_anlamlilar": "Crazy, mad"
  },
  {
    "ingilizce": "Humor",
    "turkce": "Mizah",
    "es_anlamlilar": "Joking"
  },
  {
    "ingilizce": "Scholar",
    "turkce": "Bilgin, araştırmacı",
    "es_anlamlilar": "Academic, researcher"
  },
  {
    "ingilizce": "Reprisal",
    "turkce": "Misilleme, aynen karşılığını yapma",
    "es_anlamlilar": "Counter-attack, retaliation"
  },
  {
    "ingilizce": "Ostensibly",
    "turkce": "Görünürde, sözde",
    "es_anlamlilar": "Apparently, seemingly"
  },
  {
    "ingilizce": "Predominantly",
    "turkce": "Başlıca, baskın şekilde, çoğunlukla",
    "es_anlamlilar": "Mainly, chiefly"
  },
  {
    "ingilizce": "Compare",
    "turkce": "Karşılaştırmak",
    "es_anlamlilar": "Match, relate, correspond"
  },
  {
    "ingilizce": "Contest",
    "turkce": "Yarışmak, mücadele etmek",
    "es_anlamlilar": "Challenge, dispute, compete for"
  },
  {
    "ingilizce": "Conclusive",
    "turkce": "Kesin, kati, tartışılmaz",
    "es_anlamlilar": "Decisive, indisputable"
  },
  {
    "ingilizce": "Depreciate",
    "turkce": "Değer kaybet(tir)mek",
    "es_anlamlilar": "Decline in value"
  },
  {
    "ingilizce": "Descent",
    "turkce": "Soy, köken",
    "es_anlamlilar": "Ancestry, origin"
  },
  {
    "ingilizce": "Underestimate",
    "turkce": "Küçümsemek, hafife almak",
    "es_anlamlilar": "Minimize, belittle"
  },
  {
    "ingilizce": "Trace",
    "turkce": "İz",
    "es_anlamlilar": "Sign, mark"
  },
  {
    "ingilizce": "Untapped",
    "turkce": "Dokunulmamış, el sürülmemiş",
    "es_anlamlilar": "Unused, untouched, maiden, virgin"
  },
  {
    "ingilizce": "Unsanitary",
    "turkce": "Kirli, sağlıksız",
    "es_anlamlilar": "Not clean, polluted"
  },
  {
    "ingilizce": "Sedentary",
    "turkce": "Oturarak, hareketsiz, masabaşı",
    "es_anlamlilar": "Sitting, inactive"
  },
  {
    "ingilizce": "Ridiculous",
    "turkce": "Gülünç, saçma",
    "es_anlamlilar": "Absurd, funny"
  },
  {
    "ingilizce": "Ritual",
    "turkce": "Dinsel tören, ayin, seremoni",
    "es_anlamlilar": "Ceremony"
  },
  {
    "ingilizce": "Abandon",
    "turkce": "Terketmek, bırakmak, vazgeçmek",
    "es_anlamlilar": "Give up, leave, desert, forsake"
  },
  {
    "ingilizce": "Cheat",
    "turkce": "Kopya çekmek, aldatmak",
    "es_anlamlilar": "Copy, deceive, swindle, trick"
  },
  {
    "ingilizce": "Cease",
    "turkce": "Durmak, durdurmak",
    "es_anlamlilar": "Stop"
  },
  {
    "ingilizce": "Beneficial",
    "turkce": "Faydalı, yararlı, olumlu",
    "es_anlamlilar": "Useful"
  },
  {
    "ingilizce": "Bewilder",
    "turkce": "Şaşır(t)mak, hayrete düşürmek",
    "es_anlamlilar": "Confuse, astonish"
  },
  {
    "ingilizce": "Dwell",
    "turkce": "Yaşamak, yerleşmek",
    "es_anlamlilar": "Live, inhabit"
  },
  {
    "ingilizce": "Exert",
    "turkce": "Kullanmak, uygulamak",
    "es_anlamlilar": "Use, make use of, utilize"
  },
  {
    "ingilizce": "Evade",
    "turkce": "Kaçırmak, kurtulmak",
    "es_anlamlilar": "Escape, avoid"
  },
  {
    "ingilizce": "Explode",
    "turkce": "Patlamak, infilak etmek",
    "es_anlamlilar": "Go off"
  },
  {
    "ingilizce": "Commemorate",
    "turkce": "Anmak, hatırlamak",
    "es_anlamlilar": "Celebrate, honor"
  },
  {
    "ingilizce": "Perish",
    "turkce": "Yok olmak, çürümek",
    "es_anlamlilar": "Die out, disappear"
  },
  {
    "ingilizce": "Nonsense",
    "turkce": "Saçma",
    "es_anlamlilar": "Irrational, ridiculous, absurd"
  },
  {
    "ingilizce": "Notify",
    "turkce": "Bildirmek, bilgilendirmek, haber vermek",
    "es_anlamlilar": "Inform"
  },
  {
    "ingilizce": "Resume",
    "turkce": "Yeniden başlamak, kaldığı yerden devam etmek",
    "es_anlamlilar": "Start again, go back"
  },
  {
    "ingilizce": "Muster",
    "turkce": "Toplamak, biraraya getirmek",
    "es_anlamlilar": "Collect, gather, assemble"
  },
  {
    "ingilizce": "Lure",
    "turkce": "Cezbetmek, çekmek",
    "es_anlamlilar": "Attract, allure, entice"
  },
  {
    "ingilizce": "Furious",
    "turkce": "Kızgın",
    "es_anlamlilar": "Angry"
  },
  {
    "ingilizce": "Prosper",
    "turkce": "Gelişmek, zenginleşmek, başarılı olmak",
    "es_anlamlilar": "Flourish, thrive"
  },
  {
    "ingilizce": "Disaster",
    "turkce": "Felaket",
    "es_anlamlilar": "Calamity, catastrophe"
  },
  {
    "ingilizce": "Frustrate",
    "turkce": "Hayal kırıklığına uğratmak, üzmek",
    "es_anlamlilar": "Disappoint"
  },
  {
    "ingilizce": "Illuminate",
    "turkce": "Açıklamak, aydınlatmak",
    "es_anlamlilar": "Clarify, shed light on"
  },
  {
    "ingilizce": "Inquire",
    "turkce": "Sormak, soruşturmak",
    "es_anlamlilar": "Ask, investigate"
  },
  {
    "ingilizce": "Infer",
    "turkce": "Çıkarım yapmak",
    "es_anlamlilar": "Conclude, deduce"
  },
  {
    "ingilizce": "Naive",
    "turkce": "Saf",
    "es_anlamlilar": "Foolish, credulous"
  },
  {
    "ingilizce": "Moral",
    "turkce": "Ahlaki, etik",
    "es_anlamlilar": "Ethical, virtuos"
  },
  {
    "ingilizce": "Resolution",
    "turkce": "Karar tasarısı, önerge, teklif",
    "es_anlamlilar": "Decision"
  },
  {
    "ingilizce": "Reminiscent",
    "turkce": "-i anımsatan, -i hatırlatan",
    "es_anlamlilar": "Remindful"
  },
  {
    "ingilizce": "Redundant",
    "turkce": "Gereksiz, fazla, işsiz",
    "es_anlamlilar": "Unnecessary, inessential"
  },
  {
    "ingilizce": "Negligible",
    "turkce": "Önemsiz",
    "es_anlamlilar": "Unimportant, insignificant"
  },
  {
    "ingilizce": "Nominate",
    "turkce": "Aday gösterme",
    "es_anlamlilar": "Appoint, elect, select"
  },
  {
    "ingilizce": "Per",
    "turkce": "Başına, tek",
    "es_anlamlilar": "One, for each"
  },
  {
    "ingilizce": "Conform",
    "turkce": "Uymak",
    "es_anlamlilar": "Obey, comply with, abide by"
  },
  {
    "ingilizce": "Decency",
    "turkce": "Uygunluk, edepli olma",
    "es_anlamlilar": "Morality, propriety, modesty"
  },
  {
    "ingilizce": "Divine",
    "turkce": "İlahi, tanrısal",
    "es_anlamlilar": "Godlike, heavenly"
  },
  {
    "ingilizce": "Barely",
    "turkce": "Zorlukla, güçlükle, nadiren, hemen hemen hiç",
    "es_anlamlilar": "Hardly, scarcely"
  },
  {
    "ingilizce": "Battle",
    "turkce": "Kavga, çatışma, savaş",
    "es_anlamlilar": "Fight, war, conflict"
  },
  {
    "ingilizce": "Slope",
    "turkce": "Eğim",
    "es_anlamlilar": "Incline"
  },
  {
    "ingilizce": "Segregate",
    "turkce": "Ayırmak",
    "es_anlamlilar": "Separate"
  },
  {
    "ingilizce": "Setback",
    "turkce": "Yenilgi, zorluk, aksilik",
    "es_anlamlilar": "Defeat, difficulty"
  },
  {
    "ingilizce": "Abrupt",
    "turkce": "Ani, beklenmeyen",
    "es_anlamlilar": "Sudden, unexpected, hasty"
  },
  {
    "ingilizce": "Appropriate",
    "turkce": "Uygun",
    "es_anlamlilar": "Suitable, proper, fitting"
  },
  {
    "ingilizce": "Entail",
    "turkce": "Gerektirmek",
    "es_anlamlilar": "Require, necessitate"
  },
  {
    "ingilizce": "Eradicate",
    "turkce": "Yok etmek, kökünü kazmak",
    "es_anlamlilar": "Get rid of, wipe out, eliminate"
  },
  {
    "ingilizce": "Contaminate",
    "turkce": "Kirletmek",
    "es_anlamlilar": "Pollute"
  },
  {
    "ingilizce": "Conspiracy",
    "turkce": "Entrika, söylenti, komplo",
    "es_anlamlilar": "Intrigue, trickery"
  },
  {
    "ingilizce": "Compassion",
    "turkce": "Merhamet, acıma",
    "es_anlamlilar": "Sympathy, tenderness, kindness, pity, mercy"
  },
  {
    "ingilizce": "Outlay",
    "turkce": "Masraf, harcama",
    "es_anlamlilar": "Expense, expenditure"
  },
  {
    "ingilizce": "Obedient",
    "turkce": "Uyumlu, kurallara uyan",
    "es_anlamlilar": "Conformable, abiding"
  },
  {
    "ingilizce": "Mutiny",
    "turkce": "İsyan",
    "es_anlamlilar": "Revolt, rebellion"
  },
  {
    "ingilizce": "Revenge",
    "turkce": "İntikam",
    "es_anlamlilar": "Vengeance"
  },
  {
    "ingilizce": "Literacy",
    "turkce": "Okur yazarlık",
    "es_anlamlilar": "Ability to read and write"
  },
  {
    "ingilizce": "Initial",
    "turkce": "İlk, öncelikli",
    "es_anlamlilar": "First, beginning"
  },
  {
    "ingilizce": "Impair",
    "turkce": "Bozmak, zarar vermek",
    "es_anlamlilar": "Spoil, worsen, damage, harm"
  },
  {
    "ingilizce": "Forbid",
    "turkce": "Yasaklamak",
    "es_anlamlilar": "Prohibit, ban, not allow"
  },
  {
    "ingilizce": "Quarrel",
    "turkce": "Kavga, münakaşa, çekişme",
    "es_anlamlilar": "Argument, dispute, disagreement, fight"
  },
  {
    "ingilizce": "Involve",
    "turkce": "İçermek, gerektirmek",
    "es_anlamlilar": "Include, require"
  },
  {
    "ingilizce": "Jeopardize",
    "turkce": "Tehlikeye atmak",
    "es_anlamlilar": "Endanger"
  },
  {
    "ingilizce": "Subject to",
    "turkce": "Maruz kalmak",
    "es_anlamlilar": "Exposed to"
  },
  {
    "ingilizce": "Surplus",
    "turkce": "Fazlalık",
    "es_anlamlilar": "Extra, excess"
  },
  {
    "ingilizce": "Stiff",
    "turkce": "Sert, katı",
    "es_anlamlilar": "Firm, rigid, inflexible, severe"
  },
  {
    "ingilizce": "Intimidate",
    "turkce": "Korkutmak, göz dağı vermek, sindirmek",
    "es_anlamlilar": "Scare, frighten, threaten"
  },
  {
    "ingilizce": "Intermittent",
    "turkce": "Aralıklı",
    "es_anlamlilar": "Periodic"
  },
  {
    "ingilizce": "Prospect",
    "turkce": "Olasılık, beklenti",
    "es_anlamlilar": "Chance, likelihood, hope, expectation"
  },
  {
    "ingilizce": "Phase",
    "turkce": "Safha, evre",
    "es_anlamlilar": "Stage, period"
  },
  {
    "ingilizce": "Generous",
    "turkce": "Cömert",
    "es_anlamlilar": "Open-handed"
  },
  {
    "ingilizce": "Fascinate",
    "turkce": "Büyülemek",
    "es_anlamlilar": "Charm"
  },
  {
    "ingilizce": "Ignore",
    "turkce": "Önemsememek, aldırmamak",
    "es_anlamlilar": "Disregard, overlook"
  },
  {
    "ingilizce": "Infinite",
    "turkce": "Sonsuz, sınırsız, bitmez, tükenmez",
    "es_anlamlilar": "Unlimited, endless"
  },
  {
    "ingilizce": "Conceive",
    "turkce": "Algılamak, düşünmek, tasavvur etmek",
    "es_anlamlilar": "Imagine, think of, visualize, perceive"
  },
  {
    "ingilizce": "Deficiency",
    "turkce": "Eksiklik",
    "es_anlamlilar": "Inadequacy, insufficiency, lack"
  },
  {
    "ingilizce": "Definite",
    "turkce": "Kesin, belirgin",
    "es_anlamlilar": "Specific, particular, exact, precise"
  },
  {
    "ingilizce": "Considerable",
    "turkce": "Büyük, önemli derecede",
    "es_anlamlilar": "Significant, substantial, great"
  },
  {
    "ingilizce": "Epidemic",
    "turkce": "Salgın",
    "es_anlamlilar": "Prevalent, widespread, rampant"
  },
  {
    "ingilizce": "Exclude",
    "turkce": "-ın dışında bırakmak, hariç bırakmak, dışlamak",
    "es_anlamlilar": "Rule out, keep out, leave out"
  },
  {
    "ingilizce": "Exhort",
    "turkce": "Tavsiye etmek, uyarmak",
    "es_anlamlilar": "Encourage, stimulate, warn"
  },
  {
    "ingilizce": "Dwindle",
    "turkce": "Azalmak",
    "es_anlamlilar": "Decrease, diminish, alleviate"
  },
  {
    "ingilizce": "Devastate",
    "turkce": "Yıkmak, tahrip etmek",
    "es_anlamlilar": "Destroy, wreck, ruin"
  },
  {
    "ingilizce": "Span",
    "turkce": "Aralık, mesafe",
    "es_anlamlilar": "Distance, length"
  },
  {
    "ingilizce": "Turmoil",
    "turkce": "Karışıklık, kargaşa, telaşe",
    "es_anlamlilar": "Disorder, chaos"
  },
  {
    "ingilizce": "Victory",
    "turkce": "Zafer, başarı, yengi, utku",
    "es_anlamlilar": "Win, triumph"
  },
  {
    "ingilizce": "Zeal",
    "turkce": "Şevk, istek",
    "es_anlamlilar": "Eagerness, enthusiasm"
  },
  {
    "ingilizce": "Wreck",
    "turkce": "Yıkmak, tahrip etmek",
    "es_anlamlilar": "Destroy, ruin"
  },
  {
    "ingilizce": "Yield",
    "turkce": "Ürün, hasat",
    "es_anlamlilar": "Harvest, crop"
  },
  {
    "ingilizce": "Will",
    "turkce": "İrade, istek, vasiyet",
    "es_anlamlilar": "Determination, decision"
  },
  {
    "ingilizce": "Welfare",
    "turkce": "Refah, mutluluk",
    "es_anlamlilar": "Well-being, prosperity, affluence"
  },
  {
    "ingilizce": "Widespread",
    "turkce": "Yaygın, geniş çapta",
    "es_anlamlilar": "Plenty, abundant"
  },
  {
    "ingilizce": "Appeal",
    "turkce": "İlgisini çekmek",
    "es_anlamlilar": "Invoke, attract, provoke attention, captivate"
  },
  {
    "ingilizce": "Divert",
    "turkce": "Yön değiştirmek",
    "es_anlamlilar": "Distract, deviate, shift"
  },
  {
    "ingilizce": "Convenient",
    "turkce": "Uygun, elverişli",
    "es_anlamlilar": "Suitable, appropriate"
  },
  {
    "ingilizce": "Comply with",
    "turkce": "Uymak",
    "es_anlamlilar": "Abide by, obey, conform to, stick to"
  },
  {
    "ingilizce": "Compel",
    "turkce": "Zorlamak",
    "es_anlamlilar": "Force"
  },
  {
    "ingilizce": "Initiate",
    "turkce": "Başlatmak",
    "es_anlamlilar": "Start, begin"
  },
  {
    "ingilizce": "Incline",
    "turkce": "Eğim, meyil",
    "es_anlamlilar": "Slope"
  },
  {
    "ingilizce": "Grave",
    "turkce": "Ciddi, önemli",
    "es_anlamlilar": "Serious, crucial, solemn, severe"
  },
  {
    "ingilizce": "Provisions",
    "turkce": "Erzak, azık, araç-gereç",
    "es_anlamlilar": "Food, groceries, preparation"
  },
  {
    "ingilizce": "Stem from",
    "turkce": "-den kaynaklanmak, ileri gelmek",
    "es_anlamlilar": "Arise from, develop out of, originate from"
  },
  {
    "ingilizce": "Reluctant",
    "turkce": "İsteksiz, gönülsüz, tereddütlü",
    "es_anlamlilar": "Unwilling"
  },
  {
    "ingilizce": "Pace",
    "turkce": "Hız, bir adımda alınan mesafe, ilerleme hızı, yürüyüş",
    "es_anlamlilar": "Step, tempo"
  },
  {
    "ingilizce": "Paradox",
    "turkce": "Çelişki",
    "es_anlamlilar": "Contradiction, inconsistency"
  },
  {
    "ingilizce": "Likely",
    "turkce": "Olası, muhtemel",
    "es_anlamlilar": "Probable, possible"
  },
  {
    "ingilizce": "Legislate",
    "turkce": "Yasa yapmak",
    "es_anlamlilar": "Make laws, enforce laws"
  },
  {
    "ingilizce": "Irreversible",
    "turkce": "Geri dönüşü olmayan, tersine çevrilemez",
    "es_anlamlilar": "Irreparable"
  },
  {
    "ingilizce": "Investigate",
    "turkce": "Araştırmak",
    "es_anlamlilar": "Look into, explore"
  },
  {
    "ingilizce": "Harsh",
    "turkce": "Acımasız, sert, haşin",
    "es_anlamlilar": "Severe, pitiless"
  },
  {
    "ingilizce": "Flatter",
    "turkce": "Övmek, övünmek",
    "es_anlamlilar": "Compliment, praise"
  },
  {
    "ingilizce": "Fever",
    "turkce": "Yüksek ateş",
    "es_anlamlilar": "High temperature"
  },
  {
    "ingilizce": "Finite",
    "turkce": "Sınırlı, kısıtlı",
    "es_anlamlilar": "Limited, restricted"
  },
  {
    "ingilizce": "Firm",
    "turkce": "Sert, katı",
    "es_anlamlilar": "Stiff, rigid"
  },
  {
    "ingilizce": "Genocide",
    "turkce": "Katliam, soykırım",
    "es_anlamlilar": "Massacre"
  },
  {
    "ingilizce": "Coherent",
    "turkce": "Mantıklı, birleşik, kendinde",
    "es_anlamlilar": "Connected, consistent, rational"
  },
  {
    "ingilizce": "Conserve",
    "turkce": "Korumak, muhafaza etmek",
    "es_anlamlilar": "Preserve, protect"
  },
  {
    "ingilizce": "Display",
    "turkce": "Göstermek, sergilemek",
    "es_anlamlilar": "Show, exhibit, portray"
  },
  {
    "ingilizce": "Embark on",
    "turkce": "Başlamak",
    "es_anlamlilar": "Start, initiate"
  },
  {
    "ingilizce": "Eliminate",
    "turkce": "Ortadan kaldırmak, elemek",
    "es_anlamlilar": "Get rid of, eradicate, do away with"
  },
  {
    "ingilizce": "Dim",
    "turkce": "Karanlık, loş",
    "es_anlamlilar": "Not bright, darkish"
  },
  {
    "ingilizce": "Dispense",
    "turkce": "vazgeçmek, -den kurtulmak, -sız yapmak",
    "es_anlamlilar": "Give away, do without"
  },
  {
    "ingilizce": "Era",
    "turkce": "Çağ, dönem",
    "es_anlamlilar": "Age, period"
  },
  {
    "ingilizce": "Addicted",
    "turkce": "Bağımlı, müptela, kendini kaptıran",
    "es_anlamlilar": "Dependent, attached"
  },
  {
    "ingilizce": "Allure",
    "turkce": "Etkilemek, çekmek, cezbetmek",
    "es_anlamlilar": "Attract, entice, seduce, charm"
  },
  {
    "ingilizce": "Alienate",
    "turkce": "Uzaklaştırmak, yabancılaştırmak",
    "es_anlamlilar": "Separate, estrange"
  },
  {
    "ingilizce": "Acknowledge",
    "turkce": "Kabul etmek, itiraf etmek, tanımak",
    "es_anlamlilar": "Recognize, accept, admit, confess"
  },
  {
    "ingilizce": "Apt to",
    "turkce": "Eğilimli olmak, eğiliminde olmak",
    "es_anlamlilar": "Likely, prone to, liable to, inclined to"
  },
  {
    "ingilizce": "Aptitude",
    "turkce": "Yetenek",
    "es_anlamlilar": "Ability, talent, gift, knack, tendency"
  },
  {
    "ingilizce": "Bear",
    "turkce": "Dayanmak, tahammül etmek",
    "es_anlamlilar": "Stand, endure, tolerate"
  },
  {
    "ingilizce": "Cautious",
    "turkce": "Tedbirli, ihtiyatlı",
    "es_anlamlilar": "Careful, attentive"
  },
  {
    "ingilizce": "Cancel",
    "turkce": "İptal etmek",
    "es_anlamlilar": "Call off, annul, revoke, abandon"
  },
  {
    "ingilizce": "Rigorous",
    "turkce": "Sert, şiddetli",
    "es_anlamlilar": "Severe, harsh"
  },
  {
    "ingilizce": "Roughly",
    "turkce": "Yaklaşık olarak, kabaca, aşağı yukarı",
    "es_anlamlilar": "Approximately, nearly, almost, about, virtually"
  },
  {
    "ingilizce": "Sovereign",
    "turkce": "Hükmeden, egemen olan",
    "es_anlamlilar": "Ruling, reigning"
  },
  {
    "ingilizce": "Disrupt",
    "turkce": "Aksatmak, bozmak",
    "es_anlamlilar": "Interrupt, break, disturb, upset"
  },
  {
    "ingilizce": "Donate",
    "turkce": "Bağış yapmak",
    "es_anlamlilar": "Give, contribute"
  },
  {
    "ingilizce": "Confidential",
    "turkce": "Gizli",
    "es_anlamlilar": "Secret, intimate"
  },
  {
    "ingilizce": "Compatible with",
    "turkce": "Uyumlu",
    "es_anlamlilar": "Harmonious"
  },
  {
    "ingilizce": "Compile",
    "turkce": "Toplamak, biraraya getirmek",
    "es_anlamlilar": "Collect, gather, assemble"
  },
  {
    "ingilizce": "Interrogate",
    "turkce": "Sorgulamak",
    "es_anlamlilar": "Question"
  },
  {
    "ingilizce": "Interim",
    "turkce": "Geçici",
    "es_anlamlilar": "Provisional, temporary"
  },
  {
    "ingilizce": "Rash",
    "turkce": "Aceleci, düşüncesiz",
    "es_anlamlilar": "Hasty, reckless, thoughtless"
  },
  {
    "ingilizce": "Perceive",
    "turkce": "Algılamak",
    "es_anlamlilar": "See, notice"
  },
  {
    "ingilizce": "Peculiar",
    "turkce": "Tuhaf, acaip",
    "es_anlamlilar": "Strange, odd, weird"
  },
  {
    "ingilizce": "Overcome",
    "turkce": "Aşmak, üstesinden gelmek",
    "es_anlamlilar": "Conquer, surmount"
  },
  {
    "ingilizce": "Relish",
    "turkce": "Hoşlanmak, -den zevk almak",
    "es_anlamlilar": "Like, enjoy"
  },
  {
    "ingilizce": "Reversal",
    "turkce": "İptal, tersine çevirme",
    "es_anlamlilar": "Repeal, annulment"
  },
  {
    "ingilizce": "Merge",
    "turkce": "Birleşmek, birleştirmek, içine karışıp kaybolmak",
    "es_anlamlilar": "Unite, join"
  },
  {
    "ingilizce": "Miracle",
    "turkce": "Mucize",
    "es_anlamlilar": "Wonder, marvel"
  },
  {
    "ingilizce": "Prudent",
    "turkce": "Akıllı, tedbirli",
    "es_anlamlilar": "Wise, sensible, cautious"
  },
  {
    "ingilizce": "Persuade",
    "turkce": "İkna etmek, inandırmak",
    "es_anlamlilar": "Convince"
  },
  {
    "ingilizce": "Irritate",
    "turkce": "Kızdırmak",
    "es_anlamlilar": "Anger, annoy"
  },
  {
    "ingilizce": "Humble",
    "turkce": "Alçakgönüllü",
    "es_anlamlilar": "Modest"
  },
  {
    "ingilizce": "Dilemma",
    "turkce": "İkilem, çelişki",
    "es_anlamlilar": "Controversy"
  },
  {
    "ingilizce": "Evaluate",
    "turkce": "Değerlendirmek",
    "es_anlamlilar": "Assess, appraise"
  },
  {
    "ingilizce": "Evolve",
    "turkce": "Gelişmek, geliştirmek",
    "es_anlamlilar": "Develop"
  },
  {
    "ingilizce": "Fake",
    "turkce": "Sahte",
    "es_anlamlilar": "False, imitation"
  },
  {
    "ingilizce": "Slippery",
    "turkce": "Kaygan, hiç sağlam olmayan, kaypak, güvenilmez",
    "es_anlamlilar": "Icy, oily"
  },
  {
    "ingilizce": "Breed",
    "turkce": "Çiftleş(tir)mek",
    "es_anlamlilar": "Produce"
  },
  {
    "ingilizce": "Bribery",
    "turkce": "Rüşvet",
    "es_anlamlilar": "Corruption"
  },
  {
    "ingilizce": "Assemble",
    "turkce": "Biraraya gelmek, topla(n)mak",
    "es_anlamlilar": "Compile, come together, meet, convene"
  },
  {
    "ingilizce": "Acute",
    "turkce": "Keskin, ciddi, şiddetli",
    "es_anlamlilar": "Critical, serious, sharp, intense, severe"
  },
  {
    "ingilizce": "Adhere to",
    "turkce": "Bağlı olmak, uymak",
    "es_anlamlilar": "Stick to, be attached, comply with"
  },
  {
    "ingilizce": "Advance",
    "turkce": "İlerlemek, gelişim göstermek",
    "es_anlamlilar": "Proceed, progress, promote, improve, rise, increase"
  },
  {
    "ingilizce": "Allege",
    "turkce": "İddia etmek, suçlamak",
    "es_anlamlilar": "Claim, assert, charge"
  },
  {
    "ingilizce": "Census",
    "turkce": "Nüfus sayımı",
    "es_anlamlilar": "Counting, demography"
  },
  {
    "ingilizce": "Betray",
    "turkce": "İhanet etmek",
    "es_anlamlilar": "Deceive, to be disloyal"
  },
  {
    "ingilizce": "Boom",
    "turkce": "Artmak",
    "es_anlamlilar": "Boost, increase, expand, develop"
  },
  {
    "ingilizce": "Erect",
    "turkce": "Dikmek, inşa etmek",
    "es_anlamlilar": "Build up, put up"
  },
  {
    "ingilizce": "Elude",
    "turkce": "-den sıyrılmak, kurtulmak",
    "es_anlamlilar": "Escape, evade, avoid"
  },
  {
    "ingilizce": "Embezzle",
    "turkce": "Zimmetine geçirmek",
    "es_anlamlilar": "Steal"
  },
  {
    "ingilizce": "Elicit",
    "turkce": "Almak, elde etmek, ortaya çıkarmak",
    "es_anlamlilar": "Obtain, get, extract, evoke, draw out"
  },
  {
    "ingilizce": "Comprise",
    "turkce": "Oluşmak",
    "es_anlamlilar": "Consist of, be composed of, be made up of"
  },
  {
    "ingilizce": "Compromise",
    "turkce": "Uzlaşmak",
    "es_anlamlilar": "Agree on sth."
  },
  {
    "ingilizce": "Console",
    "turkce": "Teselli etmek, rahatlatmak",
    "es_anlamlilar": "Comfort"
  },
  {
    "ingilizce": "Constitute",
    "turkce": "Oluşturmak",
    "es_anlamlilar": "Compose, make up, form"
  },
  {
    "ingilizce": "Courageous",
    "turkce": "Cesur, cesaretli",
    "es_anlamlilar": "Brave, bold, daring"
  },
  {
    "ingilizce": "Depict",
    "turkce": "Göstermek, anlatmak",
    "es_anlamlilar": "Show, represent, draw"
  },
  {
    "ingilizce": "Impose",
    "turkce": "Empoze etmek",
    "es_anlamlilar": "Place on, lay upon"
  },
  {
    "ingilizce": "Inferior",
    "turkce": "Aşağı, alt derece",
    "es_anlamlilar": "Low, subordinate"
  },
  {
    "ingilizce": "Groundless",
    "turkce": "Yersiz, dayanaksız, asılsız",
    "es_anlamlilar": "Baseless, without basis"
  },
  {
    "ingilizce": "Intrude",
    "turkce": "İzinsiz girmek",
    "es_anlamlilar": "Infringe"
  },
  {
    "ingilizce": "Irrelevant",
    "turkce": "ilgisiz, alakasız",
    "es_anlamlilar": "Impertinent"
  },
  {
    "ingilizce": "Latent",
    "turkce": "Gizli",
    "es_anlamlilar": "Hidden, concealed"
  },
  {
    "ingilizce": "Intervene",
    "turkce": "Müdahale etmek, araya girmek",
    "es_anlamlilar": "Interfere"
  },
  {
    "ingilizce": "Interpret",
    "turkce": "Yorumlamak, tercüme yapmak",
    "es_anlamlilar": "Elucidate, explain"
  },
  {
    "ingilizce": "Interfere in/with",
    "turkce": "-e karışmak, -e müdahale etmek, -e burnunu sokmak",
    "es_anlamlilar": "Intervene in"
  },
  {
    "ingilizce": "Goods",
    "turkce": "Mal, mülk, eşya",
    "es_anlamlilar": "Commodity, property"
  },
  {
    "ingilizce": "Feature",
    "turkce": "Özellik",
    "es_anlamlilar": "Property, trait, characteristic"
  },
  {
    "ingilizce": "Illiterate",
    "turkce": "Cahil, okuma yazma bilmeyen",
    "es_anlamlilar": "Unable to read and write"
  },
  {
    "ingilizce": "Moderate",
    "turkce": "Ilımlı, ölçülü",
    "es_anlamlilar": "Mild, reasonable"
  },
  {
    "ingilizce": "Overriding",
    "turkce": "Önemli, ağır basan, başlıca",
    "es_anlamlilar": "Major, principal"
  },
  {
    "ingilizce": "Noteworthy",
    "turkce": "Kayda değer, önemli",
    "es_anlamlilar": "Remarkable, extraordinary"
  },
  {
    "ingilizce": "Obviate",
    "turkce": "Önlemek, gereksiz kılmak, savuşturmak",
    "es_anlamlilar": "Prevent, hamper"
  },
  {
    "ingilizce": "Density",
    "turkce": "Yoğunluk",
    "es_anlamlilar": "Solidity, massiveness"
  },
  {
    "ingilizce": "Cope with",
    "turkce": "Başa çıkmak, uğraşmak",
    "es_anlamlilar": "Deal with, manage, get by"
  },
  {
    "ingilizce": "Concurrent",
    "turkce": "Aynı anda, paralel",
    "es_anlamlilar": "Simultaneous"
  },
  {
    "ingilizce": "Clarify",
    "turkce": "Açıklamak, netleştirmek",
    "es_anlamlilar": "Make it clear, explain"
  },
  {
    "ingilizce": "Despair",
    "turkce": "Umudunu yitirmek",
    "es_anlamlilar": "Lose all hope"
  },
  {
    "ingilizce": "Endow",
    "turkce": "Bağışlamak, vermek",
    "es_anlamlilar": "Grant, provide, supply"
  },
  {
    "ingilizce": "Expectancy",
    "turkce": "Beklenti",
    "es_anlamlilar": "Expectation, hope, anticipation"
  },
  {
    "ingilizce": "Bloom",
    "turkce": "Çiçek açmak, ürün vermek",
    "es_anlamlilar": "Blossom, flower"
  },
  {
    "ingilizce": "Admonish",
    "turkce": "Azarlamak.",
    "es_anlamlilar": "Scold, reprimand, rebuke"
  },
  {
    "ingilizce": "Amnesty",
    "turkce": "Genel af",
    "es_anlamlilar": "Pardon"
  },
  {
    "ingilizce": "Abhor",
    "turkce": "Nefret etmek",
    "es_anlamlilar": "Hate, detest, disgust, loathe, dislike"
  },
  {
    "ingilizce": "Abolish",
    "turkce": "Yürürlükten kaldırmak, son vermek",
    "es_anlamlilar": "Put an end, eradicate, annul, destroy"
  },
  {
    "ingilizce": "Absolute",
    "turkce": "Kesin, mutlak",
    "es_anlamlilar": "Certain, definite"
  },
  {
    "ingilizce": "Bankrupt",
    "turkce": "İflas etmek",
    "es_anlamlilar": "Penniless, ruined"
  },
  {
    "ingilizce": "Avert",
    "turkce": "Önlemek, yönünü değiştirmek",
    "es_anlamlilar": "Avoid, prevent, turn away"
  },
  {
    "ingilizce": "Challenge",
    "turkce": "Meydan okumak",
    "es_anlamlilar": "Defy"
  },
  {
    "ingilizce": "Sewage",
    "turkce": "Lağım pisliği",
    "es_anlamlilar": "Manure"
  },
  {
    "ingilizce": "Eventual",
    "turkce": "Son, nihai",
    "es_anlamlilar": "Ultimate, final, consequent"
  },
  {
    "ingilizce": "Effect",
    "turkce": "Etki",
    "es_anlamlilar": "Influence, impact"
  },
  {
    "ingilizce": "Cultivate",
    "turkce": "Toprağı işlemek",
    "es_anlamlilar": "Refine, make it ready for crops"
  },
  {
    "ingilizce": "Demolish",
    "turkce": "Yıkmak, çökertmek",
    "es_anlamlilar": "Destroy, pull down, collapse"
  },
  {
    "ingilizce": "Defy",
    "turkce": "Meydan okumak, karşı gelmek, karşı koymak",
    "es_anlamlilar": "Challenge, dare, oppose"
  },
  {
    "ingilizce": "Object",
    "turkce": "İtiraz etmek",
    "es_anlamlilar": "Disapprove, protest"
  },
  {
    "ingilizce": "Maintain",
    "turkce": "Sürdürmek, korumak, beslemek, geçindirmek, iddia etmek",
    "es_anlamlilar": "Keep, continue, preserve"
  },
  {
    "ingilizce": "Relief",
    "turkce": "Rahatlık, ferahlama",
    "es_anlamlilar": "Comfort, aid"
  },
  {
    "ingilizce": "Reinforce",
    "turkce": "Güçlendirmek, takviye etmek, desteklemek, sağlamlaştırmak",
    "es_anlamlilar": "Strengthen, make stronger"
  },
  {
    "ingilizce": "Launch",
    "turkce": "Başla(t)mak, fırlatmak",
    "es_anlamlilar": "Start, begin, set off"
  },
  {
    "ingilizce": "Imply",
    "turkce": "İma etmek",
    "es_anlamlilar": "Say indirectly, hint"
  },
  {
    "ingilizce": "Favorable",
    "turkce": "Elverişli, uygun",
    "es_anlamlilar": "Suitable, approving"
  },
  {
    "ingilizce": "Provisional",
    "turkce": "Geçici, eğreti, nihai olmayan",
    "es_anlamlilar": "Interim, temporary"
  },
  {
    "ingilizce": "Subtle",
    "turkce": "Hassas, ince, kolay fark edilmeyen",
    "es_anlamlilar": "Delicate, indirect"
  },
  {
    "ingilizce": "Succumb",
    "turkce": "Boyun eğmek, yenik düşmek",
    "es_anlamlilar": "Yield in, give in"
  },
  {
    "ingilizce": "Summit",
    "turkce": "Zirve",
    "es_anlamlilar": "Zenith, top, peak"
  },
  {
    "ingilizce": "Interval",
    "turkce": "Ara",
    "es_anlamlilar": "Break, gap"
  },
  {
    "ingilizce": "Staggering",
    "turkce": "Şaşırtıcı, hayret veren, yavaş ilerleyen",
    "es_anlamlilar": "Astounding, surprising, sluggish"
  },
  {
    "ingilizce": "Stagnant",
    "turkce": "Durgun, hareketsiz",
    "es_anlamlilar": "Sluggish, inactive"
  },
  {
    "ingilizce": "Implement",
    "turkce": "Uygulamak",
    "es_anlamlilar": "Carry out, execute"
  },
  {
    "ingilizce": "Measure",
    "turkce": "Önlem, ölçü, miktar, ölçüm",
    "es_anlamlilar": "Step, precaution, action"
  },
  {
    "ingilizce": "Decadence",
    "turkce": "Çürüme, bozulma",
    "es_anlamlilar": "Corruption"
  },
  {
    "ingilizce": "Deserve",
    "turkce": "Haketmek, layık olmak",
    "es_anlamlilar": "Merit, to be entitled to"
  },
  {
    "ingilizce": "Familiar",
    "turkce": "Aşina, tanıdık",
    "es_anlamlilar": "Acquainted"
  },
  {
    "ingilizce": "Explore",
    "turkce": "Araştırmak, tetkik yapmak, keşfetmek",
    "es_anlamlilar": "Research, investigate, probe"
  },
  {
    "ingilizce": "Solitary",
    "turkce": "Yalnız",
    "es_anlamlilar": "Lonely, lonesome"
  },
  {
    "ingilizce": "Sceptical",
    "turkce": "Şüpheci, kuşkulu",
    "es_anlamlilar": "Doubtful, dubious, disbelieving"
  },
  {
    "ingilizce": "Unify",
    "turkce": "Birleştirmek",
    "es_anlamlilar": "Unite, join, combine"
  },
  {
    "ingilizce": "Urgent",
    "turkce": "Acil, önemli",
    "es_anlamlilar": "Immediate, imperative"
  },
  {
    "ingilizce": "Unbiased",
    "turkce": "Önyargısız",
    "es_anlamlilar": "Unprejudiced, fair, impartial"
  },
  {
    "ingilizce": "Terrain",
    "turkce": "Bölge, arazi",
    "es_anlamlilar": "Ground, territory"
  },
  {
    "ingilizce": "Tenet",
    "turkce": "Görüş, ilke, inanç",
    "es_anlamlilar": "Belief, opinion"
  },
  {
    "ingilizce": "Accumulate",
    "turkce": "Birik(tir)mek",
    "es_anlamlilar": "Gather, collect, pile up, store"
  },
  {
    "ingilizce": "Cherish",
    "turkce": "Keyfini çıkartmak, değer vermek",
    "es_anlamlilar": "Value, relish, enjoy too much"
  },
  {
    "ingilizce": "Awkward",
    "turkce": "Beceriksiz, uğraşılması zor, zor",
    "es_anlamlilar": "Clumsy, uncomfortable, not easy to deal with"
  },
  {
    "ingilizce": "Assume",
    "turkce": "Varsaymak",
    "es_anlamlilar": "Presume, suppose, take for granted, postulate"
  },
  {
    "ingilizce": "Approve of",
    "turkce": "Onaylamak",
    "es_anlamlilar": "Support, endorse, back up, favor"
  },
  {
    "ingilizce": "Scrutinize",
    "turkce": "İncelemek, detaylı araştırmak",
    "es_anlamlilar": "Examine in detail"
  },
  {
    "ingilizce": "Sculpture",
    "turkce": "Heykel",
    "es_anlamlilar": "Statue"
  },
  {
    "ingilizce": "Revival",
    "turkce": "Canlandırma, hayat verme",
    "es_anlamlilar": "Renewal, restoration"
  },
  {
    "ingilizce": "Eject",
    "turkce": "Çıkartmak",
    "es_anlamlilar": "Force out, evict"
  },
  {
    "ingilizce": "Elaborate",
    "turkce": "Ayrıntılı, karmaşık, özenli",
    "es_anlamlilar": "Detailed, complicated, intricate"
  },
  {
    "ingilizce": "Elevate",
    "turkce": "Yükseltmek",
    "es_anlamlilar": "Raise, heighten, lift up"
  },
  {
    "ingilizce": "Confine to",
    "turkce": "Sınırlamak",
    "es_anlamlilar": "Limit, restrict"
  },
  {
    "ingilizce": "Concrete",
    "turkce": "Somut, elle tutulur, beton",
    "es_anlamlilar": "Tangible, real"
  },
  {
    "ingilizce": "Resort to",
    "turkce": "(Son çare olarak) -e başvurmak",
    "es_anlamlilar": "Turn to, adopt"
  },
  {
    "ingilizce": "Overlook",
    "turkce": "Gözardı etmek, göz yummak, dikkate almamak, bakmak",
    "es_anlamlilar": "Ignore, disregard"
  },
  {
    "ingilizce": "Induce",
    "turkce": "İkna etmek, neden olmak, tetiklemek",
    "es_anlamlilar": "Persuade, tempt, bring about, encourage"
  },
  {
    "ingilizce": "Intense",
    "turkce": "Yoğun",
    "es_anlamlilar": "Extreme, intensified"
  },
  {
    "ingilizce": "Glorious",
    "turkce": "Şanlı, parlak",
    "es_anlamlilar": "Splendid, brilliant, dazzling"
  },
  {
    "ingilizce": "Interfere in/with",
    "turkce": "-e engel olmak",
    "es_anlamlilar": "Prevent, inhibit"
  },
  {
    "ingilizce": "Posterity",
    "turkce": "Gelecek nesil",
    "es_anlamlilar": "Future generation"
  },
  {
    "ingilizce": "Presume",
    "turkce": "Varsaymak, farzetmek, sanmak, tahmin etmek",
    "es_anlamlilar": "Think, assume"
  },
  {
    "ingilizce": "Property",
    "turkce": "Mal, mülk, emlak, özellik",
    "es_anlamlilar": "Possession, belonging, feature, characteristic"
  },
  {
    "ingilizce": "Pertain to",
    "turkce": "İle ilişkili olmak, -e ait olmak",
    "es_anlamlilar": "Relate to, bear upon"
  },
  {
    "ingilizce": "Strata",
    "turkce": "Tabaka",
    "es_anlamlilar": "Layer"
  },
  {
    "ingilizce": "Innovation",
    "turkce": "Yenilik",
    "es_anlamlilar": "Change, alteration, newness"
  },
  {
    "ingilizce": "Impotence",
    "turkce": "İktidarsızlık, güçsüzlük",
    "es_anlamlilar": "Inability, powerlessness"
  },
  {
    "ingilizce": "Persist in",
    "turkce": "Israr etmek, devam etmek",
    "es_anlamlilar": "Persevere, continue"
  },
  {
    "ingilizce": "Regardless of",
    "turkce": "-e bakılmaksızın, -i düşünmeden, -e aldırmadan",
    "es_anlamlilar": "Irrespective of"
  },
  {
    "ingilizce": "Reliability",
    "turkce": "Güvenilirlik",
    "es_anlamlilar": "Dependability, trustworthiness"
  },
  {
    "ingilizce": "Retention",
    "turkce": "Muhafaza etme, koruma",
    "es_anlamlilar": "Preservation, maintenance"
  },
  {
    "ingilizce": "Retaliate",
    "turkce": "Missillemede bulunmak, karşılık vermek",
    "es_anlamlilar": "Get revenge, strike back"
  },
  {
    "ingilizce": "Combustible",
    "turkce": "Yanıcı, yanan",
    "es_anlamlilar": "Burning"
  },
  {
    "ingilizce": "Corporate",
    "turkce": "Ticari, şirkete ait, ortak",
    "es_anlamlilar": "Commercial"
  },
  {
    "ingilizce": "Efficiency",
    "turkce": "Verimlilik, etkili olma",
    "es_anlamlilar": "Effectiveness"
  },
  {
    "ingilizce": "Discrepancy",
    "turkce": "Tutarsızlık, farklılık",
    "es_anlamlilar": "Difference, inconsistency"
  },
  {
    "ingilizce": "Expire",
    "turkce": "Süresi dolmak, sona ermek",
    "es_anlamlilar": "End, terminate"
  },
  {
    "ingilizce": "Exhilarate",
    "turkce": "Canlandırmak, keyif vermek",
    "es_anlamlilar": "Enliven, invigorate"
  },
  {
    "ingilizce": "Ruin",
    "turkce": "Yıkmak, mahvetmek",
    "es_anlamlilar": "Destroy, collapse"
  },
  {
    "ingilizce": "Appease",
    "turkce": "Yatıştırmak, teskin etmek",
    "es_anlamlilar": "Calm down, pacify, soothe, reconcile"
  },
  {
    "ingilizce": "Charity",
    "turkce": "Yardım, vakıf",
    "es_anlamlilar": "Assistance, help"
  },
  {
    "ingilizce": "Allow",
    "turkce": "İzin vermek, müsade etmek",
    "es_anlamlilar": "Let, permit, authorize"
  },
  {
    "ingilizce": "Anguish",
    "turkce": "Acı, ızdırap",
    "es_anlamlilar": "Pain, torture, torment, misery"
  },
  {
    "ingilizce": "Zenith",
    "turkce": "Zirve",
    "es_anlamlilar": "Peak, summit"
  },
  {
    "ingilizce": "Unification",
    "turkce": "Birleşme",
    "es_anlamlilar": "Union, merger"
  },
  {
    "ingilizce": "Vigorous",
    "turkce": "Güçlü, enerjik",
    "es_anlamlilar": "Powerful, energetic"
  },
  {
    "ingilizce": "Violate",
    "turkce": "Çiğnemek, ihlal etmek",
    "es_anlamlilar": "Break, disregard"
  },
  {
    "ingilizce": "Famine",
    "turkce": "Açlık",
    "es_anlamlilar": "Starvation, shortage of food"
  },
  {
    "ingilizce": "Deteriorate",
    "turkce": "Kötüleşmek, bozulmak",
    "es_anlamlilar": "Get worse"
  },
  {
    "ingilizce": "Durable",
    "turkce": "Dayanıklı",
    "es_anlamlilar": "Long-lasting, strong, enduring"
  },
  {
    "ingilizce": "Controversial",
    "turkce": "Çelişkili, tartışmalı",
    "es_anlamlilar": "Debatable, arguable"
  },
  {
    "ingilizce": "Dedicate to",
    "turkce": "Adamak",
    "es_anlamlilar": "Devote to"
  },
  {
    "ingilizce": "Mighty",
    "turkce": "Güçlü",
    "es_anlamlilar": "Powerful, strong"
  },
  {
    "ingilizce": "Rear",
    "turkce": "Büyütmek, yetiştirmek, kaldırmak, dikmek, inşa etmek",
    "es_anlamlilar": "Bring up, raise, care for"
  },
  {
    "ingilizce": "Repel",
    "turkce": "Geri püskürtmek, itmek, reddetmek, tiksindirmek",
    "es_anlamlilar": "Keep away, drive back"
  },
  {
    "ingilizce": "Obsess",
    "turkce": "Saplantı haline getirmek",
    "es_anlamlilar": "Preoccupy, recur in the mind"
  },
  {
    "ingilizce": "Insurmountable",
    "turkce": "Başa çıkılmaz, üstesinden gelinemez, çok büyük",
    "es_anlamlilar": "Formidable, overwhelming"
  },
  {
    "ingilizce": "Indulge",
    "turkce": "Kendini kaptırmak, müptela olmak",
    "es_anlamlilar": "Enjoy too much, give in too much"
  },
  {
    "ingilizce": "Inflict",
    "turkce": "(Kötü bir şeye) neden olmak, -e uğratmak",
    "es_anlamlilar": "Lead to, cause, bring about"
  },
  {
    "ingilizce": "Fraction",
    "turkce": "Küçük parça, kesir.",
    "es_anlamlilar": "Bit, tiny portion"
  },
  {
    "ingilizce": "Swindle",
    "turkce": "Dolandırmak",
    "es_anlamlilar": "Deceive, cheat"
  },
  {
    "ingilizce": "Sweat",
    "turkce": "Terlemek",
    "es_anlamlilar": "Perspire"
  },
  {
    "ingilizce": "Queue",
    "turkce": "Kuyruk, sıra",
    "es_anlamlilar": "Line, line up, stand in line"
  },
  {
    "ingilizce": "Justice",
    "turkce": "Adalet, hak, haklılık, doğruluk",
    "es_anlamlilar": "Fairness, equity"
  },
  {
    "ingilizce": "Inborn",
    "turkce": "Doğuştan gelen",
    "es_anlamlilar": "Innate"
  },
  {
    "ingilizce": "Idle",
    "turkce": "Başı boş, aylak, boşta, çalışmayan, tembel",
    "es_anlamlilar": "Unoccupied"
  },
  {
    "ingilizce": "Humiliate",
    "turkce": "Küçük düşürmek, aşağılamak",
    "es_anlamlilar": "Degrade, disgrace, look down on"
  },
  {
    "ingilizce": "Recreation",
    "turkce": "Eğlence",
    "es_anlamlilar": "Leisure, pastime, amusement"
  },
  {
    "ingilizce": "Mutual",
    "turkce": "Karşılıklı, çift taraflı",
    "es_anlamlilar": "Reciprocal, common"
  },
  {
    "ingilizce": "Scope",
    "turkce": "Kapsam",
    "es_anlamlilar": "Range"
  },
  {
    "ingilizce": "Merely",
    "turkce": "Yalnızca, sadece",
    "es_anlamlilar": "Only, solely, just"
  },
  {
    "ingilizce": "Lethal",
    "turkce": "Öldürücü, ölümcül",
    "es_anlamlilar": "Fatal, deadly, mortal"
  },
  {
    "ingilizce": "Demonstrate",
    "turkce": "Göstermek",
    "es_anlamlilar": "Show, display, indicate"
  },
  {
    "ingilizce": "Delineate",
    "turkce": "Tasvir etmek, betimlemek",
    "es_anlamlilar": "Describe, portray"
  },
  {
    "ingilizce": "Commend",
    "turkce": "Övmek",
    "es_anlamlilar": "Praise, extol, acclaim"
  },
  {
    "ingilizce": "Extravagant",
    "turkce": "Müsrif, aşırı harcama yapan, savurgan",
    "es_anlamlilar": "Excessive, lavish"
  },
  {
    "ingilizce": "Essential",
    "turkce": "Gerekli, vazgeçilemeyen",
    "es_anlamlilar": "Necessary, indispensable"
  },
  {
    "ingilizce": "Erupt",
    "turkce": "Patlamak, püskürtmek",
    "es_anlamlilar": "Explode, emit, break out"
  },
  {
    "ingilizce": "Endure",
    "turkce": "Dayanmak, katlanmak, tahammül etmek",
    "es_anlamlilar": "Bear, tolerate, put up with"
  },
  {
    "ingilizce": "Appoint",
    "turkce": "Atamak",
    "es_anlamlilar": "Assign, allot, direct"
  },
  {
    "ingilizce": "Appreciate",
    "turkce": "Takdir etmek, beğenmek, anlamak",
    "es_anlamlilar": "Admire, esteem, value highly, respect"
  },
  {
    "ingilizce": "Available",
    "turkce": "Mümkün, elde edilebilir",
    "es_anlamlilar": "Accessible, obtainable"
  },
  {
    "ingilizce": "Triumph",
    "turkce": "Zafer, başarı",
    "es_anlamlilar": "Victory, achievement, success"
  },
  {
    "ingilizce": "Rule",
    "turkce": "Yönetmek, hüküm sürmek, egemen olmak",
    "es_anlamlilar": "Govern, reign"
  },
  {
    "ingilizce": "Sophisticated",
    "turkce": "Görmüş geçirmiş, gelişmiş, karmaşık",
    "es_anlamlilar": "Cultivated, developed, complex"
  },
  {
    "ingilizce": "Expedition",
    "turkce": "Sefer",
    "es_anlamlilar": "Special journey, trip"
  },
  {
    "ingilizce": "Edible",
    "turkce": "Yenilebilir",
    "es_anlamlilar": "Can be eaten"
  },
  {
    "ingilizce": "Embody",
    "turkce": "Simgelemek, temsil etmek",
    "es_anlamlilar": "Symbolize, stand for, represent"
  },
  {
    "ingilizce": "Conquer",
    "turkce": "Fethetmek, işgal etmek",
    "es_anlamlilar": "Occupy"
  },
  {
    "ingilizce": "Consent",
    "turkce": "Razı olma, kabullenme, rıza",
    "es_anlamlilar": "Agreement, acceptance"
  },
  {
    "ingilizce": "Corrupt",
    "turkce": "Rüşvet alan, ahlaksız, bozuk, yozlaşmış",
    "es_anlamlilar": "Dishonest, immoral"
  },
  {
    "ingilizce": "Recession",
    "turkce": "(Ekonomik) durgunluk, gerileme, geri çekilme",
    "es_anlamlilar": "Decline, downturn, slump"
  },
  {
    "ingilizce": "Resent",
    "turkce": "Alınmak, gücenmek",
    "es_anlamlilar": "Feel angry, feel offended"
  },
  {
    "ingilizce": "Impress",
    "turkce": "Etkilemek",
    "es_anlamlilar": "Affect, influence, impact"
  },
  {
    "ingilizce": "Furnish",
    "turkce": "Döşemek, donatmak, sağlamak",
    "es_anlamlilar": "Provide, supply"
  },
  {
    "ingilizce": "Feasible",
    "turkce": "Mümkün, yapılabilir",
    "es_anlamlilar": "Possible"
  },
  {
    "ingilizce": "Steep",
    "turkce": "Dik, sarp",
    "es_anlamlilar": "Sharp, vertical"
  },
  {
    "ingilizce": "Subsequent",
    "turkce": "Devamındaki, bir sonraki, ardışık",
    "es_anlamlilar": "Following, later, successive"
  },
  {
    "ingilizce": "Rank",
    "turkce": "Mevki, makam, sıra",
    "es_anlamlilar": "Position, title, status"
  },
  {
    "ingilizce": "Prompt",
    "turkce": "Sevketmek, yöneltmek, neden olmak",
    "es_anlamlilar": "Cause, urge, motivate, encourage"
  },
  {
    "ingilizce": "Prove",
    "turkce": "Kanıtlamak",
    "es_anlamlilar": "Verify, confirm"
  },
  {
    "ingilizce": "Promising",
    "turkce": "Gelecek vadeden",
    "es_anlamlilar": "Hopeful, encouraging"
  },
  {
    "ingilizce": "Qualify",
    "turkce": "Hak kazanmak/kazandırmak, hafifletmek, nitelemek",
    "es_anlamlilar": "Certify, entitle, suit, fit, prepare"
  },
  {
    "ingilizce": "Tactful",
    "turkce": "Nazik, incelik içeren, nazik ve anlayışlı",
    "es_anlamlilar": "Sensitive, thoughtful"
  },
  {
    "ingilizce": "Sustain",
    "turkce": "Sürdürmek",
    "es_anlamlilar": "Maintain, keep"
  },
  {
    "ingilizce": "Take sth. into account",
    "turkce": "Gözönüne almak, hesaba katmak",
    "es_anlamlilar": "Consider"
  },
  {
    "ingilizce": "Prerequisite",
    "turkce": "Önkoşul, önceden gerekli olan şey",
    "es_anlamlilar": "Requirement, precondition"
  },
  {
    "ingilizce": "Sporadic",
    "turkce": "Aralıklı, arasıra meydana gelen",
    "es_anlamlilar": "Irregular, intermittent"
  },
  {
    "ingilizce": "Fairly",
    "turkce": "Adil şekilde",
    "es_anlamlilar": "Equitably, justly"
  },
  {
    "ingilizce": "Grief",
    "turkce": "Üzüntü, kader",
    "es_anlamlilar": "Sorrow, sadness"
  },
  {
    "ingilizce": "Malign",
    "turkce": "Kötü",
    "es_anlamlilar": "Bad, negative"
  },
  {
    "ingilizce": "Obey",
    "turkce": "Uymak",
    "es_anlamlilar": "Abide by, comply with"
  },
  {
    "ingilizce": "Loyal",
    "turkce": "Sadık",
    "es_anlamlilar": "Faithful"
  },
  {
    "ingilizce": "Condemn",
    "turkce": "Kınamak, yermek",
    "es_anlamlilar": "Denounce"
  },
  {
    "ingilizce": "Detriment",
    "turkce": "Zarar, ziyan",
    "es_anlamlilar": "Harm, damage"
  },
  {
    "ingilizce": "Empirical",
    "turkce": "Deneysel",
    "es_anlamlilar": "Experimental, empirical"
  },
  {
    "ingilizce": "Evidence",
    "turkce": "Kanıt, delil",
    "es_anlamlilar": "Proof"
  },
  {
    "ingilizce": "Sensible",
    "turkce": "Akıllı, mantıklı, aklı başında, akla uygun",
    "es_anlamlilar": "Reasonable, rational, logical"
  },
  {
    "ingilizce": "Wealth",
    "turkce": "Zenginlik, servet",
    "es_anlamlilar": "Prosperity, affluence"
  },
  {
    "ingilizce": "Torture",
    "turkce": "İşkence yapmak",
    "es_anlamlilar": "Torment, make suffer"
  },
  {
    "ingilizce": "Versatile",
    "turkce": "Çok yönlü",
    "es_anlamlilar": "Many-skilled, ingenious"
  },
  {
    "ingilizce": "Utility",
    "turkce": "Yararlılık, fayda",
    "es_anlamlilar": "Usefulness, effectiveness"
  },
  {
    "ingilizce": "Unprecedented",
    "turkce": "Daha önce görülmemiş, eşsiz",
    "es_anlamlilar": "Unique, unmatched"
  },
  {
    "ingilizce": "Vibrate",
    "turkce": "Titreşim yapmak",
    "es_anlamlilar": "Shake, tremble, oscillate"
  },
  {
    "ingilizce": "Vulnerable",
    "turkce": "Korunmasız, savunmasız",
    "es_anlamlilar": "Susceptible, defenseless, unprotected"
  },
  {
    "ingilizce": "Terminate",
    "turkce": "Sona er (dir)mek, bitirmek",
    "es_anlamlilar": "End, conclude"
  },
  {
    "ingilizce": "Warrant",
    "turkce": "Garanti etmek, haklı kılmak, gerektirmek",
    "es_anlamlilar": "Justify, necessitate, guarantee"
  },
  {
    "ingilizce": "Shrink",
    "turkce": "Küçülmek, çekmek, azalmak",
    "es_anlamlilar": "Diminish, become smaller"
  },
  {
    "ingilizce": "Bias",
    "turkce": "Önyargı",
    "es_anlamlilar": "Prejudice, prejudgment"
  },
  {
    "ingilizce": "Alter",
    "turkce": "Değiştirmek",
    "es_anlamlilar": "Change, modify, shift, convert"
  },
  {
    "ingilizce": "Adamant",
    "turkce": "Kararlı, vazgeçmeyen, inatçı",
    "es_anlamlilar": "Resolute, obstinate, unyielding"
  },
  {
    "ingilizce": "Abstain from",
    "turkce": "Çekimser kalmak, uzak durmak, -den kaçınmak",
    "es_anlamlilar": "Refrain from, avoid"
  },
  {
    "ingilizce": "Essence",
    "turkce": "Öz, esas",
    "es_anlamlilar": "Basic nature, essential quality"
  },
  {
    "ingilizce": "Drawback",
    "turkce": "Kusur, sakınca",
    "es_anlamlilar": "Pitfall, shortcoming, disadvantage, obstacle, defect"
  },
  {
    "ingilizce": "Commit",
    "turkce": "(suç) işlemek, emanet etmek, teslim etmek, -e karışmak",
    "es_anlamlilar": "Perform, assign, carry out"
  },
  {
    "ingilizce": "Cure",
    "turkce": "Tedavi etmek, iyileştirmek",
    "es_anlamlilar": "Treat, heal, find remedy"
  },
  {
    "ingilizce": "Medieval",
    "turkce": "Orta çağa ait",
    "es_anlamlilar": "Belonging to middle ages"
  },
  {
    "ingilizce": "Outnumber",
    "turkce": "Sayıca üstün olmak",
    "es_anlamlilar": "To be greater in number"
  },
  {
    "ingilizce": "Retard",
    "turkce": "Geciktirmek, yavaşlatmak",
    "es_anlamlilar": "Delay, impede, obstruct"
  },
  {
    "ingilizce": "Heritage",
    "turkce": "Miras",
    "es_anlamlilar": "Legacy, inheritance"
  },
  {
    "ingilizce": "Hardly",
    "turkce": "Hemen hemen hiç, neredeyse hiç, zar zor, güç bela",
    "es_anlamlilar": "Barely, scarcely, almost not"
  },
  {
    "ingilizce": "Spin",
    "turkce": "Dönmek",
    "es_anlamlilar": "Rotate, turn"
  },
  {
    "ingilizce": "Quota",
    "turkce": "Hisse, pay, kontenjan, kota",
    "es_anlamlilar": "limitation, restriction"
  },
  {
    "ingilizce": "Gradual",
    "turkce": "Aşamalı, kademeli, yavaş yavaş olan",
    "es_anlamlilar": "Step by step"
  },
  {
    "ingilizce": "Far-reaching",
    "turkce": "Geniş kapsamlı",
    "es_anlamlilar": "Extensive, broad, comprehensive"
  },
  {
    "ingilizce": "Inept",
    "turkce": "Uygunsuz, yakışıksız, yersiz, beceriksiz, hünersiz",
    "es_anlamlilar": "Inappropriate"
  },
  {
    "ingilizce": "Indict",
    "turkce": "Suçlamak",
    "es_anlamlilar": "Accuse, blame"
  },
  {
    "ingilizce": "Reassure",
    "turkce": "Güvence vermek, birinin şüphelerini gidermek",
    "es_anlamlilar": "Assure, confide"
  },
  {
    "ingilizce": "Persevere",
    "turkce": "Sebat etmek, ısrar etmek",
    "es_anlamlilar": "Persist, continue"
  },
  {
    "ingilizce": "Precipitation",
    "turkce": "Yağış",
    "es_anlamlilar": "Rainfall, snow"
  },
  {
    "ingilizce": "Obsolete",
    "turkce": "Modası geçmiş, eskimiş",
    "es_anlamlilar": "Old-fashioned, outdated"
  },
  {
    "ingilizce": "Notably",
    "turkce": "Özellikle",
    "es_anlamlilar": "Especially, particularly, in particular"
  },
  {
    "ingilizce": "Liability",
    "turkce": "Borç, sorumluluk, eğilim",
    "es_anlamlilar": "Responsibility, inclination, proneness, debt"
  },
  {
    "ingilizce": "Decline",
    "turkce": "Azalmak, düşmek, reddetmek",
    "es_anlamlilar": "Decrease, fall, refuse"
  },
  {
    "ingilizce": "Consensus",
    "turkce": "Fikir birliği, uzlaşma",
    "es_anlamlilar": "Agreement"
  },
  {
    "ingilizce": "Confront",
    "turkce": "Karşılaşmak",
    "es_anlamlilar": "Face up to, encounter, oppose"
  },
  {
    "ingilizce": "Determine",
    "turkce": "Karar vermek",
    "es_anlamlilar": "Decide, ascertain"
  },
  {
    "ingilizce": "Ensure",
    "turkce": "Temin etmek, sağlamak",
    "es_anlamlilar": "Make sure, secure, provide, safeguard"
  },
  {
    "ingilizce": "Abate",
    "turkce": "Azal(t)mak, dinmek",
    "es_anlamlilar": "Diminish, decrease, reduce, lessen, lower"
  },
  {
    "ingilizce": "Bargain",
    "turkce": "Pazarlık yapmak, görüşmek",
    "es_anlamlilar": "Negotiate"
  },
  {
    "ingilizce": "Sole",
    "turkce": "Tek, bir tane",
    "es_anlamlilar": "Only, unique"
  },
  {
    "ingilizce": "Soar",
    "turkce": "Çok yükselmek",
    "es_anlamlilar": "Rise, climb, mount"
  },
  {
    "ingilizce": "Tiny",
    "turkce": "Çok küçük",
    "es_anlamlilar": "Very small, petty"
  },
  {
    "ingilizce": "Thrilling",
    "turkce": "Heyecan verici",
    "es_anlamlilar": "Exciting"
  },
  {
    "ingilizce": "Vain",
    "turkce": "Değersiz, boş, yararsız",
    "es_anlamlilar": "Worthless, useless"
  },
  {
    "ingilizce": "Burden",
    "turkce": "Ağır yük (soyut)",
    "es_anlamlilar": "Load, strain"
  },
  {
    "ingilizce": "Assert",
    "turkce": "İleri sürmek, iddia etmek",
    "es_anlamlilar": "Put forward, claim, maintain"
  },
  {
    "ingilizce": "Emphasize",
    "turkce": "Vurgulamak",
    "es_anlamlilar": "Stress"
  },
  {
    "ingilizce": "Facilitate",
    "turkce": "Kolaylaştırmak",
    "es_anlamlilar": "Make it easy, ease"
  },
  {
    "ingilizce": "Extinct",
    "turkce": "Soyu tükenmiş, yok olmuş",
    "es_anlamlilar": "Vanished, died out"
  },
  {
    "ingilizce": "Descend",
    "turkce": "İnmek, alçalmak",
    "es_anlamlilar": "Drop, fall, go down"
  },
  {
    "ingilizce": "Deal with",
    "turkce": "Başetmek, ele almak",
    "es_anlamlilar": "Cope with, handle, tackle"
  },
  {
    "ingilizce": "Layer",
    "turkce": "Tabaka",
    "es_anlamlilar": "Stratum"
  },
  {
    "ingilizce": "Perspire",
    "turkce": "Terlemek",
    "es_anlamlilar": "Sweat"
  },
  {
    "ingilizce": "Miscellaneous",
    "turkce": "Çeşitli",
    "es_anlamlilar": "Various, diverse"
  },
  {
    "ingilizce": "Portray",
    "turkce": "Göstermek, sergilemek",
    "es_anlamlilar": "Represent, display"
  },
  {
    "ingilizce": "Pervade",
    "turkce": "Yayılmak, dağılmak, istila etmek, kaplamak, bürümek",
    "es_anlamlilar": "Spread, penetrate"
  },
  {
    "ingilizce": "Suspend",
    "turkce": "Askıya almak, ertelemek",
    "es_anlamlilar": "Hang, hang up, postpone"
  },
  {
    "ingilizce": "Species",
    "turkce": "Tür",
    "es_anlamlilar": "Type, kind, variety"
  },
  {
    "ingilizce": "Stick to",
    "turkce": "Bağlı kalmak, yapışık olmak",
    "es_anlamlilar": "Abide by, comply with, adhere to"
  },
  {
    "ingilizce": "Stun",
    "turkce": "Sersemletmek, şok etmek",
    "es_anlamlilar": "Shock, make unconscious"
  },
  {
    "ingilizce": "Strive",
    "turkce": "Çaba göstermek",
    "es_anlamlilar": "Try, attempt"
  },
  {
    "ingilizce": "Startle",
    "turkce": "Şaşırtmak, korkutmak",
    "es_anlamlilar": "Surprise, astonish, frighten"
  },
  {
    "ingilizce": "Kidnap",
    "turkce": "İnsan kaçırmak",
    "es_anlamlilar": "Abduct"
  },
  {
    "ingilizce": "Knack",
    "turkce": "Yetenek",
    "es_anlamlilar": "Ability, talent, gift, skill"
  },
  {
    "ingilizce": "Irrigate",
    "turkce": "Sulamak",
    "es_anlamlilar": "Water"
  },
  {
    "ingilizce": "Subversive",
    "turkce": "İsyankar",
    "es_anlamlilar": "Rebellious"
  },
  {
    "ingilizce": "Flourish",
    "turkce": "Gelişmek, büyümek, zenginleşmek",
    "es_anlamlilar": "Prosper, grow, thrive"
  },
  {
    "ingilizce": "Reciprocal",
    "turkce": "İşteş, karşılıklı, iki taraflı",
    "es_anlamlilar": "Mutual"
  },
  {
    "ingilizce": "Rehearsal",
    "turkce": "Deneme, prova",
    "es_anlamlilar": "Trial, preparation"
  },
  {
    "ingilizce": "Persecute",
    "turkce": "Kötü davranmak, zulmetmek, eziyet etmek",
    "es_anlamlilar": "Abuse, maltreat"
  },
  {
    "ingilizce": "Notion",
    "turkce": "Fikir",
    "es_anlamlilar": "Idea, concept"
  },
  {
    "ingilizce": "Mediocre",
    "turkce": "Orta, vasat",
    "es_anlamlilar": "Average"
  },
  {
    "ingilizce": "Denounce",
    "turkce": "Kınamak, kötü tarafları açığa vurmak, ihbar etmek",
    "es_anlamlilar": "Condemn"
  },
  {
    "ingilizce": "Collapse",
    "turkce": "Çökmek, yıkılmak, bayılmak",
    "es_anlamlilar": "Fall down"
  },
  {
    "ingilizce": "Drastic",
    "turkce": "Köklü, sert",
    "es_anlamlilar": "Radical, far-reaching, strict"
  },
  {
    "ingilizce": "Emancipated",
    "turkce": "Özgür, serbest",
    "es_anlamlilar": "Liberated, free"
  },
  {
    "ingilizce": "Escalate",
    "turkce": "Tırmanmak, artmak",
    "es_anlamlilar": "Increase, intensify"
  },
  {
    "ingilizce": "Bleak",
    "turkce": "Karamsar, kötü",
    "es_anlamlilar": "Hopeless, gloomy"
  },
  {
    "ingilizce": "Sack",
    "turkce": "Kovmak, işten çıkartmak",
    "es_anlamlilar": "Fire, dismiss"
  },
  {
    "ingilizce": "Foster",
    "turkce": "Teşvik etmek",
    "es_anlamlilar": "Encourage, nurture"
  },
  {
    "ingilizce": "Plummet",
    "turkce": "(Hızlıca ve aniden) düşmek, azalmak",
    "es_anlamlilar": "decline, decrease, drop down, precipitate"
  },
  {
    "ingilizce": "Substitution",
    "turkce": "Yerine başkasını koyma, ikame",
    "es_anlamlilar": "Exchange, change, replacement"
  },
  {
    "ingilizce": "Necessity",
    "turkce": "Gereklilik",
    "es_anlamlilar": "Requirement, requisite"
  },
  {
    "ingilizce": "Immense",
    "turkce": "Büyük, kocaman, muazzam",
    "es_anlamlilar": "Enormous, huge, vast, gigantic"
  },
  {
    "ingilizce": "Sustainable",
    "turkce": "Sürdürülebilir",
    "es_anlamlilar": "Continuous, unceasing"
  },
  {
    "ingilizce": "Considerably",
    "turkce": "Oldukça, önemli derecede",
    "es_anlamlilar": "Significantly, substantially, dramatically, enormously, remarkably"
  },
  {
    "ingilizce": "Pretend",
    "turkce": "İnandırmak, … izlemini/intibaını vermek",
    "es_anlamlilar": "Make believe, act, play"
  },
  {
    "ingilizce": "Expenditure",
    "turkce": "Masraf, gider",
    "es_anlamlilar": "Expense, spending, outgoings"
  },
  {
    "ingilizce": "Diversity",
    "turkce": "Çeşitlilik, farklılık",
    "es_anlamlilar": "difference, dissimilarity, variety"
  },
  {
    "ingilizce": "Prevent",
    "turkce": "Engellemek, önlemek",
    "es_anlamlilar": "Obstruct, hamper, hinder"
  },
  {
    "ingilizce": "Complementary",
    "turkce": "Tamamlayıcı, bütünleyici",
    "es_anlamlilar": "Integral, completing"
  },
  {
    "ingilizce": "Relatively",
    "turkce": "Nispeten, oldukça",
    "es_anlamlilar": "comparatively, somewhat"
  },
  {
    "ingilizce": "Convey",
    "turkce": "Taşımak, aktarmak, iletmek",
    "es_anlamlilar": "Conduct, transmit, carry"
  },
  {
    "ingilizce": "Tendency",
    "turkce": "Eğilim",
    "es_anlamlilar": "Inclination, propensity"
  },
  {
    "ingilizce": "Entitle",
    "turkce": "Hak kazandırmak, yetki vermek, ünvan vermek",
    "es_anlamlilar": "qualify, authorize, empower"
  },
  {
    "ingilizce": "Inconsistent",
    "turkce": "Tutarsız",
    "es_anlamlilar": "irregular, uneven, unstable, unsteady"
  },
  {
    "ingilizce": "Precisely",
    "turkce": "Kesin olarak",
    "es_anlamlilar": "exactly, absolutely"
  },
  {
    "ingilizce": "Weaken",
    "turkce": "Zayıflatmak, zayıf düşürmek",
    "es_anlamlilar": "mitigate, undermine, impoverish"
  },
  {
    "ingilizce": "Postpone",
    "turkce": "Ertelemek, geciktirmek",
    "es_anlamlilar": "delay, adjourn, postpone"
  },
  {
    "ingilizce": "Access",
    "turkce": "Erişim, giriş",
    "es_anlamlilar": "admission, admittance"
  },
  {
    "ingilizce": "Adversely",
    "turkce": "Ters, kötü şekilde",
    "es_anlamlilar": "Negatively, abnormally"
  },
  {
    "ingilizce": "Insight",
    "turkce": "Bir şeyin içyüzünü kavrama",
    "es_anlamlilar": "Understanding, perception, comprehension"
  },
  {
    "ingilizce": "Thoroughly",
    "turkce": "Tamamen, bütünüyle",
    "es_anlamlilar": "Completely, totally"
  },
  {
    "ingilizce": "Extract",
    "turkce": "Sökmek, alıp çıkartmak",
    "es_anlamlilar": "Draw/pull out, remove, withdraw"
  },
  {
    "ingilizce": "Abusively",
    "turkce": "Kabaca, fesatlıkla",
    "es_anlamlilar": "Offensively, in a rude manner"
  },
  {
    "ingilizce": "Undergo",
    "turkce": "Geçirmek, maruz kalmak, -e uğramak",
    "es_anlamlilar": "Experience, live/go through, be subjected to"
  },
  {
    "ingilizce": "Coincidentally",
    "turkce": "Tesadüfen, şans eseri olarak, aynı anda olan",
    "es_anlamlilar": "By chance, happening at the same time"
  },
  {
    "ingilizce": "Attainable",
    "turkce": "Erişilebilir, ulaşılabilir",
    "es_anlamlilar": "Obtainable, reachable"
  },
  {
    "ingilizce": "Regulate",
    "turkce": "Düzenlemek",
    "es_anlamlilar": "Adjust, set, fix, order, govern"
  },
  {
    "ingilizce": "Task",
    "turkce": "İş, görev",
    "es_anlamlilar": "Undertaking, duty, assignment"
  },
  {
    "ingilizce": "Supplementary",
    "turkce": "Ek, ilave, bütünleyici, tamamlayıcı",
    "es_anlamlilar": "Additional, subsidiary"
  },
  {
    "ingilizce": "Recklessly",
    "turkce": "Dikkatsizce, ulu orta",
    "es_anlamlilar": "Carelessly"
  },
  {
    "ingilizce": "Investment",
    "turkce": "Yatırım",
    "es_anlamlilar": "Asset, purchasing"
  },
  {
    "ingilizce": "Respectively",
    "turkce": "Ardı ardına, sırasıyla",
    "es_anlamlilar": "Consecutively, subsequently, successively"
  },
  {
    "ingilizce": "Owe",
    "turkce": "Borçlu olmak",
    "es_anlamlilar": "Hem yüzyıllardır burada olan hem de yeni göçmen tüm Amerikalı Müslümanlar bizi bütünleştirdiği için Muhammed Ali’ye teşekkür borçlular."
  },
  {
    "ingilizce": "Contribute to",
    "turkce": "Katkıda bulunmak, -e sebep olmak",
    "es_anlamlilar": "Aid, assist, provide, lead to"
  },
  {
    "ingilizce": "Component",
    "turkce": "Bileşen, unsur",
    "es_anlamlilar": "Constituent, element, factor, ingredient"
  },
  {
    "ingilizce": "Domestic",
    "turkce": "Yerli, iç, eve ait",
    "es_anlamlilar": "Native, indigenous, internal"
  },
  {
    "ingilizce": "Excessive",
    "turkce": "Aşırı",
    "es_anlamlilar": "Immoderate, disproportionate"
  },
  {
    "ingilizce": "Incorporate",
    "turkce": "İçermek, kapsamak, ihtiva etmek, -nın parçası haline getirmek, şirket kurmak",
    "es_anlamlilar": "Blend, integrate, cover"
  },
  {
    "ingilizce": "Reinstate",
    "turkce": "Tekrar yürürlüğe/işleme koymak, görevine iade etmek",
    "es_anlamlilar": "Reestablish, restore"
  }
]
