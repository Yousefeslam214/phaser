<h1>Seed Planting Game</h1>
    <h2>About the Game</h2>
    <p>This is a simple game made with <strong>Phaser 3</strong>. The player has to drag and drop seeds into the right spots on the screen to plant them. When the seed is placed correctly, it disappears, and a plant grows in its place. If the player tries to place something else in the wrong spot, a warning shows, and the item returns to its original position.</p>
    <h2>Game Features</h2>
    <h3>1. Start Scene</h3>
    <ul>
        <li><strong>Splash Screen:</strong> A fun screen shows the game's logo and theme.</li>
        <li><strong>Loading Animation:</strong> A progress bar or animation shows while the game loads.</li>
        <li><strong>Loading :</strong> The  "Loading..." will appear while the game is getting ready.</li>
    </ul>
    <h3>2. First Level</h3>
    <ul>
        <li><strong>Goal:</strong> The player’s task is to drag seeds and place them in the correct brown slots on the screen.</li>
        <li><strong>Drag-and-Drop:</strong> Players drag the seeds and drop them into the right slots.</li>
        <li><strong>Correct Placement:</strong> When a seed is placed correctly, it disappears, and a plant grows in its place.</li>
        <li><strong>Wrong Placement:</strong> If something other than a seed is placed in the slot, a warning message will appear, and the object will return to where it started.</li>
    </ul>
    <h3>3. Sounds and Animations</h3>
    <ul>
        <li><strong>Animations:</strong> The game uses smooth animations for things like seeds and plants.</li>
        <li><strong>Sound Effects:</strong> Sounds will play when dragging items, placing them correctly, or making a mistake.</li>
    </ul>
    <h2>How to Set Up</h2>
    <h3>1. Clone the project</h3>
    <p>Run this command in your terminal:</p>
    <pre><code>git clone https://github.com/Yousefeslam214/phaser.git</code></pre>
    <h3>2. Go into the game folder</h3>
    <pre><code>cd phaser</code></pre>
    <h3>3. Install the necessary files</h3>
    <p>Run this to install everything the game needs:</p>
    <pre><code>npm install</code></pre>
    <h3>4. Start the game using an HTTP server</h3>
    <p>Instead of using npm start, you need to run an HTTP server. Here’s how:</p>
    <ul>
        <li>If you don’t have an HTTP server, install one using npm:</li>
        <pre><code>npm install -g http-server</code></pre>
        <li>Then, run the server in your game folder:</li>
        <pre><code>http-server</code></pre>
        <li>Open your browser and go to <strong>http://localhost:8080</strong> to play the game!</li>
    </ul>
    <h2>File Structure</h2>
    <pre><code>
phaser-game/
├── assets/             # Game images, sounds, and other assets
├── scenes/             # The game’s scenes (IntroScene, Level1Scene, etc.)
├── index.html          # Main file that starts the game
├── main.js             # File that runs the game
├── README.md           # This documentation
└── package.json        # Project settings and dependencies
    </code></pre>
    <h2>How to Play</h2>
    <ul>
        <li><strong>Drag the seeds</strong> from their starting points.</li>
        <li><strong>Drop them in the brown slots</strong> on the screen.</li>
        <li>When a seed is placed correctly, it disappears, and a plant grows.</li>
        <li>If you place something else in the wrong spot, it will go back to where it started, and a warning will show up.</li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Phaser 3:</strong> The game framework that powers this game.</li>
        <li><strong>JavaScript (ES6+):</strong> The language used to write the game code.</li>
        <li><strong>HTML5 & CSS3:</strong> Used for the game’s design and layout.</li>
    </ul>
    <h2>Future Ideas</h2>
    <ul>
        <li><strong>More levels</strong> with harder challenges.</li>
        <li><strong>Better animations</strong> and effects for a more fun experience.</li>
        <li><strong>A main menu</strong> to navigate between different parts of the game.</li>
        <li><strong>Support for mobile devices</strong> so more people can play.</li>
    </ul>
    <h2>License</h2>
    <p>This project uses the <strong>MIT License</strong>.</p>
    <h2>Author</h2>
    <p><strong>Yousef Eslam</strong> - Game Developer</p>
    <p>Enjoy the game! 🚀</p>
</body>
</html>
