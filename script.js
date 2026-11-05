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
  calendarPeriods: [
    {
      id: "w1",
      type: "study",
      weekNumber: 1,
      parity: "impara",
      startDate: "2026-09-28",
      endDate: "2026-10-04",
      labelRo: "Săptămâna 1",
      shortLabel: "Săpt. 1 (Impară) • 28 сен – 2 окт"
    },
    {
      id: "w2",
      type: "study",
      weekNumber: 2,
      parity: "para",
      startDate: "2026-10-05",
      endDate: "2026-10-11",
      labelRo: "Săptămâna 2",
      shortLabel: "Săpt. 2 (Pară) • 5–9 окт"
    },
    {
      id: "w3",
      type: "study",
      weekNumber: 3,
      parity: "impara",
      startDate: "2026-10-12",
      endDate: "2026-10-18",
      labelRo: "Săptămâna 3",
      shortLabel: "Săpt. 3 (Impară) • 12–16 окт"
    },
    {
      id: "w4",
      type: "study",
      weekNumber: 4,
      parity: "para",
      startDate: "2026-10-19",
      endDate: "2026-10-25",
      labelRo: "Săptămâna 4",
      shortLabel: "Săpt. 4 (Pară) • 19–23 окт"
    },
    {
      id: "w5",
      type: "study",
      weekNumber: 5,
      parity: "impara",
      startDate: "2026-10-26",
      endDate: "2026-11-01",
      labelRo: "Săptămâna 5",
      shortLabel: "Săpt. 5 (Impară) • 26–30 окт"
    },
    {
      id: "w6",
      type: "study",
      weekNumber: 6,
      parity: "para",
      startDate: "2026-11-02",
      endDate: "2026-11-08",
      labelRo: "Săptămâna 6",
      shortLabel: "Săpt. 6 (Pară) • 2–6 ноя"
    },
    {
      id: "w7",
      type: "study",
      weekNumber: 7,
      parity: "impara",
      startDate: "2026-11-09",
      endDate: "2026-11-15",
      labelRo: "Săptămâna 7",
      shortLabel: "Săpt. 7 (Impară) • 9–13 ноя"
    },
    {
      id: "w8",
      type: "study",
      weekNumber: 8,
      parity: "para",
      startDate: "2026-11-16",
      endDate: "2026-11-22",
      labelRo: "Săptămâna 8",
      shortLabel: "Săpt. 8 (Pară) • 16–20 ноя"
    },
    {
      id: "w9",
      type: "study",
      weekNumber: 9,
      parity: "impara",
      startDate: "2026-11-23",
      endDate: "2026-11-29",
      labelRo: "Săptămâna 9",
      shortLabel: "Săpt. 9 (Impară) • 23–27 ноя"
    },
    {
      id: "w10",
      type: "study",
      weekNumber: 10,
      parity: "para",
      startDate: "2026-11-30",
      endDate: "2026-12-06",
      labelRo: "Săptămâna 10",
      shortLabel: "Săpt. 10 (Pară) • 30 ноя – 4 дек 🎉"
    },
    {
      id: "w11",
      type: "study",
      weekNumber: 11,
      parity: "impara",
      startDate: "2026-12-07",
      endDate: "2026-12-13",
      labelRo: "Săptămâna 11",
      shortLabel: "Săpt. 11 (Impară) • 7–11 дек"
    },
    {
      id: "w12",
      type: "study",
      weekNumber: 12,
      parity: "para",
      startDate: "2026-12-14",
      endDate: "2026-12-18",
      labelRo: "Săptămâna 12",
      shortLabel: "Săpt. 12 (Pară) • 14–18 дек"
    },
    {
      id: "vacanta_iarna",
      type: "vacation",
      icon: "🎄",
      startDate: "2026-12-19",
      endDate: "2027-01-03",
      returnDate: "2027-01-04",
      returnLabel: "4 января 2027 (Săptămâna 13 • Impară)",
      labelRo: "Vacanță de iarnă",
      labelRu: "Зимние каникулы",
      durationText: "2 недели (19 дек 2026 – 3 янв 2027)",
      description:
        "Рождественские и новогодние каникулы. Счёт учебных недель ставится на паузу — после каникул начинается 13-я (нечётная) учебная неделя.",
      shortLabel: "🎄 Vacanță de iarnă • 19 дек – 3 янв"
    },
    {
      id: "w13",
      type: "study",
      weekNumber: 13,
      parity: "impara",
      startDate: "2027-01-04",
      endDate: "2027-01-10",
      labelRo: "Săptămâna 13",
      shortLabel: "Săpt. 13 (Impară) • 4–8 янв 🎉"
    },
    {
      id: "w14",
      type: "study",
      weekNumber: 14,
      parity: "para",
      startDate: "2027-01-11",
      endDate: "2027-01-17",
      labelRo: "Săptămâna 14",
      shortLabel: "Săpt. 14 (Pară) • 11–15 янв (Финал)"
    },
    {
      id: "sesiune_iarna",
      type: "exams",
      icon: "📝",
      startDate: "2027-01-18",
      endDate: "2027-02-07",
      labelRo: "Sesiune de examene",
      labelRu: "Зимняя экзаменационная сессия",
      durationText: "3 недели (18 янв – 7 фев 2027)",
      shortLabel: "📝 Sesiune de examene • 18 янв – 7 фев"
    },
    {
      id: "vacanta_intersemestriala",
      type: "vacation",
      icon: "❄️",
      startDate: "2027-02-08",
      endDate: "2027-02-14",
      returnDate: "2027-02-15",
      returnLabel: "15 февраля 2027 (Начало 2-го семестра)",
      labelRo: "Vacanță intersemestrială",
      labelRu: "Межсеместровые каникулы",
      durationText: "1 неделя (8 – 14 фев 2027)",
      description:
        "Каникулы после зимней экзаменационной сессии перед стартом 2-го семестра.",
      shortLabel: "❄️ Vacanță intersemestrială • 8–14 фев"
    }
  ],
  holidays: {
    "2026-11-30": {
      nameRo: "Sfântul Andrei",
      nameRu: "День Святого Андрея Первозванного",
      dayRo: "Luni"
    },
    "2026-12-01": {
      nameRo: "Ziua Națională a României",
      nameRu: "Национальный день Румынии",
      dayRo: "Marți"
    },
    "2027-01-06": {
      nameRo: "Boboteaza",
      nameRu: "Богоявление / Крещение Господне",
      dayRo: "Miercuri"
    },
    "2027-01-07": {
      nameRo: "Sfântul Ioan Botezătorul",
      nameRu: "Собор Иоанна Предтечи",
      dayRo: "Joi"
    }
  },
  exams: [
    {
      id: "exam-pl1",
      subject: "Proiectare logică I",
      teacher: "prof. Eugen Dumitrașcu",
      examType: "Examen",
      examTypeRu: "Экзамен",
      date: null,
      time: null,
      room: null,
      roomCode: null,
      statusText: "Дата уточняется в декабре"
    },
    {
      id: "exam-pclp",
      subject: "Programarea Calculatoarelor și Limbaje de Programare (P.C.L.P.)",
      teacher: "prof. Marius Marian",
      examType: "Examen",
      examTypeRu: "Экзамен",
      date: null,
      time: null,
      room: null,
      roomCode: null,
      statusText: "Дата уточняется в декабре"
    },
    {
      id: "exam-alg",
      subject: "Algebra liniară și geometrie",
      teacher: "prof. Florian Munteanu",
      examType: "Examen",
      examTypeRu: "Экзамен",
      date: null,
      time: null,
      room: null,
      roomCode: null,
      statusText: "Дата уточняется в декабре"
    },
    {
      id: "exam-fiz1",
      subject: "Fizica I - Elemente Generale",
      teacher: "prof. Silviu Săraru",
      examType: "Examen",
      examTypeRu: "Экзамен",
      date: null,
      time: null,
      room: null,
      roomCode: null,
      statusText: "Дата уточняется в декабре"
    },
    {
      id: "exam-am",
      subject: "Analiza matematică",
      teacher: "prof. Cristian Vladimirescu",
      examType: "Examen",
      examTypeRu: "Экзамен",
      date: null,
      time: null,
      room: null,
      roomCode: null,
      statusText: "Дата уточняется в декабре"
    },
    {
      id: "exam-ia",
      subject: "Informatică Aplicată",
      teacher: "prof. Ileana Nicolae",
      examType: "Colocviu / Examen",
      examTypeRu: "Зачёт / Экзамен",
      date: null,
      time: null,
      room: null,
      roomCode: null,
      statusText: "Дата уточняется в декабре"
    }
  ],
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
  selectedPeriodIndex: 5,          // Index into schedule.calendarPeriods (default w6)
  lastStudyPeriodIndex: 5,         // Remembers last viewed study week when toggling Examene tab
  selectedDayIndex: 1,             // 1 (Luni) .. 5 (Vineri)
  isPickerOpen: false,
  lastLiveSignature: ""
};

