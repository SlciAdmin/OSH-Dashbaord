// ============================================================
// DATA
// ============================================================
const DL = {
  "I":"https://drive.google.com/file/d/1G9YCL0FjV_iKUfFb911fYkqRHoBqJKL-/view",
  "II":"https://drive.google.com/file/d/1Z9omRo1cuW1Fr_1zm_Sq75oUIaoRGcKz/view",
  "III":"https://drive.google.com/file/d/1YYjsNRjvd0O1N_jyx-cgzfpCBfCNod2c/view",
  "IV":"https://drive.google.com/file/d/17Vanl6QvlLtU34bujmtKgJcCC5VD8f8t/view",
  "V":"https://drive.google.com/file/d/1n4AGbG8lunoHxhhIcCTNJ2v00zPMEcmU/view",
  "VI":"https://drive.google.com/file/d/12V7j4GAiGGRvOCiyn_nOCxLD08npV-ZG/view",
  "VII":"https://drive.google.com/file/d/1Lez6HVpSC5zpzTeUz8flnQHGRqdIFLcB/view",
  "VIII":"https://drive.google.com/file/d/1GITfnSd1LoyMz3TLOH-bD5-fQO4KNOLU/view",
  "IX":"https://drive.google.com/file/d/1D9JE4-hrUFxrrf9g1_CO_NJ2PuWtQaCt/view",
  "X":"https://drive.google.com/file/d/1xx6-haOVvFvK-2YKq5v595HiqnUNjVY8/view",
  "XI":"https://drive.google.com/file/d/1n7oLr5YYM8xHYps_ZBryUHsphwi3qn8n/view",
  "XII":"https://drive.google.com/file/d/1LF-nGwdzrPU70Bvej4kc4aumqc-OcpXZ/view",
  "XIII":"https://drive.google.com/file/d/1ajjMrdgEbvuWkBb-1zHutw_JGFObulNv/view",
  "XIV":"https://drive.google.com/file/d/1AQq5kc1Dk7QHJeNfY7fTJ3KthFqeqCJS/view",
  "XV":"https://drive.google.com/file/d/16kvC1Rw-ZNq7gf9za7a4hg92muB7SEB0/view",
  "XVI":"https://drive.google.com/file/d/1iaSHoQypnRCyxl4N-Cdy4-bWenN1NAjz/view",
  "XVII":"https://drive.google.com/file/d/1Mlj3gA48VQuuep6uISTNRYE2YctLAZVo/view",
  "XVIII":"https://drive.google.com/file/d/1QO0wdjed3jrvY87m9zXcZIOdu2p9r4fo/view",
  "XIX":"https://drive.google.com/file/d/1_I7YuFx9T-BvK23NYGiIHNAjboW98TsU/view",
  "XX":"https://drive.google.com/file/d/1SscHeqOVADc3i2Q5EwGbVi8YlQ02nWhN/view",
  "XXI":"https://drive.google.com/file/d/1IIVTMmf9W7ZSbxxHiiqKbfnvDF6O1hkv/view",
  "XXII":"https://drive.google.com/file/d/1IIVTMmf9W7ZSbxxHiiqKbfnvDF6O1hkv/view",
  "XXIII":"https://drive.google.com/file/d/1kzazdeA3FVXSdrVTRnwdCMWZwawqiGk_/view",
  "XXIV":"https://drive.google.com/file/d/1onEMwrWqv1J1q9Bwh2bCDGPnPK2pMaij/view",
  "XXV":"https://drive.google.com/file/d/1K3KR8uSNInTPoZ9biQ_Yd3WTSYYeBpw5/view",
  "XXVI":"https://drive.google.com/file/d/1LIbUQSuV8ZhuG6kVswyV2o5VT6h6V_Sj/view",
  "XXVII":"https://drive.google.com/file/d/1UeHII_lUHet3ebTbZ2XwrqcuLrCXasOr/view"
};

const FORMS_DATA = [
  {n:"I",d:"Application for registration of establishment/Amendment to certificate of registration/Updation of registration particulars of establishments already registered under any other Central Labour Laws"},
  {n:"II",d:"Application for cancellation of Registration Certificate of Establishment"},
  {n:"III",d:"Certificate of Registration of Establishment"},
  {n:"IV",d:"Certificate of cancellation of Registration Certificate of Establishment"},
  {n:"V",d:"Register of Registered Establishments"},
  {n:"VI",d:"Notice of Commencement/Cessation (Contract/Construction)"},
  {n:"VII",d:"Notice of Commencement/Closure for Mines"},
  {n:"VIII",d:"Medical Fitness Certificate (Annual Health Exam)"},
  {n:"IX",d:"Medical Examination Certificate (Mines)"},
  {n:"X",d:"Register of Workers (General)"},
  {n:"XI",d:"Notice of Accident / Dangerous Occurrence"},
  {n:"XII",d:"Register — Overtime / Double Employment (Mines)"},
  {n:"XIII",d:"Muster Roll cum Wage Register"},
  {n:"XIV",d:"Register of Employment (Mines)"},
  {n:"XV",d:"Employment Card / Pass (Mines)"},
  {n:"XVI",d:"Register of Leave with Wages"},
  {n:"XVII",d:"Notice Board Display — Working Hours"},
  {n:"XVIII",d:"Register of Wages"},
  {n:"XIX",d:"Notice Board — Employee Details"},
  {n:"XX",d:"Notice of Periods of Work for Workers"},
  {n:"XXI",d:"Application for Contractor License"},
  {n:"XXII",d:"Contractor License Certificate"},
  {n:"XXIII",d:"Order for Payment from Security Deposit"},
  {n:"XXIV",d:"Safety Committee Notice / Toll-Free Helpline Registration"},
  {n:"XXV",d:"Annual Return by Employer"},
  {n:"XXVI",d:"Register of Accidents (Dangerous Occurrences)"},
  {n:"XXVII",d:"Register of Leave with Wages (Workers)"}
];

