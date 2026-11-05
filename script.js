// Fallback schedule data so the app works even when opened directly via file://
const FALLBACK_SCHEDULE = {
  metadata: {
    specialization: "Calculatoare română",
    year: "Anul I",
    group: "CR1.3",
    subgroups: ["A", "B"],
    defaultSubgroup: "A",
    semesterStart: "2026-09-28",
    totalWeeks: 14
  },
  buildings: {
    "ACB": "Clădirea Facultății de Automatică, Calculatoare și Electronică",
    "K201": "Clădirea Facultății de Automatică, Calculatoare și Electronică",
    "K202": "Clădirea Facultății de Automatică, Calculatoare și Electronică",
    "K205": "Clădirea Facultății de Automatică, Calculatoare și Electronică",
    "K206": "Clădirea Facultății de Automatică, Calculatoare și Electronică",
    "G021": "Clădirea Facultății de Automatică, Calculatoare și Electronică",
    "BB215": "Clădirea Facultății de Științe (Campus Mecanică)",
    "BB216": "Clădirea Facultății de Științe (Campus Mecanică)",
    "BC08": "Clădirea Laborator (lângă Căminul 8, Campus Mecanică)",
    "BC15": "Clădirea Laborator (lângă Căminul 8, Campus Mecanică)",
    "0.5": "Clădirea Facultății de Drept (Campus Mecanică)",
    "FEFS": "Facultatea de Educație Fizică și Sport"
  },
  days: [
    {
      id: "luni",
      dayIndex: 1,
      nameRo: "Luni",
      nameRu: "Понедельник",
      shortRo: "Lun",
      classes: [
        {
          slot: "P1",
          start: "08:00",
          end: "10:00",
          subject: "Proiectare logică I",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala ACB",
          roomCode: "ACB",
          teacher: "prof. Eugen Dumitrașcu"
        },
        {
          slot: "P2",
          start: "10:00",
          end: "12:00",
          subject: "Programarea Calculatoarelor și Limbaje de Programare",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala ACB",
          roomCode: "ACB",
          teacher: "prof. Marius Marian"
        },
        {
          slot: "P3",
          start: "12:00",
          end: "14:00",
          subject: "Algebra liniară și geometrie",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "all",
          subgroup: "all",
          room: "Sala K201",
          roomCode: "K201",
          teacher: "prof. Florian Munteanu"
        },
        {
          slot: "P4",
          start: "14:00",
          end: "16:00",
          subject: "Fizica I - Elemente Generale",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala K201",
          roomCode: "K201",
          teacher: "prof. Silviu Săraru"
        }
      ]
    },
    {
      id: "marti",
      dayIndex: 2,
      nameRo: "Marți",
      nameRu: "Вторник",
      shortRo: "Mar",
      classes: [
        {
          slot: "P1",
          start: "08:00",
          end: "10:00",
          subject: "Algebra liniară și geometrie",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala ACB",
          roomCode: "ACB",
          teacher: "prof. Florian Munteanu"
        },
        {
          slot: "P2",
          start: "10:00",
          end: "12:00",
          subject: "Analiza matematică",
          note: "Часть 1 (блок 4 часа: P2 + P3)",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala ACB",
          roomCode: "ACB",
          teacher: "prof. Cristian Vladimirescu"
        },
        {
          slot: "P3",
          start: "12:00",
          end: "14:00",
          subject: "Analiza matematică",
          note: "Часть 2 (блок 4 часа: P2 + P3)",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala ACB",
          roomCode: "ACB",
          teacher: "prof. Cristian Vladimirescu"
        },
        {
          slot: "P5",
          start: "16:00",
          end: "18:00",
          subject: "Programarea Calculatoarelor (P.C.)",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "para",
          subgroup: "all",
          room: "Sala K205",
          roomCode: "K205",
          teacher: "prof. A. Vultureanu-Albiși"
        }
      ]
    },
    {
      id: "miercuri",
      dayIndex: 3,
      nameRo: "Miercuri",
      nameRu: "Среда",
      shortRo: "Mie",
      classes: [
        {
          slot: "P1",
          start: "08:00",
          end: "10:00",
          subject: "Programarea Calculatoarelor și Limbaje de Programare (P.C.L.P.)",
          type: "Laborator",
          typeRu: "Лабораторная",
          weeks: "all",
          subgroup: "A",
          room: "Sala BB215",
          roomCode: "BB215",
          teacher: "prof. A. Vultureanu-Albiși"
        },
        {
          slot: "P2",
          start: "10:00",
          end: "12:00",
          subject: "Programarea Calculatoarelor și Limbaje de Programare (P.C.L.P.)",
          type: "Laborator",
          typeRu: "Лабораторная",
          weeks: "all",
          subgroup: "B",
          room: "Sala BB215",
          roomCode: "BB215",
          teacher: "prof. A. Vultureanu-Albiși"
        },
        {
          slot: "P3",
          start: "12:00",
          end: "14:00",
          subject: "Analiza matematică",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "all",
          subgroup: "all",
          room: "Sala BC08",
          roomCode: "BC08",
          teacher: "prof. Andrei Grecu"
        },
        {
          slot: "P4",
          start: "14:00",
          end: "16:00",
          subject: "Fizica I - Elemente Generale (F. 1.)",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "para",
          subgroup: "all",
          room: "Sala 0.5",
          roomCode: "0.5",
          teacher: "prof. A. Păuna"
        }
      ]
    },
    {
      id: "joi",
      dayIndex: 4,
      nameRo: "Joi",
      nameRu: "Четверг",
      shortRo: "Joi",
      classes: [
        {
          slot: "P1",
          start: "08:00",
          end: "10:00",
          subject: "Proiectare logică I (P.L. I)",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "impara",
          subgroup: "all",
          room: "Sala 0.5",
          roomCode: "0.5",
          teacher: "prof. E. Dumitrașcu"
        },
        {
          slot: "P3",
          start: "12:00",
          end: "14:00",
          subject: "Informatică Aplicată (I.A.)",
          type: "Laborator",
          typeRu: "Лабораторная",
          weeks: "impara",
          subgroup: "A",
          room: "Sala K202",
          roomCode: "K202",
          teacher: "prof. A. Vultureanu-Albiși"
        },
        {
          slot: "P3",
          start: "12:00",
          end: "14:00",
          subject: "Informatică Aplicată (I.A.)",
          type: "Laborator",
          typeRu: "Лабораторная",
          weeks: "para",
          subgroup: "B",
          room: "Sala K202",
          roomCode: "K202",
          teacher: "prof. A. Vultureanu-Albiși"
        },
        {
          slot: "P4",
          start: "14:00",
          end: "16:00",
          subject: "Informatică Aplicată",
          type: "Curs",
          typeRu: "Лекция",
          weeks: "all",
          subgroup: "all",
          room: "Sala K201",
          roomCode: "K201",
          teacher: "prof. Ileana Nicolae"
        }
      ]
    },
    {
      id: "vineri",
      dayIndex: 5,
      nameRo: "Vineri",
      nameRu: "Пятница",
      shortRo: "Vin",
      classes: [
        {
          slot: "P3",
          start: "12:00",
          end: "14:00",
          subject: "Sport",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "impara",
          subgroup: "all",
          room: "FEFS",
          roomCode: "FEFS",
          teacher: "prof. A. Băzăvan"
        },
        {
          slot: "P4",
          start: "14:00",
          end: "16:00",
          subject: "Limba Engleză",
          type: "Seminar",
          typeRu: "Семинар",
          weeks: "para",
          subgroup: "all",
          room: "Sala BC15",
          roomCode: "BC15",
          teacher: "prof. I. Boncea"
        },
        {
          slot: "P5",
          start: "16:00",
          end: "18:00",
          subject: "Proiectare logică I (P.L. 1)",
          type: "Laborator",
          typeRu: "Лабораторная",
          weeks: "all",
          subgroup: "A",
          room: "Sala BB216",
          roomCode: "BB216",
          teacher: "prof. H. Popescu"
        },
        {
          slot: "P6",
          start: "18:00",
          end: "20:00",
          subject: "Proiectare logică I (P.L. 1)",
          type: "Laborator",
          typeRu: "Лабораторная",
          weeks: "all",
          subgroup: "B",
          room: "Sala BB216",
          roomCode: "BB216",
          teacher: "prof. H. Popescu"
        }
      ]
    }
  ]
};

