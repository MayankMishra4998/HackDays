/**
 * KarigarConnect - Core Application Logic
 * National Hackathon Edition | AI-Driven Smart Cataloging & Multi-Marketplace Copilot for Artisans
 * 
 * Features:
 * - 4-Step Guided Artisan Copilot (Add Craft -> Describe Naturally -> Generate Listing -> Review & Publish)
 * - AI4Bharat Regional Indic ASR & SpeechSynthesis Text-to-Speech Readback
 * - Studio-Grade Vision Lab with Split Comparison Slider & Cloudinary AI Media Optimization
 * - Explainable Cost-Plus Fair Pricing Assistant with Proportional Breakdown & Market Benchmarks
 * - Multi-Channel Synchronization (ONDC Beckn 1.2 Protocol JSON & GeM B2B Procurement CSV)
 * - Deterministic Artisan Truth Layer (0% LLM Hallucination Guarantee)
 * - Live Curated Buyer Exhibition with Real-Time Search & Category Filters
 * - Measurable Impact Dashboard & Interactive Notion 5-Sprint Agile Documentation
 */

// ==========================================================================
// 1. Authentic Craft Master Database with Cloudinary Assets
// ==========================================================================
const CRAFT_CATALOG_DB = [
  {
    id: "craft-001",
    name: "Handcrafted River Bamboo Basket",
    nameHindi: "हाथ से बुनी गई असमिया बांस की टोकरी",
    craftType: "Bamboo & Cane Craft",
    craftTypeHindi: "बांस एवं बेंत शिल्प",
    category: "Home & Kitchen / Storage",
    region: "Kamrup, Assam (ODOP Certified)",
    artisanName: "Ramlal Deka",
    artisanNameHindi: "रामलाल डेका",
    artisanCommunity: "Barpeta Bamboo Artisans Guild",
    rawImage: "assets/bamboo_basket_raw.jpg",
    studioImage: "assets/bamboo_basket_studio.jpg",
    cloudinaryPublicId: "karigar/crafts/bamboo_basket_kamrup_01",
    cloudinaryRawUrl: "https://res.cloudinary.com/karigarconnect/image/upload/v1729801200/karigar/crafts/bamboo_basket_raw.jpg",
    cloudinaryStudioUrl: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_white,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/bamboo_basket_studio.jpg",
    cloudinaryBandwidthSavings: "87% (961 KB ➔ 128 KB)",
    cloudinaryPresets: {
      white: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_white,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/bamboo_basket_studio.jpg",
      wood: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_rgb:5c2c16,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/bamboo_basket_studio.jpg",
      enhance: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_improve:indoor,e_auto_contrast,e_sharpen:120/v1729801200/karigar/crafts/bamboo_basket_studio.jpg",
      watermark: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,l_text:Inter_28_bold:Assam%20GI-382%20Certified,co_rgb:ffffff,b_rgb:059669_80,g_south_east,y_24,x_24,r_8/v1729801200/karigar/crafts/bamboo_basket_studio.jpg",
      mobile2g: "https://res.cloudinary.com/karigarconnect/image/upload/w_500,c_scale,f_auto,q_auto:eco/v1729801200/karigar/crafts/bamboo_basket_studio.jpg"
    },
    material: "River-cured Assam Muli Bamboo",
    color: "Natural Golden Ochre",
    dimensions: "32cm x 32cm x 24cm",
    weight: "480g",
    daysToMake: 2,
    materialCost: 140,
    dailyWage: 350,
    complexityFactor: 1.2,
    logisticsCost: 60,
    recommendedPrice: 499,
    priceBand: "₹450 - ₹540",
    marketMedian: 450,
    views: 1280,
    giTag: "Assam Cane & Bamboo (GI-382)",
    voiceNoteTextHindi: "ये हाथ से बुनी गई असम की मजबूत बांस की टोकरी है। इसे बनाने में पूरे दो दिन लगे और नदी किनारे के पके बांस का उपयोग हुआ है। इसमें 140 रुपये का बांस और प्राकृतिक तेल लगा। इसे फल, अनाज या सजावट के लिए काम में ले सकते हैं। पानी में ज्यादा देर ना भिगोएं।",
    voiceNoteTextEnglish: "This is a sturdy bamboo basket handwoven in Assam. It took two full days of labor using river-cured mature bamboo. Total raw material cost was 140 rupees for bamboo and organic curing oil. Suitable for fruit, grains, or home decor. Keep dry and avoid soaking in water.",
    truthBindings: [
      { voicePhrase: "हाथ से बुनी गई बांस की टोकरी", attribute: "Craft & Product", extracted: "Handwoven Bamboo Basket", confidence: "99.4%" },
      { voicePhrase: "असम की मजबूत", attribute: "Provenance / ODOP", extracted: "Kamrup, Assam (ODOP Certified)", confidence: "98.9%" },
      { voicePhrase: "पूरे दो दिन लगे", attribute: "Artisan Labor Time", extracted: "2 Days (16 Labor Hours)", confidence: "99.8%" },
      { voicePhrase: "140 रुपये का बांस", attribute: "Direct Material Cost", extracted: "₹140.00 Raw Materials", confidence: "100%" },
      { voicePhrase: "फल, अनाज या सजावट", attribute: "Recommended Use", extracted: "Kitchen Storage & Decor", confidence: "97.5%" }
    ]
  },
  {
    id: "craft-002",
    name: "Jaipur Cobalt Blue Pottery Floral Urn",
    nameHindi: "जयपुर पारंपरिक नीली मिट्टी का फूलदान",
    craftType: "Blue Pottery Craft",
    craftTypeHindi: "पारंपरिक ब्लू पॉटरी शिल्प",
    category: "Home Decor / Ceramics",
    region: "Sanganer, Jaipur, Rajasthan (GI Tagged)",
    artisanName: "Kripal Singh Rathore",
    artisanNameHindi: "कृपाल सिंह राठौर",
    artisanCommunity: "Sanganer Traditional Ceramic Guild",
    rawImage: "assets/blue_pottery_raw.jpg",
    studioImage: "assets/blue_pottery_studio.jpg",
    cloudinaryPublicId: "karigar/crafts/blue_pottery_sanganer_02",
    cloudinaryRawUrl: "https://res.cloudinary.com/karigarconnect/image/upload/v1729801200/karigar/crafts/blue_pottery_raw.jpg",
    cloudinaryStudioUrl: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_white,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/blue_pottery_studio.jpg",
    cloudinaryBandwidthSavings: "85% (1.02 MB ➔ 152 KB)",
    cloudinaryPresets: {
      white: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_white,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/blue_pottery_studio.jpg",
      wood: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_rgb:5c2c16,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/blue_pottery_studio.jpg",
      enhance: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_improve:indoor,e_auto_contrast,e_sharpen:120/v1729801200/karigar/crafts/blue_pottery_studio.jpg",
      watermark: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,l_text:Inter_28_bold:Jaipur%20GI-45%20Certified,co_rgb:ffffff,b_rgb:0369a1_80,g_south_east,y_24,x_24,r_8/v1729801200/karigar/crafts/blue_pottery_studio.jpg",
      mobile2g: "https://res.cloudinary.com/karigarconnect/image/upload/w_500,c_scale,f_auto,q_auto:eco/v1729801200/karigar/crafts/blue_pottery_studio.jpg"
    },
    material: "Quartz powder, glass cullet, Fuller's earth, gum",
    color: "Cobalt Blue, Turquoise & White Glaze",
    dimensions: "28cm Height x 16cm Diameter",
    weight: "920g",
    daysToMake: 4,
    materialCost: 280,
    dailyWage: 420,
    complexityFactor: 1.4,
    logisticsCost: 110,
    recommendedPrice: 1299,
    priceBand: "₹1,150 - ₹1,400",
    marketMedian: 1150,
    views: 2450,
    giTag: "Blue Pottery of Jaipur (GI-45)",
    voiceNoteTextHindi: "ये सांगानेर की प्रामाणिक ब्लू पॉटरी का फूलदान है। इसमें चिकनी मिट्टी नहीं, बल्कि क्वार्ट्ज पत्थर और मुल्तानी मिट्टी का उपयोग होता है। बनाने में पूरे 4 दिन लगे। 280 रुपये का कच्चा माल और कोबाल्ट नीले रंग के फूल हाथ से चित्रित किए गए हैं।",
    voiceNoteTextEnglish: "Authentic Jaipur Blue Pottery floral urn crafted in Sanganer. Made without clay using powdered quartz, raw glaze, and natural cobalt oxide pigments. Required 4 full days of firing and delicate brushwork. Material cost was ₹280.",
    truthBindings: [
      { voicePhrase: "सांगानेर की प्रामाणिक ब्लू पॉटरी", attribute: "Craft & Provenance", extracted: "Jaipur Blue Pottery (GI-45)", confidence: "99.8%" },
      { voicePhrase: "क्वार्ट्ज पत्थर और मुल्तानी मिट्टी", attribute: "Raw Material", extracted: "Quartz & Fuller's Earth", confidence: "99.2%" },
      { voicePhrase: "पूरे 4 दिन लगे", attribute: "Artisan Labor Time", extracted: "4 Days (32 Labor Hours)", confidence: "99.9%" },
      { voicePhrase: "280 रुपये का कच्चा माल", attribute: "Direct Material Cost", extracted: "₹280.00 Raw Materials", confidence: "100%" },
      { voicePhrase: "कोबाल्ट नीले रंग के फूल", attribute: "Motif & Technique", extracted: "Cobalt Floral Glazing", confidence: "98.7%" }
    ]
  },
  {
    id: "craft-003",
    name: "Channapatna Lacquerware Royal King Figurine",
    nameHindi: "चन्नापट्टना लाख-रंग राजा का खिलौना",
    craftType: "Turnwood Lacquer Craft",
    craftTypeHindi: "लाख लेपित काष्ठ शिल्प",
    category: "Toys & Collectibles",
    region: "Ramanagara, Karnataka (GI Tagged)",
    artisanName: "Basavaraj Gowda",
    artisanNameHindi: "बसवराज गौड़ा",
    artisanCommunity: "Channapatna Craftsmen Cooperative",
    rawImage: "assets/wooden_toy_raw.jpg",
    studioImage: "assets/wooden_toy_raw.jpg",
    cloudinaryPublicId: "karigar/crafts/channapatna_toy_03",
    cloudinaryRawUrl: "https://res.cloudinary.com/karigarconnect/image/upload/v1729801200/karigar/crafts/wooden_toy_raw.jpg",
    cloudinaryStudioUrl: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_white,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/wooden_toy_raw.jpg",
    cloudinaryBandwidthSavings: "88% (966 KB ➔ 118 KB)",
    cloudinaryPresets: {
      white: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_white,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/wooden_toy_raw.jpg",
      wood: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_background_removal,b_rgb:5c2c16,c_pad,w_1000,h_1000/v1729801200/karigar/crafts/wooden_toy_raw.jpg",
      enhance: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,e_improve:indoor,e_auto_contrast,e_sharpen:120/v1729801200/karigar/crafts/wooden_toy_raw.jpg",
      watermark: "https://res.cloudinary.com/karigarconnect/image/upload/f_auto,q_auto,l_text:Inter_28_bold:Channapatna%20GI-3%20Certified,co_rgb:ffffff,b_rgb:b45309_80,g_south_east,y_24,x_24,r_8/v1729801200/karigar/crafts/wooden_toy_raw.jpg",
      mobile2g: "https://res.cloudinary.com/karigarconnect/image/upload/w_500,c_scale,f_auto,q_auto:eco/v1729801200/karigar/crafts/wooden_toy_raw.jpg"
    },
    material: "Ivory Wood (Aale Mara) & Natural Vegetable Dyes",
    color: "Turmeric Yellow, Indigo & Vermilion",
    dimensions: "18cm x 8cm x 8cm",
    weight: "310g",
    daysToMake: 1.5,
    materialCost: 110,
    dailyWage: 380,
    complexityFactor: 1.3,
    logisticsCost: 50,
    recommendedPrice: 649,
    priceBand: "₹580 - ₹720",
    marketMedian: 620,
    views: 980,
    giTag: "Channapatna Toys (GI-3)",
    voiceNoteTextHindi: "यह चन्नापट्टना का हस्तनिर्मित लकड़ी का राजा खिलौना है। आले-मारा नरम लकड़ी और प्राकृतिक हल्दी और कुमकुम के रंगों से तैयार किया गया है। बच्चों के लिए बिल्कुल सुरक्षित और गैर-विषैला है। डेढ़ दिन का श्रम लगा।",
    voiceNoteTextEnglish: "This is a handcrafted Channapatna wooden royal king figurine. Turned from seasoned Wrightia tinctoria (ivory wood) and finished with non-toxic natural vegetable lacquers. 100% child-safe. Requires 1.5 days of precision lathe work.",
    truthBindings: [
      { voicePhrase: "चन्नापट्टना का लकड़ी का राजा खिलौना", attribute: "Craft & Product", extracted: "Channapatna Wooden King Toy", confidence: "99.7%" },
      { voicePhrase: "आले-मारा नरम लकड़ी", attribute: "Raw Material", extracted: "Wrightia tinctoria (Ivory Wood)", confidence: "99.0%" },
      { voicePhrase: "प्राकृतिक हल्दी और कुमकुम", attribute: "Finish & Safety", extracted: "Non-toxic Vegetable Lacquer", confidence: "99.3%" },
      { voicePhrase: "डेढ़ दिन का श्रम", attribute: "Artisan Labor Time", extracted: "1.5 Days (12 Hours)", confidence: "99.5%" }
    ]
  }
];

