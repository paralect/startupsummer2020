const mongoose = require('mongoose');
const User = mongoose.model('User');
const Article = mongoose.model('Article');
const Tagline = mongoose.model('Tagline');
const Interview = mongoose.model('Interview');
const { fetchData } = require('./api');

module.exports = {
  getArticles: async (ctx) => {
    let _id = ctx.params.id
    let doc;
    if(_id) {
      doc = await Article.find({_id})
    } else {
      doc = await Article.find({})
    }
    ctx.body = doc || 'nothing was found';
  },

  createArticle: async (ctx) => {
    let phrase = ctx.request.body.data;
    if(!phrase) {
      ctx.status = 400;
      ctx.body = "You should have passed data in request"
    } else {
      const response = await fetchData(phrase, 30, 3)
      const result = response.data.replies.flat().join('')
      let articleSchema = new Article({
        description: result
      })
      try{
        let doc = await articleSchema.save();
        ctx.body = JSON.stringify(doc)
      } catch (e) {
        ctx.status = 500;
        ctx.body = JSON.stringify(e)
      }
    }
  },

  createTagline: async (ctx) => {
    let tagline = ctx.request.body.data;
    if(!tagline) {
      ctx.status = 400
      ctx.body = "You should have passed data in request"
    } else {
      const response = await fetchData(tagline, 20, 1)
      const result = response.data.replies.flat().join('')
      let taglineSchema = new Tagline({
        description: result
      })
      try{
        let doc = await taglineSchema.save();
        ctx.body = JSON.stringify(doc)
      } catch (e) {
        ctx.status = 500;
        ctx.body = JSON.stringify(e)
      }
    }
  },

  getTagline: async (ctx) => {
    let _id = ctx.params.id
    let doc;
    if(_id) {
      doc = await Tagline.find({_id})
    } else {
      doc = await Tagline.find({})
    }
    ctx.body = doc || 'nothing was found';
  },

  createInterview: async (ctx) => {
    let question = ctx.request.body.data;
    if(!question) {
      ctx.status = 400;
      ctx.body = "You should have passed data in request"
    } else {
      const response = await fetchData(question, 30, 4)
      const result = response.data.replies.flat().join('')
      let interview = new Interview({
        question: question,
        answer: result
      })
      try{
        let doc = await interview.save();
        ctx.body = JSON.stringify(doc)
      } catch (e) {
        ctx.status = 500;
        ctx.body = JSON.stringify(e)
      }
    }
  },

  getInterview: async (ctx) => {
    let _id = ctx.params.id
    let doc;
    if(_id) {
      doc = await Interview.find({_id})
    } else {
      doc = await Interview.find({})
    }
    ctx.body = doc || 'nothing was found';
  }
}
