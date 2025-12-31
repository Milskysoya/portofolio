document.addEventListener('DOMContentLoaded', () => {
    // --- Typing Effect for Header ---
    const titleText = "Pixel Cybersecurity Terminal";
    const titleElement = document.getElementById('typing-title');
    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            titleElement.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            // Reveal remaining content
            revealSections();
        }
    }

    // Start initial typing
    setTimeout(typeWriter, 500);

    // --- Staggered Fade-In ---
    function revealSections() {
        const sections = document.querySelectorAll('.terminal-section');
        sections.forEach((section, idx) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, idx * 400);
        });
    }

    // --- Interactive Terminal ---
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    // Keep focus on input
    document.addEventListener('click', () => {
        if (document.getElementById('interactive-terminal').classList.contains('visible')) {
            terminalInput.focus();
        }
    });

    terminalInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            this.value = ''; // Clear input

            // Add input to history
            addToOutput(`guest@pixel-cyber:~$ ${command}`);

            // Process command
            processCommand(command);
        }
    });

    function addToOutput(text) {
        const p = document.createElement('p');
        p.className = 'terminal-line';
        p.textContent = text;
        terminalOutput.appendChild(p);

        // Auto-scroll to bottom
        const terminalWindow = document.querySelector('.terminal-window');
        terminalWindow.scrollTop = terminalWindow.scrollHeight;
    }

    function processCommand(cmd) {
        let response = '';

        switch (cmd) {
            case 'help':
                response = "Available commands:\n- whoami: Display user info\n- ls skills: List technical skills\n- cat about_me.txt: Display bio\n- clear: Clear terminal output";
                break;
            case 'whoami':
                response = "User: Velasco Dendy\nRole: Undergraduate Electrical Engineering Student\nStatus: Cybersecurity Enthusiast";
                break;
            case 'ls skills':
            case 'ls': // flexible
                response = "skills/\n├── Cybersecurity Basics\n├── Networking\n├── Linux (Kali, Arch)\n├── Python\n└── Web Security";
                break;
            case 'cat about_me.txt':
            case 'cat about': // flexible
                response = "Saya adalah Undergraduate Electrical Engineering student at Universitas Brawijaya who loves Cybersecurity, Linux, and Technology.";
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                return; // Exit early so we don't add empty response
            case '':
                return; // Do nothing for empty enter
            default:
                response = `Command not found: ${cmd}. Type 'help' for available commands.`;
        }

        // Simulating processing delay for realism
        setTimeout(() => {
            // Handle newlines in response for display
            const lines = response.split('\n');
            lines.forEach(line => addToOutput(line));
        }, 100);
    }

    // --- Card Interactions ---
    const cards = document.querySelectorAll('.pixel-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        });
    });
});