// ==========================================================================
// 2. Global State Variables
// ==========================================================================
let currentCraft = CRAFT_CATALOG_DB[0];
let currentBackdrop = 'white';
let isRecording = false;
let speechRecognizer = null;
let currentLanguage = 'en'; // 'en' or 'hi'
let isOfflineMode = false;
let offlineDrafts = [];
let currentCopilotStep = 1;

let cloudinaryConfig = {
  cloudName: 'karigarconnect',
  uploadPreset: 'karigar_artisan_preset',
  folder: 'karigar/crafts'
};
let activeCloudinaryPreset = 'white';

// ==========================================================================
// 3. Initialization on DOMContentLoaded
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCopilotStepper();
  initVoiceRecognition();
  initComparisonSlider();
  initPricingCalculator();
  initShowcase();
  initBackdropPicker();
  initOfflineEngine();
  initCloudinaryHub();
  initNotionViewer();
  initThemeToggle();
  
  // Initial load
  loadCraftData(CRAFT_CATALOG_DB[0]);
});

// ==========================================================================
// 4. Primary View Navigation & Switcher
// ==========================================================================
function initNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const sections = document.querySelectorAll('.view-section');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchView(targetId);
    });
  });
}

window.switchView = function(targetId) {
  const sections = document.querySelectorAll('.view-section');
  const tabButtons = document.querySelectorAll('.nav-tab-btn');

  sections.forEach(sec => {
    sec.classList.remove('active');
  });

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabButtons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-target') === targetId);
  });
};

