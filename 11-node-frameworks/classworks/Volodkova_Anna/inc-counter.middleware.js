const incCounter = (ctx, next) => {
  ctx.session.count = ctx.session.count || 0;
  ctx.session.count++;
  next();
};


module.exports = incCounter;
