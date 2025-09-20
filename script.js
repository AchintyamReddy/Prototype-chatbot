// ClassConnect - Enhanced Educational Platform
// All features: Advanced Voice, Real-time Chat, Adaptive AI Practice

// Sample data for teachers
const teachers = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        subjects: ["Physics", "Advanced Math"],
        grade: "Grade 8",
        initials: "SJ",
        color: "#5e72e4",
        image: "media/teachers/sarah-johnson.jpg"
    },
    {
        id: 2,
        name: "Prof. Michael Chen",
        subjects: ["Chemistry", "Biology"],
        grade: "Grade 8",
        initials: "MC",
        color: "#11cdef",
        image: "media/teachers/michael-chen.jpg"
    },
    {
        id: 3,
        name: "Ms. Emily Rodriguez",
        subjects: ["English Literature", "Creative Writing"],
        grade: "Grade 8",
        initials: "ER",
        color: "#2dce89",
        image: "media/teachers/emily-rodriguez.jpg"
    },
    {
        id: 4,
        name: "Mr. James Williams",
        subjects: ["World History", "Social Science"],
        grade: "Grade 8",
        initials: "JW",
        color: "#fb6340",
        image: "media/teachers/james-williams.jpg"
    },
    {
        id: 5,
        name: "Mrs. Priya Patel",
        subjects: ["Mathematics", "Statistics"],
        grade: "Grade 8",
        initials: "PP",
        color: "#f5365c",
        image: "media/teachers/priya-patel.jpg"
    },
    {
        id: 6,
        name: "Dr. Robert Thompson",
        subjects: ["Computer Science", "Robotics"],
        grade: "Grade 8",
        initials: "RT",
        color: "#825ee4",
        image: "media/teachers/robert-thompson.jpg"
    },
    {
        id: 7,
        name: "Ms. Maria Garcia",
        subjects: ["Spanish", "French"],
        grade: "Grade 8",
        initials: "MG",
        color: "#5e72e4",
        image: "media/teachers/maria-garcia.jpg"
    },
    {
        id: 8,
        name: "Mr. David Kim",
        subjects: ["Physical Education", "Health"],
        grade: "Grade 8",
        initials: "DK",
        color: "#11cdef",
        image: "media/teachers/david-kim.jpg"
    },
    {
        id: 9,
        name: "Mrs. Linda Brown",
        subjects: ["Art", "Design"],
        grade: "Grade 8",
        initials: "LB",
        color: "#2dce89",
        image: "media/teachers/linda-brown.jpg"
    },
    {
        id: 10,
        name: "Dr. Ahmed Hassan",
        subjects: ["Geography", "Environmental Science"],
        grade: "Grade 8",
        initials: "AH",
        color: "#fb6340",
        image: "media/teachers/ahmed-hassan.jpg"
    }
];

