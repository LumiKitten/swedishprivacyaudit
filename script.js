// Tracker constants
const TRACKER_STORAGE_KEY = "privacyTrackerData";
const STALE_DAYS = 30;

// Translations
const translations = {
  sv: {
    // Navigation
    "nav.brand": "Sekretessguiden",
    "nav.step1": "01",
    "nav.step1_tooltip": "Förbered",
    "nav.step2": "02",
    "nav.step2_tooltip": "BankID-tjänster",
    "nav.step3": "03",
    "nav.step3_tooltip": "E-posttjänster",
    "nav.step4": "04",
    "nav.step4_tooltip": "Bekräfta",
    "nav.tracker": "Spåra",
    "nav.tracker_tooltip": "Spårning",
    "nav.rights": "Rättigheter",
    "nav.rights_tooltip": "Dina rättigheter",
    "nav.guide": "Guide",
    "nav.guide_tooltip": "Steg-för-steg guide",
    "nav.legal_tooltip": "Juridisk bakgrund",

    // Settings
    "settings.language": "Språk",
    "settings.theme": "Tema",
    "settings.light": "Ljust",
    "settings.dark": "Mörkt",

    // Hero
    "hero.meta": "Uppdaterad december 2025",
    "hero.title": "Ta bort dina personuppgifter från svenska söktjänster",
    "hero.lead":
      "En steg-för-steg guide för att radera din information från Ratsit, Hitta, Eniro och andra öppna register.",

    // Intro
    "intro.text":
      "Denna guide innehåller direktlänkar till borttagningssidor samt juridiska mallar med hänvisning till aktuella rättsfall. De flesta guider online är ofullständiga eller föråldrade.",
    "intro.print": "🖨️ Skriv ut guiden",

    // Step 1
    "step1.title": "Grundförutsättningar",
    "step1.subtitle":
      "Utan dessa steg återkommer din information inom 30 dagar",
    "step1.phone.title": "Hemligt telefonnummer",
    "step1.phone.desc":
      "Söktjänster köper data från telekomoperatörer. Stäng av denna källa först.",
    "step1.phone.step1": "Kontakta din operatör",
    "step1.phone.step2":
      "Begär hemligt nummer och återkalla samtycke till nummerupplysning",
    "step1.phone.step3": "Vänta 1–2 veckor för uppdatering",
    "step1.phone.quote":
      '"Jag vill ha hemligt telefonnummer och drar tillbaka mitt samtycke till nummerupplysning och marknadsföring."',
    "step1.phone.operators": "Kontakta din operatör",
    "step1.spar.title": "SPAR-registret",
    "step1.spar.desc":
      "Stoppa staten från att sälja din adress till marknadsförare.",
    "step1.spar.action": "Logga in med BankID → Aktivera reklamspärr",
    "step1.nix.title": "NIX-telefon",
    "step1.nix.desc": "Blockera oönskade säljsamtal.",
    "step1.nix.action": "Ange ditt telefonnummer",
    "step1.nixaddr.title": "NIX-adresserat",
    "step1.nixaddr.desc": "Stoppa adresserad direktreklam.",
    "step1.nixaddr.action": "Registrera via BankID",
    "step1.phone.orcall": "eller ring",

    // Step 2
    "step2.title": "Ta bort från söktjänster",
    "step2.subtitle": "Använd dessa direktlänkar för borttagning via BankID",
    "tag.permanent": "Permanent borttagning",
    "tag.immediate": "Omedelbar",
    "tag.fast": "Snabb",
    "tag.followup": "Kräver uppföljning",
    "tag.emailfirst": "Kräver e-post först",
    "service.ratsit.desc":
      'Den vanliga "Dölj"-funktionen varar endast 12 månader. Denna länk ger fullständig borttagning.',
    "service.ratsit.action": "Logga in med BankID → Bekräfta",
    "service.hitta.desc":
      'Sök ditt nummer eller namn, klicka "Ta bort" och signera.',
    "service.hitta.action": "Signera med BankID",
    "service.eniro.desc":
      'Sök din profil, välj "Uppdatera" och sedan "Ta bort profil helt".',
    "service.eniro.action": "Logga in med BankID",
    "service.merinfo.desc": 'Välj "Jag vill ta bort mig" och logga in.',
    "service.merinfo.action": "Logga in med BankID",
    "service.mrkoll.desc":
      "Återpublicerar ofta efter 30 dagar. Kontrollera regelbundet eller maila",
    "service.mrkoll.action": 'Välj "Dölj" för adress och telefon',
    "service.birthday.desc":
      'Begär länk till hanteringsportalen via e-post, logga sedan in med BankID och välj "Helt dold".',
    "service.birthday.link": "Begär länk via info@birthday.se",
    "service.birthday.action": "Bearbetningstid: upp till 60 minuter",

    // Step 3
    "step3.title": "Tjänster som kräver e-post",
    "step3.subtitle": "Dessa har inte BankID-verifiering eller hävdar undantag",
    "email.krimfup.note": "Svår att få borttagning från. Börja med mall 2.",
    "email.lexbase.note": "Hävdar utgivningsbevis. Börja med mall 2.",
    "template1.title": "Mall 1: Standardbegäran",
    "template2.title": "Mall 2: Begäran med rättslig hänvisning",
    "template2.note":
      "För tjänster som hävdar utgivningsbevis eller inte svarar. Hänvisar till Kammarrättens mål 6027-23.",
    copy: "Kopiera",

    // Step 4
    "step4.title": "Ta bort från sökresultat",
    "step4.subtitle":
      "Google kan visa cachade resultat i flera veckor efter borttagning",
    "step4.action1": "Gå till",
    "step4.action1.link": "Googles verktyg för föråldrat innehåll",
    "step4.action2": "Ange URL:en till din tidigare profilsida",
    "step4.action3": 'Klicka "Request Removal" – borttaget inom 24–48 timmar',

    // Maintenance
    "maintenance.title": "Regelbundet underhåll",
    "maintenance.30days": "30 dagar",
    "maintenance.30days.text":
      "Kontrollera MrKoll – de återpublicerar frekvent",
    "maintenance.12months": "12 månader",
    "maintenance.12months.text":
      'Förnya Ratsit-spärren om du använde "Dölj" istället för "Ta bort"',
    "maintenance.change": "Vid byte",
    "maintenance.change.text":
      "Verifiera hemligt nummer efter operatörs- eller abonnemangsbyte",

    // FAQ
    "faq.title": "Vanliga frågor",
    "faq.lexbase.q": "Fungerar detta för Lexbase och Krimfup?",
    "faq.lexbase.a":
      "Det är svårt. Använd mall 2 och hänvisa till Kammarrättens dom. Som alternativ, fokusera på att ta bort Google-sökresultaten så informationen blir svårare att hitta.",
    "faq.birthday.q": "Hur fungerar Birthday.se:s nya självbetjäning?",
    "faq.birthday.a":
      'Birthday.se har infört en BankID-portal för synlighetshantering. Maila info@birthday.se för att få en personlig länk till appen.minauppgifter.se. Där kan du välja mellan "Helt synlig", "Delvis synlig" (endast namn) eller "Helt dold" (rekommenderas). Ändringen träder i kraft inom 60 minuter.',
    "faq.service.q": "Kan jag anlita en betaltjänst?",
    "faq.service.a":
      "Tjänster som DoldAdress finns, men de utför samma steg som beskrivs här. Processen tar cirka 20 minuter.",

    // Tracker
    "tracker.title": "Spåra din status",
    "tracker.intro":
      "Håll koll på vilka tjänster som fortfarande visar dina uppgifter. All data sparas endast lokalt i din webbläsare.",
    "tracker.progress": "Framsteg",
    "tracker.progress.done": "klara",
    "tracker.name.label": "Ditt namn (för söklänkar)",
    "tracker.name.placeholder": "Förnamn Efternamn",
    "tracker.export": "Exportera data",
    "tracker.import": "Importera data",
    "tracker.clear": "Rensa all data",
    "tracker.privacy": "Sekretess:",
    "tracker.privacy.text":
      'Ingen data skickas till någon server. Allt sparas endast i din webbläsare (localStorage). Om du byter webbläsare eller rensar webbläsardata försvinner informationen — använd "Exportera" för säkerhetskopiering.',
    "tracker.reminder": "Påminn mig att kontrollera igen om",
    "tracker.reminder.days": "dagar",
    "tracker.btn.search": "Sök",
    "tracker.btn.mail": "E-post",
    "tracker.btn.mail.first": "Första begäran",
    "tracker.btn.mail.followup": "Uppföljning",
    "tracker.btn.remove": "Ta bort",
    "tracker.btn.done": "Klar",
    "tracker.btn.visible": "Kvar",
    "tracker.status.unknown": "Okänd",
    "tracker.status.removed": "Borttagen",
    "tracker.status.visible": "Synlig",
    "tracker.last": "Senast:",
    "tracker.never": "Aldrig kontrollerat",
    "tracker.tooltip.login": "Kräver inloggning",
    "tracker.tooltip.name": "Ange namn först",
    "tracker.tooltip.markvisible": "Markera Kvar först",

    // Confirm dialog
    "confirm.title": "Rensa all data?",
    "confirm.text":
      "All spårningsdata kommer att raderas. Detta kan inte ångras.",
    "confirm.cancel": "Avbryt",
    "confirm.delete": "Rensa",

    // Toast messages
    "toast.copied": "Mall kopierad till urklipp",
    "toast.status": "Status uppdaterad",
    "toast.cleared": "Data rensad",

    // Alerts
    "alert.name": "Ange ditt namn först för att kunna söka.",
    "alert.import":
      "Kunde inte läsa filen. Kontrollera att det är en giltig JSON-fil.",
    "alert.copy": "Kunde inte kopiera. Markera texten manuellt.",

    // Footer
    "footer.updated": "Senast uppdaterad: December 2025",
    "footer.disclaimer":
      "Denna guide är framtagen i informationssyfte. För juridisk rådgivning, kontakta en kvalificerad jurist.",

    // Skip link
    skip: "Hoppa till huvudinnehåll",

    // Back to top
    backtotop: "Tillbaka till toppen",

    // Notifications
    "notif.title": "Sekretessguiden",
    "notif.body": "Dags att kontrollera dina uppgifter hos söktjänsterna!",
    "notif.blocked": "⚠️ Notifieringar blockerade i webbläsaren.",
    "notif.denied": "Notifieringar nekades. Aktivera i webbläsarinställningar.",
    "notif.granted": "✓ Notifieringar tillåtna",
    "notif.scheduled": "✓ Påminnelse:",
    "notif.nextvisit": "(vid nästa besök)",
    "notif.activated": "Påminnelse om {days} dagar aktiverad.",

    // Stale alert
    "stale.alert": "⚠️ {count} tjänst har inte kontrollerats på över 30 dagar.",
    "stale.alert.plural":
      "⚠️ {count} tjänster har inte kontrollerats på över 30 dagar.",

    // Rattigheter page
    "rights.hero.meta": "Juridisk bakgrund",
    "rights.hero.title": "Dina rättigheter",
    "rights.hero.lead":
      "Förstå varför svenska söktjänster kan publicera dina uppgifter — och varför du har rätt att få dem borttagna.",
    "rights.intro":
      "Denna sida ger en översikt över relevant lagstiftning. Den utgör inte juridisk rådgivning. För specifika frågor, kontakta en kvalificerad jurist eller Integritetsskyddsmyndigheten (IMY).",
    "rights.s1.title": "Offentlighetsprincipen",
    "rights.s1.subtitle": "Varför uppgifter är offentliga från början",
    "rights.s1.p1":
      "Sverige har en grundlagsskyddad princip om offentlighet för officiella handlingar, känd som offentlighetsprincipen. Den finns i Tryckfrihetsförordningen och ger allmänheten rätt att ta del av handlingar hos myndigheter.",
    "rights.s1.p2":
      "Detta innebär att uppgifter från exempelvis Skatteverket, folkbokföringen och bolagsregistret är tillgängliga för allmänheten. Söktjänster som Ratsit och Hitta hämtar data från dessa offentliga källor.",
    "rights.s1.box.title": "Vad är offentligt?",
    "rights.s1.box.li1": "Namn och folkbokföringsadress",
    "rights.s1.box.li2": "Födelsedatum och civilstånd",
    "rights.s1.box.li3": "Fastighetsinnehav och taxeringsvärden",
    "rights.s1.box.li4": "Bolagsengagemang",
    "rights.s1.box.li5": "I vissa fall: inkomstuppgifter",
    "rights.s2.title": "Utgivningsbevis",
    "rights.s2.subtitle": 'Det "kryphål" som söktjänster använder',
    "rights.s2.p1":
      "Många söktjänster har registrerat sig som nyhetsmedier genom att ansöka om ett frivilligt utgivningsbevis. Detta ger dem skydd under Yttrandefrihetsgrundlagen (YGL), som historiskt har ansetts ha företräde framför GDPR.",
    "rights.s2.p2":
      'Genom att hävda att de bedriver "journalistisk verksamhet" har dessa företag kunnat undvika GDPR:s krav på samtycke och rätt till radering.',
    "rights.s2.box.title": "Problemet",
    "rights.s2.box.text":
      "De flesta söktjänster har ett kommersiellt syfte — de säljer bakgrundskontroller och tjänar pengar på reklam. Deras verksamhet har lite med traditionell journalistik att göra.",
    "rights.s3.title": "Kammarrättens dom 6027-23",
    "rights.s3.subtitle": "Det banbrytande avgörandet från mars 2024",
    "rights.s3.p1":
      "I mars 2024 avkunnade Kammarrätten en dom som förändrar rättsläget. Domstolen slog fast att utgivningsbevis inte automatiskt ger undantag från GDPR.",
    "rights.s3.p2":
      "Domstolen betonade att EU-rätten kräver en proportionalitetsavvägning mellan yttrandefrihet och integritetsskydd. När en tjänsts primära syfte inte är journalistiskt, kan GDPR gälla fullt ut.",
    "rights.s3.box.title": "Vad detta betyder för dig",
    "rights.s3.box.li1":
      "Söktjänster med kommersiellt syfte måste respektera din rätt till radering",
    "rights.s3.box.li2": "De kan inte längre gömma sig bakom utgivningsbevis",
    "rights.s3.box.li3": "IMY har aviserat skärpt tillsyn av dessa tjänster",
    "rights.s3.link": "Läs domstolens nyhet →",
    "rights.s4.title": "Dina GDPR-rättigheter",
    "rights.s4.subtitle": "Artikel 17 och 21 ger dig verktyg",
    "rights.s4.erasure.title": "Rätt till radering",
    "rights.s4.erasure.text":
      "Du har rätt att begära att personuppgifter raderas när det inte längre finns rättslig grund för behandlingen.",
    "rights.s4.object.title": "Rätt att invända",
    "rights.s4.object.text":
      'Du kan invända mot behandling som grundar sig på "berättigat intresse", till exempel direktmarknadsföring.',
    "rights.s4.deadline.title": "Svarsfrist",
    "rights.s4.deadline.text":
      "Företag måste svara på din begäran inom 30 dagar. Vid komplicerade ärenden kan fristen förlängas med ytterligare 60 dagar.",
    "rights.s4.complain.title": "Rätt att klaga",
    "rights.s4.complain.text":
      "Om ett företag inte efterlever kan du lämna klagomål till IMY.",
    "rights.s5.title": "Vanliga invändningar",
    "rights.s5.subtitle": "Så bemöter du företagens argument",
    "rights.s5.obj1.q": '"Vi har utgivningsbevis"',
    "rights.s5.obj1.a":
      "Kammarrättens dom 6027-23 slår fast att utgivningsbevis inte automatiskt undantar från GDPR. En proportionalitetsavvägning måste göras.",
    "rights.s5.obj2.q": '"Uppgifterna är offentliga"',
    "rights.s5.obj2.a":
      "Att data är offentligt tillgänglig betyder inte att den får sammanställas och publiceras kommersiellt utan möjlighet till radering.",
    "rights.s5.obj3.q": '"Vi bedriver journalistik"',
    "rights.s5.obj3.a":
      "Bakgrundskontroller och personsök är inte journalistisk verksamhet i traditionell mening. Verksamhetens faktiska syfte är avgörande.",
    "rights.s5.obj4.q": '"Vi kan bara dölja, inte radera"',
    "rights.s5.obj4.a":
      'Fråga specifikt efter radering enligt artikel 17. "Döljning" kan vara temporär och uppgifterna kan dyka upp igen.',
    "rights.s6.title": "Resurser",
    "rights.s6.subtitle": "Fördjupa dig i ämnet",
    "rights.res.imy.name": "Integritetsskyddsmyndigheten (IMY)",
    "rights.res.imy.desc": "Tillsynsmyndighet för dataskydd i Sverige",
    "rights.res.gdpr.name": "Dina rättigheter enligt GDPR",
    "rights.res.gdpr.desc": "IMY:s guide för privatpersoner",
    "rights.res.court.name": "Kammarrättens dom 6027-23",
    "rights.res.court.desc": "Avgörandet om GDPR och utgivningsbevis",
    "rights.res.eurlex.name": "GDPR (fulltext)",
    "rights.res.eurlex.desc": "Dataskyddsförordningen på svenska",
    "rights.cta.title": "Redo att skicka borttagningsbegäran?",
    "rights.cta.text":
      "Guiden innehåller färdiga mallar och direktlänkar till alla tjänster.",
    "rights.cta.btn": "Till guiden →",
  },
  en: {
    // Navigation
    "nav.brand": "Privacy Guide",
    "nav.step1": "01",
    "nav.step1_tooltip": "Prepare",
    "nav.step2": "02",
    "nav.step2_tooltip": "BankID Services",
    "nav.step3": "03",
    "nav.step3_tooltip": "Email Services",
    "nav.step4": "04",
    "nav.step4_tooltip": "Confirm",
    "nav.tracker": "Track",
    "nav.tracker_tooltip": "Tracking",
    "nav.rights": "Rights",
    "nav.rights_tooltip": "Your Rights",
    "nav.guide": "Guide",
    "nav.guide_tooltip": "Step-by-step guide",
    "nav.legal_tooltip": "Legal Background",

    // Settings
    "settings.language": "Language",
    "settings.theme": "Theme",
    "settings.light": "Light",
    "settings.dark": "Dark",

    // Hero
    "hero.meta": "Updated December 2025",
    "hero.title": "Remove your personal data from Swedish search services",
    "hero.lead":
      "A step-by-step guide to delete your information from Ratsit, Hitta, Eniro and other public registers.",

    // Intro
    "intro.text":
      "This guide contains direct links to removal pages and legal templates with reference to current case law. Most guides online are incomplete or outdated.",
    "intro.print": "🖨️ Print the guide",

    // Step 1
    "step1.title": "Prerequisites",
    "step1.subtitle":
      "Without these steps, your information will return within 30 days",
    "step1.phone.title": "Unlisted Phone Number",
    "step1.phone.desc":
      "Search services buy data from telecom operators. Turn off this source first.",
    "step1.phone.step1": "Contact your operator",
    "step1.phone.step2":
      "Request an unlisted number and revoke consent for directory services",
    "step1.phone.step3": "Wait 1–2 weeks for update",
    "step1.phone.quote":
      '"I want an unlisted phone number and withdraw my consent for directory services and marketing."',
    "step1.phone.operators": "Contact your operator",
    "step1.spar.title": "SPAR Registry",
    "step1.spar.desc": "Stop the state from selling your address to marketers.",
    "step1.spar.action": "Log in with BankID → Enable ad block",
    "step1.nix.title": "NIX Phone Registry",
    "step1.nix.desc": "Block unwanted sales calls.",
    "step1.nix.action": "Enter your phone number",
    "step1.nixaddr.title": "NIX Direct Mail",
    "step1.nixaddr.desc": "Stop addressed direct mail.",
    "step1.nixaddr.action": "Register via BankID",
    "step1.phone.orcall": "or call",

    // Step 2
    "step2.title": "Remove from Search Services",
    "step2.subtitle": "Use these direct links for removal via BankID",
    "tag.permanent": "Permanent removal",
    "tag.immediate": "Immediate",
    "tag.fast": "Fast",
    "tag.followup": "Requires follow-up",
    "tag.emailfirst": "Requires email first",
    "service.ratsit.desc":
      'The standard "Hide" function lasts only 12 months. This link provides complete removal.',
    "service.ratsit.action": "Log in with BankID → Confirm",
    "service.hitta.desc":
      'Search for your number or name, click "Remove" and sign.',
    "service.hitta.action": "Sign with BankID",
    "service.eniro.desc":
      'Search for your profile, select "Update" then "Remove profile completely".',
    "service.eniro.action": "Log in with BankID",
    "service.merinfo.desc": 'Select "I want to remove myself" and log in.',
    "service.merinfo.action": "Log in with BankID",
    "service.mrkoll.desc":
      "Often republishes after 30 days. Check regularly or email",
    "service.mrkoll.action": 'Select "Hide" for address and phone',
    "service.birthday.desc":
      'Request link to management portal via email, then log in with BankID and select "Completely hidden".',
    "service.birthday.link": "Request link via info@birthday.se",
    "service.birthday.action": "Processing time: up to 60 minutes",

    // Step 3
    "step3.title": "Services Requiring Email",
    "step3.subtitle": "These lack BankID verification or claim exemptions",
    "email.krimfup.note":
      "Difficult to get removal from. Start with template 2.",
    "email.lexbase.note":
      "Claims publication certificate. Start with template 2.",
    "template1.title": "Template 1: Standard Request",
    "template2.title": "Template 2: Request with Legal Reference",
    "template2.note":
      "For services claiming publication certificates or not responding. References Court of Appeal case 6027-23.",
    copy: "Copy",

    // Step 4
    "step4.title": "Remove from Search Results",
    "step4.subtitle": "Google may show cached results for weeks after removal",
    "step4.action1": "Go to",
    "step4.action1.link": "Google's outdated content removal tool",
    "step4.action2": "Enter the URL of your previous profile page",
    "step4.action3": 'Click "Request Removal" – removed within 24–48 hours',

    // Maintenance
    "maintenance.title": "Regular Maintenance",
    "maintenance.30days": "30 days",
    "maintenance.30days.text": "Check MrKoll – they frequently republish",
    "maintenance.12months": "12 months",
    "maintenance.12months.text":
      'Renew Ratsit block if you used "Hide" instead of "Remove"',
    "maintenance.change": "On change",
    "maintenance.change.text":
      "Verify unlisted number after operator or subscription change",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.lexbase.q": "Does this work for Lexbase and Krimfup?",
    "faq.lexbase.a":
      "It's difficult. Use template 2 and reference the Court of Appeal ruling. Alternatively, focus on removing Google search results to make the information harder to find.",
    "faq.birthday.q": "How does Birthday.se's new self-service work?",
    "faq.birthday.a":
      'Birthday.se has introduced a BankID portal for visibility management. Email info@birthday.se for a personal link to appen.minauppgifter.se. There you can choose between "Fully visible", "Partially visible" (name only) or "Completely hidden" (recommended). Changes take effect within 60 minutes.',
    "faq.service.q": "Can I hire a paid service?",
    "faq.service.a":
      "Services like DoldAdress exist, but they perform the same steps described here. The process takes about 20 minutes.",

    // Tracker
    "tracker.title": "Track Your Status",
    "tracker.intro":
      "Keep track of which services still show your information. All data is stored only locally in your browser.",
    "tracker.progress": "Progress",
    "tracker.progress.done": "completed",
    "tracker.name.label": "Your name (for search links)",
    "tracker.name.placeholder": "First Last",
    "tracker.export": "Export Data",
    "tracker.import": "Import Data",
    "tracker.clear": "Clear All Data",
    "tracker.privacy": "Privacy:",
    "tracker.privacy.text":
      'No data is sent to any server. Everything is stored only in your browser (localStorage). If you switch browsers or clear browser data, the information is lost — use "Export" for backup.',
    "tracker.reminder": "Remind me to check again in",
    "tracker.reminder.days": "days",
    "tracker.btn.search": "Search",
    "tracker.btn.mail": "Email",
    "tracker.btn.mail.first": "First request",
    "tracker.btn.mail.followup": "Follow-up",
    "tracker.btn.remove": "Remove",
    "tracker.btn.done": "Done",
    "tracker.btn.visible": "Still there",
    "tracker.status.unknown": "Unknown",
    "tracker.status.removed": "Removed",
    "tracker.status.visible": "Visible",
    "tracker.last": "Last:",
    "tracker.never": "Never checked",
    "tracker.tooltip.login": "Requires login",
    "tracker.tooltip.name": "Enter name first",
    "tracker.tooltip.markvisible": "Mark Still there first",

    // Confirm dialog
    "confirm.title": "Clear all data?",
    "confirm.text": "All tracking data will be deleted. This cannot be undone.",
    "confirm.cancel": "Cancel",
    "confirm.delete": "Clear",

    // Toast messages
    "toast.copied": "Template copied to clipboard",
    "toast.status": "Status updated",
    "toast.cleared": "Data cleared",

    // Alerts
    "alert.name": "Enter your name first to search.",
    "alert.import": "Could not read file. Make sure it is a valid JSON file.",
    "alert.copy": "Could not copy. Select the text manually.",

    // Footer
    "footer.updated": "Last updated: December 2025",
    "footer.disclaimer":
      "This guide is for informational purposes. For legal advice, consult a qualified lawyer.",

    // Skip link
    skip: "Skip to main content",

    // Back to top
    backtotop: "Back to top",

    // Notifications
    "notif.title": "Privacy Guide",
    "notif.body": "Time to check your data with the search services!",
    "notif.blocked": "⚠️ Notifications blocked in browser.",
    "notif.denied": "Notifications denied. Enable in browser settings.",
    "notif.granted": "✓ Notifications allowed",
    "notif.scheduled": "✓ Reminder:",
    "notif.nextvisit": "(on next visit)",
    "notif.activated": "Reminder in {days} days activated.",

    // Stale alert
    "stale.alert": "⚠️ {count} service has not been checked for over 30 days.",
    "stale.alert.plural":
      "⚠️ {count} services have not been checked for over 30 days.",

    // Rattigheter page
    "rights.hero.meta": "Legal Background",
    "rights.hero.title": "Your Rights",
    "rights.hero.lead":
      "Understand why Swedish search services can publish your information — and why you have the right to have it removed.",
    "rights.intro":
      "This page provides an overview of relevant legislation. It does not constitute legal advice. For specific questions, contact a qualified lawyer or the Swedish Authority for Privacy Protection (IMY).",
    "rights.s1.title": "Freedom of Information",
    "rights.s1.subtitle": "Why information is public to begin with",
    "rights.s1.p1":
      "Sweden has a constitutionally protected principle of public access to official documents, known as the principle of public access. It is found in the Freedom of the Press Act and gives the public the right to access documents held by authorities.",
    "rights.s1.p2":
      "This means that information from, for example, the Tax Agency, the population register and the company register is available to the public. Search services like Ratsit and Hitta retrieve data from these public sources.",
    "rights.s1.box.title": "What is public?",
    "rights.s1.box.li1": "Name and registered address",
    "rights.s1.box.li2": "Date of birth and marital status",
    "rights.s1.box.li3": "Property holdings and assessed values",
    "rights.s1.box.li4": "Company affiliations",
    "rights.s1.box.li5": "In some cases: income information",
    "rights.s2.title": "Publication Certificates",
    "rights.s2.subtitle": 'The "loophole" that search services use',
    "rights.s2.p1":
      "Many search services have registered as news media by applying for a voluntary publication certificate. This gives them protection under the Freedom of Expression Act (YGL), which has historically been considered to take precedence over GDPR.",
    "rights.s2.p2":
      'By claiming to conduct "journalistic activities", these companies have been able to avoid GDPR requirements for consent and the right to erasure.',
    "rights.s2.box.title": "The Problem",
    "rights.s2.box.text":
      "Most search services have a commercial purpose — they sell background checks and make money from advertising. Their activities have little to do with traditional journalism.",
    "rights.s3.title": "Court of Appeal Case 6027-23",
    "rights.s3.subtitle": "The landmark ruling from March 2024",
    "rights.s3.p1":
      "In March 2024, the Court of Appeal issued a ruling that changes the legal landscape. The court established that publication certificates do not automatically exempt from GDPR.",
    "rights.s3.p2":
      "The court emphasized that EU law requires a proportionality assessment between freedom of expression and privacy protection. When a service's primary purpose is not journalistic, GDPR may apply fully.",
    "rights.s3.box.title": "What this means for you",
    "rights.s3.box.li1":
      "Search services with commercial purposes must respect your right to erasure",
    "rights.s3.box.li2":
      "They can no longer hide behind publication certificates",
    "rights.s3.box.li3":
      "IMY has announced stricter supervision of these services",
    "rights.s3.link": "Read the court announcement →",
    "rights.s4.title": "Your GDPR Rights",
    "rights.s4.subtitle": "Articles 17 and 21 give you tools",
    "rights.s4.erasure.title": "Right to Erasure",
    "rights.s4.erasure.text":
      "You have the right to request that personal data be deleted when there is no longer a legal basis for processing.",
    "rights.s4.object.title": "Right to Object",
    "rights.s4.object.text":
      'You can object to processing based on "legitimate interest", for example direct marketing.',
    "rights.s4.deadline.title": "Response Deadline",
    "rights.s4.deadline.text":
      "Companies must respond to your request within 30 days. In complex cases, the deadline may be extended by an additional 60 days.",
    "rights.s4.complain.title": "Right to Complain",
    "rights.s4.complain.text":
      "If a company does not comply, you can file a complaint with IMY.",
    "rights.s5.title": "Common Objections",
    "rights.s5.subtitle": "How to counter company arguments",
    "rights.s5.obj1.q": '"We have a publication certificate"',
    "rights.s5.obj1.a":
      "Court of Appeal case 6027-23 establishes that publication certificates do not automatically exempt from GDPR. A proportionality assessment must be made.",
    "rights.s5.obj2.q": '"The data is public"',
    "rights.s5.obj2.a":
      "That data is publicly available does not mean it can be compiled and published commercially without the possibility of deletion.",
    "rights.s5.obj3.q": '"We conduct journalism"',
    "rights.s5.obj3.a":
      "Background checks and person searches are not journalistic activities in the traditional sense. The actual purpose of the business is decisive.",
    "rights.s5.obj4.q": '"We can only hide, not delete"',
    "rights.s5.obj4.a":
      'Specifically request deletion under Article 17. "Hiding" may be temporary and the data may reappear.',
    "rights.s6.title": "Resources",
    "rights.s6.subtitle": "Official sources and contact information",
    "rights.res.imy.name": "Swedish Authority for Privacy Protection (IMY)",
    "rights.res.imy.desc": "Data protection supervisory authority in Sweden",
    "rights.res.gdpr.name": "Your rights under GDPR",
    "rights.res.gdpr.desc": "IMY's guide for individuals",
    "rights.res.court.name": "Court of Appeal Case 6027-23",
    "rights.res.court.desc": "The ruling on GDPR and publication certificates",
    "rights.res.eurlex.name": "GDPR (full text)",
    "rights.res.eurlex.desc": "The General Data Protection Regulation",
    "rights.cta.title": "Ready to send a deletion request?",
    "rights.cta.text":
      "The guide contains ready-made templates and direct links to all services.",
    "rights.cta.btn": "To the guide →",
  },
};

