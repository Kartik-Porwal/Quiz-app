const questions = [
    {
        id: 1,
        category: 'General Knowledge',
        question: 'What is the capital city of Australia?',
        answers:[
           {answer: 'Sydney', isCorrect:false},
           {answer: 'Melbourne', isCorrect:false},
           {answer: 'Canberra', isCorrect:true},
           {answer: 'Brisbane', isCorrect:false},             
        ],
    },
    {
        id: 2,
        category: 'Science',
        question: 'What is the chemical symbol for gold?',
        answers:[
            {answer: 'Au', isCorrect:true},
            {answer: 'Ag', isCorrect:false},
            {answer: 'Fe', isCorrect:false},
            {answer: 'Hg', isCorrect:false},            
        ],
    },
    {
        id: 3,
        category: 'History',
        question: 'Who was the first President of the United States?',
        answers:[
            {answer: 'George Washington', isCorrect:true},
            {answer: 'Thomas Jefferson', isCorrect:false},
            {answer: 'Abraham Lincoln', isCorrect:false},
            {answer: 'John Adams', isCorrect:false},            
        ],
    },
    {
        id: 4,
        category: 'Literature',
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers:[
            {answer: 'William Shakespeare', isCorrect:true},
            {answer: 'Charles Dickens', isCorrect:false},
            {answer: 'Jane Austen', isCorrect:false},
            {answer: 'Mark Twain', isCorrect:false},            
        ],
    },
    {  
        id: 5,
        category: 'Geography',
        question: 'Which continent is the Sahara Desert located on?',
        answers:[
            {answer: 'Asia', isCorrect:false},
            {answer: 'Africa', isCorrect:true},
            {answer: 'North America', isCorrect:false},
            {answer: 'South America', isCorrect:false},            
        ],
    },
    {
        id: 6,
        category: 'Technology',
        question: 'What does HTML stand for?',
        answers:[
           {answer: 'HyperText Markup Language', isCorrect:true},
           {answer: 'HyperText MultiLanguage', isCorrect:false},
           {answer: 'HighText Markup Language', isCorrect:false},
           {answer: 'HyperText Machine Language', isCorrect:false},             
        ],
    },
    {        
        id: 7,
        category: 'Entertainment',
        question: 'Who played Jack Dawson in the movie "Titanic"?',  
        answers:[                       
            {answer: 'Brad Pitt', isCorrect:false},
            {answer: 'Leonardo DiCaprio', isCorrect:true},
            {answer: 'Tom Cruise', isCorrect:false},
            {answer: 'Johnny Depp', isCorrect:false},            
        ],
    },
    {
        id: 8,
        category: 'Mathematics',
        question: 'What is the value of π (pi) to two decimal places?',
        answers:[
            {answer: '3.14', isCorrect:true},
            {answer: '2.14', isCorrect:false},
            {answer: '3.41', isCorrect:false},
            {answer: '4.14', isCorrect:false},             
        ],
    },
    {
        id: 9,
        category: 'Music',
        question: 'Which band released the album "Abbey Road"?',
        answers:[
            {answer: 'The Rolling Stones', isCorrect:false},
            {answer: 'The Beatles', isCorrect:true},
            {answer: 'Led Zeppelin', isCorrect:false},
            {answer: 'The Who', isCorrect:false},            
        ],
    },
    {
        id: 10,
        category: 'Sports',
        question: 'In which sport would you perform a slam dunk?',
        answers:[
            {answer: 'Football', isCorrect:false},
            {answer: 'Baseball', isCorrect:true},
            {answer: 'Basketball', isCorrect:false},
            {answer: 'Volleyball', isCorrect:false},            
        ],
    },
];

export default questions;