class Yrdy implements AsyncIterable<number> {
  i = 0;

  async *iterate(): AsyncIterableIterator<number> {
    console.log("iterate");
    while (this.i < 3) {
      this.i += 1;
      yield this.i;
    }
    yield 10;
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<number> {
    return this.iterate();
  }
}

for await (const x of new Yrdy()) {
  console.log(x);
}
