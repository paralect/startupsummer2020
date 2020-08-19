function updateCount() {
  const { session } = this;
  session.count = session.count || 0;
  session.count += 1;
}

async function counter(ctx, next) {
  updateCount.call(ctx);
  await next();
}

module.exports = counter;
