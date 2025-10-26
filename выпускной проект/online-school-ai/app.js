// Data
const coursesData = [
  {
    id: 1,
    title: "Математика 5-9 класс",
    description: "Углубленное изучение школьной математики с индивидуальным подходом. Подготовка к контрольным и олимпиадам.",
    duration: "8 месяцев",
    price: "5500 руб/мес",
    age: "11-15 лет",
    category: "Школьные предметы"
  },
  {
    id: 2,
    title: "Английский язык для начинающих",
    description: "Интенсивный курс английского языка с носителями. Разговорная практика и грамматика.",
    duration: "6 месяцев",
    price: "6000 руб/мес",
    age: "8-12 лет",
    category: "Языки"
  },
  {
    id: 3,
    title: "Программирование Python",
    description: "Изучение основ программирования на Python. Создание игр и полезных программ.",
    duration: "10 месяцев",
    price: "7500 руб/мес",
    age: "12-17 лет",
    category: "IT"
  },
  {
    id: 4,
    title: "Подготовка к ЕГЭ",
    description: "Комплексная подготовка к ЕГЭ по математике и русскому языку. Практика на реальных заданиях.",
    duration: "12 месяцев",
    price: "8000 руб/мес",
    age: "16-18 лет",
    category: "Школьные предметы"
  },
  {
    id: 5,
    title: "Искусство и дизайн",
    description: "Развитие творческих способностей. Рисование, цифровой дизайн, основы композиции.",
    duration: "6 месяцев",
    price: "4500 руб/мес",
    age: "10-16 лет",
    category: "Творчество"
  },
  {
    id: 6,
    title: "Физика и химия",
    description: "Наглядное изучение физики и химии с интересными экспериментами и практическими заданиями.",
    duration: "9 месяцев",
    price: "6500 руб/мес",
    age: "13-17 лет",
    category: "Школьные предметы"
  }
];

const scheduleData = [
  {
    day: "Понедельник",
    lessons: [
      { time: "14:00-15:30", subject: "Математика 5-9 класс", teacher: "Иванова М.А." },
      { time: "16:00-17:30", subject: "Английский язык", teacher: "Smith J." },
      { time: "18:00-19:30", subject: "Программирование Python", teacher: "Петров С.В." }
    ]
  },
  {
    day: "Вторник",
    lessons: [
      { time: "14:00-15:30", subject: "Физика и химия", teacher: "Сидорова Е.И." },
      { time: "16:00-17:30", subject: "Подготовка к ЕГЭ", teacher: "Козлов А.П." },
      { time: "18:00-19:30", subject: "Искусство и дизайн", teacher: "Новикова О.С." }
    ]
  },
  {
    day: "Среда",
    lessons: [
      { time: "14:00-15:30", subject: "Математика 5-9 класс", teacher: "Иванова М.А." },
      { time: "16:00-17:30", subject: "Программирование Python", teacher: "Петров С.В." },
      { time: "18:00-19:30", subject: "Английский язык", teacher: "Smith J." }
    ]
  },
  {
    day: "Четверг",
    lessons: [
      { time: "14:00-15:30", subject: "Подготовка к ЕГЭ", teacher: "Козлов А.П." },
      { time: "16:00-17:30", subject: "Физика и химия", teacher: "Сидорова Е.И." },
      { time: "18:00-19:30", subject: "Искусство и дизайн", teacher: "Новикова О.С." }
    ]
  },
  {
    day: "Пятница",
    lessons: [
      { time: "14:00-15:30", subject: "Английский язык", teacher: "Smith J." },
      { time: "16:00-17:30", subject: "Математика 5-9 класс", teacher: "Иванова М.А." },
      { time: "18:00-19:30", subject: "Программирование Python", teacher: "Петров С.В." }
    ]
  }
];

let reviewsData = [
  {
    id: 1,
    name: "Анна Смирнова",
    course: "Математика 5-9 класс",
    rating: 5,
    text: "Отличная школа! Дочь за полгода значительно улучшила оценки по математике. Преподаватель объясняет очень понятно и доступно."
  },
  {
    id: 2,
    name: "Михаил Петров",
    course: "Программирование Python",
    rating: 5,
    text: "Сын в восторге от курса программирования. Уже создал свою первую игру! Преподаватель настоящий профессионал."
  },
  {
    id: 3,
    name: "Елена Васильева",
    course: "Английский язык",
    rating: 5,
    text: "Занимаемся английским уже 4 месяца. Прогресс очевиден! Ребенок начал свободно говорить и понимать речь."
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    course: "Подготовка к ЕГЭ",
    rating: 5,
    text: "Готовимся к ЕГЭ с этой школой. Систематизировали знания, разобрали все сложные темы. Очень доволен!"
  },
  {
    id: 5,
    name: "Ольга Новикова",
    course: "Искусство и дизайн",
    rating: 4,
    text: "Дочь увлеклась рисованием и дизайном. Курс помог раскрыть творческий потенциал. Рекомендую!"
  },
  {
    id: 6,
    name: "Сергей Иванов",
    course: "Физика и химия",
    rating: 5,
    text: "Наконец-то сын полюбил физику и химию! Преподаватель проводит интересные эксперименты, все понятно и увлекательно."
  },
  {
    id: 7,
    name: "Мария Соколова",
    course: "Математика 5-9 класс",
    rating: 5,
    text: "Индивидуальный подход к каждому ребенку - это то, что нам нужно было. Спасибо за качественное обучение!"
  },
  {
    id: 8,
    name: "Александр Морозов",
    course: "Программирование Python",
    rating: 4,
    text: "Хороший курс для начинающих программистов. Ребенок научился создавать свои проекты с нуля."
  }
];