/**
 * Formats a local Date object into "YYYY-MM-DD"
 */
function toISODateString(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

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
 * Returns the array of official 1st-semester calendar periods
 */
function getPeriods() {
  return state.schedule?.calendarPeriods || FALLBACK_SCHEDULE.calendarPeriods;
}

/**
 * Finds the calendar period index that contains the given Date object.
 * Clamps to the first period if before 2026-09-28, or last period if after 2027-02-14.
 */
function findPeriodIndexForDate(dateObj) {
  const periods = getPeriods();
  const iso = toISODateString(dateObj);

  for (let i = 0; i < periods.length; i++) {
    const p = periods[i];
    if (iso >= p.startDate && iso <= p.endDate) {
      return i;
    }
  }

  // Note: w12 endDate is 2026-12-18 (Friday), vacanta_iarna starts 2026-12-19 (Saturday)
  if (iso < periods[0].startDate) return 0;
  return periods.length - 1;
}

/**
 * Determines which periodIndex and dayIndex should be selected by default for a given date.
 * On Saturday (6) or Sunday (0) of a study week, jumps to the next period (Monday of next week, or vacation/exams).
 */
function getDefaultTargetForDate(dateObj) {
  const periods = getPeriods();
  const currentIdx = findPeriodIndexForDate(dateObj);
  const currentPeriod = periods[currentIdx];
  const jsDay = dateObj.getDay(); // 0 = Sun, 1..5 = Mon..Fri, 6 = Sat

  if (currentPeriod.type === "study" && (jsDay === 6 || jsDay === 0)) {
    const nextIdx = Math.min(periods.length - 1, currentIdx + 1);
    return {
      targetPeriodIndex: nextIdx,
      targetDayIndex: 1,
      isWeekendJump: true
    };
  }

  return {
    targetPeriodIndex: currentIdx,
    targetDayIndex: jsDay >= 1 && jsDay <= 5 ? jsDay : 1,
    isWeekendJump: false
  };
}

/**
 * Gets the Date object for a specific study period and dayIndex (1=Mon..5=Fri)
 */
function getDateForPeriodAndDay(period, dayIndex) {
  const baseDate = parseLocalMidnight(period.startDate);
  baseDate.setDate(baseDate.getDate() + (dayIndex - 1));
  return baseDate;
}

/**
 * Formats date range of a period in Russian short format
 */
function formatPeriodDateRange(period) {
  const start = parseLocalMidnight(period.startDate);
  // For study weeks, show Monday – Friday range
  const end =
    period.type === "study"
      ? getDateForPeriodAndDay(period, 5)
      : parseLocalMidnight(period.endDate);

  const fmt = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short"
  });
  return `${fmt.format(start)} – ${fmt.format(end)} ${end.getFullYear()}`;
}