let currentLang = localStorage.getItem("language") || "sv";

function t(key) {
  return translations[currentLang][key] || translations["sv"][key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-tooltip]").forEach((el) => {
    const key = el.dataset.i18nTooltip;
    if (translations[lang][key]) {
      el.setAttribute("data-tooltip", translations[lang][key]);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  if (typeof renderTrackerGrid === "function") {
    renderTrackerGrid();
  }

  document.querySelectorAll("[data-href-en][data-href-sv]").forEach((el) => {
    el.href = lang === "en" ? el.dataset.hrefEn : el.dataset.hrefSv;
  });
}

// Settings dropdown
function initSettingsDropdown() {
  const settingsBtn = document.getElementById("settings-btn");
  const settingsMenu = document.getElementById("settings-menu");
  const langToggle = document.getElementById("lang-toggle");
  const themeToggle = document.getElementById("theme-toggle");
  const langToggleMobile = document.getElementById("lang-toggle-mobile");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  if (settingsBtn && settingsMenu) {
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = settingsBtn.getAttribute("aria-expanded") === "true";
      settingsBtn.setAttribute("aria-expanded", !isExpanded);
      settingsMenu.classList.toggle("active", !isExpanded);
    });

    document.addEventListener("click", (e) => {
      if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsBtn.setAttribute("aria-expanded", "false");
        settingsMenu.classList.remove("active");
      }
    });
  }

  const syncLangToggles = (lang) => {
    [langToggle, langToggleMobile].forEach((toggle) => {
      if (toggle) {
        toggle.querySelectorAll("button").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.lang === lang);
        });
      }
    });
  };

  const syncThemeToggles = (theme) => {
    [themeToggle, themeToggleMobile].forEach((toggle) => {
      if (toggle) {
        toggle.querySelectorAll("button").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.theme === theme);
        });
      }
    });
  };

  const handleLangToggle = (e) => {
    if (e.target.tagName === "BUTTON") {
      const lang = e.target.dataset.lang;
      setLanguage(lang);
      syncLangToggles(lang);
    }
  };

  const handleThemeToggle = (e) => {
    if (e.target.tagName === "BUTTON") {
      const theme = e.target.dataset.theme;
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      syncThemeToggles(theme);
    }
  };

  [langToggle, langToggleMobile].forEach((toggle) => {
    if (toggle) {
      toggle.addEventListener("click", handleLangToggle);
    }
  });
  syncLangToggles(currentLang);

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  [themeToggle, themeToggleMobile].forEach((toggle) => {
    if (toggle) {
      toggle.addEventListener("click", handleThemeToggle);
    }
  });
  syncThemeToggles(currentTheme);
}

