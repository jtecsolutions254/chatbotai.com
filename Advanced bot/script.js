// Predefined login credentials
const validUsername = "B135/25536/2023";
const validPassword = "3549";

// Predefined answers and close-ended questions
const predefinedAnswers = {
    "hello": "Hi there! welcome to university of Embu. How can I help you today? Can I assist you with something specific?",
    "who are you": "I'm just a (computer programme), but I'm here to assist you! Is there something you'd like to know?",
    "what is your name": "I am your helpful assistant bot. Would you like to ask anything else?",
    "good morning": "Good morning! Did you remmember to attend your classes? Otherwise How can I help you today?",
    "yes": "Okay go on and I will assist you where I can.",

    "how to apply": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the  university portal  and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
"where is university of embu": "its in Kenya, Embu county- just a few kilometers less than 5KM from Embu town.its along the Embu -Meru highway.Opposite kangaru Schools",
"How to apply the university": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the  university portal and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
"How to apply at university of embu": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the  university portal  and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
"How can i apply ": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the  university portal  and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
"How can i do my application apply": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the  university portal  and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
"contact info": "To contact diffrent offices (email or call)      Admissions Office Call: 0706528878   Email: admissions@embuni.ac.ke       Finance Office Call: 0700913623 Email: finance@embuni.ac.ke       Accommodation Office Call: 0768739749 Email: housekeeping@embuni.ac.ke         Elearning Office Call: 0758131736 Email: odel-studentsupport@embuni.ac.ke",
"contact information": "Admissions Office Call: 0706528878 Email: admissions@embuni.ac.ke Finance Office Call: 0700913623 Email: finance@embuni.ac.ke Accommodation Office Call: 0768739749 Email: housekeeping@embuni.ac.ke Elearning Office Call: 0758131736 Email: odel-studentsupport@embuni.ac.ke",
"how to contact": "Admissions Office Call: 0706528878 Email: admissions@embuni.ac.ke Finance Office Call: 0700913623 Email: finance@embuni.ac.ke Accommodation Office Call: 0768739749 Email: housekeeping@embuni.ac.ke Elearning Office Call: 0758131736 Email: odel-studentsupport@embuni.ac.ke",
"can i ask you": "yes you can ask anything concerning the university of embu am here to assist you",
"can i ask ":" yes you can ask anything concerning the university of embu am here to assist you",
"can i ask you anything": "yes you can ask anything concerning the university of embu am here to assist you",
"can i ask you something": "yes you can ask anything concerning the university of embu am here to assist you",
    "hello": "Hi there! How can I help you today? Can I assist you with something specific?",
    "who are you": "I'm just a bot (computer program), but I'm here to assist you! Is there something you'd like to know?",
    "what is your name": "I am your helpful assistant bot. Would you like to ask anything else?",
    "good morning": "Good morning! How can I help you today?",
    "how to apply": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the university portal and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
    "where is university of embu": "It's in Kenya, Embu County—just a few kilometers less than 5KM from Embu town. It's along the Embu-Meru Road, opposite Kangaru Schools.",
    "How to apply the university": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the university portal and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
    "what programs does the university offer": "The University of Embu offers undergraduate, graduate, and postgraduate programs in various fields including agriculture, business, education, social sciences, and science and technology.",
    "is the university open to international students": "Yes, the University of Embu welcomes international students. You can find more information about the application process on the university’s website.",
    "what is the university’s mission": "The University of Embu's mission is to provide quality education, research, and community service while promoting sustainable development.",
    "what facilities are available on campus": "The University of Embu has modern classrooms, laboratories, hostels, a sports complex, and a health center.",
    "does the university offer scholarships": "Yes, the University of Embu offers various scholarship opportunities. For details, you should visit the university's financial aid office or website.",
    "how can I contact the university": "You can contact the University of Embu through their official website or by visiting the campus. Contact details are available on their website.",
    "how does academic calendar look look like": "The University of Embu's academic calendar is divided into two semesters. Specific dates can be found on the university’s website.",

    "what is the academic calendar like": "The University of Embu's academic calendar is divided into two semesters. Specific dates can be found on the university’s website.",
    "are there any research opportunities": "Yes, the University of Embu encourages research and offers various opportunities and grants for research projects.",
    "what support services are available for students": "The university provides various support services including career services, counseling, and academic advising.",
    "can I get a part-time job while studying": "Yes, students may find part-time job opportunities both on and off-campus. The career services office can assist with job placements.",
    "what is the campus environment like": "The University of Embu's campus is known for its beautiful and serene environment, providing a conducive atmosphere for learning.",
    "how does university environment look like": "The University of Embu's campus is known for its beautiful and serene environment, providing a conducive atmosphere for learning.",
    
    "are there any student clubs": "Yes, there are various student clubs and societies at the University of Embu that cater to different interests.",
    "what is the university’s approach to sustainability": "The University of Embu is committed to environmental sustainability and integrates this into its academic and operational practices.",
    "can I study online at the university": "Yes, the University of Embu offers distance learning programs and online resources to support remote learning.",
    "what kind of internships are available": "The University of Embu offers various internship opportunities through partnerships with industries and organizations.",
    "how do I access the university’s library": "The university’s library is accessible to students and staff, and offers both physical and digital resources.",
    "what are the entry requirements": "Admission requirements vary by program. Generally, they include academic qualifications and other specific criteria. Details are available on the university’s website.",
    "are there sports facilities on campus": "Yes, the University of Embu has a well-equipped sports complex and various recreational facilities.",
    "what is the student-to-faculty ratio": "The student-to-faculty ratio at the University of Embu is designed to ensure personalized attention and support for students.",
    "how can I apply for financial aid": "Financial aid applications can be submitted through the university’s financial aid office. More information is available on their website.",
    "what extracurricular activities are offered": "The University of Embu offers a range of extracurricular activities including cultural events, sports, and student organizations.",
    "does the university have a health center": "Yes, the University of Embu has a health center that provides medical services to students.",
    "what are the fees for international students": "Fee structures for international students vary by program. Specific details can be obtained from the admissions office or the university’s website.",
    "can I study part-time": "Yes, the University of Embu offers both full-time and part-time study options for various programs.",
    "how do I apply for a research grant": "Application for research grants can be made through the university’s research office. Details are available on the university’s website.",
    "what is the process for transferring to the university": "Transfer procedures involve submitting an application along with your academic transcripts. Contact the admissions office for specific requirements.",
    "are there any student exchange programs": "Yes, the University of Embu has partnerships with other institutions for student exchange programs.",
    "how can I get involved in community service": "Students can participate in community service through various university-sponsored programs and initiatives.",
    "what are the university’s opening hours": "The university’s administrative offices typically operate during regular business hours. Specific hours can be checked on the university’s website.",
    "how do I find out about upcoming events": "Information about upcoming events is available on the university’s website and through campus notices.",
    "is there on-campus housing": "Yes, the University of Embu provides hostel accommodation for students on campus.",
    "what is the application deadline": "Application deadlines vary by program. Check the university’s website for specific dates and details.",
    "how can I request a transcript": "Transcripts can be requested from the university’s registrar’s office. Details are available on the university’s website.",
    "what are the university’s research areas": "The University of Embu is involved in research across various fields including agriculture, technology, and social sciences.",
    "are there any career counseling services": "Yes, the university offers career counseling services to help students with job placements and career development.",
    "what are the admission requirements for international students": "International students must meet specific admission requirements which include academic qualifications and visa documentation. Details are on the university’s website.",
    "does the university have a gym": "Yes, the University of Embu’s sports complex includes gym facilities for student use.",
    "how can I contact academic departments": "Academic departments can be contacted through their respective offices or via the university’s website for contact details.",
    "what are the requirements for a Ph.D. application": "Ph.D. applications typically require a master’s degree, research proposal, and relevant academic qualifications. Specific requirements are listed on the university’s website.",
    "are there any opportunities for graduate assistantships": "Graduate assistantships may be available depending on the program and department. Contact the relevant department for more information.",
    "what kind of student support is available": "Student support includes academic advising, counseling services, and career guidance.",
    "does the university offer online courses": "Yes, the University of Embu provides online courses as part of its distance learning programs.",
    "what is the student enrollment number": "The student enrollment number varies each year. For the latest figures, please check with the university’s admissions office.",
    "how can I apply for a job at the university": "Job openings at the University of Embu are listed on the university’s website. Applications can be submitted through their recruitment portal.",
    "what is the university’s approach to academic excellence": "The University of Embu strives for academic excellence through rigorous programs, research opportunities, and a commitment to high standards of education.",
    "how can I find a research supervisor": "You can find a research supervisor by contacting the relevant department or faculty at the university.",
    "what are the benefits of studying at the university": "Studying at the University of Embu provides access to quality education, research opportunities, and a supportive campus environment.",
    "does the university offer language courses": "Yes, the University of Embu offers language courses as part of its curriculum and continuing education programs.",
    "how can I get involved in research projects": "Students can get involved in research projects by contacting faculty members or the university’s research office.",
    "what are the opportunities for student leadership": "The University of Embu offers various opportunities for student leadership through student organizations and governance roles.",
    "how do I apply for a diploma program": "Diploma program applications can be submitted through the university’s admissions office or website.",
    "what is the process for enrolling in a certificate program": "Enrollment in certificate programs involves submitting an application and meeting specific entry requirements. Details are available on the university’s website.",
    "hello": "Hi there! How can I help you today? Can I assist you with something specific?",
    "who are you": "I'm just a bot (computer program), but I'm here to assist you! Is there something you'd like to know?",
    "what is your name": "I am your helpful assistant bot. Would you like to ask anything else?",
    "good morning": "Good morning! How can I help you today?",
    "how to apply": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the university portal and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
    "where is university of embu": "It's in Kenya, Embu County—just a few kilometers less than 5KM from Embu town. It's along the Embu-Meru Road, opposite Kangaru Schools.",
    "How to apply the university": "Application forms can either be obtained from the Admissions Office, University of Embu, or downloaded at the university portal and should be submitted upon a payment of a non-refundable application fee of KSh. 4,000 for Ph.D, KSh. 2,000 for Masters and Bachelors, KSh. 1,000 for Diploma and KSh. 500 for Certificate for East Africans and USD 100, USD 50, USD 25 and USD 15 respectively for non-East Africans.",
    "what programs does the university offer": "The University of Embu offers undergraduate, graduate, and postgraduate programs in various fields including agriculture, business, education, social sciences, and science and technology.",
    "is the university open to international students": "Yes, the University of Embu welcomes international students. You can find more information about the application process on the university’s website.",
    "what is the university’s mission": "The University of Embu's mission is to provide quality education, research, and community service while promoting sustainable development.",
    "what facilities are available on campus": "The University of Embu has modern classrooms, laboratories, hostels, a sports complex, and a health center.",
    "does the university offer scholarships": "Yes, the University of Embu offers various scholarship opportunities. For details, you should visit the university's financial aid office or website.",
    "how can I contact the university": "You can contact the University of Embu through their official website or by visiting the campus. Contact details are available on their website.",
    "what is the academic calendar like": "The University of Embu's academic calendar is divided into two semesters. Specific dates can be found on the university’s website.",
    "are there any research opportunities": "Yes, the University of Embu encourages research and offers various opportunities and grants for research projects.",
    "what support services are available for students": "The university provides various support services including career services, counseling, and academic advising.",
    "can I get a part-time job while studying": "Yes, students may find part-time job opportunities both on and off-campus. The career services office can assist with job placements.",
    "what is the campus environment like": "The University of Embu's campus is known for its beautiful and serene environment, providing a conducive atmosphere for learning.",
    "are there any student clubs": "Yes, there are various student clubs and societies at the University of Embu that cater to different interests.",
    "what is the university’s approach to sustainability": "The University of Embu is committed to environmental sustainability and integrates this into its academic and operational practices.",
    "can I study online at the university": "Yes, the University of Embu offers distance learning programs and online resources to support remote learning.",
    "what kind of internships are available": "The University of Embu offers various internship opportunities through partnerships with industries and organizations.",
    "how do I access the university’s library": "The university’s library is accessible to students and staff, and offers both physical and digital resources.",
    "what are the entry requirements": "Admission requirements vary by program. Generally, they include academic qualifications and other specific criteria. Details are available on the university’s website.",
    "are there sports facilities on campus": "Yes, the University of Embu has a well-equipped sports complex and various recreational facilities.",
    "what is the student-to-faculty ratio": "The student-to-faculty ratio at the University of Embu is designed to ensure personalized attention and support for students.",
    "how can I apply for financial aid": "Financial aid applications can be submitted through the university’s financial aid office. More information is available on their website.",
    "what extracurricular activities are offered": "The University of Embu offers a range of extracurricular activities including cultural events, sports, and student organizations.",
    "does the university have a health center": "Yes, the University of Embu has a health center that provides medical services to students.",
    "what are the fees for international students": "Fee structures for international students vary by program. Specific details can be obtained from the admissions office or the university’s website.",
    "can I study part-time": "Yes, the University of Embu offers both full-time and part-time study options for various programs.",
    "how do I apply for a research grant": "Application for research grants can be made through the university’s research office. Details are available on the university’s website.",
    "what is the process for transferring to the university": "Transfer procedures involve submitting an application along with your academic transcripts. Contact the admissions office for specific requirements.",
    "are there any student exchange programs": "Yes, the University of Embu has partnerships with other institutions for student exchange programs.",
    "how can I get involved in community service": "Students can participate in community service through various university-sponsored programs and initiatives.",
    "what are the university’s opening hours": "The university’s administrative offices typically operate during regular business hours. Specific hours can be checked on the university’s website.",
    "how do I find out about upcoming events": "Information about upcoming events is available on the university’s website and through campus notices.",
    "is there on-campus housing": "Yes, the University of Embu provides hostel accommodation for students on campus.",
    "what is the application deadline": "Application deadlines vary by program. Check the university’s website for specific dates and details.",
    "how can I request a transcript": "Transcripts can be requested from the university’s registrar’s office. Details are available on the university’s website.",
    "what are the university’s research areas": "The University of Embu is involved in research across various fields including agriculture, technology, and social sciences.",
    "are there any career counseling services": "Yes, the university offers career counseling services to help students with job placements and career development.",
    "what are the admission requirements for international students": "International students must meet specific admission requirements which include academic qualifications and visa documentation. Details are on the university’s website.",
    "does the university have a gym": "Yes, the University of Embu’s sports complex includes gym facilities for student use.",
    "how can I contact academic departments": "Academic departments can be contacted through their respective offices or via the university’s website for contact details.",
    "what are the requirements for a Ph.D. application": "Ph.D. applications typically require a master’s degree, research proposal, and relevant academic qualifications. Specific requirements are listed on the university’s website.",
    "are there any opportunities for graduate assistantships": "Graduate assistantships may be available depending on the program and department. Contact the relevant department for more information.",
    "what kind of student support is available": "Student support includes academic advising, counseling services, and career guidance.",
    "does the university offer online courses": "Yes, the University of Embu provides online courses as part of its distance learning programs.",
    "what is the student enrollment number": "The student enrollment number varies each year. For the latest figures, please check with the university’s admissions office.",
    "how can I apply for a job at the university": "Job openings at the University of Embu are listed on the university’s website. Applications can be submitted through their recruitment portal.",
    "what is the university’s approach to academic excellence": "The University of Embu strives for academic excellence through rigorous programs, research opportunities, and a commitment to high standards of education.",
    "how can I find a research supervisor": "You can find a research supervisor by contacting the relevant department or faculty at the university.",
    "what are the benefits of studying at the university": "Studying at the University of Embu provides access to quality education, research opportunities, and a supportive campus environment.",
    "does the university offer language courses": "Yes, the University of Embu offers language courses as part of its curriculum and continuing education programs.",
    "how can I get involved in research projects": "Students can get involved in research projects by contacting faculty members or the university’s research office.",
    "what are the opportunities for student leadership": "The University of Embu offers various opportunities for student leadership through student organizations and governance roles.",
    "how do I apply for a diploma program": "Diploma program applications can be submitted through the university’s admissions office or website.",
    "what is the process for enrolling in a certificate program": "Enrollment in certificate programs involves submitting an application and meeting specific entry requirements. Details are available on the university’s website.",
    "does the university have a student union": "Yes, the University of Embu has a student union that represents student interests and organizes various activities.",
    "what are the benefits of living on-campus": "Living on-campus provides convenience, access to university facilities, and opportunities for social interaction and engagement.",
    "can I defer my admission": "Yes, admission deferral policies exist. Contact the admissions office for details on how to request a deferral.",
    "can I defer my course": "Yes, admission deferral policies exist. Contact the admissions office for details on how to request a deferral.",
   "can i change my programme/course": "yes university of embu gives room for inter school transfer",
   "how i can change my programme/course": "yes university of embu gives room for inter school transfer",

    "are there any exchange programs with partner universities": "Yes, the University of Embu has exchange programs with partner universities for both students and faculty.",
    "what is the student support system like": "The student support system includes academic advising, mental health resources, and student welfare services.",
    "how do I apply for accommodation": "Accommodation applications can be submitted through the university’s housing office or website.",
    "are there any community outreach programs": "Yes, the University of Embu engages in various community outreach programs aimed at supporting local communities.",
    "how do I get involved in campus activities": "Students can participate in campus activities by joining clubs, attending events, and volunteering for different university initiatives.",
    "what is the university’s policy on academic integrity": "The University of Embu upholds high standards of academic integrity and has policies in place to address issues of plagiarism and cheating.",
    "how can I update my personal information": "Personal information updates can be made through the university’s student portal or by contacting the registrar’s office.",
    "what are the university’s facilities for disabled students": "The University of Embu provides various facilities and support services for disabled students to ensure accessibility and inclusion.",
    "how can I join a student club": "Students can join student clubs by signing up during club fairs or contacting the club directly through the student affairs office.",
    "does the university offer professional development courses": "Yes, the University of Embu offers professional development courses to enhance skills and career prospects.",
    "what is the university’s policy on attendance": "The University of Embu has an attendance policy that requires students to attend a certain percentage of classes to pass their courses.",
    "are there any summer programs available": "Yes, the University of Embu offers various summer programs, including short courses and workshops.",
    "how do I apply for an exchange program": "Applications for exchange programs can be submitted through the university’s international office or study abroad office.",
    "does the university have a career center": "Yes, the University of Embu has a career center that provides career counseling, job search assistance, and internship opportunities.",
    "what types of financial aid are available": "Financial aid includes scholarships, grants, and student loans. Specific options can be found on the university’s financial aid website.",
    "how do I get a student ID card": "Student ID cards are issued during orientation or can be requested through the university’s registrar’s office.",
    "what is the process for changing my major": "Changing your major involves submitting a request to the academic advising office and meeting with an advisor to discuss the change.",
    "does the university offer counseling services": "Yes, the University of Embu offers counseling services to support students' mental health and well-being.",
    "what is the university’s policy on plagiarism": "The University of Embu has a strict policy against plagiarism and takes academic misconduct very seriously.",
    "how do I report a problem on campus": "Problems on campus can be reported to campus security or the student affairs office for resolution.",
    "are there any cultural events hosted by the university": "Yes, the University of Embu hosts various cultural events throughout the year to celebrate diversity and heritage.",
    "how do I register for classes": "Class registration can be done through the university’s student portal or by contacting the registrar’s office.",
    "what is the process for withdrawing from a course": "Withdrawing from a course involves submitting a request through the student portal or registrar’s office before the withdrawal deadline.",
    "does the university offer tutoring services": "Yes, tutoring services are available to assist students with academic support and improve their performance in courses.",
    "what is the university’s approach to student safety": "The University of Embu prioritizes student safety with measures such as security patrols, emergency response systems, and safety awareness programs.",
    "how can I participate in research conferences": "Participation in research conferences can be arranged through the research office or by submitting papers to relevant conferences.",
    "are there opportunities for studying abroad": "Yes, the University of Embu offers opportunities for studying abroad through exchange programs and partnerships with international institutions.",
    "how do I access online course materials": "Online course materials can be accessed through the university’s learning management system (LMS) or student portal.",
    "does the university have a bookstore": "Yes, the University of Embu has a bookstore where students can purchase textbooks, supplies, and university merchandise.",
    "what are the options for meal plans": "Meal plans are available through the university’s dining services, offering various options to suit different dietary needs.",
    "how do I get a parking permit": "Parking permits can be obtained from the university’s parking office or through the student services department.",
    "does the university have a student government": "Yes, the University of Embu has a student government that represents student interests and organizes activities and events.",
    "what is the policy on student absences": "The university has an attendance policy that outlines acceptable reasons for absences and the process for reporting them.",
    "how can I participate in university committees": "Students can participate in university committees by applying through the student affairs office or being elected to committee positions.",
    "does the university offer summer internships": "Yes, the University of Embu offers summer internships through various programs and partnerships with organizations.",
    "how do I apply for a leave of absence": "Applications for a leave of absence should be submitted through the registrar’s office, following the university’s guidelines.",
    "are there any student research grants available": "Yes, the University of Embu provides research grants for students engaged in research projects. Details are available from the research office.",
    "how do I access student health services": "Student health services are available through the university’s health center, which provides medical care and wellness support.",
    "does the university have a mentorship program": "Yes, the University of Embu offers mentorship programs to support students’ academic and professional development.",
    "how can I participate in academic conferences": "Students can participate in academic conferences by submitting research papers or attending events organized by academic departments.",
    "do you know university of embu": "Yes, the University of Embu is a public university in Kenya, located in Embu County. It started as an agricultural college but later became a constituent college of the University of Nairobi in 2011 before gaining full university status in 2016. The university offers a wide range of undergraduate, graduate, and postgraduate programs, focusing on areas like agriculture, science, business, and education.",
"where is computer labs": " they are located at old university compound. use gate B or pass through the UOEM street through LC area to the other compound where computer labs are.",
};

