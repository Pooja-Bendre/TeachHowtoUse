// Available languages
const LANGUAGES = {
    en: {
        name: 'English',
        nativeName: 'English',
        dir: 'ltr'
    },
    hi: {
        name: 'Hindi',
        nativeName: 'हिंदी',
        dir: 'ltr'
    },
    ka: {
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        dir: 'ltr'
    }    // Add more languages here as needed
};

const DEFAULT_LANGUAGE = 'en';
let currentLanguage = DEFAULT_LANGUAGE;

const TRANSLATIONS = {
    // ENGLISH TRANSLATIONS
    "en": {
        // Common translations (used across all pages)
        "common": {
            // Example shared translations
            "nav.home": "Home",
            "nav.about": "About",
            "button.back": "Back"
        },

        // Home page translations
        "home": {
            "page.title": "TEACH HOW TO USE ! - Simple App Learning Guide",
            "home.title": "TEACH HOW TO USE !",
            "home.startLearning": "Start Learning",
            "home.chooseTutorial": "Choose any tutorial below to begin your smartphone learning journey",
            "home.subheading": "Learn how to use popular apps with step-by-step practice guide.",

            "card.phonepe.title": "Send Money on PhonePe",
            "card.phonepe.description": "Learn how to send money to a mobile number using PhonePe app.",

            "card.whatsapp.title": "Use WhatsApp Video Call",
            "card.whatsapp.description": "Learn how to make video calls to family and friends.",

            "card.electricity.title": "Pay Electricity Bill",
            "card.electricity.description": "Learn how to pay your electricity bill using PhonePe or BBPS.",

            "card.ride.title": "Book an Ola/Uber Ride",
            "card.ride.description": "Learn how to book a cab and track your driver.",

            "card.maps.title": "Navigate with Google Maps",
            "card.maps.description": "Learn how to find directions and navigate to new places.",

            "card.train.title": "Book Train Tickets",
            "card.train.description": "Learn how to book train tickets using the IRCTC app."
        },

        // About page translations

        // PhonePe tutorial translations
        "phonepe": {
            "page.title": "PhonePe Money Transfer Tutorial - Teach your parents smartphone",

            "tutorial.title": "Sending Money on PhonePe",
            "tutorial.completion": "Congratulations! You've successfully learned how to send money to a mobile number using PhonePe.",

            "step1.instruction": "<strong>Step 1:</strong> This is the PhonePe home screen. To send money to someone, tap on the \"To mobile number\" option under Money Transfers. This lets you send money to any phone number in India.",
            "step2.instruction": "<strong>Step 2:</strong> You're now in the Send Money screen. Here you can see your recent payments. To make a new payment, tap on the purple \"New Payment\" button at the bottom of your screen.",
            "step3.instruction": "<strong>Step 3:</strong> Now you can select a contact. Tap on the search box at the top to enter a phone number or search for a contact.",
            "step4.instruction": "<strong>Step 4:</strong> Type the phone number or select a contact from the list. Tap on the contact you want to send money to.",
            "step5.instruction": "<strong>Step 5:</strong> Now enter the amount you want to send. Then tap \"Pay\" to proceed. After this, you'll need to enter your UPI PIN to complete the transaction.",

            "feedback.home": "Good job! Now you'll see the Send Money screen.",
            "feedback.sendmoney": "Perfect! You've selected New Payment. Now you'll see contact numbers.",
            "feedback.selectcontact": "Great! You've selected to enter the contact number.",
            "feedback.searchcontact": "Great! You've selected the contact number to make a new payment.",
            "feedback.pay": "Awesome! Post this, just enter UPI PIN to complete the payment.",

            "completion.success": "Payment Successful!",
            "completion.message": "₹1 sent to Ashish"
        },

        // WhatsApp tutorial translations
        "whatsapp": {
            "page.title": "WhatsApp Video Call Tutorial - Teach your parents smartphone",

            "tutorial.title": "Making a Video Call on WhatsApp",
            "tutorial.completion": "Congratulations! You've successfully learned how to make a video call on WhatsApp.",

            "step1.instruction": "<strong>Step 1:</strong> This is your WhatsApp chats list. All your conversations appear here. To make a video call, first tap on the contact you want to call. In this example, tap on \"Random Aunty\".",
            "step2.instruction": "<strong>Step 2:</strong> Now you're in the chat screen where you can see your messages with this contact. Look at the top right corner of the screen. Tap on the video camera icon to start a video call.",
            "step3.instruction": "<strong>Step 3:</strong> Your video call is now connected! You can see the other person in the main screen and yourself in the small window at the top right. When you want to end the call, tap the red button with an X in the middle at the bottom of the screen.",

            "feedback.home": "Good job! Now you'll see the chat screen for this contact.",
            "feedback.chat": "Perfect! You've clicked the video call button. Your call is connecting.",
            "feedback.call": "Well done! You've ended the call by pressing the red button.",

            "completion.success": "Call Completed!",
            "completion.message": "You've successfully made a WhatsApp video call"
        },

        // Electricity Bill tutorial translations
        "electricity-bill-tutorial": {
            "page.title": "Electricity Bill Payment Tutorial - Teach your parents smartphone",

            "tutorial.title": "Paying Electricity Bill",
            "tutorial.completion": "Congratulations! You've successfully learned how to pay electricity bills.",

            "step1.instruction": "<strong>Step 1:</strong> This is the Paytm home screen. To pay an electricity bill, tap on the \"Electricity\" option.",
            "step2.instruction": "<strong>Step 2:</strong> Select your state. For example, choose \"Maharashtra\".",
            "step3.instruction": "<strong>Step 3:</strong> Choose your electricity board. For example, select \"Mahavitran-MSEDCL\".",
            "step4.instruction": "<strong>Step 4:</strong> Select your sub-division or ERO/BU.",
            "step5.instruction": "<strong>Step 5:</strong> Enter your consumer number and tap \"Pay\".",

            "feedback.board": "Great! You've selected the electricity option.",
            "feedback.state": "Good job! State selected.",
            "feedback.subdivision": "Excellent! Board selected.",
            "feedback.consumer": "Good! Sub-division selected.",
            "feedback.pay": "Awesome! Your bill payment will now proceed.",

            "completion.success": "Payment Successful!",
            "completion.message": "Electricity bill payment completed"
        },

        // Google Maps tutorial translations
        "google-maps-tutorial": {
            "page.title": "Google Maps Navigation Tutorial - Teach your parents smartphone",

            "tutorial.title": "Navigating with Google Maps",
            "tutorial.completion": "Congratulations! You've successfully learned how to navigate using Google Maps.",

            "step1.instruction": "<strong>Step 1:</strong> This is the Google Maps home screen. To search for a location, type \"Triveni Ghat\" in the search bar at the top.",
            "step2.instruction": "<strong>Step 2:</strong> From the search results, tap on \"Triveni Ghat\".",
            "step3.instruction": "<strong>Step 3:</strong> After viewing the location details, tap on the \"Directions\" button.",
            "step4.instruction": "<strong>Step 4:</strong> View the route options and tap \"Start\".",
            "step5.instruction": "<strong>Step 5:</strong> Navigation has started! Now you can follow the directions.",

            "feedback.home": "Great! You've searched for the location.",
            "feedback.location": "Good job! Location found.",
            "feedback.direction": "Excellent! Directions found.",
            "feedback.start": "Awesome! Navigation started.",

            "completion.success": "Navigation Started!",
            "completion.message": "Google Maps navigation successfully started"
        },

        // Ola-Uber tutorial translations
        "ola-uber-tutorial": {
            "page.title": "Ola/Uber Ride Booking Tutorial - Teach your parents smartphone",

            "tutorial.title": "Booking an Ola/Uber Ride",
            "tutorial.completion": "Congratulations! You've successfully learned how to book an Ola/Uber ride.",

            "step1.instruction": "<strong>Step 1:</strong> This is the Ola app welcome screen. To book a ride, tap on \"Book Ride\".",
            "step2.instruction": "<strong>Step 2:</strong> Choose your pickup location. Set your current position on the map.",
            "step3.instruction": "<strong>Step 3:</strong> Enter your destination location. Type in the \"Where to go\" box.",
            "step4.instruction": "<strong>Step 4:</strong> Choose the cab type (Mini, Prime, etc.) and tap \"Book\".",
            "step5.instruction": "<strong>Step 5:</strong> Booking complete! You can track your driver.",

            "feedback.welcome": "Great! Ride booking started.",
            "feedback.pickup": "Good job! Pickup location set.",
            "feedback.destination": "Excellent! Destination set.",
            "feedback.book": "Awesome! Ride booked.",

            "completion.success": "Ride Booked!",
            "completion.message": "Your Ola/Uber ride has been successfully booked"
        },

        // Train ticket tutorial translations
        "train-ticket-tutorial": {
            "page.title": "Train Ticket Booking Tutorial - Teach your parents smartphone",

            "tutorial.title": "Booking Train Tickets",
            "tutorial.completion": "Congratulations! You've successfully learned how to book train tickets using IRCTC.",

            "step1.instruction": "<strong>Step 1:</strong> This is the IRCTC app home screen. To book a ticket, tap on \"Train Tickets\".",
            "step2.instruction": "<strong>Step 2:</strong> Select departure station in \"From\" and destination station in \"To\".",
            "step3.instruction": "<strong>Step 3:</strong> Choose travel date and tap \"Find Trains\".",
            "step4.instruction": "<strong>Step 4:</strong> Select your preferred train from the list of available trains.",
            "step5.instruction": "<strong>Step 5:</strong> Fill passenger details and tap \"Pay\".",

            "feedback.home": "Great! Train booking started.",
            "feedback.fromtowhere": "Good job! Stations selected.",
            "feedback.train": "Excellent! Trains found.",
            "feedback.trainselect": "Good! Train selected.",
            "feedback.passenger": "Great! Passenger details filled.",
            "feedback.pay": "Awesome! Ticket booked.",

            "completion.success": "Ticket Booked!",
            "completion.message": "Your train ticket has been successfully booked"
        },

        // Amazon tutorial translations
        "amazon-tutorial": {
            "page.title": "Amazon Shopping Tutorial - Teach your parents smartphone",

            "tutorial.title": "Shopping on Amazon",
            "tutorial.completion": "Congratulations! You've successfully learned how to shop on Amazon.",

            "step1.instruction": "<strong>Step 1:</strong> This is the Amazon app home screen. Use the search bar at the top to search for something.",
            "step2.instruction": "<strong>Step 2:</strong> Select a product from the search results.",
            "step3.instruction": "<strong>Step 3:</strong> View product details and tap \"Add to Cart\".",
            "step4.instruction": "<strong>Step 4:</strong> Go to cart and tap \"Buy Now\".",
            "step5.instruction": "<strong>Step 5:</strong> Select delivery address and confirm the order.",

            "completion.success": "Order Placed!",
            "completion.message": "Your Amazon order has been successfully placed"
        }
    },

    // HINDI TRANSLATIONS
    
    "hi": {
        "common": {
            "nav.home": "होम",
            "nav.about": "बारे में",
            "button.back": "वापस"
        },
        // Home page translations
        "home": {
            "page.title": "कैसे उपयोग करें सिखाएं ! - सरल ऐप शिक्षण गाइड",
            "home.title": "कैसे उपयोग करें सिखाएं !",
            "home.subheading": "चरण-दर-चरण अभ्यास गाइड के साथ लोकप्रिय ऐप्स का उपयोग करना सीखें।",
            "home.startLearning": "सीखना शुरू करें",
            "home.chooseTutorial": "नीचे दिए गए किसी भी ट्यूटोरियल को चुनें और स्मार्टफोन सीखना शुरू करें",

            "card.phonepe.title": "PhonePe पर पैसे भेजें",
            "card.phonepe.description": "PhonePe का उपयोग करके मोबाइल नंबर पर पैसे भेजना सीखें।",

            "card.whatsapp.title": "WhatsApp वीडियो कॉल का उपयोग करें",
            "card.whatsapp.description": "परिवार और दोस्तों को वीडियो कॉल करना सीखें।",

            "card.electricity.title": "बिजली बिल का भुगतान करें",
            "card.electricity.description": "PhonePe या BBPS का उपयोग करके अपना बिजली बिल कैसे भुगतान करें यह सीखें।",

            "card.ride.title": "ओला/उबर राइड बुक करें",
            "card.ride.description": "कैब बुक करना और अपने ड्राइवर को ट्रैक करना सीखें।",

            "card.maps.title": "गूगल मैप्स के साथ नेविगेट करें",
            "card.maps.description": "दिशाएँ खोजना और नए स्थानों पर जाना सीखें।",

            "card.train.title": "ट्रेन टिकट बुक करें",
            "card.train.description": "IRCTC ऐप का उपयोग करके ट्रेन टिकट बुक करना सीखें।"
        },


        // PhonePe tutorial translations
        "phonepe": {
            "page.title": "PhonePe मनी ट्रांसफर ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "PhonePe पर पैसे भेजना",
            "tutorial.completion": "बधाई हो! आपने PhonePe का उपयोग करके मोबाइल नंबर पर पैसे भेजना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह PhonePe होम स्क्रीन है। किसी को पैसे भेजने के लिए, मनी ट्रांसफर के अंतर्गत \"मोबाइल नंबर पर\" विकल्प पर टैप करें। यह आपको भारत में किसी भी फोन नंबर पर पैसे भेजने देता है।",
            "step2.instruction": "<strong>चरण 2:</strong> अब आप सेंड मनी स्क्रीन पर हैं। यहां आप अपने हाल के भुगतान देख सकते हैं। एक नया भुगतान करने के लिए, अपनी स्क्रीन के नीचे बैंगनी \"न्यू पेमेंट\" बटन पर टैप करें।",
            "step3.instruction": "<strong>चरण 3:</strong> अब आप एक संपर्क चुन सकते हैं। फोन नंबर दर्ज करने या किसी संपर्क को खोजने के लिए ऊपर दिए गए सर्च बॉक्स पर टैप करें।",
            "step4.instruction": "<strong>चरण 4:</strong> फोन नंबर टाइप करें या सूची से किसी संपर्क का चयन करें। जिस संपर्क को आप पैसे भेजना चाहते हैं, उस पर टैप करें।",
            "step5.instruction": "<strong>चरण 5:</strong> अब वह राशि दर्ज करें जो आप भेजना चाहते हैं। फिर आगे बढ़ने के लिए \"पे\" पर टैप करें। इसके बाद, लेनदेन को पूरा करने के लिए आपको अपना यूपीआई पिन दर्ज करना होगा।",

            "feedback.home": "अच्छा काम! अब आप सेंड मनी स्क्रीन देखेंगे।",
            "feedback.sendmoney": "बढ़िया! आपने न्यू पेमेंट का चयन किया है। अब आप संपर्क नंबर देखेंगे।",
            "feedback.selectcontact": "बढ़िया! आपने संपर्क नंबर दर्ज करने का विकल्प चुना है।",
            "feedback.searchcontact": "बढ़िया! नया भुगतान करने के लिए आपने संपर्क नंबर का चयन किया है।",
            "feedback.pay": "शानदार! इसके बाद, भुगतान पूरा करने के लिए बस अपना यूपीआई पिन दर्ज करें।",

            "completion.success": "भुगतान सफल!",
            "completion.message": "₹1 आशीष को भेजा गया"
        },

        // WhatsApp tutorial translations
        "whatsapp": {
            "page.title": "WhatsApp वीडियो कॉल ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "WhatsApp पर वीडियो कॉल करना",
            "tutorial.completion": "बधाई हो! आपने WhatsApp पर वीडियो कॉल करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह आपकी WhatsApp चैट्स सूची है। यहां आपकी सभी बातचीत दिखाई देती है। वीडियो कॉल करने के लिए, पहले उस संपर्क पर टैप करें जिसे आप कॉल करना चाहते हैं। इस उदाहरण में, \"रैंडम आंटी\" पर टैप करें।",
            "step2.instruction": "<strong>चरण 2:</strong> अब आप चैट स्क्रीन पर हैं जहां आप इस संपर्क के साथ अपने संदेश देख सकते हैं। स्क्रीन के ऊपरी दाएं कोने को देखें। वीडियो कॉल शुरू करने के लिए वीडियो कैमरा आइकन पर टैप करें।",
            "step3.instruction": "<strong>चरण 3:</strong> आपका वीडियो कॉल अब कनेक्ट हो गया है! आप मुख्य स्क्रीन पर दूसरे व्यक्ति को और ऊपरी दाएं छोटी विंडो में खुद को देख सकते हैं। जब आप कॉल समाप्त करना चाहते हैं, तो स्क्रीन के निचले हिस्से में बीच में X वाले लाल बटन पर टैप करें।",

            "feedback.home": "अच्छा काम! अब आप इस संपर्क के लिए चैट स्क्रीन देखेंगे।",
            "feedback.chat": "बढ़िया! आपने वीडियो कॉल बटन पर क्लिक किया है। आपका कॉल कनेक्ट हो रहा है।",
            "feedback.call": "बहुत अच्छे! आपने लाल बटन दबाकर कॉल समाप्त कर दिया है।",

            "completion.success": "कॉल पूरा हुआ!",
            "completion.message": "आपने सफलतापूर्वक WhatsApp वीडियो कॉल किया है"
        },

        // Electricity Bill tutorial translations
        "electricity-bill-tutorial": {
            "page.title": "बिजली बिल भुगतान ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "बिजली बिल का भुगतान",
            "tutorial.completion": "बधाई हो! आपने बिजली बिल का भुगतान करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह Paytm का होम स्क्रीन है। बिजली बिल का भुगतान करने के लिए, \"बिजली\" विकल्प पर टैप करें।",
            "step2.instruction": "<strong>चरण 2:</strong> अपने राज्य का चयन करें। उदाहरण के लिए, \"महाराष्ट्र\" चुनें।",
            "step3.instruction": "<strong>चरण 3:</strong> अपना बिजली बोर्ड चुनें। उदाहरण के लिए, \"महावितरण-MSEDCL\" चुनें।",
            "step4.instruction": "<strong>चरण 4:</strong> अपना उप-विभाग या ERO/BU चुनें।",
            "step5.instruction": "<strong>चरण 5:</strong> अपना उपभोक्ता नंबर दर्ज करें और \"भुगतान करें\" पर टैप करें।",

            "feedback.board": "बढ़िया! आपने बिजली का विकल्प चुना है।",
            "feedback.state": "अच्छा काम! राज्य चुना गया।",
            "feedback.subdivision": "बढ़िया! बोर्ड चुना गया।",
            "feedback.consumer": "अच्छा! उप-विभाग चुना गया।",
            "feedback.pay": "शानदार! अब आपका बिल भुगतान हो जाएगा।",

            "completion.success": "भुगतान सफल!",
            "completion.message": "बिजली बिल का भुगतान पूरा हुआ"
        },

        // Google Maps tutorial translations
        "google-maps-tutorial": {
            "page.title": "गूगल मैप्स नेविगेशन ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "गूगल मैप्स के साथ नेविगेशन",
            "tutorial.completion": "बधाई हो! आपने गूगल मैप्स का उपयोग करके नेविगेशन करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह गूगल मैप्स का होम स्क्रीन है। कोई स्थान खोजने के लिए, ऊपर दिए गए सर्च बार में \"त्रिवेणी घाट\" टाइप करें।",
            "step2.instruction": "<strong>चरण 2:</strong> खोज परिणामों में से \"त्रिवेणी घाट\" पर टैप करें।",
            "step3.instruction": "<strong>चरण 3:</strong> स्थान विवरण देखने के बाद, \"दिशाएं\" बटन पर टैप करें।",
            "step4.instruction": "<strong>चरण 4:</strong> मार्ग विकल्प देखें और \"शुरू करें\" पर टैप करें।",
            "step5.instruction": "<strong>चरण 5:</strong> नेविगेशन शुरू हो गया है! अब आप निर्देशों का पालन कर सकते हैं।",

            "feedback.home": "बढ़िया! आपने स्थान खोजा है।",
            "feedback.location": "अच्छा काम! स्थान मिल गया।",
            "feedback.direction": "बढ़िया! दिशा मिल गई।",
            "feedback.start": "शानदार! नेविगेशन शुरू हो गया।",

            "completion.success": "नेविगेशन शुरू!",
            "completion.message": "गूगल मैप्स नेविगेशन सफलतापूर्वक शुरू हुआ"
        },

        // Ola-Uber tutorial translations
        "ola-uber-tutorial": {
            "page.title": "ओला/उबर राइड बुकिंग ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "ओला/उबर राइड बुक करना",
            "tutorial.completion": "बधाई हो! आपने ओला/उबर राइड बुक करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह ओला ऐप का स्वागत स्क्रीन है। राइड बुक करने के लिए \"राइड बुक करें\" पर टैप करें।",
            "step2.instruction": "<strong>चरण 2:</strong> अपना पिकअप स्थान चुनें। मैप पर अपनी वर्तमान स्थिति को सेट करें।",
            "step3.instruction": "<strong>चरण 3:</strong> अपना गंतव्य स्थान दर्ज करें। \"कहां जाना है\" बॉक्स में टाइप करें।",
            "step4.instruction": "<strong>चरण 4:</strong> कैब का प्रकार चुनें (मिनी, प्राइम, आदि) और \"बुक करें\" पर टैप करें।",
            "step5.instruction": "<strong>चरण 5:</strong> बुकिंग पूरी! आप अपने ड्राइवर को ट्रैक कर सकते हैं।",

            "feedback.welcome": "बढ़िया! राइड बुकिंग शुरू हुई।",
            "feedback.pickup": "अच्छा काम! पिकअप स्थान सेट हुआ।",
            "feedback.destination": "बढ़िया! गंतव्य सेट हुआ।",
            "feedback.book": "शानदार! राइड बुक हो गई।",

            "completion.success": "राइड बुक हुई!",
            "completion.message": "आपकी ओला/उबर राइड सफलतापूर्वक बुक हुई"
        },

        // Train ticket tutorial translations
        "train-ticket-tutorial": {
            "page.title": "ट्रेन टिकट बुकिंग ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "ट्रेन टिकट बुक करना",
            "tutorial.completion": "बधाई हो! आपने IRCTC का उपयोग करके ट्रेन टिकट बुक करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह IRCTC ऐप का होम स्क्रीन है। टिकट बुक करने के लिए \"ट्रेन टिकट\" पर टैप करें।",
            "step2.instruction": "<strong>चरण 2:</strong> \"From\" में प्रस्थान स्टेशन और \"To\" में गंतव्य स्टेशन चुनें।",
            "step3.instruction": "<strong>चरण 3:</strong> यात्रा की तारीख चुनें और \"ट्रेन खोजें\" पर टैप करें।",
            "step4.instruction": "<strong>चरण 4:</strong> उपलब्ध ट्रेनों की सूची से अपनी पसंदीदा ट्रेन चुनें।",
            "step5.instruction": "<strong>चरण 5:</strong> यात्री विवरण भरें और \"भुगतान करें\" पर टैप करें।",

            "feedback.home": "बढ़िया! ट्रेन बुकिंग शुरू हुई।",
            "feedback.fromtowhere": "अच्छा काम! स्टेशन चुने गए।",
            "feedback.train": "बढ़िया! ट्रेन मिली।",
            "feedback.trainselect": "अच्छा! ट्रेन चुनी गई।",
            "feedback.passenger": "बढ़िया! यात्री विवरण भरा गया।",
            "feedback.pay": "शानदार! टिकट बुक हो गई।",

            "completion.success": "टिकट बुक हुई!",
            "completion.message": "आपकी ट्रेन टिकट सफलतापूर्वक बुक हुई"
        },

        // Amazon tutorial translations
        "amazon-tutorial": {
            "page.title": "अमेज़न शॉपिंग ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "अमेज़न पर शॉपिंग करना",
            "tutorial.completion": "बधाई हो! आपने अमेज़न पर शॉपिंग करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह अमेज़न ऐप का होम स्क्रीन है। कुछ खोजने के लिए ऊपर दिए गए सर्च बार का उपयोग करें।",
            "step2.instruction": "<strong>चरण 2:</strong> खोज परिणामों से कोई उत्पाद चुनें।",
            "step3.instruction": "<strong>चरण 3:</strong> उत्पाद विवरण देखें और \"कार्ट में जोड़ें\" पर टैप करें।",
            "step4.instruction": "<strong>चरण 4:</strong> कार्ट में जाएं और \"अभी खरीदें\" पर टैप करें।",
            "step5.instruction": "<strong>चरण 5:</strong> डिलीवरी पता चुनें और ऑर्डर की पुष्टि करें।",

            "completion.success": "ऑर्डर पूरा!",
            "completion.message": "आपका अमेज़न ऑर्डर सफलतापूर्वक प्लेस हुआ"
        },
    },

    "ka": {
        "common": {
            "nav.home": "ಹೋಮ್",
            "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
            "button.back": "ಹಿಂದಕ್ಕೆ"
        },
        "home": {
            "page.title": "ಬಳಸುವುದು ಹೇಗೆ ಎಂದು ಕಲಿಸಿ! - ಸರಳ ಆಪ್ ಕಲಿಕೆ ಮಾರ್ಗದರ್ಶಿ",
            "home.title": "ಬಳಸುವುದು ಹೇಗೆ ಎಂದು ಕಲಿಸಿ!",
            "home.startLearning": "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
            "home.chooseTutorial": "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಕೆಯ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಕೆಳಗಿನ ಯಾವುದೇ ಟ್ಯುಟೋರಿಯಲ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
            "home.subheading": "ಹಂತ-ಹಂತದ ಅಭ್ಯಾಸ ಮಾರ್ಗದರ್ಶಿಯೊಂದಿಗೆ ಜನಪ್ರಿಯ ಆಪ್\u200cಗಳನ್ನು ಹೇಗೆ ಬಳಸಬೇಕೆಂದು ತಿಳಿಯಿರಿ.",
            "card.phonepe.title": "PhonePe ಯಲ್ಲಿ ಹಣ ಕಳುಹಿಸಿ",
            "card.phonepe.description": "PhonePe ಆಪ್\u200c ಬಳಸಿ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಹಣ ಕಳುಹಿಸುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ.",
            "card.whatsapp.title": "WhatsApp ವೀಡಿಯೋ ಕರೆ ಬಳಸಿ",
            "card.whatsapp.description": "ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರಿಗೆ ವೀಡಿಯೋ ಕರೆ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ.",
            "card.electricity.title": "ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಸಿ",
            "card.electricity.description": "PhonePe ಅಥವಾ BBPS ಬಳಸಿ ನಿಮ್ಮ ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಸುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ.",
            "card.ride.title": "Ola/Uber ರೈಡ್ ಬುಕ್ ಮಾಡಿ",
            "card.ride.description": "ಕ್ಯಾಬ್ ಬುಕ್ ಮಾಡುವುದು ಮತ್ತು ನಿಮ್ಮ ಚಾಲಕನನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ.",
            "card.maps.title": "Google Maps ಬಳಸಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ",
            "card.maps.description": "ದಿಕ್ಕುಗಳನ್ನು ಹುಡುಕುವುದು ಮತ್ತು ಹೊಸ ಸ್ಥಳಗಳಿಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ.",
            "card.train.title": "ರೈಲು ಟಿಕೆಟ್\u200cಗಳನ್ನು ಬುಕ್ ಮಾಡಿ",
            "card.train.description": "IRCTC ಆಪ್\u200c ಬಳಸಿ ರೈಲು ಟಿಕೆಟ್\u200cಗಳನ್ನು ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ."
        },
        "phonepe": {
            "page.title": "PhonePe ಹಣ ವರ್ಗಾವಣೆ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "PhonePe ಯಲ್ಲಿ ಹಣ ಕಳುಹಿಸುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! PhonePe ಬಳಸಿ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಹಣ ಕಳುಹಿಸುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು PhonePe ಹೋಮ್ ಸ್ಕ್ರೀನ್. ಯಾರಿಗಾದರೂ ಹಣ ಕಳುಹಿಸಲು, 'ಮನಿ ಟ್ರಾನ್ಸ್ಫರ್ಸ್' ಅಡಿಯಲ್ಲಿ 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ' ಆಯ್ಕೆಯನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ. ಇದು ಭಾರತದಲ್ಲಿ ಯಾವುದೇ ಫೋನ್ ಸಂಖ್ಯೆಗೆ ಹಣ ಕಳುಹಿಸಲು ನಿಮಗೆ ಅನುಮತಿಸುತ್ತದೆ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> ಈಗ ನೀವು 'ಸೆಂಟ್‌ ಮನಿ' ಸ್ಕ್ರೀನ್\u200cನಲ್ಲಿ ಇದ್ದೀರಿ. ಇಲ್ಲಿ ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಪಾವತಿಗಳನ್ನು ನೋಡಬಹುದು. ಹೊಸ ಪಾವತಿ ಮಾಡಲು, ನಿಮ್ಮ ಸ್ಕ್ರೀನ್\u200cನ ಕೆಳಭಾಗದಲ್ಲಿರುವ ನೇರಳೆ ಬಣ್ಣದ 'ಹೊಸ ಪಾವತಿ' ಬಟನ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ಈಗ ನೀವು ಒಂದು ಕಾಂಟ್ಯಾಕ್ಟ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಲು ಅಥವಾ ಕಾಂಟ್ಯಾಕ್ಟ್ ಹುಡುಕಲು ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ಹುಡುಕಾಟ ಬಾಕ್ಸ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step4.instruction": "<strong>ಹಂತ 4:</strong> ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಪಟ್ಟಿಯಿಂದ ಕಾಂಟ್ಯಾಕ್ಟ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ನೀವು ಹಣ ಕಳುಹಿಸಲು ಬಯಸುವ ಕಾಂಟ್ಯಾಕ್ಟ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step5.instruction": "<strong>ಹಂತ 5:</strong> ಈಗ ನೀವು ಕಳುಹಿಸಲು ಬಯಸುವ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ. ನಂತರ ಮುಂದುವರಿಯಲು 'ಪಾವತಿಸಿ' ಬಟನ್ ಟ್ಯಾಪ್ ಮಾಡಿ. ಇದರ ನಂತರ, ವಹಿವಾಟು ಪೂರ್ಣಗೊಳಿಸಲು ನೀವು ನಿಮ್ಮ UPI PIN ಅನ್ನು ನಮೂದಿಸಬೇಕಾಗುತ್ತದೆ.",
            "feedback.home": "ಉತ್ತಮ ಕೆಲಸ! ಈಗ ನೀವು 'ಸೆಂಟ್‌ ಮನಿ' ಸ್ಕ್ರೀನ್\u200cಅನ್ನು ನೋಡುತ್ತೀರಿ.",
            "feedback.sendmoney": "ಪರ್ಫೆಕ್ಟ್! ನೀವು 'ಹೊಸ ಪಾವತಿ' ಆಯ್ಕೆ ಮಾಡಿದ್ದೀರಿ. ಈಗ ನೀವು ಕಾಂಟ್ಯಾಕ್ಟ್ ನಂಬರ್\u200cಗಳನ್ನು ನೋಡುತ್ತೀರಿ.",
            "feedback.selectcontact": "ಉತ್ತಮ! ನೀವು ಕಾಂಟ್ಯಾಕ್ಟ್ ನಂಬರ್ ನಮೂದಿಸಲು ಆಯ್ಕೆ ಮಾಡಿದ್ದೀರಿ.",
            "feedback.searchcontact": "ಉತ್ತಮ! ಹೊಸ ಪಾವತಿ ಮಾಡಲು ನೀವು ಕಾಂಟ್ಯಾಕ್ಟ್ ನಂಬರ್ ಆಯ್ಕೆ ಮಾಡಿದ್ದೀರಿ.",
            "feedback.pay": "ಅದ್ಭುತ! ಇದರ ನಂತರ, ಪಾವತಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಕೇವಲ UPI ಪಿನ್ ನಮೂದಿಸಿ.",
            "completion.success": "ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
            "completion.message": "₹1 ಆಶಿಶ್\u200cಗೆ ಕಳುಹಿಸಲಾಗಿದೆ"
        },
        "whatsapp": {
            "page.title": "WhatsApp ವೀಡಿಯೋ ಕರೆ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "WhatsApp ನಲ್ಲಿ ವೀಡಿಯೋ ಕರೆ ಮಾಡುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! WhatsApp ನಲ್ಲಿ ವೀಡಿಯೋ ಕರೆ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು ನಿಮ್ಮ WhatsApp ಚಾಟ್\u200cಗಳ ಪಟ್ಟಿ. ನಿಮ್ಮ ಎಲ್ಲಾ ಸಂಭಾಷಣೆಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ. ವೀಡಿಯೋ ಕರೆ ಮಾಡಲು, ಮೊದಲು ನೀವು ಕರೆ ಮಾಡಲು ಬಯಸುವ ಕಾಂಟ್ಯಾಕ್ಟ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ. ಈ ಉದಾಹರಣೆಯಲ್ಲಿ, 'Random Aunty' ಎಂದು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> ಈಗ ನೀವು ಚಾಟ್ ಸ್ಕ್ರೀನ್\u200cನಲ್ಲಿ ಇದ್ದೀರಿ, ಇಲ್ಲಿ ಈ ಕಾಂಟ್ಯಾಕ್ಟ್\u200cನೊಂದಿಗೆ ನಿಮ್ಮ ಸಂದೇಶಗಳನ್ನು ನೋಡಬಹುದು. ಸ್ಕ್ರೀನ್\u200cನ ಮೇಲಿನ ಬಲ ಮೂಲೆಯನ್ನು ನೋಡಿ. ವೀಡಿಯೋ ಕರೆ ಪ್ರಾರಂಭಿಸಲು ವೀಡಿಯೋ ಕ್ಯಾಮೆರಾ ಐಕಾನ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ನಿಮ್ಮ ವೀಡಿಯೋ ಕರೆ ಈಗ ಸಂಪರ್ಕಗೊಂಡಿದೆ! ಮುಖ್ಯ ಸ್ಕ್ರೀನ್\u200cನಲ್ಲಿ ನೀವು ಇನ್ನೊಬ್ಬ ವ್ಯಕ್ತಿಯನ್ನು ಮತ್ತು ಮೇಲಿನ ಬಲದಲ್ಲಿರುವ ಸಣ್ಣ ವಿಂಡೋದಲ್ಲಿ ನಿಮ್ಮನ್ನು ನೋಡಬಹುದು. ನೀವು ಕರೆ ಕೊನೆಗೊಳಿಸಲು ಬಯಸಿದಾಗ, ಸ್ಕ್ರೀನ್\u200cನ ಕೆಳಭಾಗದಲ್ಲಿ ಮಧ್ಯದಲ್ಲಿ 'X' ಇರುವ ಕೆಂಪು ಬಟನ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "feedback.home": "ಉತ್ತಮ ಕೆಲಸ! ಈಗ ನೀವು ಈ ಕಾಂಟ್ಯಾಕ್ಟ್\u200cಗಾಗಿ ಚಾಟ್ ಸ್ಕ್ರೀನ್\u200cಅನ್ನು ನೋಡುತ್ತೀರಿ.",
            "feedback.chat": "ಪರ್ಫೆಕ್ಟ್! ನೀವು ವೀಡಿಯೋ ಕರೆ ಬಟನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿದ್ದೀರಿ. ನಿಮ್ಮ ಕರೆ ಸಂಪರ್ಕಗೊಳ್ಳುತ್ತಿದೆ.",
            "feedback.call": "ಚೆನ್ನಾಗಿ ಮಾಡಿದ್ದೀರಿ! ನೀವು ಕೆಂಪು ಬಟನ್ ಒತ್ತಿ ಕರೆ ಕೊನೆಗೊಳಿಸಿದ್ದೀರಿ.",
            "completion.success": "ಕರೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
            "completion.message": "ನೀವು ಯಶಸ್ವಿಯಾಗಿ WhatsApp ವೀಡಿಯೋ ಕರೆ ಮಾಡಿದ್ದೀರಿ"
        },
        "electricity-bill-tutorial": {
            "page.title": "ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಸುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಸುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು Paytm ಹೋಮ್ ಸ್ಕ್ರೀನ್. ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಸಲು, 'ವಿದ್ಯುತ್' ಆಯ್ಕೆಯನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಉದಾಹರಣೆಗೆ, 'ಮಹಾರಾಷ್ಟ್ರ' ಆಯ್ಕೆ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ನಿಮ್ಮ ವಿದ್ಯುತ್ ಮಂಡಳಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಉದಾಹರಣೆಗೆ, 'Mahavitran-MSEDCL' ಆಯ್ಕೆ ಮಾಡಿ.",
            "step4.instruction": "<strong>ಹಂತ 4:</strong> ನಿಮ್ಮ ಉಪ-ವಿಭಾಗ ಅಥವಾ ERO/BU ಆಯ್ಕೆ ಮಾಡಿ.",
            "step5.instruction": "<strong>ಹಂತ 5:</strong> ನಿಮ್ಮ ಗ್ರಾಹಕ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ ಮತ್ತು 'ಪಾವತಿಸಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "feedback.board": "ಉತ್ತಮ! ನೀವು ವಿದ್ಯುತ್ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿದ್ದೀರಿ.",
            "feedback.state": "ಉತ್ತಮ ಕೆಲಸ! ರಾಜ್ಯ ಆಯ್ಕೆಯಾಗಿದೆ.",
            "feedback.subdivision": "ಅತ್ಯುತ್ತಮ! ಮಂಡಳಿ ಆಯ್ಕೆಯಾಗಿದೆ.",
            "feedback.consumer": "ಉತ್ತಮ! ಉಪ-ವಿಭಾಗ ಆಯ್ಕೆಯಾಗಿದೆ.",
            "feedback.pay": "ಅದ್ಭುತ! ಈಗ ನಿಮ್ಮ ಬಿಲ್ ಪಾವತಿ ಮುಂದುವರಿಯುತ್ತದೆ.",
            "completion.success": "ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
            "completion.message": "ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿ ಪೂರ್ಣಗೊಂಡಿದೆ"
        },
        "google-maps-tutorial": {
            "page.title": "Google Maps ನ್ಯಾವಿಗೇಷನ್ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "Google Maps ಬಳಸಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! Google Maps ಬಳಸಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು Google Maps ಹೋಮ್ ಸ್ಕ್ರೀನ್. ಒಂದು ಸ್ಥಳವನ್ನು ಹುಡುಕಲು, ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ಹುಡುಕಾಟ ಬಾರ್\u200cನಲ್ಲಿ 'ತ್ರಿವೇಣಿ ಘಾಟ್' ಎಂದು ಟೈಪ್ ಮಾಡಿ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳಿಂದ 'ತ್ರಿವೇಣಿ ಘಾಟ್' ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ಸ್ಥಳದ ವಿವರಗಳನ್ನು ನೋಡಿದ ನಂತರ, 'ದಿಕ್ಕುಗಳು' ಬಟನ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step4.instruction": "<strong>ಹಂತ 4:</strong> ಮಾರ್ಗದ ಆಯ್ಕೆಗಳನ್ನು ನೋಡಿ ಮತ್ತು 'ಪ್ರಾರಂಭಿಸಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step5.instruction": "<strong>ಹಂತ 5:</strong> ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭವಾಗಿದೆ! ಈಗ ನೀವು ನಿರ್ದೇಶನಗಳನ್ನು ಅನುಸರಿಸಬಹುದು.",
            "feedback.home": "ಉತ್ತಮ! ನೀವು ಸ್ಥಳವನ್ನು ಹುಡುಕಿದ್ದೀರಿ.",
            "feedback.location": "ಉತ್ತಮ ಕೆಲಸ! ಸ್ಥಳ ಕಂಡುಬಂದಿದೆ.",
            "feedback.direction": "ಅತ್ಯುತ್ತಮ! ದಿಕ್ಕುಗಳು ಕಂಡುಬಂದಿವೆ.",
            "feedback.start": "ಅದ್ಭುತ! ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭವಾಗಿದೆ.",
            "completion.success": "ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭವಾಗಿದೆ!",
            "completion.message": "Google Maps ನ್ಯಾವಿಗೇಷನ್ ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಾರಂಭವಾಗಿದೆ"
        },
        "ola-uber-tutorial": {
            "page.title": "Ola/Uber ರೈಡ್ ಬುಕಿಂಗ್ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "Ola/Uber ರೈಡ್ ಬುಕ್ ಮಾಡುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! Ola/Uber ರೈಡ್ ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು Ola ಆಪ್\u200cನ ಸ್ವಾಗತ ಸ್ಕ್ರೀನ್. ರೈಡ್ ಬುಕ್ ಮಾಡಲು, 'ರೈಡ್ ಬುಕ್ ಮಾಡಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> ನಿಮ್ಮ ಪಿಕಪ್ ಸ್ಥಳವನ್ನು ಆರಿಸಿ. ಮ್ಯಾಪ್\u200cನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಾನವನ್ನು ಸೆಟ್ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ನಿಮ್ಮ ಗಮ್ಯಸ್ಥಾನವನ್ನು ನಮೂದಿಸಿ. 'ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು' ಬಾಕ್ಸ್\u200cನಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ.",
            "step4.instruction": "<strong>ಹಂತ 4:</strong> ಕ್ಯಾಬ್\u200c ಪ್ರಕಾರವನ್ನು (ಮಿನಿ, ಪ್ರೈಮ್, ಇತ್ಯಾದಿ) ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು 'ಬುಕ್ ಮಾಡಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step5.instruction": "<strong>ಹಂತ 5:</strong> ಬುಕಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ! ನೀವು ನಿಮ್ಮ ಚಾಲಕನನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಬಹುದು.",
            "feedback.welcome": "ಉತ್ತಮ! ರೈಡ್ ಬುಕಿಂಗ್ ಪ್ರಾರಂಭವಾಗಿದೆ.",
            "feedback.pickup": "ಉತ್ತಮ ಕೆಲಸ! ಪಿಕಪ್ ಸ್ಥಳ ಸೆಟ್ ಆಗಿದೆ.",
            "feedback.destination": "ಅತ್ಯುತ್ತಮ! ಗಮ್ಯಸ್ಥಾನ ಸೆಟ್ ಆಗಿದೆ.",
            "feedback.book": "ಅದ್ಭುತ! ರೈಡ್ ಬುಕ್ ಆಗಿದೆ.",
            "completion.success": "ರೈಡ್ ಬುಕ್ ಆಗಿದೆ!",
            "completion.message": "ನಿಮ್ಮ Ola/Uber ರೈಡ್ ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಆಗಿದೆ"
        },
        "train-ticket-tutorial": {
            "page.title": "ರೈಲು ಟಿಕೆಟ್ ಬುಕಿಂಗ್ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "ರೈಲು ಟಿಕೆಟ್\u200cಗಳನ್ನು ಬುಕ್ ಮಾಡುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! IRCTC ಬಳಸಿ ರೈಲು ಟಿಕೆಟ್\u200cಗಳನ್ನು ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು IRCTC ಆಪ್\u200cನ ಹೋಮ್ ಸ್ಕ್ರೀನ್. ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡಲು, 'ರೈಲು ಟಿಕೆಟ್\u200cಗಳು' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> 'From' ನಲ್ಲಿ ಹೊರಡುವ ಸ್ಟೇಷನ್ ಮತ್ತು 'To' ನಲ್ಲಿ ಗಮ್ಯಸ್ಥಾನ ಸ್ಟೇಷನ್ ಆಯ್ಕೆ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ಪ್ರಯಾಣದ ದಿನಾಂಕವನ್ನು ಆರಿಸಿ ಮತ್ತು 'ರೈಲುಗಳನ್ನು ಹುಡುಕಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step4.instruction": "<strong>ಹಂತ 4:</strong> ಲಭ್ಯವಿರುವ ರೈಲುಗಳ ಪಟ್ಟಿಯಿಂದ ನಿಮ್ಮ ಆದ್ಯತೆಯ ರೈಲನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
            "step5.instruction": "<strong>ಹಂತ 5:</strong> ಪ್ರಯಾಣಿಕರ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು 'ಪಾವತಿಸಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "feedback.home": "ಉತ್ತಮ! ರೈಲು ಬುಕಿಂಗ್ ಪ್ರಾರಂಭವಾಗಿದೆ.",
            "feedback.fromtowhere": "ಉತ್ತಮ ಕೆಲಸ! ಸ್ಟೇಷನ್\u200cಗಳು ಆಯ್ಕೆಯಾಗಿವೆ.",
            "feedback.train": "ಅತ್ಯುತ್ತಮ! ರೈಲುಗಳು ಕಂಡುಬಂದಿವೆ.",
            "feedback.trainselect": "ಉತ್ತಮ! ರೈಲು ಆಯ್ಕೆಯಾಗಿದೆ.",
            "feedback.passenger": "ಉತ್ತಮ! ಪ್ರಯಾಣಿಕರ ವಿವರಗಳು ಭರ್ತಿಯಾಗಿವೆ.",
            "feedback.pay": "ಅದ್ಭುತ! ಟಿಕೆಟ್ ಬುಕ್ ಆಗಿದೆ.",
            "completion.success": "ಟಿಕೆಟ್ ಬುಕ್ ಆಗಿದೆ!",
            "completion.message": "ನಿಮ್ಮ ರೈಲು ಟಿಕೆಟ್ ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಆಗಿದೆ"
        },
        "amazon-tutorial": {
            "page.title": "Amazon ಶಾಪಿಂಗ್ ಟ್ಯುಟೋರಿಯಲ್ - ನಿಮ್ಮ ಪೋಷಕರಿಗೆ ಸ್ಮಾರ್ಟ್ಫೋನ್ ಕಲಿಸಿ",
            "tutorial.title": "Amazon ನಲ್ಲಿ ಶಾಪಿಂಗ್ ಮಾಡುವುದು",
            "tutorial.completion": "ಅಭಿನಂದನೆಗಳು! Amazon ನಲ್ಲಿ ಶಾಪಿಂಗ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕಲಿತಿದ್ದೀರಿ.",
            "step1.instruction": "<strong>ಹಂತ 1:</strong> ಇದು Amazon ಆಪ್\u200cನ ಹೋಮ್ ಸ್ಕ್ರೀನ್. ಏನನ್ನಾದರೂ ಹುಡುಕಲು ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ಹುಡುಕಾಟ ಬಾರ್ ಅನ್ನು ಬಳಸಿ.",
            "step2.instruction": "<strong>ಹಂತ 2:</strong> ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳಿಂದ ಒಂದು ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
            "step3.instruction": "<strong>ಹಂತ 3:</strong> ಉತ್ಪನ್ನದ ವಿವರಗಳನ್ನು ನೋಡಿ ಮತ್ತು 'ಕಾರ್ಟ್\u200cಗೆ ಸೇರಿಸಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step4.instruction": "<strong>ಹಂತ 4:</strong> ಕಾರ್ಟ್\u200cಗೆ ಹೋಗಿ ಮತ್ತು 'ಈಗ ಖರೀದಿಸಿ' ಟ್ಯಾಪ್ ಮಾಡಿ.",
            "step5.instruction": "<strong>ಹಂತ 5:</strong> ವಿತರಣಾ ವಿಳಾಸವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಆರ್ಡರ್ ಅನ್ನು ದೃಢೀಕರಿಸಿ.",
            "completion.success": "ಆರ್ಡರ್ ಪ್ಲೇಸ್ ಆಗಿದೆ!",
            "completion.message": "ನಿಮ್ಮ Amazon ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ಪ್ಲೇಸ್ ಆಗಿದೆ"
        },
    }// Add more languages here as needed

};