// Email templates
const templates = {
  1: `Ämne: Begäran om radering enligt GDPR artikel 17

Hej,

Jag vill härmed utöva min rätt till radering med stöd av artikel 17 i dataskyddsförordningen.

Jag begär att ni raderar mitt namn, adress och födelsedatum från era register.

Information om era skyldigheter som personuppgiftsansvarig finns på Integritetsskyddsmyndighetens webbplats (www.imy.se).

Jag förväntar mig svar inom 30 dagar i enlighet med GDPR.

När raderingen bekräftats ber jag er även radera denna korrespondens, då det inte längre finns rättslig grund att spara den.

Med vänliga hälsningar,
[Ditt namn]
[Ditt personnummer]`,

  2: `Ämne: Begäran om radering enligt GDPR artikel 17 – Hänvisning till mål 6027-23

Hej,

Jag begär härmed radering av mina personuppgifter med stöd av artikel 17 i GDPR.

Jag begär att samtliga uppgifter kopplade till mig raderas från er databas och webbplats. Detta innebär att ingen ska kunna få tillgång till information om mig via era tjänster.

I mål 6027-23 (Kammarrätten) fastslogs att databaser med kommersiellt syfte är skyldiga att följa GDPR, då de inte anses ha ett journalistiskt ändamål. Se: https://www.domstol.se/nyheter/2024/03/gdpr-kan-bli-tillamplig-trots-frivilligt-utgivningsbevis/

Enligt artikel 12(3) i GDPR ska ni svara inom 30 dagar. Om jag inte får svar kommer jag att överväga att lämna klagomål till Integritetsskyddsmyndigheten (IMY).

När raderingen bekräftats ber jag er även radera denna korrespondens, då det inte längre finns rättslig grund att spara den.

Med vänliga hälsningar,
[Ditt namn]
[Ditt personnummer]`,

  3: `Ämne: Uppföljning – Begäran om radering enligt GDPR artikel 17

Hej,

Jag skickade tidigare en begäran om radering av mina personuppgifter enligt artikel 17 i GDPR.

Jag har kontrollerat er tjänst och ser att mina uppgifter fortfarande är synliga. Jag begär omedelbar radering av samtliga uppgifter kopplade till mig från er databas och webbplats.

I mål 6027-23 (Kammarrätten) fastslogs att databaser med kommersiellt syfte är skyldiga att följa GDPR, då de inte anses ha ett journalistiskt ändamål. Se: https://www.domstol.se/nyheter/2024/03/gdpr-kan-bli-tillamplig-trots-frivilligt-utgivningsbevis/

Enligt artikel 12(3) i GDPR ska ni svara inom 30 dagar. Om jag inte får bekräftelse på att raderingen genomförts kommer jag att lämna klagomål till Integritetsskyddsmyndigheten (IMY).

När raderingen bekräftats ber jag er även radera denna korrespondens, då det inte längre finns rättslig grund att spara den.

Med vänliga hälsningar,
[Ditt namn]
[Ditt personnummer]`,

  4: `Ämne: Begäran om länk till hantera synlighet

Hej,

Jag vill hantera min synlighet på Birthday.se.

Med vänliga hälsningar,
[Ditt Namn]`,
};

