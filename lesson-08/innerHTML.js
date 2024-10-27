var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var result = courses.map(function(course) {
        return (`<li>${course}</li>`)
    })
    result = result.join('')
    document.querySelector('ul').innerHTML = result
}

render(courses)

