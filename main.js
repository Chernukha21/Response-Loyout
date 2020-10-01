function testDateTime(a, b) {
    var x = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var date1 = new Date(a);
    var date2 = new Date(b);
    if (date1 > date2){
        return(x[date1.getDay()]);
    }else{
        return(x[date2.getDay()]);
    }
}