const savedSubgroup = (() => {
  try {
    const val = localStorage.getItem("orar_cr13_subgroup");
    return val === "B" ? "B" : "A";
  } catch (_) {
    return "A";
  }
})();

const state = {
  schedule: FALLBACK_SCHEDULE,
  selectedSubgroup: savedSubgroup, // 'A' | 'B'
  selectedWeekNumber: 6,           // 1, 2, 3, ...
  selectedDayIndex: 1,             // 1 (Luni) .. 5 (Vineri)
  lastLiveSignature: ""            // Used to detect when a live class/break starts or ends
};

/**
 * Parses "YYYY-MM-DD" into local Date object at midnight
 */
function parseLocalMidnight(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Parses "YYYY-MM-DD" into UTC midnight timestamp
 */
function parseDateUTC(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

/**
 * Returns parity info for a given week number (1, 2, 3...)
 */
function getWeekInfoByNumber(weekNumber) {
  const safeWeek = Math.max(1, weekNumber);
  const parity = safeWeek % 2 === 1 ? "impara" : "para";
  return {
    weekNumber: safeWeek,
    parity,
    labelRo: parity === "impara" ? "Impară" : "Pară",
    labelRu: parity === "impara" ? "Нечётная" : "Чётная"
  };
}

/**
 * Calculates academic week info from 2026-09-28 (Week 1, Impară) for a Date object.
 */
function getAcademicWeekInfo(dateObj) {
  const startStr = state.schedule?.metadata?.semesterStart || "2026-09-28";
  const startUTC = parseDateUTC(startStr);
  const currentUTC = Date.UTC(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate()
  );

  const diffDays = Math.floor((currentUTC - startUTC) / 86400000);
  const rawWeekNumber = Math.floor(diffDays / 7) + 1;
  const weekNumber = Math.max(1, rawWeekNumber);
  return getWeekInfoByNumber(weekNumber);
}

/**
 * Gets the Date object for a specific weekNumber (1-based) and dayIndex (1=Mon..5=Fri)
 */
function getDateForWeekAndDay(weekNumber, dayIndex) {
  const startStr = state.schedule?.metadata?.semesterStart || "2026-09-28";
  const baseDate = parseLocalMidnight(startStr);
  const offsetDays = (weekNumber - 1) * 7 + (dayIndex - 1);
  baseDate.setDate(baseDate.getDate() + offsetDays);
  return baseDate;
}

/**
 * Formats date range of a week (Monday – Friday) in Russian short format
 */
function formatWeekDateRange(weekNumber) {
  const mon = getDateForWeekAndDay(weekNumber, 1);
  const fri = getDateForWeekAndDay(weekNumber, 5);
  const fmt = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short"
  });
  return `${fmt.format(mon)} – ${fmt.format(fri)} ${fri.getFullYear()}`;
}