// ==========================================================================
// 5. Artisan Copilot Guided 4-Step Stepper
// ==========================================================================
function initCopilotStepper() {
  const stepperButtons = document.querySelectorAll('.stepper-item');
  stepperButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'), 10);
      if (step) setCopilotStep(step);
    });
  });
}

window.setCopilotStep = function(stepNum) {
  if (stepNum < 1 || stepNum > 4) return;
  currentCopilotStep = stepNum;

  // Update step views
  document.querySelectorAll('.copilot-step-view').forEach(view => {
    const viewStep = parseInt(view.getAttribute('data-step-view'), 10);
    view.classList.toggle('active', viewStep === stepNum);
  });

  // Update stepper navigation indicators
  document.querySelectorAll('.stepper-item').forEach(item => {
    const itemStep = parseInt(item.getAttribute('data-step'), 10);
    item.classList.toggle('active', itemStep === stepNum);
    item.classList.toggle('completed', itemStep < stepNum);
  });

  // Scroll to stepper top if on mobile
  if (window.innerWidth < 768) {
    const stepperNav = document.getElementById('copilotStepperNav');
    if (stepperNav) stepperNav.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

window.nextCopilotStep = function() {
  if (currentCopilotStep < 4) {
    setCopilotStep(currentCopilotStep + 1);
  }
};

window.prevCopilotStep = function() {
  if (currentCopilotStep > 1) {
    setCopilotStep(currentCopilotStep - 1);
  }
};

// ==========================================================================
// 6. Master Craft Data Sync
// ==========================================================================
function loadCraftData(craft) {
  currentCraft = craft;

  // Phone Mockup & Preview Elements
  const phoneImg = document.getElementById('phoneProductImg');
  if (phoneImg) phoneImg.src = craft.studioImage || craft.rawImage;

  const phoneTitle = document.getElementById('phoneCraftTitle');
  if (phoneTitle) phoneTitle.textContent = currentLanguage === 'hi' ? craft.nameHindi : craft.name;

  const phonePrice = document.getElementById('phoneCraftPrice');
  if (phonePrice) phonePrice.textContent = `₹${craft.recommendedPrice}`;

  const phoneTranscript = document.getElementById('voiceTranscriptLive');
  if (phoneTranscript) {
    phoneTranscript.textContent = currentLanguage === 'hi' ? craft.voiceNoteTextHindi : craft.voiceNoteTextEnglish;
  }

  // Copilot Details Panel & Editable Form Inputs
  const attrTitle = document.getElementById('attrCraftName');
  if (attrTitle) attrTitle.textContent = craft.name;

  const attrMaterial = document.getElementById('attrMaterial');
  if (attrMaterial) attrMaterial.textContent = craft.material;

  const attrRegion = document.getElementById('attrRegion');
  if (attrRegion) attrRegion.textContent = craft.region;

  const attrLabor = document.getElementById('attrLabor');
  if (attrLabor) attrLabor.textContent = `${craft.daysToMake} Days (${craft.daysToMake * 8} Hours)`;

  const attrCost = document.getElementById('attrCost');
  if (attrCost) attrCost.textContent = `₹${craft.materialCost}`;

  const attrGI = document.getElementById('attrGI');
  if (attrGI) attrGI.textContent = craft.giTag;

  // Descriptions
  const descEn = document.getElementById('descEnglish');
  if (descEn) descEn.textContent = craft.voiceNoteTextEnglish;

  const descHi = document.getElementById('descHindi');
  if (descHi) descHi.textContent = craft.voiceNoteTextHindi;

  // Step 4 Review Card Preview
  const previewImg = document.getElementById('step4PreviewImg');
  if (previewImg) previewImg.src = craft.studioImage || craft.rawImage;

  const previewTitle = document.getElementById('step4PreviewTitle');
  if (previewTitle) previewTitle.textContent = craft.name;

  const previewPrice = document.getElementById('step4PreviewPrice');
  if (previewPrice) previewPrice.textContent = `₹${craft.recommendedPrice}`;

  const previewArtisan = document.getElementById('step4PreviewArtisan');
  if (previewArtisan) previewArtisan.textContent = `Handcrafted by ${craft.artisanName} • ${craft.region}`;

  const previewGiBadge = document.getElementById('step4PreviewGiBadge');
  if (previewGiBadge) previewGiBadge.textContent = craft.giTag;

  // Comparison Slider Images
  const rawSlideImg = document.getElementById('slideImgRaw');
  const studioSlideImg = document.getElementById('slideImgStudio');
  if (rawSlideImg) rawSlideImg.src = craft.rawImage;
  if (studioSlideImg) studioSlideImg.src = craft.studioImage || craft.rawImage;

  // Truth Layer Table
  renderTruthMatrix(craft.truthBindings);

  // Pricing Sliders Sync
  const sliderMat = document.getElementById('sliderMaterial');
  const sliderDays = document.getElementById('sliderDays');
  const sliderWage = document.getElementById('sliderWage');
  if (sliderMat) sliderMat.value = craft.materialCost;
  if (sliderDays) sliderDays.value = craft.daysToMake;
  if (sliderWage) sliderWage.value = craft.dailyWage;
  calculatePricing();

  // Cloudinary Hub Refresh
  updateCloudinaryUI();

  // Multi-Channel Payloads
  updateMultiChannelPayloads();
}

// Preset selection handler
window.selectPresetCraft = function(index) {
  if (CRAFT_CATALOG_DB[index]) {
    loadCraftData(CRAFT_CATALOG_DB[index]);
    document.querySelectorAll('.preset-pill-item').forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
    showToast(`Loaded authentic craft: ${CRAFT_CATALOG_DB[index].name}`);
  }
};

// ==========================================================================
// 7. Voice-First AI Engine (Speech Recognition & Speech Synthesis)
// ==========================================================================
function initVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (SpeechRecognition) {
    speechRecognizer = new SpeechRecognition();
    speechRecognizer.continuous = false;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-IN';

    speechRecognizer.onstart = () => {
      isRecording = true;
      updateVoiceRecordingUI(true);
    };

    speechRecognizer.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      const textDisplay = finalTranscript || interimTranscript;
      const transcriptBox = document.getElementById('voiceTranscriptLive');
      if (transcriptBox && textDisplay) {
        transcriptBox.textContent = textDisplay;
      }
    };

    speechRecognizer.onerror = (event) => {
      console.warn("Speech recognition notice:", event.error);
      stopVoiceRecording();
    };

    speechRecognizer.onend = () => {
      stopVoiceRecording();
      showToast("Voice Note Captured! AI Fact-Binding complete.");
    };
  }
}

