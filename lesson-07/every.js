Array.prototype.every2 = function (cb){
    var output = true;
    var length = this.length;
    for (var i = 0; i < length; i++) {
        if (this.hasOwnProperty(i) && !cb(this[i], i, this)) {
            output = false;
            break;
        }
    }
    return output;
}

var courses = [
    {
        name: 'JS',
        coin: 50,
        isFinished: true
    },
    {
        name: 'Python',
        coin: 100,
        isFinished: true
    },
    {
        name: 'Java',
        coin: 150,
        isFinished: true
    }
]
var result = courses.every2(function(course, index, courses) {
    return course.coin >= 60;
})
console.log(result);


var result2 = courses.every((course) => course.isFinished);
console.log(result2);