/**
 * Formats DD.MM for day buttons
 */
function formatDayShortDate(weekNumber, dayIndex) {
  const d = getDateForWeekAndDay(weekNumber, dayIndex);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}`;
}

/**
 * Determines which week number and day of the week should be selected by default
 * for a given date. If Saturday (6) or Sunday (0), jumps to Monday of the next week.
 */
function getDefaultTargetForDate(dateObj) {
  const jsDay = dateObj.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  if (jsDay === 6 || jsDay === 0) {
    const daysUntilMonday = jsDay === 6 ? 2 : 1;
    const nextMonday = new Date(dateObj.getTime());
    nextMonday.setDate(dateObj.getDate() + daysUntilMonday);
    const nextWeekInfo = getAcademicWeekInfo(nextMonday);
    return {
      targetDayIndex: 1,
      targetWeekNumber: nextWeekInfo.weekNumber,
      isWeekendJump: true
    };
  }

  const currentWeekInfo = getAcademicWeekInfo(dateObj);
  return {
    targetDayIndex: jsDay,
    targetWeekNumber: currentWeekInfo.weekNumber,
    isWeekendJump: false
  };
}

/**
 * Converts "HH:MM" to minutes from midnight
 */
function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

/**
 * Formats seconds duration into "ЧЧ:ММ"
 */
function formatHoursMinutes(totalSeconds) {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const totalMinutes = Math.ceil(clamped / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

/**
 * Formats Russian plural for hours ("1 час", "2 часа", "5 часов")
 */
function formatHoursRu(hours) {
  const h = Math.round(hours * 10) / 10;
  const mod10 = h % 10;
  const mod100 = h % 100;
  if (mod10 === 1 && mod100 !== 11) return `${h} час`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${h} часа`;
  return `${h} часов`;
}

/**
 * Formats Russian plural for classes ("1 пара", "2 пары", "5 пар")
 */
function formatClassesCountRu(count) {
  if (count === 0) return "Нет пар";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} пара`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${count} пары`;
  return `${count} пар`;
}

/**
 * Formats the current date string in Russian
 */
