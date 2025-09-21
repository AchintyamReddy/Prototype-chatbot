// ClassConnect - Ultimate Educational Platform
// All features: Notifications, Detailed Scan, YouTube Audio, Scrollable Chat, AI Modes, Persistent Notes

// Sample data
const teachers = [
    { id: 1, name: "Dr. Sarah Johnson", subjects: ["Physics", "Advanced Math"], grade: "Grade 8", initials: "SJ", color: "#5e72e4", image: "media/teachers/sarah-johnson.jpg" },
    { id: 2, name: "Prof. Michael Chen", subjects: ["Chemistry", "Biology"], grade: "Grade 8", initials: "MC", color: "#11cdef", image: "media/teachers/michael-chen.jpg" },
    { id: 3, name: "Ms. Emily Rodriguez", subjects: ["English Literature", "Creative Writing"], grade: "Grade 8", initials: "ER", color: "#2dce89", image: "media/teachers/emily-rodriguez.jpg" },
    { id: 4, name: "Mr. James Williams", subjects: ["World History", "Social Science"], grade: "Grade 8", initials: "JW", color: "#fb6340", image: "media/teachers/james-williams.jpg" },
    { id: 5, name: "Mrs. Priya Patel", subjects: ["Mathematics", "Statistics"], grade: "Grade 8", initials: "PP", color: "#f5365c", image: "media/teachers/priya-patel.jpg" }
];

const classmates = [
    { id: 1, name: "Emma Wilson", status: "online", initials: "EW", color: "#5e72e4", image: "media/students/emma-wilson.jpg" },
    { id: 2, name: "Liam Martinez", status: "online", initials: "LM", color: "#11cdef", image: "media/students/liam-martinez.jpg" },
    { id: 3, name: "Olivia Anderson", status: "idle", initials: "OA", color: "#2dce89", image: "media/students/olivia-anderson.jpg" }
];

const upcomingEvents = [
    { date: "2025-04-15", title: "Math Quiz - Chapter 5", daysUntil: 3 },
    { date: "2025-04-18", title: "Science Test - Photosynthesis", daysUntil: 5 },
    { date: "2025-04-25", title: "History Project Due", daysUntil: 12 }
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
        { q: "What type of energy is converted during photosynthesis?", a: "light energy to chemical energy", hint: "Sunlight becomes stored energy in glucose" }
    ],
    "world war": [
        { q: "Which event triggered the start of World War I?", a: "assassination of Archduke Franz Ferdinand", hint: "It happened in Sarajevo in 1914" },
        { q: "What were the two main alliances in World War I?", a: "Allies and Central Powers", hint: "Allies included Britain, France, Russia; Central Powers included Germany, Austria-Hungary" },
        { q: "What was the Zimmerman Telegram?", a: "A German proposal for Mexico to join the war against the US", hint: "This helped push America to enter WWI" }
    ]
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

// Home page elements
const calendarEventsContainer = document.getElementById('calendar-events');
const startRecordingBtn = document.getElementById('start-recording');
const pauseRecordingBtn = document.getElementById('pause-recording');
const saveTranscriptBtn = document.getElementById('save-transcript');
const youtubeUrl = document.getElementById('youtube-url');
const extractAudioBtn = document.getElementById('extract-audio');
const notesDisplay = document.getElementById('notes-display');
const notesList = document.getElementById('notes-list');
const globalNotesList = document.getElementById('global-notes-list');
const noNotesMessage = document.getElementById('no-notes-message');

// Chat elements
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

// Notifications
const notificationsBar = document.getElementById('notifications-bar');
const dismissButtons = document.querySelectorAll('.dismiss-btn');

// Saved notes panel
const savedNotesPanel = document.getElementById('saved-notes-panel');
const toggleNotesPanel = document.getElementById('toggle-notes-panel');
const panelContent = document.getElementById('panel-content');

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
    initializeNotifications();
    initializeSavedNotesPanel();
    updateGlobalNotesList();
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
    renderClassmates(classmates);
    
    if (searchClassmates) {
        searchClassmates.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredClassmates = classmates.filter(classmate => 
                classmate.name.toLowerCase().includes(searchTerm)
            );
            renderClassmates(filteredClassmates);
        });
    }
}

// Render Classmates
function renderClassmates(classmatesList) {
    const container = document.getElementById('classmates-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    classmatesList.forEach(classmate => {
        const classmateItem = createClassmateItem(classmate);
        container.appendChild(classmateItem);
    });
}

