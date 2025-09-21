// ClassConnect - ULTIMATE Educational Platform
// All features: Real-time Notifications, Dedicated Notes Tab, Enhanced AI Modes, Scrollable Chat

// Sample data
const teachers = [
    { id: 1, name: "Dr. Sarah Johnson", subjects: ["Physics", "Advanced Math"], grade: "Grade 8", initials: "SJ", color: "#5e72e4", image: "media/teachers/sarah-johnson.jpg" },
    { id: 2, name: "Prof. Michael Chen", subjects: ["Chemistry", "Biology"], grade: "Grade 8", initials: "MC", color: "#11cdef", image: "media/teachers/michael-chen.jpg" },
    { id: 3, name: "Ms. Emily Rodriguez", subjects: ["English Literature", "Creative Writing"], grade: "Grade 8", initials: "ER", color: "#2dce89", image: "media/teachers/emily-rodriguez.jpg" }
];

const classmates = [
    { id: 1, name: "Emma Wilson", status: "online", initials: "EW", color: "#5e72e4", image: "media/students/emma-wilson.jpg" },
    { id: 2, name: "Liam Martinez", status: "online", initials: "LM", color: "#11cdef", image: "media/students/liam-martinez.jpg" },
    { id: 3, name: "Olivia Anderson", status: "idle", initials: "OA", color: "#2dce89", image: "media/students/olivia-anderson.jpg" },
    { id: 4, name: "Noah Taylor", status: "offline", initials: "NT", color: "#fb6340", image: "media/students/noah-taylor.jpg" },
    { id: 5, name: "Ava Thomas", status: "online", initials: "AT", color: "#f5365c", image: "media/students/ava-thomas.jpg" }
];

const upcomingEvents = [
    { date: "2025-04-15", title: "Math Quiz - Chapter 5", daysUntil: 3 },
    { date: "2025-04-18", title: "Science Test - Photosynthesis", daysUntil: 5 },
    { date: "2025-04-25", title: "History Project Due", daysUntil: 12 },
    { date: "2025-04-30", title: "English Essay Deadline", daysUntil: 8 }
];

