var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  // expect some of values is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time
  it("spying", function () {
    spyOn(counter, "currentValues").and.returnValue(100);

    const res = sumOfValues();
    expect(res).toBe(100);
    expect(counter.currentValues).toHaveBeenCalled();
    expect(counter.currentValues).toHaveBeenCalledTimes(1);
  });
  // mock a function that takes any string and return number,
  // call it twice and expect that it is called twice
  it("mocking", function () {
    const myFunction = jasmine
      .createSpy("myFunction")
      .and.callFake(function () {
        return 50;
      });

    myFunction("call1");
    myFunction("call2");

    expect(myFunction).toHaveBeenCalled();
    expect(myFunction).toHaveBeenCalledTimes(2);

    expect(myFunction).toHaveBeenCalledWith("call1");
    expect(myFunction).toHaveBeenCalledWith("call2");
  });
});
