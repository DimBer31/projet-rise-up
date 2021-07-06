const utils = require("../src/utils");
const express = require("express");
const path = require("path");

module.exports = app => {
  app.get("/steps", (req, res) => {
    const data = utils.getData().map(item => {
      const { trainingId, stepId, stepName, stepType } = item;
      return { trainingId, stepId, stepName, stepType };
    });
    return res.json(data);
  });

  app.get("/steps/:id", (req, res) => {
    const step = utils.getData().find(item => item.stepId == req.params.id);
    if (!step)
      return res.status(404).send({
        message: "Step not found"
      });
    return res.json({
      content: step.stepContent,
      stepType : step.stepType,
      stepName: step.stepName
    });
  });

  app.get("/training/:id", (req, res) => {
    const training = utils.getTrainingData().find(item => item.trainingId == req.params.id);
    if (!training)
      return res.status(404).send({
        message: "Training not found"
      });
   
    const trainingContent = utils.getData().find(item => item.trainingId == req.params.id);
    if (!trainingContent)
      return res.status(404).send({
        message: "Training content not found"
      });
     return res.json({
      trainingInfo: training,
      content: trainingContent
    });
  });

  app.get("/trainings", (req, res) => {
    const data = utils.getTrainingData().map(item => {
      const { trainingId, trainingTitle, trainingType } = item;
      return { trainingId, trainingTitle, trainingType };
    });
    return res.json(data);
  });

  app.use("/images", express.static(path.join(__dirname, "../public/images")));
};
