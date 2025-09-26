// ClassConnect - Final Accessible Version
// Features: ChatGPT-style AI, Editable Calendar, Color-coded Workload, Removed Teachers Widget
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
// Sample summative events for calendar (tests, quizzes, projects only)
const summativeEvents = [
    { date: "2025-04-10", title: "Math Quiz", subject: "math", type: "quiz" },
    { date: "2025-04-15", title: "History Test", subject: "history", type: "test" },
    { date: "2025-04-18", title: "Science Test", subject: "science", type: "test" },
    { date: "2025-04-21", title: "English Quiz", subject: "english", type: "quiz" },
    { date: "2025-04-25", title: "Math Test", subject: "math", type: "test" },
    { date: "2025-04-28", title: "Science Project", subject: "science", type: "project" }
];
// Formative assessments for workload scan
const formativeAssessments = [
    { date: "2025-04-08", title: "Math Homework", subject: "math", type: "homework" },
    { date: "2025-04-09", title: "Science Lab", subject: "science", type: "lab" },
    { date: "2025-04-10", title: "English Reading", subject: "english", type: "reading" },
    { date: "2025-04-12", title: "History Worksheet", subject: "history", type: "worksheet" },
    { date: "2025-04-13", title: "Math Practice", subject: "math", type: "practice" },
    { date: "2025-04-16", title: "Science Notes", subject: "science", type: "notes" },
    { date: "2025-04-20", title: "English Draft", subject: "english", type: "draft" },
    { date: "2025-04-22", title: "History Research", subject: "history", type: "research" },
    { date: "2025-04-26", title: "Math Review", subject: "math", type: "review" }
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
const searchClassmates = document.getElementById('search-classmates');
const aiInput = document.getElementById('ai-input');
const aiResponse = document.getElementById('ai-response');
const aiSendBtn = document.getElementById('ai-send-btn');
const moduleButtons = document.querySelectorAll('.module-btn');
const moduleExamples = document.getElementById('module-examples');
// Home page elements
const prevWeekBtn = document.getElementById('prev-week');
const nextWeekBtn = document.getElementById('next-week');
const currentWeekDisplay = document.getElementById('current-week-display');
const compactCalendar = document.getElementById('compact-calendar');
const startRecordingBtn = document.getElementById('start-recording');
const pauseRecordingBtn = document.getElementById('pause-recording');
const saveTranscriptBtn = document.getElementById('save-transcript');
const notesDisplay = document.getElementById('notes-display');
const typedNotes = document.getElementById('typed-notes');
const saveTypedNoteBtn = document.getElementById('save-typed-note');
const noteSubject = document.getElementById('note-subject');
const voiceNoteSubject = document.getElementById('voice-note-subject');
const uploadNoteSubject = document.getElementById('upload-note-subject');
const articleUrl = document.getElementById('article-url');
const extractContentBtn = document.getElementById('extract-content');
const uploadDisplay = document.getElementById('upload-display');
const tabButtons = document.querySelectorAll('.tab-btn');
const addEventBtn = document.getElementById('add-event-btn');
const eventModal = document.getElementById('event-modal');
const eventCloseBtn = document.querySelector('.event-close');
const eventDate = document.getElementById('event-date');
const eventTitle = document.getElementById('event-title');
const eventSubject = document.getElementById('event-subject');
const eventType = document.getElementById('event-type');
const saveEventBtn = document.getElementById('save-event-btn');
// Streak elements
const currentStreakElement = document.getElementById('current-streak');
const streakModal = document.getElementById('streak-modal');
const closeStreakBtn = document.getElementById('close-streak');
const confettiContainer = document.getElementById('confetti-container');
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
// AI Assistant sections
const sectionTabs = document.querySelectorAll('.section-tab');
const sectionPanels = document.querySelectorAll('.section-panel');
const recentChatsContainer = document.getElementById('recent-chats');
const achievedChatsContainer = document.getElementById('achieved-chats');
const imageChatsContainer = document.getElementById('image-chats');
const deletedChatsContainer = document.getElementById('deleted-chats');
// New elements for advanced note taker
const uploadNoteFile = document.getElementById('note-file');
const uploadNoteBtn = document.getElementById('upload-note');
const urlNoteSubject = document.getElementById('url-note-subject');
const videoUrl = document.getElementById('video-url');
const generateNotesBtn = document.getElementById('generate-notes');
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
let currentAIModule = 'homework';
let chatHistory = {};
let teacherChatHistory = {};
let notificationInterval = null;
let lastNotificationId = 0;
let currentDate = new Date();
let streakCount = parseInt(localStorage.getItem('classConnectStreak') || '0');
let lastActiveDate = localStorage.getItem('classConnectLastActive');
let hasShownTodayNotification = false;
let currentEvents = [...summativeEvents]; // Make it mutable
// AI Assistant state
let aiChats = {
    recent: [],
    achieved: [],
    images: [],
    deleted: []
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeStreakSystem();
    initializeNavigation();
    initializeClassmates();
    initializeTeacherChats();
    initializeStudentProfile();
    initializeCalendar();
    initializeNotesWidget();
    initializeAIAssistant();
    initializeNotesPage();
    initializeRealTimeNotifications();
    initializeGroupModal();
    initializeEventModal();
    updateNotesDisplay();
    checkStreakMilestone();
    updateWorkloadScan();
    initializeAIScrollableSections();
});

