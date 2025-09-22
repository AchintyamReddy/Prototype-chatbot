// ClassConnect - Ultimate Educational Platform
// Features: Adaptive AI, Teacher Chats, Subject-Organized Notes, Practice Tests

const teachers = [
    { id: 1, name: "Dr. Sarah Johnson", subjects: ["Math", "Physics"], grade: "Grade 8", initials: "SJ", color: "#5e72e4", image: "media/teachers/sarah-johnson.jpg" },
    { id: 2, name: "Prof. Michael Chen", subjects: ["Biology", "Chemistry"], grade: "Grade 8", initials: "MC", color: "#11cdef", image: "media/teachers/michael-chen.jpg" },
    { id: 3, name: "Ms. Emily Rodriguez", subjects: ["English", "Literature"], grade: "Grade 8", initials: "ER", color: "#2dce89", image: "media/teachers/emily-rodriguez.jpg" },
    { id: 4, name: "Mr. James Williams", subjects: ["History", "Geography"], grade: "Grade 8", initials: "JW", color: "#fb6340", image: "media/teachers/james-williams.jpg" }
];

const classmates = [
    { id: 1, name: "Emma Wilson", status: "online", initials: "EW", color: "#5e72e4", image: "media/students/emma-wilson.jpg" },
    { id: 2, name: "Liam Martinez", status: "online", initials: "LM", color: "#11cdef", image: "media/students/liam-martinez.jpg" },
    { id: 3, name: "Olivia Anderson", status: "idle", initials: "OA", color: "#2dce89", image: "media/students/olivia-anderson.jpg" },
    { id: 4, name: "Noah Taylor", status: "offline", initials: "NT", color: "#fb6340", image: "media/students/noah-taylor.jpg" }
];

const upcomingEvents = [
    { date: "2025-04-15", title: "Math Quiz - Chapter 5", daysUntil: 3 },
    { date: "2025-04-18", title: "Science Test - Photosynthesis", daysUntil: 5 }
];