const toast = document.getElementById("toast");

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const templateNum = btn.dataset.template;
    const text = templates[templateNum];

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(showToast).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        showToast();
      } catch (e) {
        alert("Kunde inte kopiera. Markera texten manuellt.");
      }
      document.body.removeChild(textarea);
    }
  });
});

function showToast(message) {
  if (toast) {
    toast.textContent = message || "Mall kopierad till urklipp";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // If linking to tracker, expand it
      if (href === "#tracker") {
        const toggle = document.querySelector(".tracker-toggle");
        const content = document.getElementById("tracker-content");
        if (toggle && content && content.hidden) {
          toggle.setAttribute("aria-expanded", "true");
          content.hidden = false;
        }
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Close mobile nav if open
      const navLinks = document.querySelector(".nav-links");
      const navToggle = document.querySelector(".nav-toggle");
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
      }
    }
  });
});

// Back to top
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  window.addEventListener(
    "scroll",
    () => {
      backToTop.hidden = window.scrollY < 400;
    },
    { passive: true }
  );

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

if (currentLang !== "sv") {
  setLanguage(currentLang);
}

initSettingsDropdown();

// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  const toggleMenu = (force) => {
    const isActive = navToggle.classList.toggle("active", force);
    navLinks.classList.toggle("active", force);
    navToggle.setAttribute("aria-expanded", isActive);
  };

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

