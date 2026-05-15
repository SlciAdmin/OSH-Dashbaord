// ============================================================
// OSH CODE 2020 — COMPLETE DATA (from PDF)
// ============================================================

// Drive links for forms
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

// ============================================================
// ALL CODE SECTIONS — From PDF
// ============================================================
const CODE_SECTIONS = [
{sec:"1",ch:"I",title:"Short title, commencement and application",provision:"Act called Occupational Safety, Health and Working Conditions Code, 2020. Comes into force on date notified by Central Government. Does not apply to offices of Central/State Government (except contract labour engaged therein).",app:"All Establishments"},
{sec:"2",ch:"I",title:"Definitions",provision:"Comprehensive definitions: adolescent, adult, agent, appropriate Government, audio-visual production, audio-visual worker, banking company, building/construction work, building worker, cargo, Chief Inspector-cum-Facilitator, competent person, contract labour, contractor, core activity, day, dock work, employee, employer, establishment, factory (20+ workers with power / 40+ without power), hazardous process, hazardous substance, inter-State migrant worker, mine, manufacturing process, wages, worker, working journalist etc.",app:"All"},
{sec:"3",ch:"II",title:"Registration of certain establishments",provision:"Every employer must apply for registration electronically within 60 days via registering officer. Certificate issued electronically within prescribed time. Auto-registration if officer fails within period. Changes must be intimated within 30 days. On closure: intimate within 30 days with proof of dues payment. Establishments already registered under other central labour laws deemed registered.",app:"All Establishments"},
{sec:"4",ch:"II",title:"Appeal against registration order",provision:"Person aggrieved by order under Section 3 may appeal within 30 days to appellate officer notified by appropriate Government. Appellate officer disposes within 30 days of receipt.",app:"All"},
{sec:"5",ch:"II",title:"Notice of commencement and cessation of operation",provision:"Employer of factory, mine, contract labour establishment, or construction establishment must send notice of commencement of operations to prescribed authority before starting. Must also intimate cessation. Notice given electronically.",app:"Factory · Mine · Contract Labour · Construction"},
{sec:"6",ch:"III",title:"Duties of employer",provision:"Employer must: ensure hazard-free workplace; comply with OSH standards; provide annual health examination free; issue letter of appointment to every employee before joining; ensure no charge on employees for safety measures. Factory/mine/dock/plantation employer must ensure safety of all persons on premises.",app:"All Employers"},
{sec:"7",ch:"III",title:"Duties and responsibilities of owner, agent and manager in relation to mine",provision:"Owner and agent jointly and severally responsible for financial provision and compliance under Code relating to mine. In case of contravention, owner/agent/manager deemed guilty unless due diligence proven.",app:"Mines"},
{sec:"8",ch:"III",title:"Duties of designers, manufacturers, importers or suppliers",provision:"Persons designing/manufacturing/importing/supplying articles for use in establishments must ensure articles are safe when properly used. Must carry out tests. Must provide adequate information. Imported articles must conform to Indian or exporting country standards.",app:"Manufacturers · Importers · Suppliers"},
{sec:"9",ch:"III",title:"Duties of architect, project engineer and designer",provision:"Architects/project engineers must give due consideration to safety at planning stage. Must not include anything in design involving use of dangerous structures or hazardous materials. Must consider safety aspects of maintenance and upkeep.",app:"Construction Professionals"},
{sec:"10",ch:"III",title:"Notice of certain accidents",provision:"Where accident causes death or 48-hour disability or prescribed bodily injury: employer/owner/agent/manager must send notice to prescribed authorities within prescribed time in prescribed form.",app:"All Establishments"},
{sec:"11",ch:"III",title:"Notice of certain dangerous occurrences",provision:"Where dangerous occurrence takes place (whether causing injury or not): employer must send notice to prescribed authorities in prescribed form within prescribed time.",app:"All Establishments"},
{sec:"12",ch:"III",title:"Notice of certain diseases",provision:"Where worker contracts notifiable disease (Third Schedule): employer must send notice. Qualified medical practitioner attending such patient must send written report to Chief Inspector-cum-Facilitator. Failure by medical practitioner: penalty up to ₹10,000.",app:"All Establishments"},
{sec:"13",ch:"III",title:"Duties of employee",provision:"Every employee must: take reasonable care for own health/safety; comply with safety requirements; cooperate with employer; report unsafe conditions immediately; not wilfully interfere with safety appliances; not endanger himself or others.",app:"All Employees"},
{sec:"14",ch:"III",title:"Rights of employee",provision:"Employee has right to obtain health/safety information from employer. Employee with reasonable apprehension of imminent danger may inform employer and Inspector-cum-Facilitator. Employer must take immediate remedial action and send report to Inspector-cum-Facilitator.",app:"All Employees"},
{sec:"15",ch:"III",title:"Duty not to interfere with or misuse things",provision:"No person shall intentionally or recklessly interfere with, damage or misuse anything provided in the interest of health, safety or welfare under this Code.",app:"All"},
{sec:"16",ch:"IV",title:"National Occupational Safety and Health Advisory Board",provision:"Central Government constitutes National OSH Advisory Board. Members include: Secretary MoLE (Chair), DG Factories, DG Mines Safety, Chief Controller Explosives, 5 employer reps, 5 employee reps, eminent experts. Advises on standards, rules, regulations, policy. Term of non-ex-officio members: 3 years.",app:"National Level"},
{sec:"17",ch:"IV",title:"State Occupational Safety and Health Advisory Board",provision:"State Government constitutes State OSH Advisory Board to advise on administration matters. May also constitute technical/advisory committees including site appraisal committees.",app:"State Level"},
{sec:"18",ch:"IV",title:"Occupational safety and health standards",provision:"Central Government declares standards for workplaces relating to factory, mine, dock work, beedi/cigar, construction, and other establishments. Standards relate to physical/chemical/biological hazards, monitoring, medical examination, hazard evaluation (safety audit, HAZOP, fault tree analysis). State Government may amend standards with Central Government prior approval.",app:"All Establishments"},
{sec:"19",ch:"IV",title:"Research related activities",provision:"Central/State Government may notify institutions to conduct research, experiments and demonstrations relating to occupational safety and health and submit recommendations.",app:"Research Institutions"},
{sec:"20",ch:"IV",title:"Safety and occupational health surveys",provision:"Chief Inspector-cum-Facilitator (factory/mine), DG Factory Advice (factory), DG Mines Safety (mine), or DG Health Services may conduct surveys after notice to employer. Workers must present themselves for medical examination if required.",app:"All Establishments"},
{sec:"21",ch:"III",title:"Collection of statistics and portal for inter-State migrant workers",provision:"Central/State Government collect, compile and analyse OSH statistics. Central Government maintains electronic database portal for inter-State migrant workers. Workers may self-register on portal using self-declaration and Aadhaar.",app:"Inter-State Migrant Workers"},
{sec:"22",ch:"IV",title:"Safety Committee and safety officers",provision:"Appropriate Government may require Safety Committee with equal employer-worker representation. MANDATORY: Factory 500+ workers; Hazardous process factory 250+ workers; Construction 250+ workers; Mine 100+ workers. Also mandatory: Safety Officers for dock work and construction with prescribed qualifications.",app:"500+ Workers (Factory) · 250+ (Hazardous/Construction) · 100+ (Mine)"},
{sec:"23",ch:"V",title:"Responsibility of employer for maintaining health, safety and working conditions",provision:"Employer responsible for maintaining health, safety and working conditions as prescribed by Central Government. Includes: cleanliness, ventilation, dust/gas-free environment, humidification, potable water, overcrowding prevention, adequate lighting, latrine/urinal, effluent treatment.",app:"All Employers"},
{sec:"24",ch:"VI",title:"Welfare facilities in the establishment",provision:"Employer responsible for providing welfare facilities: washing facilities, bathing places/locker rooms, clothes storage, sitting arrangements, canteen (100+ workers), first-aid boxes, ambulance room (500+ workers), shelter/rest room/lunchroom (50+ workers), welfare officer (250+ workers), crèche (50+ workers with children under 6).",app:"All Establishments"},
{sec:"25",ch:"VII",title:"Daily and weekly working hours",provision:"No worker to work more than 8 hours/day. Working hours for working journalist: max 144 hours in 4 consecutive weeks with 24 hours rest/7 days. Sales promotion employees and working journalists entitled to: earned leave 1/11 of duty period; medical leave 1/18 of service period.",app:"All Workers"},
{sec:"26",ch:"VII",title:"Weekly and compensatory holidays",provision:"No worker to work more than 6 days in one week. Government may exempt subject to conditions. Compensatory holidays must be provided within month of deprivation or within 2 months thereafter.",app:"All Workers"},
{sec:"27",ch:"VII",title:"Extra wages for overtime",provision:"Wages at TWICE THE RATE for overtime work (beyond prescribed daily/weekly hours). Period of overtime calculated on daily or weekly basis, whichever more favourable. Worker consent required for overtime. Appropriate Government may prescribe total overtime hours.",app:"All Workers"},
{sec:"28",ch:"VII",title:"Night shifts",provision:"For shift extending beyond midnight: weekly holiday means 24 consecutive hours beginning when shift ends. Following day is period of 24 hours beginning when shift ends.",app:"Night Shift Workers"},
{sec:"29",ch:"VII",title:"Prohibition of overlapping shifts",provision:"Work in establishment shall not be carried on by system of shifts where more than one relay engaged in same work at same time. Appropriate Government/Chief Inspector may exempt by written order. Not applicable to mines.",app:"All (except Mines)"},
{sec:"30",ch:"VII",title:"Restriction on double employment in factory and mine",provision:"No worker to be allowed to work in a mine or factory if already working in similar establishment within preceding 12 hours (except in circumstances prescribed by appropriate Government).",app:"Factory · Mine Workers"},
{sec:"31",ch:"VII",title:"Notice of periods of work",provision:"Notice of periods of work clearly displayed in every establishment for every day showing periods workers may work. Form, manner of display, and manner of sending to Inspector prescribed by appropriate Government.",app:"All Establishments"},
{sec:"32",ch:"VII",title:"Annual leave with wages",provision:"Worker entitled to leave with wages if worked 180 days: 1 day leave per 20 days work (15 days for adolescents; 15 days for below-ground mine workers). Leave can be carried forward (max 30 days). Earned leave can be encashed on demand. On discharge/death: entitled to wages in lieu of leave.",app:"All Workers"},
{sec:"33",ch:"VIII",title:"Maintenance of registers, records and filing of returns",provision:"Employer must maintain registers (prescribed form electronically or otherwise) containing: work performed, hours, rest days, wages, leave, overtime, attendance, dangerous occurrences. Display notices at workplace. Issue wage slips electronically or otherwise. File returns electronically to Inspector-cum-Facilitator in prescribed periods.",app:"All Establishments"},
{sec:"34",ch:"IX",title:"Appointment of Inspector-cum-Facilitators",provision:"Appropriate Government appoints Inspector-cum-Facilitators by notification. May formulate web-based inspection scheme with randomised selection. Chief Inspector-cum-Facilitator appointed for prescribed qualifications. May appoint Additional/Joint/Deputy Chief Inspectors. Inspector-cum-Facilitators are public servants.",app:"All"},
{sec:"35",ch:"IX",title:"Powers of Inspector-cum-Facilitators",provision:"Inspector may: enter any workplace; inspect premises, plant, machinery; inquire into accidents/dangerous occurrences; examine workers/crops in plantation; take samples; seize records; direct premises to be undisturbed; take photographs/videos; issue show cause notices; prosecute; examine on oath.",app:"All"},
{sec:"36",ch:"IX",title:"Powers and duties of District Magistrate",provision:"District Magistrate exercises powers and duties of Inspector-cum-Facilitator in respect of mines within local limits of jurisdiction as prescribed by Central Government.",app:"Mines"},
{sec:"37",ch:"IX",title:"Third party audit and certification",provision:"Appropriate Government may empanel technical experts for start-up establishments for third party audit and certification. Audit assigned randomly via web-based scheme. Expert submits report to employer and Inspector.",app:"Start-up Establishments"},
{sec:"38",ch:"IX",title:"Special powers of Inspector-cum-Facilitator",provision:"For factories: may prohibit employment if serious hazard/imminent danger (order effective 3 days, Chief Inspector may extend). For mines: notice of dangerous conditions, prohibition orders, extraction/pillar prohibition, urgent danger orders. For dock work: prohibition orders for dangerous conditions. For construction: prohibition orders for dangerous sites.",app:"Factory · Mine · Dock · Construction"},
{sec:"39",ch:"IX",title:"Secrecy of information",provision:"All information obtained during inspection/survey is confidential. Not to be disclosed while in service or after. Does not apply to disclosure to courts, Boards, official superiors, employees' compensation commissioners, Controller of Indian Bureau of Mines.",app:"Inspectors"},
{sec:"40",ch:"IX",title:"Facilities to be afforded to Inspector-cum-Facilitator",provision:"Every employer must afford Chief Inspector-cum-Facilitator and every Inspector-cum-Facilitator all reasonable facilities for entry, inspection, survey, measurement, examination or inquiry.",app:"All Employers"},
{sec:"41",ch:"IX",title:"Powers of special officer to enter, measure in mines",provision:"Person in government service authorised by Chief Inspector/Inspector may enter mine (3 days notice) to survey, level or measure. In emergency, Chief Inspector may authorise entry without notice.",app:"Mines"},
{sec:"42",ch:"IX",title:"Medical officer",provision:"Appropriate Government appoints qualified medical practitioners as medical officers. Duties: examination/certification of mine/factory workers in dangerous occupations; medical supervision in factories/mines/plantations where illness occurred due to process/conditions; examination/certification of adolescents for fitness.",app:"Factory · Mine · Plantation · Motor Transport"},
{sec:"43",ch:"X",title:"Employment of women",provision:"Women entitled to be employed in all establishments for all types of work. May be employed before 6 AM or beyond 7 PM with their consent, subject to conditions relating to safety, holidays, working hours prescribed by appropriate Government.",app:"All Establishments"},
{sec:"44",ch:"X",title:"Adequate safety for employment of women in dangerous operations",provision:"Where appropriate Government considers employment of women dangerous due to operations, it may require employer to provide adequate safeguards prior to employment of women for such operations.",app:"Hazardous Establishments"},
{sec:"45",ch:"XI",title:"Applicability of Contract Labour Part",provision:"Applies to: every establishment with 50 or more contract labour on any day of preceding 12 months; every manpower supply contractor who has employed 50+ contract labour. Not applicable to establishments with only intermittent/casual work.",app:"50+ Contract Labour"},
{sec:"46",ch:"XI",title:"Appointment of designated authority",provision:"Appropriate Government appoints Gazetted Officers as designated authority for licensing of contractors. Powers include issuance and revocation of licences electronically.",app:"Contract Labour"},
{sec:"47",ch:"XI",title:"Licensing of contractors",provision:"No contractor shall supply/engage contract labour or execute work through contract labour without a licence. Contractor must fulfil requisite qualifications/criteria. Licence valid 5 years. If criteria not met, 'work specific licence' issued electronically. Licence conditions include: hours of work, wages, amenities.",app:"All Contractors"},
{sec:"48",ch:"XI",title:"Procedure for issue or renewal of licence",provision:"Application electronically with prescribed particulars including number of contract labour, nature of work, inter-State migrant worker details. Authority follows prescribed procedure. Licence valid 5 years.",app:"Contract Labour"},
{sec:"49",ch:"XI",title:"No fees or commission to workers",provision:"Contractor shall not charge directly or indirectly, in whole or in part, any fee or commission from the contract labour.",app:"Contract Labour"},
{sec:"50",ch:"XI",title:"Information regarding work order",provision:"Contractor must intimate designated authority within prescribed time when receiving work order from establishment. Failure: designated authority may suspend/cancel licence.",app:"Contract Labour"},
{sec:"51",ch:"XI",title:"Revocation, suspension and amendment of licence",provision:"Licence may be revoked/suspended if: obtained by misrepresentation; holder failed to comply with conditions/provisions. Contractor given opportunity of showing cause.",app:"Contract Labour"},
{sec:"52",ch:"XI",title:"Appeal against licence order",provision:"Person aggrieved by order under Sections 47, 48, or 51 may appeal within 30 days to appellate authority. Appellate authority disposes within 30 days.",app:"Contract Labour"},
{sec:"53",ch:"XI",title:"Liability of principal employer for welfare facilities",provision:"Welfare facilities specified under Sections 23 and 24 shall be provided by PRINCIPAL EMPLOYER to contract labour employed in the establishment.",app:"Principal Employers"},
{sec:"54",ch:"XI",title:"Effect of employing contract labour from non-licensed contractor",provision:"Where principal employer employs contract labour through contractor who is required but has NOT obtained licence, such employment deemed contravention of Code.",app:"Principal Employers"},
{sec:"55",ch:"XI",title:"Responsibility for payment of wages",provision:"Contractor responsible for payment of wages within prescribed period. Payment through bank transfer or electronic mode. If contractor fails: PRINCIPAL EMPLOYER liable to make payment and recover from contractor.",app:"Contractors · Principal Employers"},
{sec:"56",ch:"XI",title:"Experience certificate",provision:"Every contractor shall issue experience certificate in prescribed form to contract labour on demand, giving details of work performed.",app:"Contract Labour"},
{sec:"57",ch:"XI",title:"Prohibition of employment of contract labour",provision:"Employment of contract labour in core activities of establishment PROHIBITED. Exceptions: if ordinarily done through contractor; or workers not needed full-time; or sudden increase of volume. Appropriate Government designates authority to advise on core activity questions.",app:"All Establishments"},
{sec:"58",ch:"XI",title:"Power to exempt in special cases (Contract Labour)",provision:"Appropriate Government may by notification exempt any establishment/class of establishments or contractors from all/any provisions of this Code in emergency.",app:"Emergency"},
{sec:"59",ch:"XI",title:"Applicability of Part II (Inter-State Migrant Workers)",provision:"Part II applies to every establishment with 10 or more inter-State migrant workers employed on any day of preceding 12 months.",app:"10+ Inter-State Migrant Workers"},
{sec:"60",ch:"XI",title:"Facilities to inter-State migrant workers",provision:"Contractor/employer duty: ensure suitable conditions; report fatal accident/serious injury to authorities of both States and next of kin; extend all benefits including ESI, EPF.",app:"Inter-State Migrant Workers"},
{sec:"61",ch:"XI",title:"Journey allowance",provision:"Employer must pay inter-State migrant worker annual lump sum fare for to-and-fro journey to native place, subject to minimum service, periodicity, class of travel as prescribed.",app:"Inter-State Migrant Workers"},
{sec:"62",ch:"XI",title:"Benefits of public distribution system",provision:"Appropriate Government makes schemes for inter-State migrant workers to avail PDS benefits either in native State or destination State. Also portability of building cess fund benefits.",app:"Inter-State Migrant Workers"},
{sec:"63",ch:"XI",title:"Toll free helpline",provision:"Appropriate Government may provide facility of toll free helpline to inter-State migrant workers in prescribed manner.",app:"Inter-State Migrant Workers"},
{sec:"64",ch:"XI",title:"Study of inter-State migrant workers",provision:"Appropriate Government may provide for study of inter-State migrant workers in prescribed manner.",app:"Inter-State Migrant Workers"},
{sec:"65",ch:"XI",title:"Past liabilities",provision:"No suit or proceeding in court for recovery of debt relating to inter-State migrant worker after completion of employment where obligation remains unsettled — debt deemed extinguished.",app:"Inter-State Migrant Workers"},
{sec:"66",ch:"XI",title:"Prohibition of employment of audio-visual worker without agreement",provision:"No person employed as audio-visual worker without written agreement registered with competent authority. Agreement must specify wages, health conditions, safety, hours of work, welfare, dispute resolution. Payment through electronic mode.",app:"Audio-Visual Workers"},
{sec:"67",ch:"XI",title:"Managers (Mines)",provision:"Every mine under a sole manager with prescribed qualifications appointed by owner/agent. Manager responsible for overall management, control, supervision and direction of mine.",app:"Mines"},
{sec:"68",ch:"XI",title:"Code not to apply in certain mines",provision:"Provisions do not apply to: mines for prospecting only (below threshold conditions); mines for specific minerals like kankar, murrum, ordinary sand, ordinary clay etc. (subject to conditions). Central Government may declare provisions applicable.",app:"Mines (specific categories)"},
{sec:"69",ch:"XI",title:"Emergency in mine",provision:"Manager may in emergency (serious risk to mine safety, accident, Act of God, urgent machinery breakdown) permit persons to work in contravention of hours/restrictions. Every such case recorded and reported to Inspector.",app:"Mines — Emergency"},
{sec:"70",ch:"XI",title:"Employment of persons below 18 in mine",provision:"No person below 18 years allowed to work in any mine. Apprentices and trainees (not below 16) may work under supervision. Medical examination prescribed for fitness.",app:"Mines"},
{sec:"71",ch:"XI",title:"Exemption to certain persons in mines",provision:"Central Government may prescribe exemptions for certain persons/categories in mines from daily hours, weekly holiday, double employment restrictions.",app:"Mines"},
{sec:"72",ch:"XI",title:"Vocational training and rescue services for mines",provision:"Central Government may prescribe vocational training and rescue and recovery services for persons employed in mines.",app:"Mines"},
{sec:"73",ch:"XI",title:"Decision on what constitutes a mine",provision:"If question arises whether any excavation/working is a mine under the Code, Central Government decides. Certificate signed by Secretary, MoLE is conclusive proof.",app:"Mines"},
{sec:"74",ch:"XI",title:"Licence to industrial premises (Beedi and Cigar)",provision:"No employer shall use premises as industrial premises for beedi/cigar without valid licence. Application to designated authority with plan. Licence valid 5 years. Renewal 30 days before expiry. Revocable for misrepresentation/non-compliance.",app:"Beedi · Cigar Workers"},
{sec:"75",ch:"XI",title:"Appeals (Beedi and Cigar licence)",provision:"Person aggrieved by refusal/cancellation/suspension of beedi/cigar licence may appeal to appellate authority within prescribed time and fee.",app:"Beedi · Cigar"},
{sec:"76",ch:"XI",title:"Permission to work outside premises (Beedi)",provision:"State Government may permit wetting/cutting of beedi/tobacco leaves outside industrial premises on employer's application. Records to be maintained.",app:"Beedi Workers"},
{sec:"77",ch:"XI",title:"Part not to apply to self-employed in private dwelling",provision:"Part does not apply to owner of private dwelling carrying on manufacturing in own house with family members (not child labour).",app:"Self-Employed Home Workers"},
{sec:"78",ch:"XI",title:"Prohibition of employment in certain building construction work",provision:"No deaf person, person with defective vision, or person with tendency to giddiness shall be required or allowed to work in any operation of building/construction likely to involve risk of accident.",app:"Building · Construction Workers"},
{sec:"79",ch:"XI",title:"Approval and licensing of factories",provision:"Appropriate Government may make rules for: submission of plans; previous permission for site/construction/extension; licensing and renewal including fees. If no order within 30 days: permission deemed granted.",app:"Factory Occupiers"},
{sec:"80",ch:"XI",title:"Liability of owner of premises",provision:"Where premises leased to different occupiers for separate factories, owner and all occupiers jointly and severally responsible for common facilities: safety, fire prevention, access, hygiene, ventilation, emergency preparedness, canteens, shelters, crèches.",app:"Factory Owners · Occupiers"},
{sec:"81",ch:"XI",title:"Power to apply Code to certain premises",provision:"Appropriate Government may declare Code applicable to any manufacturing premises regardless of number of workers. Owner deemed occupier; persons working deemed workers.",app:"Manufacturing Premises"},
{sec:"82",ch:"XI",title:"Dangerous operations",provision:"Appropriate Government may make rules for factories with dangerous manufacturing processes: specify and declare dangerous operations; prohibit/restrict employment of pregnant women; periodic medical examination; welfare amenities, sanitary facilities, protective equipment.",app:"Hazardous Factories"},
{sec:"83",ch:"XI",title:"Constitution of site appraisal committee",provision:"Appropriate Government may constitute site appraisal committee to consider and recommend on applications for initial location/expansion of factory involving hazardous process. Committee makes recommendation within 30 days.",app:"Hazardous Process Factories"},
{sec:"84",ch:"XI",title:"Compulsory disclosure of information by occupier",provision:"Occupier of hazardous process factory must disclose all information re: dangers, health hazards, measures to workers, Inspector-cum-Facilitator, local authority, general public. Must lay down detailed health/safety policy. Must draw up on-site emergency plan and disaster control measures with Chief Inspector approval.",app:"Hazardous Process Factories"},
{sec:"85",ch:"XI",title:"Specific responsibility in relation to hazardous processes",provision:"Occupier must maintain health records of workers exposed to chemical/toxic substances. Must appoint persons with prescribed qualifications to supervise handling. Periodic medical examination of workers: before assignment, during job, and after cessation at max 12-month intervals.",app:"Hazardous Process Factories"},
{sec:"86",ch:"XI",title:"National Board to inquire into certain situations",provision:"Central Government may direct National Board to inquire into standards of health/safety in factory after extraordinary situation. Recommendations of National Board are advisory.",app:"Hazardous Factories"},
{sec:"87",ch:"XI",title:"Emergency standards",provision:"Where no standards prescribed for hazardous process or standards inadequate, Central Government may direct DGOSH to lay down emergency standards. Emergency standards enforceable as if incorporated in rules.",app:"Hazardous Processes"},
{sec:"88",ch:"XI",title:"Permissible limits of exposure",provision:"Maximum permissible limits of exposure of chemical and toxic substances in manufacturing process in any factory as prescribed by State Government.",app:"Manufacturing Factories"},
{sec:"89",ch:"XI",title:"Right of workers to warn about imminent danger",provision:"Workers in hazardous process factory with reasonable apprehension of imminent danger may inform occupier/manager/Safety Committee and simultaneously Inspector-cum-Facilitator. Employer must take immediate remedial action and send report to Inspector.",app:"Hazardous Process Factories"},
{sec:"90",ch:"XI",title:"Appeal against Inspector-cum-Facilitator order in factory",provision:"Appropriate Government may prescribe manner and authority to whom occupier/manager of factory may appeal against Inspector's order, and procedure for disposing such appeals.",app:"Factory Occupiers"},
{sec:"91",ch:"XI",title:"Power to make rules to exempt",provision:"Appropriate Government may make rules specifying persons holding supervisory/managerial/confidential positions (Code provisions not applicable) or providing exemptions, extents and conditions for any worker/class in any establishment.",app:"All"},
{sec:"92",ch:"XI",title:"Facilities for workers in plantation",provision:"State Government may require employer to provide in plantation: housing with drinking water/kitchen/toilet; crèches (50+ workers); educational facilities (children 6-12 > 25); health facilities/ESI coverage; recreational facilities.",app:"Plantation Workers"},
{sec:"93",ch:"XI",title:"Safety in plantation",provision:"Employer must ensure safety in use/handling/storage/transport of insecticides/pesticides/chemicals. Appoint qualified persons to supervise. Train workers on hazards. Periodic medical examination. Health records maintained. Provide washing/bathing/protective clothing.",app:"Plantation Workers"},
{sec:"94",ch:"XII",title:"General penalty for offences",provision:"Contravention of Code/regulations/rules/bye-laws/orders: employer/principal employer liable to penalty not less than ₹2 lakhs but up to ₹3 lakhs. Continued contravention: additional ₹2,000/day.",app:"All Employers"},
{sec:"95",ch:"XII",title:"Punishment for obstructing Inspector",provision:"Wilful prevention/obstruction of Inspector-cum-Facilitator or authorised person; refusal of entry; failure to produce documents; failure to comply with orders: imprisonment up to 3 months, or fine up to ₹1 lakh, or both. Repeat offence: imprisonment up to 6 months, fine ₹1-2 lakhs.",app:"All"},
{sec:"96",ch:"XII",title:"Penalty for non-maintenance of registers",provision:"Failure to maintain required register/document or file returns, or failure to produce when required: penalty ₹50,000–₹1 lakh. Repeat: ₹50,000–₹2 lakhs.",app:"All"},
{sec:"97",ch:"XII",title:"Punishment for contravention of certain provisions",provision:"Contravention of Code/rules/bye-laws/orders prohibiting/restricting employment: penalty ₹50,000–₹1 lakh. Repeat: imprisonment up to 3 months, or fine up to ₹2 lakhs.",app:"All"},
{sec:"98",ch:"XII",title:"Punishment for falsification of records",provision:"Producing false records, counterfeiting documents, falsifying plans/sections/returns/reports knowingly: imprisonment up to 3 months or fine up to ₹1 lakh or both. Repeat: imprisonment up to 6 months, fine ₹1-2 lakhs.",app:"All"},
{sec:"99",ch:"XII",title:"Penalty for omission to furnish plans etc.",provision:"Failure without reasonable excuse to furnish required plan, section, return, notice, register, record, or report in prescribed form/manner/time: penalty ₹1-2 lakhs.",app:"All"},
{sec:"100",ch:"XII",title:"Punishment for disclosure of information",provision:"Inspector-cum-Facilitator disclosing confidential information contrary to Section 39 without Government consent: imprisonment up to 3 months or fine up to ₹1 lakh or both.",app:"Inspectors"},
{sec:"101",ch:"XII",title:"Punishment for wrongfully disclosing analysis results",provision:"Disclosing results of analysis of substance samples (other than for prosecution) without authority: imprisonment up to 6 months or fine up to ₹50,000 or both.",app:"All"},
{sec:"102",ch:"XII",title:"Punishment for contravention of hazardous process duties",provision:"Failure to comply with duties in Section 6(1)(a-h) or (2) or Section 80: imprisonment up to 2 years and fine up to ₹5 lakhs + ₹25,000/day after conviction. Continuing beyond 1 year: imprisonment up to 3 years or fine ₹20 lakhs.",app:"All"},
{sec:"103",ch:"XII",title:"Punishment for contravention resulting in accident",provision:"Non-compliance resulting in death: imprisonment up to 2 years or fine min ₹5 lakhs or both. Serious bodily injury: imprisonment up to 1 year or fine ₹2-4 lakhs or both. Court may direct 50%+ of fine as compensation to victim/legal heirs.",app:"All"},
{sec:"104",ch:"XII",title:"Special provision for contravention of order under Section 38",provision:"Continuing work in contravention of prohibition order under Section 38: imprisonment up to 2 years and fine up to ₹5 lakhs (not less than ₹2 lakhs without recorded reasons).",app:"All"},
{sec:"105",ch:"XII",title:"Failure to appoint manager in mine",provision:"Failure to appoint manager in mine as required by Section 67: imprisonment up to 3 months or fine up to ₹1 lakh or both.",app:"Mine Owners"},
{sec:"106",ch:"XII",title:"Offences by employees",provision:"Employee contravening Code provisions imposing duty on employees: penalty up to ₹10,000. If employee convicted: employer not deemed guilty unless employer failed to take all reasonable measures for prevention.",app:"Employees"},
{sec:"107",ch:"XII",title:"Prosecution of owner/agent/manager of mine",provision:"No prosecution against mine owner/agent/manager except at instance of Chief Inspector-cum-Facilitator, District Magistrate, or authorised Inspector. Must be satisfied of failure to exercise due diligence.",app:"Mines"},
{sec:"108",ch:"XII",title:"Exemption of mine owner/occupier from liability",provision:"Where owner/occupier charged, they may have actual offender brought before court and if they prove due diligence or offence without knowledge/consent, actual offender convicted and owner/occupier discharged.",app:"Mine Owner · Factory Occupier"},
{sec:"109",ch:"XII",title:"Offences by companies",provision:"Where company commits offence: every person in charge/responsible for conduct of business also guilty. Where offence with consent/connivance of director/manager/secretary/other officer: that person also guilty.",app:"Companies"},
{sec:"110",ch:"XII",title:"Limitation of prosecution and cognizance of offences",provision:"Inspector must give opportunity to comply within 30 days before initiating prosecution (except in accident or repeat violation within 3 years). Complaint must be filed within 6 months. Court not inferior to Metropolitan/Judicial Magistrate First Class.",app:"All"},
{sec:"111",ch:"XII",title:"Power of officers to impose penalty",provision:"Appropriate Government may appoint Under Secretary+ level officer to hold inquiry and impose penalty under Sections 12(3), 94, 96, 97, 99, 106. Appeal within 60 days. Failure to pay penalty within 90 days: fine ₹25,000–₹2 lakhs. Amount credited to Social Security Fund.",app:"All"},
{sec:"112",ch:"XII",title:"Jurisdiction of court",provision:"For offences under Code, place where establishment situated deemed place where offence committed.",app:"All"},
{sec:"113",ch:"XII",title:"Power of court to make orders",provision:"Court may require employer to take measures to remedy matters within specified period. If not complied with after period: further offence — imprisonment up to 6 months or fine ₹100/day or both.",app:"Factory · Mine · Dock"},
{sec:"114",ch:"XII",title:"Composition of certain offences",provision:"Certain offences may be compounded by notified officer: 50% of maximum penalty (penalty only); 75% of maximum fine (if offence). No prosecution after composition. Not applicable to 2nd+ offence within 3 years. Composition amount credited to Social Security Fund.",app:"All"},
{sec:"115",ch:"XIII",title:"Social security fund",provision:"Appropriate Government establishes social security fund for welfare of unorganised workers. Funded by composition amounts and penalties imposed under Code. Expended for welfare of unorganised workers.",app:"Unorganised Workers"},
{sec:"116",ch:"XIV",title:"Delegation of powers",provision:"Central Government may by notification direct any power exercisable by it under Code to be exercisable by State Government or subordinate officer/authority.",app:"All"},
{sec:"117",ch:"XIV",title:"Onus as to age",provision:"If age of person is in question in offence under Code and person appears prima facie under relevant age: burden on accused to prove otherwise. Medical authority to use Aadhaar, birth certificate, school certificate, or ossification test.",app:"All"},
{sec:"118",ch:"XIV",title:"Onus of proving limits of practicability",provision:"In proceedings for offence relating to failure to comply with duty or requirement: burden on alleged person to prove it was not reasonably practicable or all practicable measures were taken.",app:"All"},
{sec:"119",ch:"XIV",title:"Common licence",provision:"Person may obtain common licence for factory + beedi/cigar industrial premises + contract labour (any combination) by electronic application to designated authority. Licence issued within 45 days; deemed issued and auto-generated if authority fails. Existing licences deemed valid.",app:"Factory · Beedi/Cigar · Contract Labour"},
{sec:"120",ch:"XIV",title:"Effect of laws inconsistent with Code",provision:"Code overrides other laws, awards, agreements or contracts. But if employee entitled to more favourable benefits under other instruments: employee continues to get those benefits.",app:"All"},
{sec:"121",ch:"XIV",title:"Power of appropriate Government to direct inquiry",provision:"Appropriate Government may appoint assessors/competent persons for inquiry into causes of accident, fix responsibilities, suggest prevention plan. May direct survey on safety/health at any workplace.",app:"All"},
{sec:"122",ch:"XIV",title:"Publication of reports",provision:"Appropriate Government may publish any report submitted by National Board, State Advisory Board, or any extracts from reports submitted under Code.",app:"All"},
{sec:"123",ch:"XIV",title:"Powers of Central Government to give directions",provision:"Central Government may give directions to State Government for implementation of provisions of Code.",app:"All"},
{sec:"124",ch:"XIV",title:"General restriction on disclosure of information",provision:"No person shall disclose information relating to manufacturing/commercial business or working process coming to knowledge in course of official duties. Exceptions: owner's written consent; legal proceedings.",app:"All"},
{sec:"125",ch:"XIV",title:"Jurisdiction of civil courts barred",provision:"No civil court has jurisdiction in respect of any matter to which any provision of this Code applies. No injunction shall be granted by civil court regarding anything done under this Code.",app:"All"},
{sec:"126",ch:"XIV",title:"Protection of action taken in good faith",provision:"No suit/prosecution/proceeding against any person for anything done in good faith in pursuance of Code or rules/regulations/bye-laws/orders made thereunder.",app:"All"},
{sec:"127",ch:"XIV",title:"Power to exempt in special cases",provision:"Appropriate Government may by notification exempt any establishment/class of establishments from all/any provisions of Code. State Government may exempt new factories for specified period to promote employment.",app:"All"},
{sec:"128",ch:"XIV",title:"Power to exempt during public emergency",provision:"In case of public emergency/disaster/pandemic in India or part thereof, appropriate Government may exempt any workplace from all/any provisions for period not exceeding 1 year.",app:"Emergency"},
{sec:"129",ch:"XIV",title:"Power to exempt public institution",provision:"Appropriate Government may exempt workshop/workplace attached to public institution (education, training, research, information) from all/any provisions, subject to conditions.",app:"Public Institutions"},
{sec:"130",ch:"XIV",title:"Persons required to give notice legally bound",provision:"Every person required to give notice or furnish information to any authority under Code is legally bound to do so within meaning of Section 176 of Indian Penal Code.",app:"All"},
{sec:"131",ch:"XIV",title:"Power of Central Government to amend Schedule",provision:"Central Government may by notification amend any Schedule (First, Second, Third) by addition, alteration or omission. Schedule deemed amended accordingly.",app:"All"},
{sec:"132",ch:"XIV",title:"Power to remove difficulties",provision:"Central Government may make provisions to remove difficulties in giving effect to Code provisions within 2 years of commencement. Every order laid before Parliament.",app:"All"},
{sec:"133",ch:"XIV",title:"Power of appropriate Government to make rules",provision:"Appropriate Government may make rules for carrying out purposes of Code. Covers: registration, notice, health examination, appointment letters, accident notice, dangerous occurrence notice, disease notice, safety committee, safety officers, overtime, leave, registers, displays, returns, inspectors, mining exemptions, contract labour licensing, welfare facilities, plantation, etc.",app:"All"},
{sec:"134",ch:"XIV",title:"Power of Central Government to make rules",provision:"Central Government may make rules on: registration certificate form, National Board procedure, OSH statistics, health/welfare/working conditions, crèche, journalism hours, sales promotion leave, contractor qualifications, mine manager qualifications, vocational training, rescue services, age determination.",app:"All"},
{sec:"135",ch:"XIV",title:"Power of State Government to make rules",provision:"State Government may make rules on: State Advisory Board, beedi/cigar licence, dangerous operations in factories, hazardous process disclosures, plantation facilities, pesticide safety, permissible exposure limits.",app:"All"},
{sec:"136",ch:"XIV",title:"Power to make regulations for mines and dock work",provision:"Central Government may make regulations for: Inspector qualifications/duties; mine manager qualifications; examination and certificates of competency; explosives regulation; women employment in mines; mine safety; ventilation; electricity in mines; machinery safety; accident reports; plans and sections; dock work safety regulations.",app:"Mines · Dock Work"},
{sec:"137",ch:"XIV",title:"Prior publication of rules",provision:"Rules/regulations/bye-laws subject to prior publication: date for consideration not less than 45 days from publication of draft. Published in Official Gazette; have effect as if enacted in Code.",app:"All"},
{sec:"138",ch:"XIV",title:"Power to make regulation without prior publication",provision:"Regulations under Section 136 may be made without prior publication if Central Government satisfied that prevention of apprehended danger or speedy remedy requires dispensing with such publication.",app:"Mines · Dock Work"},
{sec:"139",ch:"XIV",title:"Bye-laws",provision:"Mine employer may and must (if called upon by Chief Inspector) frame bye-laws for specific machinery/working methods to prevent accidents. If not submitted within 2 months or inadequate: Chief Inspector proposes. Dispute referred to technical committee. Central Government approves with prior publication of 30 days.",app:"Mines"},
{sec:"140",ch:"XIV",title:"Powers to regulate general safety during epidemic/pandemic",provision:"Central Government may make rules to regulate general safety and health of persons in whole/part of India in event of epidemic/pandemic/disaster declaration.",app:"Emergency"},
{sec:"141",ch:"XIV",title:"Laying of regulations/rules/bye-laws before Parliament",provision:"Every rule/regulation/standard/bye-law notified by Central Government must be laid before each House of Parliament for 30 days. Parliament may modify or annul.",app:"All"},
{sec:"142",ch:"XIV",title:"Laying of rules made by State Government",provision:"Every rule made by State Government under Code shall be laid before State Legislature as soon as made.",app:"State"},
{sec:"143",ch:"XIV",title:"Repeal and savings",provision:"Repeals 13 earlier labour laws: Factories Act 1948, Plantations Labour Act 1951, Mines Act 1952, Working Journalists Act 1955 & 1958, Motor Transport Workers Act 1961, Beedi/Cigar Workers Act 1966, Contract Labour Act 1970, Sales Promotion Employees Act 1976, Inter-State Migrant Workmen Act 1979, Cine-Workers Act 1981, Dock Workers Act 1986, Building/Construction Workers Act 1996. Actions under repealed Acts deemed taken under Code.",app:"All"}
];

