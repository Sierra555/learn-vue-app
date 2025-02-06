const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const axios = require('axios');

app.post('/generate-task', async (request, response) => {
  const { taskType, taskLevel } = request.body;
  if (!taskType || !taskLevel) {
    return response.status(400).send({
      success: false,
      message: 'Task type and task level are required.',
    });
  }
  const prompt = getPrompt(taskType, taskLevel);

  try {
    const axiosRes = await axios.post(
      'https://chatgpt-vision1.p.rapidapi.com/gpt4',
      {
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful tutor specializing in Vue.js 3.' },
          {
            role: 'user',
            content: prompt
          }
        ],
      },
      {
        headers: {
          'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
          'x-rapidapi-host': 'chatgpt-vision1.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      }
    );
  response.send({
    task: axiosRes.data.result, 
    success: true,
    message: 'Success',
  });
  } catch (error) {
    response.send({
      success: false,
      message: `Error in fetching data from AI: ${error.message}`,
    });
  }

});

function getPrompt(taskType, taskLevel) {
  switch (taskType) {
    case 'logic':
      return `Create a Vue.js 3 logic puzzle that requires problem-solving skills. Difficulty: ${taskLevel}.
          Include:
          - A problem statement describing a tricky Vue.js behavior.
          - A Vue.js code snippet demonstrating the issue. 
          - Use <pre><code></code></pre> to insert code and highlight it.
          - Use font bold for important text.
          - A question asking the user to analyze or predict the outcome.
          - The correct answer with an explanation.
          Ensure the puzzle is thought-provoking and not a simple quiz question.
        .`;
    case 'algorithm':
      return `Generate an algorithmic task related to Vue.js 3 Difficulty: ${taskLevel}.
        Include:
          - Use <pre><code></code></pre> to insert code and highlight it.
          - A problem statement.
          - A Vue.js function or method that the user needs to complete.
          - Example input and expected output.
          - The correct solution.
          Ensure the task is practical and relevant to Vue development.`;
    case 'quiz':
      return `Generate a multiple-choice quiz question about Vue.js 3:
          Difficulty: ${taskLevel}. 
        - Use <pre><code></code></pre> to insert code and highlight it.
        - Provide a specific Vue.js-related question.
        - List four answer options, each on a new line! Don't highlight the correct answer.
        - Indicate the correct answer.
        - Include a brief explanation of the correct answer.
        - Avoid generic questions—focus on real-world Vue concepts.`;
    case 'bug':
      return `Generate a Vue.js 3 code snippet with a bug.
          Difficulty: ${taskLevel}.
        - Describe the problem.
        - Provide a faulty Vue.js code snippet.          
        - Use <pre><code></code></pre> to insert code and highlight it.
        - Ask the user to identify and fix the bug.
        - Provide the correct solution with an explanation.
        Make sure the bug is subtle and requires knowledge of Vue concepts to fix.
        `;
    default:
      return 'Generate a simple coding task.';
  }
}

port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log('Server is running on port 5002');
});