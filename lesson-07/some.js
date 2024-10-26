Array.prototype.some2 = function (cb){
    var output = false;
    var length = this.length;
    for (var i = 0; i < length; i++) {
        if (this.hasOwnProperty(i) && cb(this[i], i, this)) {
            output = true;
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
        isFinished: false
    },
    {
        name: 'Java',
        coin: 150,
        isFinished: false
    }
]
var result = courses.some2(function(course, index, courses) {
    return course.isFinished;
})
console.log(result);


var result2 = courses.some((course) => course.isFinished);
console.log(result2);