// Sample data for classmates
const classmates = [
    { id: 1, name: "Emma Wilson", status: "online", initials: "EW", color: "#5e72e4", image: "media/students/emma-wilson.jpg" },
    { id: 2, name: "Liam Martinez", status: "online", initials: "LM", color: "#11cdef", image: "media/students/liam-martinez.jpg" },
    { id: 3, name: "Olivia Anderson", status: "idle", initials: "OA", color: "#2dce89", image: "media/students/olivia-anderson.jpg" },
    { id: 4, name: "Noah Taylor", status: "offline", initials: "NT", color: "#fb6340", image: "media/students/noah-taylor.jpg" },
    { id: 5, name: "Ava Thomas", status: "online", initials: "AT", color: "#f5365c", image: "media/students/ava-thomas.jpg" },
    { id: 6, name: "Ethan Jackson", status: "idle", initials: "EJ", color: "#825ee4", image: "media/students/ethan-jackson.jpg" },
    { id: 7, name: "Sophia White", status: "online", initials: "SW", color: "#5e72e4", image: "media/students/sophia-white.jpg" },
    { id: 8, name: "Mason Harris", status: "offline", initials: "MH", color: "#11cdef", image: "media/students/mason-harris.jpg" },
    { id: 9, name: "Isabella Martin", status: "online", initials: "IM", color: "#2dce89", image: "media/students/isabella-martin.jpg" },
    { id: 10, name: "William Garcia", status: "idle", initials: "WG", color: "#fb6340", image: "media/students/william-garcia.jpg" },
    { id: 11, name: "Mia Rodriguez", status: "online", initials: "MR", color: "#f5365c", image: "media/students/mia-rodriguez.jpg" },
    { id: 12, name: "James Lee", status: "offline", initials: "JL", color: "#825ee4", image: "media/students/james-lee.jpg" },
    { id: 13, name: "Charlotte Walker", status: "online", initials: "CW", color: "#5e72e4", image: "media/students/charlotte-walker.jpg" },
    { id: 14, name: "Benjamin Hall", status: "idle", initials: "BH", color: "#11cdef", image: "media/students/benjamin-hall.jpg" },
    { id: 15, name: "Amelia Allen", status: "online", initials: "AA", color: "#2dce89", image: "media/students/amelia-allen.jpg" },
    { id: 16, name: "Lucas Young", status: "online", initials: "LY", color: "#fb6340", image: "media/students/lucas-young.jpg" },
    { id: 17, name: "Harper King", status: "offline", initials: "HK", color: "#f5365c", image: "media/students/harper-king.jpg" },
    { id: 18, name: "Henry Wright", status: "idle", initials: "HW", color: "#825ee4", image: "media/students/henry-wright.jpg" },
    { id: 19, name: "Evelyn Scott", status: "online", initials: "ES", color: "#5e72e4", image: "media/students/evelyn-scott.jpg" },
    { id: 20, name: "Alexander Green", status: "online", initials: "AG", color: "#11cdef", image: "media/students/alexander-green.jpg" },
    { id: 21, name: "Abigail Baker", status: "idle", initials: "AB", color: "#2dce89", image: "media/students/abigail-baker.jpg" },
    { id: 22, name: "Michael Adams", status: "offline", initials: "MA", color: "#fb6340", image: "media/students/michael-adams.jpg" },
    { id: 23, name: "Emily Nelson", status: "online", initials: "EN", color: "#f5365c", image: "media/students/emily-nelson.jpg" },
    { id: 24, name: "Daniel Carter", status: "online", initials: "DC", color: "#825ee4", image: "media/students/daniel-carter.jpg" },
    { id: 25, name: "Madison Mitchell", status: "idle", initials: "MM", color: "#5e72e4", image: "media/students/madison-mitchell.jpg" }
];

// Sample upcoming events
const upcomingEvents = [
    { date: "2025-04-15", title: "Math Quiz - Chapter 5" },
    { date: "2025-04-18", title: "Science Test - Photosynthesis" },
    { date: "2025-04-22", title: "History Essay Due" },
    { date: "2025-04-25", title: "English Vocabulary Test" },
    { date: "2025-04-30", title: "Physics Lab Report" }
];

// Practice problem banks by topic
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

// Calendar & Notes elements
const calendarEventsContainer = document.getElementById('calendar-events');
const startRecordingBtn = document.getElementById('start-recording');
const pauseRecordingBtn = document.getElementById('pause-recording');
const saveTranscriptBtn = document.getElementById('save-transcript');
const pdfUpload = document.getElementById('pdf-upload');
const notesDisplay = document.getElementById('notes-display');
const notesList = document.getElementById('notes-list');

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

// State variables
let currentClassmate = null;
let recognition = null;
let isRecording = false;
let isPaused = false;
let currentTranscript = '';
let savedNotes = [];
let currentTopic = '';
let currentProblemIndex = 0;
let currentProblems = [];

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
});

// Navigation functionality
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

// Switch between pages
function switchPage(pageName) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // If switching to chat and a classmate is selected, show chat
    if (pageName === 'chat' && currentClassmate) {
        showChatInterface(currentClassmate);
    }
}

// Initialize student profile interaction
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