const chatbotKnowledge = {
  courses: {
    keywords: ['курс', 'курсы', 'предмет', 'обучение', 'учеба', 'что изучать', 'доступн'],
    answer: "В нашей онлайн-школе доступны следующие курсы:\n\n📚 Школьные предметы:\n- Математика 5-9 класс\n- Подготовка к ЕГЭ\n- Физика и химия\n\n🌍 Языки:\n- Английский язык для начинающих\n\n💻 IT:\n- Программирование Python\n\n🎨 Творчество:\n- Искусство и дизайн\n\nПодробнее о каждом курсе можно узнать на странице 'Курсы'."
  },
  prices: {
    keywords: ['цена', 'стоимость', 'сколько стоит', 'оплата', 'деньги', 'руб'],
    answer: "Стоимость обучения зависит от курса:\n- Математика 5-9 класс: 5500 руб/мес\n- Английский язык: 6000 руб/мес\n- Программирование Python: 7500 руб/мес\n- Подготовка к ЕГЭ: 8000 руб/мес\n- Искусство и дизайн: 4500 руб/мес\n- Физика и химия: 6500 руб/мес\n\nПервое занятие бесплатное!"
  },
  schedule: {
    keywords: ['расписание', 'когда', 'время', 'занятия', 'уроки', 'график'],
    answer: "Занятия проходят с понедельника по пятницу с 14:00 до 20:00. Конкретное время зависит от выбранного курса. Подробное расписание можно посмотреть на странице 'Расписание'. По выходным возможны индивидуальные занятия по запросу."
  },
  format: {
    keywords: ['формат', 'как проходит', 'онлайн', 'zoom', 'платформа', 'дистанционно'],
    answer: "Мы проводим онлайн-уроки в Zoom в мини-группах до 8 человек. Все занятия записываются и доступны в личном кабинете. Домашние задания выполняются на нашей платформе. Также предусмотрены индивидуальные консультации с преподавателем."
  },
  enrollment: {
    keywords: ['записаться', 'запись', 'зарегистрироваться', 'начать', 'присоединиться', 'поступить'],
    answer: "Для записи на курс:\n1. Заполните форму на сайте в разделе 'Контакты'\n2. Напишите нам на email: info@onlineschool.ru\n3. Позвоните по телефону: +7 (495) 123-45-67\n\nНаш менеджер свяжется с вами в течение 24 часов и ответит на все вопросы."
  },
  teachers: {
    keywords: ['преподаватель', 'учитель', 'педагог', 'кто учит', 'квалификация'],
    answer: "У нас работают опытные педагоги с профильным высшим образованием и стажем от 5 лет. Все преподаватели регулярно проходят курсы повышения квалификации. Многие имеют международные сертификаты и являются экспертами в своей области."
  },
  greeting: {
    keywords: ['привет', 'здравствуй', 'добрый день', 'хай', 'hello'],
    answer: "Здравствуйте! Рад помочь вам с информацией о нашей онлайн-школе. Задавайте любые вопросы о курсах, расписании или записи!"
  }
};

// Navigation
function navigateToPage(pageName) {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  pages.forEach(page => page.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));
  mobileNavLinks.forEach(link => link.classList.remove('active'));
  
  document.getElementById(pageName).classList.add('active');
  
  const activeNavLink = document.querySelector(`[data-page="${pageName}"]`);
  if (activeNavLink) {
    activeNavLink.classList.add('active');
  }
  
  // Close mobile menu
  document.getElementById('mobileMenu').classList.remove('active');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render courses
function renderCourses(filter = 'all') {
  const coursesGrid = document.getElementById('coursesGrid');
  const filteredCourses = filter === 'all' ? coursesData : coursesData.filter(c => c.category === filter);
  
  coursesGrid.innerHTML = filteredCourses.map(course => `
    <div class="course-card">
      <span class="course-category">${course.category}</span>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="course-details">
        <div class="course-detail-item">⏱️ ${course.duration}</div>
        <div class="course-detail-item">👥 ${course.age}</div>
      </div>
      <div class="course-price">${course.price}</div>
      <button class="btn btn--primary btn--full-width" onclick="navigateToPage('contact')">Записаться</button>
    </div>
  `).join('');
}

