## Tables

* **board**
    * id (primary key)
    * name
    * description

* **stage**
    * id (primary key)
    * board_id (foreign key to the `board` table)
    * title
    * order

* **task**
    * id (primary key)
    * board_id (foreign key to the `board` table)
    * stage_id (foreign key to the `stage` table)
    * title
    * description
    * due_date
    * assignee_id (foreign key to the `user` table)

* **comment**
    * id (primary key)
    * task_id (foreign key to the `task` table)
    * user_id (foreign key to the `user` table)
    * content
    * created_at

## API endpoints

**Boards**

* `GET /boards`
* `POST /boards`
* `GET /boards/:boardId`
* `PUT /boards/:boardId`
* `DELETE /boards/:boardId`

**Stages**

* `POST /boards/:boardId/stages`
* `GET /boards/:boardId/stages`
* `GET /boards/:boardId/stages/:stageId`
* `PUT /boards/:boardId/stages/:stageId`
* `DELETE /boards/:boardId/stages/:stageId`

**Tasks**

* `POST /boards/:boardId/tasks`
* `GET /boards/:boardId/tasks`
* `GET /boards/:boardId/tasks/:taskId`
* `PUT /boards/:boardId/tasks/:taskId`
* `DELETE /boards/:boardId/tasks/:taskId`

**Comments**

* `POST /tasks/:taskId/comments`
* `GET /tasks/:taskId/comments`
* `GET /tasks/:taskId/comments/:commentId`
* `PUT /tasks/:taskId/comments/:commentId`
* `DELETE /tasks/:taskId/comments/:commentId`

  ## Error handling:

I would use a combination of the following error handling strategies:

* HTTP status codes: I would use standard HTTP status codes to indicate the type of error that occurred. For example, I would use a 400 Bad Request status code if the user's request was invalid, and a 500 Internal Server Error status code if an unexpected error occurred.
* Error messages: I would include a descriptive error message in the response body to help the user understand what went wrong.
* Logging: I would log all errors to a database or file so that I can track down and resolve the root cause of the problems.