const problemBanks = {
    "quadratic": [
        { q: "Solve: x² - 5x + 6 = 0", a: "x=2, x=3", hint: "Factor: (x-2)(x-3)=0" },
        { q: "Solve: x² + 4x + 4 = 0", a: "x=-2", hint: "This is a perfect square: (x+2)²=0" },
        { q: "Solve: 2x² - 8x = 0", a: "x=0, x=4", hint: "Factor out 2x: 2x(x-4)=0" },
        { q: "Solve: x² - 9 = 0", a: "x=3, x=-3", hint: "Difference of squares: (x-3)(x+3)=0" },
        { q: "Solve: 3x² + 6x + 3 = 0", a: "x=-1", hint: "Divide by 3 first: x² + 2x + 1 = 0, then (x+1)²=0" },
        { q: "Solve: x² + x - 12 = 0", a: "x=3, x=-4", hint: "Find two numbers that multiply to -12 and add to 1" },
        { q: "Solve: 4x² - 16 = 0", a: "x=2, x=-2", hint: "Divide by 4: x² - 4 = 0, then difference of squares" },
        { q: "Solve: x² - 2x - 15 = 0", a: "x=5, x=-3", hint: "Factor: (x-5)(x+3)=0" },
        { q: "Solve: 2x² + 5x - 3 = 0", a: "x=0.5, x=-3", hint: "Use quadratic formula or factor: (2x-1)(x+3)=0" },
        { q: "Solve: x² + 6x + 9 = 0", a: "x=-3", hint: "Perfect square: (x+3)²=0" }
    ],
    "photosynthesis": [
        { q: "What are the reactants in photosynthesis?", a: "carbon dioxide and water", hint: "CO₂ + H₂O + sunlight → glucose + O₂" },
        { q: "Where does photosynthesis occur in plant cells?", a: "chloroplasts", hint: "These organelles contain chlorophyll" },
        { q: "What is the primary pigment used in photosynthesis?", a: "chlorophyll", hint: "It's green and captures light energy" },
        { q: "What gas is released as a byproduct of photosynthesis?", a: "oxygen", hint: "Plants release this gas that animals breathe" },
        { q: "What type of energy is converted during photosynthesis?", a: "light energy to chemical energy", hint: "Sunlight becomes stored energy in glucose" },
        { q: "What is the chemical formula for glucose produced in photosynthesis?", a: "C6H12O6", hint: "Count the atoms: 6 carbon, 12 hydrogen, 6 oxygen" },
        { q: "What is the name of the process that splits water molecules in photosynthesis?", a: "photolysis", hint: "Photo = light, lysis = splitting" },
        { q: "Which part of the light spectrum is least used by chlorophyll?", a: "green", hint: "This is why plants appear green - they reflect it" },
        { q: "What are the two main stages of photosynthesis?", a: "light-dependent reactions and Calvin cycle", hint: "First stage needs light, second stage makes sugar" },
        { q: "What molecule carries energy from the light reactions to the Calvin cycle?", a: "ATP and NADPH", hint: "These are energy carriers produced in the thylakoids" }
    ],
    "world war": [
        { q: "Which event triggered the start of World War I?", a: "assassination of Archduke Franz Ferdinand", hint: "It happened in Sarajevo in 1914" },
        { q: "What were the two main alliances in World War I?", a: "Allies and Central Powers", hint: "Allies included Britain, France, Russia; Central Powers included Germany, Austria-Hungary" },
        { q: "What was the Zimmerman Telegram?", a: "A German proposal for Mexico to join the war against the US", hint: "This helped push America to enter WWI" },
        { q: "What was the Treaty of Versailles?", a: "The peace treaty that ended World War I", hint: "Signed in 1919, imposed heavy penalties on Germany" },
        { q: "What new weapons were introduced in World War I?", a: "tanks, machine guns, poison gas, airplanes", hint: "This was the first industrial war with modern weapons" },
        { q: "What was the Lusitania?", a: "A British passenger ship sunk by a German submarine", hint: "This event turned public opinion against Germany" },
        { q: "What was trench warfare?", a: "A form of combat where opposing troops fought from trenches", hint: "Led to stalemate and horrific conditions on the Western Front" },
        { q: "Who was the leader of Germany during World War I?", a: "Kaiser Wilhelm II", hint: "He was forced to abdicate after Germany's defeat" },
        { q: "What was the League of Nations?", a: "An international organization created after WWI to prevent future wars", hint: "Proposed by Woodrow Wilson but the US never joined" },
        { q: "What were the Fourteen Points?", a: "Woodrow Wilson's plan for peace after World War I", hint: "Included ideas like self-determination and free trade" }
    ]
};

// AI Mode configurations
const aiModes = {
    homework: {
        name: "Homework Helper",
        description: "📚 <strong>Homework Helper:</strong> Get step-by-step solutions and explanations for your assignments.",
        placeholder: "e.g., Help me solve this math problem",
        responsePrefix: "I'll help you step-by-step with this homework problem:",
        practiceTitle: "Homework Practice Problems"
    },
    qna: {
        name: "Instant Q&A",
        description: "❓ <strong>Instant Q&A:</strong> Ask any question and get detailed, accurate answers instantly.",
        placeholder: "e.g., What is the capital of France?",
        responsePrefix: "Great question! Here's a detailed answer:",
        practiceTitle: "Knowledge Check Questions"
    },
    planner: {
        name: "Study Planner",
        description: "🗓️ <strong>Study Planner:</strong> Get personalized study schedules and learning strategies.",
        placeholder: "e.g., Create a study plan for my biology test",
        responsePrefix: "Here's your personalized study plan:",
        practiceTitle: "Study Plan Review Questions"
    },
    exam: {
        name: "Exam Prep",
        description: "🧪 <strong>Exam Prep:</strong> Test your knowledge with exam-style questions and get instant feedback.",
        placeholder: "e.g., Give me a practice test on chemistry",
        responsePrefix: "Let's prepare for your exam with these practice questions:",
        practiceTitle: "Exam Practice Questions"
    }
};

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const studentProfile = document.getElementById('student-profile');
const teachersSection = document.getElementById('teachers-section');
const teachersGrid = document.getElementById('teachers-grid');
const classmatesList = document.getElementById('classmates-list');
const searchClassmates = document.getElementById('search-classmates');
const aiInput = document.getElementById('ai-input');
const aiResponse = document.getElementById('ai-response');
const aiSendBtn = document.getElementById('ai-send-btn');
const modeButtons = document.querySelectorAll('.mode-btn');
const aiModeDescription = document.getElementById('ai-mode-description');