// ============================================================
// OSH (CENTRAL) RULES, 2026 — 182 RULES
// ============================================================
const RULES = [
{r:"1",ch:"I",t:"Short title and commencement",f:[],c:"Preliminary",codeRef:"Sec 1"},
{r:"2",ch:"I",t:"Definitions — key terms under the OSH Code",f:[],c:"Preliminary",codeRef:"Sec 2"},
{r:"3",ch:"II",t:"Application for registration of establishment on Shram Suvidha Portal",f:["I","III"],c:"Registration",codeRef:"Sec 3"},
{r:"4",ch:"II",t:"Notice of commencement and cessation of operation",f:["II","VI","VII"],c:"Registration",codeRef:"Sec 5"},
{r:"5",ch:"III",t:"Annual health examination of employees aged 40 years and above",f:["VIII"],c:"Health & Safety",codeRef:"Sec 6"},
{r:"6",ch:"III",t:"Letter of appointment mandatory for every employee before joining",f:[],c:"Registration",codeRef:"Sec 6"},
{r:"7",ch:"III",t:"Notice of accidents and dangerous occurrences — fatal, 48-hr disability, dangerous occurrence",f:["XI"],c:"Health & Safety",codeRef:"Sec 10, Sec 11"},
{r:"8",ch:"III",t:"Reporting of occupational/notifiable disease to Inspector",f:[],c:"Health & Safety",codeRef:"Sec 12"},
{r:"9",ch:"III",t:"Duties of employee — immediate reporting of unsafe/unhealthy conditions",f:[],c:"Health & Safety",codeRef:"Sec 13"},
{r:"10",ch:"III",t:"Rights of employee — employer duty to take immediate remedial action",f:[],c:"Health & Safety",codeRef:"Sec 14"},
{r:"11",ch:"III",t:"National Occupational Safety and Health Advisory Board — constitution",f:[],c:"Preliminary",codeRef:"Sec 16"},
{r:"12",ch:"III",t:"Standing Orders for establishments",f:[],c:"Preliminary",codeRef:"Sec 6"},
{r:"13",ch:"III",t:"Collection of statistics — portal for inter-State migrant workers",f:[],c:"Contract Labour",codeRef:"Sec 21"},
{r:"14",ch:"IV",t:"Safety Committee — mandatory constitution for 500+ workers and hazardous process factories",f:[],c:"Health & Safety",codeRef:"Sec 22"},
{r:"15",ch:"IV",t:"Composition of Safety Committee — equal employer-worker reps, quarterly meetings, 15-day action rule",f:["XXIV"],c:"Health & Safety",codeRef:"Sec 22"},
{r:"16",ch:"IV",t:"Composition of Safety Committee in mines",f:[],c:"Mine Safety",codeRef:"Sec 22"},
{r:"17",ch:"IV",t:"Functions of Safety Committee in mines",f:[],c:"Mine Safety",codeRef:"Sec 22"},
{r:"18",ch:"IV",t:"Safety Officer for Dock Work and Building/Construction establishments",f:[],c:"Health & Safety",codeRef:"Sec 22"},
{r:"19",ch:"IV",t:"Duties of Safety Officers — dock work and construction",f:[],c:"Health & Safety",codeRef:"Sec 22"},
{r:"20",ch:"IV",t:"Safety Officer in mines — appointment and qualifications",f:[],c:"Mine Safety",codeRef:"Sec 22"},
{r:"21",ch:"IV",t:"Duties of Safety Officer in mines",f:[],c:"Mine Safety",codeRef:"Sec 22"},
{r:"22",ch:"IV",t:"Cleanliness and hygiene — Factories (sanitary workrooms, dry floors, daily waste disposal)",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"23",ch:"IV",t:"Ventilation, temperature and humidity — Factories (mechanical ventilation, extreme weather protection)",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"24",ch:"IV",t:"Precaution against dust, noxious gas, fumes — Factories (separate exhaust, confined space entry rules)",f:[],c:"Health & Safety",codeRef:"Sec 23"},
{r:"25",ch:"IV",t:"Artificial humidification — Factories (risk assessment, work-rest cycle, electrolyte water, records)",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"26",ch:"IV",t:"Cleanliness and hygiene — Plantations",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"27",ch:"IV",t:"Ventilation, temperature and humidity — Plantations",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"28",ch:"IV",t:"Precaution against dust and noxious gas — Plantations",f:[],c:"Health & Safety",codeRef:"Sec 23"},
{r:"29",ch:"IV",t:"Artificial humidification — Plantations",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"30",ch:"IV",t:"Cleanliness and hygiene — Mines",f:[],c:"Mine Safety",codeRef:"Sec 23"},
{r:"31",ch:"IV",t:"Ventilation, temperature and humidity — Mines",f:[],c:"Mine Safety",codeRef:"Sec 23"},
{r:"32",ch:"IV",t:"Precaution against dust — Mines",f:[],c:"Mine Safety",codeRef:"Sec 23"},
{r:"33",ch:"IV",t:"Cleanliness and hygiene — Dock Work",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"34",ch:"IV",t:"Ventilation, temperature and humidity — Dock Work",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"35",ch:"IV",t:"Precaution against dust — Dock Work",f:[],c:"Health & Safety",codeRef:"Sec 23"},
{r:"36",ch:"IV",t:"Cleanliness and hygiene — Construction Work",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"37",ch:"IV",t:"Ventilation, temperature and humidity — Construction",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"38",ch:"IV",t:"Precaution against dust — Construction Work",f:[],c:"Health & Safety",codeRef:"Sec 23"},
{r:"39",ch:"IV",t:"Cleanliness and hygiene — Journalists/Cine Workers",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"40",ch:"IV",t:"Ventilation, temperature and humidity — Journalists",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"41",ch:"IV",t:"Precaution against dust — Journalists/Cine Workers",f:[],c:"Health & Safety",codeRef:"Sec 23"},
{r:"42",ch:"IV",t:"Cleanliness and hygiene — Other establishments",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"43",ch:"IV",t:"Precaution against dust — Other establishments",f:[],c:"Health & Safety",codeRef:"Sec 23"},
{r:"44",ch:"IV",t:"Potable water — adequate, clean, safe drinking water; no common tumblers",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"45",ch:"IV",t:"Overcrowding — sufficient space around machines; vehicle/pedestrian barriers in distinct colours",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"46",ch:"IV",t:"Lighting (Illumination) — adequate natural/artificial; emergency lighting with independent power",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"47",ch:"IV",t:"Latrine and urinal accommodation — separate for all genders, 1 per 25 males / 1 per 15 females",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"48",ch:"IV",t:"Treatment of waste and effluents — liquid, gaseous, solid; PPE free of charge; workers trained",f:[],c:"Welfare",codeRef:"Sec 23"},
{r:"49",ch:"V",t:"Washing facility — separate for all genders; no common towels; proper drainage",f:["I"],c:"Welfare",codeRef:"Sec 24"},
{r:"50",ch:"V",t:"Bathing places and locker rooms — separate for all genders; separate lockers for work/street clothes",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"51",ch:"V",t:"Storage of clothes not worn during working hours — individual lockers, changing rooms, separate rooms",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"52",ch:"V",t:"Sitting arrangement — reasonable seating for workers required to stand during work",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"53",ch:"V",t:"Canteen — 100+ workers; no profit-no loss basis; Canteen Managing Committee with equal representation",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"54",ch:"V",t:"First Aid and Medical Appliances — 33% workers trained; refresher every 3 years; speedy hospital referral",f:[],c:"Health & Safety",codeRef:"Sec 24"},
{r:"55",ch:"V",t:"Ambulance Room — 500+ workers; MBBS doctor with occupational health diploma; round-the-clock service",f:[],c:"Health & Safety",codeRef:"Sec 24"},
{r:"56",ch:"V",t:"Shelter and Rest Room / Lunchroom — 50+ workers; separate for all genders",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"57",ch:"V",t:"Welfare Officer — 250+ workers; PG degree in social work/HR/labour welfare",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"58",ch:"V",t:"Creche — 50+ workers; children under 6; CCTV; police verification; no child left alone",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"59",ch:"V",t:"Mock Drills — quarterly emergency preparedness drills mandatory in all factories",f:[],c:"Health & Safety",codeRef:"Sec 22"},
{r:"60",ch:"V",t:"Medical examination before employment in certain hazardous categories",f:["IX"],c:"Health & Safety",codeRef:"Sec 42"},
{r:"61",ch:"V",t:"Residential facilities for workers including contract labourers",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"62",ch:"V",t:"Living accommodation standards — for workers in remote/project locations",f:[],c:"Welfare",codeRef:"Sec 24"},
{r:"63",ch:"V",t:"Medical facilities at workplace",f:[],c:"Health & Safety",codeRef:"Sec 24"},
{r:"64",ch:"VI",t:"Working Hours — maximum 48 hours per week; overtime beyond 8 hrs/day",f:[],c:"Working Hours",codeRef:"Sec 25"},
{r:"65",ch:"VI",t:"Working hours of working journalist",f:[],c:"Working Hours",codeRef:"Sec 25"},
{r:"66",ch:"VI",t:"Holidays and leaves for sales promotion employees and journalists",f:[],c:"Working Hours",codeRef:"Sec 25"},
{r:"67",ch:"VI",t:"Weekly holiday — notice posted at conspicuous places including digital boards",f:[],c:"Working Hours",codeRef:"Sec 26"},
{r:"68",ch:"VI",t:"Compensatory holidays — max 2 per week; notice by end of month in which lost",f:[],c:"Working Hours",codeRef:"Sec 26"},
{r:"69",ch:"VI",t:"Overtime wages — 2x rate; fraction: 15-30 min = 30 min; over 30 min = 1 hour",f:[],c:"Working Hours",codeRef:"Sec 27"},
{r:"70",ch:"VI",t:"Restriction on double employment in mines",f:["XII","XIII","XIV","XV"],c:"Mine Safety",codeRef:"Sec 30"},
{r:"71",ch:"VI",t:"Notice of periods of work — displayed on notice board; copy to Inspector electronically",f:["XII"],c:"Working Hours",codeRef:"Sec 31"},
{r:"72",ch:"VII",t:"Maintenance of registers — Employee (XIII), Attendance (XIV), Wages/OT (XV), Wage Slips (XVI)",f:["XIII","XIV","XV","XVI"],c:"Records & Returns",codeRef:"Sec 33"},
{r:"73",ch:"VII",t:"Display on notice board — hours of work, wages, accidents (5 years), Inspector details",f:["XVII","XIX","XX"],c:"Records & Returns",codeRef:"Sec 33"},
{r:"74",ch:"VII",t:"Annual Return — filed electronically by 28/29 February each year",f:["XVII"],c:"Records & Returns",codeRef:"Sec 33"},
{r:"75",ch:"VII",t:"Register of accident and dangerous occurrences — preserved 5 years",f:["XIX"],c:"Records & Returns",codeRef:"Sec 33"},
{r:"76",ch:"VII",t:"Register of leave with wages — share with employee once/year on demand; preserve 5 years",f:["XX"],c:"Records & Returns",codeRef:"Sec 33"},
{r:"77",ch:"VIII",t:"Power to take samples of articles or substances by Inspector",f:[],c:"Inspection",codeRef:"Sec 35"},
{r:"78",ch:"VIII",t:"Powers and duties of Inspector-cum-Facilitator",f:[],c:"Inspection",codeRef:"Sec 35"},
{r:"79",ch:"VIII",t:"Powers and Duties of District Magistrate",f:[],c:"Inspection",codeRef:"Sec 36"},
{r:"80",ch:"VIII",t:"Qualifications, duties and responsibilities of technical experts",f:[],c:"Inspection",codeRef:"Sec 37"},
{r:"81",ch:"VIII",t:"Appointment of Medical Officer",f:[],c:"Health & Safety",codeRef:"Sec 42"},
{r:"82",ch:"VIII",t:"Duties of Medical Officer",f:[],c:"Health & Safety",codeRef:"Sec 42"},
{r:"83",ch:"IX",t:"Night employment of women — written consent, transport, CCTV, POSH Act compliance",f:[],c:"Welfare",codeRef:"Sec 43"},
{r:"84",ch:"IX",t:"Adequate safety for employment of women in dangerous operations",f:[],c:"Welfare",codeRef:"Sec 44"},
{r:"85",ch:"X",t:"Qualification and criteria of the contractor",f:["XXI"],c:"Contract Labour",codeRef:"Sec 47"},
{r:"86",ch:"X",t:"Conditions of License for contractors",f:[],c:"Contract Labour",codeRef:"Sec 47"},
{r:"87",ch:"X",t:"Form and manner of application for contractor license",f:["XXI"],c:"Contract Labour",codeRef:"Sec 48"},
{r:"88",ch:"X",t:"Single Licence for Contractor in more than one State",f:[],c:"Contract Labour",codeRef:"Sec 47"},
{r:"89",ch:"X",t:"Forms, terms and conditions of contractor licence",f:["XXII"],c:"Contract Labour",codeRef:"Sec 48"},
{r:"90",ch:"X",t:"Procedure for issue of licence",f:["XXII"],c:"Contract Labour",codeRef:"Sec 48"},
{r:"91",ch:"X",t:"Renewal of licence of Contractor",f:[],c:"Contract Labour",codeRef:"Sec 48"},
{r:"92",ch:"X",t:"Refund of security deposit",f:[],c:"Contract Labour",codeRef:"Sec 55"},
{r:"93",ch:"X",t:"Responsibility of contractor for welfare of contract workers",f:[],c:"Contract Labour",codeRef:"Sec 53"},
{r:"94",ch:"X",t:"Intimation of work order and time limit",f:[],c:"Contract Labour",codeRef:"Sec 50"},
{r:"95",ch:"X",t:"Revocation and suspension of license",f:[],c:"Contract Labour",codeRef:"Sec 51"},
{r:"96",ch:"X",t:"Amendment of Contractor Licence",f:["XXI"],c:"Contract Labour",codeRef:"Sec 51"},
{r:"97",ch:"X",t:"Appeal against orders under Contract Labour chapter",f:[],c:"Contract Labour",codeRef:"Sec 52"},
{r:"98",ch:"X",t:"Responsibility of principal employer for payment of wages",f:[],c:"Contract Labour",codeRef:"Sec 55"},
{r:"99",ch:"X",t:"Payment of wages from the security deposit amount",f:["XXIII"],c:"Contract Labour",codeRef:"Sec 55"},
{r:"100",ch:"X",t:"Experience Certificate for contract workers on completion of work",f:[],c:"Contract Labour",codeRef:"Sec 56"},
{r:"101",ch:"X",t:"Prohibition of employment of contract labour in certain categories",f:[],c:"Contract Labour",codeRef:"Sec 57"},
{r:"102",ch:"XI",t:"Journey allowance to inter-State migrant workers",f:[],c:"Contract Labour",codeRef:"Sec 61"},
{r:"103",ch:"XI",t:"Toll Free helpline for inter-State migrant workers",f:["XXIV"],c:"Contract Labour",codeRef:"Sec 63"},
{r:"104",ch:"XI",t:"Study of inter-State migrant workers conditions",f:[],c:"Contract Labour",codeRef:"Sec 64"},
{r:"105",ch:"XI",t:"Agreement for audio-visual / cine worker",f:[],c:"Preliminary",codeRef:"Sec 66"},
{r:"106",ch:"XI",t:"Procedure for reference of disputes to Conciliation Officer",f:[],c:"Preliminary",codeRef:"Sec 6"},
{r:"107",ch:"XII",t:"Qualification and appointment of manager in mines",f:[],c:"Mine Safety",codeRef:"Sec 67"},
{r:"108",ch:"XII",t:"Code not to apply in certain mines",f:[],c:"Mine Safety",codeRef:"Sec 68"},
{r:"109",ch:"XII",t:"Initial and periodical medical examinations in mines",f:["IX"],c:"Mine Safety",codeRef:"Sec 70"},
{r:"110",ch:"XII",t:"Examining authorities for medical examination in mines",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"111",ch:"XII",t:"Notice of medical examination in mines",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"112",ch:"XII",t:"Failure to undergo medical examination — consequences",f:[],c:"Mine Safety",codeRef:"Sec 70"},
{r:"113",ch:"XII",t:"Standard and report of medical examination in mines",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"114",ch:"XII",t:"Retention and transfer of medical certificates",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"115",ch:"XII",t:"Identity of candidates for examination",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"116",ch:"XII",t:"Medical examination of women in mines",f:[],c:"Mine Safety",codeRef:"Sec 43"},
{r:"117",ch:"XII",t:"Appeal for re-examination in mines",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"118",ch:"XII",t:"Constitution of appellate medical board for mines",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"119",ch:"XII",t:"Standard and report of medical re-examination",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"120",ch:"XII",t:"Unfit persons not to be employed in mines",f:[],c:"Mine Safety",codeRef:"Sec 70"},
{r:"121",ch:"XII",t:"Cost of medical examination in mines",f:[],c:"Mine Safety",codeRef:"Sec 42"},
{r:"122",ch:"XII",t:"Exemptions from hours and limitation of employment in mines",f:[],c:"Working Hours",codeRef:"Sec 71"},
{r:"123",ch:"XIII",t:"Establishment and location of rescue station",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"124",ch:"XIII",t:"Functions of rescue station",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"125",ch:"XIII",t:"Establishment and location of rescue room",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"126",ch:"XIII",t:"Functions of rescue room",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"127",ch:"XIII",t:"Qualifications of Superintendent of rescue station",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"128",ch:"XIII",t:"Qualifications of Rescue Instructor",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"129",ch:"XIII",t:"Selection of rescue trained persons for posting",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"130",ch:"XIII",t:"Qualifications of rescue trained persons",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"131",ch:"XIII",t:"Equipment for mine rescue operations",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"132",ch:"XIII",t:"Duties and responsibilities of Superintendent of rescue station",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"133",ch:"XIII",t:"Duties of rescue instructor",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"134",ch:"XIII",t:"Duties of rescue room in-charge",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"135",ch:"XIII",t:"Duties of rescue trained persons at rescue station",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"136",ch:"XIII",t:"Duties of rescue room attendant",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"137",ch:"XIII",t:"Telephone communication in rescue operations",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"138",ch:"XIII",t:"Rescue tracings and mapping in mines",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"139",ch:"XIII",t:"Appointment and accommodation of rescue trained persons in mines",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"140",ch:"XIII",t:"Selection of persons for training in rescue work",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"141",ch:"XIII",t:"Instructions, practices and rescue exercises",f:["IX"],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"142",ch:"XIII",t:"Medical examination for rescue training",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"143",ch:"XIII",t:"Suspension of rescue trained persons",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"144",ch:"XIII",t:"Duties of manager in rescue operations",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"145",ch:"XIII",t:"Accommodation for persons engaged in rescue work",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"146",ch:"XIII",t:"Entry into below ground mines for rescue or recovery work",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"147",ch:"XIII",t:"Fresh air bases in rescue operations",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"148",ch:"XIII",t:"Leader of rescue team — designation",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"149",ch:"XIII",t:"Instructions to rescue leader",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"150",ch:"XIII",t:"Test of rescue apparatus",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"151",ch:"XIII",t:"Duties of rescue leader below ground",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"152",ch:"XIII",t:"Rescue team members and their duties",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"153",ch:"XIII",t:"Restriction on second spell of rescue work",f:[],c:"Mine Rescue",codeRef:"Sec 72"},
{r:"155",ch:"XIV",t:"General management of vocational training in mines",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"156",ch:"XIV",t:"Power to relax training requirements",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"157",ch:"XIV",t:"Training Scheme for mine workers",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"158",ch:"XIV",t:"Scope and standard for vocational training",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"159",ch:"XIV",t:"Scope and standard for Refresher Training",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"160",ch:"XIV",t:"Arrangement for refresher training",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"161",ch:"XIV",t:"Special training in mines",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"162",ch:"XIV",t:"Training after long absence, accident or change of job",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"164",ch:"XIV",t:"Arrangements for the training centre",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"165",ch:"XIV",t:"Training Officer — appointment and duties",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"166",ch:"XIV",t:"Duties of Training Officer in mines",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"167",ch:"XIV",t:"Instructors — appointment and qualification",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"168",ch:"XIV",t:"Trainers — appointment",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"169",ch:"XIV",t:"Qualification of instructors and trainers",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"170",ch:"XIV",t:"Duties of Instructor in training centre",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"171",ch:"XIV",t:"Duties of trainer and persons undergoing training",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"172",ch:"XIV",t:"Training allowance for mine trainees",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"173",ch:"XIV",t:"Certificate of training",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"174",ch:"XIV",t:"Certificate to be delivered to the management",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"175",ch:"XIV",t:"Inspection of vocational training centre",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"176",ch:"XIV",t:"Notice of closure of vocational training centre",f:[],c:"Mine Training",codeRef:"Sec 72"},
{r:"177",ch:"XV",t:"Manner of holding enquiry",f:[],c:"Miscellaneous",codeRef:"Sec 111"},
{r:"178",ch:"XV",t:"Onus as to age of workers",f:[],c:"Miscellaneous",codeRef:"Sec 117"},
{r:"179",ch:"XV",t:"Procedure of inquiry and other related matters",f:[],c:"Miscellaneous",codeRef:"Sec 111"},
{r:"180",ch:"XV",t:"Persons to appear at inquiry",f:[],c:"Miscellaneous",codeRef:"Sec 111"},
{r:"182",ch:"XV",t:"Manner of compounding of offences by authorised officer",f:["XXVI","XXVII"],c:"Miscellaneous",codeRef:"Sec 114"}
];