function formatHeaderDate(dateObj) {
  const ruFormatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const formatted = ruFormatter.format(dateObj);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

/**
 * Filters classes for a specific day, week parity, and subgroup ('A' or 'B')
 */
function getClassesForDayWeekSubgroup(dayObj, weekParity, subgroup) {
  if (!dayObj || !Array.isArray(dayObj.classes)) return [];
  return dayObj.classes
    .filter((cls) => {
      const weekMatch = cls.weeks === "all" || cls.weeks === weekParity;
      const subMatch =
        !cls.subgroup || cls.subgroup === "all" || cls.subgroup === subgroup;
      return weekMatch && subMatch;
    })
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
}

/**
 * Computes a signature string representing which class or break is currently live.
 * Used so the 1-second tick only triggers a full DOM re-render when a class/break starts or finishes.
 */
function computeLiveSignature(now) {
  const realWeekInfo = getAcademicWeekInfo(now);
  const actualJsDay = now.getDay();

  if (
    state.selectedWeekNumber !== realWeekInfo.weekNumber ||
    state.selectedDayIndex !== actualJsDay
  ) {
    return "not-today";
  }

  const dayObj = state.schedule.days.find(
    (d) => d.dayIndex === state.selectedDayIndex
  );
  if (!dayObj) return "no-day";

  const selectedWeekInfo = getWeekInfoByNumber(state.selectedWeekNumber);
  const classes = getClassesForDayWeekSubgroup(
    dayObj,
    selectedWeekInfo.parity,
    state.selectedSubgroup
  );

  const currentMin = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < classes.length; i++) {
    const cls = classes[i];
    const s = timeToMinutes(cls.start);
    const e = timeToMinutes(cls.end);
    if (currentMin >= s && currentMin < e) {
      return `class-${cls.slot}`;
    }
    if (i > 0) {
      const prevEnd = timeToMinutes(classes[i - 1].end);
      if (currentMin >= prevEnd && currentMin < s) {
        return `break-${prevEnd}-${s}`;
      }
    }
  }

  return "idle";
}

/**
 * Updates the header date, interactive week navigator, subgroup tabs, and day buttons
 */
function renderHeaderAndNav() {
  const now = new Date();
  const realWeekInfo = getAcademicWeekInfo(now);
  const selectedWeekInfo = getWeekInfoByNumber(state.selectedWeekNumber);
  const defaultTarget = getDefaultTargetForDate(now);

  // Group Pill & Footer Subgroup label
  const groupPill = document.getElementById("groupPill");
  if (groupPill) {
    groupPill.textContent = `CR1.3${state.selectedSubgroup}`;
    groupPill.classList.toggle("subgroup-b", state.selectedSubgroup === "B");
  }
  const footerGroupLabel = document.getElementById("footerGroupLabel");
  if (footerGroupLabel) {
    footerGroupLabel.textContent = `Grupa CR1.3 • Subgrupa ${state.selectedSubgroup}`;
  }

  // Header Date
  const currentDateText = document.getElementById("currentDateText");
  if (currentDateText) {
    currentDateText.textContent = formatHeaderDate(now);
  }

  // Interactive Week Navigator
  const prevWeekBtn = document.getElementById("prevWeekBtn");
  const weekBadge = document.getElementById("currentWeekBadge");
  const weekBadgeText = document.getElementById("currentWeekBadgeText");
  const currentWeekNowTag = document.getElementById("currentWeekNowTag");
  const weekDateRangeText = document.getElementById("weekDateRangeText");

  if (prevWeekBtn) {
    prevWeekBtn.disabled = state.selectedWeekNumber <= 1;
  }

  if (weekBadge && weekBadgeText) {
    weekBadge.classList.remove("week-impara", "week-para");
    weekBadge.classList.add(
      selectedWeekInfo.parity === "impara" ? "week-impara" : "week-para"
    );
    weekBadgeText.textContent = `Săptămâna ${selectedWeekInfo.weekNumber} • ${selectedWeekInfo.labelRo} (${selectedWeekInfo.labelRu})`;
  }

  if (currentWeekNowTag) {
    currentWeekNowTag.hidden =
      selectedWeekInfo.weekNumber !== realWeekInfo.weekNumber;
  }

  if (weekDateRangeText) {
    weekDateRangeText.textContent = formatWeekDateRange(
      selectedWeekInfo.weekNumber
    );
  }

  // Subgroup Switcher Tabs
  const tabSubgroupA = document.getElementById("tabSubgroupA");
  const tabSubgroupB = document.getElementById("tabSubgroupB");
  if (tabSubgroupA && tabSubgroupB) {
    const isA = state.selectedSubgroup === "A";
    tabSubgroupA.classList.toggle("active", isA);
    tabSubgroupA.setAttribute("aria-selected", String(isA));

    tabSubgroupB.classList.toggle("active", !isA);
    tabSubgroupB.setAttribute("aria-selected", String(!isA));
  }

  // Today button state
  const todayBtn = document.getElementById("todayBtn");
  if (todayBtn) {
    const isAtDefault =
      state.selectedDayIndex === defaultTarget.targetDayIndex &&
      state.selectedWeekNumber === defaultTarget.targetWeekNumber;
    todayBtn.classList.toggle("is-at-today", isAtDefault);
  }

  // Day Selector Buttons
  const dayNav = document.getElementById("dayNav");
  if (dayNav && state.schedule?.days) {
    const actualJsDay = now.getDay();
    dayNav.innerHTML = state.schedule.days
      .map((day) => {
        const isActive = day.dayIndex === state.selectedDayIndex;
        const isToday =
          day.dayIndex === actualJsDay &&
          state.selectedWeekNumber === realWeekInfo.weekNumber;
        const dayClasses = getClassesForDayWeekSubgroup(
          day,
          selectedWeekInfo.parity,
          state.selectedSubgroup
        );
        const dotsHtml = dayClasses
          .map(() => `<span class="day-mini-dot"></span>`)
          .join("");
        const shortDate = formatDayShortDate(
          state.selectedWeekNumber,
          day.dayIndex
        );

        return `
          <button
            type="button"
            class="day-btn ${isActive ? "active" : ""} ${isToday ? "is-today" : ""}"
            data-day-index="${day.dayIndex}"
            aria-pressed="${isActive}"
          >
            <span class="day-btn-ro">${day.nameRo}</span>
            <span class="day-btn-date">${shortDate}</span>
            <span class="day-btn-dots" aria-hidden="true">${dotsHtml}</span>
          </button>
        `;
      })
      .join("");
  }

  // Context banner (Weekend notice or viewing another week)
  const contextBanner = document.getElementById("contextBanner");
  const contextBannerIcon = document.getElementById("contextBannerIcon");
  const contextBannerText = document.getElementById("contextBannerText");
  if (contextBanner && contextBannerText && contextBannerIcon) {
    if (
      defaultTarget.isWeekendJump &&
      state.selectedDayIndex === defaultTarget.targetDayIndex &&
      state.selectedWeekNumber === defaultTarget.targetWeekNumber
    ) {
      contextBanner.hidden = false;
      contextBannerIcon.textContent = "🎉";
      contextBannerText.textContent = `Сегодня выходной! Автоматически открыт Понедельник следующей недели (Săptămâna ${selectedWeekInfo.weekNumber} • ${selectedWeekInfo.labelRo}).`;
    } else if (state.selectedWeekNumber !== realWeekInfo.weekNumber) {
      contextBanner.hidden = false;
      contextBannerIcon.textContent = "📅";
      contextBannerText.textContent = `Просмотр: Неделя ${selectedWeekInfo.weekNumber} (${selectedWeekInfo.labelRo} / ${selectedWeekInfo.labelRu}). Текущая неделя — №${realWeekInfo.weekNumber} (${realWeekInfo.labelRo}).`;
    } else {
      contextBanner.hidden = true;
    }
  }
}