/**
 * Formats DD.MM for day buttons
 */
function formatDayShortDate(period, dayIndex) {
  const d = getDateForPeriodAndDay(period, dayIndex);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}`;
}

/**
 * Checks if a given Date object falls on an official legal holiday
 */
function getHolidayForDate(dateObj) {
  const iso = toISODateString(dateObj);
  const holidays = state.schedule?.holidays || FALLBACK_SCHEDULE.holidays || {};
  return holidays[iso] || null;
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
 * Formats Russian plural for days ("1 день", "2 дня", "5 дней")
 */
function formatDaysRu(days) {
  const d = Math.abs(Math.round(days));
  const mod10 = d % 10;
  const mod100 = d % 100;
  if (mod10 === 1 && mod100 !== 11) return `${d} день`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${d} дня`;
  return `${d} дней`;
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
 */
function computeLiveSignature(now) {
  const periods = getPeriods();
  const realPeriodIdx = findPeriodIndexForDate(now);
  const selectedPeriod = periods[state.selectedPeriodIndex];
  const actualJsDay = now.getDay();

  if (
    !selectedPeriod ||
    selectedPeriod.type !== "study" ||
    state.selectedPeriodIndex !== realPeriodIdx ||
    state.selectedDayIndex !== actualJsDay
  ) {
    return `period-${state.selectedPeriodIndex}-not-live`;
  }

  const selectedDate = getDateForPeriodAndDay(
    selectedPeriod,
    state.selectedDayIndex
  );
  if (getHolidayForDate(selectedDate)) {
    return "holiday";
  }

  const dayObj = state.schedule.days.find(
    (d) => d.dayIndex === state.selectedDayIndex
  );
  if (!dayObj) return "no-day";

  const classes = getClassesForDayWeekSubgroup(
    dayObj,
    selectedPeriod.parity,
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
 * Updates the header, mode tabs, interactive period navigator, dropdown menu, subgroup tabs, and day buttons
 */
function renderHeaderAndNav() {
  const now = new Date();
  const periods = getPeriods();
  const realPeriodIdx = findPeriodIndexForDate(now);
  const realPeriod = periods[realPeriodIdx];
  const selectedPeriod = periods[state.selectedPeriodIndex];
  const defaultTarget = getDefaultTargetForDate(now);

  if (selectedPeriod.type === "study") {
    state.lastStudyPeriodIndex = state.selectedPeriodIndex;
  }

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

  // Mode Switcher Tabs (Schedule vs Exams)
  const tabModeSchedule = document.getElementById("tabModeSchedule");
  const tabModeExams = document.getElementById("tabModeExams");
  const isExamsMode = selectedPeriod.type === "exams";
  if (tabModeSchedule && tabModeExams) {
    tabModeSchedule.classList.toggle("active", !isExamsMode);
    tabModeSchedule.setAttribute("aria-selected", String(!isExamsMode));
    tabModeExams.classList.toggle("active", isExamsMode);
    tabModeExams.setAttribute("aria-selected", String(isExamsMode));
  }

  // Interactive Period Navigator
  const prevWeekBtn = document.getElementById("prevWeekBtn");
  const nextWeekBtn = document.getElementById("nextWeekBtn");
  const weekBadge = document.getElementById("currentWeekBadge");
  const weekBadgeText = document.getElementById("currentWeekBadgeText");
  const currentWeekNowTag = document.getElementById("currentWeekNowTag");
  const weekDateRangeText = document.getElementById("weekDateRangeText");

  if (prevWeekBtn) {
    prevWeekBtn.disabled = state.selectedPeriodIndex <= 0;
  }
  if (nextWeekBtn) {
    nextWeekBtn.disabled = state.selectedPeriodIndex >= periods.length - 1;
  }

  if (weekBadge && weekBadgeText) {
    weekBadge.classList.remove(
      "week-impara",
      "week-para",
      "week-vacation",
      "week-exams"
    );
    weekBadge.setAttribute("aria-expanded", String(state.isPickerOpen));

    if (selectedPeriod.type === "study") {
      const parityRo = selectedPeriod.parity === "impara" ? "Impară" : "Pară";
      const parityRu =
        selectedPeriod.parity === "impara" ? "Нечётная" : "Чётная";
      weekBadge.classList.add(
        selectedPeriod.parity === "impara" ? "week-impara" : "week-para"
      );
      weekBadgeText.textContent = `${selectedPeriod.labelRo} • ${parityRo} (${parityRu})`;
    } else if (selectedPeriod.type === "vacation") {
      weekBadge.classList.add("week-vacation");
      weekBadgeText.textContent = `${selectedPeriod.icon || "🎄"} ${selectedPeriod.labelRo} (${selectedPeriod.labelRu})`;
    } else {
      weekBadge.classList.add("week-exams");
      weekBadgeText.textContent = `📝 ${selectedPeriod.labelRo} (Сессия)`;
    }
  }

  if (currentWeekNowTag) {
    currentWeekNowTag.hidden = state.selectedPeriodIndex !== realPeriodIdx;
  }

  if (weekDateRangeText) {
    weekDateRangeText.textContent = formatPeriodDateRange(selectedPeriod);
  }

  // Render Period Picker Dropdown Options
  const pickerDropdown = document.getElementById("periodPickerDropdown");
  if (pickerDropdown) {
    pickerDropdown.hidden = !state.isPickerOpen;
    pickerDropdown.innerHTML = periods
      .map((p, idx) => {
        const isSelected = idx === state.selectedPeriodIndex;
        const isCurrentNow = idx === realPeriodIdx;
        const typeClass = `type-${p.type}`;
        const nowTag = isCurrentNow
          ? `<span class="period-opt-tag">сейчас</span>`
          : "";
        return `
          <button
            type="button"
            role="option"
            class="period-option ${typeClass} ${isSelected ? "is-selected" : ""}"
            data-period-index="${idx}"
            aria-selected="${isSelected}"
          >
            <span>${p.shortLabel}</span>
            ${nowTag}
          </button>
        `;
      })
      .join("");
  }

  // Subgroup Switcher Tabs
  const subgroupSwitcher = document.getElementById("subgroupSwitcher");
  const tabSubgroupA = document.getElementById("tabSubgroupA");
  const tabSubgroupB = document.getElementById("tabSubgroupB");
  if (subgroupSwitcher) {
    subgroupSwitcher.hidden = selectedPeriod.type !== "study";
  }
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
      state.selectedPeriodIndex === defaultTarget.targetPeriodIndex &&
      (selectedPeriod.type !== "study" ||
        state.selectedDayIndex === defaultTarget.targetDayIndex);
    todayBtn.classList.toggle("is-at-today", isAtDefault);
  }

  // Day Selector Buttons (only visible during study weeks)
  const dayNav = document.getElementById("dayNav");
  const typeLegend = document.getElementById("typeLegend");
  if (typeLegend) {
    typeLegend.hidden = selectedPeriod.type !== "study";
  }

  if (dayNav) {
    if (selectedPeriod.type !== "study") {
      dayNav.hidden = true;
    } else {
      dayNav.hidden = false;
      const actualJsDay = now.getDay();
      dayNav.innerHTML = state.schedule.days
        .map((day) => {
          const isActive = day.dayIndex === state.selectedDayIndex;
          const isToday =
            day.dayIndex === actualJsDay &&
            state.selectedPeriodIndex === realPeriodIdx;

          const dayDateObj = getDateForPeriodAndDay(
            selectedPeriod,
            day.dayIndex
          );
          const holiday = getHolidayForDate(dayDateObj);
          const shortDate = formatDayShortDate(selectedPeriod, day.dayIndex);

          const dayClasses = getClassesForDayWeekSubgroup(
            day,
            selectedPeriod.parity,
            state.selectedSubgroup
          );
          const dotsHtml = holiday
            ? `<span>🎉</span>`
            : dayClasses.map(() => `<span class="day-mini-dot"></span>`).join("");

          return `
            <button
              type="button"
              class="day-btn ${isActive ? "active" : ""} ${isToday ? "is-today" : ""} ${holiday ? "is-holiday" : ""}"
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
  }

  // Context banner
  const contextBanner = document.getElementById("contextBanner");
  const contextBannerIcon = document.getElementById("contextBannerIcon");
  const contextBannerText = document.getElementById("contextBannerText");
  if (contextBanner && contextBannerText && contextBannerIcon) {
    if (
      defaultTarget.isWeekendJump &&
      state.selectedPeriodIndex === defaultTarget.targetPeriodIndex &&
      state.selectedDayIndex === defaultTarget.targetDayIndex
    ) {
      contextBanner.hidden = false;
      contextBannerIcon.textContent = "🎉";
      contextBannerText.textContent = `Сегодня выходной! Автоматически открыт следующий учебный период: ${selectedPeriod.shortLabel}.`;
    } else if (state.selectedPeriodIndex !== realPeriodIdx) {
      contextBanner.hidden = false;
      contextBannerIcon.textContent = "📅";
      contextBannerText.textContent = `Режим просмотра: ${selectedPeriod.shortLabel}. Текущий период по календарю — ${realPeriod.labelRo}.`;
    } else {
      contextBanner.hidden = true;
    }
  }
}

/**
 * Renders the main content area: Study Day (or Legal Holiday), Vacation Card, or Exam Session Cards
 */
function renderScheduleCards() {
  const now = new Date();
  const periods = getPeriods();
  const realPeriodIdx = findPeriodIndexForDate(now);
  const selectedPeriod = periods[state.selectedPeriodIndex];
  const cardsContainer = document.getElementById("cardsContainer");
  const selectedDayTitle = document.getElementById("selectedDayTitle");
  const selectedDaySub = document.getElementById("selectedDaySub");
  const dayStatsBadge = document.getElementById("dayStatsBadge");

  if (!cardsContainer || !selectedPeriod) return;

  // CASE 1: VACATION PERIOD (Vacanță de iarnă / Vacanță intersemestrială)
  if (selectedPeriod.type === "vacation") {
    if (selectedDayTitle) selectedDayTitle.textContent = selectedPeriod.labelRo;
    if (selectedDaySub) selectedDaySub.textContent = selectedPeriod.labelRu;
    if (dayStatsBadge) dayStatsBadge.textContent = "Каникулы";

    const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const startUTC = parseDateUTC(selectedPeriod.startDate);
    const returnUTC = parseDateUTC(selectedPeriod.returnDate);

    let countdownTitle = "";
    if (todayUTC < startUTC) {
      const daysUntilVacation = Math.ceil((startUTC - todayUTC) / 86400000);
      const totalDaysToReturn = Math.ceil((returnUTC - startUTC) / 86400000);
      countdownTitle = `До начала каникул: ${formatDaysRu(daysUntilVacation)} (продлятся ${formatDaysRu(totalDaysToReturn)})`;
    } else if (todayUTC < returnUTC) {
      const daysLeft = Math.ceil((returnUTC - todayUTC) / 86400000);
      countdownTitle = `До возвращения на учёбу осталось: ${formatDaysRu(daysLeft)}`;
    } else {
      countdownTitle = "Этот период каникул завершён";
    }

    cardsContainer.innerHTML = `
      <article class="vacation-card">
        <div class="vacation-icon">${selectedPeriod.icon || "🎄"}</div>
        <h3 class="vacation-title">${selectedPeriod.labelRo} • ${selectedPeriod.labelRu}</h3>
        <span class="vacation-dates-pill">${selectedPeriod.durationText}</span>
        <p class="vacation-desc">${selectedPeriod.description}</p>
        <div class="vacation-countdown-box">
          <span class="vacation-countdown-main">⏳ ${countdownTitle}</span>
          <span class="vacation-return-sub">Выход на учёбу: ${selectedPeriod.returnLabel}</span>
        </div>
      </article>
    `;
    state.lastLiveSignature = computeLiveSignature(now);
    return;
  }

  // CASE 2: EXAM SESSION (Sesiune de examene)
  if (selectedPeriod.type === "exams") {
    if (selectedDayTitle) selectedDayTitle.textContent = "Sesiune de examene";
    if (selectedDaySub) selectedDaySub.textContent = "18 янв – 7 фев 2027 (3 недели)";
    const exams = state.schedule?.exams || FALLBACK_SCHEDULE.exams || [];
    if (dayStatsBadge) dayStatsBadge.textContent = `${exams.length} предметов`;

    const buildingsMap = state.schedule.buildings || {};
    const examCardsHtml = exams
      .map((ex, idx) => {
        const isScheduled = Boolean(ex.date);
        const statusLabel = isScheduled
          ? `📅 ${ex.date}${ex.time ? ` • ${ex.time}` : ""}`
          : `⏳ ${ex.statusText || "Дата уточняется в декабре"}`;
        const roomLabel = ex.room || "Аудитория уточняется";
        const buildingHint = ex.roomCode
          ? buildingsMap[ex.roomCode] || "Universitatea din Craiova"
          : "Дату, время и кабинет можно легко вписать в schedule.json (раздел exams)";

        return `
          <article class="exam-card" style="animation-delay: ${idx * 35}ms">
            <div class="card-top">
              <span class="exam-status-pill ${isScheduled ? "is-scheduled" : ""}">${statusLabel}</span>
              <span class="type-badge type-curs">${ex.examType} • ${ex.examTypeRu}</span>
            </div>
            <h3 class="subject-title">${ex.subject}</h3>
            <div class="card-meta">
              <div class="meta-row">
                <div class="room-block">
                  <div class="room-line">
                    <svg class="room-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${roomLabel}</span>
                  </div>
                  <span class="building-hint">${buildingHint}</span>
                </div>
                <div class="teacher-line">
                  <svg class="teacher-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>${ex.teacher}</span>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    cardsContainer.innerHTML = `
      <div class="exams-intro-banner">
        📝 <strong>Зимняя сессия (18 января – 7 февраля 2027)</strong>. Когда в декабре утвердят точные даты экзаменов, просто укажите <code>date</code>, <code>time</code> и <code>room</code> в файле <code>schedule.json</code>.
      </div>
      ${examCardsHtml}
    `;
    state.lastLiveSignature = computeLiveSignature(now);
    return;
  }

  // CASE 3: REGULAR STUDY WEEK (Weeks 1..14)
  const actualJsDay = now.getDay();
  const isViewingTodayRealWeek =
    state.selectedDayIndex === actualJsDay &&
    state.selectedPeriodIndex === realPeriodIdx;

  const dayObj = state.schedule.days.find(
    (d) => d.dayIndex === state.selectedDayIndex
  );
  if (!dayObj) return;

  const selectedDateObj = getDateForPeriodAndDay(
    selectedPeriod,
    dayObj.dayIndex
  );
  const holiday = getHolidayForDate(selectedDateObj);
  const dayDateStr = formatDayShortDate(selectedPeriod, dayObj.dayIndex);

  if (selectedDayTitle) selectedDayTitle.textContent = dayObj.nameRo;
  if (selectedDaySub) {
    selectedDaySub.textContent = `${dayObj.nameRu} (${dayDateStr}) • Подгруппа ${state.selectedSubgroup}`;
  }

  // Check if this specific date is a Legal Holiday (Zi liberă legală)
  if (holiday) {
    if (dayStatsBadge) {
      dayStatsBadge.textContent = "🎉 Выходной день";
    }
    const fullDateRu = new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(selectedDateObj);

    cardsContainer.innerHTML = `
      <article class="holiday-card">
        <div class="holiday-emoji">🎉</div>
        <span class="holiday-badge">Zi liberă legală • Государственный выходной</span>
        <h3 class="holiday-title">${holiday.nameRo}</h3>
        <p class="holiday-subtitle">${holiday.nameRu} (${fullDateRu})</p>
        <p class="holiday-note">Официальный нерабочий праздничный день в Румынии — регулярные занятия в университете не проводятся.</p>
      </article>
    `;
    state.lastLiveSignature = computeLiveSignature(now);
    return;
  }

  const classes = getClassesForDayWeekSubgroup(
    dayObj,
    selectedPeriod.parity,
    state.selectedSubgroup
  );

  if (dayStatsBadge) {
    if (classes.length > 0) {
      const firstStart = classes[0].start;
      const lastEnd = classes[classes.length - 1].end;
      dayStatsBadge.textContent = `${formatClassesCountRu(classes.length)} • ${firstStart} – ${lastEnd}`;
    } else {
      dayStatsBadge.textContent = "Свободный день";
    }
  }

  const currentMinutesFloat =
    now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const currentSecondsOfDay =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

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
    if (!el || el.hidden) return;
    el.classList.remove("slide-next", "slide-prev");
    void el.offsetWidth;
    el.classList.add(cls);
  });
}

/**
 * Full render pass (called only on user interaction or state change)
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
 * Advances to the next period in the semester calendar:
 * Select Monday (Luni) when entering a study week.
 */
function stepPeriodForward() {
  const periods = getPeriods();
  if (state.selectedPeriodIndex < periods.length - 1) {
    state.selectedPeriodIndex += 1;
    state.selectedDayIndex = 1; // Luni
    state.isPickerOpen = false;
    renderAll("next", true);
  }
}

/**
 * Moves to the previous period in the semester calendar:
 * Select Friday (Vineri) when entering a study week backwards.
 */
function stepPeriodBackward() {
  if (state.selectedPeriodIndex > 0) {
    state.selectedPeriodIndex -= 1;
    state.selectedDayIndex = 5; // Vineri
    state.isPickerOpen = false;
    renderAll("prev", true);
  }
}

/**
 * Advances sequentially by day (or across period boundaries after Friday)
 */
function stepDayForward() {
  const periods = getPeriods();
  const currentPeriod = periods[state.selectedPeriodIndex];
  if (currentPeriod.type === "study" && state.selectedDayIndex < 5) {
    state.selectedDayIndex += 1;
    renderAll("next", false);
  } else {
    stepPeriodForward();
  }
}

/**
 * Moves sequentially backward by day (or across period boundaries before Monday)
 */
function stepDayBackward() {
  const periods = getPeriods();
  const currentPeriod = periods[state.selectedPeriodIndex];
  if (currentPeriod.type === "study" && state.selectedDayIndex > 1) {
    state.selectedDayIndex -= 1;
    renderAll("prev", false);
  } else {
    stepPeriodBackward();
  }
}

/**
 * Jump to today's actual schedule (or next period if today is Sat/Sun)
 */
function selectTodayDefault() {
  const now = new Date();
  const target = getDefaultTargetForDate(now);
  const currentLinear = state.selectedPeriodIndex * 10 + state.selectedDayIndex;
  const targetLinear = target.targetPeriodIndex * 10 + target.targetDayIndex;
  const dir =
    targetLinear > currentLinear
      ? "next"
      : targetLinear < currentLinear
      ? "prev"
      : null;
  const periodChanged = state.selectedPeriodIndex !== target.targetPeriodIndex;

  state.selectedPeriodIndex = target.targetPeriodIndex;
  state.selectedDayIndex = target.targetDayIndex;
  state.isPickerOpen = false;
  renderAll(dir, periodChanged);
}

/**
 * Sets up UI event listeners (buttons, period picker dropdown, swipes, keyboard arrows)
 */
function setupEventListeners() {
  const prevWeekBtn = document.getElementById("prevWeekBtn");
  const nextWeekBtn = document.getElementById("nextWeekBtn");
  const currentWeekBadge = document.getElementById("currentWeekBadge");
  const pickerDropdown = document.getElementById("periodPickerDropdown");
  const weekNavigatorWrap = document.getElementById("weekNavigatorWrap");

  if (prevWeekBtn) {
    prevWeekBtn.addEventListener("click", () => {
      stepPeriodBackward();
    });
  }

  if (nextWeekBtn) {
    nextWeekBtn.addEventListener("click", () => {
      stepPeriodForward();
    });
  }

  // Clicking the center week badge opens/closes the full semester period picker dropdown
  if (currentWeekBadge) {
    currentWeekBadge.addEventListener("click", (e) => {
      e.stopPropagation();
      state.isPickerOpen = !state.isPickerOpen;
      renderHeaderAndNav();
      if (state.isPickerOpen && pickerDropdown) {
        const selectedEl = pickerDropdown.querySelector(".is-selected");
        if (selectedEl) {
          selectedEl.scrollIntoView({ block: "nearest" });
        }
      }
    });
  }

  // Selecting a specific week/vacation/session from the dropdown
  if (pickerDropdown) {
    pickerDropdown.addEventListener("click", (e) => {
      const opt = e.target.closest(".period-option");
      if (!opt) return;
      const newIdx = Number(opt.getAttribute("data-period-index"));
      state.isPickerOpen = false;
      if (!Number.isNaN(newIdx) && newIdx !== state.selectedPeriodIndex) {
        const dir = newIdx > state.selectedPeriodIndex ? "next" : "prev";
        state.selectedPeriodIndex = newIdx;
        state.selectedDayIndex = dir === "next" ? 1 : 5;
        renderAll(dir, true);
      } else {
        renderHeaderAndNav();
      }
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      state.isPickerOpen &&
      weekNavigatorWrap &&
      !weekNavigatorWrap.contains(e.target)
    ) {
      state.isPickerOpen = false;
      renderHeaderAndNav();
    }
  });

  // Top Mode Switcher: Schedule (Weeks 1-14) vs Examene (18 Jan - 7 Feb)
  const tabModeSchedule = document.getElementById("tabModeSchedule");
  const tabModeExams = document.getElementById("tabModeExams");

  if (tabModeSchedule) {
    tabModeSchedule.addEventListener("click", () => {
      const periods = getPeriods();
      if (periods[state.selectedPeriodIndex]?.type === "exams") {
        state.selectedPeriodIndex = state.lastStudyPeriodIndex ?? 5;
        state.isPickerOpen = false;
        renderAll("prev", true);
      }
    });
  }

  if (tabModeExams) {
    tabModeExams.addEventListener("click", () => {
      const periods = getPeriods();
      const examsIdx = periods.findIndex((p) => p.type === "exams");
      if (examsIdx !== -1 && state.selectedPeriodIndex !== examsIdx) {
        state.selectedPeriodIndex = examsIdx;
        state.isPickerOpen = false;
        renderAll("next", true);
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

  // Touch swipe gestures on the schedule area
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

  // Keyboard left/right arrow navigation on desktop
  window.addEventListener("keydown", (e) => {
    if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) {
      return;
    }
    if (e.key === "ArrowRight") {
      stepDayForward();
    } else if (e.key === "ArrowLeft") {
      stepDayBackward();
    } else if (e.key === "Escape" && state.isPickerOpen) {
      state.isPickerOpen = false;
      renderHeaderAndNav();
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

  setInterval(tickClockAndLiveTimers, 1000);
}

document.addEventListener("DOMContentLoaded", initApp);