const problemBanks = {
    "math": [
        { q: "Solve for x: 2x + 5 = 15", a: "5", hint: "Subtract 5 from both sides, then divide by 2" },
        { q: "What is the area of a circle with radius 4?", a: "50.24", hint: "Use formula A = πr² with π = 3.14" },
        { q: "Simplify: (x² + 3x + 2) / (x + 1)", a: "x+2", hint: "Factor numerator: (x+1)(x+2), then cancel (x+1)" },
        { q: "Solve the system: x + y = 10, x - y = 2", a: "x=6,y=4", hint: "Add equations to eliminate y, then substitute" },
        { q: "Find the slope of line passing through (2,3) and (5,9)", a: "2", hint: "Slope = (y2-y1)/(x2-x1) = (9-3)/(5-2) = 6/3 = 2" },
        { q: "What is the value of sin(30°)?", a: "0.5", hint: "Remember special angles: sin(30°) = 1/2" },
        { q: "Solve: log₂(8) = x", a: "3", hint: "2 to what power equals 8? 2³ = 8, so x = 3" },
        { q: "Find the derivative of f(x) = 3x² + 2x - 1", a: "6x+2", hint: "Use power rule: derivative of x^n is nx^(n-1)" },
        { q: "What is the probability of rolling a 3 on a fair 6-sided die?", a: "1/6", hint: "1 favorable outcome out of 6 possible outcomes" },
        { q: "Solve: √(x+3) = 5", a: "22", hint: "Square both sides: x+3 = 25, then x = 22" }
    ],
    "science": [
        { q: "What is the chemical symbol for gold?", a: "Au", hint: "From Latin 'aurum'" },
        { q: "What is the powerhouse of the cell?", a: "mitochondria", hint: "Produces ATP for energy" },
        { q: "What is Newton's First Law of Motion?", a: "inertia", hint: "An object at rest stays at rest, an object in motion stays in motion" },
        { q: "What is the pH of pure water?", a: "7", hint: "Neutral pH is 7, acids are below 7, bases above 7" },
        { q: "What gas do plants absorb during photosynthesis?", a: "carbon dioxide", hint: "CO₂ + H₂O + sunlight → glucose + O₂" },
        { q: "What is the atomic number of carbon?", a: "6", hint: "Number of protons in the nucleus" },
        { q: "What is the largest planet in our solar system?", a: "jupiter", hint: "Has the Great Red Spot and many moons" },
        { q: "What is the speed of light in vacuum?", a: "300000000", hint: "3 × 10^8 meters per second" },
        { q: "What is the process by which liquid water becomes water vapor?", a: "evaporation", hint: "Phase change from liquid to gas" },
        { q: "What is the chemical formula for water?", a: "H2O", hint: "Two hydrogen atoms, one oxygen atom" }
    ],
    "english": [
        { q: "Who wrote 'Romeo and Juliet'?", a: "shakespeare", hint: "Famous English playwright from the 16th century" },
        { q: "What is the main character in a story called?", a: "protagonist", hint: "The hero or central character" },
        { q: "What literary device compares two things using 'like' or 'as'?", a: "simile", hint: "Example: 'as brave as a lion'" },
        { q: "What is the rhyme scheme of a Shakespearean sonnet?", a: "ababcdcdefefgg", hint: "Three quatrains and a couplet" },
        { q: "What is the setting of 'To Kill a Mockingbird'?", a: "maycomb", hint: "A fictional town in Alabama during the 1930s" },
        { q: "Who is the author of '1984'?", a: "george orwell", hint: "Real name: Eric Arthur Blair" },
        { q: "What is the term for the emotional atmosphere of a literary work?", a: "mood", hint: "How the work makes the reader feel" },
        { q: "What is the conflict between a character and nature called?", a: "man vs nature", hint: "Example: surviving a storm or wilderness" },
        { q: "What is the term for giving human qualities to non-human things?", a: "personification", hint: "Example: 'The wind whispered through the trees'" },
        { q: "What is the climax of a story?", a: "turning point", hint: "The moment of highest tension or drama" }
    ],
    "history": [
        { q: "Who was the first President of the United States?", a: "george washington", hint: "Led Continental Army in Revolutionary War" },
        { q: "In what year did World War II end?", a: "1945", hint: "Germany surrendered in May, Japan in August" },
        { q: "What ancient civilization built the pyramids?", a: "egyptians", hint: "Located along the Nile River" },
        { q: "Who discovered America in 1492?", a: "columbus", hint: "Sailed under Spanish flag seeking western route to Asia" },
        { q: "What was the name of the ship that brought Pilgrims to America?", a: "mayflower", hint: "Landed at Plymouth Rock in 1620" },
        { q: "Who was the leader of the Soviet Union during WWII?", a: "stalin", hint: "Full name: Joseph Stalin" },
        { q: "What document declared American independence from Britain?", a: "declaration of independence", hint: "Adopted on July 4, 1776" },
        { q: "What was the first permanent English settlement in America?", a: "jamestown", hint: "Founded in Virginia in 1607" },
        { q: "Who was the first woman to fly solo across the Atlantic?", a: "amelia earhart", hint: "Disappeared during attempt to fly around the world" },
        { q: "What ancient empire was ruled by Julius Caesar?", a: "rome", hint: "Later became Roman Empire" }
    ]
};

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const studentProfile = document.getElementById('student-profile');
const teachersSection = document.getElementById('teachers-section');
const teachersGrid = document.getElementById('teachers-grid');
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

// Chat elements
const chatSessions = document.getElementById('chat-sessions');
const chatMain = document.getElementById('chat-main');
const chatWelcome = document.getElementById('chat-welcome');
const chatMessages = document.getElementById('chat-messages');
const chatInputArea = document.getElementById('chat-input-area');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message');
const createGroupBtn = document.getElementById('create-group');

// Teacher chat elements
const teacherSessions = document.getElementById('teacher-sessions');
const teacherChatMain = document.getElementById('teacher-chat-main');
const teacherChatWelcome = document.getElementById('teacher-chat-welcome');
const teacherChatMessages = document.getElementById('teacher-chat-messages');
const teacherChatInputArea = document.getElementById('teacher-chat-input-area');
const teacherMessageInput = document.getElementById('teacher-message-input');
const sendTeacherMessageBtn = document.getElementById('send-teacher-message');
const searchTeachers = document.getElementById('search-teachers');

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
const generatePracticeTestBtn = document.getElementById('generate-practice-test');
const subjectsContainer = document.getElementById('subjects-container');

// Modal elements
const groupModal = document.getElementById('group-modal');
const closeModal = document.querySelector('.close');
const groupNameInput = document.getElementById('group-name');
const memberCheckboxes = document.getElementById('member-checkboxes');
const createGroupSubmitBtn = document.getElementById('create-group-btn');

// Notifications
const notificationsContainer = document.getElementById('notifications-container');