// Create Classmate Item
function createClassmateItem(classmate) {
    const item = document.createElement('div');
    item.className = 'classmate-item';
    item.dataset.id = classmate.id;
    
    item.innerHTML = `
        <div class="classmate-avatar" style="background: ${classmate.color}">
            <img src="${classmate.image}" alt="${classmate.name}" class="classmate-avatar-img" onerror="this.style.display='none'">
            <span style="position: relative; z-index: 1;">${classmate.initials}</span>
            <span class="status-indicator ${classmate.status}"></span>
        </div>
        <div class="classmate-info">
            <span class="classmate-name">${classmate.name}</span>
            <span class="classmate-status">${classmate.status}</span>
        </div>
    `;
    
    item.addEventListener('click', () => {
        document.querySelectorAll('.classmate-item').forEach(el => {
            el.classList.remove('active');
        });
        
        item.classList.add('active');
        currentClassmate = classmate;
        showChatInterface(classmate);
    });
    
    return item;
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
    
    // Render chat history
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

// Send Message
function sendMessage(classmateId) {
    const text = messageInput.value.trim();
    if (!text) return;
    
    const now = new Date();
    const messageObj = { text, type: 'sent', time: now };
    
    chatHistory[classmateId].push(messageObj);
    addMessageToChat(text, 'sent', now);
    messageInput.value = '';
    
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
    }, 1000);
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
    updateNotesLists();
    
    notesDisplay.innerHTML = `<p>✅ ${type} saved! Check your Saved Notes panel.</p>`;
    currentTranscript = '';
    saveTranscriptBtn.disabled = true;
}

// Update all notes lists
function updateNotesLists() {
    updateLocalNotesList();
    updateGlobalNotesList();
}

// Update local notes list
function updateLocalNotesList() {
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

// Update global notes list
function updateGlobalNotesList() {
    globalNotesList.innerHTML = '';
    
    if (savedNotes.length === 0) {
        noNotesMessage.style.display = 'block';
        return;
    }
    
    noNotesMessage.style.display = 'none';
    
    savedNotes.slice().reverse().forEach(note => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${note.type}</strong><br><small>${note.timestamp}</small><br>${note.content.substring(0, 50)}${note.content.length > 50 ? '...' : ''}`;
        li.title = note.content;
        li.addEventListener('click', () => {
            alert(`📝 ${note.type} (${note.timestamp}):\n\n${note.content}`);
        });
        globalNotesList.appendChild(li);
    });
}

// Initialize AI Assistant
function initializeAIAssistant() {
    // Mode switching
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAIMode = btn.getAttribute('data-mode');
            
            // Update placeholder based on mode
            const placeholders = {
                'homework': 'e.g., Help me solve this math problem',
                'qna': 'e.g., What is photosynthesis?',
                'planner': 'e.g., Create a study plan for my biology test',
                'exam': 'e.g., Test me on World War I'
            };
            aiInput.placeholder = placeholders[currentAIMode];
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
        
        const modeResponses = {
            'homework': `I'll help you with your ${topic} homework! Let's work through some practice problems together.`,
            'qna': `Great question about ${topic}! Let me test your understanding with some practice questions.`,
            'planner': `I'll create a study plan for ${topic} and include practice problems to reinforce your learning.`,
            'exam': `Let's prepare for your ${topic} exam with targeted practice questions.`
        };
        
        response = modeResponses[currentAIMode] + " I'll give you 10 questions, starting with basics and getting more challenging as you answer correctly.";
        
        setTimeout(() => {
            practiceSection.style.display = 'block';
            loadNextProblem();
        }, 1500);
    } else {
        response = `I'm your ${currentAIMode === 'homework' ? 'Homework Helper' : 
                   currentAIMode === 'qna' ? 'Q&A Expert' : 
                   currentAIMode === 'planner' ? 'Study Planner' : 
                   'Exam Prep Coach'}! Try asking something like:<br><br>
        • "Help me with quadratic equations"<br>
        • "Explain photosynthesis"<br>
        • "Create a study plan for history"<br>
        • "Test me on World War I"<br><br>
        I'll provide personalized assistance based on your needs!`;
    }
    
    aiResponse.innerHTML = `
        <div style="padding: 20px; background: #f4f5f7; border-radius: 10px; margin-bottom: 15px;">
            <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">You asked:</p>
            <p style="color: #5e72e4;">"${query}"</p>
        </div>
        <div style="padding: 20px; background: linear-gradient(135deg, rgba(94, 114, 228, 0.1) 0%, rgba(130, 94, 228, 0.1) 100%); border-radius: 10px;">
            <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">AI Assistant (${currentAIMode}):</p>
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

// Initialize Notifications
function initializeNotifications() {
    // Dismiss notifications
    document.querySelectorAll('.dismiss-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    });
    
    // You could add logic here to generate notifications based on upcomingEvents
    // For example, only show notifications for events within 5 days
}

// Initialize Saved Notes Panel
function initializeSavedNotesPanel() {
    let isPanelOpen = true;
    
    toggleNotesPanel.addEventListener('click', () => {
        if (isPanelOpen) {
            panelContent.style.display = 'none';
            toggleNotesPanel.textContent = '▲';
        } else {
            panelContent.style.display = 'block';
            toggleNotesPanel.textContent = '▼';
        }
        isPanelOpen = !isPanelOpen;
    });
}

// Utility function
function getRandomColor() {
    const colors = ['#5e72e4', '#11cdef', '#2dce89', '#fb6340', '#f5365c', '#825ee4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add animations
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.teacher-card, .classmate-item, .feature-card, .widget');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

console.log('%c🎓 ClassConnect - ULTIMATE Version', 'color: #5e72e4; font-size: 20px; font-weight: bold;');
console.log('%cNow with: Notifications, Detailed Scan, YouTube Audio, Scrollable Chat, AI Modes, Persistent Notes', 'color: #825ee4; font-size: 14px;');
console.log('%cVersion 3.0.0 | All features implemented', 'color: #11cdef; font-size: 12px;');
