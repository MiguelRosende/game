function TodoCtrl($scope) {
    $scope.todos = [
        { text: 'learn javascript', done: false },
        { text: 'learn angular', done: false },
        { text: 'play dragon nest', done: false }
    ];

    $scope.addTodo = function () {
        $scope.todos.push({ text:$scope.todoText, done: false});
        $scope.todoText = "";
    };

    $scope.removeTodo = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done)
                $scope.todos.push(todo);
        });
    };
        
}