const courses = {
    anatomy: [
        { question: "What is the largest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Radius"], answer: "Femur" },

        { question: "Which of the following muscular valve controls the flow of digestive juice from the hepatopancreatic duct to the duodenum?", options: ["Sphincter of Oddi", "Semilunar valve", "Ileocaecal valve", "Pyloric sphincter"], answer: "Sphincter of Oddi" },

        { question: "Lungs are enclosed within?", options: ["Perichondrium", "Periosteum", "Pleural membrane", "Pericardium"], answer: "Pleural membrane" },

        { question: "Which of the following organs is known as the “graveyard” of RBCs??", options: ["Spleen", "Kidney", "Liver", "Gall bladder"], answer: "Spleen" },

        { question: "Which of the following organs contains the ‘Bundle of His’?", options: ["Pancreas", "Brain", "Kidney", "Heart"], answer: "Heart" },

        { question: "The middle portion of the human sperm contains?", options: ["Nucleus", "Proteins", "Centriole", "Mitochondria"], answer: "Mitochondria" },

        { question: "Which of the following is a part of the hindbrain?", options: ["Hypothalamus", "Cerebellum", "Spinal cord", "Corpus callosum"], answer: "Cerebellum" },

        { question: "Which of the following parts of the brain controls body temperature and hunger?", options: ["Thalamus", "Pons", "Cerebellum", "Hypothalamus"], answer: "Hypothalamus" },

        { question: "Which of the following parts acts as an endocrine gland after ovulation?", options: ["Vitelline membrane", "Stroma", "Germinal epithelium", "Graafian follicle"], answer: "Graafian follicle" },

        { question: "A deltoid ridge is present in", options: ["Humerus", "Femur", "Radius", "Ulna"], answer: "Humerus" },
    ],
    biochemistry: [
        { question: "What is the main molecule for energy storage in animals?", options: ["Glucose", "Glycogen", "Cellulose", "Starch"], answer: "Glycogen" },
        
        { question: "α-D-glucose and β -D-glucose are?", options: ["Stereoisomers", "Epimers", "Anomers", "Keto-aldo pairs"], answer: "Anomers" },
        
        { question: "The number of isomers of glucose is?", options: ["2", "4", "8", "16"], answer: "16" },
        
        { question: "A pentose sugar is?", options: ["Dihydroxyacetone", "Ribulose", "Erythrose", "Glucose"], answer: "Ribulose" },
        
        { question: "Osazones are not formed with the?", options: ["Glucose", "fructose", "sucrose", "lactose"], answer: "sucrose" },
        
        { question: "Debranching enzyme is absent in?", options: ["Cori’s disease", "Andersen’s disease", "Von Gierke’s disease", "Her’s disease"], answer: "Cori’s disease" },
        
        { question: "Long chain fatty acids are first activated to acetyl-CoA in?", options: ["Cytosol", "Microsomes", "Nucleus", "Mitochondria"], answer: "Cytosol" },
        
        { question: "The optically inactive amino acid is?", options: ["Glycine", "Serine", "Threonine", "Valine"], answer: "Glycine" },
        
        { question: "Gluconeogenesis is increased in the following condition?", options: ["Diabetes insipidus", "Diabetes Mellitus", "Hypothyroidism", "Liver diseases"], answer: "Diabetes Mellitus" },
        
        { question: "Glycogen is converted to glucose-1-phosphate by?", options: ["UDPG transferase", "Branching enzyme", "Phosphorylase", "Phosphatase"], answer: "Phosphorylase" },
        
    ],
    physiology: [
        { question: "The properties of nerve fibers include?", options: ["Excitability", "Conductivity", "Refractory period", "All or none law", "All of the above"], answer: "All of the above" },
        
        { question: "One of the following statement about cardiac muscles is incorrect?", options: ["Form musculature of the heart", "Are striated and involuntary muscles", "are supplied by both sympathetic and parasympathetic nerves", "are supplied by somatic nerves also", "their sarcotubular system is well developed"], answer: "are supplied by somatic nerves also" },
        
        { question: "What is the primary function of red blood cells?", options: ["Transport oxygen", "Fight infections", "Clot blood", "Digest food"], answer: "Transport oxygen" },
        
        { question: "Hypopnea is a condition where", options: ["The airway becomes partially obstructed", "The blood does not clot properly", "The lungs cannot eliminate the excess carbon dioxide from the body", "The blood oxygen levels are abnormally low"], answer: "The airway becomes partially obstructed" },
        
        { question: "Where are the parotid glands located?", options: ["Below the stomach", "Behind and above the pancreas", "Below and in front of the ear canal", "Underneath the armpits"], answer: "Below and in front of the ear canal" },
        
        { question: "Which of the following statements are false?", options: ["Pituitary Gland is found at the base of the brain", "Adrenal glands are found on top of the kidneys", "Lymph nodes are found only near the neck and armpits", "Thyroid glands are ductless glands"], answer: "Lymph nodes are found only near the neck and armpits" },
        
        { question: "The primary function of the cerebrospinal fluid is to?", options: ["Protect the brain", "Provide nutrients to the surrounding tissues", "Remove waste products", "All of the above"], answer: "All of the above" },
        
        { question: "Humans have _____ lobes in the left lung?", options: ["3", "2", "4", "1"], answer: "2" },
        
        { question: "______are functional units of food absorption?", options: ["Red blood cells", "Small intestine", "Villi", "Aggregated lymphoid nodules"], answer: "Villi" },
        
        { question: "The series of events at the neuromuscular junction include the following except?", options: ["release of acetylcholine", "action of acetylcholine", "development of endplate potential", "development of miniature endplate potential", "retention of acetylcholine at the synaptic cleft"], answer: "retention of acetylcholine at the synaptic cleft" },
        
    ]
};


