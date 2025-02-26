/*! Calendar.js v2.10.11 - Thai | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "จันทร์",
        "อ",
        "พุธ",
        "พฤ",
        "ศุกร์",
        "นั่ง",
        "ดวงอาทิตย์"
    ],
    "dayNames": [
        "วันจันทร์",
        "วันอังคาร",
        "วันพุธ",
        "วันพฤหัสบดี",
        "วันศุกร์",
        "วันเสาร์",
        "วันอาทิตย์"
    ],
    "dayNamesAbbreviated": [
        "จันทร์",
        "อ",
        "พุธ",
        "พฤ",
        "ศุกร์",
        "นั่ง",
        "ดวงอาทิตย์"
    ],
    "monthNames": [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "อาจ",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม"
    ],
    "monthNamesAbbreviated": [
        "ม.ค",
        "ก.พ",
        "มี.ค",
        "เม.ย",
        "อาจ",
        "มิ.ย",
        "ก.ค",
        "ส.ค",
        "ก.ย",
        "ต.ค",
        "พ.ย",
        "ธ.ค"
    ],
    "previousMonthTooltipText": "เดือนที่แล้ว",
    "nextMonthTooltipText": "เดือนหน้า",
    "previousDayTooltipText": "วันก่อน",
    "nextDayTooltipText": "วันถัดไป",
    "previousWeekTooltipText": "สัปดาห์ก่อน",
    "nextWeekTooltipText": "สัปดาห์หน้า",
    "addEventTooltipText": "เพิ่มเหตุการณ์",
    "closeTooltipText": "ปิด",
    "exportEventsTooltipText": "ส่งออกกิจกรรม",
    "todayTooltipText": "วันนี้",
    "refreshTooltipText": "รีเฟรช",
    "searchTooltipText": "ค้นหา",
    "expandDayTooltipText": "ขยายวัน",
    "viewAllEventsTooltipText": "ดูกิจกรรมทั้งหมด",
    "viewFullWeekTooltipText": "ดูทั้งสัปดาห์",
    "fromText": "จาก:",
    "toText": "ถึง:",
    "isAllDayText": "เป็นทั้งวัน",
    "titleText": "ชื่อ:",
    "descriptionText": "คำอธิบาย:",
    "locationText": "ที่ตั้ง:",
    "addText": "เพิ่ม",
    "updateText": "อัปเดต",
    "cancelText": "ยกเลิก",
    "removeEventText": "ลบ",
    "addEventTitle": "เพิ่มเหตุการณ์",
    "editEventTitle": "แก้ไขกิจกรรม",
    "exportStartFilename": "ส่งออก_เหตุการณ์_",
    "fromTimeErrorMessage": "โปรดเลือกเวลา 'เริ่มต้น' ที่ถูกต้อง",
    "toTimeErrorMessage": "โปรดเลือกเวลา 'ถึง' ที่ถูกต้อง",
    "toSmallerThanFromErrorMessage": "โปรดเลือกวันที่ 'ถึง' ที่ใหญ่กว่าวันที่ 'เริ่มต้น'",
    "titleErrorMessage": "โปรดป้อนค่าในช่อง 'ชื่อเรื่อง' (ไม่มีช่องว่าง)",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "ใช่",
    "noText": "เลขที่",
    "allDayText": "ทั้งวัน",
    "allEventsText": "กิจกรรมทั้งหมด",
    "toTimeText": "ถึง",
    "confirmEventRemoveTitle": "ยืนยันการลบกิจกรรม",
    "confirmEventRemoveMessage": "การนำกิจกรรมนี้ออกไม่สามารถยกเลิกได้ ",
    "okText": "ตกลง",
    "exportEventsTitle": "ส่งออกกิจกรรม",
    "selectColorsText": "เลือกสี",
    "backgroundColorText": "สีพื้นหลัง:",
    "textColorText": "สีข้อความ:",
    "borderColorText": "สีขอบ:",
    "searchEventsTitle": "ค้นหากิจกรรม",
    "previousText": "ก่อนหน้า",
    "nextText": "ต่อไป",
    "matchCaseText": "กรณีการแข่งขัน",
    "repeatsText": "ซ้ำ:",
    "repeatDaysToExcludeText": "ทำซ้ำวันเพื่อไม่รวม:",
    "daysToExcludeText": "วันที่จะไม่รวม:",
    "seriesIgnoreDatesText": "ซีรีส์ไม่สนใจวันที่:",
    "repeatsNever": "ไม่เคย",
    "repeatsEveryDayText": "ทุกวัน",
    "repeatsEveryWeekText": "ทุกสัปดาห์",
    "repeatsEvery2WeeksText": "ทุก 2 สัปดาห์",
    "repeatsEveryMonthText": "ทุกๆเดือน",
    "repeatsEveryYearText": "ทุกปี",
    "repeatsCustomText": "กำหนดเอง:",
    "repeatOptionsTitle": "ทำซ้ำตัวเลือก",
    "moreText": "มากกว่า",
    "includeText": "รวม:",
    "minimizedTooltipText": "ย่อเล็กสุด",
    "restoreTooltipText": "คืนค่า",
    "removeAllEventsInSeriesText": "ลบเหตุการณ์ทั้งหมดในซีรีส์",
    "createdText": "สร้าง:",
    "organizerNameText": "ผู้จัดงาน:",
    "organizerEmailAddressText": "อีเมล์ผู้จัดงาน:",
    "enableFullScreenTooltipText": "เปิดโหมดเต็มหน้าจอ",
    "disableFullScreenTooltipText": "ปิดโหมดเต็มหน้าจอ",
    "idText": "รหัส:",
    "expandMonthTooltipText": "ขยายเดือน",
    "repeatEndsText": "สิ้นสุดการทำซ้ำ:",
    "noEventsAvailableText": "ไม่มีงานกิจกรรม",
    "viewFullWeekText": "ดูทั้งสัปดาห์",
    "noEventsAvailableFullText": "ไม่มีกิจกรรมให้ดู",
    "clickText": "คลิก",
    "hereText": "ที่นี่",
    "toAddANewEventText": "เพื่อเพิ่มกิจกรรมใหม่",
    "weekText": "สัปดาห์",
    "groupText": "กลุ่ม:",
    "configurationTooltipText": "การกำหนดค่า",
    "configurationTitleText": "การกำหนดค่า",
    "groupsText": "กลุ่ม",
    "eventNotificationTitle": "ปฏิทิน.js",
    "eventNotificationBody": "กิจกรรม '{0}' ได้เริ่มต้นแล้ว",
    "optionsText": "ตัวเลือก:",
    "startsWithText": "เริ่มต้นด้วย",
    "endsWithText": "ลงท้ายด้วย",
    "containsText": "ประกอบด้วย",
    "displayTabText": "แสดง",
    "enableAutoRefreshForEventsText": "เปิดใช้งานการรีเฟรชอัตโนมัติสำหรับกิจกรรม",
    "enableBrowserNotificationsText": "เปิดใช้งานการแจ้งเตือนของเบราว์เซอร์",
    "enableTooltipsText": "เปิดใช้งานคำแนะนำเครื่องมือ",
    "dayText": "วัน",
    "daysText": "วัน",
    "hourText": "ชั่วโมง",
    "hoursText": "ชั่วโมง",
    "minuteText": "นาที",
    "minutesText": "นาที",
    "enableDragAndDropForEventText": "เปิดใช้งานการลาก",
    "organizerTabText": "ออแกไนเซอร์",
    "removeEventsTooltipText": "ลบกิจกรรม",
    "confirmEventsRemoveTitle": "ยืนยันการลบกิจกรรม",
    "confirmEventsRemoveMessage": "การลบกิจกรรมที่ไม่เกิดซ้ำเหล่านี้ไม่สามารถยกเลิกได้ ",
    "eventText": "เหตุการณ์",
    "optionalText": "ไม่จำเป็น",
    "urlText": "URL:",
    "openUrlText": "เปิด URL",
    "thisWeekTooltipText": "ในสัปดาห์นี้",
    "dailyText": "รายวัน",
    "weeklyText": "รายสัปดาห์",
    "monthlyText": "รายเดือน",
    "yearlyText": "เป็นประจำทุกปี",
    "repeatsByCustomSettingsText": "โดยการตั้งค่าแบบกำหนดเอง",
    "lastUpdatedText": "อัปเดตล่าสุด:",
    "advancedText": "ขั้นสูง",
    "copyText": "สำเนา",
    "pasteText": "แปะ",
    "duplicateText": "ทำซ้ำ",
    "showAlertsText": "แสดงการแจ้งเตือน",
    "selectDatePlaceholderText": "เลือกวันที่...",
    "hideDayText": "ซ่อนวัน",
    "notSearchText": "ไม่ใช่ (ตรงกันข้าม)",
    "showHolidaysInTheDisplaysText": "แสดงวันหยุดในจอแสดงผลหลักและแถบชื่อเรื่อง",
    "newEventDefaultTitle": "* กิจกรรมใหม่",
    "urlErrorMessage": "โปรดป้อน URL ที่ถูกต้องในช่อง 'Url' (หรือเว้นว่างไว้)",
    "searchTextBoxPlaceholder": "ค้นหาชื่อ คำอธิบาย ฯลฯ...",
    "currentMonthTooltipText": "เดือนนี้",
    "cutText": "ตัด",
    "showMenuTooltipText": "แสดงเมนู",
    "eventTypesText": "ประเภทเหตุการณ์",
    "lockedText": "ล็อค:",
    "typeText": "พิมพ์:",
    "sideMenuHeaderText": "ปฏิทิน.js",
    "sideMenuDaysText": "วัน",
    "visibleDaysText": "วันที่มองเห็นได้",
    "previousYearTooltipText": "ปีก่อน",
    "nextYearTooltipText": "ปีหน้า",
    "showOnlyWorkingDaysText": "แสดงเฉพาะวันทำการ",
    "exportFilenamePlaceholderText": "ชื่อ (ไม่บังคับ)",
    "errorText": "ข้อผิดพลาด",
    "exportText": "ส่งออก",
    "configurationUpdatedText": "อัปเดตการกำหนดค่าแล้ว",
    "eventAddedText": "เพิ่มกิจกรรมแล้ว {0} รายการ",
    "eventUpdatedText": "อัปเดตกิจกรรม {0} แล้ว",
    "eventRemovedText": "ลบกิจกรรม {0} แล้ว",
    "eventsRemovedText": "ลบกิจกรรม {0} รายการแล้ว",
    "eventsExportedToText": "กิจกรรมที่ส่งออกไปยัง {0}",
    "eventsPastedText": "วางแล้ว {0} กิจกรรม",
    "eventsExportedText": "ส่งออกกิจกรรมแล้ว",
    "copyToClipboardOnlyText": "คัดลอกไปที่คลิปบอร์ดเท่านั้น",
    "workingDaysText": "วันทำงาน",
    "weekendDaysText": "วันหยุดสุดสัปดาห์",
    "showAsBusyText": "แสดงเป็นไม่ว่าง",
    "selectAllText": "เลือกทั้งหมด",
    "selectNoneText": "เลือกไม่มี",
    "importEventsTooltipText": "นำเข้ากิจกรรม",
    "eventsImportedText": "นำเข้ากิจกรรม {0} รายการแล้ว",
    "viewFullYearTooltipText": "ดูทั้งปี",
    "currentYearTooltipText": "ปีนี้",
    "alertOffsetText": "ออฟเซ็ตการแจ้งเตือน (นาที):",
    "viewFullDayTooltipText": "ดูแบบเต็มวัน",
    "confirmEventUpdateTitle": "ยืนยันการอัปเดตกิจกรรม",
    "confirmEventUpdateMessage": "คุณต้องการอัปเดตกิจกรรมตั้งแต่บัดนี้เป็นต้นไปหรือทั้งซีรีส์",
    "forwardText": "ซึ่งไปข้างหน้า",
    "seriesText": "ชุด",
    "viewTimelineTooltipText": "ดูไทม์ไลน์",
    "nextPropertyTooltipText": "คุณสมบัติถัดไป",
    "noneText": "(ไม่มี)",
    "shareText": "แบ่งปัน",
    "shareStartFilename": "shared_events_",
    "previousPropertyTooltipText": "คุณสมบัติก่อนหน้า",
    "jumpToDateTitle": "ข้ามไปยังวันที่",
    "goText": "ไป"
};