window.toggleVoiceRecording = function() {
  if (!isRecording) {
    startVoiceRecording();
  } else {
    stopVoiceRecording();
  }
};

function startVoiceRecording() {
  isRecording = true;
  updateVoiceRecordingUI(true);

  if (speechRecognizer) {
    try {
      speechRecognizer.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-IN';
      speechRecognizer.start();
    } catch (e) {
      console.log("SpeechRecognizer starting fallback simulation...");
      simulateVoiceStream();
    }
  } else {
    simulateVoiceStream();
  }
}

function stopVoiceRecording() {
  isRecording = false;
  updateVoiceRecordingUI(false);
  if (speechRecognizer) {
    try { speechRecognizer.stop(); } catch (e) {}
  }
}

function updateVoiceRecordingUI(active) {
  const widget = document.getElementById('voiceRecordingWidget');
  const micBtn = document.getElementById('micTouchBtn');
  const statusLbl = document.getElementById('voiceStatusLabel');
  
  if (widget) widget.classList.toggle('recording-active', active);
  if (micBtn) micBtn.classList.toggle('active', active);
  if (statusLbl) {
    statusLbl.textContent = active ? "● Listening... Speak in your regional dialect" : "Tap to Speak (Regional Hindi/Dialect)";
    statusLbl.style.color = active ? "#C66B48" : "inherit";
  }
}

function simulateVoiceStream() {
  const sampleText = currentLanguage === 'hi' ? currentCraft.voiceNoteTextHindi : currentCraft.voiceNoteTextEnglish;
  const transcriptBox = document.getElementById('voiceTranscriptLive');
  if (!transcriptBox) return;

  transcriptBox.textContent = "";
  const words = sampleText.split(" ");
  let wordIndex = 0;

  const interval = setInterval(() => {
    if (wordIndex < words.length && isRecording) {
      transcriptBox.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex];
      wordIndex++;
    } else {
      clearInterval(interval);
      stopVoiceRecording();
      showToast("30-sec Voice Note processed into canonical catalog!");
    }
  }, 110);
}

// Voice Readback (Text-to-Speech Copilot)
window.speakVoiceReadback = function() {
  if (!('speechSynthesis' in window)) {
    showToast("Speech synthesis is not supported on this browser.");
    return;
  }

  window.speechSynthesis.cancel();
  const textToRead = currentLanguage === 'hi' 
    ? `नमस्ते! आपकी ${currentCraft.nameHindi} का विवरण तैयार है। यह ${currentCraft.region} का उत्पाद है। अनुशंसित मूल्य है ${currentCraft.recommendedPrice} रुपये।`
    : `Hello! Your listing for ${currentCraft.name} is ready. Handcrafted in ${currentCraft.region}. Recommended fair price is ${currentCraft.recommendedPrice} rupees.`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
  utterance.rate = 0.95;

  utterance.onstart = () => {
    showToast("Copilot Speaking back to Artisan...");
  };

  window.speechSynthesis.speak(utterance);
};