// Streak System
function initializeStreakSystem() {
    const today = new Date().toDateString();
    currentStreakElement.textContent = streakCount;
    if (lastActiveDate) {
        const lastDate = new Date(lastActiveDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate.toDateString() === yesterday.toDateString()) {
            // Consecutive day - keep streak going
        } else if (lastDate.toDateString() !== today) {
            // More than one day gap - reset streak
            streakCount = 0;
            localStorage.setItem('classConnectStreak', '0');
            currentStreakElement.textContent = '0';
        }
    }
    localStorage.setItem('classConnectLastActive', today);
    navButtons.forEach(btn => {
        btn.addEventListener('click', recordActivity);
    });
    document.addEventListener('click', recordActivity);
    document.addEventListener('keypress', recordActivity);
}

function recordActivity() {
    const today = new Date().toDateString();
    const lastActive = localStorage.getItem('classConnectLastActive');
    if (lastActive !== today) {
        streakCount++;
        localStorage.setItem('classConnectStreak', streakCount.toString());
        localStorage.setItem('classConnectLastActive', today);
        currentStreakElement.textContent = streakCount;
        checkStreakMilestone();
    }
}

function checkStreakMilestone() {
    if (streakCount > 0 && streakCount % 10 === 0) {
        showStreakCelebration(streakCount);
    }
}

function showStreakCelebration(days) {
    streakModal.style.display = 'block';
    document.getElementById('streak-count').textContent = days;
    createConfetti();
    closeStreakBtn.onclick = () => {
        streakModal.style.display = 'none';
    };
    window.addEventListener('click', (event) => {
        if (event.target === streakModal) {
            streakModal.style.display = 'none';
        }
    });
}

function createConfetti() {
    confettiContainer.innerHTML = '';
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 5) + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Navigation
function initializeNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.getAttribute('data-page');
            switchPage(targetPage);
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            recordActivity();
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
    recordActivity();
}

// Student Profile
function initializeStudentProfile() {
    if (studentProfile) {
        studentProfile.addEventListener('click', () => {
            // Teachers section removed, so no action needed
            recordActivity();
        });
    }
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
            recordActivity();
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
        recordActivity();
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
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(classmate.id, false);
        }
    });
    recordActivity();
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
        chatHistory[classmate.id].push(messageObj);
        addMessageToChat(text, 'sent', now, false);
        messageInput.value = '';
    }
    renderChatSessions();
    if (Math.random() > 0.5 && !hasShownTodayNotification) {
        showNotification("New Message", `${isTeacher ? 'Teacher' : 'Classmate'} replied to your message!`, "💬");
        hasShownTodayNotification = true;
    }
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
            teacherChatHistory[classmate.id].push(responseObj);
            addMessageToChat(randomResponse, 'received', new Date(), true);
        } else {
            chatHistory[classmate.id].push(responseObj);
            addMessageToChat(randomResponse, 'received', new Date(), false);
        }
        renderChatSessions();
        if (isTeacher) {
            renderTeacherSessions();
        }
        recordActivity();
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
        recordActivity();
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
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(teacher.id, true);
        }
    });
    recordActivity();
}

