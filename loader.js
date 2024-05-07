module.exports = function (code) {
  console.log("this.data", this.data);
  return code;
};

module.exports.pitch = function (_a, _b, data) {
  data.foo = "bar";
};
