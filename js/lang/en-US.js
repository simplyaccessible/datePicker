var fdLocale = {
                fullMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],
                monthAbbrs:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                fullDays:  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                dayAbbrs:  ["M","T","W","T","F","S","S"],
                titles:    ["Previous month","Next month","Previous year","Next year", "Today", "Open Calendar: to navigate the calendar, use the arrow keys", "wk", "Week [[%0%]] of [[%1%]]", "Week", "Select a date", "Click \u0026 Drag to move", "Display \u201C[[%0%]]\u201D first", "Go to Today\u2019s date", "Disabled date:", "Close Calendar"],
                firstDayOfWeek:6
};
try { 
        if("datePickerController" in window) { 
                datePickerController.loadLanguage(); 
        }; 
} catch(err) {}; 