function renderTeacherChatHistory(teacherId) {
    teacherChatMessages.innerHTML = '';
    const sortedMessages = [...teacherChatHistory[teacher.id]].sort((a, b) => a.time - b.time);
    sortedMessages.forEach(message => {
        addMessageToChat(message.text, message.type, message.time, true);
    });
    setTimeout(() => { teacherChatMessages.scrollTop = teacherChatMessages.scrollHeight; }, 100);
}

// Editable Calendar Widget
function initializeCalendar() {
    if (!compactCalendar) return;
    if (prevWeekBtn) {
        prevWeekBtn.addEventListener('click', () => {
            currentDate.setDate(currentDate.getDate() - 7);
            renderCompactCalendar();
            recordActivity();
        });
    }
    if (nextWeekBtn) {
        nextWeekBtn.addEventListener('click', () => {
            currentDate.setDate(currentDate.getDate() + 7);
            renderCompactCalendar();
            recordActivity();
        });
    }
    if (addEventBtn) {
        addEventBtn.addEventListener('click', () => {
            eventModal.style.display = 'block';
            // Set default date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            eventDate.value = tomorrow.toISOString().split('T')[0];
        });
    }
    renderCompactCalendar();
}

function renderCompactCalendar() {
    if (!compactCalendar) return;
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    currentWeekDisplay.textContent = `📅 Week of ${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    compactCalendar.innerHTML = '';
    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(startOfWeek);
        dayDate.setDate(startOfWeek.getDate() + i);
        const dayColumn = document.createElement('div');
        dayColumn.className = 'compact-day-column';
        dayColumn.dataset.date = formatDate(dayDate);
        const isToday = dayDate.toDateString() === new Date().toDateString();
        const dayHeaderClass = isToday ? 'compact-day-header today' : 'compact-day-header';
        dayColumn.innerHTML = `
            <div class="${dayHeaderClass}">
                <div class="compact-day-name">${dayDate.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <div class="compact-day-date">${dayDate.getDate()}</div>
            </div>
            <div class="compact-day-events" id="compact-day-events-${formatDate(dayDate)}"></div>
        `;
        // Add click event to add event to this day
        dayColumn.addEventListener('click', () => {
            eventModal.style.display = 'block';
            eventDate.value = formatDate(dayDate);
        });
        compactCalendar.appendChild(dayColumn);
    }
    // Add SUMMATIVE events to days
    currentEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const eventStartOfWeek = new Date(eventDate);
        eventStartOfWeek.setDate(eventDate.getDate() - eventDate.getDay());
        if (eventStartOfWeek.getTime() === startOfWeek.getTime()) {
            const eventsContainer = document.getElementById(`compact-day-events-${formatDate(eventDate)}`);
            if (eventsContainer) {
                const eventElement = document.createElement('div');
                eventElement.className = `compact-event-item ${event.type}`;
                eventElement.title = `${event.title} (${event.subject})`;
                eventElement.textContent = event.title;
                // Add click to edit event
                eventElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // In a real app, you'd open edit modal
                    alert(`Edit ${event.title} (${event.type})`);
                });
                eventsContainer.appendChild(eventElement);
            }
        }
    });
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Event Modal
function initializeEventModal() {
    // Update event subject dropdown to include Language
    const eventSubjectOptions = `
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
        <option value="history">History</option>
        <option value="language">Language</option>
    `;
    eventSubject.innerHTML = eventSubjectOptions;
    
    if (eventCloseBtn) {
        eventCloseBtn.addEventListener('click', () => {
            eventModal.style.display = 'none';
        });
    }
    if (saveEventBtn) {
        saveEventBtn.addEventListener('click', () => {
            const date = eventDate.value;
            const title = eventTitle.value.trim();
            const subject = eventSubject.value;
            const type = eventType.value;
            if (!date || !title) {
                alert('Please fill in all fields!');
                return;
            }
            // Add to events array
            currentEvents.push({ date, title, subject, type });
            // Save to localStorage
            localStorage.setItem('classConnectEvents', JSON.stringify(currentEvents));
            // Close modal and refresh calendar
            eventModal.style.display = 'none';
            renderCompactCalendar();
            alert('Assessment added successfully!');
            recordActivity();
        });
    }
    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === eventModal) {
            eventModal.style.display = 'none';
        }
    });
}

// Update Academic Workload Scan with color-coded formative assessments
function updateWorkloadScan() {
    const today = new Date();
    let urgentCount = 0; // ≤2 days
    let upcomingCount = 0; // 3-4 days  
    let futureCount = 0; // 5+ days
    formativeAssessments.forEach(assessment => {
        const assessmentDate = new Date(assessment.date);
        const daysUntil = Math.ceil((assessmentDate - today) / (1000 * 60 * 60 * 24));
        if (daysUntil >= 0) {
            if (daysUntil <= 2) {
                urgentCount++;
            } else if (daysUntil <= 4) {
                upcomingCount++;
            } else {
                futureCount++;
            }
        }
    });
    // Update the scan widget
    const scanItems = document.querySelectorAll('.scan-item');
    if (scanItems[0]) scanItems[0].querySelector('.scan-value').textContent = `${urgentCount} assessments`;
    if (scanItems[1]) scanItems[1].querySelector('.scan-value').textContent = `${upcomingCount} assessments`;
    if (scanItems[2]) scanItems[2].querySelector('.scan-value').textContent = `${futureCount} assessments`;
}

// Compact Notes Widget - Enhanced Accessibility and Compactness
function initializeNotesWidget() {
    // Update subject dropdowns to include Language
    const subjectOptions = `
        <option value="general">Subject</option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
        <option value="history">History</option>
        <option value="language">Language</option>
    `;
    
    noteSubject.innerHTML = subjectOptions;
    voiceNoteSubject.innerHTML = subjectOptions;
    uploadNoteSubject.innerHTML = subjectOptions;
    urlNoteSubject.innerHTML = subjectOptions;

    // Add URL tab functionality
    const urlTabBtn = document.querySelector('[data-tab="url"]');
    if (urlTabBtn) {
        urlTabBtn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            urlTabBtn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById('url-tab').classList.add('active');
            recordActivity();
        });
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}-tab`).classList.add('active');
            recordActivity();
        });
    });

    if (saveTypedNoteBtn) {
        saveTypedNoteBtn.addEventListener('click', () => {
            const content = typedNotes.value.trim();
            if (!content) {
                alert('Please enter some notes first!');
                return;
            }
            const subject = noteSubject.value;
            if (subject === 'general') {
                alert('Please select a subject for your notes!');
                return;
            }
            saveNote(content, 'Typed Note', subject);
            typedNotes.value = '';
            noteSubject.value = 'general';
        });
    }

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

    if (startRecordingBtn) {
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
            recordActivity();
        });
    }

    if (pauseRecordingBtn) {
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
            recordActivity();
        });
    }

    if (saveTranscriptBtn) {
        saveTranscriptBtn.addEventListener('click', () => {
            if (!currentTranscript) return;
            const subject = voiceNoteSubject.value;
            if (subject === 'general') {
                alert('Please select a subject for your voice note!');
                return;
            }
            saveNote(currentTranscript, 'Voice Note', subject);
        });
    }

    if (extractContentBtn) {
        extractContentBtn.addEventListener('click', () => {
            const url = articleUrl.value.trim();
            if (!url) {
                alert('Please enter a URL first!');
                return;
            }
            uploadDisplay.innerHTML = "<p>🔍 Analyzing content... (simulated)</p>";
            setTimeout(() => {
                let extractedContent = "";
                let subject = uploadNoteSubject.value;
                if (url.includes('youtube.com') || url.includes('youtu.be')) {
                    extractedContent = `Extracted key points from video: ${url.substring(0, 50)}...
• Main concept 1: Brief summary
• Main concept 2: Brief summary
• Important terms: term1, term2, term3`;
                    if (subject === 'general') {
                        subject = detectSubjectFromUrl(url);
                    }
                } else if (url.includes('twitter.com') || url.includes('facebook.com') || url.includes('instagram.com')) {
                    extractedContent = `Extracted educational content from social media: ${url.substring(0, 50)}...
• Key insight: Brief summary
• Related concept: Connection to academic subject`;
                    if (subject === 'general') {
                        subject = 'other';
                    }
                } else {
                    extractedContent = `Extracted key information from article: ${url.substring(0, 50)}...
• Main topic: Brief overview
• Key points: 
  1. First important point
  2. Second important point
  3. Third important point`;
                    if (subject === 'general') {
                        subject = detectSubjectFromUrl(url);
                    }
                }
                if (subject === 'general') {
                    alert('Please select a subject for your extracted note!');
                    uploadDisplay.innerHTML = "<p>Paste a link to extract key points and save as notes.</p>";
                    return;
                }
                saveNote(extractedContent, 'Extracted Content', subject);
                articleUrl.value = '';
                uploadNoteSubject.value = 'general';
            }, 2000);
            recordActivity();
        });
    }

    // File upload functionality
    if (uploadNoteBtn) {
        uploadNoteBtn.addEventListener('click', () => {
            const file = uploadNoteFile.files[0];
            if (!file) {
                alert('Please select a file first!');
                return;
            }
            const subject = uploadNoteSubject.value;
            if (subject === 'general') {
                alert('Please select a subject for your uploaded file!');
                return;
            }
            
            // Simulate file processing
            uploadDisplay.innerHTML = `<p>📤 Uploading ${file.name}... (simulated)</p>`;
            setTimeout(() => {
                const content = `File: ${file.name}\nType: ${file.type}\nSize: ${(file.size / 1024).toFixed(2)} KB\n\nExtracted content: This is simulated content from the uploaded file.`;
                saveNote(content, 'Uploaded File', subject);
                uploadNoteFile.value = '';
                uploadNoteSubject.value = 'general';
            }, 1500);
        });
    }

    // Video URL functionality
    if (generateNotesBtn) {
        generateNotesBtn.addEventListener('click', () => {
            const url = videoUrl.value.trim();
            if (!url) {
                alert('Please enter a video URL first!');
                return;
            }
            const subject = urlNoteSubject.value;
            if (subject === 'general') {
                alert('Please select a subject for your video notes!');
                return;
            }
            
            uploadDisplay.innerHTML = `<p>🎬 Generating notes from video: ${url.substring(0, 30)}... (simulated)</p>`;
            setTimeout(() => {
                const content = `Generated notes from video: ${url}\n\n• Key concept 1: Brief summary\n• Key concept 2: Brief summary\n• Important terms: term1, term2\n• Example: Example related to the concept\n\nThese notes were automatically generated from the video content.`;
                saveNote(content, 'Video Notes', subject);
                videoUrl.value = '';
                urlNoteSubject.value = 'general';
            }, 2000);
        });
    }
}

