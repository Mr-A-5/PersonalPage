type LyricLine = {
    time: number;
    text: string;
};

type SongLyrics = {
    title: string;
    artist: string;
    videoId: string;
    lines: LyricLine[];
};

export const lyricsDatabase: Record<string, SongLyrics> = {
    IWishThatICouldFall: {
        title: 'I Wish That I Could Fall',
        artist: 'Sleep Theory',
        videoId: 'FftLImzl1-k',
        lines: [
            { time: 12, text: 'To spend a moment at your beck and call' },
            { time: 20, text: 'Oh, I would give my world to you' },
            { time: 24, text: 'I live my life in simple repetition' },
            { time: 30, text: 'But I would start again if it did you right' },
            {
                time: 35,
                text: 'Oh, I spend my days my fists against this wall',
            },
            {
                time: 41,
                text: 'But not a single sound seems to make it through',
            },
            { time: 45, text: 'Count on my fingers all the grand admissions' },
            { time: 51, text: "And I can't make it through a single time" },
            { time: 55, text: 'All I wanna do is to do you right' },
            {
                time: 58,
                text: 'I wish that I could climb to the greatest heights',
            },
            { time: 61, text: 'All the world beneath me when I meet your eye' },
            { time: 64, text: 'I wish that I could fall a little bit harder' },
            {
                time: 68,
                text: 'I wish that I could fall like it would even matter',
            },
            { time: 72, text: 'I wish that I could fall right into your life' },
            { time: 75, text: "But I'm not there at all, on the other side" },
            {
                time: 79,
                text: 'I wish that I could fall and hit the ground running',
            },
            {
                time: 82,
                text: 'I wish that I could fall instead of doing nothing',
            },
            {
                time: 86,
                text: 'I wish that I could fall right bеtween your eyes',
            },
            {
                time: 89,
                text: "But you just stand so tall, I'm left out of sight",
            },
            {
                time: 92,
                text: "I wish that I could fall somеwhere that it won't hurt",
            },
            { time: 102, text: 'Mm-mm-mm, mm-mm-mm' },
            { time: 108, text: 'Awake uneasy when the morning calls' },
            { time: 114, text: 'Oh, I would give my world to you' },
            { time: 119, text: 'I live my life in simple repetition' },
            { time: 124, text: 'But I can barely call what I live a life' },
            { time: 128, text: 'All I wanna do is to do you right' },
            { time: 132, text: 'Hold up two fingers, check my double vision' },
            { time: 138, text: 'Beside myself again, beaten black and blue' },
            { time: 143, text: "Without a purpose, I'm an apparition" },
            {
                time: 148,
                text: 'But I could be your sword, you could hold me tight',
            },
            { time: 152, text: 'All I wanna do is to do you right' },
            {
                time: 156,
                text: 'I wish that I could fly with these broken wings',
            },
            { time: 159, text: "If it was meant for you, I'd do anything" },
            { time: 162, text: 'I wish that I could fall a little bit harder' },
            {
                time: 165,
                text: 'I wish that I could fall like it would even matter',
            },
            {
                time: 169,
                text: 'I wish that I could fall right into your life',
            },
            { time: 172, text: "But I'm not there at all on the other side" },
            {
                time: 175,
                text: 'I wish that I could fall and see the sky clearly',
            },
            {
                time: 179,
                text: 'I wish that I could fall, not miss the ground completely',
            },
            {
                time: 182,
                text: 'I wish that I could fall somewhere close to you',
            },
            {
                time: 185,
                text: "But I don't land at all, drifting out of view",
            },
            {
                time: 188,
                text: 'I wish that I could fall but only truly backwards',
            },
            { time: 194, text: 'Right into your arms. Your arms (Your arms)' },
            { time: 202, text: 'A fire lit within my chest' },
            { time: 207, text: "My heart's been burning, wholly dispossessed" },
            {
                time: 210,
                text: '(These barely-blinking eyes that refuse to cry)',
            },
            { time: 213, text: "Oh, what I wouldn't give to stay" },
            { time: 217, text: 'To have my joy and sorrow cast away' },
            { time: 220, text: 'But even if my wings have been set alight' },
            { time: 224, text: 'All that I can do is to learn to fly' },
            { time: 228, text: 'All I wanna do is to do you right' },
            { time: 244, text: 'I wish that I could fall a little bit harder' },
            {
                time: 248,
                text: 'I wish that I could fall like it would even matter',
            },
            {
                time: 251,
                text: 'I wish that I could fall right into your life',
            },
            { time: 255, text: "But I'm not there at all on the other side" },
            {
                time: 258,
                text: 'I wish that I could fall and hit the ground running',
            },
            {
                time: 261,
                text: 'I wish that I could fall instead of doing nothing',
            },
            {
                time: 265,
                text: 'I wish that I could fall right between your eyes',
            },
            {
                time: 268,
                text: "But you just stand so tall, I'm left out of sight",
            },
            {
                time: 272,
                text: 'I wish that I could fall but only truly backwards',
            },
            { time: 275, text: 'Right into your arms. Your arms. Your arms!' },
            { time: 290, text: '' },
        ],
    },

    BallonGirl: {
        title: 'Ballon Girl',
        artist: '…',
        videoId: '2Tc2OVrgdTg',
        lines: [
            {
                time: 0,
                text: "Searching for meaning Somewhere out there I'll find",
            },
            { time: 6, text: 'A way to make it through, Yet another night' },
            { time: 24, text: 'Stuck in the darkness, waiting' },
            { time: 27, text: 'No one to hear my words fading' },
            {
                time: 29,
                text: "Voiceless as I carry on I'll melt until I'm gone",
            },
            {
                time: 32,
                text: "No answers for abating Before I realized it's saying,",
            },
            { time: 35.5, text: 'Overflowing with tears spilling down:' },
            { time: 38, text: '"Keep searching for the meaning of life"' },
            { time: 39.9, text: 'Life within the nothingness' },
            { time: 43, text: 'Where all my words have lost their meaning' },
            { time: 46.5, text: "But looking out I see there's a light" },
            { time: 48, text: 'Glowing brightly perfectly within my sight' },
            {
                time: 51,
                text: "I'll fight through another night. Open up your eyes",
            },
            { time: 54, text: "'Cause the wind will still blow" },
            {
                time: 58,
                text: "No matter if my heart's still broken down. In waves below",
            },
            { time: 62, text: 'Stars above will keep on shining down' },
            {
                time: 65,
                text: "Walking down this path I'm sure that I'll be found",
            },
            { time: 68, text: "So that's where I'll go" },
            { time: 70, text: "'Cause the wind will still blow" },
            {
                time: 74,
                text: "No matter if my heart's still broken down. In waves below",
            },
            { time: 78, text: 'Stars above will keep on shining down' },
            {
                time: 81,
                text: "Walking down this path I'm sure that I'll be found",
            },
            { time: 84, text: 'Where the wind blows' },
            { time: 100, text: 'Yo! Waking up, same as always' },
            {
                time: 102,
                text: "My routine's unchanged. Even in all my dreams",
            },
            {
                time: 104,
                text: "One breath is all that I can take. Don't know where I am",
            },
            {
                time: 106,
                text: 'This place of loneliness I have to face or embrace it',
            },
            {
                time: 108,
                text: "'Cause wind blows place to place (Wind blows place to place)",
            },
            {
                time: 110,
                text: "Sun's shining on my face (Sun's shining on my face)",
            },
            {
                time: 112,
                text: 'It\'s all a lie. But I\'ll keep searching on for that "life"',
            },
            {
                time: 115,
                text: 'Vanished into the night. No voice or shining lights',
            },
            {
                time: 119,
                text: 'No more nightmares, I will sleep tight. (It hurts a little)',
            },
            { time: 123, text: "But looking out I see there's a light" },
            { time: 125, text: 'Shining brightly, perfectly within my sight' },
            {
                time: 127,
                text: "I'll fight through another night. Open up your eyes",
            },
            { time: 130, text: "'Cause the wind will still blow" },
            {
                time: 135,
                text: "No matter if my heart's still broken down. In waves below",
            },
            { time: 138, text: 'Stars above will keep on shining down' },
            {
                time: 142,
                text: "Walking down this path I'm sure that I'll be found",
            },
            { time: 145, text: "So that's where I'll go" },
            { time: 147, text: "'Cause the wind will still blow" },
            {
                time: 150,
                text: "No matter if my heart's still broken down. In waves below",
            },
            { time: 154, text: 'Stars above will keep on shining down' },
            {
                time: 158,
                text: "Walking down this path I'm sure that I'll be found",
            },
            {
                time: 160,
                text: 'Where the wind blows',
            },
            { time: 176, text: "I know there's loneliness waiting" },
            {
                time: 179,
                text: 'No answers, or placating but I still made it this far',
            },
            { time: 184, text: 'For all those dreams I had to leave behind' },
            { time: 188, text: "I'm still here another night!" },

            { time: 192, text: "'Cause the wind will still blow" },
            {
                time: 195,
                text: "No matter if my heart's still broken down. In waves below",
            },
            { time: 200, text: 'Stars above will keep on shining down' },
            {
                time: 204,
                text: "Walking down this path I'm sure that I'll be found",
            },
            { time: 206, text: "So that's where I'll go" },
            { time: 208, text: "'Cause the wind will still blow" },
            {
                time: 210,
                text: "No matter if my heart's still broken down. In waves below",
            },
            { time: 215, text: 'Stars above will keep on shining down' },
            {
                time: 219,
                text: "Walking down this path I'm sure that I'll be found",
            },
            { time: 221, text: 'Where the wind blows' },

            { time: 222, text: 'Yo! Waking up, same as always' },
            {
                time: 223.5,
                text: "My routine's unchanged even in all my dreams",
            },
            { time: 225, text: 'One breath is all that I can take' },
            { time: 230, text: "Yo! Don't know where I am" },
            { time: 231.5, text: 'This place of loneliness I have to face' },
            { time: 233, text: "Or embrace it 'Cause it's all a lie" },
            { time: 235, text: 'But I\'ll keep searching on for that "life"' },
        ],
    },
    SkipTheFormalities: {
        title: 'Skip the Formalities',
        artist: '…',
        videoId: 'CzJJrBFhxh4',
        lines: [
            {
                time: 2,
                text: 'Ding. The elevator stops',
            },
            {
                time: 4,
                text: 'Stuck into the cage where we allowed to get caught',
            },
            { time: 6, text: 'Hey. Is that coffee I smell?' },
            { time: 8, text: 'The distraction from the thought to rebel' },
            {
                time: 10,
                text: 'We attend the call',
            },
            {
                time: 12,
                text: "Kneeling to the spinning hands we've given control",
            },
            { time: 15, text: 'Wait' },
            { time: 16, text: '(Hello. Please leave a message at the tone.)' },
            {
                time: 18,
                text: "Here there's no games to play And yet you're always playing",
            },
            { time: 23, text: 'Reverie stuck in ovеrtime' },
            {
                time: 26,
                text: "I feel like it's the first timе I've changed the place I'm in",
            },
            { time: 29, text: 'To be consulting you' },
            {
                time: 34,
                text: "It's pushing for a raise. Or is our pushing rising?",
            },
            { time: 38, text: 'Our daily dose of morning shine' },
            {
                time: 42,
                text: "Discovering what's color. In rooms stuck in gray",
            },
            { time: 46, text: 'Are my emotions coming through?' },
            {
                time: 50,
                text: 'All day caught up in different tasks',
            },
            { time: 54, text: "Just can't let this chance pass" },
            { time: 60, text: 'Would some extra time be too much to ask?' },
            {
                time: 68,
                text: "Let's skip the formalities, and take the lead for once",
            },
            {
                time: 71,
                text: 'Or do these so called "hierarchies can beat our need to dance?',
            },
            {
                time: 75,
                text: "I hear insecurities. Well, let's put them on hold",
            },
            {
                time: 80,
                text: "I've waited for too long. For my line to be called",
            },
            {
                time: 84,
                text: "Let's be unprofessional and let's stop telling lies",
            },
            {
                time: 88,
                text: 'Are my true feelings well-disguised by wearing suits and ties?',
            },
            {
                time: 92,
                text: "There are things that can't be said inside the subject line",
            },
            {
                time: 95,
                text: 'Do I make myself clear? How can I make you mine?',
            },
            {
                time: 102,
                text: "It's worth discussing and it's worth holding a meeting",
            },
            {
                time: 108,
                text: "It's worth holding your hand. Whoa, wait",
            },
            {
                time: 111,
                text: 'The corporate ladder is too tall. A threat how easy it is to fall',
            },
            {
                time: 116,
                text: 'FOR YOU',
            },
            {
                time: 118,
                text: 'WAKE UP',
            },
            {
                time: 120,
                text: 'Does making all the rules. Make it much worse to break them?',
            },
            { time: 124, text: 'Running from whispers through the hall' },
            {
                time: 127,
                text: "If this is right or this is wrong, I can't hang up the phone",
            },
            { time: 131, text: "Can't work through this agenda all alone" },
            {
                time: 135,
                text: 'Asking what happened to my nights. Personal paradise',
            },
            {
                time: 145,
                text: 'How come that my dreams now show from nine to five?',
            },
            {
                time: 152,
                text: 'Learned to put my strongest front to be the one in charge',
            },
            {
                time: 156,
                text: 'Should I teach you the guidelines on the way into my heart',
            },
            {
                time: 160,
                text: "There's no need for emails there's no need for schedule sheets",
            },
            {
                time: 165,
                text: "As long as there's no stares we'll find our time to meet",
            },
            {
                time: 169,
                text: "That's enough of typing. Can't you see that you're my type?",
            },
            {
                time: 173,
                text: 'What other situation makes me love to work at night?',
            },
            {
                time: 177,
                text: "There are things that can't be said inside the subject line",
            },
            {
                time: 182,
                text: 'Do I make myself clear? How can I make you mine?',
            },
            {
                time: 218,
                text: "Let's skip the formalities, and take the lead for once",
            },
            {
                time: 223,
                text: 'Or do these so called "hierarchies can beat our need to dance?',
            },
            {
                time: 228,
                text: "I hear insecurities. Well, let's put them on hold",
            },
            {
                time: 231,
                text: "I've waited for too long. For my line to be called",
            },
            {
                time: 236,
                text: "Let's be unprofessional and let's stop telling lies",
            },
            {
                time: 239,
                text: 'Are my true feelings well-disguised by wearing suits and ties?',
            },
            {
                time: 244,
                text: "There are things that can't be said inside the subject line",
            },
            {
                time: 248,
                text: 'Do I make myself clear? How can I make you mine?',
            },
        ],
    },
};
