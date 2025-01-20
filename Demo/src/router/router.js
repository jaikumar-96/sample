import express from "express";
import EmployeeController from "../controller/EmployeeController";
const router = express.Router();

/**
 * @swagger
 * /getAllEmployees:
 *   get:
 *     description: Get a list of employees
 *     responses:
 *       200:
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   details:
 *                     type: string
 */
router.get("/getAllEmployees", EmployeeController.getAllEmployeeDetails);

/**
 * @swagger
 * /getParticularEmployeeDetails/{id}:
 *   get:
 *     summary: Get details of a particular employee by ID
 *     description: Retrieves the details of an employee based on their unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the employee to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee details successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the employee
 *                 details:
 *                   type: string
 *                   description: The details of the employee
 *       404:
 *         description: Employee not found
 *       400:
 *         description: Invalid ID format
 */
router.get(
  "/getParticularEmployeeDetails/:id",
  EmployeeController.getParticularEmployeeDetails
);
/**
 * @swagger
 * /createEmployee:
 *   post:
 *     summary: Create a new employee
 *     description: Creates a new employee by providing their details in the request body
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the employee
 *                 example: John Doe
 *               details:
 *                 type: string
 *                 description: The details of the employee
 *                 example: Software Engineer
 *     responses:
 *       201:
 *         description: Employee successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the newly created employee
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the employee
 *                   example: John Doe
 *                 details:
 *                   type: string
 *                   description: The details of the employee
 *                   example: Software Engineer
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */
router.post("/createEmployee/", EmployeeController.createEmployee);

export default router;
