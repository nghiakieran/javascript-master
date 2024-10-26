Array.prototype.filter2 = function (cb){
    var length = this.length;
    var output = [];
    for (var i = 0; i < length; i++) {
        if (this.hasOwnProperty(i) && cb(this[i], i, this)) {
            output.push(this[i]);
        }
    }
    return output;
}

var courses = [
    {
        name: 'JS',
        coin: 50
    },
    {
        name: 'Python',
        coin: 100
    },
    {
        name: 'Java',
        coin: 150
    }
]
var result = courses.filter2(function(course, index, courses) {
    return course.coin >= 100;
})
console.log(result);


var result2 = courses.filter((course) => course.coin >= 100);
console.log(result2);