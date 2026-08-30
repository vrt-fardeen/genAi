const { GoogleGenAI}  = require("@google/genai")
const {z} = require("zod")
const {zodToJsonSchema} = require("zod-to-json-schema");


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({
    technicalQuestions: z.array(z.object({
        question : z.string().description("The technincal question can be asked in the interview"),
        intention: z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this quesion, what points to cover, what approach to take etc.")
    })).description("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question : z.string().description("The technincal question can be asked in the interview"),
        intention: z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this quesion, what points to cover, what approach to take etc.")
    })).description("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGap: z.array(z.object({
        skill: z.string().description("The skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).description("The severity of this skill gap, i.e, how important is the skill")
    })).description("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().description("The day number in the preaparation plan, starting from 1"),
        focus: z.string().description("The main focus of this day in the preparation plan, e.g. data structure, system design, mock interview etc"),
        tasks: z.array(z.string()).description("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or learn a specific topic")
    })).description("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively")

})



async function generateInterviewReport({resume, selfDescription, jobDescription}) {

}


module.exports = invokeGeminAi