// Home page elements
const calendarEventsContainer = document.getElementById('calendar-events');
const startRecordingBtn = document.getElementById('start-recording');
const pauseRecordingBtn = document.getElementById('pause-recording');
const saveTranscriptBtn = document.getElementById('save-transcript');
const youtubeUrl = document.getElementById('youtube-url');
const extractAudioBtn = document.getElementById('extract-audio');
const notesDisplay = document.getElementById('notes-display');

// Chat elements
const chatSessions = document.getElementById('chat-sessions');
const chatMain = document.getElementById('chat-main');
const chatWelcome = document.getElementById('chat-welcome');
const chatMessages = document.getElementById('chat-messages');
const chatInputArea = document.getElementById('chat-input-area');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message');

// Practice elements
const practiceSection = document.getElementById('practice-section');
const practiceTitle = document.getElementById('practice-title');
const problemContainer = document.getElementById('problem-container');
const studentAnswer = document.getElementById('student-answer');
const submitAnswerBtn = document.getElementById('submit-answer');
const feedbackArea = document.getElementById('feedback-area');
const currentProblemSpan = document.getElementById('current-problem');

// Notes page elements
const searchNotes = document.getElementById('search-notes');
const clearAllNotesBtn = document.getElementById('clear-all-notes');
const notesListContainer = document.getElementById('notes-list-container');
const noNotesMessage = document.getElementById('no-notes-message');

// Notifications
const notificationsContainer = document.getElementById('notifications-container');

// State variables
let currentClassmate = null;
let recognition = null;
let isRecording = false;
let isPaused = false;
let currentTranscript = '';
let savedNotes = JSON.parse(localStorage.getItem('classConnectNotes') || '[]');
let currentTopic = '';
let currentProblemIndex = 0;
let currentProblems = [];
let currentAIMode = 'homework';
let chatHistory = {};
let notificationInterval = null;
let lastNotificationId = 0;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeTeachers();
    initializeClassmates();
    initializeStudentProfile();
    initializeCalendar();
    initializeNotesWidget();
    initializeChat();
    initializeAIAssistant();
    initializeNotesPage();
    initializeRealTimeNotifications();
    updateNotesDisplay();
});

// Initialize Navigation
function initializeNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.getAttribute('data-page');
            switchPage(targetPage);
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// Switch Pages
function switchPage(pageName) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    if (pageName === 'chat' && currentClassmate) {
        showChatInterface(currentClassmate);
    }
    
    // If switching to notes page, update display
    if (pageName === 'notes') {
        renderNotesList();
    }
}

