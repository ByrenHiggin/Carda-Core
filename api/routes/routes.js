'use strict';
module.exports = function(app) {
  
    /*
        ==== Task Routing ====
    */
    var todoList = require('../tasks/controllers/taskController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
    
    /*
        ==== Case Routing ====
    */
    var caselist = require('../case/controllers/caseController');

    // todoList Routes
    app.route('/case')
        .get(caselist.get_cases)
        .post(caselist.put_case);

    app.route('/case/:caseId')
        .get(caselist.get_case)
        .put(caselist.post_case)
        .delete(caselist.delete_case);
};