/**
 * Renders the schedule cards and break ("окна") banners for the selected day, week, and subgroup
 */
function renderScheduleCards() {
  const now = new Date();
  const realWeekInfo = getAcademicWeekInfo(now);
  const selectedWeekInfo = getWeekInfoByNumber(state.selectedWeekNumber);
  const actualJsDay = now.getDay();

  const isViewingTodayRealWeek =
    state.selectedDayIndex === actualJsDay &&
    state.selectedWeekNumber === realWeekInfo.weekNumber;

  const currentMinutesFloat =
    now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const currentSecondsOfDay =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  const dayObj = state.schedule.days.find(
    (d) => d.dayIndex === state.selectedDayIndex
  );
  if (!dayObj) return;

  const classes = getClassesForDayWeekSubgroup(
    dayObj,
    selectedWeekInfo.parity,
    state.selectedSubgroup
  );

  // Day Overview Header
  const selectedDayTitle = document.getElementById("selectedDayTitle");
  const selectedDaySub = document.getElementById("selectedDaySub");
  const dayStatsBadge = document.getElementById("dayStatsBadge");

  if (selectedDayTitle) selectedDayTitle.textContent = dayObj.nameRo;
  if (selectedDaySub) {
    const dayDate = formatDayShortDate(state.selectedWeekNumber, dayObj.dayIndex);
    selectedDaySub.textContent = `${dayObj.nameRu} (${dayDate}) • Подгруппа ${state.selectedSubgroup}`;
  }

  if (dayStatsBadge) {
    if (classes.length > 0) {
      const firstStart = classes[0].start;
      const lastEnd = classes[classes.length - 1].end;
      dayStatsBadge.textContent = `${formatClassesCountRu(classes.length)} • ${firstStart} – ${lastEnd}`;
    } else {
      dayStatsBadge.textContent = "Свободный день";
    }
  }

  const cardsContainer = document.getElementById("cardsContainer");
  if (!cardsContainer) return;

  const buildingsMap = state.schedule.buildings || {};
  const fragments = [];

  classes.forEach((cls, index) => {
    // Check if there is a gap ("окно") between the previous class and this class
    if (index > 0) {
      const prev = classes[index - 1];
      const prevEndMin = timeToMinutes(prev.end);
      const currStartMin = timeToMinutes(cls.start);

      if (currStartMin > prevEndMin) {
        const gapMinutes = currStartMin - prevEndMin;
        const gapHours = gapMinutes / 60;
        const isLiveBreak =
          isViewingTodayRealWeek &&
          currentMinutesFloat >= prevEndMin &&
          currentMinutesFloat < currStartMin;

        const remainingBreakSec = currStartMin * 60 - currentSecondsOfDay;
        const breakTimerText = isLiveBreak
          ? ` • До следующей пары: ${formatHoursMinutes(remainingBreakSec)}`
          : "";

        fragments.push(`
          <div class="pause-banner ${isLiveBreak ? "is-live-break" : ""}" data-break-start="${prevEndMin}" data-break-end="${currStartMin}" data-gap-hours="${gapHours}" data-range="${prev.end} – ${cls.start}">
            <span class="pause-banner-text">☕ Pauză / Окно ${formatHoursRu(gapHours)} (${prev.end} – ${cls.start})${breakTimerText}</span>
          </div>
        `);
      }
    }

    const startMin = timeToMinutes(cls.start);
    const endMin = timeToMinutes(cls.end);
    const isLive =
      isViewingTodayRealWeek &&
      currentMinutesFloat >= startMin &&
      currentMinutesFloat < endMin;

    let liveBoxHtml = "";
    if (isLive) {
      const totalDurationSec = (endMin - startMin) * 60;
      const elapsedSec = currentSecondsOfDay - startMin * 60;
      const remainingSec = endMin * 60 - currentSecondsOfDay;
      const progressPct = Math.min(
        100,
        Math.max(0, Math.round((elapsedSec / totalDurationSec) * 100))
      );

      liveBoxHtml = `
        <div class="live-status-box" data-start-min="${startMin}" data-end-min="${endMin}">
          <div class="live-status-header">
            <span class="live-indicator-label">
              <span class="pulse-dot"></span>
              <span class="live-pct-text">Идёт сейчас • ${progressPct}%</span>
            </span>
            <span class="live-countdown">До конца пары: ${formatHoursMinutes(remainingSec)}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressPct}%"></div>
          </div>
        </div>
      `;
    }

    const typeKey = cls.type.toLowerCase(); // 'curs' | 'seminar' | 'laborator'
    const buildingName =
      buildingsMap[cls.roomCode] || "Universitatea din Craiova";

    let weekFreqLabel = "Обе недели";
    let weekFreqClass = "freq-all";
    if (cls.weeks === "impara") {
      weekFreqLabel = "Impară • Нечётная";
      weekFreqClass = "freq-impara";
    } else if (cls.weeks === "para") {
      weekFreqLabel = "Pară • Чётная";
      weekFreqClass = "freq-para";
    }

    const noteHtml = cls.note
      ? `<p class="subject-note">${cls.note}</p>`
      : "";

    fragments.push(`
      <article class="class-card type-${typeKey} ${isLive ? "is-live" : ""}" style="animation-delay: ${index * 35}ms">
        <div class="card-top">
          <div class="time-group">
            <span class="slot-pill">${cls.slot}</span>
            <span class="time-range">${cls.start} – ${cls.end}</span>
          </div>
          <div class="badges-right">
            <span class="week-freq-badge ${weekFreqClass}">${weekFreqLabel}</span>
            <span class="type-badge type-${typeKey}">${cls.type} • ${cls.typeRu}</span>
          </div>
        </div>

        <h3 class="subject-title">${cls.subject}</h3>
        ${noteHtml}

        <div class="card-meta">
          <div class="meta-row">
            <div class="room-block">
              <div class="room-line">
                <svg class="room-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${cls.room}</span>
              </div>
              <span class="building-hint">${buildingName}</span>
            </div>

            <div class="teacher-line">
              <svg class="teacher-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>${cls.teacher}</span>
            </div>
          </div>
        </div>

        ${liveBoxHtml}
      </article>
    `);
  });

  cardsContainer.innerHTML = fragments.join("");
  state.lastLiveSignature = computeLiveSignature(now);
}