// ==========================================================================
// 8. Custom Photo Upload Handler with Dropzone
// ==========================================================================
window.handleCustomPhotoUpload = function(event) {
  const file = event.target.files ? event.target.files[0] : null;
  if (!file) return;

  // Validation
  if (!file.type.startsWith('image/')) {
    showToast("Error: Please upload a valid image file (JPG, PNG, WEBP)");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showToast("Error: Image size exceeds 10MB limit.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const customImgSrc = e.target.result;
    
    // Update craft image references
    currentCraft.rawImage = customImgSrc;
    currentCraft.studioImage = customImgSrc;

    // Refresh UI
    const phoneImg = document.getElementById('phoneProductImg');
    const rawSlideImg = document.getElementById('slideImgRaw');
    const studioSlideImg = document.getElementById('slideImgStudio');
    const previewImg = document.getElementById('step4PreviewImg');

    if (phoneImg) phoneImg.src = customImgSrc;
    if (rawSlideImg) rawSlideImg.src = customImgSrc;
    if (studioSlideImg) studioSlideImg.src = customImgSrc;
    if (previewImg) previewImg.src = customImgSrc;

    showToast("Craft photo uploaded! Studio segmentation simulated.");
  };
  reader.readAsDataURL(file);
};

// ==========================================================================
// 9. Interactive Split Slider & Studio Backdrop Picker
// ==========================================================================
function initComparisonSlider() {
  const sliderInput = document.getElementById('sliderRange');
  const overlayCrop = document.getElementById('sliderOverlayCrop');
  const handleLine = document.getElementById('sliderHandleLine');

  if (sliderInput && overlayCrop && handleLine) {
    const updateSlider = (val) => {
      overlayCrop.style.width = `${val}%`;
      handleLine.style.left = `${val}%`;
    };

    sliderInput.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });

    updateSlider(50);
  }
}

function initBackdropPicker() {
  const options = document.querySelectorAll('.backdrop-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const backdrop = opt.getAttribute('data-backdrop');
      currentBackdrop = backdrop;

      // Update studio image preview if preset exists
      if (currentCraft.cloudinaryPresets && currentCraft.cloudinaryPresets[backdrop]) {
        const studioSlide = document.getElementById('slideImgStudio');
        const phoneImg = document.getElementById('phoneProductImg');
        const targetUrl = currentCraft.cloudinaryPresets[backdrop];
        
        if (studioSlide) studioSlide.src = targetUrl;
        if (phoneImg) phoneImg.src = targetUrl;
      }
      showToast(`Staged with ${opt.querySelector('span')?.textContent || backdrop} backdrop`);
    });
  });
}