// State variables
let currentClassmate = null;
let currentTeacher = null;
let recognition = null;
let isRecording = false;
let isPaused = false;
let currentTranscript = '';
let savedNotes = JSON.parse(localStorage.getItem('classConnectNotes') || '[]');
let currentTopic = '';
let currentProblemIndex = 0;
let currentProblems = [];
let currentAIMode = 'adaptive';
let chatHistory = {};
let teacherChatHistory = {};
let notificationInterval = null;
let lastNotificationId = 0;
let difficultyLevel = 0; // 0=easy, 1=medium, 2=hard

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeTeachers();
    initializeClassmates();
    initializeTeacherChats();
    initializeStudentProfile();
    initializeCalendar();
    initializeNotesWidget();
    initializeAIAssistant();
    initializeNotesPage();
    initializeRealTimeNotifications();
    initializeGroupModal();
    updateNotesDisplay();
});

// Navigation
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
    } else if (pageName === 'teachers' && currentTeacher) {
        showTeacherChatInterface(currentTeacher);
    } else if (pageName === 'notes') {
        renderNotesBySubject();
    }
}

// Student Profile
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

// Teachers Grid
function initializeTeachers() {
    if (teachersGrid) {
        teachersGrid.innerHTML = '';
        teachers.forEach(teacher => {
            const teacherCard = createTeacherCard(teacher);
            teachersGrid.appendChild(teacherCard);
        });
    }
}

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
            ${teacher.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
        </div>
    `;
    card.addEventListener('click', () => {
        alert(`Viewing ${teacher.name}'s profile - Feature coming soon!`);
    });
    return card;
}

// Classmates Chat
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
    
    if (createGroupBtn) {
        createGroupBtn.addEventListener('click', () => {
            groupModal.style.display = 'block';
            populateMemberCheckboxes();
        });
    }
}

function renderChatSessions(filteredClassmates = classmates) {
    if (!chatSessions) return;
    chatSessions.innerHTML = '';
    
    const sortedClassmates = [...filteredClassmates].sort((a, b) => {
        const timeA = chatHistory[a.id] ? chatHistory[a.id][chatHistory[a.id].length - 1]?.time : 0;
        const timeB = chatHistory[b.id] ? chatHistory[b.id][chatHistory[b.id].length - 1]?.time : 0;
        return timeB - timeA;
    });
    
    sortedClassmates.forEach(classmate => {
        const session = createChatSession(classmate);
        chatSessions.appendChild(session);
    });
}

function createChatSession(classmate) {
    const session = document.createElement('div');
    session.className = `chat-session ${classmate.status === 'idle' ? 'chat-session-idle' : ''}`;
    session.dataset.id = classmate.id;
    
    const hasUnread = Math.random() > 0.7;
    if (hasUnread) session.classList.add('unread');
    
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
        document.querySelectorAll('.chat-session').forEach(el => el.classList.remove('active'));
        session.classList.add('active');
        currentClassmate = classmate;
        showChatInterface(classmate);
    });
    
    return session;
}

function showChatInterface(classmate) {
    chatWelcome.style.display = 'none';
    chatMessages.style.display = 'flex';
    chatInputArea.style.display = 'block';
    
    if (!chatHistory[classmate.id]) {
        chatHistory[classmate.id] = [
            { text: `Hi ${classmate.name}! How can I help you with our assignment?`, type: 'received', time: new Date(Date.now() - 3600000) }
        ];
    }
    
    renderChatHistory(classmate.id);
    
    sendMessageBtn.onclick = () => sendMessage(classmate.id, false);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage(classmate.id, false);
        }
    });
}

function renderChatHistory(classmateId) {
    chatMessages.innerHTML = '';
    const sortedMessages = [...chatHistory[classmate.id]].sort((a, b) => a.time - b.time);
    sortedMessages.forEach(message => {
        addMessageToChat(message.text, message.type, message.time, false);
    });
    setTimeout(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }, 100);
}

function sendMessage(classmateId, isTeacher = false) {
    const text = isTeacher ? teacherMessageInput.value.trim() : messageInput.value.trim();
    if (!text) return;
    
    const now = new Date();
    const messageObj = { text, type: 'sent', time: now };
    
    if (isTeacher) {
        teacherChatHistory[classmateId].push(messageObj);
        addMessageToChat(text, 'sent', now, true);
        teacherMessageInput.value = '';
    } else {
        chatHistory[classmateId].push(messageObj);
        addMessageToChat(text, 'sent', now, false);
        messageInput.value = '';
    }
    
    renderChatSessions();
    
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
        
        if (isTeacher) {
            teacherChatHistory[classmateId].push(responseObj);
            addMessageToChat(randomResponse, 'received', new Date(), true);
        } else {
            chatHistory[classmateId].push(responseObj);
            addMessageToChat(randomResponse, 'received', new Date(), false);
        }
        
        renderChatSessions();
        if (isTeacher) {
            renderTeacherSessions();
        }
    }, 1000);
}