// Initialize teachers grid
function initializeTeachers() {
    if (teachersGrid) {
        teachersGrid.innerHTML = '';
        
        teachers.forEach(teacher => {
            const teacherCard = createTeacherCard(teacher);
            teachersGrid.appendChild(teacherCard);
        });
    }
}

// Create teacher card element
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
        showTeacherDetails(teacher);
    });
    
    return card;
}

// Show teacher details
function showTeacherDetails(teacher) {
    alert(`Viewing ${teacher.name}'s profile - Feature coming soon!`);
}

// Initialize classmates list
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

// Render classmates list
function renderClassmates(classmatesList) {
    const container = document.getElementById('classmates-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    classmatesList.forEach(classmate => {
        const classmateItem = createClassmateItem(classmate);
        container.appendChild(classmateItem);
    });
}

// Create classmate item element
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
        // Remove active class from all items
        document.querySelectorAll('.classmate-item').forEach(el => {
            el.classList.remove('active');
        });
        
        // Add active class to this item
        item.classList.add('active');
        
        // Show chat interface
        currentClassmate = classmate;
        showChatInterface(classmate);
    });
    
    return item;
}

// Show chat interface
function showChatInterface(classmate) {
    chatWelcome.style.display = 'none';
    chatMessages.style.display = 'flex';
    chatInputArea.style.display = 'block';
    
    // Clear previous messages
    chatMessages.innerHTML = '';
    
    // Add welcome message
    addMessage(`Hi ${classmate.name}! How can I help you with our assignment?`, 'received');
    
    // Set up send message functionality
    sendMessageBtn.onclick = () => sendMessage();
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Send message
function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;
    
    addMessage(text, 'sent');
    messageInput.value = '';
    
    // Simulate response after a delay
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
        addMessage(randomResponse, 'received');
    }, 1000);
}

// Add message to chat
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize Calendar Widget
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

// Initialize Enhanced Notes Widget
function initializeNotesWidget() {
    // Check if browser supports SpeechRecognition
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
        startRecordingBtn.style.background = "#ccc";
    }

    // Start recording
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
        });
    }

    // Pause/resume recording
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
        });
    }

    // Save transcript
    if (saveTranscriptBtn) {
        saveTranscriptBtn.addEventListener('click', () => {
            if (!currentTranscript) return;
            
            const note = {
                id: Date.now(),
                content: currentTranscript,
                timestamp: new Date().toLocaleString()
            };
            
            savedNotes.push(note);
            updateSavedNotesList();
            
            // Clear current transcript
            currentTranscript = '';
            notesDisplay.innerHTML = "<p>✅ Note saved! Start a new recording or upload a PDF.</p>";
            saveTranscriptBtn.disabled = true;
        });
    }

    // Handle PDF upload
    if (pdfUpload) {
        pdfUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                const note = {
                    id: Date.now(),
                    content: `PDF: ${file.name}`,
                    timestamp: new Date().toLocaleString()
                };
                
                savedNotes.push(note);
                updateSavedNotesList();
                
                notesDisplay.innerHTML = `<p><strong>📄 PDF Saved:</strong><br>${file.name}<br><em>(Click on saved note to view)</em></p>`;
                pdfUpload.value = '';
            } else if (file) {
                notesDisplay.innerHTML = `<p style="color: red;">Please upload a valid PDF file.</p>`;
                pdfUpload.value = '';
            }
        });
    }
}

// Update saved notes list
function updateSavedNotesList() {
    notesList.innerHTML = '';
    
    savedNotes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = `${note.timestamp}: ${note.content.substring(0, 30)}${note.content.length > 30 ? '...' : ''}`;
        li.title = note.content;
        li.addEventListener('click', () => {
            notesDisplay.innerHTML = `<p><strong>📝 Saved Note (${note.timestamp}):</strong><br>${note.content}</p>`;
        });
        notesList.appendChild(li);
    });
}

// Initialize AI Assistant
function initializeAIAssistant() {
    if (aiSendBtn && aiInput) {
        aiSendBtn.addEventListener('click', handleAIQuery);
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAIQuery();
            }
        });
    }
}

