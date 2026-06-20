document.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    document.addEventListener('click', () => terminalInput.focus());

    terminalInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim().toLowerCase();
            this.value = '';
            if (!cmd) return;

            addLine(`velasco@portfolio:~$ ${cmd}`, 'input-echo');
            processCommand(cmd);
        }
    });

    function addLine(text, cls = '') {
        const p = document.createElement('p');
        p.className = 't-line' + (cls ? ' ' + cls : '');
        p.textContent = text;
        terminalOutput.appendChild(p);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function processCommand(cmd) {
        const commands = {
            help: () => [
                'Available commands:',
                '  whoami       — user info',
                '  skills       — technical skills',
                '  about        — short bio',
                '  projects     — project list',
                '  clear        — clear terminal',
            ],
            whoami: () => [
                'velasco_dendy',
                'Electrical Engineering student · Universitas Brawijaya',
                'Cybersecurity & Linux enthusiast',
            ],
            skills: () => [
                'Cybersecurity Basics  Networking  Linux',
                'Kali Linux  Arch Linux  Python  Web Security',
            ],
            about: () => [
                'Undergraduate Electrical Engineering student at Universitas Brawijaya.',
                'Fokus pada cybersecurity, networking, dan sistem operasi Linux.',
                'Senang bereksperimen dengan kode dan script.',
            ],
            projects: () => [
                '1. Packet Sniffer Tool — Python',
                '   Analisis lalu lintas jaringan & deteksi anomali paket.',
                '',
                '2. IoT Secure Gateway — Linux · IoT',
                '   Enkripsi MQTT & firewall untuk keamanan perangkat IoT.',
            ],
        };

        if (cmd === 'clear') {
            terminalOutput.innerHTML = '';
            return;
        }

        const fn = commands[cmd];
        if (fn) {
            setTimeout(() => fn().forEach(line => addLine(line, line ? 'success' : '')), 60);
        } else {
            setTimeout(() => addLine(`command not found: ${cmd}. Type 'help' for available commands.`), 60);
        }
    }
});