// Initialize Student Profile
function initializeStudentProfile() {
    if (studentProfile) {
        studentProfile.addEventListener('click', () => {
            teachersSection.classList.toggle('show');
            
            if (teachersSection.classList.contains('show')) {
                setTimeout(() => {
                    teachersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }
}

// Initialize Teachers
function initializeTeachers() {
    if (teachersGrid) {
        teachersGrid.innerHTML = '';
        
        teachers.forEach(teacher => {
            const teacherCard = createTeacherCard(teacher);
            teachersGrid.appendChild(teacherCard);
        });
    }
}

// Create Teacher Card
function createTeacherCard(teacher) {
    const card = document.createElement('div');
    card.className = 'teacher-card';
    
    card.innerHTML = `
        <div class="teacher-header">
            <div class="teacher-avatar" style="background: ${teacher.color}">
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-avatar-img" onerror="this.style.display='none'">
                <span style="position: relative; z-index: 1;">${teacher.initials}</span>
            </div>
            <div class="teacher-info">
                <h4>${teacher.name}</h4>
                <span class="grade">${teacher.grade}</span>
            </div>
        </div>
        <div class="subject-tags">
            ${teacher.subjects.map(subject => `
                <span class="subject-tag">${subject}</span>
            `).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => {
        alert(`Viewing ${teacher.name}'s profile - Feature coming soon!`);
    });
    
    return card;
}

// Initialize Classmates
function initializeClassmates() {
    renderChatSessions();
    
    if (searchClassmates) {
        searchClassmates.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredClassmates = classmates.filter(classmate => 
                classmate.name.toLowerCase().includes(searchTerm)
            );
            renderChatSessions(filteredClassmates);
        });
    }
}

// Render Chat Sessions
function renderChatSessions(filteredClassmates = classmates) {
    if (!chatSessions) return;
    
    chatSessions.innerHTML = '';
    
    // Sort classmates by last message time (simulated)
    const sortedClassmates = [...filteredClassmates].sort((a, b) => {
        const timeA = chatHistory[a.id] ? chatHistory[a.id][chatHistory[a.id].length - 1]?.time : 0;
        const timeB = chatHistory[b.id] ? chatHistory[b.id][chatHistory[b.id].length - 1]?.time : 0;
        return timeB - timeA; // Most recent first
    });
    
    sortedClassmates.forEach(classmate => {
        const session = createChatSession(classmate);
        chatSessions.appendChild(session);
    });
}

// Create Chat Session
function createChatSession(classmate) {
    const session = document.createElement('div');
    session.className = `chat-session ${classmate.status === 'idle' ? 'chat-session-idle' : ''}`;
    session.dataset.id = classmate.id;
    
    // Check if there are unread messages (simulated)
    const hasUnread = Math.random() > 0.7;
    if (hasUnread) session.classList.add('unread');
    
    // Get last message preview
    let lastMessage = "No messages yet";
    let lastMessageTime = "";
    if (chatHistory[classmate.id] && chatHistory[classmate.id].length > 0) {
        const lastMsg = chatHistory[classmate.id][chatHistory[classmate.id].length - 1];
        lastMessage = lastMsg.text.substring(0, 30) + (lastMsg.text.length > 30 ? "..." : "");
        lastMessageTime = new Date(lastMsg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    session.innerHTML = `
        <div class="chat-session-avatar" style="background: ${classmate.color}">
            <img src="${classmate.image}" alt="${classmate.name}" class="chat-session-avatar-img" onerror="this.style.display='none'">
            <span style="position: relative; z-index: 1;">${classmate.initials}</span>
        </div>
        <div class="chat-session-info">
            <span class="chat-session-name">${classmate.name}</span>
            <span class="chat-session-preview">${lastMessage}</span>
        </div>
        <span class="chat-session-time">${lastMessageTime}</span>
    `;
    
    session.addEventListener('click', () => {
        document.querySelectorAll('.chat-session').forEach(el => {
            el.classList.remove('active');
        });
        
        session.classList.add('active');
        currentClassmate = classmate;
        showChatInterface(classmate);
    });
    
    return session;
}

// Show Chat Interface
function showChatInterface(classmate) {
    chatWelcome.style.display = 'none';
    chatMessages.style.display = 'flex';
    chatInputArea.style.display = 'block';
    
    // Load or initialize chat history
    if (!chatHistory[classmate.id]) {
        chatHistory[classmate.id] = [
            { text: `Hi ${classmate.name}! How can I help you with our assignment?`, type: 'received', time: new Date(Date.now() - 3600000) }
        ];
    }
    
    // Render chat history (sorted from oldest to newest)
    renderChatHistory(classmate.id);
    
    // Set up send message functionality
    sendMessageBtn.onclick = () => sendMessage(classmate.id);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage(classmate.id);
        }
    });
}

// Render Chat History
function renderChatHistory(classmateId) {
    chatMessages.innerHTML = '';
    
    // Sort messages from oldest to newest
    const sortedMessages = [...chatHistory[classmateId]].sort((a, b) => a.time - b.time);
    
    sortedMessages.forEach(message => {
        addMessageToChat(message.text, message.type, message.time);
    });
    
    // Scroll to bottom
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
}

