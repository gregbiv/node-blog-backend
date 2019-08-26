#Feature: As a consumer of API I want to get posts
#  Background:
#    Given empty table "Post,User,Role"
#    Then list of content in "Role" table
#      | id | name  |
#      | 1  | admin |
#    Then list of content in "User" table
#      | id | name  | email           | password | roleId |
#      | 1  | admin | admin@admin.com | test     | 1      |
#
#  Scenario: Successfully authorized
#    Given I set Content-Type header to application/json
#    Given I set body to {"email": "admin@admin.com", "password": "test"}
#    When I POST to /user/login
#    Then response code should be 200
#    And response body should be valid according to openapi description LoginResponse in file docs/swagger.json
#    And response body path $.token should not be empty