document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course');
    
    if (course && courses[course]) {
        if (window.location.pathname.endsWith('questions.html')) {
            loadQuestions(course);
            startTimer(60);
            document.getElementById('submit-button')?.addEventListener('click', submitAnswers);
        } else if (window.location.pathname.endsWith('results.html')) {
            displayResults(course);
            setAnswersLink(course);
        }
    } else {
        console.error("Invalid course parameter or course not found in the list.");
    }
});

function loadQuestions(course) {
    const courseTitle = course.charAt(0).toUpperCase() + course.slice(1);
    document.getElementById('course-title').textContent = courseTitle;
    
    const questionsContainer = document.getElementById('questions-container');
    courses[course].forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionTitle);

        question.options.forEach(option => {
            const optionElement = document.createElement('div');
            
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${index}`;
            optionInput.value = option;
            
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            
            optionElement.appendChild(optionInput);
            optionElement.appendChild(optionLabel);
            
            questionElement.appendChild(optionElement);
        });

        questionsContainer.appendChild(questionElement);
    });
}

function startTimer(duration) {
    let timer = duration;
    const display = document.getElementById('time');
    const interval = setInterval(() => {
        display.textContent = timer;
        if (--timer < 0) {
            clearInterval(interval);
            submitAnswers();
        }
    }, 1000);
}

function submitAnswers() {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course');
    const questions = courses[course];
    let score = 0;
    let userAnswers = [];
    let correctAnswers = [];

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === question.answer) {
                score++;
            }
        } else {
            userAnswers.push("No answer selected");
        }
        correctAnswers.push(question.answer);
    });

    localStorage.setItem('score', score);
    localStorage.setItem('total', questions.length);
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));

    window.location.href = `results.html?course=${course}`;
}

function displayResults(course) {
    const score = localStorage.getItem('score');
    const total = localStorage.getItem('total');
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = `<p>You scored ${score} out of ${total}</p>`;

    courses[course].forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = correctAnswers[index];
        const result = document.createElement('div');
        result.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Your answer: ${userAnswer}</p>
            <p>Correct answer: ${correctAnswer}</p>
        `;
        resultsContainer.appendChild(result);
    });
}

function setAnswersLink(course) {
    const answersLink = document.getElementById('answers-link');
    if (course) {
        answersLink.href = `${course}_answers.html`;
    } else {
        answersLink.href = '#'; // Fallback if no course is specified
    }
}


