const MOVIES = {
  immortals: {
    label: "01 · THE IMMORTALS",
    sub: "Films that become part of you. The ones you carry for years.",
    films: [
      { t: "Interstellar", y: 2014, r: 5, d: "Christopher Nolan", note: "" },
      { t: "Inception", y: 2010, r: 5, d: "Christopher Nolan", note: "" },
      { t: "Meiyazhagan", y: 2024, r: 5, d: "C. Prem Kumar", note: "One of my most favourite films. 2nd year anniversary rewatch and it still feels fresh." },
      { t: "96", y: 2018, r: 5, d: "C. Prem Kumar", note: "8th re-watch, but still feels fresh." },
      { t: "Jigarthanda DoubleX", y: 2023, r: 5, d: "Karthik Subbaraj", note: "" },
      { t: "Vikram Vedha", y: 2017, r: 5, d: "Pushkar–Gayathri", note: "" },
      { t: "Master", y: 2021, r: 5, d: "Lokesh Kanagaraj", note: "" },
      { t: "Ahasver", y: 2018, r: 5, d: "Unknown", note: "What the hell just happened bro... I can't stop thinking about it for hours now. The end twist, just so f*cking amazing." },
      { t: "Frankenstein", y: 2025, r: 5, d: "Guillermo del Toro", note: "Victor... This dude got electricity in his veins bro..." },
      { t: "The Terminal", y: 2004, r: 5, d: "Steven Spielberg", note: "" },
      { t: "Yavarum Nalam", y: 2009, r: 5, d: "Vikram Kumar", note: "" },
      { t: "10 Days of a Good Man", y: 2023, r: 5, d: "Uluç Bayraktar", note: "" },
      { t: "Project Hail Mary", y: 2026, r: 5, d: "Phil Lord & Chris Miller", note: "\"Rocky watch crew many days... Crew not wake up...\" — seriously, those lines ripped me off..." },
      { t: "Zathura: A Space Adventure", y: 2005, r: 5, d: "Jon Favreau", note: "The best film of my childhood... I'll never forget this movie..." },
      { t: "Your Name.", y: 2016, r: 5, d: "Makoto Shinkai", note: "One of the best films I have watched yet..." },
      { t: "Ready or Not 2: Here I Come", y: 2026, r: 5, d: "Radio Silence", note: "" },
      { t: "Moon Knight", y: 2022, r: 5, d: "Marvel Studios", note: "" },
      { t: "Black Panther", y: 2018, r: 5, d: "Ryan Coogler", note: "" },
      { t: "The Godfather", y: 1972, r: 5, d: "Francis Ford Coppola", note: "" },
      { t: "Fight Club", y: 1999, r: 5, d: "David Fincher", note: "" }
    ]
  },
  worksOfArt: {
    label: "02 · WORKS OF ART",
    sub: "Exceptional filmmaking, storytelling, performances, or ideas.",
    films: [
      { t: "The Dark Knight", y: 2008, r: 4.5, d: "Christopher Nolan", note: "" },
      { t: "Spider-Man: Into the Spider-Verse", y: 2018, r: 4.5, d: "Bob Persichetti", note: "" },
      { t: "Spider-Man: Across the Spider-Verse", y: 2023, r: 4.5, d: "Joaquim Dos Santos", note: "" },
      { t: "Parasite", y: 2019, r: 4.5, d: "Bong Joon-ho", note: "" },
      { t: "Vikram", y: 2022, r: 4.5, d: "Lokesh Kanagaraj", note: "" },
      { t: "RRR", y: 2022, r: 4.5, d: "S. S. Rajamouli", note: "" },
      { t: "Vedalam", y: 2015, r: 4.5, d: "Siva", note: "" },
      { t: "Anniyan", y: 2005, r: 4.5, d: "S. Shankar", note: "" },
      { t: "Thangalaan", y: 2024, r: 4.5, d: "Pa. Ranjith", note: "" },
      { t: "Papanasam", y: 2015, r: 4.5, d: "Jeethu Joseph", note: "" },
      { t: "Jailer", y: 2023, r: 4.5, d: "Nelson Dilipkumar", note: "" },
      { t: "John Wick", y: 2014, r: 4.5, d: "Chad Stahelski", note: "" },
      { t: "John Wick: Chapter 4", y: 2023, r: 4.5, d: "Chad Stahelski", note: "" },
      { t: "The Prestige", y: 2006, r: 4.5, d: "Christopher Nolan", note: "" },
      { t: "Dune", y: 2021, r: 4.5, d: "Denis Villeneuve", note: "" },
      { t: "Oppenheimer", y: 2023, r: 4.5, d: "Christopher Nolan", note: "" },
      { t: "The Batman", y: 2022, r: 4.5, d: "Matt Reeves", note: "" },
      { t: "The Social Network", y: 2010, r: 4.5, d: "David Fincher", note: "" },
      { t: "Whiplash", y: 2014, r: 4.5, d: "Damien Chazelle", note: "" },
      { t: "Prisoners", y: 2013, r: 4.5, d: "Denis Villeneuve", note: "" }
    ]
  },
  stayedWithMe: {
    label: "03 · STAYED WITH ME",
    sub: "Films that made you feel something or left you thinking.",
    films: [
      { t: "Good Will Hunting", y: 1997, r: 4, d: "Gus Van Sant", note: "" },
      { t: "Dead Poets Society", y: 1989, r: 4, d: "Peter Weir", note: "" },
      { t: "The Truman Show", y: 1998, r: 4, d: "Peter Weir", note: "" },
      { t: "La La Land", y: 2016, r: 4, d: "Damien Chazelle", note: "" },
      { t: "A Man Called Otto", y: 2022, r: 4, d: "Marc Forster", note: "Tom Hanks puts a wholesome pull-stop to my birthday..." },
      { t: "The Man from Nowhere", y: 2010, r: 4, d: "Lee Jeong-beom", note: "" },
      { t: "Bridge of Spies", y: 2015, r: 4, d: "Steven Spielberg", note: "" },
      { t: "The Judge", y: 2014, r: 4, d: "David Dobkin", note: "" },
      { t: "The Menu", y: 2022, r: 4, d: "Mark Mylod", note: "" },
      { t: "Heretic", y: 2024, r: 4, d: "Scott Beck & Bryan Woods", note: "" },
      { t: "The Master and Margarita", y: 2024, r: 4, d: "Michael Lockshin", note: "" },
      { t: "The Railway Men", y: 2023, r: 4, d: "Shiv Rawail", note: "" },
      { t: "Lucky Baskhar", y: 2024, r: 4, d: "Venky Atluri", note: "" },
      { t: "12th Fail", y: 2023, r: 4, d: "Vidhu Vinod Chopra", note: "" },
      { t: "Aavesham", y: 2024, r: 4, d: "Jithu Madhavan", note: "" }
    ]
  },
  goodTime: {
    label: "04 · A GOOD TIME",
    sub: "Enjoyable, entertaining, and absolutely worth watching.",
    films: [
      { t: "Top Gun: Maverick", y: 2022, r: 3.5, d: "Joseph Kosinski", note: "" },
      { t: "The Conjuring", y: 2013, r: 3.5, d: "James Wan", note: "" },
      { t: "Kantara", y: 2022, r: 3.5, d: "Rishab Shetty", note: "" },
      { t: "Manjummel Boys", y: 2024, r: 3.5, d: "Chidambaram", note: "" },
      { t: "Maharaja", y: 2024, r: 3.5, d: "Nithilan Saminathan", note: "" },
      { t: "Raid", y: 2018, r: 3.5, d: "Raj Kumar Gupta", note: "" },
      { t: "Raid 2", y: 2025, r: 3.5, d: "Raj Kumar Gupta", note: "" },
      { t: "The Game", y: 1997, r: 3.5, d: "David Fincher", note: "" },
      { t: "Now You See Me", y: 2013, r: 3.5, d: "Louis Leterrier", note: "" },
      { t: "Sherlock Holmes", y: 2009, r: 3.5, d: "Guy Ritchie", note: "" }
    ]
  },
  didntConnect: {
    label: "05 · DIDN'T CONNECT",
    sub: "Films that simply weren't for you. No need to pretend otherwise.",
    films: [
      { t: "Avatar: Fire and Ash", y: 2025, r: 1, d: "James Cameron", note: "" },
      { t: "Thor: Love and Thunder", y: 2022, r: 1.5, d: "Taika Waititi", note: "" },
      { t: "Vettaiyan", y: 2024, r: 0.5, d: "T. J. Gnanavel", note: "" },
      { t: "Coolie", y: 2025, r: 0.5, d: "Lokesh Kanagaraj", note: "" },
      { t: "Annaatthe", y: 2021, r: 0.5, d: "Siva", note: "" },
      { t: "Kanguva", y: 2024, r: 0.5, d: "Siva", note: "" },
      { t: "Indian 2: Zero Tolerance", y: 2024, r: 1, d: "S. Shankar", note: "" },
      { t: "Thug Life", y: 2025, r: 1, d: "Mani Ratnam", note: "" },
      { t: "Pinocchio: Unstrung", y: 2026, r: 1.5, d: "Rhys Frake-Waterfield", note: "" },
      { t: "Chhota Bheem: The Blue Mountain", y: 2013, r: 1, d: "Rajiv Chilaka", note: "" }
    ]
  }
};

