const Joi = require('joi');

const reg = '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';

const addVideoSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  descriptionVideo: Joi.string(),
  urlVideo: Joi.string().pattern(new RegExp(reg)).required(),
  urlImage: Joi.string().pattern(new RegExp(reg)).required(),
});

module.exports = addVideoSchema;