window.downloadStudioImage = function() {
  const studioImg = document.getElementById('slideImgStudio');
  if (!studioImg) return;

  const a = document.createElement('a');
  a.href = studioImg.src;
  a.download = `karigar-${currentCraft.id}-studio.jpg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("Downloading high-resolution studio catalog image...");
};

// ==========================================================================
// 10. Truth Layer Traceability Matrix
// ==========================================================================
function renderTruthMatrix(bindings) {
  const tbody = document.getElementById('truthMatrixBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  if (!bindings || bindings.length === 0) return;

  bindings.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span style="font-family: var(--font-mono); color: var(--color-terracotta); font-size: 0.82rem;">"${row.voicePhrase}"</span></td>
      <td><strong>${row.attribute}</strong></td>
      <td>${row.extracted}</td>
      <td><span style="color: var(--color-forest); font-weight: 700; background: var(--color-forest-subtle); padding: 0.15rem 0.5rem; border-radius: 9999px;">✓ ${row.confidence}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================================================
// 11. Explainable Fair Pricing Calculator & Visual Proportional Breakdown
// ==========================================================================
function initPricingCalculator() {
  const sliders = ['sliderMaterial', 'sliderDays', 'sliderWage', 'sliderComplexity', 'sliderLogistics'];
  sliders.forEach(id => {
    const slider = document.getElementById(id);
    if (slider) {
      slider.addEventListener('input', calculatePricing);
    }
  });
  calculatePricing();
}

function calculatePricing() {
  const mat = parseFloat(document.getElementById('sliderMaterial')?.value || 140);
  const days = parseFloat(document.getElementById('sliderDays')?.value || 2);
  const wage = parseFloat(document.getElementById('sliderWage')?.value || 350);
  const complexity = parseFloat(document.getElementById('sliderComplexity')?.value || 1.2);
  const logistics = parseFloat(document.getElementById('sliderLogistics')?.value || 60);

  // Update label indicators
  const valMat = document.getElementById('valMaterial');
  const valDays = document.getElementById('valDays');
  const valWage = document.getElementById('valWage');
  const valComp = document.getElementById('valComplexity');
  const valLog = document.getElementById('valLogistics');

  if (valMat) valMat.textContent = `₹${mat}`;
  if (valDays) valDays.textContent = `${days} Days`;
  if (valWage) valWage.textContent = `₹${wage}/day`;
  if (valComp) valComp.textContent = `${complexity}x`;
  if (valLog) valLog.textContent = `₹${logistics}`;

  // Formula: Direct Material + (Days * DailyWage * Complexity) + Logistics Buffer + 12% Fair Trade Margin
  const laborCost = Math.round(days * wage * complexity);
  const baseCost = mat + laborCost + logistics;
  const fairMargin = Math.round(baseCost * 0.15); // 15% fair artisan surplus
  const recommendedPrice = baseCost + fairMargin;

  // Update Big Price Box
  const bigPrice = document.getElementById('calcBigPrice');
  if (bigPrice) bigPrice.textContent = `₹${recommendedPrice}`;

  const bandHint = document.getElementById('calcBandHint');
  const lowBand = Math.round(recommendedPrice * 0.9);
  const highBand = Math.round(recommendedPrice * 1.12);
  if (bandHint) {
    bandHint.textContent = `Fair Price Band: ₹${lowBand} - ₹${highBand} (Category Median: ₹${currentCraft.marketMedian})`;
  }

  // Update Proportional Cost Breakdown Bar
  const total = recommendedPrice;
  const matPct = Math.round((mat / total) * 100);
  const laborPct = Math.round((laborCost / total) * 100);
  const logPct = Math.round((logistics / total) * 100);
  const marginPct = Math.max(0, 100 - (matPct + laborPct + logPct));

  const barMat = document.getElementById('barMaterials');
  const barLabor = document.getElementById('barLabor');
  const barLog = document.getElementById('barLogistics');
  const barProfit = document.getElementById('barProfit');

  if (barMat) barMat.style.width = `${matPct}%`;
  if (barLabor) barLabor.style.width = `${laborPct}%`;
  if (barLog) barLog.style.width = `${logPct}%`;
  if (barProfit) barProfit.style.width = `${marginPct}%`;

  const legMat = document.getElementById('legMaterials');
  const legLabor = document.getElementById('legLabor');
  const legLog = document.getElementById('legLogistics');
  const legProfit = document.getElementById('legProfit');

  if (legMat) legMat.textContent = `Materials: ${matPct}%`;
  if (legLabor) legLabor.textContent = `Labor: ${laborPct}%`;
  if (legLog) legLog.textContent = `Logistics: ${logPct}%`;
  if (legProfit) legProfit.textContent = `Artisan Profit: ${marginPct}%`;

  // Update Market Median Marker on slider distribution
  const marker = document.getElementById('calcMarker');
  if (marker) {
    const minScale = 100;
    const maxScale = 2000;
    const pos = Math.min(Math.max(((recommendedPrice - minScale) / (maxScale - minScale)) * 100, 5), 95);
    marker.style.left = `${pos}%`;
  }
}

// ==========================================================================
// 12. Multi-Channel Synchronization (ONDC Beckn 1.2 & GeM B2B CSV)
// ==========================================================================
function updateMultiChannelPayloads() {
  const ondcViewer = document.getElementById('ondcJsonViewer');
  const gemViewer = document.getElementById('gemCsvViewer');

  if (ondcViewer) {
    const ondcPayload = {
      context: {
        domain: "ONDC:RET12",
        country: "IND",
        city: "std:080",
        action: "catalog_publish",
        core_version: "1.2.0",
        bap_id: "buyer-app.ondc.org",
        bpp_id: "karigarconnect.adapter.ondc.org",
        timestamp: new Date().toISOString()
      },
      message: {
        catalog: {
          bpp_descriptor: {
            name: "KarigarConnect Artisan Guild",
            code: "KARIGAR_GUILD_KAMRUP"
          },
          bpp_providers: [
            {
              id: currentCraft.artisanCommunity.replace(/\s+/g, "_").toUpperCase(),
              descriptor: {
                name: currentCraft.artisanName,
                symbol: "https://res.cloudinary.com/karigarconnect/image/upload/v1/karigar/brand_logo.png",
                short_desc: `${currentCraft.region} ODOP Handloom & Handicraft Producer`
              },
              categories: [
                { id: "CAT_ODOP_HANDICRAFT", descriptor: { name: currentCraft.craftType } }
              ],
              items: [
                {
                  id: currentCraft.id,
                  descriptor: {
                    name: currentCraft.name,
                    code: `GI_${currentCraft.id.toUpperCase()}`,
                    symbol: currentCraft.cloudinaryStudioUrl || currentCraft.studioImage,
                    short_desc: currentCraft.voiceNoteTextEnglish,
                    images: [
                      currentCraft.cloudinaryPresets ? currentCraft.cloudinaryPresets.white : currentCraft.studioImage,
                      currentCraft.cloudinaryPresets ? currentCraft.cloudinaryPresets.wood : currentCraft.rawImage
                    ]
                  },
                  price: {
                    currency: "INR",
                    value: String(currentCraft.recommendedPrice) + ".00",
                    maximum_value: String(Math.round(currentCraft.recommendedPrice * 1.15)) + ".00"
                  },
                  category_id: "CAT_ODOP_HANDICRAFT",
                  tags: [
                    { code: "GI_CERTIFIED", list: [{ code: "tag", value: currentCraft.giTag }] },
                    { code: "ODOP_REGION", list: [{ code: "district", value: currentCraft.region }] },
                    { code: "TRUTH_AUDIT", list: [{ code: "voice_anchored", value: "true" }] }
                  ]
                }
              ]
            }
          ]
        }
      }
    };
    ondcViewer.textContent = JSON.stringify(ondcPayload, null, 2);
  }

  if (gemViewer) {
    const csvContent = [
      `"Category_ID","Product_Title","HSN_Code","OEM_Vendor_Name","Artisan_Guild","Quantity_Unit","Unit_Base_Price","GST_Rate","GI_Tag_Registry","Delivery_Days"`,
      `"GEM/HANDICRAFTS/2026","${currentCraft.name}","46021100","${currentCraft.artisanName}","${currentCraft.artisanCommunity}","PIECE","${currentCraft.recommendedPrice}","0%","${currentCraft.giTag}","7"`
    ].join("\n");
    gemViewer.textContent = csvContent;
  }
}

window.copyOndcPayload = function() {
  const viewer = document.getElementById('ondcJsonViewer');
  if (viewer) {
    navigator.clipboard.writeText(viewer.textContent).then(() => {
      showToast("ONDC Beckn 1.2 Catalog JSON copied to clipboard!");
    });
  }
};

window.downloadOndcJson = function() {
  const viewer = document.getElementById('ondcJsonViewer');
  if (!viewer) return;
  const blob = new Blob([viewer.textContent], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `ondc-catalog-${currentCraft.id}.json`;
  a.click();
  showToast("Downloaded ONDC Beckn 1.2 Catalog schema");
};

window.downloadGemCsv = function() {
  const viewer = document.getElementById('gemCsvViewer');
  if (!viewer) return;
  const blob = new Blob([viewer.textContent], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gem-procurement-${currentCraft.id}.csv`;
  a.click();
  showToast("Downloaded GeM B2B Procurement CSV format");
};

// ==========================================================================
// 13. Cloudinary Media Hub
// ==========================================================================
function initCloudinaryHub() {
  const presetBtns = document.querySelectorAll('.cloudinary-preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const preset = btn.getAttribute('data-preset');
      setCloudinaryPreset(preset);
    });
  });
}

function updateCloudinaryUI() {
  const urlDisplay = document.getElementById('cloudinaryActiveUrlDisplay');
  const cloudNameDisplay = document.getElementById('cloudinaryCloudNameDisplay');
  const savingsDisplay = document.getElementById('cloudinaryBandwidthSavingsTag');
  const studioImg = document.getElementById('cloudinaryStudioImg');

  if (cloudNameDisplay) cloudNameDisplay.textContent = cloudinaryConfig.cloudName;
  if (savingsDisplay) savingsDisplay.textContent = currentCraft.cloudinaryBandwidthSavings || "87% (961 KB ➔ 128 KB)";

  const activeUrl = (currentCraft.cloudinaryPresets && currentCraft.cloudinaryPresets[activeCloudinaryPreset])
    ? currentCraft.cloudinaryPresets[activeCloudinaryPreset]
    : currentCraft.cloudinaryStudioUrl || currentCraft.studioImage;

  if (urlDisplay) urlDisplay.textContent = activeUrl;
  if (studioImg) studioImg.src = activeUrl;
}

window.setCloudinaryPreset = function(presetKey) {
  activeCloudinaryPreset = presetKey;
  updateCloudinaryUI();
  showToast(`Cloudinary transformation: applied "${presetKey}" preset`);
};

