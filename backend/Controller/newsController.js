const expressAsyncHandler = require("express-async-handler");
const News = require("../Model/NewsModel");
const { model } = require("mongoose");

const registerNews = expressAsyncHandler(async (req, res) => {
  const {
    newsHeadline,
    newsSubHeadline,
    newsContant,
    newsId,
  } = req.body;

  if (
    !newsContant ||
    !newsHeadline ||
    !newsId ||
    !newsSubHeadline
  ) {
    res.status(400);

    throw new Error("Pls all the bkock  of fieild");
  }
  const NewsExists = await News.findOne({ newsId });
  if (NewsExists) {
    res.status(400);
    throw new Error("News already Exists");
  }
  const news = await News.create({
    newsContant,
    newsHeadline,
    newsSubHeadline,
    newsId,
  });
  if (news) {
    res.status(201).json({
      _id: news._id,
      newsContant: news.newsContant,
      newsHeadline: news.newsHeadline,
      newsSubHeadline: news.newsSubHeadline,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a news");
  }
});
const authNews = expressAsyncHandler(async (req, res) => {
  const { newsId } = req.body;
  const news = await News.findOne({ newsId });

  if (news) {
    res.json({
      _id: news._id,
      newsCategory: news.newsCategory,
      newsContant: news.newsContant,
      newsHeadline: news.newsHeadline,
      newsSubHeadline: news.newsSubHeadline,
    });
  }
});
const allNews = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  7;
  const newss = await News.find(keyword);
  res.send(newss);
});

module.exports = { registerNews, authNews, allNews };