// Render schedule
function renderSchedule() {
  const scheduleContainer = document.getElementById('scheduleContainer');
  
  scheduleContainer.innerHTML = scheduleData.map(day => `
    <div class="schedule-day">
      <div class="schedule-day-header">${day.day}</div>
      <div class="schedule-lessons">
        ${day.lessons.map(lesson => `
          <div class="schedule-lesson">
            <div class="lesson-time">${lesson.time}</div>
            <div class="lesson-subject">${lesson.subject}</div>
            <div class="lesson-teacher">${lesson.teacher}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render reviews
function renderReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  
  reviewsGrid.innerHTML = reviewsData.map(review => {
    const initials = review.name.split(' ').map(n => n[0]).join('');
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    return `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${initials}</div>
          <div class="review-author">
            <h4>${review.name}</h4>
            <div class="review-course">${review.course}</div>
          </div>
        </div>
        <div class="review-rating">${stars}</div>
        <p class="review-text">${review.text}</p>
      </div>
    `;
  }).join('');
}

// Populate course select in review form
function populateCourseSelect() {
  const select = document.getElementById('reviewCourse');
  coursesData.forEach(course => {
    const option = document.createElement('option');
    option.value = course.title;
    option.textContent = course.title;
    select.appendChild(option);
  });
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notificationText');
  
  notificationText.textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Chatbot functions
function toggleChatbot() {
  const chatbotWindow = document.getElementById('chatbotWindow');
  chatbotWindow.classList.toggle('active');
  
  if (chatbotWindow.classList.contains('active')) {
    scrollChatToBottom();
  }
}

function scrollChatToBottom() {
  const messagesContainer = document.getElementById('chatbotMessages');
  setTimeout(() => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 100);
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function addMessage(text, isUser = false) {
  const messagesContainer = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  
  messageDiv.innerHTML = `
    <div class="message-content">
      <p>${text.replace(/\n/g, '<br>')}</p>
      <span class="message-time">${getCurrentTime()}</span>
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  scrollChatToBottom();
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chatbotMessages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  
  messagesContainer.appendChild(typingDiv);
  scrollChatToBottom();
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function getBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check each knowledge category
  for (const [key, knowledge] of Object.entries(chatbotKnowledge)) {
    if (knowledge.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return knowledge.answer;
    }
  }
  
  // Default response
  return "Извините, я не совсем понял ваш вопрос. Я могу помочь с информацией о:\n- Курсах и программах обучения\n- Ценах и стоимости\n- Расписании занятий\n- Процессе записи\n- Формате обучения\n- Преподавателях\n\nТакже вы можете связаться с нашим менеджером через форму на странице 'Контакты' или по телефону +7 (495) 123-45-67.";
}

function sendMessage(message) {
  if (!message.trim()) return;
  
  // Add user message
  addMessage(message, true);
  
  // Clear input
  document.getElementById('chatbotInputField').value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  // Simulate delay and send bot response
  setTimeout(() => {
    removeTypingIndicator();
    const response = getBotResponse(message);
    addMessage(response, false);
  }, 1500);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize
  renderCourses();
  renderSchedule();
  renderReviews();
  populateCourseSelect();
  
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
    });
  });
  
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
    });
  });
  
  // Mobile menu toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('active');
  });
  
  // Course filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      renderCourses(filter);
    });
  });
  
  // Star rating
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.getAttribute('data-rating'));
      document.getElementById('reviewRating').value = rating;
      
      document.querySelectorAll('.star').forEach(s => {
        const starRating = parseInt(s.getAttribute('data-rating'));
        if (starRating <= rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });
  
  // Set initial star rating to 5
  document.querySelectorAll('.star').forEach(s => s.classList.add('active'));
  
  // Review form
  document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newReview = {
      id: reviewsData.length + 1,
      name: document.getElementById('reviewName').value,
      course: document.getElementById('reviewCourse').value,
      rating: parseInt(document.getElementById('reviewRating').value),
      text: document.getElementById('reviewText').value
    };
    
    reviewsData.unshift(newReview);
    renderReviews();
    
    e.target.reset();
    document.querySelectorAll('.star').forEach(s => s.classList.add('active'));
    
    showNotification('Спасибо за ваш отзыв!');
  });
  
  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    showNotification('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    e.target.reset();
  });
  
  // Chatbot
  document.getElementById('chatbotButton').addEventListener('click', toggleChatbot);
  document.getElementById('chatbotClose').addEventListener('click', toggleChatbot);
  
  document.getElementById('chatbotSendBtn').addEventListener('click', () => {
    const input = document.getElementById('chatbotInputField');
    sendMessage(input.value);
  });
  
  document.getElementById('chatbotInputField').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage(e.target.value);
    }
  });
  
  // Quick questions
  document.querySelectorAll('.quick-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.getAttribute('data-question');
      const questionText = btn.textContent;
      
      addMessage(questionText, true);
      showTypingIndicator();
      
      setTimeout(() => {
        removeTypingIndicator();
        const response = chatbotKnowledge[question].answer;
        addMessage(response, false);
      }, 1500);
    });
  });
});