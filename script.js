
// Template copy functionality
const templates = {
    1: `Ämne: Begäran om radering enligt GDPR artikel 17

Hej,

Jag vill härmed utöva min rätt till radering med stöd av artikel 17 i dataskyddsförordningen.

Jag begär att ni raderar mitt namn, adress och födelsedatum från era register.

Information om era skyldigheter som personuppgiftsansvarig finns på Integritetsskyddsmyndighetens webbplats (www.imy.se).

Jag förväntar mig svar inom 30 dagar i enlighet med GDPR.

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

    3: `Ämne: Uppföljning – Begäran om radering enligt GDPR

Hej,

Jag skickade tidigare en begäran om radering av mina personuppgifter enligt artikel 17 i GDPR.

Jag har kontrollerat er tjänst och ser att mina uppgifter fortfarande är synliga. Jag ber er vänligen bekräfta att raderingen har genomförts eller informera mig om status.

Enligt artikel 12(3) i GDPR ska ni svara inom 30 dagar från ursprunglig begäran.

Med vänliga hälsningar,
[Ditt namn]
[Ditt personnummer]`
};

const toast = document.getElementById('toast');

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const templateNum = btn.dataset.template;
        const text = templates[templateNum];

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(showToast).catch(fallbackCopy);
        } else {
            fallbackCopy();
        }

        function fallbackCopy() {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                showToast();
            } catch (e) {
                alert('Kunde inte kopiera. Markera texten manuellt.');
            }
            document.body.removeChild(textarea);
        }
    });
});

function showToast(message) {
    if (toast) {
        toast.textContent = message || 'Mall kopierad till urklipp';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();

            // If linking to tracker, expand it
            if (href === '#tracker') {
                const toggle = document.querySelector('.tracker-toggle');
                const content = document.getElementById('tracker-content');
                if (toggle && content && content.hidden) {
                    toggle.setAttribute('aria-expanded', 'true');
                    content.hidden = false;
                }
            }

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Close mobile nav if open
            const navLinks = document.querySelector('.nav-links');
            const navToggle = document.querySelector('.nav-toggle');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// Back to top button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.hidden = window.scrollY < 400;
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let newTheme;
        if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
    const toggleMenu = (force) => {
        const isActive = navToggle.classList.toggle('active', force);
        navLinks.classList.toggle('active', force);
        navToggle.setAttribute('aria-expanded', isActive);
    };

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // Close menu when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

// Active nav indicator on scroll
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = [];

navAnchors.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href !== '#') {
        const section = document.querySelector(href);
        if (section) sections.push({ anchor, section });
    }
});

if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(({ anchor, section }) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        });
    }, { passive: true });
}

// Populate mailto links with template body and handle clicks
document.querySelectorAll('.email-link[data-template]').forEach(link => {
    const templateNum = link.dataset.template;
    const templateText = templates[templateNum];

    if (templateText) {
        // Extract subject and body from template
        const lines = templateText.split('\n');
        const subjectLine = lines[0];
        const subject = subjectLine.replace('Ämne: ', '');
        const body = lines.slice(2).join('\n'); // Skip subject and blank line

        const email = link.href.replace('mailto:', '');
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        link.href = mailtoUrl;

        // Open in new tab - keeps original page open
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Open mailto directly in new tab/window
            const mailWindow = window.open(mailtoUrl, '_blank');
            // If popup blocked, try normal navigation
            if (!mailWindow) {
                window.location.href = mailtoUrl;
            }
        });
    }
});

// ===== PRIVACY TRACKER =====
const trackerServices = [
    {
        id: 'ratsit',
        name: 'Ratsit',
        searchUrl: 'https://www.ratsit.se/sok/person?vem={name}&m=0&k=0&r=0&er=0&b=0&eb=0&amin=16&amax=120&fon=1&page=1',
        removalUrl: 'https://www.ratsit.se/tabort',
        method: 'BankID'
    },
    {
        id: 'hitta',
        name: 'Hitta.se',
        searchUrl: 'https://www.hitta.se/s%C3%B6k?vad={name}&typ=prv&sida=1&changedTab=1',
        removalUrl: 'https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida',
        method: 'BankID'
    },
    {
        id: 'eniro',
        name: 'Eniro',
        searchUrl: 'https://www.eniro.se/{name}/personer',
        removalUrl: 'https://uppdatera.eniro.se/person',
        method: 'BankID'
    },
    {
        id: 'merinfo',
        name: 'Merinfo',
        searchUrl: 'https://www.merinfo.se/search?q={name}',
        removalUrl: 'https://redigera.merinfo.se/',
        method: 'BankID'
    },
    {
        id: 'mrkoll',
        name: 'MrKoll',
        searchUrl: 'https://mrkoll.se/resultat?n={name}&c=&min=16&max=120&sex=a&c_stat=all&company=',
        removalUrl: 'https://mrkoll.se/om/andra-uppgifter',
        method: 'BankID',
        warning: 'Återpublicerar ofta'
    },
    {
        id: 'birthday',
        name: 'Birthday.se',
        searchUrl: 'https://www.birthday.se/sok?whowhere={name}&similar=true',
        removalUrl: 'mailto:info@birthday.se',
        method: 'E-post'
    },
    {
        id: 'upplysning',
        name: 'Upplysning.se',
        searchUrl: 'https://www.upplysning.se/person/?x=0996&who={name}&m=1',
        removalUrl: 'mailto:info@upplysning.se',
        method: 'E-post'
    },
    {
        id: 'krimfup',
        name: 'Krimfup.se',
        searchUrl: 'https://www.krimfup.se/search?name={name}&ssn=&place=',
        removalUrl: 'mailto:info@krimfup.se',
        method: 'E-post',
        warning: 'Svår att få borttagning'
    },
    {
        id: 'lexbase',
        name: 'Lexbase.se',
        searchUrl: null,
        removalUrl: 'mailto:info@lexbase.se',
        method: 'E-post',
        warning: 'Kräver inloggning för sökning'
    }
];

const TRACKER_STORAGE_KEY = 'privacyTrackerData';
const STALE_DAYS = 30;

function getTrackerData() {
    try {
        const data = localStorage.getItem(TRACKER_STORAGE_KEY);
        return data ? JSON.parse(data) : { name: '', services: {} };
    } catch (e) {
        console.error('Failed to parse tracker data:', e);
        return { name: '', services: {} };
    }
}

function saveTrackerData(data) {
    try {
        localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save tracker data:', e);
    }
}

function formatDate(dateString) {
    if (!dateString) return 'Aldrig kontrollerat';
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE');
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
        return { class: 'tracker-status-unknown', text: 'Okänd' };
    }

    const daysSince = getDaysSince(serviceData.lastCheck);

    // Check for stale data (30+ days old)
    if (daysSince >= STALE_DAYS) {
        return {
            class: 'tracker-status-stale',
            text: `${daysSince}d sedan`
        };
    }

    if (serviceData.status === 'removed') {
        return { class: 'tracker-status-removed', text: 'Borttagen' };
    }

    if (serviceData.status === 'visible') {
        return { class: 'tracker-status-visible', text: 'Synlig' };
    }

    return { class: 'tracker-status-unknown', text: 'Okänd' };
}

function buildSearchUrl(service, name) {
    if (!name) return '#';
    const encodedName = encodeURIComponent(name.trim());
    return service.searchUrl.replace('{name}', encodedName);
}

function renderTrackerGrid() {
    const grid = document.getElementById('tracker-grid');
    if (!grid) return;

    const data = getTrackerData();

    // Check for stale services and show alert
    const staleCount = trackerServices.filter(service => {
        const serviceData = data.services[service.id];
        return serviceData && serviceData.lastCheck && getDaysSince(serviceData.lastCheck) >= STALE_DAYS;
    }).length;

    let staleAlertEl = document.getElementById('stale-alert');
    if (staleCount > 0) {
        if (!staleAlertEl) {
            staleAlertEl = document.createElement('div');
            staleAlertEl.id = 'stale-alert';
            staleAlertEl.className = 'stale-alert';
            grid.parentNode.insertBefore(staleAlertEl, grid);
        }
        staleAlertEl.textContent = `⚠️ ${staleCount} tjänst${staleCount > 1 ? 'er' : ''} har inte kontrollerats på över 30 dagar.`;
    } else if (staleAlertEl) {
        staleAlertEl.remove();
    }

    grid.innerHTML = trackerServices.map(service => {
        const serviceData = data.services[service.id] || {};
        const statusInfo = getStatusInfo(service, serviceData);
        const hasName = data.name && data.name.trim();
        const isEmail = service.removalUrl.startsWith('mailto:');
        const warningHtml = service.warning
            ? `<div class="tracker-card-warning">${service.warning}</div>`
            : '';
        const canSearch = service.searchUrl !== null;
        const isVisible = serviceData.status === 'visible';

        return `
            <div class="tracker-card ${serviceData.status === 'removed' ? 'tracker-card-done' : ''}" data-service="${service.id}">
                <div class="tracker-card-header">
                    <span class="tracker-card-name">${service.name}</span>
                    <span class="tracker-status ${statusInfo.class}">${statusInfo.text}</span>
                </div>
                <div class="tracker-card-meta">
                    <span class="tracker-method tracker-method-${isEmail ? 'email' : 'bankid'}">${service.method}</span>
                    <span class="tracker-card-date">Senast: ${formatDate(serviceData.lastCheck)}</span>
                </div>
                ${warningHtml}
                <div class="tracker-card-actions">
                    <button class="tracker-card-btn tracker-card-btn-check" 
                            onclick="checkService('${service.id}')" 
                            ${!hasName || !canSearch ? 'disabled' : ''}
                            ${!canSearch ? 'data-tooltip="Kräver inloggning"' : (!hasName ? 'data-tooltip="Ange namn först"' : '')}>
                        Sök
                    </button>
                    ${isEmail
                ? `<button class="tracker-card-btn tracker-card-btn-remove" 
                                   onclick="openTrackerEmail('${service.id}')"
                                   ${!isVisible ? 'disabled data-tooltip="Markera Kvar först"' : ''}>Maila</button>`
                : `<button class="tracker-card-btn tracker-card-btn-remove" 
                                   onclick="window.open('${service.removalUrl}', '_blank')"
                                   ${!isVisible ? 'disabled data-tooltip="Markera Kvar först"' : ''}>Ta bort</button>`
            }
                    <button class="tracker-card-btn tracker-card-btn-removed" 
                            onclick="markService('${service.id}', 'removed')">
                        Klar
                    </button>
                    <button class="tracker-card-btn tracker-card-btn-visible" 
                            onclick="markService('${service.id}', 'visible')">
                        Kvar
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function checkService(serviceId) {
    const data = getTrackerData();
    const service = trackerServices.find(s => s.id === serviceId);

    if (!service || !service.searchUrl) return;

    if (!data.name || !data.name.trim()) {
        alert('Ange ditt namn först för att kunna söka.');
        return;
    }

    const url = buildSearchUrl(service, data.name);
    window.open(url, '_blank');
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
    showToast('Status uppdaterad');
}

function openTrackerEmail(serviceId) {
    const service = trackerServices.find(s => s.id === serviceId);
    if (!service || !service.removalUrl.startsWith('mailto:')) return;

    const email = service.removalUrl.replace('mailto:', '');
    const templateText = templates[3]; // Follow-up template

    // Extract subject and body from template
    const lines = templateText.split('\n');
    const subjectLine = lines[0];
    const subject = subjectLine.replace('Ämne: ', '');
    const body = lines.slice(2).join('\n'); // Skip subject and blank line

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open in new tab - keeps original page open
    const mailWindow = window.open(mailtoUrl, '_blank');
    if (!mailWindow) {
        window.location.href = mailtoUrl;
    }
}

function exportTrackerData() {
    const data = getTrackerData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sekretessguiden-tracker-${new Date().toISOString().split('T')[0]}.json`;
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
            if (data && typeof data === 'object') {
                saveTrackerData(data);

                // Update the name input
                const nameInput = document.getElementById('tracker-name');
                if (nameInput && data.name) {
                    nameInput.value = data.name;
                }

                renderTrackerGrid();
                showToast();
            }
        } catch (err) {
            alert('Kunde inte läsa filen. Kontrollera att det är en giltig JSON-fil.');
        }
    };
    reader.readAsText(file);
}

function clearTrackerData() {
    const overlay = document.getElementById('confirm-overlay');
    const cancelBtn = document.getElementById('confirm-cancel');
    const deleteBtn = document.getElementById('confirm-delete');

    if (!overlay) return;

    overlay.hidden = false;

    const closeDialog = () => {
        overlay.hidden = true;
        cancelBtn.removeEventListener('click', handleCancel);
        deleteBtn.removeEventListener('click', handleDelete);
        overlay.removeEventListener('click', handleOverlayClick);
    };

    const handleCancel = () => closeDialog();

    const handleDelete = () => {
        localStorage.removeItem(TRACKER_STORAGE_KEY);
        const nameInput = document.getElementById('tracker-name');
        if (nameInput) nameInput.value = '';
        renderTrackerGrid();
        showToast('Data rensad');
        closeDialog();
    };

    const handleOverlayClick = (e) => {
        if (e.target === overlay) closeDialog();
    };

    cancelBtn.addEventListener('click', handleCancel);
    deleteBtn.addEventListener('click', handleDelete);
    overlay.addEventListener('click', handleOverlayClick);
}

// Initialize tracker
function initTracker() {
    const toggle = document.querySelector('.tracker-toggle');
    const content = document.getElementById('tracker-content');
    const nameInput = document.getElementById('tracker-name');
    const exportBtn = document.getElementById('tracker-export');
    const importBtn = document.getElementById('tracker-import-btn');
    const importInput = document.getElementById('tracker-import');
    const clearBtn = document.getElementById('tracker-clear');

    if (!toggle || !content) return;

    // Toggle visibility
    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        content.hidden = isExpanded;
    });

    // Load saved name
    const data = getTrackerData();
    if (nameInput && data.name) {
        nameInput.value = data.name;
    }

    // Save name on change
    if (nameInput) {
        nameInput.addEventListener('input', () => {
            const data = getTrackerData();
            data.name = nameInput.value;
            saveTrackerData(data);
            renderTrackerGrid();
        });
    }

    // Export button
    if (exportBtn) {
        exportBtn.addEventListener('click', exportTrackerData);
    }

    // Import button
    if (importBtn && importInput) {
        importBtn.addEventListener('click', () => importInput.click());
        importInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                importTrackerData(e.target.files[0]);
                e.target.value = ''; // Reset for next import
            }
        });
    }

    // Clear button
    if (clearBtn) {
        clearBtn.addEventListener('click', clearTrackerData);
    }

    // Notification reminder
    const reminderEnabled = document.getElementById('reminder-enabled');
    const reminderDays = document.getElementById('reminder-days');
    const reminderNote = document.getElementById('reminder-note');

    if (reminderEnabled && reminderDays && reminderNote) {
        // Load saved preferences
        const savedReminder = localStorage.getItem('reminderEnabled') === 'true';
        const savedDays = localStorage.getItem('reminderDays') || '30';
        const reminderDate = localStorage.getItem('reminderDate');

        reminderEnabled.checked = savedReminder;
        reminderDays.value = savedDays;

        // Check if notifications are supported and get permission status
        const notifSupported = 'Notification' in window;
        const notifPermission = notifSupported ? Notification.permission : 'denied';

        // Disable toggle if notifications are denied
        if (notifPermission === 'denied') {
            reminderEnabled.disabled = true;
            reminderDays.disabled = true;
        }

        // Update note - reads fresh data each time
        const updateReminderNote = () => {
            const currentReminderDate = localStorage.getItem('reminderDate');

            if (notifPermission === 'denied') {
                reminderNote.textContent = '⚠️ Notifieringar blockerade i webbläsaren.';
                reminderNote.style.color = 'var(--text-muted)';
            } else if (reminderEnabled.checked && currentReminderDate) {
                const date = new Date(currentReminderDate);
                reminderNote.textContent = `✓ Påminnelse: ${date.toLocaleDateString('sv-SE')} (vid nästa besök)`;
                reminderNote.style.color = '';
            } else if (reminderEnabled.checked) {
                const days = parseInt(reminderDays.value) || 30;
                reminderNote.textContent = `Påminnelse om ${days} dagar aktiverad.`;
                reminderNote.style.color = '';
            } else if (notifPermission === 'granted') {
                reminderNote.textContent = '✓ Notifieringar tillåtna';
                reminderNote.style.color = 'var(--text-muted)';
            } else {
                reminderNote.textContent = '';
            }
        };
        updateReminderNote();

        // Handle checkbox change
        reminderEnabled.addEventListener('change', async () => {
            if (reminderEnabled.checked) {
                // Request notification permission only when enabling
                if ('Notification' in window && Notification.permission === 'default') {
                    const permission = await Notification.requestPermission();
                    if (permission !== 'granted') {
                        reminderEnabled.checked = false;
                        reminderNote.textContent = 'Notifieringar nekades. Aktivera i webbläsarinställningar.';
                        return;
                    }
                }

                // Set reminder date
                const days = parseInt(reminderDays.value) || 30;
                const date = new Date();
                date.setDate(date.getDate() + days);
                localStorage.setItem('reminderDate', date.toISOString());
                localStorage.setItem('reminderEnabled', 'true');
                localStorage.setItem('reminderDays', days.toString());
            } else {
                localStorage.removeItem('reminderDate');
                localStorage.setItem('reminderEnabled', 'false');
            }
            updateReminderNote();
        });

        // Handle days change
        reminderDays.addEventListener('change', () => {
            if (reminderEnabled.checked) {
                const days = parseInt(reminderDays.value) || 30;
                const date = new Date();
                date.setDate(date.getDate() + days);
                localStorage.setItem('reminderDate', date.toISOString());
                localStorage.setItem('reminderDays', days.toString());
                updateReminderNote();
            }
        });

        // Check if reminder is due
        if (savedReminder && reminderDate) {
            const dueDate = new Date(reminderDate);
            if (new Date() >= dueDate && 'Notification' in window && Notification.permission === 'granted') {
                new Notification('Sekretessguiden', {
                    body: 'Dags att kontrollera dina uppgifter hos söktjänsterna!',
                    icon: 'favicon.svg'
                });
                // Reset reminder for next cycle
                const days = parseInt(savedDays) || 30;
                const newDate = new Date();
                newDate.setDate(newDate.getDate() + days);
                localStorage.setItem('reminderDate', newDate.toISOString());
            }
        }
    }

    // Initial render
    renderTrackerGrid();
}

// Make functions available globally for onclick handlers
window.checkService = checkService;
window.markService = markService;
window.openTrackerEmail = openTrackerEmail;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracker);
} else {
    initTracker();
}

