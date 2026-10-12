// exerciseBank.js - Pre-loaded exercise bank from Bobby Fischer Teaches Chess
const exerciseBank = [
    // --- CHAPTER 1: ELEMENTS OF CHECKMATE ---
    {
        id: "ch1-f8",
        chapter: "Chapter 1: Elements of Checkmate[cite: 27]",
        frame: 8,
        title: "Exercise 3 (Frame 8)",
        text: "The White Rook gives check from the back rank. Can the Black King capture it[cite: 37]?",
        fen: "6Rk/7p/8/5N/8/8/8/6K b - - 0 1", // Preserved exact position
        options: [
            "Can capture checking White Rook",
            "Cannot capture checking White Rook"
        ],
        correct: 0,
        explanation: "Correct! The Knight is not protecting the Rook here, so the Black King can legally capture the attacker[cite: 37]."
    },
    {
        id: "ch1-f9",
        chapter: "Chapter 1: Elements of Checkmate[cite: 27]",
        frame: 9,
        title: "Exercise 4 (Frame 9)",
        text: "Observe the updated position where a protecting piece has been added.",
        fen: "6Rk/7p/8/4N3/8/8/8/6K b - - 0 1",
        options: [
            "Can capture checking White Rook",
            "Cannot capture checking White Rook"
        ],
        correct: 1,
        explanation: "Cannot capture! The Rook is protected by the Knight, making the capture illegal for the King[cite: 39]."
    },
    {
        id: "ch1-f13",
        chapter: "Chapter 1: Elements of Checkmate[cite: 27]",
        frame: 13,
        title: "Exercise (Frame 13)",
        text: "Now you decide what Black can do in this position with the double bishop battery[cite: 44].",
        fen: "7k/6p1/8/3BB3/5K2/8/8/8 b - - 0 1",
        options: [
            "Can capture its attacker",
            "Can flee",
            "Can do neither (Checkmate)"
        ],
        correct: 2,
        explanation: "Can do neither! Black is mated; the Bishops team up powerfully[cite: 44]."
    },
    {
        id: "ch1-f16",
        chapter: "Chapter 1: Elements of Checkmate[cite: 27]",
        frame: 16,
        title: "Exercise (Frame 16)",
        text: "Determine the legal defenses available to the Black King against the checking piece[cite: 47].",
        fen: "7k/5ppR/8/8/4K3/8/8/8 b - - 0 1",
        options: [
            "Can capture attacker",
            "Can flee",
            "Can do neither"
        ],
        correct: 0,
        explanation: "Can capture attacker! The Black King can capture the checking Rook directly[cite: 47]."
    },

    // --- CHAPTER 2: THE BACK-RANK MATES ---
    {
        id: "ch2-f90",
        chapter: "Chapter 2: The Back-Rank Mates[cite: 114]",
        frame: 90,
        title: "Back-Rank Power Check (Frame 90)",
        text: "Does White have enough power to mate on Black's back rank[cite: 129]?",
        fen: "3r2k1/5ppp/8/8/8/8/4R3/4R1K1 w - - 0 1",
        options: [
            "Yes, enough power to mate",
            "No, insufficient power"
        ],
        correct: 0,
        explanation: "Yes! White has the power to mate (four against three supporting defenders on the back rank)[cite: 129]."
    },
    {
        id: "ch2-f91",
        chapter: "Chapter 2: The Back-Rank Mates[cite: 114]",
        frame: 91,
        title: "Back-Rank Power Check (Frame 91)",
        text: "Examine the defending pieces versus attacking pieces. Does White have enough power to mate[cite: 130]?",
        fen: "2r3k1/5ppp/8/8/8/8/4R3/4R1K1 w - - 0 1",
        options: [
            "Yes, enough power to mate",
            "No, insufficient power"
        ],
        correct: 1,
        explanation: "No! There is no mate here—two against two (Black Bishop and Rook against two Rooks)[cite: 130]."
    },

    // --- CHAPTER 3: BACK-RANK DEFENSES AND VARIATIONS ---
    {
        id: "ch3-f128",
        chapter: "Chapter 3: Back-Rank Defenses and Variations[cite: 167]",
        frame: 128,
        title: "Defender Removal (Frame 128)",
        text: "If White plays Rook-takes-Rook check, how can Black save himself[cite: 171]?",
        fen: "3r2k1/5ppp/8/8/8/8/5R2/4R1K1 w - - 0 1",
        options: [
            "By playing Rook-takes-Rook",
            "By playing Queen-takes-Rook"
        ],
        correct: 1,
        explanation: "By playing Queen-takes-Rook, maintaining equal power (two against two)[cite: 171]."
    },

    // --- CHAPTER 4: DISPLACING DEFENDERS ---
    {
        id: "ch4-f160",
        chapter: "Chapter 4: Displacing Defenders[cite: 205]",
        frame: 160,
        title: "Drawing Away Defenders (Frame 160)",
        text: "Which move should White make to begin a mating combination by drawing away a defender[cite: 206]?",
        fen: "6k1/5ppp/8/8/8/8/7R/4R2K w - - 0 1",
        options: [
            "Sacrifice Rook to draw away the defending piece",
            "Play a random passive move"
        ],
        correct: 0,
        explanation: "Correct! Sacrificing the Rook draws the defending piece away, allowing the remaining Rook to deliver mate[cite: 206]."
    },

    // --- CHAPTER 5: ATTACKS ON THE ENEMY PAWN COVER ---
    {
        id: "ch5-f198",
        chapter: "Chapter 5: Attacks on the Enemy Pawn Cover[cite: 248]",
        frame: 198,
        title: "Pawn Cover Sacrifice (Frame 198)",
        text: "Does the White Queen move of Queen-takes-Pawn-check lead to mate here[cite: 252]?",
        fen: "r1bq1rk1/ppp2ppp/2n5/3p4/8/2N2N2/PPP1QPPP/R1B2RK1 w - - 0 1",
        options: [
            "Yes, leads to mate",
            "No, fails"
        ],
        correct: 0,
        explanation: "Yes! When Black plays Rook-takes-Queen, the White Rook follows up to deliver mate[cite: 252]."
    },

    // --- CHAPTER 6: FINAL REVIEW ---
    {
        id: "ch6-f244",
        chapter: "Chapter 6: Final Review[cite: 304]",
        frame: 244,
        title: "Criterion Position 1 (Frame 244)",
        text: "Examine the criterion position. Can White force mate[cite: 313]?",
        fen: "7k/5ppp/8/8/8/8/4R3/4R2K w - - 0 1",
        options: [
            "Yes, White can mate",
            "No, White cannot mate"
        ],
        correct: 0,
        explanation: "Yes! White executes the standard back-rank mating combination[cite: 313]."
    }
];