const RULES = [
  {r:"1",ch:"I",t:"Short title and commencement",f:[],c:"Preliminary"},
  {r:"2",ch:"I",t:"Definitions — key terms under the OSH Code",f:[],c:"Preliminary"},
  {r:"3",ch:"II",t:"Application for registration of establishment on Shram Suvidha Portal",f:["I","III"],c:"Registration"},
  {r:"4",ch:"II",t:"Notice of commencement and cessation of operation",f:["II","VI","VII"],c:"Registration"},
  {r:"5",ch:"III",t:"Annual health examination of employees aged 40 years and above",f:["VIII"],c:"Health & Safety"},
  {r:"6",ch:"III",t:"Letter of appointment mandatory for every employee before joining",f:[],c:"Registration"},
  {r:"7",ch:"III",t:"Notice of accidents and dangerous occurrences — fatal, 48-hr disability, dangerous occurrence",f:["XI"],c:"Health & Safety"},
  {r:"8",ch:"III",t:"Reporting of occupational/notifiable disease to Inspector",f:[],c:"Health & Safety"},
  {r:"9",ch:"III",t:"Duties of employee — immediate reporting of unsafe/unhealthy conditions",f:[],c:"Health & Safety"},
  {r:"10",ch:"III",t:"Rights of employee — employer duty to take immediate remedial action",f:[],c:"Health & Safety"},
  {r:"11",ch:"III",t:"National Occupational Safety and Health Advisory Board — constitution",f:[],c:"Preliminary"},
  {r:"12",ch:"III",t:"Standing Orders for establishments",f:[],c:"Preliminary"},
  {r:"13",ch:"III",t:"Collection of statistics — portal for inter-State migrant workers",f:[],c:"Contract Labour"},
  {r:"14",ch:"IV",t:"Safety Committee — mandatory constitution for 500+ workers and hazardous process factories",f:[],c:"Health & Safety"},
  {r:"15",ch:"IV",t:"Composition of Safety Committee — equal employer-worker reps, quarterly meetings, 15-day action rule",f:["XXIV"],c:"Health & Safety"},
  {r:"16",ch:"IV",t:"Composition of Safety Committee in mines",f:[],c:"Mine Safety"},
  {r:"17",ch:"IV",t:"Functions of Safety Committee in mines",f:[],c:"Mine Safety"},
  {r:"18",ch:"IV",t:"Safety Officer for Dock Work and Building/Construction establishments",f:[],c:"Health & Safety"},
  {r:"19",ch:"IV",t:"Duties of Safety Officers — dock work and construction",f:[],c:"Health & Safety"},
  {r:"20",ch:"IV",t:"Safety Officer in mines — appointment and qualifications",f:[],c:"Mine Safety"},
  {r:"21",ch:"IV",t:"Duties of Safety Officer in mines",f:[],c:"Mine Safety"},
  {r:"22",ch:"IV",t:"Cleanliness and hygiene — Factories (sanitary workrooms, dry floors, daily waste disposal)",f:[],c:"Welfare"},
  {r:"23",ch:"IV",t:"Ventilation, temperature and humidity — Factories (mechanical ventilation, extreme weather protection)",f:[],c:"Welfare"},
  {r:"24",ch:"IV",t:"Precaution against dust, noxious gas, fumes — Factories (separate exhaust, confined space entry rules)",f:[],c:"Health & Safety"},
  {r:"25",ch:"IV",t:"Artificial humidification — Factories (risk assessment, work-rest cycle, electrolyte water, records)",f:[],c:"Welfare"},
  {r:"26",ch:"IV",t:"Cleanliness and hygiene — Plantations",f:[],c:"Welfare"},
  {r:"27",ch:"IV",t:"Ventilation, temperature and humidity — Plantations",f:[],c:"Welfare"},
  {r:"28",ch:"IV",t:"Precaution against dust and noxious gas — Plantations",f:[],c:"Health & Safety"},
  {r:"29",ch:"IV",t:"Artificial humidification — Plantations",f:[],c:"Welfare"},
  {r:"30",ch:"IV",t:"Cleanliness and hygiene — Mines",f:[],c:"Mine Safety"},
  {r:"31",ch:"IV",t:"Ventilation, temperature and humidity — Mines",f:[],c:"Mine Safety"},
  {r:"32",ch:"IV",t:"Precaution against dust — Mines",f:[],c:"Mine Safety"},
  {r:"33",ch:"IV",t:"Cleanliness and hygiene — Dock Work",f:[],c:"Welfare"},
  {r:"34",ch:"IV",t:"Ventilation, temperature and humidity — Dock Work",f:[],c:"Welfare"},
  {r:"35",ch:"IV",t:"Precaution against dust — Dock Work",f:[],c:"Health & Safety"},
  {r:"36",ch:"IV",t:"Cleanliness and hygiene — Construction Work",f:[],c:"Welfare"},
  {r:"37",ch:"IV",t:"Ventilation, temperature and humidity — Construction",f:[],c:"Welfare"},
  {r:"38",ch:"IV",t:"Precaution against dust — Construction Work",f:[],c:"Health & Safety"},
  {r:"39",ch:"IV",t:"Cleanliness and hygiene — Journalists/Cine Workers",f:[],c:"Welfare"},
  {r:"40",ch:"IV",t:"Ventilation, temperature and humidity — Journalists",f:[],c:"Welfare"},
  {r:"41",ch:"IV",t:"Precaution against dust — Journalists/Cine Workers",f:[],c:"Health & Safety"},
  {r:"42",ch:"IV",t:"Cleanliness and hygiene — Other establishments",f:[],c:"Welfare"},
  {r:"43",ch:"IV",t:"Precaution against dust — Other establishments",f:[],c:"Health & Safety"},
  {r:"44",ch:"IV",t:"Potable water — adequate, clean, safe drinking water; no common tumblers",f:[],c:"Welfare"},
  {r:"45",ch:"IV",t:"Overcrowding — sufficient space around machines; vehicle/pedestrian barriers in distinct colours",f:[],c:"Welfare"},
  {r:"46",ch:"IV",t:"Lighting (Illumination) — adequate natural/artificial; emergency lighting with independent power",f:[],c:"Welfare"},
  {r:"47",ch:"IV",t:"Latrine and urinal accommodation — separate for all genders, 1 per 25 males / 1 per 15 females",f:[],c:"Welfare"},
  {r:"48",ch:"IV",t:"Treatment of waste and effluents — liquid, gaseous, solid; PPE free of charge; workers trained",f:[],c:"Welfare"},
  {r:"49",ch:"V",t:"Washing facility — separate for all genders; no common towels; proper drainage",f:["I"],c:"Welfare"},
  {r:"50",ch:"V",t:"Bathing places and locker rooms — separate for all genders; separate lockers for work/street clothes",f:[],c:"Welfare"},
  {r:"51",ch:"V",t:"Storage of clothes not worn during working hours — individual lockers, changing rooms, separate rooms",f:[],c:"Welfare"},
  {r:"52",ch:"V",t:"Sitting arrangement — reasonable seating for workers required to stand during work",f:[],c:"Welfare"},
  {r:"53",ch:"V",t:"Canteen — 100+ workers; no profit-no loss basis; Canteen Managing Committee with equal representation",f:[],c:"Welfare"},
  {r:"54",ch:"V",t:"First Aid and Medical Appliances — 33% workers trained; refresher every 3 years; speedy hospital referral",f:[],c:"Health & Safety"},
  {r:"55",ch:"V",t:"Ambulance Room — 500+ workers; MBBS doctor with occupational health diploma; round-the-clock service",f:[],c:"Health & Safety"},
  {r:"56",ch:"V",t:"Shelter and Rest Room / Lunchroom — 50+ workers; separate for all genders",f:[],c:"Welfare"},
  {r:"57",ch:"V",t:"Welfare Officer — 250+ workers; PG degree in social work/HR/labour welfare",f:[],c:"Welfare"},
  {r:"58",ch:"V",t:"Creche — 50+ workers; children under 6; CCTV; police verification; no child left alone",f:[],c:"Welfare"},
  {r:"59",ch:"V",t:"Mock Drills — quarterly emergency preparedness drills mandatory in all factories",f:[],c:"Health & Safety"},
  {r:"60",ch:"V",t:"Medical examination before employment in certain hazardous categories",f:["IX"],c:"Health & Safety"},
  {r:"61",ch:"V",t:"Residential facilities for workers including contract labourers",f:[],c:"Welfare"},
  {r:"62",ch:"V",t:"Living accommodation standards — for workers in remote/project locations",f:[],c:"Welfare"},
  {r:"63",ch:"V",t:"Medical facilities at workplace",f:[],c:"Health & Safety"},
  {r:"64",ch:"VI",t:"Working Hours — maximum 48 hours per week; overtime beyond 8 hrs/day",f:[],c:"Working Hours"},
  {r:"65",ch:"VI",t:"Working hours of working journalist",f:[],c:"Working Hours"},
  {r:"66",ch:"VI",t:"Holidays and leaves for sales promotion employees and journalists",f:[],c:"Working Hours"},
  {r:"67",ch:"VI",t:"Weekly holiday — notice posted at conspicuous places including digital boards",f:[],c:"Working Hours"},
  {r:"68",ch:"VI",t:"Compensatory holidays — max 2 per week; notice by end of month in which lost",f:[],c:"Working Hours"},
  {r:"69",ch:"VI",t:"Overtime wages — 2x rate; fraction: 15-30 min = 30 min; over 30 min = 1 hour",f:[],c:"Working Hours"},
  {r:"70",ch:"VI",t:"Restriction on double employment in mines",f:["XII","XIII","XIV","XV"],c:"Mine Safety"},
  {r:"71",ch:"VI",t:"Notice of periods of work — displayed on notice board; copy to Inspector electronically",f:["XII"],c:"Working Hours"},
  {r:"72",ch:"VII",t:"Maintenance of registers — Employee (XIII), Attendance (XIV), Wages/OT (XV), Wage Slips (XVI)",f:["XIII","XIV","XV","XVI"],c:"Records & Returns"},
  {r:"73",ch:"VII",t:"Display on notice board — hours of work, wages, accidents (5 years), Inspector details",f:["XVII","XIX","XX"],c:"Records & Returns"},
  {r:"74",ch:"VII",t:"Annual Return — filed electronically by 28/29 February each year",f:["XVII"],c:"Records & Returns"},
  {r:"75",ch:"VII",t:"Register of accident and dangerous occurrences — preserved 5 years",f:["XIX"],c:"Records & Returns"},
  {r:"76",ch:"VII",t:"Register of leave with wages — share with employee once/year on demand; preserve 5 years",f:["XX"],c:"Records & Returns"},
  {r:"77",ch:"VIII",t:"Power to take samples of articles or substances by Inspector",f:[],c:"Inspection"},
  {r:"78",ch:"VIII",t:"Powers and duties of Inspector-cum-Facilitator",f:[],c:"Inspection"},
  {r:"79",ch:"VIII",t:"Powers and Duties of District Magistrate",f:[],c:"Inspection"},
  {r:"80",ch:"VIII",t:"Qualifications, duties and responsibilities of technical experts",f:[],c:"Inspection"},
  {r:"81",ch:"VIII",t:"Appointment of Medical Officer",f:[],c:"Health & Safety"},
  {r:"82",ch:"VIII",t:"Duties of Medical Officer",f:[],c:"Health & Safety"},
  {r:"83",ch:"IX",t:"Night employment of women — written consent, transport, CCTV, POSH Act compliance",f:[],c:"Welfare"},
  {r:"84",ch:"IX",t:"Adequate safety for employment of women in dangerous operations",f:[],c:"Welfare"},
  {r:"85",ch:"X",t:"Qualification and criteria of the contractor",f:["XXI"],c:"Contract Labour"},
  {r:"86",ch:"X",t:"Conditions of License for contractors",f:[],c:"Contract Labour"},
  {r:"87",ch:"X",t:"Form and manner of application for contractor license",f:["XXI"],c:"Contract Labour"},
  {r:"88",ch:"X",t:"Single Licence for Contractor in more than one State",f:[],c:"Contract Labour"},
  {r:"89",ch:"X",t:"Forms, terms and conditions of contractor licence",f:["XXII"],c:"Contract Labour"},
  {r:"90",ch:"X",t:"Procedure for issue of licence",f:["XXII"],c:"Contract Labour"},
  {r:"91",ch:"X",t:"Renewal of licence of Contractor",f:[],c:"Contract Labour"},
  {r:"92",ch:"X",t:"Refund of security deposit",f:[],c:"Contract Labour"},
  {r:"93",ch:"X",t:"Responsibility of contractor for welfare of contract workers",f:[],c:"Contract Labour"},
  {r:"94",ch:"X",t:"Intimation of work order and time limit",f:[],c:"Contract Labour"},
  {r:"95",ch:"X",t:"Revocation and suspension of license",f:[],c:"Contract Labour"},
  {r:"96",ch:"X",t:"Amendment of Contractor Licence",f:["XXI"],c:"Contract Labour"},
  {r:"97",ch:"X",t:"Appeal against orders under Contract Labour chapter",f:[],c:"Contract Labour"},
  {r:"98",ch:"X",t:"Responsibility of principal employer for payment of wages",f:[],c:"Contract Labour"},
  {r:"99",ch:"X",t:"Payment of wages from the security deposit amount",f:["XXIII"],c:"Contract Labour"},
  {r:"100",ch:"X",t:"Experience Certificate for contract workers on completion of work",f:[],c:"Contract Labour"},
  {r:"101",ch:"X",t:"Prohibition of employment of contract labour in certain categories",f:[],c:"Contract Labour"},
  {r:"102",ch:"XI",t:"Journey allowance to inter-State migrant workers",f:[],c:"Contract Labour"},
  {r:"103",ch:"XI",t:"Toll Free helpline for inter-State migrant workers",f:["XXIV"],c:"Contract Labour"},
  {r:"104",ch:"XI",t:"Study of inter-State migrant workers conditions",f:[],c:"Contract Labour"},
  {r:"105",ch:"XI",t:"Agreement for audio-visual / cine worker",f:[],c:"Preliminary"},
  {r:"106",ch:"XI",t:"Procedure for reference of disputes to Conciliation Officer",f:[],c:"Preliminary"},
  {r:"107",ch:"XII",t:"Qualification and appointment of manager in mines",f:[],c:"Mine Safety"},
  {r:"108",ch:"XII",t:"Code not to apply in certain mines",f:[],c:"Mine Safety"},
  {r:"109",ch:"XII",t:"Initial and periodical medical examinations in mines",f:["IX"],c:"Mine Safety"},
  {r:"110",ch:"XII",t:"Examining authorities for medical examination in mines",f:[],c:"Mine Safety"},
  {r:"111",ch:"XII",t:"Notice of medical examination in mines",f:[],c:"Mine Safety"},
  {r:"112",ch:"XII",t:"Failure to undergo medical examination — consequences",f:[],c:"Mine Safety"},
  {r:"113",ch:"XII",t:"Standard and report of medical examination in mines",f:[],c:"Mine Safety"},
  {r:"114",ch:"XII",t:"Retention and transfer of medical certificates",f:[],c:"Mine Safety"},
  {r:"115",ch:"XII",t:"Identity of candidates for examination",f:[],c:"Mine Safety"},
  {r:"116",ch:"XII",t:"Medical examination of women in mines",f:[],c:"Mine Safety"},
  {r:"117",ch:"XII",t:"Appeal for re-examination in mines",f:[],c:"Mine Safety"},
  {r:"118",ch:"XII",t:"Constitution of appellate medical board for mines",f:[],c:"Mine Safety"},
  {r:"119",ch:"XII",t:"Standard and report of medical re-examination",f:[],c:"Mine Safety"},
  {r:"120",ch:"XII",t:"Unfit persons not to be employed in mines",f:[],c:"Mine Safety"},
  {r:"121",ch:"XII",t:"Cost of medical examination in mines",f:[],c:"Mine Safety"},
  {r:"122",ch:"XII",t:"Exemptions from hours and limitation of employment in mines",f:[],c:"Working Hours"},
  {r:"123",ch:"XIII",t:"Establishment and location of rescue station",f:[],c:"Mine Rescue"},
  {r:"124",ch:"XIII",t:"Functions of rescue station",f:[],c:"Mine Rescue"},
  {r:"125",ch:"XIII",t:"Establishment and location of rescue room",f:[],c:"Mine Rescue"},
  {r:"126",ch:"XIII",t:"Functions of rescue room",f:[],c:"Mine Rescue"},
  {r:"127",ch:"XIII",t:"Qualifications of Superintendent of rescue station",f:[],c:"Mine Rescue"},
  {r:"128",ch:"XIII",t:"Qualifications of Rescue Instructor",f:[],c:"Mine Rescue"},
  {r:"129",ch:"XIII",t:"Selection of rescue trained persons for posting",f:[],c:"Mine Rescue"},
  {r:"130",ch:"XIII",t:"Qualifications of rescue trained persons",f:[],c:"Mine Rescue"},
  {r:"131",ch:"XIII",t:"Equipment for mine rescue operations",f:[],c:"Mine Rescue"},
  {r:"132",ch:"XIII",t:"Duties and responsibilities of Superintendent of rescue station",f:[],c:"Mine Rescue"},
  {r:"133",ch:"XIII",t:"Duties of rescue instructor",f:[],c:"Mine Rescue"},
  {r:"134",ch:"XIII",t:"Duties of rescue room in-charge",f:[],c:"Mine Rescue"},
  {r:"135",ch:"XIII",t:"Duties of rescue trained persons at rescue station",f:[],c:"Mine Rescue"},
  {r:"136",ch:"XIII",t:"Duties of rescue room attendant",f:[],c:"Mine Rescue"},
  {r:"137",ch:"XIII",t:"Telephone communication in rescue operations",f:[],c:"Mine Rescue"},
  {r:"138",ch:"XIII",t:"Rescue tracings and mapping in mines",f:[],c:"Mine Rescue"},
  {r:"139",ch:"XIII",t:"Appointment and accommodation of rescue trained persons in mines",f:[],c:"Mine Rescue"},
  {r:"140",ch:"XIII",t:"Selection of persons for training in rescue work",f:[],c:"Mine Rescue"},
  {r:"141",ch:"XIII",t:"Instructions, practices and rescue exercises",f:["IX"],c:"Mine Rescue"},
  {r:"142",ch:"XIII",t:"Medical examination for rescue training",f:[],c:"Mine Rescue"},
  {r:"143",ch:"XIII",t:"Suspension of rescue trained persons",f:[],c:"Mine Rescue"},
  {r:"144",ch:"XIII",t:"Duties of manager in rescue operations",f:[],c:"Mine Rescue"},
  {r:"145",ch:"XIII",t:"Accommodation for persons engaged in rescue work",f:[],c:"Mine Rescue"},
  {r:"146",ch:"XIII",t:"Entry into below ground mines for rescue or recovery work",f:[],c:"Mine Rescue"},
  {r:"147",ch:"XIII",t:"Fresh air bases in rescue operations",f:[],c:"Mine Rescue"},
  {r:"148",ch:"XIII",t:"Leader of rescue team — designation",f:[],c:"Mine Rescue"},
  {r:"149",ch:"XIII",t:"Instructions to rescue leader",f:[],c:"Mine Rescue"},
  {r:"150",ch:"XIII",t:"Test of rescue apparatus",f:[],c:"Mine Rescue"},
  {r:"151",ch:"XIII",t:"Duties of rescue leader below ground",f:[],c:"Mine Rescue"},
  {r:"152",ch:"XIII",t:"Rescue team members and their duties",f:[],c:"Mine Rescue"},
  {r:"153",ch:"XIII",t:"Restriction on second spell of rescue work",f:[],c:"Mine Rescue"},
  {r:"155",ch:"XIV",t:"General management of vocational training in mines",f:[],c:"Mine Training"},
  {r:"156",ch:"XIV",t:"Power to relax training requirements",f:[],c:"Mine Training"},
  {r:"157",ch:"XIV",t:"Training Scheme for mine workers",f:[],c:"Mine Training"},
  {r:"158",ch:"XIV",t:"Scope and standard for vocational training",f:[],c:"Mine Training"},
  {r:"159",ch:"XIV",t:"Scope and standard for Refresher Training",f:[],c:"Mine Training"},
  {r:"160",ch:"XIV",t:"Arrangement for refresher training",f:[],c:"Mine Training"},
  {r:"161",ch:"XIV",t:"Special training in mines",f:[],c:"Mine Training"},
  {r:"162",ch:"XIV",t:"Training after long absence, accident or change of job",f:[],c:"Mine Training"},
  {r:"164",ch:"XIV",t:"Arrangements for the training centre",f:[],c:"Mine Training"},
  {r:"165",ch:"XIV",t:"Training Officer — appointment and duties",f:[],c:"Mine Training"},
  {r:"166",ch:"XIV",t:"Duties of Training Officer in mines",f:[],c:"Mine Training"},
  {r:"167",ch:"XIV",t:"Instructors — appointment and qualification",f:[],c:"Mine Training"},
  {r:"168",ch:"XIV",t:"Trainers — appointment",f:[],c:"Mine Training"},
  {r:"169",ch:"XIV",t:"Qualification of instructors and trainers",f:[],c:"Mine Training"},
  {r:"170",ch:"XIV",t:"Duties of Instructor in training centre",f:[],c:"Mine Training"},
  {r:"171",ch:"XIV",t:"Duties of trainer and persons undergoing training",f:[],c:"Mine Training"},
  {r:"172",ch:"XIV",t:"Training allowance for mine trainees",f:[],c:"Mine Training"},
  {r:"173",ch:"XIV",t:"Certificate of training",f:[],c:"Mine Training"},
  {r:"174",ch:"XIV",t:"Certificate to be delivered to the management",f:[],c:"Mine Training"},
  {r:"175",ch:"XIV",t:"Inspection of vocational training centre",f:[],c:"Mine Training"},
  {r:"176",ch:"XIV",t:"Notice of closure of vocational training centre",f:[],c:"Mine Training"},
  {r:"177",ch:"XV",t:"Manner of holding enquiry",f:[],c:"Miscellaneous"},
  {r:"178",ch:"XV",t:"Onus as to age of workers",f:[],c:"Miscellaneous"},
  {r:"179",ch:"XV",t:"Procedure of inquiry and other related matters",f:[],c:"Miscellaneous"},
  {r:"180",ch:"XV",t:"Persons to appear at inquiry",f:[],c:"Miscellaneous"},
  {r:"182",ch:"XV",t:"Manner of compounding of offences by authorised officer",f:[],c:"Miscellaneous"}
];

