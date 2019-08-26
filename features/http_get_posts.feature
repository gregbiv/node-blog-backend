Feature: As a consumer of API I want to get posts
  Background:
    Given empty table "Role,User,Post"

  Scenario: Get empty posts
    When I GET /posts
    Then response code should be 200
    And response body should be valid according to openapi description PostResponse in file docs/swagger.json
    And response body path $.items should be of type array with length 0

  Scenario: Get all posts
    Given list of content in "Role" table
      | id | name  |
      | 1  | admin |
    Given list of content in "User" table
      | id | name  | email           | password                                                     | roleId |
      | 1  | admin | admin@admin.com | $2b$10$ds7sYP7mIjY7HC5wjeyoketU.mt2p27jX27/TChRpuNpGt3pLxwne | 1      |
    Given list of content in "Post" table
      | id | title | description | userId | tags      |
      | 1  | lorem | ipsum       | 1      | tag1,tag2 |
    When I GET /posts
    Then response code should be 200
    And response body should be valid according to openapi description PostResponse in file docs/swagger.json
    And response body path $.items should be of type array with length 1