// Nav scroll indicator
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = [];

navAnchors.forEach((anchor) => {
  const href = anchor.getAttribute("href");
  if (href !== "#") {
    const section = document.querySelector(href);
    if (section) sections.push({ anchor, section });
  }
});

if (sections.length > 0) {
  window.addEventListener(
    "scroll",
    () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach(({ anchor, section }) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          anchor.classList.add("active");
        } else {
          anchor.classList.remove("active");
        }
      });
    },
    { passive: true }
  );
}

// Mailto links
document.querySelectorAll(".email-link[data-template]").forEach((link) => {
  const templateNum = link.dataset.template;
  const templateText = templates[templateNum];

  if (templateText) {
    const lines = templateText.split("\n");
    const subjectLine = lines[0];
    const subject = subjectLine.replace("Ämne: ", "");
    const body = lines.slice(2).join("\n"); // Skip subject and blank line

    const email = link.href.replace("mailto:", "");
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    link.href = mailtoUrl;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Open mailto directly in new tab/window
      const mailWindow = window.open(mailtoUrl, "_blank");
      // If popup blocked, try normal navigation
      if (!mailWindow) {
        window.location.href = mailtoUrl;
      }
    });
  }
});

// Privacy tracker
const trackerServices = [
  {
    id: "ratsit",
    name: "Ratsit",
    searchUrl:
      "https://www.ratsit.se/sok/person?vem={name}&m=0&k=0&r=0&er=0&b=0&eb=0&amin=16&amax=120&fon=1&page=1",
    removalUrl: "https://www.ratsit.se/tabort",
    method: "BankID",
  },
  {
    id: "hitta",
    name: "Hitta.se",
    searchUrl:
      "https://www.hitta.se/s%C3%B6k?vad={name}&typ=prv&sida=1&changedTab=1",
    removalUrl: "https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida",
    method: "BankID",
  },
  {
    id: "eniro",
    name: "Eniro",
    searchUrl: "https://www.eniro.se/{name}/personer",
    removalUrl: "https://uppdatera.eniro.se/person",
    method: "BankID",
  },
  {
    id: "merinfo",
    name: "Merinfo",
    searchUrl: "https://www.merinfo.se/search?q={name}",
    removalUrl: "https://www.merinfo.se/ta-bort-mina-uppgifter",
    method: "BankID",
  },
  {
    id: "mrkoll",
    name: "MrKoll",
    searchUrl:
      "https://mrkoll.se/resultat?n={name}&c=&min=16&max=120&sex=a&c_stat=all&company=",
    removalUrl: "mailto:hej@nusvar.se",
    method: "E-post",
    warning: "Återpublicerar ofta",
  },
  {
    id: "birthday",
    name: "Birthday.se",
    searchUrl: "https://www.birthday.se/sok?whowhere={name}&similar=true",
    removalUrl: "mailto:info@birthday.se",
    method: "BankID",
    warning: "Begär länk via e-post",
  },
  {
    id: "upplysning",
    name: "Upplysning.se",
    searchUrl: "https://www.upplysning.se/person/?x=0996&who={name}&m=1",
    removalUrl: "mailto:info@upplysning.se",
    method: "E-post",
  },
  {
    id: "krimfup",
    name: "Krimfup.se",
    searchUrl: "https://www.krimfup.se/search?name={name}&ssn=&place=",
    removalUrl: "mailto:info@krimfup.se",
    method: "E-post",
    warning: "Svår att få borttagning",
  },
  {
    id: "lexbase",
    name: "Lexbase.se",
    searchUrl: null,
    removalUrl: "mailto:info@lexbase.se",
    method: "E-post",
    warning: "Kräver inloggning för sökning",
  },
];

