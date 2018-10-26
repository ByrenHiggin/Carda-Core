'use strict';
/*
    ==== User Routing ====
*/
//Set up the mongodb model then set up the Controller
var UserRoutingTable = (app) => {
    const User = require('../user/models/userModel');
    const userlist = require('../user/controllers/userController');

    app.route('/users')
        .get(userlist.get_users)
        .post(userlist.post_user);

    app.route('/users/:UserId')
        .get(userlist.get_user)
        .put(userlist.put_user)
        .delete(userlist.delete_user);
};

/*
==== Case Routing ====
*/
//Set up the mongodb model then set up the Controller
var CaseRoutingTable = (app) => {
    const Case = require('../case/models/caseModel');
    const caselist = require('../case/controllers/caseController');

    app.route('/case')
        .get(caselist.get_cases)
        .post(caselist.post_case);
    
    app.route('/case/:casenumber')
        .get(caselist.get_case)
        .put(caselist.put_case)
        .delete(caselist.delete_case);
}

/*
==== Comment Routing ====
*/
//Set up the mongodb model then set up the Controller
var CommentRoutingTable = (app) => {
    const Comment = require('../comment/models/commentModel');
    const commentlist = require('../comment/controllers/commentController');
    
    app.route('/comment/:casenumber')
        .get(commentlist.get_comments)
        .post(commentlist.post_comment);

    app.route('/case/:casenumber/:commentid')
        .get(commentlist.get_comment)
        .put(commentlist.put_comment)
        .delete(commentlist.delete_comment);
}

var apiRoutingTable = (app) => {
    UserRoutingTable(app);
    CaseRoutingTable(app);
    CommentRoutingTable(app);
}

module.exports = apiRoutingTable