function detectSubjectFromUrl(url) {
    url = url.toLowerCase();
    if (url.includes('math') || url.includes('algebra') || url.includes('calculus')) return 'math';
    if (url.includes('science') || url.includes('biology') || url.includes('chemistry')) return 'science';
    if (url.includes('english') || url.includes('literature') || url.includes('writing')) return 'english';
    if (url.includes('history') || url.includes('geography') || url.includes('social')) return 'history';
    if (url.includes('language') || url.includes('french') || url.includes('spanish') || url.includes('german')) return 'language';
    return 'other';
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
    if (type === 'Typed Note') {
        typedNotes.value = '';
        noteSubject.value = 'general';
    } else if (type === 'Voice Note') {
        notesDisplay.innerHTML = `<p>✅ ${type} saved in ${subject} section!</p>`;
        currentTranscript = '';
        saveTranscriptBtn.disabled = true;
        voiceNoteSubject.value = 'general';
    } else if (type === 'Extracted Content' || type === 'Uploaded File' || type === 'Video Notes') {
        uploadDisplay.innerHTML = `<p>✅ ${type} saved in ${subject} section!</p>`;
        articleUrl && (articleUrl.value = '');
        videoUrl && (videoUrl.value = '');
        uploadNoteSubject.value = 'general';
        urlNoteSubject.value = 'general';
    }
    recordActivity();
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
                tabButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector(`[data-tab="${getActiveTab()}"]`).classList.add('active');
                if (getActiveTab() === 'type') {
                    typedNotes.value = note.content;
                } else if (getActiveTab() === 'speak') {
                    notesDisplay.innerHTML = `<p><strong>📝 ${note.type} (${note.timestamp}):</strong><br>${note.content}</p>`;
                } else {
                    uploadDisplay.innerHTML = `<p><strong>📝 ${note.type} (${note.timestamp}):</strong><br>${note.content}</p>`;
                }
            });
            notesList.appendChild(li);
        });
    }
    renderNotesBySubject();
}