// Recently watched (from diary)
const RECENTLY = [
  { t: "96", y: 2018, r: 5, d: "C. Prem Kumar", note: "8th yr re-watch, but still feels fresh..." },
  { t: "Interstellar", y: 2014, r: 5, d: "Christopher Nolan", note: "" },
  { t: "The Terminal", y: 2004, r: 5, d: "Steven Spielberg", note: "" },
  { t: "Meiyazhagan", y: 2024, r: 5, d: "C. Prem Kumar", note: "2nd yr anniversary rewatch😅😁 One of my most favourite film...." },
  { t: "Thunivu", y: 2023, r: 4, d: "H. Vinoth", note: "" },
  { t: "Lucky Baskhar", y: 2024, r: 4, d: "Venky Atluri", note: "" },
  { t: "Road to Perdition", y: 2002, r: 3, d: "Sam Mendes", note: "" },
  { t: "Boss Level", y: 2021, r: 3.5, d: "Joe Carnahan", note: "" }
];

// Watchlist highlights
const WATCHLIST = [
  "The Godfather Part II", "Cinema Paradiso", "The Prestige", "Parasite",
  "Dead Poets Society", "The Truman Show", "Good Will Hunting", "Fight Club",
  "Dune: Part Three", "The Dark Knight", "The Lord of the Rings",
  "Spider-Man: Beyond the Spider-Verse", "Avengers: Doomsday"
];