// Cache for loaded translation files
const translationCache = {};

// Initialize localization
function initLocalization() {
    // Try to get language from localStorage (with fallback for browser environments without localStorage)
    let savedLanguage;
    try {
        savedLanguage = localStorage.getItem('language');
    } catch (e) {
        console.warn('localStorage not available');
        savedLanguage = null;
    }

    // If not in localStorage, try to detect from browser
    if (!savedLanguage) {
        const browserLang = navigator.language.split('-')[0];
        // Only use browser language if it's one we support
        if (LANGUAGES[browserLang]) {
            currentLanguage = browserLang;
        }
    } else {
        currentLanguage = savedLanguage;
    }

    // Set HTML lang attribute
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = LANGUAGES[currentLanguage].dir;

    // Create language selector if it doesn't exist
    if (!document.querySelector('.language-selector')) {
        createLanguageSelector();
    }

    // Load page-specific translations
    const pageName = getPageName();
    loadTranslations(pageName);
}

// Get current page name (for loading the right translation file)
function getPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '') || 'home';

    if (filename === 'index' || filename === '') {
        return 'home';
    }

    // Handle tutorial pages
    if (filename === 'phonepe-tutorial') {
        return 'phonepe';
    }
    if (filename === 'whatsapp-tutorial') {
        return 'whatsapp';
    }
    if (filename === 'electricity-bill-tutorial') {
        return 'electricity-bill-tutorial';
    }
    if (filename === 'google-maps-tutorial') {
        return 'google-maps-tutorial';
    }
    if (filename === 'ola-uber-tutorial') {
        return 'ola-uber-tutorial';
    }
    if (filename === 'train-ticket-tutorial') {
        return 'train-ticket-tutorial';
    }
    if (filename === 'amazon-tutorial') {
        return 'amazon-tutorial';
    }

    return filename;
}