const FACTORY_SECTIONS = [
  {
    id:"A", icon:"📝", color:"rgba(29,78,216,0.15)", title:"A. Registration & Documentation",
    items:[
      {rule:"Rule 3",title:"Registration on Shram Suvidha Portal",cls:"reg",
       desc:"Electronic registration in FORM-I with establishment details, identity proof, address documents. Certificate of Registration issued in FORM-III within 7 days. Must be displayed at conspicuous places. Update within 30 days of any change. Existing registrants: update within 6 months (by 8 Nov 2026). On closure: intimate in FORM-II within 30 days with proof of payment of all dues.",
       thresh:"All Factories",forms:["I","III"]},
      {rule:"Rule 6",title:"Appointment Letter to Every Employee",cls:"reg",
       desc:"Written appointment letter mandatory before employment begins, containing: name, date of birth, designation, type of employment, wages, PF/ESI applicability, nature of duties, and maternity benefits (for women). No employee can be employed without it.",
       thresh:"All Employees",forms:[]}
    ]
  },
  {
    id:"B", icon:"🔬", color:"rgba(220,38,38,0.15)", title:"B. Health, Safety & Working Conditions (Factory-Specific)",
    items:[
      {rule:"Rule 22",title:"Cleanliness and Hygiene",cls:"hlth",
       desc:"All workplaces, workrooms, passageways, staircases, storerooms kept sanitary and hygienic. Walls, ceilings, windows always clean. Floors dry and non-slippery — wet processes: effective drainage, anti-skid footwear and protective gear FREE OF COST. Sweeping done during intervals to prevent dust. Daily collection, storage, disposal/treatment of every type of waste under effective supervision.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 23",title:"Ventilation, Temperature & Humidity",cls:"hlth",
       desc:"Suitable atmospheric conditions — no stagnant air, harmful draughts, excessive heat/cold/humidity/dryness/odours. Adequate ventilation to clear smoke, fumes, steam, dust, and dilute inflammable/noxious gases. Mechanical ventilation where natural is inadequate. Protection from extreme weather — change working hours or provide protective clothes FREE. High temperature processes: heat insulation of equipment mandatory.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 24",title:"Precaution against Dust, Noxious Gas & Fumes",cls:"hlth",
       desc:"Exhaust systems for flammable fumes/gases MUST NOT be connected to any other ventilating system or chimney used for combustion gases. Where fumes/gases are noxious — exhaust through system that neutralises, sterilises and deodorises them. No employee allowed in any confined space until noxious gas/fume/dust levels brought within permissible limits.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 25",title:"Artificial Humidification",cls:"hlth",
       desc:"Risk assessment for extreme heat and high humidity hazards with controls implemented. Work-rest cycle in shaded, air-conditioned or cooler space for exposed workers. Sufficient drinking water with electrolytes at accessible places. Employees supervised and withdrawn if heat stress symptoms occur. First-aid available. Workers trained to recognise heat stress symptoms. Regular tests for relative humidity carried out and recorded. Instruments for measurement and recording provided.",
       thresh:"Where Humidity Artificially Increased",forms:[]}
    ]
  },
  {
    id:"C", icon:"🏗️", color:"rgba(8,145,178,0.15)", title:"C. Welfare Provisions (Chapter VI)",
    items:[
      {rule:"Rule 44",title:"Potable Drinking Water",cls:"welf",
       desc:"Adequate, clean, wholesome and safe drinking water provided and readily accessible to all employees. Non-piped containers clearly marked in Hindi/English and local language as safe for drinking, replenished daily. Use of common drinking tumblers or cups PROHIBITED.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 45",title:"Overcrowding Prevention",cls:"welf",
       desc:"Floor space not to be crowded with machinery or materials constituting a menace. Sufficient space around individual machines for normal operation, repairs, materials. Signs and symbols (Hindi/English/local language) indicating overcrowding hazards and number of employees allowed. Vehicle and pedestrian pathways kept SEPARATED using barriers in distinctive colours.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 46",title:"Lighting (Illumination)",cls:"welf",
       desc:"Adequate natural or artificial lighting at all workplaces, utility areas, and emergency exits. Artificial lighting when daylight fails or is insufficient. Automatic emergency lighting of sufficient intensity with INDEPENDENT ENERGY SOURCES provided wherever employees face risk from failure of artificial lighting.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 47",title:"Latrine & Urinal Accommodation",cls:"welf",
       desc:"Separate latrines and urinals for male, female, transgender and PwD employees — sufficiently lighted, ventilated, clean and sanitary at all times. At least 1 latrine per 25 male employees and 1 per 15 female employees; at least 1 urinal per 15 males. Internal walls in glazed tiles or smooth impervious surface. Washbasin with tap water. Sanitary napkins FREE OF CHARGE in women's toilets, replenished daily; disposable bins with lids provided. Notice boards outside: For Men Only / For Women Only etc. in Hindi/English/local language.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 48",title:"Waste & Effluent Treatment",cls:"welf",
       desc:"Proper arrangements for discharging liquid effluents, gaseous emissions, and disposal of solid waste. Effective treatment ensuring compliance with safety and health requirements. Hazards and risks identified for handling, storage and processing of wastes; appropriate controls implemented. PPE provided FREE OF CHARGE based on risk assessment. Employees handling wastes TRAINED on identified hazards.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 49",title:"Washing Facility",cls:"welf",
       desc:"Suitable and sufficient washing facilities with regular water supply, soap, and towels — separately for male, female, transgender and PwD. Facilities: separated from workplaces, well-ventilated, proper drainage, sanitary, capable of being secured from inside. Use of COMMON TOWELS PROHIBITED.",
       thresh:"All Factories",forms:["I"]},
      {rule:"Rule 50",title:"Bathing Places & Locker Rooms",cls:"welf",
       desc:"Separate and sufficient bathing places and locker facilities with adequate water, soap, and towels — separately for male, female, transgender and PwD. Separate locker facilities for storing working clothes and special clothing distinct from street clothes.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 51",title:"Storage of Clothes (Non-Work Hours)",cls:"welf",
       desc:"Suitable separate installations for keeping clothes not worn during working hours and drying them — for all categories of employees. Rooms SEPARATE from workrooms. Separate changing room with facilities to dry wet clothes, lockers to separate working clothes from street clothes. Individual lockers of adequate size with adequate ventilation, benches or seating.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 52",title:"Sitting Arrangement",cls:"welf",
       desc:"Reasonable sitting arrangements without detriment to work for employees obliged to work in a standing position. Adequate and comfortable seating facilities to be provided. Workers must be able to use the facility during suitable intervals.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 53",title:"Canteen (100+ Workers)",cls:"welf",
       desc:"Canteen in or adjacent to factory for nutritious, wholesome and healthy food. Must have: dining hall, kitchen, storeroom, pantry, separate washing places for employees and utensils; separate entry and exit doors. Dining hall separated from hazardous substance areas; portion reserved for women and PwD. Food sold on NO PROFIT NO LOSS basis. Rates fixed by Canteen Managing Committee with EQUAL employer-worker representation; charges displayed publicly.",
       thresh:"100+ Workers",forms:[]},
      {rule:"Rule 54",title:"First Aid & Medical Appliances",cls:"hlth",
       desc:"First aid boxes/cupboards in adequate numbers, readily accessible during working hours. Notice with name/contact of person in-charge and nearest hospital displayed conspicuously. Each first-aid box in each shift under charge of a worker/supervisor with VALID FIRST-AID CERTIFICATE. If employees exceed 200 in a department — additional boxes required. At least 33% OF WORKERS TRAINED in first-aid; refresher every 3 years; at least one woman worker trained where women are employed. Every case of injury/illness during work reported to supervisor. Arrangements for speedy evacuation or referral to nearest dispensary/hospital.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 55",title:"Ambulance Room (500+ Workers)",cls:"hlth",
       desc:"Suitable ambulance room or dispensary, round-the-clock or during working hours, maintained in good order. Equipped as per Annexure-II. Under charge of full-time MBBS doctor (or equivalent) with Diploma/Degree in Industrial/Occupational Health or AFIH — to be acquired within 1 year of appointment. Assisted by at least one registered nurse (BLS trained) and one General Duty Assistant/Nursing Assistant. Ambulance room with: adequate space, emergency lighting, communication device (preferably handheld), drenching shower points where necessary.",
       thresh:"500+ Workers",forms:[]},
      {rule:"Rule 56",title:"Shelter & Rest Room / Lunchroom (50+ Workers)",cls:"welf",
       desc:"Sufficient and suitable lunchroom with drinking water and washing facilities provided. Separately for male, female and transgender employees. Rooms must be: sufficiently lighted and ventilated, clean and hygienic; walls/roof of suitable heat-resisting materials; adequate floor area; furniture with suitable seating and eating arrangement. NOTE: A canteen maintained under Rule 53 is DEEMED COMPLIANCE of this rule.",
       thresh:"50+ Workers",forms:[]},
      {rule:"Rule 57",title:"Welfare Officer (250+ Workers)",cls:"welf",
       desc:"250-500 workers: at least 1 welfare officer. Every additional 500 workers above 500: 1 additional welfare officer. Where women workers exceed 100 (and not exceed 1,000): 1 additional woman welfare officer. More than 1 welfare officer: one to be designated Chief Welfare Officer. Qualification: post-graduate degree/diploma in social work, human resources management, or labour welfare from a government-recognised institution; must know the language spoken by majority of workers. Appointment to be intimated electronically to Inspector-cum-Facilitator with qualification details and service conditions. Welfare officer given executive/officer status and pay scale; right of appeal to Chief Inspector-cum-Facilitator against discharge/dismissal.",
       thresh:"250+ Workers",forms:[]},
      {rule:"Rule 58",title:"Creche Facility (50+ Workers)",cls:"welf",
       desc:"Creche for children under 6 years of employees; FREE and accessible to all employees. Located within or near workplace; NOT near obnoxious fumes, dust or excessively noisy processes. CCTV monitoring during working hours; police verification of in-charge and support staff mandatory. Child identity records, pick-up/drop-off authorization maintained. Attendance taken in morning on arrival and at pick-up time. Sufficient supply of clean clothes, soaps, towels, nutritious food, resting arrangements. NO CHILD LEFT ALONE at any point; verbal/physical/sexual abuse strictly prohibited. Emergency contact numbers (112, 1098, fire, nearest police) displayed. Feeding room to be provided. EVACUATION PLAN displayed in creche.",
       thresh:"50+ Workers",forms:[]},
      {rule:"Rule 59",title:"Mock Drills (Quarterly)",cls:"saf",
       desc:"Quarterly mock drills to check emergency preparedness in factories to deal with various emergencies — including fire, chemical/gas leaks, medical emergencies, structural failures, and evacuation procedures. Records of drills maintained.",
       thresh:"All Factories — Quarterly",forms:[]}
    ]
  },
  {
    id:"D", icon:"⏱️", color:"rgba(234,88,12,0.15)", title:"D. Working Hours & Overtime",
    items:[
      {rule:"Rule 64",title:"Working Hours Limit — 48 Hrs/Week",cls:"hrs",
       desc:"No worker to work more than 48 hours in a week. Standard daily limit of 8 hours. Overtime is triggered for daily wagers beyond 8 hours/day and for others beyond 48 hours/week.",
       thresh:"All Workers",forms:[]},
      {rule:"Rule 67",title:"Weekly Holiday Notice",cls:"hrs",
       desc:"Notice of weekly holiday to be posted at conspicuous places in the factory including digital/electronic notice boards. Where holiday differs for different shifts/sets of workers, notice to show holiday for each relay/set in Hindi/English and local language.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 68",title:"Compensatory Holidays",cls:"hrs",
       desc:"Not more than 2 compensatory holidays in one week. Notice of compensatory holidays to be displayed at the notice board on or before the end of the month in which holidays are lost. Any subsequent change in notice: at least 3 DAYS IN ADVANCE.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 69",title:"Overtime Wages — 2x Rate",cls:"hrs",
       desc:"Overtime at TWICE THE RATE OF WAGES, paid at end of each wage period. Worker working more than 8 hours in a day (daily wager) or 48 hours in a week (others) entitled to overtime wages. Fraction: 15-30 minutes = 30 minutes; more than 30 minutes = 1 hour.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 71",title:"Notice of Periods of Work",cls:"hrs",
       desc:"Notice of periods of work displayed at conspicuous places on notice board or electronic board; copy sent to Inspector-cum-Facilitator electronically or by speed post.",
       thresh:"All Factories",forms:["XII"]}
    ]
  },
  {
    id:"E", icon:"🛡️", color:"rgba(124,58,237,0.15)", title:"E. Safety Committee",
    items:[
      {rule:"Rules 14 & 15",title:"Mandatory Safety Committee",cls:"saf",
       desc:"Mandatory constitution of Safety Committee with EQUAL employer and worker representatives (not exceeding 20 members total). Chairman: senior official who can effectively contribute. Secretary: Safety Officer. Also includes: qualified medical practitioner (where available); representatives from production, maintenance and purchase departments. Worker representatives: nominated by negotiating union/negotiating council; ADEQUATE REPRESENTATION OF WOMEN (not less than proportion of women workers to total). Tenure: 3 years; meets at LEAST ONCE EVERY QUARTER. MINUTES of every meeting to be recorded. Employer must act on Safety Committee recommendations WITHIN 15 DAYS of receipt. Safety Committee must be informed of all safety/health hazards and accident data. Functions: creating safety awareness, conducting safety audits and risk assessments, reviewing implementation, looking into matters likely to cause danger.",
       thresh:"500+ Workers / Hazardous Process",forms:["XXIV"]}
    ]
  },
  {
    id:"F", icon:"📁", color:"rgba(245,166,35,0.15)", title:"F. Records, Registers & Returns",
    items:[
      {rule:"Rule 72",title:"Maintenance of Registers & Records",cls:"rec",
       desc:"Every factory employer must maintain: FORM-XIII (Employee Register), FORM-XIV (Attendance Register-cum-Muster Roll), FORM-XV (Register for Wages, Overtime and Deductions), FORM-XVI (Wage Slips — issued ELECTRONICALLY ON OR BEFORE THE DAY OF PAYMENT of wages). All registers: maintained electronically or otherwise; entries in English/Hindi and local language. PRESERVED IN ORIGINAL FOR 5 CALENDAR YEARS from date of last entry. Produced on demand before Inspector-cum-Facilitator. Annual return in FORM-XVII and FORM-XVIII to be uploaded on designated portal on or before 28th/29th February following end of each calendar year.",
       thresh:"All Factories",forms:["XIII","XIV","XV","XVI"]},
      {rule:"Rule 73",title:"Display on Notice Board (Mandatory)",cls:"rec",
       desc:"Every factory employer must display at conspicuous places: Name and address of the establishment; HOURS OF WORK; WAGE PERIOD and DATE OF PAYMENT OF WAGES; Details of accidents and dangerous occurrences for the LAST 5 YEARS; Name and address of the Inspector-cum-Facilitator having jurisdiction; Date of payment of unpaid wages. All in English/Hindi and local language.",
       thresh:"All Factories",forms:[]},
      {rule:"Rule 74",title:"Annual Return Filing",cls:"rec",
       desc:"Annual return relating to: category of employees, health and welfare facilities, retrenchment/layoffs, bonus, maternity benefits. Filed electronically to Inspector-cum-Facilitator on or before 28/29 FEBRUARY each year. Non-filing attracts penalties under OSH Code.",
       thresh:"All Factories — Annual",forms:["XVII"]},
      {rule:"Rule 75",title:"Register of Accidents & Dangerous Occurrences",cls:"rec",
       desc:"Register of accidents and dangerous occurrences to be maintained in FORM-XIX as required under Section 33(a)(v) of the Code. Preserved for minimum 5 years from date of last entry. Produced on demand before Inspector-cum-Facilitator.",
       thresh:"All Factories",forms:["XIX"]},
      {rule:"Rule 76",title:"Register of Leave with Wages",cls:"rec",
       desc:"Maintain record of leave with wages for every employee in FORM-XX, electronically or otherwise. Share leave records with employee ONCE IN A CALENDAR YEAR ON DEMAND. Preserved for 5 years after last entry.",
       thresh:"All Factories",forms:["XX"]}
    ]
  },
  {
    id:"G", icon:"🚨", color:"rgba(220,38,38,0.15)", title:"G. Accident & Dangerous Occurrence Reporting",
    items:[
      {rule:"Rule 7",title:"Notice of Accidents (FORM-XI)",cls:"acc",
       desc:"FATAL ACCIDENT: Employer must FORTHWITH inform Inspector-cum-Facilitator in FORM-XI + inform by telephone/electronically to: Chief Inspector-cum-Facilitator, Inspector-cum-Facilitator, District Magistrate/Sub-divisional Officer, Officer-in-charge of jurisdictional police station, AND FAMILY MEMBERS/KIN OF VICTIM. ACCIDENT CAUSING DISABILITY OF 48 HOURS OR MORE: Report in FORM-XI within 12 hours after completion of 48-hour period, electronically to Inspector-cum-Facilitator. DANGEROUS OCCURRENCES (whether or not causing injury): Report within 12 hours to Inspector-cum-Facilitator and District Magistrate/Sub-divisional Officer. Dangerous occurrences include: bursting of plant/pipeline under pressure; collapse of cranes/hoists; explosion, fire, leakage of harmful/toxic gases; explosion of pressurised containers; collapse of floors, roofs, scaffolding; spillage of hazardous substances, etc.",
       thresh:"All Factories",forms:["XI"]},
      {rule:"Rule 8",title:"Reporting of Occupational Disease",cls:"acc",
       desc:"Employer whose employee is suffering from a notifiable disease (Third Schedule to the Code) must report to Inspector-cum-Facilitator with details: name of employee, disease, establishment address, date of detection. Qualified medical practitioner attending such a patient must also send WRITTEN REPORT TO CHIEF INSPECTOR-CUM-FACILITATOR.",
       thresh:"All Factories",forms:[]}
    ]
  },
  {
    id:"H", icon:"👤", color:"rgba(96,165,250,0.15)", title:"H. Duties of Employer & Employee",
    items:[
      {rule:"Rule 9",title:"Duties of Employee",cls:"dut",
       desc:"Every employee who becomes aware of an unsafe or unhealthy condition must IMMEDIATELY REPORT IT to the employer, health and safety representative, or safety officer. Failure to report may attract liability under the OSH Code, 2020.",
       thresh:"All Employees",forms:[]},
      {rule:"Rule 10",title:"Rights of Employee / Duty of Employer",cls:"dut",
       desc:"On receiving information of IMMINENT DANGER to safety and health, the employer must: (1) Take IMMEDIATE REMEDIAL ACTION, and (2) Send a report of actions taken to the Inspector-cum-Facilitator electronically or by speed post — regardless of whether the employee is satisfied with the remedial measures taken.",
       thresh:"All Factories",forms:[]}
    ]
  },
  {
    id:"I", icon:"👩", color:"rgba(16,185,129,0.15)", title:"I. Employment of Women",
    items:[
      {rule:"Rule 83",title:"Conditions for Night Employment of Women",cls:"wmn",
       desc:"Applicable for employment before 6 AM or beyond 7 PM. WRITTEN CONSENT of woman employee mandatory. ADEQUATE TRANSPORTATION (pick-up and drop to residence) provided by employer. Workplace, passage to toilets, washrooms, drinking water — WELL-LIT; toilet/washroom near the workplace; CCTV SURVEILLANCE on the way to facilities. DEDICATED TELEPHONE NUMBERS displayed at conspicuous places in establishment and inside vehicles for emergencies. Compliance with Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act) is MANDATORY. No employment against maternity benefit provisions under the Code on Social Security, 2020.",
       thresh:"Where Women Employed at Night",forms:[]}
    ]
  }
];