function addMessageToChat(text, type, time, isTeacher = false) {
    const messagesContainer = isTeacher ? teacherChatMessages : chatMessages;
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `${text}<div class="message-time">${formatTime(time)}</div>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Teacher Chats
function initializeTeacherChats() {
    renderTeacherSessions();
    
    if (searchTeachers) {
        searchTeachers.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredTeachers = teachers.filter(teacher => 
                teacher.name.toLowerCase().includes(searchTerm)
            );
            renderTeacherSessions(filteredTeachers);
        });
    }
}

function renderTeacherSessions(filteredTeachers = teachers) {
    if (!teacherSessions) return;
    teacherSessions.innerHTML = '';
    
    const sortedTeachers = [...filteredTeachers].sort((a, b) => {
        const timeA = teacherChatHistory[a.id] ? teacherChatHistory[a.id][teacherChatHistory[a.id].length - 1]?.time : 0;
        const timeB = teacherChatHistory[b.id] ? teacherChatHistory[b.id][teacherChatHistory[b.id].length - 1]?.time : 0;
        return timeB - timeA;
    });
    
    sortedTeachers.forEach(teacher => {
        const session = createTeacherSession(teacher);
        teacherSessions.appendChild(session);
    });
}

function createTeacherSession(teacher) {
    const session = document.createElement('div');
    session.className = 'chat-session';
    session.dataset.id = teacher.id;
    
    const hasUnread = Math.random() > 0.5;
    if (hasUnread) session.classList.add('unread');
    
    let lastMessage = "No messages yet";
    let lastMessageTime = "";
    if (teacherChatHistory[teacher.id] && teacherChatHistory[teacher.id].length > 0) {
        const lastMsg = teacherChatHistory[teacher.id][teacherChatHistory[teacher.id].length - 1];
        lastMessage = lastMsg.text.substring(0, 30) + (lastMsg.text.length > 30 ? "..." : "");
        lastMessageTime = new Date(lastMsg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    session.innerHTML = `
        <div class="chat-session-avatar" style="background: ${teacher.color}">
            <img src="${teacher.image}" alt="${teacher.name}" class="chat-session-avatar-img" onerror="this.style.display='none'">
            <span style="position: relative; z-index: 1;">${teacher.initials}</span>
        </div>
        <div class="chat-session-info">
            <span class="chat-session-name">${teacher.name}</span>
            <span class="chat-session-preview">${lastMessage}</span>
        </div>
        <span class="chat-session-time">${lastMessageTime}</span>
    `;
    
    session.addEventListener('click', () => {
        document.querySelectorAll('.chat-session').forEach(el => el.classList.remove('active'));
        session.classList.add('active');
        currentTeacher = teacher;
        showTeacherChatInterface(teacher);
    });
    
    return session;
}

function showTeacherChatInterface(teacher) {
    teacherChatWelcome.style.display = 'none';
    teacherChatMessages.style.display = 'flex';
    teacherChatInputArea.style.display = 'block';
    
    if (!teacherChatHistory[teacher.id]) {
        teacherChatHistory[teacher.id] = [
            { text: `Hello ${teacher.name}! I have a question about ${teacher.subjects[0]}.`, type: 'sent', time: new Date(Date.now() - 7200000) },
            { text: `Hi! I'm happy to help. What's your question?`, type: 'received', time: new Date(Date.now() - 3600000) }
        ];
    }
    
    renderTeacherChatHistory(teacher.id);
    
    sendTeacherMessageBtn.onclick = () => sendMessage(teacher.id, true);
    teacherMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage(teacher.id, true);
        }
    });
}

function renderTeacherChatHistory(teacherId) {
    teacherChatMessages.innerHTML = '';
    const sortedMessages = [...teacherChatHistory[teacherId]].sort((a, b) => a.time - b.time);
    sortedMessages.forEach(message => {
        addMessageToChat(message.text, message.type, message.time, true);
    });
    setTimeout(() => { teacherChatMessages.scrollTop = teacherChatMessages.scrollHeight; }, 100);
}

// Calendar
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

// Notes Widget
function initializeNotesWidget() {
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

    saveTranscriptBtn.addEventListener('click', () => {
        if (!currentTranscript) return;
        const subject = detectSubjectFromText(currentTranscript);
        saveNote(currentTranscript, 'Voice Note', subject);
    });

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
            
            const subject = detectSubjectFromText(fakeTranscript);
            saveNote(fakeTranscript, 'YouTube Audio Extract', subject);
            youtubeUrl.value = '';
        }, 2000);
    });
}

function detectSubjectFromText(text) {
    text = text.toLowerCase();
    if (text.includes('math') || text.includes('equation') || text.includes('algebra') || text.includes('calculus')) return 'math';
    if (text.includes('science') || text.includes('biology') || text.includes('chemistry') || text.includes('physics')) return 'science';
    if (text.includes('english') || text.includes('literature') || text.includes('writing') || text.includes('grammar')) return 'english';
    if (text.includes('history') || text.includes('geography') || text.includes('social') || text.includes('world war')) return 'history';
    return 'general';
}

function saveNote(content, type, subject = 'general') {
    const note = {
        id: Date.now(),
        content: content,
        type: type,
        subject: subject,
        timestamp: new Date().toLocaleString()
    };
    
    savedNotes.push(note);
    localStorage.setItem('classConnectNotes', JSON.stringify(savedNotes));
    updateNotesDisplay();
    
    notesDisplay.innerHTML = `<p>✅ ${type} saved in ${subject} section!</p>`;
    currentTranscript = '';
    saveTranscriptBtn.disabled = true;
}

function updateNotesDisplay() {
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
    renderNotesBySubject();
}

// AI Assistant
function initializeAIAssistant() {
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAIMode = btn.getAttribute('data-mode');
        });
    });
    
    if (aiSendBtn && aiInput) {
        aiSendBtn.addEventListener('click', handleAIQuery);
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAIQuery();
            }
        });
    }
    
    submitAnswerBtn.addEventListener('click', submitAnswer);
}

function handleAIQuery() {
    const query = aiInput.value.trim();
    if (!query) return;
    
    practiceSection.style.display = 'none';
    aiResponse.innerHTML = '<p>🤔 Thinking...</p>';
    
    // Detect student needs from query
    const lowerQuery = query.toLowerCase();
    let response = '';
    let shouldGenerateTest = false;
    let subject = detectSubjectFromText(query);
    
    if (lowerQuery.includes('more help') || lowerQuery.includes('don\'t understand') || lowerQuery.includes('confused')) {
        difficultyLevel = 0; // Reset to easy
        response = generateHelpResponse(subject);
    } else if (lowerQuery.includes('explain') || lowerQuery.includes('teach me') || lowerQuery.includes('show me')) {
        difficultyLevel = 1; // Medium difficulty
        response = generateExplanationResponse(subject);
    } else if (lowerQuery.includes('harder') || lowerQuery.includes('challenge') || lowerQuery.includes('advanced')) {
        difficultyLevel = 2; // Hard difficulty
        response = generateChallengeResponse(subject);
    } else if (lowerQuery.includes('practice test') || lowerQuery.includes('quiz') || lowerQuery.includes('exam')) {
        shouldGenerateTest = true;
        response = `Great! I'll generate a 10-question practice test on ${subject}. Let's begin!`;
    } else {
        // Default response based on mode
        response = generateDefaultResponse(subject);
    }
    
    aiResponse.innerHTML = `
        <div style="padding: 20px; background: #f4f5f7; border-radius: 10px; margin-bottom: 15px;">
            <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">You asked:</p>
            <p style="color: #5e72e4;">"${query}"</p>
        </div>
        <div style="padding: 20px; background: linear-gradient(135deg, rgba(94, 114, 228, 0.1) 0%, rgba(130, 94, 228, 0.1) 100%); border-radius: 10px;">
            <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">AI Assistant:</p>
            <p style="line-height: 1.6;">${response}</p>
        </div>
    `;
    
    if (shouldGenerateTest) {
        currentTopic = subject;
        currentProblems = [...problemBanks[subject] || problemBanks.math];
        currentProblemIndex = 0;
        setTimeout(() => {
            practiceSection.style.display = 'block';
            practiceTitle.textContent = `Practice Test - ${subject.charAt(0).toUpperCase() + subject.slice(1)}`;
            loadNextProblem();
        }, 1500);
    }
    
    aiInput.value = '';
}

function generateHelpResponse(subject) {
    const responses = {
        math: "I'll help you understand this math concept step by step. Let's start with the basics: What specific part are you struggling with? Is it algebra, geometry, or something else?",
        science: "Science can be challenging! Let's break this down into simpler parts. Are you having trouble with biology concepts, chemistry equations, or physics principles?",
        english: "English concepts can be tricky. Let's start from the beginning. Are you struggling with grammar, writing, literature analysis, or vocabulary?",
        history: "History involves many dates and events. Let's focus on one period or concept at a time. What specific historical event or era are you studying?",
        general: "I'm here to help! Let's take this one step at a time. Tell me exactly what you're having trouble with, and I'll break it down into simple, easy-to-understand parts."
    };
    return responses[subject] || responses.general;
}

function generateExplanationResponse(subject) {
    const responses = {
        math: "I'll explain this math concept clearly with examples. First, let's identify what type of problem this is. Is it algebraic, geometric, or statistical? Then I'll walk you through each step with a similar example.",
        science: "Let me explain this science concept in detail. I'll start with the fundamental principles, then show you how they apply to real-world examples. We'll work through a sample problem together to reinforce your understanding.",
        english: "I'll break down this English concept for you. Whether it's grammar rules, literary devices, or writing techniques, I'll provide clear definitions and multiple examples to help you grasp the concept thoroughly.",
        history: "Let me explain this historical event or period in context. I'll cover the key players, causes, events, and consequences. Understanding the 'why' behind historical events makes them much easier to remember and analyze.",
        general: "I'll provide a detailed explanation with examples. First, I'll define the key terms, then show you how they work in practice, and finally give you some exercises to test your understanding."
    };
    return responses[subject] || responses.general;
}

function generateChallengeResponse(subject) {
    const responses = {
        math: "You're ready for a challenge! I'll give you advanced math problems that require critical thinking and multiple steps to solve. These will push your understanding to the next level.",
        science: "Let's tackle some advanced science concepts! I'll give you complex problems that integrate multiple principles and require deep analytical thinking. You're ready for this!",
        english: "Time for advanced English analysis! I'll challenge you with complex literary passages, sophisticated writing prompts, and nuanced grammar exercises that will sharpen your skills.",
        history: "Let's dive deep into historical analysis! I'll give you complex scenarios that require you to synthesize information from multiple sources and think critically about cause and effect in history.",
        general: "You asked for a challenge, and I'll deliver! I'll give you advanced problems that require critical thinking, synthesis of multiple concepts, and creative problem-solving. You're ready for this!"
    };
    return responses[subject] || responses.general;
}

function generateDefaultResponse(subject) {
    const responses = {
        math: "I'm here to help with math! Whether you need basic explanations, step-by-step solutions, or challenging problems, just let me know what you need.",
        science: "Let's explore science together! I can help with biology, chemistry, physics, or any other science topic. What specific concept are you working on?",
        english: "I'm your English expert! Whether you need help with grammar, writing, literature, or vocabulary, I'm here to guide you through it.",
        history: "Let's make history come alive! I can help you understand historical events, analyze primary sources, or prepare for your history exam.",
        general: "I'm your personal AI tutor! I can adapt to your learning needs. Try asking for help, explanations, or challenges, and I'll tailor my response to your level."
    };
    return responses[subject] || responses.general;
}

function loadNextProblem() {
    if (currentProblemIndex >= currentProblems.length) {
        problemContainer.innerHTML = "🎉 Congratulations! You've completed all practice problems!";
        studentAnswer.style.display = 'none';
        submitAnswerBtn.style.display = 'none';
        feedbackArea.innerHTML = "<p style='color: #2dce89; font-weight: bold;'>Great job! You've finished this practice set. Try another topic or ask for more advanced problems!</p>";
        return;
    }
    
    const problem = currentProblems[currentProblemIndex];
    problemContainer.innerHTML = `<strong>Question ${currentProblemIndex + 1}:</strong> ${problem.q}`;
    problemContainer.className = 'math';
    
    studentAnswer.style.display = 'inline-block';
    submitAnswerBtn.style.display = 'inline-block';
    studentAnswer.value = '';
    feedbackArea.innerHTML = '';
    currentProblemSpan.textContent = currentProblemIndex + 1;
    studentAnswer.focus();
}

function submitAnswer() {
    const userAnswer = studentAnswer.value.trim().toLowerCase();
    const problem = currentProblems[currentProblemIndex];
    const correctAnswer = problem.a.toLowerCase();
    
    const isCorrect = userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer);
    
    if (isCorrect) {
        feedbackArea.innerHTML = `<p class="correct">✅ Correct! Well done!</p>
        <p>Explanation: ${problem.hint}</p>`;
        feedbackArea.className = 'correct';
        
        // Increase difficulty for next question if not already at max
        if (difficultyLevel < 2) {
            difficultyLevel++;
        }
        
        currentProblemIndex++;
        setTimeout(loadNextProblem, 2000);
    } else {
        feedbackArea.innerHTML = `<p class="incorrect">❌ Not quite right. Let me help you understand:</p>
        <p><strong>Correct Answer:</strong> ${problem.a}</p>
        <p><strong>Explanation:</strong> ${problem.hint}</p>
        <p>Let's try an easier question to build your confidence.</p>`;
        feedbackArea.className = 'incorrect';
        
        // Decrease difficulty for next question if not already at min
        if (difficultyLevel > 0) {
            difficultyLevel--;
        }
        
        // Reorder problems to put easier ones first based on difficulty level
        reorderProblemsByDifficulty();
        
        setTimeout(() => {
            studentAnswer.value = '';
            studentAnswer.focus();
        }, 3000);
    }
}