// ============================================================
// FORMS DATA
// ============================================================
const FORMS_DATA = [
{n:"I",d:"Application for registration of establishment/Amendment to certificate of registration/Updation of registration particulars",cat:"Registration",rule:"Rule 3",codeRef:"Sec 3",who:"Employer",deadline:"Within 60 days of applicability",cc:"#2E6FED",bg:"rgba(46,111,237,0.12)"},
{n:"II",d:"Application for cancellation of Registration Certificate of Establishment",cat:"Registration",rule:"Rule 4",codeRef:"Sec 3",who:"Employer",deadline:"On closure of establishment",cc:"#2E6FED",bg:"rgba(46,111,237,0.12)"},
{n:"III",d:"Certificate of Registration of Establishment",cat:"Registration",rule:"Rule 3",codeRef:"Sec 3",who:"Registering Officer",deadline:"Issued within prescribed time",cc:"#2ECC9A",bg:"rgba(46,204,154,0.12)"},
{n:"IV",d:"Certificate of cancellation of Registration Certificate of Establishment",cat:"Registration",rule:"Rule 4",codeRef:"Sec 3",who:"Registering Officer",deadline:"Within 60 days of closure notice",cc:"#2ECC9A",bg:"rgba(46,204,154,0.12)"},
{n:"V",d:"Register of Registered Establishments",cat:"Records",rule:"Rule 3",codeRef:"Sec 3",who:"Registering Officer",deadline:"Maintained continuously",cc:"#E8A020",bg:"rgba(232,160,32,0.12)"},
{n:"VI",d:"Notice of Commencement/Cessation (Contract/Construction)",cat:"Registration",rule:"Rule 4",codeRef:"Sec 5",who:"Employer",deadline:"Before commencement of operations",cc:"#2E6FED",bg:"rgba(46,111,237,0.12)"},
{n:"VII",d:"Notice of Commencement/Closure for Mines",cat:"Registration",rule:"Rule 4",codeRef:"Sec 5",who:"Mine Employer",deadline:"Before commencement / on closure",cc:"#E858A8",bg:"rgba(232,88,168,0.12)"},
{n:"VIII",d:"Health Examination Certificate for employees aged 40+ years",cat:"Health",rule:"Rule 5",codeRef:"Sec 6",who:"Medical Officer",deadline:"Annual examination",cc:"#F07070",bg:"rgba(240,112,112,0.12)"},
{n:"IX",d:"Report of Medical Examination (mines, pre-employment, periodic)",cat:"Health",rule:"Rule 60, Rule 109, Rule 141",codeRef:"Sec 42, Sec 70",who:"Medical Officer",deadline:"Before employment & periodically",cc:"#F07070",bg:"rgba(240,112,112,0.12)"},
{n:"X",d:"Certificate of medical re-examination by Appellate Medical Board",cat:"Health",rule:"Rule 117",codeRef:"Sec 42",who:"Appellate Medical Board",deadline:"On appeal",cc:"#F07832",bg:"rgba(240,120,50,0.12)"},
{n:"XI",d:"Notice of Accident / Dangerous Occurrence to authorities",cat:"Accident",rule:"Rule 7",codeRef:"Sec 10, Sec 11",who:"Employer",deadline:"Fatal: forthwith; 48-hr: 12 hrs; Dangerous: 12 hrs",cc:"#F07070",bg:"rgba(240,112,112,0.12)"},
{n:"XII",d:"Notice of Periods of Work displayed at notice board and sent to Inspector",cat:"Records",rule:"Rule 71",codeRef:"Sec 31",who:"Employer",deadline:"Before implementation; on any change",cc:"#9B72E8",bg:"rgba(155,114,232,0.12)"},
{n:"XIII",d:"Employee Register — details of all employees",cat:"Records",rule:"Rule 72",codeRef:"Sec 33",who:"Employer",deadline:"Maintained continuously; preserved 5 years",cc:"#E8A020",bg:"rgba(232,160,32,0.12)"},
{n:"XIV",d:"Attendance Register-Cum-Muster Roll",cat:"Records",rule:"Rule 72",codeRef:"Sec 33",who:"Employer",deadline:"Maintained continuously; preserved 5 years",cc:"#E8A020",bg:"rgba(232,160,32,0.12)"},
{n:"XV",d:"Register For Wages, Overtime and Deductions",cat:"Records",rule:"Rule 72",codeRef:"Sec 33",who:"Employer",deadline:"Maintained continuously; preserved 5 years",cc:"#E8A020",bg:"rgba(232,160,32,0.12)"},
{n:"XVI",d:"Wage slip — issued electronically on or before day of wage payment",cat:"Records",rule:"Rule 72",codeRef:"Sec 33",who:"Employer",deadline:"On or before day of wage payment",cc:"#E8A020",bg:"rgba(232,160,32,0.12)"},
{n:"XVII",d:"Annual Return — filed electronically by 28/29 February each year",cat:"Records",rule:"Rule 74",codeRef:"Sec 33",who:"Employer",deadline:"By 28/29 February each year",cc:"#2ECC9A",bg:"rgba(46,204,154,0.12)"},
{n:"XVIII",d:"Half Yearly Return (Jan-Jun / Jul-Dec) for contractor to Deputy CLC(C)",cat:"Records",rule:"Rule 74",codeRef:"Sec 33",who:"Contractor",deadline:"Half-yearly electronically",cc:"#2ECC9A",bg:"rgba(46,204,154,0.12)"},
{n:"XIX",d:"Register of Accidents and Dangerous Occurrences — preserved 5 years",cat:"Accident",rule:"Rule 75",codeRef:"Sec 33",who:"Employer",deadline:"Maintained continuously; preserved 5 years",cc:"#F07070",bg:"rgba(240,112,112,0.12)"},
{n:"XX",d:"Register for Leave with Wages — shared with employee once/year on demand",cat:"Records",rule:"Rule 76",codeRef:"Sec 33",who:"Employer",deadline:"Maintained continuously; preserved 5 years",cc:"#E8A020",bg:"rgba(232,160,32,0.12)"},
{n:"XXI",d:"Application for Grant of Licence / Renewal / Amendment of Licence (including common/single licence) for contractors",cat:"Contract",rule:"Rules 85, 87, 96",codeRef:"Sec 47, Sec 48",who:"Contractor",deadline:"Before engaging contract labour",cc:"#1ECDE8",bg:"rgba(30,205,232,0.12)"},
{n:"XXII",d:"Proforma of Licence issued to contractor",cat:"Contract",rule:"Rules 89, 90",codeRef:"Sec 48",who:"Licensing Authority",deadline:"On grant of licence",cc:"#1ECDE8",bg:"rgba(30,205,232,0.12)"},
{n:"XXIII",d:"Experience Certificate of Contract Labour on completion of work",cat:"Contract",rule:"Rule 99",codeRef:"Sec 56",who:"Contractor",deadline:"On completion / on demand",cc:"#1ECDE8",bg:"rgba(30,205,232,0.12)"},
{n:"XXIV",d:"Agreement between Producer and Audio-visual Worker (for cine/audio-visual workers)",cat:"Welfare",rule:"Rules 15, 103",codeRef:"Sec 66",who:"Producer",deadline:"Before employment",cc:"#F07832",bg:"rgba(240,120,50,0.12)"},
{n:"XXV",d:"Improvement Notice issued by Inspector-cum-Facilitator",cat:"Compliance",rule:"Rule 78",codeRef:"Sec 35",who:"Inspector-cum-Facilitator",deadline:"On issuance",cc:"#F07070",bg:"rgba(240,112,112,0.12)"},
{n:"XXVI",d:"Application for Composition of offence by offender",cat:"Compliance",rule:"Rule 182",codeRef:"Sec 114",who:"Offender",deadline:"Before or after institution of prosecution",cc:"#9B72E8",bg:"rgba(155,114,232,0.12)"},
{n:"XXVII",d:"Notice to the employer for an offence committed under the Code (for composition of offences)",cat:"Compliance",rule:"Rule 182",codeRef:"Sec 114",who:"Compounding Officer",deadline:"On identification of compoundable offence",cc:"#9B72E8",bg:"rgba(155,114,232,0.12)"}
];