/**
 * Updates ONLY the clock text and any active progress bars in place (no DOM rebuild, no flickering!)
 */
function tickClockAndLiveTimers() {
  const now = new Date();

  // 1. Update live clock text in place
  const liveClock = document.getElementById("liveClock");
  if (liveClock) {
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    liveClock.textContent = `${hh}:${mm}:${ss}`;
  }

  // 2. Check if a class/break boundary was crossed; only then re-render cards
  const newSig = computeLiveSignature(now);
  if (newSig !== state.lastLiveSignature) {
    renderHeaderAndNav();
    renderScheduleCards();
    return;
  }

  // 3. Otherwise, update any live countdown/progress bar in place without touching innerHTML
  const currentSecondsOfDay =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  const liveBox = document.querySelector(".live-status-box");
  if (liveBox) {
    const startMin = Number(liveBox.getAttribute("data-start-min"));
    const endMin = Number(liveBox.getAttribute("data-end-min"));
    const totalDurationSec = (endMin - startMin) * 60;
    const elapsedSec = currentSecondsOfDay - startMin * 60;
    const remainingSec = endMin * 60 - currentSecondsOfDay;
    const progressPct = Math.min(
      100,
      Math.max(0, Math.round((elapsedSec / totalDurationSec) * 100))
    );

    const pctEl = liveBox.querySelector(".live-pct-text");
    const countdownEl = liveBox.querySelector(".live-countdown");
    const fillEl = liveBox.querySelector(".progress-fill");

    if (pctEl) pctEl.textContent = `Идёт сейчас • ${progressPct}%`;
    if (countdownEl)
      countdownEl.textContent = `До конца пары: ${formatHoursMinutes(remainingSec)}`;
    if (fillEl) fillEl.style.width = `${progressPct}%`;
  }

  const liveBreak = document.querySelector(".pause-banner.is-live-break");
  if (liveBreak) {
    const endMin = Number(liveBreak.getAttribute("data-break-end"));
    const gapHours = Number(liveBreak.getAttribute("data-gap-hours"));
    const rangeStr = liveBreak.getAttribute("data-range");
    const remainingBreakSec = endMin * 60 - currentSecondsOfDay;
    const textEl = liveBreak.querySelector(".pause-banner-text");
    if (textEl) {
      textEl.textContent = `☕ Pauză / Окно ${formatHoursRu(gapHours)} (${rangeStr}) • До следующей пары: ${formatHoursMinutes(remainingBreakSec)}`;
    }
  }
}