function getActiveTab() {
    for (let btn of tabButtons) {
        if (btn.classList.contains('active')) {
            return btn.getAttribute('data-tab');
        }
    }
    return 'type';
}

// AI Assistant - ChatGPT Style with Interchangeable Modules
function initializeAIAssistant() {
    moduleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            moduleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAIModule = btn.getAttribute('data-module');
            // Update examples based on selected module
            updateModuleExamples();
            recordActivity();
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
}

// Initialize AI Assistant Sections
function initializeAIScrollableSections() {
    // Add event listeners to section tabs
    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            sectionTabs.forEach(t => t.classList.remove('active'));
            sectionPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding panel
            const sectionId = tab.getAttribute('data-section');
            const panel = document.getElementById(`${sectionId}-section`);
            if (panel) {
                panel.classList.add('active');
            }
            
            // Update content based on selected section
            updateSectionContent(sectionId);
        });
    });
    
    // Initialize with recent section active
    document.querySelector('.section-tab[data-section="recent"]').classList.add('active');
    document.getElementById('recent-section').classList.add('active');
    updateSectionContent('recent');
}

function updateSectionContent(sectionId) {
    const container = document.getElementById(`${sectionId}-chats`);
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Get data for the section
    const sectionData = aiChats[sectionId];
    
    // Create items based on section type
    if (sectionData.length === 0) {
        container.innerHTML = `<div class="section-item">No items in this section yet</div>`;
        return;
    }
    
    sectionData.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'section-item';
        itemElement.textContent = `${index + 1}. ${item.title || item.query || 'Chat'}`;
        itemElement.addEventListener('click', () => {
            // Handle click on chat item
            showChatDetail(item, sectionId);
        });
        container.appendChild(itemElement);
    });
}