const FACT_TABLE = [
  {r:"3",area:"Registration",thresh:"All Factories",key:"Electronic registration on Shram Suvidha Portal. Certificate within 7 days.",forms:["I","III"]},
  {r:"6",area:"Appointment Letter",thresh:"All Employees",key:"Written appointment letter before employment. No exceptions.",forms:[]},
  {r:"7",area:"Accident Reporting",thresh:"All Factories",key:"Fatal: forthwith. 48-hr disability: within 12 hrs. Dangerous occurrence: within 12 hrs.",forms:["XI"]},
  {r:"14/15",area:"Safety Committee",thresh:"500+ / Hazardous",key:"Equal employer-worker reps; meets quarterly; act on recommendations within 15 days.",forms:["XXIV"]},
  {r:"22",area:"Cleanliness",thresh:"All Factories",key:"Workplaces sanitary; floors dry/non-slippery; daily waste disposal; free protective gear.",forms:[]},
  {r:"23",area:"Ventilation",thresh:"All Factories",key:"Suitable atmospheric conditions; mechanical ventilation where natural inadequate.",forms:[]},
  {r:"24",area:"Dust/Gas Prevention",thresh:"All Factories",key:"Exhaust systems separate; no entry into confined space above permissible limits.",forms:[]},
  {r:"25",area:"Humidification",thresh:"Where Applied",key:"Risk assessment; work-rest cycle; electrolyte water; temperature/humidity records.",forms:[]},
  {r:"44",area:"Drinking Water",thresh:"All Factories",key:"Adequate, clean, safe water. No common tumblers. Daily replenishment for non-piped.",forms:[]},
  {r:"45",area:"Overcrowding",thresh:"All Factories",key:"Sufficient space around machines; vehicle/pedestrian pathways separated with barriers.",forms:[]},
  {r:"46",area:"Lighting",thresh:"All Factories",key:"Adequate natural/artificial lighting; emergency lighting with independent power source.",forms:[]},
  {r:"47",area:"Toilets",thresh:"All Factories",key:"1 latrine per 25 males, 1 per 15 females. Sanitary napkins free in women's toilets.",forms:[]},
  {r:"48",area:"Waste Treatment",thresh:"All Factories",key:"Effective treatment of liquid effluents, gaseous emissions and solid waste. PPE free.",forms:[]},
  {r:"49",area:"Washing Facilities",thresh:"All Factories",key:"Separate for all gender categories. No common towels. Proper drainage.",forms:["I"]},
  {r:"50",area:"Bathing/Lockers",thresh:"All Factories",key:"Separate bathing places and locker rooms; separate lockers for work/street clothes.",forms:[]},
  {r:"51",area:"Clothes Storage",thresh:"All Factories",key:"Individual lockers; separate rooms from workrooms; facilities to dry wet clothes.",forms:[]},
  {r:"52",area:"Seating",thresh:"All Factories",key:"Reasonable sitting arrangements for workers required to stand during work.",forms:[]},
  {r:"53",area:"Canteen",thresh:"100+ Workers",key:"No profit-no loss basis. Canteen Managing Committee with equal representation.",forms:[]},
  {r:"54",area:"First Aid",thresh:"All Factories",key:"33% workers trained; refresher every 3 years; speedy hospital referral arrangements.",forms:[]},
  {r:"55",area:"Ambulance Room",thresh:"500+ Workers",key:"Full-time MBBS doctor with occupational health diploma. Round-the-clock service.",forms:[]},
  {r:"56",area:"Rest Room",thresh:"50+ Workers",key:"Lunchroom with water and washing facilities. Separate for gender categories.",forms:[]},
  {r:"57",area:"Welfare Officer",thresh:"250+ Workers",key:"PG degree in social work/HR/labour welfare. 1 per 250-500 workers.",forms:[]},
  {r:"58",area:"Creche",thresh:"50+ Workers",key:"For children under 6. CCTV. Police verification. Nutritious food. No child left alone.",forms:[]},
  {r:"59",area:"Mock Drills",thresh:"All Factories",key:"Quarterly emergency preparedness drills mandatory.",forms:[]},
  {r:"64",area:"Working Hours",thresh:"All Workers",key:"Maximum 48 hours per week. Overtime triggered beyond 8 hours/day.",forms:[]},
  {r:"67",area:"Weekly Holiday",thresh:"All Factories",key:"Notice posted at conspicuous places including digital notice boards.",forms:[]},
  {r:"68",area:"Compensatory Holiday",thresh:"All Factories",key:"Max 2 per week. Notice by end of month. Changes: 3 days advance notice.",forms:[]},
  {r:"69",area:"Overtime Wages",thresh:"All Factories",key:"2x rate. Fraction: 15-30 min = 30 min; more than 30 min = 1 hour.",forms:[]},
  {r:"71",area:"Work Period Notice",thresh:"All Factories",key:"Displayed on notice board; copy sent electronically to Inspector.",forms:["XII"]},
  {r:"72",area:"Registers (4 types)",thresh:"All Factories",key:"Employee, Attendance, Wages/OT/Deductions, Wage Slips. Electronic wage slips on payment day.",forms:["XIII","XIV","XV","XVI"]},
  {r:"73",area:"Notice Board Display",thresh:"All Factories",key:"Hours of work, wage period, accident history (5 years), Inspector details.",forms:[]},
  {r:"74",area:"Annual Return",thresh:"All Factories",key:"Filed electronically on or before 28/29 February each year.",forms:["XVII"]},
  {r:"75",area:"Accident Register",thresh:"All Factories",key:"Register of all accidents and dangerous occurrences. Preserve 5 years.",forms:["XIX"]},
  {r:"76",area:"Leave Register",thresh:"All Factories",key:"Register of leave with wages; shared with employee once per year on demand.",forms:["XX"]},
  {r:"83",area:"Women Night Work",thresh:"Night Employment",key:"Written consent; transport; CCTV; well-lit; POSH Act compliance mandatory.",forms:[]},
];