function getTrackerData() {
  try {
    const data = localStorage.getItem(TRACKER_STORAGE_KEY);
    return data ? JSON.parse(data) : { name: "", services: {} };
  } catch (e) {
    console.error("Failed to parse tracker data:", e);
    return { name: "", services: {} };
  }
}

function saveTrackerData(data) {
  try {
    localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save tracker data:", e);
  }
}

function formatDate(dateString) {
  if (!dateString) return t("tracker.never");
  const date = new Date(dateString);
  return date.toLocaleDateString(currentLang === "sv" ? "sv-SE" : "en-US");
}

function getDaysSince(dateString) {
  if (!dateString) return Infinity;
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now - date;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function getStatusInfo(service, serviceData) {
  if (!serviceData || !serviceData.status) {
    return {
      class: "tracker-status-unknown",
      text: t("tracker.status.unknown"),
    };
  }

  const daysSince = getDaysSince(serviceData.lastCheck);

  if (daysSince >= STALE_DAYS) {
    return {
      class: "tracker-status-stale",
      text: `${daysSince}d ${currentLang === "sv" ? "sedan" : "ago"}`,
    };
  }

  if (serviceData.status === "removed") {
    return {
      class: "tracker-status-removed",
      text: t("tracker.status.removed"),
    };
  }

  if (serviceData.status === "visible") {
    return {
      class: "tracker-status-visible",
      text: t("tracker.status.visible"),
    };
  }

  return { class: "tracker-status-unknown", text: t("tracker.status.unknown") };
}

function buildSearchUrl(service, name) {
  if (!name) return "#";
  const encodedName = encodeURIComponent(name.trim());
  return service.searchUrl.replace("{name}", encodedName);
}

function renderTrackerGrid() {
  const grid = document.getElementById("tracker-grid");
  if (!grid) return;

  let services;
  try {
    services = trackerServices;
  } catch (e) {
    return; // trackerServices not yet initialized, skip rendering
  }

  const data = getTrackerData();

  // Progress bar
  const totalServices = trackerServices.length;
  const completedServices = trackerServices.filter((service) => {
    const serviceData = data.services[service.id];
    return serviceData && serviceData.status === "removed";
  }).length;
  const progressPercent = Math.round((completedServices / totalServices) * 100);

  let progressEl = document.getElementById("tracker-progress");
  if (!progressEl) {
    progressEl = document.createElement("div");
    progressEl.id = "tracker-progress";
    progressEl.className = "tracker-progress";
    const introEl = document.querySelector(".tracker-intro");
    if (introEl) {
      introEl.after(progressEl);
    }
  }
  progressEl.innerHTML = `
    <div class="tracker-progress-text">
      <span>${t("tracker.progress")}: <strong>${completedServices}/${totalServices}</strong> ${t("tracker.progress.done")}</span>
      <span class="tracker-progress-percent">${progressPercent}%</span>
    </div>
    <div class="tracker-progress-bar">
      <div class="tracker-progress-fill" style="width: ${progressPercent}%"></div>
    </div>
  `;

  const staleCount = trackerServices.filter((service) => {
    const serviceData = data.services[service.id];
    return (
      serviceData &&
      serviceData.lastCheck &&
      getDaysSince(serviceData.lastCheck) >= STALE_DAYS
    );
  }).length;

  let staleAlertEl = document.getElementById("stale-alert");
  if (staleCount > 0) {
    if (!staleAlertEl) {
      staleAlertEl = document.createElement("div");
      staleAlertEl.id = "stale-alert";
      staleAlertEl.className = "stale-alert";
      grid.parentNode.insertBefore(staleAlertEl, grid);
    }
    staleAlertEl.textContent =
      staleCount > 1
        ? t("stale.alert.plural").replace("{count}", staleCount)
        : t("stale.alert").replace("{count}", staleCount);
  } else if (staleAlertEl) {
    staleAlertEl.remove();
  }

  grid.innerHTML = trackerServices
    .map((service) => {
      const serviceData = data.services[service.id] || {};
      const statusInfo = getStatusInfo(service, serviceData);
      const hasName = data.name && data.name.trim();
      const isEmail = service.removalUrl.startsWith("mailto:");
      const warningHtml = service.warning
        ? `<div class="tracker-card-warning">${service.warning}</div>`
        : "";
      const canSearch = service.searchUrl !== null;
      const isVisible = serviceData.status === "visible";

      return `
            <div class="tracker-card ${
              serviceData.status === "removed" ? "tracker-card-done" : ""
            }" data-service="${service.id}">
                <div class="tracker-card-header">
                    <span class="tracker-card-name">${service.name}</span>
                    <span class="tracker-status ${statusInfo.class}">${
        statusInfo.text
      }</span>
                </div>
                <div class="tracker-card-meta">
                    <span class="tracker-method tracker-method-${
                      isEmail ? "email" : "bankid"
                    }">${service.method}</span>
                    <span class="tracker-card-date">${t(
                      "tracker.last"
                    )} ${formatDate(serviceData.lastCheck)}</span>
                </div>
                ${warningHtml}
                <div class="tracker-card-actions">
                    <button class="tracker-card-btn tracker-card-btn-check" 
                            onclick="checkService('${service.id}')" 
                            ${!hasName || !canSearch ? "disabled" : ""}
                            ${
                              !canSearch
                                ? `data-tooltip="${t("tracker.tooltip.login")}"`
                                : !hasName
                                ? `data-tooltip="${t("tracker.tooltip.name")}"`
                                : ""
                            }>
                        ${t("tracker.btn.search")}
                    </button>
                    ${
                      isEmail
                        ? `<div class="tracker-email-dropdown">
                                   <button class="tracker-card-btn tracker-card-btn-remove tracker-email-toggle" 
                                           onclick="toggleEmailDropdown('${service.id}')">${t("tracker.btn.mail")} ▾</button>
                                   <div class="tracker-email-menu" id="email-menu-${service.id}">
                                       <button onclick="openTrackerEmail('${service.id}', 2)">${t("tracker.btn.mail.first")}</button>
                                       <button onclick="openTrackerEmail('${service.id}', 3)">${t("tracker.btn.mail.followup")}</button>
                                   </div>
                               </div>`
                        : `<button class="tracker-card-btn tracker-card-btn-remove" 
                                   onclick="window.open('${
                                     service.removalUrl
                                   }', '_blank')">${t("tracker.btn.remove")}</button>`
                    }
                    <button class="tracker-card-btn tracker-card-btn-removed" 
                            onclick="markService('${service.id}', 'removed')">
                        ${t("tracker.btn.done")}
                    </button>
                    <button class="tracker-card-btn tracker-card-btn-visible" 
                            onclick="markService('${service.id}', 'visible')">
                        ${t("tracker.btn.visible")}
                    </button>
                </div>
            </div>
        `;
    })
    .join("");
}

function checkService(serviceId) {
  const data = getTrackerData();
  const service = trackerServices.find((s) => s.id === serviceId);

  if (!service || !service.searchUrl) return;

  if (!data.name || !data.name.trim()) {
    alert(t("alert.name"));
    return;
  }

  const url = buildSearchUrl(service, data.name);
  window.open(url, "_blank");
}

function markService(serviceId, status) {
  const data = getTrackerData();

  if (!data.services[serviceId]) {
    data.services[serviceId] = {};
  }

  data.services[serviceId].status = status;
  data.services[serviceId].lastCheck = new Date().toISOString();

  saveTrackerData(data);
  renderTrackerGrid();
  showToast(t("toast.status"));
}

function toggleEmailDropdown(serviceId) {
  const menu = document.getElementById(`email-menu-${serviceId}`);
  if (!menu) return;
  
  // Close all other dropdowns first
  document.querySelectorAll('.tracker-email-menu.active').forEach(m => {
    if (m.id !== `email-menu-${serviceId}`) {
      m.classList.remove('active');
    }
  });
  
  menu.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.tracker-email-dropdown')) {
    document.querySelectorAll('.tracker-email-menu.active').forEach(m => {
      m.classList.remove('active');
    });
  }
});

function openTrackerEmail(serviceId, templateNum) {
  const service = trackerServices.find((s) => s.id === serviceId);
  if (!service || !service.removalUrl.startsWith("mailto:")) return;

  // Close the dropdown
  const menu = document.getElementById(`email-menu-${serviceId}`);
  if (menu) menu.classList.remove('active');

  const email = service.removalUrl.replace("mailto:", "");
  const templateText = templates[templateNum];

  const lines = templateText.split("\n");
  const subjectLine = lines[0];
  const subject = subjectLine.replace("Ämne: ", "");
  const body = lines.slice(2).join("\n"); // Skip subject and blank line

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const mailWindow = window.open(mailtoUrl, "_blank");
  if (!mailWindow) {
    window.location.href = mailtoUrl;
  }
}

function exportTrackerData() {
  const data = getTrackerData();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sekretessguiden-tracker-${
    new Date().toISOString().split("T")[0]
  }.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importTrackerData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && typeof data === "object") {
        saveTrackerData(data);

        // Update the name input
        const nameInput = document.getElementById("tracker-name");
        if (nameInput && data.name) {
          nameInput.value = data.name;
        }

        renderTrackerGrid();
        showToast();
      }
    } catch (err) {
      alert(t("alert.import"));
    }
  };
  reader.readAsText(file);
}

function clearTrackerData() {
  const overlay = document.getElementById("confirm-overlay");
  const cancelBtn = document.getElementById("confirm-cancel");
  const deleteBtn = document.getElementById("confirm-delete");

  if (!overlay) return;

  overlay.hidden = false;

  const closeDialog = () => {
    overlay.hidden = true;
    cancelBtn.removeEventListener("click", handleCancel);
    deleteBtn.removeEventListener("click", handleDelete);
    overlay.removeEventListener("click", handleOverlayClick);
  };

  const handleCancel = () => closeDialog();

  const handleDelete = () => {
    localStorage.removeItem(TRACKER_STORAGE_KEY);
    const nameInput = document.getElementById("tracker-name");
    if (nameInput) nameInput.value = "";
    renderTrackerGrid();
    showToast(t("toast.cleared"));
    closeDialog();
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlay) closeDialog();
  };

  cancelBtn.addEventListener("click", handleCancel);
  deleteBtn.addEventListener("click", handleDelete);
  overlay.addEventListener("click", handleOverlayClick);
}

// Tracker init
function initTracker() {
  const toggle = document.querySelector(".tracker-toggle");
  const content = document.getElementById("tracker-content");
  const nameInput = document.getElementById("tracker-name");
  const exportBtn = document.getElementById("tracker-export");
  const importBtn = document.getElementById("tracker-import-btn");
  const importInput = document.getElementById("tracker-import");
  const clearBtn = document.getElementById("tracker-clear");

  if (!toggle || !content) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isExpanded);
    content.hidden = isExpanded;
  });

  const data = getTrackerData();
  if (nameInput && data.name) {
    nameInput.value = data.name;
  }

  if (nameInput) {
    nameInput.addEventListener("input", () => {
      const data = getTrackerData();
      data.name = nameInput.value;
      saveTrackerData(data);
      renderTrackerGrid();
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener("click", exportTrackerData);
  }

  if (importBtn && importInput) {
    importBtn.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        importTrackerData(e.target.files[0]);
        e.target.value = ""; // Reset for next import
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", clearTrackerData);
  }

  const reminderEnabled = document.getElementById("reminder-enabled");
  const reminderDays = document.getElementById("reminder-days");
  const reminderNote = document.getElementById("reminder-note");

  if (reminderEnabled && reminderDays && reminderNote) {
    const savedReminder = localStorage.getItem("reminderEnabled") === "true";
    const savedDays = localStorage.getItem("reminderDays") || "30";
    const reminderDate = localStorage.getItem("reminderDate");

    reminderEnabled.checked = savedReminder;
    reminderDays.value = savedDays;

    const notifSupported = "Notification" in window;
    const notifPermission = notifSupported ? Notification.permission : "denied";

    if (notifPermission === "denied") {
      reminderEnabled.disabled = true;
      reminderDays.disabled = true;
    }

    const updateReminderNote = () => {
      const currentReminderDate = localStorage.getItem("reminderDate");

      if (notifPermission === "denied") {
        reminderNote.textContent = t("notif.blocked");
        reminderNote.style.color = "var(--text-muted)";
      } else if (reminderEnabled.checked && currentReminderDate) {
        const date = new Date(currentReminderDate);
        reminderNote.textContent = `${t(
          "notif.scheduled"
        )} ${date.toLocaleDateString(
          currentLang === "sv" ? "sv-SE" : "en-US"
        )} ${t("notif.nextvisit")}`;
        reminderNote.style.color = "";
      } else if (reminderEnabled.checked) {
        const days = parseInt(reminderDays.value) || 30;
        reminderNote.textContent = t("notif.activated").replace("{days}", days);
        reminderNote.style.color = "";
      } else if (notifPermission === "granted") {
        reminderNote.textContent = t("notif.granted");
        reminderNote.style.color = "var(--text-muted)";
      } else {
        reminderNote.textContent = "";
      }
    };
    updateReminderNote();

    reminderEnabled.addEventListener("change", async () => {
      if (reminderEnabled.checked) {
        if ("Notification" in window && Notification.permission === "default") {
          const permission = await Notification.requestPermission();
          if (permission !== "granted") {
            reminderEnabled.checked = false;
            reminderNote.textContent = t("notif.denied");
            return;
          }
        }

        const days = parseInt(reminderDays.value) || 30;
        const date = new Date();
        date.setDate(date.getDate() + days);
        localStorage.setItem("reminderDate", date.toISOString());
        localStorage.setItem("reminderEnabled", "true");
        localStorage.setItem("reminderDays", days.toString());
      } else {
        localStorage.removeItem("reminderDate");
        localStorage.setItem("reminderEnabled", "false");
      }
      updateReminderNote();
    });

    reminderDays.addEventListener("change", () => {
      if (reminderEnabled.checked) {
        const days = parseInt(reminderDays.value) || 30;
        const date = new Date();
        date.setDate(date.getDate() + days);
        localStorage.setItem("reminderDate", date.toISOString());
        localStorage.setItem("reminderDays", days.toString());
        updateReminderNote();
      }
    });

    if (savedReminder && reminderDate) {
      const dueDate = new Date(reminderDate);
      if (
        new Date() >= dueDate &&
        "Notification" in window &&
        Notification.permission === "granted"
      ) {
        new Notification(t("notif.title"), {
          body: t("notif.body"),
          icon: "favicon.svg",
        });

        const days = parseInt(savedDays) || 30;
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + days);
        localStorage.setItem("reminderDate", newDate.toISOString());
      }
    }
  }

  renderTrackerGrid();
}

window.checkService = checkService;
window.markService = markService;
window.openTrackerEmail = openTrackerEmail;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTracker);
} else {
  initTracker();
}
