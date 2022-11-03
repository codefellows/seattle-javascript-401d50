'use strict';

const express = require('express');
const dataModules = require('../models');
const acl = require('../auth/middleware/acl.js');

const router = express.Router();

router.param('model', (req, res, next) => {
  console.log(req.params);
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/todos', acl('read'), (request, response) => {
  // JUST FOR TESTING!  Remove once a todo model is added
  response.send('In Progress');
});
router.get('/:model', acl('read'), handleGetAll);
router.get('/:model/:id', acl('read'), handleGetOne);
router.post('/:model', acl('create'), handleCreate);
router.put('/:model/:id', acl('update'), handleUpdate);
router.delete('/:model/:id', acl('delete'), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = router;