const TL_DATA = [
  {date:"2020",title:"OSH Code, 2020 Enacted",sub:"Occupational Safety, Health and Working Conditions Code, 2020 (37 of 2020) passed by Parliament, consolidating 13 earlier labour laws.",color:"#8B5CF6"},
  {date:"30 Dec 2025",title:"Draft Rules Published",sub:"G.S.R. 934(E) — Draft Central Rules published in Official Gazette for public comments with 45-day window.",color:"#F59E0B"},
  {date:"13 Feb 2026",title:"Public Comment Period Closed",sub:"45-day objection/suggestion period ended. Comments reviewed by Central Government.",color:"#EF4444"},
  {date:"8 May 2026",title:"✅ Final Rules Notified — Effective Immediately",sub:"G.S.R. 345(E) — OSH (Central) Rules, 2026 notified in Official Gazette No. 311. 182 Rules, 27 Forms, 15 Chapters. All compliances effective from this date.",color:"#10B981"},
  {date:"8 Nov 2026",title:"⚠️ Registration Update Deadline (Rule 3(6))",sub:"Employers registered under earlier central labour laws must update registration details in FORM-I on Shram Suvidha Portal.",color:"#3B82F6"},
  {date:"28/29 Feb 2027",title:"📋 First Annual Return Due (Rule 74)",sub:"Annual Return in FORM-XVII to be filed electronically for calendar year 2026. Due every year by end of February.",color:"#0EA5E9"},
  {date:"Quarterly",title:"🔥 Mock Drills (Rule 59)",sub:"Quarterly emergency preparedness drills mandatory in all factories. First drill due by Aug 2026.",color:"#F97316"},
  {date:"Annual",title:"🏥 Annual Health Examination (Rule 5)",sub:"Annual medical examination for employees aged 40 years and above. Fitness certificate in FORM-VIII.",color:"#EC4899"},
  {date:"Every 3 Years",title:"🏋️ First-Aid Refresher Training (Rule 54)",sub:"Workers trained in first-aid must undergo refresher every 3 years. At least 33% of all workers must be trained.",color:"#6EE7B7"},
];