/**
 * Triggers a smooth directional horizontal slide animation ('next' | 'prev')
 */
function triggerSlide(direction, includeDayStrip = false) {
  if (!direction) return;
  const cls = direction === "next" ? "slide-next" : "slide-prev";
  const targets = [document.getElementById("cardsContainer")];
  if (includeDayStrip) {
    targets.push(document.getElementById("dayNav"));
  }

  targets.forEach((el) => {
    if (!el) return;
    el.classList.remove("slide-next", "slide-prev");
    // Force reflow to restart animation cleanly
    void el.offsetWidth;
    el.classList.add(cls);
  });
}

/**
 * Full render pass (called only on user interaction or state change)
 * @param {'next'|'prev'|null} slideDir
 * @param {boolean} animateWeekStrip
 */
function renderAll(slideDir = null, animateWeekStrip = false) {
  renderHeaderAndNav();
  renderScheduleCards();
  tickClockAndLiveTimers();
  if (slideDir) {
    triggerSlide(slideDir, animateWeekStrip);
  }
}

/**
 * Advances sequentially to the next day (or from Friday -> Monday of the next week)
 */
function stepDayForward() {
  if (state.selectedDayIndex < 5) {
    state.selectedDayIndex += 1;
    renderAll("next", false);
  } else {
    state.selectedWeekNumber += 1;
    state.selectedDayIndex = 1; // Luni of the next week
    renderAll("next", true);
  }
}

/**
 * Moves sequentially to the previous day (or from Monday -> Friday of the previous week)
 */
function stepDayBackward() {
  if (state.selectedDayIndex > 1) {
    state.selectedDayIndex -= 1;
    renderAll("prev", false);
  } else if (state.selectedWeekNumber > 1) {
    state.selectedWeekNumber -= 1;
    state.selectedDayIndex = 5; // Vineri of the previous week
    renderAll("prev", true);
  }
}

/**
 * Jump to today's actual schedule (or next Monday if today is Sat/Sun)
 */
function selectTodayDefault() {
  const now = new Date();
  const target = getDefaultTargetForDate(now);
  const currentLinear = state.selectedWeekNumber * 10 + state.selectedDayIndex;
  const targetLinear = target.targetWeekNumber * 10 + target.targetDayIndex;
  const dir =
    targetLinear > currentLinear
      ? "next"
      : targetLinear < currentLinear
      ? "prev"
      : null;
  const weekChanged = state.selectedWeekNumber !== target.targetWeekNumber;

  state.selectedDayIndex = target.targetDayIndex;
  state.selectedWeekNumber = target.targetWeekNumber;
  renderAll(dir, weekChanged);
}

/**
 * Sets up UI event listeners (buttons, swipes, keyboard arrows)
 */