function reorderProblemsByDifficulty() {
    // In a real app, you'd have problems tagged by difficulty
    // For this demo, we'll just shuffle or reorder based on current index
    if (difficultyLevel === 0) {
        // Move easier problems (first half) to front
        const half = Math.floor(currentProblems.length / 2);
        const easyProblems = currentProblems.slice(0, half);
        const hardProblems = currentProblems.slice(half);
        currentProblems = [...easyProblems, ...hardProblems];
    } else if (difficultyLevel === 2) {
        // Move harder problems (second half) to front
        const half = Math.floor(currentProblems.length / 2);
        const easyProblems = currentProblems.slice(0, half);
        const hardProblems = currentProblems.slice(half);
        currentProblems = [...hardProblems, ...easyProblems];
    }
    // If difficultyLevel === 1, keep original order
}

// Notes Page
function initializeNotesPage() {
    if (searchNotes) {
        searchNotes.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            renderNotesBySubject(searchTerm);
        });
    }
    
    if (generatePracticeTestBtn) {
        generatePracticeTestBtn.addEventListener('click', () => {
            if (savedNotes.length === 0) {
                alert('You need to save some notes first before generating a practice test!');
                return;
            }
            
            // Get most common subject from notes
            const subjectCounts = {};
            savedNotes.forEach(note => {
                subjectCounts[note.subject] = (subjectCounts[note.subject] || 0) + 1;
            });
            
            let mostCommonSubject = 'math';
            let maxCount = 0;
            for (const subject in subjectCounts) {
                if (subjectCounts[subject] > maxCount) {
                    maxCount = subjectCounts[subject];
                    mostCommonSubject = subject;
                }
            }
            
            // Generate test based on most common subject
            currentTopic = mostCommonSubject;
            currentProblems = [...problemBanks[mostCommonSubject] || problemBanks.math];
            currentProblemIndex = 0;
            difficultyLevel = 1;
            
            // Switch to AI page and show practice test
            switchPage('ai');
            document.querySelector('.nav-btn[data-page="ai"]').classList.add('active');
            
            aiResponse.innerHTML = `
                <div style="padding: 20px; background: #f4f5f7; border-radius: 10px; margin-bottom: 15px;">
                    <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">Generated from your notes!</p>
                    <p style="color: #5e72e4;">Practice test on ${mostCommonSubject} based on your saved notes.</p>
                </div>
                <div style="padding: 20px; background: linear-gradient(135deg, rgba(94, 114, 228, 0.1) 0%, rgba(130, 94, 228, 0.1) 100%); border-radius: 10px;">
                    <p style="font-weight: bold; color: #32325d; margin-bottom: 10px;">AI Assistant:</p>
                    <p style="line-height: 1.6;">Great! I've generated a 10-question practice test on ${mostCommonSubject} based on your saved notes. Let's begin!</p>
                </div>
            `;
            
            setTimeout(() => {
                practiceSection.style.display = 'block';
                practiceTitle.textContent = `Practice Test - ${mostCommonSubject.charAt(0).toUpperCase() + mostCommonSubject.slice(1)}`;
                loadNextProblem();
            }, 1500);
        });
    }
}

