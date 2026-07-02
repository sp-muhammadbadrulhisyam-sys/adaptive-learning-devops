const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const modules = [
{
id: 1,
title: "Computational Thinking Basics",
topic: "Decomposition",
level: "Beginner"
},
{
id: 2,
title: "Pattern Recognition",
topic: "Pattern Recognition",
level: "Intermediate"
},
{
id: 3,
title: "Algorithm Design",
topic: "Algorithm",
level: "Intermediate"
}
];
app.get("/", (req, res) => {
res.json({
message: "Adaptive Learning System API",
status: "running"
});
});
app.get("/health", (req, res) => {
res.json({
status: "ok",
service: "adaptive-learning-devops"
});
});

app.get("/api/modules", (req, res) => {
res.json({
total: modules.length,
modules
});
});
app.post("/api/quiz", (req, res) => {
const { score } = req.body;
if (score === undefined || score < 0 || score > 100) {
return res.status(400).json({
error: "Score must be between 0 and 100"
});
}
const recommendation =
score >= 70
? "Proceed to the next module"
: "Revise the current module";
return res.json({
score,
recommendation
});
});
if (require.main === module) {
app.listen(PORT, () => {
console.log(`Adaptive Learning API running on port ${PORT}`);
});
}
module.exports = app;