// Add Message to Chat
function addMessageToChat(text, type, time) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `${text}<div class="message-time">${formatTime(time)}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Format time for chat messages
function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Send Message
function sendMessage(classmateId) {
    const text = messageInput.value.trim();
    if (!text) return;
    
    const now = new Date();
    const messageObj = { text, type: 'sent', time: now };
    
    chatHistory[classmateId].push(messageObj);
    addMessageToChat(text, 'sent', now);
    messageInput.value = '';
    
    // Update chat session list
    renderChatSessions();
    
    // Simulate response
    setTimeout(() => {
        const responses = [
            "That's a great point!",
            "I agree with you.",
            "Let me think about that...",
            "I found a helpful resource for this.",
            "Can you explain that a bit more?",
            "Thanks for sharing that!",
            "I'll work on my part tonight.",
            "Let's meet up to work on this together.",
            "I'm not sure about that, let's ask the teacher.",
            "Good idea! I'll add that to our notes."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseObj = { text: randomResponse, type: 'received', time: new Date() };
        
        chatHistory[classmateId].push(responseObj);
        addMessageToChat(randomResponse, 'received', new Date());
        
        // Update chat session list again
        renderChatSessions();
    }, 1000);
}

// Initialize Calendar
function initializeCalendar() {
    if (!calendarEventsContainer) return;

    calendarEventsContainer.innerHTML = '';

    upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });

        eventCard.innerHTML = `
            <div class="event-date">${formattedDate}</div>
            <div class="event-title">${event.title}</div>
        `;

        calendarEventsContainer.appendChild(eventCard);
    });
}

// Initialize Notes Widget
function initializeNotesWidget() {
    // Speech Recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function(event) {
            if (isPaused) return;
            
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            currentTranscript = transcript;
            notesDisplay.innerHTML = `<p><strong>🎙️ Live Transcript:</strong><br>${transcript}</p>`;
            saveTranscriptBtn.disabled = false;
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
            notesDisplay.innerHTML = `<p style="color: red;">Error: ${event.error}</p>`;
        };

        recognition.onend = function() {
            if (isRecording && !isPaused) {
                startRecordingBtn.textContent = "🎤 Start";
                pauseRecordingBtn.disabled = true;
                isRecording = false;
            }
        };
    } else {
        startRecordingBtn.disabled = true;
        startRecordingBtn.textContent = "🎤 Not Supported";
    }

    // Start recording
    startRecordingBtn.addEventListener('click', () => {
        if (!recognition) return;

        if (isRecording) {
            recognition.stop();
            startRecordingBtn.textContent = "🎤 Start";
            pauseRecordingBtn.disabled = true;
            isRecording = false;
            isPaused = false;
        } else {
            recognition.start();
            startRecordingBtn.textContent = "⏹️ Stop";
            pauseRecordingBtn.disabled = false;
            isRecording = true;
            isPaused = false;
            currentTranscript = '';
            notesDisplay.innerHTML = "<p>🎙️ Listening... speak now.</p>";
            saveTranscriptBtn.disabled = true;
        }
    });

    // Pause recording
    pauseRecordingBtn.addEventListener('click', () => {
        if (isPaused) {
            isPaused = false;
            pauseRecordingBtn.textContent = "⏸️ Pause";
            notesDisplay.innerHTML += "<p style='color: green; margin-top: 10px;'>▶️ Resumed recording</p>";
        } else {
            isPaused = true;
            pauseRecordingBtn.textContent = "▶️ Resume";
            notesDisplay.innerHTML += "<p style='color: orange; margin-top: 10px;'>⏸️ Paused recording</p>";
        }
    });

    // Save transcript
    saveTranscriptBtn.addEventListener('click', () => {
        if (!currentTranscript) return;
        
        saveNote(currentTranscript, 'Voice Note');
    });

    // Extract audio from YouTube
    extractAudioBtn.addEventListener('click', () => {
        const url = youtubeUrl.value.trim();
        if (!url) {
            notesDisplay.innerHTML = "<p style='color: red;'>Please enter a YouTube URL</p>";
            return;
        }
        
        notesDisplay.innerHTML = "<p>🔍 Analyzing video... (simulated)</p>";
        
        setTimeout(() => {
            const fakeTranscript = `Extracted audio from: ${url.substring(0, 50)}...