const CAL_EVENTS = [
  {title:"OSH Rules 2026 — Effective Date",date:"20260508",desc:"G.S.R. 345(E) — OSH Central Rules 2026 came into force.",id:"ce1"},
  {title:"Registration Update Deadline (Rule 3(6))",date:"20261108",desc:"Employers to update registration in FORM-I on Shram Suvidha Portal.",id:"ce2"},
  {title:"Annual Return Filing Deadline (Rule 74)",date:"20270228",desc:"Annual Return in FORM-XVII filed electronically for calendar year 2026.",id:"ce3"},
  {title:"Safety Committee Q1 Meeting Due (Rule 14)",date:"20260808",desc:"Safety Committees must meet at least once per quarter.",id:"ce4"},
  {title:"Annual Health Examination Due (Rule 5)",date:"20261231",desc:"Annual medical examination for employees aged 40+ years.",id:"ce5"},
];

// ============================================================
// THEME
// ============================================================
function toggleTheme(){
  const h=document.documentElement;
  const isDark=h.getAttribute('data-theme')==='dark';
  h.setAttribute('data-theme',isDark?'light':'dark');
  document.getElementById('themeBtn').textContent=isDark?'🌙 Dark Mode':'☀️ Light Mode';
}

// ============================================================
// TABS
// ============================================================
function showTab(id,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  btn.classList.add('active');
}

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animCounters(){
  const targets=[[s1,182],[s2,27],[s3,15],[s4,35],[s5,318],[s6,5]];
  targets.forEach(([el,target])=>{
    let cur=0; const step=Math.ceil(target/40);
    const t=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=cur;if(cur>=target)clearInterval(t);},30);
  });
}
const s1=document.getElementById('s1'),s2=document.getElementById('s2'),s3=document.getElementById('s3'),s4=document.getElementById('s4'),s5=document.getElementById('s5'),s6=document.getElementById('s6');