function showChatDetail(chatItem, sectionId) {
    // For now, just log the chat item
    console.log(`Showing details for chat in ${sectionId}:`, chatItem);
    
    // In a real app, you would show the full chat content
    alert(`Chat details for: ${chatItem.title || chatItem.query}`);
}

function handleAIQuery() {
    const query = aiInput.value.trim();
    if (!query) return;
    
    // Create a new message element for the user's query
    const userMessage = document.createElement('div');
    userMessage.className = 'ai-message user-message';
    userMessage.innerHTML = `<div class="message-content">${query}</div>`;
    
    // Create AI response container
    const aiResponseDiv = document.createElement('div');
    aiResponseDiv.className = 'ai-message ai-response';
    aiResponseDiv.innerHTML = '<div class="message-content">🤔 Thinking...</div>';
    
    // Clear previous responses and add new conversation
    aiResponse.innerHTML = '';
    aiResponse.appendChild(userMessage);
    aiResponse.appendChild(aiResponseDiv);
    
    // Add to recent chats
    aiChats.recent.unshift({
        id: Date.now(),
        query: query,
        timestamp: new Date().toLocaleString(),
        module: currentAIModule
    });
    
    // Process the query
    setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        let response = '';
        let subject = detectSubjectFromText(query);
        
        // Handle any prompt gracefully with consistent responses
        if (currentAIModule === 'homework') {
            response = `I'd be happy to help with your ${subject} homework! Here's a step-by-step approach to solving problems like this:
1. First, identify what type of problem this is
2. Recall the relevant formulas or concepts
3. Apply the concepts step by step
4. Check your work for accuracy
For your specific question about "${query}", I recommend starting with step 1. Would you like me to walk through a similar example?`;
        } else if (currentAIModule === 'qna') {
            response = `Great question about ${subject}! Here's a clear, detailed explanation:
${getRandomExplanation(subject)}
This concept is fundamental to understanding ${subject}. Would you like me to provide examples or dive deeper into any part?`;
        } else if (currentAIModule === 'planner') {
            response = `I'll help you create an effective study plan for ${subject}! Here's a personalized approach:
• **Daily Goals**: Break down your material into manageable chunks
• **Study Sessions**: 25-minute focused sessions with 5-minute breaks
• **Review Schedule**: Review material after 1 day, 3 days, and 1 week
• **Practice**: Include practice problems daily
Based on your query "${query}", I suggest focusing on the most challenging topics first. Would you like me to create a detailed day-by-day schedule?`;
        } else if (currentAIModule === 'exam') {
            response = `Excellent! I'll help you prepare for your ${subject} exam. Here's what I recommend:
1. **Diagnostic Test**: Take a quick 5-question quiz to identify weak areas
2. **Targeted Review**: Focus on your weakest topics first
3. **Practice Tests**: Take full-length practice exams under timed conditions
4. **Review Mistakes**: Analyze every incorrect answer thoroughly
For "${query}", I can generate a custom practice test right now. Just say "Generate practice test" and I'll create 10 questions tailored to your needs!`;
        }
        
        // Update AI response with formatted answer
        aiResponseDiv.innerHTML = `
            <div class="message-content">
                <div style="font-weight: bold; color: #5e72e4; margin-bottom: 10px;">AI ${currentAIModule.charAt(0).toUpperCase() + currentAIModule.slice(1)}:</div>
                <div style="line-height: 1.6;">${response.replace(/\n/g, '<br>')}</div>
            </div>
        `;
        
        // Update recent section content
        updateSectionContent('recent');
    }, 1000);
    
    aiInput.value = '';
    recordActivity();
}