function setupEventListeners() {
  // Interactive Week Navigator buttons:
  // Prev week (◀) -> Friday (Vineri) of previous week
  // Next week (▶) -> Monday (Luni) of next week
  const prevWeekBtn = document.getElementById("prevWeekBtn");
  const nextWeekBtn = document.getElementById("nextWeekBtn");
  const currentWeekBadge = document.getElementById("currentWeekBadge");

  if (prevWeekBtn) {
    prevWeekBtn.addEventListener("click", () => {
      if (state.selectedWeekNumber > 1) {
        state.selectedWeekNumber -= 1;
        state.selectedDayIndex = 5; // Vineri of previous week
        renderAll("prev", true);
      }
    });
  }

  if (nextWeekBtn) {
    nextWeekBtn.addEventListener("click", () => {
      state.selectedWeekNumber += 1;
      state.selectedDayIndex = 1; // Luni of next week
      renderAll("next", true);
    });
  }

  // Clicking the center week badge compares the SAME day on the adjacent opposite-parity week
  if (currentWeekBadge) {
    currentWeekBadge.addEventListener("click", () => {
      const now = new Date();
      const realWeek = getAcademicWeekInfo(now).weekNumber;
      if (state.selectedWeekNumber === realWeek) {
        state.selectedWeekNumber = realWeek + 1;
        renderAll("next", true);
      } else {
        const dir = realWeek > state.selectedWeekNumber ? "next" : "prev";
        state.selectedWeekNumber = realWeek;
        renderAll(dir, true);
      }
    });
  }

  // Subgroup switcher (Subgrupa A / Subgrupa B)
  const tabSubgroupA = document.getElementById("tabSubgroupA");
  const tabSubgroupB = document.getElementById("tabSubgroupB");

  const setSubgroup = (sub) => {
    if (state.selectedSubgroup !== sub) {
      const dir = sub === "B" ? "next" : "prev";
      state.selectedSubgroup = sub;
      try {
        localStorage.setItem("orar_cr13_subgroup", sub);
      } catch (_) {}
      renderAll(dir, false);
    }
  };

  if (tabSubgroupA) {
    tabSubgroupA.addEventListener("click", () => setSubgroup("A"));
  }
  if (tabSubgroupB) {
    tabSubgroupB.addEventListener("click", () => setSubgroup("B"));
  }

  // Day navigation delegation
  const dayNav = document.getElementById("dayNav");
  if (dayNav) {
    dayNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".day-btn");
      if (!btn) return;
      const dayIdx = Number(btn.getAttribute("data-day-index"));
      if (dayIdx && dayIdx !== state.selectedDayIndex) {
        const dir = dayIdx > state.selectedDayIndex ? "next" : "prev";
        state.selectedDayIndex = dayIdx;
        renderAll(dir, false);
      }
    });
  }

  // Today button
  const todayBtn = document.getElementById("todayBtn");
  if (todayBtn) {
    todayBtn.addEventListener("click", () => {
      selectTodayDefault();
    });
  }

  // Touch swipe gestures on the schedule area (swipe left -> next day/week, swipe right -> prev day/week)
  const swipeArea = document.querySelector(".schedule-main");
  if (swipeArea) {
    let touchStartX = 0;
    let touchStartY = 0;

    swipeArea.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    swipeArea.addEventListener(
      "touchend",
      (e) => {
        if (e.changedTouches.length !== 1) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;

        // Trigger horizontal swipe if horizontal movement > 50px and dominates vertical scroll
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.35) {
          if (dx < 0) {
            stepDayForward();
          } else {
            stepDayBackward();
          }
        }
      },
      { passive: true }
    );
  }

  // Optional keyboard left/right arrow navigation on desktop
  window.addEventListener("keydown", (e) => {
    if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) {
      return;
    }
    if (e.key === "ArrowRight") {
      stepDayForward();
    } else if (e.key === "ArrowLeft") {
      stepDayBackward();
    }
  });
}

/**
 * Loads schedule.json with fallback to FALLBACK_SCHEDULE
 */
async function loadScheduleData() {
  try {
    const response = await fetch("./schedule.json", { cache: "no-cache" });
    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.days)) {
        state.schedule = data;
      }
    }
  } catch (err) {
    // Expected when opening index.html directly via file:// protocol
    state.schedule = FALLBACK_SCHEDULE;
  }
}

/**
 * Registers Service Worker for PWA installability & offline mode
 */
function registerServiceWorker() {
  if (
    "serviceWorker" in navigator &&
    (window.location.protocol === "https:" ||
      window.location.protocol === "http:")
  ) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

/**
 * Initialize Application
 */
async function initApp() {
  setupEventListeners();
  await loadScheduleData();
  selectTodayDefault();
  registerServiceWorker();

  // Lightweight 1-second tick that updates ONLY clock text and live progress without re-rendering cards
  setInterval(tickClockAndLiveTimers, 1000);
}

document.addEventListener("DOMContentLoaded", initApp);
