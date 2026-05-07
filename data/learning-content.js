const learningMethods = [
    {
        id: "active-recall",
        title: "Aktív Felidézés",
        description: "A passzív olvasás helyett kényszerítsd az agyad a válaszadásra!",
        pros: "Hosszú távú memória, mélyebb megértés, azonnali visszajelzés a tudásról.",
        cons: "Sokkal fárasztóbb, mint az újraolvasás; időigényes a kártyák elkészítése.",
        learningText: "Az aktív felidézés lényege, hogy nem csak olvasod az anyagot, hanem kérdéseket teszel fel magadnak. Amikor megpróbálsz emlékezni egy válaszra segédlet nélkül, az agyadban megerősödnek a szinapszisok, így az információ sokkal tartósabban rögzül.",
        demoContent: [
            { q: "Melyik szervünk felelős a vér oxigénszállításáért?", a: "A szív pumpálja, de a tüdőben dúsul oxigénnel (vörösvértestek)." },
            { q: "Ki volt az első magyar király?", a: "Szent István." }
        ],
        software: "Anki, Quizlet, Brainscape"
    },
    {
        id: "pomodoro",
        title: "Pomodoro Technika",
        description: "Szakaszos tanulás: 25 perc fókusz, 5 perc szünet.",
        pros: "Legyőzi a halogatást, segít fenntartani a fókuszt, megelőzi a kiégést.",
        cons: "A merev időzítő megzavarhatja a 'flow' élményt, ha épp benne vagy a munkában.",
        learningText: "A technika alapja a rövid, intenzív munkaszakaszok és a rendszeres pihenés váltakozása. Egy 'pomodoro' általában 25 perc, amit 5 perc szünet követ. Négy szakasz után tarts egy hosszabb, 15-30 perces szünetet!",
        demoContent: "Indíts el egy rövidített (10 másodperces) demó időzítőt!",
        software: "Forest, Focus To-Do, Pomofocus (web)"
    },
    {
        id: "feynman",
        title: "Feynman-technika",
        description: "Tanulás tanítás útján: magyarázd el egyszerűen!",
        pros: "Feltárja a tudásbeli réseket, segít a komplex összefüggések megértésében.",
        cons: "Nehéz lehet egyedül csinálni (segítség nélkül nehéz látni, hol hibázol).",
        learningText: "Válassz egy témát, és próbáld meg elmagyarázni úgy, mintha egy 8 éves gyereknek beszélnél. Ha elakadsz vagy szakkifejezéseket kell használnod a magyarázathoz, akkor ott még nem érted elég mélyen az anyagot.",
        demoContent: {
            topic: "A gravitáció",
            simpleExplanation: "Olyan, mint egy láthatatlan mágnes, ami mindent a föld felé húz."
        },
        software: "Notion, Google Docs, vagy egy egyszerű fehér tábla."
    },
    {
        id: "mindmap",
        title: "Elmetérkép (Mind Map)",
        description: "Vizuális kapcsolatok építése a fogalmak között.",
        pros: "Nagyszerű a vizuális típusoknak, segít átlátni a nagy összefüggéseket.",
        cons: "Könnyű elveszni a részletekben és a díszítésben a tartalom helyett.",
        learningText: "Az elmetérkép egy központi fogalomból indul ki, amiből ágak ágaznak el a kapcsolódó gondolatok felé. Ez hasonlít az agyunk természetes működéséhez, ahol az információk asszociációk útján kapcsolódnak egymáshoz.",
        demoContent: ["Központ: Biológia", "Ág 1: Állatok", "Ág 2: Növények", "Ág 3: Gombák"],
        software: "MindMeister, Miro, XMind"
    },
    {
        id: "sq3r",
        title: "SQ3R Módszer",
        description: "Strukturált szövegfeldolgozás: Survey, Question, Read, Recite, Review.",
        pros: "Nagyon hatékony nehéz tankönyvi szövegeknél, mély megértést ad.",
        cons: "Nagyon lassú módszer, nem alkalmas gyors áttekintésre.",
        learningText: "A mozaikszó lépései: 1. Átfutás (címek, képek), 2. Kérdésfeltevés (miről szólhat?), 3. Olvasás, 4. Felmondás (saját szavakkal), 5. Ellenőrzés (visszalapozás).",
        demoContent: "Próbáld ki a lépéseket ezen a rövid szövegen!",
        software: "Obsidian, Evernote"
    }
];