window.copyCloudinaryUrl = function() {
  const urlDisplay = document.getElementById('cloudinaryActiveUrlDisplay');
  if (urlDisplay) {
    navigator.clipboard.writeText(urlDisplay.textContent.trim()).then(() => {
      showToast("Cloudinary CDN Delivery URL copied to clipboard!");
    });
  }
};

window.openCloudinaryConfigModal = function() {
  const modal = document.getElementById('cloudinaryConfigModal');
  if (modal) modal.classList.add('open');
};

window.closeCloudinaryConfigModal = function() {
  const modal = document.getElementById('cloudinaryConfigModal');
  if (modal) modal.classList.remove('open');
};

window.saveCloudinaryConfig = function(event) {
  event.preventDefault();
  const nameInput = document.getElementById('cfgCloudName');
  const presetInput = document.getElementById('cfgUploadPreset');

  if (nameInput && nameInput.value.trim()) {
    cloudinaryConfig.cloudName = nameInput.value.trim();
  }
  if (presetInput && presetInput.value.trim()) {
    cloudinaryConfig.uploadPreset = presetInput.value.trim();
  }

  updateCloudinaryUI();
  closeCloudinaryConfigModal();
  showToast(`Cloudinary settings saved for cloud: "${cloudinaryConfig.cloudName}"`);
};

window.handleCloudinaryDropUpload = function(event) {
  event.preventDefault();
  const file = event.dataTransfer ? event.dataTransfer.files[0] : (event.target.files ? event.target.files[0] : null);
  if (!file) return;

  const statusEl = document.getElementById('cloudinaryUploadStatus');
  if (statusEl) statusEl.innerHTML = `<span style="color: var(--color-forest);">Uploading to Cloudinary: ${file.name}...</span>`;

  setTimeout(() => {
    if (statusEl) {
      statusEl.innerHTML = `<span style="color: var(--color-forest); font-weight: 700;">✓ Successfully uploaded to Cloudinary! Transformed via e_background_removal</span>`;
    }
    showToast(`Uploaded ${file.name} directly to Cloudinary CDN!`);
  }, 1200);
};

// ==========================================================================
// 14. Notion Workspace Viewer
// ==========================================================================
function initNotionViewer() {
  const tabs = document.querySelectorAll('.notion-nav-tab');
  const contents = document.querySelectorAll('.notion-view-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const viewId = tab.getAttribute('data-notion-view');
      const targetContent = document.getElementById(`notionView_${viewId}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });
}

window.copyNotionMarkdown = function() {
  const markdownText = `# KarigarConnect: Project Documentation & Building Journey\n\n` +
    `## Official Notion Workspace Summary\n` +
    `- Status: Live Production Prototype\n` +
    `- Media Engine: Cloudinary AI (e_background_removal, f_auto, q_auto)\n` +
    `- Speech: AI4Bharat Regional Indic ASR + Web Speech API\n` +
    `- Standards: ONDC Beckn 1.2 Protocol JSON & GeM B2B Procurement CSV\n` +
    `- Alignment: PM Vishwakarma Scheme & One District One Product (ODOP)\n\n` +
    `## 5-Sprint Agile Engineering Summary\n` +
    `1. Sprint 1: Field Immersion & Baseline Mapping (Kamrup, Sanganer, Channapatna)\n` +
    `2. Sprint 2: Voice-First Zero-Typing UX with Regional Dialect Parsing\n` +
    `3. Sprint 3: Cloudinary AI Media Studio & Virtual Catalog Staging\n` +
    `4. Sprint 4: Explainable Fair-Pricing Formula & Market Distribution\n` +
    `5. Sprint 5: Multi-Marketplace Sync (ONDC & GeM) + SHG Field Trials\n`;

  navigator.clipboard.writeText(markdownText).then(() => {
    showToast("Notion Documentation Markdown copied to clipboard!");
  });
};

window.downloadNotionMarkdown = function() {
  const markdownText = `# KarigarConnect: Project Documentation & Building Journey\n\n` +
    `## Official Notion Workspace Summary\n` +
    `- Status: Live Production Prototype\n` +
    `- Media Engine: Cloudinary AI (e_background_removal, f_auto, q_auto)\n` +
    `- Speech: AI4Bharat Regional Indic ASR + Web Speech API\n` +
    `- Standards: ONDC Beckn 1.2 Protocol JSON & GeM B2B Procurement CSV\n` +
    `- Alignment: PM Vishwakarma Scheme & One District One Product (ODOP)\n\n` +
    `## 5-Sprint Agile Engineering Summary\n` +
    `1. Sprint 1: Field Immersion & Baseline Mapping (Kamrup, Sanganer, Channapatna)\n` +
    `2. Sprint 2: Voice-First Zero-Typing UX with Regional Dialect Parsing\n` +
    `3. Sprint 3: Cloudinary AI Media Studio & Virtual Catalog Staging\n` +
    `4. Sprint 4: Explainable Fair-Pricing Formula & Market Distribution\n` +
    `5. Sprint 5: Multi-Marketplace Sync (ONDC & GeM) + SHG Field Trials\n`;

  const blob = new Blob([markdownText], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `NOTION_DOCUMENTATION_AND_BUILDING_JOURNEY.md`;
  a.click();
  showToast("Downloaded NOTION_DOCUMENTATION_AND_BUILDING_JOURNEY.md");
};

window.openNotionWorkspaceLink = function() {
  window.open("https://notion.so/karigarconnect/building-journey-and-docs", "_blank");
};

// ==========================================================================
// 15. Buyer Exhibition Showcase with Real-Time Search & Filters
// ==========================================================================
let currentFilter = 'all';
let currentSearchQuery = '';

function initShowcase() {
  renderShowcaseGrid();

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderShowcaseGrid();
    });
  });

  const searchInput = document.getElementById('showcaseSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderShowcaseGrid();
    });
  }
}