Key points discussed:
- Main concept 1: Brief summary
- Main concept 2: Brief summary
- Important terms: term1, term2, term3
- Conclusion: Brief wrap-up`;
            
            saveNote(fakeTranscript, 'YouTube Audio Extract');
            youtubeUrl.value = '';
        }, 2000);
    });
}

// Save note function
function saveNote(content, type) {
    const note = {
        id: Date.now(),
        content: content,
        type: type,
        timestamp: new Date().toLocaleString()
    };
    
    savedNotes.push(note);
    localStorage.setItem('classConnectNotes', JSON.stringify(savedNotes));
    updateNotesDisplay();
    
    notesDisplay.innerHTML = `<p>✅ ${type} saved! Check your Saved Notes tab.</p>`;
    currentTranscript = '';
    saveTranscriptBtn.disabled = true;
}

// Update notes display
function updateNotesDisplay() {
    // Update local notes list if on home page
    const notesList = document.getElementById('notes-list');
    if (notesList) {
        notesList.innerHTML = '';
        
        savedNotes.slice().reverse().forEach(note => {
            const li = document.createElement('li');
            li.textContent = `${note.timestamp}: ${note.content.substring(0, 30)}${note.content.length > 30 ? '...' : ''}`;
            li.title = note.content;
            li.addEventListener('click', () => {
                notesDisplay.innerHTML = `<p><strong>📝 ${note.type} (${note.timestamp}):</strong><br>${note.content}</p>`;
            });
            notesList.appendChild(li);
        });
    }
    
    // Update notes page if it exists
    renderNotesList();
}

// Initialize AI Assistant
function initializeAIAssistant() {
    // Mode switching
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAIMode = btn.getAttribute('data-mode');
            
            // Update UI based on mode
            const modeConfig = aiModes[currentAIMode];
            aiModeDescription.innerHTML = modeConfig.description;
            aiInput.placeholder = modeConfig.placeholder;
        });
    });
    
    // Handle queries
    if (aiSendBtn && aiInput) {
        aiSendBtn.addEventListener('click', handleAIQuery);
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAIQuery();
            }
        });
    }
    
    // Handle answer submission
    submitAnswerBtn.addEventListener('click', submitAnswer);
}

// Handle AI Query
function handleAIQuery() {
    const query = aiInput.value.trim();
    if (!query) return;
    
    practiceSection.style.display = 'none';
    aiResponse.innerHTML = '<p>🤔 Thinking...</p>';
    
    // Determine topic
    let topic = '';
    if (query.toLowerCase().includes('quadratic') || query.toLowerCase().includes('math') || query.toLowerCase().includes('equation')) {
        topic = 'quadratic';
    } else if (query.toLowerCase().includes('photosynthesis') || query.toLowerCase().includes('biology') || query.toLowerCase().includes('science')) {
        topic = 'photosynthesis';
    } else if (query.toLowerCase().includes('world war') || query.toLowerCase().includes('history') || query.toLowerCase().includes('wwi')) {
        topic = 'world war';
    }
    
    let response = '';
    
    if (topic) {
        currentTopic = topic;
        currentProblems = [...problemBanks[topic]];
        currentProblemIndex = 0;
        
        const modeConfig = aiModes[currentAIMode];
        response = `${modeConfig.responsePrefix} I'll give you 10 questions to test your understanding. Good luck!`;
        
        setTimeout(() => {
            practiceSection.style.display = 'block';
            practiceTitle.textContent = modeConfig.practiceTitle;
            loadNextProblem();
        }, 1500);
    } else {
        // Generic response based on mode
        const modeResponses = {
            homework: "I'd be happy to help with your homework! Try asking something specific like 'How do I solve this equation?' or 'Can you explain this concept?'",
            qna: "Ask me anything! I can answer questions on any subject. Try 'What is the capital of France?' or 'Explain photosynthesis.'",
            planner: "Let me help you create a study plan! Tell me what you're studying and when your test is, like 'Create a study plan for my biology test next week.'",
            exam: "Ready to test your knowledge? Ask for a practice test on any topic, like 'Give me 10 questions on World War I.'"
        };
        
        response = modeResponses[currentAIMode];
    }
    
    aiResponse.innerHTML = `
        <div style="padding: 20px; background: #f4f5f7; border-radius: 10px; margin-bottom: 15px;">
            <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">You asked:</p>
            <p style="color: #5e72e4;">"${query}"</p>
        </div>
        <div style="padding: 20px; background: linear-gradient(135deg, rgba(94, 114, 228, 0.1) 0%, rgba(130, 94, 228, 0.1) 100%); border-radius: 10px;">
            <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">AI Assistant (${aiModes[currentAIMode].name}):</p>
            <p style="line-height: 1.6;">${response}</p>
        </div>
    `;
    
    aiInput.value = '';
}