// ============================================================
// EMPLOYER COMPLIANCE SECTIONS
// ============================================================
const EMPLOYER_SECTIONS = [
{id:"A",icon:"📝",color:"rgba(46,111,237,0.12)",title:"A. Registration & Documentation (Chapter II)",
items:[
{rule:"Sec 3 / Rule 3",title:"Registration on Shram Suvidha Portal",cls:"reg",codeRef:"Sec 3",desc:"Electronic registration within 60 days in FORM-I with establishment details, identity proof, address documents. Certificate of Registration issued in FORM-III within 7 days. Must be displayed at conspicuous places. Update within 30 days of any change. On closure: intimate in FORM-II within 30 days.",thresh:"All Establishments",forms:["I","III"]},
{rule:"Sec 5 / Rule 4",title:"Notice of Commencement and Cessation",cls:"reg",codeRef:"Sec 5",desc:"Factory, mine, contract labour, and construction establishments must send notice of commencement of operations to prescribed authority electronically before starting operations. Also intimate cessation.",thresh:"Factory · Mine · Contract Labour · Construction",forms:["VI","VII"]},
{rule:"Sec 6 / Rule 6",title:"Letter of Appointment to Every Employee",cls:"reg",codeRef:"Sec 6",desc:"Written appointment letter mandatory before employment begins, containing: name, date of birth, designation, type of employment, wages, PF/ESI applicability, nature of duties, and maternity benefits (for women). No employee can be employed without it.",thresh:"All Employees",forms:[]}
]},
{id:"B",icon:"🔬",color:"rgba(240,112,112,0.12)",title:"B. Health, Safety & Working Conditions (Chapter V)",
items:[
{rule:"Sec 23 / Rule 22",title:"Cleanliness and Hygiene",cls:"hlth",codeRef:"Sec 23",desc:"All workplaces, workrooms, passageways, staircases kept sanitary. Floors dry and non-slippery. Wet processes: effective drainage, anti-skid footwear FREE OF COST. Daily collection and disposal of all types of waste under effective supervision.",thresh:"All Establishments",forms:[]},
{rule:"Sec 23 / Rule 23",title:"Ventilation, Temperature & Humidity",cls:"hlth",codeRef:"Sec 23",desc:"Suitable atmospheric conditions — no stagnant air, harmful draughts, excessive heat/cold/humidity. Adequate ventilation to clear smoke, fumes, steam, dust. Mechanical ventilation where natural is inadequate. High temperature processes: heat insulation mandatory.",thresh:"All Establishments",forms:[]},
{rule:"Sec 23 / Rule 24",title:"Precaution against Dust, Noxious Gas & Fumes",cls:"hlth",codeRef:"Sec 23",desc:"Exhaust for flammable fumes MUST NOT be connected to combustion gas chimney. Where fumes noxious: exhaust through neutralising system. No employee in confined space until noxious gas/fume/dust within permissible limits.",thresh:"All Establishments",forms:[]},
{rule:"Sec 23 / Rule 47",title:"Latrine & Urinal Accommodation",cls:"hlth",codeRef:"Sec 23",desc:"Separate latrines/urinals for male, female, transgender, PwD — at least 1 per 25 males, 1 per 15 females. Glazed tile walls. Sanitary napkins FREE in women's toilets, replenished daily. Notice boards outside each facility.",thresh:"All Establishments",forms:[]},
{rule:"Sec 22 / Rule 14-15",title:"Mandatory Safety Committee",cls:"saf",codeRef:"Sec 22",desc:"Equal employer-worker representatives (max 20). Chairman: senior official. Secretary: Safety Officer. Women represented proportionally. Term: 3 years. Meets AT LEAST ONCE EVERY QUARTER. Employer must act on recommendations WITHIN 15 DAYS.",thresh:"500+ Workers (Factory) · 250+ (Hazardous/Construction) · 100+ (Mine)",forms:["XXIV"]},
{rule:"Sec 22 / Rule 59",title:"Mock Drills (Quarterly)",cls:"saf",codeRef:"Sec 22",desc:"Quarterly emergency preparedness drills mandatory in all factories to deal with fire, chemical/gas leaks, medical emergencies, structural failures, and evacuation procedures. Records of drills maintained.",thresh:"All Factories — Quarterly",forms:[]}
]},
{id:"C",icon:"🏗️",color:"rgba(30,205,232,0.12)",title:"C. Welfare Provisions (Chapter VI)",
items:[
{rule:"Sec 24 / Rule 44",title:"Potable Drinking Water",cls:"welf",codeRef:"Sec 24",desc:"Adequate, clean, wholesome and safe drinking water provided and readily accessible. Non-piped containers clearly marked, replenished daily. Use of COMMON DRINKING TUMBLERS PROHIBITED.",thresh:"All Establishments",forms:[]},
{rule:"Sec 24 / Rule 53",title:"Canteen (100+ Workers)",cls:"welf",codeRef:"Sec 24",desc:"Canteen for nutritious, wholesome and healthy food. Must have dining hall, kitchen, storeroom, pantry, washing facilities. Portion reserved for women and PwD. NO PROFIT NO LOSS basis. Canteen Managing Committee with EQUAL employer-worker representation.",thresh:"100+ Workers",forms:[]},
{rule:"Sec 24 / Rule 54",title:"First Aid & Medical Appliances",cls:"hlth",codeRef:"Sec 24",desc:"First aid boxes readily accessible during working hours. At least 33% OF WORKERS TRAINED in first-aid; refresher every 3 years; at least one woman worker trained where women employed. Arrangements for speedy hospital referral.",thresh:"All Establishments",forms:[]},
{rule:"Sec 24 / Rule 55",title:"Ambulance Room (500+ Workers)",cls:"hlth",codeRef:"Sec 24",desc:"Suitable ambulance room or dispensary, round-the-clock. Full-time MBBS doctor with Diploma/Degree in Industrial/Occupational Health. Assisted by registered nurse (BLS trained) and one GDA/Nursing Assistant.",thresh:"500+ Workers",forms:[]},
{rule:"Sec 24 / Rule 56",title:"Shelter & Rest Room / Lunchroom (50+ Workers)",cls:"welf",codeRef:"Sec 24",desc:"Sufficient and suitable lunchroom with drinking water and washing facilities. Separately for male, female and transgender employees. Rooms must be lighted, ventilated, clean. NOTE: Canteen under Rule 53 deemed compliance of this rule.",thresh:"50+ Workers",forms:[]},
{rule:"Sec 24 / Rule 57",title:"Welfare Officer (250+ Workers)",cls:"welf",codeRef:"Sec 24",desc:"250-500 workers: at least 1 welfare officer. PG degree/diploma in social work, HR management, or labour welfare from recognised institution. Must know language spoken by majority of workers. Appointment intimated electronically to Inspector.",thresh:"250+ Workers",forms:[]},
{rule:"Sec 24 / Rule 58",title:"Crèche Facility (50+ Workers)",cls:"welf",codeRef:"Sec 24",desc:"Crèche for children under 6 years of employees; FREE and accessible to all. CCTV monitoring during working hours. Police verification of staff. NO CHILD LEFT ALONE at any point. Feeding room provided. EVACUATION PLAN displayed.",thresh:"50+ Workers",forms:[]}
]},
{id:"D",icon:"⏱️",color:"rgba(155,114,232,0.12)",title:"D. Working Hours & Overtime (Chapter VII)",
items:[
{rule:"Sec 25 / Rule 64",title:"Working Hours Limit — 48 Hrs/Week",cls:"hrs",codeRef:"Sec 25",desc:"No worker to work more than 48 hours in a week. Standard daily limit of 8 hours. Overtime triggered for daily wagers beyond 8 hours/day and for others beyond 48 hours/week.",thresh:"All Workers",forms:[]},
{rule:"Sec 27 / Rule 69",title:"Overtime Wages — 2x Rate",cls:"hrs",codeRef:"Sec 27",desc:"Overtime at TWICE THE RATE OF WAGES. Worker consent required for overtime. Fraction: 15-30 minutes = 30 minutes; more than 30 minutes = 1 hour counted for calculation.",thresh:"All Establishments",forms:[]},
{rule:"Sec 32 / Rule 76",title:"Annual Leave with Wages",cls:"hrs",codeRef:"Sec 32",desc:"1 day leave per 20 days worked (if worked 180 days). Adolescents: 1 per 15 days. Below-ground mine: 1 per 15 days. Max 30 days carry forward. On discharge/death: wages in lieu of leave payable.",thresh:"All Workers",forms:[]},
{rule:"Sec 31 / Rule 71",title:"Notice of Periods of Work",cls:"hrs",codeRef:"Sec 31",desc:"Notice of periods of work displayed at conspicuous places on notice board or electronic board. Copy sent to Inspector-cum-Facilitator electronically or by speed post.",thresh:"All Establishments",forms:["XII"]}
]},
{id:"E",icon:"📁",color:"rgba(232,160,32,0.12)",title:"E. Records, Registers & Returns (Chapter VIII)",
items:[
{rule:"Sec 33 / Rule 72",title:"Maintenance of 4 Mandatory Registers",cls:"rec",codeRef:"Sec 33",desc:"FORM-XIII (Employee Register), FORM-XIV (Attendance Register), FORM-XV (Wages/OT/Deductions), FORM-XVI (Wage Slips — issued electronically ON OR BEFORE DAY OF PAYMENT). All registers maintained electronically. PRESERVED 5 CALENDAR YEARS.",thresh:"All Establishments",forms:["XIII","XIV","XV","XVI"]},
{rule:"Sec 33 / Rule 73",title:"Mandatory Notice Board Display",cls:"rec",codeRef:"Sec 33",desc:"Display at conspicuous places: Name/address of establishment; HOURS OF WORK; WAGE PERIOD and DATE OF PAYMENT; Details of accidents (last 5 years); Name/address of Inspector-cum-Facilitator. In English/Hindi and local language.",thresh:"All Establishments",forms:[]},
{rule:"Sec 33 / Rule 74",title:"Annual Return Filing by 28/29 Feb",cls:"rec",codeRef:"Sec 33",desc:"Annual return relating to: category of employees, health/welfare facilities, retrenchment/layoffs, bonus, maternity benefits. Filed ELECTRONICALLY to Inspector-cum-Facilitator on or before 28/29 FEBRUARY each year.",thresh:"All Establishments",forms:["XVII"]},
{rule:"Sec 33 / Rule 75",title:"Register of Accidents & Dangerous Occurrences",cls:"rec",codeRef:"Sec 33",desc:"Register of accidents and dangerous occurrences in FORM-XIX. Preserved for minimum 5 years from last entry. Produced on demand before Inspector-cum-Facilitator.",thresh:"All Establishments",forms:["XIX"]}
]},
{id:"F",icon:"🚨",color:"rgba(240,112,112,0.12)",title:"F. Accident & Disease Reporting (Chapter III)",
items:[
{rule:"Sec 10 / Rule 7",title:"Notice of Accidents (FORM-XI)",cls:"acc",codeRef:"Sec 10",desc:"FATAL: Forthwith inform Inspector + Chief Inspector + District Magistrate + Police + FAMILY OF VICTIM. 48-HR DISABILITY: Report within 12 hours. DANGEROUS OCCURRENCES: Report within 12 hours. Dangerous occurrences include: bursting of plant, collapse of crane/hoist, explosion, fire, leakage of toxic gas, collapse of floor/roof/scaffolding.",thresh:"All Establishments",forms:["XI"]},
{rule:"Sec 12 / Rule 8",title:"Reporting of Occupational Disease",cls:"acc",codeRef:"Sec 12",desc:"Employer of worker suffering from notifiable disease (Third Schedule) must report to Inspector-cum-Facilitator. Qualified medical practitioner attending such patient must send WRITTEN REPORT TO CHIEF INSPECTOR-CUM-FACILITATOR.",thresh:"All Establishments",forms:[]}
]},
{id:"G",icon:"📜",color:"rgba(30,205,232,0.12)",title:"G. Contract Labour & Migrant Workers (Chapter XI)",
items:[
{rule:"Sec 53 / Rule 93",title:"Principal Employer — Welfare Responsibility",cls:"cont",codeRef:"Sec 53",desc:"Principal employer of establishment is responsible for providing welfare facilities (Sections 23 and 24) to ALL contract labour employed in the establishment regardless of whether contractor provides them.",thresh:"Principal Employers (50+ Contract Labour)",forms:[]},
{rule:"Sec 55 / Rule 98",title:"Wage Payment Responsibility",cls:"cont",codeRef:"Sec 55",desc:"Contractor primarily responsible for wages. Payment through bank/electronic mode. If contractor fails: PRINCIPAL EMPLOYER liable to pay and can recover from contractor's security deposit or as debt payable.",thresh:"All Contract Labour Establishments",forms:[]},
{rule:"Sec 61 / Rule 102",title:"Journey Allowance for Migrant Workers",cls:"cont",codeRef:"Sec 61",desc:"Annual lump sum fare for to-and-fro journey to native place for inter-State migrant workers. Subject to minimum service period, periodicity and class of travel as prescribed.",thresh:"Establishments with 10+ Inter-State Migrant Workers",forms:[]}
]},
{id:"H",icon:"👩",color:"rgba(46,204,154,0.12)",title:"H. Employment of Women (Chapter X)",
items:[
{rule:"Sec 43 / Rule 83",title:"Conditions for Night Employment of Women",cls:"wmn",codeRef:"Sec 43",desc:"Employment before 6 AM or beyond 7 PM: WRITTEN CONSENT mandatory. ADEQUATE TRANSPORTATION (pick-up and drop to residence). Workplace and passage to toilets — WELL-LIT. CCTV SURVEILLANCE. DEDICATED TELEPHONE NUMBERS displayed. POSH Act compliance MANDATORY.",thresh:"Where Women Employed at Night",forms:[]}
]}
];

