# LLM API Example

## Description

A simple LLM API example with a structured response everytime and auto retry using [Instructor](https://github.com/instructor-ai/instructor-js) and [Nest](https://github.com/nestjs/nest) framework.


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Example Request

### cURL Example
```bash
curl --location 'http://localhost:3000/insights' \
--header 'Content-Type: application/json' \
--data '{
    "website": "https://github.com/instructor-ai/instructor-js"
}'
```

### Example Request
```json
{
    "website": "https://github.com/instructor-ai/instructor-js"
}
```

### Example Response
```json
{
    "title": "Instructor-JS GitHub Repository",
    "insights": [
        "- Instructor-JS is a JavaScript library designed for building conversational AI applications.",
        "- It provides tools for creating chatbots, virtual assistants, and other AI-driven applications.",
        "- The repository contains documentation, examples, and resources for using the Instructor-JS library.",
        "- Instructor-JS is open source and available for free on GitHub."
    ],
    "_meta": {
        "usage": {
            "prompt_tokens": 71,
            "completion_tokens": 80,
            "total_tokens": 151
        }
    }
}
```