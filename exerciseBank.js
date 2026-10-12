/**
 * Iterates through the book's frames and exercises using a for loop, 
 * returning an aggregated list of all exercises in the requested format.
 * @returns {Array} List of formatted exercise objects.
 */
function fetchAllBookExercises() {
    // Raw dataset extracted from Bobby Fischer Teaches Chess
    const rawExercises = [
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 6,
            title: "Exercise (Frame 6)",
            text: "The White Queen is giving check. The Black King can capture / cannot capture[cite: 40].",
            fen: "6q1/7p/4B3/8/8/8/4K3/8 b - - 0 1",
            options: [
                "can capture[cite: 40]",
                "cannot capture[cite: 40]"
            ],
            correct: 1,
            explanation: "Cannot capture! The Queen is protected by the Bishop, and the King has no safe flight squares[cite: 40]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 7,
            title: "Exercise (Frame 7)",
            text: "The White Queen is giving check. The Black King can capture / cannot capture[cite: 41].",
            fen: "1q6/8/8/8/4B3/8/4K3/8 b - - 0 1",
            options: [
                "can capture[cite: 41]",
                "cannot capture[cite: 41]"
            ],
            correct: 0,
            explanation: "Can capture! The Bishop is not protecting the Queen[cite: 41, 42]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 8,
            title: "Exercise 3 (Frame 8)",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 42].",
            fen: "6Rk/7p/8/5N/8/8/8/6K b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 42]",
                "cannot capture checking White Rook[cite: 42]"
            ],
            correct: 0,
            explanation: "Can capture checking White Rook[cite: 42]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 9,
            title: "Exercise 4 (Frame 9)",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 43].",
            fen: "6Rk/7p/8/4N3/8/8/8/6K b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 43]",
                "cannot capture checking White Rook[cite: 43]"
            ],
            correct: 1,
            explanation: "Cannot capture checking White Rook (The Rook is protected by the Knight)[cite: 43]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 10,
            title: "Exercise (Frame 10)",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 44].",
            fen: "R1k5/2p5/1p6/8/8/2K5/8/8 b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 44]",
                "cannot capture checking White Rook[cite: 44]"
            ],
            correct: 0,
            explanation: "Can capture checking White Rook[cite: 44]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 11,
            title: "Exercise (Frame 11)",
            text: "Black King: can capture checking White Rook / cannot capture checking White Rook[cite: 45].",
            fen: "k1R5/1p6/8/8/4K3/8/8/8 b - - 0 1",
            options: [
                "can capture checking White Rook[cite: 45]",
                "cannot capture checking White Rook[cite: 45]"
            ],
            correct: 1,
            explanation: "Cannot capture checking White Rook (Black is mated; the Rook is beyond the Black King's reach)[cite: 45, 46]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 13,
            title: "Exercise (Frame 13)",
            text: "Now you decide what Black can do in this position. Black King: can capture its attacker / can flee / can do neither[cite: 48].",
            fen: "7k/6p1/8/3BB3/5K2/8/8/8 b - - 0 1",
            options: [
                "can capture its attacker[cite: 48]",
                "can flee[cite: 48]",
                "can do neither[cite: 48]"
            ],
            correct: 2,
            explanation: "Can do neither (Black is mated. The Bishops team up powerfully here)[cite: 48]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 14,
            title: "Exercise (Frame 14)",
            text: "Again, observe the position and decide what the Black King can do. Black King: can capture attacker / can flee / can do neither[cite: 49].",
            fen: "4k2q/3pp1Q1/8/2b3N1/p7/8/3PP1P1/4K3 b - - 0 1",
            options: [
                "can capture attacker[cite: 49]",
                "can flee[cite: 49]",
                "can do neither[cite: 49]"
            ],
            correct: 1,
            explanation: "Can flee (One square to your left)[cite: 50]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 15,
            title: "Exercise (Frame 15)",
            text: "Black King: can capture attacker / can flee / can do neither[cite: 50].",
            fen: "4r3/5pk1/4p1pp/8/8/5K2/8/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 50]",
                "can flee[cite: 50]",
                "can do neither[cite: 50]"
            ],
            correct: 2,
            explanation: "Can do neither (White's Pawn stops Black's King from fleeing)[cite: 51]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 16,
            title: "Exercise (Frame 16)",
            text: "Black King: can capture attacker / can flee / can do neither[cite: 51].",
            fen: "7k/5ppR/8/8/4K3/8/8/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 51]",
                "can flee[cite: 51]",
                "can do neither[cite: 51]"
            ],
            correct: 0,
            explanation: "Can capture attacker[cite: 51]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 17,
            title: "Exercise (Frame 17)",
            text: "Here the lowly Pawn is giving check. Black King: can capture attacker / can flee / can do neither[cite: 52].",
            fen: "1k1r3r/2pp4/2P1Q3/8/8/8/7K/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 52]",
                "can flee[cite: 52]",
                "can do neither[cite: 52]"
            ],
            correct: 2,
            explanation: "Can do neither (Black is mated)[cite: 53]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 18,
            title: "Exercise (Frame 18)",
            text: "Black King: can capture attacker / can flee / can do neither[cite: 53].",
            fen: "4rk1r/5pp1/3Q4/8/8/5K2/8/8 b - - 0 1",
            options: [
                "can capture attacker[cite: 53]",
                "can flee[cite: 53]",
                "can do neither[cite: 53]"
            ],
            correct: 2,
            explanation: "Can do neither (Checking Rook is protected by Queen. Black is mated)[cite: 54]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 37,
            title: "Exercise (Frame 37)",
            text: "In this position, the White Rook is checking: Which Black piece can defend against the check? What does that Black piece do?[cite: 74]",
            fen: "3r3k/5ppp/8/8/8/8/4R3/4R1K1 b - - 0 1",
            options: [
                "captures[cite: 74]",
                "interposes[cite: 74]"
            ],
            correct: 1,
            explanation: "The Knight interposes[cite: 74]."
        },
        {
            chapter: "Chapter 1: Elements of Checkmate[cite: 30]",
            frame: 38,
            title: "Exercise (Frame 38)",
            text: "Which Black piece can defend against this check? What does that Black piece do?[cite: 75]",
            fen: "4r2k/5ppp/8/8/8/8/4R3/4R1K1 b - - 0 1",
            options: [
                "captures[cite: 75]",
                "interposes[cite: 75]"
            ],
            correct: 0,
            explanation: "Pawn captures (the Queen/Rook)[cite: 75]."
        },
        {
            chapter: "Chapter 2: The Back-Rank Mates[cite: 118]",
            frame: 90,
            title: "Back-Rank Power Check (Frame 90)",
            text: "Does White have enough power to mate on Black's back rank?[cite: 133]",
            fen: "3r2k1/5ppp/8/8/8/8/4R3/4R1K1 w - - 0 1",
            options: [
                "yes[cite: 133]",
                "no[cite: 133]"
            ],
            correct: 0,
            explanation: "Yes! White has the power to mate—four against three[cite: 133]."
        },
        {
            chapter: "Chapter 2: The Back-Rank Mates[cite: 118]",
            frame: 91,
            title: "Back-Rank Power Check (Frame 91)",
            text: "Does White have enough power to mate on Black's back rank?[cite: 134]",
            fen: "2r3k1/5ppp/8/8/8/8/4R3/4R1K1 w - - 0 1",
            options: [
                "yes[cite: 134]",
                "no[cite: 134]"
            ],
            correct: 1,
            explanation: "No! There is no mate here—two against two: Black Bishop and Rook against two Rooks[cite: 134]."
        },
        {
            chapter: "Chapter 3: Back-Rank Defenses and Variations[cite: 171]",
            frame: 128,
            title: "Defender Removal (Frame 128)",
            text: "If White plays Rook-takes-Rook-check (as shown), how can Black save himself?[cite: 175]",
            fen: "3r2k1/5ppp/8/8/8/8/5R2/4R1K1 w - - 0 1",
            options: [
                "by playing Rook-takes-Rook[cite: 175]",
                "by playing Queen-takes-Rook[cite: 175]"
            ],
            correct: 1,
            explanation: "By playing Queen-takes-Rook, so it will still be two against two[cite: 175]."
        },
        {
            chapter: "Chapter 4: Displacing Defenders[cite: 208]",
            frame: 160,
            title: "Drawing Away Defenders (Frame 160)",
            text: "Which move should White make to begin a mating combination here?[cite: 211]",
            fen: "6k1/5ppp/8/8/8/8/7R/4R2K w - - 0 1",
            options: [
                "move A[cite: 211]",
                "move B[cite: 211]"
            ],
            correct: 0,
            explanation: "Move A. And the remaining Rook will deliver the mate after the Knight captures[cite: 211]."
        },
        {
            chapter: "Chapter 5: Attacks on the Enemy Pawn Cover[cite: 251]",
            frame: 198,
            title: "Pawn Cover Sacrifice (Frame 198)",
            text: "Does Queen-takes-Pawn-check lead to mate here?[cite: 240]",
            fen: "r1bq1rk1/ppp2ppp/2n5/3p4/8/2N2N2/PPP1QPPP/R1B2RK1 w - - 0 1",
            options: [
                "yes[cite: 240]",
                "no[cite: 240]"
            ],
            correct: 0,
            explanation: "Yes! Here the Bishop is present. When Black plays Rook-takes-Queen, the White Rook will mate[cite: 240]."
        },
        {
            chapter: "Chapter 6: Final Review[cite: 308]",
            frame: 244,
            title: "Criterion Position 1 (Frame 244)",
            text: "Can White mate?[cite: 317]",
            fen: "7k/5ppp/8/8/8/8/4R3/4R2K w - - 0 1",
            options: [
                "yes[cite: 317]",
                "no[cite: 317]"
            ],
            correct: 0,
            explanation: "Yes, White executes the standard back-rank mating combination[cite: 313, 317]."
        },
        {
            chapter: "Chapter 6: Final Review[cite: 308]",
            frame: 275,
            title: "Criterion Position Final (Frame 275)",
            text: "From Fischer-Benko, 1962: Can White mate?[cite: 348]",
            fen: "6k1/5ppp/8/8/8/8/4Q3/3R3K w - - 0 1",
            options: [
                "yes[cite: 348]",
                "no[cite: 348]"
            ],
            correct: 0,
            explanation: "Yes! I took the Pawn, giving check[cite: 348]."
        }
    ];

    const exercisesBank = [];
    
    // For loop to process and collect each exercise in its turn
    for (let i = 0; i < rawExercises.length; i++) {
        const item = rawExercises[i];
        exercisesBank.push({
            chapter: item.chapter,
            frame: item.frame,
            title: item.title,
            text: item.text,
            fen: item.fen,
            options: item.options,
            correct: item.correct,
            explanation: item.explanation
        });
    }

    return exercisesBank;
}
