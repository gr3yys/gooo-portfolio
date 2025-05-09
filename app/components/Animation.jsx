import { useEffect } from 'react';

const Animation = () => {
    useEffect(() => {
        // Get the container element where the code animation will run
        const codeElement = document.getElementById("code");
        const cursor = codeElement.querySelector(".cursor");

        // Array of code lines with basic HTML-based syntax highlighting
        const codeLines = [
            `<span class="keyword">const</span> <span class="variable">greet</span> = <span class="keyword">()</span> <span class="keyword">=></span> {`,
            `  <span class="keyword">let</span> <span class="variable">name</span> = <span class="value">'World'</span>;`,
            `  <span class="function">console</span>.<span class="function">log</span>(<span class="value">\`Hello, \${name}!\`</span>);`,
            `};`,
            `<span class="function">greet</span>();`
        ];

        // Combine the full HTML string and its plain text version
        const fullHTML = codeLines.join('\n');
        const plainText = fullHTML.replace(/<[^>]*>/g, '');

        // Track the position of the cursor while typing
        let htmlIndex = 0;
        let tagBuffer = '';
        let isTag = false;

        // Utility function to delay execution
        function sleep(ms) {
            return new Promise(res => setTimeout(res, ms));
        }

        // The animation function: types the code, then backspaces it
        async function typeAndBackspace() {
            while (true) {
                // ======= Typing Effect =======
                let content = '';
                htmlIndex = 0;
                isTag = false;
                tagBuffer = '';

                while (htmlIndex < fullHTML.length) {
                    const char = fullHTML[htmlIndex];

                    if (char === '<') {
                        isTag = true;
                        tagBuffer += char;
                    } else if (char === '>') {
                        tagBuffer += char;
                        content += tagBuffer;
                        tagBuffer = '';
                        isTag = false;
                    } else if (isTag) {
                        tagBuffer += char;
                    } else {
                        content += char;
                    }

                    htmlIndex++;
                    codeElement.innerHTML = content + cursor.outerHTML;
                    await sleep(20); // speed of typing
                }

                await sleep(600); // short pause after fully typed

                // ======= Backspacing Effect =======
                let plainIndex = plainText.length;
                while (plainIndex > 0) {
                    plainIndex--;

                    const slicedText = plainText.slice(0, plainIndex);
                    let rebuild = '';
                    let count = 0;

                    // Reconstruct highlighted code up to current slice
                    for (let line of codeLines) {
                        const textOnly = line.replace(/<[^>]*>/g, '');
                        if (count + textOnly.length >= plainIndex) {
                            const cutoff = plainIndex - count;
                            rebuild += line.replace(/<[^>]*>/g, '').slice(0, cutoff);
                            break;
                        } else {
                            rebuild += line.replace(/<[^>]*>/g, '') + '\n';
                            count += textOnly.length + 1;
                        }
                    }

                    codeElement.textContent = rebuild;
                    codeElement.appendChild(cursor);
                    await sleep(40); // slower backspace speed
                }

                await sleep(600); // pause before restarting
            }
        }

        // Start the typing animation
        typeAndBackspace();
    }, []);

    return (
        <div className="flex justify-center items-center m-0 font-mono">
            <div className="w-[500px] bg-[#2b2b3c] rounded-lg overflow-hidden shadow-lg">
                {/* Top bar with window controls */}
                <div className="bg-[#1e1e2f] text-white p-3 text-sm flex items-center">
                    <div className="flex space-x-2">
                        <div className='w-3 h-3 rounded-full bg-[#FF5F57]' /> {/* red */}
                        <div className='w-3 h-3 rounded-full bg-[#FFBD2E]' /> {/* yellow */}
                        <div className='w-3 h-3 rounded-full bg-[#34C759]' /> {/* green */}
                    </div>
                </div>

                {/* Tabs UI */}
                <div className='bg-[#1a1a2e] p-2 flex gap-2 text-gray-400'>
                    <div className='tab text-white border-b-2 border-[#d0e4ee]'>index.js</div>
                    <div className='tab'>app.js</div>
                </div>

                {/* Code output area with blinking cursor */}
                <div className="p-5 text-gray-300 bg-[#2b2b3c] text-sm/loose whitespace-pre-wrap min-h-[300px] relative">
                    <div id='code'>
                        {/* Initial cursor before typing starts */}
                        <span className="cursor inline-block w-[2px] bg-white animate-blink align-bottom h-[1em]"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animation;