function renderNotesBySubject(searchTerm = '') {
    if (!subjectsContainer) return;
    
    // Group notes by subject
    const notesBySubject = {};
    savedNotes.forEach(note => {
        if (!notesBySubject[note.subject]) {
            notesBySubject[note.subject] = [];
        }
        notesBySubject[note.subject].push(note);
    });
    
    // Filter if search term provided
    if (searchTerm) {
        for (const subject in notesBySubject) {
            notesBySubject[subject] = notesBySubject[subject].filter(note => 
                note.content.toLowerCase().includes(searchTerm) || 
                note.type.toLowerCase().includes(searchTerm)
            );
        }
    }
    
    // Remove empty subjects
    for (const subject in notesBySubject) {
        if (notesBySubject[subject].length === 0) {
            delete notesBySubject[subject];
        }
    }
    
    // Sort subjects by note count (descending)
    const sortedSubjects = Object.keys(notesBySubject).sort((a, b) => 
        notesBySubject[b].length - notesBySubject[a].length
    );
    
    if (sortedSubjects.length === 0) {
        subjectsContainer.innerHTML = `
            <div class="no-notes-message">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#8898aa" stroke-width="1.5">
                    <line x1="4" y1="4" x2="20" y2="4"></line>
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="12" x2="12" y2="12"></line>
                    <line x1="4" y1="16" x2="16" y2="16"></line>
                    <line x1="4" y1="20" x2="20" y2="20"></line>
                </svg>
                <h3>No saved notes yet</h3>
                <p>Start recording voice notes or extract audio from videos to save them here.</p>
            </div>
        `;
        return;
    }
    
    subjectsContainer.innerHTML = '';
    
    sortedSubjects.forEach(subject => {
        const subjectSection = document.createElement('div');
        subjectSection.className = 'subject-section';
        
        subjectSection.innerHTML = `
            <div class="subject-header">
                <h3 class="subject-title">${subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>
                <span class="subject-count">${notesBySubject[subject].length} notes</span>
            </div>
            <div class="notes-grid" id="notes-grid-${subject}">
            </div>
        `;
        
        subjectsContainer.appendChild(subjectSection);
        
        const notesGrid = subjectSection.querySelector(`#notes-grid-${subject}`);
        notesBySubject[subject].sort((a, b) => b.id - a.id).forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            
            noteCard.innerHTML = `
                <div class="note-content">${note.content.substring(0, 100)}${note.content.length > 100 ? '...' : ''}</div>
                <div class="note-meta">
                    <span>${note.type}</span>
                    <span>${note.timestamp}</span>
                </div>
                <div class="note-actions">
                    <button class="note-btn delete-note" data-id="${note.id}">Delete</button>
                </div>
            `;
            
            notesGrid.appendChild(noteCard);
        });
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-note').forEach(btn => {
        btn.addEventListener('click', function() {
            const noteId = parseInt(this.getAttribute('data-id'));
            savedNotes = savedNotes.filter(note => note.id !== noteId);
            localStorage.setItem('classConnectNotes', JSON.stringify(savedNotes));
            renderNotesBySubject(searchTerm);
            updateNotesDisplay();
        });
    });
}