// Load next problem
function loadNextProblem() {
    if (currentProblemIndex >= currentProblems.length) {
        problemContainer.innerHTML = "🎉 Congratulations! You've completed all practice problems!";
        studentAnswer.style.display = 'none';
        submitAnswerBtn.style.display = 'none';
        feedbackArea.innerHTML = "<p style='color: #2dce89; font-weight: bold;'>Great job! You've finished this practice set. Try another topic or ask for more advanced problems!</p>";
        return;
    }
    
    const problem = currentProblems[currentProblemIndex];
    problemContainer.innerHTML = `<strong>Problem ${currentProblemIndex + 1}:</strong> ${problem.q}`;
    problemContainer.className = topicHasMath(currentTopic) ? 'math' : '';
    
    studentAnswer.style.display = 'inline-block';
    submitAnswerBtn.style.display = 'inline-block';
    studentAnswer.value = '';
    feedbackArea.innerHTML = '';
    currentProblemSpan.textContent = currentProblemIndex + 1;
    studentAnswer.focus();
}

// Check if topic has math content
function topicHasMath(topic) {
    return topic === 'quadratic';
}

// Submit answer
function submitAnswer() {
    const userAnswer = studentAnswer.value.trim().toLowerCase();
    const problem = currentProblems[currentProblemIndex];
    const correctAnswer = problem.a.toLowerCase();
    
    const isCorrect = userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer);
    
    if (isCorrect) {
        feedbackArea.innerHTML = `<p class="correct">✅ Correct! Well done!</p>
        <p>Explanation: ${problem.hint}</p>`;
        feedbackArea.className = 'correct';
        
        currentProblemIndex++;
        setTimeout(loadNextProblem, 2000);
    } else {
        feedbackArea.innerHTML = `<p class="incorrect">❌ Not quite right. Let me help you understand:</p>
        <p><strong>Correct Answer:</strong> ${problem.a}</p>
        <p><strong>Explanation:</strong> ${problem.hint}</p>
        <p>Try to understand this concept, then we'll move to the next question.</p>`;
        feedbackArea.className = 'incorrect';
        
        setTimeout(() => {
            studentAnswer.value = '';
            studentAnswer.focus();
        }, 3000);
    }
}

// Initialize Notes Page
function initializeNotesPage() {
    // Search functionality
    if (searchNotes) {
        searchNotes.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            renderNotesList(searchTerm);
        });
    }
    
    // Clear all notes
    if (clearAllNotesBtn) {
        clearAllNotesBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all saved notes? This cannot be undone.')) {
                savedNotes = [];
                localStorage.setItem('classConnectNotes', JSON.stringify(savedNotes));
                renderNotesList();
                // Also update home page notes display if visible
                updateNotesDisplay();
            }
        });
    }
}