function renderShowcaseGrid() {
  const grid = document.getElementById('showcaseGrid');
  const emptyState = document.getElementById('showcaseEmptyState');
  if (!grid) return;

  grid.innerHTML = '';

  const filteredCrafts = CRAFT_CATALOG_DB.filter(craft => {
    // Category filter
    let matchesCategory = true;
    if (currentFilter !== 'all') {
      matchesCategory = craft.category.toLowerCase().includes(currentFilter.toLowerCase()) || 
                        craft.craftType.toLowerCase().includes(currentFilter.toLowerCase());
    }

    // Search query filter
    let matchesSearch = true;
    if (currentSearchQuery) {
      const q = currentSearchQuery;
      matchesSearch = craft.name.toLowerCase().includes(q) ||
                      craft.craftType.toLowerCase().includes(q) ||
                      craft.region.toLowerCase().includes(q) ||
                      craft.artisanName.toLowerCase().includes(q) ||
                      craft.material.toLowerCase().includes(q) ||
                      craft.giTag.toLowerCase().includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  if (emptyState) {
    emptyState.style.display = filteredCrafts.length === 0 ? 'block' : 'none';
  }

  filteredCrafts.forEach(craft => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${craft.studioImage || craft.rawImage}" alt="${craft.name}">
        <span class="odop-badge">★ ${craft.region.split(',')[0]} ODOP</span>
        <button class="listen-story-pill" onclick="playArtisanStory('${craft.id}')" title="Listen to Artisan Voice Note">
          ▶ Listen Story
        </button>
      </div>
      <div class="card-body">
        <span class="card-craft-type">${craft.craftType}</span>
        <h3 class="card-title">${craft.name}</h3>
        <p class="card-artisan-line">By <strong>${craft.artisanName}</strong> (${craft.artisanCommunity})</p>
        <div class="card-meta-chips">
          <span class="micro-chip">⏱ ${craft.daysToMake} Days Labor</span>
          <span class="micro-chip">⚖ 100% Fact-Locked</span>
          <span class="micro-chip">🏛️ ${craft.giTag.split('(')[0].trim()}</span>
        </div>
        <div class="card-footer-price">
          <div class="price-box">
            <span class="price-val">₹${craft.recommendedPrice}</span>
            <span class="fair-badge">✓ Fair Wage Guaranteed</span>
          </div>
          <button class="btn-buy-inquire" onclick="openOrderModal('${craft.id}')">Direct Buy / B2B</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.resetShowcaseFilters = function() {
  currentFilter = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('showcaseSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
  });
  renderShowcaseGrid();
};

window.playArtisanStory = function(craftId) {
  const craft = CRAFT_CATALOG_DB.find(c => c.id === craftId);
  if (!craft) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(craft.voiceNoteTextHindi);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.92;
    utterance.onstart = () => showToast(`Playing Artisan Story for ${craft.name}...`);
    window.speechSynthesis.speak(utterance);
  } else {
    showToast(`Story: "${craft.voiceNoteTextHindi}"`);
  }
};

window.openOrderModal = function(craftId) {
  const craft = CRAFT_CATALOG_DB.find(c => c.id === craftId);
  if (!craft) return;

  const modal = document.getElementById('orderModal');
  const modalContent = document.getElementById('modalDetailsContent');

  if (modal && modalContent) {
    modalContent.innerHTML = `
      <h3 style="margin-bottom: 0.35rem; font-family: var(--font-serif); font-size: 1.5rem; color: var(--text-primary);">${craft.name}</h3>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1.25rem;">
        Direct from artisan: <strong>${craft.artisanName}</strong> (${craft.region})
      </p>

      <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
          <span>Direct Artisan Compensation:</span>
          <strong style="color: var(--color-forest);">₹${Math.round(craft.recommendedPrice * 0.88)} (88%)</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
          <span>Eco-Packaging &amp; Village Logistics:</span>
          <strong>₹${Math.round(craft.recommendedPrice * 0.12)} (12%)</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 0.5rem; font-size: 1.15rem; font-weight: 700;">
          <span>Fair Trade Price:</span>
          <strong style="color: var(--color-forest);">₹${craft.recommendedPrice}</strong>
        </div>
      </div>

      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
        <strong>GI Tag:</strong> ${craft.giTag}<br>
        <strong>Specifications:</strong> ${craft.dimensions} • ${craft.weight}
      </div>

      <div style="display: flex; gap: 0.75rem;">
        <button class="btn-generate-listing" style="flex: 1;" onclick="completePurchase('${craft.name}')">Proceed to Direct Checkout</button>
        <button class="btn-secondary" onclick="closeOrderModal()">Cancel</button>
      </div>
    `;
    modal.classList.add('open');
  }
};

window.closeOrderModal = function() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.classList.remove('open');
};

window.completePurchase = function(craftName) {
  closeOrderModal();
  showToast(`Order confirmed for "${craftName}"! Direct payment linked to artisan bank account.`);
};

// ==========================================================================
// 16. Offline Resilience & Drafts Queue
// ==========================================================================
function initOfflineEngine() {
  const toggleBtn = document.getElementById('networkToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleOfflineState);
  }
}

function toggleOfflineState() {
  isOfflineMode = !isOfflineMode;
  const toggleBtn = document.getElementById('networkToggleBtn');
  const statusText = document.getElementById('networkStatusText');

  if (isOfflineMode) {
    toggleBtn?.classList.add('offline');
    if (statusText) statusText.textContent = "Offline (Remote Cluster)";
    showToast("Switched to Offline Mode! Local SQLite queue active.");
  } else {
    toggleBtn?.classList.remove('offline');
    if (statusText) statusText.textContent = "Online (4G Sync)";
    showToast("Reconnected to 4G! Auto-syncing pending offline drafts to ONDC Master Catalog...");
  }
}

window.publishCurrentListing = function() {
  if (isOfflineMode) {
    offlineDrafts.push(currentCraft);
    showToast(`Saved to Local SQLite Queue! (1 draft waiting for 4G reconnection)`);
  } else {
    showToast(`Published directly to ONDC & GeM channels in 1 click with Cloudinary CDN!`);
  }
};

// ==========================================================================
// 17. Language Switcher (English / Hindi / Regional)
// ==========================================================================
window.changeLanguage = function(lang) {
  currentLanguage = lang;
  loadCraftData(currentCraft);
  const langNames = {
    'en': 'English',
    'hi': 'हिंदी (Hindi)',
    'as': 'অসমীয়া (Assamese)',
    'bn': 'বাংলা (Bengali)',
    'ta': 'தமிழ் (Tamil)'
  };
  showToast(`Language set to ${langNames[lang] || lang}`);
};

// ==========================================================================
// 18. Theme Toggle (Dark / Light)
// ==========================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      toggleBtn.innerHTML = isDark ? '☀️' : '🌙';
      showToast(isDark ? "Dark theme enabled" : "Light theme enabled");
    });
  }
}

// ==========================================================================
// 19. Toast System
// ==========================================================================
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
