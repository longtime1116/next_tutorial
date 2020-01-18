export default (req, res) => {
  const { author } = req.query;
  res.status(200).json({
    quote: "Write tests, not too many, mostly integration",
    author: author || "Guillermo Ranch"
  });
};