// Create the language selector dropdown
function createLanguageSelector() {
    const selectorContainer = document.createElement('div');
    selectorContainer.className = 'language-selector';

    const select = document.createElement('select');
    select.id = 'language-select';

    // Create options for each language
    Object.keys(LANGUAGES).forEach(langCode => {
        const option = document.createElement('option');
        option.value = langCode;
        option.textContent = LANGUAGES[langCode].nativeName;
        option.selected = langCode === currentLanguage;
        select.appendChild(option);
    });

    // Add event listener for language change
    select.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    selectorContainer.appendChild(select);

    // Add to the page header
    const header = document.querySelector('.container');
    if (header) {
        header.insertBefore(selectorContainer, header.firstChild);
    }
}

// Change the current language
function changeLanguage(lang) {
    if (LANGUAGES[lang] && lang !== currentLanguage) {
        currentLanguage = lang;
        
        // Save to localStorage with error handling
        try {
            localStorage.setItem('language', lang);
        } catch (e) {
            console.warn('Could not save language to localStorage');
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = LANGUAGES[lang].dir;

        // Load translations and update the page
        const pageName = getPageName();
        loadTranslations(pageName);
    }
}

// Load translations for the current page
function loadTranslations(pageName) {
    try {
        // Get translations from embedded object instead of fetch
        const commonTranslations = TRANSLATIONS[currentLanguage]?.["common"] || {};
        const pageTranslations = TRANSLATIONS[currentLanguage]?.[pageName] || {};

        // Cache the translations (fixed template literal syntax)
        translationCache[`${currentLanguage}_common`] = commonTranslations;
        translationCache[`${currentLanguage}_${pageName}`] = pageTranslations;

        // Combine common and page translations
        const translations = {
            ...commonTranslations,
            ...pageTranslations
        };

        // Update all elements with data-i18n attribute
        updatePageTranslations(translations);

    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Update all translatable elements on the page
function updatePageTranslations(translations) {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (translations[key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[key];
            } else {
                element.innerHTML = translations[key];
            }
        }
    });

    // Handle elements with data-i18n-attr (for translating attributes)
    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(element => {
        const attrSpec = element.getAttribute('data-i18n-attr');
        const [attrName, keyName] = attrSpec.split('=');

        if (attrName && keyName && translations[keyName]) {
            element.setAttribute(attrName, translations[keyName]);
        }
    });

    // Update the page title
    if (translations['page.title']) {
        document.title = translations['page.title'];
    }
}

// Get translations for the current language and page
function getTranslations() {
    const pageName = getPageName();
    return {
        ...translationCache[`${currentLanguage}_common`] || {},
        ...translationCache[`${currentLanguage}_${pageName}`] || {}
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLocalization);

// Export functions for use in other scripts
window.localization = {
    changeLanguage,
    getCurrentLanguage: () => currentLanguage,
    getAvailableLanguages: () => LANGUAGES,
    getTranslations: getTranslations
};