// ============================================================
// FACT TABLE
// ============================================================
const FACT_TABLE = [
{sec:"3",r:"3",area:"Registration",thresh:"All Establishments",key:"Electronic registration in FORM-I. Certificate within 7 days. Update within 30 days. On closure: 30-day notice.",forms:["I","III"]},
{sec:"5",r:"4",area:"Notice of Commencement",thresh:"Factory · Mine · Contract",key:"Electronic notice before commencement of operations and on cessation.",forms:["VI","VII"]},
{sec:"6",r:"6",area:"Appointment Letter",thresh:"All Employees",key:"Written appointment letter before employment. No exceptions.",forms:[]},
{sec:"10-11",r:"7",area:"Accident Reporting",thresh:"All Establishments",key:"Fatal: forthwith. 48-hr disability: 12 hrs. Dangerous occurrence: 12 hrs.",forms:["XI"]},
{sec:"12",r:"8",area:"Disease Reporting",thresh:"All Establishments",key:"Notifiable disease: report to Inspector. Medical practitioner: written report to Chief Inspector.",forms:[]},
{sec:"22",r:"14-15",area:"Safety Committee",thresh:"500+ / Hazardous 250+",key:"Equal reps; max 20 members; quarterly meetings; act on recommendations within 15 days.",forms:["XXIV"]},
{sec:"22",r:"59",area:"Mock Drills",thresh:"All Factories",key:"Quarterly emergency preparedness drills mandatory.",forms:[]},
{sec:"23",r:"22",area:"Cleanliness",thresh:"All Establishments",key:"Sanitary workplaces; dry/non-slippery floors; daily waste disposal; free protective gear.",forms:[]},
{sec:"23",r:"23",area:"Ventilation",thresh:"All Establishments",key:"Suitable atmospheric conditions; mechanical ventilation where natural inadequate.",forms:[]},
{sec:"23",r:"47",area:"Toilets",thresh:"All Establishments",key:"1 latrine per 25 males, 1 per 15 females. Sanitary napkins free in women's toilets.",forms:[]},
{sec:"24",r:"53",area:"Canteen",thresh:"100+ Workers",key:"No profit-no loss basis. Canteen Managing Committee with equal employer-worker representation.",forms:[]},
{sec:"24",r:"54",area:"First Aid",thresh:"All Establishments",key:"33% workers trained; refresher every 3 years; speedy hospital referral.",forms:[]},
{sec:"24",r:"55",area:"Ambulance Room",thresh:"500+ Workers",key:"Full-time MBBS doctor with occupational health diploma. Round-the-clock service.",forms:[]},
{sec:"24",r:"56",area:"Rest Room/Lunchroom",thresh:"50+ Workers",key:"Lunchroom with water and washing facilities. Separate for all genders.",forms:[]},
{sec:"24",r:"57",area:"Welfare Officer",thresh:"250+ Workers",key:"PG degree in social work/HR/labour welfare. 1 per 250-500 workers.",forms:[]},
{sec:"24",r:"58",area:"Crèche",thresh:"50+ Workers",key:"For children under 6. CCTV. Police verification. Nutritious food. No child left alone.",forms:[]},
{sec:"25",r:"64",area:"Working Hours",thresh:"All Workers",key:"Maximum 48 hours per week. 8 hours per day. Overtime with worker consent.",forms:[]},
{sec:"26",r:"67",area:"Weekly Holiday",thresh:"All Workers",key:"Max 6 days/week. Compensatory holiday within month or 2 months following.",forms:[]},
{sec:"27",r:"69",area:"Overtime Wages",thresh:"All Establishments",key:"2x rate. Worker consent required. Fraction: 15-30 min = 30 min counted.",forms:[]},
{sec:"31",r:"71",area:"Work Period Notice",thresh:"All Establishments",key:"Displayed on notice board; copy sent electronically to Inspector.",forms:["XII"]},
{sec:"33",r:"72",area:"Registers (4 types)",thresh:"All Establishments",key:"Employee, Attendance, Wages/OT/Deductions, Wage Slips. Electronic. Preserved 5 years.",forms:["XIII","XIV","XV","XVI"]},
{sec:"33",r:"74",area:"Annual Return",thresh:"All Establishments",key:"Filed electronically on or before 28/29 February each year.",forms:["XVII"]},
{sec:"33",r:"75",area:"Accident Register",thresh:"All Establishments",key:"Register of all accidents and dangerous occurrences. Preserve 5 years.",forms:["XIX"]},
{sec:"43",r:"83",area:"Women Night Work",thresh:"Night Employment",key:"Written consent; transport; CCTV; well-lit; POSH Act compliance mandatory.",forms:[]},
{sec:"47",r:"85-90",area:"Contractor Licence",thresh:"50+ Contract Labour",key:"Licence mandatory. Requisite qualifications. Valid 5 years. Electronic application.",forms:["XXI","XXII"]},
{sec:"53",r:"93",area:"Principal Employer Welfare",thresh:"Contract Labour Establishments",key:"Principal employer responsible for Sec 23 and 24 welfare facilities for all contract labour.",forms:[]},
{sec:"55",r:"98",area:"Wage Payment",thresh:"Contract Labour",key:"Electronic payment. Principal employer liable if contractor fails. Recovery from security deposit.",forms:[]},
{sec:"114",r:"182",area:"Compounding of Offences",thresh:"All Establishments",key:"50% of max penalty (penalty); 75% of max fine (offence). Only for first-time offences.",forms:["XXVI","XXVII"]}
];