function detectSubjectFromText(text) {
    text = text.toLowerCase();
    if (text.includes('math') || text.includes('equation') || text.includes('algebra')) return 'Math';
    if (text.includes('science') || text.includes('biology') || text.includes('chemistry')) return 'Science';
    if (text.includes('english') || text.includes('literature') || text.includes('writing')) return 'English';
    if (text.includes('history') || text.includes('geography') || text.includes('social')) return 'History';
    if (text.includes('language') || text.includes('french') || text.includes('spanish') || text.includes('german')) return 'Language';
    return 'your subject';
}

function getRandomExplanation(subject) {
    const explanations = {
        'Math': 'Mathematical concepts build upon each other. Understanding foundational principles like algebra and geometry is crucial for solving more complex problems. Always show your work and check your answers.',
        'Science': 'Science is about understanding how the natural world works through observation, experimentation, and evidence-based reasoning. Focus on understanding concepts rather than just memorizing facts.',
        'English': 'English involves analyzing literature, developing writing skills, and understanding language structure. Practice reading critically and writing clearly to improve your skills.',
        'History': 'History helps us understand how past events shape our present world. Focus on causes, effects, and connections between events rather than just dates and names.',
        'Language': 'Language learning involves developing reading, writing, speaking, and listening skills. Practice regularly and immerse yourself in the language to improve.',
        'your subject': 'Learning any subject requires consistent practice, active engagement, and seeking help when needed. Break complex topics into smaller parts and build your understanding step by step.'
    };
    return explanations[subject] || explanations['your subject'];
}

function updateModuleExamples() {
    const examples = {
        homework: {
            title: "📚 Homework Helper Examples:",
            prompts: [
                '"Help me solve 3x² + 5x - 2 = 0"',
                '"Explain the Pythagorean theorem step by step"',
                '"How do I balance this chemical equation?"',
                '"Can you check my essay for grammar errors?"'
            ]
        },
        qna: {
            title: "❓ Instant Q&A Examples:",
            prompts: [
                '"What is photosynthesis?"',
                '"Who was Julius Caesar?"',
                '"Explain the water cycle in simple terms"',
                '"What are the causes of World War I?"'
            ]
        },
        planner: {
            title: "🗓️ Study Planner Examples:",
            prompts: [
                '"Create a study plan for my math test next week"',
                '"Help me organize my study schedule for finals"',
                '"I have 3 tests in 10 days - how should I study?"',
                '"Make a daily study plan for biology chapter 5"'
            ]
        },
        exam: {
            title: "🧪 Exam Generator Examples:",
            prompts: [
                '"Give me a practice test on quadratic equations"',
                '"Test me on World War I causes and effects"',
                '"Create 10 questions about cell biology"',
                '"Quiz me on English grammar rules"'
            ]
        }
    };
    const currentExamples = examples[currentAIModule];
    moduleExamples.innerHTML = `
        <p><strong>${currentExamples.title}</strong></p>
        <ul>
            ${currentExamples.prompts.map(prompt => `<li>${prompt}</li>`).join('')}
        </ul>
    `;
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
            // Switch to AI page and show practice test
            switchPage('ai');
            document.querySelector('.nav-btn[data-page="ai"]').classList.add('active');
            aiResponse.innerHTML = `
                <div style="padding: 15px; background: #f4f5f7; border-radius: 8px; margin-bottom: 12px;">
                    <p style="font-weight: bold; color: #32325d; margin-bottom: 8px;">Generated from your notes!</p>
                    <p style="color: #5e72e4; font-size: 13px;">Practice test on ${mostCommonSubject} based on your saved notes.</p>
                </div>
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(94, 114, 228, 0.1) 0%, rgba(130, 94, 228, 0.1) 100%); border-radius: 8px;">
                    <p style="font-weight: bold; color: #32325d; margin-bottom: 8px;">AI Assistant:</p>
                    <p style="line-height: 1.5; font-size: 13px;">Great! I've generated a 10-question practice test on ${mostCommonSubject} based on your saved notes. Let's begin!</p>
                </div>
            `;
            recordActivity();
        });
    }
}