const synonymMap = {
    "hello": ["hi", "hey", "greetings"],
    "how are you": ["how's it going", "how do you do", "how are things"],
    "what is your name": ["who are you", "what are you called", "your name"],
    "bye": ["goodbye", "see you", "farewell"]
};

// Function for user login
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('login-error');

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'flex';
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}

// Function to send a message
function sendMessage() {
    const input = document.getElementById('chat-input');
    const messageText = input.value.trim().toLowerCase();
    if (messageText === "") return;

    const messagesContainer = document.getElementById('chat-messages');
    
    // Create user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerText = messageText;
    messagesContainer.appendChild(userMessage);
    
    input.value = '';  // Clear input
    
    // Scroll to the bottom of the chat
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message typing-indicator';
    typingIndicator.innerText = 'I am thinking...';
    messagesContainer.appendChild(typingIndicator);

    // Simulate bot response after delay
    setTimeout(() => {
        messagesContainer.removeChild(typingIndicator);
        const botMessageContainer = document.createElement('div');
        botMessageContainer.className = 'message bot-message';

        // Add bot's message
        const botMessageText = document.createElement('div');
        botMessageText.className = 'bot-message-text';
        botMessageText.innerText = generateBotResponse(messageText);
        botMessageContainer.appendChild(botMessageText);

        // Add copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerText = 'Copy';
        copyButton.addEventListener('click', () => copyText(botMessageText.innerText, copyButton));
        botMessageContainer.appendChild(copyButton);

        messagesContainer.appendChild(botMessageContainer);

        // Scroll to the bottom of the chat
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    }, 1000);
}

