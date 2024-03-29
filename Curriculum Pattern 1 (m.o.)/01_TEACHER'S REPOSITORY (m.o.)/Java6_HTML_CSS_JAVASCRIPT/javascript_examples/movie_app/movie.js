let movies = [
  {
    id: 1,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    name: "Under the Dome",
    country: "United States",
    rating: 6.5,
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    premiered: "2013-06-24",
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
  },
  {
    id: 2,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    country: "United States",
    rating: 8.8,
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    premiered: "2011-09-22",
    url: "https://www.tvmaze.com/shows/2/person-of-interest",
  },
  {
    id: 3,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
    name: "Bitten",
    country: "Canada",
    rating: 7.5,
    summary:
      '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>',
    premiered: "2014-01-11",
    url: "https://www.tvmaze.com/shows/3/bitten",
  },
  {
    id: 4,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
    name: "Arrow",
    country: "United States",
    rating: 7.4,
    summary:
      "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
    premiered: "2012-10-10",
    url: "https://www.tvmaze.com/shows/4/arrow",
  },
  {
    id: 5,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/445/1114021.jpg",
    name: "True Detective",
    country: "United States",
    rating: 8.2,
    summary:
      "<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p><p><i><b>True Detective</b></i> is an American anthology crime drama television series created and written by Nic Pizzolatto.Â </p>",
    premiered: "2014-01-12",
    url: "https://www.tvmaze.com/shows/5/true-detective",
  },
  {
    id: 6,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/257/642675.jpg",
    name: "The 100",
    country: "United States",
    rating: 7.8,
    summary:
      "<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \"Ark\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>",
    premiered: "2014-03-19",
    url: "https://www.tvmaze.com/shows/6/the-100",
  },
  {
    id: 7,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 9,
        name: "Espionage",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg",
    name: "Homeland",
    country: "United States",
    rating: 8.2,
    summary:
      "<p>The winner of 6 Emmy Awards including Outstanding Drama Series, <b>Homeland</b> is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.</p>",
    premiered: "2011-10-02",
    url: "https://www.tvmaze.com/shows/7/homeland",
  },
  {
    id: 8,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 10,
        name: "Music",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg",
    name: "Glee",
    country: "United States",
    rating: 6.6,
    summary:
      "<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>",
    premiered: "2009-05-19",
    url: "https://www.tvmaze.com/shows/8/glee",
  },
  {
    id: 9,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg",
    name: "Revenge",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>This is not a story about forgiveness; <b>Revenge</b> is a show about retribution. Meet Emily Thorne, the newest resident of The Hamptons. When she was a little girl (and known as Amanda Clarke) her father, David Clarke, was framed for a horrific crime and subsequently sent to prison. While serving his time, the conspirators plotted and murdered David in order to prevent the truth from coming out. Emily is now back with a new identity and ready to take vengeance on the people that murdered her father and stole her childhood.</p>",
    premiered: "2011-09-21",
    url: "https://www.tvmaze.com/shows/9/revenge",
  },
  {
    id: 10,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg",
    name: "Grimm",
    country: "United States",
    rating: 8.4,
    summary:
      "<p><b>Grimm </b>is a drama series inspired by the classic Grimm Brothers' Fairy Tales. After Portland homicide detective Nick Burkhardt discovers he's descended from an elite line of criminal profilers known as \"Grimms\", he increasingly finds his responsibilities as a detective at odds with his new responsibilities as a Grimm.</p>",
    premiered: "2011-10-28",
    url: "https://www.tvmaze.com/shows/10/grimm",
  },
  {
    id: 11,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/189/474715.jpg",
    name: "Gotham",
    country: "United States",
    rating: 7.8,
    summary:
      "<p>The good. The evil. The beginning.</p><p>Everyone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them â€“ the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker?</p><p><b>Gotham </b>is an origin story of the great DC Comics Super-Villains and vigilantes, revealing an entirely new chapter that has never been told. It follows one cop's rise through a dangerously corrupt city teetering between good and evil, and chronicles the birth of one of the most popular super heroes of our time.</p>",
    premiered: "2014-09-22",
    url: "https://www.tvmaze.com/shows/11/gotham",
  },
  {
    id: 34,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/216/540157.jpg",
    name: "The Killing",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>The Killing</b> follows Seattle homicide detectives Stephen Holder and Sarah Linden and their work as detectives investigating murders. Sarah Linden takes cases very seriously and has issues keeping her work and family separate, as she pairs up with recovering addict Stephen Holder to solve dark murders.</p>",
    premiered: "2011-04-03",
    url: "https://www.tvmaze.com/shows/35/the-killing",
  },
  {
    id: 12,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/137.jpg",
    name: "Lost Girl",
    country: "Canada",
    rating: 8.1,
    summary:
      "<p><b>Lost Girl</b> follows supernatural seductress Bo, a Succubus who feeds on the sexual energy of humans. Growing up with human parents, Bo had no reason to believe she was anything other than the girl next door â€” until she drained her boyfriend to death in their first sexual encounter. Now she has hit the road alone and afraid. <br /> She discovers she is one of the Fae, creatures of legend and folklore, who pass as humans while feeding off them secretly and in different ways, as they have for millennia. Relieved yet horrified to find out that she is not alone, Bo decides to take the middle path between the humans and the Fae while embarking on a personal mission to unlock the secrets of her origin.</p><p>With the help of her human sidekick, Kenzi, and Dyson, a sexy police detective, Bo takes on a challenge every week helping a Fae or human client who comes to her to solve a mystery, or to right a wrong.</p>",
    premiered: "2010-09-12",
    url: "https://www.tvmaze.com/shows/12/lost-girl",
  },
  {
    id: 13,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/444/1112175.jpg",
    name: "The Flash",
    country: "United States",
    rating: 7.7,
    summary:
      '<p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash!</p>',
    premiered: "2014-10-07",
    url: "https://www.tvmaze.com/shows/13/the-flash",
  },
  {
    id: 14,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/184.jpg",
    name: "Continuum",
    country: "Canada",
    rating: 8.1,
    summary:
      "<p><b>Continuum </b>centers on the conflict between a group of rebels from the year 2077 who time-travel to Vancouver, BC, in 2012, and a police officer who accidentally accompanies them. In spite of being many years early, the rebel group decides to continue its violent campaign to stop corporations of the future from replacing governments, while the police officer endeavours to stop them without revealing to anyone that she and the rebels are from the future.</p>",
    premiered: "2012-05-27",
    url: "https://www.tvmaze.com/shows/14/continuum",
  },
  {
    id: 15,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/154.jpg",
    name: "Constantine",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>Based on the wildly popular comic book series \"Hellblazer\" from DC Comics, seasoned demon hunter and master of the occult John Constantine is armed with a ferocious knowledge of the dark arts and a wickedly naughty wit. He fights the good fight - or at least he did. With his soul already damned to hell, he's decided to abandon his campaign against evil until a series of events thrusts him back into the fray, and he'll do whatever it takes to protect the innocent. With the balance of good and evil on the lineâ€�, <b>Constantine </b>will use his skills to travel the country, find the supernatural terrors that threaten our world and send them back where they belong. After that, who knows... maybe there's hope for him and his soul after all.</p>",
    premiered: "2014-10-24",
    url: "https://www.tvmaze.com/shows/15/constantine",
  },
  {
    id: 16,
    genres: [
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/48/122260.jpg",
    name: "Penny Dreadful",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>Some of literature's most terrifying characters, including Dr. Frankenstein and his monster, Dorian Gray, and iconic figures from the novel Dracula are lurking in the darkest corners of Victorian London. They are joined by a core of original characters in a complex, frightening new narrative. <b>Penny Dreadful </b>is a psychological thriller filled with dark mystery and suspense, where personal demons from the past can be stronger than vampires, evil spirits and immortal beasts.</p>",
    premiered: "2014-05-11",
    url: "https://www.tvmaze.com/shows/16/penny-dreadful",
  },
  {
    id: 17,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 14,
        name: "Family",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058582.jpg",
    name: "The Amazing Race",
    country: "United States",
    rating: 7,
    summary:
      "<p>From athletes and actors to tattoo artists, social workers and musicians - a diverse mix of teams will need to utilize their street smarts and savvy know-how to compete in the race of their lifetime.</p>",
    premiered: "2001-09-05",
    url: "https://www.tvmaze.com/shows/18/the-amazing-race",
  },
  {
    id: 18,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/445/1114097.jpg",
    name: "Supernatural",
    country: "United States",
    rating: 8.4,
    summary:
      "<p>This haunting series follows the Winchester brothers as they crisscross the lonely and mysterious back roads of the country in their '67 Chevy Impala, hunting down every evil supernatural force they encounter along the way.</p>",
    premiered: "2005-09-13",
    url: "https://www.tvmaze.com/shows/19/supernatural",
  },
  {
    id: 19,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/444/1111710.jpg",
    name: "The Strain",
    country: "United States",
    rating: 7.4,
    summary:
      "<p><b>The Strain</b> is a high-concept thriller that tells the story of Dr. Ephraim Goodweather, the head of the Center for Disease Control Canary Team in New York City. He and his team are called upon to investigate a mysterious viral outbreak with hallmarks of an ancient and evil strain of vampirism. As the strain spreads, Goodweather, his team, and an assembly of everyday New Yorkers wage war for the fate of humanity itself.</p>",
    premiered: "2014-07-13",
    url: "https://www.tvmaze.com/shows/20/the-strain",
  },
  {
    id: 20,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg",
    name: "The Last Ship",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone and unaffected Navy destroyer, the USS Nathan James, must find a way to pull humanity from the brink of extinction.</p>",
    premiered: "2014-06-22",
    url: "https://www.tvmaze.com/shows/21/the-last-ship",
  },
  {
    id: 21,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/410/1026956.jpg",
    name: "True Blood",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>True Blood </b>is a horror/drama based on a series of novels called <i>The Southern American Vampires Mysteries</i>. It focuses on Sookie Stackhouse and her various encounters with vampires and other supernatural beings. The show is centred in the small town of Bon Temps in Louisiana. The show focuses heavily on the co-existence of humans with vampires. The show also touches on several other controversial issues involving equal rights, violence, discrimination and religion.</p>",
    premiered: "2008-09-07",
    url: "https://www.tvmaze.com/shows/22/true-blood",
  },
  {
    id: 35,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/126/316698.jpg",
    name: "Intruders",
    country: "United States",
    rating: 6.9,
    summary:
      "<p>A contemporary, chilling, paranormal tale set in the moody Pacific Northwest, the series spins a fascinating and complex web of drama. As strange, apparently unrelated events start happening, multiple story-lines - a missing wife, an assassin covering his crimes, a child on the run - begin to intertwine to reveal a conspiracy that will forever change our understanding of human nature.</p>",
    premiered: "2014-08-23",
    url: "https://www.tvmaze.com/shows/37/intruders",
  },
  {
    id: 69,
    genres: [
      {
        id: 10,
        name: "Music",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/420/1050100.jpg",
    name: "Dancing with the Stars",
    country: null,
    rating: 6.1,
    summary:
      "<p>The hit series in which celebrities perform choreographed dance routines that are judged by a panel of renowned ballroom experts</p>",
    premiered: "2005-06-01",
    url: "https://www.tvmaze.com/shows/71/dancing-with-the-stars",
  },
  {
    id: 22,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/73/183661.jpg",
    name: "Once Upon a Time in Wonderland",
    country: "United States",
    rating: 6.9,
    summary:
      "<p>In Victorian England, the young and beautiful Alice tells a tale of a strange new land that exists on the other side of a rabbit hole. An invisible cat, a hookah smoking caterpillar and playing-cards that talk are just some of the fantastic things she's seen during this impossible adventure. Surely this troubled girl must be insane, and her doctors aim to cure her with a treatment that will make her forget everything. Alice seems ready to put it all behind her, especially the painful memory of the genie she fell in love with and lost forever -- the handsome and mysterious Cyrus . But deep down Alice knows this world is real, and just in the nick of time the sardonic Knave of Hearts and the irrepressible White Rabbit arrive to save her from a doomed fate. Together the trio will take a tumble down the rabbit hole to this Wonderland where nothing is impossible.</p>",
    premiered: "2013-10-10",
    url: "https://www.tvmaze.com/shows/23/once-upon-a-time-in-wonderland",
  },
  {
    id: 23,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/213/532575.jpg",
    name: "Hawaii Five-0",
    country: "United States",
    rating: 7.6,
    summary:
      "<p><b>Hawaii Five-0</b> is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches. Detective Steve McGarrett, a decorated Naval officer-turned-cop, returned to Oahu to investigate his father's murder and stayed after Hawaii's former governor persuaded him to head up the new team: his rules, no red tape and full blanket authority to hunt down the biggest \"game\" in town. Joining McGarrett is Detective Danny \"Danno\" Williams, a relocated ex-New Jersey cop - a working man in paradise who prefers skyscrapers to the coastline - but who's committed to keeping the Islands safe for his young daughter; Chin Ho Kelly, an ex-Honolulu police detective and former protÃ©gÃ© of McGarrett's father who was wrongly accused of corruption; Dr. Max Bergman, the quirky coroner; Chin's cousin, Kono Kalakaua, a beautiful and fearless native; and Captain Lou Grover, who formerly headed Hawaii's SWAT unit. Joining them is Jerry Ortega, a former classmate of Chin's and the Island's local conspiracy theorist. The state's brash FIVE-0 unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.</p>",
    premiered: "2010-09-20",
    url: "https://www.tvmaze.com/shows/24/hawaii-five-0",
  },
  {
    id: 24,
    genres: [
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 12,
        name: "Supernatural",
      },
      {
        id: 15,
        name: "Anime",
      },
    ],
    language: "Japanese",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/178/446544.jpg",
    name: "Hellsing",
    country: "Japan",
    rating: 7.6,
    summary:
      "<p><b>Hellsing </b>is a 13-part anime based on the manga of the same name. The plot is significantly difficult to that of the the manga although the characters are the same. The show mainly focuses on the hellsing institute that houses the anti-hero named Alucard who swore loyalty to the Helsing family many years before. Alucard being the first ever vampire takes on a new apprentice named Sera's.</p>",
    premiered: "2001-10-10",
    url: "https://www.tvmaze.com/shows/25/hellsing",
  },
  {
    id: 25,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 15,
        name: "Anime",
      },
    ],
    language: "Japanese",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/178/446780.jpg",
    name: "Hellsing Ultimate",
    country: "Japan",
    rating: 7.8,
    summary:
      "<p><b>Hellsing Ultimate</b>, unlike the 13-part <i>Hellsing</i> series, follows the manga of the same name very closely. Alucard being the main protagonist and anti-hero/vampire. <i>Hellsing Ultimate</i> is a 10-part series of OVAs whereby Alucard turns Sera's into a vampire. The main focus of the plot being on an enemy neo-nazi group.</p>",
    premiered: "2006-02-10",
    url: "https://www.tvmaze.com/shows/26/hellsing-ultimate",
  },
  {
    id: 26,
    genres: [
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 13,
        name: "Fantasy",
      },
      {
        id: 15,
        name: "Anime",
      },
    ],
    language: "Japanese",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/396/991619.jpg",
    name: "Berserk",
    country: "Japan",
    rating: 8.3,
    summary:
      "<p><b>Berserk </b>is a 25-part anime set in a dark fantasy/horror environment whereby the series focuses on the main character guts; a lone swordman who later meets up with a group of mercenaries called the band of the hawk. The leader of this band holds a strange necklace called a behelit that will only lead to evil.</p>",
    premiered: "1997-10-07",
    url: "https://www.tvmaze.com/shows/27/berserk",
  },
  {
    id: 27,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/38/95017.jpg",
    name: "Californication",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>Californication </b>is a series based around the writer Hank Moody. He moves to California and suffers a writers block as well as many other family and personal issues. His drinking and generally unhealthy lifestyle interrupts his relationships with his long term lover Karen and his daughter Becca as he struggles with his manager Charlie Runkle.</p>",
    premiered: "2007-08-13",
    url: "https://www.tvmaze.com/shows/28/californication",
  },
  {
    id: 28,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 17,
        name: "History",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/286/715906.jpg",
    name: "Vikings",
    country: "Canada",
    rating: 8.6,
    summary:
      "<p><b>Vikings</b> transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.</p>",
    premiered: "2013-03-03",
    url: "https://www.tvmaze.com/shows/29/vikings",
  },
  {
    id: 29,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/427/1067521.jpg",
    name: "American Horror Story",
    country: "United States",
    rating: 7.7,
    summary:
      "<p><b>American Horror Story </b>is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.</p>",
    premiered: "2011-10-05",
    url: "https://www.tvmaze.com/shows/30/american-horror-story",
  },
  {
    id: 30,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/142/356776.jpg",
    name: "Marvel's Agents of S.H.I.E.L.D.",
    country: "United States",
    rating: 8,
    summary:
      "<p>Phil Coulson heads an elite team of fellow agents with the worldwide law-enforcement organization known as S.H.I.E.L.D. (Strategic Homeland Intervention Enforcement and Logistics Division), as they investigate strange occurrences around the globe. Its members -- each of whom brings a specialty to the group -- work with Coulson to protect those who cannot protect themselves from extraordinary and inconceivable threats.</p>",
    premiered: "2013-09-24",
    url: "https://www.tvmaze.com/shows/31/marvels-agents-of-shield",
  },
  {
    id: 31,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/267/669639.jpg",
    name: "Fargo",
    country: "United States",
    rating: 8.8,
    summary:
      '<p><b>Fargo </b>is a seasonal anthology crime drama with some dark comical elements, inspired by the film <i>Fargo</i> written by the Coen brothers. Each season follows a new case and new characters, all entrenched in the trademark humor, murder and "Minnesota nice" that has made the film an enduring classic.</p>',
    premiered: "2014-04-15",
    url: "https://www.tvmaze.com/shows/32/fargo",
  },
  {
    id: 32,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg",
    name: "Hemlock Grove",
    country: null,
    rating: 7,
    summary:
      "<p>Secrets are just a part of daily life in the small Pennsylvania town of <b>Hemlock Grove</b>, where the darkest evils hide in plain sight.</p>",
    premiered: "2013-04-19",
    url: "https://www.tvmaze.com/shows/33/hemlock-grove",
  },
  {
    id: 33,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/126/316697.jpg",
    name: "Helix",
    country: "United States",
    rating: 6.6,
    summary:
      "<p><b>Helix </b>is a science fiction thriller that focuses on a CDC expedition into the arctic. They go there to investigate the potential outbreak of a disease with no idea what they are getting themselves into. They encounter an almost zombie-like threat that could threaten mankind itself whilst the operator of the facility seems to know more than what he is saying.</p>",
    premiered: "2014-01-10",
    url: "https://www.tvmaze.com/shows/34/helix",
  },
  {
    id: 36,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/170/426759.jpg",
    name: "Z Nation",
    country: "United States",
    rating: 7.2,
    summary:
      "<p><b>Z Nation</b> starts three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood. Although the antibodies he carries are the world's last, best hope for a vaccine, he hides a dark secret that threatens them all. With humankind's survival at stake, the ragtag band embarks on a journey of survival across three thousand miles of rusted-out post-apocalyptic America.</p>",
    premiered: "2014-09-12",
    url: "https://www.tvmaze.com/shows/38/z-nation",
  },
  {
    id: 37,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/350.jpg",
    name: "Resurrection",
    country: "United States",
    rating: 7.1,
    summary:
      "<p>The people of Arcadia, Missouri are forever changed when their deceased loved ones suddenly start to reappear. An 8-year-old American boy wakes up alone in a rice paddy in a rural Chinese province with no idea how he got there. Details start to emerge when the boy, who calls himself Jacob, recalls that his hometown is Arcadia, and an Immigration agent, J. Martin Bellamy, takes him there. The home he claims as his own is occupied by a 60-year-old couple, Henry and Lucille Langston, who lost their son, Jacob, more than 30 years ago. While they look different, young Jacob recognizes them as his parents. Lucille is overjoyed at the seeming miracle of her son's reappearance. Henry is reluctant to accept that Jacob is back. Those closest to the family want answers, including Sheriff Fred Langston, whose wife Barbara drowned 30 years ago while trying to save Jacob, and Fred's daughter, Maggie, a local doctor. Pastor Tom Hale seeks a spiritual reason for what's happening in his community. When things take an even more shocking turn, Maggie's life-long friend, Elaine Richards, finds herself drawn into Arcadia's growing mystery. Bellamy, an outsider in the town, joins forces with Maggie to figure out why the unexplainable is happening in Arcadia. As their investigation plays out, Maggie learns some unsettling truths about her own past. Will they be able to solve the mystery of Arcadia before the rest of the world catches on to events there? And will they be able to protect Jacob from forces beyond their control?</p>",
    premiered: "2014-03-09",
    url: "https://www.tvmaze.com/shows/39/resurrection",
  },
  {
    id: 38,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 11,
        name: "Mystery",
      },
      {
        id: 15,
        name: "Anime",
      },
    ],
    language: "Japanese",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/403/1009233.jpg",
    name: "Death Note",
    country: "Japan",
    rating: 8.8,
    summary:
      "<p><b>Death Note </b>is an anime series based around a manga of the same name whereby a human finds a death god's notebook. Any person's name written in this notebook will die. The main character who finds this noteboook is Light Yagami who faces off against an unfaced character named L who tries to challenge him.</p>",
    premiered: "2006-10-03",
    url: "https://www.tvmaze.com/shows/40/death-note",
  },
  {
    id: 39,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/419/1049994.jpg",
    name: "Last Man Standing",
    country: "United States",
    rating: 7.8,
    summary:
      "<p><b>Last Man Standing</b> follows Mike Baxter, a married father of three girls, who tries to maintain his manliness, despite being surrounded by women.</p>",
    premiered: "2011-10-11",
    url: "https://www.tvmaze.com/shows/41/last-man-standing",
  },
  {
    id: 40,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 11,
        name: "Mystery",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/204166.jpg",
    name: "Sleepy Hollow",
    country: "United States",
    rating: 7.5,
    summary:
      "<p><b>Sleepy Hollow</b> is a thrilling mystery-adventure drama series spanning two and a half centuries, in which a resurrected Ichabod Crane pairs up with a present-day police lieutenant to save the enigmatic town of Sleepy Hollow--and the world--from unprecedented evil.</p>",
    premiered: "2013-09-16",
    url: "https://www.tvmaze.com/shows/42/sleepy-hollow",
  },
  {
    id: 41,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/436/1091444.jpg",
    name: "Outlander",
    country: "United States",
    rating: 8.1,
    summary:
      "<p><b>Outlander </b>follows the story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.</p><p>The <i>Outlander</i> series, adapted from Diana Gabaldon's international best-selling books, spans the genres of romance, science fiction, history and adventure into one epic tale.</p>",
    premiered: "2014-08-09",
    url: "https://www.tvmaze.com/shows/43/outlander",
  },
  {
    id: 42,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/128/322484.jpg",
    name: "Scorpion",
    country: "United States",
    rating: 7.3,
    summary:
      "<p><b>Scorpion</b>, inspired by a true story, is a high-octane drama about eccentric genius Walter O'Brien and his team of brilliant misfits who comprise the last line of defense against complex, high-tech threats of the modern age. As Homeland Security's new think tank, O'Brien's \"Scorpion\" team includes Toby Curtis an expert behaviorist who can read anyone; Happy Quinn, a mechanical prodigy; and Sylvester Dodd, a statistics guru. Pooling their extensive technological knowledge to solve mind-boggling predicaments amazes federal agent Cabe Gallo, who shares a harrowing history with O'Brien. However, while this socially awkward group is comfortable with each other's humor and quirks, life outside their circle confounds them, so they rely on Paige Dineen, who has a young, gifted son, to translate the world for them. At last, these nerdy masterminds have found the perfect job: a place where they can apply their exceptional brainpower to solve the nation's crises, while also helping each other learn how to fit in.</p>",
    premiered: "2014-09-22",
    url: "https://www.tvmaze.com/shows/44/scorpion",
  },
  {
    id: 43,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/280/701985.jpg",
    name: "NCIS: New Orleans",
    country: "United States",
    rating: 7.5,
    summary:
      '<p><b>NCIS: New Orleans </b>is a drama about the local field office that investigates criminal cases involving military personnel in The Big Easy, a city known for its music, entertainment and decadence. Leading the team is Special Agent Dwayne Pride, a.k.a. "King," a native of New Orleans who is driven by his need to do what is right. Working with Pride is Special Agent Christopher LaSalle, who plays hard but works harder and former ATF agent Sonja Percy, who is still adjusting to the team after years of solo undercover assignments. Supporting them is coroner Dr. Loretta Wade, who is as eccentric as she is smart; her brilliant, quirky Forensic Scientist, Sebastian Lund; and Investigative Computer Specialist Patton Plame, an animated and talented hacker. New to the team is Special Agent Tammy Gregorio, a tough, acerbic FBI agent with a mysterious past in New Orleans, who is sent from D.C. to investigate the NCIS team, but also work with Pride when high-risk cases threaten the city. This colorful city that harbors a dark side is a magnet for service personnel on leave, and when overindulgence is followed by trouble, Pride\'s team is at its best</p>',
    premiered: "2014-09-23",
    url: "https://www.tvmaze.com/shows/45/ncis-new-orleans",
  },
  {
    id: 44,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/383.jpg",
    name: "Forever",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>Doctor Henry Morgan, New York City's star medical examiner, has a secret. He doesn't just study the dead to solve criminal cases, he does it to solve the mystery that has eluded him for 200 years - the answer to his own inexplicable immortality. This long life has given Henry remarkable observation skills which impresses his new partner, Detective Jo Martinez. Each week, a new case and their budding friendship will reveal layers of Henry's long and colorful past. Only his best friend and confidant, Abe knows Henry's secret.</p>",
    premiered: "2014-09-22",
    url: "https://www.tvmaze.com/shows/46/forever",
  },
  {
    id: 45,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/392.jpg",
    name: "Witches of East End",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>Based on Melissa de la Cruz's best-selling novel, <b>Witches of East End</b> centers on the mysterious Beauchamp family who live in the secluded seaside town of East End. Free-spirited artist Joanna Beauchamp is the mother of wild-child bartender Freya and shy librarian Ingrid, who are both gifted -- and cursed -- with a magic birthright, of which they are unaware. Freya notices bizarre occurrences in her life when she inexplicably finds herself drawn to the troubled brother of her wealthy fiance. But it isn't until Joanna's estranged sister appears with a warning that could change the family's fate that the matriarch must reveal to her daughters that they are immortal witches with untapped powers, a revelation that turns their small-town life upside down.</p>",
    premiered: "2013-10-06",
    url: "https://www.tvmaze.com/shows/47/witches-of-east-end",
  },
  {
    id: 46,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/214/536175.jpg",
    name: "Madam Secretary",
    country: "United States",
    rating: 7.8,
    summary:
      "<p><b>Madam Secretary</b> follows Elizabeth McCord, the shrewd, determined, newly appointed Secretary of State who drives international diplomacy, battles office politics and circumvents protocol as she negotiates global and domestic issues, both at the White House and at home. A college professor and a brilliant former CIA analyst who left for ethical reasons, Elizabeth returns to public life at the request of the President following the suspicious death of her predecessor. The President values her apolitical leanings, her deep knowledge of the Middle East, her flair for languages and her ability to not just think outside the box, but to not even acknowledge there is a box.</p>",
    premiered: "2014-09-21",
    url: "https://www.tvmaze.com/shows/48/madam-secretary",
  },
  {
    id: 47,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/402/1007484.jpg",
    name: "Brooklyn Nine-Nine",
    country: "United States",
    rating: 8.1,
    summary:
      "<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job â€“ it's about the men and women behind the badge.</p>",
    premiered: "2013-09-17",
    url: "https://www.tvmaze.com/shows/49/brooklyn-nine-nine",
  },
  {
    id: 48,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/146/366444.jpg",
    name: "The Lottery",
    country: "United States",
    rating: 6.5,
    summary:
      "<p>Set within a dystopian future driven by a global fertility crisis, <b>The Lottery </b>reveals a world staring down the barrel of impending extinction as women have mysteriously stopped bearing children. After years of research, Dr. Alison Lennon and her team remarkably fertilize 100 embryos. However, her victory is short-lived when the Director of the U.S. Fertility Commission, Darius Hayes, takes government control of the lab and informs the President of the monumental scientific breakthrough. To determine which women will carry the prized embryos to term, Chief of Staff Vanessa Keller convinces the President to hold a national lottery and a battle over the control of the 100 embryos begins.</p>",
    premiered: "2014-07-20",
    url: "https://www.tvmaze.com/shows/50/the-lottery",
  },
  {
    id: 49,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 18,
        name: "Medical",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/417.jpg",
    name: "The Knick",
    country: "United States",
    rating: 8.4,
    summary:
      "<p>New York City, 1900: The Knickerbocker Hospital is home to groundbreaking surgeons, nurses and staff who push the boundaries of medicine in a time of astonishingly high mortality rates and zero antibiotics. The newly appointed leader of the surgery staff is the brilliant, arrogant renegade Dr. John Thackery, whose addiction to cocaine and opium is trumped only by his ambition for medical discovery and renown among his peers. Into the all-white staff and patient hospital comes the equally gifted Harvard graduate Dr. Algernon Edwards, who must fight for respect while trying to navigate the racially charged city. Trying to maintain its reputation for quality care while realizing a profit, the Knickerbocker makes an effort to attract wealthy clientele, while literally struggling to keep the lights on.</p>",
    premiered: "2014-08-08",
    url: "https://www.tvmaze.com/shows/51/the-knick",
  },
  {
    id: 50,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 19,
        name: "Legal",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/212/531512.jpg",
    name: "How to Get Away with Murder",
    country: "United States",
    rating: 7.5,
    summary:
      "<p>The brilliant, charismatic and seductive Professor Annalise Keating gets entangled with four law students from her class, <b>How to Get Away with Murder</b>. Little do they know that they will have to apply what they learned to real life, in this masterful, sexy, suspense-driven legal thriller.</p>",
    premiered: "2014-09-25",
    url: "https://www.tvmaze.com/shows/52/how-to-get-away-with-murder",
  },
  {
    id: 51,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 10,
        name: "Music",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/89/224913.jpg",
    name: "Nashville",
    country: "United States",
    rating: 7.3,
    summary:
      "<p><b>Nashville</b> is set against the backdrop of the city's music scene and follows Rayna Jaymes and Juliette Barnes. Both women face personal and professional challenges as they navigate their paths as artists and individuals. Surrounding them, and often complicating their lives, are their family, friends and, in some cases, lovers, as well as the up-and-coming performers and songwriters trying to get ahead in the business. Music City can mean so many things to different people. In Nashville, musicians and songwriters are at the heart of the storm driven by their own ambitions. Some are fueled by their creativity and passion for fame. Others struggle to cope with the pressures of success and are doing everything in their power to stay on top.</p>",
    premiered: "2012-10-10",
    url: "https://www.tvmaze.com/shows/53/nashville",
  },
  {
    id: 52,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/36/92018.jpg",
    name: "Legends",
    country: "United States",
    rating: 7.5,
    summary:
      "<p>Sean Bean stars in <b>Legends, </b>a suspense-filled drama based on the award-winning book by master spy novelist Robert Littell. Bean plays Martin Odum, an undercover agent working for the FBI's Deep Cover Operations (DCO) division. Martin has the uncanny ability to transform himself into a completely different person for each job. But he begins to question his own identity when a mysterious stranger suggests that Martin isn't the man he believes himself to be.</p>",
    premiered: "2014-08-13",
    url: "https://www.tvmaze.com/shows/54/legends",
  },
  {
    id: 53,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/441.jpg",
    name: "Red Band Society",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>What if a hospital was your high school, boarding school and summer camp rolled into one? What if it was the place where you fell in love for the first time and made friendships that lasted a lifetime? And what if it was all weirdly hilarious and the most fun you ever had in your entire life? This is the world of <b>Red Band Society</b>.</p>",
    premiered: "2014-09-17",
    url: "https://www.tvmaze.com/shows/55/red-band-society",
  },
  {
    id: 54,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/426/1065449.jpg",
    name: "Chicago P.D.",
    country: "United States",
    rating: 8.1,
    summary:
      "<p>District 21 of the Chicago Police Department is made up of two distinctly different groups. There are the uniformed cops who patrol the beat and go head to head with the city's street crimes. And there's the Intelligence Unit, the team that combats the city's major offenses - organized crime, drug trafficking, high profile murders and beyond. These are their stories.</p>",
    premiered: "2014-01-08",
    url: "https://www.tvmaze.com/shows/56/chicago-pd",
  },
  {
    id: 68,
    genres: [
      {
        id: 10,
        name: "Music",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1057625.jpg",
    name: "The Voice",
    country: "United States",
    rating: 6,
    summary:
      "<p><b>The Voice</b> is a reality singing competition show where the idea is to find new singing talent via a series of auditions.</p>",
    premiered: "2011-04-26",
    url: "https://www.tvmaze.com/shows/70/the-voice",
  },
  {
    id: 55,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/388/970329.jpg",
    name: "black-ish",
    country: "United States",
    rating: 6,
    summary:
      "<p>Andre 'Dre' Johnson has a great job, a beautiful wife, Rainbow, four kids, and a colonial home in the 'burbs. But has success brought too much assimilation for this black family? With a little help from his dad, Dre sets out to establish a sense of cultural identity for his family that honors their past while embracing the future.</p>",
    premiered: "2014-09-24",
    url: "https://www.tvmaze.com/shows/57/black-ish",
  },
  {
    id: 56,
    genres: [
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/145/364581.jpg",
    name: "New Girl",
    country: "United States",
    rating: 7.2,
    summary:
      "<p><b>New Girl</b> is a single-camera ensemble comedy starring Zooey Deschanel as Jess, an offbeat girl who - after a bad breakup - moves in with three single guys and essentially sets a bomb off in their lives.</p>",
    premiered: "2011-09-20",
    url: "https://www.tvmaze.com/shows/58/new-girl",
  },
  {
    id: 57,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/426/1065450.jpg",
    name: "Chicago Fire",
    country: "United States",
    rating: 8.1,
    summary:
      "<p>No job is more stressful, dangerous or exhilarating than those of the Firefighters, Rescue Squad and Paramedics of Chicago Firehouse 51. These are the courageous men and women who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death. These are their stories.</p>",
    premiered: "2012-10-10",
    url: "https://www.tvmaze.com/shows/59/chicago-fire",
  },
  {
    id: 58,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/421/1053458.jpg",
    name: "NCIS",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>NCIS</b> (Naval Criminal Investigative Service) is more than just an action drama. With liberal doses of humor, it's a show that focuses on the sometimes complex and always amusing dynamics of a team forced to work together in high-stress situations. Leroy Jethro Gibbs, a former Marine gunnery sergeant, whose skills as an investigator are unmatched, leads this troupe of colorful personalities. Rounding out the team are Anthony DiNozzo, an ex-homicide detective whose instincts in the field are unparalleled and whose quick wit and humorous take on life make him a team favorite; the youthful and energetic forensic specialist Abby Sciuto, a talented scientist whose sharp mind matches her Goth style and eclectic tastes; Caitlin Todd, an ex-Secret Service Agent; and Timothy McGee, an MIT graduate whose brilliance with computers far overshadows his insecurities in the field; Assisting the team is medical examiner Dr. Donald \"Ducky\" Mallard, who knows it all because he's seen it all, and he's not afraid to let you know. From murder and espionage to terrorism and stolen submarines, these special agents travel the globe to investigate all crimes with Navy or Marine Corps ties.</p>",
    premiered: "2003-09-23",
    url: "https://www.tvmaze.com/shows/60/ncis",
  },
  {
    id: 59,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/53/132716.jpg",
    name: "Orphan Black",
    country: "Canada",
    rating: 8.6,
    summary:
      '<p><b>Orphan Black</b> is about Sarah, an outsider and orphan whose life changes dramatically after witnessing the suicide of a woman, "Beth", who looks just like her. Sarah takes her identity, her boyfriend and her money. But instead of solving her problems, the street-smart chameleon is thrust headlong into a kaleidoscopic mystery. She makes the dizzying discovery that she and the dead woman are clones... but are they the only ones? Sarah quickly finds herself caught in the middle of a deadly conspiracy, racing to find answers.</p>',
    premiered: "2013-03-30",
    url: "https://www.tvmaze.com/shows/61/orphan-black",
  },
  {
    id: 60,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/156/391233.jpg",
    name: "The Originals",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>The Originals</b> is a spin-off show from the supernatural drama <i>The Vampire Diaries</i>. It is based in the city of New Orleans where the originals represent the original vampires. The show is primarily based around conflict between vampires, werewolves and witches in the city.</p>",
    premiered: "2013-10-03",
    url: "https://www.tvmaze.com/shows/62/the-originals",
  },
  {
    id: 61,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/88/220908.jpg",
    name: "The Vampire Diaries",
    country: "United States",
    rating: 8,
    summary:
      "<p><b>The Vampire Diaries</b> is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire.</p><p>Based on a novel series by L.J. Smith.</p>",
    premiered: "2009-09-10",
    url: "https://www.tvmaze.com/shows/63/the-vampire-diaries",
  },
  {
    id: 62,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/275/688620.jpg",
    name: "Utopia",
    country: "United Kingdom",
    rating: 8.5,
    summary:
      "<p><b>Utopia</b> based initially around a small group of people who find a rare manuscript of the same name. This leads the group to be targeted by a large organisation with little knowledge of the manuscript's relevance or importance.</p>",
    premiered: "2013-01-15",
    url: "https://www.tvmaze.com/shows/64/utopia",
  },
  {
    id: 63,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 18,
        name: "Medical",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/80/201197.jpg",
    name: "Bones",
    country: "United States",
    rating: 8.2,
    summary:
      '<p>F.B.I. Agent Seeley Booth is teamed up with forensic anthropologist Dr. Temperance "Bones" Brennan to solve some of the most baffling and bizarre crimes ever. Booth depends on clues from the living, witnesses and suspects, while Brennan gathers evidence from the dead, relying on her uncanny ability to read clues left behind in the bones of the victims.</p>',
    premiered: "2005-09-13",
    url: "https://www.tvmaze.com/shows/65/bones",
  },
  {
    id: 64,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg",
    name: "The Big Bang Theory",
    country: "United States",
    rating: 8,
    summary:
      '<p><b>The Big Bang Theory</b> is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>',
    premiered: "2007-09-24",
    url: "https://www.tvmaze.com/shows/66/the-big-bang-theory",
  },
  {
    id: 65,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 18,
        name: "Medical",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061065.jpg",
    name: "Grey's Anatomy",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>The doctors of Grey Sloan Memorial Hospital deal with life-or-death consequences on a daily basis -- it's in one another that they find comfort, friendship and, at times, more than friendship. Together they're discovering that neither medicine nor relationships can be defined in black and white. Real life only comes in shades of grey.</p>",
    premiered: "2005-03-27",
    url: "https://www.tvmaze.com/shows/67/greys-anatomy",
  },
  {
    id: 66,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/13/34761.jpg",
    name: "Castle",
    country: "United States",
    rating: 8.2,
    summary:
      "<p><b>Castle</b> follows Rick Castle who is one of the world's most successful crime authors. But when his rock star lifestyle isn't enough, this bad boy goes looking for new trouble and finds it working with smart, beautiful Detective Kate Beckett. Inspired by her professional record and intrigued by her buttoned-up personality, Castle's found the model for his bold new character whether she likes it or not. Now with the mayor's permission, Castle is helping solve crime with his own twist.</p>",
    premiered: "2009-03-09",
    url: "https://www.tvmaze.com/shows/68/castle",
  },
  {
    id: 67,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/444/1112124.jpg",
    name: "The Blacklist",
    country: "United States",
    rating: 8.1,
    summary:
      "<p><b>The Blacklist</b> is a crime drama involving a former government agent who turned into a high-profile criminal turning himself in to the FBI offering to help catch criminals.</p>",
    premiered: "2013-09-23",
    url: "https://www.tvmaze.com/shows/69/the-blacklist",
  },
  {
    id: 70,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/444/1110924.jpg",
    name: "NCIS: Los Angeles",
    country: "United States",
    rating: 7.8,
    summary:
      "<p><b>NCIS: Los Angeles</b> is a drama about the high-stakes world of a division of NCIS that is charged with apprehending dangerous and elusive criminals that pose a threat to the nation's security. By assuming false identities and utilizing the most advanced technology, this team of highly-trained agents goes deep undercover, putting their lives on the line in the field to bring down their targets.</p>",
    premiered: "2009-09-22",
    url: "https://www.tvmaze.com/shows/72/ncis-los-angeles",
  },
  {
    id: 71,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061900.jpg",
    name: "The Walking Dead",
    country: null,
    rating: 8,
    summary:
      "<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>",
    premiered: "2010-10-31",
    url: "https://www.tvmaze.com/shows/73/the-walking-dead",
  },
  {
    id: 72,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 20,
        name: "Western",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/526.jpg",
    name: "Hell on Wheels",
    country: "United States",
    rating: 8.3,
    summary:
      '<p><b>Hell on Wheels</b> is an American Western television series about the construction of the First Transcontinental Railroad across the United States. The series follows the Union Pacific Railroad and its surveyors, laborers, prostitutes, mercenaries, and others who lived, worked and died in the mobile encampment called "Hell on Wheels" that followed the railhead west across the Great Plains. In particular, the story focuses on Cullen Bohannon, a former Confederate soldier who, while working as foreman and chief engineer on the railroad, initially attempts to track down the Union soldiers who murdered his wife and young son during the American Civil War.</p>',
    premiered: "2011-11-06",
    url: "https://www.tvmaze.com/shows/74/hell-on-wheels",
  },
  {
    id: 73,
    genres: [
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
      {
        id: 18,
        name: "Medical",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/298/745731.jpg",
    name: "The Mindy Project",
    country: null,
    rating: 7.1,
    summary:
      "<p><b>The Mindy Project</b> is a single-camera comedy series which follows a skilled OB/GYN navigating the tricky waters of both her personal and professional life.</p>",
    premiered: "2012-09-25",
    url: "https://www.tvmaze.com/shows/75/the-mindy-project",
  },
  {
    id: 74,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/537.jpg",
    name: "Sons of Anarchy",
    country: "United States",
    rating: 8.4,
    summary:
      '<p><b>Sons of Anarchy</b> is an American television drama series created by Kurt Sutter, about the lives of a close-knit outlaw motorcycle club operating in Charming, a fictional town in California\'s Central Valley. The show centers on protagonist Jackson "Jax" Teller (Charlie Hunnam), initially the vice president of the club, who begins questioning the club and himself.</p>',
    premiered: "2008-09-03",
    url: "https://www.tvmaze.com/shows/76/sons-of-anarchy",
  },
  {
    id: 75,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/562.jpg",
    name: "The Middle",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>Forget about athletes, movie stars and politicians. Parents are the real heroes - but we think Frankie Heck, must be some kind of superhero. A loving wife and mother of three, she's middle class in the middle of the country and is rapidly approaching middle age.</p><p>Frankie and her husband, Mike, have lived in Orson, Indiana, their whole lives. A man of few words (every one a zinger), Mike is a manager at the town quarry and Frankie is the third-best used car salesman (out of the three) at the local dealership. She may not be a high-powered career woman, but when it comes to her family, she'll go to just about any length. And with kids like these, she had better. There's Axl, her semi-nudist teenage son conceived while under the influence of Guns N' Roses; Sue, the awkward teenage daughter who fails at everything... but with the utmost of gusto; and their seven-year-old son Brick, whose best friend is his backpack.</p><p>Sometimes it seems like everyone is trying to get to the top, or struggling not to hit bottom, but we think Frankie and her family will find a lot of love, and a lot of laughs, somewhere in <b>The Middle</b>.</p>",
    premiered: "2009-09-30",
    url: "https://www.tvmaze.com/shows/77/the-middle",
  },
  {
    id: 76,
    genres: [
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/568.jpg",
    name: "The Mysteries of Laura",
    country: "United States",
    rating: 7.6,
    summary:
      '<p>Laura Diamond is a brilliant NYPD homicide detective who balances her "Columbo" day job with a crazy family life that includes two unruly twin boys and a soon-to-be ex-husband - also a cop - who just can\'t seem to sign the divorce papers. Between cleaning up after her boys and cleaning up the streets, she\'d be the first to admit she has her "hot mess" moments in this hilariously authentic look at what it really means to be a working mom today. Somehow, she makes it all work with the help of her sexy and understanding partner, and things becomes even more complicated when her husband becomes her boss at the precinct. For Laura, every day is a high-wire balancing act.</p>',
    premiered: "2014-09-17",
    url: "https://www.tvmaze.com/shows/78/the-mysteries-of-laura",
  },
  {
    id: 77,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/442/1105185.jpg",
    name: "The Goldbergs",
    country: "United States",
    rating: 7.5,
    summary:
      "<p>Before there were parenting blogs, trophies for showing up and peanut allergies, there was a simpler time called the '80s. For geeky and movie obsessed youngest child Adam, these were his wonder years, and he faced them armed with a video camera to capture all the crazy. <b>The Goldbergs</b> are a loving family like any other -- just with a lot more yelling. Mom Beverly is a classic \"smother,\" an overbearing, overprotective matriarch who loves her delicious kids, but still rules this brood with 100% authority and zero sense of boundaries. Dad Murray is gruff and sometimes oblivious, parenting with half his attention span but all his heart. Sister Erica is popular and terrifying, doing her best to cover up that she's the smartest of the clan. Barry is a passionate dreamer, who maybe dreams a little too big and who always gets the short end of the stick. Adam is the youngest, a camera-wielding future director who's navigating first love, and growing up with his family. Rounding out the family is beloved grandfather Al \"Pops\" Solomon, the wild man of the clan, a shameless Don Juan who's learning as much from his family as he teaches them.</p>",
    premiered: "2013-09-24",
    url: "https://www.tvmaze.com/shows/79/the-goldbergs",
  },
  {
    id: 87,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/672.jpg",
    name: "Haven",
    country: "United States",
    rating: 8.1,
    summary:
      '<p>When FBI Special Agent Audrey Parker is dispatched to the small town of <b>Haven</b>, Maine, on a routine case, she soon finds herself increasingly involved in the return of "The Troubles", a plague of supernatural afflictions that have occurred in the town at least twice before. With an openness to the possibility of the paranormal, she also finds a more personal link in Haven that may lead her to the mother she has never known.</p><p>She and her partner, police detective Nathan Wuornos, find themselves frequently facing problems caused by both the effects of the Troubles, as well as the activities of town folk who take more drastic measures against those who are Troubled.</p>',
    premiered: "2010-07-09",
    url: "https://www.tvmaze.com/shows/90/haven",
  },
  {
    id: 78,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/359/898320.jpg",
    name: "Modern Family",
    country: "United States",
    rating: 7.6,
    summary:
      "<p><b>Modern Family</b> revolves around three different types of families (nuclear, step- and same-sex) living in the Los Angeles area, who are interrelated through Jay Pritchett and his children, Claire Dunphy (nÃ©e Pritchett) and Mitchell Pritchett. Patriarch Jay is remarried to a much younger woman, Gloria Delgado Pritchett (nÃ©e Ramirez), a passionate Colombian with whom he has an infant son, Fulgencio (Joe) Pritchett, and a son from Gloria's previous marriage, Manny Delgado.</p><p>Jay's daughter Claire was a homemaker, but has returned to the business world. She is now the chief executive of her father's previous business, Pritchett's Closets and Blinds. She is married to Phil Dunphy, a realtor and self-professed \"cool dad\". They have three children: Haley Dunphy, a stereotypical ditzy teenage girl; Alex Dunphy, a nerdy, smart middle child; and Luke Dunphy, the off-beat only son.</p><p>Jay's lawyer son Mitchell and his husband Cameron Tucker have one daughter, Lily Tucker-Pritchett. As the name suggests, this family represents a modern-day family, and episodes are comically based on situations which many families encounter in real life.</p>",
    premiered: "2009-09-23",
    url: "https://www.tvmaze.com/shows/80/modern-family",
  },
  {
    id: 79,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/431/1079853.jpg",
    name: "Criminal Minds",
    country: null,
    rating: 8.1,
    summary:
      "<p><b>Criminal Minds</b> revolves around an elite team of FBI profilers who analyze the country's most twisted criminal minds, anticipating their next moves before they strike again.</p>",
    premiered: "2005-09-22",
    url: "https://www.tvmaze.com/shows/81/criminal-minds",
  },
  {
    id: 80,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
    name: "Game of Thrones",
    country: "United States",
    rating: 9,
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    premiered: "2011-04-17",
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
  },
  {
    id: 81,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058261.jpg",
    name: "The Simpsons",
    country: "United States",
    rating: 8.1,
    summary:
      "<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>",
    premiered: "1989-12-17",
    url: "https://www.tvmaze.com/shows/83/the-simpsons",
  },
  {
    id: 82,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058269.jpg",
    name: "Family Guy",
    country: "United States",
    rating: 7.6,
    summary:
      "<p><b>Family Guy</b> follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter's wife, a stay-at-home mom with no patience for her family's antics. Then there are their kids: 18-year-old Meg is an outcast at school and the Griffin family punching bag; 13-year-old Chris is a socially awkward teen who doesn't have a clue about the opposite sex; and one-year-old Stewie is a diabolically clever baby whose burgeoning sexuality is very much a work in progress. Rounding out the Griffin household is Brian the family dog and a ladies' man who is one step away from AA.</p>",
    premiered: "1999-01-31",
    url: "https://www.tvmaze.com/shows/84/family-guy",
  },
  {
    id: 83,
    genres: [
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/647.jpg",
    name: "Stalker",
    country: "United States",
    rating: 7.5,
    summary:
      "<p><b>Stalker</b> is a psychological thriller about detectives who investigate stalking incidents - including voyeurism, cyber harassment and romantic fixation - for the Threat Assessment Unit of the LAPD. Det. Jack Larsen is a recent transfer to the Unit from New York City's homicide division, whose confidence, strong personality and questionable behavior has landed him in trouble before - but whose past behavior may also prove valuable in his new job. His boss, Lt. Beth Davis, is strong, focused and an expert in the field, driven by her traumatic personal experience as a victim. With the rest of their team, young but eager Det. Ben Caldwell and deceptively smart Det. Janice Lawrence Larsen and Davis assess the threat level of cases and respond before the stalking and intimidation spirals out of control, all while trying to keep their personal obsessions at bay.</p>",
    premiered: "2014-10-01",
    url: "https://www.tvmaze.com/shows/86/stalker",
  },
  {
    id: 84,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/649.jpg",
    name: "The Bridge",
    country: "United States",
    rating: 7.5,
    summary:
      "<p>When the body of a cartel member is found on US soil, Sonya Cross from El Paso PD and her Mexican counterpart, Marco Ruiz must work together to solve the case.</p><p>A present-day crime thriller exploring the tensions on the US-Mexico border. When an American judge known for her anti-immigration views is found dead on the bridge connecting El Paso and Juarez, Sonya Cross from El Paso PD must work with her Mexican counterpart from Chihuahua State Police, Marco Ruiz, to catch a serial killer operating on both sides of the border. Marco understands the slippery politics of Mexican law enforcement, and while his police force slowly succumbs to the pressures and demands of the cartel, he's one of the last good men in the department. He's charming but will do whatever it takes to get what he needs -- which doesn't sit well with Sonya, who has Asperger's and strictly follows rules and protocol. The case quickly pulls them into a string of murders on the border, a scene already consumed by illegal immigration, drug trafficking, violence, and prostitution.</p>",
    premiered: "2013-07-10",
    url: "https://www.tvmaze.com/shows/87/the-bridge",
  },
  {
    id: 85,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 17,
        name: "History",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/204119.jpg",
    name: "Reign",
    country: "United States",
    rating: 7.5,
    summary:
      "<p>Hidden between the lines of the history books is the story of Mary Stuart, the young woman the world would come to know as Mary, Queen of Scots. Queen of Scotland since she was six days old, the teenage Mary is already a headstrong monarch - beautiful, passionate, and poised at the very beginning of her tumultuous rise to power. Arriving in France with four close friends as her ladies-in-waiting, Mary has been sent to secure Scotland's strategic alliance by formalizing her arranged engagement to the French king's dashing son, Prince Francis. But the match isn't signed and sealed, it depends more on politics, religion and secret agendas than affairs of the heart. With danger and sexual intrigue around every dark castle corner, Mary rallies her ladies-in-waiting and steels herself, ready to rule the new land and balance the demands of her country and her heart.</p>",
    premiered: "2013-10-17",
    url: "https://www.tvmaze.com/shows/88/reign",
  },
  {
    id: 86,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/663.jpg",
    name: "Unforgettable",
    country: "United States",
    rating: 7.5,
    summary:
      "<p><b>Unforgettable</b> follows Carrie Wells, an enigmatic former police detective with a rare condition that makes her memory so flawless that every place, every conversation, every moment of joy and every heartbreak is forever embedded in her mind. It's not just that she doesn't forget anything - she can't; except for one thing: the details that would help solve her sister's long-ago murder. Carrie has tried to put her past behind her, but she's unexpectedly reunited with her ex-boyfriend and partner, NYPD Detective Al Burns when she consults on a homicide case.</p>",
    premiered: "2011-09-20",
    url: "https://www.tvmaze.com/shows/89/unforgettable",
  },
  {
    id: 88,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/678.jpg",
    name: "Bad Judge",
    country: "United States",
    rating: 7.4,
    summary:
      "<p>No excuses, no apologies, no compromises. Wild child Rebecca Wright knows how to have a good time, but she also happens to be one of L.A.'s toughest and most respected criminal court judges. She has a reputation for unorthodox behavior in the courtroom, including creative rulings and saying exactly what's on her mind. Her private life, on the other hand, is anything but innocent. She parties too much and rocks out on the drums in a band with her best friend, Jenny. While there's no shortage of male admirers who would love to spend time with her, she's not ready to settle down... except when an 8-year-old boy - whose parents were put in jail by Rebecca - needs her help. He may, in fact, be the one thing that starts to tame this <b>Bad Judge</b>.</p>",
    premiered: "2014-10-02",
    url: "https://www.tvmaze.com/shows/91/bad-judge",
  },
  {
    id: 89,
    genres: [
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/679.jpg",
    name: "A to Z",
    country: "United States",
    rating: 6.7,
    summary:
      "<p>This is the <b>A to Z</b> story of Andrew and Zelda - a pair that almost wasn't - and all that happened from the day they met. Andrew has always been a secret romantic... not above crooning to Celine Dion while driving to work, with dreams of finding \"the one.\" He imagines her to be just like that shimmering beauty he spotted that night in that silver dress at that concert two years ago. Zelda, having grown up with a hippie mom who believed the universe would provide for everything, rebelled into a no-nonsense practical lawyer who prefers the control of online dating. But when a computer glitch sends her a total mismatch, she's asked to come in for an interview at the Internet dating site where Andrew works, and this is where it all begins. Andrew and Zelda meet for the first time and despite their differences, sparks fly. She thinks it's chance. He thinks it's fate. After all, he's convinced she's the shimmering girl in the silver dress. Is it true love forever or just a detour in destiny?</p>",
    premiered: "2014-10-02",
    url: "https://www.tvmaze.com/shows/92/a-to-z",
  },
  {
    id: 90,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/685.jpg",
    name: "Parenthood",
    country: "United States",
    rating: 8.1,
    summary:
      "<p><b>Parenthood</b> is the critically acclaimed one-hour drama inspired by the box office hit of the same name. This reimagined and updated Universal Television/Imagine Entertainment production follows the trials and tribulations of the very large, colorful and imperfect Braverman family. Sarah Braverman is a single mother with two kids - the bright but rebellious Amber who is living on her own, and sullen and sensitive Drew who returns to Berkeley this year.</p>",
    premiered: "2010-03-02",
    url: "https://www.tvmaze.com/shows/93/parenthood",
  },
  {
    id: 91,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/700.jpg",
    name: "Defiance",
    country: "United States",
    rating: 7.8,
    summary:
      "<p>Set on a future Earth, <b>Defiance</b> introduces players and viewers to a world where humans and aliens live together on a planet ravaged by decades of war and transformed by alien terra-forming machines. It centers on Jeb Nolan, the law-keeper in a bustling frontier boomtown that is one of the new world's few oasis of civility and inclusion. Nolan is a former Marine who fought in the alien conflict and suffered the loss of his wife and child in the war. The trauma transformed him into a lone wanderer in the wilds of this new and dangerous world.</p>",
    premiered: "2013-04-15",
    url: "https://www.tvmaze.com/shows/94/defiance",
  },
  {
    id: 92,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/716.jpg",
    name: "Falling Skies",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>The series tells the story of the aftermath of a global invasion by several races of extraterrestrials that neutralizes the world's power grid and technology, quickly destroys the combined militaries of all the world's countries, and apparently kills over 90% of the human population within a few days.</p>",
    premiered: "2011-06-19",
    url: "https://www.tvmaze.com/shows/95/falling-skies",
  },
  {
    id: 93,
    genres: [
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/729.jpg",
    name: "Manhattan Love Story",
    country: "United States",
    rating: 5.4,
    summary:
      "<p>Have you ever wondered what your date was thinking? This romantic comedy exposes the differences between men and women through the unfiltered thoughts, and often contradictory actions, of a new couple who have just begun dating.</p>",
    premiered: "2014-09-30",
    url: "https://www.tvmaze.com/shows/96/manhattan-love-story",
  },
  {
    id: 94,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/730.jpg",
    name: "The Biggest Loser",
    country: "United States",
    rating: 6,
    summary:
      '<p>NBC\'s <b>The Biggest Loser</b>, a show known for its incredible weight loss makeovers, will reveal an exciting makeover of its own when the popular series returns on Monday, January 4 (9-11 p.m. ET) with new host Bob Harper, a new "Temptation" theme, an updated state-of-the-art gym, a new logo, fun format changes and a return to the popular team vs. team competition. Dolvett Quince and Jen Widerstrom return to train eight contestant teams of two, all with compelling stories. Seven teams (spouses, parent/adult child, siblings, relatives, best friends) will know each other, but one team will be two strangers - former "Celebrity Apprentice" contestant and the original "Survivor" winner, Richard Hatch, and \'The Voice\' season two semi-finalist Erin Willett. Having both been in the NBC family previously, the two share the same goal as the other 14 contestants - to change their lives and get healthy. The renovated "Biggest Loser" gym, featuring a new interior and exterior branded with the new logo, has modernized equipment to help contestants better achieve their fitness goals, including eight high-tech monitors on the walls of each side of the gym that will track contestants\' calorie burns as well as heart rates. Half of the gym will be dedicated to Team Dolvett and the other half dedicated to Team Jen. The weigh-in will be very different this season with a new look and double scales, so contestants on opposing teams can weigh-in side by side, making the weigh-in even more compelling to watch. The contestant house is also getting a whole new look for season 17.</p>',
    premiered: "2004-10-19",
    url: "https://www.tvmaze.com/shows/97/the-biggest-loser",
  },
  {
    id: 95,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/303/758518.jpg",
    name: "Scandal",
    country: "United States",
    rating: 7.8,
    summary:
      "<p>Everyone has secretsâ€¦ and Olivia Pope has dedicated her life to protecting and defending the public images of the nation's elite by keeping those secrets under wraps. Pope's team are at the top of their game when it comes to getting the job done for their clients, but it becomes apparent that these \"gladiators in suits\", who specialize in fixing the lives of other people, have trouble fixing those closest at hand -- their own.</p>",
    premiered: "2012-04-05",
    url: "https://www.tvmaze.com/shows/98/scandal",
  },
  {
    id: 96,
    genres: [],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/147/369365.jpg",
    name: "America's Next Top Model",
    country: "United States",
    rating: 5.6,
    summary:
      "<p>Created by supermodel Tyra Banks, <b>America's Next Top Model</b> follows a group of young women of various backgrounds, shapes and sizes who live together in a loft and vie for a modeling contract. The show exposes the transformation of everyday young women into potentially fierce supermodels, with participants facing weekly tests that determine who can make the cut. With mentoring by supermodel Tyra Banks and exposure to high-profile fashion-industry gurus, the finalists compete in a highly accelerated modeling boot camp--a crash course to supermodel fame.</p>",
    premiered: "2003-05-20",
    url: "https://www.tvmaze.com/shows/99/americas-next-top-model",
  },
  {
    id: 97,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/431/1078586.jpg",
    name: "Blue Bloods",
    country: "United States",
    rating: 8.2,
    summary:
      "<p><b>Blue Bloods </b>is a drama about a multi-generational family of cops dedicated to New York City law enforcement. Frank Reagan is the New York Police Commissioner and heads both the police force and the Reagan brood. He runs his department as diplomatically as he runs his family, even when dealing with the politics that plagued his unapologetically bold father, Henry, during his stint as Chief. A source of pride and concern for Frank is his eldest son Danny, a seasoned detective, family man and Iraq War vet who on occasion uses dubious tactics to solve cases with his loyal and tough partner, Detective Jackie Curatola. The Reagan women in the family include Erin, a N.Y. Assistant D.A., who also serves as the legal compass for her siblings and father, and single parent to her teenage daughter Nicky; and Linda, Danny's supportive wife. Jamie is the youngest Reagan, a recent grad of Harvard Law and the family's \"golden boy.\" Unable to deny the family tradition, Jamie has decided to give up a lucrative future in law and follow in the family footsteps as a cop.</p>",
    premiered: "2010-09-24",
    url: "https://www.tvmaze.com/shows/100/blue-bloods",
  },
  {
    id: 98,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 19,
        name: "Legal",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/59/148162.jpg",
    name: "The Good Wife",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>The Good Wife</b> follows Alicia Florrick, a wife and mother who boldly assumes full responsibility for her family and re-enters the workforce after her husband's very public sex and political corruption scandal lands him in jail. Pushing aside the betrayal and crushing public humiliation caused by her husband Peter, Alicia starts over by pursuing her original career as a defense attorney.</p>",
    premiered: "2009-09-22",
    url: "https://www.tvmaze.com/shows/101/the-good-wife",
  },
  {
    id: 99,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012589.jpg",
    name: "Boardwalk Empire",
    country: "United States",
    rating: 8.4,
    summary:
      "<p>As the country struggles to cope with the Great Depression and the end of Prohibition looms, Nucky Thompson looks to legitimize himself through alliances with liquor producers, while rivals Lucky Luciano and Meyer Lansky seek to consolidate their power in the wake of Arnold Rothstein's death and eliminate all competition - by any means necessary on <b>Boardwalk Empire</b>.</p>",
    premiered: "2010-09-19",
    url: "https://www.tvmaze.com/shows/102/boardwalk-empire",
  },
  {
    id: 100,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 19,
        name: "Legal",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/426/1065684.jpg",
    name: "Law & Order: Special Victims Unit",
    country: "United States",
    rating: 7.9,
    summary:
      "<p>In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.</p>",
    premiered: "1999-09-20",
    url: "https://www.tvmaze.com/shows/103/law-order-special-victims-unit",
  },
  {
    id: 101,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/775.jpg",
    name: "Dominion",
    country: "United States",
    rating: 7.2,
    summary:
      '<p><b>Dominion </b>is an epic supernatural drama set in the near future. Specifically, 25 years after "The Extinction War," when an army of lower angels, assembled by the archangel Gabriel, waged war against mankind. The archangel Michael, turning against his own kind, chose to side with humanity. Rising out of the ashes of this long battle are newly fortified cities which protect human survivors. At the center of the series is the city of Vega, a glistening empire that has formed from the ruins of what was once Las Vegas.</p>',
    premiered: "2014-06-19",
    url: "https://www.tvmaze.com/shows/104/dominion",
  },
  {
    id: 102,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/70/176381.jpg",
    name: "From Dusk Till Dawn: The Series",
    country: "United States",
    rating: 6.5,
    summary:
      '<p><b>From Dusk Till Dawn: The Series</b>, based on the thrill-ride film of the same name, is a supernatural crime saga centered around bank robber, Seth Gecko and his violent, unpredictable brother, Richard "Richie" Gecko, who are wanted by the FBI and Texas Rangers Earl McGraw and Freddie Gonzalez after a bank heist leaves several people dead. While on the run to Mexico, Seth and Richie encounter former pastor Jacob Fuller and his family, whom they take hostage. Using the family RV to cross the border, chaos ensues when the group detours to a strip club that is populated by vampires. They are forced to fight until dawn in order to get out alive.</p>',
    premiered: "2014-03-11",
    url: "https://www.tvmaze.com/shows/105/from-dusk-till-dawn-the-series",
  },
  {
    id: 103,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 20,
        name: "Western",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/808.jpg",
    name: "Justified",
    country: "United States",
    rating: 8.6,
    summary:
      '<p>Deputy U.S. Marshal Raylan Givens is something of a 19th century-style officer in modern times, whose unconventional enforcement of justice makes him a target with criminals and a problem for his superiors in the U.S. Marshals Service. As a result of an eager but "justified" shooting of a Miami fugitive while on assignment in Florida, Givens is reassigned to Lexington, Kentucky, in a district that includes his hometown of Harlan, a rural mining town in the east of the state.</p>',
    premiered: "2010-03-16",
    url: "https://www.tvmaze.com/shows/106/justified",
  },
  {
    id: 104,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058267.jpg",
    name: "Bob's Burgers",
    country: "United States",
    rating: 8.1,
    summary:
      "<p>The series follows Bob who runs <b>Bob's Burgers</b>, with the help of his wife and their three kids. Bob has big ideas about burgers, but the rest of the clan falls short on service. Despite the greasy counters and lousy location, the Belchers are determined to make every \"Grand Re-Re-Re-opening\" a success. Bob's wife, Linda, stands by her man and often does so by bursting into song. Their eldest daughter, 13-year-old Tina has a slight obsession with boys and zombies. Middle child Gene is an aspiring musician with a thirst for life. Louise is the bunny ears-wearing youngest daughter with an off-kilter sense of humor that makes her somewhat of a liability in the kitchen â€“ and with the public.</p>",
    premiered: "2011-01-09",
    url: "https://www.tvmaze.com/shows/107/bobs-burgers",
  },
  {
    id: 105,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/846.jpg",
    name: "Mulaney",
    country: "United States",
    rating: 6,
    summary:
      "<p>John Mulaney is a 29-year-old comedian working the stand-up circuit and looking for his big break. But life drastically changes when self-centered comedy legend and game show host Lou Cannon hires Mulaney as a writer. Lou may be John's entrÃ©e into the world of big-money show business, but he's also a total nightmare. Still, the job represents everything Mulaney thinks he wants. But does he really? And, at what cost? And what does it say about him if he quits? And what does it say about him if he stays? And has Lou had work done?</p>",
    premiered: "2014-10-05",
    url: "https://www.tvmaze.com/shows/108/mulaney",
  },
  {
    id: 106,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/887.jpg",
    name: "CSI: Crime Scene Investigation",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>CSI: Crime Scene Investigation</b> is a drama about a team of forensic investigators trained to solve criminal cases by scouring the crime scene, collecting irrefutable evidence and finding the missing pieces that solve the mystery.</p>",
    premiered: "2000-10-06",
    url: "https://www.tvmaze.com/shows/109/csi-crime-scene-investigation",
  },
  {
    id: 135,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/189/472887.jpg",
    name: "Veep",
    country: "United States",
    rating: 8,
    summary:
      "<p>Former Senator Selina Meyer has accepted the call to serve as Vice President of the United States. The job is nothing like she imagined and everything she was warned about. <b>Veep</b> follows Meyer and her staff as they attempt to make their mark and leave a lasting legacy, without getting tripped up in the day-to-day political games that define Washington.</p>",
    premiered: "2012-04-22",
    url: "https://www.tvmaze.com/shows/142/veep",
  },
  {
    id: 107,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/862.jpg",
    name: "Gracepoint",
    country: "United States",
    rating: 7.8,
    summary:
      "<p>When a young boy is found dead on an idyllic beach, a major police investigation gets underway in the small California seaside town where the tragedy occurred. Soon deemed a homicide, the case sparks a media frenzy, which throws the boy's family into further turmoil and upends the lives of all of the town's residents. Welcome to <b>Gracepoint</b>, a new 10-episode mystery event series based on \"Broadchurch,\" the U.K.'s critically acclaimed hit crime drama.</p>",
    premiered: "2014-10-02",
    url: "https://www.tvmaze.com/shows/110/gracepoint",
  },
  {
    id: 108,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/127/319360.jpg",
    name: "Once Upon a Time",
    country: "United States",
    rating: 7.5,
    summary:
      "<p><b>Once Upon a Time</b> is Fairy Tale Land. It's filled with magic, monsters and all of the characters we all know from stories growing up. It's real, and so are the people in it. But unlike the \"happily ever after\" you may have heard about, their stories continued, and The Evil Queen cast a Dark Curse over the land...</p><p>This is Storybrooke. It's a quiet, little New England town filled with people who go about their everyday lives with no idea who they really are. The Queen's Curse has trapped them here and placed her in near-complete control. They have no real memories and no real hope.</p>",
    premiered: "2011-10-23",
    url: "https://www.tvmaze.com/shows/111/once-upon-a-time",
  },
  {
    id: 109,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/935.jpg",
    name: "South Park",
    country: "United States",
    rating: 8.5,
    summary:
      "<p><b>South Park</b> is an adult comedy animation show centred around 4 children in the small town of south park. Its humour is often dark involving satirical elements and mocking current real-life events.</p>",
    premiered: "1997-08-13",
    url: "https://www.tvmaze.com/shows/112/south-park",
  },
  {
    id: 110,
    genres: [
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058583.jpg",
    name: "Survivor",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>Eighteen to twenty castaways will compete against each other on <b>Survivor</b>. All castaways will compete to outwit, outplay, outlast and ultimately be crowned Sole Survivor.</p>",
    premiered: "2000-05-31",
    url: "https://www.tvmaze.com/shows/114/survivor",
  },
  {
    id: 111,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/45/113875.jpg",
    name: "King of the Hill",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>King of the Hill</b> follows the life of Hank Hill, his wife Peggy, their 13-year-old son Bobby, their 18-year-old niece Luanne, her husband Lucky, their newborn baby girl Gracie and his beer guzzling neighborhood buddies, Dale, Bill and Boomhauer.</p>",
    premiered: "1997-01-12",
    url: "https://www.tvmaze.com/shows/115/king-of-the-hill",
  },
  {
    id: 112,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1239.jpg",
    name: "The Mentalist",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>Patrick Jane, an independent consultant with the California Bureau of Investigation (CBI), has a remarkable track record for solving serious crimes by using his razor sharp skills of observation. Within the Bureau, Jane is notorious for his blatant lack of protocol and his semi-celebrity past as a psychic medium, whose paranormal abilities he now admits he feigned. No-nonsense Senior Agent Teresa Lisbon openly resists having Jane in her unit and alternates between reluctantly acknowledging Jane's usefulness and blasting him for his theatrics, narcissism, and dangerous lack of boundaries. Lisbon's team includes agents Kimball Cho, Wayne Rigsby and rookie member Grace Van Pelt, who all think Jane's a loose cannon but admire his charm and knack for clearing cases.</p>",
    premiered: "2008-09-23",
    url: "https://www.tvmaze.com/shows/116/the-mentalist",
  },
  {
    id: 113,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/353/884619.jpg",
    name: "Star Wars: Rebels",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>Star Wars Rebels</b>, set five years before the events of Star Wars: Episode IV - A New Hope, tells the story of the Rebellion's beginnings while the Empire spreads tyranny through the galaxy.</p>",
    premiered: "2014-09-29",
    url: "https://www.tvmaze.com/shows/117/star-wars-rebels",
  },
  {
    id: 114,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 11,
        name: "Mystery",
      },
      {
        id: 18,
        name: "Medical",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/357/894990.jpg",
    name: "House",
    country: "United States",
    rating: 8.9,
    summary:
      "<p>Sink your teeth into meaty drama and intrigue with <b>House</b>, FOX's take on mystery, where the villain is a medical malady and the hero is an irreverent, controversial doctor who trusts no one, least of all his patients.</p><p>Dr. Gregory House is a maverick physician who is devoid of bedside manner. While his behavior can border on antisocial, Dr. House thrives on the challenge of solving the medical puzzles that other doctors give up on. Together with his hand-picked team of young medical experts, he'll do whatever it takes in the race against the clock to solve the case.</p>",
    premiered: "2004-11-16",
    url: "https://www.tvmaze.com/shows/118/house",
  },
  {
    id: 115,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/210/525553.jpg",
    name: "Transparent",
    country: null,
    rating: 7.3,
    summary:
      "<p>In <b>Transparent</b>, an LA family with serious boundary issues have their past and future unravel when a dramatic admission causes everyone's secrets to spill out.</p>",
    premiered: "2014-09-26",
    url: "https://www.tvmaze.com/shows/120/transparent",
  },
  {
    id: 116,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/198/496906.jpg",
    name: "Nikita",
    country: "United States",
    rating: 7.9,
    summary:
      "<p>When she was a deeply troubled teenager, Nikita was rescued from death row by a secret U.S. agency known only as Division, who trained her as a spy and assassin. Nikita was eventually betrayed by the only people she thought she could trust. Now, after three years in hiding, Nikita is seeking retribution and making it clear to her former boss, Percy and her former friends Michael and Birkhoff that she will stop at nothing to expose and destroy their covert operation.</p>",
    premiered: "2010-09-09",
    url: "https://www.tvmaze.com/shows/122/nikita",
  },
  {
    id: 117,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
    name: "Lost",
    country: "United States",
    rating: 8.2,
    summary:
      "<p>Out of the blackness, the first thing Jack senses is pain. Then burning sun. A Bamboo forest. Smoke. Screams. With a rush comes the horrible awareness that the plane he was on tore apart in mid-air and crashed on a Pacific island. From there it's a blur, as his doctor's instinct kicks in: people need his help.</p><p>Stripped of everything, the 48 survivors scavenge what they can from the plane for their survival. Some panic. Some pin their hopes on rescue. A few find inner strength they never knew they had -- like Kate, who, with no medical training, suddenly finds herself suturing the doctor's wounds. Hurley - a man with a warm sense of humor despite the desperate situation - does his best to keep his cool as he helps those around him to survive. Charlie is a faded rock star who harbors a painful secret. Sayid is a Middle Eastern man who must wrestle with the racial profiling directed at him by some of his fellow survivors. Jin and Sun are a Korean couple whose traditions, values and language are foreign, and thus causes much to get lost in the translation. Sawyer has an air of danger surrounding him, and his intense sense of mistrust for everyone around him could prove to be fatal to his fellow castaways. Michael has just gained custody of his nine-year-old son, Walt, after the death of his ex-wife - they are a father and son who don't even know each other. Locke is a mysterious man who keeps to himself, and who harbors a deeper connection to the island than any of the others. Self-centered Shannon - who actually gives herself a pedicure amid the chaos - and her estranged controlling brother, Boone , constantly bicker and must learn to get along if they are to survive. And young Claire is eight months pregnant and ill-prepared for the hardships of motherhood - especially on a deserted island.</p>",
    premiered: "2004-09-22",
    url: "https://www.tvmaze.com/shows/123/lost",
  },
  {
    id: 118,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/63/158548.jpg",
    name: "2 Broke Girls",
    country: "United States",
    rating: 7.2,
    summary:
      "<p><b>2 Broke Girls</b> is a comedy about two young women waitressing at a greasy spoon diner who strike up an unlikely friendship in the hopes of launching a successful business - if only they can raise the cash. Sassy, streetwise Max Black works two jobs just to get by, one of which is waiting tables during the night shift at the retro-hip Williamsburg Diner. Sophisticated Caroline Channing is an uptown trust fund princess who's having a run of bad luck that forces her to reluctantly give waitressing a shot. At first, Max sees Caroline as yet another in a long line of inept servers she must cover for, but she's surprised to find that Caroline has as much substance as she does style.</p><p>When Caroline discovers Max's knack for baking amazing cupcakes, she sees a lucrative future for them, but first they need to raise the start-up money. While they save their tips, they'll stay at the restaurant, working with Oleg, an overly flirtatious Russian cook; Earl, a 75-year-old kool-kat cashier; and Han Lee, the new, eager-to-please owner of the diner. Working together, these two broke girls living in one expensive city might just find the perfect recipe for their big break.</p>",
    premiered: "2011-09-19",
    url: "https://www.tvmaze.com/shows/124/2-broke-girls",
  },
  {
    id: 119,
    genres: [
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1756.jpg",
    name: "Selfie",
    country: "United States",
    rating: 7.2,
    summary:
      "<p>Eliza Dooley has 263,000 followers who hang on to her every post, tweet and selfie. But one lonely day, she has a revelation: being friended is not the same as having actual friends. She asks marketing guru Henry to 'rebrand' her self-obsessed reputation and teach her how to connect with people in the real world. Loosely based on <i>My Fair Lady</i>, <b>Selfie</b> explores the modern struggles of Eliza and Henry, as he tries to teach her how to live life offline - whether she 'likes' it or not.</p>",
    premiered: "2014-09-30",
    url: "https://www.tvmaze.com/shows/125/selfie",
  },
  {
    id: 120,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/47/119089.jpg",
    name: "Mom",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>Christy is a single mom who, after years of questionable choices, is now sober and trying to get her life on track. She's tested daily by her newly sober mother, Bonnie, who is trying to make up for all the ways she's let Christy down. Christy is further challenged by her relationships with her own kids. Her daughter Violet is engaged to a man twice her age and her ten-year-old son, Roscoe, would rather live with his father Baxter, a former slacker who has only recently gotten himself together. To help her stay sober, Christy relies on her support system from AA, comprised of her sponsor Marjorie, her wealthy sponsee, Jill, and her emotional friend, Wendy. Christy tries to remain positive as she attempts to overcome her past and build a better future, but with her dysfunctional family and life's many setbacks, it's always an uphill battle.</p>",
    premiered: "2013-09-23",
    url: "https://www.tvmaze.com/shows/126/mom",
  },
  {
    id: 121,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/203/509941.jpg",
    name: "The Affair",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>At once deeply observed and intriguingly elusive, <b>The Affair</b> explores the emotional effects of an extramarital relationship.</p><p>Noah is a New York City schoolteacher and novelist who is happily married, but resents his dependence on his wealthy father-in-law. Alison is a young waitress trying to piece her life and marriage back together in the wake of a tragedy. The provocative drama unfolds when Alison and Noah meet in Montauk at the end of Long Island.</p>",
    premiered: "2014-10-12",
    url: "https://www.tvmaze.com/shows/127/the-affair",
  },
  {
    id: 122,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/186/466352.jpg",
    name: "Jane the Virgin",
    country: "United States",
    rating: 7.4,
    summary:
      "<p>When Jane Villanueva was a young girl, her grandmother, Alba, convinced her of two things: telenovelas are the highest form of entertainment, and women must protect their virginity at all costs. Jane the Virgin, although she has always tried to be the good girl who does the right thing, Jane's life has suddenly become as dramatic and complicated as the telenovelas she has always loved.</p>",
    premiered: "2014-10-13",
    url: "https://www.tvmaze.com/shows/128/jane-the-virgin",
  },
  {
    id: 123,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1836.jpg",
    name: "Marry Me",
    country: "United States",
    rating: 5.9,
    summary:
      "<p>Six years ago, Annie and Jake bonded over their mutual love of nachos and they've been inseparable ever since. Now, after returning from a romantic two-week island vacation, Jake's all set to pop the question. Before he can ask, though, Annie lets loose on Jake for his inability to commit. She was expecting him to \"put a ring on it\" in paradise and now Jake's perfect proposal is ruined. Not wanting to spend the next 60 years talking about that mess of a proposal, Jake and Annie decide to hold off on the engagement until they can do it right. Yet if history tells us anything, it's when we really want things to go right that they all tend to go wrong. The only thing we know for sure is these two are destined to be together whether they can get it together or not.</p>",
    premiered: "2014-10-14",
    url: "https://www.tvmaze.com/shows/129/marry-me",
  },
  {
    id: 124,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/118/296850.jpg",
    name: "Two and a Half Men",
    country: "United States",
    rating: 6.5,
    summary:
      "<p>Charlie is a well-to-do bachelor with a house at the beach, a Jaguar in the front, and an easy way with women. His casual Malibu lifestyle is interrupted when his tightly wound brother Alan, who's facing a divorce, and his son Jake, come to live with him. Together, these two and a half men confront the challenges of growing up; finally. Complicating matters are the brothers' self-obsessed, controlling mother, Evelyn, Alan's estranged wife, Judith and Charlie's crazy neighbor Rose, who wants to be a part of his life and is willing to do anything to be around. After the death of his brother, Alan Harper meets and befriends a lonely young man named Walden Schmidt who turns out to be a billionaire. Unable to afford his brother's home, Alan sells Walden the house, and as a way of showing his gratitude, Walden allows Alan and his son Jake to move in with him.</p>",
    premiered: "2003-09-22",
    url: "https://www.tvmaze.com/shows/130/two-and-a-half-men",
  },
  {
    id: 125,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1880.jpg",
    name: "About a Boy",
    country: "United States",
    rating: 6.7,
    summary:
      "<p>Will Freeman lives a charmed existence as the ultimate man-child. After writing a hit song, he was granted a life of free time, free love and freedom from financial woes. He's single, unemployed and loving it. So imagine his surprise when Fiona, a needy, single mom and her oddly charming 11-year-old son Marcus move in next door and disrupt his perfect world.</p>",
    premiered: "2014-02-22",
    url: "https://www.tvmaze.com/shows/131/about-a-boy",
  },
  {
    id: 136,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/215/538434.jpg",
    name: "Silicon Valley",
    country: "United States",
    rating: 8.5,
    summary:
      "<p>In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. From Mike Judge comes this satire about a programmer whose game-changing algorithm becomes the subject of a valley-wide bidding war.</p>",
    premiered: "2014-04-06",
    url: "https://www.tvmaze.com/shows/143/silicon-valley",
  },
  {
    id: 137,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/280/700748.jpg",
    name: "The Comeback",
    country: "United States",
    rating: 8.2,
    summary:
      "<p>The limited comedy series stars Lisa Kudrow as the embattled Valerie Cherish, a fading TV \"It Girl\" who was once so desperate to stay in the spotlight that she allowed cameras to follow her every move as she appeared on a new sitcom - with disastrous results. Now, it's ten years later, and Valerie thinks she has it all figured out this time. She doesn't.</p>",
    premiered: "2005-06-05",
    url: "https://www.tvmaze.com/shows/144/the-comeback",
  },
  {
    id: 126,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1886.jpg",
    name: "The Millers",
    country: "United States",
    rating: 6.4,
    summary:
      "<p><b>The Millers</b> follows Nathan Miller, a recently divorced local roving news reporter looking forward to living the singles life until his parents' marital problems unexpectedly derail his plans. After Nathan finally breaks the news of his divorce to his parents Carol and Tom, his father is inspired to follow suit and stuns the family when he leaves his wife of 43 years. Already in shock, Nathan is even more aghast when his meddlesome mom decides to move in with him. Meanwhile, his absent-minded dad imposes upon Nathan's sister Debbie, her husband Adam and their daughter. Nathan's best friend and news cameraman Ray was excited to be Nathan's wingman in the dating scene, but Carol manages to even cramp his style. Now, as Nathan and his sister settle in with their truly impossible parents, they both wonder just how long the aggravating adjustment period is going to last.</p>",
    premiered: "2013-10-03",
    url: "https://www.tvmaze.com/shows/132/the-millers",
  },
  {
    id: 127,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/195/488201.jpg",
    name: "Elementary",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>Elementary </b>is a modern-day take on the classic Sherlock Holmes story about a crime-solving duo that cracks the NYPD's most impossible cases. Following his fall from grace in London and a stint in rehab, eccentric Sherlock escapes to Manhattan where his wealthy father forces him to live with his worst nightmare - a sober companion, Dr. Watson.</p>",
    premiered: "2012-09-27",
    url: "https://www.tvmaze.com/shows/133/elementary",
  },
  {
    id: 128,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1904.jpg",
    name: "Heroes",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>This epic chronicles the lives of ordinary people who discover they possess extraordinary abilities. As a total eclipse casts a shadow across the globe, viewers follow a genetics professor in India whose father's disappearance leads him to uncover a secret theory<i>â€”</i>there are people with super powers living among us. A young dreamer tries to convince his politician brother that he can fly. A high school cheerleader learns that she is totally indestructible. A Las Vegas stripper, struggling to make ends meet to support her young son, uncovers that her mirror image has a secret. A prison inmate mysteriously finds himself waking up outside of his cell. A gifted artist, whose drug addiction is destroying his life and the relationship with his girlfriend, can paint the future. A down-on-his-luck beat cop can hear people's thoughts, including the secrets of a captured terrorist. In Japan, a young man develops a way to stop time through sheer will power. Their ultimate destiny is nothing less than saving the world.</p>",
    premiered: "2006-09-25",
    url: "https://www.tvmaze.com/shows/134/heroes",
  },
  {
    id: 129,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1900.jpg",
    name: "The McCarthys",
    country: "United States",
    rating: 6.5,
    summary:
      "<p><b>The McCarthys</b> is a multi-camera comedy about a close-knit, sports-crazed Boston family whose somewhat athletically challenged son, Ronny, is chosen by his father to be his assistant high school basketball coach, much to the surprise of his more qualified siblings. Ronny wants nothing more than to move away, join the singles scene and find a partner. His distraught mother, Marjorie is not upset that her favorite son is gay, but that he wants to leave Boston and his family.</p><p>Ronny's plans change, however, when his politically incorrect and outspoken father, Arthur stuns everyone with his choice for an assistant. Touched by his father's offer, Ronny embarks on a completely different future and he can be sure that his loving family, including his twin brothers Sean and Gerard and his sister Jackie, are going to have a very vocal opinion about it.</p>",
    premiered: "2014-10-30",
    url: "https://www.tvmaze.com/shows/136/the-mccarthys",
  },
  {
    id: 130,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
      {
        id: 19,
        name: "Legal",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1932.jpg",
    name: "Cristela",
    country: "United States",
    rating: 7.1,
    summary:
      "<p>Cristela's dream of becoming a lawyer is something her traditional Mexican-American family doesn't quite understand. She's entering her sixth year of law school after juggling home obligations and working multiple jobs to pay her way.</p>",
    premiered: "2014-10-10",
    url: "https://www.tvmaze.com/shows/137/cristela",
  },
  {
    id: 131,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/107/267799.jpg",
    name: "The Leftovers",
    country: "United States",
    rating: 8.1,
    summary:
      '<p>Three years after millions of peopleâ€”some 2% of the world\'s populationâ€”vanished into thin air, residents of Mapleton, NY weigh the pros and cons of a "Heroes Day" tribute to the local "Departed". Attempting to maintain a sense of normalcy in his strained community, police chief Kevin Garvey faces additional challenges at home with his daughter, Jill, who\'s lost in a cloud of apathy with her friend Aimee, and son, Tom, who has gravitated to a cult led by the charismatic Holy Wayne. Also of concern is a silent, white-clad group of chain-smoking men and women called the Guilty Remnant, who team up in pairs to stake out people and places around town. As tension in Mapleton escalates, the lives of Laurie, an unexpected member of the Guilty Remnant, and Meg, a recently engaged young woman, converge.</p>',
    premiered: "2014-06-29",
    url: "https://www.tvmaze.com/shows/138/the-leftovers",
  },
  {
    id: 132,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
    name: "Girls",
    country: "United States",
    rating: 6.7,
    summary:
      "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
    premiered: "2012-04-15",
    url: "https://www.tvmaze.com/shows/139/girls",
  },
  {
    id: 133,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1961.jpg",
    name: "Looking",
    country: "United States",
    rating: 7.2,
    summary:
      "<p><b>Looking</b> offers up the unfiltered experiences of three close friends living - and loving - in modern-day San Francisco. Friendship may bind them, but each is at a markedly different point in his journey: Patrick is the 29-year-old video game designer getting back into the dating world in the wake of his ex's engagement; aspiring artist AgustÃ­n, 31, is questioning the idea of monogamy amid a move to domesticate with his boyfriend; and the group's oldest member - longtime waiter Dom, 39 - is facing middle age with romantic and professional dreams still unfulfilled.</p><p>The trio's stories intertwine and unspool dramatically as they search for happiness and intimacy in an age of unparalleled choices - and rights - for gay men. Also important to the â€˜Looking' mix is the progressive, unpredictable, sexually open culture of the Bay Area, with real San Francisco locations serving as a backdrop for the group's lives. Rounding out the â€˜Looking' world are a bevy of dynamic gay men including Kevin, Lynn, and Richie, as well as a wide-range of supporting characters like Dom's roommate Doris, AgustÃ­n's boyfriend Frank, and Patrick's co-worker Owen.</p>",
    premiered: "2014-01-19",
    url: "https://www.tvmaze.com/shows/140/looking",
  },
  {
    id: 134,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
      {
        id: 18,
        name: "Medical",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1970.jpg",
    name: "Getting On",
    country: "United States",
    rating: 7.8,
    summary:
      "<p>From creators Mark V. Olsen and Will Scheffer, the series follows the daily lives of nurses and doctors as they struggle with the darkly comic realities of caring for the elderly in an overwhelmed healthcare system, skewering the petty bureaucracies of modern medical practice in America.</p>",
    premiered: "2013-11-24",
    url: "https://www.tvmaze.com/shows/141/getting-on",
  },
  {
    id: 150,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 9,
        name: "Espionage",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/146/366911.jpg",
    name: "The Americans",
    country: "United States",
    rating: 8.5,
    summary:
      "<p><b>The Americans</b> is a period drama about the complex marriage of two KGB spies posing as Americans in suburban Washington D.C. shortly after Ronald Reagan is elected President.</p>",
    premiered: "2013-01-30",
    url: "https://www.tvmaze.com/shows/157/the-americans",
  },
  {
    id: 138,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2003.jpg",
    name: "House of Lies",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>Charming, fast talking Marty Kaan and his crack team of management consultants know how to play the corporate game better than anyone, by using every dirty trick in the book to woo powerful CEOs and close huge deals. In the board rooms, barrooms, and bedrooms of the power elite, corruption is business as usual and everyone's out for themselves first. Nothing is sacred in this scathing, irreverent satire of corporate America today.</p>",
    premiered: "2012-01-08",
    url: "https://www.tvmaze.com/shows/145/house-of-lies",
  },
  {
    id: 139,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/123/309535.jpg",
    name: "Episodes",
    country: "United States",
    rating: 7.9,
    summary:
      "<p>Matt LeBlanc stars as Matt LeBlanc in <b>Episodes</b>, the hilarious comedy series about remaking a comedy series. When husband and wife writing team Sean and Beverly set out to reproduce their British TV hit for an American network, all of their worst fears come true as Hollywood lives up to its reputation for absurdity. Not only does the network cast Matt LeBlanc in the starring role, but Matt takes the lead in deviously twisting their beloved series into a terrible clichÃ©, while testing the couple's marriage with diversions and temptations.</p>",
    premiered: "2011-01-09",
    url: "https://www.tvmaze.com/shows/146/episodes",
  },
  {
    id: 140,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2021.jpg",
    name: "Nurse Jackie",
    country: "United States",
    rating: 8,
    summary:
      "<p>Every day is a matter of life and death in a hectic New York City hospital, but for <b>Nurse Jackie</b> that's the easiest part. Between chronic back pain that won't quit, and a personal life on the constant edge of collapse, it's going to take a white lie here, a bent rule there, and a handful of secret strategies to relieve the pain, and stay one step ahead of total disaster.</p>",
    premiered: "2009-06-08",
    url: "https://www.tvmaze.com/shows/147/nurse-jackie",
  },
  {
    id: 141,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2036.jpg",
    name: "Web Therapy",
    country: "United States",
    rating: 7,
    summary:
      "<p>Fiona Wallice is a therapist with little patience for her patients. Tired of hearing about people's problems for fifty long minutes, she devises a new treatment, the three-minute video chat. And still, the sessions end up being largely about her. If she's your therapist, you've got problems. Emmy AwardÂ® winner Lisa Kudrow co-created, produces and stars in this outrageous therapeutic send-up. Originally produced as webisodes, <b>Web Therapy</b> features an A-list guest cast who, along with Kudrow, improvise their performances with hilarious results.</p>",
    premiered: "2011-07-19",
    url: "https://www.tvmaze.com/shows/148/web-therapy",
  },
  {
    id: 142,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 17,
        name: "History",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/46/117237.jpg",
    name: "Masters of Sex",
    country: "United States",
    rating: 7.3,
    summary:
      "<p><b>Masters of Sex</b> is a drama that portrays the real-life pioneers of the science of human sexuality, William Masters and Virginia Johnson. The series chronicles the unusual lives, romance, and pop culture trajectory of Masters and Johnson. Their research touched off the sexual revolution and took them from a midwestern teaching hospital in St. Louis to the cover of Time magazine and nearly a dozen appearances on Johnny Carson's couch.</p>",
    premiered: "2013-09-29",
    url: "https://www.tvmaze.com/shows/149/masters-of-sex",
  },
  {
    id: 143,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/133/332796.jpg",
    name: "Shameless",
    country: "United States",
    rating: 8.5,
    summary:
      "<p><b>Shameless</b> is a fiercely engaging and fearlessly twisted series. Chicagoan Frank Gallagher is the proud single dad of six smart, industrious, independent kids, who without him would be... perhaps better off. When Frank's not at the bar spending what little money they have, he's passed out on the floor. But the kids have found ways to grow up in spite of him. They may not be like any family you know, but they make no apologies for being exactly who they are.</p>",
    premiered: "2011-01-09",
    url: "https://www.tvmaze.com/shows/150/shameless",
  },
  {
    id: 144,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2066.jpg",
    name: "The Newsroom",
    country: "United States",
    rating: 8.5,
    summary:
      "<p><b>The Newsroom</b> follows the members of a cable news team on their quixotic mission to do the news well in the face of a fickle audience, corporate mandates and tangled personal relationships.</p>",
    premiered: "2012-06-24",
    url: "https://www.tvmaze.com/shows/151/the-newsroom",
  },
  {
    id: 145,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/212/531511.jpg",
    name: "Ray Donovan",
    country: "United States",
    rating: 8.2,
    summary:
      "<p>Set in the sprawling mecca of the rich and famous, Ray Donovan does the dirty work for LA's top power players as the go-to guy who makes the problems of the city's celebrities, superstar athletes, and business moguls disappear. This powerful drama unfolds when his father is unexpectedly released from prison, setting off a chain of events that shakes the Donovan family to its core.</p>",
    premiered: "2013-06-30",
    url: "https://www.tvmaze.com/shows/152/ray-donovan",
  },
  {
    id: 146,
    genres: [],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2090.jpg",
    name: "Utopia",
    country: "United States",
    rating: 0,
    summary:
      "<p>Get ready to witness the birth of a brave new world. On the daring unscripted series <b>Utopia</b>, 15 pioneering Americans wave goodbye - for an entire year - to the lives they've known, move to a remote location and set out to create a society from scratch. They've got limited supplies, wildly diverse backgrounds and zero bathrooms.</p>",
    premiered: "2014-09-07",
    url: "https://www.tvmaze.com/shows/153/utopia",
  },
  {
    id: 147,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2119.jpg",
    name: "Sanctuary",
    country: "United States",
    rating: 8.1,
    summary:
      "<p><b>Sanctuary</b> follows the adventures of the beautiful, enigmatic and always surprising Dr. Helen Magnus, a brilliant scientist who holds the secrets of a clandestine population and a group of strange and sometimes terrifying beings that hide among humans.</p><p>Along with her new recruit, forensic psychiatrist Dr. Will Zimmerman, her quirky tech wiz Henry and her fearless daughter Ashley, Magnus seeks to protect this threatened phenomena as well as unlock the mysteries behind their existence.</p>",
    premiered: "2008-10-03",
    url: "https://www.tvmaze.com/shows/154/sanctuary",
  },
  {
    id: 148,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2128.jpg",
    name: "Beauty and the Beast",
    country: "United States",
    rating: 7.3,
    summary:
      "<p>Detective Catherine Chandler is a smart, no-nonsense homicide detective. When she was a teenager, she witnessed the murder of her mother at the hands of two gunmen and herself was saved by someone â€“ or something. Years have passed and while investigating a murder, Catherine discovers a clue that leads her to Vincent Keller, who was reportedly killed in 2002. Catherine learns that Vincent is actually still alive and that it was he who saved her many years before. For mysterious reasons that have forced him to live outside of traditional society, Vincent has been in hiding for the past 10 years to guard his secret â€“ when he is enraged, he becomes a terrifying beast, unable to control his super-strength and heightened senses.</p>",
    premiered: "2012-10-11",
    url: "https://www.tvmaze.com/shows/155/beauty-and-the-beast",
  },
  {
    id: 149,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/397/992910.jpg",
    name: "Twin Peaks",
    country: "United States",
    rating: 8,
    summary:
      "<p>Set in the fictional town of Twin Peaks in northeast Washington state, this is the story of FBI Special Agent Dale Cooper and his investigation of the murder of a popular local teenage schoolgirl, Laura Palmer.</p>",
    premiered: "1990-04-08",
    url: "https://www.tvmaze.com/shows/156/twin-peaks",
  },
  {
    id: 151,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2245.jpg",
    name: "Fringe",
    country: "United States",
    rating: 8.8,
    summary:
      "<p>When an international flight lands at Boston's Logan Airport and the passengers and crew have all died grisly deaths, FBI Special Agent Olivia Dunham is called in to investigate. After her partner is nearly killed during the investigation, a desperate Olivia searches frantically for someone to help, leading her to Dr. Walter Bishop, our generation's Einstein. There's only one catch: he's been institutionalized for the last twenty years, and the only way to question him requires pulling his estranged son Peter in to help. When Olivia's investigation leads her to a manipulative corporate executive, she and her team will discover that what happened on Flight 627 is only a small piece of a larger, more shocking truth and will explore the blurring line between the possible and the impossible.</p>",
    premiered: "2008-09-09",
    url: "https://www.tvmaze.com/shows/158/fringe",
  },
  {
    id: 152,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/280/700731.jpg",
    name: "State of Affairs",
    country: "United States",
    rating: 6.5,
    summary:
      "<p>Each day the President is faced with dozens of life and death decisions, and to prioritize the biggest international crises facing the country, one top CIA analyst â€” Charleston Tucker â€” assembles the President's Daily Briefing (PDB). This list of the most vital security issues facing the nation brings with it moral and political judgment calls for Charleston and... her trusted group of brilliant analysts at the agency. Aside from the political minefields she has to walk, Charlie has a close personal relationship with the President because she was once engaged to her son before a tragic terrorist attack took his life. Charlie survived that attack and is now determined to bring the perpetrators to justice. Navigating a complex personal life and a pressure-cooker profession is, of course, a challenge, and Charlie sometimes engages in boundary-pushing behavior to avoid facing her grief. But when the clock strikes 2 a.m., she is all about her job â€” protecting her nation, serving her President and still trying to get to the bottom of her fiancÃ©'s murder that will reveal itself as a shocking mystery.</p>",
    premiered: "2014-11-17",
    url: "https://www.tvmaze.com/shows/159/state-of-affairs",
  },
  {
    id: 153,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2216.jpg",
    name: "Weeds",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>Weeds</b> is based around an american widow (Nancy Botwin) with 2 children who begins selling cannabis for financial gain after the death of her husband. Her family become involved in more and more illegal activities as the show progresses.</p>",
    premiered: "2005-08-07",
    url: "https://www.tvmaze.com/shows/160/weeds",
  },
  {
    id: 154,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/145/363769.jpg",
    name: "Dexter",
    country: "United States",
    rating: 8.5,
    summary:
      "<p>He's smart, he's good looking, and he's got a great sense of humor. He's Dexter Morgan, everyone's favorite serial killer. As a Miami forensics expert, he spends his days solving crimes, and nights committing them. But Dexter lives by a strict code of honor that is both his saving grace and lifelong burden. Torn between his deadly compulsion and his desire for true happiness, Dexter is a man in profound conflict with the world and himself.</p>",
    premiered: "2006-10-01",
    url: "https://www.tvmaze.com/shows/161/dexter",
  },
  {
    id: 155,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2256.jpg",
    name: "CarnivÃ le",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>CarnivÃ le</b> is set in the United States during the Great Depression and Dust Bowl. In tracing the lives of two disparate groups of people, its overarching story depicts the battle between good and evil and the struggle between free will and destiny, the storyline mixes Christian theology with Gnosticism and Masonic lore, particularly that of the Knights Templar.</p>",
    premiered: "2003-09-14",
    url: "https://www.tvmaze.com/shows/162/carnivale",
  },
  {
    id: 156,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/42/106702.jpg",
    name: "Human Target",
    country: "United States",
    rating: 8.1,
    summary:
      "<p>Christopher Chance is a unique private contractor/security expert/bodyguard hired when an unusual or imminent threat cannot be solved through normal means of protection. Chance works with his business partner and trusted friend, Winston, and hired gun, Guerrero, to integrate himself completely into his clients' lives and eliminate the threat by becoming the <b>Human Target</b>.</p>",
    premiered: "2010-01-17",
    url: "https://www.tvmaze.com/shows/163/human-target",
  },
  {
    id: 157,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/80/201761.jpg",
    name: "Banshee",
    country: "United States",
    rating: 8.7,
    summary:
      "<p><b>Banshee</b> stars Antony Starr as Lucas Hood, an ex-con and master thief who assumes the identity of the sheriff of Banshee, Pennsylvania, where he continues his criminal activities, even as he's hunted by the shadowy gangsters he betrayed years earlier.</p>",
    premiered: "2013-01-11",
    url: "https://www.tvmaze.com/shows/164/banshee",
  },
  {
    id: 158,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2303.jpg",
    name: "Bionic Woman",
    country: "United States",
    rating: 6.5,
    summary:
      "<p>When a devastating car accident leaves Jaime Sommer at death's door, her only hope of survival is a cutting-edge, top-secret technology performed by her boyfriend, Dr. Will Anthros and with her new bionics come a covert life that she is not sure she is ready to lead.</p>",
    premiered: "2007-09-26",
    url: "https://www.tvmaze.com/shows/165/bionic-woman",
  },
  {
    id: 159,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 21,
        name: "War",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2313.jpg",
    name: "Battlestar Galactica",
    country: "United States",
    rating: 8.7,
    summary:
      "<p>The world ended with no warning, and all that was leftâ€¦ was hope.</p><p>A truce between the humans of the Twelve Colonies and the Cylonsâ€”intelligent robots designed by humankindâ€”lasts for 40 tense and silent years. <b>Battlestar Galactica</b> picks up just as the Cylons commit mass genocide against humanity. Only the Battlestar Galactica (an old warship about to be decommissioned and turned into a museum) and those souls fortunate enough to be aboard other starships were able to survive the attack. In the aftermath, the Galactica's commanding officer, William Adama, finds himself responsible for safeguarding the last remnants of the human raceâ€”fewer than 50,000 desperate survivors. Meanwhile, the annihilation of the Colonial government results in the succession of the Secretary of Education, Laura Roslin, to the presidency. Driven by prophetic visions and political necessity, the Galactica travels through uncharted space in hopes of finding the mythical, lost 13th colonyâ€”Earth.</p>",
    premiered: "2003-12-08",
    url: "https://www.tvmaze.com/shows/166/battlestar-galactica",
  },
  {
    id: 160,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2330.jpg",
    name: "24",
    country: "United States",
    rating: 8.4,
    summary:
      "<p>Jack Bauer, agent of CTU (Counter Terrorist Unit) faces threats against his country and himself in this action packed show. Each season contains of one day, each episode shows one hour of Jack Bauer's day. <b>24</b> is the only action show in real time and gained a lot of fans during the years with this concept.</p>",
    premiered: "2001-11-06",
    url: "https://www.tvmaze.com/shows/167/24",
  },
  {
    id: 161,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2385.jpg",
    name: "Chuck",
    country: "United States",
    rating: 8.4,
    summary:
      "<p><b>Chuck</b> Bartowski is a computer geek that gets catapulted into a new career as the government's most vital secret agent. When Chuck opens an e-mail subliminally encoded with government secrets, he unwittingly downloads an entire server of sensitive data into his brain. With the government's most precious secrets in Chuck's head, Major John Casey of the National Security Agency assumes the responsibility of protecting him. His partner is the CIA's top agent, Sarah Walker.</p>",
    premiered: "2007-09-24",
    url: "https://www.tvmaze.com/shows/168/chuck",
  },
  {
    id: 162,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
    name: "Breaking Bad",
    country: "United States",
    rating: 9.3,
    summary:
      "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
    premiered: "2008-01-20",
    url: "https://www.tvmaze.com/shows/169/breaking-bad",
  },
  {
    id: 163,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/203/508250.jpg",
    name: "Orange Is the New Black",
    country: null,
    rating: 8,
    summary:
      "<p><b>Orange Is the New Black</b> is the story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.</p>",
    premiered: "2013-07-11",
    url: "https://www.tvmaze.com/shows/170/orange-is-the-new-black",
  },
  {
    id: 164,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2451.jpg",
    name: "How I Met Your Mother",
    country: "United States",
    rating: 7.8,
    summary:
      "<p><b>How I Met Your Mother</b> is a comedy about Ted and how he fell in love. It all starts when Ted's best friend, Marshall drops the bombshell that he's going to propose to his long-time girlfriend, Lilya kindergarten teacher. At that moment, Ted realizes that he had better get a move on if he too hopes to find true love. Helping him in his quest is Barney a friend with endless, sometimes outrageous opinions, a penchant for suits and a foolproof way to meet women. When Ted meets Robin he's sure it's love at first sight, but destiny may have something else in store.</p>",
    premiered: "2005-09-19",
    url: "https://www.tvmaze.com/shows/171/how-i-met-your-mother",
  },
  {
    id: 165,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 19,
        name: "Legal",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/393/983536.jpg",
    name: "Suits",
    country: "United States",
    rating: 8.2,
    summary:
      "<p><b>Suits</b> delves into the fast-paced, high-stakes world of a top Manhattan corporate law firm where hotshot associate Harvey Specter makes a risky move by hiring Mike Ross a brilliant but unmotivated college dropout, as his associate. As he becomes enmeshed in this unfamiliar world, Mike relies heavily on the firm's best paralegal Rachel Zane and Harvey's no-nonsense assistant Donna Paulsen to help him serve justice. With a photographic memory and the street smarts of a hustler, Mike proves to be a legal prodigy despite the absence of bonafide legal credentials.</p>",
    premiered: "2011-06-23",
    url: "https://www.tvmaze.com/shows/172/suits",
  },
  {
    id: 166,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2439.jpg",
    name: "Parks and Recreation",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>Parks and Recreation</b> is a comedy series based around the main character Leslie Knope (a bureaucrat) in the parks department of Pawnee.</p>",
    premiered: "2009-04-09",
    url: "https://www.tvmaze.com/shows/174/parks-and-recreation",
  },
  {
    id: 167,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/169/424482.jpg",
    name: "House of Cards",
    country: null,
    rating: 8.3,
    summary:
      "<p>Based on the BBC miniseries of the same name, <b>House of Cards</b> follows Francis Underwood, the politician's politician â€“ masterful, beguiling, charismatic and ruthless. He and his equally ambitious wife Claire will stop at nothing to ensure their ascendancy. This wicked political drama slithers beneath the curtain and through the back halls of greed, sex, love and corruption in modern Washington D.C.</p>",
    premiered: "2013-02-01",
    url: "https://www.tvmaze.com/shows/175/house-of-cards",
  },
  {
    id: 168,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/30/75365.jpg",
    name: "Teen Wolf",
    country: "United States",
    rating: 8.1,
    summary:
      "<p>Always an outsider and often unnoticed, Scott McCall yearns to be recognized in some small way that takes him out of his typical state of high school anonymity. When his best friend, Stiles, convinces him to go into the woods one night to join a police search for a dead body, Scott encounters a creature in the darkness. Narrowly escaping an attack with a vicious bite in his side, the next day brings strange surprises for Scott at school and his life will never be the same.</p><p>MTV's reboot of the classic 1980s cult movie <b>Teen Wolf</b>.</p>",
    premiered: "2011-06-05",
    url: "https://www.tvmaze.com/shows/176/teen-wolf",
  },
  {
    id: 169,
    genres: [
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/125/314775.jpg",
    name: "Pretty Little Liars",
    country: "United States",
    rating: 7.6,
    summary:
      '<p>Rosewood is a perfect little town. So quiet and pristine, you\'d never guess it holds so many secrets. Some of the ugliest ones belong to the prettiest girls in town: Aria, Spencer, Hanna and Emily, four friends whose darkest secrets have been unraveling since Alison, the Queen Bee of their group disappeared. As the mystery surrounding Ali\'s disappearance resurfaces, the girls begin getting messages from a mysterious "A," who they quickly realize is out to get them. Now, after years of tormenting and numerous shocking revelations, the Liars are united and ready to kick some "A" and uncover the truth! No longer just wanting to sit by and wait for "A\'s" latest cruel attack, Aria, Emily, Hanna and Spencer take matters into their own hands and try to finally put a stop to their tormentor. As relationships are put to the test, new and old secrets are revealed and the stakes are raised higher than ever before as the Liars come closer to the truth. Will all of their sacrifices be worth it in the end?</p>',
    premiered: "2010-06-08",
    url: "https://www.tvmaze.com/shows/177/pretty-little-liars",
  },
  {
    id: 170,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/260/650489.jpg",
    name: "The Legend of Korra",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>Avatar Korra fights to keep Republic City safe from the evil forces of both the physical and spiritual worlds.</p>",
    premiered: "2012-04-14",
    url: "https://www.tvmaze.com/shows/178/the-legend-of-korra",
  },
  {
    id: 171,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2527.jpg",
    name: "The Wire",
    country: "United States",
    rating: 8.9,
    summary:
      "<p>The first season of <b>The Wire</b> (2002) concentrated on the often-futile efforts of police to infiltrate a West Baltimore drug ring headed by Avon Barksdale and his lieutenant, Stringer Bell. In Seasons Two and Three, as the Barksdale investigation escalated, new storylines involving pressures on the working class and the city's political leadership were introduced. Season Four focused on the stories of several young boys in the public school system, struggling with problems at home and the lure of the corner - set against the rise of a new drug empire in West Baltimore and a new Mayor in City Hall. The fifth and final season of <i>The Wire</i> centers on the media's role in addressing - or failing to address - the fundamental political, economic and social realities depicted over the course of the series, while also resolving storylines of the numerous characters woven throughout the narrative arc of the show.</p>",
    premiered: "2002-06-02",
    url: "https://www.tvmaze.com/shows/179/the-wire",
  },
  {
    id: 172,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2600.jpg",
    name: "Firefly",
    country: "United States",
    rating: 9,
    summary:
      "<p>Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.</p>",
    premiered: "2002-09-20",
    url: "https://www.tvmaze.com/shows/180/firefly",
  },
  {
    id: 173,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/54/136509.jpg",
    name: "Extant",
    country: "United States",
    rating: 7.2,
    summary:
      "<p>Molly Woods is an astronaut who returns home from a year-long solo mission in space and tries to reconnect with her husband and son in their everyday life. Her experiences in space and home lead to events that ultimately will change the course of human history.</p>",
    premiered: "2014-07-09",
    url: "https://www.tvmaze.com/shows/181/extant",
  },
  {
    id: 174,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/78/195951.jpg",
    name: "Black Sails",
    country: "United States",
    rating: 8.4,
    summary:
      "<p>1715. The Golden Age of Piracy. New Providence Island is a lawless territory, controlled by history's most notorious pirate captains. The most feared is Captain Flint.</p><p>As the British Navy returns to redeem their land and exterminate Flint and his crew, another side of him emerges. Captain Flint aligns himself with Eleanor Guthrie, daughter of the local kingpin, to hunt the ultimate prize and ensure their survival.</p><p>Many opponents stand in their way: rival captains, jealous of Flint's power; Eleanor's ambitious and intrusive father; and a young sailor recently recruited onto Flint's crew, John Silver, who constantly undermines his captain's agenda.</p>",
    premiered: "2014-01-25",
    url: "https://www.tvmaze.com/shows/182/black-sails",
  },
  {
    id: 175,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2649.jpg",
    name: "Tyrant",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>Tyrant</b> is a drama that follows a typical American family whose members find themselves embroiled in the geopolitical intrigue of a volatile Middle Eastern country. Barry Al-Fayeed is a California pediatrician who also happens to be the second son of a Middle Eastern dictator. Barry reluctantly agrees to return home with his American family for his nephew's wedding. Events thrust him into the complex and turbulent growing pains of a nation straining to break free from dictatorial rule.</p>",
    premiered: "2014-06-24",
    url: "https://www.tvmaze.com/shows/183/tyrant",
  },
  {
    id: 176,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012627.jpg",
    name: "BoJack Horseman",
    country: null,
    rating: 8,
    summary:
      "<p>Meet the most beloved sitcom horse of the '90s, 20 years later. He's a curmudgeon with a heart of... not quite gold... but something like gold. Copper?</p>",
    premiered: "2014-08-22",
    url: "https://www.tvmaze.com/shows/184/bojack-horseman",
  },
  {
    id: 177,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/73/184895.jpg",
    name: "Salem",
    country: "United States",
    rating: 7.1,
    summary:
      '<p>Set in 17th century colonial Massachusettsâ€”a significant time in the history of American politics, religion and societyâ€” <b>Salem</b> brings you the real story behind the infamous witch trials. In Salem, witches are real, and they\'re behind it all. Salem Village and Salem Town feuded over property, grazing rights and church rights. The government was dominated by Puritan leaders. People were scrutinized closely and this resulted in obvious discord. They were afraid of being persecuted for anything that may offend the Puritan mindset. The word "witch" seemed an easy and appropriate curse hurled at someone who behaved abnormally.</p>',
    premiered: "2014-04-20",
    url: "https://www.tvmaze.com/shows/185/salem",
  },
  {
    id: 178,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 21,
        name: "War",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/356/890242.jpg",
    name: "TURN: Washington's Spies",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>Turn: Washington's Spies</b> takes viewers into the stirring and treacherous world of the Revolutionary War and introduces Abraham Woodhull who, after aligning with a group of childhood friends, forms the Culper Ring--America's first spy ring.</p>",
    premiered: "2014-04-06",
    url: "https://www.tvmaze.com/shows/186/turn-washingtons-spies",
  },
  {
    id: 179,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2715.jpg",
    name: "Intelligence",
    country: "United States",
    rating: 6.7,
    summary:
      "<p><b>Intelligence</b> is a dramatic thriller about a high-tech intelligence operative enhanced with a super-computer microchip in his brain. With this implant, Gabriel Vaughn is the first human ever to be connected directly into the worldwide information grid and have complete access to Internet, WiFi, telephone and satellite data. He can hack into any data center and access key Intel in the fight to protect the United States from its enemies. Leading the elite government cyber-security agency created to support him is Director Lillian Strand, a straightforward and efficient boss who oversees the unit's missions. Strand assigns Riley Neal, a Secret Service agent, to protect Gabriel from outside threats, as well as from his appetite for reckless, unpredictable behavior and disregard for protocol. Other skilled members of the Cybercom team include Chris Jameson and Gonzalo \"Gonzo\" Rodriguez two resourceful federal investigators. The brains behind the design of the chip is Dr. Shenendoah Cassidy, whose son, Nelson is jealous of Gabriel's prominent place in his father's life. As the first supercomputer with a beating heart, Gabriel is the most valuable piece of technology the country has ever created and is the U.S.'s secret weapon.</p>",
    premiered: "2014-01-07",
    url: "https://www.tvmaze.com/shows/187/intelligence",
  },
  {
    id: 180,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/51/127824.jpg",
    name: "Believe",
    country: "United States",
    rating: 7.3,
    summary:
      '<p>Levitation, telekinesis, the ability to control nature and even predict the future... Since she was 2 years old, Bo has had gifts she could neither fully understand, nor control. Raised by a small group known as the "True Believers," the orphaned girl has been safeguarded from harmful outsiders who would use her forces for personal gain. But now that she is 10, her powers have become stronger and the threat has grown more dangerous. With her life and future now in jeopardy, the "Believers" turn to the only person they see fit to be her full-time protector. That is, once they break him out of jail. Tate, a wrongfully imprisoned death row inmate who\'s lost his will, is initially reluctant until he witnesses one of her extraordinary abilities. Bo sees people for who they truly are... and who they may become. Tate and Bo begin their journey, one in which trust must be earned. Traveling from city to city, every place they stop and everyone they meet will be changed forever. But they\'ll have to keep going to stay one step ahead of the sinister forces after Bo\'s power... because it will take a miracle to keep them safe forever.</p>',
    premiered: "2014-03-10",
    url: "https://www.tvmaze.com/shows/188/believe",
  },
  {
    id: 181,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2776.jpg",
    name: "Star-Crossed",
    country: "United States",
    rating: 6.9,
    summary:
      "<p>When Emery was 6 years old, an alien spacecraft crash-landed in her small town. Whether they came in peace or with more sinister intentions didn't matter: a fierce battle erupted as humans fought for control over their new rivals, an alien species called the Atrians. In the midst of the conflict, Roman, a 6-year-old Atrian boy, found his way to a shed behind Emery's house, where she protected him from harm, bringing him food, comfort - and friendship. In their brief time together, Emery and Roman forged a deep bond, but the authorities wasted no time tracking Roman down and capturing him in a violent confrontation. Emery has grown up believing that Roman was killed that day. Ten years later, the Atrians have been acclimated to life on Earth, but they are interned in a heavily-guarded camp known as the Sector to keep them separate from humans. Now, for the first time, a group of Atrian teens will enroll in a suburban human high school, with the goal of testing the feasibility of human/alien integration. The eyes of the nation and the whole world are fixed on this historical social experiment, an endeavor fraught with suspicion and fear. In the mayhem of the first day, Emery is amazed to learn that Roman was not killed by the authorities and is, in fact, one of the Atrian students. Their childhood bond is quickly rekindled - in a school and a society that distrusts everything about the Atrians, Emery and Roman have found each other again. However, their relationship is threatened by the small-mindedness of their respective communities and the political agendas of people in power. While the world around them rages with anger and prejudice, their bond becomes increasingly strong and increasingly dangerous. As an epic Romeo and Juliet romance unfolds, a violent encounter between Roman's father and Emery's father occurs in the Sector. Can Roman and Emery's love - and peace between the species - survive?</p>",
    premiered: "2014-02-17",
    url: "https://www.tvmaze.com/shows/189/star-crossed",
  },
  {
    id: 182,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2786.jpg",
    name: "Crisis",
    country: "United States",
    rating: 7.1,
    summary:
      "<p>It's field trip day for the students of Ballard High School, a place that educates the children of Washington, D.C.'s elite, top-of-their-industry CEOs, international diplomats, political power players and even the president's son. But when their bus is ambushed on a secluded rural road, the teenagers and their chaperones are taken, igniting a national crisis. Now with some of the country's most powerful parents at the mercy of one vengeful mastermind, the question arises: How far would you go and what would you become to ensure your child's safe return? With so many parents and dignitaries put into play with nowhere to turn and no one to trust, this unthinkable scenario grows from the select families at risk to an entire nation at stake.</p>",
    premiered: "2014-03-16",
    url: "https://www.tvmaze.com/shows/190/crisis",
  },
  {
    id: 183,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2798.jpg",
    name: "Halt and Catch Fire",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>Halt and Catch Fire</b> is set roughly one year after IBM all but corners the market with the release of its first major product â€“ the IBM PC. In this fictional drama, a former IBM executive, Joe MacMillan plans to reverse engineer the flagship product of his former employer and forces his current company, Cardiff Electric, into the personal computer race. MacMillan enlists the help of Gordon Clark, a great engineer whose unrealized dreams of creating a revolutionary product have created tension in his marriage to Donna, and Cameron Howe, a volatile prodigy who puts her future in jeopardy to join MacMillan's rogue PC project. Halt and Catch Fire thrives on the spirit of innovation and explores what it's like to stand at the forefront of something world-changing and work towards it, no matter the risk.</p>",
    premiered: "2014-06-01",
    url: "https://www.tvmaze.com/shows/191/halt-and-catch-fire",
  },
  {
    id: 184,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2826.jpg",
    name: "Hello Ladies",
    country: "United States",
    rating: 6.5,
    summary:
      "<p>Stewart is a gawky, 6' 7\" Englishman searching for the woman of his dreams in Los Angeles. Half as charming - and twice as desperate - as he thinks he is, he's obsessed with infiltrating the glamorous world of beautiful people, who won't let him in.</p>",
    premiered: "2013-09-29",
    url: "https://www.tvmaze.com/shows/192/hello-ladies",
  },
  {
    id: 185,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2831.jpg",
    name: "Dads",
    country: "United States",
    rating: 5.3,
    summary:
      "<p>Honor thy father. Way easier said than done. Especially when your dad's broke, living in your house and ruining your life. <b>Dads</b> explores the often treacherous terrain of the father-son landscape. This series follows two successful guys - and childhood best friends - now in their mid-30s whose relatively stable lives get turned upside down when their pain-in-the-neck patriarchs move in.</p>",
    premiered: "2013-09-17",
    url: "https://www.tvmaze.com/shows/193/dads",
  },
  {
    id: 186,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/160/401855.jpg",
    name: "Hannibal",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>Criminal profiler Will Graham is tasked by FBI agent Jack Crawford, the head of Behavioral Sciences, to help investigate the disappearances of eight young girls across Minnesota. Graham and Crawford's team investigate several subsequent murders, while also trying to catch the Chesapeake Ripper. With the investigation weighing heavily on Graham, Crawford decides to have him supervised by psychiatrist Dr. Hannibal Lecter, who, unbeknownst to them, is the Chesapeake Ripper himself, actively seeking to derail the investigation.</p>",
    premiered: "2013-04-04",
    url: "https://www.tvmaze.com/shows/194/hannibal",
  },
  {
    id: 187,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/177/444429.jpg",
    name: "Bates Motel",
    country: "United States",
    rating: 8,
    summary:
      "<p><b>Bates Motel</b> is a contemporary prequel to the genre-defining film Psycho, and gives viewers an intimate portrayal of how Norman Bates' psyche unravels through his teenage years.</p><p>Following the tragic death of her husband, Norma Bates buys a motel on the outskirts of the idyllic coastal town of White Pine Bay, seeking a fresh start. As Norma and Norman get ensconced in their new home, they discover this town isn't quite what it seems, and the locals aren't so quick to let them in on their secrets. But the Bates' are done being pushed around and will do whatever it takes to survive - and will do whatever it takes to protect their own secrets.</p>",
    premiered: "2013-03-18",
    url: "https://www.tvmaze.com/shows/195/bates-motel",
  },
  {
    id: 188,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2868.jpg",
    name: "The Following",
    country: "United States",
    rating: 7,
    summary:
      "<p>The FBI estimates there are currently over 300 active serial killers in the United States. What would happen if these killers had a way of communicating and connecting with each other? What if they were able to work together and form alliances across the country? What if one brilliant psychotic serial killer was able to bring them all together and activate a following? Welcome to <b>The Following</b>, a terrifying new thriller.</p>",
    premiered: "2013-01-21",
    url: "https://www.tvmaze.com/shows/196/the-following",
  },
  {
    id: 189,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2892.jpg",
    name: "Da Vinci's Demons",
    country: null,
    rating: 8.1,
    summary:
      "<p>In a world where thought and faith are controlled, one man fights to set knowledge free. Leonardo da Vinci is tortured by a gift of superhuman genius. He finds himself in a conflict between truth and lies, religion and reason, past and future. His aspirations are used against him by opposing forces â€“ luring him into a game of seduction where those who despise his intellect need him most.</p><p>His quest for knowledge nearly becomes his undoing, but da Vinci's genius prevails and he emerges as an unstoppable force that lifts an entire era out of darkness and propels it into light. His story becomes a mirror into our own world, calling us all to join his fight to free the future.</p>",
    premiered: "2013-04-12",
    url: "https://www.tvmaze.com/shows/197/da-vincis-demons",
  },
  {
    id: 190,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 14,
        name: "Family",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/116/292055.jpg",
    name: "The Fosters",
    country: "United States",
    rating: 7.5,
    summary:
      "<p><b>The Fosters</b> is a critically-acclaimed series that centers on biracial lesbian couple Stef and Lena Foster, who are raising a multi-ethnic family mix of foster and biological kids. The second season will continue to explore the growing Fosters clan, with all the triumphs and travails, twists and turns, that fans of the series have come to expect. Callie and Jude will try to adjust to their new roles in the family, and everyone will deal with the fallout from their previous actions. Past mistakes will come home to roost, consequences will be handed out, and victories will be hard fought, and ultimately well-won. Their deep bonds will grow, enabling America's most modern family to face the future head on, with love in their hearts.</p>",
    premiered: "2013-06-03",
    url: "https://www.tvmaze.com/shows/198/the-fosters",
  },
  {
    id: 191,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/2950.jpg",
    name: "Mistresses",
    country: "United States",
    rating: 7.7,
    summary:
      "<p>Based on the hit UK television series of the same name, <b>Mistresses</b> is a provocative and thrilling drama about the scandalous lives of a sexy and sassy group of four girlfriends, each on her own path to self-discovery. These four friends find support and guidance with each other as they brave their turbulent journeys and life's storms of excitement, secrecy and betrayal, all the while bound by the complex relationships they've created.</p>",
    premiered: "2013-06-03",
    url: "https://www.tvmaze.com/shows/199/mistresses",
  },
  {
    id: 203,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 11,
        name: "Mystery",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3523.jpg",
    name: "666 Park Avenue",
    country: "United States",
    rating: 6.5,
    summary:
      "<p><b>666 Park Avenue</b> is a supernatural drama based around the building of the same name run by Gavin Doran. The story follows a couple and mysterious happenings as they first move in to the establishment.</p>",
    premiered: "2012-09-30",
    url: "https://www.tvmaze.com/shows/211/666-park-avenue",
  },
  {
    id: 204,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/120/302148.jpg",
    name: "Alcatraz",
    country: "United States",
    rating: 7,
    summary:
      "<p>Switching between eras, <b>Alcatraz</b> focuses on the Alcatraz prison, which was shut down in 1963 due to unsafe conditions for its prisoners and guards. The show's premise is that both the prisoners and the guards disappeared in 1963 and have abruptly reappeared in modern-day San Francisco, where they are being tracked down by a government agency.</p>",
    premiered: "2012-01-16",
    url: "https://www.tvmaze.com/shows/212/alcatraz",
  },
  {
    id: 192,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/55/138044.jpg",
    name: "The Tomorrow People",
    country: "United States",
    rating: 7.3,
    summary:
      "<p>They are the next evolutionary leap of mankind, a generation of humans born with paranormal abilities - <b>The Tomorrow People</b>. Stephen Jameson stands at the crossroads between the world we know and the shifting world of the future. Up until a year ago, Stephen was a \"normal\" teenager - until he began hearing voices and teleporting in his sleep, never knowing where he might wake up. Now, Stephen's issues have gone far beyond the usual teenage angst, and he is beginning to question his sanity. In desperation, Stephen decides to listen to one of the voices in his head, and it leads him to his first encounter with the Tomorrow People - John, Cara and Russell - a genetically advanced race with the abilities of telekinesis, teleportation and telepathic communication. The Tomorrow People are being hunted down by a paramilitary group of scientists known as Ultra. Led by Dr. Jedikiah Price, Ultra sees the Tomorrow People as a very real existential threat from a rival species, and the outcast group has been forced to hide out in an abandoned subway station just beneath the surface of the human world. Trading in secrets, Jedikiah offers Stephen the chance for a normal life with his family and best friend, Astrid, if he will help in the struggle to isolate and eradicate the Tomorrow People. On the other hand, Cara, John and Russell offer Stephen a different type of family and a home where he truly belongs. Unwilling to turn his back on humanity or the world of the Tomorrow People, Stephen sets out on his own path - a journey that could take him into the shadowy past to uncover the truth about his father's mysterious disappearance, or into an unknown future with The Tomorrow People.</p>",
    premiered: "2013-10-09",
    url: "https://www.tvmaze.com/shows/200/the-tomorrow-people",
  },
  {
    id: 193,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3005.jpg",
    name: "Devious Maids",
    country: "United States",
    rating: 8,
    summary:
      "<p><b>Devious Maids</b> is set in a world where murder and mayhem collide in the mansions of Beverly Hills' wealthiest and most powerful families. Class warfare has never been as fun and dirty as it is in the tiny enclave where the staff is as clever, witty and downright devilish as their employers. The series centers on a close-knit group of maids, Marisol, Rosie, Carmen Valentina and Zoila, who are bonded together by their jobs, life struggles and the melodramatic universe that engulfs their employers.</p>",
    premiered: "2013-06-23",
    url: "https://www.tvmaze.com/shows/201/devious-maids",
  },
  {
    id: 194,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3020.jpg",
    name: "Almost Human",
    country: "United States",
    rating: 7.7,
    summary:
      '<p><b>Almost Human</b> is an action-packed police drama set 35 years in the future, when police officers are partnered with highly evolved human-like androids. The year is 2048. Meet John Kennex a cop who survived one of the most catastrophic attacks ever made against the police department. After waking up from a 17-month coma, he can\'t remember much - except that his partner was killed; his girlfriend, Anna Moore, left him after the attack; and he lost one of his legs and is now outfitted with a highly sophisticated synthetic appendage. Suffering from depression, mental atrophy, trauma-onset OCD, PTSD and the "psychological rejection of his synthetic body part," John returns to work at the behest of longtime ally Captain Sandra Maldonado. By mandate, every cop must partner with a robot. And despite his passionate aversion to androids, John is paired up with a battle-ready MX-43. But he abruptly terminates his partnership after the robot discovers incriminating information about him. So technician Rudy Lom introduces John to Dorian, a discontinued android with unexpected emotional responses. Although such responses were deemed flaws, it is in these "flaws" that John relates to Dorian most. After all, John is part-machine now, and Dorian is part-human. John and Dorian\'s understanding of each other not only complements them, it connects them. As he adjusts to working with his new partner, John also must learn to get along with his new colleagues, including the eager and somewhat starstruck Detective Valerie Stahl and the distrustful Detective Richard Paul, who does not welcome John back with open arms. Almost Human will follow the week-to-week missions of John and Dorian, as they fight crime across this futuristic landscape, while the mysteries surrounding his attack and the larger mythology of this new world unfold.</p>',
    premiered: "2013-11-17",
    url: "https://www.tvmaze.com/shows/202/almost-human",
  },
  {
    id: 195,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3037.jpg",
    name: "The Carrie Diaries",
    country: "United States",
    rating: 6.1,
    summary:
      "<p>It's the summer of 1985, and, for the first time, 17-year-old Carrie Bradshaw can call Manhattan home. After her boyfriend Sebastian and best friend Maggie betrayed her, Carrie is happy to accept the offer to spend the summer living in the downtown loft apartment of her Interview magazine boss Larissa But as summer turns to fall and Carrie heads into her senior year, she and her friends and family discover that letting go of old loves and embracing new dreams comes with some tough new realities but also incredible new opportunities.</p>",
    premiered: "2013-01-14",
    url: "https://www.tvmaze.com/shows/203/the-carrie-diaries",
  },
  {
    id: 196,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3027.jpg",
    name: "Stargate SG-1",
    country: "United States",
    rating: 8.9,
    summary:
      "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>",
    premiered: "1997-07-27",
    url: "https://www.tvmaze.com/shows/204/stargate-sg-1",
  },
  {
    id: 197,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/54/137054.jpg",
    name: "Graceland",
    country: "United States",
    rating: 7.2,
    summary:
      "<p>Every year, the top graduates from the FBI Academy move from their classrooms at Quantico to their first assignments in the real world. For Agent Mike Warren, the dream has always been a post in Washington D.C. But the powers that be have other plans, and the young rookie is soon packing his bags for Graceland, a palatial beachfront mansion in Southern California that has become a cross-departmental boarding house for top undercover agents in the FBI, DEA and ICE.</p>",
    premiered: "2013-06-06",
    url: "https://www.tvmaze.com/shows/205/graceland",
  },
  {
    id: 198,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3059.jpg",
    name: "Stargate Atlantis",
    country: "United States",
    rating: 8.8,
    summary:
      "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
    premiered: "2004-07-16",
    url: "https://www.tvmaze.com/shows/206/stargate-atlantis",
  },
  {
    id: 199,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/204195.jpg",
    name: "Stargate Universe",
    country: "United States",
    rating: 8.3,
    summary:
      "<p><b>Stargate Universe</b> follows a band of soldiers, scientists and civilians, who must fend for themselves as they are forced through a Stargate when their hidden base comes under attack. The desperate survivors emerge aboard an ancient ship, which is locked on an unknown course and unable to return to Earth. Faced with meeting the most basic needs of food, water and air, the group must unlock the secrets of the ship's Stargate to survive. The danger, adventure and hope they find on board the Destiny will reveal the heroes and villains among them.</p>",
    premiered: "2009-10-02",
    url: "https://www.tvmaze.com/shows/207/stargate-universe",
  },
  {
    id: 200,
    genres: [],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3167.jpg",
    name: "The Chair",
    country: "United States",
    rating: 0,
    summary:
      "<p><b>The Chair</b> is a competition documentary series that follows two directors through the process of bringing their first feature to the screen. The up-and-coming directors, who have unique backgrounds and skill sets, will be provided with an identical screenplay which they must craft as their own film. <i>The Chair</i> will document the creation, marketing and theatrical release of both adaptations, which will also air on STARZ. Both directors will be given the same budget, and both versions will use locations in the same city. Through multiplatform voting, the audience will determine which director will be awarded $250,000.</p>",
    premiered: "2014-09-06",
    url: "https://www.tvmaze.com/shows/208/the-chair",
  },
  {
    id: 201,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
      {
        id: 22,
        name: "Sports",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3168.jpg",
    name: "Survivor's Remorse",
    country: "United States",
    rating: 7.7,
    summary:
      "<p><b>Survivor's Remorse</b> follows Cam Calloway, a basketball phenom in his early 20's who is suddenly thrust into the limelight after signing a multi-million dollar contract with a professional basketball team in Atlanta. Cam, along with his cousin, and confidant Reggie Vaughn, move to Georgia to start Cam's journey to success. The two confront the challenges of carrying opportunistic family members and their strong ties to the impoverished community that they come from. Cam, Reggie, and an unforgettable group of characters wrestle with the rewards and pitfalls of stardom, love, and loyalty.</p>",
    premiered: "2014-10-04",
    url: "https://www.tvmaze.com/shows/209/survivors-remorse",
  },
  {
    id: 202,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/375/938172.jpg",
    name: "Doctor Who",
    country: "United Kingdom",
    rating: 8.3,
    summary:
      "<p>Adventures across time and space with the time travelling alien and companions.</p>",
    premiered: "2005-03-26",
    url: "https://www.tvmaze.com/shows/210/doctor-who",
  },
  {
    id: 205,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/161/404453.jpg",
    name: "The Gates",
    country: "United States",
    rating: 7.2,
    summary:
      "<p>Nick Monohan and his family move from Chicago to a quiet, upscale planned community called <b>The Gates</b>, where he will be chief of police. They soon realize that their neighbors are not who they seem to be. The Gates is filled with such beings as vampires, witches, werewolves, and a succubus.</p>",
    premiered: "2010-06-20",
    url: "https://www.tvmaze.com/shows/213/the-gates",
  },
  {
    id: 206,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 14,
        name: "Family",
      },
      {
        id: 22,
        name: "Sports",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/116/291395.jpg",
    name: "Kingdom",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>Kingdom</b> is a raw family drama set against the world of Mixed Martial Arts (MMA) in Venice, California. Alvey Kulina owns Navy St. MMA with the help of his girlfriend Lisa Prince. He is willing to go through extraordinary means to make sure his fighters are taken care of, but all of this responsibility comes at a steep price. He has complicated relationships with both of his sons, Jay and Nate, who are both struggling with their own identities and places within Alvey's life and gym.</p>",
    premiered: "2014-10-08",
    url: "https://www.tvmaze.com/shows/214/kingdom",
  },
  {
    id: 207,
    genres: [
      {
        id: 14,
        name: "Family",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/389/973823.jpg",
    name: "American Dad!",
    country: "United States",
    rating: 7.4,
    summary:
      "<p>In <b>American Dad!</b>, Stan Smith leads the all-American family in this animated sitcom filled with wild and crazy extremes. Everyday life is taken to the limit as Stan applies the same drastic measures used in his job at the CIA to his home life. Driven by machismo and the American dream, he often is blind to how horribly he fails at his attempts. This father might not know best, but he never stops trying.</p>",
    premiered: "2005-02-06",
    url: "https://www.tvmaze.com/shows/215/american-dad",
  },
  {
    id: 208,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 8,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/423/1059147.jpg",
    name: "Rick and Morty",
    country: "United States",
    rating: 8.8,
    summary:
      "<p>Rick is a mentally gifted, but sociopathic and alcoholic scientist and a grandfather to Morty; an awkward, impressionable, and somewhat spineless teenage boy. Rick moves into the family home of Morty, where he immediately becomes a bad influence.</p>",
    premiered: "2013-12-02",
    url: "https://www.tvmaze.com/shows/216/rick-and-morty",
  },
  {
    id: 209,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3617.jpg",
    name: "Hostages",
    country: "United States",
    rating: 6.2,
    summary:
      "<p><b>Hostages</b> concerns the family of a doctor that is taken hostage by a group led by a rogue FBI agent. This occurs the night before surgery is due to be performed on the President.</p>",
    premiered: "2013-09-23",
    url: "https://www.tvmaze.com/shows/217/hostages",
  },
  {
    id: 210,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 7,
        name: "Romance",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3627.jpg",
    name: "Being Human",
    country: "United States",
    rating: 7.6,
    summary:
      "<p><b>Being Human</b> is a series based on the UK series of the same name. It is a supernatural orientated around a vampire, ghost and werewolf trying to live under the same household.</p>",
    premiered: "2011-01-17",
    url: "https://www.tvmaze.com/shows/218/being-human",
  },
  {
    id: 211,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3632.jpg",
    name: "Alphas",
    country: "United States",
    rating: 7.5,
    summary:
      "<p><b>Alphas</b> is a science fiction drama focusing on a team that investigates people with supernatural abilities.</p>",
    premiered: "2011-07-11",
    url: "https://www.tvmaze.com/shows/219/alphas",
  },
  {
    id: 212,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/231/577869.jpg",
    name: "Crossing Lines",
    country: "France",
    rating: 7.8,
    summary:
      "<p>The series taps into a fictional unit mandated by the International Criminal Court (ICC) to investigate cross-border crimes and ultimately bring global criminals to justice. <b>Crossing Lines</b> is set in the world's most exotic locales, where an elite team of eager cops work to solve the most notorious international crimes.</p>",
    premiered: "2013-06-23",
    url: "https://www.tvmaze.com/shows/220/crossing-lines",
  },
  {
    id: 213,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3655.jpg",
    name: "Rectify",
    country: "United States",
    rating: 8.2,
    summary:
      "<p><b>Rectify</b> is a haunting story of a man released from prison after spending nearly two decades on death row.</p>",
    premiered: "2013-04-22",
    url: "https://www.tvmaze.com/shows/221/rectify",
  },
  {
    id: 214,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3681.jpg",
    name: "Happyland",
    country: "United States",
    rating: 8,
    summary:
      "<p><b>Happyland</b> is a soapy teen dramedy exploring the underbelly of one of the country's most popular theme parks, going behind the scenes to reveal the not so magical reality of the park workers. The series centers on Lucy, the cynical teenage daughter of idealistic park princess mom, Elena. Having grown up in a world of manufactured happiness, Lucy wants to get out and experience something real. When Ian, the new park owner's son, arrives and sweeps her off her feet, Lucy is left wondering if fairy tale endings do exist after all. But when a scandalous secret turns her life upside down, she learns Happyland is far from a walk in the park.</p>",
    premiered: "2014-09-30",
    url: "https://www.tvmaze.com/shows/222/happyland",
  },
  {
    id: 215,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 11,
        name: "Mystery",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3692.jpg",
    name: "Twisted",
    country: "United States",
    rating: 7.4,
    summary:
      "<p>A one-hour mystery full of twists and turns that follows Danny Desai, a charismatic 16-year-old with a troubled past who returns to his hometown after spending five years in juvenile detention. Immediately branded an outcast, Danny attempts to reconnect with his two childhood best friends, Jo and Lacey. But when a fellow student is found dead in her home, Danny instantly becomes the prime suspect and town spirals into a frenzy of suspicion and mystery. Jo and Lacey must decide if their childhood friend is unforgivable, or if he's really a victim being persecuted for his own twisted secrets.</p>",
    premiered: "2013-03-19",
    url: "https://www.tvmaze.com/shows/224/twisted",
  },
  {
    id: 216,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3700.jpg",
    name: "Ravenswood",
    country: "United States",
    rating: 7.2,
    summary:
      "<p><b>Ravenswood</b> centered on a town not far from Rosewood, Pa., which has suffered under a deadly curse for generations. Five strangers find themselves connected by this fatal curse and need to dig into the town's mysterious and terrible history before it's too late for all of them.</p>",
    premiered: "2013-10-22",
    url: "https://www.tvmaze.com/shows/225/ravenswood",
  },
  {
    id: 217,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3713.jpg",
    name: "The Crazy Ones",
    country: "United States",
    rating: 7.1,
    summary:
      "<p><b>The Crazy Ones</b> is a comedy about a larger-than-life advertising genius whose unorthodox methods and unpredictable behavior would get him fired... if he weren't the boss. Simon Roberts is the head of a powerful agency, with the biggest clients and brands in the world, but even more important to him is that his daughter Sydney is by his side. As his partner, Sydney is Simon's exact opposite - focused, organized and eager to make a name for herself, but also too busy parenting her father, which she'd resent if he wasn't so brilliant at what he does. Joining them in the firm are the dashing and talented Zach art director Andrew, who's as hard-working as he is neurotic; and the beautiful and deceptively smart assistant Lauren. With his team and his daughter behind him, Simon continues to set the advertising world on fire, and it looks like they are definitely buying what these crazy ones are selling.</p>",
    premiered: "2013-09-26",
    url: "https://www.tvmaze.com/shows/226/the-crazy-ones",
  },
  {
    id: 218,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/117/293987.jpg",
    name: "Mob City",
    country: "United States",
    rating: 7.4,
    summary:
      "<p>The epic battle between a determined police chief and a dangerous mobster inflames 1940s Los Angeles in TNT's eagerly anticipated television event <b>Mob City</b>. This powerful drama comes to TNT from Frank Darabont, who wrote and directed the pilot and serves as executive producer on the series. Based on the critically acclaimed book L.A. Noir: The Struggle for the Soul of America's Most Seductive City, by John Buntin, Mob City opens in post-war Los Angeles, home to glamorous movie stars, powerful studio heads and returning war heroes. But it's also a city caught between a powerful and corrupt police force and an even more dangerous criminal network determined to make L.A. its West Coast base. Los Angeles Police Chief William Parker has made it his mission to free the city of criminals like Ben \"Bugsy\" Siegel and Mickey Cohen, the ruthless king of the Los Angeles underworld. Parker also won't hesitate to go after anyone from his own police force who sells out honor and duty for the sake of a big payout. To carry out his sweep of organized crime, Parker sets up a new mob task force within the LAPD. Headed by Det. Hal Morrison, the task force includes Det. Joe Teague, an ex-Marine who holds his cards close to his chest.</p>",
    premiered: "2013-12-04",
    url: "https://www.tvmaze.com/shows/227/mob-city",
  },
  {
    id: 219,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 21,
        name: "War",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3741.jpg",
    name: "Last Resort",
    country: "United States",
    rating: 7.3,
    summary:
      "<p>500 feet beneath the ocean's surface, the U.S. ballistic missile submarine Colorado receive their orders. Over a radio channel, designed only to be used if their homeland has been wiped out, they're told to fire nuclear weapons at Pakistan. Captain Marcus Chaplin demands confirmation of the orders only to be unceremoniously relieved of duty by the White House. XO Sam Kendal finds himself suddenly in charge of the submarine and facing the same difficult decision. When he also refuses to fire without confirmation of the orders, the Colorado is targeted, fired upon, and hit. The submarine and its crew find themselves crippled on the ocean floor, declared rogue enemies of their own country. Now, with nowhere left to turn, Chaplin and Kendal take the sub on the run and bring the men and women of the Colorado to an exotic island. Here they will find refuge, romance and a chance at a new life, even as they try to clear their names and get home.</p>",
    premiered: "2012-09-27",
    url: "https://www.tvmaze.com/shows/228/last-resort",
  },
  {
    id: 220,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3763.jpg",
    name: "The Neighbors",
    country: "United States",
    rating: 7.1,
    summary:
      '<p><b>The Neighbors</b> revolves around a family that has relocated to a gated townhouse community in New Jersey called "Hidden Hills". Upon their arrival, they discover that the entire community is populated by residents from another planet. Amongst their myriad quirks, these aliens identify themselves by the names of sports celebrities, patrol the community in golf carts, dress alike, receive nourishment through their eyes and mind by reading books rather than eating, and cry green goo from their ears. The aliens have assumed human form, but they can revert to their natural appearance by clapping their hands above their heads. They have been stuck on Earth for 10 years, still awaiting instructions to return home.</p>',
    premiered: "2012-09-26",
    url: "https://www.tvmaze.com/shows/229/the-neighbors",
  },
  {
    id: 221,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3773.jpg",
    name: "Go On",
    country: "United States",
    rating: 7,
    summary:
      "<p>Following the sudden death of his wife, sports radio personality Ryan King is forced to attend grief counseling. Feeling it unnecessary, he does so reluctantly, and with minimal participation, until it becomes clear that this may actually help him in unexpected ways.</p>",
    premiered: "2012-08-08",
    url: "https://www.tvmaze.com/shows/230/go-on",
  },
  {
    id: 222,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3781.jpg",
    name: "Vegas",
    country: "United States",
    rating: 7.9,
    summary:
      "<p><b>Vegas</b> is a drama inspired by the true story of former Las Vegas Sheriff Ralph Lamb, a fourth-generation rancher tasked with bringing order to Las Vegas in the 1960s, a gambling and entertainment mecca emerging from the tumbleweeds. Ralph Lamb wants to be left in peace to run his ranch, but Las Vegas is now swelling with outsiders and corruption which are intruding on his simple life. Recalling Lamb's command as a military police officer during World War II, the Mayor appeals to his sense of duty to look into a murder of a casino worker - and so begins Lamb's clash with Vincent Savino, a ruthless Chicago gangster who plans to make Vegas his own. Assisting Lamb in keeping law and order are his two deputies: his diplomatic, even-keeled brother Jack and his charming but impulsive son Dixon. Ambitious Assistant District Attorney Katherine O'Connell, who grew up on the ranch next to the Lambs, also lends a hand in preserving justice. In Vegas, two powerful men - Lamb and Savino - are engaged in a fierce battle for control of the budding oasis, and for both of them, folding is not an option.</p>",
    premiered: "2012-09-25",
    url: "https://www.tvmaze.com/shows/231/vegas",
  },
  {
    id: 223,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 6,
        name: "Horror",
      },
      {
        id: 12,
        name: "Supernatural",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3788.jpg",
    name: "The River",
    country: "United States",
    rating: 6.8,
    summary:
      "<p><b>The River</b> follows the story of wildlife expert and TV personality Emmet Cole. Emmet set course around the world with his wife, Tess, and son, Lincoln, while filming what would become one of the most popular shows in television. After he goes missing deep in the Amazon, his family, friends and crew set out on a mysterious and deadly journey to find him. Famed explorer Dr. Emmet Cole went looking for magic deep in the uncharted Amazon and never returned. The shocking truth about his disappearance is out there, somewhere, just waiting to be discovered. To the millions of kids who grew up watching his nature show, Dr. Cole was a hero. To his own son, Lincoln he was more of an enigma. Now, six months after he vanished, Lincoln is finally ready to bury the past when Dr. Cole's emergency beacon suddenly goes off. At the urging of his mother, Tess Lincoln reluctantly joins her on a search for his father. To fund the rescue, they agree to let Dr. Cole's cagey ex-producer, Clark film the mission documentary-style.</p>",
    premiered: "2012-02-07",
    url: "https://www.tvmaze.com/shows/232/the-river",
  },
  {
    id: 224,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 13,
        name: "Fantasy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3799.jpg",
    name: "Awake",
    country: "United States",
    rating: 7.4,
    summary:
      "<p><b>Awake</b> is an intriguing drama about Detective Michael Britten who finds he's living two parallel lives. He's involved in a car accident that seems to have killed both his son and wife yet his mind creates an ingenious coping mechanism in which he now lives two separate lives - one where his wife survived and the other where his son did. Trying to regain some normalcy, Michael returns to solving crimes in both worlds with the help of two different partners, Detective Isaiah \"Bird\" Freeman and Detective Efrem Vega Michael is assigned a different case in each reality and quickly discovers that his dual existence is actually a powerful tool. He begins to solve impossible cases by using his two realities to gain unique perspectives and link clues that cross over from world to world. Helping Michael to navigate his two realities are his bureau-assigned therapists Dr. Evans and Dr. Lee While both therapists work to untangle his two worlds, Michael has no interest in proving either one is false. But when memories of the accident begin to haunt him, he is forced to confront the truth about what really happened the night of the crash.</p>",
    premiered: "2012-03-01",
    url: "https://www.tvmaze.com/shows/233/awake",
  },
  {
    id: 225,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Thriller",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3808.jpg",
    name: "Missing",
    country: "United States",
    rating: 6.7,
    summary:
      "<p>Becca Winstone learns that her son, Michael, disappears while studying abroad, and it's a race against time when she travels to Europe to track him down. A surprising turn of events reveals just how far one mother will go to protect her family. Exotic locations and thrilling twists will keep you riveted in <b>Missing</b>. How far would you go to save the only thing you have left in the world? At 8 years old, Michael watched as his father, CIA Agent Paul Winstone, was murdered. Now 10 years later, Paul's wife, Becca, is faced with the reality of her son growing up. When Michael is afforded the opportunity to study abroad, his mother reluctantly agrees it's time to let him go. Just a few weeks into his trip Michael disappears, and Becca immediately suspects foul play. When she arrives in Rome, she begins piecing together the clues left behind. It isn't long before the kidnappers realize they've picked a fight with the wrong woman. Becca Winstone has a secret of her own -- before Paul's death, she was also a lethal CIA Agent. But if she wants to find her son alive, Becca will have to rely on old friends and reopen old wounds. Her resourcefulness, skill and determination will be put to the test - but a mother's love knows no limits.</p>",
    premiered: "2012-03-15",
    url: "https://www.tvmaze.com/shows/234/missing",
  },
  {
    id: 226,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3817.jpg",
    name: "The New Normal",
    country: "United States",
    rating: 7.3,
    summary:
      "<p>These days, families come in all forms - single dads, double moms, sperm donors, egg donors, one-night-stand donors. Bryan and David are a Los Angeles couple and they have it all. Well, almost. With successful careers and a committed, loving partnership, there is one thing that this couple is missing: a baby. Just when they think the stars will never align, enter Goldie an extraordinary young woman with a checkered past. A midwestern waitress and single mother looking to escape her dead-end life and small-minded grandmother Goldie decides to change everything and move out west with her precocious eight year-old daughter. Desperate and broke - but also fertile - Goldie quickly becomes the guys' surrogate and quite possibly the girl of their dreams. Surrogate mother, surrogate family.</p>",
    premiered: "2012-09-10",
    url: "https://www.tvmaze.com/shows/235/the-new-normal",
  },
  {
    id: 227,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 7,
        name: "Romance",
      },
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/84/212122.jpg",
    name: "GCB",
    country: "United States",
    rating: 7.3,
    summary:
      "<p>Amanda Vaughn once the ultimate high school \"mean girl\", is forced to return home in disgrace after her marriage ends in scandal. Amanda is nothing like the girl she was 20 years ago, but as her old classmates reacquaint themselves with the new Amanda, will her home town welcome her with open arms or seek revenge? No one in this town is a saint, but that doesn't mean they can't have a heart. As Amanda and her teenage kids try to adjust to their new lives, the ladies from her past alternate between sympathy and scheming.</p>",
    premiered: "2012-03-04",
    url: "https://www.tvmaze.com/shows/236/gcb",
  },
  {
    id: 228,
    genres: [
      {
        id: 2,
        name: "Science-Fiction",
      },
      {
        id: 4,
        name: "Action",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/55/138043.jpg",
    name: "Revolution",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>What would you do without it all? In this epic adventure, a family struggles to reunite in an American landscape void of electricity: a world of empty cities, local militias and heroic freedom fighters, where every single piece of technology -- computers, planes, cars, phones, even lights -- has mysteriously blacked out forever.</p>",
    premiered: "2012-09-17",
    url: "https://www.tvmaze.com/shows/237/revolution",
  },
  {
    id: 229,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 14,
        name: "Family",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3848.jpg",
    name: "Dallas",
    country: "United States",
    rating: 6.1,
    summary:
      "<p><b>Dallas</b> follows Bobby Ewing, now the senior member of the Ewing family following the death of his older brother J.R. Ewing. Following the death of his revered father, John Ross is out to prove he can be just as powerful an ally or enemy as his infamous father. Bobby's adopted son Christopher is newly single and determined to make a name for himself and his family in the world of natural gas. Elena Ramos is the former girlfriend of both John Ross and Christopher who is now blinded by thoughts of justice for previous wrongs. Pamela Rebecca Barnes is John Ross' wife and the daughter of Cliff Barnes, a longtime rival of the Ewings. She is determined to have a happy ending with her husband and make a home on Southfork Ranch. Also featured is Bobby's wife Ann and Harris Ryland, her scheming ex-husband. Emma Ryland is Ann and Harris' daughter, who has been taught by her father and grandmother.</p>",
    premiered: "2012-06-13",
    url: "https://www.tvmaze.com/shows/238/dallas",
  },
  {
    id: 230,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/3885.jpg",
    name: "Anger Management",
    country: "United States",
    rating: 6.6,
    summary:
      "<p>In <b>Anger Management</b>, Charlie is a non-traditional therapist specializing in anger management. He has a successful private practice, holding sessions with his group of primary patients each week, as well as performing pro-bono counseling for an inmate group at a state prison.</p>",
    premiered: "2012-06-28",
    url: "https://www.tvmaze.com/shows/239/anger-management",
  },
  {
    id: 231,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4185.jpg",
    name: "Cops",
    country: "United States",
    rating: 7.6,
    summary:
      "<p><b>COPS</b> follows police officers, constables, and sheriff's deputies during patrols and various police activities by embedding camera crews with their units. The show's formula adheres to a classic <i>cinÃ©ma vÃ©ritÃ©</i> ethos. With no narration or scripted dialog, it depends entirely on the commentary of the officers and on the actions of the people with whom they come into contact.</p>",
    premiered: "1989-03-11",
    url: "https://www.tvmaze.com/shows/240/cops",
  },
  {
    id: 232,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
      {
        id: 19,
        name: "Legal",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4351.jpg",
    name: "Benched",
    country: "United States",
    rating: 6.8,
    summary:
      "<p><b>Benched</b> is a single-camera comedy about a high-powered corporate lawyer's fall from grace into the rough-and-tumble world of the public defenders. From ABC Signature Studio, it stars Coupe as Nina Whitley, a distinguished corporate lawyer who has given up everything in her climb to the top. However, when she's hit with her ex-fiancÃ©'s engagement announcement and learns that she hasn't made partner at her high power firm, Nina snaps -- breaking vases and burning bridges.</p><p>Now that Nina is shunned from the corporate world, the only place she can get a job is at the Public Defender's office: home to the underfunded, understaffed, overworked, \"if you can't afford a lawyer, one will be provided... \" lawyers. In addition to her new clients, Nina must learn to connect with her co-workers, including the roguish Phil, the idealistic Carlos, the useless empathetic Cheryl and the dedicated intern Micah. If that didn't sound tough enough for Nina, she'll also be going head-to-head with her ex-fiancÃ©, Trent, the rising star of the District Attorney's office.</p>",
    premiered: "2014-10-28",
    url: "https://www.tvmaze.com/shows/241/benched",
  },
  {
    id: 233,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4358.jpg",
    name: "The Great Fire",
    country: "United Kingdom",
    rating: 7,
    summary:
      "<p>As the great fire tears London apart, this brand new epic drama details the heart-wrenching stories of a city and its people in crisis.</p>",
    premiered: "2014-10-16",
    url: "https://www.tvmaze.com/shows/242/the-great-fire",
  },
  {
    id: 234,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4583.jpg",
    name: "Conan",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>The biggest celebrities, the hottest musical guests, the craziest sketches... and Andy Richter, to boot? Yes, some would say Conan O'Brien's talk show on TBS has everything a late night viewer could want.</p>",
    premiered: "2010-11-08",
    url: "https://www.tvmaze.com/shows/243/conan",
  },
  {
    id: 235,
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 20,
        name: "Western",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4585.jpg",
    name: "Strange Empire",
    country: "Canada",
    rating: 7.2,
    summary:
      "<p><b>Strange Empire</b> is a Western whose heroes are women. With most of their men gone, and those who remain battling for control, the women struggle to survive, to find their independence, and to build a life in which to thrive and raise families. As the stories of Janestown's citizens unfold we see the clash between a power-hungry father and son and the deep prejudices among races, but also the start of something akin to community in this Wild West. Western stories take civilization as a goal; they begin in blood, and end in the morality of Main Street.</p>",
    premiered: "2014-10-06",
    url: "https://www.tvmaze.com/shows/244/strange-empire",
  },
  {
    id: 236,
    genres: [],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4590.jpg",
    name: "Town of the Living Dead",
    country: "United States",
    rating: 0,
    summary:
      "<p>In <b>Town of the Living Dead</b>, the colorful folks of Jasper, Alabama are determined, once and for all, to complete their zombie movie, Thr33 Days Dead... now six long years in the making. Based on a town urban legend, their film centers on a group of friends trying to survive a zombie apocalypse in rural Alabama. The series will follow the intrepid and motley crew of amateur filmmakers as they struggle against every obstacle imaginable to get to a final cut of their film... which could someday become a Syfy movie.</p>",
    premiered: "2014-10-07",
    url: "https://www.tvmaze.com/shows/245/town-of-the-living-dead",
  },
  {
    id: 237,
    genres: [
      {
        id: 17,
        name: "History",
      },
      {
        id: 21,
        name: "War",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4591.jpg",
    name: "Long Shadow",
    country: "United Kingdom",
    rating: 0,
    summary:
      "<p>David Reynolds traces the legacy of the Great War across 100 years and 10 different countries, examining how the war haunted a generation and shaped the peace that followed.</p>",
    premiered: "2014-09-24",
    url: "https://www.tvmaze.com/shows/246/long-shadow",
  },
  {
    id: 238,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/326/817399.jpg",
    name: "The Colbert Report",
    country: "United States",
    rating: 7.6,
    summary:
      "<p>Feel the news along with Stephen Colbert, America's ballsiest pundit.</p>",
    premiered: "2005-10-17",
    url: "https://www.tvmaze.com/shows/247/the-colbert-report",
  },
  {
    id: 239,
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Crime",
      },
      {
        id: 8,
        name: "Adventure",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/397/994954.jpg",
    name: "Transporter: The Series",
    country: "Germany",
    rating: 7.3,
    summary:
      "<p>Frank Martin returns as the Transporter with one very simple task - to deliver the package against all the odds. However, something that sounds so simple, is rarely so.</p><p>Joined by two new team members, Caterina Boldieu, an ex- DGSE agent and later in the series, Jules Faroux, a computer and mechanical whizz, Frank is hired to deliver a diverse range of packages - from pop princesses to priceless paintings.</p><p>Frank Martin takes the jobs no other transporter will touch or can achieve - simply because they are too challenging and the odds seemingly insurmountable. That is why he is considered the best transporter in the world.</p><p>Frank's jobs take him to many beautiful locations around the world, but they also draw him into danger and mystery. And more often than not, solving that mystery will lead Frank to successfully completing his mission.</p><p>However Frank's jobs aren't solely about the packages he must deliver but also about the people he meets. While his emphasis is always on completing the mission, Frank is unable to avoid the human emotions that come with dealing with clients in difficult situations - no matter how hard he tries.</p>",
    premiered: "2013-01-04",
    url: "https://www.tvmaze.com/shows/248/transporter-the-series",
  },
  {
    id: 240,
    genres: [
      {
        id: 16,
        name: "Comedy",
      },
    ],
    language: "English",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/327/818871.jpg",
    name: "The Daily Show with Jon Stewart",
    country: "United States",
    rating: 8.3,
    summary:
      "<p>One anchor, several correspondents, zero credibility.</p><p>If you're tired of the stodginess of the evening newscasts and you can't bear to sit through the spinmeisters and shills on the 24-hour cable news network, don't miss <b>The Daily Show with Jon Stewart</b>, the nightly half-hour series unburdened by objectivity, journalistic integrity or even accuracy.</p>",
    premiered: "1999-01-11",
    url: "https://www.tvmaze.com/shows/249/the-daily-show-with-jon-stewart",
  },
];

let movieDiv = document.querySelector(".allmovies");
let page = 1;
let countMovie = 9;
let genres = [];

function getAllMovies(array) {
  movieDiv.innerHTML = "";
  array.forEach((x) => {
    movieDiv.innerHTML += `
    <div class="card col-3 mx-2 my-2" style="width: 20rem;">
      <div class="mainSum">
          <img src="${x.image}"
              class="card-img-top" alt="...">
          <div class="card-body p-1 sum">
              <h5 class="card-title">${x.name}</h5>
                  ${x.summary}
           </div>
      </div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${x.language}</li>
    <li class="list-group-item">${x.rating}</li>
    <li class="list-group-item">${x.premiered}</li>
    <li class="list-group-item">${x.country}</li>
    <li class="list-group-item d-flex justify-content-around">
        ${printGenres(x.genres)}

    </li>
</ul>
<div class="card-body-2">
    <a href="${x.url}"
        class="card-link">${x.url}</a>
</div>
</div>   `;
  });

  let button = `<button class="btn btn-outline-success" onclick="loadMore()"  type="button">Load More</button>`;

  movieDiv.innerHTML += button;
}
function loadMore() {
  page++;
  let newcountMovie = countMovie * page;
  getAllMovies(movies.slice(0, newcountMovie));
}

function printGenres(genres) {
  let html = "";
  genres.forEach((x) => {
    html += `<span class="badge rounded-pill text-bg-primary">${x.name}</span>`;
  });
  return html;
}

getAllMovies(movies.slice(page - 1, countMovie));

// filmlerdeki genrelerden bir liste yaratacağız tekrarlanmayan veriler tutacağım bir liste olacak
// aynı genreye 2 kere eklemeyeceğim

function getGenres() {
  movies.forEach((x) => {
    x.genres.map((y) => {
      if (!checkGenre(y, genres)) {
        genres.push(y.name);
      }
    });
  });
  console.log(genres);
}

function checkGenre(genre, array) {
  let kontrol = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] == genre.name) {
      kontrol = true;
      break;
    }
  }
  return kontrol;
}

function getGenres2() {
  movies.forEach((x) => {
    x.genres.forEach((y) => {
      if (!genres.includes(y.name)) {
        genres.push(y.name);
      }
    });
  });
}

function getGenres3() {
  let kategoriler = new Set();
  movies.forEach((x) => {
    x.genres.forEach((y) => {
      kategoriler.add(y.name);
    });
  });
}

getGenres2();

function printAllGenres(array) {
  console.log(array);
  let genreForm = document.querySelector(".genreForm");
  array.forEach((x) => {
    genreForm.innerHTML += `
    <div class="d-flex justify-content-between">
        <label>${x}</label>
        <input type="checkbox" name="genre" value="${x}">
    </div>
    `;
  });
}

printAllGenres(genres);

function filterGenres() {
  let genreForm = document.querySelector(".genreForm");
  let filterlist = [];
  let movieList = [];
  // genreForm.genre.forEach((x) => console.log(x.value));
  // genreForm.genre.forEach((x) => console.log(x.checked));
  genreForm.genre.forEach((x) => {
    if (x.checked) {
      filterlist.push(x.value);
    }
  });

  movieList = movies.filter((movie) => {
    if (movie.genres.some((g) => filterlist.includes(g.name))) {
      return true;
    }
  });
  if (movieList.length == 0) {
    movieList = movies;
  }

  getAllMovies(movieList);
}

function printserach() {
  let movieList = [];
  let inputSearch = document.querySelector("#inputSearch");
  let text = inputSearch.value;

  movieList = movies.filter((x) =>
    x.name.toUpperCase().includes(text.toUpperCase())
  );
  getAllMovies(movieList);
}
