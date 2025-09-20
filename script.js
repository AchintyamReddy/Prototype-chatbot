// ClassConnect - Educational Communication Platform
// JavaScript functionality for student-teacher communication app

// Sample data for teachers with image placeholders
const teachers = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        subjects: ["Physics", "Advanced Math"],
        grade: "Grade 8",
        initials: "SJ",
        color: "#5e72e4",
        image: "media/teachers/sarah-johnson.jpg" // Image path in media folder
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

// Sample data for classmates with image placeholders
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

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeTeachers();
    initializeClassmates();
    initializeStudentProfile();
    initializeAIChat();
});

// Navigation functionality
function initializeNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.getAttribute('data-page');
            switchPage(targetPage);
            
            // Update active state
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
}

// Initialize student profile interaction
function initializeStudentProfile() {
    if (studentProfile) {
        studentProfile.addEventListener('click', () => {
            teachersSection.classList.toggle('show');
            
            // Smooth scroll to teachers section
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
    
    // Add click event for future functionality
    card.addEventListener('click', () => {
        showTeacherDetails(teacher);
    });
    
    return card;
}

// Show teacher details (placeholder for future functionality)
function showTeacherDetails(teacher) {
    console.log('Teacher clicked:', teacher.name);
    // Future: Open modal or navigate to teacher's profile
    alert(`Viewing ${teacher.name}'s profile - Feature coming soon!`);
}

// Initialize classmates list
function initializeClassmates() {
    renderClassmates(classmates);
    
    // Add search functionality
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
    
    // Add click event for chat
    item.addEventListener('click', () => {
        startChat(classmate);
    });
    
    return item;
}

// Start chat with classmate (placeholder)
function startChat(classmate) {
    const chatMain = document.querySelector('.chat-main');
    if (chatMain) {
        chatMain.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>Chat with ${classmate.name}</h3>
                <p style="color: #8898aa; margin-top: 10px;">
                    Chat functionality coming soon! You'll be able to message ${classmate.name} directly.
                </p>
                <p style="margin-top: 20px;">
                    <span style="display: inline-block; padding: 6px 12px; background: ${classmate.status === 'online' ? '#2dce89' : classmate.status === 'idle' ? '#fb6340' : '#8898aa'}; color: white; border-radius: 20px; font-size: 12px;">
                        ${classmate.status.toUpperCase()}
                    </span>
                </p>
            </div>
        `;
    }
}

// Initialize AI Chat
function initializeAIChat() {
    const sendBtn = document.querySelector('.send-btn');
    
    if (sendBtn && aiInput) {
        sendBtn.addEventListener('click', handleAIQuery);
        
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
    
    // Simulate AI response
    const responses = {
        'photosynthesis': 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar. It happens in the chloroplasts of plant cells!',
        'quadratic': 'A quadratic equation has the form ax² + bx + c = 0. You can solve it using the quadratic formula: x = [-b ± √(b² - 4ac)] / 2a',
        'world war': 'World War I was caused by a complex mix of factors including nationalism, imperialism, militarism, and the alliance system. The immediate trigger was the assassination of Archduke Franz Ferdinand in 1914.',
        'essay': 'A compelling essay introduction should: 1) Hook the reader with an interesting fact or question, 2) Provide context for your topic, 3) Present your thesis statement clearly.'
    };
    
    let response = "I'm analyzing your question...";
    
    // Check for keywords
    for (let key in responses) {
        if (query.toLowerCase().includes(key)) {
            response = responses[key];
            break;
        }
    }
    
    // If no keyword match, provide generic response
    if (response === "I'm analyzing your question...") {
        response = `Great question about "${query}"! This feature is currently in beta. Soon, I'll be able to help you with detailed explanations, step-by-step solutions, and personalized learning assistance. Stay tuned!`;
    }
    
    // Display response
    if (aiResponse) {
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
    }
    
    // Clear input
    aiInput.value = '';
}

// Utility function to generate random colors
function getRandomColor() {
    const colors = ['#5e72e4', '#11cdef', '#2dce89', '#fb6340', '#f5365c', '#825ee4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add some animations on page load
window.addEventListener('load', () => {
    // Animate elements on load
    const elements = document.querySelectorAll('.teacher-card, .classmate-item, .feature-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 50);
    });
});

// Console message for developers
console.log('%c🎓 ClassConnect - Connect. Learn. Grow.', 'color: #5e72e4; font-size: 20px; font-weight: bold;');
console.log('%cBringing students and teachers together', 'color: #825ee4; font-size: 14px;');
console.log('%cVersion 1.0.0 | Ready for deployment on Vercel', 'color: #11cdef; font-size: 12px;');
console.log('%cMedia folder structure:', 'color: #2dce89; font-size: 12px;');
console.log('%c├── media/', 'color: #8898aa; font-size: 11px;');
console.log('%c│   ├── logo.png', 'color: #8898aa; font-size: 11px;');
console.log('%c│   ├── favicon.ico', 'color: #8898aa; font-size: 11px;');
console.log('%c│   ├── students/', 'color: #8898aa; font-size: 11px;');
console.log('%c│   │   ├── alex-smith.jpg', 'color: #8898aa; font-size: 11px;');
console.log('%c│   │   └── [other student photos]', 'color: #8898aa; font-size: 11px;');
console.log('%c│   └── teachers/', 'color: #8898aa; font-size: 11px;');
console.log('%c│       └── [teacher photos]', 'color: #8898aa; font-size: 11px;');