// ============================================================
// TIMELINE DATA
// ============================================================
const TL_DATA = [
{date:"28 Sep 2020",title:"OSH Code, 2020 Enacted",sub:"Act No. 37 of 2020 passed by Parliament, consolidating 13 earlier labour laws: Factories Act 1948, Mines Act 1952, Plantations Labour Act 1951, Contract Labour Act 1970, and 9 others into a single Code.",color:"#9B72E8"},
{date:"30 Dec 2025",title:"Draft OSH Central Rules Published",sub:"G.S.R. 934(E) — Draft OSH (Central) Rules published in Official Gazette with 45-day window for objections and suggestions from all stakeholders.",color:"#E8A020"},
{date:"13 Feb 2026",title:"Public Comment Period Closed",sub:"45-day objection/suggestion period ended. Comments from employers, worker unions, industry bodies reviewed by Ministry of Labour & Employment.",color:"#F07070"},
{date:"8 May 2026",title:"✅ OSH (Central) Rules, 2026 Notified — G.S.R. 345(E)",sub:"Final rules notified in Official Gazette No. 311. 182 Rules across 15 Chapters, 27 Prescribed Forms (FORM-I to FORM-XXVII). Effective immediately from date of publication.",color:"#2ECC9A"},
{date:"8 Nov 2026",title:"⚠️ Registration Update Deadline (Rule 3(6))",sub:"Employers registered under earlier central labour laws must update registration details in FORM-I on Shram Suvidha Portal by this date.",color:"#2E6FED"},
{date:"28/29 Feb 2027",title:"📋 First Annual Return Due (Rule 74 / Sec 33)",sub:"Annual Return in FORM-XVII to be filed electronically for calendar year 2026. Due every year by end of February.",color:"#1ECDE8"},
{date:"Quarterly",title:"🔥 Mock Drills Mandatory (Rule 59 / Sec 22)",sub:"Quarterly emergency preparedness drills mandatory in all factories. Records maintained. First drill due by August 2026.",color:"#F07832"},
{date:"Annual",title:"🏥 Annual Health Examination (Rule 5 / Sec 6)",sub:"Annual medical examination for employees aged 40 years and above. Fitness certificate in FORM-VIII.",color:"#E858A8"},
{date:"Every 3 Years",title:"🏋️ First-Aid Refresher Training (Rule 54)",sub:"Workers trained in first-aid must undergo refresher every 3 years. At least 33% of all workers must be trained at all times.",color:"#2ECC9A"}
];

// ============================================================
// CALENDAR EVENTS
// ============================================================
const CAL_EVENTS = [
{title:"OSH Code 2020 — Rules Effective Date",date:"20260508",desc:"G.S.R. 345(E) — OSH (Central) Rules 2026 came into force (182 Rules, 27 Forms).",id:"ce1"},
{title:"Registration Update Deadline (Rule 3(6))",date:"20261108",desc:"Employers to update registration in FORM-I on Shram Suvidha Portal.",id:"ce2"},
{title:"Annual Return Filing Deadline (Rule 74)",date:"20270228",desc:"Annual Return in FORM-XVII filed electronically for calendar year 2026.",id:"ce3"},
{title:"Safety Committee Q1 Meeting Due (Rule 14-15)",date:"20260808",desc:"Safety Committees (500+ workers) must meet at least once per quarter.",id:"ce4"},
{title:"Annual Health Examination Due (Rule 5)",date:"20261231",desc:"Annual medical examination for employees aged 40+ years. FORM-VIII.",id:"ce5"},
{title:"Mock Drill Q2 Due (Rule 59)",date:"20260731",desc:"Quarterly emergency preparedness drill mandatory in all factories.",id:"ce6"}
];

