var express = require('express');
var routes = express.Router();
var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "secret"));
var session = driver.session();

routes.get('/', function(req, res){
    // query voor de neo4j database: alle users terugkrijgen
    session.run("MATCH (n) RETURN n")
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(record._fields[0]);
                });
            })
            .catch(function(error){
                console.log(error);
            });
            res.render('index');
});

routes.get('/possiblefriends', function(req, res){
    // query voor mogelijke vrienden op basis van het liken van dezelfde artiest(en)
    session.run("MATCH(u:User {userName: req.params})-[:LIKES]->(a)<-[:LIKES]-(possiblefriends) RETURN possiblefriends.userName")
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(record._fields[0]);
                });
            })
            .catch(function(error){
                console.log(error);
            });
            res.render('index');
});

routes.get('/friends', function(req, res){
    // query voor mogelijke vrienden op basis van het liken van dezelfde artiest(en)
    session.run("MATCH (user:User {userName: req.params})-[:FRIENDS]->(friends) RETURN friends.userName")
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(record._fields[0]);
                });
            })
            .catch(function(error){
                console.log(error);
            });
            res.render('index');
});

routes.post('/makefriends', function(req, res){
    // query voor mogelijke vrienden op basis van het liken van dezelfde artiest(en)
    session.run("match(a:User {userName: req.params}),(b:User {userName: req.params}) merge(a)-[:FRIENDS]->(b)")
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(record._fields[0]);
                });
            })
            .catch(function(error){
                console.log(error);
            });
            res.render('index');
});