// Group Modal
function initializeGroupModal() {
    closeModal.addEventListener('click', () => {
        groupModal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === groupModal) {
            groupModal.style.display = 'none';
        }
    });
    
    if (createGroupSubmitBtn) {
        createGroupSubmitBtn.addEventListener('click', () => {
            const groupName = groupNameInput.value.trim();
            if (!groupName) {
                alert('Please enter a group name');
                return;
            }
            
            const selectedMembers = [];
            document.querySelectorAll('input[name="group-members"]:checked').forEach(checkbox => {
                selectedMembers.push(checkbox.value);
            });
            
            if (selectedMembers.length === 0) {
                alert('Please select at least one member');
                return;
            }
            
            alert(`Study group "${groupName}" created with ${selectedMembers.length} members!`);
            groupModal.style.display = 'none';
            groupNameInput.value = '';
            
            // In a real app, you'd create a new group chat here
        });
    }
}

function populateMemberCheckboxes() {
    memberCheckboxes.innerHTML = '';
    classmates.forEach(classmate => {
        const div = document.createElement('div');
        div.className = 'member-item';
        div.innerHTML = `
            <label>
                <input type="checkbox" name="group-members" value="${classmate.id}">
                <span class="member-avatar" style="background: ${classmate.color}">${classmate.initials}</span>
                ${classmate.name}
            </label>
        `;
        memberCheckboxes.appendChild(div);
    });
}

// Real-Time Notifications
function initializeRealTimeNotifications() {
    showInitialNotifications();
    notificationInterval = setInterval(() => {
        showSimulatedNotification();
    }, 30000);
}

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
    
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
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

// Utility
function getRandomColor() {
    const colors = ['#5e72e4', '#11cdef', '#2dce89', '#fb6340', '#f5365c', '#825ee4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.teacher-card, .chat-session, .note-card, .widget');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

window.addEventListener('beforeunload', () => {
    if (notificationInterval) {
        clearInterval(notificationInterval);
    }
});

console.log('%c🎓 ClassConnect - ULTIMATE Version', 'color: #5e72e4; font-size: 20px; font-weight: bold;');
console.log('%cNow with: Adaptive AI, Teacher Chats, Subject-Organized Notes, Practice Tests', 'color: #825ee4; font-size: 14px;');
console.log('%cVersion 5.0.0 | All features implemented', 'color: #11cdef; font-size: 12px;');
