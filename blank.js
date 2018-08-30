var app = new Vue({
    el: "#app1",
    data: {
        newtask: '',
        todos: [
            'Take out the trash',
            'Mow the lawn',
            'Pick up the groceries',
            'Walk the dog',
            'Eat dinner',
        ],
        finished: [],
        checked: false,
    },
    methods: {
        add: function(newtask) {
            this.todos.unshift(this.newtask);
            this.newtask = '';
        },
        remove: function(index, todo) {
            this.finished.push(todo);
            this.todos.splice(index, 1);
        },
        reinstate: function(index, item) {
            this.todos.push(item);
            this.finished.splice(index, 1);
        },
        moveup: function(index, item) {
            if (index == 0) {
                return
            }
            this.todos.splice(index - 1, 0, item);
            this.todos.splice(index + 1, 1);
        },
        movedown: function(index, item) {
            if (index == this.todos.length - 1) {
                return
            }
            this.todos.splice(index + 2, 0, item);
            this.todos.splice(index, 1);
        },
    }
})