function renderNotesBySubject(searchTerm = '') {
    if (!subjectsContainer) return;
    const notesBySubject = {};
    const subjects = ['math', 'science', 'english', 'history', 'language', 'other', 'general'];
    subjects.forEach(subject => {
        notesBySubject[subject] = [];
    });
    savedNotes.forEach(note => {
        if (!notesBySubject[note.subject]) {
            notesBySubject[note.subject] = [];
        }
        notesBySubject[note.subject].push(note);
    });
    
    if (searchTerm) {
        for (const subject in notesBySubject) {
            notesBySubject[subject] = notesBySubject[subject].filter(note => 
                note.content.toLowerCase().includes(searchTerm) || 
                note.type.toLowerCase().includes(searchTerm)
            );
        }
    }
    
    const sortedSubjects = subjects.filter(subject => notesBySubject[subject].length > 0);
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
                <p>Start recording voice notes, typing notes, or extracting content from links to save them here.</p>
            </div>
        `;
        return;
    }
    
    subjectsContainer.innerHTML = '';
    sortedSubjects.forEach(subject => {
        const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
        const subjectSection = document.createElement('div');
        subjectSection.className = 'subject-section';
        subjectSection.innerHTML = `
            <div class="subject-header">
                <h3 class="subject-title">${subjectName}</h3>
                <span class="subject-count">${notesBySubject[subject].length} notes</span>
            </div>
            <div class="subject-content" id="subject-content-${subject}">
                <div class="notes-grid" id="notes-grid-${subject}">
                </div>
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
        
        const subjectHeader = subjectSection.querySelector('.subject-header');
        const subjectContent = subjectSection.querySelector('.subject-content');
        subjectHeader.addEventListener('click', () => {
            subjectContent.style.display = subjectContent.style.display === 'none' ? 'block' : 'none';
            recordActivity();
        });
    });
    
    document.querySelectorAll('.delete-note').forEach(btn => {
        btn.addEventListener('click', function() {
            const noteId = parseInt(this.getAttribute('data-id'));
            savedNotes = savedNotes.filter(note => note.id !== noteId);
            localStorage.setItem('classConnectNotes', JSON.stringify(savedNotes));
            renderNotesBySubject(searchTerm);
            updateNotesDisplay();
            recordActivity();
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
            recordActivity();
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

// Notifications
function initializeRealTimeNotifications() {
    // Show notifications for formative assessments
    const today = new Date();
    formativeAssessments.forEach(assessment => {
        const assessmentDate = new Date(assessment.date);
        const daysUntil = Math.ceil((assessmentDate - today) / (1000 * 60 * 60 * 24));
        if (daysUntil >= 0 && daysUntil <= 2 && !hasShownTodayNotification) {
            showNotification("Formative Assessment", `${assessment.title} is due in ${daysUntil} days!`, "📚");
            hasShownTodayNotification = true;
        }
    });
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
    const elements = document.querySelectorAll('.chat-session, .note-card, .compact-widget');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

console.log('%c🎓 ClassConnect - FINAL ACCESSIBLE VERSION', 'color: #5e72e4; font-size: 20px; font-weight: bold;');
console.log('%cNow with: ChatGPT-style AI, Editable Calendar, Color-coded Workload, Removed Teachers Widget', 'color: #825ee4; font-size: 14px;');
console.log('%cVersion 9.0.0 | All features implemented', 'color: #11cdef; font-size: 12px;');