// Render Notes List
function renderNotesList(searchTerm = '') {
    if (!notesListContainer) return;
    
    // Filter notes if search term provided
    let filteredNotes = savedNotes;
    if (searchTerm) {
        filteredNotes = savedNotes.filter(note => 
            note.content.toLowerCase().includes(searchTerm) || 
            note.type.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort by newest first
    filteredNotes = filteredNotes.sort((a, b) => b.id - a.id);
    
    if (filteredNotes.length === 0) {
        noNotesMessage.style.display = 'block';
        notesListContainer.innerHTML = '';
        noNotesMessage.innerHTML = searchTerm ? 
            `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#8898aa" stroke-width="1.5">
                <line x1="4" y1="4" x2="20" y2="4"></line>
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="12" x2="12" y2="12"></line>
                <line x1="4" y1="16" x2="16" y2="16"></line>
                <line x1="4" y1="20" x2="20" y2="20"></line>
            </svg>
            <h3>No notes found</h3>
            <p>Try a different search term or create a new note.</p>` :
            `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#8898aa" stroke-width="1.5">
                <line x1="4" y1="4" x2="20" y2="4"></line>
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="12" x2="12" y2="12"></line>
                <line x1="4" y1="16" x2="16" y2="16"></line>
                <line x1="4" y1="20" x2="20" y2="20"></line>
            </svg>
            <h3>No saved notes yet</h3>
            <p>Start recording voice notes or extract audio from videos to save them here.</p>`;
        return;
    }
    
    noNotesMessage.style.display = 'none';
    notesListContainer.innerHTML = '';
    
    filteredNotes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        
        noteCard.innerHTML = `
            <div class="note-header">
                <span class="note-type">${note.type}</span>
                <span class="note-time">${note.timestamp}</span>
            </div>
            <div class="note-content">${note.content.replace(/\n/g, '<br>')}</div>
            <div class="note-actions">
                <button class="note-btn delete-note" data-id="${note.id}">Delete</button>
            </div>
        `;
        
        notesListContainer.appendChild(noteCard);
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-note').forEach(btn => {
        btn.addEventListener('click', function() {
            const noteId = parseInt(this.getAttribute('data-id'));
            savedNotes = savedNotes.filter(note => note.id !== noteId);
            localStorage.setItem('classConnectNotes', JSON.stringify(savedNotes));
            renderNotesList();
            updateNotesDisplay();
        });
    });
}

// Initialize Real-Time Notifications
function initializeRealTimeNotifications() {
    // Show initial notifications based on upcoming events
    showInitialNotifications();
    
    // Simulate real-time notifications every 30 seconds
    notificationInterval = setInterval(() => {
        showSimulatedNotification();
    }, 30000); // 30 seconds
}

// Show initial notifications
function showInitialNotifications() {
    upcomingEvents.forEach(event => {
        if (event.daysUntil <= 5) {
            showNotification(
                "Upcoming Test Alert",
                `${event.title} is in ${event.daysUntil} days!`,
                "⚠️"
            );
        }
    });
}

// Show simulated notification
function showSimulatedNotification() {
    const notifications = [
        { title: "Study Reminder", message: "Don't forget to review your math notes today!", icon: "📚" },
        { title: "New Message", message: "Emma sent you a message about the group project.", icon: "💬" },
        { title: "AI Tip", message: "Try asking the AI Assistant about photosynthesis today!", icon: "🤖" },
        { title: "Progress Update", message: "You've completed 5/10 practice problems in math!", icon: "📈" },
        { title: "Encouragement", message: "Great job studying today! Keep up the good work!", icon: "🌟" }
    ];
    
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    showNotification(randomNotification.title, randomNotification.message, randomNotification.icon);
}

// Show notification
function showNotification(title, message, icon) {
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.id = `notification-${++lastNotificationId}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
            <div class="notification-time">${timeString}</div>
        </div>
        <button class="notification-close">×</button>
    `;
    
    notificationsContainer.appendChild(notification);
    
    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-dismiss after 8 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 8000);
}

// Utility function
function getRandomColor() {
    const colors = ['#5e72e4', '#11cdef', '#2dce89', '#fb6340', '#f5365c', '#825ee4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add animations
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.teacher-card, .chat-session, .feature-card, .widget, .note-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

// Cleanup on unload
window.addEventListener('beforeunload', () => {
    if (notificationInterval) {
        clearInterval(notificationInterval);
    }
});

console.log('%c🎓 ClassConnect - ULTIMATE Version', 'color: #5e72e4; font-size: 20px; font-weight: bold;');
console.log('%cNow with: Real-Time Notifications, Dedicated Notes Tab, Enhanced AI Modes, Scrollable Chat', 'color: #825ee4; font-size: 14px;');
console.log('%cVersion 4.0.0 | All features implemented', 'color: #11cdef; font-size: 12px;');