// ============================================================
// SCHEDULE DATA
// ============================================================
const SCHED1 = [
"Ferrous Metallurgical Industries — Integrated Iron/Steel, Ferro-alloys, Special Steels",
"Non-ferrous metallurgical Industries — zinc, lead, copper, manganese, aluminium",
"Foundries (ferrous and non-ferrous) — Castings, forgings, sand/shot blasting",
"Coal (including coke) industries — Coal, Lignite, Coke, Fuel Gases",
"Power Generating Industries",
"Pulp and paper (including paper products) industries",
"Fertiliser Industries — Nitrogenous, Phosphatic, Mixed",
"Cement Industries — Portland Cement including slag cement, puzzolona",
"Petroleum Industries — Oil Refining, Lubricating Oils and Greases",
"Petro-chemical Industries",
"Drugs and Pharmaceutical Industries — Narcotics, Drugs, Pharmaceuticals",
"Fermentation Industries (Distilleries and Breweries)",
"Rubber (Synthetic) Industries",
"Paints and Pigment Industries",
"Leather Tanning Industries",
"Electro-plating Industries",
"Chemical Industries (Coke Oven by-products, Industrial Gases, Industrial Carbon, Alkalies, Acids, Chromates, Lead compounds, Electrochemicals, Nitrogenous compounds, Phosphorus, Halogens, Explosives)",
"Insecticides, Fungicides, Herbicides and other Pesticides Industries",
"Synthetic Resin and Plastics",
"Man-made Fibre (Cellulosic and non-cellulosic) industry",
"Manufacture and repair of electrical accumulators",
"Glass and Ceramics",
"Grinding or glazing of metals",
"Manufacture, handling and processing of asbestos and its products",
"Extraction of oils and fats from vegetable and animal sources",
"Manufacture, handling and use of benzene and benzene-containing substances",
"Manufacturing processes involving carbon disulphide",
"Dyes and Dyestuff including intermediates",
"Highly flammable liquids and gases",
"Printing and dyeing on fabrics; plywood and laminate manufacturing",
"Process involving usage of radium or Radioactive Substances",
"Stone Crushing industry",
"Extraction of Oil and Raw material from scrap tyres",
"Cigarette manufacturing industry",
"Ship breaking industry",
"Hazardous waste and e-waste processing plants",
"Semiconductor manufacturing industry",
"Styrene manufacturing, handling and processing industry",
"Nano-particles utilising industry",
"Manufacturing/processing of Mercury, Lead Tetra-ethyl, Manganese, Arsenic, Chrome, Beryllium, Phosgene, Isocyanates"
];

const SCHED2_SAMPLE = [
"Fencing of machinery","Work on or near machinery in motion","Employment of adolescents on dangerous machines",
"Striking gear and devices for cutting off power","Self acting machines","Casing of new machinery",
"Prohibition of employment of women/children near cotton openers","Hoists and lifts",
"Lifting machines, chains, ropes and lifting tackles","Revolving machinery","Pressure plant",
"Floors, stairs and means of access","Pits, sumps, openings in floors","Safety officers",
"Protection of eyes","Precautions against dangerous fumes, gases","Portable electric light precautions",
"Explosive or inflammable dust/gas","Safety committee","Power to require specifications of defective parts",
"Safety of buildings and machinery","Maintenance of buildings","Prohibition in certain cases of danger",
"Notice in respect of accidents","Court of inquiry in case of accidents","Safety management in plantation",
"Construction/equipment/maintenance for dock safety","Safety of approaches over dock/wharf/quay",
"Efficient lighting of dock/ship areas","Adequate ventilation on ships","Fire and explosion prevention",
"Safe access to ships/holds/stagings","Construction/maintenance of lifting appliances",
"Safety of workers in freight container terminals","Fencing of machinery and electrical conductors",
"Construction/maintenance of staging","Rigging and use of ship's derricks",
"Testing/examination of loose gears/chains/ropes","Escape precautions in holds",
"Prevention of dangerous methods in cargo stacking","Handling of dangerous substances",
"Cleaning/chipping/painting operations","Employment for cargo handling","Transport of dock workers",
"Protection against noise/vibration/air pollution","Protective equipment and clothing",
"Sanitary/washing/welfare facilities","Medical supervision","Ambulance/first aid/rescue facilities",
"Investigation of occupational accidents/diseases","Submission of accident statements",
"Safe access to working places including scaffolding","Demolition precautions",
"Handling of explosives","Transport equipment maintenance","Hoists/lifting appliances maintenance",
"Adequate lighting of workplaces","Inhalation prevention of dust/fumes/gases",
"Precautions in stacking/unstacking","Safeguarding of machinery","Safe handling of compressed air tools",
"Precaution in case of fire","Weight limits for workers","Safe transport of workers by water",
"Steps to prevent danger from live electric wires","Safety nets/sheets/belts",
"Standards for scaffolding/ladders/lifting appliances","Precautions for pile driving/concrete work",
"Safety policy for building/construction work","Emergency standards for hazardous processes",
"Maximum permissible exposure limits","Lightning","Other matters for better workplace safety conditions"
];

const SCHED3 = [
"Lead poisoning — including any compound or preparation of lead or their sequelae",
"Lead-tetra-ethyle poisoning",
"Phosphorus poisoning or its sequelae",
"Mercury poisoning or its sequelae",
"Manganese poisoning or its sequelae",
"Arsenic poisoning or its sequelae",
"Poisoning by nitrous fumes",
"Carbon bisulphide poisoning",
"Benzene poisoning — including homologues, nitro/amido derivatives or sequelae",
"Chrome ulceration or its sequelae",
"Anthrax",
"Silicosis",
"Poisoning by halogens or halogen derivatives of aliphatic hydrocarbons",
"Pathological manifestations due to radium/radioactive substances or X-rays",
"Primary epitheliomatous cancer of the skin",
"Toxic anaemia",
"Toxic jaundice due to poisonous substances",
"Oil acne or dermatitis due to mineral oils",
"Byssinosis",
"Asbestosis",
"Occupational or contact dermatitis caused by direct contact with chemicals and paints",
"Noise induced hearing loss (exposure to high noise levels)",
"Beryllium poisoning",
"Carbon monoxide poisoning",
"Coal miners' pneumoconiosis",
"Phosgene poisoning",
"Occupational cancer",
"Isocyanates poisoning",
"Toxic nephritis"
];

// ============================================================
// SECTION RELATIONS — Link Sections to Rules & Forms
// ============================================================
const sectionRelations = {};
function initSectionRelations() {
  CODE_SECTIONS.forEach(s => { sectionRelations[s.sec] = { rules: [], forms: [] }; });
  RULES.forEach(r => {
    const refs = (r.codeRef || "").replace(/Sec\s+/gi,"").split(",").map(x=>x.trim()).filter(Boolean);
    refs.forEach(num => {
      const key = num + "|" + r.r;
      if (sectionRelations[num] && !sectionRelations[num].rules.find(x=>x.r===r.r)) {
        sectionRelations[num].rules.push({ r: r.r, title: r.t });
      }
    });
  });
  FORMS_DATA.forEach(f => {
    const refs = (f.codeRef || "").replace(/Sec\s+/gi,"").split(",").map(x=>x.trim()).filter(Boolean);
    refs.forEach(num => {
      if (sectionRelations[num] && !sectionRelations[num].forms.find(x=>x.n===f.n)) {
        sectionRelations[num].forms.push({ n: f.n, title: f.d });
      }
    });
  });
}

// ============================================================
// THEME
// ============================================================
function toggleTheme(){
  const h=document.documentElement;
  const isDark=h.getAttribute('data-theme')==='dark';
  h.setAttribute('data-theme',isDark?'light':'dark');
  document.getElementById('themeBtn').textContent=isDark?'🌙 Dark':'☀️ Light';
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
  const targets=[[s1,143],[s2,182],[s3,27],[s4,13],[s5,40],[s6,29]];
  targets.forEach(([el,target])=>{
    let cur=0;
    const step=Math.ceil(target/40);
    const t=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=Math.floor(cur);if(cur>=target)clearInterval(t);},28);
  });
}
const s1=document.getElementById('s1'),s2=document.getElementById('s2'),s3=document.getElementById('s3'),
      s4=document.getElementById('s4'),s5=document.getElementById('s5'),s6=document.getElementById('s6');

// ============================================================
// CHARTS
// ============================================================
const CCOLORS=['#1ECDE8','#F07070','#E8A020','#E858A8','#F07832','#2E6FED','#2ECC9A','#9B72E8','#60A5FA','#FBBF24','#A78BFA','#34D399','#FB923C','#F472B6'];