// Function to calculate Levenshtein distance
function levenshtein(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Function to compare user input with predefined questions and ignore minor spelling mistakes
function findBestMatch(input, predefinedQuestions) {
    let bestMatch = null;
    let lowestDistance = Infinity;
    
    predefinedQuestions.forEach(question => {
        const distance = levenshtein(input.toLowerCase(), question.toLowerCase());
        if (distance < lowestDistance) {
            lowestDistance = distance;
            bestMatch = question;
        }
    });

    return lowestDistance <= 3 ? bestMatch : null; // Allow a distance of 3 for minor errors
}

// Function to generate bot response based on user input
function generateBotResponse(userMessage) {
    // Fuzzy match with Levenshtein distance for minor spelling mistakes
    const bestMatch = findBestMatch(userMessage, Object.keys(predefinedAnswers));

    if (bestMatch) {
        return predefinedAnswers[bestMatch];
    }

    // Fuzzy matching: check if the message contains a synonym
    for (const key in synonymMap) {
        for (const synonym of synonymMap[key]) {
            if (userMessage.includes(synonym)) {
                return predefinedAnswers[key];
            }
        }
    }

    // Default response if no match is found
    return "I'm not able to respond to this right now but once I am able I will update you. Can you ask something else?";
}

// Function to copy bot's response and update the button text
function copyText(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        // Change the button text to 'Copied!'
        button.innerText = 'Copied!';
        button.disabled = true; // Disable the button to prevent multiple clicks

        // Reset the button text after 3 seconds
        setTimeout(() => {
            button.innerText = 'Copy';
            button.disabled = false; // Re-enable the button
        }, 1000); // 1-second delay before resetting
    });
}

// Event listener for Enter key for login
document.getElementById('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

// Event listener for Enter key for sending message
document.getElementById('chat-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