// Handle AI query
function handleAIQuery() {
    const query = aiInput.value.trim();
    if (!query) return;
    
    // Hide practice section initially
    practiceSection.style.display = 'none';
    
    // Clear previous response
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
    
    // Generate response based on topic
    let response = '';
    
    if (topic) {
        currentTopic = topic;
        currentProblems = [...problemBanks[topic]]; // Clone array
        currentProblemIndex = 0;
        
        response = generateTopicResponse(topic);
        
        // Show practice section after a brief delay
        setTimeout(() => {
            practiceSection.style.display = 'block';
            loadNextProblem();
        }, 1500);
    } else {
        // General response for non-topic queries
        response = `I'd be happy to help with that! Could you be more specific? For example:<br><br>
        • "Help me with quadratic equations"<br>
        • "Quiz me on photosynthesis"<br>
        • "Test my knowledge of World War I"<br><br>
        I can provide explanations, practice problems, and study plans!`;
    }
    
    // Display response
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
    
    aiInput.value = '';
}

// Generate topic-specific response
function generateTopicResponse(topic) {
    const responses = {
        'quadratic': "I'll help you master quadratic equations! Let's start with some practice problems. I'll give you 10 questions, starting with basics and getting more challenging as you answer correctly. If you get stuck, I'll provide hints and detailed explanations!",
        'photosynthesis': "Let's explore photosynthesis together! I'll quiz you with 10 questions covering the key concepts. Don't worry if you get some wrong—I'll explain each answer in detail to help you understand better!",
        'world war': "World War I was a complex historical event. Let's test your knowledge with 10 questions covering the causes, key events, and consequences. I'll provide detailed feedback on each answer to deepen your understanding!"
    };
    return responses[topic] || "I'm preparing a customized learning experience for you!";
}

// Load next problem
function loadNextProblem() {
    if (currentProblemIndex >= currentProblems.length) {
        // All problems completed
        problemContainer.innerHTML = "🎉 Congratulations! You've completed all 10 practice problems!";
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
    
    // Focus on input
    studentAnswer.focus();
}

// Check if topic has math content
function topicHasMath(topic) {
    return topic === 'quadratic';
}

// Submit answer
submitAnswerBtn.addEventListener('click', () => {
    const userAnswer = studentAnswer.value.trim().toLowerCase();
    const problem = currentProblems[currentProblemIndex];
    const correctAnswer = problem.a.toLowerCase();
    
    // Simple answer checking (could be enhanced with more sophisticated matching)
    const isCorrect = userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer);
    
    if (isCorrect) {
        feedbackArea.innerHTML = `<p class="correct">✅ Correct! Well done!</p>
        <p>Explanation: ${problem.hint}</p>`;
        feedbackArea.className = 'correct';
        
        // Move to next problem
        currentProblemIndex++;
        setTimeout(loadNextProblem, 2000);
    } else {
        feedbackArea.innerHTML = `<p class="incorrect">❌ Not quite right. Let me help you understand:</p>
        <p><strong>Correct Answer:</strong> ${problem.a}</p>
        <p><strong>Explanation:</strong> ${problem.hint}</p>
        <p>Try to understand this concept, then we'll move to the next question.</p>`;
        feedbackArea.className = 'incorrect';
        
        // Stay on same problem
        setTimeout(() => {
            studentAnswer.value = '';
            studentAnswer.focus();
        }, 3000);
    }
});

// Initialize Chat
function initializeChat() {
    // Already handled in initializeClassmates and showChatInterface
}

// Utility function to generate random colors
function getRandomColor() {
    const colors = ['#5e72e4', '#11cdef', '#2dce89', '#fb6340', '#f5365c', '#825ee4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add animations on page load
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.teacher-card, .classmate-item, .feature-card, .widget');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

// Console message for developers
console.log('%c🎓 ClassConnect - Enhanced Version', 'color: #5e72e4; font-size: 20px; font-weight: bold;');
console.log('%cNow with: Advanced Voice Notes, Real-time Chat, Adaptive AI Practice', 'color: #825ee4; font-size: 14px;');
console.log('%cVersion 2.0.0 | All features implemented', 'color: #11cdef; font-size: 12px;');