function initCharts(){
  Chart.defaults.font.family="'Plus Jakarta Sans',system-ui,sans-serif";
  Chart.defaults.color='#7BA8CC';

  // Chapter bar
  const chCount={};
  CODE_SECTIONS.forEach(s=>{chCount[s.ch]=(chCount[s.ch]||0)+1;});
  const chLabels=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV'];
  const chData=chLabels.map(c=>chCount[c]||0);
  new Chart(document.getElementById('chapterChart'),{
    type:'bar',
    data:{labels:chLabels.map(c=>'Ch.'+c),datasets:[{label:'Sections',data:chData,backgroundColor:chLabels.map((_,i)=>`hsl(${185+i*8},65%,${50+i}%)`),borderRadius:7,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{ticks:{color:'#7BA8CC',font:{size:9}},grid:{color:'rgba(255,255,255,0.04)'}},y:{ticks:{color:'#7BA8CC',font:{size:10}},grid:{color:'rgba(255,255,255,0.04)'},beginAtZero:true}}}
  });
  const leg=document.getElementById('chapterLegend');
  leg.innerHTML=chLabels.map((c,i)=>`<div class="leg-item"><div class="leg-dot" style="background:hsl(${185+i*8},65%,${50+i}%)"></div><div class="leg-lbl">Ch.${c}</div><div class="leg-n">${chData[i]}</div><div class="leg-pct">${chData[i]?((chData[i]/143)*100).toFixed(1):0}%</div></div>`).join('');

  // Rules category donut
  const rc={};RULES.forEach(r=>{rc[r.c]=(rc[r.c]||0)+1;});
  const rkeys=Object.keys(rc).sort((a,b)=>rc[b]-rc[a]);
  const rvals=rkeys.map(k=>rc[k]);
  const rtot=rvals.reduce((a,b)=>a+b,0);
  new Chart(document.getElementById('rulesCatChart'),{
    type:'doughnut',
    data:{labels:rkeys,datasets:[{data:rvals,backgroundColor:CCOLORS,borderWidth:3,borderColor:'#04101E',hoverOffset:8}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
      plugins:{legend:{display:false},tooltip:{callbacks:{label:(ctx)=>` ${ctx.label}: ${ctx.parsed} (${((ctx.parsed/rtot)*100).toFixed(1)}%)`}}}}
  });

  // Threshold bar
  const td=[
    {l:'All Factories',v:25,c:'#1ECDE8'},
    {l:'50+ Workers',v:3,c:'#2ECC9A'},
    {l:'100+ Workers (Canteen)',v:1,c:'#E8A020'},
    {l:'250+ Workers (Welfare Off.)',v:1,c:'#9B72E8'},
    {l:'500+ Workers',v:2,c:'#F07070'},
    {l:'Hazardous Process 250+',v:1,c:'#E858A8'},
  ];
  new Chart(document.getElementById('thresholdChart'),{
    type:'bar',
    data:{labels:td.map(d=>d.l),datasets:[{label:'Rules',data:td.map(d=>d.v),backgroundColor:td.map(d=>d.c),borderRadius:8,borderSkipped:false}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{ticks:{color:'#7BA8CC',font:{size:10}},grid:{color:'rgba(255,255,255,0.04)'},beginAtZero:true},y:{ticks:{color:'#7BA8CC',font:{size:10}},grid:{display:false}}}}
  });

  // Radar
  new Chart(document.getElementById('radarChart'),{
    type:'radar',
    data:{
      labels:['Health & Safety','Welfare','Working Hours','Records','Accident Rep.','Women Safety','Contract Labour','Mine Safety'],
      datasets:[
        {label:'Factory Rules',data:[12,16,5,5,2,2,0,0],fill:true,backgroundColor:'rgba(30,205,232,0.18)',borderColor:'#1ECDE8',pointBackgroundColor:'#1ECDE8',pointRadius:4,borderWidth:2},
        {label:'Mine/General',data:[5,3,2,3,1,1,15,31],fill:true,backgroundColor:'rgba(232,160,32,0.12)',borderColor:'#E8A020',pointBackgroundColor:'#E8A020',pointRadius:4,borderWidth:2}
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,
      scales:{r:{ticks:{color:'#7BA8CC',backdropColor:'transparent',font:{size:9}},grid:{color:'rgba(255,255,255,0.08)'},pointLabels:{color:'#7BA8CC',font:{size:10}}}},
      plugins:{legend:{labels:{color:'#7BA8CC',font:{size:11},boxWidth:12}}}}
  });

  // Scope pie
  new Chart(document.getElementById('scopeChart'),{
    type:'doughnut',
    data:{labels:['Factory-Specific (36)','Mine & Rescue (84)','General / All (62)'],datasets:[{data:[36,84,62],backgroundColor:['#1ECDE8','#2ECC9A','#E8A020'],borderWidth:3,borderColor:'#04101E',hoverOffset:6}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'55%',
      plugins:{legend:{position:'bottom',labels:{color:'#7BA8CC',font:{size:10},boxWidth:12,padding:10}},
        tooltip:{callbacks:{label:(ctx)=>` ${ctx.label}: ${ctx.parsed} rules (${((ctx.parsed/182)*100).toFixed(1)}%)`}}}}
  });

  // Form usage
  const fu={};
  FORMS_DATA.forEach(f=>{fu[f.n]=0;});
  RULES.forEach(r=>r.f.forEach(f=>{if(f in fu)fu[f]++;}));
  const uf=Object.entries(fu).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('formChart'),{
    type:'bar',
    data:{labels:uf.map(([k])=>'F-'+k),datasets:[{label:'Rules Referencing',data:uf.map(([,v])=>v),backgroundColor:'#1ECDE8',borderRadius:5,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{ticks:{color:'#7BA8CC',font:{size:9}},grid:{color:'rgba(255,255,255,0.04)'}},y:{ticks:{color:'#7BA8CC',font:{size:10},stepSize:1},grid:{color:'rgba(255,255,255,0.04)'},beginAtZero:true}}}
  });
}

// ============================================================
// CODE SECTIONS TABLE
// ============================================================
let codeFilt='all',codePage=1,codePerPage=25,codeData=[...CODE_SECTIONS];
function setCodeFilt(f,btn){
  codeFilt=f;codePage=1;
  document.querySelectorAll('#panel-code .fbtn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  filterCode();
}
function filterCode(){
  const q=(document.getElementById('codeSrch').value||'').toLowerCase();
  codePage=1;
  codeData=CODE_SECTIONS.filter(s=>{
    const mf=codeFilt==='all'||s.ch===codeFilt;
    const ms=!q||s.sec.includes(q)||s.title.toLowerCase().includes(q)||s.provision.toLowerCase().includes(q)||s.app.toLowerCase().includes(q)||s.ch.toLowerCase().includes(q);
    return mf&&ms;
  });
  renderCode();
}
function renderCode(){
  const total=codeData.length;
  const pages=Math.max(1,Math.ceil(total/codePerPage));
  if(codePage>pages)codePage=pages;
  const start=(codePage-1)*codePerPage;
  const slice=codeData.slice(start,start+codePerPage);
  document.getElementById('codeTbody').innerHTML=slice.map(s=>{
    const rel=sectionRelations[s.sec]||{rules:[],forms:[]};
    const rulesHtml=rel.rules.length?rel.rules.map(r=>`<span class="sec-pill rule-pill clickable" data-type="rule" data-id="${r.r}" title="${r.title.replace(/"/g,'&quot;')}">Rule ${r.r}</span>`).join(''):'<span class="empty-link">—</span>';
    const formsHtml=rel.forms.length?rel.forms.map(f=>`<span class="sec-pill form-pill clickable" data-type="form" data-id="${f.n}" title="${f.title.replace(/"/g,'&quot;')}">Form ${f.n}</span>`).join(''):'<span class="empty-link">—</span>';
    return`<tr>
      <td class="trule">Sec ${s.sec}</td>
      <td class="tch">Ch.${s.ch}</td>
      <td style="max-width:260px;line-height:1.5;font-size:12px;font-weight:600;">${s.title}</td>
      <td style="font-size:11px;color:var(--text3);max-width:320px;line-height:1.5;">${s.provision.substring(0,200)}${s.provision.length>200?'…':''}</td>
      <td><span style="padding:2px 8px;border-radius:20px;font-size:10px;background:rgba(30,205,232,0.1);color:var(--teal2);font-weight:700;">${s.app}</span></td>
      <td>${rulesHtml}</td>
      <td>${formsHtml}</td>
    </tr>`;
  }).join('');
  document.getElementById('sectionCount').textContent=`Showing ${start+1}–${Math.min(start+codePerPage,total)} of ${total}`;
  document.getElementById('codePageInfo').textContent=`Page ${codePage} of ${pages}`;
  let btns='';
  if(codePage>1)btns+=`<button class="pb" onclick="goCodeP(${codePage-1})">← Prev</button>`;
  const sp=Math.max(1,codePage-2),ep=Math.min(pages,codePage+2);
  for(let i=sp;i<=ep;i++)btns+=`<button class="pb ${i===codePage?'on':''}" onclick="goCodeP(${i})">${i}</button>`;
  if(codePage<pages)btns+=`<button class="pb" onclick="goCodeP(${codePage+1})">Next →</button>`;
  document.getElementById('codePageBtns').innerHTML=btns;
}
function goCodeP(n){codePage=n;renderCode();}

// ============================================================
// EMPLOYER SECTIONS
// ============================================================
function renderEmployer(){
  const el=document.getElementById('employerSections');
  el.innerHTML=EMPLOYER_SECTIONS.map(sec=>`
    <div class="sec-head">
      <div class="sec-icon" style="background:${sec.color}">${sec.icon}</div>
      <div class="sec-title">${sec.title}</div>
      <div class="sec-cnt">${sec.items.length} Item${sec.items.length>1?'s':''}</div>
    </div>
    <div class="cgrid">
      ${sec.items.map(it=>`
        <div class="cc ${it.cls}">
          <div class="cc-rule">${it.rule} · ${it.codeRef}</div>
          <div class="cc-title">${it.title}</div>
          <div class="cc-desc">${it.desc}</div>
          <div class="cc-thresh">👥 ${it.thresh}</div>
          ${it.forms.length?`<div class="cc-forms">${it.forms.map(f=>`<span class="fpill" onclick="openDetailModal('form','${f}')">FORM-${f}</span>`).join('')}</div>`:''}
        </div>`).join('')}
    </div>`).join('');
  document.getElementById('factTbody').innerHTML=FACT_TABLE.map(r=>`
    <tr>
      <td class="trule">Sec ${r.sec}</td>
      <td class="trule">Rule ${r.r}</td>
      <td style="font-size:12px;font-weight:600;">${r.area}</td>
      <td style="font-size:11px;color:var(--text3);line-height:1.5;max-width:300px;">${r.key}</td>
      <td><span style="padding:2px 8px;border-radius:20px;font-size:10px;background:rgba(30,205,232,0.1);color:var(--teal2);font-weight:700;">${r.thresh}</span></td>
      <td>${r.forms.length?r.forms.map(f=>`<span class="fpill" onclick="openDetailModal('form','${f}')">FORM-${f}</span>`).join(' '):'<span style="color:var(--text3);font-size:10px;">—</span>'}</td>
    </tr>`).join('');
}

// ============================================================
// RULES TABLE
// ============================================================
let cFilt='all',cPage=1,perPage=25,fData=[...RULES];
function getCatPill(c){
  const m={'Health & Safety':'p-hs','Welfare':'p-wf','Working Hours':'p-wh','Records & Returns':'p-rr','Contract Labour':'p-cl','Mine Safety':'p-mn','Mine Rescue':'p-mr','Mine Training':'p-mt','Miscellaneous':'p-mis','Inspection':'p-ins','Registration':'p-reg','Preliminary':'p-pre'};
  return m[c]||'p-ot';
}
function setFilt(f,btn){
  cFilt=f;cPage=1;
  document.querySelectorAll('#panel-rules .fbtn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  doFilter();
}
function doFilter(){
  const q=(document.getElementById('srchInp').value||'').toLowerCase();
  cPage=1;
  fData=RULES.filter(r=>{
    const mf=cFilt==='all'||r.c.toLowerCase().includes(cFilt.toLowerCase());
    const ms=!q||r.r.includes(q)||r.t.toLowerCase().includes(q)||r.c.toLowerCase().includes(q)||(r.codeRef||'').toLowerCase().includes(q)||r.ch.toLowerCase().includes(q);
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
    const pills=r.f.length?r.f.map(f=>`<span class="sec-pill form-pill clickable" data-type="form" data-id="${f}">Form ${f}</span>`).join(' '):'<span class="empty-link">—</span>';
    return`<tr>
      <td class="trule">Rule ${r.r}</td>
      <td class="tch">Ch.${r.ch}</td>
      <td style="max-width:300px;line-height:1.5;font-size:12px;">${r.t}</td>
      <td>${pills}</td>
      <td><span class="tpill ${getCatPill(r.c)}">${r.c}</span></td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--gold);white-space:nowrap;">${r.codeRef||'—'}</td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text3);white-space:nowrap;">08 May 2026</td>
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
let formFilt='all',filteredForms=[...FORMS_DATA];
function setFormFilt(f,btn){
  formFilt=f;
  document.querySelectorAll('#panel-forms .fbtn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  filterForms();
}
function filterForms(){
  const q=(document.getElementById('formSrch').value||'').toLowerCase();
  filteredForms=FORMS_DATA.filter(f=>{
    const mf=formFilt==='all'||f.cat.toLowerCase().includes(formFilt.toLowerCase());
    const ms=!q||f.n.toLowerCase().includes(q)||f.d.toLowerCase().includes(q)||f.cat.toLowerCase().includes(q)||f.rule.toLowerCase().includes(q)||(f.codeRef||'').toLowerCase().includes(q);
    return mf&&ms;
  });
  renderForms();
}
function renderForms(){
  const grid=document.getElementById('formsGrid');
  if(!filteredForms.length){grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text3);">No forms match your filter.</div>`;return;}
  grid.innerHTML=filteredForms.map(f=>`
    <div class="fcard-master" onclick="openFormDetail('${f.n}')">
      <div class="fcard-top">
        <div class="fcard-num-badge" style="background:${f.bg};color:${f.cc};border:1.5px solid ${f.cc}44;">
          <span class="fn-form">FORM</span>
          <span class="fn-num">${f.n}</span>
        </div>
        <div class="fcard-header">
          <div class="fcard-cat-pill" style="background:${f.bg};color:${f.cc};">${f.cat}</div>
          <div class="fcard-title">${f.d}</div>
        </div>
      </div>
      <div class="fcard-body">
        <div class="fcard-rule-ref">📌 <code>${f.rule} · ${f.codeRef}</code></div>
      </div>
      <div class="fcard-footer">
        <div class="fcard-who">👤 ${f.who}</div>
        <div class="fcard-deadline" style="color:${f.cc};">⏰ ${f.deadline}</div>
        ${DL[f.n]?`<div class="fcard-open-badge" style="color:${f.cc};border-color:${f.cc}44;" onclick="event.stopPropagation();window.open('${DL[f.n]}','_blank')">↗ Open PDF</div>`:''}
      </div>
    </div>`).join('');
}

function openFormDetail(formNum){
  const f=FORMS_DATA.find(x=>x.n===formNum);
  if(!f)return;
  const content=`
    <div class="detail-header">
      <h3>📄 FORM-${f.n} — ${f.d}</h3>
      <div class="detail-meta">
        <span style="background:${f.bg};color:${f.cc};">${f.cat}</span>
        <span>📌 ${f.rule} · ${f.codeRef}</span>
        <span>👤 ${f.who}</span>
        <span>⏰ ${f.deadline}</span>
      </div>
    </div>
    <div class="detail-desc">${f.d}</div>
    ${DL[f.n]?`<a href="${DL[f.n]}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:11px 20px;background:linear-gradient(135deg,var(--teal),var(--blue2));color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:12px;margin-top:10px;">↗ Open FORM-${f.n} (Google Drive)</a>`:''}
  `;
  document.getElementById('detailContent').innerHTML=content;
  document.getElementById('detailOverlay').classList.add('open');
}

// ============================================================
// DETAIL MODAL
// ============================================================
function openDetailModal(type, id){
  let content='';
  if(type==='rule'){
    const rule=RULES.find(r=>String(r.r)===String(id));
    if(!rule)return;
    content=`
      <div class="detail-header">
        <h3>📋 Rule ${rule.r} — ${rule.t}</h3>
        <div class="detail-meta">
          <span>Chapter ${rule.ch}</span>
          <span class="tpill ${getCatPill(rule.c)}">${rule.c}</span>
          <span>📖 ${rule.codeRef}</span>
        </div>
      </div>
      <div class="detail-desc">${rule.t}</div>
      <div style="font-size:12px;color:var(--text3);margin-top:8px;">📅 Notified: 08 May 2026 · G.S.R. 345(E)</div>
      ${rule.f.length?`<div style="margin-top:14px;"><div class="detail-fields"><h4>Linked Forms</h4></div><div style="display:flex;gap:8px;flex-wrap:wrap;">${rule.f.map(f=>`<span class="fpill" onclick="openDetailModal('form','${f}');closeDetailModal()">FORM-${f}</span>`).join('')}</div></div>`:''}
    `;
  } else if(type==='form'){
    openFormDetail(id);
    return;
  } else if(type==='section'){
    const sec=CODE_SECTIONS.find(s=>s.sec===id);
    if(!sec)return;
    const rel=sectionRelations[id]||{rules:[],forms:[]};
    content=`
      <div class="detail-header">
        <h3>📜 Section ${sec.sec} — ${sec.title}</h3>
        <div class="detail-meta">
          <span>Chapter ${sec.ch}</span>
          <span style="padding:5px 12px;background:rgba(30,205,232,0.1);color:var(--teal2);border-radius:8px;font-size:11px;">${sec.app}</span>
        </div>
      </div>
      <div class="detail-desc">${sec.provision}</div>
      ${rel.rules.length?`<div class="detail-fields"><h4>Linked Rules</h4></div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">${rel.rules.map(r=>`<span class="sec-pill rule-pill">Rule ${r.r}</span>`).join('')}</div>`:''}
      ${rel.forms.length?`<div class="detail-fields"><h4>Linked Forms</h4></div><div style="display:flex;gap:6px;flex-wrap:wrap;">${rel.forms.map(f=>`<span class="sec-pill form-pill clickable" data-type="form" data-id="${f.n}">Form ${f.n}</span>`).join('')}</div>`:''}
    `;
  }
  document.getElementById('detailContent').innerHTML=content;
  document.getElementById('detailOverlay').classList.add('open');
}
function closeDetailModal(){
  document.getElementById('detailOverlay').classList.remove('open');
}

// ============================================================
// SCHEDULES
// ============================================================
function renderSchedules(){
  document.getElementById('sched1Grid').innerHTML=SCHED1.map((item,i)=>`<div class="sched-item hazard"><span class="sn">${i+1}.</span>${item}</div>`).join('');
  document.getElementById('sched2Grid').innerHTML=SCHED2_SAMPLE.map((item,i)=>`<div class="sched-item std"><span class="sn">${i+1}.</span>${item}</div>`).join('');
  document.getElementById('sched3Grid').innerHTML=SCHED3.map((item,i)=>`<div class="sched-item disease"><span class="sn">${i+1}.</span>${item}</div>`).join('');
}

// ============================================================
// TIMELINE
// ============================================================
function renderTimeline(){
  document.getElementById('tlContent').innerHTML=TL_DATA.map(e=>`
    <div class="tlrow">
      <div class="tldot" style="background:${e.color};box-shadow:0 0 12px ${e.color}88;"></div>
      <div>
        <div class="tldate">${e.date}</div>
        <div class="tltitle">${e.title}</div>
        <div class="tlsub">${e.sub}</div>
      </div>
    </div>`).join('');
}

// ============================================================
// CALENDAR
// ============================================================
function openCal(){document.getElementById('calOverlay').classList.add('open');renderCalEvs();}
function closeCal(){document.getElementById('calOverlay').classList.remove('open');}
function renderCalEvs(){
  document.getElementById('calEvs').innerHTML=CAL_EVENTS.map(e=>`
    <div class="mev">
      <div><div class="mev-t">${e.title}</div><div class="mev-d">${e.date.replace(/(\d{4})(\d{2})(\d{2})/,'$3/$2/$1')}</div></div>
      <input type="checkbox" id="${e.id}" checked style="accent-color:var(--teal2);width:16px;height:16px;">
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
  const h=['Rule','Chapter','Title','Forms','Category','Code Reference','Date'];
  const rows=fData.map(r=>['Rule '+r.r,'Chapter '+r.ch,'"'+r.t.replace(/"/g,'""')+'"',r.f.map(f=>'FORM-'+f).join('; ')||'—',r.c,r.codeRef||'—','08 May 2026']);
  const csv=[h,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='OSH_Rules_2026_All.csv';a.click();
}
function exportCodeCSV(){
  const h=['Section','Chapter','Title','Key Provision','Applicability','Linked Rules','Linked Forms'];
  const rows=codeData.map(s=>{
    const rel=sectionRelations[s.sec]||{rules:[],forms:[]};
    return['Section '+s.sec,'Chapter '+s.ch,'"'+s.title.replace(/"/g,'""')+'"','"'+s.provision.substring(0,300).replace(/"/g,'""')+'"',s.app,rel.rules.map(x=>'Rule '+x.r).join('; ')||'—',rel.forms.map(x=>'Form '+x.n).join('; ')||'—'];
  });
  const csv=[h,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='OSH_Code_2020_All_Sections.csv';a.click();
}
function exportFactCSV(){
  const h=['Section','Rule','Area','Threshold','Key Requirement','Forms'];
  const rows=FACT_TABLE.map(r=>[r.sec,r.r,'"'+r.area+'"',r.thresh,'"'+r.key.replace(/"/g,'""')+'"',r.forms.map(f=>'FORM-'+f).join('; ')||'—']);
  const csv=[h,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='OSH_Employer_Compliance.csv';a.click();
}

// ============================================================
// EVENT DELEGATION — Clickable Pills
// ============================================================
document.addEventListener('click',function(e){
  if(e.target.matches('.sec-pill.clickable')){
    e.stopPropagation();
    const type=e.target.dataset.type;
    const id=e.target.dataset.id;
    openDetailModal(type,id);
  }
});

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded',()=>{
  initSectionRelations();
  setTimeout(animCounters,300);
  initCharts();
  renderEmployer();
  filterCode();
  doFilter();
  filterForms();
  renderSchedules();
  renderTimeline();
});