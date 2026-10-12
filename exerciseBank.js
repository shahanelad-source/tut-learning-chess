/**
 * Iterates sequentially through the book's exercise catalog using a for loop 
 * and returns the complete exercise bank.
 * @returns {Array} List of formatted exercise objects.
 */
function fetchAllBookExercises() {
    const rawBookCatalog = [
        // --- CHAPTER 1: ELEMENTS OF CHECKMATE ---
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 6,
            title: "Exercise (Frame 6)[cite: 43]",
            text: "The White Queen is giving check. Can the Black King capture?[cite: 43]",
            fen: "6q1/7p/4B3/8/8/8/4K3/8 b - - 0 1",
            options: [
                "can capture[cite: 43]",
                "cannot capture[cite: 43]"
            ],
            correct: 1,
            explanation: "Cannot capture! The Queen is protected by the Bishop, and the King has no safe flight squares[cite: 43, 44]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 7,
            title: "Exercise (Frame 7)[cite: 45]",
            text: "Again, observe the position; then decide whether the Black King can capture the checking White piece.[cite: 45]",
            fen: "1q6/8/8/8/4B3/8/4K3/8 b - - 0 1",
            options: [
                "can capture[cite: 45]",
                "cannot capture[cite: 45]"
            ],
            correct: 0,
            explanation: "Can capture! The Bishop is not protecting the Queen[cite: 45, 46]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 8,
            title: "Exercise 3 (Frame 8)[cite: 46]",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 46].",
            fen: "6Rk/7p/8/5N/8/8/8/6K b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 46]",
                "cannot capture checking White Rook[cite: 46]"
            ],
            correct: 0,
            explanation: "Can capture checking White Rook[cite: 46, 47]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 9,
            title: "Exercise 4 (Frame 9)[cite: 47]",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 47].",
            fen: "6Rk/7p/8/4N3/8/8/8/6K b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 47]",
                "cannot capture checking White Rook[cite: 47]"
            ],
            correct: 1,
            explanation: "Cannot capture checking White Rook (The Rook is protected by the Knight)[cite: 47, 48]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 10,
            title: "Exercise (Frame 10)[cite: 48]",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 48].",
            fen: "R1k5/2p5/1p6/8/8/2K5/8/8 b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 48]",
                "cannot capture checking White Rook[cite: 48]"
            ],
            correct: 0,
            explanation: "Can capture checking White Rook[cite: 48, 49]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 11,
            title: "Exercise (Frame 11)[cite: 49]",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 49].",
            fen: "k1R5/1p6/8/8/4K3/8/8/8 b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 49]",
                "cannot capture checking White Rook[cite: 49]"
            ],
            correct: 1,
            explanation: "Cannot capture checking White Rook (Black is mated; the Rook is beyond the Black King's reach)[cite: 49, 50]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 13,
            title: "Exercise (Frame 13)[cite: 52]",
            text: "Now you decide what Black can do in this position. Black King: can capture its attacker / can flee / can do neither[cite: 52].",
            fen: "7k/6p1/8/3BB3/5K2/8/8/8 b - - 0 1",
            options: [
                "can capture its attacker[cite: 52]",
                "can flee[cite: 52]",
                "can do neither[cite: 52]"
            ],
            correct: 2,
            explanation: "Can do neither! Black is mated; the Bishops team up powerfully[cite: 52, 53]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 14,
            title: "Exercise (Frame 14)[cite: 53]",
            text: "Again, observe the position and decide what the Black King can do. Black King: can capture attacker / can flee / can do neither[cite: 53].",
            fen: "4k2q/3pp1Q1/8/2b3N1/p7/8/3PP1P1/4K3 b - - 0 1",
            options: [
                "can capture attacker[cite: 53]",
                "can flee[cite: 53]",
                "can do neither[cite: 53]"
            ],
            correct: 1,
            explanation: "Can flee (One square to your left)[cite: 54]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 15,
            title: "Exercise (Frame 15)[cite: 54]",
            text: "Black King: can capture attacker / can flee / can do neither[cite: 54].",
            fen: "4r3/5pk1/4p1pp/8/8/5K2/8/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 54]",
                "can flee[cite: 54]",
                "can do neither[cite: 54]"
            ],
            correct: 2,
            explanation: "Can do neither (White's Pawn stops Black's King from fleeing)[cite: 54, 55]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 16,
            title: "Exercise (Frame 16)[cite: 55]",
            text: "Black King: can capture attacker / can flee / can do neither[cite: 55].",
            fen: "7k/5ppR/8/8/4K3/8/8/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 55]",
                "can flee[cite: 55]",
                "can do neither[cite: 55]"
            ],
            correct: 0,
            explanation: "Can capture attacker[cite: 55, 56]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 17,
            title: "Exercise (Frame 17)[cite: 56]",
            text: "Here the lowly Pawn is giving check. Black King: can capture attacker / can flee / can do neither[cite: 56].",
            fen: "1k1r3r/2pp4/2P1Q3/8/8/8/7K/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 56]",
                "can flee[cite: 56]",
                "can do neither[cite: 56]"
            ],
            correct: 2,
            explanation: "Can do neither (Black is mated)[cite: 56, 57]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 18,
            title: "Exercise (Frame 18)[cite: 57]",
            text: "Black King: can capture attacker / can flee / can do neither[cite: 57].",
            fen: "4rk1r/5pp1/3Q4/8/8/5K2/8/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 57]",
                "can flee[cite: 57]",
                "can do neither[cite: 57]"
            ],
            correct: 2,
            explanation: "Can do neither (Checking Rook is protected by Queen. Black is mated)[cite: 57, 58]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 37,
            title: "Exercise (Frame 37)[cite: 78]",
            text: "In this position, the White Rook is checking: Which Black piece can defend against the check? What does that Black piece do?[cite: 78]",
            fen: "3r3k/5ppp/8/8/8/8/4R3/4R1K1 b - - 0 1",
            options: [
                "captures[cite: 78]",
                "interposes[cite: 78]"
            ],
            correct: 1,
            explanation: "The Knight interposes[cite: 78, 79]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 35]",
            frame: 38,
            title: "Exercise (Frame 38)[cite: 79]",
            text: "Which Black piece can defend against this check? What does that Black piece do?[cite: 79]",
            fen: "4r2k/5ppp/8/8/8/8/4R3/4R1K1 b - - 0 1",
            options: [
                "captures[cite: 79]",
                "interposes[cite: 79]"
            ],
            correct: 0,
            explanation: "Pawn captures (the Queen/Rook)[cite: 79, 80]."
        },

        // --- CHAPTER 2: THE BACK-RANK MATES ---
        {
            chapter: "Chapter 2: The Back-Rank Mates[cite: 122]",
            frame: 90,
            title: "Back-Rank Power Check (Frame 90)[cite: 137]",
            text: "Does White have enough power to mate on Black's back rank?[cite: 137]",
            fen: "3r2k1/5ppp/8/8/8/8/4R3/4R1K1 w - - 0 1",
            options: [
                "yes[cite: 137]",
                "no[cite: 137]"
            ],
            correct: 0,
            explanation: "Yes! White has the power to mate—four against three[cite: 137, 138]."
        },
        {
            chapter: "Chapter 2: The Back-Rank Mates[cite: 122]",
            frame: 91,
            title: "Back-Rank Power Check (Frame 91)[cite: 138]",
            text: "Does White have enough power to mate on Black's back rank?[cite: 138]",
            fen: "2r3k1/5ppp/8/8/8/8/4R3/4R1K1 w - - 0 1",
            options: [
                "yes[cite: 138]",
                "no[cite: 138]"
            ],
            correct: 1,
            explanation: "No! There is no mate here—two against two: Black Bishop and Rook against two Rooks[cite: 138, 139]."
        },

        // --- CHAPTER 3: BACK-RANK DEFENSES AND VARIATIONS ---
        {
            chapter: "Chapter 3: Back-Rank Defenses and Variations[cite: 175]",
            frame: 128,
            title: "Defender Removal (Frame 128)[cite: 179]",
            text: "If White plays Rook-takes-Rook-check (as shown), how can Black save himself?[cite: 179]",
            fen: "3r2k1/5ppp/8/8/8/8/5R2/4R1K1 w - - 0 1",
            options: [
                "by playing Rook-takes-Rook[cite: 179]",
                "by playing Queen-takes-Rook[cite: 179]"
            ],
            correct: 1,
            explanation: "By playing Queen-takes-Rook, so it will still be two against two[cite: 179, 180]."
        },

        // --- CHAPTER 4: DISPLACING DEFENDERS ---
        {
            chapter: "Chapter 4: Displacing Defenders[cite: 213]",
            frame: 160,
            title: "Drawing Away Defenders (Frame 160)[cite: 215]",
            text: "Which move should White make to begin a mating combination here?[cite: 215]",
            fen: "6k1/5ppp/8/8/8/8/7R/4R2K w - - 0 1",
            options: [
                "move A[cite: 215]",
                "move B[cite: 215]"
            ],
            correct: 0,
            explanation: "Move A. And the remaining Rook will deliver the mate after the Knight captures[cite: 215, 216]."
        },

        // --- CHAPTER 5: ATTACKS ON THE ENEMY PAWN COVER ---
        {
            chapter: "Chapter 5: Attacks on the Enemy Pawn Cover[cite: 256]",
            frame: 198,
            title: "Pawn Cover Sacrifice (Frame 198)[cite: 260]",
            text: "Does Queen-takes-Pawn-check lead to mate here?[cite: 260]",
            fen: "r1bq1rk1/ppp2ppp/2n5/3p4/8/2N2N2/PPP1QPPP/R1B2RK1 w - - 0 1",
            options: [
                "yes[cite: 260]",
                "no[cite: 260]"
            ],
            correct: 0,
            explanation: "Yes! Here the Bishop is present. When Black plays Rook-takes-Queen, the White Rook will mate[cite: 260]."
        },

        // --- CHAPTER 6: FINAL REVIEW ---
        {
            chapter: "Chapter 6: Final Review[cite: 312]",
            frame: 244,
            title: "Criterion Position 1 (Frame 244)[cite: 321]",
            text: "Can White mate?[cite: 321]",
            fen: "7k/5ppp/8/8/8/8/4R3/4R2K w - - 0 1",
            options: [
                "yes[cite: 321]",
                "no[cite: 321]"
            ],
            correct: 0,
            explanation: "Yes, White executes the standard back-rank mating combination[cite: 313, 321]."
        },
        {
            chapter: "Chapter 6: Final Review[cite: 312]",
            frame: 275,
            title: "Criterion Position Final (Frame 275)[cite: 352]",
            text: "From Fischer-Benko, 1962: Can White mate?[cite: 352]",
            fen: "6k1/5ppp/8/8/8/8/4Q3/3R3K w - - 0 1",
            options: [
                "yes[cite: 352]",
                "no[cite: 352]"
            ],
            correct: 0,
            explanation: "Yes! I took the Pawn, giving check[cite: 352]."
        }
    ];

    const filledBank = [];

    // For loop to process and populate each exercise in its turn
    for (let i = 0; i < rawBookCatalog.length; i++) {
        filledBank.push(rawBookCatalog[i]);
    }

    return filledBank;
}

// Automatically execute the function and assign the output to the exercise bank variable
const exerciseBank = fetchAllBookExercises();
