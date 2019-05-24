// creates variable questionBank that contains an array of questions as objects 
var questionBank = [
    // higher ed stats
    {
        question: "Which institution had the highest enrollment in the US in fall 2015, with 165,743 students?",
        answers: ["Ivy Tech CC", "Houston CC", "University of Phoenix", "Liberty University"],
        correctIndex: 2
    },
    {
        question: "Which institution had the 4th highest enrollment in the US in fall 2015 with 70,724 students?",
        answers: ["Ivy Tech CC", "Lone Star College", "Liberty University", "Miami Dade College"],
        correctIndex: 1
    },
    {
        question: "What percentage of students who entered a 4-year degree-granting institution graduated within 6 years?",
        answers: ["80%", "70%", "60%","50%"],
        correctIndex: 2
    },
    {
        question: "What percentage of students who entered OPEN-ENROLLMENT 4-year institutions graduated with a bachelor's degree within 6 years?",
        answers: ["61%", "49%", "39%","32%"],
        correctIndex: 3
    },
    {
        question: "What percentage of students who entered PUBLIC institutions graduated with a bachelor's degree within 6 years?",
        answers: ["66%", "59%", "39%","26%"],
        correctIndex: 1
    },
    {
        question: "What percentage of students who entered PRIVATE NON-PROFIT institutions graduated with a bachelor's degree within 6 years?",
        answers: ["66%", "59%", "39%","26%"],
        correctIndex: 0
    },
    {
        question: "What percentage of students who entered FOR-PROFIT institutions graduated with a bachelor's degree within 6 years?",
        answers: ["66%", "59%", "39%","26%"],
        correctIndex: 3
    },
    {
        question: "What percentage of WHITE 25-29 year olds in the US in 2017 had received a Bachelor's Degree or higher?",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 1
    },
    {
        question: "What percentage of BLACK 25-29 year olds in the US in 2017 had received a Bachelor's Degree or higher?",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 2
    },
    {
        question: "What percentage of HISPANIC 25-29 year olds in the US in 2017 had received a Bachelor's Degree or higher?",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 3
    },
    {
        question: "What percentage of ASIAN 25-29 year olds in the US in 2017 had received a Bachelor's Degree or higher?",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 0
    },
    {
        question: "What percentage of undergraduate students had enrolled exclusively in distance learning course in 2015?",
        answers: ["14%", "10%","6%"],
        correctIndex: 0
    },
    {
        question: "What percentage of undergraduate students had not taken a distance learning course in 2015?",
        answers: ["70%", "50%", "30%"],
        correctIndex: 0
    },
    {
        question: "What percentage of undergraduate students reported having a disability in 2011?",
        answers: ["3%", "7%","11%"],
        correctIndex: 2
    },
    {
        question: "What is the average conversion rate from intern to full-time hire?",
        answers: ["60%", "45%", "30%","15%"],
        correctIndex: 1
    },
    {
        question: "On average, how many months in advance of start date do employers begin recruting interns?",
        answers: ["1 month", "4 months", "8 months"],
        correctIndex: 2
    },
    {
        question: "What is the average annual salary of the class of 2018 graduates?",
        answers: ["$30,000", "$40,000", "$50,000","$60,000"],
        correctIndex: 2
    },
    {
        question: "What percentage of college seniors have internship experience?",
        answers: ["25%", "40%", "55%"],
        correctIndex: 2
    },
    {
        question: "What percentage of employers deem critical thinking/problem solving as very extremely essential in new hires?",
        answers: ["80%", "90%", "100%"],
        correctIndex: 2
    },
    {
        question: "What percentage of career centers offer for-credit classes?",
        answers: ["72%", "42%", "12%"],
        correctIndex: 1
    },
    {
        question: "What percentage of career centers are housed in student affairs?",
        answers: ["49%", "29%", "9%"],
        correctIndex: 0
    },
    {
        question: "What is the median number of professional career services staff at an institution?",
        answers: ["33", "23", "13","3"],
        correctIndex: 3
    },
    //Quotes
    {
        question: "Who said the following: \"Follow your passion, stay true to yourself, and never follow someone else's path--unless you're in the woods and you're lost and you see a path, then by all means you should follow that.\"",
        answers: ["Maya Angelou", "Ellen DeGeneres", "Benjamin Franklin","Michael Jordan"],
        correctIndex: 1
    },
    {
        question: "Who said the following: \"...[W]e may encounter many defeats but we must not be defeated.\"",
        answers: ["Maya Angelou", "Ellen DeGeneres", "Benjamin Franklin","Michael Jordan"],
        correctIndex: 0
    },
    {
        question: "Who said the following: \"...[D]o not squander time; for that’s the stuff life is made of.\"",
        answers: ["Maya Angelou", "Ellen DeGeneres", "Benjamin Franklin","Michael Jordan"],
        correctIndex: 2
    },
    {
        question: "Who said the following: \"...[R]eal learning, deep learning—is playful and frustrating and joyful and discouraging and exciting and sociable and private all at the same time, which is what makes it great.\"",
        answers: ["Eleanor Duckworth", "Theodor Geisel (Dr. Seuss)", "Jodi Picoult","Michael Jordan"],
        correctIndex: 0
    },
    {
        question: "Who said the following: \"Talent wins games, but teamwork and intelligence win championships.\"",
        answers: ["Eleanor Duckworth", "Theodor Geisel (Dr. Seuss)", "Jodi Picoult","Michael Jordan"],
        correctIndex: 3
    },
    {
        question: "Who said the following: \"The more that you read, the more things you will know. The more that you learn, the more places you'll go.\"",
        answers: ["Eleanor Duckworth", "Theodor Geisel (Dr. Seuss)", "Jodi Picoult","Michael Jordan"],
        correctIndex: 1
    },
    {
        question: "Who said the following: \"The person who gets where he wants easily may not break a sweat — but he also will not have a story that inspires change — or that inspires others.\"",
        answers: ["Eleanor Duckworth", "Theodor Geisel (Dr. Seuss)", "Jodi Picoult", "Michael Jordan"],
        correctIndex: 2
    },
    {
        question: "Who said the following: \"Until I learned how to use my lecture notes to prepare for tests, I was failing all of them.\"",
        answers: ["John Gardner", "Kofi Annan", "John F. Kennedy", "Roger Ebert"],
        correctIndex: 0
    },
    {
        question: "Who said the following: \"Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.\"",
        answers: ["John Gardner", "Kofi Annan", "John F. Kennedy", "Roger Ebert"],
        correctIndex: 1
    },
    {
        question: "Who said the following: \"Too often…we enjoy the comfort of opinion without the discomfort of thought.\"",
        answers: ["John Gardner", "Kofi Annan", "John F. Kennedy", "Roger Ebert"],
        correctIndex: 2
    },
    {
        question: "Who said the following: \"Racism and all the other 'isms' grow from primitive tribalism, the instinctive hostility against those of another tribe, race, religion, nationality, class, or whatever. You are a lucky [person] if your parents taught you to accept diversity.\"",
        answers: ["John Gardner", "Kofi Annan", "John F. Kennedy", "Roger Ebert"],
        correctIndex: 3
    },
    {
        question: "Who said the following: \"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.\"",
        answers: ["John Gardner", "Kofi Annan", "John F. Kennedy", "Steve Jobs"],
        correctIndex: 3
    },
    // Academic Stats
    {
        question: "___ % of two-year college students report that they have worked “harder than they thought they could” to meet instructor expectations.",
        answers: ["34%", "54%"],
        correctIndex: 1
    },
    {
        question: "___ % of first-year students report that they are “above average” in emotional health.",
        answers: ["47%", "37%", "27%"],
        correctIndex: 0
    },
    {
        question: "On a typical weekday, full-time college students spend ____ hours on educational activities, 2.3 hours working, 8.8 hours sleeping, and 4.0 hours on leisure/sports activities.",
        answers: ["1.5", "3.5", "5.5"],
        correctIndex: 1
    },
    {
        question: "The unemployment rate for young people ages 21-25 without a college degree is ___ times as high as for those with a college degree.",
        answers: ["1", "2", "3"],
        correctIndex: 2
    },
    {
        question: "___ % of new students report that during the current year, they often or very often “asked questions or contributed to course discussions in other ways.",
        answers: ["31%", "61%"],
        correctIndex: 1
    },
    {
        question: "___ % of students report that they always complete readings and assignments before coming to class.",
        answers: ["14%", "34%", "64%"],
        correctIndex: 1
    },
    {
        question: "___ % of community college students report that their college encourages them to spend \"significant amounts of time studying.\"",
        answers: ["25%", "50%", "75%", "90%"],
        correctIndex: 2
    },
    {
        question: "___ % of community college students report that they had \"learned skills and strategies to improve [their] test-taking ability\" within the first three weeks of college.",
        answers: ["17%", "37%", "57%"],
        correctIndex: 2
    },
    {
        question: "___ % of community college students report that in the current year, their coursework has emphasized \"making judgments about the value or soundness of information, arguments, or methods.\"",
        answers: ["36%", "56%", "76%"],
        correctIndex: 1
    },
    {
        question: "Just over ___ % of community college students report that, during the current year, they often or very often have “prepared two or more drafts of a paper or assignment before turning it in",
        answers: ["10%", "30%", "50%", "80%"],
        correctIndex: 2
    },
    {
        question: "___ % of undergraduate students report that stress has had a negative effect on their academic performance.",
        answers: ["15%", "25%", "35%"],
        correctIndex: 2
    },
    // Career Stats
    {
        question: "___ % of two-year college students have visited an academic adviser, while only ___ % have visited a career counselor.",
        answers: ["84%, 37%", "50%, 40%"],
        correctIndex: 0
    },
    {
        question: "___ % of employers look for job candidates who demonstrate flexibility/adaptability on their resume.",
        answers: ["61%", "41%", "21%"],
        correctIndex: 0
    },
    {
        question: "___/5: Rating employers gave for the importance of being able to plan, organize, and prioritize work.",
        answers: ["1.4", "2.4", "3.4", "4.4"],
        correctIndex: 3
    },
    {
        question: "College graduates are more satisfied with their jobs and their education than high school graduates.",
        answers: ["true", "false"],
        correctIndex: 0
    },
    {
        question: "70.1% of employers consider students to be very or extremely skilled at teamwork.",
        answers: ["true", "false"],
        correctIndex: 0
    },
    {
        question: "4 to 5 is the average number of books read per month by CEOs of Fortune 500 companies. (That’s 48 to 60 books a year).",
        answers: ["true", "false"],
        correctIndex: 0
    },
    {
        question: "___ % of working Americans are \"professional learners\" who took a course or got training for their jobs in the last year.",
        answers: ["23%", "43%", "63%"],
        correctIndex: 2
    },
    {
        question: "___ % of employees who took a course/got extra training in the last year did so because they needed a license/certification for their job.",
        answers: ["36%", "16%"],
        correctIndex: 0
    },
    {
        question: "___ % of employers report that they consider written communication skills very important in hiring new employees.",
        answers: ["82%", "62%", "42%", "22%"],
        correctIndex: 0
    },
    {
        question: "___ % of employers report that they want to see evidence of “problem-solving skills” on job candidates’ resumes.",
        answers: ["91%", "81%", "71%", "61%"],
        correctIndex: 1
    },
    {
        question: "___ % of employers report that they seek evidence of interpersonal skills on job candidates' resumes",
        answers: ["23%", "33%", "43%", "53%"],
        correctIndex: 3
    },
];