// ============================================================
// CHARTS
// ============================================================
const CCOLORS=['#3B82F6','#F97316','#10B981','#8B5CF6','#EF4444','#0EA5E9','#F59E0B','#EC4899','#6EE7B7','#60A5FA','#FBBF24','#A78BFA','#34D399','#FB923C','#F472B6','#94A3B8'];

function initCharts(){
  Chart.defaults.font.family="'Segoe UI',system-ui,sans-serif";
  Chart.defaults.color='#8AAAC6';

  // 1. Category donut
  const cc={};
  RULES.forEach(r=>{cc[r.c]=(cc[r.c]||0)+1;});
  const ckeys=Object.keys(cc).sort((a,b)=>cc[b]-cc[a]);
  const cvals=ckeys.map(k=>cc[k]);
  const tot=cvals.reduce((a,b)=>a+b,0);

  new Chart(document.getElementById('catChart'),{
    type:'doughnut',
    data:{labels:ckeys,datasets:[{data:cvals,backgroundColor:CCOLORS,borderWidth:3,borderColor:'#07101F',hoverOffset:8}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
      plugins:{legend:{display:false},tooltip:{callbacks:{label:(ctx)=>` ${ctx.label}: ${ctx.parsed} rules (${((ctx.parsed/tot)*100).toFixed(1)}%)`}}}}
  });

  // Legend for donut
  const leg=document.getElementById('catLegend');
  leg.innerHTML=ckeys.map((k,i)=>`<div class="leg-item"><div class="leg-dot" style="background:${CCOLORS[i]}"></div><div class="leg-lbl">${k}</div><div class="leg-n">${cvals[i]}</div><div class="leg-pct">${((cvals[i]/tot)*100).toFixed(1)}%</div></div>`).join('');

  // 2. Chapter bar
  const chc={};
  RULES.forEach(r=>{chc[r.ch]=(chc[r.ch]||0)+1;});
  const chl=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'];
  const chv=chl.map(c=>chc[c]||0);
  new Chart(document.getElementById('chChart'),{
    type:'bar',
    data:{labels:chl.map(c=>'Ch.'+c),datasets:[{label:'Rules',data:chv,backgroundColor:chl.map((_,i)=>`hsl(${205+i*10},65%,${48+i}%)`),borderRadius:6,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:(ctx)=>` ${ctx.parsed.y} rules (${((ctx.parsed.y/RULES.length)*100).toFixed(1)}%)`}}},
      scales:{x:{ticks:{color:'#8AAAC6',font:{size:9}},grid:{color:'rgba(255,255,255,0.04)'}},y:{ticks:{color:'#8AAAC6',font:{size:10}},grid:{color:'rgba(255,255,255,0.04)'},beginAtZero:true}}}
  });

  // 3. Threshold horizontal bar
  const td=[
    {l:'All Factories',v:25,c:'#3B82F6'},
    {l:'50+ Workers',v:3,c:'#10B981'},
    {l:'100+ Workers (Canteen)',v:1,c:'#F59E0B'},
    {l:'250+ Workers (Welfare Officer)',v:1,c:'#8B5CF6'},
    {l:'500+ Workers',v:2,c:'#EF4444'},
    {l:'Hazardous Process',v:1,c:'#EC4899'},
  ];
  new Chart(document.getElementById('threshChart'),{
    type:'bar',
    data:{labels:td.map(d=>d.l),datasets:[{label:'Compliance Count',data:td.map(d=>d.v),backgroundColor:td.map(d=>d.c),borderRadius:8,borderSkipped:false}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:(ctx)=>` ${ctx.parsed.x} compliances (${((ctx.parsed.x/33)*100).toFixed(0)}% of factory rules)`}}},
      scales:{x:{ticks:{color:'#8AAAC6',font:{size:10}},grid:{color:'rgba(255,255,255,0.04)'},beginAtZero:true},y:{ticks:{color:'#8AAAC6',font:{size:10}},grid:{display:false}}}}
  });

  // 4. Form usage
  const fu={};
  FORMS_DATA.forEach(f=>{fu[f.n]=0;});
  RULES.forEach(r=>r.f.forEach(f=>{if(f in fu)fu[f]++;}));
  const uf=Object.entries(fu).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('formChart'),{
    type:'bar',
    data:{labels:uf.map(([k])=>'F-'+k),datasets:[{label:'Rules Referencing',data:uf.map(([,v])=>v),backgroundColor:'#0891B2',borderRadius:5,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{x:{ticks:{color:'#8AAAC6',font:{size:9}},grid:{color:'rgba(255,255,255,0.04)'}},y:{ticks:{color:'#8AAAC6',font:{size:10},stepSize:1},grid:{color:'rgba(255,255,255,0.04)'},beginAtZero:true}}}
  });

  // 5. Radar
  new Chart(document.getElementById('radarChart'),{
    type:'radar',
    data:{
      labels:['Health & Safety','Welfare','Working Hours','Records','Accident Reporting','Women Safety','Contract Labour','Mine Safety'],
      datasets:[
        {label:'Factory Rules',data:[12,16,5,5,2,2,0,0],fill:true,backgroundColor:'rgba(59,130,246,0.2)',borderColor:'#3B82F6',pointBackgroundColor:'#3B82F6',pointRadius:4,borderWidth:2},
        {label:'Mine/General',data:[5,3,2,3,1,1,15,31],fill:true,backgroundColor:'rgba(16,185,129,0.12)',borderColor:'#10B981',pointBackgroundColor:'#10B981',pointRadius:4,borderWidth:2}
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,
      scales:{r:{ticks:{color:'#8AAAC6',backdropColor:'transparent',font:{size:9}},grid:{color:'rgba(255,255,255,0.08)'},pointLabels:{color:'#8AAAC6',font:{size:10}}}},
      plugins:{legend:{labels:{color:'#8AAAC6',font:{size:11},boxWidth:12}}}}
  });

  // 6. Scope pie
  new Chart(document.getElementById('scopeChart'),{
    type:'doughnut',
    data:{labels:['Factory-Specific (36)','Mine & Rescue (84)','General / All (62)'],datasets:[{data:[36,84,62],backgroundColor:['#3B82F6','#10B981','#F5A623'],borderWidth:3,borderColor:'#07101F',hoverOffset:6}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'55%',
      plugins:{legend:{position:'bottom',labels:{color:'#8AAAC6',font:{size:10},boxWidth:12,padding:10}},
        tooltip:{callbacks:{label:(ctx)=>` ${ctx.label}: ${ctx.parsed} rules (${((ctx.parsed/182)*100).toFixed(1)}%)`}}}}
  });
}

// ============================================================
// FACTORY SECTIONS
// ============================================================
function renderFactory(){
  const el=document.getElementById('factorySections');
  el.innerHTML=FACTORY_SECTIONS.map(sec=>`
    <div class="sec-head">
      <div class="sec-icon" style="background:${sec.color}">${sec.icon}</div>
      <div class="sec-title">${sec.title}</div>
      <div class="sec-cnt">${sec.items.length} Rule${sec.items.length>1?'s':''}</div>
    </div>
    <div class="cgrid">
      ${sec.items.map(it=>`
        <div class="cc ${it.cls}">
          <div class="cc-rule">${it.rule}</div>
          <div class="cc-title">${it.title}</div>
          <div class="cc-desc">${it.desc}</div>
          <div class="cc-thresh">👥 ${it.thresh}</div>
          ${it.forms.length?`<div class="cc-forms">${it.forms.map(f=>`<a class="fpill" href="${DL[f]||'#'}" target="_blank">FORM-${f}</a>`).join('')}</div>`:''}
        </div>`).join('')}
    </div>`).join('');

  // Fact table
  document.getElementById('factTbody').innerHTML=FACT_TABLE.map(r=>`
    <tr>
      <td class="trule">Rule ${r.r}</td>
      <td style="font-size:12px;font-weight:600;">${r.area}</td>
      <td><span style="padding:2px 8px;border-radius:20px;font-size:10px;background:rgba(59,130,246,0.12);color:#60A5FA;font-weight:700;">${r.thresh}</span></td>
      <td style="font-size:11px;color:var(--text2);line-height:1.5;max-width:280px;">${r.key}</td>
      <td>${r.forms.length?r.forms.map(f=>`<a class="fpill" href="${DL[f]||'#'}" target="_blank">FORM-${f}</a>`).join(' '):'<span style="color:var(--text3);font-size:10px;">—</span>'}</td>
    </tr>`).join('');
}

// ============================================================
// RULES TABLE
// ============================================================
let cFilt='all', cPage=1, perPage=25, fData=[...RULES];

function getCatPill(c){
  if(c.includes('Preliminary'))return'p-pre';
  if(c.includes('Registration'))return'p-reg';
  if(c.includes('Mine'))return'p-mn';
  if(c.includes('Welfare'))return'p-wf';
  if(c.includes('Working'))return'p-wh';
  if(c.includes('Records'))return'p-rr';
  if(c.includes('Contract'))return'p-cl';
  if(c.includes('Health')||c.includes('Inspection'))return'p-hs';
  return'p-ot';
}

function setFilt(f,btn){
  cFilt=f; cPage=1;
  document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  doFilter();
}

function doFilter(){
  const q=(document.getElementById('srchInp').value||'').toLowerCase();
  cPage=1;
  fData=RULES.filter(r=>{
    const mf=cFilt==='all'||r.c.toLowerCase().includes(cFilt.toLowerCase());
    const ms=!q||r.r.includes(q)||r.t.toLowerCase().includes(q)||r.c.toLowerCase().includes(q)||r.f.some(x=>x.toLowerCase().includes(q))||r.ch.toLowerCase().includes(q);
    return mf&&ms;
  });
  renderRules();
}

function renderRules(){
  const total=fData.length;
  const pages=Math.max(1,Math.ceil(total/perPage));
  if(cPage>pages)cPage=pages;
  const start=(cPage-1)*perPage;
  const slice=fData.slice(start,start+perPage);

  document.getElementById('rulesTbody').innerHTML=slice.map(r=>{
    const pills=r.f.length?r.f.map(f=>`<a class="fpill" href="${DL[f]||'#'}" target="_blank">FORM-${f}</a>`).join(' '):'<span style="color:var(--text3);font-size:10px;">—</span>';
    return`<tr>
      <td class="trule">Rule ${r.r}</td>
      <td class="tch">Ch.${r.ch}</td>
      <td style="max-width:300px;line-height:1.5;font-size:12px;">${r.t}</td>
      <td>${pills}</td>
      <td><span class="tpill ${getCatPill(r.c)}">${r.c}</span></td>
      <td style="font-family:monospace;font-size:10px;color:var(--text3);white-space:nowrap;">08 May 2026</td>
    </tr>`;
  }).join('');

  document.getElementById('rowCount').textContent=`Showing ${start+1}–${Math.min(start+perPage,total)} of ${total} rules`;
  document.getElementById('pageInfo').textContent=`Page ${cPage} of ${pages}`;

  let btns='';
  if(cPage>1)btns+=`<button class="pb" onclick="goP(${cPage-1})">← Prev</button>`;
  const sp=Math.max(1,cPage-2),ep=Math.min(pages,cPage+2);
  for(let i=sp;i<=ep;i++)btns+=`<button class="pb ${i===cPage?'on':''}" onclick="goP(${i})">${i}</button>`;
  if(cPage<pages)btns+=`<button class="pb" onclick="goP(${cPage+1})">Next →</button>`;
  document.getElementById('pageBtns').innerHTML=btns;
}

function goP(n){cPage=n;renderRules();}

// ============================================================
// FORMS GRID
// ============================================================
function renderForms(){
  document.getElementById('formsGrid').innerHTML=FORMS_DATA.map(f=>`
    <a class="fcard" href="${DL[f.n]||'#'}" target="_blank" rel="noopener">
      <div class="fnum">FORM-${f.n}</div>
      <div class="fdesc">${f.d}</div>
    </a>`).join('');
}

// ============================================================
// TIMELINE
// ============================================================
function renderTimeline(){
  document.getElementById('tlContent').innerHTML=TL_DATA.map(e=>`
    <div class="tlrow">
      <div class="tldot" style="background:${e.color};box-shadow:0 0 10px ${e.color}77;"></div>
      <div>
        <div class="tldate">${e.date}</div>
        <div class="tltitle">${e.title}</div>
        <div class="tlsub">${e.sub}</div>
      </div>
    </div>`).join('');
}

// ============================================================
// CALENDAR MODAL
// ============================================================
function openCal(){document.getElementById('calOverlay').classList.add('open');renderCalEvs();}
function closeCal(){document.getElementById('calOverlay').classList.remove('open');}

function renderCalEvs(){
  document.getElementById('calEvs').innerHTML=CAL_EVENTS.map(e=>`
    <div class="mev">
      <div><div class="mev-t">${e.title}</div><div class="mev-d">${e.date.replace(/(\d{4})(\d{2})(\d{2})/,'$3/$2/$1')}</div></div>
      <input type="checkbox" id="${e.id}" checked style="accent-color:#3B82F6;width:16px;height:16px;">
    </div>`).join('');
}

function addCal(){
  const sel=CAL_EVENTS.filter(e=>document.getElementById(e.id).checked);
  if(!sel.length){alert('Select at least one event.');return;}
  sel.forEach(e=>window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.title)}&dates=${e.date}/${e.date}&details=${encodeURIComponent(e.desc)}`,'_blank'));
  closeCal();
}

// ============================================================
// EXPORTS
// ============================================================
function exportCSV(){
  const h=['Rule','Chapter','Title','Forms','Category','Date'];
  const rows=fData.map(r=>['Rule '+r.r,'Chapter '+r.ch,'"'+r.t+'"',r.f.map(f=>'FORM-'+f).join('; ')||'—',r.c,'08 May 2026']);
  const csv=[h,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='OSH_All_Rules_2026.csv';a.click();
}

function exportFactCSV(){
  const h=['Rule','Area','Threshold','Key Requirement','Forms'];
  const rows=FACT_TABLE.map(r=>[r.r,r.area,r.thresh,'"'+r.key+'"',r.forms.map(f=>'FORM-'+f).join('; ')||'—']);
  const csv=[h,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='OSH_Factory_Compliance_2026.csv';a.click();
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(animCounters,300);
  initCharts();
  renderFactory();
  doFilter();
  renderForms();
  renderTimeline();
});